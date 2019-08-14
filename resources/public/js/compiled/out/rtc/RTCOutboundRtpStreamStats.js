// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCOutboundRtpStreamStats');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The averageRtcpInterval property of the `rtc.RTCOutboundRtpStreamStats`
 *   is a floating-point value indicating the average time that should
 *   between transmissions of RTCP packets on this stream.
 * 
 *   `var averageRtcpInterval = RTCOutboundRtpStreamStats.averageRtcpInterval;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/averageRtcpInterval`
 */
rtc.RTCOutboundRtpStreamStats.average_rtcp_interval = (function rtc$RTCOutboundRtpStreamStats$average_rtcp_interval(this$){
return this$.averageRtcpInterval();
});
/**
 * Property.
 * 
 *   The averageRtcpInterval property of the `rtc.RTCOutboundRtpStreamStats`
 *   is a floating-point value indicating the average time that should
 *   between transmissions of RTCP packets on this stream.
 * 
 *   `var averageRtcpInterval = RTCOutboundRtpStreamStats.averageRtcpInterval;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/averageRtcpInterval`
 */
rtc.RTCOutboundRtpStreamStats.set_average_rtcp_interval_BANG_ = (function rtc$RTCOutboundRtpStreamStats$set_average_rtcp_interval_BANG_(this$,val){
return (this$["averageRtcpInterval"] = val);
});
/**
 * Property.
 * 
 *   The firCount property of the `rtc.RTCOutboundRtpStreamStats`
 *   indicates the number of Full Intra Request (FIR) that the remote
 *   has sent to this `rtc.RTCRtpSender`.
 * 
 *   `var firCount = RTCOutboundRtpStreamStats.firCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/firCount`
 */
rtc.RTCOutboundRtpStreamStats.fir_count = (function rtc$RTCOutboundRtpStreamStats$fir_count(this$){
return this$.firCount();
});
/**
 * Property.
 * 
 *   The firCount property of the `rtc.RTCOutboundRtpStreamStats`
 *   indicates the number of Full Intra Request (FIR) that the remote
 *   has sent to this `rtc.RTCRtpSender`.
 * 
 *   `var firCount = RTCOutboundRtpStreamStats.firCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/firCount`
 */
rtc.RTCOutboundRtpStreamStats.set_fir_count_BANG_ = (function rtc$RTCOutboundRtpStreamStats$set_fir_count_BANG_(this$,val){
return (this$["firCount"] = val);
});
/**
 * Property.
 * 
 *   The framesEncoded property of the `rtc.RTCOutboundRtpStreamStats`
 *   indicates the total number of frames that have been encoded by
 *   `rtc.RTCRtpSender` for this media source.
 * 
 *   `var framesEncoded = RTCOutboundRtpStreamStats.framesEncoded;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded`
 */
rtc.RTCOutboundRtpStreamStats.frames_encoded = (function rtc$RTCOutboundRtpStreamStats$frames_encoded(this$){
return this$.framesEncoded();
});
/**
 * Property.
 * 
 *   The framesEncoded property of the `rtc.RTCOutboundRtpStreamStats`
 *   indicates the total number of frames that have been encoded by
 *   `rtc.RTCRtpSender` for this media source.
 * 
 *   `var framesEncoded = RTCOutboundRtpStreamStats.framesEncoded;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded`
 */
rtc.RTCOutboundRtpStreamStats.set_frames_encoded_BANG_ = (function rtc$RTCOutboundRtpStreamStats$set_frames_encoded_BANG_(this$,val){
return (this$["framesEncoded"] = val);
});
/**
 * Property.
 * 
 *   The lastPacketSentTimestamp property of the `rtc.RTCOutboundRtpStreamStats`
 *   indicates the time at which the `rtc.RTCRtpSender` described
 *   this `rtc.RTCOutboundRtpStreamStats` object last transmitted
 *   packet to the remote receiver.
 * 
 *   `var lastPacketTimestamp = RTCOutboundRtpStreamStats.lastPacketSentTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/lastPacketSentTimestamp`
 */
rtc.RTCOutboundRtpStreamStats.last_packet_sent_timestamp = (function rtc$RTCOutboundRtpStreamStats$last_packet_sent_timestamp(this$){
return this$.lastPacketSentTimestamp();
});
/**
 * Property.
 * 
 *   The lastPacketSentTimestamp property of the `rtc.RTCOutboundRtpStreamStats`
 *   indicates the time at which the `rtc.RTCRtpSender` described
 *   this `rtc.RTCOutboundRtpStreamStats` object last transmitted
 *   packet to the remote receiver.
 * 
 *   `var lastPacketTimestamp = RTCOutboundRtpStreamStats.lastPacketSentTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/lastPacketSentTimestamp`
 */
rtc.RTCOutboundRtpStreamStats.set_last_packet_sent_timestamp_BANG_ = (function rtc$RTCOutboundRtpStreamStats$set_last_packet_sent_timestamp_BANG_(this$,val){
return (this$["lastPacketSentTimestamp"] = val);
});
/**
 * Property.
 * 
 *   The nackCount property of the `rtc.RTCOutboundRtpStreamStats`
 *   is a numeric value indicating the number of times the `rtc.RTCRtpSender`
 *   by this object received a NACK packet from the remote receiver.
 * 
 *   `var nackCount = RTCOutboundRtpStreamStats.nackCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/nackCount`
 */
rtc.RTCOutboundRtpStreamStats.nack_count = (function rtc$RTCOutboundRtpStreamStats$nack_count(this$){
return this$.nackCount();
});
/**
 * Property.
 * 
 *   The nackCount property of the `rtc.RTCOutboundRtpStreamStats`
 *   is a numeric value indicating the number of times the `rtc.RTCRtpSender`
 *   by this object received a NACK packet from the remote receiver.
 * 
 *   `var nackCount = RTCOutboundRtpStreamStats.nackCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/nackCount`
 */
rtc.RTCOutboundRtpStreamStats.set_nack_count_BANG_ = (function rtc$RTCOutboundRtpStreamStats$set_nack_count_BANG_(this$,val){
return (this$["nackCount"] = val);
});
/**
 * Property.
 * 
 *   The perDscpPacketsSent property of the `rtc.RTCOutboundRtpStreamStats`
 *   is a record comprised of key/value pairs in which each key is
 *   string representation of a Differentiated Services Code Point
 *   the value is the number of packets sent for that DCSP.
 * 
 *   `var perDscpPacketsSent = RTCOutboundRtpStreamStats.perDscpPacketsSent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/perDscpPacketsSent`
 */
rtc.RTCOutboundRtpStreamStats.per_dscp_packets_sent = (function rtc$RTCOutboundRtpStreamStats$per_dscp_packets_sent(this$){
return this$.perDscpPacketsSent();
});
/**
 * Property.
 * 
 *   The perDscpPacketsSent property of the `rtc.RTCOutboundRtpStreamStats`
 *   is a record comprised of key/value pairs in which each key is
 *   string representation of a Differentiated Services Code Point
 *   the value is the number of packets sent for that DCSP.
 * 
 *   `var perDscpPacketsSent = RTCOutboundRtpStreamStats.perDscpPacketsSent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/perDscpPacketsSent`
 */
rtc.RTCOutboundRtpStreamStats.set_per_dscp_packets_sent_BANG_ = (function rtc$RTCOutboundRtpStreamStats$set_per_dscp_packets_sent_BANG_(this$,val){
return (this$["perDscpPacketsSent"] = val);
});
/**
 * Property.
 * 
 *   The pliCount property of the `rtc.RTCOutboundRtpStreamStats`
 *   states the number of times the remote peer's `rtc.RTCRtpReceiver`
 *   a Picture Loss Indication (PLI) packet to the `rtc.RTCRtpSender`
 *   which this object provides statistics.
 * 
 *   `var pliCount = RTCOutboundRtpStreamStats.pliCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/pliCount`
 */
rtc.RTCOutboundRtpStreamStats.pli_count = (function rtc$RTCOutboundRtpStreamStats$pli_count(this$){
return this$.pliCount();
});
/**
 * Property.
 * 
 *   The pliCount property of the `rtc.RTCOutboundRtpStreamStats`
 *   states the number of times the remote peer's `rtc.RTCRtpReceiver`
 *   a Picture Loss Indication (PLI) packet to the `rtc.RTCRtpSender`
 *   which this object provides statistics.
 * 
 *   `var pliCount = RTCOutboundRtpStreamStats.pliCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/pliCount`
 */
rtc.RTCOutboundRtpStreamStats.set_pli_count_BANG_ = (function rtc$RTCOutboundRtpStreamStats$set_pli_count_BANG_(this$,val){
return (this$["pliCount"] = val);
});
/**
 * Property.
 * 
 *   The qpSum property of the `rtc.RTCOutboundRtpStreamStats` dictionary
 *   a value generated by adding the Quantization Parameter (QP) values
 *   every frame this sender has produced to date on the video track
 *   to this RTCOutboundRtpStreamStats object.
 * 
 *   `var qpSum = RTCOutboundRtpStreamStats.qpSum;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/qpSum`
 */
rtc.RTCOutboundRtpStreamStats.qp_sum = (function rtc$RTCOutboundRtpStreamStats$qp_sum(this$){
return this$.qpSum();
});
/**
 * Property.
 * 
 *   The qpSum property of the `rtc.RTCOutboundRtpStreamStats` dictionary
 *   a value generated by adding the Quantization Parameter (QP) values
 *   every frame this sender has produced to date on the video track
 *   to this RTCOutboundRtpStreamStats object.
 * 
 *   `var qpSum = RTCOutboundRtpStreamStats.qpSum;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/qpSum`
 */
rtc.RTCOutboundRtpStreamStats.set_qp_sum_BANG_ = (function rtc$RTCOutboundRtpStreamStats$set_qp_sum_BANG_(this$,val){
return (this$["qpSum"] = val);
});
/**
 * Property.
 * 
 *   The qualityLimitationReason property of the `rtc.RTCOutboundRtpStreamStats`
 *   is a string indicating the reason why the media quality in the
 *   is currently being reduced by the codec during encoding, or none
 *   no quality reduction is being performed.
 * 
 *   `var qualityLimitationReason = RTCOutboundRtpStreamStats.qualityLimitationReason;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason`
 */
rtc.RTCOutboundRtpStreamStats.quality_limitation_reason = (function rtc$RTCOutboundRtpStreamStats$quality_limitation_reason(this$){
return this$.qualityLimitationReason();
});
/**
 * Property.
 * 
 *   The qualityLimitationReason property of the `rtc.RTCOutboundRtpStreamStats`
 *   is a string indicating the reason why the media quality in the
 *   is currently being reduced by the codec during encoding, or none
 *   no quality reduction is being performed.
 * 
 *   `var qualityLimitationReason = RTCOutboundRtpStreamStats.qualityLimitationReason;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason`
 */
rtc.RTCOutboundRtpStreamStats.set_quality_limitation_reason_BANG_ = (function rtc$RTCOutboundRtpStreamStats$set_quality_limitation_reason_BANG_(this$,val){
return (this$["qualityLimitationReason"] = val);
});
/**
 * Property.
 * 
 *   The remoteId property of the `rtc.RTCOutboundRtpStreamStats`
 *   specifies the `web.id` of the `rtc.RTCRemoteInboundRtpStreamStats`
 *   representing the remote peer's `rtc.RTCRtpReceiver` which is
 *   the media to the local peer for this SSRC.
 * 
 *   `var remoteStatsId = RTCOutboundRtpStreamStats.remoteId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/remoteId`
 */
rtc.RTCOutboundRtpStreamStats.remote_id = (function rtc$RTCOutboundRtpStreamStats$remote_id(this$){
return this$.remoteId();
});
/**
 * Property.
 * 
 *   The remoteId property of the `rtc.RTCOutboundRtpStreamStats`
 *   specifies the `web.id` of the `rtc.RTCRemoteInboundRtpStreamStats`
 *   representing the remote peer's `rtc.RTCRtpReceiver` which is
 *   the media to the local peer for this SSRC.
 * 
 *   `var remoteStatsId = RTCOutboundRtpStreamStats.remoteId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/remoteId`
 */
rtc.RTCOutboundRtpStreamStats.set_remote_id_BANG_ = (function rtc$RTCOutboundRtpStreamStats$set_remote_id_BANG_(this$,val){
return (this$["remoteId"] = val);
});
/**
 * Property.
 * 
 *   The sliCount property of the `rtc.RTCOutboundRtpStreamStats`
 *   indicates how many Slice Loss Indication (SLI) packets the `rtc.RTCRtpSender`
 *   from the remote `rtc.RTCRtpReceiver` for the RTP stream described
 *   this object.
 * 
 *   `var sliCount = RTCOutboundRtpStreamStats.sliCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/sliCount`
 */
rtc.RTCOutboundRtpStreamStats.sli_count = (function rtc$RTCOutboundRtpStreamStats$sli_count(this$){
return this$.sliCount();
});
/**
 * Property.
 * 
 *   The sliCount property of the `rtc.RTCOutboundRtpStreamStats`
 *   indicates how many Slice Loss Indication (SLI) packets the `rtc.RTCRtpSender`
 *   from the remote `rtc.RTCRtpReceiver` for the RTP stream described
 *   this object.
 * 
 *   `var sliCount = RTCOutboundRtpStreamStats.sliCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/sliCount`
 */
rtc.RTCOutboundRtpStreamStats.set_sli_count_BANG_ = (function rtc$RTCOutboundRtpStreamStats$set_sli_count_BANG_(this$,val){
return (this$["sliCount"] = val);
});
/**
 * Property.
 * 
 *   The trackId property of the `rtc.RTCOutboundRtpStreamStats` dictionary
 *   the `web.id` of the `rtc.RTCSenderAudioTrackAttachmentStats`
 *   `rtc.RTCSenderVideoTrackAttachmentStats` object representing
 *   `media.MediaStreamTrack` which is being sent on this stream.
 * 
 *   `var trackStatsId = RTCOutboundRtpStreamStats.trackId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/trackId`
 */
rtc.RTCOutboundRtpStreamStats.track_id = (function rtc$RTCOutboundRtpStreamStats$track_id(this$){
return this$.trackId();
});
/**
 * Property.
 * 
 *   The trackId property of the `rtc.RTCOutboundRtpStreamStats` dictionary
 *   the `web.id` of the `rtc.RTCSenderAudioTrackAttachmentStats`
 *   `rtc.RTCSenderVideoTrackAttachmentStats` object representing
 *   `media.MediaStreamTrack` which is being sent on this stream.
 * 
 *   `var trackStatsId = RTCOutboundRtpStreamStats.trackId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOutboundRtpStreamStats/trackId`
 */
rtc.RTCOutboundRtpStreamStats.set_track_id_BANG_ = (function rtc$RTCOutboundRtpStreamStats$set_track_id_BANG_(this$,val){
return (this$["trackId"] = val);
});

//# sourceMappingURL=RTCOutboundRtpStreamStats.js.map?rel=1565798809684
