(ns web.deprecated.ServiceWorkerMessageEvent
  "The ServiceWorkerMessageEvent interface of the `ServiceWorker
  contains information about an event sent to a `web.workers.ServiceWorkerContainer`
  This extends the default message event to allow setting a `web.workers.ServiceWorker`
  as the source of a message. The event object is accessed via
  handler function of a message event, when fired by a message
  from a service worker."
  (:refer-clojure :exclude []))

(defn data
  "Property.

  [Read Only]
  [Deprecated]

  The data read-only property of the `web.deprecated.ServiceWorkerMessageEvent`
  returns the event's data. It can be any data type.

  `var myData = ServiceWorkerMessageEventInstance.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/data`"
  [this]
  (-> this (.-data)))

(defn origin
  "Property.

  [Read Only]
  [Deprecated]

  The origin read-only property of the `web.deprecated.ServiceWorkerMessageEvent`
  returns the origin of the service worker's environment settings

  `var myOrigin = ServiceWorkerMessageEventInstance.origin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/origin`"
  [this]
  (-> this (.-origin)))

(defn last-event-id
  "Property.

  [Read Only]
  [Deprecated]

  The lastEventID read-only property of the `web.deprecated.ServiceWorkerMessageEvent`
  represents, in server-sent events, the last event ID of the event

  `var myLastEventId = ServiceWorkerMessageEventInstance.lastEventId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/lastEventId`"
  [this]
  (-> this (.-lastEventId)))

(defn source
  "Property.

  [Read Only]
  [Deprecated]

  The source read-only property of the `web.deprecated.ServiceWorkerMessageEvent`
  a reference to the `web.workers.ServiceWorker` object of the
  service worker that sent the message.

  `var mySource = ServiceWorkerMessageEventInstance.source;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/source`"
  [this]
  (-> this (.-source)))

(defn ports
  "Property.

  [Read Only]
  [Deprecated]

  The ports read-only property of the `web.deprecated.ServiceWorkerMessageEvent`
  returns an array of `web.other.MessagePort` objects connected
  the message channel the message is being sent through.

  `var myPorts = ServiceWorkerMessageEventInstance.ports;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerMessageEvent/ports`"
  [this]
  (-> this (.-ports)))

