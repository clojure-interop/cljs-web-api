(ns web.broadcast.BroadcastChannel
  "The BroadcastChannel interface represents a named channel that
  browsing context of a given origin can subscribe to. It allows
  between different documents (in different windows, tabs, frames
  iframes) of the same origin. Messages are broadcasted via a message
  fired at all BroadcastChannel objects listening to the channel."
  (:refer-clojure :exclude [name]))

(def constructor
  "Constructor.

  The BroadcastChannel() constructor creates a new `web.broadcast.BroadcastChannel` and connects it to the underlying channel.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/BroadcastChannel`"
  js/BroadcastChannel)

(defn post-message
  "Method.

  The BroadcastChannel.postMessage() sends a message, which can
  of any kind of `js.Object`, to each listener in any browsing
  with the same origin. The message is transmitted as a message
  targeted at each BroadcastChannel bound to the channel.

  `var str = channel.postMessage(object);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/postMessage`"
  [this object]
  (-> this (.postMessage object)))

(defn close
  "Method.

  The BroadcastChannel.close() terminates the connection to the
  channel, allowing the object to be garbage collected. This is
  necessary step to perform as there is no other way for a browser
  know that this channel is not needed anymore.

  `var str = channel.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/close`"
  [this ]
  (-> this (.close)))

(defn name
  "Property.

  The read-only BroadcastChannel.name property returns a `web.dom.DOMString`,
  uniquely identifies the given channel with its name. This name
  passed to the `BroadcastChannel()` constructor at creation time
  is therefore read-only.

  `var str = channel.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/name`"
  [this]
  (-> this (.-name)))

(defn event-handler
  "Property.

  BroadcastChannel.onmessageerror"
  [this]
  (-> this (.-EventHandler)))

(defn set-event-handler!
  "Property.

  BroadcastChannel.onmessageerror"
  [this val]
  (aset this "EventHandler" val))

(defn onmessage
  "Property.

  The BroadcastChannel.onmessage event handler is a property that
  the function to execute when a message event, of type `web.workers.MessageEvent`,
  received by this `web.broadcast.BroadcastChannel`. Such an event
  sent by the browser with a message broadcasted to the channel.

  `channel.onmessage = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/onmessage`"
  [this]
  (-> this (.-onmessage)))

(defn set-onmessage!
  "Property.

  The BroadcastChannel.onmessage event handler is a property that
  the function to execute when a message event, of type `web.workers.MessageEvent`,
  received by this `web.broadcast.BroadcastChannel`. Such an event
  sent by the browser with a message broadcasted to the channel.

  `channel.onmessage = function;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/onmessage`"
  [this val]
  (aset this "onmessage" val))

(defn onmessageerror
  "Property.

  The onmessageerror event handler of the `web.broadcast.BroadcastChannel`
  is an `web.EventListener`, called whenever an `web.workers.MessageEvent`
  type messageerror is fired on the BroadcastChannel instance —
  is, when it receives a message that cannot be deserialized.

  `bc.onmessageerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/onmessageerror`"
  [this]
  (-> this (.-onmessageerror)))

(defn set-onmessageerror!
  "Property.

  The onmessageerror event handler of the `web.broadcast.BroadcastChannel`
  is an `web.EventListener`, called whenever an `web.workers.MessageEvent`
  type messageerror is fired on the BroadcastChannel instance —
  is, when it receives a message that cannot be deserialized.

  `bc.onmessageerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel/onmessageerror`"
  [this val]
  (aset this "onmessageerror" val))

