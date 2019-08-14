(ns web.Clients
  "The Clients interface provides access to `web.Client` objects.
  it via `web.self`.clients within a service worker."
  (:refer-clojure :exclude [get]))

(defn claim
  "Method.

  The claim() method of the `web.Clients` allows an active service
  to set itself as the `web.controller` for all clients within
  `web.scope`. This triggers a \\\"controllerchange\\\" event on `web.navigator.serviceWorker`
  any clients that become controlled by this service worker.

  `await clients.claim();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim`"
  [this ]
  (-> this (.claim)))

(defn get
  "Method.

  The get() method of the `web.Clients` interface gets a service
  client matching a given id and returns it in a `web.Promise`.

  `self.clients.get(id).then(function(client) {
  // do something with your returned client
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clients/get`"
  [this & args]
  (apply (-> this .-get) (concat [this] args)))

(defn match-all
  "Method.

  The matchAll() method of the `web.Clients` interface returns
  Promise for a list of service worker `web.Client` objects. Include
  options parameter to return all service worker clients whose
  is the same as the associated service worker's origin. If options
  not included, the method returns only the service worker clients
  by the service worker.

  `ServiceWorkerClients.matchAll(options).then(function(clients) {
  // do something with your clients list
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clients/matchAll`"
  [this & args]
  (apply (-> this .-matchAll) (concat [this] args)))

(defn open-window
  "Method.

  The openWindow() method of the `web.Clients` interface creates
  new top level browsing context and loads a given URL. If the
  script doesn't have permission to show popups, openWindow() will
  an InvalidAccessError.

  `ServiceWorkerClients.openWindow(url).then(function(WindowClient) {
  // Do something with your WindowClient
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clients/openWindow`"
  [this & args]
  (apply (-> this .-openWindow) (concat [this] args)))

