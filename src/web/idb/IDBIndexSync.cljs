(ns web.idb.IDBIndexSync
  "The IDBIndexSync interface of the IndexedDB API provides synchronous
  to an index in a database."
  (:refer-clojure :exclude [key range]))

(defn value
  "Method.

  The value to store into the index."
  [this & args]
  (apply (-> this .-value) (concat [this] args)))

(defn key
  "Method.

  The key that identifies the record to be retrieved."
  [this & args]
  (apply (-> this .-key) (concat [this] args)))

(defn any
  "Method.

  The retrieved value from the index."
  [this & args]
  (apply (-> this .-any) (concat [this] args)))

(defn not-found-err
  "Method.

  If no record exists in this index for the given key."
  [this & args]
  (apply (-> this .-NOT_FOUND_ERR) (concat [this] args)))

(defn range
  "Method.

  The key range to use as the cursor's range."
  [this & args]
  (apply (-> this .-range) (concat [this] args)))

