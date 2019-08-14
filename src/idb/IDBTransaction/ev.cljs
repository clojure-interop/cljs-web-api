(ns idb.IDBTransaction.ev
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

(def error
  "Event.

  The error event is fired on IDBTransaction when a request returns
  error and the event bubbles up to the transaction object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBTransaction/error_event`"

  "error")

