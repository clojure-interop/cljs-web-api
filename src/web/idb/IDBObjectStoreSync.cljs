(ns web.idb.IDBObjectStoreSync
  "The IDBObjectStoreSync interface of the IndexedDB API provides
  access to an object store of a database."
  (:refer-clojure :exclude [name key range]))

(defn value
  "Method.

  The value to store into the index."
  [this & args]
  (apply (-> this .-value) (concat [this] args)))

(defn name
  "Method.

  The name of a new index."
  [this & args]
  (apply (-> this .-name) (concat [this] args)))

(defn idb-index-sync
  "Method.

  An object to access the newly created index."
  [this & args]
  (apply (-> this .-IDBIndexSync) (concat [this] args)))

(defn key
  "Method.

  The key that identifies the record to be retrieved."
  [this & args]
  (apply (-> this .-key) (concat [this] args)))

(defn any
  "Method.

  The value retrieved from the object store."
  [this & args]
  (apply (-> this .-any) (concat [this] args)))

(defn serial-err
  "Method.

  If the data being stored could not be deserialized by the internal
  cloning algorithm."
  [this & args]
  (apply (-> this .-SERIAL_ERR) (concat [this] args)))

(defn range
  "Method.

  The key range to use as the cursor's range."
  [this & args]
  (apply (-> this .-range) (concat [this] args)))

(defn not-found-err
  "Method.

  If no records exist in this index for the requested key range."
  [this & args]
  (apply (-> this .-NOT_FOUND_ERR) (concat [this] args)))

(defn constraint-err
  "Method.

  If noOverwrite was true, and a record exists in this index for
  given key or this index is auto-populated; or if no record exists
  the given key in the index's referenced object store."
  [this & args]
  (apply (-> this .-CONSTRAINT_ERR) (concat [this] args)))

(defn index-name
  "Method.

  The name of the existing index to remove."
  [this & args]
  (apply (-> this .-indexName) (concat [this] args)))

