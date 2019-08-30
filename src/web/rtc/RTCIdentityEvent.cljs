(ns web.rtc.RTCIdentityEvent
  "The RTCIdentityEvent interface represents an identity assertion
  by an identity provider (idP). This is usually for an `web.audio.RTCPeerConnection`.
  only event sent with this type is identityresult.."
  (:refer-clojure :exclude []))

(defn assertion
  "Property.

  [Read Only]
  [Experimental]

  The read-only property RTCIdentityEvent.assertion returns the
  containing a blob being the coded assertion associated with the

  `var blob = event.assertion;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIdentityEvent/assertion`"
  [this]
  (-> this (.-assertion)))

