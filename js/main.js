'use strict';

const SERVICIOS_BANCO = [
  ['apertura', 'Apertura de cuenta', 'Orientación sobre cuentas de ahorro y requisitos.'],
  ['tarjetas', 'Consulta de tarjetas', 'Atención informativa sobre tarjetas y reposiciones.'],
  ['pagos', 'Pagos y operaciones', 'Orientación para operaciones en ventanilla.'],
  ['asesoria', 'Asesoría bancaria', 'Consultas sobre productos y servicios.']
];
const sedes = [
  {id:'bcp', codigo:'B',nombre:'BCP – Plaza San Miguel',corto:'BCP',categoria:'Bancos',distrito:'San Miguel',direccion:'Centro Comercial Plaza San Miguel, Boulevard Plaza Mantaro, San Miguel, Lima, Perú',horario:'Lun–vie: 9:00–18:00 · Sáb: 9:00–13:00',espera:18,personas:4,imagen:'Bcp_SanMiguel.jpg',fuente:'https://plazasanmiguel.com.pe/brands/211',servicios:SERVICIOS_BANCO},
  {id:'interbank',codigo:'I',nombre:'Interbank – Ricardo Palma',corto:'Interbank',categoria:'Bancos',distrito:'Miraflores',direccion:'Av. Ricardo Palma 401, Miraflores, Lima, Perú',horario:'Lun–vie: 9:00–18:00 · Sáb: 9:00–13:00',espera:12,personas:3,imagen:'Interbank_Miraflores.jpg',fuente:'https://interbank.pe/web/guest/puntos-de-atencion',servicios:[['apertura','Apertura de cuenta','Consultas sobre apertura y documentos.'],['tarjetas','Tarjetas y reposiciones','Consultas de tarjetas de débito y crédito.'],['operaciones','Operaciones bancarias','Depósitos, pagos y otras operaciones.'],['asesoria','Atención personalizada','Orientación sobre productos bancarios.']]},
  {id:'bbva',codigo:'V',nombre:'BBVA – San Isidro',corto:'BBVA',categoria:'Bancos',distrito:'San Isidro',direccion:'Av. República de Panamá 3055, San Isidro, Lima, Perú',horario:'Lun–vie: 9:00–18:00 · Sáb: 9:00–12:00',espera:21,personas:5,imagen:'Bbva_SanIsidro.jpg',fuente:'https://www.bbva.pe/personas/oficinas/departamento/San-Isidro-Lima1.html',servicios:[['cuenta','Cuentas y productos','Información sobre cuentas bancarias.'],['tarjetas','Gestión de tarjetas','Consultas y solicitudes de atención.'],['creditos','Orientación de créditos','Información general sobre financiamiento.'],['caja','Operaciones en oficina','Pagos y consultas sobre operaciones.']]},
  {id:'scotiabank',codigo:'S',nombre:'Scotiabank – Agencia Capón',corto:'Scotiabank',categoria:'Bancos',distrito:'Cercado de Lima',direccion:'Jr. Ucayali 750, Cercado de Lima, Lima, Perú',horario:'Lun–vie: 9:00–18:00 · Sáb: 9:00–13:00',espera:9,personas:2,imagen:'Scotiabank_Lima.jpg',fuente:'https://www.scotiabank.com.pe/Personas/agencias',servicios:[['cuentas','Atención sobre cuentas','Orientación sobre cuentas y productos.'],['tarjetas','Tarjetas','Información sobre tarjetas y consultas.'],['operaciones','Caja y pagos','Operaciones generales de ventanilla.'],['asesoria','Asesoría financiera','Orientación sobre servicios bancarios.']]},
  {id:'ricardo-palma',codigo:'P',nombre:'Clínica Ricardo Palma – San Isidro',corto:'Clínica Ricardo Palma',categoria:'Salud',distrito:'San Isidro',direccion:'Av. Javier Prado Este 1066, San Isidro, Lima, Perú',horario:'Consultorios: verificar horario por especialidad',espera:25,personas:6,imagen:'Clinica_RicardoPalma.jpg',fuente:'https://preguntasfrecuentes.crp.com.pe/ubicaci%C3%B3n-de-la-cl%C3%ADnica',servicios:[['consulta','Consulta ambulatoria','Orientación para consultas de especialidad.'],['laboratorio','Laboratorio clínico','Información sobre exámenes de laboratorio.'],['imagen','Diagnóstico por imágenes','Orientación sobre exámenes diagnósticos.'],['admision','Admisión e informes','Consultas sobre el proceso de atención.']]},
  {id:'internacional',codigo:'C',nombre:'Clínica Internacional – San Borja',corto:'Clínica Internacional',categoria:'Salud',distrito:'San Borja',direccion:'Av. Guardia Civil 421, San Borja, Lima, Perú',horario:'Atención ambulatoria: verificar horario vigente',espera:14,personas:3,imagen:'Clinica_Internacional.jpg',fuente:'https://www.clinicainternacional.com.pe/sede/san-borja/',servicios:[['general','Medicina general','Orientación sobre consulta general.'],['especialidades','Especialidades médicas','Consultas sobre programación de especialidades.'],['laboratorio','Laboratorio','Información sobre análisis clínicos.'],['informes','Admisión y seguros','Orientación sobre admisión y cobertura.']]},
  {id:'dos-de-mayo',codigo:'D',nombre:'Hospital Nacional Dos de Mayo – Cercado de Lima',corto:'Hospital Dos de Mayo',categoria:'Salud',distrito:'Cercado de Lima',direccion:'Parque Historia de la Medicina Peruana s/n, altura de la cuadra 13 de Av. Grau, Cercado de Lima, Lima, Perú',horario:'Orientación y consulta externa: verificar horarios por servicio',espera:22,personas:5,imagen:'Hospital_DosDeMayo.jpg',fuente:'https://www.gob.pe/institucion/hndosdemayo/sedes',servicios:[['admision','Información de admisión','Orientación sobre requisitos y proceso de admisión.'],['consultas','Informes de consulta externa','Información sobre atención ambulatoria y especialidades.'],['laboratorio','Información de laboratorio','Orientación sobre procedimientos de análisis.'],['orientacion','Orientación al paciente','Consultas generales y ubicación de servicios.']]},
  {id:'rebagliati',codigo:'E',nombre:'Hospital Nacional Edgardo Rebagliati Martins – Jesús María',corto:'Hospital Rebagliati',categoria:'Salud',distrito:'Jesús María',direccion:'Av. Edgardo Rebagliati 490, Jesús María, Lima, Perú',horario:'Admisión y consulta externa: verificar horarios y requisitos',espera:30,personas:8,imagen:'Hospital_Rebagliati.jpg',fuente:'https://www.gob.pe/institucion/hnrebagliati/sedes',servicios:[['asegurados','Orientación de asegurados','Información para pacientes asegurados de EsSalud.'],['citas','Información sobre citas','Orientación sobre canales oficiales de consulta de citas.'],['ambulatoria','Consultas externas: información','Información general sobre atención ambulatoria.'],['admision','Admisión e informes','Consultas sobre documentación y orientación al paciente.']]},
  {id:'reniec',codigo:'R',nombre:'RENIEC – Sede Operativa Lima',corto:'RENIEC',categoria:'Otros servicios',distrito:'Cercado de Lima',direccion:'Av. Nicolás de Piérola 545, Cercado de Lima, Lima, Perú',horario:'Lun–vie: 8:45–16:45 (referencial)',espera:28,personas:7,imagen:'Reniec_Lima.jpg',fuente:'https://www.gob.pe/institucion/reniec/sedes',servicios:[['renovacion','Renovación de DNI','Orientación sobre renovación del documento.'],['duplicado','Duplicado de DNI','Información sobre emisión de duplicados.'],['datos','Actualización de datos','Consultas para modificar información.'],['certificados','Actas y certificados','Orientación sobre certificados registrales.']]},
  {id:'mac',codigo:'M',nombre:'Centro MAC Lima Norte – Comas',corto:'Centro MAC Lima Norte',categoria:'Otros servicios',distrito:'Comas',direccion:'Mallplaza Comas, Av. Los Ángeles 602, sótano 1, Comas, Lima, Perú',horario:'Lun–vie: 8:30–18:00 · Sáb: 8:30–13:00 (referencial)',espera:24,personas:6,imagen:'Mac_LimaNorte.jpg',fuente:'https://mac.pe/mac-lima-norte/',servicios:[['orientacion','Orientación de trámites','Información para iniciar gestiones del Estado.'],['requisitos','Consulta de requisitos','Revisión informativa de requisitos.'],['multiservicio','Atención multiservicio','Orientación para encontrar la entidad adecuada.'],['informes','Información al ciudadano','Consultas sobre canales de atención.']]},
  {id:'notaria',codigo:'N',nombre:'Notaría Gustavo Gonzales – San Isidro',corto:'Notaría Gustavo Gonzales',categoria:'Otros servicios',distrito:'San Isidro',direccion:'Av. Camino Real 130, San Isidro, Lima, Perú',horario:'Lun–vie: 8:00–18:00 · Sáb: 9:00–15:00 (referencial)',espera:11,personas:2,imagen:'Notaria_GustavoGonzales.jpg',fuente:'https://gustavogonzalesnotario.com/',servicios:[['firmas','Legalización de firmas','Información sobre certificación de firmas.'],['copias','Certificación de copias','Orientación sobre copias certificadas.'],['poderes','Poderes notariales','Consultas sobre poderes y requisitos.'],['cartas','Cartas notariales','Orientación sobre comunicaciones notariales.']]},
  {id:'sat',codigo:'T',nombre:'SAT Lima – Oficina Principal',corto:'SAT Lima',categoria:'Otros servicios',distrito:'Cercado de Lima',direccion:'Jr. Camaná 370, Cercado de Lima, Lima, Perú',horario:'Lun–vie: 8:15–17:00 · Sáb: 9:00–13:00 (referencial)',espera:15,personas:3,imagen:'Sat_Lima.jpg',fuente:'https://www.sat.gob.pe/agenciavirtual/guiainteractiva/',servicios:[['predial','Consultas tributarias','Orientación sobre obligaciones municipales.'],['vehicular','Impuesto vehicular','Información sobre impuesto vehicular.'],['multas','Multas y papeletas','Consultas sobre sanciones y pagos.'],['cuenta','Estado de cuenta','Orientación sobre deuda registrada.']]}
];

const paginasMenu=['Inicio','Establecimientos','Turnos','Seguimiento','Notificaciones','Historial','Perfil'];
const svgRutas={
 circle:'<circle cx="12" cy="12" r="9"/>',
 qr:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><path d="M14 14h3v3h4m-7 4h3v-4m4-3v1"/>',
 sort:'<path d="M8 4v16m-4-4 4 4 4-4M16 20V4m-4 4 4-4 4 4"/>',
 grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
 bank:'<path d="m3 9 9-6 9 6H3Zm2 2v7m5-7v7m4-7v7m5-7v7M3 21h18"/>',
 heart:'<path d="M20 5a5 5 0 0 0-8 1 5 5 0 0 0-8 6l8 8 8-8a5 5 0 0 0 0-7Z"/><path d="M4 12h5l2-3 2 6 2-3h5"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4m10-4v4M3 10h18"/>',

 home:'<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-7H9v7H4a1 1 0 0 1-1-1z"/>',
 building:'<rect x="4" y="3" width="16" height="18" rx="2"/><path d="M9 21v-4h6v4M8 8h1m6 0h1M8 12h1m6 0h1"/>',
 ticket:'<path d="M3 6h18v5a2 2 0 0 0 0 4v4H3v-4a2 2 0 0 0 0-4V6Z"/><path d="M12 6v13" stroke-dasharray="2 2"/>',
 compass:'<circle cx="12" cy="12" r="9"/><path d="m16 8-2.6 5.4L8 16l2.6-5.4z"/>',
 bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/>',
 history:'<path d="M3 12a9 9 0 1 0 3-6M3 4v6h6M12 7v5l3 2"/>',
 user:'<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
 arrow:'<path d="M5 12h14m-6-6 6 6-6 6"/>',
 check:'<path d="m4 12 5 5L20 6"/>',
 search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
 pin:'<path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>',
 clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 2"/>',
 people:'<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6m2 9v-2a5 5 0 0 0-3-4"/>',
 shield:'<path d="M12 2 4 6v6c0 5 3.5 8 8 10 4.5-2 8-5 8-10V6Z"/><path d="m9 12 2 2 4-4"/>',
 alert:'<circle cx="12" cy="12" r="10"/><path d="M12 11v6m0-10v.1"/>',
 undo:'<path d="M3 11a9 9 0 1 1 3 7M3 4v7h7"/>',
 x:'<path d="M5 5 19 19M19 5 5 19"/>',
 download:'<path d="M12 3v12m-4-4 4 4 4-4M4 17v4h16v-4"/>',
 heart:'<path d="M20 6a5 5 0 0 0-8 0 5 5 0 0 0-8 0c-3 4 1 8 8 14 7-6 11-10 8-14Z"/>',
 star:'<path d="m12 2 3 6 7 1-5 5 1 8-6-3-6 3 1-8-5-5 7-1Z"/>',
 menu:'<path d="M4 7h16M4 12h16M4 17h16"/>',
 info:'<circle cx="12" cy="12" r="10"/><path d="M12 11v6m0-10v.1"/>',
 sliders:'<path d="M4 7h16M4 17h16M9 4v6M16 14v6"/>',
 file:'<path d="M6 2h8l4 4v16H6zM14 2v5h4M9 12h6M9 16h6"/>',
 help:'<circle cx="12" cy="12" r="10"/><path d="M9 9a3 3 0 1 1 5 2c-2 1-2 2-2 3m0 4v.1"/>',
 calendar:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 2v6M17 2v6M3 10h18"/>',
 filter:'<path d="M3 5h18l-7 8v6l-4 2v-8Z"/>',
 mail:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
 accessibility:'<circle cx="12" cy="4" r="1.5"/><path d="M4 8h16m-8 0v6m0 0-4 7m4-7 4 7"/>',
 bag:'<rect x="4" y="8" width="16" height="13" rx="2"/><path d="M8 8V6a4 4 0 0 1 8 0v2"/>'
};
function icon(nombre, tam=18){return `<svg aria-hidden="true" width="${tam}" height="${tam}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${svgRutas[nombre]||svgRutas.info}</svg>`;}
function h(valor){return String(valor??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function norm(valor){return String(valor||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();}
function porId(id){return sedes.find(p=>p.id===id);}
const numeroPorSede={};
const estado={pagina:'Inicio',turnos:[],avisos:[],sedeId:null,servicioId:'',turnoVisto:null,
  busqueda:'',categoria:'Todas',distrito:'Todos',orden:'Espera menor',historicoBuscar:'',historicoEstado:'Todos',consultaResultado:null,consultaError:'',qrError:'',qrStream:null,qrMonitor:null,planVisita:null,requisitosListos:{},
  favoritos:[],usuario:null,registroOrigen:'Solicitud',acceso:{tamano:'Normal',contraste:false,simplificado:false},modal:null,mostrarMenu:false};
const activos=()=>estado.turnos.filter(t=>['Programado','En espera','Próximo','Llamado'].includes(t.estado));
const terminados=()=>estado.turnos.filter(t=>['Finalizado','Cancelado'].includes(t.estado));
const turnoActivoDe=id=>activos().find(t=>t.sedeId===id);
const turnoPorId=id=>estado.turnos.find(t=>t.id===id);
const sitioImagen=p=>`${document.documentElement.dataset.imageRoot || "assets/images/"}${p.imagen}`;
function btn(texto,accion,clase='primary',attrs=''){return `<button type="button" class="btn btn-${clase}" data-action="${accion}" ${attrs}>${texto}</button>`;}
function titulo(kicker,texto,sub=''){return `<div class="page-title"><span class="eyebrow">${h(kicker)}</span><h1>${h(texto)}</h1>${sub?`<p class="lead">${h(sub)}</p>`:''}</div>`;}
function estadoPildora(nombre){const tono=nombre==='Llamado'?'green':nombre==='Próximo'?'orange':nombre==='Cancelado'?'red':nombre==='Finalizado'?'gray':'blue';return `<span class="pill pill-${tono}">${h(nombre)}</span>`;}
function aviso(texto){const nodo=document.querySelector('#mensaje');nodo.innerHTML=`${icon('check',18)}<span>${h(texto)}</span>`;nodo.hidden=false;window.clearTimeout(aviso.temporizador);aviso.temporizador=window.setTimeout(()=>{nodo.hidden=true;},3800);}
// Extensiones académicas HU core. Todos los resultados y horarios son datos de DEMOSTRACIÓN.
const LIMITE_ALERTA_DEFECTO=3;
const QR_FIJO='qr_visual.png';
// Modelo local de atención. No representa datos institucionales en vivo.
function modulosActivos(p,personas){return personas>2?2:3;}
function ritmoAtencion(p){return p.espera*2/Math.max(1,p.personas);}
function minutosEstimados(p,personas){return Math.max(0,Math.ceil(personas*ritmoAtencion(p)/modulosActivos(p,personas)));}
function posicion(t){return ['En espera','Próximo'].includes(t.estado)?String(t.personas+1)+'.º':t.estado==='Llamado'?'En atención':'—';}
function datosAfluencia(p){const t=activos().find(x=>x.sedeId===p.id&&x.estado!=='Programado');if(!abiertoAhora(p)&&!t)return null;const personas=t?t.personas:p.personas;return {personas,minutos:t?t.minutos:minutosEstimados(p,personas),nivel:personas<=3?'Baja':personas<=7?'Media':'Alta',hora:new Date()};}
function afluenciaHTML(p){const d=datosAfluencia(p);return `<div class="afluencia-info" data-afluencia="${p.id}">${d?`<span class="afluencia-label afluencia-${d.nivel.toLowerCase()}">${icon('people',15)} Afluencia ${d.nivel.toLowerCase()}</span><small>Actualizado: ${h(d.hora.toLocaleTimeString('es-PE',{timeZone:'America/Lima',hour:'2-digit',minute:'2-digit'}))} · Referencial</small>`:`<span class="afluencia-label">${icon('info',15)} Afluencia no disponible</span><small>Fuera del horario referencial de atención</small>`}</div>`;}
function metricasCola(t){return `<div class="queue-position"><strong>${h(posicion(t))}</strong><span>Tu posición</span></div>`;}
function vistaBreve(t){const p=porId(t.sedeId);const i=t.etapa||0;const actual=t.estado==='Programado'?'Atención programada':t.estado==='Llamado'?(t.etapas[i]||'En atención'):'En espera';const siguiente=t.estado==='Programado'?'Ingresar a la cola':t.estado==='Llamado'?(t.etapas[i+1]||'Finalizar atención'):(t.etapas[0]||'Atención');return `<section class="page narrow">${titulo('MI ATENCIÓN','Vista resumida')}<article class="card brief-turn"><div class="track-header"><span class="eyebrow">${h(t.numero)} · ${h(p.corto)}</span>${estadoPildora(t.estado)}</div><h2>${h(t.servicio)}</h2><div class="brief-wait"><span>Espera estimada</span><strong>${t.estado==='Programado'?'Por iniciar':rangoEspera(t.minutos)}</strong></div><div class="brief-step"><span>Etapa actual</span><strong>${h(actual)}</strong></div><div class="brief-step"><span>Siguiente etapa</span><strong>${h(siguiente)}</strong></div><button type="button" class="btn btn-primary full" data-action="vista-completa">Volver a la vista completa</button></article></section>`;}
function permisoAvisosHTML(){return `<div class="notice-permission"><p id="permiso-avisos" role="status">${typeof Notification==='undefined'?'Tu navegador no admite avisos del dispositivo. Los avisos internos siguen disponibles.':Notification.permission==='granted'?'Avisos del dispositivo habilitados.':Notification.permission==='denied'?'Permiso bloqueado. Puedes habilitarlo en la configuración del navegador.':'Recibe avisos del dispositivo mientras TurnoFacilito esté activo.'}</p><button class="btn btn-secondary" type="button" data-action="activar-avisos" ${typeof Notification==='undefined'||Notification.permission!=='default'?'disabled':''}>${icon('bell',17)} Activar avisos del dispositivo</button></div>`;}
async function activarAvisos(){if(typeof Notification==='undefined')return;try{const permiso=await Notification.requestPermission();if(permiso==='granted'&&'serviceWorker' in navigator){await navigator.serviceWorker.register('../sw.js').catch(()=>{});}aviso(permiso==='granted'?'Avisos del dispositivo habilitados.':'Los avisos internos continúan disponibles.');}catch(e){aviso('No se pudo habilitar el permiso. Los avisos internos siguen activos.');}dibujar();}
async function avisoDispositivo(titulo,mensaje,t){if(typeof Notification==='undefined'||Notification.permission!=='granted')return;const opts={body:mensaje,tag:t.id+'-'+titulo,icon:'../favicon.ico'};try{const reg='serviceWorker' in navigator?await navigator.serviceWorker.getRegistration():null;if(reg)await reg.showNotification(titulo,opts);else new Notification(titulo,opts);}catch(e){/* Se conserva siempre el aviso interno. */}}

function esSalud(p){return Boolean(p&&p.categoria==='Salud');}
function esReniec(p){return Boolean(p&&p.id==='reniec');}
function limaAhora(){return new Date(new Date().toLocaleString('en-US',{timeZone:'America/Lima'}));}
function soloFecha(d){return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
function dniOculto(dni){return dni?'••••'+String(dni).slice(-4):'No registrado';}
function diasVisita(p){const hoy=limaAhora(),fechas=[];for(let n=0;n<15;n++){const d=new Date(hoy.getFullYear(),hoy.getMonth(),hoy.getDate()+n);if(horarioDia(p,d.getDay()))fechas.push({value:soloFecha(d),label:d.toLocaleDateString('es-PE',{weekday:'short',day:'numeric',month:'short'})});}return fechas;}
function horarioDia(p,dia){if(!p||dia===0)return null;const partes=[...p.horario.matchAll(/(\d{1,2}):(\d{2})[–-](\d{1,2}):(\d{2})/g)];if(dia===6){if(partes.length<2)return null;const m=partes[1];return [+m[1]*60+ +m[2],+m[3]*60+ +m[4]];}if(!partes.length)return [8*60,16*60];const m=partes[0];return [+m[1]*60+ +m[2],+m[3]*60+ +m[4]];}
function minutosHora(hora){const [a,b]=hora.split(':').map(Number);return a*60+b;}
function horaTexto(n){return `${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;}
function abiertoAhora(p){const n=limaAhora(),r=horarioDia(p,n.getDay()),m=n.getHours()*60+n.getMinutes();return !!r&&m>=r[0]&&m<r[1];}
function cuposSimulados(fecha,p=porId(estado.sedeId),servicio=estado.servicioId,excluir=null){if(!fecha||!p||!/^\d{4}-\d{2}-\d{2}$/.test(fecha))return [];const n=limaAhora(),d=new Date(fecha+'T12:00:00'),r=horarioDia(p,d.getDay());if(!r||fecha<soloFecha(n)||!diasVisita(p).some(f=>f.value===fecha))return [];const items=[];for(let m=Math.ceil(r[0]/30)*30,i=0;m+30<=r[1];m+=30,i++){const hora=horaTexto(m);const base=(d.getDate()+i+p.id.length)%5;const usados=estado.turnos.filter(t=>t.id!==excluir&&t.estado!=='Cancelado'&&t.sedeId===p.id&&t.servicioId===servicio&&t.planVisita?.fecha===fecha&&t.planVisita?.hora===hora).length;const pasado=fecha===soloFecha(n)&&m<=n.getHours()*60+n.getMinutes();const cupos=Math.max(0,base-usados);items.push({hora,cupos,pasado,disponible:!pasado&&cupos>0});}return items;}
function cuposAhora(p,servicio){return Math.max(0,5-activos().filter(t=>t.sedeId===p.id&&t.servicioId===servicio&&!t.planVisita).length);}
function estadoAtencion(p){return !abiertoAhora(p)?'Fuera del horario de atención':p.servicios.every(s=>cuposAhora(p,s[0])===0)?'Sin cupos disponibles':'Atención disponible';}
function fechaLarga(fecha){return new Date(fecha+'T12:00:00-05:00').toLocaleDateString('es-PE',{timeZone:'America/Lima',day:'numeric',month:'long',year:'numeric'});}
function fechaPlan(fecha,hora){return `${fechaLarga(fecha)}, ${new Date(fecha+'T'+hora+':00-05:00').toLocaleTimeString('es-PE',{timeZone:'America/Lima',hour:'numeric',minute:'2-digit',hour12:true})}`;}
function fechaHora(t){return t.planVisita?fechaPlan(t.planVisita.fecha,t.planVisita.hora):t.creado.toLocaleString('es-PE',{timeZone:'America/Lima',dateStyle:'long',timeStyle:'short'});}
function linkAgencia(p){if(!/^https?:$/.test(location.protocol))return null;const u=new URL(location.href);u.search='';u.hash='';u.searchParams.set('sede',p.id);return u.href;}
function qrAgencia(p){const enlace=linkAgencia(p);if(enlace&&window.TFQRCode){try{const qr=new TFQRCode(-1,TFQRError.M);qr.addData(enlace);qr.make();const n=qr.getModuleCount();let d='';for(let y=0;y<n;y++)for(let x=0;x<n;x++)if(qr.isDark(y,x))d+=`M${x+4} ${y+4}h1v1h-1z`;return `<svg class="qr-agencia-svg" role="img" aria-label="Código QR de acceso a ${h(p.corto)}" viewBox="0 0 ${n+8} ${n+8}" shape-rendering="crispEdges"><rect width="100%" height="100%" fill="white"/><path d="${d}" fill="#000"/></svg>`;}catch(e){/* fallback local */}}return `<img src="${sitioImagen({imagen:'qr_'+p.id+'.png'})}" width="108" height="108" alt="QR de acceso local a ${h(p.corto)}">`;}
function qrVisual(agencia=false){return `<div class="qr-visual"><img src="${sitioImagen({imagen:QR_FIJO})}" width="108" height="108" alt="QR ilustrativo, sin identificador individual"><small>QR ilustrativo · ${agencia?'selecciona la sede':'consulta por número de ticket'}</small></div>`;}
function modalidadHTML(p){const modo=estado.planVisita?.sedeId===p.id?'programada':estado.modalidad||'programada';const abierta=abiertoAhora(p);const libre=abierta&&(!estado.servicioId||cuposAhora(p,estado.servicioId)>0);const fechas=diasVisita(p);const fecha=estado.planVisita?.fecha||fechas.find(f=>cuposSimulados(f.value,p,estado.servicioId).some(c=>c.disponible))?.value||fechas[0]?.value||'';return `<section class="hu-inline schedule"><h3>¿Cuándo deseas atenderte?</h3><p>Elige atención inmediata o programa tu visita.</p><div class="mode-grid" role="radiogroup" aria-label="Modalidad de atención"><label class="mode-option"><input type="radio" name="modalidad" value="inmediata" ${modo==='inmediata'&&libre?'checked':''} ${!libre?'disabled':''}>${icon('clock',22)}<span><strong>Atenderme ahora</strong><small>${!abierta?'Fuera del horario de atención':!libre?'Sin cupos disponibles':minutosEstimados(p,p.personas)+' min de espera estimada'}</small></span></label><label class="mode-option"><input type="radio" name="modalidad" value="programada" ${modo==='programada'||!libre?'checked':''}>${icon('calendar',22)}<span><strong>Programar mi atención</strong><small>Selecciona fecha y horario</small></span></label></div><div id="plan-panel"><div class="date-title"><strong>Fecha de atención</strong><small>${h(fecha?fechaLarga(fecha):'Sin fechas')}</small></div><input type="hidden" id="plan-fecha" value="${h(fecha)}"><div class="date-rail" role="group" aria-label="Selecciona fecha">${fechas.map(f=>{const d=new Date(f.value+'T12:00:00');return `<button type="button" class="date-option ${f.value===fecha?'selected':''}" data-action="fecha-plan" data-value="${h(f.value)}" aria-label="${h(d.toLocaleDateString('es-PE',{dateStyle:'full'}))}" aria-pressed="${f.value===fecha}"><small>${h(d.toLocaleDateString('es-PE',{weekday:'short'}))}</small><strong>${d.getDate()}</strong><small>${h(d.toLocaleDateString('es-PE',{month:'short'}))}</small></button>`;}).join('')}</div><div id="plan-horarios" class="slot-groups" aria-label="Horarios disponibles"></div><p id="plan-disponibilidad" class="hu-note" role="status"></p></div></section>`;}
function pintarPlan(){
 const p=porId(estado.sedeId),panel=document.getElementById('plan-panel'),fecha=document.getElementById('plan-fecha'),grid=document.getElementById('plan-horarios');if(!panel||!fecha||!grid)return;
 estado.modalidad=document.querySelector('input[name="modalidad"]:checked')?.value||'programada';panel.hidden=estado.modalidad==='inmediata';
 const items=cuposSimulados(fecha.value,p,estado.servicioId);
 const renderSlot=c=>`<label class="slot ${!c.disponible?'slot-off':''}"><input type="radio" name="plan-hora" value="${c.hora}" ${!c.disponible?'disabled':''} ${estado.planVisita?.fecha===fecha.value&&estado.planVisita?.hora===c.hora&&c.disponible?'checked':''}><strong>${c.hora}</strong><small>${c.pasado?'Horario pasado':!c.cupos?'Sin cupos':c.cupos===1?'Último cupo':c.cupos+' cupos'}</small></label>`;
 grid.innerHTML=[['Mañana',items.filter(c=>minutosHora(c.hora)<720)],['Tarde',items.filter(c=>minutosHora(c.hora)>=720)]].filter(g=>g[1].length).map(([label,horas])=>`<section class="slot-section" aria-label="${label}"><h4>${icon('clock',16)} ${label}</h4><div class="slot-grid" role="group" aria-label="Horarios de ${label.toLowerCase()}">${horas.map(renderSlot).join('')}</div></section>`).join('');
 actualizarResumenPlan();
}
function actualizarResumenPlan(){const info=document.getElementById('plan-disponibilidad'),fecha=document.getElementById('plan-fecha');if(!info||!fecha)return;const hora=document.querySelector('input[name="plan-hora"]:checked')?.value;info.textContent=hora?`Horario seleccionado: ${fechaPlan(fecha.value,hora)}.`:document.querySelector('input[name="plan-hora"]:not(:disabled)')?'Selecciona un horario disponible.':'No hay horarios disponibles para esta fecha. Elige otra.';}
function franjasDemanda(p){const n=activos().filter(t=>t.sedeId===p.id).length;const demora=activos().filter(t=>t.sedeId===p.id).reduce((a,t)=>a+(t.demora?.extra||0),0);const fechas=diasVisita(p);const fecha=fechas.find(f=>p.servicios.some(s=>cuposSimulados(f.value,p,s[0]).some(c=>c.disponible)))?.value;if(!fecha)return [];const slots=p.servicios.flatMap(s=>cuposSimulados(fecha,p,s[0]).filter(c=>c.disponible).map(c=>c.hora));return [...new Set(slots)].sort().map((hora,i)=>{const minutos=Math.max(1,minutosEstimados(p,p.personas+n)+((minutosHora(hora)+p.id.length*7)%11)+demora);return {fecha,hora,etiqueta:hora+'–'+horaTexto(minutosHora(hora)+30),minutos,nivel:minutos<18?'Menor demanda':minutos<31?'Demanda media':'Alta demanda'};}).sort((a,b)=>a.minutos-b.minutos||a.hora.localeCompare(b.hora)).slice(0,3);}
function bloqueDemanda(p){const fr=franjasDemanda(p);return `<section class="card hu-panel" data-demanda="${p.id}"><div class="hu-panel-head">${icon('clock',20)}<div><h2>Horarios de menor demanda</h2><p>Estimación referencial para franjas que aún tienen cupos.</p></div></div>${fr.length?`<p class="hu-note">${h(fechaLarga(fr[0].fecha))} · Próxima fecha disponible</p><div class="demanda-grid">${fr.map((x,i)=>`<div class="demanda-item ${i===0?'demanda-best':''}"><strong>${x.etiqueta}</strong><span>${h(x.nivel)}</span><small>≈ ${x.minutos} min estimados</small>${i===0?'<b>Franja sugerida</b>':''}</div>`).join('')}</div>`:'<p role="status">No hay franjas disponibles en las fechas consultadas.</p>'}<p class="info-text">La disponibilidad específica se confirma al elegir el servicio y horario.</p></section>`;}
function rangoEspera(minutos){const base=Math.max(0,Number(minutos)||0);return base===0?'0 min':`${Math.max(0,base-4)} a ${base+5} min`;}
const FUENTES_REQUISITOS={bcp:'https://www.viabcp.com/ayuda-bcp/cuenta-de-ahorros/como-abro-una-cuenta-de-ahorros',interbank:'https://interbank.pe/web/guest/cuentas/cuentas-ahorro/cuenta-simple',bbva:'https://www.bbva.pe/personas/productos/cuentas/ahorro.html',scotiabank:'https://www.scotiabank.com.pe/blog/ahorros/cuenta-corriente/diferencias-entre-cuenta-corriente-y-ahorros',reniec:'https://identidad.reniec.gob.pe/preguntas-frecuentes-dni',duplicado:'https://www.gob.pe/224-duplicado-de-dni',datos:'https://www.gob.pe/238-rectificacion-de-datos-del-dni-actualizar-domicilio-en-tu-dni'};
function requisitosDe(p,servicioId){if(!p)return [];const r=(texto,tipo='Según trámite')=>({texto,tipo});if(p.id==='bcp'&&servicioId==='apertura')return [r('DNI vigente','Obligatorio'),r('Ser mayor de edad','Obligatorio')];if(p.id==='interbank'&&servicioId==='apertura')return [r('DNI vigente y celular peruano para Cuenta Simple digital','Obligatorio para esa modalidad'),r('Edad entre 18 y 70 años para Cuenta Simple digital','Obligatorio para esa modalidad')];if(p.id==='bbva'&&servicioId==='cuenta')return [r('DNI vigente para apertura de cuenta de ahorros','Obligatorio para ese producto'),r('Datos de la cuenta para otras consultas')];if(p.id==='scotiabank'&&servicioId==='cuentas')return [r('Documento de identidad para abrir cuenta de ahorros','Obligatorio para ese producto'),r('Datos del producto o cuenta para otras consultas')];if(p.categoria==='Bancos'){const refs={apertura:['Documento de identidad vigente','Datos de contacto'],cuenta:['Documento de identidad vigente','Datos del producto o cuenta'],cuentas:['Documento de identidad vigente','Datos de la cuenta'],tarjetas:['Documento de identidad vigente','Datos de la tarjeta o solicitud'],pagos:['Referencia o comprobante de la operación'],operaciones:['Documento de identidad','Referencia de la operación'],caja:['Referencia del pago u operación'],creditos:['Documento de identidad','Documentación de ingresos si corresponde'],asesoria:['Documento de identidad','Información de la consulta']};return (refs[servicioId]||[]).map(x=>r(x));}if(esReniec(p)){const refs={renovacion:[r('Pago del trámite según modalidad','Obligatorio (salvo exoneración)'),r('Actualizar fotografía según el canal','Obligatorio'),r('Sustento de cambios de datos, si corresponde')],duplicado:[r('Pago del derecho de trámite','Obligatorio (salvo exoneración)'),r('Validación de identidad del titular','Obligatorio'),r('Denuncia por pérdida o robo, si deseas presentarla','Opcional')],datos:[r('Pago del trámite correspondiente','Obligatorio (salvo exoneración)'),r('Sustento del dato a rectificar (por ejemplo, domicilio)','Según dato y modalidad')],certificados:[r('Identificación del acta o certificado solicitado'),r('Pago cuando corresponda')]};return refs[servicioId]||[];}return [];}
function listaRequisitos(p,servicioId,interactiva=false){const items=requisitosDe(p,servicioId);const fuente=esReniec(p)?(FUENTES_REQUISITOS[servicioId]||FUENTES_REQUISITOS.reniec):(['apertura','cuenta','cuentas'].includes(servicioId)&&FUENTES_REQUISITOS[p.id])?FUENTES_REQUISITOS[p.id]:p.fuente;if(!items.length)return `<section class="card hu-panel"><h2>Requisitos del trámite</h2><p>No hay requisitos registrados para esta atención. Consulta con la entidad.</p><a class="external-reference" href="${h(fuente)}" target="_blank" rel="noopener noreferrer">Consultar sitio oficial</a></section>`;const key=`${p.id}:${servicioId}`,listos=estado.requisitosListos[key]||[];return `<section class="card hu-panel"><div class="hu-panel-head">${icon('file',20)}<div><h2>Documentos para tu trámite</h2><p>Prepara tu visita. Las condiciones dependen del producto y del canal de atención.</p></div></div>${interactiva?`<p class="hu-note" id="conteo-requisitos" role="status">${items.length-listos.length} pendiente(s) de revisar de ${items.length}.</p>`:''}<div class="checklist">${items.map((item,i)=>`<${interactiva?'label':'div'} class="checklist-row">${interactiva?`<input type="checkbox" data-requisito="${i}" data-key="${h(key)}" ${listos.includes(i)?'checked':''}>`:icon('check',16)}<span>${h(item.texto)}<small class="req-kind">${h(item.tipo)}</small></span></${interactiva?'label':'div'}>`).join('')}</div><a class="external-reference" href="${h(fuente)}" target="_blank" rel="noopener noreferrer">Verificar requisitos en la fuente oficial ${icon('arrow',15)}</a></section>`;}
function actualizarRequisitosMarcados(){const el=document.getElementById('requisitos-elegidos');const p=porId(estado.sedeId);if(el&&p){el.innerHTML=estado.servicioId?listaRequisitos(p,estado.servicioId,true):'<p class="hu-note">Selecciona un servicio para ver una lista orientativa.</p>';}}
function etapasClinicas(p,servicio){if(!esSalud(p))return [];const nombre=norm(servicio);if(nombre.includes('laboratorio'))return ['Admisión','Preparación','Laboratorio','Resultado y salida'];if(nombre.includes('imagen')||nombre.includes('diagnostico'))return ['Admisión','Preparación','Diagnóstico por imágenes','Salida'];return ['Admisión','Orientación o triaje','Caja o validación','Atención','Salida'];}
function moduloPara(p,servicioId){if(esSalud(p))return 'Área de '+(servicioId==='laboratorio'?'laboratorio':servicioId==='imagen'?'diagnóstico':'atención');if(p.categoria==='Bancos')return ['apertura','cuenta','creditos','asesoria'].includes(servicioId)?'Plataforma / Módulo 02':'Ventanilla / Módulo 01';return esReniec(p)?'Área DNI / Ventanilla 02':'Ventanilla / Módulo 01';}
function tarjetaModulos(p,t){if(!p||p.categoria!=='Bancos')return '';const numero=t.personas,activosModulo=modulosActivos(p,numero);return `<section class="card hu-panel"><div class="hu-panel-head">${icon('building',20)}<div><h2>Módulos de atención </h2><p>Consulta los módulos y el área asignada.</p></div></div><div class="demanda-grid">${[1,2,3].map(i=>`<div class="demanda-item"><strong>Módulo 0${i}</strong><span class="${i>activosModulo?'status-idle':'status-working'}">${i>activosModulo?'No activo':'Atendiendo'}</span><small>${t.modulo.includes(`0${i}`)?'Asignado a tu turno':'Estado del módulo'}</small></div>`).join('')}</div></section>`;}
function opcionesTiempo(t){const exceso=t.minutos>t.tiempoDisponible;return `<section class="card hu-panel"><div class="hu-panel-head">${icon('clock',20)}<div><h2>Tiempo disponible </h2><p>Indica cuántos minutos tienes antes de otra actividad.</p></div></div><div class="form-inline"><label for="tiempo-disponible">Minutos disponibles</label><input id="tiempo-disponible" type="number" min="1" max="600" step="1" value="${t.tiempoDisponible||''}" placeholder="Ej. 20"><button type="button" class="btn btn-secondary" data-action="guardar-tiempo" data-id="${h(t.id)}">Comparar</button></div>${t.tiempoDisponible?`<div class="callout ${exceso?'callout-warn':'callout-good'}" role="status">${icon(exceso?'alert':'check',19)} <span>${exceso?`La espera (${t.minutos} min) supera tus ${t.tiempoDisponible} minutos disponibles. Puedes reprogramar o cancelar el turno.`:`La espera (${t.minutos} min) está dentro de tus ${t.tiempoDisponible} minutos disponibles.`}</span></div>${exceso?`<div class="hu-actions"><button class="btn btn-secondary" type="button" data-action="reprogramar-turno" data-id="${h(t.id)}">Reprogramar</button><button class="btn btn-danger" type="button" data-action="pedir-cancelacion" data-id="${h(t.id)}">Cancelar turno</button></div>`:''}`:''}</section>`;}
function controlAlertas(t){return `<section class="card hu-panel"><div class="hu-panel-head">${icon('bell',20)}<div><h2>Aviso de proximidad </h2><p>Selecciona cuántos turnos antes deseas recibir el aviso preventivo.</p></div></div><label class="filter-field" for="umbral-alerta"><span>Anticipación</span><select id="umbral-alerta" data-id="${h(t.id)}">${[3,5,10].map(n=>`<option value="${n}" ${t.umbral===n?'selected':''}>${n} turnos antes${n===3?' (predeterminado)':''}</option>`).join('')}</select></label><p class="hu-note">Se mostrará una alerta en la plataforma y el módulo ${h(t.modulo)} al acercarse tu turno.</p>${permisoAvisosHTML()}</section>`;}
function alertaDemora(t){return `<section class="card hu-panel"><div class="hu-panel-head">${icon('alert',20)}<div><h2>Incidencias de atención</h2><p>Información sobre cambios en el tiempo de espera.</p></div></div>${t.demora?`<div class="callout callout-warn" role="status">${icon('alert',19)}<span>${h(t.demora.motivo)}. Se añadieron ${t.demora.extra} minutos estimados.</span></div>`:`<div class="callout callout-good">${icon('check',18)} <span>No hay incidencias activas.</span></div>`}</section>`;}
function flujoClinico(t){const p=porId(t.sedeId);if(!esSalud(p)||!t.etapas?.length)return '';const i=t.etapa||0,termina=i>=t.etapas.length-1;return `<section class="card hu-panel"><div class="hu-panel-head">${icon('check',20)}<div><h2>Etapas de atención clínica </h2><p>Consulta el recorrido orientativo por áreas.</p></div></div><ol class="clinical-steps">${t.etapas.map((paso,index)=>`<li class="${index<i?'completed':index===i?'current':''}"><span>${index<i?'✓':index+1}</span><strong>${h(paso)}</strong></li>`).join('')}</ol><div class="callout ${termina?'callout-good':''}" role="status">${icon(termina?'check':'info',19)}<span>${termina?'Has llegado al último paso del recorrido. Puedes finalizar la atención.':`Etapa actual: ${h(t.etapas[i])}. Siguiente paso: ${h(t.etapas[i+1])}, dirígete a esa área cuando te lo indiquen.`}</span></div>${t.estado==='Llamado'?`<div class="hu-actions"><button type="button" class="btn btn-primary" data-action="avanzar-etapa" data-id="${h(t.id)}">${termina?'Confirmar fin de atención':'Confirmar siguiente etapa'}</button></div>`:''}</section>`;}
function enlaceQR(p){return p.categoria==='Bancos'?`<div class="agency-qr"><div class="qr-visual">${qrAgencia(p)}<small>QR de acceso a la agencia · prototipo</small>${linkAgencia(p)?`<a href="${h(linkAgencia(p))}" class="qr-direct-link">Abrir enlace de agencia</a>`:''}</div><button class="btn btn-secondary full" type="button" data-action="qr-sede" data-id="${h(p.id)}">${icon('qr',17)} Acceso por QR</button></div>`:`<div class="agency-qr">${qrVisual(true)}<button class="btn btn-secondary full" type="button" data-action="qr-sede" data-id="${h(p.id)}">${icon('qr',17)} Acceso por QR</button></div>`;}
function paginaQR(){return `<section class="page narrow">${titulo('ACCESO RÁPIDO','Acceso por QR de establecimiento','Elige la sede para iniciar una solicitud. El QR mostrado es un recurso ilustrativo común.')}<section class="card hu-panel"><div class="qr-access">${qrVisual(true)}<form id="form-sede-qr"><label class="filter-field" for="sede-qr"><span>Establecimiento</span><select id="sede-qr" required><option value="">Selecciona una sede</option>${sedes.map(p=>`<option value="${h(p.id)}" ${estado.sedeId===p.id?'selected':''}>${h(p.nombre)}</option>`).join('')}</select></label><button class="btn btn-primary" type="submit">Elegir servicio ${icon('arrow',17)}</button></form></div><p class="small-note">La imagen no identifica la sede. Puedes elegirla manualmente o utilizar los códigos de ejemplo bancarios.</p><details class="qr-advanced" ${estado.qrError?'open':''}><summary>Leer QR de agencia</summary><div class="hu-actions"><button type="button" class="btn btn-secondary" data-action="abrir-camara">Activar cámara</button><button type="button" class="btn btn-secondary" data-action="detener-camara">Detener cámara</button></div><video id="video-qr" class="qr-video" autoplay muted playsinline hidden></video><p id="qr-estado" role="status" class="hu-note">Cámara detenida.</p><form id="form-codigo-qr" class="form-inline"><label for="codigo-qr">Código de ejemplo</label><input id="codigo-qr" required placeholder="TF-DEMO:bcp"><button class="btn btn-secondary" type="submit">Continuar</button></form><label class="filter-field"><span>Cargar imagen del QR de agencia</span><input id="archivo-qr" type="file" accept="image/*"></label><div class="qr-grid">${sedes.filter(p=>p.categoria==='Bancos').map(b=>`<div class="qr-box">${qrAgencia(b)}<strong>${h(b.corto)}</strong><button class="btn btn-secondary" type="button" data-action="usar-codigo-qr" data-value="TF-DEMO:${h(b.id)}">Usar código de ejemplo</button></div>`).join('')}</div>${estado.qrError?`<p class="input-error" role="alert">${h(estado.qrError)}</p>`:''}</details></section></section>`;}

function buscarTicket(){const t=turnoPorId(estado.consultaResultado),modo=estado.consultaModo||'manual';const metodo=(v,i,titulo,desc)=>`<button type="button" class="consult-method ${modo===v?'selected':''}" data-action="consulta-modo" data-value="${v}" aria-pressed="${modo===v}"><span class="method-icon">${icon(i,24)}</span><span><strong>${titulo}</strong><small>${desc}</small></span><span class="method-check">${icon(modo===v?'check':'circle',17)}</span></button>`;return `<section class="page narrow consulta-v24">${titulo('GESTIONA TU ATENCIÓN','Consultar mi turno','Consulta el estado de tu turno de forma rápida y sencilla, sin iniciar sesión.')}<section class="card hu-panel consult-panel"><div class="consult-tabs" role="group" aria-label="Método de consulta">${metodo('manual','ticket','Número de ticket','Consulta con tu código de atención.')}${metodo('qr','qr','Código QR','Acceso al lector de códigos.')}</div>${modo==='manual'?`<form id="form-consulta-ticket"><h2>Ingresa los datos de tu turno</h2><div class="consult-fields"><div class="filter-field"><label for="consulta-sede">Establecimiento</label><div class="consult-input">${icon('search',17)}<input id="consulta-filtrar-sede" type="search" aria-label="Filtrar establecimientos" placeholder="Busca una sede por nombre o distrito" autocomplete="off"></div><div class="consult-input">${icon('building',19)}<select id="consulta-sede" required><option value="">Selecciona el establecimiento</option>${sedes.map(p=>`<option value="${h(p.id)}" ${estado.consultaSede===p.id?'selected':''}>${h(p.nombre)}</option>`).join('')}</select></div></div><label class="filter-field"><span>Número de ticket</span><div class="consult-input">${icon('ticket',19)}<input id="consulta-numero" required placeholder="Ej. R-001" maxlength="20" value="${h(estado.consultaNumero||'')}" autocomplete="off" autocapitalize="characters"></div><small>Encontrarás este número en tu ticket digital.</small></label><button type="submit" class="btn btn-primary full">${icon('search',17)} Consultar turno</button></div>${estado.consultaError?`<div class="callout callout-warn" role="alert">${icon('alert',19)} ${h(estado.consultaError)}</div>`:''}<details class="consult-help"><summary>${icon('info',17)} ¿Dónde encuentro mi número de ticket?</summary><p>Busca el código grande en la confirmación o en tu comprobante descargado. Ejemplo: <strong>R-001</strong>.</p></details></form>`:`<div class="qr-access consult-qr"><div class="qr-visual">${icon('qr',64)}</div><div><h2>Escanea tu código QR</h2><p>Utiliza la cámara o carga una imagen para probar el lector.</p><div class="hu-actions"><button class="btn btn-primary" data-action="abrir-camara">Activar cámara</button><button class="btn btn-secondary" data-action="detener-camara">Detener cámara</button></div><video id="video-qr" class="qr-video" autoplay muted playsinline hidden></video><label class="filter-field"><span>Cargar imagen</span><input id="archivo-qr" type="file" accept="image/*"></label><p id="qr-estado" class="hu-note" role="status">La cámara está detenida.</p><p class="small-note">El QR del ticket es ilustrativo y no identifica turnos individuales.</p><button type="button" class="btn btn-secondary" data-action="consulta-modo" data-value="manual">Consultar por número</button></div></div>`}</section><div id="resultado-consulta" aria-live="polite">${t?resultadoConsulta(t):''}</div></section>`;}
function resultadoConsulta(t){const activo=activos().includes(t);const titulo=activo?'Turno encontrado':t.estado==='Cancelado'?'Turno cancelado':'Atención finalizada';return `<section class="card hu-panel consult-result"><div class="track-header"><h2>${titulo}</h2>${estadoPildora(t.estado)}</div>${!activo?`<div class="callout ${t.estado==='Cancelado'?'callout-warn':'callout-good'}">${icon('info',18)} Este ticket ya no corresponde a un turno vigente.</div>`:''}<div class="consult-result-number">${h(t.numero)}</div><h3>${h(porId(t.sedeId).nombre)}</h3><p>${h(t.servicio)} · ${h(fechaHora(t))}</p>${activo&&t.estado!=='Programado'?`<div class="consult-metrics">${metricasCola(t)}<div><strong>${t.personas}</strong><span>Personas delante</span></div><div><strong>${t.minutos} min</strong><span>Espera estimada</span></div></div>`:activo?'<p class="callout">El turno está programado. La posición se asignará al ingresar a la cola.</p>':''}<div class="hu-actions">${activo?`<button type="button" class="btn btn-primary" data-action="seguir-turno" data-id="${h(t.id)}">Ver seguimiento completo ${icon('arrow',17)}</button>`:''}<button type="button" class="btn btn-secondary" data-action="descargar" data-id="${h(t.id)}">${icon('download',17)} Descargar ticket</button></div></section>`;}
function programarTurno(){const t=turnoPorId(estado.turnoVisto);if(!t||!activos().some(x=>x.id===t.id))return turnos();const fechas=diasVisita(porId(t.sedeId));return `<section class="page narrow">${titulo('GESTIONA TU HORARIO','Elegir otra franja','Selecciona una fecha y horario disponibles.')}<form id="form-reprogramar" class="card hu-panel"><h2>${h(t.numero)} · ${h(porId(t.sedeId).nombre)}</h2><div class="form-inline"><label for="reprogramar-fecha">Fecha disponible</label><select id="reprogramar-fecha" required>${fechas.map(f=>`<option value="${h(f.value)}">${h(f.label)}</option>`).join('')}</select><label for="reprogramar-hora">Horario</label><select id="reprogramar-hora" required></select><button type="submit" class="btn btn-primary">Confirmar nueva franja</button><button type="button" class="btn btn-secondary" data-go="Seguimiento">Volver</button></div><p class="hu-note" id="reprogramar-disponibilidad" role="status"></p></form></section>`;}
function pintarHoras(fechaId,horaId,infoId){const fecha=document.getElementById(fechaId),hora=document.getElementById(horaId),info=document.getElementById(infoId);if(!fecha||!hora)return;const t=turnoPorId(estado.turnoVisto);const opciones=cuposSimulados(fecha.value,porId(t?.sedeId),t?.servicioId,t?.id);hora.innerHTML='<option value="">Elige horario</option>'+opciones.map(c=>`<option value="${h(c.hora)}" ${!c.disponible?'disabled':''}>${h(c.hora)} ${c.disponible?'· '+c.cupos+' cupos':'· Sin cupos / no disponible'}</option>`).join('');if(info)info.textContent=`${opciones.filter(x=>x.disponible).length} franja(s) disponibles para la fecha elegida.`;}
function validarCodigoQR(texto){let codigo=String(texto||'').trim();try{const url=new URL(codigo);if(url.origin===location.origin&&url.pathname===location.pathname)codigo='TF-DEMO:'+url.searchParams.get('sede');}catch(e){}const m=/^TF-DEMO:(bcp|interbank|bbva|scotiabank)$/i.exec(codigo);if(!m)return false;const sede=porId(m[1].toLowerCase());if(!sede)return false;detenerCamaraQR();if(turnoActivoDe(sede.id)){abrirModal('duplicado',sede.id);return true;}if(!diasVisita(sede).some(f=>sede.servicios.some(s=>cuposSimulados(f.value,sede,s[0]).some(c=>c.disponible)))&&!(abiertoAhora(sede)&&sede.servicios.some(s=>cuposAhora(sede,s[0])>0))){aviso('No hay atención disponible para esta agencia. Elige otro establecimiento.');return true;}estado.qrError='';estado.sedeId=sede.id;estado.servicioId='';estado.planVisita=null;estado.modalidad='programada';navegar('Servicio');aviso(`Código leído: ${sede.nombre}. Selecciona tu servicio.`);return true;}
function detenerCamaraQR(){if(estado.qrMonitor)cancelAnimationFrame(estado.qrMonitor);estado.qrMonitor=null;if(estado.qrStream){estado.qrStream.getTracks().forEach(tr=>tr.stop());estado.qrStream=null;}}
function procesarLectura(texto){const st=document.getElementById('qr-estado');if(estado.pagina==='QR'&&validarCodigoQR(texto))return true;if(st)st.textContent=texto==='TF-VISUAL'?'QR ilustrativo reconocido. Selecciona la sede o consulta el número de ticket.':'El código no corresponde al QR ilustrativo'+(estado.pagina==='QR'?' ni a una agencia reconocida.':'.');return false;}
async function iniciarCamaraQR(){const status=document.getElementById('qr-estado'),video=document.getElementById('video-qr');if(!status||!video)return;detenerCamaraQR();if(!navigator.mediaDevices?.getUserMedia||typeof BarcodeDetector==='undefined'){status.textContent='El navegador no admite lectura QR con cámara. Utiliza la consulta manual.';return;}const pagina=estado.pagina;try{const stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'},audio:false});if(estado.pagina!==pagina||!video.isConnected){stream.getTracks().forEach(tr=>tr.stop());return;}estado.qrStream=stream;video.srcObject=stream;video.hidden=false;await video.play();const detector=new BarcodeDetector({formats:['qr_code']});status.textContent='Apunta al código QR.';const examinar=async()=>{if(estado.pagina!==pagina||!estado.qrStream||!video.isConnected)return;try{const codes=await detector.detect(video);if(codes?.length){const ok=procesarLectura(codes[0].rawValue);detenerCamaraQR();video.hidden=true;return;}}catch(e){}estado.qrMonitor=requestAnimationFrame(examinar);};examinar();}catch(e){detenerCamaraQR();status.textContent='No se pudo abrir la cámara. Revisa los permisos o consulta por número.';}}
async function leerArchivoQR(file){const status=document.getElementById('qr-estado');if(!file||!status)return;if(typeof BarcodeDetector==='undefined'){status.textContent='Este navegador no admite lectura de imágenes QR. Usa el número de ticket.';return;}if(file.size>10*1024*1024){status.textContent='Selecciona una imagen de hasta 10 MB.';return;}try{const bitmap=await createImageBitmap(file);try{const codes=await new BarcodeDetector({formats:['qr_code']}).detect(bitmap);if(!status.isConnected)return;if(codes.length)procesarLectura(codes[0].rawValue);else status.textContent='No se encontró ningún código QR en la imagen.';}finally{bitmap.close();}}catch(e){status.textContent='No se pudo leer la imagen.';}}

function notificar(tituloAviso,mensaje,turno){estado.avisos.unshift({id:`aviso-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,titulo:tituloAviso,mensaje,turnoId:turno.id,leido:false,fecha:new Date()});actualizarCabecera();if(/proximidad|Es tu turno/i.test(tituloAviso))avisoDispositivo(tituloAviso,mensaje,turno);}
function navegar(pagina,opciones={}){
  if(estado.pagina!==pagina)detenerCamaraQR();
  estado.pagina=pagina;
  estado.mostrarMenu=false;
  if(opciones.sedeId)estado.sedeId=opciones.sedeId;
  if(opciones.turnoId)estado.turnoVisto=opciones.turnoId;
  dibujar();
  window.scrollTo({top:0,behavior:'instant'});
  const main=document.getElementById('contenido');main.focus({preventScroll:true});
}
function actualizarCabecera(){
  const cantidad=estado.avisos.filter(a=>!a.leido).length;
  const badge=document.querySelector('#alerta-cantidad');badge.textContent=String(cantidad);badge.hidden=!cantidad;
  const ficha=document.querySelector('.profile-chip');
  const nombre=estado.usuario?estado.usuario.nombres+' '+estado.usuario.apellidos:'Mi perfil';
  ficha.querySelector('span').textContent=estado.usuario?estado.usuario.nombres.charAt(0).toUpperCase()+estado.usuario.apellidos.charAt(0).toUpperCase():'MP';
  ficha.querySelector('strong').textContent=nombre;
  ficha.querySelector('small').textContent=estado.usuario?'Mi perfil':'';ficha.querySelector('small').hidden=!estado.usuario;
  ficha.setAttribute('aria-label',estado.usuario?'Ver perfil de '+nombre:'Ver mi perfil y registrar datos');
  document.querySelector('#miga').textContent=estado.pagina;
  const menuNombres={Inicio:'home',Establecimientos:'building',Turnos:'ticket',Seguimiento:'compass',Notificaciones:'bell',Historial:'history',Perfil:'user'};
  document.querySelector('#nav-escritorio').innerHTML=paginasMenu.map(p=>`<button type="button" class="${estado.pagina===p?'selected':''}" data-go="${p}" ${estado.pagina===p?'aria-current="page"':''}>${icon(menuNombres[p],19)} <span>${p}</span>${p==='Notificaciones'&&cantidad?`<i>${cantidad}</i>`:''}</button>`).join('');
  const movil=['Inicio','Establecimientos','Turnos','Seguimiento'];
  document.querySelector('#nav-movil').innerHTML=movil.map(p=>`<button type="button" data-go="${p}" class="${estado.pagina===p?'active':''}" ${estado.pagina===p?'aria-current="page"':''}>${icon(menuNombres[p],22)}<span>${p}</span></button>`).join('')+`<button type="button" data-action="abrir-menu">${icon('menu',22)}<span>Más</span></button>`;
  const drawer=document.querySelector('#drawer-movil');drawer.hidden=!estado.mostrarMenu;
  drawer.innerHTML=estado.mostrarMenu?`<strong class="drawer-head">Más opciones</strong>${['Notificaciones','Historial','Perfil','Accesibilidad','Ayuda','Consulta','QR'].map(p=>`<button type="button" data-go="${p}">${icon(menuNombres[p]||'help')} ${p}</button>`).join('')}<button type="button" data-action="cerrar-menu">Cerrar menú</button>`:'';
}
function cabeceraPagina(p){return `<p class="page-pretitle">${h(p.distrito)} · ${h(p.categoria)}</p>`;}
function tarjetaSede(p,compacta=false){
  const activa=turnoActivoDe(p.id),d=datosAfluencia(p);
  return `<article class="card ${compacta?'place-card':'place-row'}">
    ${compacta?`<div class="place-image"><img src="${sitioImagen(p)}" loading="eager" alt="Fotografía referencial de ${h(p.nombre)}"><span class="pill pill-blue">${h(p.categoria)}</span></div>`:`<img src="${sitioImagen(p)}" loading="eager" alt="Fotografía referencial de ${h(p.nombre)}">`}
    <div class="${compacta?'place-body':'place-row-info'}">
      <span class="category-line">${h(p.categoria)} · ${h(p.distrito)}</span><span class="availability ${abiertoAhora(p)?'availability-open':'availability-closed'}">${h(estadoAtencion(p))}</span>
      <h3>${h(p.nombre)}</h3>
      <p class="place-address">${icon('pin',15)} ${h(p.direccion)}</p>
      <div class="inline-meta"><span>${icon('clock',15)} ${h(p.horario)}</span>${compacta?'':`<span>${icon('people',15)} ${d?d.personas:p.personas} personas delante</span>`}</div>
      ${afluenciaHTML(p)}${compacta?`<div class="mini-footer"><span>${icon('clock',15)} <b>${d?d.minutos:minutosEstimados(p,p.personas)} min</b> · espera estimada</span><button class="btn btn-secondary" data-action="ver-sede" data-id="${p.id}">Ver detalles ${icon('arrow',15)}</button></div>`:''}
    </div>
    ${compacta?'':`<div class="place-row-action"><strong>${d?d.minutos:minutosEstimados(p,p.personas)}<small> min</small></strong><span>Espera estimada</span><button type="button" data-action="${activa?'duplicado':'ver-sede'}" data-id="${p.id}" class="btn ${activa?'btn-secondary':'btn-primary'}">${activa?'Ver mi turno':'Ver detalles'} ${icon('arrow',15)}</button></div>`}
  </article>`;
}
function tarjetaTurno(t,compacta=false){const p=porId(t.sedeId);return `<article class="card turn-card ${compacta?'turn-card-small':''}">
    <div class="turn-card-top"><span>${icon('building',17)} ${h(p.nombre)}</span>${estadoPildora(t.estado)}</div>
    <div class="turn-card-body"><div><div class="ticket-big">${h(t.numero)}</div><p>${h(t.servicio)}</p></div><div class="turn-stats">${t.estado==='Programado'?`<strong>${h(t.planVisita.hora)}</strong><small>${h(t.planVisita.fecha)}</small>`:`<strong>${h(posicion(t))}</strong><small>tu posición</small><strong>${t.personas}</strong><small>personas delante</small><strong>${t.minutos} min</strong><small>espera estimada</small>`}</div></div>
    <div class="turn-card-actions"><button type="button" class="btn btn-primary" data-action="seguir-turno" data-id="${t.id}">Ver seguimiento ${icon('arrow',15)}</button>${!compacta?`<button type="button" class="btn btn-secondary" data-action="pedir-cancelacion" data-id="${t.id}">Cancelar turno</button>`:''}</div>
  </article>`;}
// La estructura de Inicio se encuentra en pages/index.html.
// JavaScript solo inserta información que cambia durante la sesión.
function actualizarInicio(){
 const lista=activos().slice().sort((a,b)=>a.personas-b.personas);
 const destacados=[sedes[0],sedes[6],sedes[8]].filter(Boolean);
 const cuenta=document.getElementById('cantidad-sedes-inicio');
 if(cuenta)cuenta.textContent=String(sedes.length);
 const enlace=document.getElementById('cantidad-ver-sedes');
 if(enlace)enlace.textContent=`Ver los ${sedes.length}`;
 const pendientes=document.getElementById('turnos-inicio');
 pendientes.innerHTML=lista.length
   ? `<div class="ticket-card-grid">${lista.slice(0,2).map(t=>tarjetaTurno(t,true)).join('')}</div>${lista.length>2?`<p class="muted">Tienes ${lista.length-2} turno(s) activo(s) adicional(es).</p>`:''}`
   : `<section class="card empty-state"><div class="empty-symbol">${icon('ticket',28)}</div><div><h3>Aún no tienes turnos activos</h3><p>Explora los establecimientos y solicita tu primer turno de prueba. </p></div><button type="button" class="btn btn-primary" data-go="Establecimientos">Explorar establecimientos ${icon('arrow',17)}</button></section>`;
 const clinico=lista.find(t=>esSalud(porId(t.sedeId)));if(clinico)pendientes.insertAdjacentHTML('beforeend',`<div class="hu-actions"><button class="btn btn-secondary" data-action="vista-breve" data-id="${h(clinico.id)}">Vista resumida de mi atención clínica</button></div>`);document.getElementById('destacados-inicio').innerHTML=destacados.map(p=>tarjetaSede(p,true)).join('');
}

function obtenerSedesFiltradas(){
  let lista=sedes.filter(p=>{
    const consulta=norm(estado.busqueda);
    return (estado.categoria==='Todas'||p.categoria===estado.categoria)
       &&(estado.distrito==='Todos'||p.distrito===estado.distrito)
       &&(!consulta||norm([p.nombre,p.categoria,p.distrito,p.direccion,...p.servicios.map(s=>s[1])].join(' ')).includes(consulta));
  });
  if(estado.orden==='Espera menor')lista.sort((a,b)=>(datosAfluencia(a)?.minutos??minutosEstimados(a,a.personas))-(datosAfluencia(b)?.minutos??minutosEstimados(b,b.personas)));
  if(estado.orden==='Espera mayor')lista.sort((a,b)=>(datosAfluencia(b)?.minutos??minutosEstimados(b,b.personas))-(datosAfluencia(a)?.minutos??minutosEstimados(a,a.personas)));
  if(estado.orden==='Nombre')lista.sort((a,b)=>a.nombre.localeCompare(b.nombre,'es'));
  return lista;
}
function textoResultadosSedes(cantidad){return `${cantidad} establecimiento${cantidad===1?'':'s'} encontrado${cantidad===1?'':'s'}`;}
function actualizarResultados(){const nodo=document.querySelector('#resultado-sedes');if(!nodo)return;const lista=obtenerSedesFiltradas();const cuenta=document.querySelector('#contador-sedes');if(cuenta)cuenta.textContent=textoResultadosSedes(lista.length);
 nodo.innerHTML=lista.length?lista.map(p=>tarjetaSede(p)).join(''):`<section class="card empty-state empty-results"><div class="empty-symbol">${icon('search',28)}</div><div><h3>Sin resultados para estos filtros</h3><p>Prueba con otro nombre, categoría o distrito.</p></div><button type="button" class="btn btn-secondary" data-action="limpiar-filtros">Limpiar filtros</button></section>`;
 document.querySelectorAll('[data-category]').forEach(el=>{el.classList.toggle('active',el.dataset.category===estado.categoria);el.setAttribute('aria-pressed',String(el.dataset.category===estado.categoria));});
}
// El buscador, los filtros y las categorías ya están en HTML.
// Al entrar a la sección solo completamos las opciones de distrito.
function prepararEstablecimientos(){
 const distritos=[...new Set(sedes.map(p=>p.distrito))].sort((a,b)=>a.localeCompare(b,'es'));
 const select=document.getElementById('filtrar-distrito');
 select.innerHTML='<option value="Todos">Todos los distritos</option>'
   +distritos.map(d=>`<option value="${h(d)}">${h(d)}</option>`).join('');
 select.value=estado.distrito;
 document.getElementById('buscar-sede').value=estado.busqueda;
 document.getElementById('ordenar-sedes').value=estado.orden;
 document.getElementById('total-sedes-descripcion').textContent=String(sedes.length);
 actualizarResultados();
}

function detalle(){const p=porId(estado.sedeId);if(!p){navegar('Establecimientos');return "";}const activo=turnoActivoDe(p.id),d=datosAfluencia(p);
 return `<section class="page narrow"><button type="button" class="back-link" data-go="Establecimientos">${icon('undo',15)} Volver a establecimientos</button>
   <div class="detail-hero"><img src="${sitioImagen(p)}" alt="Fotografía referencial de ${h(p.nombre)}"><div class="detail-overlay"><span class="pill pill-blue">${h(p.categoria)}</span><h1>${h(p.nombre)}</h1><p>${icon('pin',16)} ${h(p.distrito)}, Lima Metropolitana</p></div></div>
   <div class="detail-layout"><div class="detail-content">
     <section class="card detail-section"><h2>Información del establecimiento</h2><p>Conoce la sede y revisa sus servicios antes de solicitar tu turno.</p>
      <div class="fact-row">${icon('pin',19)}<div><b>Dirección</b><span>${h(p.direccion)}</span></div></div>
      <div class="fact-row">${icon('clock',19)}<div><b>Horario de atención referencial</b><span>${h(p.horario)}</span></div></div>${esSalud(p)?`<div class="callout">${icon('clock',18)}<span>Rango de espera clínica estimado: <b>${rangoEspera(minutosEstimados(p,p.personas))}</b> .</span></div>`:''}
      <a class="external-reference" href="${h(p.fuente)}" target="_blank" rel="noopener noreferrer">${icon('info',16)} Visitar sitio web oficial</a>
     </section>
     <section class="card detail-section"><h2>Servicios disponibles</h2><p>Explora los trámites y elige la atención que necesitas.</p>
       <div class="service-list">${p.servicios.map(s=>`<div><span class="service-icon">${icon('file',18)}</span><div><strong>${h(s[1])}</strong><small>${h(s[2])}</small></div></div>`).join('')}</div>
     </section>
     ${bloqueDemanda(p)}
     ${esReniec(p)?listaRequisitos(p,p.servicios[0][0]):''}
   </div><aside class="card booking-card" aria-label="Tiempo de espera referencial"><span class="booking-label">ESPERA ESTIMADA</span><strong class="big-time">${d?d.minutos:minutosEstimados(p,p.personas)}<small> min</small></strong><p>${icon('people',17)} ${d?d.personas:p.personas} personas delante</p>${afluenciaHTML(p)}<div class="separator"></div><p class="availability">${h(estadoAtencion(p))}</p>
     ${activo?`<p class="info-text">Ya tienes un turno activo en este establecimiento.</p><button type="button" data-action="duplicado" data-id="${p.id}" class="btn btn-secondary full">Ver mi turno existente</button>`:`<button type="button" data-action="seleccionar-sede" data-id="${p.id}" class="btn btn-primary full">Solicitar turno ${icon('arrow',17)}</button>`}
     ${enlaceQR(p)}</aside></div>
 </section>`;
}
// La estructura del formulario está en <template id="plantilla-servicio"> de pages/index.html.
function prepararServicio(){
 const p=porId(estado.sedeId);
 if(!p){navegar('Establecimientos');return;}
 document.getElementById('servicio-nombre-sede').textContent=p.nombre;
 document.getElementById('servicio-imagen').src=sitioImagen(p);
 document.getElementById('servicio-imagen').alt=`Fotografía referencial de ${p.nombre}`;
 document.getElementById('servicio-resumen-nombre').textContent=p.nombre;
 document.getElementById('servicio-resumen-distrito').textContent=p.distrito;
 document.getElementById('servicio-resumen-espera').textContent=`${minutosEstimados(p,p.personas)} minutos`;
 document.getElementById('servicio-resumen-personas').textContent=String(p.personas);
 document.getElementById('lista-servicios').innerHTML=p.servicios.map(s=>
  `<label class="service-choice ${estado.servicioId===s[0]?'chosen':''}"><input type="radio" name="servicio" value="${h(s[0])}" ${estado.servicioId===s[0]?'checked':''}><span class="service-icon">${icon('file',19)}</span><span><strong>${h(s[1])}</strong><small>${h(s[2])}</small></span></label>`
 ).join('');
 const form=document.getElementById('form-servicio');
 const acciones=form.querySelector('.form-actions');
 acciones.insertAdjacentHTML('beforebegin',`<div id="requisitos-elegidos" class="hu-checklist"></div>${modalidadHTML(p)}`);
 actualizarRequisitosMarcados();pintarPlan();
}

// El formulario de registro también está escrito en HTML5 y se completa con DOM.
function prepararDatos(){
 const desdeTurno=estado.registroOrigen==='Solicitud';
 const u=estado.usuario||{nombres:'',apellidos:'',dni:'',correo:''};
 const sede=porId(estado.sedeId);
 const titulo=document.getElementById('datos-titulo');
 const subtitulo=document.getElementById('datos-descripcion');
 document.getElementById('datos-encabezado').textContent=desdeTurno?'PASO 2 DE 4':'DATOS PERSONALES';
 titulo.textContent=estado.usuario?'Revisa tus datos':'Registra tus datos';
 subtitulo.textContent=desdeTurno?'Completa tus datos para continuar con tu solicitud.':'Actualiza tus datos personales.';
 document.getElementById('datos-pasos').hidden=!desdeTurno;
 document.getElementById('datos-atras').dataset.go=desdeTurno?'Servicio':'Perfil';
 document.getElementById('datos-atras').textContent=desdeTurno?'← Volver al servicio':'← Volver a mi perfil';
 document.getElementById('datos-volver').dataset.go=desdeTurno?'Servicio':'Perfil';
 document.getElementById('datos-guardar').textContent=desdeTurno?'Guardar y revisar turno':'Guardar mis datos';
 document.getElementById('datos-aside-titulo').textContent=desdeTurno?'Tu solicitud está casi lista':'Mi perfil';
 document.getElementById('datos-aside-texto').textContent=desdeTurno&&sede?
  `Estás solicitando un turno en ${sede.nombre}.`:
  'Gestiona tu información y tus turnos.';
 for(const key of ['nombres','apellidos','dni','correo'])document.getElementById('dato-'+key).value=u[key]||'';
}

function validarDatos(form){
 const valores={nombres:form.elements.nombres.value.trim().replace(/\s+/g,' '),apellidos:form.elements.apellidos.value.trim().replace(/\s+/g,' '),dni:form.elements.dni.value.trim(),correo:form.elements.correo.value.trim()};
 const validoNombre=v=>v.length>=2&&v.length<=60&&/^[\p{L}\s.'-]+$/u.test(v);
 const errores={nombres:validoNombre(valores.nombres)?'':'Escribe nombres válidos (mínimo 2 letras).',apellidos:validoNombre(valores.apellidos)?'':'Escribe apellidos válidos (mínimo 2 letras).',dni:/^\d{8}$/.test(valores.dni)?'':'Ingresa un DNI de 8 dígitos numéricos.',correo:!valores.correo||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.correo)?'':'Ingresa un correo válido o deja este campo vacío.'};
 let primerError=null;
 for(const key of ['nombres','apellidos','dni','correo']){
   const input=form.elements[key],ayuda=document.getElementById('error-'+key);
   ayuda.textContent=errores[key];ayuda.hidden=!errores[key];
   if(errores[key]){input.setAttribute('aria-invalid','true');if(!primerError)primerError=input;}
   else input.removeAttribute('aria-invalid');
 }
 if(primerError){primerError.focus();return null;}
 return valores;
}
function revision(){const p=porId(estado.sedeId),s=p?.servicios.find(x=>x[0]===estado.servicioId);if(!p||!s){navegar('Establecimientos');return "";}if(!estado.usuario){estado.registroOrigen='Solicitud';navegar('Datos');return '';}
 return `<section class="page narrow"><button type="button" class="back-link" data-go="Servicio">${icon('undo',15)} Cambiar servicio</button>
 ${titulo('PASO 3 DE 4','Revisa tu solicitud','Comprueba los datos antes de generar tu turno.')}
 <div class="process-stepper"><span>1 · Servicio</span><span>2 · Tus datos</span><span class="current">3 · Revisión</span><span>4 · Confirmación</span></div>
 <section class="card review-card"><div class="review-head"><span class="review-check">${icon('check',25)}</span><div><h2>Resumen de tu turno</h2><p>Verifica que la sede y el trámite sean correctos.</p></div></div>
  <div class="review-details"><div><span>Solicitante</span><strong>${h(estado.usuario.nombres)} ${h(estado.usuario.apellidos)}</strong><button type="button" class="link-button" data-action="editar-datos" data-value="Solicitud">Editar</button></div><div><span>Establecimiento</span><strong>${h(p.nombre)}</strong><button type="button" class="link-button" data-go="Establecimientos">Cambiar</button></div>
    <div><span>Distrito y dirección</span><strong>${h(p.distrito)} · ${h(p.direccion)}</strong></div>
    <div><span>Servicio seleccionado</span><strong>${h(s[1])}</strong><button type="button" class="link-button" data-go="Servicio">Cambiar</button></div>
    <div><span>Modalidad</span><strong>${estado.planVisita?'Atención programada':'Atención inmediata'}</strong></div><div><span>DNI</span><strong>${h(dniOculto(estado.usuario.dni))}</strong></div>${estado.planVisita?'':`<div><span>Espera estimada</span><strong>${minutosEstimados(p,p.personas)} minutos</strong></div><div><span>Personas delante</span><strong>${p.personas}</strong></div>`}${estado.planVisita?`<div><span>Fecha y horario</span><strong>${h(fechaPlan(estado.planVisita.fecha,estado.planVisita.hora))}</strong></div>`:''}</div>
  
  <div class="form-actions"><button type="button" class="btn btn-secondary" data-go="Servicio">Volver y corregir</button><button type="button" class="btn btn-primary" data-action="crear-turno">Confirmar y generar turno ${icon('check',17)}</button></div></section></section>`;
}
function confirmacion(){const t=turnoPorId(estado.turnoVisto);if(!t)return turnos();const p=porId(t.sedeId);
 return `<section class="page narrow confirmation-page">${titulo('PASO 4 DE 4','¡Turno generado correctamente!','Tu solicitud está lista para seguimiento.')}
 <div class="process-stepper"><span>1 · Servicio</span><span>2 · Tus datos</span><span>3 · Revisión</span><span class="current">4 · Confirmación</span></div>
 <section class="card receipt-card"><p class="receipt-person">Solicitante: <strong>${h(estado.usuario?.nombres||'')} ${h(estado.usuario?.apellidos||'')}</strong></p><div class="receipt-success">${icon('check',30)}</div><span class="eyebrow">TU NÚMERO DE TURNO</span><div class="receipt-number">${h(t.numero)}</div>${estadoPildora(t.estado)}<h2>${h(p.nombre)}</h2><p>${h(t.servicio)}</p>${t.estado==='Programado'?'':`<div class="receipt-meta"><span>${icon('ticket',17)} Posición: ${h(posicion(t))}</span><span>${icon('clock',17)} ${t.minutos} minutos</span><span>${icon('people',17)} ${t.personas} personas delante</span></div>`}
 <div class="receipt-date">${icon('calendar',18)} ${h(fechaHora(t))} · DNI ${h(t.dniParcial)}</div><p class="hu-note"><strong>Área asignada:</strong> ${h(t.modulo)}</p>${qrVisual()}
 <div class="receipt-actions"><button type="button" class="btn btn-primary" data-action="seguir-turno" data-id="${t.id}">Seguir mi turno ${icon('arrow',17)}</button><button type="button" class="btn btn-secondary" data-action="descargar" data-id="${t.id}">${icon('download',17)} Descargar ticket PNG</button></div>
 </section>
 <div class="center-link"><button type="button" class="link-button" data-go="Turnos">Ver todos mis turnos</button></div></section>`;
}
function turnos(){const lista=activos();const ended=terminados();
 return `<section class="page">${titulo('MI ESPACIO','Mis turnos','Gestiona tus turnos activos de diferentes establecimientos, sin afectar a los demás.')}
 <div class="stats-grid compact-stats"><article class="card stat"><span class="stat-icon blue">${icon('ticket',22)}</span><div><strong>${lista.length}</strong><span>Turnos activos</span></div></article><article class="card stat"><span class="stat-icon green">${icon('check',22)}</span><div><strong>${ended.filter(t=>t.estado==='Finalizado').length}</strong><span>Finalizados</span></div></article><article class="card stat"><span class="stat-icon orange">${icon('x',22)}</span><div><strong>${ended.filter(t=>t.estado==='Cancelado').length}</strong><span>Cancelados</span></div></article></div>
 <div class="section-heading"><div><span>TUS SOLICITUDES</span><h2>Turnos en seguimiento</h2></div><button type="button" class="btn btn-secondary" data-go="Establecimientos">${icon('arrow',16)} Solicitar otro turno</button></div>
 ${lista.length?`<div class="ticket-card-grid">${lista.map(t=>tarjetaTurno(t)).join('')}</div>`:`<section class="card empty-state"><div class="empty-symbol">${icon('ticket',28)}</div><div><h3>No tienes turnos activos</h3><p>Puedes tener varios turnos en diferentes sedes, pero solo uno activo por establecimiento.</p></div><button class="btn btn-primary" data-go="Establecimientos">Explorar establecimientos</button></section>`}
 <div class="hu-actions"><button type="button" class="btn btn-secondary" data-go="Consulta">Consultar mi turno</button></div></section>`;
}
function seguimiento(){const lista=activos(),ultimo=turnoPorId(estado.turnoVisto);if(ultimo?.estado==='Finalizado'&&(!lista.length||estado.vistaBreve)){return `<section class="page narrow">${titulo('SIGUE TU ATENCIÓN','Seguimiento de turnos')}<section class="card track-main"><div class="track-header"><span class="eyebrow">NÚMERO DE TURNO</span>${estadoPildora(ultimo.estado)}</div><div class="tracking-number">${h(ultimo.numero)}</div><h2>${h(porId(ultimo.sedeId).nombre)}</h2><p>${h(ultimo.servicio)}</p><div class="callout callout-good">${icon('check',20)} Atención finalizada. Tu turno se encuentra en el historial.</div><div class="progress-stages timeline">${['Confirmado','En espera','En atención','Finalizado'].map(e=>`<span class="passed"><i>${icon('check',18)}</i>${e}</span>`).join('')}</div><div class="track-actions"><button class="btn btn-primary" data-go="Historial">Ver historial</button><button class="btn btn-secondary" data-action="descargar" data-id="${h(ultimo.id)}">Descargar ticket</button></div></section></section>`;}if(!lista.length){return `<section class="page narrow">${titulo('SEGUIMIENTO','Seguimiento de turnos','Consulta el avance de cada turno mientras se encuentre activo.')}
 <section class="card empty-state"><div class="empty-symbol">${icon('compass',30)}</div><div><h3>No tienes turnos en seguimiento</h3><p>Solicita un turno para consultar su estado.</p></div><button class="btn btn-primary" data-go="Establecimientos">Solicitar turno</button><button class="btn btn-secondary" data-go="Consulta">Consultar mi turno</button></section></section>`;}
 const ordenada=lista.slice().sort((a,b)=>a.personas-b.personas);let t=lista.find(x=>x.id===estado.turnoVisto)||ordenada[0];estado.turnoVisto=t.id;const p=porId(t.sedeId);if(estado.vistaBreve&&esSalud(p))return vistaBreve(t);
 return `<section class="page narrow">${titulo('SIGUE TU ATENCIÓN','Seguimiento de turnos','Consulta el estado de tus turnos y los avisos de atención.')}
 <div class="card tracking-selector"><label for="selector-turno">Selecciona el turno que deseas seguir</label><select id="selector-turno">${ordenada.map(x=>`<option value="${h(x.id)}" ${t.id===x.id?'selected':''}>${h(x.numero)} · ${h(porId(x.sedeId).nombre)} · ${h(x.estado)}</option>`).join('')}</select></div>
 <div class="tracking-layout"><section class="card track-main"><div class="track-header"><span class="eyebrow">NÚMERO DE TURNO</span>${estadoPildora(t.estado)}</div><div class="tracking-number">${h(t.numero)}</div><strong>${h(p.nombre)}</strong><p class="muted">${h(t.servicio)}</p>
   ${t.estado==='Programado'?`<p class="callout">Tu atención está programada para ${h(fechaHora(t))}. La cola comenzará cuando llegue el horario.</p>`:`<div class="tracking-metrics">${metricasCola(t)}<div><strong>${t.personas}</strong><span>Personas delante</span></div><div><strong data-countdown="${h(t.id)}">${t.minutos}:00</strong><span>${esSalud(p)?`Rango ${rangoEspera(t.minutos)}`:'Espera estimada'}</span></div><div><strong>${h(t.modulo)}</strong><span>Módulo de atención</span></div></div>`}
   ${t.planVisita?`<p class="hu-note"><strong>Visita planificada:</strong> ${h(fechaHora(t))}.</p>`:''}<div class="progress-stages timeline" aria-label="Etapas del turno">${['Confirmado','En espera','En atención','Finalizado'].map((et,i)=>{const actual=t.estado==='Programado'?0:t.estado==='Llamado'?2:1;return `<span class="${i===actual?'active':i<actual?'passed':''}" ${i===actual?'aria-current="step"':''}><i>${icon(i<actual?'check':i===0?'ticket':i===1?'clock':i===2?'user':'check',18)}</i>${et}</span>`;}).join('')}</div>
   ${t.estado==='Programado'?'':t.estado==='Llamado'?`<div class="callout callout-good">${icon('bell',19)} <span>¡Es tu turno! Área asignada: <b>${h(t.modulo)}</b>.</span></div>`:t.estado==='Próximo'?`<div class="callout callout-warn">${icon('alert',19)} <span>Faltan ${t.personas} persona(s). Prepárate para tu atención.</span></div>`:`<div class="callout">${icon('info',19)} <span>Te avisaremos cuando se acerque tu turno.</span></div>`}
   <div class="track-actions">${esSalud(p)?`<button class="btn btn-secondary" data-action="vista-breve" data-id="${h(t.id)}">Vista resumida</button>`:''}<span class="auto-status">${icon('clock',17)} Actualización automática</span><button class="btn btn-danger" type="button" data-action="pedir-cancelacion" data-id="${t.id}">Cancelar este turno</button></div><div class="preview-process-row"><button type="button" class="link-button preview-process-btn" data-action="simular-proceso" data-id="${h(t.id)}"><svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="12" cy="12" r="9"/><path d="m10 8 6 4-6 4Z"/></svg> Simular proceso</button></div>
   </section>
   <aside class="card tracking-info"><h2>Detalle de la atención</h2><div class="fact-row">${icon('building',17)}<div><b>Sede</b><span>${h(p.nombre)}</span></div></div><div class="fact-row">${icon('pin',17)}<div><b>Distrito</b><span>${h(p.distrito)}</span></div></div><div class="fact-row">${icon('file',17)}<div><b>Servicio</b><span>${h(t.servicio)}</span></div></div><div class="fact-row">${icon('ticket',17)}<div><b>Identificador</b><span>${h(t.numero)}</span></div></div>
     ${qrVisual()}<button class="btn btn-secondary full" data-action="descargar" data-id="${h(t.id)}">${icon('download',17)} Descargar ticket</button>
   </aside></div><div class="hu-extra-grid">${t.estado==='Programado'?'':controlAlertas(t)+opcionesTiempo(t)+alertaDemora(t)+flujoClinico(t)+tarjetaModulos(p,t)}</div><div class="hu-actions"><button type="button" class="btn btn-secondary" data-go="Consulta">Consultar mi turno</button><button type="button" class="btn btn-secondary" data-action="reprogramar-turno" data-id="${h(t.id)}">Reprogramar turno</button></div></section>`;
}
function notificaciones(){return `<section class="page narrow">${titulo('CENTRO DE AVISOS','Notificaciones','Recibe información sobre tus turnos y novedades de atención.')}
 <section class="card hu-panel"><h2>Avisos del dispositivo</h2>${permisoAvisosHTML()}</section><div class="results-bar"><strong>${estado.avisos.length} notificación(es) · ${estado.avisos.filter(a=>!a.leido).length} sin leer</strong><button type="button" class="link-button" data-action="leer-todas" ${!estado.avisos.some(a=>!a.leido)?'disabled':''}>${icon('check',16)} Marcar todas como leídas</button></div>
 ${estado.avisos.length?`<div class="notification-list">${estado.avisos.map(a=>`<article class="card notice-card ${a.leido?'':'unread'}"><span class="notice-icon">${icon('bell',20)}</span><div><div class="notice-title"><h3>${h(a.titulo)}</h3>${!a.leido?'<span class="pill pill-blue">Nueva</span>':''}</div><p>${h(a.mensaje)}</p><small>${h(a.fecha.toLocaleString('es-PE',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}))}</small></div><div class="notice-actions">${!a.leido?`<button type="button" class="btn btn-secondary" data-action="leer" data-id="${a.id}">Marcar leída</button>`:''}${turnoPorId(a.turnoId)&&['Programado','En espera','Próximo','Llamado'].includes(turnoPorId(a.turnoId).estado)?`<button class="btn btn-primary" data-action="seguir-turno" data-id="${a.turnoId}">Ver turno</button>`:''}</div></article>`).join('')}</div>`:`<section class="card empty-state"><div class="empty-symbol">${icon('bell',28)}</div><div><h3>Aún no hay notificaciones</h3><p>Aparecerán aquí cuando solicites un turno o cambie su estado.</p></div><button class="btn btn-primary" data-go="Establecimientos">Solicitar mi primer turno</button></section>`}</section>`;}
function filtrarHistorial(){return terminados().filter(t=>(estado.historicoEstado==='Todos'||t.estado===estado.historicoEstado)&&(!norm(estado.historicoBuscar)||norm([t.numero,t.servicio,porId(t.sedeId).nombre].join(' ')).includes(norm(estado.historicoBuscar)))).sort((a,b)=>b.fecha-a.fecha);}
function actualizarHistorial(){const n=document.querySelector('#historial-resultados');if(!n)return;const f=filtrarHistorial();const total=document.querySelector('#historial-contador');total.textContent=`${f.length} resultado(s)`;n.innerHTML=f.length?`<div class="table-wrap"><table><thead><tr><th>Número</th><th>Establecimiento</th><th>Servicio</th><th>Fecha</th><th>Estado</th></tr></thead><tbody>${f.map(t=>`<tr><td><strong>${h(t.numero)}</strong></td><td>${h(porId(t.sedeId).nombre)}</td><td>${h(t.servicio)}</td><td>${h(t.fecha.toLocaleString('es-PE'))}</td><td>${estadoPildora(t.estado)}</td></tr>`).join('')}</tbody></table></div>`:`<div class="empty-state"><div class="empty-symbol">${icon('history',25)}</div><div><h3>No hay turnos en el historial</h3><p>Los turnos finalizados o cancelados aparecerán aquí.</p></div></div>`;}
function historial(){const f=terminados(),fin=f.filter(t=>t.estado==='Finalizado').length,can=f.filter(t=>t.estado==='Cancelado').length;
 return `<section class="page">${titulo('TU ACTIVIDAD','Historial de atención','Consulta tus turnos finalizados o cancelados.')}
 <div class="stats-grid compact-stats"><article class="card stat"><span class="stat-icon blue">${icon('history',22)}</span><div><strong>${f.length}</strong><span>Registrados</span></div></article><article class="card stat"><span class="stat-icon green">${icon('check',22)}</span><div><strong>${fin}</strong><span>Finalizados</span></div></article><article class="card stat"><span class="stat-icon orange">${icon('x',22)}</span><div><strong>${can}</strong><span>Cancelados</span></div></article></div>
 <section class="card history-shell"><div class="filter-grid"><label class="filter-field filter-grow"><span>Buscar por turno, sede o servicio</span><input type="search" id="buscar-historial" placeholder="Buscar historial..." value="${h(estado.historicoBuscar)}"></label><label class="filter-field"><span>Estado</span><select id="estado-historial">${['Todos','Finalizado','Cancelado'].map(x=>`<option ${estado.historicoEstado===x?'selected':''}>${x}</option>`).join('')}</select></label></div><div class="results-bar"><strong id="historial-contador">0 resultados</strong></div><div id="historial-resultados"></div></section></section>`;
}
function perfil(){const u=estado.usuario;
 const nombre=u?u.nombres+' '+u.apellidos:'Aún no registraste tus datos';
 const iniciales=u?u.nombres.charAt(0).toUpperCase()+u.apellidos.charAt(0).toUpperCase():'MP';
 return `<section class="page narrow">${titulo('MI CUENTA','Mi perfil',u?'Consulta y edita tus datos personales.':'Podrás registrarte cuando solicites tu primer turno o hacerlo desde aquí.')}
 <div class="profile-layout"><section class="card profile-summary"><div class="avatar-lg">${h(iniciales)}</div><h2>${h(nombre)}</h2><p>${u?'Información personal':'Completa tu perfil'}</p>${u?`<button type="button" class="btn btn-secondary profile-edit" data-action="editar-datos" data-value="Perfil">Editar mis datos</button>`:''}</section>
 <div class="profile-content">
 ${u?`<section class="card profile-section"><h2>Datos personales</h2><p>Se usan para identificar tus solicitudes.</p><div class="profile-data"><div><span>Nombres</span><strong>${h(u.nombres)}</strong></div><div><span>Apellidos</span><strong>${h(u.apellidos)}</strong></div><div><span>DNI</span><strong>${h(dniOculto(u.dni))}</strong></div><div><span>Correo electrónico</span><strong>${h(u.correo||'No proporcionado')}</strong></div></div><button type="button" class="btn btn-secondary" data-action="editar-datos" data-value="Perfil">${icon('user',17)} Modificar información</button></section>`:`<section class="card profile-section profile-empty"><h2>Completa tu perfil</h2><p>Completa tus nombres, apellidos y DNI. El correo electrónico es opcional.</p><button type="button" class="btn btn-primary" data-action="editar-datos" data-value="Perfil">${icon('user',17)} Registrar mis datos</button></section>`}
 <section class="card profile-section"><h2>Tu actividad</h2><p>Consulta el resumen de tus turnos y notificaciones.</p><div class="profile-numbers"><div><strong>${activos().length}</strong><span>Turnos activos</span></div><div><strong>${terminados().length}</strong><span>En historial</span></div><div><strong>${estado.avisos.length}</strong><span>Notificaciones</span></div></div></section>
 <section class="card profile-section"><h2>Preferencias y ayuda</h2><p>Puedes personalizar la lectura y conocer cómo usar la plataforma.</p><div class="profile-links"><button type="button" data-go="Accesibilidad">${icon('sliders',21)} Opciones de accesibilidad ${icon('arrow',16)}</button><button type="button" data-go="Ayuda">${icon('help',21)} Guía de uso ${icon('arrow',16)}</button></div></section>
 <section class="card profile-section danger-zone"><h2>Privacidad y datos</h2><p>Elimina tu información personal, turnos, notificaciones e historial. Esta acción no se puede deshacer.</p><button type="button" data-action="preguntar-reinicio" class="btn btn-danger">Eliminar mis datos</button></section></div></div></section>`;
}
function accesibilidad(){const a=estado.acceso;
 return `<section class="page accessibility-page">${titulo('EXPERIENCIA PARA TODOS','Accesibilidad','Personaliza el tamaño del texto y los contrastes para navegar con mayor comodidad.')}
 <section class="card access-card"><div class="access-head"><span>${icon('sliders',20)}</span><div><h2>Tamaño del texto</h2><p>Selecciona el tamaño más cómodo para leer.</p></div></div><div class="size-options">${['Normal','Grande','Extragrande'].map(x=>`<button type="button" data-action="cambiar-tamano" data-value="${x}" class="${a.tamano===x?'selected':''}" aria-pressed="${a.tamano===x}"><strong class="tamano-ejemplo ${x==='Normal'?'ejemplo-normal':x==='Grande'?'ejemplo-grande':'ejemplo-extra'}">Aa</strong><span>${x==='Extragrande'?'Extra grande':x}</span>${a.tamano===x?icon('check',14):''}</button>`).join('')}</div></section>
 <section class="card access-card"><div class="access-head"><span>${icon('shield',20)}</span><div><h2>Opciones visuales</h2><p>Estos ajustes se aplican de inmediato y no se guardan al actualizar.</p></div></div>
  <div class="setting-row"><span>${icon('shield',20)}<span><strong>Alto contraste</strong><small>Refuerza los bordes y la diferencia entre textos y fondos.</small></span></span><button type="button" data-action="alternar-contraste" class="switch ${a.contraste?'on':''}" role="switch" aria-checked="${a.contraste}" aria-label="Alto contraste"><i></i></button></div>
  <div class="setting-row"><span>${icon('file',20)}<span><strong>Vista simplificada</strong><small>Oculta ilustraciones decorativas y mantiene los datos esenciales.</small></span></span><button type="button" data-action="alternar-simple" class="switch ${a.simplificado?'on':''}" role="switch" aria-checked="${a.simplificado}" aria-label="Vista simplificada"><i></i></button></div></section>
 <section class="card access-card"><h2>Navegación accesible</h2><p>Utiliza <b>Tab</b> para avanzar por botones y campos, <b>Enter</b> para activar controles y <b>Escape</b> para cerrar diálogos. Todos los formularios tienen etiquetas visibles.</p><button type="button" class="btn btn-secondary" data-action="restablecer-acceso">Restablecer ajustes</button></section></section>`;
}
// La guía de ayuda utiliza contenido semántico estático en pages/index.html.

// Navegación entre vistas: las secciones de Inicio, Establecimientos y Ayuda
// permanecen escritas en HTML. Las pantallas que dependen de un turno
// se dibujan dinámicamente en un contenedor independiente.
const equipoContacto=[["GA", "Amau Noriega Gabriel Antonio", "u202518498@upc.edu.pe"], ["JB", "Balboa Mendoza Jorge Piero", "u20251b685@upc.edu.pe"], ["AC", "Ccoicca Espinoza Alvaro Leonardo", "u20251A888@upc.edu.pe"], ["EP", "Pinedo Campomanes Elmer Jhair", "u202513180@upc.edu.pe"], ["LQ", "Quispe Guerra Luis Enrique", "u202514234@upc.edu.pe"], ["ER", "Rosas Lizarme Enrique Yamil Camilo", "u202514518@upc.edu.pe"]];
function contacto(){return `<section class="page narrow">${titulo('CONOCE A NUESTRO EQUIPO','Contacto','Contáctanos para consultas, sugerencias o información sobre nuestro proyecto.')}<section class="card contact-intro"><div class="contact-avatar">${icon('people',24)}</div><div><h2>Equipo de desarrollo — Grupo 5</h2><p>Universidad Peruana de Ciencias Aplicadas (UPC)</p><small>HCI for UX Design</small></div></section><div class="contact-grid">${equipoContacto.map(([iniciales,nombre,correo])=>`<article class="card contact-card"><div class="contact-avatar" aria-hidden="true">${h(iniciales)}</div><h3>${h(nombre)}</h3><p>Integrante del equipo</p><a href="mailto:${h(correo)}">${icon('mail',17)}<span>${h(correo)}</span></a></article>`).join('')}</div><section class="card contact-help"><div><h2>Centro de ayuda</h2><p>Consulta nuestra guía para conocer las funcionalidades de TurnoFacilito.</p></div><button type="button" class="btn btn-primary" data-go="Ayuda">Ver guía de uso ${icon('arrow',17)}</button></section></section>`;}
function paginaLegal(){const tipo=estado.pagina;const texto=tipo==='Privacidad'?'<h2>Tu información</h2><p>Utiliza datos ficticios. Los nombres, DNI, correo, turnos y consultas permanecen únicamente en la memoria de esta página; no se envían a las instituciones ni se conservan al recargarla. El QR es ilustrativo y no contiene información personal.</p><p>Puedes eliminar tus datos en Mi perfil. Los archivos que descargues permanecen en tu dispositivo hasta que los borres.</p><button type="button" class="btn btn-secondary" data-go="Perfil">Ir a mi perfil</button>':tipo==='Términos'?'<h2>Alcance del servicio</h2><p>TurnoFacilito es un proyecto académico de HCI for UX Design. Los horarios, cupos, colas y turnos son referenciales y se gestionan localmente. Los tickets no son válidos para atención presencial ni sustituyen las reservas oficiales. Consulta los canales de cada institución para trámites reales.</p><p>No es un canal de emergencias médicas.</p>':'<h2>Centro de ayuda</h2><p>Consulta la guía para conocer cómo utilizar TurnoFacilito. Para trámites reales, utiliza el sitio oficial que aparece en cada establecimiento. No contamos con un canal de soporte institucional.</p><button type="button" class="btn btn-primary" data-go="Ayuda">Ver guía de uso</button>';return `<section class="page narrow">${titulo('TURNOFACILITO',tipo)}<section class="card hu-panel">${texto}</section></section>`;}

function dibujar(){
 vistaSimulada=null;
 const estaticas={Inicio:'vista-inicio',Establecimientos:'vista-establecimientos',Ayuda:'vista-ayuda'};
 const dinamicas={Detalle:detalle,Revisión:revision,Confirmación:confirmacion,Turnos:turnos,
   Seguimiento:seguimiento,Notificaciones:notificaciones,Historial:historial,
   Perfil:perfil,Privacidad:paginaLegal,Términos:paginaLegal,Contacto:contacto,Accesibilidad:accesibilidad,QR:paginaQR,Consulta:buscarTicket,Reprogramar:programarTurno};
 for(const id of Object.values(estaticas))document.getElementById(id).hidden=true;
 const contenedor=document.getElementById('vista-interactiva');
 contenedor.hidden=true;
 contenedor.innerHTML='';
 const id=estaticas[estado.pagina];
 if(id){
   document.getElementById(id).hidden=false;
   if(estado.pagina==='Inicio')actualizarInicio();
   if(estado.pagina==='Establecimientos')prepararEstablecimientos();
 }else{
   contenedor.hidden=false;
   if(estado.pagina==='Servicio'){
     contenedor.appendChild(document.getElementById('plantilla-servicio').content.cloneNode(true));
     prepararServicio();
   }else if(estado.pagina==='Datos'){
     contenedor.appendChild(document.getElementById('plantilla-datos').content.cloneNode(true));
     prepararDatos();
   }else{
     const contenido=dinamicas[estado.pagina]||turnos;
     contenedor.innerHTML=contenido();
   }
 }
 document.querySelectorAll('[data-svg]').forEach(el=>el.innerHTML=icon(el.dataset.svg,19));
 document.documentElement.dataset.size=estado.acceso.tamano;
 document.documentElement.dataset.contrast=String(estado.acceso.contraste);
 document.documentElement.dataset.simple=String(estado.acceso.simplificado);
 actualizarCabecera();
 if(estado.pagina==='Historial')actualizarHistorial();
 if(estado.pagina==='Reprogramar')pintarHoras('reprogramar-fecha','reprogramar-hora','reprogramar-disponibilidad');
}

function abrirModal(tipo,id){
 const t=tipo==='duplicado'?turnoActivoDe(id):turnoPorId(id);
 const sede=t?porId(t.sedeId):null;
 const titulos={duplicado:'Ya tienes un turno activo',cancelar:'¿Cancelar este turno?',reiniciar:'¿Eliminar tus datos?'};
 const mensajes={duplicado:t?`Tienes el turno ${t.numero} en ${sede.nombre} (${t.servicio}). Solo se permite un turno activo por establecimiento. Puedes consultar su seguimiento o cancelarlo.`:'',cancelar:t?`Se cancelará el turno ${t.numero} de ${sede.nombre}. Perderás la posición actual. Los demás turnos no cambiarán.`:'',reiniciar:'Se borrarán tus datos personales, turnos, notificaciones e historial. Esta acción no se puede deshacer.'};
 estado.modal={tipo,id,anterior:document.activeElement};
 const caja=document.querySelector('#contenedor-modal');
 caja.innerHTML=`<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="titulo-dialogo" aria-describedby="descripcion-dialogo"><div class="modal-icon ${tipo==='cancelar'||tipo==='reiniciar'?'danger':''}">${icon(tipo==='duplicado'?'info':'alert',25)}</div><h2 id="titulo-dialogo">${titulos[tipo]}</h2><p id="descripcion-dialogo">${h(mensajes[tipo])}</p><div class="modal-actions"><button type="button" class="btn btn-secondary" data-action="cerrar-modal">${tipo==='duplicado'?'Cerrar aviso':'Volver'}</button><button type="button" class="btn ${tipo==='duplicado'?'btn-primary':'btn-danger'}" data-action="confirmar-modal">${tipo==='duplicado'?'Ver mi turno':tipo==='cancelar'?'Sí, cancelar turno':'Sí, eliminar'}</button></div></div></div>`;
 caja.querySelector('[data-action="cerrar-modal"]').focus();
}
function cerrarModal(){const previo=estado.modal?.anterior;estado.modal=null;document.querySelector('#contenedor-modal').innerHTML='';if(previo?.isConnected)previo.focus();}
function crearTurno(){const p=porId(estado.sedeId),s=p?.servicios.find(s=>s[0]===estado.servicioId);if(!p||!s){aviso('Selecciona un establecimiento y un servicio.');return;}
 if(!estado.usuario){estado.registroOrigen='Solicitud';navegar('Datos');aviso('Completa tus datos antes de confirmar el turno.');return;}
 const existente=turnoActivoDe(p.id);if(existente){abrirModal('duplicado',p.id);return;}
 if(estado.planVisita?!cuposSimulados(estado.planVisita.fecha,p,estado.servicioId).some(c=>c.hora===estado.planVisita.hora&&c.disponible):(!abiertoAhora(p)||!cuposAhora(p,estado.servicioId))){aviso('El horario ya no está disponible. Selecciona otro.');navegar('Servicio');return;}
 numeroPorSede[p.id]=(numeroPorSede[p.id]||0)+1;
 const t={id:`${p.id}-${numeroPorSede[p.id]}`,solicitante:`${estado.usuario.nombres} ${estado.usuario.apellidos}`,sedeId:p.id,numero:`${p.codigo}-${String(numeroPorSede[p.id]).padStart(3,'0')}`,servicio:s[1],servicioId:estado.servicioId,dniParcial:dniOculto(estado.usuario.dni),creado:new Date(),estado:estado.planVisita?'Programado':'En espera',personas:estado.planVisita?0:p.personas,minutos:estado.planVisita?0:p.espera,modulo:moduloPara(p,estado.servicioId),etapas:etapasClinicas(p,s[1]),etapa:0,umbral:LIMITE_ALERTA_DEFECTO,avisadoUmbral:false,tiempoDisponible:null,avisoLimiteEmitido:false,demora:null,planVisita:estado.planVisita?{...estado.planVisita}:null,fecha:new Date()};
 if(!t.planVisita)iniciarCola(t,Date.now());estado.turnos.push(t);estado.turnoVisto=t.id;notificar('Tu turno fue confirmado',`${t.numero} · ${p.nombre} · ${t.servicio}`,t);if(t.estado!=='Programado'){evaluarProximidad(t);evaluarTiempo(t);}estado.servicioId='';estado.planVisita=null;navegar('Confirmación');aviso(`Turno ${t.numero} generado correctamente.`);
}
function finalizarTurno(t){t.estado='Finalizado';t.personas=0;t.minutos=0;t.fecha=new Date();t.nextAt=null;notificar('Atención finalizada',`${t.numero} en ${porId(t.sedeId).nombre}. Ya puedes verlo en el historial.`,t);}
function evaluarTiempo(t){if(t.tiempoDisponible&&t.minutos>t.tiempoDisponible&&!t.avisoLimiteEmitido){notificar('La espera supera tu disponibilidad',`${t.numero}: ${t.minutos} min de espera estimada frente a ${t.tiempoDisponible} min disponibles. Puedes reprogramar o cancelar.`,t);t.avisoLimiteEmitido=true;}if(!t.tiempoDisponible||t.minutos<=t.tiempoDisponible)t.avisoLimiteEmitido=false;}
function evaluarProximidad(t){if(['En espera','Próximo'].includes(t.estado)&&t.personas>0)t.estado=t.personas<=t.umbral?'Próximo':'En espera';if(t.personas>0&&t.personas<=t.umbral&&!t.avisadoUmbral){t.avisadoUmbral=true;notificar('Alerta preventiva de proximidad',`${t.numero}: faltan ${t.personas} personas. Acércate al área asignada: ${t.modulo}.`,t);aviso(`Turno ${t.numero}: se aproxima tu atención (${t.modulo}).`);}}
function iniciarCola(t,desde){const p=porId(t.sedeId);t.personas=p.personas;t.minutos=minutosEstimados(p,t.personas);t.intervaloCola=Math.max(60000,Math.round(ritmoAtencion(p)*60000/modulosActivos(p,t.personas)));t.nextAt=desde+t.intervaloCola;t.estado='En espera';t.incidenteMostrado=false;t.demora=null;}
function estadoVisual(t){return [t.estado,t.personas,t.minutos,t.etapa,Boolean(t.demora)].join('|');}
function actualizarTurnoAutomatico(t,ahora){
 const inicial=estadoVisual(t),p=porId(t.sedeId);
 if(t.estado==='Programado'){
  const inicio=Date.parse(t.planVisita.fecha+'T'+t.planVisita.hora+':00-05:00');
  if(ahora<inicio)return false;
  iniciarCola(t,inicio);notificar('Turno en espera',`${t.numero} · ${p.nombre}`,t);evaluarProximidad(t);
 }
 if(['En espera','Próximo'].includes(t.estado)&&!t.nextAt)iniciarCola(t,ahora);
 // La máquina usa instantes absolutos para recuperar el progreso si el navegador ralentiza temporizadores.
 let pasos=0;
 while(t.nextAt&&ahora>=t.nextAt&&pasos++<40&&activos().includes(t)){
  const instante=t.nextAt;
  if(t.estado==='Llamado'){
   if(t.etapas?.length&&t.etapa<t.etapas.length-1){t.etapa++;notificar('Avance de atención',`${t.numero}: ${t.etapas[t.etapa]}.`,t);t.nextAt=instante+60000;}
   else finalizarTurno(t);
   continue;
  }
  if(t.demora){t.demora=null;notificar('Atención restablecida',`${t.numero}: finalizó la demora.`,t);}
  t.personas=Math.max(0,t.personas-1);
  if(t.personas===0){t.estado='Llamado';t.minutos=0;t.nextAt=instante+(t.etapas?.length?60000:120000);notificar('¡Es tu turno!',`${t.numero} · ${p.nombre}: área asignada ${t.modulo}.`,t);aviso(`¡Es tu turno ${t.numero}!`);}
  else {
   t.intervaloCola=Math.max(60000,Math.round(ritmoAtencion(p)*60000/modulosActivos(p,t.personas)));t.nextAt=instante+t.intervaloCola;
   // Incidencias deterministas de la cola de ejemplo, sin controles de simulación visibles.
   if(!t.incidenteMostrado&&p.personas>=5){const prioridad=esSalud(p);const extra=prioridad?8:12;t.incidenteMostrado=true;t.demora={motivo:prioridad?'Atención preferencial de pacientes':'Interrupción extraordinaria de la atención',extra};t.nextAt+=extra*60000;notificar(prioridad?'Atención preferencial':'Demora extraordinaria',`${t.numero}: ${t.demora.motivo}. Se estiman ${extra} minutos adicionales.`,t);}
   if(t.personas<=t.umbral)t.estado='Próximo';evaluarProximidad(t);
  }
 }
 if(['En espera','Próximo'].includes(t.estado)){t.minutos=Math.max(1,Math.ceil((t.nextAt-ahora+Math.max(0,t.personas-1)*t.intervaloCola)/60000));evaluarProximidad(t);evaluarTiempo(t);}
 return inicial!==estadoVisual(t);
}
function avanzar(id){const t=turnoPorId(id);if(t)actualizarTurnoAutomatico(t,Date.now());}
function avanzarEtapa(id){const t=turnoPorId(id);if(!t||t.estado!=='Llamado'||!t.etapas?.length)return;if(t.etapa<t.etapas.length-1){t.etapa++;t.nextAt=Date.now()+60000;notificar('Avance de atención',`${t.numero}: ${t.etapas[t.etapa]}.`,t);}else finalizarTurno(t);dibujar();}
let actualizacionPendiente=false;
function actualizarColas(){
 const ahora=Date.now();let cambio=false;
 for(const t of activos())if(actualizarTurnoAutomatico(t,ahora))cambio=true;
 actualizacionPendiente ||= cambio;
 const vistas=['Inicio','Turnos','Seguimiento','Notificaciones','Historial','Confirmación','Perfil'];
 const foco=document.activeElement;
 if(actualizacionPendiente&&!vistaSimulada&&!estado.modal&&vistas.includes(estado.pagina)&&!foco?.matches('input,select,textarea')){
  actualizacionPendiente=false;const datos=foco?.dataset?{...foco.dataset}:{};const id=foco?.id;dibujar();if(id)document.getElementById(id)?.focus({preventScroll:true});else if(datos.action||datos.go){const candidatos=[...document.querySelectorAll('[data-action],[data-go]')];candidatos.find(e=>Object.entries(datos).every(([k,v])=>e.dataset[k]===v))?.focus({preventScroll:true});}
 }
 if(cambio&&estado.pagina==='Consulta'){const el=document.getElementById('resultado-consulta'),t=turnoPorId(estado.consultaResultado);if(el&&t&&!el.contains(document.activeElement))el.innerHTML=resultadoConsulta(t);}
 if(!estado.modal&&ahora-(estado.ultimaAfluencia||0)>30000){estado.ultimaAfluencia=ahora;document.querySelectorAll('[data-afluencia]').forEach(el=>{const p=porId(el.dataset.afluencia),d=datosAfluencia(p),panel=el.closest('.place-card,.place-row,.booking-card');if(panel&&d){const time=panel.querySelector('.big-time,.place-row-action>strong');if(time)time.innerHTML=d.minutos+'<small> min</small>';const mini=panel.querySelector('.mini-footer b');if(mini)mini.textContent=d.minutos+' min';}el.outerHTML=afluenciaHTML(p);});document.querySelectorAll('[data-demanda]').forEach(el=>{el.outerHTML=bloqueDemanda(porId(el.dataset.demanda));});}
 // El contador se refresca sin reconstruir formularios ni interrumpir el foco.
 document.querySelectorAll('[data-countdown]').forEach(el=>{const t=turnoPorId(el.dataset.countdown);if(!t)return;const segundos=['En espera','Próximo'].includes(t.estado)?Math.max(0,Math.ceil((t.nextAt-ahora+Math.max(0,t.personas-1)*t.intervaloCola)/1000)):0;el.textContent=`${String(Math.floor(segundos/60)).padStart(2,'0')}:${String(segundos%60).padStart(2,'0')}`;});
}
async function descargar(id){const t=turnoPorId(id);if(!t)return;const p=porId(t.sedeId);const c=document.createElement('canvas');c.width=960;c.height=1120;const ctx=c.getContext('2d');ctx.fillStyle='#f3f6fb';ctx.fillRect(0,0,960,1120);ctx.fillStyle='#fff';ctx.fillRect(48,40,864,1040);ctx.fillStyle='#0c1733';ctx.fillRect(48,40,864,155);ctx.fillStyle='#fff';ctx.font='bold 42px Arial';ctx.fillText('TurnoFacilito',88,107);ctx.font='24px Arial';ctx.fillText('Gestor inteligente de colas y tiempos de espera',88,150);ctx.textAlign='center';ctx.fillStyle='#64748b';ctx.font='24px Arial';ctx.fillText('NÚMERO DE TURNO',480,247);ctx.fillStyle='#2563eb';ctx.font='bold 90px Arial';ctx.fillText(t.numero,480,344);ctx.fillStyle='#0c1733';ctx.font='bold 28px Arial';const wrap=(text,x,y,max,line)=>{let buf='';for(const word of String(text).split(' ')){if(ctx.measureText(buf+' '+word).width>max&&buf){ctx.fillText(buf,x,y);y+=line;buf=word;}else buf+=(buf?' ':'')+word;}if(buf)ctx.fillText(buf,x,y);return y+line;};let y=wrap(p.nombre,480,397,740,35);ctx.font='26px Arial';y=wrap(t.servicio,480,y+8,740,33);ctx.font='24px Arial';ctx.fillText(t.estado,480,y+5);y+=40;ctx.fillStyle='#e4eaf4';ctx.fillRect(88,y,784,2);y+=40;ctx.textAlign='left';ctx.fillStyle='#0c1733';ctx.font='25px Arial';y=wrap('Fecha y hora: '+fechaHora(t),88,y,780,32);y=wrap('Solicitante: '+(t.solicitante||''),88,y,780,32);y=wrap('DNI: '+(t.dniParcial||''),88,y,780,32);if(t.estado!=='Programado')y=wrap('Posición: '+posicion(t)+' · Espera: '+t.minutos+' min · '+t.personas+' delante',88,y,780,32);const im=new Image();im.src=sitioImagen({imagen:QR_FIJO});try{await im.decode();ctx.drawImage(im,404,805,152,152);}catch(e){}ctx.textAlign='center';ctx.font='20px Arial';ctx.fillStyle='#526681';ctx.fillText('QR ilustrativo · no identifica el turno',480,985);ctx.fillText('Comprobante académico · No válido para atención presencial.',480,1030);c.toBlob(blob=>{if(!blob)return;const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=`TurnoFacilito-${t.numero}.png`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);aviso('Ticket descargado.');},'image/png');}


// Recorrido manual dentro de la tarjeta de seguimiento. No altera el turno original.
let vistaSimulada=null;
function simularProceso(id){
 const t=turnoPorId(id);const card=document.querySelector('.track-main');
 if(!t||!activos().includes(t)||!card||vistaSimulada)return;
 const p=porId(t.sedeId);
 vistaSimulada={id,etapa:0,personas:p.personas,minutos:p.espera,numero:t.numero,nombre:p.nombre,servicio:t.servicio,modulo:t.modulo};
 pintarSimulacion();
}
function pintarSimulacion(){
 const v=vistaSimulada,card=document.querySelector('.track-main');if(!v||!card)return;
 const etapas=['Confirmado','En espera','En atención','Finalizado'],iconos=['ticket','clock','user','check'];
 const mensajes=['Tu turno ha sido confirmado.','Has ingresado a la cola virtual. Te avisaremos cuando sea tu turno.','Es tu turno. Área de referencia: '+v.modulo+'.','Atención finalizada. Gracias por utilizar TurnoFacilito.'];
 const acciones=['Ingresar a la cola','Pasar a atención','Finalizar atención','Volver al seguimiento'];
 const e=v.etapa, personas=e===0?v.personas:e===1?Math.max(0,v.personas-1):0, minutos=e===0?v.minutos:e===1?Math.max(0,Math.ceil(v.minutos*personas/Math.max(1,v.personas))):0;
 card.innerHTML=`<div class="track-header"><span class="eyebrow">NÚMERO DE TURNO</span><span class="pill pill-${e>=2?'green':'blue'}">${etapas[e]}</span></div><div class="tracking-number">${h(v.numero)}</div><strong>${h(v.nombre)}</strong><p class="muted">${h(v.servicio)}</p>
 <div class="tracking-metrics manual-metrics"><div><strong>${e===1?(personas+1)+'.º':'—'}</strong><span>Tu posición</span></div><div><strong>${personas}</strong><span>Personas delante</span></div><div><strong>${minutos} min</strong><span>Espera estimada</span></div><div><strong>${h(v.modulo)}</strong><span>Módulo de atención</span></div></div>
 <div class="progress-stages timeline" aria-label="Etapas del proceso">${etapas.map((label,i)=>`<span class="${i===e?'active':i<e?'passed':''}" ${i===e?'aria-current="step"':''}><i>${icon(i<e?'check':iconos[i],18)}</i>${label}</span>`).join('')}</div>
 <div class="callout ${e>=2?'callout-good':''}" role="status">${icon(e>=2?'check':'info',18)} <span>${h(mensajes[e])}</span></div>
 <div class="track-actions manual-process-actions"><button type="button" class="btn btn-primary" data-action="simular-siguiente">${acciones[e]} ${icon(e===3?'check':'arrow',17)}</button>${e<3?'<button type="button" class="btn btn-secondary" data-action="simular-salir">Salir</button>':''}</div>
 <div class="preview-process-row manual-process-note"><span>${icon('info',15)} Modo de prueba · ${e+1} de 4 · No modifica tu turno.</span></div>`;
 card.querySelector('[data-action="simular-siguiente"]').focus({preventScroll:true});
}
function salirSimulacion(){vistaSimulada=null;dibujar();document.querySelector('[data-action="simular-proceso"]')?.focus({preventScroll:true});}
function siguienteSimulacion(){if(!vistaSimulada)return;if(vistaSimulada.etapa===3){salirSimulacion();return;}vistaSimulada.etapa++;pintarSimulacion();}

// Eventos delegados: facilitan el mantenimiento y sirven para demostrar DOM y JavaScript.
document.addEventListener('click',event=>{
 const cat=event.target.closest('[data-category]');if(cat){estado.categoria=cat.dataset.category;actualizarResultados();return;}
 const go=event.target.closest('[data-go]');if(go){navegar(go.dataset.go);return;}
 const b=event.target.closest('[data-action]');if(!b)return;
 const {action,id,value}=b.dataset;
 switch(action){
  case 'fecha-plan':{const field=document.getElementById('plan-fecha');if(!field)return;field.value=value;estado.planVisita=null;document.querySelectorAll('.date-option').forEach(el=>{const yes=el.dataset.value===value;el.classList.toggle('selected',yes);el.setAttribute('aria-pressed',String(yes));});document.querySelector('.date-title small').textContent=fechaLarga(value);pintarPlan();break;}
  case 'qr-sede':estado.sedeId=id;navegar('QR');break;
  case 'activar-avisos':activarAvisos();break;
  case 'vista-breve':estado.vistaBreve=true;estado.turnoVisto=id;navegar('Seguimiento');break;
  case 'vista-completa':estado.vistaBreve=false;dibujar();break;
  case 'consulta-modo':{const sede=document.getElementById('consulta-sede'),numero=document.getElementById('consulta-numero');if(sede)estado.consultaSede=sede.value;if(numero)estado.consultaNumero=numero.value;}detenerCamaraQR();estado.consultaModo=value;estado.consultaError='';estado.consultaResultado=null;dibujar();document.querySelector(`[data-action="consulta-modo"][data-value="${value}"]`)?.focus();break;
  case 'ver-sede':estado.sedeId=id;estado.servicioId='';navegar('Detalle');break;
  case 'seleccionar-sede':if(turnoActivoDe(id)){abrirModal('duplicado',id);}else{estado.sedeId=id;estado.servicioId='';estado.planVisita=null;estado.modalidad='programada';navegar('Servicio');}break;
  case 'duplicado':abrirModal('duplicado',id);break;
  case 'crear-turno':crearTurno();break;
  case 'editar-datos':estado.registroOrigen=value==='Solicitud'?'Solicitud':'Perfil';navegar('Datos');break;
  case 'seguir-turno':estado.vistaBreve=false;estado.turnoVisto=id;navegar('Seguimiento');break;
  case 'pedir-cancelacion':abrirModal('cancelar',id);break;
  case 'simular-proceso':simularProceso(id);break;
  case 'simular-siguiente':siguienteSimulacion();break;
  case 'simular-salir':salirSimulacion();break;
  case 'avanzar':avanzar(id);break;
  case 'descargar':descargar(id);break;
  case 'avanzar-etapa':avanzarEtapa(id);break;
  case 'abrir-camara':iniciarCamaraQR();break;
  case 'detener-camara':detenerCamaraQR();if(document.getElementById('video-qr')){document.getElementById('video-qr').hidden=true;document.getElementById('qr-estado').textContent='Cámara detenida.';}break;
  case 'usar-codigo-qr':validarCodigoQR(value);break;
  case 'guardar-tiempo':{const t=turnoPorId(id),input=document.getElementById('tiempo-disponible');if(!t||!input)return;const n=Number(input.value);if(!Number.isInteger(n)||n<1||n>600){input.setCustomValidity('Ingresa un tiempo entre 1 y 600 minutos.');input.reportValidity();return;}input.setCustomValidity('');t.tiempoDisponible=n;!t.avisoLimiteEmitido&&evaluarTiempo(t);dibujar();aviso('Tu tiempo disponible fue actualizado.');break;}
  case 'reprogramar-turno':estado.turnoVisto=id;navegar('Reprogramar');break;
  case 'abrir-menu':estado.mostrarMenu=true;actualizarCabecera();break;
  case 'cerrar-menu':estado.mostrarMenu=false;actualizarCabecera();break;
  case 'limpiar-filtros':estado.busqueda='';estado.categoria='Todas';estado.distrito='Todos';estado.orden='Espera menor';navegar('Establecimientos');break;
  case 'leer':{const a=estado.avisos.find(x=>x.id===id);if(a)a.leido=true;dibujar();break;}
  case 'leer-todas':estado.avisos.forEach(a=>a.leido=true);dibujar();break;
  case 'cambiar-tamano':estado.acceso.tamano=value;dibujar();aviso('Tamaño de texto actualizado.');break;
  case 'alternar-contraste':estado.acceso.contraste=!estado.acceso.contraste;dibujar();break;
  case 'alternar-simple':estado.acceso.simplificado=!estado.acceso.simplificado;dibujar();break;
  case 'restablecer-acceso':estado.acceso={tamano:'Normal',contraste:false,simplificado:false};dibujar();aviso('Preferencias restablecidas.');break;
  case 'preguntar-reinicio':abrirModal('reiniciar');break;
  case 'cerrar-modal':cerrarModal();break;
  case 'confirmar-modal':{
    const modal=estado.modal;if(!modal)return;cerrarModal();
    if(modal.tipo==='duplicado'){const t=turnoActivoDe(modal.id);if(t){estado.turnoVisto=t.id;navegar('Seguimiento');}}
    if(modal.tipo==='cancelar'){const t=turnoPorId(modal.id);if(t&&activos().some(x=>x.id===t.id)){t.estado='Cancelado';t.fecha=new Date();notificar('Turno cancelado',`${t.numero} · ${porId(t.sedeId).nombre}. Se registró en el historial.`,t);navegar('Turnos');aviso(`El turno ${t.numero} fue cancelado.`);}}
    if(modal.tipo==='reiniciar'){estado.requisitosListos={};estado.planVisita=null;estado.consultaResultado=null;estado.consultaSede='';estado.consultaNumero='';estado.vistaBreve=false;estado.consultaError='';estado.qrError='';estado.modalidad='programada';estado.consultaModo='manual';estado.turnos=[];estado.avisos=[];estado.favoritos=[];estado.usuario=null;estado.registroOrigen='Solicitud';estado.servicioId='';estado.turnoVisto=null;Object.keys(numeroPorSede).forEach(x=>delete numeroPorSede[x]);navegar('Inicio');aviso('Tus datos se eliminaron correctamente.');}
    break;}
 }
});
document.addEventListener('submit',event=>{
 if(event.target.id==='form-sede-qr'){event.preventDefault();const sede=document.getElementById('sede-qr').value;if(!porId(sede))return;if(turnoActivoDe(sede)){abrirModal('duplicado',sede);return;}estado.sedeId=sede;estado.servicioId='';estado.planVisita=null;estado.modalidad='programada';navegar('Servicio');return;}
 if(event.target.id==='form-codigo-qr'){event.preventDefault();const valor=document.getElementById('codigo-qr').value;estado.qrError='';if(!validarCodigoQR(valor)){estado.qrError='Código no reconocido. Utiliza un código de agencia de ejemplo o selecciona la sede.';dibujar();}return;}
 if(event.target.id==='form-consulta-ticket'){event.preventDefault();const num=norm(document.getElementById('consulta-numero').value).toUpperCase(),sede=document.getElementById('consulta-sede').value;const t=estado.turnos.find(t=>t.sedeId===sede&&norm(t.numero).toUpperCase()===num);estado.consultaSede=sede;estado.consultaNumero=num;estado.consultaResultado=t?.id||null;estado.consultaError=t?'':'No encontramos ese turno. Verifica el número de ticket y el establecimiento.';dibujar();return;}
 if(event.target.id==='form-reprogramar'){event.preventDefault();const t=turnoPorId(estado.turnoVisto),fecha=document.getElementById('reprogramar-fecha').value,hora=document.getElementById('reprogramar-hora').value;if(!t||!cuposSimulados(fecha,porId(t.sedeId),t.servicioId,t.id).some(o=>o.hora===hora&&o.disponible)){aviso('Elige una fecha y horario disponibles.');return;}t.planVisita={sedeId:t.sedeId,fecha,hora};t.estado="Programado";t.personas=0;t.minutos=0;t.etapa=0;t.demora=null;t.nextAt=null;t.incidenteMostrado=false;t.avisadoUmbral=false;t.avisoLimiteEmitido=false;notificar('Visita reprogramada',`${t.numero}: ${fecha} a las ${hora}. `,t);navegar('Seguimiento');aviso('Horario reprogramado correctamente.');return;}
  if(event.target.id==='form-datos'){event.preventDefault();const datosValidados=validarDatos(event.target);if(!datosValidados)return;estado.usuario=datosValidados;const desdeTurno=estado.registroOrigen==='Solicitud';navegar(desdeTurno?'Revisión':'Perfil');aviso('Tus datos se guardaron correctamente.');return;}
 if(event.target.id==='busqueda-inicio'){event.preventDefault();estado.busqueda=event.target.elements.busqueda.value.trim();estado.categoria='Todas';estado.distrito='Todos';navegar('Establecimientos');}
 if(event.target.id==='form-servicio'){event.preventDefault();const p=porId(estado.sedeId);if(!estado.servicioId||!p?.servicios.some(s=>s[0]===estado.servicioId)){const er=document.querySelector('#error-servicio');er.hidden=false;const opcion=document.querySelector('input[name="servicio"]');opcion?.focus();return;}
  if(turnoActivoDe(p.id)){abrirModal('duplicado',p.id);return;}
  estado.modalidad=document.querySelector('input[name="modalidad"]:checked')?.value||'programada';
  if(estado.modalidad==='programada'){const fecha=document.getElementById('plan-fecha').value,hora=document.querySelector('input[name="plan-hora"]:checked')?.value;if(!cuposSimulados(fecha,p,estado.servicioId).some(x=>x.hora===hora&&x.disponible)){document.getElementById('plan-disponibilidad').textContent='Selecciona un horario disponible antes de continuar.';document.querySelector('input[name="plan-hora"]:not(:disabled)')?.focus();return;}estado.planVisita={sedeId:p.id,fecha,hora};}else{if(!abiertoAhora(p)||!cuposAhora(p,estado.servicioId)){aviso('No hay atención inmediata disponible. Programa otra franja.');return;}estado.planVisita=null;}
  if(estado.usuario)navegar('Revisión');else{estado.registroOrigen='Solicitud';navegar('Datos');}}
});
document.addEventListener('change',event=>{
 const t=event.target;
 if(t.id==='archivo-qr'){leerArchivoQR(t.files[0]);return;}
 if(t.id==='filtrar-distrito'){estado.distrito=t.value;actualizarResultados();}
 if(t.id==='ordenar-sedes'){estado.orden=t.value;actualizarResultados();}
 if(t.id==='selector-turno'){estado.vistaBreve=false;estado.turnoVisto=t.value;dibujar();}
 if(t.id==='umbral-alerta'){const actual=turnoPorId(t.dataset.id);if(actual){actual.umbral=Number(t.value);actual.avisadoUmbral=false;evaluarProximidad(actual);dibujar();}}
 if(t.id==='plan-fecha'){estado.planVisita=null;pintarPlan();} if(t.name==='modalidad'){estado.planVisita=null;pintarPlan();} if(t.name==='plan-hora'){estado.planVisita={sedeId:estado.sedeId,fecha:document.getElementById('plan-fecha').value,hora:t.value};actualizarResumenPlan();}
 if(t.id==='reprogramar-fecha')pintarHoras('reprogramar-fecha','reprogramar-hora','reprogramar-disponibilidad');
 if(t.matches('[data-requisito]')){const key=t.dataset.key,i=Number(t.dataset.requisito),listos=new Set(estado.requisitosListos[key]||[]);if(t.checked)listos.add(i);else listos.delete(i);estado.requisitosListos[key]=[...listos];const p=porId(estado.sedeId),cuenta=document.getElementById('conteo-requisitos'),cantidad=requisitosDe(p,estado.servicioId).length;if(cuenta)cuenta.textContent=`${cantidad-listos.size} pendiente(s) de revisar de ${cantidad}.`;}
 if(t.id==='estado-historial'){estado.historicoEstado=t.value;actualizarHistorial();}
 if(t.name==='servicio'){estado.servicioId=t.value;document.querySelectorAll('.service-choice').forEach(el=>el.classList.toggle('chosen',el.querySelector('input').checked));const e=document.querySelector('#error-servicio');if(e)e.hidden=true;actualizarRequisitosMarcados();estado.planVisita=null;const old=document.querySelector(".schedule");if(old){old.outerHTML=modalidadHTML(porId(estado.sedeId));pintarPlan();}}
});
document.addEventListener('input',event=>{const t=event.target;if(t.id==='consulta-filtrar-sede'){const select=document.getElementById('consulta-sede'),prev=select.value,q=norm(t.value);const candidatas=sedes.filter(p=>norm(p.nombre+' '+p.distrito).includes(q));select.innerHTML='<option value="">'+(candidatas.length?'Selecciona el establecimiento':'No se encontraron sedes')+'</option>'+candidatas.map(p=>`<option value="${h(p.id)}">${h(p.nombre)}</option>`).join('');if(candidatas.some(p=>p.id===prev))select.value=prev;}if(t.id==='buscar-sede'){estado.busqueda=t.value;actualizarResultados();}if(t.id==='buscar-historial'){estado.historicoBuscar=t.value;actualizarHistorial();}if(t.id==='dato-dni')t.value=t.value.replace(/[^0-9]/g,'').slice(0,8);if(['dato-nombres','dato-apellidos','dato-dni','dato-correo'].includes(t.id)){t.removeAttribute('aria-invalid');const error=document.getElementById('error-'+t.name);if(error)error.hidden=true;}});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&estado.modal){event.preventDefault();cerrarModal();return;}
 if(event.key==='Tab'&&estado.modal){const dialog=document.querySelector('.modal');const items=[...dialog.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled])')];if(!items.length)return;
 const first=items[0],last=items[items.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}
});
// No hay datos precargados: la primera pantalla inicia sin turnos, historial ni avisos.
dibujar();
// Un QR bancario puede abrir directamente el sitio con la sede preseleccionada.
const sedeDesdeQR=new URLSearchParams(location.search).get('sede');
if(sedeDesdeQR){if(!validarCodigoQR('TF-DEMO:'+sedeDesdeQR)){navegar('QR');estado.qrError='Código de agencia no reconocido.';dibujar();}try{const u=new URL(location.href);u.searchParams.delete('sede');history.replaceState(null,'',u.href);}catch(e){}}
if(typeof Notification!=='undefined'&&Notification.permission==='granted'&&'serviceWorker' in navigator){navigator.serviceWorker.register('../sw.js').catch(()=>{});}
window.setInterval(actualizarColas,1000);
document.addEventListener('visibilitychange',()=>{if(!document.hidden)actualizarColas();});
