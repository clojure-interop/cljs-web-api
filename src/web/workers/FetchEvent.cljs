(ns web.workers.FetchEvent
  "This is the event type for fetch events dispatched on the service
  global scope. It contains information about the fetch, including
  request and how the receiver will treat the response. It provides
  `event.respondWith()` method, which allows us to provide a response
  this fetch."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The FetchEvent() constructor creates a new `web.workers.FetchEvent` object.

  type
  The type of the Event.
  init Optional
  An options object containing any custom settings that you want to apply to the event object. Options are as follows:

  request: The `web.fetch.Request` object that would have triggered the event handler.
  clientId: The `web.service-workers.Client` that the current service worker is controlling. This property is not yet implemented in Chrome.
  isReload: A `js.Boolean` that signifies whether the page was reloaded or not when the event was dispatched. true if yes, and false if not. Typically, pressing the refresh button in a browser is a reload, while clicking a link and pressing the back button is not. If not present, it defaults to false.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/FetchEvent`"
  js/FetchEvent)

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
  (apply (-> this .-respondWith) (concat [this] args)))

(defn client-id
  "Property.

  The clientId read-only property of the `web.workers.FetchEvent`
  the id of the `web.service-workers.Client` that the current service
  is controlling.

  `var myClientId = FetchEvent.clientId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/clientId`"
  [this]
  (-> this (.clientId)))

(defn set-client-id!
  "Property.

  The clientId read-only property of the `web.workers.FetchEvent`
  the id of the `web.service-workers.Client` that the current service
  is controlling.

  `var myClientId = FetchEvent.clientId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/clientId`"
  [this val]
  (aset this "clientId" val))

(defn client
  "Property.

  The FetchEvent.client read-only property returns the `web.service-workers.Client`
  the current service worker is controlling.

  `var myClient = FetchEvent.client;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/client`"
  [this]
  (-> this (.client)))

(defn set-client!
  "Property.

  The FetchEvent.client read-only property returns the `web.service-workers.Client`
  the current service worker is controlling.

  `var myClient = FetchEvent.client;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/client`"
  [this val]
  (aset this "client" val))

(defn is-reload
  "Property.

  The isReload read-only property of the `web.workers.FetchEvent`
  returns true if the event was dispatched by the user attempting
  reload the page, and false otherwise. Pressing the refresh button
  a reload while clicking a link and pressing the back button is

  `var reloaded = FetchEvent.isReload`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/isReload`"
  [this]
  (-> this (.isReload)))

(defn set-is-reload!
  "Property.

  The isReload read-only property of the `web.workers.FetchEvent`
  returns true if the event was dispatched by the user attempting
  reload the page, and false otherwise. Pressing the refresh button
  a reload while clicking a link and pressing the back button is

  `var reloaded = FetchEvent.isReload`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/isReload`"
  [this val]
  (aset this "isReload" val))

(defn navigation-preload
  "Property.

  The navigationPreload read-only property of the `web.workers.FetchEvent`
  returns a `js.Promise` that resolves to the instance of `web.service-workers.NavigationPreloadManager`
  with the current service worker registration.

  `var promise = fetchEvent.navigationPreload`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/navigationPreload`"
  [this]
  (-> this (.navigationPreload)))

(defn set-navigation-preload!
  "Property.

  The navigationPreload read-only property of the `web.workers.FetchEvent`
  returns a `js.Promise` that resolves to the instance of `web.service-workers.NavigationPreloadManager`
  with the current service worker registration.

  `var promise = fetchEvent.navigationPreload`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/navigationPreload`"
  [this val]
  (aset this "navigationPreload" val))

(defn preload-request
  "Property.



  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/PreloadRequest`"
  [this]
  (-> this (.PreloadRequest)))

(defn set-preload-request!
  "Property.



  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/PreloadRequest`"
  [this val]
  (aset this "PreloadRequest" val))

(defn preload-response
  "Property.

  The preloadResponse read-only property of the `web.workers.FetchEvent`
  returns a `js.Promise` that resolves to the navigation preload
  if navigation preload was triggered or undefined otherwise.

  `var expectedResponse = FetchEvent.preloadResponse;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/PreloadResponse`"
  [this]
  (-> this (.PreloadResponse)))

(defn set-preload-response!
  "Property.

  The preloadResponse read-only property of the `web.workers.FetchEvent`
  returns a `js.Promise` that resolves to the navigation preload
  if navigation preload was triggered or undefined otherwise.

  `var expectedResponse = FetchEvent.preloadResponse;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/PreloadResponse`"
  [this val]
  (aset this "PreloadResponse" val))

(defn replaces-client-id
  "Property.

  The replacesClientId read-only property of the `web.workers.FetchEvent`
  is the `id` of the `client` that is being replaced during a page

  `var myReplacedClientId = FetchEvent.replacesClientId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/replacesClientId`"
  [this]
  (-> this (.replacesClientId)))

(defn set-replaces-client-id!
  "Property.

  The replacesClientId read-only property of the `web.workers.FetchEvent`
  is the `id` of the `client` that is being replaced during a page

  `var myReplacedClientId = FetchEvent.replacesClientId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/replacesClientId`"
  [this val]
  (aset this "replacesClientId" val))

(defn request
  "Property.

  The request read-only property of the `web.workers.FetchEvent`
  returns the `web.fetch.Request` that triggered the event handler.

  `var recentRequest = FetchEvent.request;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/request`"
  [this]
  (-> this (.request)))

(defn set-request!
  "Property.

  The request read-only property of the `web.workers.FetchEvent`
  returns the `web.fetch.Request` that triggered the event handler.

  `var recentRequest = FetchEvent.request;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/request`"
  [this val]
  (aset this "request" val))

(defn resulting-client-id
  "Property.

  The resultingClientId read-only property of the `web.workers.FetchEvent`
  is the `id` of the `client` that replaces the previous client
  a page navigation.

  `var myResultingClientId = FetchEvent.resultingClientId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/resultingClientId`"
  [this]
  (-> this (.resultingClientId)))

(defn set-resulting-client-id!
  "Property.

  The resultingClientId read-only property of the `web.workers.FetchEvent`
  is the `id` of the `client` that replaces the previous client
  a page navigation.

  `var myResultingClientId = FetchEvent.resultingClientId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FetchEvent/resultingClientId`"
  [this val]
  (aset this "resultingClientId" val))

