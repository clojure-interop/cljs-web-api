(ns web.idb.IDBDatabaseSync
  "The DatabaseSync interface in the IndexedDB API represents a
  connection to a database."
  (:refer-clojure :exclude [name]))

(defn name
  "Method.

  The name of a new object store."
  [this & args]
  (apply (-> this .-name) (concat [this] args)))

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

(defn store-name
  "Method.

  The name of an existing object store to remove."
  [this & args]
  (apply (-> this .-storeName) (concat [this] args)))

(defn version
  "Method.

  The version to store in the database."
  [this & args]
  (apply (-> this .-version) (concat [this] args)))

(defn store-names
  "Method.

  The names of object stores and indexes in the scope of the new"
  [this & args]
  (apply (-> this .-storeNames) (concat [this] args)))

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

