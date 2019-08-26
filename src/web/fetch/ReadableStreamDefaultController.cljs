(ns web.fetch.ReadableStreamDefaultController
  "The ReadableStreamDefaultController interface of the Streams
  represents a controller allowing control of a `web.files.ReadableStream`'s
  and internal queue. Default controllers are for streams that
  not byte streams."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ReadableStreamDefaultController() constructor creates and returns a ReadableStreamDefaultController() object instance.

  stream
  The `web.files.ReadableStream` to be controlled.
  underlyingSource
  An object containing methods and properties that define how the constructed stream instance will behave. See the ReadableStream() constructor's parameters definitions for more information.
  size
  A method containing a parameter chunk — this indicates the size to use for each chunk, in bytes.
  highWaterMark
  A non-negative integer — this defines the total number of chunks that can be contained in the internal queue before backpressure is applied.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/ReadableStreamDefaultController`"
  js/ReadableStreamDefaultController)

(defn close
  "Method.

  The close() method of the `web.fetch.ReadableStreamDefaultController`
  closes the associated stream.

  `readableStreamDefaultControllerInstance.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/close`"
  [this ]
  (-> this (.close)))

(defn enqueue
  "Method.

  The enqueue() method of the `web.fetch.ReadableStreamDefaultController`
  enqueues a given chunk in the associated stream.

  `readableStreamDefaultControllerInstance.enqueue(chunk);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/enqueue`"
  [this chunk]
  (-> this (.enqueue chunk)))

(defn error
  "Method.

  The error() method of the `web.fetch.ReadableStreamDefaultController`
  causes any future interactions with the associated stream to

  `readableStreamDefaultControllerInstance.error(e);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/error`"
  [this e]
  (-> this (.error e)))

(defn desired-size
  "Property.

  The desiredSize getter property of the `web.fetch.ReadableStreamDefaultController`
  returns the desired size required to fill the stream's internal

  `var desiredSize = readableStreamDefaultControllerInstance.desiredSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/desiredSize`"
  [this]
  (-> this (.desiredSize)))

(defn set-desired-size!
  "Property.

  The desiredSize getter property of the `web.fetch.ReadableStreamDefaultController`
  returns the desired size required to fill the stream's internal

  `var desiredSize = readableStreamDefaultControllerInstance.desiredSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultController/desiredSize`"
  [this val]
  (aset this "desiredSize" val))

