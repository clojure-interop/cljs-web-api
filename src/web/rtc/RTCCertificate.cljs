(ns web.rtc.RTCCertificate
  "The interface of the the WebRTC API provides an object represents
  certificate that an `web.audio.RTCPeerConnection` uses to authenticate."
  (:refer-clojure :exclude []))

(defn expires
  "Property.

  Returns the expiration date of the certificate."
  [this]
  (-> this (.expires)))

(defn set-expires!
  "Property.

  Returns the expiration date of the certificate."
  [this val]
  (aset this "expires" val))

