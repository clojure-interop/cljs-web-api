(ns web.ServiceWorkerMessageEvent
  "The ServiceWorkerMessageEvent interface of the `web.ServiceWorker
  contains information about an event sent to a `web.ServiceWorkerContainer`
  This extends the default message event to allow setting a `web.ServiceWorker`
  as the source of a message. The event object is accessed via
  handler function of a message event, when fired by a message
  from a service worker."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ServiceWorkerMessageEvent() constructor creates a new `web.ServiceWorkerMessageEvent` object instance.

  type
  A `dom.DOMString` that defines the type of the message event being created.
  init Optional
  An initialisation object, which should contain the following parameters:

  data: The event's data — this can be any type.
  origin: A `dom.DOMString` that defines the origin of the corresponding service worker's environment settings object.
  lastEventId: A `dom.DOMString` that defines the last event ID of the event source.
  source: The `web.ServiceWorker` or `web.MessagePort` that sent the message.
  ports: An array containing the `web.MessagePort` objects connected to the channel sending the message.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/ServiceWorkerMessageEvent`"
  js/ServiceWorkerMessageEvent)

(defn data
  "Property.

  The data read-only property of the `web.ServiceWorkerMessageEvent`
  returns the event's data. It can be any data type.

  `var myData = ServiceWorkerMessageEventInstance.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/data`"
  [this]
  (-> this (.data)))

(defn set-data!
  "Property.

  The data read-only property of the `web.ServiceWorkerMessageEvent`
  returns the event's data. It can be any data type.

  `var myData = ServiceWorkerMessageEventInstance.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/data`"
  [this val]
  (aset this "data" val))

(defn last-event-id
  "Property.

  The lastEventID read-only property of the `web.ServiceWorkerMessageEvent`
  represents, in server-sent events, the last event ID of the event

  `var myLastEventId = ServiceWorkerMessageEventInstance.lastEventId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/lastEventId`"
  [this]
  (-> this (.lastEventId)))

(defn set-last-event-id!
  "Property.

  The lastEventID read-only property of the `web.ServiceWorkerMessageEvent`
  represents, in server-sent events, the last event ID of the event

  `var myLastEventId = ServiceWorkerMessageEventInstance.lastEventId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/lastEventId`"
  [this val]
  (aset this "lastEventId" val))

(defn origin
  "Property.

  The origin read-only property of the `web.ServiceWorkerMessageEvent`
  returns the origin of the service worker's environment settings

  `var myOrigin = ServiceWorkerMessageEventInstance.origin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/origin`"
  [this]
  (-> this (.origin)))

(defn set-origin!
  "Property.

  The origin read-only property of the `web.ServiceWorkerMessageEvent`
  returns the origin of the service worker's environment settings

  `var myOrigin = ServiceWorkerMessageEventInstance.origin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/origin`"
  [this val]
  (aset this "origin" val))

(defn ports
  "Property.

  The ports read-only property of the `web.ServiceWorkerMessageEvent`
  returns an array of `web.MessagePort` objects connected with
  message channel the message is being sent through.

  `var myPorts = ServiceWorkerMessageEventInstance.ports;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/ports`"
  [this]
  (-> this (.ports)))

(defn set-ports!
  "Property.

  The ports read-only property of the `web.ServiceWorkerMessageEvent`
  returns an array of `web.MessagePort` objects connected with
  message channel the message is being sent through.

  `var myPorts = ServiceWorkerMessageEventInstance.ports;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/ports`"
  [this val]
  (aset this "ports" val))

(defn source
  "Property.

  The source read-only property of the `web.ServiceWorkerMessageEvent`
  a reference to the `web.ServiceWorker` object of the associated
  worker that sent the message.

  `var mySource = ServiceWorkerMessageEventInstance.source;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/source`"
  [this]
  (-> this (.source)))

(defn set-source!
  "Property.

  The source read-only property of the `web.ServiceWorkerMessageEvent`
  a reference to the `web.ServiceWorker` object of the associated
  worker that sent the message.

  `var mySource = ServiceWorkerMessageEventInstance.source;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/source`"
  [this val]
  (aset this "source" val))

