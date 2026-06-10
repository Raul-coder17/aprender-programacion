# Dependencias y Requisitos del Sistema

Este sistema de aprendizaje interactivo está diseñado para ser **extremadamente portable y libre de configuraciones complejas**. 

---

## 1. Dependencias del Visor Web

### Frontend (Cliente)
**No requiere instalación local.** Las librerías de renderizado y formateo se cargan dinámicamente desde redes de distribución de contenido (CDN) directamente en el navegador del usuario:
*   **Marked.js (v4.0+)**: Cargado vía CDN de [jsdelivr](https://cdn.jsdelivr.net/).
*   **Highlight.js (v11.9.0)**: Cargado junto con los lenguajes adicionales (JS, Python, C#, Java) desde el CDN de [cdnjs](https://cdnjs.com/).

### Backend (Servidor)
**Cero dependencias de npm.** El servidor en `iniciar_visor.js` utiliza módulos nativos de Node.js:
*   `http` (Servidor web nativo).
*   `fs` (Acceso al sistema de archivos).
*   `path` (Resolución y normalización de rutas).
*   `url` (Análisis de parámetros de consulta).

*No necesitas ejecutar `npm install` ni inicializar un archivo `package.json` para levantar el visor.*

---

## 2. Requisitos de Ejecución en la Máquina (Runtimes)

Para ejecutar el servidor web y realizar las prácticas de programación en cada uno de los lenguajes del Tema 1, debes tener instalados los siguientes entornos en tu sistema operativo:

| Lenguaje / Componente | Herramienta a Instalar | Comando de Verificación | Propósito en el Proyecto |
| :--- | :--- | :--- | :--- |
| **Backend / JS** | **Node.js** (LTS recomendado) | `node -v` | Iniciar el servidor web del visor (`node iniciar_visor.js`) y ejecutar scripts de JS. |
| **Python** | **Python 3.x** | `python --version` | Ejecutar los scripts interactivos en `tema1/practicas/python/`. |
| **Java** | **Java Development Kit (JDK 17+)** | `java --version` | Ejecutar archivos individuales de Java mediante el cargador integrado (ej: `java Sintaxis1.java`). |
| **C#** | **.NET SDK** (v9.0 o superior) | `dotnet --list-sdks` | Compilar y ejecutar la consola interactiva en `tema1/practicas/csharp/`. |

---

## 3. Instrucciones de Inicio Rápido

1.  **Iniciar el Servidor Web**:
    Abre una terminal en `c:\Aprender` y ejecuta:
    ```powershell
    node iniciar_visor.js
    ```
2.  **Acceder al Visor**:
    Abre tu navegador y entra en:
    [http://localhost:3000](http://localhost:3000)
3.  **Ejecutar Archivos de Práctica**:
    *   **JavaScript**: `node tema1/practicas/javascript/1_sintaxis.js`
    *   **Python**: `python tema1/practicas/python/1_sintaxis.py`
    *   **Java**: `java tema1/practicas/java/Sintaxis1.java` (desde la carpeta `java/`)
    *   **C#**: `dotnet run` (desde la carpeta `csharp/`)
