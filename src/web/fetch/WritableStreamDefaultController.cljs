(ns web.fetch.WritableStreamDefaultController
  "The WritableStreamDefaultController interface of the the Streams
  represents a controller allowing control of a `web.streams.WritableStream`'s
  When constructing a WritableStream, the underlying sink is given
  corresponding WritableStreamDefaultController instance to manipulate."
  (:refer-clojure :exclude []))

(defn error
  "Method.

  [Draft]
  [Experimental]

  The error() method of the `web.fetch.WritableStreamDefaultController`
  causes any future interactions with the associated stream to

  `writableStreamDefaultControllerInstance.error(e);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WritableStreamDefaultController/error`"
  [this e]
  (-> this (.error e)))

