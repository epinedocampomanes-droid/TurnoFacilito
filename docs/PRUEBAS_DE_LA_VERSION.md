# Pruebas realizadas a la versión mejorada (2026-11-22)

## Alcance probado

- `node --check js/main.js`: **sin errores de sintaxis**.
- Navegador automatizado Chromium: HTML, CSS, imágenes y JavaScript originales cargados en un documento de prueba (el entorno de pruebas bloquea acceso directo a HTTP y `file://`).
- **Cero errores JavaScript** en los flujos funcionales comprobados.
- Anchos probados: **1440, 1024, 768, 390 y 320 px**. En las pantallas de detalle evaluadas, no hubo desbordamiento horizontal.

## Recorridos ejecutados con éxito

1. Consulta de ticket inexistente: mensaje claro de error (HU-22).
2. Apertura de la pantalla QR, visualización de cuatro códigos, entrada manual `TF-DEMO:bcp`, asociación con BCP (HU-19).
3. Selección de servicio bancario, lista de requisitos orientativa, marcar documento listo y actualización de pendientes (HU-17).
4. Registro de datos, revisión, generación de ticket B-001 y asignación de área / módulo desde la confirmación (HU-01/02/35).
5. Panel de alertas, selección de umbral, ingreso de tiempo insuficiente, aviso de exceso y acceso a reprogramación/cancelación (HU-23/24/38).
6. Demora extraordinaria, ampliación de estimación, restablecimiento y avance de la fila (HU-18/03/04/08).
7. Consulta válida de B-001 por sede y ticket sin autenticación (HU-22).
8. Detalle RENIEC con franjas simuladas y guía orientativa de documentos (HU-15/46).
9. Planificación de fecha y horario, visualización en revisión y confirmación de R-001 (HU-47/43).
10. Reprogramación demostrativa de un turno activo con franjas disponibles.
11. Creación de turno en Clínica Ricardo Palma, alerta por atención preferencial, cambio de tiempo, etapas clínicas y finalización (HU-25/27/21/26).

## Limitaciones y pruebas pendientes antes de evaluación

Estas pruebas **no demuestran por sí solas** el cumplimiento oficial de todos los criterios de las 30 HU. Falta realizar la matriz de aceptación completa con casos Gherkin para cada HU, pruebas reales con teclado y lectores de pantalla, pruebas en móviles físicos, y validación con usuarios. El escaneo con cámara requiere un navegador compatible, permiso de cámara y un contexto seguro. Los requisitos de trámites y la disponibilidad no provienen de sistemas institucionales.

**No se ha hecho un despliegue público en GitHub Pages.** `index.html` en la raíz sirve únicamente como acceso a la misma Landing Page ubicada en `pages/index.html`.
