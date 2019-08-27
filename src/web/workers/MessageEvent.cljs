(ns web.workers.MessageEvent
  "The MessageEvent interface represents a message received by a
  object."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The MessageEvent() constructor creates a new `web.workers.MessageEvent` object instance.

  type
  The type of MessageEvent that will be created. This can be one of XXX

  init Optional


  A dictionary object that can contain the following properties:


  data: The data you want contained in the MessageEvent. This can be of any data type, and will default to null if not specified.
  origin: A `web.USVString` representing the origin of the message emitter. This defaults to an empty string (\\\"\\\") if not specified.
  lastEventId: A `web.dom.DOMString` representing a unique ID for the event. This defaults to an empty string (\\\"\\\") if not specified.
  source: An MessageEventSource (which can be a `WindowProxy`, `web.other.MessagePort`, or `web.workers.ServiceWorker` object) representing the message emitter. This defaults to null if not set.
  ports: An array of `web.other.MessagePort` objects representing the ports associated with the channel the message is being sent through (where appropriate, e.g. in channel messaging or when sending a message to a shared worker). This defaults to an empty array ([]) if not specified.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/MessageEvent`"
  js/MessageEvent)

(defn init-message-event
  "Method.

  Initializes a message event. Do not use this anymore — use the
  constructor instead."
  [this & args]
  (-> this .-initMessageEvent (.apply this (clj->js args))))

(defn data
  "Property.

  The data read-only property of the `web.workers.MessageEvent`
  represents the data sent by the message emitter.

  `var data = messageEvent.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/data`"
  [this]
  (-> this (.-data)))

(defn set-data!
  "Property.

  The data read-only property of the `web.workers.MessageEvent`
  represents the data sent by the message emitter.

  `var data = messageEvent.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/data`"
  [this val]
  (aset this "data" val))

(defn origin
  "Property.

  The origin read-only property of the `web.workers.MessageEvent`
  is a `web.USVString` representing the origin of the message emitter.

  `var origin = messageEvent.origin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/origin`"
  [this]
  (-> this (.-origin)))

(defn set-origin!
  "Property.

  The origin read-only property of the `web.workers.MessageEvent`
  is a `web.USVString` representing the origin of the message emitter.

  `var origin = messageEvent.origin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/origin`"
  [this val]
  (aset this "origin" val))

(defn last-event-id
  "Property.

  The lastEventId read-only property of the `web.workers.MessageEvent`
  is a `web.dom.DOMString` representing a unique ID for the event.

  `var myId = messageEvent.lastEventId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/lastEventId`"
  [this]
  (-> this (.-lastEventId)))

(defn set-last-event-id!
  "Property.

  The lastEventId read-only property of the `web.workers.MessageEvent`
  is a `web.dom.DOMString` representing a unique ID for the event.

  `var myId = messageEvent.lastEventId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/lastEventId`"
  [this val]
  (aset this "lastEventId" val))

(defn source
  "Property.

  The source read-only property of the `web.workers.MessageEvent`
  is a MessageEventSource (which can be a `WindowProxy`, `web.other.MessagePort`,
  `web.workers.ServiceWorker` object) representing the message

  `let mySource = messageEvent.source;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/source`"
  [this]
  (-> this (.-source)))

(defn set-source!
  "Property.

  The source read-only property of the `web.workers.MessageEvent`
  is a MessageEventSource (which can be a `WindowProxy`, `web.other.MessagePort`,
  `web.workers.ServiceWorker` object) representing the message

  `let mySource = messageEvent.source;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/source`"
  [this val]
  (aset this "source" val))

(defn ports
  "Property.

  The ports read-only property of the `web.workers.MessageEvent`
  is an array of `web.other.MessagePort` objects representing the
  associated with the channel the message is being sent through
  appropriate, e.g. in channel messaging or when sending a message
  a shared worker).

  `var myPorts = messageEvent.ports;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/ports`"
  [this]
  (-> this (.-ports)))

(defn set-ports!
  "Property.

  The ports read-only property of the `web.workers.MessageEvent`
  is an array of `web.other.MessagePort` objects representing the
  associated with the channel the message is being sent through
  appropriate, e.g. in channel messaging or when sending a message
  a shared worker).

  `var myPorts = messageEvent.ports;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MessageEvent/ports`"
  [this val]
  (aset this "ports" val))

