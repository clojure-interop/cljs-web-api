(ns web.workers.ServiceWorkerGlobalScope.ev
  "ServiceWorkerGlobalScope Events."
  (:refer-clojure :exclude []))

(def activate
  "Event.

  Occurs when a ServiceWorkerRegistration acquires a new ServiceWorkerRegistration.active
  Also available via the ServiceWorkerGlobalScope.onactivate property."

  "activate")

(def fetch
  "Event.

  Occurs when a fetch() is called.
  Also available via the ServiceWorkerGlobalScope.onfetch property."

  "fetch")

(def install
  "Event.

  Occurs when a ServiceWorkerRegistration acquires a new ServiceWorkerRegistration.installing
  Also available via the ServiceWorkerGlobalScope.oninstall property."

  "install")

(def message
  "Event.

  Occurs when incoming messages are received. Controlled pages
  use the MessagePort.postMessage() method to send messages to
  workers. The service worker can optionally send a response back
  the MessagePort exposed in event.data.port, corresponding to
  controlled page.
  Also available via the ServiceWorkerGlobalScope.onmessage property."

  "message")

(def notificationclick
  "Event.

  Occurs when a user clicks on a displayed notification.
  Also available via the ServiceWorkerGlobalScope.onnotificationclick"

  "notificationclick")

(def notificationclose
  "Event.

  Occurs — when a user closes a displayed notification.
  Also available via the ServiceWorkerGlobalScope.onnotificationclose"

  "notificationclose")

(def push
  "Event.

  Occurs when a server push notification is received.
  Also available via the ServiceWorkerGlobalScope.onpush property."

  "push")

(def pushsubscriptionchange
  "Event.

  Occurs when a push subscription has been invalidated, or is about
  be invalidated (e.g. when a push service sets an expiration time).
  Also available via the ServiceWorkerGlobalScope.onpushsubscriptionchange"

  "pushsubscriptionchange")

(def sync
  "Event.

  Triggered when a call to SyncManager.register is made from a
  worker client page. The attempt to sync is made either immediately
  the network is available or as soon as the network becomes available.
  Also available via the ServiceWorkerGlobalScope.onsync property."

  "sync")

