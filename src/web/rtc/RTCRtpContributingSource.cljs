(ns web.rtc.RTCRtpContributingSource
  "The RTCRtpContributingSource dictionary of the the WebRTC API
  used by `getContributingSources()` to provide information about
  given contributing source (CSRC), including the most recent time
  packet that the source contributed was played out."
  (:refer-clojure :exclude []))

(defn audio-level
  "Property.

  [Read Only]

  The read-only audioLevel property of the `web.rtc.RTCRtpContributingSource`
  indicates the audio level contained in the last RTP packet played
  the described source.

  `var audioLevel = RTCRtpContributingSource.audioLevel`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpContributingSource/audioLevel`"
  [this]
  (-> this (.-audioLevel)))

(defn source
  "Property.

  [Read Only]

  The read-only source property of the `web.rtc.RTCRtpContributingSource`
  returns the source identifier of a particular stream of RTP packets.

  `var sourceID = RTCRtpContributingSource.source`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpContributingSource/source`"
  [this]
  (-> this (.-source)))

(defn timestamp
  "Property.

  [Read Only]

  The read-only timestamp property of the `web.rtc.RTCRtpContributingSource`
  returns a `web.dom.DOMHighResTimeStamp` indicating the most recent
  of playout of an RTP packet from the source.

  `var domHighResTimeStamp = RTCRtpContributingSource.timestamp`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpContributingSource/timestamp`"
  [this]
  (-> this (.-timestamp)))

