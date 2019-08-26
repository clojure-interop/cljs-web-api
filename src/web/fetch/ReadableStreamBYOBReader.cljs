(ns web.fetch.ReadableStreamBYOBReader
  "The ReadableStreamDefaultReader interface of the Streams API
  a BYOB (\\\"bring your own buffer\\\") reader that can be used to
  stream data supplied by the developer (e.g. a custom `ReadableStream.ReadableStream()`"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ReadableStreamBYOBReader() constructor creates and returns a ReadableStreamBYOBReader() object instance.

  stream
  The `web.files.ReadableStream` to be read.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader/ReadableStreamBYOBReader`"
  js/ReadableStreamBYOBReader)

(defn cancel
  "Method.

  The cancel() method of the `web.fetch.ReadableStreamBYOBReader`
  cancels the stream, signaling a loss of interest in the stream
  a consumer. The supplied reason argument will be given to the
  source, which may or may not use it.

  `Promise<reason> readableStreamBYOBReaderInstance.cancel(reason);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader/cancel`"
  [this reason]
  (-> this (.cancel reason)))

(defn read
  "Method.

  The read() method of the `web.fetch.ReadableStreamBYOBReader`
  returns a promise providing access to the next chunk in the byte
  internal queue.

  `Promise<result> readableStreamBYOBReaderInstance.read(view);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader/read`"
  [this view]
  (-> this (.read view)))

(defn release-lock
  "Method.

  The releaseLock() method of the `web.fetch.ReadableStreamBYOBReader`
  releases the reader's lock on the stream. After the lock is released,
  reader is no longer active.

  `readableStreamBYOBReaderInstance.releaseLock();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader/releaseLock`"
  [this ]
  (-> this (.releaseLock)))

(defn closed
  "Property.

  The closed getter property of the `web.fetch.ReadableStreamBYOBReader`
  returns a promise that fulfills if the stream becomes closed
  the reader's lock is released, or rejects if the stream errors.

  `var closed = readableStreamBYOBReaderInstance.closed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader/closed`"
  [this]
  (-> this (.closed)))

(defn set-closed!
  "Property.

  The closed getter property of the `web.fetch.ReadableStreamBYOBReader`
  returns a promise that fulfills if the stream becomes closed
  the reader's lock is released, or rejects if the stream errors.

  `var closed = readableStreamBYOBReaderInstance.closed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamBYOBReader/closed`"
  [this val]
  (aset this "closed" val))

