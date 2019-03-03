

self.addEventListener('install', (event) => {
  console.log("Service worker!")
})

// Init Workbox
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

self.addEventListener('activate', (event) => {
  console.log("el nuevo service worker se ha activado")
});


// ----------------------------------------------------------------------------


// DISABLED - Because Workbox webpack plugin now handles the service worker and the cache

// const cacheName = 'app-files-v1';

// const filesToCache = [
//   '/',
//   '/main.js',
//   'https://fonts.googleapis.com/icon?family=Material+Icons'
// ]

// self.addEventListener('install', (event) => {
//   console.log("Service worker!")

//   event.waitUntil(
//     caches.open(cacheName)
//       .then((cache) => {
//         console.log("cache esta abierta");
//         return cache.addAll(filesToCache);
//       })
//   )
// })

// self.addEventListener('activate', (event) => {
//   console.log("el nuevo service worker se ha activado")
// });

// self.addEventListener('fetch', (event) => {
//   event.respondWith(
//     caches.match(event.request)
//       .then((response) => {
//         if (response) {
//           return response;
//         }
//         return fetch(event.request);
//       })
//   )
// });
