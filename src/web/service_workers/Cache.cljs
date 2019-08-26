(ns web.service-workers.Cache
  "The Cache interface provides a storage mechanism for Request
  Response object pairs that are cached, for example as part of
  `web.workers.ServiceWorker` life cycle. Note that the Cache interface
  exposed to windowed scopes as well as workers. You don't have
  use it in conjunction with service workers, even though it is
  in the service worker spec."
  (:refer-clojure :exclude [keys]))

(defn match
  "Method.

  The match() method of the `web.service-workers.Cache` interface
  a `js.Promise` that resolves to the `web.fetch.Response` associated
  the first matching request in the `web.service-workers.Cache`
  If no match is found, the `js.Promise` resolves to `js.undefined`.

  `cache.match(request, {options}).then(function(response) {
  // Do something with the response
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/match`"
  [this & args]
  (apply (-> this .-match) (concat [this] args)))

(defn add
  "Method.

  The add() method of the `web.service-workers.Cache` interface
  a URL, retrieves it, and adds the resulting response object to
  given cache.

  `cache.add(request).then(function() {
  // request has been added to the cache
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/add`"
  [this & args]
  (apply (-> this .-add) (concat [this] args)))

(defn add-all
  "Method.

  The addAll() method of the `web.service-workers.Cache` interface
  an array of URLs, retrieves them, and adds the resulting response
  to the given cache. The request objects created during retrieval
  keys to the stored response operations.

  `cache.addAll(requests[]).then(function() {
  // requests have been added to the cache
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll`"
  [this & args]
  (apply (-> this .-addAll) (concat [this] args)))

(defn delete
  "Method.

  The delete() method of the `web.service-workers.Cache` interface
  the `web.service-workers.Cache` entry whose key is the request,
  if found, deletes the `web.service-workers.Cache` entry and returns
  `js.Promise` that resolves to true. If no `web.service-workers.Cache`
  is found, it resolves to false.

  `cache.delete(request,{options}).then(function(true) {
  //your cache entry has been deleted
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete`"
  [this & args]
  (apply (-> this .-delete) (concat [this] args)))

(defn keys
  "Method.

  The keys() method of the `web.service-workers.Cache` interface
  a `js.Promise` that resolves to an array of `web.service-workers.Cache`

  `cache.keys(request,{options}).then(function(keys) {
  //do something with your array of requests
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/keys`"
  [this & args]
  (apply (-> this .-keys) (concat [this] args)))

(defn match-all
  "Method.

  The matchAll() method of the `web.service-workers.Cache` interface
  a `js.Promise` that resolves to an array of all matching responses
  the `web.service-workers.Cache` object.

  `cache.matchAll(request,{options}).then(function(response) {
  //do something with the response array
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/matchAll`"
  [this & args]
  (apply (-> this .-matchAll) (concat [this] args)))

(defn put
  "Method.

  The put() method of the `web.service-workers.Cache` interface
  key/value pairs to be added to the current `web.service-workers.Cache`

  `cache.put(request, response).then(function() {
  // request/response pair has been added to the cache
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/put`"
  [this & args]
  (apply (-> this .-put) (concat [this] args)))

