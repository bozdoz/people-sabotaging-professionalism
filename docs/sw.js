// Use a CACHE_NAME for cache versioning
var CACHE_NAME = 'v1:static';

var files = [
    './',
    './js/main.js',
    './favicon.ico',
    'https://fonts.googleapis.com/css?family=Quicksand:500',
    'https://fonts.gstatic.com/s/quicksand/v7/6xKodSZaM9iE8KbpRA_p2HcYT8L_.woff2',
];

// During the installation phase, you'll usually want to cache static assets.
self.addEventListener('install', function(e) {
    // Once the service worker is installed, go ahead and fetch the resources to make this work offline.
    e.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(files).then(function() {
                self.skipWaiting();
            });
        })
    );
});


self.addEventListener('activate', function(e) {
    // delete any caches that aren't in expectedCaches
    // which will get rid of static-v1
    e.waitUntil(
        caches.keys().then(function (keys) {
          Promise.all(
              keys.map(function (key) {
                  if (![ CACHE_NAME ].includes(key)) {
                      return caches.delete(key);
                  }
              })
          )
        }).then(function () {
              // handle fetches
        })
    );
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            // Cache hit - return response
            if (response) {
                return response;
            }

            // IMPORTANT: Clone the request. A request is a stream and
            // can only be consumed once. Since we are consuming this
            // once by cache and once by the browser for fetch, we need
            // to clone the response.
            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(
                function(response) {
                    // Check if we received a valid response
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response;
                    }

                    // IMPORTANT: Clone the response. A response is a stream
                    // and because we want the browser to consume the response
                    // as well as the cache consuming the response, we need
                    // to clone it so we have two streams.
                    var responseToCache = response.clone();

                    caches.open(CACHE_NAME)
                        .then(function(cache) {
                            cache.put(event.request, responseToCache);
                        });

                    return response;
                }
            );
        })
    );
});