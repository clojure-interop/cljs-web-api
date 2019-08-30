(ns web.rtc.RTCDTMFToneChangeEvent
  "The RTCDTMFToneChangeEvent interface represents events sent to
  that DTMF tones have started or finished playing. This interface
  used by the tonechange event."
  (:refer-clojure :exclude []))

(defn tone
  "Property.

  [Read Only]

  The read-only property RTCDTMFToneChangeEvent.tone returns the
  character which has just begun to play, or an empty string (\\\"\\\").
  all queued tones have finished playing (that is, `RTCDTMFSender.toneBuffer`
  empty).

  `var tone = RTCDTMFToneChangeEvent.tone;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFToneChangeEvent/tone`"
  [this]
  (-> this (.-tone)))

