(ns web.files.ReadableStream
  "The ReadableStream interface of the Streams API represents a
  stream of byte data. The Fetch API offers a concrete instance
  a ReadableStream through the `body` property of a `web.fetch.Response`"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ReadableStream() constructor creates and returns a readable stream object from the given handlers.

  underlyingSource
  An object containing methods and properties that define how the constructed stream instance will behave. underlyingSource can contain the following:

  start(controller)
  This is a method, called immediately when the object is constructed. The contents of this method are defined by the developer, and should aim to get access to the stream source, and do anything else required to set up the stream fuctionality. If this process is to be done asynchronously, it can return a promise to signal success or failure. The controller parameter passed to this method is a `web.fetch.ReadableStreamDefaultController` or a `web.fetch.ReadableByteStreamController`, depending on the value of the type property. This can be used by the developer to control the stream during set up.
  pull(controller) Optional
  This method, also defined by the developer, will be called repeatedly when the stream's internal queue of chunks is not full, up until it reaches its high water mark. If pull() returns a promise, then it won't be called again until that promise fulfills; if the promise rejects, the stream will become errored. The controller parameter passed to this method is a `web.fetch.ReadableStreamDefaultController` or a `web.fetch.ReadableByteStreamController`, depending on the value of the type property. This can be used by the developer to control the stream as more chunks are fetched.
  cancel(reason) Optional
  This method, also defined by the developer, will be called if the app signals that the stream is to be cancelled (e.g. if `ReadableStream.cancel()` is called). The contents should do whatever is necessary to release access to the stream source. If this process is asynchronous, it can return a promise to signal success or failure. The reason parameter contains a `web.dom.DOMString` describing why the stream was cancelled.
  type Optional
  This property controls what type of readable stream is being dealt with. If it is included with a value set to bytes, the passed controller object will be a `web.fetch.ReadableByteStreamController` capable of handling a BYOB (bring your own buffer)/byte stream. If it is not included, the passed controller will be a `web.fetch.ReadableStreamDefaultController`.
  autoAllocateChunkSize Optional
  For byte streams, the developer can set the autoAllocateChunkSize with a positive integer value to turn on the stream's auto-allocation feature. With this turned on, the stream implementation will automatically allocate an `js.ArrayBuffer` with a size of the given integer, and call the underlying source code as if the consumer was using a BYOB reader.


  queueingStrategy Optional
  An object that optionally defines a queueing strategy for the stream. This takes two parameters:

  highWaterMark
  A non-negative integer — this defines the total number of chunks that can be contained in the internal queue before backpressure is applied.
  size(chunk)
  A method containing a parameter chunk — this indicates the size to use for each chunk, in bytes.



  Note: You could define your own custom queueingStrategy, or use an instance of `ByteLengthQueueingStrategy` or `CountQueueingStrategy` for this object value. If no queueingStrategy is supplied, the default used is the same as a CountQueuingStrategy with a high water mark of 1.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream`"
  js/ReadableStream)

(defn cancel
  "Method.

  The cancel() method of the `web.files.ReadableStream` interface
  the associated stream. The supplied reason parameter will be
  to the underlying source, which may or may not use it.

  `Promise<reason> readableStreamInstance.cancel(reason);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/cancel`"
  [this reason]
  (-> this (.cancel reason)))

(defn get-reader
  "Method.

  The getReader() method of the `web.files.ReadableStream` interface
  a reader and locks the stream to it. While the stream is locked,
  other reader can be acquired until this one is released.

  `var reader = readableStreamInstance.getReader({mode});`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/getReader`"
  [this & args]
  (-> this .-getReader (.apply this (clj->js args))))

(defn pipe-through
  "Method.

  The pipeThrough() method of the `web.files.ReadableStream` interface
  a chainable way of piping the current stream through a transform
  or any other writable/readable pair.

  `ReadableStream readableStreamInstance.pipeThrough(transformStream[, options]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/pipeThrough`"
  [this & args]
  (-> this .-pipeThrough (.apply this (clj->js args))))

(defn pipe-to
  "Method.

  The pipeTo() method of the `web.files.ReadableStream` interface
  the current ReadableStream to a given `web.streams.WritableStream`
  returns a promise that fulfills when the piping process completes
  or rejects if any errors were encountered.

  `Promise<void> readableStreamInstance.pipeTo(destination[, options]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/pipeTo`"
  [this & args]
  (-> this .-pipeTo (.apply this (clj->js args))))

(defn tee
  "Method.

  The tee() method of the `web.files.ReadableStream` interface
  the current readable stream, returning a two-element array containing
  two resulting branches as new `web.files.ReadableStream` instances.

  `readableStreamInstance.tee();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/tee`"
  [this ]
  (-> this (.tee)))

(defn locked
  "Property.

  The locked getter property of the `web.files.ReadableStream`
  returns whether or not the readable stream is locked to a reader.

  `var locked = readableStreamInstance.locked;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/locked`"
  [this]
  (-> this (.-locked)))

(defn set-locked!
  "Property.

  The locked getter property of the `web.files.ReadableStream`
  returns whether or not the readable stream is locked to a reader.

  `var locked = readableStreamInstance.locked;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/locked`"
  [this val]
  (aset this "locked" val))

