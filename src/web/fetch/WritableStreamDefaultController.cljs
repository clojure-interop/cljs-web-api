(ns web.fetch.WritableStreamDefaultController
  "The WritableStreamDefaultController interface of the the Streams
  represents a controller allowing control of a `web.streams.WritableStream`'s
  When constructing a WritableStream, the underlying sink is given
  corresponding WritableStreamDefaultController instance to manipulate."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The WritableStreamDefaultController() constructor creates and returns a WritableStreamDefaultController() object instance.

  stream
  The `web.streams.WritableStream` to be controlled.
  underlyingSink
  An object containing methods and properties that define how the constructed stream instance will behave. See the `WritableStream()` for more information.
  size
  A method containing a parameter chunk — this indicates the size to use for each chunk, in bytes.
  highWaterMark
  A non-negative integer — this defines the total number of chunks that can be contained in the internal queue before backpressure is applied.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultController/WritableStreamDefaultController`"
  js/WritableStreamDefaultController)

(defn error
  "Method.

  The error() method of the `web.fetch.WritableStreamDefaultController`
  causes any future interactions with the associated stream to

  `writableStreamDefaultControllerInstance.error(e);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultController/error`"
  [this e]
  (-> this (.error e)))

