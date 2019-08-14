(ns rtc.RTCInboundRtpStreamStats
  "The WebRTC API's RTCInboundRtpStreamStats dictionary, based upon
  and `rtc.RTCStats`, contains statistics related to the receiving
  of an RTP stream on the local end of the `rtc.RTCPeerConnection`."
  (:refer-clojure :exclude []))

(defn average-rtcp-interval
  "Property.

  The averageRtcpInterval property of the `rtc.RTCInboundRtpStreamStats`
  is a floating-point value indicating the average RTCP transmission
  in seconds.

  `var averageRtcpInterval = rtcInboundRtpStreamStats.averageRtcpInterval;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/averageRtcpInterval`"
  [this]
  (-> this (.averageRtcpInterval)))

(defn set-average-rtcp-interval!
  "Property.

  The averageRtcpInterval property of the `rtc.RTCInboundRtpStreamStats`
  is a floating-point value indicating the average RTCP transmission
  in seconds.

  `var averageRtcpInterval = rtcInboundRtpStreamStats.averageRtcpInterval;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/averageRtcpInterval`"
  [this val]
  (aset this "averageRtcpInterval" val))

(defn bytes-received
  "Property.

  The `rtc.RTCInboundRtpStreamStats` dictionary's bytesReceived
  is an integer value which indicates the total number of bytes
  so far from this synchronization source (SSRC).

  `var bytesReceived = rtcInboundRtpStreamStats.bytesReceived;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived`"
  [this]
  (-> this (.bytesReceived)))

(defn set-bytes-received!
  "Property.

  The `rtc.RTCInboundRtpStreamStats` dictionary's bytesReceived
  is an integer value which indicates the total number of bytes
  so far from this synchronization source (SSRC).

  `var bytesReceived = rtcInboundRtpStreamStats.bytesReceived;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived`"
  [this val]
  (aset this "bytesReceived" val))

(defn fec-packets-discarded
  "Property.

  The fecPacketsDiscarded property of the `rtc.RTCInboundRtpStreamStats`
  is a numeric value indicating the number of RTP Forward Error
  (FEC) packets that have been discarded.

  `var fecPacketsDiscarded = rtcInboundRtpStreamStats.fecPacketsDiscarded;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded`"
  [this]
  (-> this (.fecPacketsDiscarded)))

(defn set-fec-packets-discarded!
  "Property.

  The fecPacketsDiscarded property of the `rtc.RTCInboundRtpStreamStats`
  is a numeric value indicating the number of RTP Forward Error
  (FEC) packets that have been discarded.

  `var fecPacketsDiscarded = rtcInboundRtpStreamStats.fecPacketsDiscarded;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded`"
  [this val]
  (aset this "fecPacketsDiscarded" val))

(defn fir-count
  "Property.

  The firCount property of the `rtc.RTCInboundRtpStreamStats` dictionary
  the number of Full Intra Request (FIR) packets have been sent
  the receiver to the sender.

  `var firCount = rtcInboundRtpStreamStats.firCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/firCount`"
  [this]
  (-> this (.firCount)))

(defn set-fir-count!
  "Property.

  The firCount property of the `rtc.RTCInboundRtpStreamStats` dictionary
  the number of Full Intra Request (FIR) packets have been sent
  the receiver to the sender.

  `var firCount = rtcInboundRtpStreamStats.firCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/firCount`"
  [this val]
  (aset this "firCount" val))

(defn frames-decoded
  "Property.

  The framesDecoded property of the `rtc.RTCInboundRtpStreamStats`
  indicates the total number of frames which have been decoded
  for this media source.

  `var framesDecoded = rtcInboundRtpStreamStats.framesDecoded;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded`"
  [this]
  (-> this (.framesDecoded)))

(defn set-frames-decoded!
  "Property.

  The framesDecoded property of the `rtc.RTCInboundRtpStreamStats`
  indicates the total number of frames which have been decoded
  for this media source.

  `var framesDecoded = rtcInboundRtpStreamStats.framesDecoded;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded`"
  [this val]
  (aset this "framesDecoded" val))

(defn last-packet-received-timestamp
  "Property.

  The lastPacketReceivedTimestamp property of the `rtc.RTCInboundRtpStreamStats`
  indicates the time at which the most recently received packet
  from this source.

  `var lastPacketTimestamp = rtcInboundRtpStreamStats.lastPacketReceivedTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp`"
  [this]
  (-> this (.lastPacketReceivedTimestamp)))

(defn set-last-packet-received-timestamp!
  "Property.

  The lastPacketReceivedTimestamp property of the `rtc.RTCInboundRtpStreamStats`
  indicates the time at which the most recently received packet
  from this source.

  `var lastPacketTimestamp = rtcInboundRtpStreamStats.lastPacketReceivedTimestamp;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp`"
  [this val]
  (aset this "lastPacketReceivedTimestamp" val))

(defn nack-count
  "Property.

  The nackCount property of the `rtc.RTCInboundRtpStreamStats`
  is a numeric value indicating the number of times the receiver
  a NACK packet to the sender.

  `var nackCount = rtcInboundRtpStreamStats.nackCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/nackCount`"
  [this]
  (-> this (.nackCount)))

(defn set-nack-count!
  "Property.

  The nackCount property of the `rtc.RTCInboundRtpStreamStats`
  is a numeric value indicating the number of times the receiver
  a NACK packet to the sender.

  `var nackCount = rtcInboundRtpStreamStats.nackCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/nackCount`"
  [this val]
  (aset this "nackCount" val))

(defn packets-duplicated
  "Property.

  The packetsDuplicated property of the `rtc.RTCInboundRtpStreamStats`
  indicates the total number of packets discarded because they
  duplicates of previously-received packets.

  `var packetsDuplicated = rtcInboundRtpStreamStats.packetsDuplicated;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/packetsDuplicated`"
  [this]
  (-> this (.packetsDuplicated)))

(defn set-packets-duplicated!
  "Property.

  The packetsDuplicated property of the `rtc.RTCInboundRtpStreamStats`
  indicates the total number of packets discarded because they
  duplicates of previously-received packets.

  `var packetsDuplicated = rtcInboundRtpStreamStats.packetsDuplicated;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/packetsDuplicated`"
  [this val]
  (aset this "packetsDuplicated" val))

(defn packets-failed-decryption
  "Property.

  The packetsFailedDecryption property of the `rtc.RTCInboundRtpStreamStats`
  indicates the total number of RTP packets which failed to be
  successfully after being received by the local end of the connection
  this session.

  `var packetsFailedDecryption = rtcInboundRtpStreamStats.packetsFailedDecryption;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/packetsFailedDecryption`"
  [this]
  (-> this (.packetsFailedDecryption)))

(defn set-packets-failed-decryption!
  "Property.

  The packetsFailedDecryption property of the `rtc.RTCInboundRtpStreamStats`
  indicates the total number of RTP packets which failed to be
  successfully after being received by the local end of the connection
  this session.

  `var packetsFailedDecryption = rtcInboundRtpStreamStats.packetsFailedDecryption;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/packetsFailedDecryption`"
  [this val]
  (aset this "packetsFailedDecryption" val))

(defn per-dscp-packets-received
  "Property.

  The perDscpPacketsReceived property of the `rtc.RTCInboundRtpStreamStats`
  is a record comprised of key/value pairs in which each key is
  string representation of a Differentiated Services Code Point
  the value is the number of packets received for that DCSP.

  `var perDscpPacketsReceived = rtcInboundRtpStreamStats.perDscpPacketsReceived;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/perDscpPacketsReceived`"
  [this]
  (-> this (.perDscpPacketsReceived)))

(defn set-per-dscp-packets-received!
  "Property.

  The perDscpPacketsReceived property of the `rtc.RTCInboundRtpStreamStats`
  is a record comprised of key/value pairs in which each key is
  string representation of a Differentiated Services Code Point
  the value is the number of packets received for that DCSP.

  `var perDscpPacketsReceived = rtcInboundRtpStreamStats.perDscpPacketsReceived;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/perDscpPacketsReceived`"
  [this val]
  (aset this "perDscpPacketsReceived" val))

(defn pli-count
  "Property.

  The pliCount property of the `rtc.RTCInboundRtpStreamStats` dictionary
  the number of times the `rtc.RTCRtpReceiver` described by these
  sent a Picture Loss Indication (PLI) packet to the sender.

  `var pliCount = RTCInboundRtpStreamStats.pliCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/pliCount`"
  [this]
  (-> this (.pliCount)))

(defn set-pli-count!
  "Property.

  The pliCount property of the `rtc.RTCInboundRtpStreamStats` dictionary
  the number of times the `rtc.RTCRtpReceiver` described by these
  sent a Picture Loss Indication (PLI) packet to the sender.

  `var pliCount = RTCInboundRtpStreamStats.pliCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/pliCount`"
  [this val]
  (aset this "pliCount" val))

(defn qp-sum
  "Property.

  The qpSum property of the `rtc.RTCInboundRtpStreamStats` dictionary
  a value generated by adding the Quantization Parameter (QP) values
  every frame sent or received to date on the video track corresponding
  this RTCInboundRtpStreamStats object.

  `var qpSum = rtcInboundRtpStreamStats.qpSum;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/qpSum`"
  [this]
  (-> this (.qpSum)))

(defn set-qp-sum!
  "Property.

  The qpSum property of the `rtc.RTCInboundRtpStreamStats` dictionary
  a value generated by adding the Quantization Parameter (QP) values
  every frame sent or received to date on the video track corresponding
  this RTCInboundRtpStreamStats object.

  `var qpSum = rtcInboundRtpStreamStats.qpSum;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/qpSum`"
  [this val]
  (aset this "qpSum" val))

(defn receiver-id
  "Property.

  The receiverId property of the `rtc.RTCInboundRtpStreamStats`
  specifies the `web.id` of the `rtc.RTCAudioReceiverStats` or
  object representing the `rtc.RTCRtpReceiver` receiving the stream.

  `var receiverStatsId = rtcInboundRtpStreamStats.receiverId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/receiverId`"
  [this]
  (-> this (.receiverId)))

(defn set-receiver-id!
  "Property.

  The receiverId property of the `rtc.RTCInboundRtpStreamStats`
  specifies the `web.id` of the `rtc.RTCAudioReceiverStats` or
  object representing the `rtc.RTCRtpReceiver` receiving the stream.

  `var receiverStatsId = rtcInboundRtpStreamStats.receiverId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/receiverId`"
  [this val]
  (aset this "receiverId" val))

(defn remote-id
  "Property.

  The remoteId property of the `rtc.RTCInboundRtpStreamStats` dictionary
  the `web.id` of the `rtc.RTCRemoteOutboundRtpStreamStats` object
  the remote peer's `rtc.RTCRtpSender` which is sending the media
  the local peer.

  `var remoteStatsId = rtcInboundRtpStreamStats.remoteId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/remoteId`"
  [this]
  (-> this (.remoteId)))

(defn set-remote-id!
  "Property.

  The remoteId property of the `rtc.RTCInboundRtpStreamStats` dictionary
  the `web.id` of the `rtc.RTCRemoteOutboundRtpStreamStats` object
  the remote peer's `rtc.RTCRtpSender` which is sending the media
  the local peer.

  `var remoteStatsId = rtcInboundRtpStreamStats.remoteId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/remoteId`"
  [this val]
  (aset this "remoteId" val))

(defn sli-count
  "Property.

  The sliCount property of the `rtc.RTCInboundRtpStreamStats` dictionary
  how many Slice Loss Indication (SLI) packets the `rtc.RTCRtpReceiver`
  which this object provdes statistics sent to the remote `rtc.RTCRtpSender`.

  `var sliCount = rtcInboundRtpStreamStats.sliCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/sliCount`"
  [this]
  (-> this (.sliCount)))

(defn set-sli-count!
  "Property.

  The sliCount property of the `rtc.RTCInboundRtpStreamStats` dictionary
  how many Slice Loss Indication (SLI) packets the `rtc.RTCRtpReceiver`
  which this object provdes statistics sent to the remote `rtc.RTCRtpSender`.

  `var sliCount = rtcInboundRtpStreamStats.sliCount;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/sliCount`"
  [this val]
  (aset this "sliCount" val))

(defn track-id
  "Property.

  The trackId property of the `rtc.RTCInboundRtpStreamStats` dictionary
  the `web.id` of the `rtc.RTCReceiverAudioTrackAttachmentStats`
  `rtc.RTCReceiverVideoTrackAttachmentStats` object representing
  `media.MediaStreamTrack` which is receiving the incoming media.

  `var trackStatsId = rtcInboundRtpStreamStats.trackId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/trackId`"
  [this]
  (-> this (.trackId)))

(defn set-track-id!
  "Property.

  The trackId property of the `rtc.RTCInboundRtpStreamStats` dictionary
  the `web.id` of the `rtc.RTCReceiverAudioTrackAttachmentStats`
  `rtc.RTCReceiverVideoTrackAttachmentStats` object representing
  `media.MediaStreamTrack` which is receiving the incoming media.

  `var trackStatsId = rtcInboundRtpStreamStats.trackId;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/trackId`"
  [this val]
  (aset this "trackId" val))

(defn fec-packets-received
  "Property.

  The fecPacketsReceived property of the `rtc.RTCInboundRtpStreamStats`
  indicates how many Forward Error Correction (FEC) packets have
  received by this RTP receiver from the remote peer.

  `var fecPacketsReceived = rtcInboundRtpStreamStats.fecPacketsReceived;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived`"
  [this]
  (-> this (.fecPacketsReceived)))

(defn set-fec-packets-received!
  "Property.

  The fecPacketsReceived property of the `rtc.RTCInboundRtpStreamStats`
  indicates how many Forward Error Correction (FEC) packets have
  received by this RTP receiver from the remote peer.

  `var fecPacketsReceived = rtcInboundRtpStreamStats.fecPacketsReceived;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived`"
  [this val]
  (aset this "fecPacketsReceived" val))

