(ns web.storage.IDBRequest.ev
  "IDBRequest Events."
  (:refer-clojure :exclude []))

(def error
  "Event.

  The error handler is executed when an error caused a request
  fail.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/error_event`"

  "error")

(def success
  "Event.

  The success event is fired when an IDBRequest succeeds.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IDBRequest/success_event`"

  "success")

