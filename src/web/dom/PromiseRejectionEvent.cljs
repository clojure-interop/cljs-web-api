(ns web.dom.PromiseRejectionEvent
  "The PromiseRejectionEvent interface represents events which are
  to the global script context when JavaScript `js.Promise`s are"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The PromiseRejectionEvent() constructor returns a newly created `web.dom.PromiseRejectionEvent`, which represents events fired when a JavaScript `js.Promise` is rejected.

  The PromiseRejectionEvent() constructor also inherits parameters from `Event()`.


  type
  A string representing the name of the type of the PromiseRejectionEvent. This is case-sensitive and should be one of \\\"rejectionhandled\\\" or \\\"unhandledrejection\\\", to match the event names of the possible (non-synthetic) `web.dom.PromiseRejectionEvent` events that user agents can actually fire).
  options
  An `js.Object` specifying details about the rejection which occurred:

  promise
  The `js.Promise` that was rejected.
  reason
  Any value or `js.Object` which represents the reason the promise was rejected. This can be anything from a numeric error code to an error `web.dom.DOMString` to an object which contains detailed information describing the situation resulting in the promise being rejected.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent/PromiseRejectionEvent`"
  js/PromiseRejectionEvent)

(defn promise
  "Property.

  The `web.dom.PromiseRejectionEvent` interface's promise read-only
  indicates the JavaScript `js.Promise` which was rejected. You
  examine the event's `PromiseRejectionEvent.reason` property to
  why the promise was rejected.

  `promise = PromiseRejectionEvent.promise`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent/promise`"
  [this]
  (-> this (.promise)))

(defn set-promise!
  "Property.

  The `web.dom.PromiseRejectionEvent` interface's promise read-only
  indicates the JavaScript `js.Promise` which was rejected. You
  examine the event's `PromiseRejectionEvent.reason` property to
  why the promise was rejected.

  `promise = PromiseRejectionEvent.promise`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent/promise`"
  [this val]
  (aset this "promise" val))

(defn reason
  "Property.

  The read-only `PromiseRejection` property reason read-only property
  any JavaScript value or `js.Object` which provides the reason
  into `Promise.reject()`. This in theory provides information
  why the promise was rejected.

  `reason = PromiseRejectionEvent.reason`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent/reason`"
  [this]
  (-> this (.reason)))

(defn set-reason!
  "Property.

  The read-only `PromiseRejection` property reason read-only property
  any JavaScript value or `js.Object` which provides the reason
  into `Promise.reject()`. This in theory provides information
  why the promise was rejected.

  `reason = PromiseRejectionEvent.reason`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PromiseRejectionEvent/reason`"
  [this val]
  (aset this "reason" val))

