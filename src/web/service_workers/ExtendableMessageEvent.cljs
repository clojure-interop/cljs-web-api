(ns web.service-workers.ExtendableMessageEvent
  "The ExtendableMessageEvent interface of the `ServiceWorker API`
  the event object of a message event fired on a service worker
  a channel message is received on the `web.workers.ServiceWorkerGlobalScope`
  another context) — extends the lifetime of such events."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ExtendableMessageEvent() constructor creates a new `web.service-workers.ExtendableMessageEvent` object instance.

  type
  A `web.dom.DOMString` that defines the type of the message event being created.
  init Optional
  An initialisation object, which should contain the following parameters:

  data: The event's data — this can be any type.
  origin: A `web.dom.DOMString` that defines the origin of the corresponding service worker's environment settings object.
  lastEventId: A `web.dom.DOMString` that defines the last event ID of the event source.
  source: The `web.service-workers.Client`, `web.workers.ServiceWorker` or `web.other.MessagePort` that sent the message.
  ports: An array containing the `web.other.MessagePort` objects connected to the channel sending the message.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/ExtendableMessageEvent`"
  js/ExtendableMessageEvent)

(defn data
  "Property.

  The data read-only property of the `web.service-workers.ExtendableMessageEvent`
  returns the event's data. It can be any data type.

  `var myData = ExtendableMessageEventInstance.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/data`"
  [this]
  (-> this (.-data)))

(defn set-data!
  "Property.

  The data read-only property of the `web.service-workers.ExtendableMessageEvent`
  returns the event's data. It can be any data type.

  `var myData = ExtendableMessageEventInstance.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/data`"
  [this val]
  (aset this "data" val))

(defn origin
  "Property.

  The origin read-only property of the `web.service-workers.ExtendableMessageEvent`
  returns the origin of the `ServiceWorkerClient` that sent the

  `var myOrigin = ExtendableMessageEventInstance.origin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/origin`"
  [this]
  (-> this (.-origin)))

(defn set-origin!
  "Property.

  The origin read-only property of the `web.service-workers.ExtendableMessageEvent`
  returns the origin of the `ServiceWorkerClient` that sent the

  `var myOrigin = ExtendableMessageEventInstance.origin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/origin`"
  [this val]
  (aset this "origin" val))

(defn last-event-id
  "Property.

  The lastEventID read-only property of the `web.service-workers.ExtendableMessageEvent`
  represents, in server-sent events, the last event ID of the event

  `var myLastEventId = ExtendableMessageEventInstance.lastEventId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/lastEventId`"
  [this]
  (-> this (.-lastEventId)))

(defn set-last-event-id!
  "Property.

  The lastEventID read-only property of the `web.service-workers.ExtendableMessageEvent`
  represents, in server-sent events, the last event ID of the event

  `var myLastEventId = ExtendableMessageEventInstance.lastEventId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/lastEventId`"
  [this val]
  (aset this "lastEventId" val))

(defn source
  "Property.

  The source read-only property of the `web.service-workers.ExtendableMessageEvent`
  a reference to the `web.service-workers.Client` object from which
  message was sent.

  `var mySource = ExtendableMessageEventInstance.source;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/source`"
  [this]
  (-> this (.-source)))

(defn set-source!
  "Property.

  The source read-only property of the `web.service-workers.ExtendableMessageEvent`
  a reference to the `web.service-workers.Client` object from which
  message was sent.

  `var mySource = ExtendableMessageEventInstance.source;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/source`"
  [this val]
  (aset this "source" val))

(defn ports
  "Property.

  The ports read-only property of the `web.service-workers.ExtendableMessageEvent`
  returns the array containing the `web.other.MessagePort` objects
  the ports of the associated message channel (the channel the
  is being sent through.)

  `var myPorts = ExtendableMessageEventInstance.ports;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/ports`"
  [this]
  (-> this (.-ports)))

(defn set-ports!
  "Property.

  The ports read-only property of the `web.service-workers.ExtendableMessageEvent`
  returns the array containing the `web.other.MessagePort` objects
  the ports of the associated message channel (the channel the
  is being sent through.)

  `var myPorts = ExtendableMessageEventInstance.ports;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/ports`"
  [this val]
  (aset this "ports" val))

