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

  The messageerror event is fired on a `web.broadcast.BroadcastChannel`
  when a message arrives on the channel that can't be deserialized.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/messageerror_event`"

  "messageerror")

