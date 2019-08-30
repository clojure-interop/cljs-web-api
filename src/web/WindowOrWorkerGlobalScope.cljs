(ns web.WindowOrWorkerGlobalScope
  "The WindowOrWorkerGlobalScope mixin describes several features
  to the `web.Window` and `web.workers.WorkerGlobalScope` interfaces."
  (:refer-clojure :exclude []))

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

  `const imageBitmapPromise = createImageBitmap(image[, options]);
  const imageBitmapPromise = createImageBitmap(image, sx, sy, sw, sh[, options]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/createImageBitmap`"
  [this & args]
  (-> this .-createImageBitmap (.apply this (clj->js args))))

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
  (-> this .-setInterval (.apply this (clj->js args))))

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
  (-> this .-setTimeout (.apply this (clj->js args))))

(defn caches
  "Property.

  [Read Only]
  [Experimental]

  The caches read-only property of the `web.WindowOrWorkerGlobalScope`
  returns the `web.service-workers.CacheStorage` object associated
  the current context. This object enables functionality such as
  assets for offline use, and generating custom responses to requests.

  `var myCacheStorage = self.caches; // or just caches`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/caches`"
  [this]
  (-> this (.-caches)))

(defn indexed-db
  "Property.

  [Read Only]

  The indexedDB read-only property of the `web.WindowOrWorkerGlobalScope`
  provides a mechanism for applications to asynchronously access
  capabilities of indexed databases.

  `var IDBFactory = self.indexedDB;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/indexedDB`"
  [this]
  (-> this (.-indexedDB)))

(defn is-secure-context
  "Property.

  [Read Only]
  [Experimental]

  The isSecureContext read-only property of the `web.WindowOrWorkerGlobalScope`
  returns a boolean indicating whether the current context is secure
  or not (false).

  `var isItSecure = self.isSecureContext; // or just isSecureContext`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/isSecureContext`"
  [this]
  (-> this (.-isSecureContext)))

(defn origin
  "Property.

  [Read Only]
  [Experimental]

  The origin read-only property of the `web.WindowOrWorkerGlobalScope`
  returns the origin of the global scope, serialized as a string.

  `var myOrigin = self.origin; // or just origin`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/origin`"
  [this]
  (-> this (.-origin)))

