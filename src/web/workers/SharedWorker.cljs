(ns web.workers.SharedWorker
  "The SharedWorker interface represents a specific kind of worker
  can be accessed from several browsing contexts, such as several
  iframes or even workers. They implement an interface different
  dedicated workers and have a different global scope, `web.workers.SharedWorkerGlobalScope`."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The SharedWorker() constructor creates a `web.workers.SharedWorker` object that executes the script at the specified URL. This script must obey the same-origin policy.

  aURL
  A `web.dom.DOMString` representing the URL of the script the worker will execute. It must obey the same-origin policy.
  name Optional
  A `web.dom.DOMString` specifying an identifying name for the `web.workers.SharedWorkerGlobalScope` representing the scope of the worker, which is mainly useful for debugging purposes.
  options Optional
  An object containing option properties that can set when creating the object instance. Available properties are as follows:

  type: A `web.dom.DOMString` specifying the type of worker to create. The value can be classic or module. If not specified, the default used is classic.
  credentials: A `web.dom.DOMString` specifying the type of credentials to use for the worker. The value can be omit, same-origin, or include. If not specified, or if type is classic, the default used is omit (no credentials required).
  name: A `web.dom.DOMString` specifying an identifying name for the `web.workers.SharedWorkerGlobalScope` representing the scope of the worker, which is mainly useful for debugging purposes.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker/SharedWorker`"
  js/SharedWorker)

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

  The port property of the `web.workers.SharedWorker` interface
  a `web.other.MessagePort` object used to communicate and control
  shared worker.

  `myWorker.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker/port`"
  [this]
  (-> this (.-port)))

(defn set-port!
  "Property.

  The port property of the `web.workers.SharedWorker` interface
  a `web.other.MessagePort` object used to communicate and control
  shared worker.

  `myWorker.port;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorker/port`"
  [this val]
  (aset this "port" val))

