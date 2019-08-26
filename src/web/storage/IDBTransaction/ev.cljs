(ns web.storage.IDBTransaction.ev
  "IDBTransaction Events."
  (:refer-clojure :exclude []))

(def abort
  "Event.

  The abort event is fired when an IndexedDB transaction is aborted.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/abort_event`"

  "abort")

(def complete
  "Event.

  The complete handler is executed when a transaction successfully

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/complete_event`"

  "complete")

