(ns web.idb.IDBCursorSync
  "The IDBCursorSync interface of the IndexedDB API represents a
  for iterating over multiple records in a database. You can have
  one instance of IDBCursorSync representing a cursor, but you
  have an unlimited number of cursors at the same time. Operations
  performed on the underlying index or object store. It enables
  application to synchronously process all the records in the cursor's"
  (:refer-clojure :exclude []))

(defn not-allowed-err
  "Method.

  If the underlying index or object store does not support updating
  record because it is open in the READ_ONLY or SNAPSHOT_READ mode."
  [this & args]
  (-> this .-NOT_ALLOWED_ERR (.apply this (clj->js args))))

