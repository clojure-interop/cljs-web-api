(ns web.workers.SharedWorkerGlobalScope
  "The SharedWorkerGlobalScope object (the `web.workers.SharedWorker`
  scope) is accessible through the `self` keyword. Some additional
  functions, namespaces objects, and constructors, not typically
  with the worker global scope, but available on it, are listed
  the JavaScript Reference. See the complete list of functions
  to workers."
  (:refer-clojure :exclude [name]))

(defn close
  "Method.

  The close() method of the `web.workers.SharedWorkerGlobalScope`
  discards any tasks queued in the SharedWorkerGlobalScope's event
  effectively closing this particular scope.

  `self.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/close`"
  [this ]
  (-> this (.close)))

(defn atob
  "Method.

  Decodes a string of data which has been encoded using base-64"
  [this & args]
  (apply (-> this .-atob) (concat [this] args)))

(defn name
  "Property.

  The name read-only property of the `web.workers.SharedWorkerGlobalScope`
  returns the name that the `web.workers.SharedWorker` was (optionally)
  when it was created. This is the name that the `SharedWorker()`
  can pass to get a reference to the `web.workers.SharedWorkerGlobalScope`.

  `var nameObj = self.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The name read-only property of the `web.workers.SharedWorkerGlobalScope`
  returns the name that the `web.workers.SharedWorker` was (optionally)
  when it was created. This is the name that the `SharedWorker()`
  can pass to get a reference to the `web.workers.SharedWorkerGlobalScope`.

  `var nameObj = self.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/name`"
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

(defn onconnect
  "Property.

  The onconnect property of the `web.workers.SharedWorkerGlobalScope`
  is an event handler representing the code to be called when the
  event is raised — that is, when a `web.other.MessagePort` connection
  opened between the associated `web.workers.SharedWorker` and
  main thread.

  `onconnect = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/onconnect`"
  [this]
  (-> this (.onconnect)))

(defn set-onconnect!
  "Property.

  The onconnect property of the `web.workers.SharedWorkerGlobalScope`
  is an event handler representing the code to be called when the
  event is raised — that is, when a `web.other.MessagePort` connection
  opened between the associated `web.workers.SharedWorker` and
  main thread.

  `onconnect = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/onconnect`"
  [this val]
  (aset this "onconnect" val))

(defn application-cache
  "Property.

  The applicationCache read-only property of the `web.workers.SharedWorkerGlobalScope`
  returns the `ApplicationCache` object for the worker (see Using
  application cache).

  `var nameObj = self.applicationCache;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/applicationCache`"
  [this]
  (-> this (.applicationCache)))

(defn set-application-cache!
  "Property.

  The applicationCache read-only property of the `web.workers.SharedWorkerGlobalScope`
  returns the `ApplicationCache` object for the worker (see Using
  application cache).

  `var nameObj = self.applicationCache;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/applicationCache`"
  [this val]
  (aset this "applicationCache" val))

