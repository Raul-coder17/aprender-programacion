# Aprender - Visor Interactivo de Lecciones de Programación

Este proyecto es una plataforma interactiva de aprendizaje de programación diseñada para estudiar las bases de desarrollo de software (Tema 1: Sintaxis, Variables, Operadores, Estructuras de Control, Funciones y Colecciones) de forma paralela en cuatro lenguajes clave: **JavaScript, Python, C# y Java**.

El visor web cuenta con un diseño oscuro premium con glassmorphism, un sistema de toma de notas persistente, seguimiento de progreso de lectura y una consola de pruebas (Playground) integrada para ejecutar código.

---

## 🚀 Características Principales

1.  **Lectura Comparativa**: Compara la sintaxis y comportamiento de los lenguajes de programación de manera directa.
2.  **Seguimiento de Progreso**: Checklist persistente al lado de cada lección que te permite marcar tu avance y calcular tu porcentaje completado.
3.  **Notas Persistentes**: Crea notas rápidas sobre lecciones específicas en cualquier momento. Se guardan localmente como archivos JSON y puedes acceder a ellas con un clic.
4.  **Playground Integrado (Ejecutor de Código)**:
    *   **JavaScript**: Corre nativamente en el navegador.
    *   **Python**: Se ejecuta en el cliente mediante **Pyodide** (WebAssembly), sin requerir servidores Python.
    *   **Java y C#**: Se compilan y ejecutan localmente a través de tu servidor local conectándose con tus compiladores del sistema.

---

## 💻 Requisitos para Ejecución Local (Pruebas Completas)

Para iniciar el visor web localmente y poder compilar y ejecutar código de **Java** y **C#** directamente en la consola web, debes asegurarte de tener instalados los siguientes runtimes en tu máquina:

*   **Node.js** (LTS recomendado): Para iniciar el servidor del visor.
*   **Python 3.x**: Para ejecutar scripts de Python.
*   **Java Development Kit (JDK 17 o superior)**: Para ejecutar código de Java.
*   **.NET SDK (v9.0 o superior)**: Para ejecutar y compilar C#.

*Para verificar si los tienes instalados, puedes ejecutar en tu terminal:*
```powershell
node -v
python --version
java --version
dotnet --list-sdks
```

---

## 🛠️ Cómo Iniciar el Visor Localmente

1.  Abre una terminal en la carpeta raíz del proyecto.
2.  Inicia el servidor web nativo (sin dependencias de `npm install` requeridas):
    ```powershell
    node iniciar_visor.js
    ```
3.  El visor se abrirá de forma automática en tu navegador. Si no lo hace, ingresa manualmente a:
    [http://localhost:3000](http://localhost:3000)

---

## ☁️ Despliegue en la Nube (ej. Render)

Este visor está preparado para subirse a internet (por ejemplo en Render).

### Diferencia de ejecución en Web vs Local:
*   **En la versión Web**: Puedes leer todas las guías, crear notas, y ejecutar código de **JavaScript** y **Python** (gracias a Pyodide Wasm) de forma totalmente gratuita y segura. La ejecución de **Java** y **C#** estará inhabilitada en la nube por limitaciones de compiladores y seguridad del servidor.
*   **En la versión Local**: Puedes escribir y ejecutar código de **los 4 lenguajes** (JS, Python, Java y C#) sin restricciones.

*Consulta la guía detallada de subida e instrucciones de persistencia de datos en [guia_despliegue_render.md](guia_despliegue_render.md).*
