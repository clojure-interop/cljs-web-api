(ns web.PushManager
  "The PushManager interface of the Push API provides a way to receive
  from third-party servers as well as request URLs for push notifications."
  (:refer-clojure :exclude []))

(defn get-subscription
  "Method.

  The PushManager.getSubscription() method of the `web.PushManager`
  retrieves an existing push subscription.

  `​PushManager.getSubscription().then(function(pushSubscription) { ... } );`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/getSubscription`"
  [this & args]
  (apply (-> this .-getSubscription) (concat [this] args)))

(defn has-permission
  "Method.

  The PushManager.hasPermission() method of the `web.PushManager`
  returns a `web.Promise` that resolves to the PushPermissionStatus
  the requesting webapp, which will be one of granted, denied,
  default.

  `​PushManager.hasPermission().then(function(pushPermissionStatus) { ... } );`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/hasPermission`"
  [this & args]
  (apply (-> this .-hasPermission) (concat [this] args)))

(defn permission-state
  "Method.

  The permissionState() method of the `web.PushManager` interface
  a `web.Promise` that resolves to a `dom.DOMString` indicating
  permission state of the push manager. Possible values are 'prompt',
  or 'granted'.

  `PushManager.permissionState(options).then(function(PushMessagingState) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/permissionState`"
  [this options]
  (-> this (.permissionState options)))

(defn register
  "Method.

  The register method is used to ask the system to request a new
  for notifications. This method has been superceded by `web.PushManager.subscribe()`.

  `var request = navigator.push.register();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/register`"
  [this ]
  (-> this (.register)))

(defn registrations
  "Method.

  The registrations method is used to ask the system about existing
  endpoint registrations.

  `var request = navigator.push.registrations();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/registrations`"
  [this ]
  (-> this (.registrations)))

(defn subscribe
  "Method.

  The subscribe() method of the `web.PushManager` interface subscribes
  a push service.

  `​PushManager.subscribe(options).then(function(pushSubscription) { ... } );`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/subscribe`"
  [this options]
  (-> this (.subscribe options)))

(defn unregister
  "Method.

  The unregister() method was used to ask the system to unregister
  delete the specified endpoint. In the updated API, a subscription
  can be unregistered via the `web.PushSubscription.unsubscribe()`

  `var request = navigator.push.unregister(pushEndpoint);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/unregister`"
  [this push-endpoint]
  (-> this (.unregister push-endpoint)))

(defn supported-content-encodings
  "Property.

  The supportedContentEncodings read-only property of the `web.PushManager`
  returns an array of supported content codings that can be used
  encrypt the payload of a push message.

  `var encodings[] = PushManager.supportedContentEncodings`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/supportedContentEncodings`"
  [this]
  (-> this (.supportedContentEncodings)))

(defn set-supported-content-encodings!
  "Property.

  The supportedContentEncodings read-only property of the `web.PushManager`
  returns an array of supported content codings that can be used
  encrypt the payload of a push message.

  `var encodings[] = PushManager.supportedContentEncodings`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushManager/supportedContentEncodings`"
  [this val]
  (aset this "supportedContentEncodings" val))

