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
const activos=()=>estado.turnos.filter(t=>['En espera','Próximo','Llamado'].includes(t.estado));
const terminados=()=>estado.turnos.filter(t=>['Finalizado','Cancelado'].includes(t.estado));
const turnoActivoDe=id=>activos().find(t=>t.sedeId===id);
const turnoPorId=id=>estado.turnos.find(t=>t.id===id);
const sitioImagen=p=>`${document.documentElement.dataset.imageRoot || "../assets/images/"}${p.imagen}`;
function btn(texto,accion,clase='primary',attrs=''){return `<button type="button" class="btn btn-${clase}" data-action="${accion}" ${attrs}>${texto}</button>`;}
function titulo(kicker,texto,sub=''){return `<div class="page-title"><span class="eyebrow">${h(kicker)}</span><h1>${h(texto)}</h1>${sub?`<p class="lead">${h(sub)}</p>`:''}</div>`;}
function estadoPildora(nombre){const tono=nombre==='Llamado'?'green':nombre==='Próximo'?'orange':nombre==='Cancelado'?'red':nombre==='Finalizado'?'gray':'blue';return `<span class="pill pill-${tono}">${h(nombre)}</span>`;}
function aviso(texto){const nodo=document.querySelector('#mensaje');nodo.innerHTML=`${icon('check',18)}<span>${h(texto)}</span>`;nodo.hidden=false;window.clearTimeout(aviso.temporizador);aviso.temporizador=window.setTimeout(()=>{nodo.hidden=true;},3800);}
// Extensiones académicas HU core. Todos los resultados y horarios son datos de DEMOSTRACIÓN.
const LIMITE_ALERTA_DEFECTO=3;
const TURNOS_FRANJA=['09:00','11:00','14:00'];
function esSalud(p){return Boolean(p&&p.categoria==='Salud');}
function esReniec(p){return Boolean(p&&p.id==='reniec');}
function soloFecha(d){const y=d.getFullYear(),m=String(d.getMonth()+1).padStart(2,'0'),day=String(d.getDate()).padStart(2,'0');return `${y}-${m}-${day}`;}
function diasVisita(){const hoy=new Date(),fechas=[];for(let n=1;n<=19&&fechas.length<12;n++){const d=new Date(hoy.getFullYear(),hoy.getMonth(),hoy.getDate()+n);if(d.getDay()!==0)fechas.push({value:soloFecha(d),label:d.toLocaleDateString('es-PE',{weekday:'long',day:'numeric',month:'long'})});}return fechas;}
function cuposSimulados(fecha){return TURNOS_FRANJA.map((hora,i)=>({hora,disponible: Boolean(fecha)&&((new Date(`${fecha}T12:00:00`).getDate()+i)%4!==0)}));}
function siguienteSugerido(fecha){return cuposSimulados(fecha).find(c=>c.disponible)?.hora||'';}
function franjasDemanda(p){const n=activos().filter(t=>t.sedeId===p.id).length;const demora=activos().filter(t=>t.sedeId===p.id).reduce((a,t)=>a+(t.demora?.extra||0),0);return [{etiqueta:'09:00–11:00',base:7},{etiqueta:'11:00–13:00',base:2},{etiqueta:'14:00–16:00',base:0}].map((f,i)=>{const minutos=Math.max(4,p.espera+f.base+i*n*3+Math.round(demora/2));return {...f,minutos,nivel:minutos<18?'Menor demanda':minutos<31?'Demanda media':'Alta demanda'};});}
function bloqueDemanda(p){const fr=franjasDemanda(p);const mejor=fr.reduce((a,b)=>a.minutos<=b.minutos?a:b);return `<section class="card hu-panel"><div class="hu-panel-head">${icon('clock',20)}<div><h2>Horarios de menor demanda <small>HU-15</small></h2><p>Comparación orientativa de franjas, calculada solo con datos de simulación. No confirma citas ni afluencia real.</p></div></div><p class="hu-note">Horario informado por la sede: ${h(p.horario)}.</p><div class="demanda-grid">${fr.map(x=>`<div class="demanda-item ${x.etiqueta===mejor.etiqueta?'demanda-best':''}"><strong>${x.etiqueta}</strong><span>${h(x.nivel)}</span><small>≈ ${x.minutos} min simulados</small>${x.etiqueta===mejor.etiqueta?'<b>Franja sugerida</b>':''}</div>`).join('')}</div><p class="info-text">Las estimaciones cambian si se simula avance, demora o nuevos turnos.</p></section>`;}
function rangoEspera(minutos){const base=Math.max(0,Number(minutos)||0);return `${Math.max(0,base-4)} a ${base+5} min`;}
const REQUISITOS_DEMO={
 bancos:{apertura:['Consultar documento de identidad vigente y sus requisitos específicos','Verificar requisitos de apertura según producto y situación personal'],tarjetas:['Consultar documento de identidad y condiciones para la gestión','Confirmar los documentos de la tarjeta o solicitud'],pagos:['Verificar comprobante, número de operación o referencia necesaria'],asesoria:['Confirmar documento de identidad y documentos de consulta'],cuenta:['Confirmar documento de identidad y condiciones de la cuenta'],creditos:['Consultar los documentos de ingresos que podría solicitar la entidad'],operaciones:['Confirmar identificación y referencias de la operación'],caja:['Confirmar identificación y referencias de la operación']},
 reniec:{renovacion:['Consultar requisitos vigentes de renovación en RENIEC','Verificar modalidad y pago que correspondan al trámite'],duplicado:['Consultar requisitos y canales vigentes de duplicado en RENIEC','Verificar el pago y condiciones aplicables al tipo de DNI'],datos:['Consultar documentación de sustento de la actualización','Verificar requisitos y costos vigentes en RENIEC'],certificados:['Identificar el acta o certificado solicitado','Verificar condiciones y modalidad de emisión oficial']}
};
function requisitosDe(p,servicioId){if(!p)return [];let datos=[];if(p.categoria==='Bancos'){datos=REQUISITOS_DEMO.bancos[servicioId]||['Confirmar los documentos exigidos para el trámite en la web de la entidad'];}else if(esReniec(p)){datos=REQUISITOS_DEMO.reniec[servicioId]||[];}return datos;}
function listaRequisitos(p,servicioId,interactiva=false){const items=requisitosDe(p,servicioId);if(!items.length)return `<section class="card hu-panel"><h2>Requisitos del trámite</h2><p>No hay requisitos registrados para esta atención. Consulta la institución antes de acudir.</p></section>`;const key=`${p.id}:${servicioId}`;const listos=estado.requisitosListos[key]||[];const faltan=items.length-listos.length;return `<section class="card hu-panel"><div class="hu-panel-head">${icon('file',20)}<div><h2>Lista de preparación ${esReniec(p)?'<small>HU-46</small>':'<small>HU-17</small>'}</h2><p>Orientación para preparar tu visita. No es una lista oficial ni sustituye los requisitos obligatorios publicados por la entidad.</p></div></div>${interactiva?`<p class="hu-note" id="conteo-requisitos" role="status">${faltan} pendiente(s) de revisar de ${items.length}.</p>`:''}<div class="checklist">${items.map((item,i)=>interactiva?`<label class="checklist-row"><input type="checkbox" data-requisito="${i}" data-key="${h(key)}" ${listos.includes(i)?'checked':''}><span>${h(item)}</span></label>`:`<p class="checklist-row">${icon('check',16)}<span>${h(item)}</span></p>`).join('')}</div><p class="info-text">El servicio seleccionado es obligatorio en esta simulación. Los requisitos reales deben verificarse en el canal oficial.</p><a class="external-reference" href="${h(p.fuente)}" target="_blank" rel="noopener noreferrer">Consultar fuente institucional externa</a></section>`;}
function actualizarRequisitosMarcados(){const el=document.getElementById('requisitos-elegidos');const p=porId(estado.sedeId);if(el&&p){el.innerHTML=estado.servicioId?listaRequisitos(p,estado.servicioId,true):'<p class="hu-note">Selecciona un servicio para ver una lista orientativa.</p>';}}
function etapasClinicas(p,servicio){if(!esSalud(p))return [];const nombre=norm(servicio);if(nombre.includes('laboratorio'))return ['Admisión','Preparación','Laboratorio','Resultado y salida'];if(nombre.includes('imagen')||nombre.includes('diagnostico'))return ['Admisión','Preparación','Diagnóstico por imágenes','Salida'];return ['Admisión','Orientación o triaje','Caja o validación','Atención','Salida'];}
function moduloPara(p,servicioId){if(esSalud(p))return 'Área de '+(servicioId==='laboratorio'?'laboratorio':servicioId==='imagen'?'diagnóstico':'atención');if(p.categoria==='Bancos')return ['apertura','cuenta','creditos','asesoria'].includes(servicioId)?'Plataforma / Módulo 02':'Ventanilla / Módulo 01';return esReniec(p)?'Área DNI / Ventanilla 02':'Ventanilla / Módulo 01';}
function tarjetaModulos(p,t){if(!p||p.categoria!=='Bancos')return '';const numero=t.personas;return `<section class="card hu-panel"><div class="hu-panel-head">${icon('building',20)}<div><h2>Módulos de atención <small>HU-06</small></h2><p>Estado ilustrativo que cambia al simular el avance del turno.</p></div></div><div class="demanda-grid">${[1,2,3].map(i=>`<div class="demanda-item"><strong>Módulo 0${i}</strong><span class="${i===3&&numero>2?'status-idle':'status-working'}">${i===3&&numero>2?'Disponible':'Atendiendo'}</span><small>${t.modulo.includes(`0${i}`)?'Asignado a tu turno':'Estado de prueba'}</small></div>`).join('')}</div></section>`;}
function opcionesTiempo(t){const exceso=t.minutos>t.tiempoDisponible;return `<section class="card hu-panel"><div class="hu-panel-head">${icon('clock',20)}<div><h2>Tiempo disponible <small>HU-24 / HU-38</small></h2><p>Indica cuántos minutos tienes antes de otra actividad.</p></div></div><div class="form-inline"><label for="tiempo-disponible">Minutos disponibles</label><input id="tiempo-disponible" type="number" min="1" max="600" step="1" value="${t.tiempoDisponible||''}" placeholder="Ej. 20"><button type="button" class="btn btn-secondary" data-action="guardar-tiempo" data-id="${h(t.id)}">Comparar</button></div>${t.tiempoDisponible?`<div class="callout ${exceso?'callout-warn':'callout-good'}" role="status">${icon(exceso?'alert':'check',19)} <span>${exceso?`La espera (${t.minutos} min) supera tus ${t.tiempoDisponible} minutos disponibles. Puedes reprogramar o cancelar la simulación.`:`La espera (${t.minutos} min) está dentro de tus ${t.tiempoDisponible} minutos disponibles.`}</span></div>${exceso?`<div class="hu-actions"><button class="btn btn-secondary" type="button" data-action="reprogramar-turno" data-id="${h(t.id)}">Reprogramar</button><button class="btn btn-danger" type="button" data-action="pedir-cancelacion" data-id="${h(t.id)}">Cancelar turno</button></div>`:''}`:''}</section>`;}
function controlAlertas(t){return `<section class="card hu-panel"><div class="hu-panel-head">${icon('bell',20)}<div><h2>Aviso de proximidad <small>HU-23</small></h2><p>Selecciona cuántos turnos antes deseas recibir el aviso preventivo de prueba.</p></div></div><label class="filter-field" for="umbral-alerta"><span>Anticipación</span><select id="umbral-alerta" data-id="${h(t.id)}">${[3,5,10].map(n=>`<option value="${n}" ${t.umbral===n?'selected':''}>${n} turnos antes${n===3?' (predeterminado)':''}</option>`).join('')}</select></label><p class="hu-note">Se mostrará una alerta en la plataforma y el módulo ${h(t.modulo)} al acercarse tu turno. Las notificaciones no se envían fuera de esta demo.</p></section>`;}
function alertaDemora(t){return `<section class="card hu-panel"><div class="hu-panel-head">${icon('alert',20)}<div><h2>Incidencias de atención <small>HU-18${esSalud(porId(t.sedeId))?' / HU-27':''}</small></h2><p>Simula una interrupción o atención prioritaria para observar los cambios de espera.</p></div></div>${t.demora?`<div class="callout callout-warn" role="alert">${icon('alert',19)}<span>${h(t.demora.motivo)}. Se añadieron ${t.demora.extra} minutos estimados. Esta situación es simulada.</span></div><button type="button" class="btn btn-secondary" data-action="restaurar-demora" data-id="${h(t.id)}">Restablecer atención normal</button>`:`<div class="hu-actions"><button type="button" class="btn btn-secondary" data-action="simular-demora" data-id="${h(t.id)}">Simular demora extraordinaria</button>${esSalud(porId(t.sedeId))?`<button type="button" class="btn btn-secondary" data-action="simular-prioridad" data-id="${h(t.id)}">Simular atención preferencial</button>`:''}</div>`}</section>`;}
function flujoClinico(t){const p=porId(t.sedeId);if(!esSalud(p)||!t.etapas?.length)return '';const i=t.etapa||0,termina=i>=t.etapas.length-1;return `<section class="card hu-panel"><div class="hu-panel-head">${icon('check',20)}<div><h2>Etapas de atención clínica <small>HU-21 / HU-26</small></h2><p>Seguimiento demostrativo por áreas. No refleja procesos médicos reales.</p></div></div><ol class="clinical-steps">${t.etapas.map((paso,index)=>`<li class="${index<i?'completed':index===i?'current':''}"><span>${index<i?'✓':index+1}</span><strong>${h(paso)}</strong></li>`).join('')}</ol><div class="callout ${termina?'callout-good':''}" role="status">${icon(termina?'check':'info',19)}<span>${termina?'Has llegado al último paso de la simulación. Puedes finalizar la atención.':`Etapa actual: ${h(t.etapas[i])}. Siguiente paso: ${h(t.etapas[i+1])}, dirígete a esa área cuando te lo indiquen.`}</span></div><div class="hu-actions"><button type="button" class="btn btn-primary" data-action="avanzar-etapa" data-id="${h(t.id)}">${termina?'Finalizar atención clínica':'Simular finalización de esta etapa'}</button></div></section>`;}
function enlaceQR(p){return p.categoria==='Bancos'?`<button class="btn btn-secondary full" type="button" data-go="QR">${icon('ticket',17)} Escanear QR de agencia (demo)</button>`:'';}
function paginaQR(){const bancos=sedes.filter(x=>x.categoria==='Bancos');return `<section class="page narrow">${titulo('HU-19 · ACCESO MEDIANTE QR','Escanear QR del establecimiento','En esta demostración los códigos TF-DEMO identifican agencias de prueba, nunca crean un turno oficial.')}<section class="card hu-panel"><h2>Escaneo con cámara o código</h2><p>En un navegador compatible y conexión HTTPS o localhost, permite acceso a la cámara. También puedes escribir el código de demostración de la sede.</p><div class="hu-actions"><button type="button" class="btn btn-primary" data-action="abrir-camara">Iniciar escáner con cámara</button><button type="button" class="btn btn-secondary" data-action="detener-camara">Detener cámara</button></div><video id="video-qr" class="qr-video" autoplay muted playsinline hidden></video><p id="qr-estado" class="hu-note" role="status">La cámara está detenida.</p><form id="form-codigo-qr" class="form-inline"><label for="codigo-qr">Código de la agencia</label><input id="codigo-qr" required placeholder="TF-DEMO:bcp" aria-describedby="qr-ejemplo"><button class="btn btn-secondary" type="submit">Continuar</button></form><p id="qr-ejemplo" class="info-text">Ejemplo: TF-DEMO:bcp. Los códigos de otras entidades se rechazan claramente.</p>${estado.qrError?`<p class="input-error" role="alert">${h(estado.qrError)}</p>`:''}</section><section class="card hu-panel"><h2>Códigos QR de prueba disponibles</h2><div class="qr-grid">${bancos.map(b=>`<div class="qr-box"><img loading="lazy" src="${sitioImagen({imagen:`qr_${b.id}.png`})}" alt="QR de demostración de ${h(b.nombre)}"><strong>${h(b.corto)}</strong><code>TF-DEMO:${h(b.id)}</code><button type="button" class="btn btn-secondary" data-action="usar-codigo-qr" data-value="TF-DEMO:${h(b.id)}">Simular lectura</button></div>`).join('')}</div></section></section>`;}
function buscarTicket(){return `<section class="page narrow">${titulo('HU-22 · SIN INICIAR SESIÓN','Consultar ticket','Consulta un turno existente de esta sesión ingresando su número y establecimiento, sin crear una cuenta.')}<form id="form-consulta-ticket" class="card hu-panel"><h2>Datos de tu ticket</h2><div class="form-inline"><label for="consulta-sede">Establecimiento</label><select id="consulta-sede" required><option value="">Selecciona la sede</option>${sedes.map(p=>`<option value="${h(p.id)}">${h(p.nombre)}</option>`).join('')}</select><label for="consulta-numero">Número de ticket</label><input id="consulta-numero" required placeholder="Ej. R-001" maxlength="20"><button type="submit" class="btn btn-primary">Consultar estado</button></div>${estado.consultaError?`<p class="input-error" role="alert">${h(estado.consultaError)}</p>`:''}</form>${estado.consultaResultado?(()=>{const t=turnoPorId(estado.consultaResultado);if(!t)return '';return `<section class="card hu-panel"><h2>Resultado de la consulta</h2><p><strong>${h(t.numero)}</strong> · ${h(porId(t.sedeId).nombre)}</p><div class="ticket-result-stats"><div>${estadoPildora(t.estado)}<span>Estado</span></div><div><strong>${t.personas}</strong><span>Personas delante</span></div><div><strong>${t.minutos} min</strong><span>Tiempo simulado</span></div></div><button type="button" class="btn btn-primary" data-action="seguir-turno" data-id="${h(t.id)}">Seguir el turno</button></section>`;})():''}<p class="info-text">Sin base de datos ni conexión institucional, solo pueden consultarse tickets generados durante esta sesión de navegador.</p></section>`;}
function programarTurno(){const t=turnoPorId(estado.turnoVisto);if(!t||!activos().some(x=>x.id===t.id))return turnos();const fechas=diasVisita();return `<section class="page narrow">${titulo('REPROGRAMACIÓN DEMOSTRATIVA','Elegir otra franja','Esta elección solo cambia tu ticket local; no reserva un cupo en una institución.')}<form id="form-reprogramar" class="card hu-panel"><h2>${h(t.numero)} · ${h(porId(t.sedeId).nombre)}</h2><div class="form-inline"><label for="reprogramar-fecha">Fecha disponible</label><select id="reprogramar-fecha" required>${fechas.map(f=>`<option value="${h(f.value)}">${h(f.label)}</option>`).join('')}</select><label for="reprogramar-hora">Horario</label><select id="reprogramar-hora" required></select><button type="submit" class="btn btn-primary">Confirmar nueva franja</button><button type="button" class="btn btn-secondary" data-go="Seguimiento">Volver</button></div><p class="hu-note" id="reprogramar-disponibilidad" role="status"></p></form></section>`;}
function pintarHoras(fechaId,horaId,infoId){const fecha=document.getElementById(fechaId),hora=document.getElementById(horaId),info=document.getElementById(infoId);if(!fecha||!hora)return;const opciones=cuposSimulados(fecha.value);hora.innerHTML='<option value="">Elige horario</option>'+opciones.map(c=>`<option value="${h(c.hora)}" ${!c.disponible?'disabled':''}>${h(c.hora)} ${c.disponible?'· Disponible (demo)':'· No disponible (demo)'}</option>`).join('');if(info)info.textContent=`${opciones.filter(x=>x.disponible).length} franja(s) disponibles en la simulación para la fecha elegida.`;}
function validarCodigoQR(texto){const m=/^TF-DEMO:(bcp|interbank|bbva|scotiabank)$/i.exec(String(texto||'').trim());if(!m)return false;const sede=porId(m[1].toLowerCase());if(!sede)return false;detenerCamaraQR();estado.qrError='';estado.sedeId=sede.id;estado.servicioId='';estado.planVisita=null;navegar('Servicio');aviso(`Código leído: ${sede.nombre}. Selecciona tu servicio.`);return true;}
function detenerCamaraQR(){if(estado.qrMonitor)cancelAnimationFrame(estado.qrMonitor);estado.qrMonitor=null;if(estado.qrStream){estado.qrStream.getTracks().forEach(tr=>tr.stop());estado.qrStream=null;}}
async function iniciarCamaraQR(){const status=document.getElementById('qr-estado'),video=document.getElementById('video-qr');if(!status||!video)return;if(!navigator.mediaDevices?.getUserMedia||typeof BarcodeDetector==='undefined'){status.textContent='El escaneo de cámara no está disponible aquí. Utiliza el código manual o el botón de lectura simulada.';return;}try{estado.qrStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:'environment'},audio:false});if(estado.pagina!=='QR'){detenerCamaraQR();return;}video.srcObject=estado.qrStream;video.hidden=false;await video.play();const detector=new BarcodeDetector({formats:['qr_code']});status.textContent='Escáner activo. Apunta al QR de demostración de una agencia.';const examinar=async()=>{if(estado.pagina!=='QR'||!estado.qrStream)return;try{const codes=await detector.detect(video);if(codes?.length){if(validarCodigoQR(codes[0].rawValue))return;status.textContent='QR no válido o de un servicio no disponible en la demostración.';}}catch(e){}estado.qrMonitor=requestAnimationFrame(examinar);};examinar();}catch(e){detenerCamaraQR();status.textContent='No se pudo abrir la cámara. Comprueba los permisos o introduce el código manualmente.';}}

function notificar(tituloAviso,mensaje,turno){estado.avisos.unshift({id:`aviso-${Date.now()}-${Math.random().toString(36).slice(2,6)}`,titulo:tituloAviso,mensaje,turnoId:turno.id,leido:false,fecha:new Date()});actualizarCabecera();}
function navegar(pagina,opciones={}){
  if(estado.pagina==='QR'&&pagina!=='QR')detenerCamaraQR();
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
  ficha.querySelector('small').textContent=estado.usuario?'Datos de esta sesión':'Sin registrar';
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
  const activa=turnoActivoDe(p.id);
  return `<article class="card ${compacta?'place-card':'place-row'}">
    ${compacta?`<div class="place-image"><img src="${sitioImagen(p)}" loading="eager" alt="Fotografía referencial de ${h(p.nombre)}"><span class="pill pill-blue">${h(p.categoria)}</span></div>`:`<img src="${sitioImagen(p)}" loading="eager" alt="Fotografía referencial de ${h(p.nombre)}">`}
    <div class="${compacta?'place-body':'place-row-info'}">
      <span class="category-line">${h(p.categoria)} · ${h(p.distrito)}</span>
      <h3>${h(p.nombre)}</h3>
      <p class="place-address">${icon('pin',15)} ${h(p.direccion)}</p>
      <div class="inline-meta"><span>${icon('clock',15)} ${h(p.horario)}</span>${compacta?'':`<span>${icon('people',15)} ${p.personas} personas · simulación</span>`}</div>
      ${compacta?`<div class="mini-footer"><span>${icon('clock',15)} <b>${p.espera} min</b> · espera simulada</span><button class="btn btn-secondary" data-action="ver-sede" data-id="${p.id}">Ver detalles ${icon('arrow',15)}</button></div>`:''}
    </div>
    ${compacta?'':`<div class="place-row-action"><strong>${p.espera}<small> min</small></strong><span>Espera simulada</span><button type="button" data-action="${activa?'duplicado':'ver-sede'}" data-id="${p.id}" class="btn ${activa?'btn-secondary':'btn-primary'}">${activa?'Ver mi turno':'Ver detalles'} ${icon('arrow',15)}</button></div>`}
  </article>`;
}
function tarjetaTurno(t,compacta=false){const p=porId(t.sedeId);return `<article class="card turn-card ${compacta?'turn-card-small':''}">
    <div class="turn-card-top"><span>${icon('building',17)} ${h(p.nombre)}</span>${estadoPildora(t.estado)}</div>
    <div class="turn-card-body"><div><div class="ticket-big">${h(t.numero)}</div><p>${h(t.servicio)}</p></div><div class="turn-stats"><strong>${t.personas}</strong><small>personas delante</small><strong>${t.minutos} min</strong><small>espera simulada</small></div></div>
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
   : `<section class="card empty-state"><div class="empty-symbol">${icon('ticket',28)}</div><div><h3>Aún no tienes turnos activos</h3><p>Explora los establecimientos y solicita tu primer turno de prueba. Tus notificaciones e historial también comienzan vacíos.</p></div><button type="button" class="btn btn-primary" data-go="Establecimientos">Explorar establecimientos ${icon('arrow',17)}</button></section>`;
 document.getElementById('destacados-inicio').innerHTML=destacados.map(p=>tarjetaSede(p,true)).join('');
}

function obtenerSedesFiltradas(){
  let lista=sedes.filter(p=>{
    const consulta=norm(estado.busqueda);
    return (estado.categoria==='Todas'||p.categoria===estado.categoria)
       &&(estado.distrito==='Todos'||p.distrito===estado.distrito)
       &&(!consulta||norm([p.nombre,p.categoria,p.distrito,p.direccion,...p.servicios.map(s=>s[1])].join(' ')).includes(consulta));
  });
  if(estado.orden==='Espera menor')lista.sort((a,b)=>a.espera-b.espera);
  if(estado.orden==='Espera mayor')lista.sort((a,b)=>b.espera-a.espera);
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

function detalle(){const p=porId(estado.sedeId);if(!p){navegar('Establecimientos');return "";}const activo=turnoActivoDe(p.id);
 return `<section class="page narrow"><button type="button" class="back-link" data-go="Establecimientos">${icon('undo',15)} Volver a establecimientos</button>
   <div class="detail-hero"><img src="${sitioImagen(p)}" alt="Fotografía referencial de ${h(p.nombre)}"><div class="detail-overlay"><span class="pill pill-blue">${h(p.categoria)}</span><h1>${h(p.nombre)}</h1><p>${icon('pin',16)} ${h(p.distrito)}, Lima Metropolitana</p></div></div>
   <div class="detail-layout"><div class="detail-content">
     <section class="card detail-section"><h2>Información del establecimiento</h2><p>Conoce la sede y revisa sus servicios de referencia antes de solicitar tu turno de prueba.</p>
      <div class="fact-row">${icon('pin',19)}<div><b>Dirección</b><span>${h(p.direccion)}</span></div></div>
      <div class="fact-row">${icon('clock',19)}<div><b>Horario habitual orientativo</b><span>${h(p.horario)}</span></div></div>${esSalud(p)?`<div class="callout">${icon('clock',18)}<span>Rango de espera clínica estimado: <b>${rangoEspera(p.espera)}</b> (HU-25, simulación).</span></div>`:''}
      <p class="info-text">Verifica siempre el horario y los trámites directamente con la institución. La simulación no realiza reservas oficiales.</p><a class="external-reference" href="${h(p.fuente)}" target="_blank" rel="noopener noreferrer">${icon('info',16)} Consultar información de la institución (sitio externo)</a>
     </section>
     <section class="card detail-section"><h2>Servicios de referencia</h2><p>Los trámites incluidos permiten practicar el proceso de selección; su disponibilidad en esta sede debe consultarse por canales oficiales.</p>
       <div class="service-list">${p.servicios.map(s=>`<div><span class="service-icon">${icon('file',18)}</span><div><strong>${h(s[1])}</strong><small>${h(s[2])}</small></div></div>`).join('')}</div>
     </section>
     ${bloqueDemanda(p)}
     ${esReniec(p)?listaRequisitos(p,p.servicios[0][0]):''}
   </div><aside class="card booking-card" aria-label="Tiempo de espera simulado"><span class="booking-label">ESPERA ESTIMADA · DEMOSTRACIÓN</span><strong class="big-time">${p.espera}<small> min</small></strong><p>${icon('people',17)} ${p.personas} personas delante (simulación)</p><div class="separator"></div>
     ${activo?`<p class="info-text">Ya tienes un turno activo en este establecimiento.</p><button type="button" data-action="duplicado" data-id="${p.id}" class="btn btn-secondary full">Ver mi turno existente</button>`:`<button type="button" data-action="seleccionar-sede" data-id="${p.id}" class="btn btn-primary full">Solicitar turno ${icon('arrow',17)}</button>`}
     ${enlaceQR(p)}<p class="booking-note">No emite tickets válidos para atención presencial.</p></aside></div>
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
 document.getElementById('servicio-resumen-espera').textContent=`${p.espera} minutos`;
 document.getElementById('servicio-resumen-personas').textContent=String(p.personas);
 document.getElementById('lista-servicios').innerHTML=p.servicios.map(s=>
  `<label class="service-choice ${estado.servicioId===s[0]?'chosen':''}"><input type="radio" name="servicio" value="${h(s[0])}" ${estado.servicioId===s[0]?'checked':''}><span class="service-icon">${icon('file',19)}</span><span><strong>${h(s[1])}</strong><small>${h(s[2])}</small></span></label>`
 ).join('');
 const form=document.getElementById('form-servicio');
 const acciones=form.querySelector('.form-actions');
 acciones.insertAdjacentHTML('beforebegin',`<div id="requisitos-elegidos" class="hu-checklist"></div>${esReniec(p)?`<section class="hu-inline"><h3>Planificar visita a RENIEC <small>HU-47</small></h3><p>Selecciona una fecha y una franja disponibles solo en la simulación.</p><div class="form-inline"><label for="plan-fecha">Fecha</label><select id="plan-fecha" required>${diasVisita().map(f=>`<option value="${h(f.value)}">${h(f.label)}</option>`).join('')}</select><label for="plan-hora">Horario disponible</label><select id="plan-hora" required></select></div><p class="hu-note" id="plan-disponibilidad" role="status"></p></section>`:''}`);
 actualizarRequisitosMarcados();
 if(esReniec(p)){pintarHoras('plan-fecha','plan-hora','plan-disponibilidad');if(estado.planVisita&&estado.planVisita.sedeId===p.id){document.getElementById('plan-fecha').value=estado.planVisita.fecha;pintarHoras('plan-fecha','plan-hora','plan-disponibilidad');document.getElementById('plan-hora').value=estado.planVisita.hora;}}
}

// El formulario de registro también está escrito en HTML5 y se completa con DOM.
function prepararDatos(){
 const desdeTurno=estado.registroOrigen==='Solicitud';
 const u=estado.usuario||{nombres:'',apellidos:'',correo:''};
 const sede=porId(estado.sedeId);
 const titulo=document.getElementById('datos-titulo');
 const subtitulo=document.getElementById('datos-descripcion');
 document.getElementById('datos-encabezado').textContent=desdeTurno?'PASO 2 DE 4':'DATOS PERSONALES';
 titulo.textContent=estado.usuario?'Revisa tus datos':'Registra tus datos';
 subtitulo.textContent=desdeTurno?'Identifícate una sola vez durante esta sesión para continuar con tu solicitud.':'Puedes actualizar tus datos mientras esta página permanezca abierta.';
 document.getElementById('datos-pasos').hidden=!desdeTurno;
 document.getElementById('datos-atras').dataset.go=desdeTurno?'Servicio':'Perfil';
 document.getElementById('datos-atras').textContent=desdeTurno?'← Volver al servicio':'← Volver a mi perfil';
 document.getElementById('datos-volver').dataset.go=desdeTurno?'Servicio':'Perfil';
 document.getElementById('datos-guardar').textContent=desdeTurno?'Guardar y revisar turno':'Guardar mis datos';
 document.getElementById('datos-aside-titulo').textContent=desdeTurno?'Tu solicitud está casi lista':'Mi perfil';
 document.getElementById('datos-aside-texto').textContent=desdeTurno&&sede?
  `Estás solicitando un turno de demostración en ${sede.nombre}.`:
  'Con tus datos podrás identificar tus turnos durante esta sesión.';
 for(const key of ['nombres','apellidos','correo'])document.getElementById('dato-'+key).value=u[key]||'';
}

function validarDatos(form){
 const valores={nombres:form.elements.nombres.value.trim().replace(/\s+/g,' '),apellidos:form.elements.apellidos.value.trim().replace(/\s+/g,' '),correo:form.elements.correo.value.trim()};
 const validoNombre=v=>v.length>=2&&v.length<=60&&/^[\p{L}\s.'-]+$/u.test(v);
 const errores={nombres:validoNombre(valores.nombres)?'':'Escribe nombres válidos (mínimo 2 letras).',apellidos:validoNombre(valores.apellidos)?'':'Escribe apellidos válidos (mínimo 2 letras).',correo:!valores.correo||/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valores.correo)?'':'Ingresa un correo válido o deja este campo vacío.'};
 let primerError=null;
 for(const key of ['nombres','apellidos','correo']){
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
 ${titulo('PASO 3 DE 4','Revisa tu solicitud','Comprueba los datos antes de generar un turno de demostración.')}
 <div class="process-stepper"><span>1 · Servicio</span><span>2 · Tus datos</span><span class="current">3 · Revisión</span><span>4 · Confirmación</span></div>
 <section class="card review-card"><div class="review-head"><span class="review-check">${icon('check',25)}</span><div><h2>Resumen de tu turno</h2><p>Verifica que la sede y el trámite sean correctos.</p></div></div>
  <div class="review-details"><div><span>Solicitante</span><strong>${h(estado.usuario.nombres)} ${h(estado.usuario.apellidos)}</strong><button type="button" class="link-button" data-action="editar-datos" data-value="Solicitud">Editar</button></div><div><span>Establecimiento</span><strong>${h(p.nombre)}</strong><button type="button" class="link-button" data-go="Establecimientos">Cambiar</button></div>
    <div><span>Distrito y dirección</span><strong>${h(p.distrito)} · ${h(p.direccion)}</strong></div>
    <div><span>Servicio seleccionado</span><strong>${h(s[1])}</strong><button type="button" class="link-button" data-go="Servicio">Cambiar</button></div>
    <div><span>Tiempo estimado</span><strong>${p.espera} minutos (simulado)</strong></div>
    <div><span>Personas delante</span><strong>${p.personas} (simulado)</strong></div>${esReniec(p)&&estado.planVisita?`<div><span>Fecha y franja de demostración</span><strong>${h(estado.planVisita.fecha)} · ${h(estado.planVisita.hora)}</strong></div>`:''}</div>
  <div class="review-warning">${icon('alert',20)} <p>Este turno es solo para demostrar el funcionamiento de TurnoFacilito. No permite atenderse en la institución ni reserva una cita real.</p></div>
  <div class="form-actions"><button type="button" class="btn btn-secondary" data-go="Servicio">Volver y corregir</button><button type="button" class="btn btn-primary" data-action="crear-turno">Confirmar y generar turno ${icon('check',17)}</button></div></section></section>`;
}
function confirmacion(){const t=turnoPorId(estado.turnoVisto);if(!t)return turnos();const p=porId(t.sedeId);
 return `<section class="page narrow confirmation-page">${titulo('PASO 4 DE 4','¡Turno generado correctamente!','Tu solicitud de demostración está lista para seguimiento.')}
 <div class="process-stepper"><span>1 · Servicio</span><span>2 · Tus datos</span><span>3 · Revisión</span><span class="current">4 · Confirmación</span></div>
 <section class="card receipt-card"><p class="receipt-person">Solicitante: <strong>${h(estado.usuario?.nombres||'')} ${h(estado.usuario?.apellidos||'')}</strong></p><div class="receipt-success">${icon('check',30)}</div><span class="eyebrow">TU NÚMERO DE TURNO</span><div class="receipt-number">${h(t.numero)}</div>${estadoPildora(t.estado)}<h2>${h(p.nombre)}</h2><p>${h(t.servicio)}</p><div class="receipt-meta"><span>${icon('clock',17)} ${t.minutos} minutos (simulado)</span><span>${icon('people',17)} ${t.personas} personas delante</span></div>
 ${t.planVisita?`<p class="hu-note"><strong>Visita planificada (demo):</strong> ${h(t.planVisita.fecha)} · ${h(t.planVisita.hora)}</p>`:''}<p class="hu-note"><strong>Área asignada:</strong> ${h(t.modulo)}</p>
 <div class="receipt-actions"><button type="button" class="btn btn-primary" data-action="seguir-turno" data-id="${t.id}">Seguir mi turno ${icon('arrow',17)}</button><button type="button" class="btn btn-secondary" data-action="descargar" data-id="${t.id}">${icon('download',17)} Descargar comprobante TXT</button></div>
 <p class="info-text">El comprobante no es válido en la institución. Todos los datos de espera y atención son simulados.</p></section>
 <div class="center-link"><button type="button" class="link-button" data-go="Turnos">Ver todos mis turnos</button></div></section>`;
}
function turnos(){const lista=activos();const ended=terminados();
 return `<section class="page">${titulo('MI ESPACIO','Mis turnos','Gestiona tus turnos activos de diferentes establecimientos, sin afectar a los demás.')}
 <div class="stats-grid compact-stats"><article class="card stat"><span class="stat-icon blue">${icon('ticket',22)}</span><div><strong>${lista.length}</strong><span>Turnos activos</span></div></article><article class="card stat"><span class="stat-icon green">${icon('check',22)}</span><div><strong>${ended.filter(t=>t.estado==='Finalizado').length}</strong><span>Finalizados</span></div></article><article class="card stat"><span class="stat-icon orange">${icon('x',22)}</span><div><strong>${ended.filter(t=>t.estado==='Cancelado').length}</strong><span>Cancelados</span></div></article></div>
 <div class="section-heading"><div><span>TUS SOLICITUDES</span><h2>Turnos en seguimiento</h2></div><button type="button" class="btn btn-secondary" data-go="Establecimientos">${icon('arrow',16)} Solicitar otro turno</button></div>
 ${lista.length?`<div class="ticket-card-grid">${lista.map(t=>tarjetaTurno(t)).join('')}</div>`:`<section class="card empty-state"><div class="empty-symbol">${icon('ticket',28)}</div><div><h3>No tienes turnos activos</h3><p>Puedes tener varios turnos en diferentes sedes, pero solo uno activo por establecimiento.</p></div><button class="btn btn-primary" data-go="Establecimientos">Explorar establecimientos</button></section>`}
 <div class="hu-actions"><button type="button" class="btn btn-secondary" data-go="Consulta">Consultar ticket sin registro (HU-22)</button></div><p class="info-text spaced">Los turnos se conservan solo mientras esta página permanezca cargada. Si la actualizas, la simulación comenzará de nuevo.</p></section>`;
}
function seguimiento(){const lista=activos();if(!lista.length){return `<section class="page narrow">${titulo('SEGUIMIENTO','Seguimiento de turnos','Consulta el avance de cada turno mientras se encuentre activo.')}
 <section class="card empty-state"><div class="empty-symbol">${icon('compass',30)}</div><div><h3>No tienes turnos en seguimiento</h3><p>Solicita un turno para ver el simulador de atención.</p></div><button class="btn btn-primary" data-go="Establecimientos">Solicitar turno</button><button class="btn btn-secondary" data-go="Consulta">Consultar un ticket sin registro</button></section></section>`;}
 const ordenada=lista.slice().sort((a,b)=>a.personas-b.personas);let t=lista.find(x=>x.id===estado.turnoVisto)||ordenada[0];estado.turnoVisto=t.id;const p=porId(t.sedeId);
 return `<section class="page narrow">${titulo('EN TIEMPO REAL · SIMULACIÓN','Seguimiento de turnos','Consulta un turno y avanza su estado manualmente para demostrar las notificaciones.')}
 <div class="card tracking-selector"><label for="selector-turno">Selecciona el turno que deseas seguir</label><select id="selector-turno">${ordenada.map(x=>`<option value="${h(x.id)}" ${t.id===x.id?'selected':''}>${h(x.numero)} · ${h(porId(x.sedeId).nombre)} · ${h(x.estado)}</option>`).join('')}</select></div>
 <div class="tracking-layout"><section class="card track-main"><div class="track-header"><span class="eyebrow">NÚMERO DE TURNO</span>${estadoPildora(t.estado)}</div><div class="tracking-number">${h(t.numero)}</div><strong>${h(p.nombre)}</strong><p class="muted">${h(t.servicio)}</p>
   <div class="tracking-metrics"><div><strong>${t.personas}</strong><span>Personas delante</span></div><div><strong>${t.minutos} min</strong><span>${esSalud(p)?`Rango ${rangoEspera(t.minutos)}`:'Espera simulada'}</span></div><div><strong>${h(t.modulo)}</strong><span>Módulo de atención</span></div></div>
   ${t.planVisita?`<p class="hu-note"><strong>Visita planificada:</strong> ${h(t.planVisita.fecha)} · ${h(t.planVisita.hora)} (solo demo).</p>`:''}<div class="progress-stages" aria-label="Etapas del turno"><span class="${t.estado==='En espera'?'active':'passed'}">1. En espera</span><span class="${t.estado==='Próximo'?'active':t.estado==='Llamado'?'passed':''}">2. Próximo</span><span class="${t.estado==='Llamado'?'active':''}">3. Llamado</span></div>
   ${t.estado==='Llamado'?`<div class="callout callout-good">${icon('bell',19)} <span>¡Es tu turno! En esta simulación, acércate al <b>${h(t.modulo)}</b>.</span></div>`:t.estado==='Próximo'?`<div class="callout callout-warn">${icon('alert',19)} <span>Faltan ${t.personas} persona(s). Prepárate para tu atención simulada.</span></div>`:`<div class="callout">${icon('info',19)} <span>El avance es manual para la demostración académica. No representa una cola real.</span></div>`}
   <div class="track-actions"><button class="btn btn-primary" type="button" data-action="avanzar" data-id="${t.id}">${t.estado==='Llamado'?'Marcar como finalizado':'Simular avance'} ${icon(t.estado==='Llamado'?'check':'arrow',17)}</button><button class="btn btn-danger" type="button" data-action="pedir-cancelacion" data-id="${t.id}">Cancelar este turno</button></div>
   </section>
   <aside class="card tracking-info"><h2>Detalle de la atención</h2><div class="fact-row">${icon('building',17)}<div><b>Sede</b><span>${h(p.nombre)}</span></div></div><div class="fact-row">${icon('pin',17)}<div><b>Distrito</b><span>${h(p.distrito)}</span></div></div><div class="fact-row">${icon('file',17)}<div><b>Servicio</b><span>${h(t.servicio)}</span></div></div><div class="fact-row">${icon('ticket',17)}<div><b>Identificador</b><span>${h(t.numero)}</span></div></div>
     <div class="separator"></div><h3>¿Qué pasa al avanzar?</h3><p>Disminuye la cantidad de personas delante; al estar próximo o ser llamado, se crea una notificación de prueba.</p><button class="btn btn-secondary full" type="button" data-go="Notificaciones">Ver notificaciones</button>
   </aside></div><div class="hu-extra-grid">${controlAlertas(t)}${opcionesTiempo(t)}${alertaDemora(t)}${flujoClinico(t)}${tarjetaModulos(p,t)}</div><div class="hu-actions"><button type="button" class="btn btn-secondary" data-go="Consulta">Consultar ticket sin registro</button><button type="button" class="btn btn-secondary" data-action="reprogramar-turno" data-id="${h(t.id)}">Reprogramar turno (demo)</button></div></section>`;
}
function notificaciones(){return `<section class="page narrow">${titulo('CENTRO DE AVISOS','Notificaciones','Recibe información solamente después de generar o actualizar tus propios turnos.')}
 <div class="results-bar"><strong>${estado.avisos.length} notificación(es) · ${estado.avisos.filter(a=>!a.leido).length} sin leer</strong><button type="button" class="link-button" data-action="leer-todas" ${!estado.avisos.some(a=>!a.leido)?'disabled':''}>${icon('check',16)} Marcar todas como leídas</button></div>
 ${estado.avisos.length?`<div class="notification-list">${estado.avisos.map(a=>`<article class="card notice-card ${a.leido?'':'unread'}"><span class="notice-icon">${icon('bell',20)}</span><div><div class="notice-title"><h3>${h(a.titulo)}</h3>${!a.leido?'<span class="pill pill-blue">Nueva</span>':''}</div><p>${h(a.mensaje)}</p><small>${h(a.fecha.toLocaleString('es-PE',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'}))}</small></div><div class="notice-actions">${!a.leido?`<button type="button" class="btn btn-secondary" data-action="leer" data-id="${a.id}">Marcar leída</button>`:''}${turnoPorId(a.turnoId)&&['En espera','Próximo','Llamado'].includes(turnoPorId(a.turnoId).estado)?`<button class="btn btn-primary" data-action="seguir-turno" data-id="${a.turnoId}">Ver turno</button>`:''}</div></article>`).join('')}</div>`:`<section class="card empty-state"><div class="empty-symbol">${icon('bell',28)}</div><div><h3>Aún no hay notificaciones</h3><p>Aparecerán aquí cuando solicites un turno o avances su estado.</p></div><button class="btn btn-primary" data-go="Establecimientos">Solicitar mi primer turno</button></section>`}</section>`;}
function filtrarHistorial(){return terminados().filter(t=>(estado.historicoEstado==='Todos'||t.estado===estado.historicoEstado)&&(!norm(estado.historicoBuscar)||norm([t.numero,t.servicio,porId(t.sedeId).nombre].join(' ')).includes(norm(estado.historicoBuscar)))).sort((a,b)=>b.fecha-a.fecha);}
function actualizarHistorial(){const n=document.querySelector('#historial-resultados');if(!n)return;const f=filtrarHistorial();const total=document.querySelector('#historial-contador');total.textContent=`${f.length} resultado(s)`;n.innerHTML=f.length?`<div class="table-wrap"><table><thead><tr><th>Número</th><th>Establecimiento</th><th>Servicio</th><th>Fecha</th><th>Estado</th></tr></thead><tbody>${f.map(t=>`<tr><td><strong>${h(t.numero)}</strong></td><td>${h(porId(t.sedeId).nombre)}</td><td>${h(t.servicio)}</td><td>${h(t.fecha.toLocaleString('es-PE'))}</td><td>${estadoPildora(t.estado)}</td></tr>`).join('')}</tbody></table></div>`:`<div class="empty-state"><div class="empty-symbol">${icon('history',25)}</div><div><h3>No hay turnos en el historial</h3><p>Los turnos finalizados o cancelados aparecerán aquí.</p></div></div>`;}
function historial(){const f=terminados(),fin=f.filter(t=>t.estado==='Finalizado').length,can=f.filter(t=>t.estado==='Cancelado').length;
 return `<section class="page">${titulo('TU ACTIVIDAD','Historial de atención','Consulta únicamente los turnos que hayas terminado o cancelado durante esta sesión.')}
 <div class="stats-grid compact-stats"><article class="card stat"><span class="stat-icon blue">${icon('history',22)}</span><div><strong>${f.length}</strong><span>Registrados</span></div></article><article class="card stat"><span class="stat-icon green">${icon('check',22)}</span><div><strong>${fin}</strong><span>Finalizados</span></div></article><article class="card stat"><span class="stat-icon orange">${icon('x',22)}</span><div><strong>${can}</strong><span>Cancelados</span></div></article></div>
 <section class="card history-shell"><div class="filter-grid"><label class="filter-field filter-grow"><span>Buscar por turno, sede o servicio</span><input type="search" id="buscar-historial" placeholder="Buscar historial..." value="${h(estado.historicoBuscar)}"></label><label class="filter-field"><span>Estado</span><select id="estado-historial">${['Todos','Finalizado','Cancelado'].map(x=>`<option ${estado.historicoEstado===x?'selected':''}>${x}</option>`).join('')}</select></label></div><div class="results-bar"><strong id="historial-contador">0 resultados</strong></div><div id="historial-resultados"></div></section></section>`;
}
function perfil(){const u=estado.usuario;
 const nombre=u?u.nombres+' '+u.apellidos:'Aún no registraste tus datos';
 const iniciales=u?u.nombres.charAt(0).toUpperCase()+u.apellidos.charAt(0).toUpperCase():'MP';
 return `<section class="page narrow">${titulo('MI CUENTA DEMOSTRATIVA','Mi perfil',u?'Consulta y edita los datos asociados con tus turnos en esta sesión.':'Podrás registrarte cuando solicites tu primer turno o hacerlo desde aquí.')}
 <div class="profile-layout"><section class="card profile-summary"><div class="avatar-lg">${h(iniciales)}</div><h2>${h(nombre)}</h2><p>${u?'Perfil de esta sesión':'Perfil sin registrar'}</p><span>Almacenamiento</span><strong>Solo durante esta sesión</strong>${u?`<button type="button" class="btn btn-secondary profile-edit" data-action="editar-datos" data-value="Perfil">Editar mis datos</button>`:''}</section>
 <div class="profile-content">
 ${u?`<section class="card profile-section"><h2>Datos personales</h2><p>Se usan para identificar tus solicitudes de demostración.</p><div class="profile-data"><div><span>Nombres</span><strong>${h(u.nombres)}</strong></div><div><span>Apellidos</span><strong>${h(u.apellidos)}</strong></div><div><span>Correo electrónico</span><strong>${h(u.correo||'No proporcionado')}</strong></div></div><button type="button" class="btn btn-secondary" data-action="editar-datos" data-value="Perfil">${icon('user',17)} Modificar información</button></section>`:`<section class="card profile-section profile-empty"><h2>Completa tu perfil</h2><p>No necesitas una contraseña. Ingresa únicamente tu nombre, apellidos y, si lo deseas, un correo electrónico. Los datos se borrarán al recargar la página.</p><button type="button" class="btn btn-primary" data-action="editar-datos" data-value="Perfil">${icon('user',17)} Registrar mis datos</button></section>`}
 <section class="card profile-section"><h2>Tu actividad durante esta sesión</h2><p>Los datos permanecen solo mientras esta página esté abierta; no se almacenan de forma permanente.</p><div class="profile-numbers"><div><strong>${activos().length}</strong><span>Turnos activos</span></div><div><strong>${terminados().length}</strong><span>En historial</span></div><div><strong>${estado.avisos.length}</strong><span>Notificaciones</span></div></div></section>
 <section class="card profile-section"><h2>Preferencias y ayuda</h2><p>Puedes personalizar la lectura y conocer cómo usar la plataforma.</p><div class="profile-links"><button type="button" data-go="Accesibilidad">${icon('sliders',21)} Opciones de accesibilidad ${icon('arrow',16)}</button><button type="button" data-go="Ayuda">${icon('help',21)} Guía de uso ${icon('arrow',16)}</button></div></section>
 <section class="card profile-section danger-zone"><h2>Reiniciar demostración</h2><p>Elimina tu perfil, los turnos, las notificaciones y el historial creados en esta página. No se puede deshacer.</p><button type="button" data-action="preguntar-reinicio" class="btn btn-danger">Reiniciar datos de prueba</button></section></div></div></section>`;
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
function dibujar(){
 const estaticas={Inicio:'vista-inicio',Establecimientos:'vista-establecimientos',Ayuda:'vista-ayuda'};
 const dinamicas={Detalle:detalle,Revisión:revision,Confirmación:confirmacion,Turnos:turnos,
   Seguimiento:seguimiento,Notificaciones:notificaciones,Historial:historial,
   Perfil:perfil,Accesibilidad:accesibilidad,QR:paginaQR,Consulta:buscarTicket,Reprogramar:programarTurno};
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
 const titulos={duplicado:'Ya tienes un turno activo',cancelar:'¿Cancelar este turno?',reiniciar:'¿Reiniciar la demostración?'};
 const mensajes={duplicado:t?`Tienes el turno ${t.numero} en ${sede.nombre} (${t.servicio}). Solo se permite un turno activo por establecimiento. Puedes consultar su seguimiento o cancelarlo.`:'',cancelar:t?`Se cancelará el turno ${t.numero} de ${sede.nombre}. Perderás la posición actual. Los demás turnos no cambiarán.`:'',reiniciar:'Se borrarán tus datos personales, turnos, notificaciones e historial de esta sesión. Esta acción no se puede deshacer.'};
 estado.modal={tipo,id,anterior:document.activeElement};
 const caja=document.querySelector('#contenedor-modal');
 caja.innerHTML=`<div class="modal-backdrop"><div class="modal" role="dialog" aria-modal="true" aria-labelledby="titulo-dialogo" aria-describedby="descripcion-dialogo"><div class="modal-icon ${tipo==='cancelar'||tipo==='reiniciar'?'danger':''}">${icon(tipo==='duplicado'?'info':'alert',25)}</div><h2 id="titulo-dialogo">${titulos[tipo]}</h2><p id="descripcion-dialogo">${h(mensajes[tipo])}</p><div class="modal-actions"><button type="button" class="btn btn-secondary" data-action="cerrar-modal">${tipo==='duplicado'?'Cerrar aviso':'Volver'}</button><button type="button" class="btn ${tipo==='duplicado'?'btn-primary':'btn-danger'}" data-action="confirmar-modal">${tipo==='duplicado'?'Ver mi turno':tipo==='cancelar'?'Sí, cancelar turno':'Sí, reiniciar'}</button></div></div></div>`;
 caja.querySelector('[data-action="cerrar-modal"]').focus();
}
function cerrarModal(){const previo=estado.modal?.anterior;estado.modal=null;document.querySelector('#contenedor-modal').innerHTML='';if(previo?.isConnected)previo.focus();}
function crearTurno(){const p=porId(estado.sedeId),s=p?.servicios.find(s=>s[0]===estado.servicioId);if(!p||!s){aviso('Selecciona un establecimiento y un servicio.');return;}
 if(!estado.usuario){estado.registroOrigen='Solicitud';navegar('Datos');aviso('Completa tus datos antes de confirmar el turno.');return;}
 const existente=turnoActivoDe(p.id);if(existente){abrirModal('duplicado',p.id);return;}
 numeroPorSede[p.id]=(numeroPorSede[p.id]||0)+1;
 const t={id:`${p.id}-${numeroPorSede[p.id]}`,solicitante:`${estado.usuario.nombres} ${estado.usuario.apellidos}`,sedeId:p.id,numero:`${p.codigo}-${String(numeroPorSede[p.id]).padStart(3,'0')}`,servicio:s[1],estado:'En espera',personas:p.personas,minutos:p.espera,modulo:moduloPara(p,estado.servicioId),etapas:etapasClinicas(p,s[1]),etapa:0,umbral:LIMITE_ALERTA_DEFECTO,avisadoUmbral:false,tiempoDisponible:null,avisoLimiteEmitido:false,demora:null,planVisita:esReniec(p)?{...estado.planVisita}:null,fecha:new Date()};
 estado.turnos.push(t);estado.turnoVisto=t.id;notificar('Tu turno fue confirmado',`${t.numero} · ${p.nombre} · ${t.servicio}`,t);estado.servicioId='';estado.planVisita=null;navegar('Confirmación');aviso(`Turno ${t.numero} generado correctamente.`);
}
function finalizarTurno(t){t.estado='Finalizado';t.fecha=new Date();notificar('Atención finalizada',`${t.numero} en ${porId(t.sedeId).nombre}. Ya puedes verlo en el historial.`,t);estado.turnoVisto=activos()[0]?.id||null;navegar('Historial');aviso(`Turno ${t.numero} finalizado y agregado al historial.`);}
function evaluarTiempo(t){if(t.tiempoDisponible&&t.minutos>t.tiempoDisponible&&!t.avisoLimiteEmitido){notificar('La espera supera tu disponibilidad',`${t.numero}: ${t.minutos} min de espera estimada frente a ${t.tiempoDisponible} min disponibles. Puedes reprogramar o cancelar.`,t);t.avisoLimiteEmitido=true;}if(!t.tiempoDisponible||t.minutos<=t.tiempoDisponible)t.avisoLimiteEmitido=false;}
function evaluarProximidad(t){if(t.personas>0&&t.personas<=t.umbral&&!t.avisadoUmbral){t.avisadoUmbral=true;notificar('Alerta preventiva de proximidad',`${t.numero}: faltan ${t.personas} personas. Área asignada: ${t.modulo}.`,t);aviso(`Turno ${t.numero}: se aproxima tu atención (${t.modulo}).`);}}
function avanzar(id){const t=turnoPorId(id);if(!t||!activos().some(x=>x.id===id))return;
 if(t.estado==='Llamado'){if(esSalud(porId(t.sedeId))&&t.etapas?.length&&t.etapa<t.etapas.length-1){aviso('Completa el recorrido por etapas clínicas antes de finalizar.');dibujar();return;}finalizarTurno(t);return;}
 if(t.personas>0){t.personas-=1;t.minutos=t.personas===0?0:Math.max(3,Math.round(t.minutos*0.75));}
 if(t.personas===0){t.estado='Llamado';notificar('¡Es tu turno!',`${t.numero} · ${porId(t.sedeId).nombre}: acércate a ${t.modulo} (simulación).`,t);aviso(`¡Es tu turno ${t.numero}!`);}
 else if(t.personas<=t.umbral){t.estado='Próximo';evaluarProximidad(t);}
 evaluarTiempo(t);dibujar();
}
function avanzarEtapa(id){const t=turnoPorId(id);if(!t||!activos().some(x=>x.id===id)||!esSalud(porId(t.sedeId)))return;
 if(t.etapa>=t.etapas.length-1){finalizarTurno(t);return;}
 t.etapa++;notificar('Avance clínico de demostración',`${t.numero}: ${t.etapas[t.etapa]}. ${t.etapa===t.etapas.length-1?'Puedes finalizar la atención.':'Continúa hacia el siguiente paso.'}`,t);dibujar();aviso(`Nueva etapa: ${t.etapas[t.etapa]}.`);
}

function descargar(id){const t=turnoPorId(id);if(!t)return;const p=porId(t.sedeId);const contenido=`TURNOfacilito - COMPROBANTE DE SIMULACIÓN\n\nNúmero: ${t.numero}\nEstablecimiento: ${p.nombre}\nDistrito: ${p.distrito}\nDirección: ${p.direccion}\nServicio: ${t.servicio}\nSolicitante: ${t.solicitante||''}\nEstado: ${t.estado}\nPersonas delante: ${t.personas}\nEspera estimada: ${t.minutos} minutos (simulada)\n\nESTE DOCUMENTO NO ES VÁLIDO PARA ATENCIÓN PRESENCIAL.\nNo existe integración oficial con el establecimiento.\n`;const archivo=new Blob([contenido],{type:'text/plain;charset=utf-8'});const url=URL.createObjectURL(archivo);const a=document.createElement('a');a.href=url;a.download=`TurnoFacilito-${t.numero}.txt`;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);aviso('Comprobante demostrativo descargado.');}

// Eventos delegados: facilitan el mantenimiento y sirven para demostrar DOM y JavaScript.
document.addEventListener('click',event=>{
 const cat=event.target.closest('[data-category]');if(cat){estado.categoria=cat.dataset.category;actualizarResultados();return;}
 const go=event.target.closest('[data-go]');if(go){navegar(go.dataset.go);return;}
 const b=event.target.closest('[data-action]');if(!b)return;
 const {action,id,value}=b.dataset;
 switch(action){
  case 'ver-sede':estado.sedeId=id;estado.servicioId='';navegar('Detalle');break;
  case 'seleccionar-sede':if(turnoActivoDe(id)){abrirModal('duplicado',id);}else{estado.sedeId=id;estado.servicioId='';navegar('Servicio');}break;
  case 'duplicado':abrirModal('duplicado',id);break;
  case 'crear-turno':crearTurno();break;
  case 'editar-datos':estado.registroOrigen=value==='Solicitud'?'Solicitud':'Perfil';navegar('Datos');break;
  case 'seguir-turno':estado.turnoVisto=id;navegar('Seguimiento');break;
  case 'pedir-cancelacion':abrirModal('cancelar',id);break;
  case 'avanzar':avanzar(id);break;
  case 'descargar':descargar(id);break;
  case 'avanzar-etapa':avanzarEtapa(id);break;
  case 'abrir-camara':iniciarCamaraQR();break;
  case 'detener-camara':detenerCamaraQR();if(document.getElementById('video-qr')){document.getElementById('video-qr').hidden=true;document.getElementById('qr-estado').textContent='Cámara detenida.';}break;
  case 'usar-codigo-qr':validarCodigoQR(value);break;
  case 'guardar-tiempo':{const t=turnoPorId(id),input=document.getElementById('tiempo-disponible');if(!t||!input)return;const n=Number(input.value);if(!Number.isInteger(n)||n<1||n>600){input.setCustomValidity('Ingresa un tiempo entre 1 y 600 minutos.');input.reportValidity();return;}input.setCustomValidity('');t.tiempoDisponible=n;!t.avisoLimiteEmitido&&evaluarTiempo(t);dibujar();aviso('Tu tiempo disponible fue actualizado.');break;}
  case 'simular-demora':case 'simular-prioridad':{const t=turnoPorId(id);if(!t||t.demora)return;const prioridad=action==='simular-prioridad';if(prioridad&&!esSalud(porId(t.sedeId)))return;t.demora={motivo:prioridad?'Atención preferencial de pacientes (sin datos personales)':'Interrupción extraordinaria de la atención',extra:prioridad?8:12};t.minutos+=t.demora.extra;notificar(prioridad?'Atención preferencial':'Demora extraordinaria',`${t.numero}: ${t.demora.motivo}. Se estiman ${t.demora.extra} minutos adicionales en esta demostración.`,t);evaluarTiempo(t);dibujar();break;}
  case 'restaurar-demora':{const t=turnoPorId(id);if(!t?.demora)return;t.minutos=Math.max(0,t.minutos-t.demora.extra);t.demora=null;notificar('Atención restablecida',`${t.numero}: finalizó el aviso de demora (simulación).`,t);evaluarTiempo(t);dibujar();break;}
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
    if(modal.tipo==='reiniciar'){estado.requisitosListos={};estado.planVisita=null;estado.consultaResultado=null;estado.turnos=[];estado.avisos=[];estado.favoritos=[];estado.usuario=null;estado.registroOrigen='Solicitud';estado.servicioId='';estado.turnoVisto=null;Object.keys(numeroPorSede).forEach(x=>delete numeroPorSede[x]);navegar('Inicio');aviso('Se reiniciaron los datos de la demostración.');}
    break;}
 }
});
document.addEventListener('submit',event=>{
 if(event.target.id==='form-codigo-qr'){event.preventDefault();const valor=document.getElementById('codigo-qr').value;estado.qrError='';if(!validarCodigoQR(valor)){estado.qrError='Código QR inválido, no reconocido o servicio no disponible. Usa un código TF-DEMO de los bancos mostrados.';dibujar();}return;}
 if(event.target.id==='form-consulta-ticket'){event.preventDefault();const num=norm(document.getElementById('consulta-numero').value).toUpperCase(),sede=document.getElementById('consulta-sede').value;const t=estado.turnos.find(t=>t.sedeId===sede&&norm(t.numero).toUpperCase()===num&&['En espera','Próximo','Llamado'].includes(t.estado));estado.consultaResultado=t?.id||null;estado.consultaError=t?'':'No encontramos un turno vigente con ese número y establecimiento en esta sesión. Verifica ambos datos.';dibujar();return;}
 if(event.target.id==='form-reprogramar'){event.preventDefault();const t=turnoPorId(estado.turnoVisto),fecha=document.getElementById('reprogramar-fecha').value,hora=document.getElementById('reprogramar-hora').value;if(!t||!cuposSimulados(fecha).some(o=>o.hora===hora&&o.disponible)){aviso('Elige una fecha y horario disponibles en la simulación.');return;}t.planVisita={sedeId:t.sedeId,fecha,hora};notificar('Visita reprogramada (demo)',`${t.numero}: ${fecha} a las ${hora}. No constituye una reserva oficial.`,t);navegar('Seguimiento');aviso('Franja de demostración reprogramada correctamente.');return;}
  if(event.target.id==='form-datos'){event.preventDefault();const datosValidados=validarDatos(event.target);if(!datosValidados)return;estado.usuario=datosValidados;const desdeTurno=estado.registroOrigen==='Solicitud';navegar(desdeTurno?'Revisión':'Perfil');aviso('Tus datos se guardaron para esta sesión.');return;}
 if(event.target.id==='busqueda-inicio'){event.preventDefault();estado.busqueda=event.target.elements.busqueda.value.trim();estado.categoria='Todas';estado.distrito='Todos';navegar('Establecimientos');}
 if(event.target.id==='form-servicio'){event.preventDefault();const p=porId(estado.sedeId);if(!estado.servicioId||!p?.servicios.some(s=>s[0]===estado.servicioId)){const er=document.querySelector('#error-servicio');er.hidden=false;const opcion=document.querySelector('input[name="servicio"]');opcion?.focus();return;}
  if(turnoActivoDe(p.id)){abrirModal('duplicado',p.id);return;}
  if(esReniec(p)){const fecha=document.getElementById('plan-fecha').value,hora=document.getElementById('plan-hora').value;if(!cuposSimulados(fecha).some(x=>x.hora===hora&&x.disponible)){const e=document.getElementById('plan-hora');e.focus();e.reportValidity();aviso('Selecciona un horario disponible para planificar la visita.');return;}estado.planVisita={sedeId:p.id,fecha,hora};}
  if(estado.usuario)navegar('Revisión');else{estado.registroOrigen='Solicitud';navegar('Datos');}}
});
document.addEventListener('change',event=>{
 const t=event.target;
 if(t.id==='filtrar-distrito'){estado.distrito=t.value;actualizarResultados();}
 if(t.id==='ordenar-sedes'){estado.orden=t.value;actualizarResultados();}
 if(t.id==='selector-turno'){estado.turnoVisto=t.value;dibujar();}
 if(t.id==='umbral-alerta'){const actual=turnoPorId(t.dataset.id);if(actual){actual.umbral=Number(t.value);actual.avisadoUmbral=false;evaluarProximidad(actual);dibujar();}}
 if(t.id==='plan-fecha'){estado.planVisita=null;pintarHoras('plan-fecha','plan-hora','plan-disponibilidad');}
 if(t.id==='reprogramar-fecha')pintarHoras('reprogramar-fecha','reprogramar-hora','reprogramar-disponibilidad');
 if(t.matches('[data-requisito]')){const key=t.dataset.key,i=Number(t.dataset.requisito),listos=new Set(estado.requisitosListos[key]||[]);if(t.checked)listos.add(i);else listos.delete(i);estado.requisitosListos[key]=[...listos];const p=porId(estado.sedeId),cuenta=document.getElementById('conteo-requisitos'),cantidad=requisitosDe(p,estado.servicioId).length;if(cuenta)cuenta.textContent=`${cantidad-listos.size} pendiente(s) de revisar de ${cantidad}.`;}
 if(t.id==='estado-historial'){estado.historicoEstado=t.value;actualizarHistorial();}
 if(t.name==='servicio'){estado.servicioId=t.value;document.querySelectorAll('.service-choice').forEach(el=>el.classList.toggle('chosen',el.querySelector('input').checked));const e=document.querySelector('#error-servicio');if(e)e.hidden=true;actualizarRequisitosMarcados();}
});
document.addEventListener('input',event=>{const t=event.target;if(t.id==='buscar-sede'){estado.busqueda=t.value;actualizarResultados();}if(t.id==='buscar-historial'){estado.historicoBuscar=t.value;actualizarHistorial();}if(['dato-nombres','dato-apellidos','dato-correo'].includes(t.id)){t.removeAttribute('aria-invalid');const error=document.getElementById('error-'+t.name);if(error)error.hidden=true;}});
document.addEventListener('keydown',event=>{
 if(event.key==='Escape'&&estado.modal){event.preventDefault();cerrarModal();return;}
 if(event.key==='Tab'&&estado.modal){const dialog=document.querySelector('.modal');const items=[...dialog.querySelectorAll('button:not([disabled]),a[href],input:not([disabled]),select:not([disabled])')];if(!items.length)return;
 const first=items[0],last=items[items.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}}
});
// No hay datos precargados: la primera pantalla inicia sin turnos, historial ni avisos.
dibujar();
