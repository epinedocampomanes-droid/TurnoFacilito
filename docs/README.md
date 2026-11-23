# TurnoFacilito — Landing Page

**Curso:** HCI for UX Design · **Grupo:** 7  
**Tipo de entrega:** prototipo académico de interfaz web, sin conexión con las instituciones mostradas.

## Cómo abrir el proyecto

1. **Extraer el ZIP completo**. Mantener intactas las carpetas, porque las rutas de CSS, JavaScript e imágenes son relativas a `pages/index.html`.
2. Abrir la carpeta `landing-page-solucion` en Visual Studio Code.
3. Abrir **`pages/index.html`** con **Live Server**. También existe `index.html` en la raíz, que redirige a la misma única Landing Page para facilitar GitHub Pages.
4. Probar el flujo: Inicio → Establecimientos → seleccionar sede → seleccionar servicio → registro de datos → revisión → confirmar → Turnos / Seguimiento → Historial.

**Si aparece texto negro sin diseño, o el logo se ve roto:** la hoja de estilos no se está cargando. Compruebe que está abriendo el archivo dentro de su estructura de carpetas y no una copia de HTML en otra ubicación. En el navegador presione `Ctrl + F5` para refrescar el caché. No es necesario instalar paquetes ni compilar.

## Estructura

```text
landing-page-solucion/
├── assets/
│   ├── images/       Fotografías de 12 sedes (.jpg)
│   ├── icons/        TurnoFacilito_Logo.jpg
│   ├── fonts/
│   └── videos/
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── pages/
│   └── index.html
├── docs/
│   ├── README.md
│   └── HU_CORE_30.csv
├── index.html          Redirige a pages/index.html (GitHub Pages)
├── favicon.ico
└── .gitignore
```

## Alcance funcional

- **12 sedes de Lima Metropolitana:** 4 bancos, 4 establecimientos de Salud (2 clínicas y 2 hospitales) y 4 de Otros servicios.
- Búsqueda por nombre o servicio, filtro por categoría y distrito, ordenamiento y recuento **dinámico** a partir de `sedes.length` o de los resultados filtrados.
- Registro demostrativo de nombres y apellidos, con correo opcional. Edición de perfil durante la sesión.
- Selección y revisión de servicio antes de solicitar un turno.
- Turnos simultáneos en distintas sedes, como máximo uno activo por sede. Seguimiento y avance manual demostrativo; notificaciones, cancelación e historial derivados de las operaciones realizadas.
- **HU añadidas/mejoradas:** panel de módulos; franjas de menor demanda; listas de preparación bancaria y RENIEC; demora extraordinaria y atención preferencial; QR de prueba con cámara compatible o código manual; consulta por ticket sin registro; aviso configurable 3/5/10; evaluación de tiempo disponible; rango de espera de clínicas; avance por etapas clínicas; área asignada; alertas preventivas; planificación de visitas a RENIEC. Ver `MATRIZ_HU_IMPLEMENTACION.md`.
- Accesibilidad y estilos adaptables a varias resoluciones.

## Tecnología y limitaciones

La implementación utiliza **HTML5, CSS3 y JavaScript convencional**. No utiliza React, `localStorage` ni base de datos. Los códigos QR PNG generados son **códigos TF-DEMO locales**, no enlaces a servicios oficiales. La cámara solamente funcionará cuando el navegador soporte `BarcodeDetector` y `getUserMedia`, se conceda permiso y la página se sirva desde HTTPS o localhost. La entrada manual y la lectura simulada están siempre disponibles.

Los datos personales y turnos permanecen únicamente en memoria: **al recargar la página se reinician**. No hay inicio de sesión ni reserva real. El número de turno, la cantidad de personas, los tiempos de espera y la disponibilidad son **simulados**. Los horarios y servicios mostrados son referenciales y deben confirmarse directamente con las instituciones. La aplicación no está afiliada ni conectada a ellas. Los turnos de hospitales no sirven para atención de emergencias.

## Imágenes y referencias

- 12 fotografías en `assets/images/`, todas en **JPG 1200 × 675 px**; también 4 códigos PNG de prueba, nombrados con la convención `Bcp_SanMiguel.jpg`, `Interbank_Miraflores.jpg`, etc.
- Logotipo en `assets/icons/TurnoFacilito_Logo.jpg` (**512 × 512 px**) y favicon en `favicon.ico`.
- Las fotografías proceden del material del proyecto suministrado y fueron unificadas para presentación. **No todas tienen verificada la correspondencia exacta con la sede**; conviene comprobarlo y contar con permiso de uso antes de una publicación pública.
- En `js/main.js`, cada sede posee una propiedad `fuente` con un enlace de consulta hacia páginas institucionales o directorios. Estas referencias no implican afiliación ni validación en tiempo real.

## Añadir una sede

Agregar un nuevo objeto dentro del arreglo `const sedes = [...]` en `js/main.js`, con `id` único, `codigo`, nombre, categoría (`Bancos`, `Salud` u `Otros servicios`), distrito, dirección, horario, espera, personas, imagen, fuente y servicios. Colocar el JPG en `assets/images/` y asegurarse de que el campo `imagen` coincida exactamente con el nombre de archivo. Los contadores y los filtros se recalculan automáticamente.

**Nota de entrega:** el ZIP contiene directamente la carpeta `landing-page-solucion`, con los nombres de carpetas principales exigidos por la rúbrica. Los archivos adicionales de `docs/` son anexos del proyecto.

## Página principal y rutas relativas

- `pages/index.html` es la **única página principal**, como indica la rúbrica. Desde esa carpeta referencia `../css/styles.css`, `../js/main.js`, `../assets/icons/...` y `../favicon.ico`.
- La página utiliza `data-image-root` del elemento `<html>` para localizar las fotografías en `assets/images/`.
- Para verla, abrir **`pages/index.html`** con Live Server en Visual Studio Code, manteniendo la estructura completa.

## Separación de responsabilidades (metodología del curso)

1. **HTML5 — `pages/index.html`:** estructura semántica `header`, `nav`, `main`, `section`, `article`, `aside`, `footer` y formularios con `label`, `input`, `select`. Contiene las vistas iniciales **Inicio, Establecimientos y Ayuda** y dos plantillas HTML (`plantilla-servicio` y `plantilla-datos`) con formularios listos para completar.
2. **CSS3 — `css/styles.css`:** diseño de Figma, Flexbox, Grid, estilos de componentes, accesibilidad y media queries para celular y escritorio. No se introdujeron estilos en línea dentro de los archivos HTML.
3. **JavaScript — `js/main.js`:** arreglo `sedes`, filtros, DOM, eventos, validaciones, navegación, registro de usuario y simulación de turnos. Actualiza los contenedores de resultados. Las vistas que dependen totalmente de los datos, como la confirmación y el historial, se generan desde JavaScript.

Esta separación conserva la interfaz y las funcionalidades del prototipo anterior, pero facilita explicar el código por etapas. No se necesitan React, bases de datos ni `localStorage`.

**Nota:** los nombres, fotos y horarios de las sedes son referenciales; no se acredita afiliación ni reserva oficial.

## Cómo publicar con GitHub Pages

1. Subir el contenido de la carpeta `landing-page-solucion` a la **raíz** de un repositorio de GitHub, conservando las carpetas `assets/`, `css/`, `js/`, `pages/` y `docs/`.
2. En *Settings → Pages*, elegir *Deploy from a branch* y la carpeta **/(root)** en la rama principal.
3. El `index.html` raíz redirige hacia la única Landing Page `pages/index.html`.
4. Abrir la URL pública y probar imágenes, menú móvil, formularios, QR manual y las 30 HU mediante `docs/MATRIZ_HU_IMPLEMENTACION.md`.

**Importante:** no se ha publicado una URL por medio de esta entrega. El escaneo real con cámara deberá verificarse en un dispositivo/navegador compatible. No hay tickets oficiales, base de datos, integración con RENIEC ni consulta real de horarios.
