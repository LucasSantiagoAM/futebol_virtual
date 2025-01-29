// service-worker.js

const cacheName = 'myPWA-v1';
const assetsToCache = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/icon.png', // Adicione os ícones e imagens necessárias
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cacheResponse => {
      return cacheResponse || fetch(event.request);
    })
  );
});
