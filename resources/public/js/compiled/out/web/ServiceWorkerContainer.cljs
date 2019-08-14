(ns web.ServiceWorkerContainer
  "The ServiceWorkerContainer interface of the ServiceWorker API
  an object representing the service worker as an overall unit
  the network ecosystem, including facilities to register, unregister
  update service workers, and access the state of service workers
  their registrations."
  (:refer-clojure :exclude []))

(defn get-registration
  "Method.

  The getRegistration() method of the `web.ServiceWorkerContainer`
  gets a `web.ServiceWorkerRegistration` object whose scope URL
  the provided document URL. The method returns a Promise that
  to a `web.ServiceWorkerRegistration` or undefined.

  `ServiceWorkerContainer.getRegistration(scope).then(function(ServiceWorkerRegistration) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/getRegistration`"
  [this scope]
  (-> this (.getRegistration scope)))

(defn get-registrations
  "Method.

  The getRegistrations() method of the `web.ServiceWorkerContainer`
  returns all `web.ServiceWorkerRegistration`s associated with
  ServiceWorkerContainer in an array. If the method can't return
  it returns a `web.Promise`.

  `ServiceWorkerContainer.getRegistrations().then(function(ServiceWorkerRegistrations) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/getRegistrations`"
  [this & args]
  (apply (-> this .-getRegistrations) (concat [this] args)))

(defn register
  "Method.

  The register() method of the `web.ServiceWorkerContainer` interface
  or updates a `web.ServiceWorkerRegistration` for the given scriptURL.

  `ServiceWorkerContainer.register(scriptURL, options)
  .then(function(ServiceWorkerRegistration) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/register`"
  [this & args]
  (apply (-> this .-register) (concat [this] args)))

(defn start-messages
  "Method.

  The startMessages() method of the `web.ServiceWorkerContainer`
  explicitly starts the flow of messages being dispatched from
  service worker to pages under its control (e.g. sent via `web.Client.postMessage()`).
  can be used to react to sent messages earlier, even before that
  content has finished loading.

  `ServiceWorkerContainer.startMessages();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/startMessages`"
  [this ]
  (-> this (.startMessages)))

(defn controller
  "Property.

  The controller read-only property of the `web.ServiceWorkerContainer`
  returns a `web.ServiceWorker` object if its state is activated
  same object returned by `web.ServiceWorkerRegistration.active`).
  property returns null if the request is a force refresh (Shift
  or if there is no active worker.

  `var myController = navigator.serviceWorker.controller;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/controller`"
  [this]
  (-> this (.controller)))

(defn set-controller!
  "Property.

  The controller read-only property of the `web.ServiceWorkerContainer`
  returns a `web.ServiceWorker` object if its state is activated
  same object returned by `web.ServiceWorkerRegistration.active`).
  property returns null if the request is a force refresh (Shift
  or if there is no active worker.

  `var myController = navigator.serviceWorker.controller;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/controller`"
  [this val]
  (aset this "controller" val))

(defn oncontrollerchange
  "Property.

  The oncontrollerchange property of the `web.ServiceWorkerContainer`
  is an event handler fired whenever a controllerchange event occurs
  when the document's associated `web.ServiceWorkerRegistration`
  a new `web.ServiceWorkerRegistration.active` worker.

  `ServiceWorkerContainer.oncontrollerchange = function(controllerchangeevent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/oncontrollerchange`"
  [this]
  (-> this (.oncontrollerchange)))

(defn set-oncontrollerchange!
  "Property.

  The oncontrollerchange property of the `web.ServiceWorkerContainer`
  is an event handler fired whenever a controllerchange event occurs
  when the document's associated `web.ServiceWorkerRegistration`
  a new `web.ServiceWorkerRegistration.active` worker.

  `ServiceWorkerContainer.oncontrollerchange = function(controllerchangeevent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/oncontrollerchange`"
  [this val]
  (aset this "oncontrollerchange" val))

(defn onerror
  "Property.

  The onerror property of the `web.ServiceWorkerContainer` interface
  an event handler fired whenever an error event occurs in the
  service workers.

  `ServiceWorkerContainer.onerror = function(errorevent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.

  The onerror property of the `web.ServiceWorkerContainer` interface
  an event handler fired whenever an error event occurs in the
  service workers.

  `ServiceWorkerContainer.onerror = function(errorevent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onmessage
  "Property.

  The onmessage property of the `web.ServiceWorkerContainer` interface
  an event handler fired whenever a message event occurs — when
  messages are received to the `web.ServiceWorkerContainer` object
  via a `web.MessagePort.postMessage()` call).

  `ServiceWorkerContainer.onmessage = function(messageevent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/onmessage`"
  [this]
  (-> this (.onmessage)))

(defn set-onmessage!
  "Property.

  The onmessage property of the `web.ServiceWorkerContainer` interface
  an event handler fired whenever a message event occurs — when
  messages are received to the `web.ServiceWorkerContainer` object
  via a `web.MessagePort.postMessage()` call).

  `ServiceWorkerContainer.onmessage = function(messageevent) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/onmessage`"
  [this val]
  (aset this "onmessage" val))

(defn ready
  "Property.

  The ready read-only property of the `web.ServiceWorkerContainer`
  provides a way of delaying code execution until a service worker
  active. It returns a `web.Promise` that will never reject, and
  waits indefinitely until the `web.ServiceWorkerRegistration`
  with the current page has an `web.active` worker. Once that condition
  met, it resolves with the `web.ServiceWorkerRegistration`.

  `navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready`"
  [this]
  (-> this (.ready)))

(defn set-ready!
  "Property.

  The ready read-only property of the `web.ServiceWorkerContainer`
  provides a way of delaying code execution until a service worker
  active. It returns a `web.Promise` that will never reject, and
  waits indefinitely until the `web.ServiceWorkerRegistration`
  with the current page has an `web.active` worker. Once that condition
  met, it resolves with the `web.ServiceWorkerRegistration`.

  `navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorkerContainer/ready`"
  [this val]
  (aset this "ready" val))

