'use strict';
// No push ni caché de datos. Solo avisos solicitados desde la página activa.
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick',event=>{event.notification.close();event.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(clients=>{const c=clients.find(c=>c.url.startsWith(self.registration.scope));return c?c.focus():self.clients.openWindow(new URL('pages/index.html',self.registration.scope).href);}));});
