(ns rtc.RTCRtpEncodingParameters
  "An instance of the WebRTC API's RTCRtpEncodingParameters dictionary
  a single configuration of a codec for an `rtc.RTCRtpSender`."
  (:refer-clojure :exclude []))

(defn max-bitrate
  "Property.

  The `rtc.RTCRtpEncodingParameters` dictionary's maxBitrate property
  the maximum number of bits per second to allow a track encoded
  this encoding to use.

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

  The `rtc.RTCRtpEncodingParameters` dictionary's maxBitrate property
  the maximum number of bits per second to allow a track encoded
  this encoding to use.

  `rtpEncodingParameters.maxBitrate = maxBitsPerSecond;

  rtpEncodingParameters = {
  maxBitrate: maxBitsPerSecond
  };

  maxBitsPerSecond = rtpEncodingParameters.maxBitrate;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpEncodingParameters/maxBitrate`"
  [this val]
  (aset this "maxBitrate" val))

(defn scale-resolution-down-by
  "Property.

  The `rtc.RTCRtpEncodingParameters` dictionary's scaleResolutionDownBy
  can be used to specify a factor by which to reduce the size of
  video track during encoding.

  `rtpEncodingParameters.scaleResolutionDownBy = scalingFactor;

  rtpEncodingParameters = {
  scaleResolutionDownBy: scalingFactor
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpEncodingParameters/scaleResolutionDownBy`"
  [this]
  (-> this (.scaleResolutionDownBy)))

(defn set-scale-resolution-down-by!
  "Property.

  The `rtc.RTCRtpEncodingParameters` dictionary's scaleResolutionDownBy
  can be used to specify a factor by which to reduce the size of
  video track during encoding.

  `rtpEncodingParameters.scaleResolutionDownBy = scalingFactor;

  rtpEncodingParameters = {
  scaleResolutionDownBy: scalingFactor
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpEncodingParameters/scaleResolutionDownBy`"
  [this val]
  (aset this "scaleResolutionDownBy" val))

