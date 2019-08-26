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

  Fired when a worker receives a message that can't be deserialized.
  Also available via the onmessageerror property."

  "messageerror")

