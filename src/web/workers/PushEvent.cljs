(ns web.workers.PushEvent
  "The PushEvent interface of the Push API represents a push message
  has been received. This event is sent to the global scope of
  `web.workers.ServiceWorker`. It contains the information sent
  an application server to a `web.service-workers.PushSubscription`."
  (:refer-clojure :exclude []))

(defn data
  "Property.

  [Read Only]
  [Experimental]

  The data read-only property of the PushEvent interface returns
  reference to a `web.service-workers.PushMessageData` object containing
  sent to the `web.service-workers.PushSubscription`.

  `var myPushData = PushEvent.data;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushEvent/data`"
  [this]
  (-> this (.-data)))

