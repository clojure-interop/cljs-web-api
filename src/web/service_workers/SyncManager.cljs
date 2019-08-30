(ns web.service-workers.SyncManager
  "The SyncManager interface of the the ServiceWorker API provides
  interface for registering and listing sync registrations."
  (:refer-clojure :exclude []))

(defn register
  "Method.

  [Non Standard]

  The SyncManager.register method of the `web.service-workers.SyncManager`
  returns a `js.Promise` that resolves to a `SyncRegistration`

  `SyncManager.register([options]).then(function(syncRegistration) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncManager/register`"
  [this & args]
  (-> this .-register (.apply this (clj->js args))))

(defn get-tags
  "Method.

  [Non Standard]

  The SyncManager.getTags method of the `web.service-workers.SyncManager`
  returns a list of developer-defined identifiers for SyncManager

  `SyncManager.getTags().then(function(tags[]) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncManager/getTags`"
  [this & args]
  (-> this .-getTags (.apply this (clj->js args))))

