(ns web.workers.ServiceWorker
  "The ServiceWorker interface of the ServiceWorker API provides
  reference to a service worker. Multiple browsing contexts (e.g.
  workers, etc.) can be associated with the same service worker,
  through a unique ServiceWorker object."
  (:refer-clojure :exclude []))

(defn script-url
  "Property.

  Returns the ServiceWorker serialized script URL defined as part
  ServiceWorkerRegistration. Must be on the same origin as the
  that registers the ServiceWorker.

  `someURL = ServiceWorker.scriptURL`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker/scriptURL`"
  [this]
  (-> this (.scriptURL)))

(defn set-script-url!
  "Property.

  Returns the ServiceWorker serialized script URL defined as part
  ServiceWorkerRegistration. Must be on the same origin as the
  that registers the ServiceWorker.

  `someURL = ServiceWorker.scriptURL`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker/scriptURL`"
  [this val]
  (aset this "scriptURL" val))

(defn onstatechange
  "Property.

  An `web.EventListener` property called whenever an event of type
  is fired; it is basically fired anytime the `ServiceWorker.state`

  `ServiceWorker.onstatechange = function(statechangeevent) { ... }
  ServiceWorker.addEventListener('statechange', function(statechangeevent) { ... } )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker/onstatechange`"
  [this]
  (-> this (.onstatechange)))

(defn set-onstatechange!
  "Property.

  An `web.EventListener` property called whenever an event of type
  is fired; it is basically fired anytime the `ServiceWorker.state`

  `ServiceWorker.onstatechange = function(statechangeevent) { ... }
  ServiceWorker.addEventListener('statechange', function(statechangeevent) { ... } )`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker/onstatechange`"
  [this val]
  (aset this "onstatechange" val))

(defn onerror
  "Property.

  The AbstractWorker.onerror property of the `web.workers.AbstractWorker`
  represents an `EventHandler`, that is a function to be called
  the error event occurs and bubbles through the `web.workers.Worker`.

  `myWorker.onerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbstractWorker/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.

  The AbstractWorker.onerror property of the `web.workers.AbstractWorker`
  represents an `EventHandler`, that is a function to be called
  the error event occurs and bubbles through the `web.workers.Worker`.

  `myWorker.onerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbstractWorker/onerror`"
  [this val]
  (aset this "onerror" val))

(defn state
  "Property.

  The state read-only property of the `web.workers.ServiceWorker`
  returns a string representing the current state of the service
  It can be one of the following values: installing, installed,
  activated, or redundant.

  `someURL = ServiceWorker.state`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker/state`"
  [this]
  (-> this (.state)))

(defn set-state!
  "Property.

  The state read-only property of the `web.workers.ServiceWorker`
  returns a string representing the current state of the service
  It can be one of the following values: installing, installed,
  activated, or redundant.

  `someURL = ServiceWorker.state`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ServiceWorker/state`"
  [this val]
  (aset this "state" val))

