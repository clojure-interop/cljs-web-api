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

(defn dump
  "Method.

  [Non Standard]

  The dump() method of the `web.workers.WorkerGlobalScope` interface
  you to write a message to stdout — i.e. in your terminal, in
  only. This is the same as Firefox's `window.dump`, but for workers.

  `dump('My message\\\\n');`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/dump`"
  [this & args]
  (-> this .-dump (.apply this (clj->js args))))

(defn import-scripts
  "Method.

  The importScripts() method of the `web.workers.WorkerGlobalScope`
  synchronously imports one or more scripts into the worker's scope.

  `self.importScripts('foo.js');
  self.importScripts('foo.js', 'bar.js', ...);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts`"
  [this & args]
  (-> this .-importScripts (.apply this (clj->js args))))

(defn atob
  "Method.

  Decodes a string of data which has been encoded using base-64"
  [this & args]
  (-> this .-atob (.apply this (clj->js args))))

(defn btoa
  "Method.

  Creates a base-64 encoded ASCII string from a string of binary"
  [this & args]
  (-> this .-btoa (.apply this (clj->js args))))

(defn clear-interval
  "Method.

  Cancels the repeated execution set using WindowTimers.setInterval()."
  [this & args]
  (-> this .-clearInterval (.apply this (clj->js args))))

(defn clear-timeout
  "Method.

  Cancels the repeated execution set using WindowTimers.setTimeout()."
  [this & args]
  (-> this .-clearTimeout (.apply this (clj->js args))))

(defn set-interval
  "Method.

  Schedules the execution of a function every X milliseconds."
  [this & args]
  (-> this .-setInterval (.apply this (clj->js args))))

(defn set-timeout
  "Method.

  Sets a delay for executing a function."
  [this & args]
  (-> this .-setTimeout (.apply this (clj->js args))))

(defn name
  "Property.

  [Read Only]

  The name read-only property of the `web.workers.SharedWorkerGlobalScope`
  returns the name that the `web.workers.SharedWorker` was (optionally)
  when it was created. This is the name that the `SharedWorker()`
  can pass to get a reference to the `web.workers.SharedWorkerGlobalScope`.

  `var nameObj = self.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/name`"
  [this]
  (-> this (.-name)))

(defn application-cache
  "Property.

  [Read Only]

  The applicationCache read-only property of the `web.workers.SharedWorkerGlobalScope`
  returns the `ApplicationCache` object for the worker (see Using
  application cache).

  `var nameObj = self.applicationCache;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/applicationCache`"
  [this]
  (-> this (.-applicationCache)))

(defn self
  "Property.

  [Read Only]

  The self read-only property of the `web.workers.WorkerGlobalScope`
  returns a reference to the WorkerGlobalScope itself. Most of
  time it is a specific scope like `web.workers.DedicatedWorkerGlobalScope`,
  or `web.workers.ServiceWorkerGlobalScope`.

  `var selfRef = self;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self`"
  [this]
  (-> this (.-self)))

(defn console
  "Property.

  [Read Only]
  [Non Standard]

  The console read-only property of the `web.workers.WorkerGlobalScope`
  returns a `Console` object providing access to the browser console
  the worker.

  `var consoleObj = self.console;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/console`"
  [this]
  (-> this (.-console)))

(defn location
  "Property.

  [Read Only]

  The location read-only property of the `web.workers.WorkerGlobalScope`
  returns the `web.workers.WorkerLocation` associated with the
  It is a specific location object, mostly a subset of the `web.dom.Location`
  browsing scopes, but adapted to workers.

  `var locationObj = self.location;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/location`"
  [this]
  (-> this (.-location)))

(defn navigator
  "Property.

  [Read Only]

  The navigator read-only property of the `web.workers.WorkerGlobalScope`
  returns the `web.workers.WorkerNavigator` associated with the
  It is a specific navigator object, mostly a subset of the `web.performance.Navigator`
  browsing scopes, but adapted to workers.

  `var navigatorObj = self.navigator;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/navigator`"
  [this]
  (-> this (.-navigator)))

(defn performance
  "Property.

  [Read Only]

  The performance read-only property of the `web.workers.WorkerGlobalScope`
  returns a `web.performance.Performance` object to be used on
  worker.

  `var perfObj = self.performance;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/performance`"
  [this]
  (-> this (.-performance)))

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
  (-> this (.-onconnect)))

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

