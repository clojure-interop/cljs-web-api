(ns web.AbortSignal
  "The AbortSignal interface represents a signal object that allows
  to communicate with a DOM request (such as a Fetch) and abort
  if required via an `web.dom.AbortController` object."
  (:refer-clojure :exclude []))

(defn aborted
  "Property.

  [Read Only]
  [Experimental]

  The aborted read-only property returns a `js.Boolean` that indicates
  the DOM request(s) the signal is communicating with is/are aborted
  or not (false).

  `var isAborted = abortSignal.aborted;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/aborted`"
  [this]
  (-> this (.-aborted)))

(defn onabort
  "Property.

  [Read Only]
  [Experimental]

  The onabort read-only property of the `FetchSignal` interface
  an event handler Invoked when an abort event fires, i.e. when
  fetch request(s) the signal is communicating with is/are aborted.

  `abortSignal.onabort = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/onabort`"
  [this]
  (-> this (.-onabort)))

