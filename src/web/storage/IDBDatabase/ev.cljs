(ns web.storage.IDBDatabase.ev
  "IDBDatabase Events."
  (:refer-clojure :exclude []))

(def abort
  "Event.

  The abort event is fired on IDBDatabase when a transaction is
  and bubbles up to the connection object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/abort_event`"

  "abort")

(def versionchange
  "Event.

  The versionchange event is fired when a database structure change
  event or IDBFactory.deleteDatabase) was requested.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBDatabase/versionchange_event`"

  "versionchange")

