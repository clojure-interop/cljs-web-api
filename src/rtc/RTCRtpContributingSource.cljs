(ns rtc.RTCRtpContributingSource
  "The RTCRtpContributingSource dictionary of the the WebRTC API
  used by `web.getContributingSources()` to provide information
  a given contributing source (CSRC), including the most recent
  a packet that the source contributed was played out."
  (:refer-clojure :exclude []))

(defn audio-level
  "Property.

  The read-only audioLevel property of the `rtc.RTCRtpContributingSource`
  indicates the audio level contained in the last RTP packet played
  the described source.

  `var audioLevel = RTCRtpContributingSource.audioLevel`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpContributingSource/audioLevel`"
  [this]
  (-> this (.audioLevel)))

(defn set-audio-level!
  "Property.

  The read-only audioLevel property of the `rtc.RTCRtpContributingSource`
  indicates the audio level contained in the last RTP packet played
  the described source.

  `var audioLevel = RTCRtpContributingSource.audioLevel`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpContributingSource/audioLevel`"
  [this val]
  (aset this "audioLevel" val))

(defn source
  "Property.

  The read-only source property of the `rtc.RTCRtpContributingSource`
  returns the source identifier of a particular stream of RTP packets.

  `var sourceID = RTCRtpContributingSource.source`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpContributingSource/source`"
  [this]
  (-> this (.source)))

(defn set-source!
  "Property.

  The read-only source property of the `rtc.RTCRtpContributingSource`
  returns the source identifier of a particular stream of RTP packets.

  `var sourceID = RTCRtpContributingSource.source`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpContributingSource/source`"
  [this val]
  (aset this "source" val))

(defn timestamp
  "Property.

  The read-only timestamp property of the `rtc.RTCRtpContributingSource`
  returns a `dom.DOMHighResTimeStamp` indicating the most recent
  of playout of an RTP packet from the source.

  `var domHighResTimeStamp = RTCRtpContributingSource.timestamp`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpContributingSource/timestamp`"
  [this]
  (-> this (.timestamp)))

(defn set-timestamp!
  "Property.

  The read-only timestamp property of the `rtc.RTCRtpContributingSource`
  returns a `dom.DOMHighResTimeStamp` indicating the most recent
  of playout of an RTP packet from the source.

  `var domHighResTimeStamp = RTCRtpContributingSource.timestamp`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpContributingSource/timestamp`"
  [this val]
  (aset this "timestamp" val))

