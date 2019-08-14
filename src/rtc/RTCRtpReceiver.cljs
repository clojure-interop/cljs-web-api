(ns rtc.RTCRtpReceiver
  "The RTCRtpReceiver interface of the WebRTC API manages the reception
  decoding of data for a `media.MediaStreamTrack` on an `rtc.RTCPeerConnection`."
  (:refer-clojure :exclude []))

(defn get-contributing-sources
  "Method.

  The getContributingSources() method of the `rtc.RTCRtpReceiver`
  returns an array of `rtc.RTCRtpContributingSource` instances,
  corresponding to one CSRC (contributing source) identifier received
  the current RTCRtpReceiver in the last ten seconds.

  `var rtcRtpContributingSources = rtcRtpReceiver.getContributingSources()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/getContributingSources`"
  [this ]
  (-> this (.getContributingSources)))

(defn get-stats
  "Method.

  The `rtc.RTCRtpReceiver` method getStats() asynchronously requests
  `rtc.RTCStatsReport` object which provides statistics about incoming
  on the owning `rtc.RTCPeerConnection`, returning a `web.Promise`
  fulfillment handler will be called once the results are available.

  `var promise = RTCRtpReceiver.getStats();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/getStats`"
  [this ]
  (-> this (.getStats)))

(defn get-synchronization-sources
  "Method.

  The getSynchronizationSources() method of the `rtc.RTCRtpReceiver`
  returns an array of `rtc.RTCRtpContributingSource` instances,
  corresponding to one SSRC (synchronization source) identifier
  by the current RTCRtpReceiver in the last ten seconds.

  `var rtcRtpContributingSources = rtcRtpReceiver.getContributingSources()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/getSynchronizationSources`"
  [this ]
  (-> this (.getSynchronizationSources)))

(defn track
  "Property.

  The track read-only property of the `rtc.RTCRtpReceiver` interface
  the `media.MediaStreamTrack` associated with the current `rtc.RTCRtpReceiver`

  `var mediaStreamTrack = rtcRtpReceiver.track`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/track`"
  [this]
  (-> this (.track)))

(defn set-track!
  "Property.

  The track read-only property of the `rtc.RTCRtpReceiver` interface
  the `media.MediaStreamTrack` associated with the current `rtc.RTCRtpReceiver`

  `var mediaStreamTrack = rtcRtpReceiver.track`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/track`"
  [this val]
  (aset this "track" val))

