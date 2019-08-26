(ns web.workers.ServiceWorkerContainer.ev
  "ServiceWorkerContainer Events."
  (:refer-clojure :exclude []))

(def controllerchange
  "Event.

  Occurs when the document's associated ServiceWorkerRegistration
  a new active worker.
  Also available via the ServiceWorkerContainer.oncontrollerchange"

  "controllerchange")

(def error
  "Event.

  Fired whenever an error occurs in the associated service workers.
  Also available via the ServiceWorkerContainer.onerror property."

  "error")

(def message
  "Event.

  Occurs when incoming messages are received by the ServiceWorkerContainer
  (e.g. via a MessagePort.postMessage() call.)
  Also available via the ServiceWorkerContainer.onmessage property."

  "message")

