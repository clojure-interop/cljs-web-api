(ns web.MessagePort.ev
  "MessagePort Events."
  (:refer-clojure :exclude []))

(def message
  "Event.

  The message event is fired on a `web.MessagePort` object when
  message arrives on that channel.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/message_event`"

  "message")

(def messageerror
  "Event.

  The messageerror event is fired on a `web.MessagePort` object
  it receives a message that can't be deserialized.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/messageerror_event`"

  "messageerror")

