(ns web.workers.AbstractWorker
  "The AbstractWorker interface of the Web Workers API is an abstract
  that defines properties and methods that are common to all types
  worker, including not only the basic `web.workers.Worker`, but
  `web.workers.ServiceWorker` and `web.workers.SharedWorker`."
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

