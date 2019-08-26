(ns web.workers.Worker.ev
  "Worker Events."
  (:refer-clojure :exclude []))

(def message
  "Event.

  Fired when the worker's parent receives a message from its worker.
  Also available via the onmessage property."

  "message")

(def rejectionhandled
  "Event.

  Sent every time a JavaScript Promise is rejected, regardless
  whether or not there is a handler in place to catch the rejection.
  Also available through the onrejectionhandled event handler"

  "rejectionhandled")

(def messageerror
  "Event.

  The messageerror event is fired on a `web.workers.Worker` object
  it receives a message that can't be deserialized.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/messageerror_event`"

  "messageerror")

