(ns web.DedicatedWorkerGlobalScope
  "The DedicatedWorkerGlobalScope object (the `web.Worker` global
  is accessible through the `web.self` keyword. Some additional
  functions, namespaces objects, and constructors, not typically
  with the worker global scope, but available on it, are listed
  the JavaScript Reference. See also: Functions available to workers."
  (:refer-clojure :exclude [name]))

(defn close
  "Method.

  The close() method of the `web.DedicatedWorkerGlobalScope` interface
  any tasks queued in the DedicatedWorkerGlobalScope's event loop,
  closing this particular scope.

  `self.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/close`"
  [this ]
  (-> this (.close)))

(defn post-message
  "Method.

  The postMessage() method of the `web.DedicatedWorkerGlobalScope`
  sends a message to the main thread that spawned it. This accepts
  single parameter, which is the data to send to the worker. The
  may be any value or JavaScript object handled by the structured
  algorithm, which includes cyclical references.

  `postMessage(aMessage, transferList);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/postMessage`"
  [this a-message transfer-list]
  (-> this (.postMessage a-message transfer-list)))

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

(defn name
  "Property.

  The name read-only property of the `web.DedicatedWorkerGlobalScope`
  returns the name that the `web.Worker` was (optionally) given
  it was created. This is the name that the `web.Worker()` constructor
  pass to get a reference to the `web.DedicatedWorkerGlobalScope`.

  `var nameObj = self.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The name read-only property of the `web.DedicatedWorkerGlobalScope`
  returns the name that the `web.Worker` was (optionally) given
  it was created. This is the name that the `web.Worker()` constructor
  pass to get a reference to the `web.DedicatedWorkerGlobalScope`.

  `var nameObj = self.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/name`"
  [this val]
  (aset this "name" val))

(defn onmessage
  "Property.

  The onmessage property of the `web.DedicatedWorkerGlobalScope`
  represents an `web.EventHandler` to be called when the message
  occurs and bubbles through the `web.Worker` — i.e. when a message
  sent to the worker using the `web.Worker.postMessage` method.

  `self.onmessage = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessage`"
  [this]
  (-> this (.onmessage)))

(defn set-onmessage!
  "Property.

  The onmessage property of the `web.DedicatedWorkerGlobalScope`
  represents an `web.EventHandler` to be called when the message
  occurs and bubbles through the `web.Worker` — i.e. when a message
  sent to the worker using the `web.Worker.postMessage` method.

  `self.onmessage = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessage`"
  [this val]
  (aset this "onmessage" val))

(defn onmessageerror
  "Property.

  The onmessageerror event handler of the `web.DedicatedWorkerGlobalScope`
  is an `web.EventListener`, called whenever an `web.MessageEvent`
  type messageerror is fired on the worker—that is, when it receives
  message that cannot be deserialized.

  `onmessageerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessageerror`"
  [this]
  (-> this (.onmessageerror)))

(defn set-onmessageerror!
  "Property.

  The onmessageerror event handler of the `web.DedicatedWorkerGlobalScope`
  is an `web.EventListener`, called whenever an `web.MessageEvent`
  type messageerror is fired on the worker—that is, when it receives
  message that cannot be deserialized.

  `onmessageerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DedicatedWorkerGlobalScope/onmessageerror`"
  [this val]
  (aset this "onmessageerror" val))

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

