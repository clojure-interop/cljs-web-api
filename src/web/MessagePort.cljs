(ns web.MessagePort
  "The MessagePort interface of the Channel Messaging API represents
  of the two ports of a `web.MessageChannel`, allowing messages
  be sent from one port and listening out for them arriving at
  other."
  (:refer-clojure :exclude []))

(defn close
  "Method.

  The close() method of the `web.MessagePort` interface disconnects
  port, so it is no longer active. This stops the flow of messages
  that port.

  `port.close()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/close`"
  [this ]
  (-> this (.close)))

(defn post-message
  "Method.

  The postMessage() method of the `web.MessagePort` interface sends
  message from the port, and optionally, transfers ownership of
  to other browsing contexts.

  `port.postMessage(message, transferList);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/postMessage`"
  [this message transfer-list]
  (-> this (.postMessage message transfer-list)))

(defn start
  "Method.

  The start() method of the `web.MessagePort` interface starts
  sending of messages queued on the port. This method is only needed
  using `web.EventTarget.addEventListener`; it is implied when
  `web.MessageChannel.onmessage`.

  `port.start()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/start`"
  [this ]
  (-> this (.start)))

(defn onmessage
  "Property.

  The onmessage event handler of the `web.MessagePort` interface
  an `web.EventListener`, called whenever an `web.MessageEvent`
  type message is fired on the port — that is, when the port receives
  message.

  `channel.onmessage = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/onmessage`"
  [this]
  (-> this (.onmessage)))

(defn set-onmessage!
  "Property.

  The onmessage event handler of the `web.MessagePort` interface
  an `web.EventListener`, called whenever an `web.MessageEvent`
  type message is fired on the port — that is, when the port receives
  message.

  `channel.onmessage = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/onmessage`"
  [this val]
  (aset this "onmessage" val))

(defn onmessageerror
  "Property.

  The onmessageerror event handler of the `web.MessagePort` interface
  an `web.EventListener`, called whenever an `web.MessageEvent`
  type messageerror is fired on the port—that is, when it receives
  message that cannot be deserialized.

  `port.onmessageerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/onmessageerror`"
  [this]
  (-> this (.onmessageerror)))

(defn set-onmessageerror!
  "Property.

  The onmessageerror event handler of the `web.MessagePort` interface
  an `web.EventListener`, called whenever an `web.MessageEvent`
  type messageerror is fired on the port—that is, when it receives
  message that cannot be deserialized.

  `port.onmessageerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/onmessageerror`"
  [this val]
  (aset this "onmessageerror" val))

