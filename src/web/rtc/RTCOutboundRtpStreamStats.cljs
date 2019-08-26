(ns web.rtc.RTCOutboundRtpStreamStats
  "The RTCOutboundRtpStreamStats dictionary is the `web.rtc.RTCStats`-based
  which provides metrics and statistics related to an outbound
  stream being sent by an `web.audio.RTCRtpSender`."
  (:refer-clojure :exclude []))

(defn average-rtcp-interval
  "Property.

  The averageRtcpInterval property of the `web.rtc.RTCOutboundRtpStreamStats`
  is a floating-point value indicating the average time that should
  between transmissions of RTCP packets on this stream.

  `var averageRtcpInterval = RTCOutboundRtpStreamStats.averageRtcpInterval;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/averageRtcpInterval`"
  [this]
  (-> this (.-averageRtcpInterval)))

(defn set-average-rtcp-interval!
  "Property.

  The averageRtcpInterval property of the `web.rtc.RTCOutboundRtpStreamStats`
  is a floating-point value indicating the average time that should
  between transmissions of RTCP packets on this stream.

  `var averageRtcpInterval = RTCOutboundRtpStreamStats.averageRtcpInterval;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/averageRtcpInterval`"
  [this val]
  (aset this "averageRtcpInterval" val))

(defn fir-count
  "Property.

  The firCount property of the `web.rtc.RTCOutboundRtpStreamStats`
  indicates the number of Full Intra Request (FIR) that the remote
  has sent to this `web.audio.RTCRtpSender`.

  `var firCount = RTCOutboundRtpStreamStats.firCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/firCount`"
  [this]
  (-> this (.-firCount)))

(defn set-fir-count!
  "Property.

  The firCount property of the `web.rtc.RTCOutboundRtpStreamStats`
  indicates the number of Full Intra Request (FIR) that the remote
  has sent to this `web.audio.RTCRtpSender`.

  `var firCount = RTCOutboundRtpStreamStats.firCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/firCount`"
  [this val]
  (aset this "firCount" val))

(defn frames-encoded
  "Property.

  The framesEncoded property of the `web.rtc.RTCOutboundRtpStreamStats`
  indicates the total number of frames that have been encoded by
  `web.audio.RTCRtpSender` for this media source.

  `var framesEncoded = RTCOutboundRtpStreamStats.framesEncoded;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded`"
  [this]
  (-> this (.-framesEncoded)))

(defn set-frames-encoded!
  "Property.

  The framesEncoded property of the `web.rtc.RTCOutboundRtpStreamStats`
  indicates the total number of frames that have been encoded by
  `web.audio.RTCRtpSender` for this media source.

  `var framesEncoded = RTCOutboundRtpStreamStats.framesEncoded;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded`"
  [this val]
  (aset this "framesEncoded" val))

(defn last-packet-sent-timestamp
  "Property.

  The lastPacketSentTimestamp property of the `web.rtc.RTCOutboundRtpStreamStats`
  indicates the time at which the `web.audio.RTCRtpSender` described
  this `web.rtc.RTCOutboundRtpStreamStats` object last transmitted
  packet to the remote receiver.

  `var lastPacketTimestamp = RTCOutboundRtpStreamStats.lastPacketSentTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/lastPacketSentTimestamp`"
  [this]
  (-> this (.-lastPacketSentTimestamp)))

(defn set-last-packet-sent-timestamp!
  "Property.

  The lastPacketSentTimestamp property of the `web.rtc.RTCOutboundRtpStreamStats`
  indicates the time at which the `web.audio.RTCRtpSender` described
  this `web.rtc.RTCOutboundRtpStreamStats` object last transmitted
  packet to the remote receiver.

  `var lastPacketTimestamp = RTCOutboundRtpStreamStats.lastPacketSentTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/lastPacketSentTimestamp`"
  [this val]
  (aset this "lastPacketSentTimestamp" val))

(defn nack-count
  "Property.

  The nackCount property of the `web.rtc.RTCOutboundRtpStreamStats`
  is a numeric value indicating the number of times the `web.audio.RTCRtpSender`
  by this object received a NACK packet from the remote receiver.

  `var nackCount = RTCOutboundRtpStreamStats.nackCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/nackCount`"
  [this]
  (-> this (.-nackCount)))

(defn set-nack-count!
  "Property.

  The nackCount property of the `web.rtc.RTCOutboundRtpStreamStats`
  is a numeric value indicating the number of times the `web.audio.RTCRtpSender`
  by this object received a NACK packet from the remote receiver.

  `var nackCount = RTCOutboundRtpStreamStats.nackCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/nackCount`"
  [this val]
  (aset this "nackCount" val))

(defn per-dscp-packets-sent
  "Property.

  The perDscpPacketsSent property of the `web.rtc.RTCOutboundRtpStreamStats`
  is a record comprised of key/value pairs in which each key is
  string representation of a Differentiated Services Code Point
  the value is the number of packets sent for that DCSP.

  `var perDscpPacketsSent = RTCOutboundRtpStreamStats.perDscpPacketsSent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/perDscpPacketsSent`"
  [this]
  (-> this (.-perDscpPacketsSent)))

(defn set-per-dscp-packets-sent!
  "Property.

  The perDscpPacketsSent property of the `web.rtc.RTCOutboundRtpStreamStats`
  is a record comprised of key/value pairs in which each key is
  string representation of a Differentiated Services Code Point
  the value is the number of packets sent for that DCSP.

  `var perDscpPacketsSent = RTCOutboundRtpStreamStats.perDscpPacketsSent;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/perDscpPacketsSent`"
  [this val]
  (aset this "perDscpPacketsSent" val))

(defn pli-count
  "Property.

  The pliCount property of the `web.rtc.RTCOutboundRtpStreamStats`
  states the number of times the remote peer's `web.rtc.RTCRtpReceiver`
  a Picture Loss Indication (PLI) packet to the `web.audio.RTCRtpSender`
  which this object provides statistics.

  `var pliCount = RTCOutboundRtpStreamStats.pliCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/pliCount`"
  [this]
  (-> this (.-pliCount)))

(defn set-pli-count!
  "Property.

  The pliCount property of the `web.rtc.RTCOutboundRtpStreamStats`
  states the number of times the remote peer's `web.rtc.RTCRtpReceiver`
  a Picture Loss Indication (PLI) packet to the `web.audio.RTCRtpSender`
  which this object provides statistics.

  `var pliCount = RTCOutboundRtpStreamStats.pliCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/pliCount`"
  [this val]
  (aset this "pliCount" val))

(defn qp-sum
  "Property.

  The qpSum property of the `web.rtc.RTCOutboundRtpStreamStats`
  is a value generated by adding the Quantization Parameter (QP)
  for every frame this sender has produced to date on the video
  corresponding to this RTCOutboundRtpStreamStats object.

  `var qpSum = RTCOutboundRtpStreamStats.qpSum;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/qpSum`"
  [this]
  (-> this (.-qpSum)))

(defn set-qp-sum!
  "Property.

  The qpSum property of the `web.rtc.RTCOutboundRtpStreamStats`
  is a value generated by adding the Quantization Parameter (QP)
  for every frame this sender has produced to date on the video
  corresponding to this RTCOutboundRtpStreamStats object.

  `var qpSum = RTCOutboundRtpStreamStats.qpSum;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/qpSum`"
  [this val]
  (aset this "qpSum" val))

(defn quality-limitation-durations
  "Property.

  A record mapping each of the quality limitation reasons in the
  enumeration to a floating-point value indicating the number of
  the stream has spent with its quality limited for that reason."
  [this]
  (-> this (.-qualityLimitationDurations)))

(defn set-quality-limitation-durations!
  "Property.

  A record mapping each of the quality limitation reasons in the
  enumeration to a floating-point value indicating the number of
  the stream has spent with its quality limited for that reason."
  [this val]
  (aset this "qualityLimitationDurations" val))

(defn quality-limitation-reason
  "Property.

  The qualityLimitationReason property of the `web.rtc.RTCOutboundRtpStreamStats`
  is a string indicating the reason why the media quality in the
  is currently being reduced by the codec during encoding, or none
  no quality reduction is being performed.

  `var qualityLimitationReason = RTCOutboundRtpStreamStats.qualityLimitationReason;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason`"
  [this]
  (-> this (.-qualityLimitationReason)))

(defn set-quality-limitation-reason!
  "Property.

  The qualityLimitationReason property of the `web.rtc.RTCOutboundRtpStreamStats`
  is a string indicating the reason why the media quality in the
  is currently being reduced by the codec during encoding, or none
  no quality reduction is being performed.

  `var qualityLimitationReason = RTCOutboundRtpStreamStats.qualityLimitationReason;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason`"
  [this val]
  (aset this "qualityLimitationReason" val))

(defn remote-id
  "Property.

  The remoteId property of the `web.rtc.RTCOutboundRtpStreamStats`
  specifies the `id` of the `RTCRemoteInboundRtpStreamStats` object
  the remote peer's `web.rtc.RTCRtpReceiver` which is sending the
  to the local peer for this SSRC.

  `var remoteStatsId = RTCOutboundRtpStreamStats.remoteId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/remoteId`"
  [this]
  (-> this (.-remoteId)))

(defn set-remote-id!
  "Property.

  The remoteId property of the `web.rtc.RTCOutboundRtpStreamStats`
  specifies the `id` of the `RTCRemoteInboundRtpStreamStats` object
  the remote peer's `web.rtc.RTCRtpReceiver` which is sending the
  to the local peer for this SSRC.

  `var remoteStatsId = RTCOutboundRtpStreamStats.remoteId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/remoteId`"
  [this val]
  (aset this "remoteId" val))

(defn retransmitted-bytes-sent
  "Property.

  The total number of bytes that have been retransmitted for this
  as of the time the statistics were sampled. These retransmitted
  comprise the packets included in the value returned by retransmittedPacketsSent."
  [this]
  (-> this (.-retransmittedBytesSent)))

(defn set-retransmitted-bytes-sent!
  "Property.

  The total number of bytes that have been retransmitted for this
  as of the time the statistics were sampled. These retransmitted
  comprise the packets included in the value returned by retransmittedPacketsSent."
  [this val]
  (aset this "retransmittedBytesSent" val))

(defn retransmitted-packets-sent
  "Property.

  The total number of packets that have needed to be retransmitted
  this source as of the time the statistics were sampled. These
  packets are included in the value returned by packetsSent."
  [this]
  (-> this (.-retransmittedPacketsSent)))

(defn set-retransmitted-packets-sent!
  "Property.

  The total number of packets that have needed to be retransmitted
  this source as of the time the statistics were sampled. These
  packets are included in the value returned by packetsSent."
  [this val]
  (aset this "retransmittedPacketsSent" val))

(defn sender-id
  "Property.

  The {domxref(\"RTCStats.id\", \"id\")}} of the RTCAudioSenderStats
  RTCVideoSenderStats object containing statistics about this stream's"
  [this]
  (-> this (.-senderId)))

(defn set-sender-id!
  "Property.

  The {domxref(\"RTCStats.id\", \"id\")}} of the RTCAudioSenderStats
  RTCVideoSenderStats object containing statistics about this stream's"
  [this val]
  (aset this "senderId" val))

(defn sli-count
  "Property.

  The sliCount property of the `web.rtc.RTCOutboundRtpStreamStats`
  indicates how many Slice Loss Indication (SLI) packets the `web.audio.RTCRtpSender`
  from the remote `web.rtc.RTCRtpReceiver` for the RTP stream described
  this object.

  `var sliCount = RTCOutboundRtpStreamStats.sliCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/sliCount`"
  [this]
  (-> this (.-sliCount)))

(defn set-sli-count!
  "Property.

  The sliCount property of the `web.rtc.RTCOutboundRtpStreamStats`
  indicates how many Slice Loss Indication (SLI) packets the `web.audio.RTCRtpSender`
  from the remote `web.rtc.RTCRtpReceiver` for the RTP stream described
  this object.

  `var sliCount = RTCOutboundRtpStreamStats.sliCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/sliCount`"
  [this val]
  (aset this "sliCount" val))

(defn target-bitrate
  "Property.

  A value indicating the bit rate the RTCRtpSender's codec is configured
  attempt to achieve in its output media."
  [this]
  (-> this (.-targetBitrate)))

(defn set-target-bitrate!
  "Property.

  A value indicating the bit rate the RTCRtpSender's codec is configured
  attempt to achieve in its output media."
  [this val]
  (aset this "targetBitrate" val))

(defn total-encoded-bytes-target
  "Property.

  A cumulative sum of the target frame sizes (the targeted maximum
  of the frame in bytes when the codec is asked to compress it)
  all of the frames encoded so far. This will likely differ from
  total of the actual frame sizes."
  [this]
  (-> this (.-totalEncodedBytesTarget)))

(defn set-total-encoded-bytes-target!
  "Property.

  A cumulative sum of the target frame sizes (the targeted maximum
  of the frame in bytes when the codec is asked to compress it)
  all of the frames encoded so far. This will likely differ from
  total of the actual frame sizes."
  [this val]
  (aset this "totalEncodedBytesTarget" val))

(defn total-encode-time
  "Property.

  A floating-point value indicating the total number of seconds
  have been spent encoding the frames encoded so far by this RTCRtpSender."
  [this]
  (-> this (.-totalEncodeTime)))

(defn set-total-encode-time!
  "Property.

  A floating-point value indicating the total number of seconds
  have been spent encoding the frames encoded so far by this RTCRtpSender."
  [this val]
  (aset this "totalEncodeTime" val))

(defn track-id
  "Property.

  The trackId property of the `web.rtc.RTCOutboundRtpStreamStats`
  indicates the `id` of the `RTCSenderAudioTrackAttachmentStats`
  `RTCSenderVideoTrackAttachmentStats` object representing the
  which is being sent on this stream.

  `var trackStatsId = RTCOutboundRtpStreamStats.trackId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/trackId`"
  [this]
  (-> this (.-trackId)))

(defn set-track-id!
  "Property.

  The trackId property of the `web.rtc.RTCOutboundRtpStreamStats`
  indicates the `id` of the `RTCSenderAudioTrackAttachmentStats`
  `RTCSenderVideoTrackAttachmentStats` object representing the
  which is being sent on this stream.

  `var trackStatsId = RTCOutboundRtpStreamStats.trackId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/trackId`"
  [this val]
  (aset this "trackId" val))

