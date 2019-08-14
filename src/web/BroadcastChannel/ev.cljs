(ns web.BroadcastChannel.ev
  "BroadcastChannel Events."
  (:refer-clojure :exclude []))

(def message
  "Event.

  The message event is fired on a `web.BroadcastChannel` object
  a message arrives on that channel.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/message_event`"

  "message")

(def messageerror
  "Event.

  The messageerror event is fired on a `web.BroadcastChannel` object
  a message arrives on the channel that can't be deserialized.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/messageerror_event`"

  "messageerror")

