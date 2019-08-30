(ns web.streams.WritableStream
  "The WritableStream interface of the the Streams API provides
  standard abstraction for writing streaming data to a destination,
  as a sink. This object comes with built-in backpressure and queuing."
  (:refer-clojure :exclude []))

(defn abort
  "Method.

  [Draft]
  [Experimental]

  The abort() method of the `web.streams.WritableStream` interface
  the stream, signaling that the producer can no longer successfully
  to the stream and it is to be immediately moved to an error state,
  any queued writes discarded.

  `Promise<reason> writableStreamInstance.abort(reason);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStream/abort`"
  [this reason]
  (-> this (.abort reason)))

(defn get-writer
  "Method.

  [Draft]
  [Experimental]

  The getWriter() method of the `web.streams.WritableStream` interface
  a new instance of `web.streams.WritableStreamDefaultWriter` and
  the stream to that instance. While the stream is locked, no other
  can be acquired until this one is released.

  `var writer = writableStreamInstance.getWriter();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStream/getWriter`"
  [this ]
  (-> this (.getWriter)))

(defn locked
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The locked getter property of the `web.streams.WritableStream`
  returns a boolean indicating whether the WritableStream is locked
  a writer.

  `var locked = writableStreamInstance.locked;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStream/locked`"
  [this]
  (-> this (.-locked)))

