(ns web.workers.Worker
  "The Worker interface of the Web Workers API represents a background
  that can be easily created and can send messages back to its
  Creating a worker is as simple as calling the Worker() constructor
  specifying a script to be run in the worker thread."
  (:refer-clojure :exclude []))

(defn post-message
  "Method.

  The postMessage() method of the `web.workers.Worker` interface
  a message to the worker's inner scope. This accepts a single
  which is the data to send to the worker. The data may be any
  or JavaScript object handled by the structured clone algorithm,
  includes cyclical references.

  `worker.postMessage(message, [transfer]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/postMessage`"
  [this & args]
  (-> this .-postMessage (.apply this (clj->js args))))

(defn terminate
  "Method.

  The terminate() method of the `web.workers.Worker` interface
  terminates the `web.workers.Worker`. This does not offer the
  an opportunity to finish its operations; it is simply stopped
  once.

  `myWorker.terminate();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/terminate`"
  [this ]
  (-> this (.terminate)))

(defn onerror
  "Property.

  The AbstractWorker.onerror property of the `web.workers.AbstractWorker`
  represents an `EventHandler`, that is a function to be called
  the error event occurs and bubbles through the `web.workers.Worker`.

  `myWorker.onerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbstractWorker/onerror`"
  [this]
  (-> this (.-onerror)))

(defn set-onerror!
  "Property.

  The AbstractWorker.onerror property of the `web.workers.AbstractWorker`
  represents an `EventHandler`, that is a function to be called
  the error event occurs and bubbles through the `web.workers.Worker`.

  `myWorker.onerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbstractWorker/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onmessage
  "Property.

  The onmessage property of the `web.workers.Worker` interface
  an `EventHandler`, that is a function to be called when the message
  occurs. These events are of type `web.workers.MessageEvent` and
  be called when the worker's parent receives a message (i.e. from
  `DedicatedWorkerGlobalScope.postMessage` method).

  `myWorker.onmessage = function(e) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/onmessage`"
  [this]
  (-> this (.-onmessage)))

(defn set-onmessage!
  "Property.

  The onmessage property of the `web.workers.Worker` interface
  an `EventHandler`, that is a function to be called when the message
  occurs. These events are of type `web.workers.MessageEvent` and
  be called when the worker's parent receives a message (i.e. from
  `DedicatedWorkerGlobalScope.postMessage` method).

  `myWorker.onmessage = function(e) { ... }`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/onmessage`"
  [this val]
  (aset this "onmessage" val))

(defn onmessageerror
  "Property.

  The onmessageerror event handler of the `web.workers.Worker`
  is an `web.EventListener`, called whenever an `web.workers.MessageEvent`
  type messageerror is fired on the Worker instance — that is,
  it receives a message that cannot be deserialized.

  `Worker.onmessageerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/onmessageerror`"
  [this]
  (-> this (.-onmessageerror)))

(defn set-onmessageerror!
  "Property.

  The onmessageerror event handler of the `web.workers.Worker`
  is an `web.EventListener`, called whenever an `web.workers.MessageEvent`
  type messageerror is fired on the Worker instance — that is,
  it receives a message that cannot be deserialized.

  `Worker.onmessageerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worker/onmessageerror`"
  [this val]
  (aset this "onmessageerror" val))

