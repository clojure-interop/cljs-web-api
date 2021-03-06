(ns web.service-workers.PushManager
  "The PushManager interface of the Push API provides a way to receive
  from third-party servers as well as request URLs for push notifications."
  (:refer-clojure :exclude []))

(defn get-subscription
  "Method.

  [Experimental]

  The PushManager.getSubscription() method of the `web.service-workers.PushManager`
  retrieves an existing push subscription.

  `​PushManager.getSubscription().then(function(pushSubscription) { ... } );`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/getSubscription`"
  [this & args]
  (-> this .-getSubscription (.apply this (clj->js args))))

(defn permission-state
  "Method.

  [Experimental]

  The permissionState() method of the `web.service-workers.PushManager`
  returns a `js.Promise` that resolves to a `web.dom.DOMString`
  the permission state of the push manager. Possible values are
  'denied', or 'granted'.

  `PushManager.permissionState(options).then(function(PushMessagingState) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/permissionState`"
  [this options]
  (-> this (.permissionState options)))

(defn subscribe
  "Method.

  [Experimental]

  The subscribe() method of the `web.service-workers.PushManager`
  subscribes to a push service.

  `​PushManager.subscribe(options).then(function(pushSubscription) { ... } );`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/subscribe`"
  [this options]
  (-> this (.subscribe options)))

(defn has-permission
  "Method.

  [Deprecated]

  The PushManager.hasPermission() method of the `web.service-workers.PushManager`
  returns a `js.Promise` that resolves to the PushPermissionStatus
  the requesting webapp, which will be one of granted, denied,
  default.

  `​PushManager.hasPermission().then(function(pushPermissionStatus) { ... } );`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/hasPermission`"
  [this & args]
  (-> this .-hasPermission (.apply this (clj->js args))))

(defn register
  "Method.

  [Deprecated]

  The register method is used to ask the system to request a new
  for notifications. This method has been superceded by `PushManager.subscribe()`.

  `var request = navigator.push.register();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/register`"
  [this ]
  (-> this (.register)))

(defn registrations
  "Method.

  [Deprecated]

  The registrations method is used to ask the system about existing
  endpoint registrations.

  `var request = navigator.push.registrations();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/registrations`"
  [this ]
  (-> this (.registrations)))

(defn unregister
  "Method.

  [Deprecated]

  The unregister() method was used to ask the system to unregister
  delete the specified endpoint. In the updated API, a subscription
  can be unregistered via the `PushSubscription.unsubscribe()`

  `var request = navigator.push.unregister(pushEndpoint);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/unregister`"
  [this push-endpoint]
  (-> this (.unregister push-endpoint)))

(defn supported-content-encodings
  "Property.

  [Read Only]
  [Experimental]

  The supportedContentEncodings read-only property of the `web.service-workers.PushManager`
  returns an array of supported content codings that can be used
  encrypt the payload of a push message.

  `var encodings[] = PushManager.supportedContentEncodings`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/supportedContentEncodings`"
  [this]
  (-> this (.-supportedContentEncodings)))

