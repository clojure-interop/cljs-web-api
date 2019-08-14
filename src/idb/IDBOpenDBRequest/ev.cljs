(ns idb.IDBOpenDBRequest.ev
  "IDBOpenDBRequest Events."
  (:refer-clojure :exclude []))

(def blocked
  "Event.

  The blocked handler is executed when an open connection to a
  is blocking a versionchange transaction on the same database.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/blocked_event`"

  "blocked")

(def upgradeneeded
  "Event.

  The upgradeneeded event is fired when an attempt was made to
  a database with a version number higher than its current version.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event`"

  "upgradeneeded")

