// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCInboundRtpStreamStats');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The averageRtcpInterval property of the `rtc.RTCInboundRtpStreamStats`
 *   is a floating-point value indicating the average RTCP transmission
 *   in seconds.
 * 
 *   `var averageRtcpInterval = rtcInboundRtpStreamStats.averageRtcpInterval;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/averageRtcpInterval`
 */
rtc.RTCInboundRtpStreamStats.average_rtcp_interval = (function rtc$RTCInboundRtpStreamStats$average_rtcp_interval(this$){
return this$.averageRtcpInterval();
});
/**
 * Property.
 * 
 *   The averageRtcpInterval property of the `rtc.RTCInboundRtpStreamStats`
 *   is a floating-point value indicating the average RTCP transmission
 *   in seconds.
 * 
 *   `var averageRtcpInterval = rtcInboundRtpStreamStats.averageRtcpInterval;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/averageRtcpInterval`
 */
rtc.RTCInboundRtpStreamStats.set_average_rtcp_interval_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_average_rtcp_interval_BANG_(this$,val){
return (this$["averageRtcpInterval"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCInboundRtpStreamStats` dictionary's bytesReceived
 *   is an integer value which indicates the total number of bytes
 *   so far from this synchronization source (SSRC).
 * 
 *   `var bytesReceived = rtcInboundRtpStreamStats.bytesReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived`
 */
rtc.RTCInboundRtpStreamStats.bytes_received = (function rtc$RTCInboundRtpStreamStats$bytes_received(this$){
return this$.bytesReceived();
});
/**
 * Property.
 * 
 *   The `rtc.RTCInboundRtpStreamStats` dictionary's bytesReceived
 *   is an integer value which indicates the total number of bytes
 *   so far from this synchronization source (SSRC).
 * 
 *   `var bytesReceived = rtcInboundRtpStreamStats.bytesReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/bytesReceived`
 */
rtc.RTCInboundRtpStreamStats.set_bytes_received_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_bytes_received_BANG_(this$,val){
return (this$["bytesReceived"] = val);
});
/**
 * Property.
 * 
 *   The fecPacketsDiscarded property of the `rtc.RTCInboundRtpStreamStats`
 *   is a numeric value indicating the number of RTP Forward Error
 *   (FEC) packets that have been discarded.
 * 
 *   `var fecPacketsDiscarded = rtcInboundRtpStreamStats.fecPacketsDiscarded;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded`
 */
rtc.RTCInboundRtpStreamStats.fec_packets_discarded = (function rtc$RTCInboundRtpStreamStats$fec_packets_discarded(this$){
return this$.fecPacketsDiscarded();
});
/**
 * Property.
 * 
 *   The fecPacketsDiscarded property of the `rtc.RTCInboundRtpStreamStats`
 *   is a numeric value indicating the number of RTP Forward Error
 *   (FEC) packets that have been discarded.
 * 
 *   `var fecPacketsDiscarded = rtcInboundRtpStreamStats.fecPacketsDiscarded;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsDiscarded`
 */
rtc.RTCInboundRtpStreamStats.set_fec_packets_discarded_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_fec_packets_discarded_BANG_(this$,val){
return (this$["fecPacketsDiscarded"] = val);
});
/**
 * Property.
 * 
 *   The firCount property of the `rtc.RTCInboundRtpStreamStats` dictionary
 *   the number of Full Intra Request (FIR) packets have been sent
 *   the receiver to the sender.
 * 
 *   `var firCount = rtcInboundRtpStreamStats.firCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/firCount`
 */
rtc.RTCInboundRtpStreamStats.fir_count = (function rtc$RTCInboundRtpStreamStats$fir_count(this$){
return this$.firCount();
});
/**
 * Property.
 * 
 *   The firCount property of the `rtc.RTCInboundRtpStreamStats` dictionary
 *   the number of Full Intra Request (FIR) packets have been sent
 *   the receiver to the sender.
 * 
 *   `var firCount = rtcInboundRtpStreamStats.firCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/firCount`
 */
rtc.RTCInboundRtpStreamStats.set_fir_count_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_fir_count_BANG_(this$,val){
return (this$["firCount"] = val);
});
/**
 * Property.
 * 
 *   The framesDecoded property of the `rtc.RTCInboundRtpStreamStats`
 *   indicates the total number of frames which have been decoded
 *   for this media source.
 * 
 *   `var framesDecoded = rtcInboundRtpStreamStats.framesDecoded;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded`
 */
rtc.RTCInboundRtpStreamStats.frames_decoded = (function rtc$RTCInboundRtpStreamStats$frames_decoded(this$){
return this$.framesDecoded();
});
/**
 * Property.
 * 
 *   The framesDecoded property of the `rtc.RTCInboundRtpStreamStats`
 *   indicates the total number of frames which have been decoded
 *   for this media source.
 * 
 *   `var framesDecoded = rtcInboundRtpStreamStats.framesDecoded;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded`
 */
rtc.RTCInboundRtpStreamStats.set_frames_decoded_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_frames_decoded_BANG_(this$,val){
return (this$["framesDecoded"] = val);
});
/**
 * Property.
 * 
 *   The lastPacketReceivedTimestamp property of the `rtc.RTCInboundRtpStreamStats`
 *   indicates the time at which the most recently received packet
 *   from this source.
 * 
 *   `var lastPacketTimestamp = rtcInboundRtpStreamStats.lastPacketReceivedTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp`
 */
rtc.RTCInboundRtpStreamStats.last_packet_received_timestamp = (function rtc$RTCInboundRtpStreamStats$last_packet_received_timestamp(this$){
return this$.lastPacketReceivedTimestamp();
});
/**
 * Property.
 * 
 *   The lastPacketReceivedTimestamp property of the `rtc.RTCInboundRtpStreamStats`
 *   indicates the time at which the most recently received packet
 *   from this source.
 * 
 *   `var lastPacketTimestamp = rtcInboundRtpStreamStats.lastPacketReceivedTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp`
 */
rtc.RTCInboundRtpStreamStats.set_last_packet_received_timestamp_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_last_packet_received_timestamp_BANG_(this$,val){
return (this$["lastPacketReceivedTimestamp"] = val);
});
/**
 * Property.
 * 
 *   The nackCount property of the `rtc.RTCInboundRtpStreamStats`
 *   is a numeric value indicating the number of times the receiver
 *   a NACK packet to the sender.
 * 
 *   `var nackCount = rtcInboundRtpStreamStats.nackCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/nackCount`
 */
rtc.RTCInboundRtpStreamStats.nack_count = (function rtc$RTCInboundRtpStreamStats$nack_count(this$){
return this$.nackCount();
});
/**
 * Property.
 * 
 *   The nackCount property of the `rtc.RTCInboundRtpStreamStats`
 *   is a numeric value indicating the number of times the receiver
 *   a NACK packet to the sender.
 * 
 *   `var nackCount = rtcInboundRtpStreamStats.nackCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/nackCount`
 */
rtc.RTCInboundRtpStreamStats.set_nack_count_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_nack_count_BANG_(this$,val){
return (this$["nackCount"] = val);
});
/**
 * Property.
 * 
 *   The packetsDuplicated property of the `rtc.RTCInboundRtpStreamStats`
 *   indicates the total number of packets discarded because they
 *   duplicates of previously-received packets.
 * 
 *   `var packetsDuplicated = rtcInboundRtpStreamStats.packetsDuplicated;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/packetsDuplicated`
 */
rtc.RTCInboundRtpStreamStats.packets_duplicated = (function rtc$RTCInboundRtpStreamStats$packets_duplicated(this$){
return this$.packetsDuplicated();
});
/**
 * Property.
 * 
 *   The packetsDuplicated property of the `rtc.RTCInboundRtpStreamStats`
 *   indicates the total number of packets discarded because they
 *   duplicates of previously-received packets.
 * 
 *   `var packetsDuplicated = rtcInboundRtpStreamStats.packetsDuplicated;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/packetsDuplicated`
 */
rtc.RTCInboundRtpStreamStats.set_packets_duplicated_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_packets_duplicated_BANG_(this$,val){
return (this$["packetsDuplicated"] = val);
});
/**
 * Property.
 * 
 *   The packetsFailedDecryption property of the `rtc.RTCInboundRtpStreamStats`
 *   indicates the total number of RTP packets which failed to be
 *   successfully after being received by the local end of the connection
 *   this session.
 * 
 *   `var packetsFailedDecryption = rtcInboundRtpStreamStats.packetsFailedDecryption;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/packetsFailedDecryption`
 */
rtc.RTCInboundRtpStreamStats.packets_failed_decryption = (function rtc$RTCInboundRtpStreamStats$packets_failed_decryption(this$){
return this$.packetsFailedDecryption();
});
/**
 * Property.
 * 
 *   The packetsFailedDecryption property of the `rtc.RTCInboundRtpStreamStats`
 *   indicates the total number of RTP packets which failed to be
 *   successfully after being received by the local end of the connection
 *   this session.
 * 
 *   `var packetsFailedDecryption = rtcInboundRtpStreamStats.packetsFailedDecryption;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/packetsFailedDecryption`
 */
rtc.RTCInboundRtpStreamStats.set_packets_failed_decryption_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_packets_failed_decryption_BANG_(this$,val){
return (this$["packetsFailedDecryption"] = val);
});
/**
 * Property.
 * 
 *   The perDscpPacketsReceived property of the `rtc.RTCInboundRtpStreamStats`
 *   is a record comprised of key/value pairs in which each key is
 *   string representation of a Differentiated Services Code Point
 *   the value is the number of packets received for that DCSP.
 * 
 *   `var perDscpPacketsReceived = rtcInboundRtpStreamStats.perDscpPacketsReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/perDscpPacketsReceived`
 */
rtc.RTCInboundRtpStreamStats.per_dscp_packets_received = (function rtc$RTCInboundRtpStreamStats$per_dscp_packets_received(this$){
return this$.perDscpPacketsReceived();
});
/**
 * Property.
 * 
 *   The perDscpPacketsReceived property of the `rtc.RTCInboundRtpStreamStats`
 *   is a record comprised of key/value pairs in which each key is
 *   string representation of a Differentiated Services Code Point
 *   the value is the number of packets received for that DCSP.
 * 
 *   `var perDscpPacketsReceived = rtcInboundRtpStreamStats.perDscpPacketsReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/perDscpPacketsReceived`
 */
rtc.RTCInboundRtpStreamStats.set_per_dscp_packets_received_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_per_dscp_packets_received_BANG_(this$,val){
return (this$["perDscpPacketsReceived"] = val);
});
/**
 * Property.
 * 
 *   The pliCount property of the `rtc.RTCInboundRtpStreamStats` dictionary
 *   the number of times the `rtc.RTCRtpReceiver` described by these
 *   sent a Picture Loss Indication (PLI) packet to the sender.
 * 
 *   `var pliCount = RTCInboundRtpStreamStats.pliCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/pliCount`
 */
rtc.RTCInboundRtpStreamStats.pli_count = (function rtc$RTCInboundRtpStreamStats$pli_count(this$){
return this$.pliCount();
});
/**
 * Property.
 * 
 *   The pliCount property of the `rtc.RTCInboundRtpStreamStats` dictionary
 *   the number of times the `rtc.RTCRtpReceiver` described by these
 *   sent a Picture Loss Indication (PLI) packet to the sender.
 * 
 *   `var pliCount = RTCInboundRtpStreamStats.pliCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/pliCount`
 */
rtc.RTCInboundRtpStreamStats.set_pli_count_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_pli_count_BANG_(this$,val){
return (this$["pliCount"] = val);
});
/**
 * Property.
 * 
 *   The qpSum property of the `rtc.RTCInboundRtpStreamStats` dictionary
 *   a value generated by adding the Quantization Parameter (QP) values
 *   every frame sent or received to date on the video track corresponding
 *   this RTCInboundRtpStreamStats object.
 * 
 *   `var qpSum = rtcInboundRtpStreamStats.qpSum;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/qpSum`
 */
rtc.RTCInboundRtpStreamStats.qp_sum = (function rtc$RTCInboundRtpStreamStats$qp_sum(this$){
return this$.qpSum();
});
/**
 * Property.
 * 
 *   The qpSum property of the `rtc.RTCInboundRtpStreamStats` dictionary
 *   a value generated by adding the Quantization Parameter (QP) values
 *   every frame sent or received to date on the video track corresponding
 *   this RTCInboundRtpStreamStats object.
 * 
 *   `var qpSum = rtcInboundRtpStreamStats.qpSum;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/qpSum`
 */
rtc.RTCInboundRtpStreamStats.set_qp_sum_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_qp_sum_BANG_(this$,val){
return (this$["qpSum"] = val);
});
/**
 * Property.
 * 
 *   The receiverId property of the `rtc.RTCInboundRtpStreamStats`
 *   specifies the `web.id` of the `rtc.RTCAudioReceiverStats` or
 *   object representing the `rtc.RTCRtpReceiver` receiving the stream.
 * 
 *   `var receiverStatsId = rtcInboundRtpStreamStats.receiverId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/receiverId`
 */
rtc.RTCInboundRtpStreamStats.receiver_id = (function rtc$RTCInboundRtpStreamStats$receiver_id(this$){
return this$.receiverId();
});
/**
 * Property.
 * 
 *   The receiverId property of the `rtc.RTCInboundRtpStreamStats`
 *   specifies the `web.id` of the `rtc.RTCAudioReceiverStats` or
 *   object representing the `rtc.RTCRtpReceiver` receiving the stream.
 * 
 *   `var receiverStatsId = rtcInboundRtpStreamStats.receiverId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/receiverId`
 */
rtc.RTCInboundRtpStreamStats.set_receiver_id_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_receiver_id_BANG_(this$,val){
return (this$["receiverId"] = val);
});
/**
 * Property.
 * 
 *   The remoteId property of the `rtc.RTCInboundRtpStreamStats` dictionary
 *   the `web.id` of the `rtc.RTCRemoteOutboundRtpStreamStats` object
 *   the remote peer's `rtc.RTCRtpSender` which is sending the media
 *   the local peer.
 * 
 *   `var remoteStatsId = rtcInboundRtpStreamStats.remoteId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/remoteId`
 */
rtc.RTCInboundRtpStreamStats.remote_id = (function rtc$RTCInboundRtpStreamStats$remote_id(this$){
return this$.remoteId();
});
/**
 * Property.
 * 
 *   The remoteId property of the `rtc.RTCInboundRtpStreamStats` dictionary
 *   the `web.id` of the `rtc.RTCRemoteOutboundRtpStreamStats` object
 *   the remote peer's `rtc.RTCRtpSender` which is sending the media
 *   the local peer.
 * 
 *   `var remoteStatsId = rtcInboundRtpStreamStats.remoteId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/remoteId`
 */
rtc.RTCInboundRtpStreamStats.set_remote_id_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_remote_id_BANG_(this$,val){
return (this$["remoteId"] = val);
});
/**
 * Property.
 * 
 *   The sliCount property of the `rtc.RTCInboundRtpStreamStats` dictionary
 *   how many Slice Loss Indication (SLI) packets the `rtc.RTCRtpReceiver`
 *   which this object provdes statistics sent to the remote `rtc.RTCRtpSender`.
 * 
 *   `var sliCount = rtcInboundRtpStreamStats.sliCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/sliCount`
 */
rtc.RTCInboundRtpStreamStats.sli_count = (function rtc$RTCInboundRtpStreamStats$sli_count(this$){
return this$.sliCount();
});
/**
 * Property.
 * 
 *   The sliCount property of the `rtc.RTCInboundRtpStreamStats` dictionary
 *   how many Slice Loss Indication (SLI) packets the `rtc.RTCRtpReceiver`
 *   which this object provdes statistics sent to the remote `rtc.RTCRtpSender`.
 * 
 *   `var sliCount = rtcInboundRtpStreamStats.sliCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/sliCount`
 */
rtc.RTCInboundRtpStreamStats.set_sli_count_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_sli_count_BANG_(this$,val){
return (this$["sliCount"] = val);
});
/**
 * Property.
 * 
 *   The trackId property of the `rtc.RTCInboundRtpStreamStats` dictionary
 *   the `web.id` of the `rtc.RTCReceiverAudioTrackAttachmentStats`
 *   `rtc.RTCReceiverVideoTrackAttachmentStats` object representing
 *   `media.MediaStreamTrack` which is receiving the incoming media.
 * 
 *   `var trackStatsId = rtcInboundRtpStreamStats.trackId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/trackId`
 */
rtc.RTCInboundRtpStreamStats.track_id = (function rtc$RTCInboundRtpStreamStats$track_id(this$){
return this$.trackId();
});
/**
 * Property.
 * 
 *   The trackId property of the `rtc.RTCInboundRtpStreamStats` dictionary
 *   the `web.id` of the `rtc.RTCReceiverAudioTrackAttachmentStats`
 *   `rtc.RTCReceiverVideoTrackAttachmentStats` object representing
 *   `media.MediaStreamTrack` which is receiving the incoming media.
 * 
 *   `var trackStatsId = rtcInboundRtpStreamStats.trackId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/trackId`
 */
rtc.RTCInboundRtpStreamStats.set_track_id_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_track_id_BANG_(this$,val){
return (this$["trackId"] = val);
});
/**
 * Property.
 * 
 *   The fecPacketsReceived property of the `rtc.RTCInboundRtpStreamStats`
 *   indicates how many Forward Error Correction (FEC) packets have
 *   received by this RTP receiver from the remote peer.
 * 
 *   `var fecPacketsReceived = rtcInboundRtpStreamStats.fecPacketsReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived`
 */
rtc.RTCInboundRtpStreamStats.fec_packets_received = (function rtc$RTCInboundRtpStreamStats$fec_packets_received(this$){
return this$.fecPacketsReceived();
});
/**
 * Property.
 * 
 *   The fecPacketsReceived property of the `rtc.RTCInboundRtpStreamStats`
 *   indicates how many Forward Error Correction (FEC) packets have
 *   received by this RTP receiver from the remote peer.
 * 
 *   `var fecPacketsReceived = rtcInboundRtpStreamStats.fecPacketsReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCInboundRtpStreamStats/fecPacketsReceived`
 */
rtc.RTCInboundRtpStreamStats.set_fec_packets_received_BANG_ = (function rtc$RTCInboundRtpStreamStats$set_fec_packets_received_BANG_(this$,val){
return (this$["fecPacketsReceived"] = val);
});

//# sourceMappingURL=RTCInboundRtpStreamStats.js.map?rel=1565798851450
