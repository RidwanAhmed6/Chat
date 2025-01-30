self.addEventListener("install", (e) => {
    e.waitUntil(
        caches.open("chat-admin").then((cache) => {
            return cache.addAll([
                "admin.html",
                "manifest.json",
                "icon-192x192.png",
                "icon-512x512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});

