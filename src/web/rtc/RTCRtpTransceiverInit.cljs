(ns web.rtc.RTCRtpTransceiverInit
  "The RTCRtpTransceiverInit dictionary is used when calling the
  function `RTCPeerConnection.addTransceiver()` to provide configuration
  for the new transceiver."
  (:refer-clojure :exclude []))

(defn direction
  "Property.

  The new transceiver's preferred directionality. This value is
  to initialize the new RTCRtpTransceiver object's RTCRtpTransceiver.direction"
  [this]
  (-> this (.direction)))

(defn set-direction!
  "Property.

  The new transceiver's preferred directionality. This value is
  to initialize the new RTCRtpTransceiver object's RTCRtpTransceiver.direction"
  [this val]
  (aset this "direction" val))

