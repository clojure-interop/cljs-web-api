(ns web.dom.PromiseRejectionEvent.ev
  "PromiseRejectionEvent Events."
  (:refer-clojure :exclude []))

(def rejectionhandled
  "Event.

  Fired when a JavaScript Promise is rejected, and after the rejection
  handled by the promise's rejection handling code."

  "rejectionhandled")

(def unhandledrejection
  "Event.

  Fired when a JavaScript Promise is rejected but there is no rejection
  to deal with the rejection."

  "unhandledrejection")

