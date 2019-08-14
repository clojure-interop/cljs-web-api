(ns rtc.RTCDTMFToneChangeEvent
  "The RTCDTMFToneChangeEvent interface represents events sent to
  that DTMF tones have started or finished playing. This interface
  used by the tonechange event."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The RTCDTMFToneChangeEvent() constructor creates a new `rtc.RTCDTMFToneChangeEvent`.

  type
  A `dom.DOMString` containing the name of the event. This is always \\\"tonechange\\\".
  options
  A dictionary of type RTCDTMFToneChangeEventInit, which may contain one or more of the following fields:

  tone
  A `dom.DOMString` containing a single DTMF tone character which has just begun to play, or an empty string (\\\"\\\") to indicate that the previous tone has stopped playing. See Tone characters for details on what characters are permitted.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFToneChangeEvent/RTCDTMFToneChangeEvent`"
  js/RTCDTMFToneChangeEvent)

(defn tone
  "Property.

  The read-only property RTCDTMFToneChangeEvent.tone returns the
  character which has just begun to play, or an empty string (\\\"\\\").
  all queued tones have finished playing (that is, `rtc.RTCDTMFSender.toneBuffer`
  empty).

  `var tone = RTCDTMFToneChangeEvent.tone;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFToneChangeEvent/tone`"
  [this]
  (-> this (.tone)))

(defn set-tone!
  "Property.

  The read-only property RTCDTMFToneChangeEvent.tone returns the
  character which has just begun to play, or an empty string (\\\"\\\").
  all queued tones have finished playing (that is, `rtc.RTCDTMFSender.toneBuffer`
  empty).

  `var tone = RTCDTMFToneChangeEvent.tone;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFToneChangeEvent/tone`"
  [this val]
  (aset this "tone" val))

