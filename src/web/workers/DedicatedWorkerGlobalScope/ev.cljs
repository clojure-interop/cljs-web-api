(ns web.workers.DedicatedWorkerGlobalScope.ev
  "DedicatedWorkerGlobalScope Events."
  (:refer-clojure :exclude []))

(def message
  "Event.

  Fired when the worker receives a message from its parent.
  Also available via the onmessage property."

  "message")

(def messageerror
  "Event.

  The messageerror event is fired on a `web.workers.DedicatedWorkerGlobalScope`
  when it receives a message that can't be deserialized.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event`"

  "messageerror")

