(ns web.audio.RTCRtpSender
  "The RTCRtpSender interface provides the ability to control and
  details about how a particular `web.audio.MediaStreamTrack` is
  and sent to a remote peer."
  (:refer-clojure :exclude []))

(defn get-parameters
  "Method.

  The getParameters() method of the `web.audio.RTCRtpSender` interface
  an `web.audio.RTCRtpSendParameters` object describing the current
  for the encoding and transmission of media on the `RTCRtpSender.track`

  `var rtpSendParameters = rtpSender.getParameters()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/getParameters`"
  [this ]
  (-> this (.getParameters)))

(defn get-stats
  "Method.

  The `web.audio.RTCRtpSender` method getStats() asynchronously
  an `web.rtc.RTCStatsReport` object which provides statistics
  outgoing traffic on the `web.audio.RTCPeerConnection` which owns
  sender, returning a `js.Promise` which is fulfilled when the
  are available.

  `var promise = RTCRtpSender.getStats();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/getStats`"
  [this ]
  (-> this (.getStats)))

(defn set-parameters
  "Method.

  The setParameters() method of the `web.audio.RTCRtpSender` interface
  changes the configuration of sender's `track`, which is the `web.audio.MediaStreamTrack`
  which the RTCRtpSender is responsible.

  `var promise = rtcRtpSender.setParameters(parameters)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/setParameters`"
  [this parameters]
  (-> this (.setParameters parameters)))

(defn replace-track
  "Method.

  The `web.audio.RTCRtpSender` method replaceTrack() replaces the
  currently being used as the sender's source with a new `web.audio.MediaStreamTrack`.

  `trackReplacedPromise = sender.replaceTrack(newTrack);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/replaceTrack`"
  [this new-track]
  (-> this (.replaceTrack new-track)))

(defn dtmf
  "Property.

  The read-only dtmf property on the `web.audio.RTCRtpSender` interface
  a `web.audio.RTCDTMFSender` object which can be used to send
  tones over the `web.audio.RTCPeerConnection` . See Using DTMF
  details on how to make use of the returned RTCDTMFSender object.

  `var dtmfSender = RTCRtpSender.dtmf;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/dtmf`"
  [this]
  (-> this (.-dtmf)))

(defn rtcp-transport
  "Property.

  The transport over which Real-time Transport Control Protocol
  information is exchanged. This value is null before the RTCDtlsTransport
  is created. When bundling is in use, more than one RTCRtpSender
  share the same transport, sending all RTP and RTCP information
  that one transport."
  [this]
  (-> this (.-rtcpTransport)))

(defn set-rtcp-transport!
  "Property.

  The transport over which Real-time Transport Control Protocol
  information is exchanged. This value is null before the RTCDtlsTransport
  is created. When bundling is in use, more than one RTCRtpSender
  share the same transport, sending all RTP and RTCP information
  that one transport."
  [this val]
  (aset this "rtcpTransport" val))

(defn track
  "Property.

  The track read-only property of the `web.audio.RTCRtpSender`
  returns the `web.audio.MediaStreamTrack` which is being handled
  the RTCRtpSender. If track is null, the RTCRtpSender doesn't
  anything.

  `var mediaStreamTrack = RTCRtpSender.track`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/track`"
  [this]
  (-> this (.-track)))

(defn set-track!
  "Property.

  The track read-only property of the `web.audio.RTCRtpSender`
  returns the `web.audio.MediaStreamTrack` which is being handled
  the RTCRtpSender. If track is null, the RTCRtpSender doesn't
  anything.

  `var mediaStreamTrack = RTCRtpSender.track`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/track`"
  [this val]
  (aset this "track" val))

(defn transport
  "Property.

  The RTCDtlsTransport over which media data for the track is being
  The data is transmitted using RTP packets. Before the transport
  established, this value is null."
  [this]
  (-> this (.-transport)))

(defn set-transport!
  "Property.

  The RTCDtlsTransport over which media data for the track is being
  The data is transmitted using RTP packets. Before the transport
  established, this value is null."
  [this val]
  (aset this "transport" val))

