# Acceso público corregido (V2.6)

URL principal: https://epinedocampomanes-droid.github.io/TurnoFacilito/

Se incluye un `index.html` adicional en la raíz con rutas adaptadas a GitHub Pages. `pages/index.html` conserva la estructura académica. Ambas entradas comparten el mismo CSS y JavaScript; no son dos aplicaciones independientes. Al modificar el marcado HTML, deben mantenerse ambas entradas sincronizadas.

# TurnoFacilito V2.6

Gestor inteligente de colas y tiempos de espera · HCI for UX Design · Grupo 5 · UPC.

## Estructura final

```text
landing-page-solucion/
├── assets/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── videos/
├── css/styles.css
├── js/main.js
├── pages/index.html
├── docs/README.md
├── favicon.ico
└── .gitignore
```

Las carpetas fonts y videos incluyen `.gitkeep` para conservarlas en Git aunque estén vacías. No se incluye wireframes.pdf (opcional). No se necesitan compilación ni dependencias externas. La biblioteca de QR se integra en main.js, con su licencia MIT íntegra en el código y al final de este README. Se conserva el diseño, la navegación Atrás/Adelante, el avance manual de prueba y los recorridos de la V2.5.

## Publicación y uso

1. Extraer el ZIP; copiar el contenido de `landing-page-solucion` al repositorio local, después de respaldar la versión anterior. No eliminar `.git`. Eliminar los archivos obsoletos `index.html` de raíz, `sw.js`, `js/qr-encoder.js`, `.nojekyll` y README de raíz; en docs conservar solo README.md.
2. GitHub Desktop: confirmar los cambios en main y enviar al origen.
3. En GitHub → Ambientaciones → Páginas mantener Despliegue desde una sucursal, main, /(raíz). No seleccionar `/pages` como fuente: no es una opción admitida por esta configuración.
4. Abrir directamente **https://epinedocampomanes-droid.github.io/landing-page-solucion/pages/** (o https://epinedocampomanes-droid.github.io/TurnoFacilito/pages/ si se conserva el nombre anterior). La URL raíz puede devolver 404 porque, por decisión de estructura, ya no existe index.html allí. Si el despliegue de Pages informa un error de entrada, revisar Acciones; sin añadir archivos, puede usarse la URL pública de pages/index.html siempre que el despliegue haya publicado los archivos. No se verificó el despliegue público de V2.6.
5. Para pruebas locales abrir `pages/index.html` con Live Server. Usar datos ficticios.

## Alcance y cambios de V2.6

- Una sola página HTML y un único archivo JavaScript; documentación consolidada aquí. CSS y recursos gráficos sin modificaciones.
- Se elimina el service worker. Se conserva el aviso interno y se intenta mostrar avisos nativos con Notification desde main.js únicamente cuando hay permiso. Algunos navegadores móviles no admiten este constructor y requieren service worker: HU-07 queda parcial en esos dispositivos. No hay avisos push ni en segundo plano garantizados. Una instalación anterior puede conservar temporalmente su registro del worker; esta versión no lo utiliza ni lo registra.
- La HU-19 conserva los QR bancarios funcionales de acceso a la sede según la URL de despliegue. El QR del ticket es ilustrativo y no identifica turnos individuales. La cámara depende del navegador.
- Turnos, cupos, tiempos y afluencia son referenciales, locales, sin conexión institucional ni base de datos compartida. Los datos se pierden al recargar. Las fotografías y los horarios deben verificarse con la institución. No se acredita conformidad WCAG ni aceptación formal de las 30 HU.
- Los apartados históricos incluidos abajo reflejan las versiones anteriores; los nombres de archivos y referencias de despliegue que citan corresponden a esas versiones y no a archivos separados de V2.6. Los criterios originales se mantienen íntegros para validación.

## Matriz de 30 historias de usuario y 90 criterios de aceptación

La aceptación formal sigue pendiente sobre GitHub Pages. Para HU-07, además de lo registrado en la matriz histórica, aplicar la limitación de compatibilidad descrita arriba.


### 30 HU (matriz de la V2.4, con alcance actualizado arriba)

| Historia de Usuario | Nombre original | Pantalla o acción | Alcance | Estado de implementación V2.4 | Limitación |
| --- | --- | --- | --- | --- | --- |
| HU-01 | Selección del tipo de atención | Detalle → Solicitar turno → Servicio → Revisión | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-02 | Generación del turno | Revisión → Confirmación | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-03 | Consulta de posición en la cola | Seguimiento y consulta | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-04 | Consulta del tiempo estimado de espera | Seguimiento y consulta | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | CA01–CA03 repiten literalmente HU-03 en el informe original; no se modificaron. |
| HU-05 | Seguimiento del turno desde el celular | Seguimiento responsive | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-06 | Consulta de módulos disponibles | Seguimiento bancario → Módulos de atención | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-07 | Notificación de proximidad del turno | Notificaciones → Activar avisos del dispositivo | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Permiso, navegador, HTTPS y sistema operativo; recepción física no probada. No hay push remoto. |
| HU-08 | Actualización del estado del turno | Seguimiento → Notificaciones | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-12 | Cancelación de turno | Turnos → Cancelar → Confirmar | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-15 | Consulta de horarios de menor demanda | Detalle → Horarios de menor demanda | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-17 | Lista de verificación de documentos del trámite | Bancos → Servicio → Documentos para tu trámite | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Requisitos confirmados solo para productos consultados; otros son orientación condicional. |
| HU-18 | Aviso de demora extraordinaria | Seguimiento → Incidencias | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-19 | Generación de turno mediante código QR | Detalle bancario → QR de agencia / cámara de celular | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | QR de banco contiene enlace a la sede del despliegue. Escaneo físico y URL pública por validar; ticket QR fijo ilustrativo. |
| HU-20 | Consulta de afluencia actual del establecimiento | Establecimientos y detalle → Afluencia | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Nivel y actualización del modelo local, no afluencia institucional en vivo. |
| HU-21 | Seguimiento por etapas de la atención | Seguimiento clínico → Etapas | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-22 | Consulta del turno sin registro | Inicio → Consultar mi turno | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Consulta los tickets de la misma sesión, sin base de datos común. |
| HU-23 | Configuración de la alerta de proximidad | Seguimiento → Aviso de proximidad | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-24 | Alerta de tiempo disponible | Seguimiento → Tiempo disponible | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-25 | Rango de espera de la cita | Detalle clínico y Seguimiento | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-26 | Confirmación para continuar el proceso | Seguimiento clínico → Etapas | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-27 | Aviso por atención preferencial | Seguimiento clínico → Incidencias | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-30 | Vista resumida cuando estoy apurada | Inicio → Vista resumida de mi atención clínica | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-35 | Asignación de ticket y código de atención | Revisión → Ticket → Seguimiento | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-36 | Estimación del tiempo de espera | Seguimiento → Espera, módulos y posición | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-38 | Alerta de proximidad de turno para reducir demoras | Seguimiento y notificaciones | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-42 | Consulta del tiempo estimado de espera | RENIEC → Seguimiento | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-43 | Ticket virtual para conocer la posición en la fila | RENIEC → Ticket → Seguimiento | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-44 | Notificación de proximidad del turno de atención | RENIEC → Notificaciones | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-46 | Consulta de requisitos para el trámite del DNI | RENIEC → Servicio → Documentos | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Duplicado, renovación y actualización: referencias oficiales; condiciones específicas dependen del canal y trámite. |
| HU-47 | Planificación anticipada del turno de atención | RENIEC → Servicio → Calendario → Confirmación | Prototipo académico local | Representada y con flujo programado; aceptación formal pendiente | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |

### 90 criterios originales

| HU | Nombre original | Criterio | Texto original | Ruta de verificación | Prueba sugerida | Resultado formal | Limitación |
| --- | --- | --- | --- | --- | --- | --- | --- |
| HU-01 | Selección del tipo de atención | CA01 | El sistema debe mostrar los tipos de atención disponibles para la entidad seleccionada. | Detalle → Solicitar turno → Servicio → Revisión | Elegir un servicio, revisar y confirmar el resumen. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-01 | Selección del tipo de atención | CA02 | El usuario debe poder seleccionar un único tipo de atención antes de generar su turno. | Detalle → Solicitar turno → Servicio → Revisión | Elegir un servicio, revisar y confirmar el resumen. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-01 | Selección del tipo de atención | CA03 | El sistema debe mostrar una confirmación del tipo de atención seleccionado antes de generar el turno. | Detalle → Solicitar turno → Servicio → Revisión | Elegir un servicio, revisar y confirmar el resumen. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-02 | Generación del turno | CA01 | El sistema debe permitir generar un turno después de seleccionar el tipo de atención. | Revisión → Confirmación | Confirmar y comprobar número de ticket y mensaje de éxito. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-02 | Generación del turno | CA02 | El sistema debe asignar un número de turno al usuario. | Revisión → Confirmación | Confirmar y comprobar número de ticket y mensaje de éxito. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-02 | Generación del turno | CA03 | El sistema debe mostrar la confirmación de que el turno fue generado correctamente. | Revisión → Confirmación | Confirmar y comprobar número de ticket y mensaje de éxito. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-03 | Consulta de posición en la cola | CA01 | El sistema debe mostrar la posición actual del usuario dentro de la cola. | Seguimiento y consulta | Ver posición y personas delante; esperar el avance local o usar el recorrido de prueba. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-03 | Consulta de posición en la cola | CA02 | El sistema debe mostrar la cantidad aproximada de personas que faltan antes del turno. | Seguimiento y consulta | Ver posición y personas delante; esperar el avance local o usar el recorrido de prueba. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-03 | Consulta de posición en la cola | CA03 | La información debe actualizarse cuando avance la cola de atención. | Seguimiento y consulta | Ver posición y personas delante; esperar el avance local o usar el recorrido de prueba. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-04 | Consulta del tiempo estimado de espera | CA01 | El sistema debe mostrar la posición actual del usuario dentro de la cola. | Seguimiento y consulta | Comprobar posición y personas según CA originales; además, observar la espera calculada. | Pendiente de aceptación sobre GitHub Pages | CA01–CA03 repiten literalmente HU-03 en el informe original; no se modificaron. |
| HU-04 | Consulta del tiempo estimado de espera | CA02 | El sistema debe mostrar la cantidad aproximada de personas que faltan antes del turno. | Seguimiento y consulta | Comprobar posición y personas según CA originales; además, observar la espera calculada. | Pendiente de aceptación sobre GitHub Pages | CA01–CA03 repiten literalmente HU-03 en el informe original; no se modificaron. |
| HU-04 | Consulta del tiempo estimado de espera | CA03 | La información debe actualizarse cuando avance la cola de atención. | Seguimiento y consulta | Comprobar posición y personas según CA originales; además, observar la espera calculada. | Pendiente de aceptación sobre GitHub Pages | CA01–CA03 repiten literalmente HU-03 en el informe original; no se modificaron. |
| HU-05 | Seguimiento del turno desde el celular | CA01 | El sistema debe permitir consultar el estado del turno desde el dispositivo móvil. | Seguimiento responsive | Abrir en celular; verificar estado y actualización de la cola. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-05 | Seguimiento del turno desde el celular | CA02 | La pantalla de seguimiento debe mostrar la información actual del turno. | Seguimiento responsive | Abrir en celular; verificar estado y actualización de la cola. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-05 | Seguimiento del turno desde el celular | CA03 | La información debe actualizarse cuando existan cambios en la cola. | Seguimiento responsive | Abrir en celular; verificar estado y actualización de la cola. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-06 | Consulta de módulos disponibles | CA01 | El sistema debe mostrar los módulos disponibles para la atención. | Seguimiento bancario → Módulos de atención | Ver módulos activos y no activos; comprobar cambios de la cola. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-06 | Consulta de módulos disponibles | CA02 | El sistema debe indicar cuáles módulos se encuentran activos o atendiendo. | Seguimiento bancario → Módulos de atención | Ver módulos activos y no activos; comprobar cambios de la cola. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-06 | Consulta de módulos disponibles | CA03 | La información debe actualizarse cuando cambie el estado de los módulos. | Seguimiento bancario → Módulos de atención | Ver módulos activos y no activos; comprobar cambios de la cola. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-07 | Notificación de proximidad del turno | CA01 | El sistema debe identificar cuando el turno del usuario se encuentre próximo. | Notificaciones → Activar avisos del dispositivo | Aceptar permiso en HTTPS y comprobar aviso de proximidad y módulo. | Pendiente de aceptación sobre GitHub Pages | Permiso, navegador, HTTPS y sistema operativo; recepción física no probada. No hay push remoto. |
| HU-07 | Notificación de proximidad del turno | CA02 | El sistema debe enviar una notificación al dispositivo del usuario. | Notificaciones → Activar avisos del dispositivo | Aceptar permiso en HTTPS y comprobar aviso de proximidad y módulo. | Pendiente de aceptación sobre GitHub Pages | Permiso, navegador, HTTPS y sistema operativo; recepción física no probada. No hay push remoto. |
| HU-07 | Notificación de proximidad del turno | CA03 | La notificación debe indicar que el turno se encuentra próximo y que debe acercarse para su atención. | Notificaciones → Activar avisos del dispositivo | Aceptar permiso en HTTPS y comprobar aviso de proximidad y módulo. | Pendiente de aceptación sobre GitHub Pages | Permiso, navegador, HTTPS y sistema operativo; recepción física no probada. No hay push remoto. |
| HU-08 | Actualización del estado del turno | CA01 | El sistema debe mostrar el estado actual del turno del usuario. | Seguimiento → Notificaciones | Esperar o adelantar el reloj local de prueba; verificar estado y llamada. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-08 | Actualización del estado del turno | CA02 | El sistema debe actualizar el estado cuando exista un cambio en la atención. | Seguimiento → Notificaciones | Esperar o adelantar el reloj local de prueba; verificar estado y llamada. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-08 | Actualización del estado del turno | CA03 | El sistema debe informar cuando el turno haya sido llamado para atención. | Seguimiento → Notificaciones | Esperar o adelantar el reloj local de prueba; verificar estado y llamada. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-12 | Cancelación de turno | CA01 | El sistema debe mostrar la opción de cancelar un turno activo. | Turnos → Cancelar → Confirmar | Cancelar y comprobar el estado en historial. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-12 | Cancelación de turno | CA02 | El sistema debe solicitar una confirmación antes de cancelar el turno. | Turnos → Cancelar → Confirmar | Cancelar y comprobar el estado en historial. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-12 | Cancelación de turno | CA03 | El sistema debe actualizar el estado del turno después de confirmar la cancelación. | Turnos → Cancelar → Confirmar | Cancelar y comprobar el estado en historial. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-15 | Consulta de horarios de menor demanda | CA01 | El sistema debe mostrar los horarios disponibles para el establecimiento seleccionado. | Detalle → Horarios de menor demanda | Comprobar que las franjas sugeridas tienen cupos y cambian con las condiciones locales. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-15 | Consulta de horarios de menor demanda | CA02 | El sistema debe identificar los horarios que presentan menor demanda según la información disponible. | Detalle → Horarios de menor demanda | Comprobar que las franjas sugeridas tienen cupos y cambian con las condiciones locales. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-15 | Consulta de horarios de menor demanda | CA03 | El sistema debe actualizar la información cuando cambien las condiciones utilizadas para estimar la demanda. | Detalle → Horarios de menor demanda | Comprobar que las franjas sugeridas tienen cupos y cambian con las condiciones locales. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-17 | Lista de verificación de documentos del trámite | CA01 | El sistema debe mostrar, para el tipo de atención seleccionado, la lista de documentos y requisitos necesarios. | Bancos → Servicio → Documentos para tu trámite | Marcar documentos, comprobar pendientes y consultar fuente si no hay requisitos registrados. | Pendiente de aceptación sobre GitHub Pages | Requisitos confirmados solo para productos consultados; otros son orientación condicional. |
| HU-17 | Lista de verificación de documentos del trámite | CA02 | El usuario debe poder marcar cada documento como "listo" y ver cuántos le faltan por preparar. | Bancos → Servicio → Documentos para tu trámite | Marcar documentos, comprobar pendientes y consultar fuente si no hay requisitos registrados. | Pendiente de aceptación sobre GitHub Pages | Requisitos confirmados solo para productos consultados; otros son orientación condicional. |
| HU-17 | Lista de verificación de documentos del trámite | CA03 | El sistema debe indicar cuando el trámite no tenga requisitos registrados y sugerir consultar con la entidad. | Bancos → Servicio → Documentos para tu trámite | Marcar documentos, comprobar pendientes y consultar fuente si no hay requisitos registrados. | Pendiente de aceptación sobre GitHub Pages | Requisitos confirmados solo para productos consultados; otros son orientación condicional. |
| HU-18 | Aviso de demora extraordinaria | CA01 | El sistema debe mostrar un aviso cuando la entidad registre una interrupción o demora extraordinaria que afecte los turnos activos. | Seguimiento → Incidencias | En el modelo de cola de una sede con suficientes personas, comprobar incidencia, motivo, aumento y restablecimiento. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-18 | Aviso de demora extraordinaria | CA02 | El aviso debe indicar el motivo general y, cuando esté disponible, el tiempo adicional estimado. | Seguimiento → Incidencias | En el modelo de cola de una sede con suficientes personas, comprobar incidencia, motivo, aumento y restablecimiento. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-18 | Aviso de demora extraordinaria | CA03 | El sistema debe actualizar o retirar el aviso cuando la atención se restablezca. | Seguimiento → Incidencias | En el modelo de cola de una sede con suficientes personas, comprobar incidencia, motivo, aumento y restablecimiento. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-19 | Generación de turno mediante código QR | CA01 | El sistema debe permitir iniciar la generación del turno al escanear el código QR del establecimiento. | Detalle bancario → QR de agencia / cámara de celular | Escanear el QR de agencia, abrir la sede correcta, generar turno; probar código inválido y falta de disponibilidad. | Pendiente de aceptación sobre GitHub Pages | QR de banco contiene enlace a la sede del despliegue. Escaneo físico y URL pública por validar; ticket QR fijo ilustrativo. |
| HU-19 | Generación de turno mediante código QR | CA02 | El sistema debe asociar el turno generado al establecimiento del código escaneado y al tipo de atención elegido. | Detalle bancario → QR de agencia / cámara de celular | Escanear el QR de agencia, abrir la sede correcta, generar turno; probar código inválido y falta de disponibilidad. | Pendiente de aceptación sobre GitHub Pages | QR de banco contiene enlace a la sede del despliegue. Escaneo físico y URL pública por validar; ticket QR fijo ilustrativo. |
| HU-19 | Generación de turno mediante código QR | CA03 | El sistema debe informar cuando el código no sea válido o el servicio de turnos no esté disponible. | Detalle bancario → QR de agencia / cámara de celular | Escanear el QR de agencia, abrir la sede correcta, generar turno; probar código inválido y falta de disponibilidad. | Pendiente de aceptación sobre GitHub Pages | QR de banco contiene enlace a la sede del despliegue. Escaneo físico y URL pública por validar; ticket QR fijo ilustrativo. |
| HU-20 | Consulta de afluencia actual del establecimiento | CA01 | El sistema debe mostrar el nivel de afluencia actual (bajo, medio o alto) del establecimiento seleccionado. | Establecimientos y detalle → Afluencia | Comprobar nivel, hora de actualización y estado no disponible fuera de horario local. | Pendiente de aceptación sobre GitHub Pages | Nivel y actualización del modelo local, no afluencia institucional en vivo. |
| HU-20 | Consulta de afluencia actual del establecimiento | CA02 | El sistema debe mostrar la hora de la última actualización de la información. | Establecimientos y detalle → Afluencia | Comprobar nivel, hora de actualización y estado no disponible fuera de horario local. | Pendiente de aceptación sobre GitHub Pages | Nivel y actualización del modelo local, no afluencia institucional en vivo. |
| HU-20 | Consulta de afluencia actual del establecimiento | CA03 | El sistema debe indicar cuando la información de afluencia no esté disponible. | Establecimientos y detalle → Afluencia | Comprobar nivel, hora de actualización y estado no disponible fuera de horario local. | Pendiente de aceptación sobre GitHub Pages | Nivel y actualización del modelo local, no afluencia institucional en vivo. |
| HU-21 | Seguimiento por etapas de la atención | CA01 | El sistema debe mostrar las etapas del proceso de atención y resaltar la etapa actual del usuario. | Seguimiento clínico → Etapas | Comprobar etapa actual, siguiente área y transición por el modelo local. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-21 | Seguimiento por etapas de la atención | CA02 | El sistema debe indicar la siguiente etapa y el lugar o área donde corresponde continuar. | Seguimiento clínico → Etapas | Comprobar etapa actual, siguiente área y transición por el modelo local. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-21 | Seguimiento por etapas de la atención | CA03 | El sistema debe actualizar la etapa cuando el establecimiento registre el avance. | Seguimiento clínico → Etapas | Comprobar etapa actual, siguiente área y transición por el modelo local. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-22 | Consulta del turno sin registro | CA01 | El sistema debe permitir consultar el estado de un turno ingresando el número de ticket y el establecimiento, sin iniciar sesión. | Inicio → Consultar mi turno | Consultar sede y ticket sin cuenta; verificar posición, estado y mensaje si no está vigente. | Pendiente de aceptación sobre GitHub Pages | Consulta los tickets de la misma sesión, sin base de datos común. |
| HU-22 | Consulta del turno sin registro | CA02 | El sistema debe mostrar al menos la posición y el estado del turno consultado. | Inicio → Consultar mi turno | Consultar sede y ticket sin cuenta; verificar posición, estado y mensaje si no está vigente. | Pendiente de aceptación sobre GitHub Pages | Consulta los tickets de la misma sesión, sin base de datos común. |
| HU-22 | Consulta del turno sin registro | CA03 | El sistema debe mostrar un mensaje claro cuando los datos no correspondan a un turno vigente. | Inicio → Consultar mi turno | Consultar sede y ticket sin cuenta; verificar posición, estado y mensaje si no está vigente. | Pendiente de aceptación sobre GitHub Pages | Consulta los tickets de la misma sesión, sin base de datos común. |
| HU-23 | Configuración de la alerta de proximidad | CA01 | El sistema debe permitir elegir entre opciones predefinidas de anticipación (por ejemplo, 3, 5 o 10 turnos antes). | Seguimiento → Aviso de proximidad | Comprobar valor por defecto 3, cambiar a 5 o 10 y observar aplicación al turno. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-23 | Configuración de la alerta de proximidad | CA02 | El sistema debe aplicar la opción elegida al aviso del turno activo del usuario. | Seguimiento → Aviso de proximidad | Comprobar valor por defecto 3, cambiar a 5 o 10 y observar aplicación al turno. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-23 | Configuración de la alerta de proximidad | CA03 | El sistema debe usar un valor por defecto cuando el usuario no elija ninguna opción. | Seguimiento → Aviso de proximidad | Comprobar valor por defecto 3, cambiar a 5 o 10 y observar aplicación al turno. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-24 | Alerta de tiempo disponible | CA01 | El sistema debe permitir al usuario ingresar el tiempo que tiene disponible para su atención. | Seguimiento → Tiempo disponible | Ingresar un tiempo menor a la espera; comprobar comparación y opciones de cancelar/reprogramar. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-24 | Alerta de tiempo disponible | CA02 | El sistema debe comparar el tiempo disponible con el tiempo estimado de espera y mostrar el resultado. | Seguimiento → Tiempo disponible | Ingresar un tiempo menor a la espera; comprobar comparación y opciones de cancelar/reprogramar. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-24 | Alerta de tiempo disponible | CA03 | El sistema debe ofrecer reprogramar o cancelar el turno cuando la espera estimada supere el tiempo disponible. | Seguimiento → Tiempo disponible | Ingresar un tiempo menor a la espera; comprobar comparación y opciones de cancelar/reprogramar. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-25 | Rango de espera de la cita | CA01 | El sistema debe mostrar el tiempo de espera de la cita como un rango de minutos (por ejemplo, de 15 a 20 minutos). | Detalle clínico y Seguimiento | Comparar rango antes de reservar y al cambiar la espera. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-25 | Rango de espera de la cita | CA02 | El sistema debe mostrar el rango antes de que el paciente llegue a la clínica. | Detalle clínico y Seguimiento | Comparar rango antes de reservar y al cambiar la espera. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-25 | Rango de espera de la cita | CA03 | El sistema debe cambiar el rango cuando la espera sea mayor o menor a lo que se mostró. | Detalle clínico y Seguimiento | Comparar rango antes de reservar y al cambiar la espera. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-26 | Confirmación para continuar el proceso | CA01 | El sistema debe mostrar si el paciente tiene que continuar con otro paso o si su atención ya terminó. | Seguimiento clínico → Etapas | Comprobar indicación del paso siguiente y finalización. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-26 | Confirmación para continuar el proceso | CA02 | Si debe continuar, el sistema debe decir cuál es el paso que sigue. | Seguimiento clínico → Etapas | Comprobar indicación del paso siguiente y finalización. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-26 | Confirmación para continuar el proceso | CA03 | El sistema debe cambiar el mensaje cuando la clínica registre que el paciente terminó. | Seguimiento clínico → Etapas | Comprobar indicación del paso siguiente y finalización. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-27 | Aviso por atención preferencial | CA01 | El sistema debe mostrar un aviso cuando se atienda a pacientes con prioridad y eso retrase la cita. | Seguimiento clínico → Incidencias | Observar retraso preferencial, motivo sin datos de terceros y nueva espera. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-27 | Aviso por atención preferencial | CA02 | El aviso debe decir el motivo en general, sin mostrar datos de otros pacientes. | Seguimiento clínico → Incidencias | Observar retraso preferencial, motivo sin datos de terceros y nueva espera. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-27 | Aviso por atención preferencial | CA03 | El sistema debe cambiar el tiempo de espera cuando muestre el aviso. | Seguimiento clínico → Incidencias | Observar retraso preferencial, motivo sin datos de terceros y nueva espera. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-30 | Vista resumida cuando estoy apurada | CA01 | El sistema debe mostrar en una sola pantalla el tiempo de espera, el paso actual y el siguiente paso. | Inicio → Vista resumida de mi atención clínica | Con un turno clínico, activar vista resumida; comprobar espera, etapa y siguiente paso; volver. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-30 | Vista resumida cuando estoy apurada | CA02 | El paciente debe poder activar la vista resumida desde la pantalla principal. | Inicio → Vista resumida de mi atención clínica | Con un turno clínico, activar vista resumida; comprobar espera, etapa y siguiente paso; volver. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-30 | Vista resumida cuando estoy apurada | CA03 | El sistema debe poder volver a la vista completa cuando el paciente lo pida. | Inicio → Vista resumida de mi atención clínica | Con un turno clínico, activar vista resumida; comprobar espera, etapa y siguiente paso; volver. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-35 | Asignación de ticket y código de atención | CA01 | El sistema debe registrar el motivo de la solicitud o trámite ingresado. | Revisión → Ticket → Seguimiento | Comprobar servicio, código distinto por turno y módulo asignado. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-35 | Asignación de ticket y código de atención | CA02 | El sistema debe generar un código de turno identificable y único. | Revisión → Ticket → Seguimiento | Comprobar servicio, código distinto por turno y módulo asignado. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-35 | Asignación de ticket y código de atención | CA03 | El sistema debe clasificar el ticket según la ventanilla o área pertinente. | Revisión → Ticket → Seguimiento | Comprobar servicio, código distinto por turno y módulo asignado. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-36 | Estimación del tiempo de espera | CA01 | El sistema debe calcular y mostrar un estimado de tiempo según el ritmo de las ventanillas. | Seguimiento → Espera, módulos y posición | Observar cálculo según ritmo y módulos activos; cambio cuando avanza la cola. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-36 | Estimación del tiempo de espera | CA02 | El sistema debe actualizar el cálculo de tiempo en tiempo real. | Seguimiento → Espera, módulos y posición | Observar cálculo según ritmo y módulos activos; cambio cuando avanza la cola. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-36 | Estimación del tiempo de espera | CA03 | El sistema debe notificar o reflejar el número de turnos restantes en cola. | Seguimiento → Espera, módulos y posición | Observar cálculo según ritmo y módulos activos; cambio cuando avanza la cola. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-38 | Alerta de proximidad de turno para reducir demoras | CA01 | El sistema debe detectar cuándo un turno se encuentra próximo a ser llamado. | Seguimiento y notificaciones | Comprobar alerta visual al aproximarse y ventanilla asignada. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-38 | Alerta de proximidad de turno para reducir demoras | CA02 | El sistema debe emitir una alerta sonora o visual en la plataforma. | Seguimiento y notificaciones | Comprobar alerta visual al aproximarse y ventanilla asignada. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-38 | Alerta de proximidad de turno para reducir demoras | CA03 | El sistema debe recordar la ventanilla hacia la cual el usuario debe dirigirse. | Seguimiento y notificaciones | Comprobar alerta visual al aproximarse y ventanilla asignada. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-42 | Consulta del tiempo estimado de espera | CA01 | El sistema debe calcular un tiempo estimado de espera según la cantidad de personas y el ritmo de atención | RENIEC → Seguimiento | Observar cálculo de espera y actualización con el avance. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-42 | Consulta del tiempo estimado de espera | CA02 | El sistema debe actualizar el tiempo estimado conforme avance la atención. | RENIEC → Seguimiento | Observar cálculo de espera y actualización con el avance. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-42 | Consulta del tiempo estimado de espera | CA03 | El sistema debe mostrar al usuario el tiempo apróximado restante para su atención. | RENIEC → Seguimiento | Observar cálculo de espera y actualización con el avance. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-43 | Ticket virtual para conocer la posición en la fila | CA01 | El sistema debe generar un ticket virtual al momento de registrarse en la fila. | RENIEC → Ticket → Seguimiento | Generar ticket; comprobar posición y actualización automática una vez en cola. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-43 | Ticket virtual para conocer la posición en la fila | CA02 | El ticket debe mostrar la posición actual del usuario dentro de la fila. | RENIEC → Ticket → Seguimiento | Generar ticket; comprobar posición y actualización automática una vez en cola. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-43 | Ticket virtual para conocer la posición en la fila | CA03 | El sistema debe actualizar automáticamente la posición del usuario conforme avance la fila. | RENIEC → Ticket → Seguimiento | Generar ticket; comprobar posición y actualización automática una vez en cola. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-44 | Notificación de proximidad del turno de atención | CA01 | El sistema debe identificar cuándo el usuario se encuentre próximo a su turno. | RENIEC → Notificaciones | Comprobar aviso de proximidad y llamada de atención. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-44 | Notificación de proximidad del turno de atención | CA02 | El sistema debe enviar una notificación cuando falten pocos turnos para su atención. | RENIEC → Notificaciones | Comprobar aviso de proximidad y llamada de atención. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-44 | Notificación de proximidad del turno de atención | CA03 | El sistema debe informar al usuario cuando sea su turno de atención. | RENIEC → Notificaciones | Comprobar aviso de proximidad y llamada de atención. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-46 | Consulta de requisitos para el trámite del DNI | CA01 | El sistema debe mostrar los requisitos correspondientes al trámite seleccionado. | RENIEC → Servicio → Documentos | Elegir duplicado; comprobar lista, obligatoriedad y acceso móvil. | Pendiente de aceptación sobre GitHub Pages | Duplicado, renovación y actualización: referencias oficiales; condiciones específicas dependen del canal y trámite. |
| HU-46 | Consulta de requisitos para el trámite del DNI | CA02 | El sistema debe permitir consultar la información desde el celular. | RENIEC → Servicio → Documentos | Elegir duplicado; comprobar lista, obligatoriedad y acceso móvil. | Pendiente de aceptación sobre GitHub Pages | Duplicado, renovación y actualización: referencias oficiales; condiciones específicas dependen del canal y trámite. |
| HU-46 | Consulta de requisitos para el trámite del DNI | CA03 | El sistema debe indicar cuando un requisito sea obligatorio para completar el trámite. | RENIEC → Servicio → Documentos | Elegir duplicado; comprobar lista, obligatoriedad y acceso móvil. | Pendiente de aceptación sobre GitHub Pages | Duplicado, renovación y actualización: referencias oficiales; condiciones específicas dependen del canal y trámite. |
| HU-47 | Planificación anticipada del turno de atención | CA01 | El sistema debe permitir seleccionar una fecha y horario disponible para realizar el trámite. | RENIEC → Servicio → Calendario → Confirmación | Escoger fecha y horario con cupos; confirmar fecha y hora. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-47 | Planificación anticipada del turno de atención | CA02 | El sistema debe mostrar la disponibilidad de atención antes de confirmar la solicitud. | RENIEC → Servicio → Calendario → Confirmación | Escoger fecha y horario con cupos; confirmar fecha y hora. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-47 | Planificación anticipada del turno de atención | CA03 | El sistema debe generar una confirmación con la fecha y horario seleccionados. | RENIEC → Servicio → Calendario → Confirmación | Escoger fecha y horario con cupos; confirmar fecha y hora. | Pendiente de aceptación sobre GitHub Pages | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |

## Registro histórico: MATRIZ_HU_IMPLEMENTACION.md

# Matriz de implementación — V2.4

Las 30 HU seleccionadas se mantienen; los 90 CA se transcriben del informe TB1 en `CRITERIOS_ACEPTACION_90.csv`. Los criterios duplicados de HU-04 se preservan. El alcance es local; la matriz no acredita cumplimiento formal ni integración con entidades.

| HU | Historia original | Ruta de verificación | Limitación |
|---|---|---|---|
| HU-01 | Selección del tipo de atención | Detalle → Solicitar turno → Servicio → Revisión | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-02 | Generación del turno | Revisión → Confirmación | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-03 | Consulta de posición en la cola | Seguimiento y consulta | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-04 | Consulta del tiempo estimado de espera | Seguimiento y consulta | CA01–CA03 repiten literalmente HU-03 en el informe original; no se modificaron. |
| HU-05 | Seguimiento del turno desde el celular | Seguimiento responsive | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-06 | Consulta de módulos disponibles | Seguimiento bancario → Módulos de atención | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-07 | Notificación de proximidad del turno | Notificaciones → Activar avisos del dispositivo | Permiso, navegador, HTTPS y sistema operativo; recepción física no probada. No hay push remoto. |
| HU-08 | Actualización del estado del turno | Seguimiento → Notificaciones | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-12 | Cancelación de turno | Turnos → Cancelar → Confirmar | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-15 | Consulta de horarios de menor demanda | Detalle → Horarios de menor demanda | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-17 | Lista de verificación de documentos del trámite | Bancos → Servicio → Documentos para tu trámite | Requisitos confirmados solo para productos consultados; otros son orientación condicional. |
| HU-18 | Aviso de demora extraordinaria | Seguimiento → Incidencias | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-19 | Generación de turno mediante código QR | Detalle bancario → QR de agencia / cámara de celular | QR de banco contiene enlace a la sede del despliegue. Escaneo físico y URL pública por validar; ticket QR fijo ilustrativo. |
| HU-20 | Consulta de afluencia actual del establecimiento | Establecimientos y detalle → Afluencia | Nivel y actualización del modelo local, no afluencia institucional en vivo. |
| HU-21 | Seguimiento por etapas de la atención | Seguimiento clínico → Etapas | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-22 | Consulta del turno sin registro | Inicio → Consultar mi turno | Consulta los tickets de la misma sesión, sin base de datos común. |
| HU-23 | Configuración de la alerta de proximidad | Seguimiento → Aviso de proximidad | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-24 | Alerta de tiempo disponible | Seguimiento → Tiempo disponible | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-25 | Rango de espera de la cita | Detalle clínico y Seguimiento | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-26 | Confirmación para continuar el proceso | Seguimiento clínico → Etapas | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-27 | Aviso por atención preferencial | Seguimiento clínico → Incidencias | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-30 | Vista resumida cuando estoy apurada | Inicio → Vista resumida de mi atención clínica | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-35 | Asignación de ticket y código de atención | Revisión → Ticket → Seguimiento | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-36 | Estimación del tiempo de espera | Seguimiento → Espera, módulos y posición | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-38 | Alerta de proximidad de turno para reducir demoras | Seguimiento y notificaciones | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-42 | Consulta del tiempo estimado de espera | RENIEC → Seguimiento | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-43 | Ticket virtual para conocer la posición en la fila | RENIEC → Ticket → Seguimiento | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-44 | Notificación de proximidad del turno de atención | RENIEC → Notificaciones | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |
| HU-46 | Consulta de requisitos para el trámite del DNI | RENIEC → Servicio → Documentos | Duplicado, renovación y actualización: referencias oficiales; condiciones específicas dependen del canal y trámite. |
| HU-47 | Planificación anticipada del turno de atención | RENIEC → Servicio → Calendario → Confirmación | Cola, cupos y eventos de prueba locales; aceptación final sobre GitHub Pages pendiente. |


## Registro histórico: GUIA_HTML_CSS_JS.md

# Guía de archivos — TurnoFacilito

## 1. HTML5

Abre `pages/index.html`. En el `head` se enlazan `../css/styles.css` y `../js/main.js`. El `body` contiene la navegación, encabezado y un `<main>` con secciones de **Inicio**, **Establecimientos** y **Ayuda**. Al final existen dos `<template>` para formularios (servicios y registro), que JavaScript clona cuando el usuario lo requiere.

## 2. CSS3

Abre `css/styles.css`. Las reglas de clases (`.welcome-banner`, `.filter-panel`, `.service-selection`) definen cómo lucen los elementos HTML. Los `@media` adaptan el diseño a pantallas pequeñas. El HTML no incluye bloques `<style>`.

## 3. JavaScript

Abre `js/main.js`. El arreglo `sedes` contiene la información de los 12 establecimientos. `actualizarInicio()` rellena los contadores y las tarjetas destacadas; `prepararEstablecimientos()` carga los distritos; `actualizarResultados()` dibuja las tarjetas filtradas. `prepararServicio()` y `prepararDatos()` completan las plantillas HTML. Las funciones de turnos gestionan la simulación en memoria.

## 4. Para probar

Abrir `pages/index.html` con Live Server. Buscar RENIEC, elegir servicio, registrar nombres, revisar, confirmar, consultar el seguimiento o simular el proceso, cancelar y consultar historial. En móvil comprobar el menú inferior. Al actualizar se borran los turnos: es el comportamiento esperado de este prototipo sin persistencia.


## Registro histórico: MEJORAS_V2.md

# TurnoFacilito — Actualización de interfaz y turnos V2.0 (registro histórico; ver MEJORAS_V21.md para los cambios posteriores) (24/11/2026)

## Cambios entregados

| N.º | Mejora | Implementación |
|---|---|---|
| 1 | QR visual fijo | `assets/images/qr_visual.png`, mismo recurso en sedes, tickets, consulta y seguimiento. Contiene únicamente el texto `TF-VISUAL`; no contiene DNI, ticket ni sede. |
| 2 | Accesos rápidos | Tarjetas con iconos y textos, debajo de la búsqueda. |
| 3 | Turnos activos | Mensaje de estado vacío solicitado; se conserva el botón de exploración. |
| 4 | Buscador y filtros | Iconos SVG alineados dentro de los controles, categorías y filtros funcionales. |
| 5 | Textos | Se eliminaron avisos repetitivos y etiquetas técnicas. Se conserva la aclaración académica en el footer, confirmación y descarga, y la recomendación de usar datos ficticios en el formulario. |
| 6 | DNI | Obligatorio, exactamente ocho dígitos; se conserva el cero inicial y se muestra enmascarado. |
| 7 | Footer | Fondo azul oscuro, enlaces funcionales a privacidad, términos y contacto/ayuda. No se inventó un correo de soporte. |
| 8 | Consulta | Búsqueda por sede y ticket local, QR ilustrativo, cámara e imagen mediante BarcodeDetector si está disponible. Alternativa manual cuando no lo está. |
| 9 | IDs HU | Eliminados de la interfaz; permanecen en esta documentación y matriz. |
| 10 | Agenda | Atención inmediata cuando el horario referencial está abierto; atención programada, fechas visibles, franjas de 30 min, cupos, horarios pasados y agotados deshabilitados. |
| 11 | Privacidad | Eliminar mis datos en perfil con confirmación; elimina los registros de la sesión. |
| 12 | Ticket | Comprobante digital descargable PNG con QR fijo, fecha/hora y DNI parcial; aviso de no validez institucional. |
| 13 | Seguimiento | Línea de estados e indicador de turno programado; acceso a descarga. |
| 14 | Establecimientos | Fotos conservadas, estructura de tarjetas uniforme y estado de apertura referencial. |
| 15 | Experiencia general | Espaciado, iconos, foco visible, controles etiquetados, media queries y preferencia de movimiento reducido. |

## Límites funcionales y privacidad

- GitHub Pages aloja únicamente HTML/CSS/JS. Los cupos son un ejemplo determinista por sede, servicio, fecha y franja, descontando los turnos locales existentes. Cancelar libera el cupo y reprogramar cambia la asignación. Se mantiene una solicitud activa por establecimiento en la sesión. Los horarios de servicios sanitarios sin horario numérico usan una franja local orientativa de lunes a viernes, 08:00–16:00. No se incluyen feriados ni disponibilidad institucional.
- La modalidad inmediata se habilita según la hora de Lima y el horario referencial de la sede. Un turno programado no entra en cola antes de su hora; se usa el control Ingresar a la cola cuando corresponde. Las posiciones, tiempos, módulos, avisos y etapas se gestionan localmente.
- QR fijo: no puede identificar el ticket o establecimiento. La selección manual de sede y número es la consulta funcional. El flujo avanzado permite probar códigos de agencia TF-DEMO:bcp, TF-DEMO:bbva, TF-DEMO:interbank y TF-DEMO:scotiabank. Los cuatro PNG antiguos se conservan como recursos de prueba técnica, no se muestran como QR individuales en la interfaz principal. La lectura de cámara e imagen depende del soporte del navegador; no se acredita como prueba de aceptación aprobada.
- HU-19: representación del flujo por QR con códigos de agencia de ejemplo; el QR visual común por sí mismo no satisface la identificación automática. HU-22: consulta local sin inicio de sesión. HU-45 (fuera de las 30 core seleccionadas): el QR común NO satisface el criterio de asociación con el ticket individual.
- HU-07/23/24/38/44: notificaciones dentro de la página, no push de producción. HU-17/46: orientación documental no oficial. HU-03/04/05/06/08/15/18/20/21/25/26/27/35/36/42/43/47: representación local sin backend institucional. No se declara cumplimiento pleno de las 30 HU sin pruebas de aceptación.
- No se utiliza almacenamiento permanente de nombres, DNI, correo ni datos de atención. Se conservan en memoria durante la página abierta. Los archivos PNG que descargue el usuario permanecen en su dispositivo. Emplear datos ficticios. El aviso académico debe mantenerse también en comprobantes, pues se pueden compartir separados del sitio.

## Actualizar GitHub Pages

Trabaja en la carpeta local que muestra GitHub Desktop (Repositorio → Mostrar en el Explorador). Haz una copia de seguridad. Sustituye los archivos de la raíz por el contenido del ZIP, manteniendo la carpeta oculta `.git` y evitando una carpeta anidada. Elimina los archivos antiguos que hayan quedado fuera de la nueva estructura si no se usan. Confirma cambios en `main` y Enviar al origen. En GitHub, verifica Acciones y abre la URL existente; usa Ctrl+Shift+R. No hace falta crear otro repositorio ni volver a activar Pages.


## Registro histórico: MEJORAS_V21.md

# TurnoFacilito V2.1 — Correcciones de UX/UI y seguimiento

Se conservan los recursos, navegación, estructura HTML/CSS/JS y alcance académico de la V2.0. Esta nota complementa y, para los cambios descritos, sustituye las indicaciones históricas de MEJORAS_V2.md y las pruebas anteriores.

| N.º | Cambio |
|---|---|
| 01 | Calendario con fechas en cuadrícula adaptable, franjas de mañana y tarde, estados de cupos y resumen del horario elegido. El panel no se estira verticalmente por reglas flex heredadas. |
| 02 | Se elimina el recuadro de datos ficticios de los formularios; la recomendación se conserva en el footer y en Privacidad. |
| 03 | Se elimina el texto inferior de confirmación del ticket web. El PNG conserva la identificación académica, pues puede circular por separado. |
| 04 | Se retira la tarjeta explicativa de avance; las notificaciones permanecen en su menú. |
| 05 | Seguimiento automático con temporizador, cuenta regresiva, avance de personas, avisos de proximidad, llamada, etapas clínicas y finalización. Fechas en formato legible y zona horaria de Lima. |
| 06 | Header con iconos SVG de ubicación y accesibilidad, perfil accesible mediante avatar/nombre y sin la etiqueta «Datos de esta sesión». |
| 07 | Footer con el descriptor oficial «Gestor inteligente de colas y tiempos de espera». |
| 08 | Contacto con los seis integrantes del Grupo 5, correos UPC enlazados mediante mailto y guía de uso. Confirmar consentimiento antes de publicar los datos del equipo. |

## Funcionamiento automático

La cola se administra mediante instantes absolutos de JavaScript. El reloj se comprueba cada segundo mientras la página está abierta. Los turnos programados entran en cola al alcanzar la fecha/hora de Lima (UTC-5); no antes. Cada persona delante consume una parte del tiempo estimado inicial, y el contador muestra el tiempo restante. Al quedar cero personas, se genera el aviso de llamada. La atención no clínica finaliza después de dos minutos; las etapas clínicas avanzan en intervalos de un minuto, y se puede confirmar manualmente una etapa cuando el turno esté llamado. Cuando la cola inicial tiene al menos cinco personas se muestra una incidencia determinista después del primer avance (prioridad clínica o interrupción de atención), se añade una demora y se notifica su restablecimiento. No se trata de datos reales de instituciones. La finalización conserva el historial y no obliga al usuario a navegar fuera de la pantalla. La actualización del estado no reconstruye los formularios mientras se editan.

Los temporizadores no funcionan como un servicio en segundo plano con la página cerrada. Al volver a una pestaña abierta, se calcula el avance a partir del tiempo transcurrido. Los datos personales, citas y cupos continúan en memoria; se pierden al recargar o cerrar la página. No hay backend, cola compartida, envío de notificaciones push ni reserva oficial. La imagen QR fija es ilustrativa; no identifica individualmente el ticket. La consulta manual por sede y número sigue disponible. La matriz de HU mantiene sus limitaciones: la implementación es una representación académica y requiere pruebas formales para acreditar el cumplimiento de cada criterio.

## Publicación

Sustituir el contenido de la carpeta local del repositorio por los archivos de este ZIP, manteniendo `.git`, confirmar los cambios y enviarlos al origen. No crear otro repositorio ni volver a activar Pages.


## Registro histórico: MEJORAS_V22.md

# V2.2 — recorrido de prueba y repositorio

- Control secundario «Simular proceso» en el seguimiento de un turno activo. Abre un diálogo con progreso automático de 60 segundos: confirmado, en espera, próximo, en atención y finalizado. Presenta avisos de ejemplo y una vista de historial, sin escribirlos en los registros originales. Cerrar cancela el temporizador.
- El turno programado original conserva fecha, cupo y comportamiento automático normal.
- Organización conforme a la estructura del handbook: `assets/images`, `assets/icons`, `assets/fonts`, `assets/videos`, `css/styles.css`, `js/main.js`, `pages/index.html`, `docs/README.md`, favicon y gitignore. Se conserva acceso mínimo en raíz para GitHub Pages.
- Se mantienen limitaciones de QR fijo, disponibilidad local y ausencia de integración institucional.


## Registro histórico: MEJORAS_V23.md

# V2.3 — simulación manual integrada

- «Simular proceso» activa un recorrido en la misma tarjeta de seguimiento, sin diálogo ni temporizador.
- Cada clic avanza una etapa: Confirmado → En espera → En atención → Finalizado. No avanza solo.
- Se actualizan los indicadores de espera, las personas delante, la etapa activa y el mensaje de estado.
- Salir o volver al seguimiento recupera la vista del turno original. La prueba no modifica su horario, cupo, estado, notificaciones ni historial; la cola normal continúa según su propia lógica.
- Se conserva la estructura landing-page-solucion y el acceso de GitHub Pages.


## Registro histórico: MEJORAS_V24.md

# V2.4 — cierre funcional y consulta de turnos

- Consulta de ticket: selección filtrable de sede, métodos visuales, ayuda de número, resultados y estados activo/programado/finalizado/cancelado/inexistente; búsqueda sin cuenta en la misma sesión.
- Posición explícita y tiempos calculados según personas, ritmo promedio y módulos del modelo. Afluencia con nivel, última actualización y estado no disponible. El horario es referencial.
- Horarios de menor demanda calculados únicamente entre franjas con cupos de la próxima fecha disponible. Selección por servicio y fecha en el calendario original.
- Checklist por trámite con contador, condiciones y fuentes, incluyendo requisitos obligatorios de RENIEC. No pretende sustituir requisitos oficiales.
- Avisos internos y del dispositivo con permiso; service worker sin push remoto ni almacenamiento de datos. Requiere HTTPS y soporte del navegador.
- Vista resumida de atención clínica desde Inicio y Seguimiento, con etapa actual y siguiente.
- QR bancario funcional de acceso por enlace generado desde la dirección actual del sitio, con sede identificada y ruta de generación de turno. Se conservan códigos locales TF-DEMO y lectura con BarcodeDetector cuando compatible. QR del ticket fijo, ilustrativo, no identifica turnos; consulta por número.
- Se conserva el avance manual de prueba dentro del seguimiento sin modificar la cita original, así como el seguimiento automático real del modelo, el calendario, DNI, descarga de ticket y diseño responsive.

## Alcance pendiente

La información de colas, tiempos, disponibilidad, incidencias y módulos no procede de sistemas institucionales. Los turnos solo existen durante la sesión. El permiso de notificaciones, recepción física, cámara del móvil y navegación pública necesitan pruebas de aceptación reales. No se ha modificado la selección de 30 HU ni sus criterios.

## Referencias consultadas para documentos de trámite

- RENIEC: https://www.gob.pe/224-duplicado-de-dni
- RENIEC: https://identidad.reniec.gob.pe/preguntas-frecuentes-dni
- RENIEC: https://www.gob.pe/238-rectificacion-de-datos-del-dni-actualizar-domicilio-en-tu-dni
- BCP: https://www.viabcp.com/ayuda-bcp/cuenta-de-ahorros/como-abro-una-cuenta-de-ahorros
- Interbank: https://interbank.pe/web/guest/cuentas/cuentas-ahorro/cuenta-simple
- BBVA: https://www.bbva.pe/personas/productos/cuentas/ahorro.html
- Scotiabank: https://www.scotiabank.com.pe/blog/ahorros/cuenta-corriente/diferencias-entre-cuenta-corriente-y-ahorros

Para otros trámites se muestra información condicional de preparación o el enlace oficial; no se han validado exhaustivamente todos los productos de las entidades.


## Registro histórico: MEJORAS_V25.md

# TurnoFacilito V2.5 — Navegación y repositorio

- Botón accesible «Volver a la página anterior» en las vistas internas y soporte de Atrás/Adelante del navegador con History API.
- Al volver se recuperan la sede, servicio, modalidad, fecha y hora seleccionados, así como los filtros de la vista anterior, mientras permanezca la sesión. Los turnos confirmados no se crean nuevamente al navegar. Los campos personales sin guardar no se restauran.
- La entrada `index.html` de raíz usa `location.replace` hacia `pages/index.html`, preserva los parámetros de la URL y evita que el archivo de entrada sea un paso adicional del historial. Sin JavaScript queda el enlace de acceso y la redirección de respaldo.
- Se mantienen los nombres obligatorios del handbook: `assets/images`, `assets/icons`, `assets/fonts`, `assets/videos`, `css/styles.css`, `js/main.js`, `pages/index.html`, `docs/README.md`, `favicon.ico` y `.gitignore`. Los directorios sin recursos conservan `.gitkeep`. No se incorpora `wireframes.pdf` porque es opcional. Se conservan archivos complementarios de la V2.4 (`qr-encoder.js`, `sw.js`, documentos de trazabilidad, README raíz y `.nojekyll`).
- No se ejecutaron las mejoras adicionales de accesibilidad anteriormente propuestas ni se modificó el alcance académico de los turnos, QR o avisos. El historial de navegación conserva solo identificadores opacos en History API; los datos de las vistas están en memoria y se eliminan al utilizar Eliminar mis datos o recargar.

## Pruebas de esta revisión

Chromium mediante Playwright, con HTML, CSS y JavaScript originales cargados en un documento aislado. La navegación HTTP directa fue bloqueada por el entorno de pruebas. Resoluciones: 320, 390, 768, 1024, 1440 px. Se verificó búsqueda, apertura de detalle, botón Volver, historial Atrás/Adelante, restauración de filtro RENIEC, servicio y horario, registro ficticio, confirmación y conservación de un único turno al retroceder y avanzar. No hubo excepciones JavaScript ni desbordamiento horizontal en el recorrido comprobado. La redirección inicial y la carga desde la URL pública quedan pendientes de verificación tras el despliegue. No constituye una revalidación completa de las 30 HU.


## Registro histórico: PRUEBAS_DE_LA_VERSION.md

# Pruebas de la actualización – 24/11/2026

Se comprobó la sintaxis con `node --check js/main.js` y se ejecutaron recorridos mediante Chromium automatizado. Por restricciones del entorno, se cargó el HTML con CSS y JS incorporados y se sustituyeron únicamente las rutas de imágenes por sus bytes originales en URI de datos para las pruebas; no se usó un despliegue público. El ZIP conserva sus rutas relativas normales.

## Resultados observados

- Inicio: texto de estado vacío y accesos rápidos. Establecimientos: 12 tarjetas; apertura de detalle Scotiabank.
- Turno programado: selección de servicio, horarios visibles, DNI incompleto rechazado y DNI de 8 dígitos aceptado (cero inicial), revisión y confirmación S-001.
- Descarga efectiva del ticket PNG de 960 × 1120 px; DNI parcialmente oculto y QR ilustrativo.
- Consulta por sede y número: resultado Programado y acceso al seguimiento.
- Cancelación: el cupo de la franja pasó de 3 a 4 al cancelar la solicitud programada.
- Con reloj de prueba fijado a una hora de apertura de Lima, atención inmediata RENIEC: ticket R-001; avance de cola de 7 a 6 personas; demora extraordinaria y restablecimiento; reprogramación; intento de entrada anticipada a cola rechazado.
- QR: pantalla de consulta QR y acceso mediante código de agencia de ejemplo BCP. Lectura física con cámara y de una imagen no verificada; sujeta a BarcodeDetector.
- Privacidad: cerrar diálogo conserva los datos; confirmar elimina usuario, turnos y avisos.
- Vistas Inicio, Establecimientos, Consulta, Perfil, Privacidad, Términos, Contacto, Servicio, Datos, Confirmación, Seguimiento y Consulta QR comprobadas a 320, 390, 768, 1024 y 1440 px. Se corrigió un desbordamiento en el carrusel de fechas; no se observó desbordamiento del documento tras la corrección. El carrusel tiene desplazamiento horizontal propio intencional.
- No se detectaron errores JavaScript en los recorridos completados.

## Pendientes

Probar en la URL pública luego del commit/push, validar cámaras físicas y lectores de pantalla, comprobar criterios de contraste y teclado en detalle, ejecutar las 30 HU con todos sus criterios/escenarios Gherkin y validar con usuarios según el handbook. La prueba local no constituye certificación de accesibilidad ni verificación de atención institucional. Ver MEJORAS_V2.md para limitaciones.

## V2.1 — Comprobaciones adicionales

- Prueba local en Chromium con el HTML, CSS y JavaScript del paquete incorporados al navegador de pruebas; no se probó contra la URL pública. La navegación directa a archivos y hosts de prueba estaba bloqueada en este entorno; la comprobación no acredita la carga remota de los recursos.
- Calendario a 320, 390, 768, 1024 y 1440 px: ancho de documento igual al ancho de la ventana; tarjetas de fecha de aproximadamente 72 px de alto y franjas de 64–68 px, sin el estiramiento de la V2.0. Horarios en cuadrícula de 2–4 columnas.
- Selección de horario, validación del flujo de solicitud con DNI ficticio y descarga PNG: se completó el flujo. El aviso inferior de confirmación ya no aparece en pantalla.
- Mediante reloj virtual de pruebas: un turno programado permanece Programado antes de su hora, entra automáticamente en la cola, reduce personas pendientes, pasa a Llamado y finaliza con registro y notificaciones. No hay control de avance manual en el seguimiento.
- Contacto: seis tarjetas y seis enlaces mailto; texto del footer comprobado, sin desbordamiento a 320/390 px.
- No se detectaron errores JavaScript en los recorridos evaluados. Pendiente: verificación de publicación, prueba en dispositivos físicos y validación formal de las 30 HU.


## V2.2 — pruebas adicionales

- Sintaxis JavaScript: `node --check` sin errores.
- Comprobación de rutas relativas: existen todos los recursos HTML y las 12 imágenes de sedes generadas por JavaScript. El archivo de acceso contiene la redirección correcta a `pages/index.html`.
- Chromium con HTML, CSS y JS cargados en el navegador de pruebas: recorrido de 60 segundos con reloj adelantado, aviso de proximidad, llamada y finalización; el turno programado y las notificaciones originales permanecen intactos. Cierre mediante botón y Escape.
- Cinco anchos (320, 390, 768, 1024, 1440 px): sin desbordamiento horizontal en el diálogo y la vista evaluada. Sin errores JavaScript en el recorrido.
- La navegación HTTP/file del entorno de pruebas estaba bloqueada; se verificó la estructura estáticamente y las interacciones mediante carga directa del código. Pendiente comprobar la redirección y la carga completa tras publicar en GitHub Pages. No equivale a aceptación formal de las 30 HU.

## V2.3 — avance manual en seguimiento

- Sintaxis de JavaScript comprobada con `node --check`.
- Prueba local en Chromium con HTML, CSS y JS incorporados: se creó un turno programado de RENIEC, se activó la simulación en la misma tarjeta y se verificó que no avanza por sí sola después de 65 segundos de reloj virtual. Cada clic avanzó Confirmado → En espera → En atención → Finalizado.
- Se verificó la salida anticipada y el retorno al seguimiento original, sin modificación del turno ni de los avisos de la cita programada en la prueba.
- Recorrido completo comprobado en 320, 390, 768, 1024 y 1440 px; sin desbordamiento horizontal en la tarjeta o el documento ni errores JavaScript detectados.
- Pendiente verificar la versión publicada; el recorrido de prueba no sustituye las pruebas de aceptación de las HU.

## V2.4 — comprobaciones locales

- Sintaxis de `main.js`, `qr-encoder.js` y `sw.js` mediante Node; verificación de estructura y rutas relativas.
- Entorno: Chromium con HTML, CSS y JS cargados directamente en un documento aislado. El entorno bloqueó la navegación HTTP y a archivos locales. No se verificó el despliegue público ni la carga por URL de los recursos.
- Consulta: número inexistente, ticket válido programado y en espera, posición visible y ticket cancelado (mensaje de no vigencia).
- Flujo RENIEC: seleccionar duplicado, marcar un documento, verificar contador, escoger horario disponible, ingresar DNI ficticio, confirmar ticket y consultar. El modo Simular proceso avanza por clics y retorna a Programado sin alterar la cita.
- QR: código de ejemplo de BCP abre su selección de servicio. Se generó un QR de enlace con el codificador local y se decodificó fuera del navegador, comprobando el texto URL. Falta probar la apertura desde cámara física y el despliegue.
- Vista clínica: acceso resumido desde Inicio y regreso a vista completa. Modelo local: la cita permanece programada hasta su hora; se activa, cambia posición, muestra demora preferencial, restablece atención, evalúa límite y proximidad, comprueba módulos, disponibilidad de las franjas sugeridas y termina en historial. Se usaron instantes de prueba para avanzar la cola.
- Responsive: Inicio, Establecimientos, Consulta, Detalle, Seguimiento y QR en 320, 390, 768, 1024 y 1440 px; 30 combinaciones sin desbordamiento horizontal detectado. No se detectaron errores JS en dichos recorridos.
- Pendientes: ejecutar los 90 CA y escenarios Gherkin de las 30 HU sobre la URL final, probar permisos/notificaciones del sistema operativo, lector de cámara, acceso QR desde otro dispositivo, requisitos específicos por institución y accesibilidad con tecnologías de asistencia. No es una declaración de 30 HU aprobadas.

## V2.5

Consultar [pruebas de navegación de V2.5](MEJORAS_V25.md#pruebas-de-esta-revisión). Se verificaron los recorridos de retroceso y avance en cinco anchos de pantalla en documento aislado; falta validar el despliegue público.


## Licencia QR

# QRCode for JavaScript

Copyright (c) 2009 Kazuhiko Arase. Original source: https://www.d-project.com/; CommonJS adaptation bundled from qrcode-terminal 0.12.0 (vendor/QRCode).

The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


## Comprobaciones de V2.6

- `node --check js/main.js`: correcto.
- Chromium aislado: 320, 390, 768, 1024 y 1440 px; búsqueda, retroceso, avance, conservación de filtros y horario, datos ficticios, confirmación sin duplicados y sin excepciones JS en ese recorrido.
- Verificación estática de rutas del HTML; CSS y recursos gráficos conservados byte por byte. Biblioteca QR integrada: generación de una matriz de 37 módulos para el enlace de agencia comprobada mediante Node.
- La navegación HTTP del entorno está bloqueada; no se pudo verificar la carga por URL ni el QR de agencia en un despliegue real. Pendiente también la prueba de notificaciones nativas y la aceptación formal.
