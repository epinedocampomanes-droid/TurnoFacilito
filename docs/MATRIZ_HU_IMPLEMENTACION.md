# Matriz de implementación – 30 HU core

Esta matriz identifica cómo **demostrar** cada HU dentro del prototipo HTML/CSS/JS. Los pasos no sustituyen las pruebas de aceptación de capítulo VI.

| HU | Funcionalidad | Ubicación / comprobación |
|---|---|---|
| HU-01 | Elegir tipo de atención | Seleccionar servicio al reservar |
| HU-02 | Generar turno | Formulario y confirmación de ticket local |
| HU-03 | Posición en cola | Mi turno: personas antes |
| HU-04 | Tiempo estimado | Mi turno: minutos de espera |
| HU-05 | Seguimiento desde móvil | Mismo sitio adaptado a teléfono |
| HU-07 | Notificación proximidad | Alertas al avanzar a umbral |
| HU-08 | Actualización de estado | Acción simular avance |
| HU-17 | Requisitos del trámite bancario | Banco → Seleccionar servicio → marcar requisitos orientativos |
| HU-19 | Generación mediante QR | Inicio → Escanear QR → cámara compatible o código TF-DEMO |
| HU-21 | Etapas de atención clínica | Clínica → Seguimiento → Etapas → Avanzar etapa |
| HU-22 | Consulta sin registro | Inicio / Turnos → Consultar ticket → ingresar sede y número |
| HU-25 | Rango de espera clínica | Clínica → Detalle / Seguimiento → rango de espera |
| HU-36 | Estimación del tiempo en servicios | Detalle y seguimiento |
| HU-06 | Módulos disponibles | Banco → Solicitar turno → Seguimiento → Módulos, simular avance |
| HU-12 | Cancelación de turno | Confirmación e historial |
| HU-15 | Horarios de menor demanda | Seleccionar sede → Detalle → Horarios de menor demanda |
| HU-18 | Aviso demora extraordinaria | Seguimiento → Simular demora extraordinaria → Restablecer |
| HU-20 | Afluencia actual | Etiqueta en sedes |
| HU-23 | Configurar proximidad de aviso | Seguimiento → Aviso de proximidad → 3, 5 o 10 |
| HU-24 | Aviso según tiempo disponible | Seguimiento → Tiempo disponible → Comparar |
| HU-26 | Continuación por etapas | Clínica → Seguimiento → finalizar etapa y ver siguiente paso |
| HU-27 | Aviso por atención preferencial | Clínica → Seguimiento → Simular atención preferencial |
| HU-30 | Vista resumida de atención | Tarjeta de mi turno |
| HU-35 | Asignación de ticket y módulo | Otros servicios → reservar → comprobar código y área asignada |
| HU-38 | Aviso para tiempo limitado | Seguimiento → alertas preventivas y ventanilla asignada |
| HU-42 | Consulta tiempo para identidad | Detalle de identidad |
| HU-43 | Ticket digital identidad | Reservar en Oficina de Identidad |
| HU-44 | Proximidad identidad | Simular avance con alertas |
| HU-46 | Requisitos identidad | RENIEC → seleccionar trámite → checklist / fuente oficial |
| HU-47 | Planificación visita identidad | RENIEC → elegir servicio → fecha y franja → revisión → confirmación |

## Alcance
Las 30 HU tienen representación de interfaz o recorrido en la demo, pero no todas tienen infraestructura institucional real ni pruebas de aceptación Gherkin completas. Particularmente HU-17/46 usan guías de preparación no oficiales; HU-19 depende de compatibilidad de escáner; HU-22 solo consulta tickets de la misma sesión; y HU-15/25/47 emplean disponibilidad o tiempos simulados.

Para aprobar la evaluación, revisar cada HU frente a sus tres criterios del Capítulo III y documentar evidencia en desktop y móvil.
