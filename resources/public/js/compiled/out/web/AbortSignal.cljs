(ns web.AbortSignal
  "The AbortSignal interface represents a signal object that allows
  to communicate with a DOM request (such as a Fetch) and abort
  if required via an `web.AbortController` object."
  (:refer-clojure :exclude []))

(defn aborted
  "Property.

  The aborted read-only property returns a `web.Boolean` that indicates
  the DOM request(s) the signal is communicating with is/are aborted
  or not (false).

  `var isAborted = abortSignal.aborted;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/aborted`"
  [this]
  (-> this (.aborted)))

(defn set-aborted!
  "Property.

  The aborted read-only property returns a `web.Boolean` that indicates
  the DOM request(s) the signal is communicating with is/are aborted
  or not (false).

  `var isAborted = abortSignal.aborted;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/aborted`"
  [this val]
  (aset this "aborted" val))

(defn onabort
  "Property.

  The onabort read-only property of the `web.FetchSignal` interface
  an event handler Invoked when an abort event fires, i.e. when
  fetch request(s) the signal is communicating with is/are aborted.

  `abortSignal.onabort = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/onabort`"
  [this]
  (-> this (.onabort)))

(defn set-onabort!
  "Property.

  The onabort read-only property of the `web.FetchSignal` interface
  an event handler Invoked when an abort event fires, i.e. when
  fetch request(s) the signal is communicating with is/are aborted.

  `abortSignal.onabort = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal/onabort`"
  [this val]
  (aset this "onabort" val))

