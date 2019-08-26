(ns web.storage.IDBEnvironment
  "The IDBEnvironment helper of the IndexedDB API contains the indexedDB
  which provides access to IndexedDB functionality. It is the top
  IndexedDB interface implemented by the `window` and `web.workers.Worker`"
  (:refer-clojure :exclude []))

(defn indexed-db
  "Property.

  Provides a mechanism for applications to asynchronously access
  of indexed databases; contains an IDBFactory object."
  [this]
  (-> this (.indexedDB)))

(defn set-indexed-db!
  "Property.

  Provides a mechanism for applications to asynchronously access
  of indexed databases; contains an IDBFactory object."
  [this val]
  (aset this "indexedDB" val))

