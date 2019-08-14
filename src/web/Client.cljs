(ns web.Client
  "The Client interface represents an executable context such as
  `web.Worker`, or a `web.SharedWorker`. `web.Window` clients are
  by the more-specific `web.WindowClient`. You can get Client/WindowClient
  from methods such as `web.Clients.matchAll()` and `web.Clients.get()`."
  (:refer-clojure :exclude [type]))

(defn post-message
  "Method.

  The postMessage() method of `web.Client` allows a service worker
  send a message to a client (a `web.Window`, `web.Worker`, or
  The message is received in the \\\"message\\\" event on `web.navigator.serviceWorker`.

  `Client.postMessage(message[, transfer]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/postMessage`"
  [this & args]
  (apply (-> this .-postMessage) (concat [this] args)))

(defn frame-type
  "Property.

  The frameType read-only property of the `web.Client` interface
  the type of browsing context of the current `web.Client`. This
  can be one of auxiliary, top-level, nested, or none.

  `var myFrameType = Client.frameType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/frameType`"
  [this]
  (-> this (.frameType)))

(defn set-frame-type!
  "Property.

  The frameType read-only property of the `web.Client` interface
  the type of browsing context of the current `web.Client`. This
  can be one of auxiliary, top-level, nested, or none.

  `var myFrameType = Client.frameType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/frameType`"
  [this val]
  (aset this "frameType" val))

(defn id
  "Property.

  The id read-only property of the `web.Client` interface returns
  universally unique identifier of the `web.Client` object.

  `var clientId = Client.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/id`"
  [this]
  (-> this (.id)))

(defn set-id!
  "Property.

  The id read-only property of the `web.Client` interface returns
  universally unique identifier of the `web.Client` object.

  `var clientId = Client.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/id`"
  [this val]
  (aset this "id" val))

(defn type
  "Property.

  The type read-only property of the `web.Client` interface indicates
  type of client the service worker is controlling.

  `var myClientType = Client.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The type read-only property of the `web.Client` interface indicates
  type of client the service worker is controlling.

  `var myClientType = Client.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/type`"
  [this val]
  (aset this "type" val))

(defn url
  "Property.

  The url read-only property of the `web.Client` interface returns
  URL of the current service worker client.

  `var clientUrl = Client.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/url`"
  [this]
  (-> this (.url)))

(defn set-url!
  "Property.

  The url read-only property of the `web.Client` interface returns
  URL of the current service worker client.

  `var clientUrl = Client.url;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Client/url`"
  [this val]
  (aset this "url" val))

