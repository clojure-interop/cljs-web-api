(ns web.workers.WorkerGlobalScope
  "The WorkerGlobalScope interface of the Web Workers API is an
  representing the scope of any worker. Workers have no browsing
  this scope contains the information usually conveyed by `web.Window`
  — in this case event handlers, the console or the associated
  object. Each WorkerGlobalScope has its own event loop."
  (:refer-clojure :exclude []))

(defn import-scripts
  "Method.

  The importScripts() method of the `web.workers.WorkerGlobalScope`
  synchronously imports one or more scripts into the worker's scope.

  `self.importScripts('foo.js');
  self.importScripts('foo.js', 'bar.js', ...);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/importScripts`"
  [this & args]
  (apply (-> this .-importScripts) (concat [this] args)))

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

  The WindowOrWorkerGlobalScope.atob() function decodes a string
  data which has been encoded using base-64 encoding. You can use
  `btoa()` method to encode and transmit data which may otherwise
  communication problems, then transmit it and use the atob() method
  decode the data again. For example, you can encode, transmit,
  decode control characters such as ASCII values 0 through 31.

  `var decodedData = scope.atob(encodedData);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob`"
  [this encoded-data]
  (-> this (.atob encoded-data)))

(defn close
  "Method.

  The close() method of the `web.workers.WorkerGlobalScope` interface
  any tasks queued in the WorkerGlobalScope's event loop, effectively
  this particular scope.

  `self.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/close`"
  [this ]
  (-> this (.close)))

(defn btoa
  "Method.

  The WindowOrWorkerGlobalScope.btoa() method creates a base-64
  ASCII string from a binary string (i.e., a `js.String` object
  which each character in the string is treated as a byte of binary

  `var encodedData = scope.btoa(stringToEncode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa`"
  [this string-to-encode]
  (-> this (.btoa string-to-encode)))

(defn clear-interval
  "Method.

  The clearInterval() method of the `web.WindowOrWorkerGlobalScope`
  cancels a timed, repeating action which was previously established
  a call to `setInterval()`.

  `scope.clearInterval(intervalID)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval`"
  [this interval-id]
  (-> this (.clearInterval interval-id)))

(defn clear-timeout
  "Method.

  The clearTimeout() method of the `web.WindowOrWorkerGlobalScope`
  cancels a timeout previously established by calling `setTimeout()`.

  `scope.clearTimeout(timeoutID)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout`"
  [this timeout-id]
  (-> this (.clearTimeout timeout-id)))

(defn create-image-bitmap
  "Method.

  The createImageBitmap() method creates a bitmap from a given
  optionally cropped to contain only a portion of that source.
  method exists on the global scope in both windows and workers.
  accepts a variety of different image sources, and returns a `js.Promise`
  resolves to an `web.canvas.ImageBitmap`.

  `createImageBitmap(image[, options]).then(function(response) { ... });
  createImageBitmap(image, sx, sy, sw, sh[, options]).then(function(response) { ... });`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/createImageBitmap`"
  [this & args]
  (apply (-> this .-createImageBitmap) (concat [this] args)))

(defn fetch
  "Method.

  The fetch() method of the `web.WindowOrWorkerGlobalScope` mixin
  the process of fetching a resource from the network, returning
  promise which is fulfilled once the response is available.

  `fetchResponsePromise = fetch(resource, init);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch`"
  [this resource init]
  (-> this (.fetch resource init)))

(defn queue-microtask
  "Method.

  The queueMicrotask() method of the `web.WindowOrWorkerGlobalScope`
  queues a microtask.

  `scope.queueMicrotask(function);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask`"
  [this function]
  (-> this (.queueMicrotask function)))

(defn set-interval
  "Method.

  The setInterval() method, offered on the `web.Window` and `web.workers.Worker`
  repeatedly calls a function or executes a code snippet, with
  fixed time delay between each call.

  `var intervalID = scope.setInterval(func, delay[, arg1, arg2, ...]);
  var intervalID = scope.setInterval(code, delay);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval`"
  [this & args]
  (apply (-> this .-setInterval) (concat [this] args)))

(defn set-timeout
  "Method.

  The setTimeout() method of the `web.WindowOrWorkerGlobalScope`
  (and successor to Window.setTimeout()) sets a timer which executes
  function or specified piece of code once the timer expires.

  `var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
  var timeoutID = scope.setTimeout(function[, delay]);
  var timeoutID = scope.setTimeout(code[, delay]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout`"
  [this & args]
  (apply (-> this .-setTimeout) (concat [this] args)))

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

(defn performance
  "Property.

  The performance read-only property of the `web.workers.WorkerGlobalScope`
  returns a `web.performance.Performance` object to be used on
  worker.

  `var perfObj = self.performance;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/performance`"
  [this]
  (-> this (.performance)))

(defn caches
  "Property.

  The caches read-only property of the `web.WindowOrWorkerGlobalScope`
  returns the `web.service-workers.CacheStorage` object associated
  the current context. This object enables functionality such as
  assets for offline use, and generating custom responses to requests.

  `var myCacheStorage = self.caches; // or just caches`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/caches`"
  [this]
  (-> this (.caches)))

(defn console
  "Property.

  The console read-only property of the `web.workers.WorkerGlobalScope`
  returns a `Console` object providing access to the browser console
  the worker.

  `var consoleObj = self.console;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/console`"
  [this]
  (-> this (.console)))

(defn indexed-db
  "Property.

  The indexedDB read-only property of the `web.WindowOrWorkerGlobalScope`
  provides a mechanism for applications to asynchronously access
  capabilities of indexed databases.

  `var IDBFactory = self.indexedDB;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/indexedDB`"
  [this]
  (-> this (.indexedDB)))

(defn is-secure-context
  "Property.

  The isSecureContext read-only property of the `web.WindowOrWorkerGlobalScope`
  returns a boolean indicating whether the current context is secure
  or not (false).

  `var isItSecure = self.isSecureContext; // or just isSecureContext`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/isSecureContext`"
  [this]
  (-> this (.isSecureContext)))

(defn set-is-secure-context!
  "Property.

  The isSecureContext read-only property of the `web.WindowOrWorkerGlobalScope`
  returns a boolean indicating whether the current context is secure
  or not (false).

  `var isItSecure = self.isSecureContext; // or just isSecureContext`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/isSecureContext`"
  [this val]
  (aset this "isSecureContext" val))

(defn location
  "Property.

  The location read-only property of the `web.workers.WorkerGlobalScope`
  returns the `web.workers.WorkerLocation` associated with the
  It is a specific location object, mostly a subset of the `web.dom.Location`
  browsing scopes, but adapted to workers.

  `var locationObj = self.location;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/location`"
  [this]
  (-> this (.location)))

(defn set-location!
  "Property.

  The location read-only property of the `web.workers.WorkerGlobalScope`
  returns the `web.workers.WorkerLocation` associated with the
  It is a specific location object, mostly a subset of the `web.dom.Location`
  browsing scopes, but adapted to workers.

  `var locationObj = self.location;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/location`"
  [this val]
  (aset this "location" val))

(defn navigator
  "Property.

  The navigator read-only property of the `web.workers.WorkerGlobalScope`
  returns the `web.workers.WorkerNavigator` associated with the
  It is a specific navigator object, mostly a subset of the `web.performance.Navigator`
  browsing scopes, but adapted to workers.

  `var navigatorObj = self.navigator;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/navigator`"
  [this]
  (-> this (.navigator)))

(defn set-navigator!
  "Property.

  The navigator read-only property of the `web.workers.WorkerGlobalScope`
  returns the `web.workers.WorkerNavigator` associated with the
  It is a specific navigator object, mostly a subset of the `web.performance.Navigator`
  browsing scopes, but adapted to workers.

  `var navigatorObj = self.navigator;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/navigator`"
  [this val]
  (aset this "navigator" val))

(defn onclose
  "Property.

  The onclose property of the `web.workers.WorkerGlobalScope` interface
  an `EventHandler` to be called when the close event occurs and
  through the `web.workers.Worker`.

  `self.onclose = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onclose`"
  [this]
  (-> this (.onclose)))

(defn set-onclose!
  "Property.

  The onclose property of the `web.workers.WorkerGlobalScope` interface
  an `EventHandler` to be called when the close event occurs and
  through the `web.workers.Worker`.

  `self.onclose = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onclose`"
  [this val]
  (aset this "onclose" val))

(defn onerror
  "Property.

  The onerror property of the `web.workers.WorkerGlobalScope` interface
  an `EventHandler` to be called when the error event occurs and
  through the `web.workers.Worker`.

  `self.onerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.

  The onerror property of the `web.workers.WorkerGlobalScope` interface
  an `EventHandler` to be called when the error event occurs and
  through the `web.workers.Worker`.

  `self.onerror = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onlanguagechange
  "Property.

  The onlanguagechange property of the `web.workers.WorkerGlobalScope`
  represents an `EventHandler` to be called when the languagechange
  occurs and bubbles through the `web.workers.Worker`.

  `self.onlanguagechange = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onlanguagechange`"
  [this]
  (-> this (.onlanguagechange)))

(defn set-onlanguagechange!
  "Property.

  The onlanguagechange property of the `web.workers.WorkerGlobalScope`
  represents an `EventHandler` to be called when the languagechange
  occurs and bubbles through the `web.workers.Worker`.

  `self.onlanguagechange = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onlanguagechange`"
  [this val]
  (aset this "onlanguagechange" val))

(defn onoffline
  "Property.

  The onoffline property of the `web.workers.WorkerGlobalScope`
  represents an `EventHandler` to be called when the offline event
  and bubbles through the `web.workers.Worker`.

  `self.onoffline = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onoffline`"
  [this]
  (-> this (.onoffline)))

(defn set-onoffline!
  "Property.

  The onoffline property of the `web.workers.WorkerGlobalScope`
  represents an `EventHandler` to be called when the offline event
  and bubbles through the `web.workers.Worker`.

  `self.onoffline = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/onoffline`"
  [this val]
  (aset this "onoffline" val))

(defn ononline
  "Property.

  The ononline property of the `web.workers.WorkerGlobalScope`
  represents an `EventHandler` to be called when the online event
  and bubbles through the `web.workers.Worker`.

  `self.ononline = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/ononline`"
  [this]
  (-> this (.ononline)))

(defn set-ononline!
  "Property.

  The ononline property of the `web.workers.WorkerGlobalScope`
  represents an `EventHandler` to be called when the online event
  and bubbles through the `web.workers.Worker`.

  `self.ononline = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WorkerGlobalScope/ononline`"
  [this val]
  (aset this "ononline" val))

(defn origin
  "Property.

  The origin read-only property of the `web.WindowOrWorkerGlobalScope`
  returns the origin of the global scope, serialized as a string.

  `var myOrigin = self.origin; // or just origin`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/origin`"
  [this]
  (-> this (.origin)))

(defn set-origin!
  "Property.

  The origin read-only property of the `web.WindowOrWorkerGlobalScope`
  returns the origin of the global scope, serialized as a string.

  `var myOrigin = self.origin; // or just origin`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/origin`"
  [this val]
  (aset this "origin" val))

