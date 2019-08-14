(ns web.DedicatedWorkerGlobalScope.ev
  "DedicatedWorkerGlobalScope Events."
  (:refer-clojure :exclude []))

(def message
  "Event.

  The message event is fired on a `web.DedicatedWorkerGlobalScope`
  when the worker receives a message from its parent (i.e. when
  parent sends a message using Worker.postMessage()).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/message_event`"

  "message")

(def messageerror
  "Event.

  The messageerror event is fired on a `web.DedicatedWorkerGlobalScope`
  when it receives a message that can't be deserialized.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event`"

  "messageerror")

