(ns web.idb.IDBDatabaseSync
  "The DatabaseSync interface in the IndexedDB API represents a
  connection to a database."
  (:refer-clojure :exclude []))

(defn idb-object-store-sync
  "Method.

  An object to access the newly created object store."
  [this & args]
  (apply (-> this .-IDBObjectStoreSync) (concat [this] args)))

(defn constraint-err
  "Method.

  If an object store with the same name (based on case-sensitive
  already exists in the connected database."
  [this & args]
  (apply (-> this .-CONSTRAINT_ERR) (concat [this] args)))

(defn not-found-err
  "Method.

  If an object store with the given name (based on case-sensitive
  already exists in the connected database."
  [this & args]
  (apply (-> this .-NOT_FOUND_ERR) (concat [this] args)))

(defn idb-transaction-sync
  "Method.

  An object to access the newly created transaction."
  [this & args]
  (apply (-> this .-IDBTransactionSync) (concat [this] args)))

(defn timeout-err
  "Method.

  If reserving all the database objects identified in storeNames
  longer than the timeout interval."
  [this & args]
  (apply (-> this .-TIMEOUT_ERR) (concat [this] args)))

