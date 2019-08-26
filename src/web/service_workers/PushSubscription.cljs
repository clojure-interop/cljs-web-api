(ns web.service-workers.PushSubscription
  "The PushSubscription interface of the Push API provides a subcription's
  endpoint and allows unsubscription from a push service."
  (:refer-clojure :exclude []))

(defn get-key
  "Method.

  The getKey() method of the `web.service-workers.PushSubscription`
  returns an `js.ArrayBuffer` representing a client public key,
  can then be sent to a server and used in encrypting push message

  `​var key = subscription.getKey(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/getKey`"
  [this name]
  (-> this (.getKey name)))

(defn to-json
  "Method.

  The toJSON() method of the `web.service-workers.PushSubscription`
  is a standard serializer: it returns a JSON representation of
  subscription properties, providing a useful shortcut.

  `​mySubscription = subscription.toJSON()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/toJSON`"
  [this ]
  (-> this (.toJSON)))

(defn unsubscribe
  "Method.

  The unsubscribe() method of the `web.service-workers.PushSubscription`
  returns a `js.Promise` that resolves to a `js.Boolean` when the
  subscription is successfully unsubscribed.

  `​PushSubscription.unsubscribe().then(function(Boolean) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/unsubscribe`"
  [this & args]
  (apply (-> this .-unsubscribe) (concat [this] args)))

(defn endpoint
  "Property.

  The endpoint read-only property of the `web.service-workers.PushSubscription`
  returns a `web.USVString` containing the endpoint associated
  the push subscription.

  `var myEnd = pushSubscription.endpoint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/endpoint`"
  [this]
  (-> this (.endpoint)))

(defn set-endpoint!
  "Property.

  The endpoint read-only property of the `web.service-workers.PushSubscription`
  returns a `web.USVString` containing the endpoint associated
  the push subscription.

  `var myEnd = pushSubscription.endpoint;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/endpoint`"
  [this val]
  (aset this "endpoint" val))

(defn subscription-id
  "Property.

  The endpoint read-only property of the `web.service-workers.PushSubscription`
  returns a `web.dom.DOMString` containing the subscription ID
  with the push subscription.

  `var subId = pushSubscription.subscriptionId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/subscriptionId`"
  [this]
  (-> this (.subscriptionId)))

(defn set-subscription-id!
  "Property.

  The endpoint read-only property of the `web.service-workers.PushSubscription`
  returns a `web.dom.DOMString` containing the subscription ID
  with the push subscription.

  `var subId = pushSubscription.subscriptionId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/subscriptionId`"
  [this val]
  (aset this "subscriptionId" val))

(defn expiration-time
  "Property.

  The expirationTime read-only property of the `web.service-workers.PushSubscription`
  returns a `web.dom.DOMHighResTimeStamp` of the subscription expiration
  associated with the push subscription, if there is one, or null

  `var expirationTime = pushSubscription.expirationTime`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/expirationTime`"
  [this]
  (-> this (.expirationTime)))

(defn set-expiration-time!
  "Property.

  The expirationTime read-only property of the `web.service-workers.PushSubscription`
  returns a `web.dom.DOMHighResTimeStamp` of the subscription expiration
  associated with the push subscription, if there is one, or null

  `var expirationTime = pushSubscription.expirationTime`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/expirationTime`"
  [this val]
  (aset this "expirationTime" val))

(defn options
  "Property.

  The options read-only property of the `web.service-workers.PushSubscription`
  is an object containing containing the options used to create
  subscription.

  `var options = PushSubscription.options`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/options`"
  [this]
  (-> this (.options)))

(defn set-options!
  "Property.

  The options read-only property of the `web.service-workers.PushSubscription`
  is an object containing containing the options used to create
  subscription.

  `var options = PushSubscription.options`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PushSubscription/options`"
  [this val]
  (aset this "options" val))

