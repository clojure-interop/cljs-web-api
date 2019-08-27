(ns web.workers.Clients
  "The Clients interface provides access to `web.service-workers.Client`
  Access it via `self`.clients within a service worker."
  (:refer-clojure :exclude [get]))

(defn get
  "Method.

  The get() method of the `web.workers.Clients` interface gets
  service worker client matching a given id and returns it in a

  `self.clients.get(id).then(function(client) {
  // do something with your returned client
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clients/get`"
  [this & args]
  (-> this .-get (.apply this (clj->js args))))

(defn match-all
  "Method.

  The matchAll() method of the `web.workers.Clients` interface
  a Promise for a list of service worker `web.service-workers.Client`
  Include the options parameter to return all service worker clients
  origin is the same as the associated service worker's origin.
  options are not included, the method returns only the service
  clients controlled by the service worker.

  `ServiceWorkerClients.matchAll(options).then(function(clients) {
  // do something with your clients list
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clients/matchAll`"
  [this & args]
  (-> this .-matchAll (.apply this (clj->js args))))

(defn open-window
  "Method.

  The openWindow() method of the `web.workers.Clients` interface
  a new top level browsing context and loads a given URL. If the
  script doesn't have permission to show popups, openWindow() will
  an InvalidAccessError.

  `ServiceWorkerClients.openWindow(url).then(function(WindowClient) {
  // Do something with your WindowClient
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clients/openWindow`"
  [this & args]
  (-> this .-openWindow (.apply this (clj->js args))))

(defn claim
  "Method.

  The claim() method of the `web.workers.Clients` allows an active
  worker to set itself as the `controller` for all clients within
  `scope`. This triggers a \\\"controllerchange\\\" event on `navigator.serviceWorker`
  any clients that become controlled by this service worker.

  `await clients.claim();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Clients/claim`"
  [this ]
  (-> this (.claim)))

