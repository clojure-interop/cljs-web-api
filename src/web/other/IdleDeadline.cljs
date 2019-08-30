(ns web.other.IdleDeadline
  "See our complete example in the article Cooperative Scheduling
  Background Tasks API."
  (:refer-clojure :exclude []))

(defn time-remaining
  "Method.

  [Experimental]

  The timeRemaining() method on the `web.other.IdleDeadline` interface
  the estimated number of milliseconds remaining in the current
  period. The callback can call this method at any time to determine
  much time it can continue to work before it must return. For
  if the callback finishes a task and has another one to begin,
  can call timeRemaining() to see if there's enough time to complete
  next task. If there isn't, the callback can just return immediately,
  look for other work to do with the remaining time.

  `timeRemaining = IdleDeadline.timeRemaining();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IdleDeadline/timeRemaining`"
  [this ]
  (-> this (.timeRemaining)))

(defn did-timeout
  "Property.

  [Read Only]

  The read-only didTimeout property on the `web.other.IdleDeadline`
  is a Boolean value which indicates whether or not the idle callback
  being invoked because the timeout interval specified when `Window.requestIdleCallback()`
  called has expired.

  `var timedOut = IdleDeadline.didTimeout;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/IdleDeadline/didTimeout`"
  [this]
  (-> this (.-didTimeout)))

