(ns web.rtc.RTCRtpReceiver
  "The RTCRtpReceiver interface of the WebRTC API manages the reception
  decoding of data for a `web.audio.MediaStreamTrack` on an `web.audio.RTCPeerConnection`."
  (:refer-clojure :exclude []))

(defn get-contributing-sources
  "Method.

  The getContributingSources() method of the `web.rtc.RTCRtpReceiver`
  returns an array of `web.rtc.RTCRtpContributingSource` instances,
  corresponding to one CSRC (contributing source) identifier received
  the current RTCRtpReceiver in the last ten seconds.

  `var rtcRtpContributingSources = rtcRtpReceiver.getContributingSources()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/getContributingSources`"
  [this ]
  (-> this (.getContributingSources)))

(defn get-parameters
  "Method.

  Returns an RTCRtpParameters object which contains information
  how the RTC data is to be decoded."
  [this & args]
  (-> this .-getParameters (.apply this (clj->js args))))

(defn get-stats
  "Method.

  The `web.rtc.RTCRtpReceiver` method getStats() asynchronously
  an `web.rtc.RTCStatsReport` object which provides statistics
  incoming traffic on the owning `web.audio.RTCPeerConnection`,
  a `js.Promise` whose fulfillment handler will be called once
  results are available.

  `var promise = RTCRtpReceiver.getStats();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/getStats`"
  [this ]
  (-> this (.getStats)))

(defn get-synchronization-sources
  "Method.

  The getSynchronizationSources() method of the `web.rtc.RTCRtpReceiver`
  returns an array of `web.rtc.RTCRtpContributingSource` instances,
  corresponding to one SSRC (synchronization source) identifier
  by the current RTCRtpReceiver in the last ten seconds.

  `var rtcRtpContributingSources = rtcRtpReceiver.getContributingSources()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/getSynchronizationSources`"
  [this ]
  (-> this (.getSynchronizationSources)))

(defn track
  "Property.

  The track read-only property of the `web.rtc.RTCRtpReceiver`
  returns the `web.audio.MediaStreamTrack` associated with the
  `web.rtc.RTCRtpReceiver` instance.

  `var mediaStreamTrack = rtcRtpReceiver.track`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/track`"
  [this]
  (-> this (.-track)))

(defn set-track!
  "Property.

  The track read-only property of the `web.rtc.RTCRtpReceiver`
  returns the `web.audio.MediaStreamTrack` associated with the
  `web.rtc.RTCRtpReceiver` instance.

  `var mediaStreamTrack = rtcRtpReceiver.track`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/track`"
  [this val]
  (aset this "track" val))

(defn rtcp-transport
  "Property.

  Returns the RTCDtlsTransport instance over which RTCP is sent
  received."
  [this]
  (-> this (.-rtcpTransport)))

(defn set-rtcp-transport!
  "Property.

  Returns the RTCDtlsTransport instance over which RTCP is sent
  received."
  [this val]
  (aset this "rtcpTransport" val))

(defn transport
  "Property.

  Returns the RTCDtlsTransport instance over which the media for
  receiver's track is received."
  [this]
  (-> this (.-transport)))

(defn set-transport!
  "Property.

  Returns the RTCDtlsTransport instance over which the media for
  receiver's track is received."
  [this val]
  (aset this "transport" val))

