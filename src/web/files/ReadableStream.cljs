(ns web.files.ReadableStream
  "The ReadableStream interface of the Streams API represents a
  stream of byte data. The Fetch API offers a concrete instance
  a ReadableStream through the `body` property of a `web.fetch.Response`"
  (:refer-clojure :exclude []))

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

  [Experimental]

  The pipeThrough() method of the `web.files.ReadableStream` interface
  a chainable way of piping the current stream through a transform
  or any other writable/readable pair.

  `ReadableStream readableStreamInstance.pipeThrough(transformStream[, options]);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/pipeThrough`"
  [this & args]
  (-> this .-pipeThrough (.apply this (clj->js args))))

(defn pipe-to
  "Method.

  [Experimental]

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

  [Read Only]

  The locked getter property of the `web.files.ReadableStream`
  returns whether or not the readable stream is locked to a reader.

  `var locked = readableStreamInstance.locked;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/locked`"
  [this]
  (-> this (.-locked)))

