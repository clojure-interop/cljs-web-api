(ns web.fetch.ReadableByteStreamController
  "The ReadableByteStreamController interface of the Streams API
  a controller allowing control of a `web.files.ReadableStream`'s
  and internal queue. Byte stream controllers are for byte streams."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ReadableByteStreamController() constructor creates and returns a ReadableByteStreamController() object instance.

  stream
  The `web.files.ReadableStream` to be controlled.
  underlyingSource
  An object containing methods and properties that define how the constructed stream instance will behave. See the ReadableStream() constructor's parameters definitions for more information.
  highWaterMark
  A non-negative integer — this defines the total number of chunks that can be contained in the internal queue before backpressure is applied.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/ReadableByteStreamController`"
  js/ReadableByteStreamController)

(defn close
  "Method.

  The close() method of the `web.fetch.ReadableByteStreamController`
  closes the associated stream.

  `readableByteStreamControllerInstance.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/close`"
  [this ]
  (-> this (.close)))

(defn enqueue
  "Method.

  The enqueue() method of the `web.fetch.ReadableByteStreamController`
  enqueues a given chunk in the associated stream.

  `readableByteStreamControllerInstance.enqueue(chunk);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/enqueue`"
  [this chunk]
  (-> this (.enqueue chunk)))

(defn error
  "Method.

  The error() method of the `web.fetch.ReadableByteStreamController`
  causes any future interactions with the associated stream to

  `readableByteStreamControllerInstance.error(e);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/error`"
  [this e]
  (-> this (.error e)))

(defn byob-request
  "Property.

  The byobRequest getter property of the `web.fetch.ReadableByteStreamController`
  returns the current BYOB pull request.

  `var request = readableByteStreamControllerInstance.byobRequest;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/byobRequest`"
  [this]
  (-> this (.byobRequest)))

(defn set-byob-request!
  "Property.

  The byobRequest getter property of the `web.fetch.ReadableByteStreamController`
  returns the current BYOB pull request.

  `var request = readableByteStreamControllerInstance.byobRequest;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/byobRequest`"
  [this val]
  (aset this "byobRequest" val))

(defn desired-size
  "Property.

  The desiredSize getter property of the `web.fetch.ReadableByteStreamController`
  returns the desired size required to fill the stream's internal

  `var desiredSize = readableByteStreamControllerInstance.desiredSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/desiredSize`"
  [this]
  (-> this (.desiredSize)))

(defn set-desired-size!
  "Property.

  The desiredSize getter property of the `web.fetch.ReadableByteStreamController`
  returns the desired size required to fill the stream's internal

  `var desiredSize = readableByteStreamControllerInstance.desiredSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableByteStreamController/desiredSize`"
  [this val]
  (aset this "desiredSize" val))

