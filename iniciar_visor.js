/**
 * INICIAR VISOR DE TEMAS - APRENDER
 * 
 * Este script inicia un servidor web local y abre el visor de lecciones interactivo en tu navegador.
 * No requiere instalar ninguna dependencia (npm), ya que utiliza módulos nativos de Node.js.
 * 
 * Para ejecutar: node iniciar_visor.js
 */

const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const BASE_DIR = __dirname;
const INITIAL_PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const IS_PRODUCTION = !!process.env.PORT;
const NOTES_DIR = path.join(BASE_DIR, 'notas');
const SCRATCH_DIR = path.join(BASE_DIR, 'scratch');
const CSHARP_DIR = path.join(SCRATCH_DIR, 'csharp_scratch');

// Asegurar que existan las carpetas de trabajo
if (!fs.existsSync(NOTES_DIR)) {
    fs.mkdirSync(NOTES_DIR);
}
if (!fs.existsSync(SCRATCH_DIR)) {
    fs.mkdirSync(SCRATCH_DIR);
}

// Escanea el directorio buscando carpetas que contengan temas (ej: tema1, tema2, etc)
function obtenerEstructuraTemas() {
    const estructura = {};
    try {
        const elementosRaiz = fs.readdirSync(BASE_DIR, { withFileTypes: true });
        
        // Filtrar solo carpetas que empiecen con "tema"
        const carpetasTemas = elementosRaiz
            .filter(item => item.isDirectory() && /^tema/i.test(item.name))
            .map(item => item.name)
            .sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

        for (const carpeta of carpetasTemas) {
            const rutaCarpeta = path.join(BASE_DIR, carpeta);
            const archivos = fs.readdirSync(rutaCarpeta, { withFileTypes: true });
            
            // Filtrar solo archivos .md (ignorando carpetas de prácticas u otros subdirectorios)
            const archivosMd = archivos
                .filter(file => file.isFile() && /\.md$/i.test(file.name))
                .map(file => ({
                    name: file.name,
                    path: path.relative(BASE_DIR, path.join(rutaCarpeta, file.name)).replace(/\\/g, '/')
                }))
                // Ordenar alfabéticamente/numéricamente (ej: 1_sintaxis, 2_variables...)
                .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));

            if (archivosMd.length > 0) {
                estructura[carpeta] = archivosMd;
            }
        }
    } catch (error) {
        console.error("Error al escanear los directorios:", error);
    }
    return estructura;
}

// Crea el servidor HTTP
const server = http.createServer((req, res) => {
    const urlParsed = new URL(req.url, `http://${req.headers.host}`);
    const pathname = urlParsed.pathname;

    // Ruta 1: Interfaz Principal
    if (pathname === '/' || pathname === '/index.html') {
        const templatePath = path.join(BASE_DIR, 'visor_plantilla.html');
        fs.readFile(templatePath, 'utf8', (err, content) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end("Error al cargar la plantilla del visor. Asegúrate de que 'visor_plantilla.html' exista en la carpeta.");
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(content);
        });
        return;
    }

    // Ruta 2: API que devuelve la estructura de temas y archivos
    if (pathname === '/api/estructura') {
        const estructura = obtenerEstructuraTemas();
        res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
        res.end(JSON.stringify(estructura));
        return;
    }

    // Ruta 3: API que lee y sirve un archivo .md específico
    if (pathname === '/api/archivo') {
        const rutaRelativa = urlParsed.searchParams.get('ruta');
        if (!rutaRelativa) {
            res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end("Falta el parámetro 'ruta'.");
            return;
        }

        // Validación de Seguridad: Prevenir Directory Traversal (que lean carpetas del sistema fuera del curso)
        const rutaAbsoluta = path.resolve(BASE_DIR, rutaRelativa);
        if (!rutaAbsoluta.startsWith(BASE_DIR)) {
            res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end("Acceso denegado. No puedes salir del directorio base.");
            return;
        }

        fs.readFile(rutaAbsoluta, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end("Archivo no encontrado.");
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/markdown; charset=utf-8' });
            res.end(data);
        });
        return;
    }

    // Ruta 4: API de Notas (GET, POST, DELETE)
    if (pathname === '/api/notas') {
        if (req.method === 'GET') {
            try {
                const archivos = fs.readdirSync(NOTES_DIR);
                const notas = archivos
                    .filter(file => file.endsWith('.json'))
                    .map(file => {
                        const contenido = fs.readFileSync(path.join(NOTES_DIR, file), 'utf8');
                        return JSON.parse(contenido);
                    })
                    .sort((a, b) => new Date(b.date) - new Date(a.date));

                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify(notas));
            } catch (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end("Error al obtener las notas.");
            }
            return;
        }

        if (req.method === 'POST') {
            let body = '';
            req.on('data', chunk => { body += chunk; });
            req.on('end', () => {
                try {
                    const nota = JSON.parse(body);
                    const id = Date.now().toString() + '_' + Math.random().toString(36).substring(2, 7);
                    nota.id = id;
                    nota.date = new Date().toISOString();
                    fs.writeFileSync(path.join(NOTES_DIR, `${id}.json`), JSON.stringify(nota, null, 2), 'utf8');
                    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                    res.end(JSON.stringify({ success: true, nota }));
                } catch (e) {
                    res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
                    res.end("Cuerpo JSON inválido.");
                }
            });
            return;
        }

        if (req.method === 'DELETE') {
            const id = urlParsed.searchParams.get('id');
            if (!id) {
                res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end("Falta el parámetro 'id'.");
                return;
            }
            const cleanId = path.basename(id, '.json');
            const notaPath = path.join(NOTES_DIR, `${cleanId}.json`);
            if (fs.existsSync(notaPath)) {
                fs.unlinkSync(notaPath);
                res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ success: true }));
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
                res.end("Nota no encontrada.");
            }
            return;
        }
    }

    // Ruta 5: API de Ejecución de Código (Java / C#)
    if (pathname === '/api/ejecutar') {
            if (IS_PRODUCTION) {
                res.writeHead(403, { 'Content-Type': 'application/json; charset=utf-8' });
                res.end(JSON.stringify({ error: "La ejecución de Java y C# solo está disponible localmente." }));
                return;
            }

            if (req.method === 'POST') {
                let body = '';
                req.on('data', chunk => { body += chunk; });
                req.on('end', () => {
                    try {
                        const data = JSON.parse(body);
                        const { lenguaje, codigo } = data;

                        if (!lenguaje || !codigo) {
                            res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
                            res.end("Faltan parámetros 'lenguaje' o 'codigo'.");
                            return;
                        }

                        ejecutarCodigoLocal(lenguaje, codigo, (err, stdout, stderr) => {
                            res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
                            res.end(JSON.stringify({
                                success: !err,
                                error: err ? err.message : null,
                                stdout: stdout,
                                stderr: stderr
                            }));
                        });
                    } catch (e) {
                        res.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
                        res.end("Cuerpo JSON inválido.");
                    }
                });
                return;
            }
        }

    // Cualquier otra ruta no manejada
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end("404 No encontrado.");
});

// Función auxiliar para compilar/ejecutar C# o Java de forma local y segura
function ejecutarCodigoLocal(lenguaje, codigo, callback) {
    if (lenguaje === 'java') {
        const match = codigo.match(/(?:public\s+)?class\s+([A-Za-z0-9_]+)/);
        const className = match ? match[1] : 'TempClass';
        const javaFile = path.join(SCRATCH_DIR, `${className}.java`);
        
        fs.writeFile(javaFile, codigo, 'utf8', (err) => {
            if (err) return callback(err);
            
            exec(`java "${javaFile}"`, { timeout: 5000 }, (execErr, stdout, stderr) => {
                // Limpieza del archivo .java
                fs.unlink(javaFile, () => {});
                callback(execErr, stdout, stderr);
            });
        });
    } else if (lenguaje === 'csharp') {
        initializeCsharpProject((initErr) => {
            if (initErr) {
                return callback(initErr, "", "Error al inicializar el entorno local de C#.");
            }
            
            const programFile = path.join(CSHARP_DIR, 'Program.cs');
            fs.writeFile(programFile, codigo, 'utf8', (err) => {
                if (err) return callback(err);
                
                exec('dotnet run', { cwd: CSHARP_DIR, timeout: 5000 }, (execErr, stdout, stderr) => {
                    callback(execErr, stdout, stderr);
                });
            });
        });
    } else {
        callback(new Error(`Lenguaje '${lenguaje}' no soportado para ejecución local.`));
    }
}

// Inicializa el proyecto C# temporal
function initializeCsharpProject(callback) {
    const csprojPath = path.join(CSHARP_DIR, 'csharp_scratch.csproj');
    if (fs.existsSync(csprojPath)) {
        return callback(null);
    }
    
    if (!fs.existsSync(CSHARP_DIR)) {
        fs.mkdirSync(CSHARP_DIR, { recursive: true });
    }
    
    console.log("Inicializando proyecto C# temporal para el Playground...");
    exec('dotnet new console --force', { cwd: CSHARP_DIR }, (err) => {
        if (err) {
            console.error("Error al inicializar proyecto C#:", err);
        } else {
            console.log("Proyecto C# inicializado con éxito.");
        }
        callback(err);
    });
}

// Función para iniciar el servidor buscando un puerto libre
function escuchar(port) {
    server.listen(port, () => {
        const url = `http://localhost:${port}`;
        console.log(`\n======================================================`);
        console.log(`🚀 Visor activo y ejecutándose en: ${url}`);
        console.log(`📁 Directorio base: ${BASE_DIR}`);
        console.log(`Presiona Ctrl + C para detener el servidor.`);
        console.log(`======================================================\n`);

        // Solo abre el navegador automáticamente si no estamos en producción
        if (!IS_PRODUCTION) {
            let comandoAbrir;
            if (process.platform === 'win32') {
                comandoAbrir = `start ${url}`;
            } else if (process.platform === 'darwin') {
                comandoAbrir = `open ${url}`;
            } else {
                comandoAbrir = `xdg-open ${url}`;
            }

            exec(comandoAbrir, (err) => {
                if (err) {
                    console.log(`Por favor, abre manualmente tu navegador e ingresa a: ${url}`);
                }
            });
        }
    });

    server.on('error', (err) => {
        if (err.code === 'EADDRINUSE' && !IS_PRODUCTION) {
            console.log(`El puerto ${port} está ocupado. Probando el puerto ${port + 1}...`);
            escuchar(port + 1);
        } else {
            console.error("Error en el servidor:", err);
            process.exit(1);
        }
    });
}

// Iniciar
escuchar(INITIAL_PORT);
