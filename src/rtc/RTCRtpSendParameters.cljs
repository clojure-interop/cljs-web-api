(ns rtc.RTCRtpSendParameters
  "The WebRTC API's RTCRtpSendParameters dictionary is used to specify
  parameters for an `rtc.RTCRtpSender` when calling its `web.setParameters()`"
  (:refer-clojure :exclude []))

(defn encodings
  "Property.

  The `rtc.RTCRtpSendParameters` dictionary's encodings property
  an `rtc.RTCRtpEncodingParameters` object providing configuration
  for the encoder being used for the `rtc.RTCRtpSender`'s `web.track`.

  `sendParameters.encodings = encodingParameterList;

  encodingParameterList = sendParameters.encodings;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSendParameters/encodings`"
  [this]
  (-> this (.encodings)))

(defn set-encodings!
  "Property.

  The `rtc.RTCRtpSendParameters` dictionary's encodings property
  an `rtc.RTCRtpEncodingParameters` object providing configuration
  for the encoder being used for the `rtc.RTCRtpSender`'s `web.track`.

  `sendParameters.encodings = encodingParameterList;

  encodingParameterList = sendParameters.encodings;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSendParameters/encodings`"
  [this val]
  (aset this "encodings" val))

