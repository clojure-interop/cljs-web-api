(ns web.workers.ServiceWorkerGlobalScope.ev
  "ServiceWorkerGlobalScope Events."
  (:refer-clojure :exclude []))

(def activate
  "Event.

  Occurs when a ServiceWorkerRegistration acquires a new ServiceWorkerRegistration.active
  Also available via the ServiceWorkerGlobalScope.onactivate property."

  "activate")

(def message
  "Event.

  In thie example a page gets a handle to the `web.workers.ServiceWorker`
  via `ServiceWorkerRegistration.active`, and then calls its postMessage

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerGlobalScope/message_event`"

  "message")

