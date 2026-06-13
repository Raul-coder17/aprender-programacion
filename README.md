# Aprender - Visor Interactivo de Lecciones de Programación

Este proyecto es una plataforma interactiva de aprendizaje de programación diseñada para estudiar las bases de desarrollo de software (Tema 1: Sintaxis, Variables, Operadores, Estructuras de Control, Funciones y Colecciones) de forma paralela en cuatro lenguajes clave: **JavaScript, Python, C# y Java**.

El visor web cuenta con un diseño oscuro premium con glassmorphism, un sistema de toma de notas persistente, seguimiento de progreso de lectura, un editor de código profesional integrado y un Mentor IA interactivo.

---

## 🚀 Características Principales

1. **Lectura Comparativa**: Compara la sintaxis y comportamiento de los lenguajes de programación de manera directa en una interfaz de doble panel.
2. **Seguimiento de Progreso**: Checklist persistente al lado de cada lección que te permite marcar tu avance y calcula dinámicamente tu porcentaje de progreso global.
3. **Notas Persistentes**: Crea notas rápidas sobre lecciones específicas. Se guardan localmente como archivos JSON en la carpeta del proyecto y son editables, consultables y borrables con un clic.
4. **Editor de Código Profesional (Monaco Editor)**:
   * **Motor de VS Code**: Resaltado de sintaxis preciso en tiempo real y ayudas visuales.
   * **Detección de Errores**: Monaco resalta y subraya los errores de sintaxis en rojo antes de que ejecutes el código.
   * **Ajuste de Línea (Word Wrap)**: Activado por defecto para facilitar la lectura de códigos largos.
5. **Mentor IA Socrático Integrado**:
   * **Desarrollado con Gemini 2.5 Flash**: Te guía socráticamente con pistas, plantillas de sintaxis y explicaciones rápidas sin darte la solución directa para fomentar tu aprendizaje autónomo.
   * **Chat de Consola Persistente**: Barra de entrada de texto siempre visible para realizar preguntas en caliente en cualquier momento.
   * **Auto-Inicialización de Contexto**: Al mandar tu primera pregunta, envía de forma transparente tu código actual del editor, lenguaje activo y últimas líneas de la consola para dar respuestas 100% contextualizadas.
6. **Playground Multi-Lenguaje**:
   * **JavaScript**: Corre de forma nativa en el navegador del cliente.
   * **Python**: Se ejecuta directamente en el cliente mediante **Pyodide** (WebAssembly), sin requerir servidores locales.
   * **Java y C#**: Se compilan y ejecutan de forma local conectándose dinámicamente a los compiladores de tu sistema a través del servidor Node.js.
7. **Diseño Premium 100% Responsivo**:
   * **Soporte para Teléfonos y Tablets**: Barra lateral colapsable a través de un botón flotante (`toggle`) y paneles laterales adaptados al 100% del ancho de la pantalla móvil.
   * **Cierre Inteligente**: Al seleccionar una lección en tu dispositivo móvil, el menú de navegación se oculta solo para ofrecer lectura limpia sin clics adicionales.

---

## 💻 Requisitos para Ejecución Local (Pruebas Completas)

Para iniciar el visor web localmente y poder compilar y ejecutar código de **Java** y **C#** directamente en la consola web, debes asegurarte de tener instalados los siguientes runtimes en tu máquina:

* **Node.js** (LTS recomendado): Para iniciar el servidor del visor.
* **Python 3.x**: Para ejecutar scripts de Python.
* **Java Development Kit (JDK 17 o superior)**: Para ejecutar código de Java.
* **.NET SDK (v9.0 o superior)**: Para ejecutar y compilar C#.

*Para verificar si los tienes instalados, puedes ejecutar en tu terminal:*
```powershell
node -v
python --version
java --version
dotnet --list-sdks
```

---

## 🛠️ Cómo Iniciar el Visor Localmente

1. Abre una terminal en la carpeta raíz del proyecto.
2. Inicia el servidor web nativo (sin dependencias externas de `npm install` requeridas):
   ```powershell
   node iniciar_visor.js
   ```
3. El visor se abrirá de forma automática en tu navegador. Si no lo hace, ingresa manualmente a:
   [http://localhost:3000](http://localhost:3000)

---

## ☁️ Despliegue en la Nube (ej. Render)

Este visor está preparado para subirse a internet (por ejemplo en Render).

### Diferencia de ejecución en Web vs Local:
* **En la versión Web**: Puedes leer todas las guías, crear notas, y ejecutar código de **JavaScript** y **Python** (gracias a Pyodide Wasm) de forma totalmente gratuita y segura. La ejecución de **Java** y **C#** estará inhabilitada en la nube por limitaciones de compiladores y seguridad del servidor.
* **En la versión Local**: Puedes escribir y ejecutar código de **los 4 lenguajes** (JS, Python, Java y C#) sin restricciones.
* **Configuración del Mentor IA**: Solo requiere ingresar tu Gemini API Key en el candado superior del Playground para guardarla localmente en tu navegador de forma segura.
