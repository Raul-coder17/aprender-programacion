# Guía de Control de Versiones con Git y GitHub

Esta guía contiene los conceptos, flujos de trabajo y comandos esenciales para controlar versiones de tus proyectos con Git y sincronizarlos con GitHub.

---

## 1. Configuración Inicial
Antes de empezar a usar Git por primera vez en tu computadora, debes configurar tu nombre y dirección de correo electrónico. Esto identificará quién realizó cada cambio (commit).

```bash
# Configurar tu nombre globalmente
git config --global user.name "Tu Nombre"

# Configurar tu correo globalmente (usa el mismo que tienes en GitHub)
git config --global user.email "tu-email@ejemplo.com"

# Verificar tu configuración
git config --list
```

---

## 2. Iniciar un Repositorio
Para que Git comience a registrar los cambios de una carpeta local:

1. Abre tu terminal en la carpeta del proyecto.
2. Inicializa el repositorio con:
   ```bash
   git init
   ```
   *Esto creará una carpeta oculta `.git` que almacena todo el historial de cambios.*

---

## 3. Preparar y Guardar Cambios (El Flujo Diario)
El ciclo básico para guardar tus avances consiste en tres estados:

```
  Directorio de Trabajo  --->     Área de Preparación     --->        Historial Local
   (Archivos editados)         (Staging Area / Preparados)         (Commits / Confirmados)
           |                                |                                 |
           | -------- git add ------------> |                                 |
           |                                | -------- git commit -m -------->|
```

### Paso A: Revisar el estado de tus archivos
```bash
git status
```
*Te mostrará qué archivos han sido modificados, cuáles están listos para guardarse (en verde) y cuáles aún no se han preparado (en rojo).*

### Paso B: Preparar los archivos (`git add`)
Antes de guardar, debes seleccionar qué cambios quieres incluir en tu próximo commit.
```bash
# Preparar un archivo específico
git add visor_plantilla.html

# Preparar todos los archivos modificados y nuevos del directorio actual
git add .
```

### Paso C: Confirmar los cambios (`git commit`)
Crea una "foto" o punto de control en el historial con un mensaje descriptivo de lo que hiciste.
```bash
git commit -m "Mejora: Agregar auto-indentación al presionar Enter en el Playground"
```
> [!TIP]
> Escribe mensajes claros y breves en imperativo o presente (ej. "Corrige error de sintaxis en el visor" o "Agrega documentación de Git").

---

## 4. Trabajar con GitHub (Sincronizar Remoto)
Para respaldar tu historial local en la nube (GitHub):

### Vincular un repositorio remoto por primera vez
```bash
# Vincular tu repositorio local con uno creado en GitHub
git remote add origin https://github.com/TuUsuario/nombre-del-repositorio.git

# Renombrar la rama principal a "main" (estándar actual)
git branch -M main
```

### Subir tus cambios a GitHub (`git push`)
```bash
# La primera vez (establece la rama por defecto)
git push -u origin main

# En las siguientes ocasiones, basta con ejecutar:
git push
```

### Descargar cambios desde GitHub (`git pull` o `git clone`)
```bash
# Si vas a empezar a trabajar en un proyecto ya existente en GitHub
git clone https://github.com/TuUsuario/nombre-del-repositorio.git

# Si ya tienes el proyecto y quieres descargar los últimos cambios de la nube
git pull origin main
```

---

## 5. Historial y Visualización
Para ver qué cambios se han guardado a lo largo del tiempo:

```bash
# Mostrar el historial completo de commits
git log

# Mostrar el historial de manera compacta y visual (una sola línea por commit)
git log --oneline --graph --all

# Ver qué líneas específicas cambiaron en tus archivos modificados antes de hacer git add
git diff
```

---

## 6. Deshacer Cambios y Volver al Pasado
Git brilla por su capacidad de recuperar versiones anteriores de tu código si algo sale mal.

### A. Deshacer cambios locales no guardados (sin commit)
Si modificaste un archivo y quieres revertirlo a cómo estaba en el último commit:
```bash
# Descartar cambios de un archivo específico
git restore nombre_archivo.ext

# Descartar todos los cambios locales no guardados del directorio actual
git restore .
```
> [!CAUTION]
> Este comando es destructivo: los cambios locales no confirmados se perderán permanentemente.

### B. Deshacer un `git add` (sacar del área de preparación)
Si preparaste un archivo por error pero aún no has hecho el commit:
```bash
git restore --staged nombre_archivo.ext
```

### C. Modificar el último commit realizado
Si cometiste un error en el mensaje de tu último commit o se te olvidó agregar un archivo:
```bash
# Agrega el archivo olvidado con git add primero, y luego ejecuta:
git commit --amend -m "Nuevo mensaje corregido del commit"
```

### D. Viajar temporalmente al pasado (modo lectura)
Si quieres explorar cómo estaba el código en un commit específico sin destruir el presente:
1. Encuentra el identificador (hash de 7 caracteres) del commit con `git log --oneline` (ej. `a1b2c3d`).
2. Viaja temporalmente ejecutando:
   ```bash
   git checkout a1b2c3d
   ```
3. Para regresar al presente (la última versión en la rama principal):
   ```bash
   git checkout main
   ```

### E. Deshacer commits (Regresar de forma permanente)

#### Opción 1: `git reset` (Reescribir el historial local)
Ideal para commits locales que **aún no has subido a GitHub**.
```bash
# Regresa al commit 'a1b2c3d', manteniendo tus cambios locales como "modificaciones sin preparar"
git reset a1b2c3d

# ¡CUIDADO! Regresa al commit 'a1b2c3d' y BORRA permanentemente todos los cambios posteriores
git reset --hard a1b2c3d
```

#### Opción 2: `git revert` (Deshacer de forma segura compartiendo el historial)
Ideal si el commit erróneo **ya fue subido a GitHub**. En lugar de borrar la historia, crea un *nuevo commit* que hace exactamente lo opuesto al commit malo.
```bash
# Deshace los cambios introducidos en el commit 'a1b2c3d' creando un nuevo commit de reversión
git revert a1b2c3d
```

---

## Resumen de Comandos Frecuentes
| Comando | Propósito |
| :--- | :--- |
| `git status` | Ver estado de modificaciones y archivos preparados |
| `git add .` | Preparar todos los cambios para guardar |
| `git commit -m "Mensaje"` | Guardar los cambios preparados en el historial local |
| `git push` | Enviar commits locales a GitHub |
| `git pull` | Traer y combinar últimos cambios desde GitHub |
| `git log --oneline` | Ver resumen visual del historial de versiones |
| `git restore .` | Descartar todos los cambios locales no guardados |
| `git revert <hash>` | Deshacer un commit creando uno nuevo opuesto (seguro) |
