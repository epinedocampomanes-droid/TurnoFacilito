# Guía de archivos — TurnoFacilito

## 1. HTML5

Abre `pages/index.html`. En el `head` se enlazan `../css/styles.css` y `../js/main.js`. El `body` contiene la navegación, encabezado y un `<main>` con secciones de **Inicio**, **Establecimientos** y **Ayuda**. Al final existen dos `<template>` para formularios (servicios y registro), que JavaScript clona cuando el usuario lo requiere.

## 2. CSS3

Abre `css/styles.css`. Las reglas de clases (`.welcome-banner`, `.filter-panel`, `.service-selection`) definen cómo lucen los elementos HTML. Los `@media` adaptan el diseño a pantallas pequeñas. El HTML no incluye bloques `<style>`.

## 3. JavaScript

Abre `js/main.js`. El arreglo `sedes` contiene la información de los 12 establecimientos. `actualizarInicio()` rellena los contadores y las tarjetas destacadas; `prepararEstablecimientos()` carga los distritos; `actualizarResultados()` dibuja las tarjetas filtradas. `prepararServicio()` y `prepararDatos()` completan las plantillas HTML. Las funciones de turnos gestionan la simulación en memoria.

## 4. Para probar

Abrir `pages/index.html` con Live Server. Buscar RENIEC, elegir servicio, registrar nombres, revisar, confirmar, avanzar, cancelar y consultar historial. En móvil comprobar el menú inferior. Al actualizar se borran los turnos: es el comportamiento esperado de este prototipo sin persistencia.
