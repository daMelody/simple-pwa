const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
    "/",
    "/css/style.css",
    "/js/app.js",
    "/images/coffee1.jpg",
    "/images/coffee2.jpg",
    "/images/coffee3.jpg",
    "/images/coffee4.jpg",
    "/images/coffee5.jpg",
    "/images/coffee6.jpg",
    "/images/coffee7.jpg",
    "/images/coffee8.jpg",
    "/images/coffee9.jpg",
]

// service worker event for loading assets into browser cache
self.addEventListener("install", installEvent => {
    installEvent.waitUntil(caches.open(staticDevCoffee).then(cache => {
        cache.addAll(assets)
    }))
})

// service worker event for getting our data from cache
self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
    }))
})
