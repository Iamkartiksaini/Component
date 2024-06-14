self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open("my-pwa-cache-v1").then(function (cache) {
      return cache.addAll([
        "/",
        "index.html",
        "manifest.json",
        "icon-256x256.png", // Make sure to provide your own icon
        // Add other static assets you want to cache here
      ]);
    })
  );
});

// self.addEventListener("fetch", function (event) {
//   event.respondWith(
//     caches.match(event.request).then(function (response) {
//       return response || fetch(event.request);
//     })
//   );
// });

self.addEventListener("fetch", function (event) {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      if (!response) {
        return caches.match("index.html");
      }
      return response;
    })
  );
});
