(ns web.other.MessagePort.ev
  "MessagePort Events."
  (:refer-clojure :exclude []))

(def message
  "Event.

  Fired when a MessagePort object receives a message.
  Also available via the onmessage property."

  "message")

(def messageerror
  "Event.

  Fired when a MessagePort object receives a message that can't
  deserialized.
  Also available via the onmessageerror property."

  "messageerror")

