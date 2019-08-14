(ns idb.IDBDatabase.ev
  "IDBDatabase Events."
  (:refer-clojure :exclude []))

(def versionchange
  "Event.

  The versionchange event is fired when a database structure change
  event or IDBFactory.deleteDatabase) was requested.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/versionchange_event`"

  "versionchange")

(def abort
  "Event.

  The abort event is fired on IDBDatabase when a transaction is
  and bubbles up to the connection object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/abort_event`"

  "abort")

(def close
  "Event.

  The close event is fired on IDBDatabase when the database connection
  unexpectedly closed. This could happen, for example, if the underlying
  is removed or if the user clears the database in the browser's
  preferences.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/close_event`"

  "close")

(def error
  "Event.

  The error event is fired on IDBDatabase when a request returns
  error and the event bubbles up to the connection object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/error_event`"

  "error")

