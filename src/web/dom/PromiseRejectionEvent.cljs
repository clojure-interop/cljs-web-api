(ns web.dom.PromiseRejectionEvent
  "The PromiseRejectionEvent interface represents events which are
  to the global script context when JavaScript `js.Promise`s are"
  (:refer-clojure :exclude []))

(defn promise
  "Property.

  [Read Only]

  The `web.dom.PromiseRejectionEvent` interface's promise read-only
  indicates the JavaScript `js.Promise` which was rejected. You
  examine the event's `PromiseRejectionEvent.reason` property to
  why the promise was rejected.

  `promise = PromiseRejectionEvent.promise`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent/promise`"
  [this]
  (-> this (.-promise)))

(defn reason
  "Property.

  [Read Only]

  The read-only `PromiseRejection` property reason read-only property
  any JavaScript value or `js.Object` which provides the reason
  into `Promise.reject()`. This in theory provides information
  why the promise was rejected.

  `reason = PromiseRejectionEvent.reason`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent/reason`"
  [this]
  (-> this (.-reason)))

