(ns web.service-workers.Client
  "The Client interface represents an executable context such as
  `web.workers.Worker`, or a `web.workers.SharedWorker`. `web.Window`
  are represented by the more-specific `web.service-workers.WindowClient`.
  can get Client/WindowClient objects from methods such as `Clients.matchAll()`
  `Clients.get()`."
  (:refer-clojure :exclude [type]))

(defn post-message
  "Method.

  The postMessage() method of `web.service-workers.Client` allows
  service worker to send a message to a client (a `web.Window`,
  or `web.workers.SharedWorker`). The message is received in the
  event on `navigator.serviceWorker`.

  `Client.postMessage(message[, transfer]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/postMessage`"
  [this & args]
  (apply (-> this .-postMessage) (concat [this] args)))

(defn id
  "Property.

  The id read-only property of the `web.service-workers.Client`
  returns the universally unique identifier of the `web.service-workers.Client`

  `var clientId = Client.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/id`"
  [this]
  (-> this (.id)))

(defn set-id!
  "Property.

  The id read-only property of the `web.service-workers.Client`
  returns the universally unique identifier of the `web.service-workers.Client`

  `var clientId = Client.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/id`"
  [this val]
  (aset this "id" val))

(defn frame-type
  "Property.

  The frameType read-only property of the `web.service-workers.Client`
  indicates the type of browsing context of the current `web.service-workers.Client`.
  value can be one of auxiliary, top-level, nested, or none.

  `var myFrameType = Client.frameType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/frameType`"
  [this]
  (-> this (.frameType)))

(defn set-frame-type!
  "Property.

  The frameType read-only property of the `web.service-workers.Client`
  indicates the type of browsing context of the current `web.service-workers.Client`.
  value can be one of auxiliary, top-level, nested, or none.

  `var myFrameType = Client.frameType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/frameType`"
  [this val]
  (aset this "frameType" val))

(defn type
  "Property.

  The type read-only property of the `web.service-workers.Client`
  indicates the type of client the service worker is controlling.

  `var myClientType = Client.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The type read-only property of the `web.service-workers.Client`
  indicates the type of client the service worker is controlling.

  `var myClientType = Client.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/type`"
  [this val]
  (aset this "type" val))

(defn url
  "Property.

  The url read-only property of the `web.service-workers.Client`
  returns the URL of the current service worker client.

  `var clientUrl = Client.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/url`"
  [this]
  (-> this (.url)))

(defn set-url!
  "Property.

  The url read-only property of the `web.service-workers.Client`
  returns the URL of the current service worker client.

  `var clientUrl = Client.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/url`"
  [this val]
  (aset this "url" val))

