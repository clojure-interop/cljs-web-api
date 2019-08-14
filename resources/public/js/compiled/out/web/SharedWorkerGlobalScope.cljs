(ns web.SharedWorkerGlobalScope
  "The SharedWorkerGlobalScope object (the `web.SharedWorker` global
  is accessible through the `web.self` keyword. Some additional
  functions, namespaces objects, and constructors, not typically
  with the worker global scope, but available on it, are listed
  the JavaScript Reference. See the complete list of functions
  to workers."
  (:refer-clojure :exclude [name]))

(defn close
  "Method.

  The close() method of the `web.SharedWorkerGlobalScope` interface
  any tasks queued in the SharedWorkerGlobalScope's event loop,
  closing this particular scope.

  `self.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/close`"
  [this ]
  (-> this (.close)))

(defn dump
  "Method.

  The dump() method of the `web.WorkerGlobalScope` interface allows
  to write a message to stdout — i.e. in your terminal, in Firefox
  This is the same as Firefox's `web.window.dump`, but for workers.

  `dump('My message\\\\n');`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/dump`"
  [this & args]
  (apply (-> this .-dump) (concat [this] args)))

(defn import-scripts
  "Method.

  The importScripts() method of the `web.WorkerGlobalScope` interface
  imports one or more scripts into the worker's scope.

  `self.importScripts('foo.js');
  self.importScripts('foo.js', 'bar.js', ...);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts`"
  [this & args]
  (apply (-> this .-importScripts) (concat [this] args)))

(defn application-cache
  "Property.

  The applicationCache read-only property of the `web.SharedWorkerGlobalScope`
  returns the `web.ApplicationCache` object for the worker (see
  the application cache).

  `var nameObj = self.applicationCache;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/applicationCache`"
  [this]
  (-> this (.applicationCache)))

(defn set-application-cache!
  "Property.

  The applicationCache read-only property of the `web.SharedWorkerGlobalScope`
  returns the `web.ApplicationCache` object for the worker (see
  the application cache).

  `var nameObj = self.applicationCache;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/applicationCache`"
  [this val]
  (aset this "applicationCache" val))

(defn name
  "Property.

  The name read-only property of the `web.SharedWorkerGlobalScope`
  returns the name that the `web.SharedWorker` was (optionally)
  when it was created. This is the name that the `web.SharedWorker()`
  can pass to get a reference to the `web.SharedWorkerGlobalScope`.

  `var nameObj = self.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The name read-only property of the `web.SharedWorkerGlobalScope`
  returns the name that the `web.SharedWorker` was (optionally)
  when it was created. This is the name that the `web.SharedWorker()`
  can pass to get a reference to the `web.SharedWorkerGlobalScope`.

  `var nameObj = self.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/name`"
  [this val]
  (aset this "name" val))

(defn onconnect
  "Property.

  The onconnect property of the `web.SharedWorkerGlobalScope` interface
  an event handler representing the code to be called when the
  event is raised — that is, when a `web.MessagePort` connection
  opened between the associated `web.SharedWorker` and the main

  `onconnect = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/onconnect`"
  [this]
  (-> this (.onconnect)))

(defn set-onconnect!
  "Property.

  The onconnect property of the `web.SharedWorkerGlobalScope` interface
  an event handler representing the code to be called when the
  event is raised — that is, when a `web.MessagePort` connection
  opened between the associated `web.SharedWorker` and the main

  `onconnect = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SharedWorkerGlobalScope/onconnect`"
  [this val]
  (aset this "onconnect" val))

(defn self
  "Property.

  The self read-only property of the `web.WorkerGlobalScope` interface
  a reference to the WorkerGlobalScope itself. Most of the time
  is a specific scope like `web.DedicatedWorkerGlobalScope`, `web.SharedWorkerGlobalScope`,
  `web.ServiceWorkerGlobalScope`.

  `var selfRef = self;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self`"
  [this]
  (-> this (.self)))

(defn set-self!
  "Property.

  The self read-only property of the `web.WorkerGlobalScope` interface
  a reference to the WorkerGlobalScope itself. Most of the time
  is a specific scope like `web.DedicatedWorkerGlobalScope`, `web.SharedWorkerGlobalScope`,
  `web.ServiceWorkerGlobalScope`.

  `var selfRef = self;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/self`"
  [this val]
  (aset this "self" val))

(defn console
  "Property.

  The console read-only property of the `web.WorkerGlobalScope`
  returns a `web.Console` object providing access to the browser
  for the worker.

  `var consoleObj = self.console;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/console`"
  [this]
  (-> this (.console)))

(defn location
  "Property.

  The location read-only property of the `web.WorkerGlobalScope`
  returns the `web.WorkerLocation` associated with the worker.
  is a specific location object, mostly a subset of the `web.Location`
  browsing scopes, but adapted to workers.

  `var locationObj = self.location;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/location`"
  [this]
  (-> this (.location)))

(defn set-location!
  "Property.

  The location read-only property of the `web.WorkerGlobalScope`
  returns the `web.WorkerLocation` associated with the worker.
  is a specific location object, mostly a subset of the `web.Location`
  browsing scopes, but adapted to workers.

  `var locationObj = self.location;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/location`"
  [this val]
  (aset this "location" val))

(defn navigator
  "Property.

  The navigator read-only property of the `web.WorkerGlobalScope`
  returns the `web.WorkerNavigator` associated with the worker.
  is a specific navigator object, mostly a subset of the `web.Navigator`
  browsing scopes, but adapted to workers.

  `var navigatorObj = self.navigator;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/navigator`"
  [this]
  (-> this (.navigator)))

(defn set-navigator!
  "Property.

  The navigator read-only property of the `web.WorkerGlobalScope`
  returns the `web.WorkerNavigator` associated with the worker.
  is a specific navigator object, mostly a subset of the `web.Navigator`
  browsing scopes, but adapted to workers.

  `var navigatorObj = self.navigator;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/navigator`"
  [this val]
  (aset this "navigator" val))

(defn performance
  "Property.

  The performance read-only property of the `web.WorkerGlobalScope`
  returns a `performance.Performance` object to be used on the

  `var perfObj = self.performance;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/performance`"
  [this]
  (-> this (.performance)))

