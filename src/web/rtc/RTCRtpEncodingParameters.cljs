(ns web.rtc.RTCRtpEncodingParameters
  "An instance of the WebRTC API's RTCRtpEncodingParameters dictionary
  a single configuration of a codec for an `web.audio.RTCRtpSender`."
  (:refer-clojure :exclude []))

(defn active
  "Property.

  If true, the described encoding is currently actively being used.
  is, for RTP senders, the encoding is currently being used to
  data, while for receivers, the encoding is being used to decode
  data. The default value is true."
  [this]
  (-> this (.active)))

(defn set-active!
  "Property.

  If true, the described encoding is currently actively being used.
  is, for RTP senders, the encoding is currently being used to
  data, while for receivers, the encoding is being used to decode
  data. The default value is true."
  [this val]
  (aset this "active" val))

(defn max-bitrate
  "Property.

  The `web.rtc.RTCRtpEncodingParameters` dictionary's maxBitrate
  specifies the maximum number of bits per second to allow a track
  with this encoding to use.

  `rtpEncodingParameters.maxBitrate = maxBitsPerSecond;

  rtpEncodingParameters = {
  maxBitrate: maxBitsPerSecond
  };

  maxBitsPerSecond = rtpEncodingParameters.maxBitrate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpEncodingParameters/maxBitrate`"
  [this]
  (-> this (.maxBitrate)))

(defn set-max-bitrate!
  "Property.

  The `web.rtc.RTCRtpEncodingParameters` dictionary's maxBitrate
  specifies the maximum number of bits per second to allow a track
  with this encoding to use.

  `rtpEncodingParameters.maxBitrate = maxBitsPerSecond;

  rtpEncodingParameters = {
  maxBitrate: maxBitsPerSecond
  };

  maxBitsPerSecond = rtpEncodingParameters.maxBitrate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpEncodingParameters/maxBitrate`"
  [this val]
  (aset this "maxBitrate" val))

