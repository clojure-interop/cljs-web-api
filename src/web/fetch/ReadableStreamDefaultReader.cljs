(ns web.fetch.ReadableStreamDefaultReader
  "The ReadableStreamDefaultReader interface of the Streams API
  a default reader that can be used to read stream data supplied
  a network (e.g. a fetch request)."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ReadableStreamDefaultReader() constructor creates and returns a ReadableStreamDefaultReader() object instance.

  stream
  The `web.files.ReadableStream` to be read.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/ReadableStreamDefaultReader`"
  js/ReadableStreamDefaultReader)

(defn cancel
  "Method.

  The cancel() method of the `web.fetch.ReadableStreamDefaultReader`
  cancels the stream, signaling a loss of interest in the stream
  a consumer. The supplied reason argument will be given to the
  source, which may or may not use it.

  `Promise<reason> readableStreamDefaultReaderInstance.cancel(reason);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/cancel`"
  [this reason]
  (-> this (.cancel reason)))

(defn read
  "Method.

  The read() method of the `web.fetch.ReadableStreamDefaultReader`
  returns a promise providing access to the next chunk in the stream's
  queue.

  `Promise<result> readableStreamDefaultReaderInstance.read();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/read`"
  [this ]
  (-> this (.read)))

(defn release-lock
  "Method.

  The releaseLock() method of the `web.fetch.ReadableStreamDefaultReader`
  releases the reader's lock on the stream.

  `readableStreamDefaultReaderInstance.releaseLock();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/releaseLock`"
  [this ]
  (-> this (.releaseLock)))

(defn closed
  "Property.

  The closed getter property of the `web.files.ReadableStream`
  returns a promise that fulfills if the stream becomes closed
  the reader's lock is released, or rejects if the stream errors.

  `var closed = readableStreamDefaultReaderInstance.closed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/closed`"
  [this]
  (-> this (.closed)))

(defn set-closed!
  "Property.

  The closed getter property of the `web.files.ReadableStream`
  returns a promise that fulfills if the stream becomes closed
  the reader's lock is released, or rejects if the stream errors.

  `var closed = readableStreamDefaultReaderInstance.closed;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ReadableStreamDefaultReader/closed`"
  [this val]
  (aset this "closed" val))

