(ns web.ServiceWorkerGlobalScope
  "The ServiceWorkerGlobalScope interface of the ServiceWorker API
  the global execution context of a service worker."
  (:refer-clojure :exclude []))

(defn skip-waiting
  "Method.

  The ServiceWorkerGlobalScope.skipWaiting() method of the `web.ServiceWorkerGlobalScope`
  the waiting service worker to become the active service worker.

  `ServiceWorkerGlobalScope.skipWaiting().then(function() {
  //Do something
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/skipWaiting`"
  [this & args]
  (apply (-> this .-skipWaiting) (concat [this] args)))

(defn caches
  "Property.

  The `web.ServiceWorkerGlobalScope.caches` read-only property
  the `web.CacheStorage` object associated with the service worker.

  `var myCacheStorage = self.caches;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/caches`"
  [this]
  (-> this (.caches)))

(defn set-caches!
  "Property.

  The `web.ServiceWorkerGlobalScope.caches` read-only property
  the `web.CacheStorage` object associated with the service worker.

  `var myCacheStorage = self.caches;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/caches`"
  [this val]
  (aset this "caches" val))

(defn clients
  "Property.

  The clients read-only property of the `web.ServiceWorkerGlobalScope`
  returns the Clients object associated with the service worker.

  `swClients = self.clients`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/clients`"
  [this]
  (-> this (.clients)))

(defn set-clients!
  "Property.

  The clients read-only property of the `web.ServiceWorkerGlobalScope`
  returns the Clients object associated with the service worker.

  `swClients = self.clients`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/clients`"
  [this val]
  (aset this "clients" val))

(defn onactivate
  "Property.

  The onactivate property of the `web.ServiceWorkerGlobalScope`
  is an event handler fired whenever an activate event occurs (when
  service worker activates). This happens after installation, when
  page to be controlled by the service worker refreshes.

  `ServiceWorkerGlobalScope.onactivate = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onactivate`"
  [this]
  (-> this (.onactivate)))

(defn set-onactivate!
  "Property.

  The onactivate property of the `web.ServiceWorkerGlobalScope`
  is an event handler fired whenever an activate event occurs (when
  service worker activates). This happens after installation, when
  page to be controlled by the service worker refreshes.

  `ServiceWorkerGlobalScope.onactivate = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onactivate`"
  [this val]
  (aset this "onactivate" val))

(defn onfetch
  "Property.

  The onfetch property of the `web.ServiceWorkerGlobalScope` interface
  an event handler fired whenever a fetch event occurs (usually
  the `web.ServiceWorkerGlobalScope.fetch` method is called.)

  `ServiceWorkerGlobalScope.onfetch = function(FetchEvent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onfetch`"
  [this]
  (-> this (.onfetch)))

(defn set-onfetch!
  "Property.

  The onfetch property of the `web.ServiceWorkerGlobalScope` interface
  an event handler fired whenever a fetch event occurs (usually
  the `web.ServiceWorkerGlobalScope.fetch` method is called.)

  `ServiceWorkerGlobalScope.onfetch = function(FetchEvent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onfetch`"
  [this val]
  (aset this "onfetch" val))

(defn oninstall
  "Property.

  The oninstall property of the `web.ServiceWorkerGlobalScope`
  is an event handler fired whenever an install event occurs (when
  service worker installs). This happens before activation.

  `ServiceWorkerGlobalScope.oninstall = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/oninstall`"
  [this]
  (-> this (.oninstall)))

(defn set-oninstall!
  "Property.

  The oninstall property of the `web.ServiceWorkerGlobalScope`
  is an event handler fired whenever an install event occurs (when
  service worker installs). This happens before activation.

  `ServiceWorkerGlobalScope.oninstall = function(event) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/oninstall`"
  [this val]
  (aset this "oninstall" val))

(defn onmessage
  "Property.

  The ServiceWorkerGlobalScope.onmessage event of the `web.ServiceWorkerGlobalScope`
  is called whenever incoming messages are received.

  `ServiceWorkerGlobalScope.onmessage = function(MessageEvent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onmessage`"
  [this]
  (-> this (.onmessage)))

(defn set-onmessage!
  "Property.

  The ServiceWorkerGlobalScope.onmessage event of the `web.ServiceWorkerGlobalScope`
  is called whenever incoming messages are received.

  `ServiceWorkerGlobalScope.onmessage = function(MessageEvent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onmessage`"
  [this val]
  (aset this "onmessage" val))

(defn onnotificationclick
  "Property.

  The ServiceWorkerGlobalScope.onnotificationclick property is
  event handler called whenever the notificationclick event is
  on the `web.ServiceWorkerGlobalScope` object, that is when a
  clicks on a displayed notification spawned by `web.ServiceWorkerRegistration.showNotification()`.

  `ServiceWorkerGlobalScope.onnotificationclick = function(NotificationEvent) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onnotificationclick`"
  [this]
  (-> this (.onnotificationclick)))

(defn set-onnotificationclick!
  "Property.

  The ServiceWorkerGlobalScope.onnotificationclick property is
  event handler called whenever the notificationclick event is
  on the `web.ServiceWorkerGlobalScope` object, that is when a
  clicks on a displayed notification spawned by `web.ServiceWorkerRegistration.showNotification()`.

  `ServiceWorkerGlobalScope.onnotificationclick = function(NotificationEvent) { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onnotificationclick`"
  [this val]
  (aset this "onnotificationclick" val))

(defn onnotificationclose
  "Property.

  The ServiceWorkerGlobalScope.onnotificationclose property is
  event handler called whenever the notificationclose event is
  on the `web.ServiceWorkerGlobalScope` object, that is when a
  closes a displayed notification spawned by `web.ServiceWorkerRegistration.showNotification()`.

  `ServiceWorkerGlobalScope.onnotificationclose = function(NotificationEvent) { ... };
  ServiceWorkerGlobalScope.addEventListener('notificationclose', function(NotificationEvent) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onnotificationclose`"
  [this]
  (-> this (.onnotificationclose)))

(defn set-onnotificationclose!
  "Property.

  The ServiceWorkerGlobalScope.onnotificationclose property is
  event handler called whenever the notificationclose event is
  on the `web.ServiceWorkerGlobalScope` object, that is when a
  closes a displayed notification spawned by `web.ServiceWorkerRegistration.showNotification()`.

  `ServiceWorkerGlobalScope.onnotificationclose = function(NotificationEvent) { ... };
  ServiceWorkerGlobalScope.addEventListener('notificationclose', function(NotificationEvent) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onnotificationclose`"
  [this val]
  (aset this "onnotificationclose" val))

(defn onpush
  "Property.

  The ServiceWorkerGlobalScope.onpush event of the `web.ServiceWorkerGlobalScope`
  is fired whenever a push message is received by a service worker
  a push server.

  `ServiceWorkerGlobalScope.onpush = function(PushEvent) { ... }
  self.addEventListener('push', function(PushEvent) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onpush`"
  [this]
  (-> this (.onpush)))

(defn set-onpush!
  "Property.

  The ServiceWorkerGlobalScope.onpush event of the `web.ServiceWorkerGlobalScope`
  is fired whenever a push message is received by a service worker
  a push server.

  `ServiceWorkerGlobalScope.onpush = function(PushEvent) { ... }
  self.addEventListener('push', function(PushEvent) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onpush`"
  [this val]
  (aset this "onpush" val))

(defn onpushsubscriptionchange
  "Property.

  The ServiceWorkerGlobalScope.onpushsubscriptionchange event of
  `web.ServiceWorkerGlobalScope` interface is fired to indicate
  change in push subscription that was triggered outside the application's
  e.g. when browser refresh the push subscription.

  `ServiceWorkerGlobalScope.onpushsubscriptionchange = function() { ... }
  self.addEventListener('pushsubscriptionchange', function() { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onpushsubscriptionchange`"
  [this]
  (-> this (.onpushsubscriptionchange)))

(defn set-onpushsubscriptionchange!
  "Property.

  The ServiceWorkerGlobalScope.onpushsubscriptionchange event of
  `web.ServiceWorkerGlobalScope` interface is fired to indicate
  change in push subscription that was triggered outside the application's
  e.g. when browser refresh the push subscription.

  `ServiceWorkerGlobalScope.onpushsubscriptionchange = function() { ... }
  self.addEventListener('pushsubscriptionchange', function() { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/onpushsubscriptionchange`"
  [this val]
  (aset this "onpushsubscriptionchange" val))

(defn registration
  "Property.

  The registration read-only property of the `web.ServiceWorkerGlobalScope`
  returns a reference to the `web.ServiceWorkerRegistration` object,
  represents the service worker's registration.

  `serviceWorkerRegistration = self.registration`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/registration`"
  [this]
  (-> this (.registration)))

(defn set-registration!
  "Property.

  The registration read-only property of the `web.ServiceWorkerGlobalScope`
  returns a reference to the `web.ServiceWorkerRegistration` object,
  represents the service worker's registration.

  `serviceWorkerRegistration = self.registration`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/registration`"
  [this val]
  (aset this "registration" val))

