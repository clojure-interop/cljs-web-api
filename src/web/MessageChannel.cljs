(ns web.MessageChannel
  "The MessageChannel interface of the Channel Messaging API allows
  to create a new message channel and send data through it via
  two `web.MessagePort` properties."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The MessageChannel() constructor of the `web.MessageChannel` interface returns a new `web.MessageChannel` object with two new `web.MessagePort` objects.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel/MessageChannel`"
  js/MessageChannel)

(defn port-1
  "Property.

  The port1 read-only property of the `web.MessageChannel` interface
  the first port of the message channel — the port attached to
  context that originated the channel.

  `channel.port1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel/port1`"
  [this]
  (-> this (.port1)))

(defn set-port-1!
  "Property.

  The port1 read-only property of the `web.MessageChannel` interface
  the first port of the message channel — the port attached to
  context that originated the channel.

  `channel.port1;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel/port1`"
  [this val]
  (aset this "port1" val))

(defn port-2
  "Property.

  The port2 read-only property of the `web.MessageChannel` interface
  the second port of the message channel — the port attached to
  context at the other end of the channel, which the message is
  sent to.

  `channel.port2;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel/port2`"
  [this]
  (-> this (.port2)))

(defn set-port-2!
  "Property.

  The port2 read-only property of the `web.MessageChannel` interface
  the second port of the message channel — the port attached to
  context at the other end of the channel, which the message is
  sent to.

  `channel.port2;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageChannel/port2`"
  [this val]
  (aset this "port2" val))

