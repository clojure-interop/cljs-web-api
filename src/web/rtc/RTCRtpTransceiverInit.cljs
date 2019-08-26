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
  (-> this (.-direction)))

(defn set-direction!
  "Property.

  The new transceiver's preferred directionality. This value is
  to initialize the new RTCRtpTransceiver object's RTCRtpTransceiver.direction"
  [this val]
  (aset this "direction" val))

(defn send-encodings
  "Property.

  A list of encodings to allow when sending RTP media from the
  Each entry is of type RTCRtpEncodingParameters."
  [this]
  (-> this (.-sendEncodings)))

(defn set-send-encodings!
  "Property.

  A list of encodings to allow when sending RTP media from the
  Each entry is of type RTCRtpEncodingParameters."
  [this val]
  (aset this "sendEncodings" val))

(defn streams
  "Property.

  A list of MediaStream objects to add to the transceiver'sRTCRtpReceiver;
  the remote peer's RTCPeerConnection's track event occurs, these
  the streams that will be specified by that event."
  [this]
  (-> this (.-streams)))

(defn set-streams!
  "Property.

  A list of MediaStream objects to add to the transceiver'sRTCRtpReceiver;
  the remote peer's RTCPeerConnection's track event occurs, these
  the streams that will be specified by that event."
  [this val]
  (aset this "streams" val))

