(ns web.rtc.RTCRtpCodecParameters
  "The `web.rtc.RTCRtpCodecParameters` dictionary, part of the WebRTC
  is used to describe the configuration parameters for a single
  codec."
  (:refer-clojure :exclude []))

(defn payload-type
  "Property.

  The RTP payload type used to identify this codec."
  [this]
  (-> this (.payloadType)))

(defn set-payload-type!
  "Property.

  The RTP payload type used to identify this codec."
  [this val]
  (aset this "payloadType" val))

