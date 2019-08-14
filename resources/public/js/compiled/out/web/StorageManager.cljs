(ns web.StorageManager
  "The StorageManager interface of the the Storage API provides
  interface for managing persistance permissions and estimating
  storage. You can get a reference to this interface using either
  or `web.WorkerNavigator.storage`."
  (:refer-clojure :exclude []))

(defn estimate
  "Method.

  The estimate() method of the `web.StorageManager` interface asks
  Storage Manager to obtain quota and usage information for the
  origin. This method operates asynchronously, so it returns a
  which resolves once the information is available. The promise's
  handler receives as an input a `web.StorageEstimate` with the
  and quota data.

  `var estimatePromise = StorageManager.estimate();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate`"
  [this ]
  (-> this (.estimate)))

(defn persist
  "Method.

  The persist() method of the `web.StorageManager` interface requests
  to use persistent storage, and returns a `web.Promise` that resolves
  true if permission is granted and box mode is persistent, and
  otherwise.

  `navigator.storage.persist().then(function(persistent) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist`"
  [this & args]
  (apply (-> this .-persist) (concat [this] args)))

(defn persisted
  "Method.

  The persisted() method of the `web.StorageManager` interface
  a `web.Promise` that resolves to true if box mode is persistent
  your site's storage.

  `navigator.storage.persisted().then(function(persistent) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persisted`"
  [this & args]
  (apply (-> this .-persisted) (concat [this] args)))

