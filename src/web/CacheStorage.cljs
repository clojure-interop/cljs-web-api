(ns web.CacheStorage
  "The CacheStorage interface represents the storage for `web.Cache`"
  (:refer-clojure :exclude [keys]))

(defn delete
  "Method.

  The delete() method of the `web.CacheStorage` interface finds
  `web.Cache` object matching the cacheName, and if found, deletes
  `web.Cache` object and returns a `web.Promise` that resolves
  true. If no `web.Cache` object is found, it returns false.

  `caches.delete(cacheName).then(function(boolean) {
  // your cache is now deleted
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/delete`"
  [this & args]
  (apply (-> this .-delete) (concat [this] args)))

(defn has
  "Method.

  The has() method of the `web.CacheStorage` interface returns
  `web.Promise` that resolves to true if a `web.Cache` object matches
  cacheName.

  `caches.has(cacheName).then(function(boolean) {
  // true: your cache exists!
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/has`"
  [this & args]
  (apply (-> this .-has) (concat [this] args)))

(defn keys
  "Method.

  The keys() method of the `web.CacheStorage` interface returns
  `web.Promise` that will resolve with an array containing strings
  to all of the named `web.Cache` objects tracked by the `web.CacheStorage`
  in the order they were created. Use this method to iterate over
  list of all `web.Cache` objects.

  `caches.keys().then(function(keyList) {
  //do something with your keyList
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/keys`"
  [this & args]
  (apply (-> this .-keys) (concat [this] args)))

(defn match
  "Method.

  The match() method of the `web.CacheStorage` interface (available
  as caches) checks if a given `web.Request` or url string is a
  for a stored `web.Response`. This method returns a `web.Promise`
  a `web.Response`, or undefined if no match is found.

  `caches.match(request, options).then(function(response) {
  // Do something with the response
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/match`"
  [this & args]
  (apply (-> this .-match) (concat [this] args)))

(defn open
  "Method.

  The open() method of the `web.CacheStorage` interface returns
  `web.Promise` that resolves to the `web.Cache` object matching
  cacheName.

  `// \\\"caches\\\" is a global read-only variable, which is an instance of CacheStorage,
  // For more info, refer to: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/caches

  caches.open(cacheName).then(function(cache) {
  // Do something with your cache
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CacheStorage/open`"
  [this & args]
  (apply (-> this .-open) (concat [this] args)))

