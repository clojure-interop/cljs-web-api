(ns rtc.RTCOfferAnswerOptions
  "The WebRTC API's RTCOfferAnswerOptions dictionary is used to
  options that configure and control the process of creating WebRTC
  or answers."
  (:refer-clojure :exclude []))

(defn voice-activity-detection
  "Property.

  The voiceActivityDetection property of the `rtc.RTCOfferAnswerOptions`
  is used to specify whether or not to use automatic voice detection
  the audio on an `rtc.RTCPeerConnection`. The default value, true,
  that voice detection should be used and that if possible, the
  agent should automatically disable or mute outgoing audio when
  audio source is not sensing a human voice.

  `var options = {
  voiceActivityDetection: trueOrFalse
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOfferAnswerOptions/voiceActivityDetection`"
  [this]
  (-> this (.voiceActivityDetection)))

(defn set-voice-activity-detection!
  "Property.

  The voiceActivityDetection property of the `rtc.RTCOfferAnswerOptions`
  is used to specify whether or not to use automatic voice detection
  the audio on an `rtc.RTCPeerConnection`. The default value, true,
  that voice detection should be used and that if possible, the
  agent should automatically disable or mute outgoing audio when
  audio source is not sensing a human voice.

  `var options = {
  voiceActivityDetection: trueOrFalse
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOfferAnswerOptions/voiceActivityDetection`"
  [this val]
  (aset this "voiceActivityDetection" val))

