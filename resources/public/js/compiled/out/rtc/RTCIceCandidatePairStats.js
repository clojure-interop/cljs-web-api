// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCIceCandidatePairStats');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property availableOutgoingBitrate
 *   a value indicative of the available outbound capacity of the
 *   connection represented by the candidate pair.
 * 
 *   `availableOutgoingBitrate = rtcIceCandidatePairStats.availableOutgoingBitrate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate`
 */
rtc.RTCIceCandidatePairStats.available_outgoing_bitrate = (function rtc$RTCIceCandidatePairStats$available_outgoing_bitrate(this$){
return this$.availableOutgoingBitrate();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property availableOutgoingBitrate
 *   a value indicative of the available outbound capacity of the
 *   connection represented by the candidate pair.
 * 
 *   `availableOutgoingBitrate = rtcIceCandidatePairStats.availableOutgoingBitrate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/availableOutgoingBitrate`
 */
rtc.RTCIceCandidatePairStats.set_available_outgoing_bitrate_BANG_ = (function rtc$RTCIceCandidatePairStats$set_available_outgoing_bitrate_BANG_(this$,val){
return (this$["availableOutgoingBitrate"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property bytesReceived indicates
 *   total number of payload bytes—that is, bytes which aren't overhead
 *   as headers or padding—that hve been received to date on the connection
 *   by the candidate pair.
 * 
 *   `received = rtcIceCandidatePairStats.bytesReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/bytesReceived`
 */
rtc.RTCIceCandidatePairStats.bytes_receieved = (function rtc$RTCIceCandidatePairStats$bytes_receieved(this$){
return this$.bytesReceieved();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property bytesReceived indicates
 *   total number of payload bytes—that is, bytes which aren't overhead
 *   as headers or padding—that hve been received to date on the connection
 *   by the candidate pair.
 * 
 *   `received = rtcIceCandidatePairStats.bytesReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/bytesReceived`
 */
rtc.RTCIceCandidatePairStats.set_bytes_receieved_BANG_ = (function rtc$RTCIceCandidatePairStats$set_bytes_receieved_BANG_(this$,val){
return (this$["bytesReceieved"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property circuitBreakerTriggerCount
 *   the number of times the circuit-breaker has been triggered to
 *   a connection timeout or other unexpected connection abort on
 *   specific connection configuration.
 * 
 *   `cbtCount = rtcIceCandidatePairStats.circuitBreakerTriggerCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/circuitBreakerTriggerCount`
 */
rtc.RTCIceCandidatePairStats.circuit_breaker_trigger_count = (function rtc$RTCIceCandidatePairStats$circuit_breaker_trigger_count(this$){
return this$.circuitBreakerTriggerCount();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property circuitBreakerTriggerCount
 *   the number of times the circuit-breaker has been triggered to
 *   a connection timeout or other unexpected connection abort on
 *   specific connection configuration.
 * 
 *   `cbtCount = rtcIceCandidatePairStats.circuitBreakerTriggerCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/circuitBreakerTriggerCount`
 */
rtc.RTCIceCandidatePairStats.set_circuit_breaker_trigger_count_BANG_ = (function rtc$RTCIceCandidatePairStats$set_circuit_breaker_trigger_count_BANG_(this$,val){
return (this$["circuitBreakerTriggerCount"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property consentExpiredTimestamp
 *   the time at which the most recent STUN binding response expired.
 * 
 *   `consentExpiration = rtcIceCandidatePairStats.consentExpiredTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/consentExpiredTimestamp`
 */
rtc.RTCIceCandidatePairStats.consent_expired_timestamp = (function rtc$RTCIceCandidatePairStats$consent_expired_timestamp(this$){
return this$.consentExpiredTimestamp();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property consentExpiredTimestamp
 *   the time at which the most recent STUN binding response expired.
 * 
 *   `consentExpiration = rtcIceCandidatePairStats.consentExpiredTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/consentExpiredTimestamp`
 */
rtc.RTCIceCandidatePairStats.set_consent_expired_timestamp_BANG_ = (function rtc$RTCIceCandidatePairStats$set_consent_expired_timestamp_BANG_(this$,val){
return (this$["consentExpiredTimestamp"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property firstRequestTimestamp
 *   the time at which the first STUN request was sent on the described
 *   pair.
 * 
 *   `firstRequestTimestamp = rtcIceCandidatePairStats.firstRequestTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/firstRequestTimestamp`
 */
rtc.RTCIceCandidatePairStats.first_request_timestamp = (function rtc$RTCIceCandidatePairStats$first_request_timestamp(this$){
return this$.firstRequestTimestamp();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property firstRequestTimestamp
 *   the time at which the first STUN request was sent on the described
 *   pair.
 * 
 *   `firstRequestTimestamp = rtcIceCandidatePairStats.firstRequestTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/firstRequestTimestamp`
 */
rtc.RTCIceCandidatePairStats.set_first_request_timestamp_BANG_ = (function rtc$RTCIceCandidatePairStats$set_first_request_timestamp_BANG_(this$,val){
return (this$["firstRequestTimestamp"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property lastPacketReceivedTimestamp
 *   the time at which the connection described by the candidate pair
 *   received a packet. STUN packets are not included.
 * 
 *   `lastPacketReceivedTimestamp = rtcIceCandidatePairStats.lastPacketReceivedTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastPacketReceivedTimestamp`
 */
rtc.RTCIceCandidatePairStats.last_packet_received_timestamp = (function rtc$RTCIceCandidatePairStats$last_packet_received_timestamp(this$){
return this$.lastPacketReceivedTimestamp();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property lastPacketReceivedTimestamp
 *   the time at which the connection described by the candidate pair
 *   received a packet. STUN packets are not included.
 * 
 *   `lastPacketReceivedTimestamp = rtcIceCandidatePairStats.lastPacketReceivedTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastPacketReceivedTimestamp`
 */
rtc.RTCIceCandidatePairStats.set_last_packet_received_timestamp_BANG_ = (function rtc$RTCIceCandidatePairStats$set_last_packet_received_timestamp_BANG_(this$,val){
return (this$["lastPacketReceivedTimestamp"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property lastPacketSentTimestamp
 *   the time at which the connection described by the candidate pair
 *   sent a packet, not including STUN packets.
 * 
 *   `lastPacketSentTimestamp = rtcIceCandidatePairStats.lastPacketSentTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastPacketSentTimestamp`
 */
rtc.RTCIceCandidatePairStats.last_packet_sent_timestamp = (function rtc$RTCIceCandidatePairStats$last_packet_sent_timestamp(this$){
return this$.lastPacketSentTimestamp();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property lastPacketSentTimestamp
 *   the time at which the connection described by the candidate pair
 *   sent a packet, not including STUN packets.
 * 
 *   `lastPacketSentTimestamp = rtcIceCandidatePairStats.lastPacketSentTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastPacketSentTimestamp`
 */
rtc.RTCIceCandidatePairStats.set_last_packet_sent_timestamp_BANG_ = (function rtc$RTCIceCandidatePairStats$set_last_packet_sent_timestamp_BANG_(this$,val){
return (this$["lastPacketSentTimestamp"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property lastRequestTimestamp
 *   the time at which the most recent STUN request was sent on the
 *   candidate pair.
 * 
 *   `lastRequestTimestamp = rtcIceCandidatePairStats.lastRequestTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastRequestTimestamp`
 */
rtc.RTCIceCandidatePairStats.last_request_timestamp = (function rtc$RTCIceCandidatePairStats$last_request_timestamp(this$){
return this$.lastRequestTimestamp();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property lastRequestTimestamp
 *   the time at which the most recent STUN request was sent on the
 *   candidate pair.
 * 
 *   `lastRequestTimestamp = rtcIceCandidatePairStats.lastRequestTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastRequestTimestamp`
 */
rtc.RTCIceCandidatePairStats.set_last_request_timestamp_BANG_ = (function rtc$RTCIceCandidatePairStats$set_last_request_timestamp_BANG_(this$,val){
return (this$["lastRequestTimestamp"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property lastResponseTimestamp
 *   the time at which the last STUN response was received on the
 *   candidate pair.
 * 
 *   `lastResponseTimestamp = rtcIceCandidatePairStats.lastResponseTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastResponseTimestamp`
 */
rtc.RTCIceCandidatePairStats.last_response_timestamp = (function rtc$RTCIceCandidatePairStats$last_response_timestamp(this$){
return this$.lastResponseTimestamp();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property lastResponseTimestamp
 *   the time at which the last STUN response was received on the
 *   candidate pair.
 * 
 *   `lastResponseTimestamp = rtcIceCandidatePairStats.lastResponseTimestamp;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/lastResponseTimestamp`
 */
rtc.RTCIceCandidatePairStats.set_last_response_timestamp_BANG_ = (function rtc$RTCIceCandidatePairStats$set_last_response_timestamp_BANG_(this$,val){
return (this$["lastResponseTimestamp"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property localCandidateId
 *   a string that uniquely identifies the local ICE candidate which
 *   analyzed to generate the `rtc.RTCIceCandidateStats` used to compute
 *   statistics for this pair of candidates.
 * 
 *   `localCandidateId = rtcIceCandidatePairStats.localCandidateId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/localCandidateId`
 */
rtc.RTCIceCandidatePairStats.local_candidate_id = (function rtc$RTCIceCandidatePairStats$local_candidate_id(this$){
return this$.localCandidateId();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property localCandidateId
 *   a string that uniquely identifies the local ICE candidate which
 *   analyzed to generate the `rtc.RTCIceCandidateStats` used to compute
 *   statistics for this pair of candidates.
 * 
 *   `localCandidateId = rtcIceCandidatePairStats.localCandidateId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/localCandidateId`
 */
rtc.RTCIceCandidatePairStats.set_local_candidate_id_BANG_ = (function rtc$RTCIceCandidatePairStats$set_local_candidate_id_BANG_(this$,val){
return (this$["localCandidateId"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property nominated specifies
 *   or not the candidate pair described by the underlying RTCIceCandidatePair
 *   been nominated to be used as the configuration for the WebRTC
 * 
 *   `nominated = rtcIceCandidatePairStats.nominated;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/nominated`
 */
rtc.RTCIceCandidatePairStats.nominated = (function rtc$RTCIceCandidatePairStats$nominated(this$){
return this$.nominated();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property nominated specifies
 *   or not the candidate pair described by the underlying RTCIceCandidatePair
 *   been nominated to be used as the configuration for the WebRTC
 * 
 *   `nominated = rtcIceCandidatePairStats.nominated;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/nominated`
 */
rtc.RTCIceCandidatePairStats.set_nominated_BANG_ = (function rtc$RTCIceCandidatePairStats$set_nominated_BANG_(this$,val){
return (this$["nominated"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's packetsReceived
 *   indicates the total number of packets of any kind that have been
 *   on the connection described by the pair of candidates.
 * 
 *   `packetsReceived = rtcIceCandidatePairStats.packetsReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/packetsReceived`
 */
rtc.RTCIceCandidatePairStats.packets_received = (function rtc$RTCIceCandidatePairStats$packets_received(this$){
return this$.packetsReceived();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's packetsReceived
 *   indicates the total number of packets of any kind that have been
 *   on the connection described by the pair of candidates.
 * 
 *   `packetsReceived = rtcIceCandidatePairStats.packetsReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/packetsReceived`
 */
rtc.RTCIceCandidatePairStats.set_packets_received_BANG_ = (function rtc$RTCIceCandidatePairStats$set_packets_received_BANG_(this$,val){
return (this$["packetsReceived"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's packetsSent property
 *   the total number of packets which have been sent on the connection
 *   by the pair of candidates.
 * 
 *   `packetsSent = rtcIceCandidatePairStats.packetsSent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/packetsSent`
 */
rtc.RTCIceCandidatePairStats.packets_sent = (function rtc$RTCIceCandidatePairStats$packets_sent(this$){
return this$.packetsSent();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's packetsSent property
 *   the total number of packets which have been sent on the connection
 *   by the pair of candidates.
 * 
 *   `packetsSent = rtcIceCandidatePairStats.packetsSent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/packetsSent`
 */
rtc.RTCIceCandidatePairStats.set_packets_sent_BANG_ = (function rtc$RTCIceCandidatePairStats$set_packets_sent_BANG_(this$,val){
return (this$["packetsSent"] = val);
});
/**
 * Property.
 * 
 *   The obsolete `rtc.RTCIceCandidatePairStats` property priority
 *   the priority of the candidate pair as an integer value.
 * 
 *   `pairPriority = rtcIceCandidatePairStats.priority;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/priority`
 */
rtc.RTCIceCandidatePairStats.priority = (function rtc$RTCIceCandidatePairStats$priority(this$){
return this$.priority();
});
/**
 * Property.
 * 
 *   The obsolete `rtc.RTCIceCandidatePairStats` property priority
 *   the priority of the candidate pair as an integer value.
 * 
 *   `pairPriority = rtcIceCandidatePairStats.priority;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/priority`
 */
rtc.RTCIceCandidatePairStats.set_priority_BANG_ = (function rtc$RTCIceCandidatePairStats$set_priority_BANG_(this$,val){
return (this$["priority"] = val);
});
/**
 * Property.
 * 
 *   The obsolete `rtc.RTCIceCandidatePairStats` property readable
 *   whether or not the connection described by the candidate pair
 *   received at least one valid incoming ICE request.
 * 
 *   `isReadable = rtcIceCandidatePairStats.readable;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/readable`
 */
rtc.RTCIceCandidatePairStats.readable = (function rtc$RTCIceCandidatePairStats$readable(this$){
return this$.readable();
});
/**
 * Property.
 * 
 *   The obsolete `rtc.RTCIceCandidatePairStats` property readable
 *   whether or not the connection described by the candidate pair
 *   received at least one valid incoming ICE request.
 * 
 *   `isReadable = rtcIceCandidatePairStats.readable;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/readable`
 */
rtc.RTCIceCandidatePairStats.set_readable_BANG_ = (function rtc$RTCIceCandidatePairStats$set_readable_BANG_(this$,val){
return (this$["readable"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property remoteCandidateId
 *   a string that uniquely identifies the remote ICE candidate which
 *   analyzed to generate the `rtc.RTCIceCandidateStats` used to compute
 *   statistics for this pair of candidates.
 * 
 *   `remoteCandidateId = rtcIceCandidatePairStats.remoteCandidateId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/remoteCandidateId`
 */
rtc.RTCIceCandidatePairStats.remote_candidate_id = (function rtc$RTCIceCandidatePairStats$remote_candidate_id(this$){
return this$.remoteCandidateId();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property remoteCandidateId
 *   a string that uniquely identifies the remote ICE candidate which
 *   analyzed to generate the `rtc.RTCIceCandidateStats` used to compute
 *   statistics for this pair of candidates.
 * 
 *   `remoteCandidateId = rtcIceCandidatePairStats.remoteCandidateId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/remoteCandidateId`
 */
rtc.RTCIceCandidatePairStats.set_remote_candidate_id_BANG_ = (function rtc$RTCIceCandidatePairStats$set_remote_candidate_id_BANG_(this$,val){
return (this$["remoteCandidateId"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's requestsReceived
 *   indicates the total number of STUN connectivity check requests
 *   have been received so far on the connection described by this
 *   of candidates.
 * 
 *   `requestsReceived = rtcIceCandidatePairStats.requestsReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/requestsReceived`
 */
rtc.RTCIceCandidatePairStats.requests_received = (function rtc$RTCIceCandidatePairStats$requests_received(this$){
return this$.requestsReceived();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's requestsReceived
 *   indicates the total number of STUN connectivity check requests
 *   have been received so far on the connection described by this
 *   of candidates.
 * 
 *   `requestsReceived = rtcIceCandidatePairStats.requestsReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/requestsReceived`
 */
rtc.RTCIceCandidatePairStats.set_requests_received_BANG_ = (function rtc$RTCIceCandidatePairStats$set_requests_received_BANG_(this$,val){
return (this$["requestsReceived"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's requestsSent
 *   indicates the total number of STUN connectivity check requests
 *   have been sent so far on the connection described by this pair
 *   candidates.
 * 
 *   `requestsSent = rtcIceCandidatePairStats.requestsSent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/requestsSent`
 */
rtc.RTCIceCandidatePairStats.requests_sent = (function rtc$RTCIceCandidatePairStats$requests_sent(this$){
return this$.requestsSent();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's requestsSent
 *   indicates the total number of STUN connectivity check requests
 *   have been sent so far on the connection described by this pair
 *   candidates.
 * 
 *   `requestsSent = rtcIceCandidatePairStats.requestsSent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/requestsSent`
 */
rtc.RTCIceCandidatePairStats.set_requests_sent_BANG_ = (function rtc$RTCIceCandidatePairStats$set_requests_sent_BANG_(this$,val){
return (this$["requestsSent"] = val);
});
/**
 * Property.
 * 
 *   The responsesReceived property in the `rtc.RTCIceCandidatePairStats`
 *   indicates the total number of STUN connectivity check responses
 *   have been received on the connection described by this pair of
 * 
 *   `responsesReceived = rtcIceCandidatePairStats.responsesReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/responsesReceived`
 */
rtc.RTCIceCandidatePairStats.responses_received = (function rtc$RTCIceCandidatePairStats$responses_received(this$){
return this$.responsesReceived();
});
/**
 * Property.
 * 
 *   The responsesReceived property in the `rtc.RTCIceCandidatePairStats`
 *   indicates the total number of STUN connectivity check responses
 *   have been received on the connection described by this pair of
 * 
 *   `responsesReceived = rtcIceCandidatePairStats.responsesReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/responsesReceived`
 */
rtc.RTCIceCandidatePairStats.set_responses_received_BANG_ = (function rtc$RTCIceCandidatePairStats$set_responses_received_BANG_(this$,val){
return (this$["responsesReceived"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's responsesSent
 *   indicates the total number of STUN connectivity check responses
 *   have been sent so far on the connection described by this pair
 *   candidates.
 * 
 *   `responsesSent = rtcIceCandidatePairStats.responsesSent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/responsesSent`
 */
rtc.RTCIceCandidatePairStats.responses_sent = (function rtc$RTCIceCandidatePairStats$responses_sent(this$){
return this$.responsesSent();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's responsesSent
 *   indicates the total number of STUN connectivity check responses
 *   have been sent so far on the connection described by this pair
 *   candidates.
 * 
 *   `responsesSent = rtcIceCandidatePairStats.responsesSent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/responsesSent`
 */
rtc.RTCIceCandidatePairStats.set_responses_sent_BANG_ = (function rtc$RTCIceCandidatePairStats$set_responses_sent_BANG_(this$,val){
return (this$["responsesSent"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's retransmissionsReceived
 *   indicates the total number of STUN connectivity check request
 *   that have been received so far on the pair of candidates.
 * 
 *   `retransmissionsReceived = rtcIceCandidatePairStats.retransmissionsReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/retransmissionsReceived`
 */
rtc.RTCIceCandidatePairStats.retransmissions_received = (function rtc$RTCIceCandidatePairStats$retransmissions_received(this$){
return this$.retransmissionsReceived();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's retransmissionsReceived
 *   indicates the total number of STUN connectivity check request
 *   that have been received so far on the pair of candidates.
 * 
 *   `retransmissionsReceived = rtcIceCandidatePairStats.retransmissionsReceived;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/retransmissionsReceived`
 */
rtc.RTCIceCandidatePairStats.set_retransmissions_received_BANG_ = (function rtc$RTCIceCandidatePairStats$set_retransmissions_received_BANG_(this$,val){
return (this$["retransmissionsReceived"] = val);
});
/**
 * Property.
 * 
 *   The state property in an `rtc.RTCIceCandidatePairStats` object
 *   the state of the check list of which the candidate pair is a
 * 
 *   `state = rtcIceCandidatePairStats.state;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/state`
 */
rtc.RTCIceCandidatePairStats.state = (function rtc$RTCIceCandidatePairStats$state(this$){
return this$.state();
});
/**
 * Property.
 * 
 *   The state property in an `rtc.RTCIceCandidatePairStats` object
 *   the state of the check list of which the candidate pair is a
 * 
 *   `state = rtcIceCandidatePairStats.state;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/state`
 */
rtc.RTCIceCandidatePairStats.set_state_BANG_ = (function rtc$RTCIceCandidatePairStats$set_state_BANG_(this$,val){
return (this$["state"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's totalRoundTripTime
 *   is the total time that has elapsed between sending STUN requests
 *   receiving the responses, for all such requests that have been
 *   so far on the pair of candidates described by this RTCIceCandidatePairStats
 * 
 *   `totalRTT = rtcIceCandidatePairStats.totalRoundTripTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime`
 */
rtc.RTCIceCandidatePairStats.total_round_trip_time = (function rtc$RTCIceCandidatePairStats$total_round_trip_time(this$){
return this$.totalRoundTripTime();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's totalRoundTripTime
 *   is the total time that has elapsed between sending STUN requests
 *   receiving the responses, for all such requests that have been
 *   so far on the pair of candidates described by this RTCIceCandidatePairStats
 * 
 *   `totalRTT = rtcIceCandidatePairStats.totalRoundTripTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/totalRoundTripTime`
 */
rtc.RTCIceCandidatePairStats.set_total_round_trip_time_BANG_ = (function rtc$RTCIceCandidatePairStats$set_total_round_trip_time_BANG_(this$,val){
return (this$["totalRoundTripTime"] = val);
});
/**
 * Property.
 * 
 *   The transportId property uniquely identifies the `rtc.RTCIceTransport`
 *   was inspected to obtain the transport-related statistics contained
 *   the `rtc.RTCIceCandidatePairStats` object.
 * 
 *   `transportId = rtcIceCandidatePairStats.transportId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/transportId`
 */
rtc.RTCIceCandidatePairStats.transport_id = (function rtc$RTCIceCandidatePairStats$transport_id(this$){
return this$.transportId();
});
/**
 * Property.
 * 
 *   The transportId property uniquely identifies the `rtc.RTCIceTransport`
 *   was inspected to obtain the transport-related statistics contained
 *   the `rtc.RTCIceCandidatePairStats` object.
 * 
 *   `transportId = rtcIceCandidatePairStats.transportId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/transportId`
 */
rtc.RTCIceCandidatePairStats.set_transport_id_BANG_ = (function rtc$RTCIceCandidatePairStats$set_transport_id_BANG_(this$,val){
return (this$["transportId"] = val);
});
/**
 * Property.
 * 
 *   The obsolete `rtc.RTCIceCandidatePairStats` property writable
 *   whether or not the connection described by the candidate pair
 *   writable.
 * 
 *   `isWritable = rtcIceCandidatePairStats.writable;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/writable`
 */
rtc.RTCIceCandidatePairStats.writable = (function rtc$RTCIceCandidatePairStats$writable(this$){
return this$.writable();
});
/**
 * Property.
 * 
 *   The obsolete `rtc.RTCIceCandidatePairStats` property writable
 *   whether or not the connection described by the candidate pair
 *   writable.
 * 
 *   `isWritable = rtcIceCandidatePairStats.writable;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/writable`
 */
rtc.RTCIceCandidatePairStats.set_writable_BANG_ = (function rtc$RTCIceCandidatePairStats$set_writable_BANG_(this$,val){
return (this$["writable"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property availableIncomingBitrate
 *   a value indicative of the available inbound capacity of the network
 *   represented by the candidate pair.
 * 
 *   `availableIncomingBitrate = rtcIceCandidatePairStats.availableIncomingBitrate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/availableIncomingBitrate`
 */
rtc.RTCIceCandidatePairStats.available_incoming_bitrate = (function rtc$RTCIceCandidatePairStats$available_incoming_bitrate(this$){
return this$.availableIncomingBitrate();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property availableIncomingBitrate
 *   a value indicative of the available inbound capacity of the network
 *   represented by the candidate pair.
 * 
 *   `availableIncomingBitrate = rtcIceCandidatePairStats.availableIncomingBitrate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/availableIncomingBitrate`
 */
rtc.RTCIceCandidatePairStats.set_available_incoming_bitrate_BANG_ = (function rtc$RTCIceCandidatePairStats$set_available_incoming_bitrate_BANG_(this$,val){
return (this$["availableIncomingBitrate"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property bytesSent indicates
 *   total number of payload bytes—that is, bytes which aren't overhead
 *   as headers or padding—that hve been sent so far on the connection
 *   by the candidate pair.
 * 
 *   `sent = rtcIceCandidatePairStats.bytesSent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/bytesSent`
 */
rtc.RTCIceCandidatePairStats.bytes_sent = (function rtc$RTCIceCandidatePairStats$bytes_sent(this$){
return this$.bytesSent();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property bytesSent indicates
 *   total number of payload bytes—that is, bytes which aren't overhead
 *   as headers or padding—that hve been sent so far on the connection
 *   by the candidate pair.
 * 
 *   `sent = rtcIceCandidatePairStats.bytesSent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/bytesSent`
 */
rtc.RTCIceCandidatePairStats.set_bytes_sent_BANG_ = (function rtc$RTCIceCandidatePairStats$set_bytes_sent_BANG_(this$,val){
return (this$["bytesSent"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property consentRequestsSent
 *   the number of consent requests that have been sent by this peer
 *   the remote peer on the connection described by the pair of candidates.
 * 
 *   `consentRequestsSent = rtcIceCandidatePairStats.consentRequestsSent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/consentRequestsSent`
 */
rtc.RTCIceCandidatePairStats.consent_requests_sent = (function rtc$RTCIceCandidatePairStats$consent_requests_sent(this$){
return this$.consentRequestsSent();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property consentRequestsSent
 *   the number of consent requests that have been sent by this peer
 *   the remote peer on the connection described by the pair of candidates.
 * 
 *   `consentRequestsSent = rtcIceCandidatePairStats.consentRequestsSent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/consentRequestsSent`
 */
rtc.RTCIceCandidatePairStats.set_consent_requests_sent_BANG_ = (function rtc$RTCIceCandidatePairStats$set_consent_requests_sent_BANG_(this$,val){
return (this$["consentRequestsSent"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property currentRoundTripTime
 *   a floating-point value indicating the number of seconds it takes
 *   data to be sent by this peer to the remote peer and back over
 *   connection described by this pair of ICE candidates.
 * 
 *   `rtt = rtcIceCandidatePairStats.currentRoundTripTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime`
 */
rtc.RTCIceCandidatePairStats.current_round_trip_time = (function rtc$RTCIceCandidatePairStats$current_round_trip_time(this$){
return this$.currentRoundTripTime();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` property currentRoundTripTime
 *   a floating-point value indicating the number of seconds it takes
 *   data to be sent by this peer to the remote peer and back over
 *   connection described by this pair of ICE candidates.
 * 
 *   `rtt = rtcIceCandidatePairStats.currentRoundTripTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/currentRoundTripTime`
 */
rtc.RTCIceCandidatePairStats.set_current_round_trip_time_BANG_ = (function rtc$RTCIceCandidatePairStats$set_current_round_trip_time_BANG_(this$,val){
return (this$["currentRoundTripTime"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's retransmissionsSent
 *   indicates the total number of STUN connectivity check request
 *   that have been sent so far on the pair of candidates.
 * 
 *   `retransmissionsSent = rtcIceCandidatePairStats.retransmissionsSent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/retransmissionsSent`
 */
rtc.RTCIceCandidatePairStats.retransmissions_sent = (function rtc$RTCIceCandidatePairStats$retransmissions_sent(this$){
return this$.retransmissionsSent();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidatePairStats` dictionary's retransmissionsSent
 *   indicates the total number of STUN connectivity check request
 *   that have been sent so far on the pair of candidates.
 * 
 *   `retransmissionsSent = rtcIceCandidatePairStats.retransmissionsSent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/retransmissionsSent`
 */
rtc.RTCIceCandidatePairStats.set_retransmissions_sent_BANG_ = (function rtc$RTCIceCandidatePairStats$set_retransmissions_sent_BANG_(this$,val){
return (this$["retransmissionsSent"] = val);
});
/**
 * Property.
 * 
 *   The non-standard, Firefox-specific `rtc.RTCIceCandidatePairStats`
 *   selected indicates whether or not the candidate pair described
 *   the object is the one currently being used to communicate with
 *   remote peer.
 * 
 *   `isSelected = icpStats.selected;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/selected`
 */
rtc.RTCIceCandidatePairStats.selected = (function rtc$RTCIceCandidatePairStats$selected(this$){
return this$.selected();
});
/**
 * Property.
 * 
 *   The non-standard, Firefox-specific `rtc.RTCIceCandidatePairStats`
 *   selected indicates whether or not the candidate pair described
 *   the object is the one currently being used to communicate with
 *   remote peer.
 * 
 *   `isSelected = icpStats.selected;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidatePairStats/selected`
 */
rtc.RTCIceCandidatePairStats.set_selected_BANG_ = (function rtc$RTCIceCandidatePairStats$set_selected_BANG_(this$,val){
return (this$["selected"] = val);
});

//# sourceMappingURL=RTCIceCandidatePairStats.js.map?rel=1565798812385
