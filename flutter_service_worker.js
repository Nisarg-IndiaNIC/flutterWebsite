'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "3ce56a96b570c81609add1436f0b3afa",
"index.html": "73af89644df8655f4c6c8d8652baeaf5",
"/": "73af89644df8655f4c6c8d8652baeaf5",
"main.dart.js": "bf613cd62217dae0a430de2b53f09a48",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "164978e228dbcc6596066987f7ce7376",
"assets/AssetManifest.json": "4e82dfd751a2ecf27e97770bf48e9f7d",
"assets/NOTICES": "357860fdba696f752252a39ff23c2a17",
"assets/FontManifest.json": "9465ad32303de13e55617465e158bda0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/logo2x.png": "11751489fe90b24d638ae1f02d05e6b6",
"assets/assets/images/patnerCorporate.png": "cfa6e27e790227ffc7032d9cc8b58ddf",
"assets/assets/images/success3.png": "6f9ab9e5f503c9d61c3aee72603604a2",
"assets/assets/images/hometop.png": "76f57cfc25dd5e21967cf4b0b48b6ad0",
"assets/assets/images/success2.png": "cffd67ae834a31e353cbdae073f1e438",
"assets/assets/images/footersocial3.png": "b95b539e652b561106df5f3f6b4ec317",
"assets/assets/images/success1.png": "b1ed93fe8884d978c3604fddfe442efd",
"assets/assets/images/footersocial2.png": "39ec97ac5e7db900bf59aa5f9945d164",
"assets/assets/images/location1.png": "7e61642301af5a1e6ea83ecba3908d05",
"assets/assets/images/carrer6.png": "0db162cc9927bc8a8f8ddf8b34577300",
"assets/assets/images/carrer4.png": "59804a9070433fb986ef85dd3f1c68c0",
"assets/assets/images/carrer5.png": "9989a1ae3a4ba267521426e954dcbca1",
"assets/assets/images/carrer1.png": "59044174d3b8315bd6ac4504ccfea365",
"assets/assets/images/person1.png": "378c191917eaf13d3028546b7be5fd51",
"assets/assets/images/webinar.png": "989b0849baef39ecf0e0f6c7b48125ee",
"assets/assets/images/carrer2.png": "9ac7e35162973e33147fcf09dee19cce",
"assets/assets/images/carrer3.png": "d62d62634f0bcbfbf064084888c7402a",
"assets/assets/images/person2.png": "a5ab69969acc6b2330fddd7468e1a1e3",
"assets/assets/images/insight.png": "98cc6b00204e589cf0e0c1feebb90ec7",
"assets/assets/images/insight2.png": "fec234d9a4433d3e5d5e56275e439997",
"assets/assets/images/footersocail1.png": "c0454abf091f5bc3e221d8c70d35dd81",
"assets/assets/images/corporate3.png": "cddb40a72a3a60dbc17f41a749efaae3",
"assets/assets/images/corporate2.png": "49128d2ffd8516a032c124df251bf068",
"assets/assets/images/insight3.png": "4513add5578264483d9830ca819772ee",
"assets/assets/images/insight1.png": "364c93921988a875557184df29dfb14d",
"assets/assets/images/patner11.png": "75c56488c89074f5efb5d36eedff2249",
"assets/assets/images/patner3.png": "19b808b667934242ed49f0748e9741e0",
"assets/assets/images/patner2.png": "0251784329a0c6203f0b7d400d15fa65",
"assets/assets/images/corporate1.png": "cacbb26022323300c7828975ba2e4c1b",
"assets/assets/images/insight4.png": "fcd7318d2f16224bfae14d7de47f034f",
"assets/assets/images/footer.png": "fefeef833bf032e05419ba325206601e",
"assets/assets/images/patner4.png": "7d5a102a81165825ac694446a6ca8040",
"assets/assets/images/footersocail11.png": "098a168f79fa8440cbe8135d75f8da72",
"assets/assets/images/c1.png": "62b3b232bf92d576f8522178998e3acc",
"assets/assets/images/insight21.png": "a4f777426c8cc2a2971a2a5cef707531",
"assets/assets/images/sc5.png": "d1044b2527b5b74f5802cbb1fd100bd0",
"assets/assets/images/c2.png": "df49054a7ce0bd62833e6ec9d98199f5",
"assets/assets/images/about.jpg": "21291ea34465d822b47fb02a360d22d0",
"assets/assets/images/c3.png": "d57d142aa92528ebf3c625cca63e5e6c",
"assets/assets/images/sc4.png": "9f03b54abd1a557a0ac435e9cec7ea17",
"assets/assets/images/c6.png": "19c4379f440f82f492aa217ef49a4a75",
"assets/assets/images/sc1.png": "4f1051b8d8c05d33fd826c7f3d7c96b4",
"assets/assets/images/sc3.png": "fd0d5546fdbdc85c76c4372a0d51f1bc",
"assets/assets/images/c4.png": "59b7ec0cb5947b20d719bb9469061733",
"assets/assets/images/insight31.png": "658171f42219b2d42bd19d7c3360e4f2",
"assets/assets/images/c5.png": "888c010049785468b6d0643126769695",
"assets/assets/images/sc2.png": "dd69163da327ede471a69f6feb61b834",
"assets/assets/insight.json": "52e6d1150644afecdc2dcd596c8432d0",
"assets/assets/fonts/AvenirNextLTPro-Demi.otf": "553decd415b14f0f0662a4694c624846",
"assets/assets/fonts/AvenirNextLTPro-Bold.otf": "91d8ff8ac25f51073a577408ae9cec86",
"assets/assets/fonts/AvenirNextLTPro-Regular.otf": "b5ed933057eaf1919dd79d81248cdbce",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
