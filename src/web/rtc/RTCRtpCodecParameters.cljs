(ns web.rtc.RTCRtpCodecParameters
  "The `web.rtc.RTCRtpCodecParameters` dictionary, part of the WebRTC
  is used to describe the configuration parameters for a single
  codec."
  (:refer-clojure :exclude []))

(defn payload-type
  "Property.

  The RTP payload type used to identify this codec."
  [this]
  (-> this (.-payloadType)))

(defn set-payload-type!
  "Property.

  The RTP payload type used to identify this codec."
  [this val]
  (aset this "payloadType" val))

(defn mime-type
  "Property.

  The codec's MIME media type and subtype specified as a DOMString
  the form \"type/subtype\". IANA maintains a registry of valid MIME"
  [this]
  (-> this (.-mimeType)))

(defn set-mime-type!
  "Property.

  The codec's MIME media type and subtype specified as a DOMString
  the form \"type/subtype\". IANA maintains a registry of valid MIME"
  [this val]
  (aset this "mimeType" val))

(defn clock-rate
  "Property.

  An unsigned long integer value specifying the codec's clock rate
  hertz (Hz). The clock rate is the rate at which the codec's RTP
  advances. Most codecs have specific values or ranges of values
  permit; see the IANA payload format media type registry for details."
  [this]
  (-> this (.-clockRate)))

(defn set-clock-rate!
  "Property.

  An unsigned long integer value specifying the codec's clock rate
  hertz (Hz). The clock rate is the rate at which the codec's RTP
  advances. Most codecs have specific values or ranges of values
  permit; see the IANA payload format media type registry for details."
  [this val]
  (aset this "clockRate" val))

(defn channels
  "Property.

  An unsigned short integer indicating the number of channels the
  should support. For example, for audio codecs, a value of 1 specifies
  sound while 2 indicates stereo."
  [this]
  (-> this (.-channels)))

(defn set-channels!
  "Property.

  An unsigned short integer indicating the number of channels the
  should support. For example, for audio codecs, a value of 1 specifies
  sound while 2 indicates stereo."
  [this val]
  (aset this "channels" val))

(defn sdp-fmtp-line
  "Property.

  A DOMString containing the format-specific parameters field from
  \"a=fmtp\" line in the codec's SDP, if one is present; see section
  of the IETF specification for JSEP.
  Note: On an RTCRtpReceiver, the format-specific parameters come
  the SDP sent by the remote peer, while for RTCRtpSender, they're
  by the local description."
  [this]
  (-> this (.-sdpFmtpLine)))

(defn set-sdp-fmtp-line!
  "Property.

  A DOMString containing the format-specific parameters field from
  \"a=fmtp\" line in the codec's SDP, if one is present; see section
  of the IETF specification for JSEP.
  Note: On an RTCRtpReceiver, the format-specific parameters come
  the SDP sent by the remote peer, while for RTCRtpSender, they're
  by the local description."
  [this val]
  (aset this "sdpFmtpLine" val))

