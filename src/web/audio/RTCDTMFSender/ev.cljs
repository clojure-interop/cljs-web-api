(ns web.audio.RTCDTMFSender.ev
  "RTCDTMFSender Events."
  (:refer-clojure :exclude []))

(def tonechange
  "Event.

  The tonechange event is sent to an `web.audio.RTCDTMFSender`
  the WebRTC API to indicate when DTMF tones previously queued
  sending (by calling `RTCDTMFSender.insertDTMF()`) begin and end.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender/tonechange_event`"

  "tonechange")

