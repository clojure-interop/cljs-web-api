(ns web.idb.IDBDatabaseSync
  "The DatabaseSync interface in the IndexedDB API represents a
  connection to a database."
  (:refer-clojure :exclude []))

(defn idb-object-store-sync
  "Method.

  An object to access the newly created object store."
  [this & args]
  (-> this .-IDBObjectStoreSync (.apply this (clj->js args))))

(defn constraint-err
  "Method.

  If an object store with the same name (based on case-sensitive
  already exists in the connected database."
  [this & args]
  (-> this .-CONSTRAINT_ERR (.apply this (clj->js args))))

(defn not-found-err
  "Method.

  If an object store with the given name (based on case-sensitive
  already exists in the connected database."
  [this & args]
  (-> this .-NOT_FOUND_ERR (.apply this (clj->js args))))

(defn idb-transaction-sync
  "Method.

  An object to access the newly created transaction."
  [this & args]
  (-> this .-IDBTransactionSync (.apply this (clj->js args))))

(defn timeout-err
  "Method.

  If reserving all the database objects identified in storeNames
  longer than the timeout interval."
  [this & args]
  (-> this .-TIMEOUT_ERR (.apply this (clj->js args))))

