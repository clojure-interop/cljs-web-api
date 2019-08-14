(ns web.Cache
  "The Cache interface provides a storage mechanism for Request
  Response object pairs that are cached, for example as part of
  `web.ServiceWorker` life cycle. Note that the Cache interface
  exposed to windowed scopes as well as workers. You don't have
  use it in conjunction with service workers, even though it is
  in the service worker spec."
  (:refer-clojure :exclude [keys]))

(defn add
  "Method.

  The add() method of the `web.Cache` interface takes a URL, retrieves
  and adds the resulting response object to the given cache.

  `cache.add(request).then(function() {
  // request has been added to the cache
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/add`"
  [this & args]
  (apply (-> this .-add) (concat [this] args)))

(defn add-all
  "Method.

  The addAll() method of the `web.Cache` interface takes an array
  URLs, retrieves them, and adds the resulting response objects
  the given cache. The request objects created during retrieval
  keys to the stored response operations.

  `cache.addAll(requests[]).then(function() {
  // requests have been added to the cache
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/addAll`"
  [this & args]
  (apply (-> this .-addAll) (concat [this] args)))

(defn delete
  "Method.

  The delete() method of the `web.Cache` interface finds the `web.Cache`
  whose key is the request, and if found, deletes the `web.Cache`
  and returns a `web.Promise` that resolves to true. If no `web.Cache`
  is found, it resolves to false.

  `cache.delete(request,{options}).then(function(true) {
  //your cache entry has been deleted
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/delete`"
  [this & args]
  (apply (-> this .-delete) (concat [this] args)))

(defn keys
  "Method.

  The keys() method of the `web.Cache` interface returns a `web.Promise`
  resolves to an array of `web.Cache` keys.

  `cache.keys(request,{options}).then(function(keys) {
  //do something with your array of requests
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/keys`"
  [this & args]
  (apply (-> this .-keys) (concat [this] args)))

(defn match
  "Method.

  The match() method of the `web.Cache` interface returns a `web.Promise`
  resolves to the `web.Response` associated with the first matching
  in the `web.Cache` object. If no match is found, the `web.Promise`
  to `web.undefined`.

  `cache.match(request, {options}).then(function(response) {
  // Do something with the response
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/match`"
  [this & args]
  (apply (-> this .-match) (concat [this] args)))

(defn match-all
  "Method.

  The matchAll() method of the `web.Cache` interface returns a
  that resolves to an array of all matching responses in the `web.Cache`

  `cache.matchAll(request,{options}).then(function(response) {
  //do something with the response array
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/matchAll`"
  [this & args]
  (apply (-> this .-matchAll) (concat [this] args)))

(defn put
  "Method.

  The put() method of the `web.Cache` interface allows key/value
  to be added to the current `web.Cache` object.

  `cache.put(request, response).then(function() {
  // request/response pair has been added to the cache
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Cache/put`"
  [this & args]
  (apply (-> this .-put) (concat [this] args)))

