# Guía de Despliegue en Render

Para subir este visor interactivo a un servidor gratuito como [Render](https://render.com/), sigue los siguientes pasos detallados.

---

## 1. Archivos de Configuración Incluidos

Ya se han creado los archivos necesarios en la raíz de tu proyecto:
1.  **`package.json`**: Define el script de inicio (`npm start`) que Render detecta automáticamente.
2.  **`iniciar_visor.js`**: Modificado para soportar el puerto dinámico asignado por Render (`process.env.PORT`) y desactivar la apertura automática del navegador en servidores remotos sin pantalla.
3.  **`.gitignore`**: Evita subir tus notas personales (`notas/*.json`) y configuraciones de editor al repositorio público.

---

## 2. Paso a Paso para Desplegar

### Paso A: Subir tu código a GitHub
1.  Si no lo has hecho, inicializa un repositorio local en la carpeta `c:\Aprender\`:
    ```bash
    git init
    ```
2.  Agrega todos los archivos al commit:
    ```bash
    git add .
    ```
3.  Realiza el primer commit:
    ```bash
    git commit -m "Preparar proyecto para despliegue en la nube"
    ```
4.  Crea un repositorio en tu cuenta de GitHub (ej: `aprender-visor`).
5.  Vincula el repositorio local con el de GitHub y súbelo (reemplaza `TU_USUARIO` y `TU_REPOSITORIO` con tus datos):
    ```bash
    git remote add origin https://github.com/TU_USUARIO/TU_REPOSITORIO.git
    git branch -M main
    git push -u origin main
    ```

### Paso B: Configurar en Render
1.  Inicia sesión o regístrate en [Render](https://render.com/).
2.  Haz clic en el botón **New +** y selecciona **Web Service**.
3.  Conecta tu cuenta de GitHub y selecciona el repositorio que acabas de subir.
4.  Configura los detalles del servicio web:
    *   **Name**: Un nombre identificativo para tu visor (ej. `aprender-programacion`).
    *   **Region**: La más cercana a tu ubicación (ej. `Ohio (us-east-2)` o `Frankfurt (eu-central-1)`).
    *   **Branch**: `main`
    *   **Root Directory**: Dejar vacío (usa la raíz por defecto).
    *   **Runtime**: `Node`
    *   **Build Command**: Dejar vacío o poner `npm install` (aunque el visor usa módulos nativos y no los necesita).
    *   **Start Command**: `npm start`
    *   **Instance Type**: `Free` (Gratuito).
5.  Haz clic en **Advanced** (opcional) si deseas configurar persistencia (ver nota abajo).
6.  Haz clic en **Create Web Service**.

Render compilará tu aplicación en unos minutos y te proporcionará una URL pública tipo `https://aprender-programacion.onrender.com`.

---

## ⚠️ Nota Importante sobre la Persistencia de las Notas

Por defecto, los servidores gratuitos en Render tienen un **sistema de archivos efímero**. Esto significa que si creas notas desde el visor web desplegado en Render, estas notas **se borrarán cada vez que Render reinicie tu servidor** (lo cual ocurre automáticamente al menos una vez al día o cada vez que subes un cambio).

### Cómo mantener tus notas persistentes en Render:
Si quieres que las notas no se borren en internet, debes añadir un disco persistente a tu servicio:
1.  En la página de configuración de tu servicio web en Render, ve a la sección **Disks** (Discos).
2.  Haz clic en **Add Disk**.
3.  Configura el disco:
    *   **Name**: `notas-storage`
    *   **Mount Path**: `/opt/render/project/src/notas` (Esta ruta coincide exactamente con la carpeta `notas` del proyecto).
    *   **Size**: `1 GiB` (El mínimo es gratuito y más que suficiente para miles de notas JSON).
4.  Guarda los cambios. Render reiniciará la aplicación conectando este almacenamiento persistente.
