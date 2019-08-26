(ns web.workers.ServiceWorkerRegistration
  "The ServiceWorkerRegistration interface of the ServiceWorker
  represents the service worker registration. You register a service
  to control one or more pages that share the same origin."
  (:refer-clojure :exclude [update]))

(defn get-notifications
  "Method.

  The getNotifications() method of the `web.workers.ServiceWorkerRegistration`
  returns a list of the notifications in the order that they were
  from the current origin via the current service worker registration.
  can have many active but differently-scoped service worker registrations.
  created by one service worker on the same origin will not be
  to other active services workers on that same origin.

  `​ServiceWorkerRegistration.getNotifications(options)
  .then(function(NotificationsList) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/getNotifications`"
  [this & args]
  (apply (-> this .-getNotifications) (concat [this] args)))

(defn show-notification
  "Method.

  The showNotification() method of the `web.workers.ServiceWorkerRegistration`
  creates a notification on an active service worker.

  `​ServiceWorkerRegistration.showNotification(title, [options]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/showNotification`"
  [this & args]
  (apply (-> this .-showNotification) (concat [this] args)))

(defn update
  "Method.

  The update method of the `web.workers.ServiceWorkerRegistration`
  attempts to update the service worker. It fetches the worker's
  URL, and if the new worker is not byte-by-byte identical to the
  worker, it installs the new worker. The fetch of the worker bypasses
  browser caches if the previous fetch occurred over 24 hours ago.

  `ServiceWorkerRegistration.update();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/update`"
  [this ]
  (-> this (.update)))

(defn unregister
  "Method.

  The unregister method of the `web.workers.ServiceWorkerRegistration`
  unregisters the service worker registration and returns a `js.Promise`.
  promise will resolve to false if no registration was found, otherwise
  resolves to true irrespective of whether unregistration happened
  not (it may not unregister if someone else just called `ServiceWorkerContainer.register`
  the same scope.) The service worker will finish any ongoing operations
  it is unregistered.

  `ServiceWorkerRegistration.unregister().then(function(boolean) {
  });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/unregister`"
  [this & args]
  (apply (-> this .-unregister) (concat [this] args)))

(defn scope
  "Property.

  The scope read-only property of the `web.workers.ServiceWorkerRegistration`
  returns a unique identifier for a service worker registration.
  service worker must be on the same origin as the document that
  the ServiceWorker.

  `swScope = ServiceWorkerRegistration.scope;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/scope`"
  [this]
  (-> this (.-scope)))

(defn set-scope!
  "Property.

  The scope read-only property of the `web.workers.ServiceWorkerRegistration`
  returns a unique identifier for a service worker registration.
  service worker must be on the same origin as the document that
  the ServiceWorker.

  `swScope = ServiceWorkerRegistration.scope;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/scope`"
  [this val]
  (aset this "scope" val))

(defn installing
  "Property.

  The installing property of the `web.workers.ServiceWorkerRegistration`
  returns a service worker whose `ServiceWorker.state` is installing.
  property is initially set to null.

  `sw = ServiceWorker.installing`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/installing`"
  [this]
  (-> this (.-installing)))

(defn set-installing!
  "Property.

  The installing property of the `web.workers.ServiceWorkerRegistration`
  returns a service worker whose `ServiceWorker.state` is installing.
  property is initially set to null.

  `sw = ServiceWorker.installing`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/installing`"
  [this val]
  (aset this "installing" val))

(defn waiting
  "Property.

  The waiting property of the `web.workers.ServiceWorkerRegistration`
  returns a service worker whose `ServiceWorker.state` is installed.
  property is initially set to null.

  `var serviceWorker = ServiceWorker.waiting`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/waiting`"
  [this]
  (-> this (.-waiting)))

(defn set-waiting!
  "Property.

  The waiting property of the `web.workers.ServiceWorkerRegistration`
  returns a service worker whose `ServiceWorker.state` is installed.
  property is initially set to null.

  `var serviceWorker = ServiceWorker.waiting`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/waiting`"
  [this val]
  (aset this "waiting" val))

(defn active
  "Property.

  The active property of the `web.workers.ServiceWorkerRegistration`
  returns a service worker whose `ServiceWorker.state` is activating
  activated. This property is initially set to null.

  `sw = ServiceWorker.active`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/active`"
  [this]
  (-> this (.-active)))

(defn set-active!
  "Property.

  The active property of the `web.workers.ServiceWorkerRegistration`
  returns a service worker whose `ServiceWorker.state` is activating
  activated. This property is initially set to null.

  `sw = ServiceWorker.active`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/active`"
  [this val]
  (aset this "active" val))

(defn navigation-preload
  "Property.

  The navigationPreload read-only property of the `web.workers.ServiceWorkerRegistration`
  returns the `web.service-workers.NavigationPreloadManager` associated
  the current service worker registration.

  `var navigationPreloadManager = serviceWorkerRegistration.navigationPreload`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/navigationPreload`"
  [this]
  (-> this (.-navigationPreload)))

(defn set-navigation-preload!
  "Property.

  The navigationPreload read-only property of the `web.workers.ServiceWorkerRegistration`
  returns the `web.service-workers.NavigationPreloadManager` associated
  the current service worker registration.

  `var navigationPreloadManager = serviceWorkerRegistration.navigationPreload`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/navigationPreload`"
  [this val]
  (aset this "navigationPreload" val))

(defn push-manager
  "Property.

  The pushManager property of the `web.workers.ServiceWorkerRegistration`
  returns a reference to the `web.service-workers.PushManager`
  for managing push subscriptions; this includes support for subscribing,
  an active subscription, and accessing push permission status.

  `myPushManager = ServiceWorker.pushManager`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/pushManager`"
  [this]
  (-> this (.-pushManager)))

(defn set-push-manager!
  "Property.

  The pushManager property of the `web.workers.ServiceWorkerRegistration`
  returns a reference to the `web.service-workers.PushManager`
  for managing push subscriptions; this includes support for subscribing,
  an active subscription, and accessing push permission status.

  `myPushManager = ServiceWorker.pushManager`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/pushManager`"
  [this val]
  (aset this "pushManager" val))

(defn sync
  "Property.

  The sync property of the `web.workers.ServiceWorkerRegistration`
  returns a reference to the `web.service-workers.SyncManager`
  which manages background synchronization processes.

  `mySyncManager = ServiceWorker.sync`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/sync`"
  [this]
  (-> this (.-sync)))

(defn set-sync!
  "Property.

  The sync property of the `web.workers.ServiceWorkerRegistration`
  returns a reference to the `web.service-workers.SyncManager`
  which manages background synchronization processes.

  `mySyncManager = ServiceWorker.sync`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/sync`"
  [this val]
  (aset this "sync" val))

(defn periodic-sync
  "Property.

  The periodicSync read-only property of the `web.workers.ServiceWorkerRegistration`
  returns a reference to the `PeriodicSyncManager` interface, which
  periodic background synchronization processes.

  `myPeriodicSync = ServiceWorker.periodicSync`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/periodicSync`"
  [this]
  (-> this (.-periodicSync)))

(defn set-periodic-sync!
  "Property.

  The periodicSync read-only property of the `web.workers.ServiceWorkerRegistration`
  returns a reference to the `PeriodicSyncManager` interface, which
  periodic background synchronization processes.

  `myPeriodicSync = ServiceWorker.periodicSync`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/periodicSync`"
  [this val]
  (aset this "periodicSync" val))

(defn onupdatefound
  "Property.

  The onupdatefound property of the `web.workers.ServiceWorkerRegistration`
  is an EventListener property called whenever an event of type
  is fired; it is fired any time the ServiceWorkerRegistration.installing
  acquires a new service worker.

  `ServiceWorkerRegistration.onupdatefound = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/onupdatefound`"
  [this]
  (-> this (.-onupdatefound)))

(defn set-onupdatefound!
  "Property.

  The onupdatefound property of the `web.workers.ServiceWorkerRegistration`
  is an EventListener property called whenever an event of type
  is fired; it is fired any time the ServiceWorkerRegistration.installing
  acquires a new service worker.

  `ServiceWorkerRegistration.onupdatefound = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerRegistration/onupdatefound`"
  [this val]
  (aset this "onupdatefound" val))

