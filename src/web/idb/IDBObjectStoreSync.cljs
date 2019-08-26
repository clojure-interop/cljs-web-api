(ns web.idb.IDBObjectStoreSync
  "The IDBObjectStoreSync interface of the IndexedDB API provides
  access to an object store of a database."
  (:refer-clojure :exclude []))

(defn any
  "Method.

  The key for the stored record."
  [this & args]
  (apply (-> this .-any) (concat [this] args)))

(defn constraint-err
  "Method.

  If a record exists in this index with a key corresponding to
  key parameter or the index is auto-populated, or if no record
  with a key corresponding to the value parameter in the index's
  object store."
  [this & args]
  (apply (-> this .-CONSTRAINT_ERR) (concat [this] args)))

(defn data-err
  "Method.

  If this object store uses out-of-line keys, and the key parameter
  not passed."
  [this & args]
  (apply (-> this .-DATA_ERR) (concat [this] args)))

(defn serial-err
  "Method.

  If the data being stored could not be serialized by the internal
  cloning algorithm."
  [this & args]
  (apply (-> this .-SERIAL_ERR) (concat [this] args)))

(defn idb-index-sync
  "Method.

  An object to access the newly created index."
  [this & args]
  (apply (-> this .-IDBIndexSync) (concat [this] args)))

(defn not-found-err
  "Method.

  If no record exists in this index for the given key."
  [this & args]
  (apply (-> this .-NOT_FOUND_ERR) (concat [this] args)))

