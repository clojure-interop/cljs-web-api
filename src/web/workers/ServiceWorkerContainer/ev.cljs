(ns web.workers.ServiceWorkerContainer.ev
  "ServiceWorkerContainer Events."
  (:refer-clojure :exclude []))

(def controllerchange
  "Event.

  Occurs when the document's associated ServiceWorkerRegistration
  a new active worker.
  Also available via the ServiceWorkerContainer.oncontrollerchange"

  "controllerchange")

(def message
  "Event.

  The message event is used in a page controlled by a service worker
  receive messages from the service worker.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/message_event`"

  "message")

