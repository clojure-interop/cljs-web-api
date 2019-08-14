(ns rtc.RTCRtpSender
  "The RTCRtpSender interface provides the ability to control and
  details about how a particular `media.MediaStreamTrack` is encoded
  sent to a remote peer."
  (:refer-clojure :exclude []))

(defn get-parameters
  "Method.

  The getParameters() method of the `rtc.RTCRtpSender` interface
  an `rtc.RTCRtpSendParameters` object describing the current configuration
  the encoding and transmission of media on the `rtc.RTCRtpSender.track`

  `var rtpSendParameters = rtpSender.getParameters()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/getParameters`"
  [this ]
  (-> this (.getParameters)))

(defn get-stats
  "Method.

  The `rtc.RTCRtpSender` method getStats() asynchronously requests
  `rtc.RTCStatsReport` object which provides statistics about outgoing
  on the `rtc.RTCPeerConnection` which owns the sender, returning
  `web.Promise` which is fulfilled when the results are available.

  `var promise = RTCRtpSender.getStats();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/getStats`"
  [this ]
  (-> this (.getStats)))

(defn replace-track
  "Method.

  The `rtc.RTCRtpSender` method replaceTrack() replaces the track
  being used as the sender's source with a new `media.MediaStreamTrack`.

  `trackReplacedPromise = sender.replaceTrack(newTrack);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/replaceTrack`"
  [this new-track]
  (-> this (.replaceTrack new-track)))

(defn set-parameters
  "Method.

  The setParameters() method of the `rtc.RTCRtpSender` interface
  changes the configuration of sender's `web.track`, which is the
  for which the RTCRtpSender is responsible.

  `var promise = rtcRtpSender.setParameters(parameters)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/setParameters`"
  [this parameters]
  (-> this (.setParameters parameters)))

(defn dtmf
  "Property.

  The read-only dtmf property on the `rtc.RTCRtpSender` interface
  a `rtc.RTCDTMFSender` object which can be used to send DTMF tones
  the `rtc.RTCPeerConnection` . See Using DTMF for details on how
  make use of the returned RTCDTMFSender object.

  `var dtmfSender = RTCRtpSender.dtmf;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/dtmf`"
  [this]
  (-> this (.dtmf)))

(defn track
  "Property.

  The track read-only property of the `rtc.RTCRtpSender` interface
  the `media.MediaStreamTrack` which is being handled by the RTCRtpSender.
  track is null, the RTCRtpSender doesn't transmit anything.

  `var mediaStreamTrack = RTCRtpSender.track`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/track`"
  [this]
  (-> this (.track)))

(defn set-track!
  "Property.

  The track read-only property of the `rtc.RTCRtpSender` interface
  the `media.MediaStreamTrack` which is being handled by the RTCRtpSender.
  track is null, the RTCRtpSender doesn't transmit anything.

  `var mediaStreamTrack = RTCRtpSender.track`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/track`"
  [this val]
  (aset this "track" val))

