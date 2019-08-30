(ns web.workers.MessageEvent
  "The MessageEvent interface represents a message received by a
  object."
  (:refer-clojure :exclude []))

(defn init-message-event
  "Method.

  Initializes a message event. Do not use this anymore — use the
  constructor instead."
  [this & args]
  (-> this .-initMessageEvent (.apply this (clj->js args))))

(defn data
  "Property.

  [Read Only]

  The data read-only property of the `web.workers.MessageEvent`
  represents the data sent by the message emitter.

  `var data = messageEvent.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/data`"
  [this]
  (-> this (.-data)))

(defn origin
  "Property.

  [Read Only]

  The origin read-only property of the `web.workers.MessageEvent`
  is a `web.USVString` representing the origin of the message emitter.

  `var origin = messageEvent.origin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/origin`"
  [this]
  (-> this (.-origin)))

(defn last-event-id
  "Property.

  [Read Only]

  The lastEventId read-only property of the `web.workers.MessageEvent`
  is a `web.dom.DOMString` representing a unique ID for the event.

  `var myId = messageEvent.lastEventId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/lastEventId`"
  [this]
  (-> this (.-lastEventId)))

(defn source
  "Property.

  [Read Only]

  The source read-only property of the `web.workers.MessageEvent`
  is a MessageEventSource (which can be a `WindowProxy`, `web.other.MessagePort`,
  `web.workers.ServiceWorker` object) representing the message

  `let mySource = messageEvent.source;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/source`"
  [this]
  (-> this (.-source)))

(defn ports
  "Property.

  [Read Only]

  The ports read-only property of the `web.workers.MessageEvent`
  is an array of `web.other.MessagePort` objects representing the
  associated with the channel the message is being sent through
  appropriate, e.g. in channel messaging or when sending a message
  a shared worker).

  `var myPorts = messageEvent.ports;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/ports`"
  [this]
  (-> this (.-ports)))

