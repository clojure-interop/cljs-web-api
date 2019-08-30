(ns web.streams.WritableStreamDefaultWriter
  "The WritableStreamDefaultWriter interface of the the Streams
  is the object returned by `WritableStream.getWriter()` and once
  locks the < writer to the WritableStream ensuring that no other
  can write to the underlying sink."
  (:refer-clojure :exclude []))

(defn abort
  "Method.

  [Draft]
  [Experimental]

  The abort() method of the `web.streams.WritableStreamDefaultWriter`
  aborts the stream, signaling that the producer can no longer
  write to the stream and it is to be immediately moved to an error
  with any queued writes discarded.

  `Promise<reason> writableStreamDefaultWriterInstance.abort(reason);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/abort`"
  [this reason]
  (-> this (.abort reason)))

(defn close
  "Method.

  [Draft]
  [Experimental]

  The close() method of the `web.streams.WritableStreamDefaultWriter`
  closes the associated writable stream.

  `Promise<undefined> writableStreamDefaultWriterInstance.close();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/close`"
  [this ]
  (-> this (.close)))

(defn release-lock
  "Method.

  [Draft]
  [Experimental]

  The releaseLock() method of the `web.streams.WritableStreamDefaultWriter`
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

  [Experimental]

  The write() property of the `web.streams.WritableStreamDefaultWriter`
  writes a passed chunk of data to a `web.streams.WritableStream`
  its underlying sink, then returns a `js.Promise` that resolves
  indicate the success or failure of the write operation.

  `Promise<> = defaultWriter.write(chunk)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/write`"
  [this chunk]
  (-> this (.write chunk)))

(defn ready
  "Method.

  [Experimental]

  The ready getter property of the `web.streams.WritableStreamDefaultWriter`
  returns a `js.Promise` that resolves when the desired size of
  stream's internal queue transitions from non-positive to positive,
  that it is no longer applying backpressure.

  `var promise = defaultWriter.ready`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/ready`"
  [this ]
  (-> this (.ready)))

(defn closed
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The closed getter property of the `web.streams.WritableStreamDefaultWriter`
  returns a promise that fulfills if the stream becomes closed
  the writer's lock is released, or rejects if the stream errors.

  `var closed = writableStreamDefaultWriterInstance.closed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/closed`"
  [this]
  (-> this (.-closed)))

(defn desired-size
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The desiredSize getter property of the `web.streams.WritableStreamDefaultWriter`
  returns the desired size required to fill the stream's internal

  `var desiredSize = writableStreamDefaultWriterInstance.desiredSize;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultWriter/desiredSize`"
  [this]
  (-> this (.-desiredSize)))

