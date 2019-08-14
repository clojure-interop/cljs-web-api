(ns web.WritableStreamDefaultWriter
  "The WritableStreamDefaultWriter interface of the the Streams
  is the object returned by `web.WritableStream.getWriter()` and
  created locks the < writer to the WritableStream ensuring that
  other streams can write to the underlying sink."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The WritableStreamDefaultWriter() constructor creates a new `web.WritableStreamDefaultWriter` object instance.

  stream
  \\tThe `web.WritableStream` to be written to.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/WritableStreamDefaultWriter`"
  js/WritableStreamDefaultWriter)

(defn abort
  "Method.

  The abort() method of the `web.WritableStreamDefaultWriter` interface
  the stream, signaling that the producer can no longer successfully
  to the stream and it is to be immediately moved to an error state,
  any queued writes discarded.

  `Promise<reason> writableStreamDefaultWriterInstance.abort(reason);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/abort`"
  [this reason]
  (-> this (.abort reason)))

(defn close
  "Method.

  The close() method of the `web.WritableStreamDefaultWriter` interface
  the associated writable stream.

  `Promise<undefined> writableStreamDefaultWriterInstance.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/close`"
  [this ]
  (-> this (.close)))

(defn ready
  "Method.

  The ready getter property of the `web.WritableStreamDefaultWriter`
  returns a `web.Promise` that resolves when the desired size of
  stream's internal queue transitions from non-positive to positive,
  that it is no longer applying backpressure.

  `var promise = defaultWriter.ready`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/ready`"
  [this ]
  (-> this (.ready)))

(defn release-lock
  "Method.

  The releaseLock() method of the `web.WritableStreamDefaultWriter`
  releases the writer's lock on the corresponding stream. After
  lock is released, the writer is no longer active. If the associated
  is errored when the lock is released, the writer will appear
  in the same way from now on; otherwise, the writer will appear

  `writableStreamDefaultWriterInstance.releaseLock()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/releaseLock`"
  [this ]
  (-> this (.releaseLock)))

(defn write
  "Method.

  The write() property of the `web.WritableStreamDefaultWriter`
  writes a passed chunk of data to a `web.WritableStream` and its
  sink, then returns a `web.Promise` that resolves to indicate
  success or failure of the write operation.

  `Promise<> = defaultWriter.write(chunk)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/write`"
  [this chunk]
  (-> this (.write chunk)))

(defn closed
  "Property.

  The closed getter property of the `web.WritableStreamDefaultWriter`
  returns a promise that fulfills if the stream becomes closed
  the writer's lock is released, or rejects if the stream errors.

  `var closed = writableStreamDefaultWriterInstance.closed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/closed`"
  [this]
  (-> this (.closed)))

(defn set-closed!
  "Property.

  The closed getter property of the `web.WritableStreamDefaultWriter`
  returns a promise that fulfills if the stream becomes closed
  the writer's lock is released, or rejects if the stream errors.

  `var closed = writableStreamDefaultWriterInstance.closed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/closed`"
  [this val]
  (aset this "closed" val))

(defn desired-size
  "Property.

  The desiredSize getter property of the `web.WritableStreamDefaultWriter`
  returns the desired size required to fill the stream's internal

  `var desiredSize = writableStreamDefaultWriterInstance.desiredSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/desiredSize`"
  [this]
  (-> this (.desiredSize)))

(defn set-desired-size!
  "Property.

  The desiredSize getter property of the `web.WritableStreamDefaultWriter`
  returns the desired size required to fill the stream's internal

  `var desiredSize = writableStreamDefaultWriterInstance.desiredSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/desiredSize`"
  [this val]
  (aset this "desiredSize" val))

