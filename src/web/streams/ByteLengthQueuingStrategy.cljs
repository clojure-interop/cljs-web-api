(ns web.streams.ByteLengthQueuingStrategy
  "The ByteLengthQueuingStrategy interface of the the Streams API
  a built-in byte length queuing strategy that can be used when
  streams."
  (:refer-clojure :exclude []))

(defn size
  "Method.

  [Draft]
  [Experimental]

  The size() method of the `ByteLengthQueueingStrategy` interface
  the given chunk’s byteLength property.

  `var size = byteLengthQueuingStrategyInstance.size(chunk);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ByteLengthQueuingStrategy/size`"
  [this chunk]
  (-> this (.size chunk)))

