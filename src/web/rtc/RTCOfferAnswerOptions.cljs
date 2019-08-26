(ns web.rtc.RTCOfferAnswerOptions
  "The WebRTC API's RTCOfferAnswerOptions dictionary is used to
  options that configure and control the process of creating WebRTC
  or answers."
  (:refer-clojure :exclude []))

(defn voice-activity-detection
  "Property.

  The voiceActivityDetection property of the `web.rtc.RTCOfferAnswerOptions`
  is used to specify whether or not to use automatic voice detection
  the audio on an `web.audio.RTCPeerConnection`. The default value,
  indicates that voice detection should be used and that if possible,
  user agent should automatically disable or mute outgoing audio
  the audio source is not sensing a human voice.

  `var options = {
  voiceActivityDetection: trueOrFalse
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOfferAnswerOptions/voiceActivityDetection`"
  [this]
  (-> this (.voiceActivityDetection)))

(defn set-voice-activity-detection!
  "Property.

  The voiceActivityDetection property of the `web.rtc.RTCOfferAnswerOptions`
  is used to specify whether or not to use automatic voice detection
  the audio on an `web.audio.RTCPeerConnection`. The default value,
  indicates that voice detection should be used and that if possible,
  user agent should automatically disable or mute outgoing audio
  the audio source is not sensing a human voice.

  `var options = {
  voiceActivityDetection: trueOrFalse
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOfferAnswerOptions/voiceActivityDetection`"
  [this val]
  (aset this "voiceActivityDetection" val))

