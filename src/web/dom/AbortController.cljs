(ns web.dom.AbortController
  "The AbortController interface represents a controller object
  allows you to abort one or more DOM requests as and when desired."
  (:refer-clojure :exclude []))

(defn abort
  "Method.

  [Experimental]

  The abort() method of the `web.dom.AbortController` interface
  a DOM request (e.g. a Fetch request) before it has completed.
  is able to abort fetch requests, consumption of any response
  and streams.

  `controller.abort();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbortController/abort`"
  [this ]
  (-> this (.abort)))

(defn signal
  "Property.

  [Read Only]
  [Experimental]

  The signal read-only property of the `web.dom.AbortController`
  returns an `web.AbortSignal` object instance, which can be used
  communicate with/abort a DOM request as desired.

  `var signal = abortController.signal;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AbortController/signal`"
  [this]
  (-> this (.-signal)))

