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
  (-> this (.-active)))

(defn set-active!
  "Property.

  If true, the described encoding is currently actively being used.
  is, for RTP senders, the encoding is currently being used to
  data, while for receivers, the encoding is being used to decode
  data. The default value is true."
  [this val]
  (aset this "active" val))

(defn codec-payload-type
  "Property.

  When describing a codec for an RTCRtpSender, codecPayloadType
  a single 8-bit byte (or octet) specifying the codec to use for
  the stream; the value matches one from the owning RTCRtpParameters
  codecs parameter. This value can only be set when creating the
  after that, this value is read only."
  [this]
  (-> this (.-codecPayloadType)))

(defn set-codec-payload-type!
  "Property.

  When describing a codec for an RTCRtpSender, codecPayloadType
  a single 8-bit byte (or octet) specifying the codec to use for
  the stream; the value matches one from the owning RTCRtpParameters
  codecs parameter. This value can only be set when creating the
  after that, this value is read only."
  [this val]
  (aset this "codecPayloadType" val))

(defn dtx
  "Property.

  Only used for an RTCRtpSender whose kind is audio, this property
  whether or not to use discontinuous transmission (a feature by
  a phone is turned off or the microphone muted automatically in
  absence of voice activity). The value is taken from the enumerated
  type RTCDtxStatus."
  [this]
  (-> this (.-dtx)))

(defn set-dtx!
  "Property.

  Only used for an RTCRtpSender whose kind is audio, this property
  whether or not to use discontinuous transmission (a feature by
  a phone is turned off or the microphone muted automatically in
  absence of voice activity). The value is taken from the enumerated
  type RTCDtxStatus."
  [this val]
  (aset this "dtx" val))

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
  (-> this (.-maxBitrate)))

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

(defn max-framerate
  "Property.

  A double-precision floating-point value specifying the maximum
  of frames per second to allow for this encoding."
  [this]
  (-> this (.-maxFramerate)))

(defn set-max-framerate!
  "Property.

  A double-precision floating-point value specifying the maximum
  of frames per second to allow for this encoding."
  [this val]
  (aset this "maxFramerate" val))

(defn ptime
  "Property.

  An unsigned long integer value indicating the preferred duration
  a media packet in milliseconds. This is typically only relevant
  audio encodings. The user agent will try to match this as well
  it can, but there is no guarantee."
  [this]
  (-> this (.-ptime)))

(defn set-ptime!
  "Property.

  An unsigned long integer value indicating the preferred duration
  a media packet in milliseconds. This is typically only relevant
  audio encodings. The user agent will try to match this as well
  it can, but there is no guarantee."
  [this val]
  (aset this "ptime" val))

(defn rid
  "Property.

  A DOMString which, if set, specifies an RTP stream ID (RID) to
  sent using the RID header extension. This parameter cannot be
  using setParameters(). Its value can only be set when the transceiver
  first created."
  [this]
  (-> this (.-rid)))

(defn set-rid!
  "Property.

  A DOMString which, if set, specifies an RTP stream ID (RID) to
  sent using the RID header extension. This parameter cannot be
  using setParameters(). Its value can only be set when the transceiver
  first created."
  [this val]
  (aset this "rid" val))

(defn scale-resolution-down-by
  "Property.

  The `web.rtc.RTCRtpEncodingParameters` dictionary's scaleResolutionDownBy
  can be used to specify a factor by which to reduce the size of
  video track during encoding.

  `rtpEncodingParameters.scaleResolutionDownBy = scalingFactor;

  rtpEncodingParameters = {
  scaleResolutionDownBy: scalingFactor
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpEncodingParameters/scaleResolutionDownBy`"
  [this]
  (-> this (.-scaleResolutionDownBy)))

(defn set-scale-resolution-down-by!
  "Property.

  The `web.rtc.RTCRtpEncodingParameters` dictionary's scaleResolutionDownBy
  can be used to specify a factor by which to reduce the size of
  video track during encoding.

  `rtpEncodingParameters.scaleResolutionDownBy = scalingFactor;

  rtpEncodingParameters = {
  scaleResolutionDownBy: scalingFactor
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpEncodingParameters/scaleResolutionDownBy`"
  [this val]
  (aset this "scaleResolutionDownBy" val))

