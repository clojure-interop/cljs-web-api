(ns web.workers.SharedWorker
  "The SharedWorker interface represents a specific kind of worker
  can be accessed from several browsing contexts, such as several
  iframes or even workers. They implement an interface different
  dedicated workers and have a different global scope, `web.workers.SharedWorkerGlobalScope`."
  (:refer-clojure :exclude []))

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

(defn port
  "Property.

  [Read Only]

  The port property of the `web.workers.SharedWorker` interface
  a `web.other.MessagePort` object used to communicate and control
  shared worker.

  `myWorker.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker/port`"
  [this]
  (-> this (.-port)))

