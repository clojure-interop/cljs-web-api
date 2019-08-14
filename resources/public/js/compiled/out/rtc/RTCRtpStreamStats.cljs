(ns rtc.RTCRtpStreamStats
  "The `rtc.RTCRtpStreamStats` dictionary is returned by the `rtc.RTCPeerConnection.getStats()`,
  and `rtc.RTCRtpReceiver.getStats()` methods to provide detailed
  about WebRTC connectivity."
  (:refer-clojure :exclude []))

(defn codec-id
  "Property.

  The `rtc.RTCRtpStreamStats` dictionary's codecId property is
  string which uniquely identifies the object that was inspected
  produce the data in the `rtc.RTCCodecStats` for the RTP stream.

  `var codecID = RTCRtpStreamStats.codecId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/codecId`"
  [this]
  (-> this (.codecId)))

(defn set-codec-id!
  "Property.

  The `rtc.RTCRtpStreamStats` dictionary's codecId property is
  string which uniquely identifies the object that was inspected
  produce the data in the `rtc.RTCCodecStats` for the RTP stream.

  `var codecID = RTCRtpStreamStats.codecId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/codecId`"
  [this val]
  (aset this "codecId" val))

(defn fir-count
  "Property.

  The firCount property of the `rtc.RTCRtpStreamStats` dictionary
  the number of Full Intra Request (FIR) packets have been sent
  the receiver to the sender.

  `var firCount = RTCRtpStreamStats.firCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/firCount`"
  [this]
  (-> this (.firCount)))

(defn set-fir-count!
  "Property.

  The firCount property of the `rtc.RTCRtpStreamStats` dictionary
  the number of Full Intra Request (FIR) packets have been sent
  the receiver to the sender.

  `var firCount = RTCRtpStreamStats.firCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/firCount`"
  [this val]
  (aset this "firCount" val))

(defn kind
  "Property.

  The kind property of the `rtc.RTCRtpStreamStats` dictionary is
  string indicating whether the described RTP stream contains audio
  video media.

  `mediaKind = RTCRtpStreamStats.kind;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/kind`"
  [this]
  (-> this (.kind)))

(defn set-kind!
  "Property.

  The kind property of the `rtc.RTCRtpStreamStats` dictionary is
  string indicating whether the described RTP stream contains audio
  video media.

  `mediaKind = RTCRtpStreamStats.kind;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/kind`"
  [this val]
  (aset this "kind" val))

(defn nack-count
  "Property.

  The nackCount property of the `rtc.RTCRtpStreamStats` dictionary
  a numeric value indicating the number of times the receiver sent
  NACK packet to the sender.

  `var nackCount = RTCRtpStreamStats.nackCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/nackCount`"
  [this]
  (-> this (.nackCount)))

(defn set-nack-count!
  "Property.

  The nackCount property of the `rtc.RTCRtpStreamStats` dictionary
  a numeric value indicating the number of times the receiver sent
  NACK packet to the sender.

  `var nackCount = RTCRtpStreamStats.nackCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/nackCount`"
  [this val]
  (aset this "nackCount" val))

(defn pli-count
  "Property.

  The pliCount property of the `rtc.RTCRtpStreamStats` dictionary
  the number of times the stream's receiving end sent a Picture
  Indication (PLI) packet to the sender.

  `var pliCount = RTCRtpStreamStats.pliCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/pliCount`"
  [this]
  (-> this (.pliCount)))

(defn set-pli-count!
  "Property.

  The pliCount property of the `rtc.RTCRtpStreamStats` dictionary
  the number of times the stream's receiving end sent a Picture
  Indication (PLI) packet to the sender.

  `var pliCount = RTCRtpStreamStats.pliCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/pliCount`"
  [this val]
  (aset this "pliCount" val))

(defn qp-sum
  "Property.

  The qpSum property of the `rtc.RTCRtpStreamStats` dictionary
  a value generated by adding the Quantization Parameter (QP) values
  every frame sent or received to date on the video track corresponding
  this RTCRtpStreamStats object.

  `var qpSum = RTCRtpStreamStats.qpSum;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/qpSum`"
  [this]
  (-> this (.qpSum)))

(defn set-qp-sum!
  "Property.

  The qpSum property of the `rtc.RTCRtpStreamStats` dictionary
  a value generated by adding the Quantization Parameter (QP) values
  every frame sent or received to date on the video track corresponding
  this RTCRtpStreamStats object.

  `var qpSum = RTCRtpStreamStats.qpSum;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/qpSum`"
  [this val]
  (aset this "qpSum" val))

(defn sli-count
  "Property.

  The sliCount property of the `rtc.RTCRtpStreamStats` dictionary
  how many Slice Loss Indication (SLI) packets were received by
  sender.

  `var sliCount = RTCRtpStreamStats.sliCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/sliCount`"
  [this]
  (-> this (.sliCount)))

(defn set-sli-count!
  "Property.

  The sliCount property of the `rtc.RTCRtpStreamStats` dictionary
  how many Slice Loss Indication (SLI) packets were received by
  sender.

  `var sliCount = RTCRtpStreamStats.sliCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/sliCount`"
  [this val]
  (aset this "sliCount" val))

(defn ssrc
  "Property.

  The `rtc.RTCRtpStreamStats` dictionary's ssrc property is an
  which uniquely identifies the source of the RTP packets whose
  are covered by the `rtc.RTCStatsReport` that includes this RTCRtpStreamStats

  `var ssrc = RTCRtpStreamStats.ssrc;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/ssrc`"
  [this]
  (-> this (.ssrc)))

(defn set-ssrc!
  "Property.

  The `rtc.RTCRtpStreamStats` dictionary's ssrc property is an
  which uniquely identifies the source of the RTP packets whose
  are covered by the `rtc.RTCStatsReport` that includes this RTCRtpStreamStats

  `var ssrc = RTCRtpStreamStats.ssrc;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/ssrc`"
  [this val]
  (aset this "ssrc" val))

(defn track-id
  "Property.

  The `rtc.RTCRtpStreamStats` dictionary's trackId property is
  string which uniquely identifies the `rtc.RTCMediaStreamTrackStats`
  which contains the track statistics for the `media.MediaStreamTrack`
  which statistics are provided in this object.

  `var trackID = RTCRtpStreamStats.trackId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/trackId`"
  [this]
  (-> this (.trackId)))

(defn set-track-id!
  "Property.

  The `rtc.RTCRtpStreamStats` dictionary's trackId property is
  string which uniquely identifies the `rtc.RTCMediaStreamTrackStats`
  which contains the track statistics for the `media.MediaStreamTrack`
  which statistics are provided in this object.

  `var trackID = RTCRtpStreamStats.trackId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/trackId`"
  [this val]
  (aset this "trackId" val))

(defn transport-id
  "Property.

  The `rtc.RTCRtpStreamStats` dictionary's transportId property
  a string which uniquely identifies the object from which the
  contained in the `rtc.RTCTransportStats` properties in the `rtc.RTCStatsReport`.

  `var transportID = RTCRtpStreamStats.transportId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/transportId`"
  [this]
  (-> this (.transportId)))

(defn set-transport-id!
  "Property.

  The `rtc.RTCRtpStreamStats` dictionary's transportId property
  a string which uniquely identifies the object from which the
  contained in the `rtc.RTCTransportStats` properties in the `rtc.RTCStatsReport`.

  `var transportID = RTCRtpStreamStats.transportId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpStreamStats/transportId`"
  [this val]
  (aset this "transportId" val))

