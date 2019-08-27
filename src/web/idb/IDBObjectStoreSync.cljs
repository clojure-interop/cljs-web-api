(ns web.idb.IDBObjectStoreSync
  "The IDBObjectStoreSync interface of the IndexedDB API provides
  access to an object store of a database."
  (:refer-clojure :exclude []))

(defn any
  "Method.

  The key for the stored record."
  [this & args]
  (-> this .-any (.apply this (clj->js args))))

(defn constraint-err
  "Method.

  If a record exists in this index with a key corresponding to
  key parameter or the index is auto-populated, or if no record
  with a key corresponding to the value parameter in the index's
  object store."
  [this & args]
  (-> this .-CONSTRAINT_ERR (.apply this (clj->js args))))

(defn data-err
  "Method.

  If this object store uses out-of-line keys, and the key parameter
  not passed."
  [this & args]
  (-> this .-DATA_ERR (.apply this (clj->js args))))

(defn serial-err
  "Method.

  If the data being stored could not be serialized by the internal
  cloning algorithm."
  [this & args]
  (-> this .-SERIAL_ERR (.apply this (clj->js args))))

(defn idb-index-sync
  "Method.

  An object to access the newly created index."
  [this & args]
  (-> this .-IDBIndexSync (.apply this (clj->js args))))

(defn not-found-err
  "Method.

  If no record exists in this index for the given key."
  [this & args]
  (-> this .-NOT_FOUND_ERR (.apply this (clj->js args))))

