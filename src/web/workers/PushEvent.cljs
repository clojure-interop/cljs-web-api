(ns web.workers.PushEvent
  "The PushEvent interface of the Push API represents a push message
  has been received. This event is sent to the global scope of
  `web.workers.ServiceWorker`. It contains the information sent
  an application server to a `web.service-workers.PushSubscription`."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The PushEvent() constructor creates a new `web.workers.PushEvent` object. Note that the this constructor is exposed only to a service worker context.

  type
  \\tA `web.dom.DOMString` defining the type of PushEvent. This can be push or pushsubscriptionchange.
  \\teventInitDict Optional
  \\tAn options object containing any initialization data you want to populate the PushEvent object with. The options are:

  \\t\\tdata: The data you want the PushEvent to contain, if any. When the constructor is invoked, the `PushEvent.data` property of the resulting object will be set to a new `web.service-workers.PushMessageData` object containing bytes extracted from the eventInitDict data member.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushEvent/PushEvent`"
  js/PushEvent)

(defn data
  "Property.

  The data read-only property of the PushEvent interface returns
  reference to a `web.service-workers.PushMessageData` object containing
  sent to the `web.service-workers.PushSubscription`.

  `var myPushData = PushEvent.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushEvent/data`"
  [this]
  (-> this (.data)))

(defn set-data!
  "Property.

  The data read-only property of the PushEvent interface returns
  reference to a `web.service-workers.PushMessageData` object containing
  sent to the `web.service-workers.PushSubscription`.

  `var myPushData = PushEvent.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushEvent/data`"
  [this val]
  (aset this "data" val))

