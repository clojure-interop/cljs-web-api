(ns web.Worker.ev
  "Worker Events."
  (:refer-clojure :exclude []))

(def message
  "Event.

  The message event is fired on a `web.Worker` object when the
  parent receives a message from its worker (i.e. when the worker
  a message using DedicatedWorkerGlobalScope.postMessage()).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/message_event`"

  "message")

(def messageerror
  "Event.

  The messageerror event is fired on a `web.Worker` object when
  receives a message that can't be deserialized.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/messageerror_event`"

  "messageerror")

