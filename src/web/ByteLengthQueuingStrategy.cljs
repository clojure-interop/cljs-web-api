(ns web.ByteLengthQueuingStrategy
  "The ByteLengthQueuingStrategy interface of the the Streams API
  a built-in byte length queuing strategy that can be used when
  streams."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ByteLengthQueuingStrategy() constructor creates and returns a ByteLengthQueuingStrategy() object instance.

  {highWaterMark}
  An object containing a highWaterMark property. This is a non-negative integer defining the total number of chunks that can be contained in the internal queue before backpressure is applied.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ByteLengthQueuingStrategy/ByteLengthQueuingStrategy`"
  js/ByteLengthQueuingStrategy)

(defn size
  "Method.

  The size() method of the `web.ByteLengthQueueingStrategy` interface
  the given chunk’s byteLength property.

  `var size = byteLengthQueuingStrategyInstance.size(chunk);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ByteLengthQueuingStrategy/size`"
  [this chunk]
  (-> this (.size chunk)))

