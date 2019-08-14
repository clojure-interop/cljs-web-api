// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCIceCandidateStats');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The address property of the `rtc.RTCIceCandidateStats` dictionary
 *   the address of the ICE candidate. While it's preferred that the
 *   be specified as an IPv4 or IPv6 numeric address, a fully-qualified
 *   name can be used as well.
 * 
 *   `candidateAddress = rtcIceCandidateStats.address;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/address`
 */
rtc.RTCIceCandidateStats.address = (function rtc$RTCIceCandidateStats$address(this$){
return this$.address();
});
/**
 * Property.
 * 
 *   The address property of the `rtc.RTCIceCandidateStats` dictionary
 *   the address of the ICE candidate. While it's preferred that the
 *   be specified as an IPv4 or IPv6 numeric address, a fully-qualified
 *   name can be used as well.
 * 
 *   `candidateAddress = rtcIceCandidateStats.address;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/address`
 */
rtc.RTCIceCandidateStats.set_address_BANG_ = (function rtc$RTCIceCandidateStats$set_address_BANG_(this$,val){
return (this$["address"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's deleted property
 *   whether or not the candidate has been deleted or released.
 * 
 *   `isDeleted = rtcIceCandidateStats.deleted;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/deleted`
 */
rtc.RTCIceCandidateStats.deleted = (function rtc$RTCIceCandidateStats$deleted(this$){
return this$.deleted();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's deleted property
 *   whether or not the candidate has been deleted or released.
 * 
 *   `isDeleted = rtcIceCandidateStats.deleted;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/deleted`
 */
rtc.RTCIceCandidateStats.set_deleted_BANG_ = (function rtc$RTCIceCandidateStats$set_deleted_BANG_(this$,val){
return (this$["deleted"] = val);
});
/**
 * Property.
 * 
 *   The non-standard Mozilla extension to the `rtc.RTCIceCandidateStats`
 *   mozLocalTransport, has been supplanted by the standard `web.protocol`
 *   `web.relayProtocol` properties.
 * 
 *   `Instead of using mozLocalTransport, you should use code like this:
 * 
 * 
 * 
 *   localTransport = rtcIceCandidateStats.relayProtocol || rtcIceCandidateStats.protocol;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/mozLocalTransport`
 */
rtc.RTCIceCandidateStats.moz_local_transport = (function rtc$RTCIceCandidateStats$moz_local_transport(this$){
return this$.mozLocalTransport();
});
/**
 * Property.
 * 
 *   The non-standard Mozilla extension to the `rtc.RTCIceCandidateStats`
 *   mozLocalTransport, has been supplanted by the standard `web.protocol`
 *   `web.relayProtocol` properties.
 * 
 *   `Instead of using mozLocalTransport, you should use code like this:
 * 
 * 
 * 
 *   localTransport = rtcIceCandidateStats.relayProtocol || rtcIceCandidateStats.protocol;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/mozLocalTransport`
 */
rtc.RTCIceCandidateStats.set_moz_local_transport_BANG_ = (function rtc$RTCIceCandidateStats$set_moz_local_transport_BANG_(this$,val){
return (this$["mozLocalTransport"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's networkType property
 *   the type of network used by a local candidate to communicate
 *   a remote peer.
 * 
 *   `networkType = rtcIceCandidateStats.networkType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/networkType`
 */
rtc.RTCIceCandidateStats.network_type = (function rtc$RTCIceCandidateStats$network_type(this$){
return this$.networkType();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's networkType property
 *   the type of network used by a local candidate to communicate
 *   a remote peer.
 * 
 *   `networkType = rtcIceCandidateStats.networkType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/networkType`
 */
rtc.RTCIceCandidateStats.set_network_type_BANG_ = (function rtc$RTCIceCandidateStats$set_network_type_BANG_(this$,val){
return (this$["networkType"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's port property specifies
 *   network port used by the candidate.
 * 
 *   `candidatePort = rtcIceCandidateStats.port;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/port`
 */
rtc.RTCIceCandidateStats.port = (function rtc$RTCIceCandidateStats$port(this$){
return this$.port();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's port property specifies
 *   network port used by the candidate.
 * 
 *   `candidatePort = rtcIceCandidateStats.port;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/port`
 */
rtc.RTCIceCandidateStats.set_port_BANG_ = (function rtc$RTCIceCandidateStats$set_port_BANG_(this$,val){
return (this$["port"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's protocol property
 *   the protocol the specified candidate would use for communication
 *   the remote peer.
 * 
 *   `protocol = rtcIceCandidateStats.protocol;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/protocol`
 */
rtc.RTCIceCandidateStats.protocol = (function rtc$RTCIceCandidateStats$protocol(this$){
return this$.protocol();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's protocol property
 *   the protocol the specified candidate would use for communication
 *   the remote peer.
 * 
 *   `protocol = rtcIceCandidateStats.protocol;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/protocol`
 */
rtc.RTCIceCandidateStats.set_protocol_BANG_ = (function rtc$RTCIceCandidateStats$set_protocol_BANG_(this$,val){
return (this$["protocol"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's relayProtocol property
 *   the protocol being used by a local ICE candidate to communicate
 *   the TURN server.
 * 
 *   `relayProtocol = rtcIceCandidateStats.relayProtocol;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/relayProtocol`
 */
rtc.RTCIceCandidateStats.relay_protocol = (function rtc$RTCIceCandidateStats$relay_protocol(this$){
return this$.relayProtocol();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's relayProtocol property
 *   the protocol being used by a local ICE candidate to communicate
 *   the TURN server.
 * 
 *   `relayProtocol = rtcIceCandidateStats.relayProtocol;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/relayProtocol`
 */
rtc.RTCIceCandidateStats.set_relay_protocol_BANG_ = (function rtc$RTCIceCandidateStats$set_relay_protocol_BANG_(this$,val){
return (this$["relayProtocol"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's transportId property
 *   a string that uniquely identifies the transport that produced
 *   `rtc.RTCTransportStats` from which information about this candidate
 *   taken.
 * 
 *   `transportID = rtcIceCandidateStats.transportId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/transportId`
 */
rtc.RTCIceCandidateStats.transport_id = (function rtc$RTCIceCandidateStats$transport_id(this$){
return this$.transportId();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's transportId property
 *   a string that uniquely identifies the transport that produced
 *   `rtc.RTCTransportStats` from which information about this candidate
 *   taken.
 * 
 *   `transportID = rtcIceCandidateStats.transportId;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/transportId`
 */
rtc.RTCIceCandidateStats.set_transport_id_BANG_ = (function rtc$RTCIceCandidateStats$set_transport_id_BANG_(this$,val){
return (this$["transportId"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's url property specifies
 *   URL of the ICE server from which the described candidate was
 *   This property is only available for local candidates.
 * 
 *   `url = rtcIceCandidateStats.url;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/url`
 */
rtc.RTCIceCandidateStats.url = (function rtc$RTCIceCandidateStats$url(this$){
return this$.url();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's url property specifies
 *   URL of the ICE server from which the described candidate was
 *   This property is only available for local candidates.
 * 
 *   `url = rtcIceCandidateStats.url;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/url`
 */
rtc.RTCIceCandidateStats.set_url_BANG_ = (function rtc$RTCIceCandidateStats$set_url_BANG_(this$,val){
return (this$["url"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` interface's candidateType property
 *   a string which indicates the type of ICE candidate the object
 * 
 *   `candidateType = rtcIceCandidateStats.candidateType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/candidateType`
 */
rtc.RTCIceCandidateStats.candidate_type = (function rtc$RTCIceCandidateStats$candidate_type(this$){
return this$.candidateType();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` interface's candidateType property
 *   a string which indicates the type of ICE candidate the object
 * 
 *   `candidateType = rtcIceCandidateStats.candidateType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/candidateType`
 */
rtc.RTCIceCandidateStats.set_candidate_type_BANG_ = (function rtc$RTCIceCandidateStats$set_candidate_type_BANG_(this$,val){
return (this$["candidateType"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's priority property
 *   a positive integer value indicating the priority (or desirability)
 *   the described candidate.
 * 
 *   `priority = rtcIceCandidateStats.priority;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/priority`
 */
rtc.RTCIceCandidateStats.priority = (function rtc$RTCIceCandidateStats$priority(this$){
return this$.priority();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidateStats` dictionary's priority property
 *   a positive integer value indicating the priority (or desirability)
 *   the described candidate.
 * 
 *   `priority = rtcIceCandidateStats.priority;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidateStats/priority`
 */
rtc.RTCIceCandidateStats.set_priority_BANG_ = (function rtc$RTCIceCandidateStats$set_priority_BANG_(this$,val){
return (this$["priority"] = val);
});

//# sourceMappingURL=RTCIceCandidateStats.js.map?rel=1565798811372
