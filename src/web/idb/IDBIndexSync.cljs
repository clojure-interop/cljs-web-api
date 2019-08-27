(ns web.idb.IDBIndexSync
  "The IDBIndexSync interface of the IndexedDB API provides synchronous
  to an index in a database."
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

(defn not-found-err
  "Method.

  If no record exists in this index for the given key."
  [this & args]
  (-> this .-NOT_FOUND_ERR (.apply this (clj->js args))))

