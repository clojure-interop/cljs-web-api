(ns web.storage.IDBCursorWithValue
  "The IDBCursorWithValue interface of the IndexedDB API represents
  cursor for traversing or iterating over multiple records in a
  It is the same as the `web.storage.IDBCursor`, except that it
  the value property."
  (:refer-clojure :exclude []))

(defn value
  "Property.

  [Read Only]

  The value of the current cursor.

  `var value = myIDBCursorWithValue.value;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBCursorWithValue/value`"
  [this]
  (-> this (.-value)))

