(ns web.CountQueuingStrategy
  "The CountQueuingStrategy interface of the the Streams API provides
  built-in byte length queuing strategy that can be used when constructing"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The CountQueuingStrategy() constructor creates and returns a CountQueuingStrategy() object instance.

  {highWaterMark}
  An object containing a highWaterMark property. This is a non-negative integer defining the total number of chunks that can be contained in the internal queue before backpressure is applied.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CountQueuingStrategy/CountQueuingStrategy`"
  js/CountQueuingStrategy)

(defn size
  "Method.

  The size() method of the `web.CountQueuingStrategy` interface
  returns 1, so that the total queue size is a count of the number
  chunks in the queue.

  `var size = countQueuingStrategyInstance.size();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CountQueuingStrategy/size`"
  [this ]
  (-> this (.size)))

