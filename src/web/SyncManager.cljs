(ns web.SyncManager
  "The SyncManager interface of the the ServiceWorker API provides
  interface for registering and listing sync registrations."
  (:refer-clojure :exclude []))

(defn get-tags
  "Method.

  The SyncManager.getTags method of the `web.SyncManager` interface
  a list of developer-defined identifiers for SyncManager registrations.

  `SyncManager.getTags().then(function(tags[]) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncManager/getTags`"
  [this & args]
  (apply (-> this .-getTags) (concat [this] args)))

(defn register
  "Method.

  The SyncManager.register method of the `web.SyncManager` interface
  a `web.Promise` that resolves to a `web.SyncRegistration` instance.

  `SyncManager.register([options]).then(function(syncRegistration) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SyncManager/register`"
  [this & args]
  (apply (-> this .-register) (concat [this] args)))

