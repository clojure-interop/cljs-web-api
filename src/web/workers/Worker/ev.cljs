(ns web.workers.Worker.ev
  "Worker Events."
  (:refer-clojure :exclude []))

(def message
  "Event.

  Fired when the worker's parent receives a message from its worker.
  Also available via the onmessage property."

  "message")

(def messageerror
  "Event.

  Fired when a Worker object receives a message that can't be deserialized.
  Also available via the onmessageerror property."

  "messageerror")

(def rejectionhandled
  "Event.

  Sent every time a JavaScript Promise is rejected, regardless
  whether or not there is a handler in place to catch the rejection.
  Also available through the onrejectionhandled event handler"

  "rejectionhandled")

(def unhandledrejection
  "Event.

  Sent when a JavaScript Promise is rejected but there is no handler
  place to catch the rejection.
  Also available using the onunhandledrejection event handler"

  "unhandledrejection")

