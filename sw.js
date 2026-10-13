var C="claude-pfc-v2",F=["./","./index.html"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(F)}).then(function(){return self.skipWaiting()}))});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(n){return n!==C}).map(function(n){return caches.delete(n)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){if(e.request.method!=="GET")return;e.respondWith(fetch(e.request,{cache:"no-cache"}).then(function(n){var x=n.clone();caches.open(C).then(function(c){c.put(e.request,x)});return n}).catch(function(){return caches.match(e.request).then(function(r){return r||caches.match("./index.html")})}))});
