(ns web.rtc.RTCRtpSynchronizationSource
  "The RTCRtpSynchronizationSource dictionary of the the WebRTC
  is used by `getSynchronizationSources()` to describe a particular
  source (SSRC)."
  (:refer-clojure :exclude []))

(defn voice-activity-flag
  "Property.

  [Read Only]

  The read-only voiceActivityFlag property of the `web.rtc.RTCRtpSynchronizationSource`
  indicates whether or not the most recent RTP packet on the source
  voice activity.

  `var voiceActivity = RTCRtpSynchronizationSource.voiceActivityFlag`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSynchronizationSource/voiceActivityFlag`"
  [this]
  (-> this (.-voiceActivityFlag)))

