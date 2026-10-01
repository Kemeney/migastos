const C="migastos-v13",A=["./","index.html","manifest.webmanifest","icons/icon-192.png","icons/icon-512.png","icons/apple-touch-icon.png","icons/favicon.svg","fonts/inter-latin-wght-normal.woff2"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(A.map(u=>c.add(u).catch(()=>0)))));self.skipWaiting()});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))));self.clients.claim()});
self.addEventListener("fetch",e=>{const q=e.request;if(q.method!=="GET"||new URL(q.url).origin!==location.origin)return;
const net=fetch(q).then(x=>{if(x.ok){const y=x.clone();caches.open(C).then(c=>c.put(q,y))}return x});
/* pages: network first (so updates show on next open), fall back to cache offline; assets: cache first */
if(q.mode==="navigate")e.respondWith(net.catch(()=>caches.match(q).then(r=>r||caches.match("index.html"))));
else e.respondWith(caches.match(q).then(r=>r||net))});
