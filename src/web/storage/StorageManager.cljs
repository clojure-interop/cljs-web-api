(ns web.storage.StorageManager
  "The StorageManager interface of the the Storage API provides
  interface for managing persistance permissions and estimating
  storage. You can get a reference to this interface using either
  or `WorkerNavigator.storage`."
  (:refer-clojure :exclude []))

(defn estimate
  "Method.

  The estimate() method of the `web.storage.StorageManager` interface
  the Storage Manager to obtain quota and usage information for
  current origin. This method operates asynchronously, so it returns
  `js.Promise` which resolves once the information is available.
  promise's fulfillment handler receives as an input a `web.storage.StorageEstimate`
  the usage and quota data.

  `var estimatePromise = StorageManager.estimate();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate`"
  [this ]
  (-> this (.estimate)))

(defn persist
  "Method.

  [Experimental]

  The persist() method of the `web.storage.StorageManager` interface
  permission to use persistent storage, and returns a `js.Promise`
  resolves to true if permission is granted and box mode is persistent,
  false otherwise.

  `navigator.storage.persist().then(function(persistent) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persist`"
  [this & args]
  (-> this .-persist (.apply this (clj->js args))))

(defn persisted
  "Method.

  [Experimental]

  The persisted() method of the `web.storage.StorageManager` interface
  a `js.Promise` that resolves to true if box mode is persistent
  your site's storage.

  `navigator.storage.persisted().then(function(persistent) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/persisted`"
  [this & args]
  (-> this .-persisted (.apply this (clj->js args))))

