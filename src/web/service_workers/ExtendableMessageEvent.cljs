(ns web.service-workers.ExtendableMessageEvent
  "The ExtendableMessageEvent interface of the `ServiceWorker API`
  the event object of a message event fired on a service worker
  a channel message is received on the `web.workers.ServiceWorkerGlobalScope`
  another context) — extends the lifetime of such events."
  (:refer-clojure :exclude []))

(defn data
  "Property.

  [Read Only]

  The data read-only property of the `web.service-workers.ExtendableMessageEvent`
  returns the event's data. It can be any data type.

  `var myData = ExtendableMessageEventInstance.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/data`"
  [this]
  (-> this (.-data)))

(defn origin
  "Property.

  [Read Only]

  The origin read-only property of the `web.service-workers.ExtendableMessageEvent`
  returns the origin of the `ServiceWorkerClient` that sent the

  `var myOrigin = ExtendableMessageEventInstance.origin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/origin`"
  [this]
  (-> this (.-origin)))

(defn last-event-id
  "Property.

  [Read Only]

  The lastEventID read-only property of the `web.service-workers.ExtendableMessageEvent`
  represents, in server-sent events, the last event ID of the event

  `var myLastEventId = ExtendableMessageEventInstance.lastEventId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/lastEventId`"
  [this]
  (-> this (.-lastEventId)))

(defn source
  "Property.

  [Read Only]

  The source read-only property of the `web.service-workers.ExtendableMessageEvent`
  a reference to the `web.service-workers.Client` object from which
  message was sent.

  `var mySource = ExtendableMessageEventInstance.source;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/source`"
  [this]
  (-> this (.-source)))

(defn ports
  "Property.

  [Read Only]

  The ports read-only property of the `web.service-workers.ExtendableMessageEvent`
  returns the array containing the `web.other.MessagePort` objects
  the ports of the associated message channel (the channel the
  is being sent through.)

  `var myPorts = ExtendableMessageEventInstance.ports;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableMessageEvent/ports`"
  [this]
  (-> this (.-ports)))

