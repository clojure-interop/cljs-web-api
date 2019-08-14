(ns rtc.RTCDTMFSender.ev
  "RTCDTMFSender Events."
  (:refer-clojure :exclude []))

(def tonechange
  "Event.

  The tonechange event is sent to an `rtc.RTCDTMFSender` by the
  API to indicate when DTMF tones previously queued for sending
  calling `rtc.RTCDTMFSender.insertDTMF()`) begin and end.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender/tonechange_event`"

  "tonechange")

