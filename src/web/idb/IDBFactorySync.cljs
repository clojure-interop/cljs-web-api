(ns web.idb.IDBFactorySync
  "The IDBFactorySync interface of the IndexedDB API provide a synchronous
  of accessing the capabilities of indexed databases."
  (:refer-clojure :exclude []))

(defn idb-database-sync
  "Method.

  An object to access the open database."
  [this & args]
  (apply (-> this .-IDBDatabaseSync) (concat [this] args)))

(defn non-transient-err
  "Method.

  If the name parameter is not valid. A valid name is any string
  the empty string."
  [this & args]
  (apply (-> this .-NON_TRANSIENT_ERR) (concat [this] args)))

(defn unknown-err
  "Method.

  If an error occurs while the database is being opened."
  [this & args]
  (apply (-> this .-UNKNOWN_ERR) (concat [this] args)))

