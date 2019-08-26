(ns web.broadcast.BroadcastChannel.ev
  "BroadcastChannel Events."
  (:refer-clojure :exclude []))

(def message
  "Event.

  Fired when when a message arrives on the channel.
  Also available via the onmessage property."

  "message")

(def messageerror
  "Event.

  Fired when a message arrives that can't be deserialized.
  Also available via the onmessageerror property."

  "messageerror")

