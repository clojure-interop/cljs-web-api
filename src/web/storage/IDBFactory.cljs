(ns web.storage.IDBFactory
  "In the following code snippet, we make a request to open a database,
  include handlers for the success and error cases. For a full
  example, see our To-do Notifications app (view example live.)"
  (:refer-clojure :exclude []))

(defn open
  "Method.

  If an error occurs while the database connection is being opened,
  an error event is fired on the request object returned from this

  `For the current standard:



  var IDBOpenDBRequest = indexedDB.open(name);
  var IDBOpenDBRequest = indexedDB.open(name, version);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/open`"
  [this & args]
  (apply (-> this .-open) (concat [this] args)))

(defn delete-database
  "Method.

  The deleteDatabase() method of the `web.storage.IDBFactory` interface
  the deletion of a database. The method returns an `web.storage.IDBOpenDBRequest`
  immediately, and performs the deletion operation asynchronously.

  `For the current standard:



  var request = indexedDB.deleteDatabase(name);

  For the experimental version with options (see below):



  var request = indexedDB.deleteDatabase(name, options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/deleteDatabase`"
  [this & args]
  (apply (-> this .-deleteDatabase) (concat [this] args)))

(defn cmp
  "Method.

  An integer that indicates the result of the comparison; the table
  lists the possible values and their meanings:

  `var result = indexedDB.cmp(first, second);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/cmp`"
  [this first second]
  (-> this (.cmp first second)))

(defn databases
  "Method.

  The databases method of the `web.storage.IDBFactory` interface
  a list represening all the available databases, including their
  and versions.

  `const promise = indexedDB.databases()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBFactory/databases`"
  [this ]
  (-> this (.databases)))

