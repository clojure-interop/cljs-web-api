(ns web.workers.FetchEvent
  "This is the event type for fetch events dispatched on the service
  global scope. It contains information about the fetch, including
  request and how the receiver will treat the response. It provides
  `event.respondWith()` method, which allows us to provide a response
  this fetch."
  (:refer-clojure :exclude []))

(defn respond-with
  "Method.

  The respondWith() method of `web.workers.FetchEvent` prevents
  browser's default fetch handling, and allows you to provide a
  for a `web.fetch.Response` yourself.

  `fetchEvent.respondWith(
  // Promise that resolves to a Response.
  ​)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/respondWith`"
  [this & args]
  (-> this .-respondWith (.apply this (clj->js args))))

(defn wait-until
  "Method.

  The extendableEvent.waitUntil() method tells the event dispatcher
  work is ongoing. It can also be used to detect whether that work
  successful. In service workers, waitUntil() tells the browser
  work is ongoing until the promise settles, and it shouldn't terminate
  service worker if it wants that work to complete.

  `event.waitUntil(promise)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ExtendableEvent/waitUntil`"
  [this promise]
  (-> this (.waitUntil promise)))

(defn client-id
  "Property.

  [Read Only]

  The clientId read-only property of the `web.workers.FetchEvent`
  the id of the `web.service-workers.Client` that the current service
  is controlling.

  `var myClientId = FetchEvent.clientId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/clientId`"
  [this]
  (-> this (.-clientId)))

(defn preload-response
  "Property.

  [Read Only]

  The preloadResponse read-only property of the `web.workers.FetchEvent`
  returns a `js.Promise` that resolves to the navigation preload
  if navigation preload was triggered or undefined otherwise.

  `var expectedResponse = FetchEvent.preloadResponse;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/PreloadResponse`"
  [this]
  (-> this (.-PreloadResponse)))

(defn request
  "Property.

  [Read Only]

  The request read-only property of the `web.workers.FetchEvent`
  returns the `web.fetch.Request` that triggered the event handler.

  `var recentRequest = FetchEvent.request;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/request`"
  [this]
  (-> this (.-request)))

(defn replaces-client-id
  "Property.

  [Read Only]

  The replacesClientId read-only property of the `web.workers.FetchEvent`
  is the `id` of the `client` that is being replaced during a page

  `var myReplacedClientId = FetchEvent.replacesClientId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/replacesClientId`"
  [this]
  (-> this (.-replacesClientId)))

(defn resulting-client-id
  "Property.

  [Read Only]

  The resultingClientId read-only property of the `web.workers.FetchEvent`
  is the `id` of the `client` that replaces the previous client
  a page navigation.

  `var myResultingClientId = FetchEvent.resultingClientId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/resultingClientId`"
  [this]
  (-> this (.-resultingClientId)))

(defn client
  "Property.

  [Read Only]
  [Deprecated]
  [Experimental]

  The FetchEvent.client read-only property returns the `web.service-workers.Client`
  the current service worker is controlling.

  `var myClient = FetchEvent.client;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/client`"
  [this]
  (-> this (.-client)))

(defn is-reload
  "Property.

  [Read Only]
  [Experimental]

  The isReload read-only property of the `web.workers.FetchEvent`
  returns true if the event was dispatched by the user attempting
  reload the page, and false otherwise. Pressing the refresh button
  a reload while clicking a link and pressing the back button is

  `var reloaded = FetchEvent.isReload`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/isReload`"
  [this]
  (-> this (.-isReload)))

(defn navigation-preload
  "Property.

  [Read Only]
  [Experimental]

  The navigationPreload read-only property of the `web.workers.FetchEvent`
  returns a `js.Promise` that resolves to the instance of `web.service-workers.NavigationPreloadManager`
  with the current service worker registration.

  `var promise = fetchEvent.navigationPreload`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/navigationPreload`"
  [this]
  (-> this (.-navigationPreload)))

(defn preload-request
  "Property.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/PreloadRequest`"
  [this]
  (-> this (.-PreloadRequest)))

(defn set-preload-request!
  "Property.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/PreloadRequest`"
  [this val]
  (aset this "PreloadRequest" val))

