
self.addEventListener('install', (e)=>{
  e.waitUntil(caches.open('jg-counter-v1').then(cache=>cache.addAll([
    './',
    './index.html',
    './manifest.webmanifest',
    './icon-512.png'
  ])));
});
self.addEventListener('fetch', (e)=>{
  e.respondWith(
    caches.match(e.request).then(res=> res || fetch(e.request))
  );
});
