(ns web.workers.DedicatedWorkerGlobalScope
  "The DedicatedWorkerGlobalScope object (the `web.workers.Worker`
  scope) is accessible through the `self` keyword. Some additional
  functions, namespaces objects, and constructors, not typically
  with the worker global scope, but available on it, are listed
  the JavaScript Reference. See also: Functions available to workers."
  (:refer-clojure :exclude [name]))

(defn close
  "Method.

  The close() method of the `web.workers.DedicatedWorkerGlobalScope`
  discards any tasks queued in the DedicatedWorkerGlobalScope's
  loop, effectively closing this particular scope.

  `self.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/close`"
  [this ]
  (-> this (.close)))

(defn dump
  "Method.

  The dump() method of the `web.workers.WorkerGlobalScope` interface
  you to write a message to stdout — i.e. in your terminal, in
  only. This is the same as Firefox's `window.dump`, but for workers.

  `dump('My message\\\\n');`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/dump`"
  [this & args]
  (apply (-> this .-dump) (concat [this] args)))

(defn atob
  "Method.

  Decodes a string of data which has been encoded using base-64"
  [this & args]
  (apply (-> this .-atob) (concat [this] args)))

(defn post-message
  "Method.

  The postMessage() method of the `web.workers.DedicatedWorkerGlobalScope`
  sends a message to the main thread that spawned it. This accepts
  single parameter, which is the data to send to the worker. The
  may be any value or JavaScript object handled by the structured
  algorithm, which includes cyclical references.

  `postMessage(aMessage, transferList);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/postMessage`"
  [this a-message transfer-list]
  (-> this (.postMessage a-message transfer-list)))

(defn name
  "Property.

  The name read-only property of the `web.workers.DedicatedWorkerGlobalScope`
  returns the name that the `web.workers.Worker` was (optionally)
  when it was created. This is the name that the `Worker()` constructor
  pass to get a reference to the `web.workers.DedicatedWorkerGlobalScope`.

  `var nameObj = self.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The name read-only property of the `web.workers.DedicatedWorkerGlobalScope`
  returns the name that the `web.workers.Worker` was (optionally)
  when it was created. This is the name that the `Worker()` constructor
  pass to get a reference to the `web.workers.DedicatedWorkerGlobalScope`.

  `var nameObj = self.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/name`"
  [this val]
  (aset this "name" val))

(defn self
  "Property.

  The self read-only property of the `web.workers.WorkerGlobalScope`
  returns a reference to the WorkerGlobalScope itself. Most of
  time it is a specific scope like `web.workers.DedicatedWorkerGlobalScope`,
  or `web.workers.ServiceWorkerGlobalScope`.

  `var selfRef = self;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self`"
  [this]
  (-> this (.self)))

(defn set-self!
  "Property.

  The self read-only property of the `web.workers.WorkerGlobalScope`
  returns a reference to the WorkerGlobalScope itself. Most of
  time it is a specific scope like `web.workers.DedicatedWorkerGlobalScope`,
  or `web.workers.ServiceWorkerGlobalScope`.

  `var selfRef = self;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self`"
  [this val]
  (aset this "self" val))

(defn onmessage
  "Property.

  The onmessage property of the `web.workers.DedicatedWorkerGlobalScope`
  represents an `EventHandler` to be called when the message event
  and bubbles through the `web.workers.Worker` — i.e. when a message
  sent to the worker using the `Worker.postMessage` method.

  `self.onmessage = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessage`"
  [this]
  (-> this (.onmessage)))

(defn set-onmessage!
  "Property.

  The onmessage property of the `web.workers.DedicatedWorkerGlobalScope`
  represents an `EventHandler` to be called when the message event
  and bubbles through the `web.workers.Worker` — i.e. when a message
  sent to the worker using the `Worker.postMessage` method.

  `self.onmessage = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessage`"
  [this val]
  (aset this "onmessage" val))

(defn onmessageerror
  "Property.

  The onmessageerror event handler of the `web.workers.DedicatedWorkerGlobalScope`
  is an `web.EventListener`, called whenever an `web.workers.MessageEvent`
  type messageerror is fired on the worker—that is, when it receives
  message that cannot be deserialized.

  `onmessageerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessageerror`"
  [this]
  (-> this (.onmessageerror)))

(defn set-onmessageerror!
  "Property.

  The onmessageerror event handler of the `web.workers.DedicatedWorkerGlobalScope`
  is an `web.EventListener`, called whenever an `web.workers.MessageEvent`
  type messageerror is fired on the worker—that is, when it receives
  message that cannot be deserialized.

  `onmessageerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessageerror`"
  [this val]
  (aset this "onmessageerror" val))

