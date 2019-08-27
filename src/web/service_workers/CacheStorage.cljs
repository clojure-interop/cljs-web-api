(ns web.service-workers.CacheStorage
  "The CacheStorage interface represents the storage for `web.service-workers.Cache`"
  (:refer-clojure :exclude [keys]))

(defn match
  "Method.

  The match() method of the `web.service-workers.CacheStorage`
  (available globally as caches) checks if a given `web.fetch.Request`
  url string is a key for a stored `web.fetch.Response`. This method
  a `js.Promise` for a `web.fetch.Response`, or undefined if no
  is found.

  `caches.match(request, options).then(function(response) {
  // Do something with the response
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/match`"
  [this & args]
  (-> this .-match (.apply this (clj->js args))))

(defn has
  "Method.

  The has() method of the `web.service-workers.CacheStorage` interface
  a `js.Promise` that resolves to true if a `web.service-workers.Cache`
  matches the cacheName.

  `caches.has(cacheName).then(function(boolean) {
  // true: your cache exists!
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/has`"
  [this & args]
  (-> this .-has (.apply this (clj->js args))))

(defn open
  "Method.

  The open() method of the `web.service-workers.CacheStorage` interface
  a `js.Promise` that resolves to the `web.service-workers.Cache`
  matching the cacheName.

  `// \\\"caches\\\" is a global read-only variable, which is an instance of CacheStorage,
  // For more info, refer to: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/caches

  caches.open(cacheName).then(function(cache) {
  // Do something with your cache
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/open`"
  [this & args]
  (-> this .-open (.apply this (clj->js args))))

(defn delete
  "Method.

  The delete() method of the `web.service-workers.CacheStorage`
  finds the `web.service-workers.Cache` object matching the cacheName,
  if found, deletes the `web.service-workers.Cache` object and
  a `js.Promise` that resolves to true. If no `web.service-workers.Cache`
  is found, it returns false.

  `caches.delete(cacheName).then(function(boolean) {
  // your cache is now deleted
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/delete`"
  [this & args]
  (-> this .-delete (.apply this (clj->js args))))

(defn keys
  "Method.

  The keys() method of the `web.service-workers.CacheStorage` interface
  a `js.Promise` that will resolve with an array containing strings
  to all of the named `web.service-workers.Cache` objects tracked
  the `web.service-workers.CacheStorage` object in the order they
  created. Use this method to iterate over a list of all `web.service-workers.Cache`

  `caches.keys().then(function(keyList) {
  //do something with your keyList
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/keys`"
  [this & args]
  (-> this .-keys (.apply this (clj->js args))))

