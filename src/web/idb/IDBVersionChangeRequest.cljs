(ns web.idb.IDBVersionChangeRequest
  "The IDBVersionChangeRequest interface the IndexedDB API represents
  request to change the version of a database. It is used only
  the setVersion() method of IDBDatabase."
  (:refer-clojure :exclude []))

(defn set-version
  "Method.

  For older WebKit browsers, call this method before creating or
  an object store.

  `IDBVersionChangeRequest setVersion ([TreatNullAs=EmptyString] in DOMString version);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBVersionChangeRequest/setVersion`"
  [this & args]
  (apply (-> this .-setVersion) (concat [this] args)))

