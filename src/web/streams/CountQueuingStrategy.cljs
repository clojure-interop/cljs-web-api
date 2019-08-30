(ns web.streams.CountQueuingStrategy
  "The CountQueuingStrategy interface of the the Streams API provides
  built-in byte length queuing strategy that can be used when constructing"
  (:refer-clojure :exclude []))

(defn size
  "Method.

  [Draft]
  [Experimental]

  The size() method of the `web.streams.CountQueuingStrategy` interface
  returns 1, so that the total queue size is a count of the number
  chunks in the queue.

  `var size = countQueuingStrategyInstance.size();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CountQueuingStrategy/size`"
  [this ]
  (-> this (.size)))

