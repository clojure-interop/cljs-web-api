(ns web.workers.ServiceWorkerContainer
  "The ServiceWorkerContainer interface of the ServiceWorker API
  an object representing the service worker as an overall unit
  the network ecosystem, including facilities to register, unregister
  update service workers, and access the state of service workers
  their registrations."
  (:refer-clojure :exclude []))

(defn register
  "Method.

  The register() method of the `web.workers.ServiceWorkerContainer`
  creates or updates a `web.workers.ServiceWorkerRegistration`
  the given scriptURL.

  `ServiceWorkerContainer.register(scriptURL, options)
  .then(function(ServiceWorkerRegistration) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register`"
  [this & args]
  (apply (-> this .-register) (concat [this] args)))

(defn get-registration
  "Method.

  The getRegistration() method of the `web.workers.ServiceWorkerContainer`
  gets a `web.workers.ServiceWorkerRegistration` object whose scope
  matches the provided document URL. The method returns a Promise
  resolves to a `web.workers.ServiceWorkerRegistration` or undefined.

  `ServiceWorkerContainer.getRegistration(scope).then(function(ServiceWorkerRegistration) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/getRegistration`"
  [this scope]
  (-> this (.getRegistration scope)))

(defn get-registrations
  "Method.

  The getRegistrations() method of the `web.workers.ServiceWorkerContainer`
  returns all `web.workers.ServiceWorkerRegistration`s associated
  a ServiceWorkerContainer in an array. If the method can't return
  it returns a `js.Promise`.

  `ServiceWorkerContainer.getRegistrations().then(function(ServiceWorkerRegistrations) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/getRegistrations`"
  [this & args]
  (apply (-> this .-getRegistrations) (concat [this] args)))

(defn start-messages
  "Method.

  The startMessages() method of the `web.workers.ServiceWorkerContainer`
  explicitly starts the flow of messages being dispatched from
  service worker to pages under its control (e.g. sent via `Client.postMessage()`).
  can be used to react to sent messages earlier, even before that
  content has finished loading.

  `ServiceWorkerContainer.startMessages();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/startMessages`"
  [this ]
  (-> this (.startMessages)))

(defn controller
  "Property.

  The controller read-only property of the `web.workers.ServiceWorkerContainer`
  returns a `web.workers.ServiceWorker` object if its state is
  (the same object returned by `ServiceWorkerRegistration.active`).
  property returns null if the request is a force refresh (Shift
  or if there is no active worker.

  `var myController = navigator.serviceWorker.controller;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/controller`"
  [this]
  (-> this (.-controller)))

(defn set-controller!
  "Property.

  The controller read-only property of the `web.workers.ServiceWorkerContainer`
  returns a `web.workers.ServiceWorker` object if its state is
  (the same object returned by `ServiceWorkerRegistration.active`).
  property returns null if the request is a force refresh (Shift
  or if there is no active worker.

  `var myController = navigator.serviceWorker.controller;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/controller`"
  [this val]
  (aset this "controller" val))

(defn ready
  "Property.

  The ready read-only property of the `web.workers.ServiceWorkerContainer`
  provides a way of delaying code execution until a service worker
  active. It returns a `js.Promise` that will never reject, and
  waits indefinitely until the `web.workers.ServiceWorkerRegistration`
  with the current page has an `active` worker. Once that condition
  met, it resolves with the `web.workers.ServiceWorkerRegistration`.

  `navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready`"
  [this]
  (-> this (.-ready)))

(defn set-ready!
  "Property.

  The ready read-only property of the `web.workers.ServiceWorkerContainer`
  provides a way of delaying code execution until a service worker
  active. It returns a `js.Promise` that will never reject, and
  waits indefinitely until the `web.workers.ServiceWorkerRegistration`
  with the current page has an `active` worker. Once that condition
  met, it resolves with the `web.workers.ServiceWorkerRegistration`.

  `navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready`"
  [this val]
  (aset this "ready" val))

(defn oncontrollerchange
  "Property.

  The oncontrollerchange property of the `web.workers.ServiceWorkerContainer`
  is an event handler fired whenever a controllerchange event occurs
  when the document's associated `web.workers.ServiceWorkerRegistration`
  a new `ServiceWorkerRegistration.active` worker.

  `ServiceWorkerContainer.oncontrollerchange = function(controllerchangeevent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/oncontrollerchange`"
  [this]
  (-> this (.-oncontrollerchange)))

(defn set-oncontrollerchange!
  "Property.

  The oncontrollerchange property of the `web.workers.ServiceWorkerContainer`
  is an event handler fired whenever a controllerchange event occurs
  when the document's associated `web.workers.ServiceWorkerRegistration`
  a new `ServiceWorkerRegistration.active` worker.

  `ServiceWorkerContainer.oncontrollerchange = function(controllerchangeevent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/oncontrollerchange`"
  [this val]
  (aset this "oncontrollerchange" val))

(defn onerror
  "Property.

  The onerror property of the `web.workers.ServiceWorkerContainer`
  is an event handler fired whenever an error event occurs in the
  service workers.

  `ServiceWorkerContainer.onerror = function(errorevent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/onerror`"
  [this]
  (-> this (.-onerror)))

(defn set-onerror!
  "Property.

  The onerror property of the `web.workers.ServiceWorkerContainer`
  is an event handler fired whenever an error event occurs in the
  service workers.

  `ServiceWorkerContainer.onerror = function(errorevent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onmessage
  "Property.

  The onmessage property of the `web.workers.ServiceWorkerContainer`
  is an event handler fired whenever a message event occurs — when
  messages are received to the `web.workers.ServiceWorkerContainer`
  (e.g., via a `MessagePort.postMessage()` call).

  `ServiceWorkerContainer.onmessage = function(messageevent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/onmessage`"
  [this]
  (-> this (.-onmessage)))

(defn set-onmessage!
  "Property.

  The onmessage property of the `web.workers.ServiceWorkerContainer`
  is an event handler fired whenever a message event occurs — when
  messages are received to the `web.workers.ServiceWorkerContainer`
  (e.g., via a `MessagePort.postMessage()` call).

  `ServiceWorkerContainer.onmessage = function(messageevent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/onmessage`"
  [this val]
  (aset this "onmessage" val))

