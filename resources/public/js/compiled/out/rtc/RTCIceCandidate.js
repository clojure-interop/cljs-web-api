// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCIceCandidate');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The RTCIceCandidate() constructor creates and returns a new `rtc.RTCIceCandidate` object, which can be configured to represent a single ICE candidate.
 * 
 *   candidateInfo Optional
 *   An optional `rtc.RTCIceCandidateInit` object providing information about the candidate; if this is provided, the candidate is initialized configured to represent the described candidate.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/RTCIceCandidate`
 */
rtc.RTCIceCandidate.constructor$ = RTCIceCandidate;
/**
 * Method.
 * 
 *   The `rtc.RTCIceCandidate` method toJSON() converts the RTCIceCandidate
 *   which it's called into JSON in the form of an `rtc.RTCIceCandidateInit`
 * 
 *   `json = rtcIceCandidate.toJSON();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/toJSON`
 */
rtc.RTCIceCandidate.rtc_ice_candidate = (function rtc$RTCIceCandidate$rtc_ice_candidate(this$){
return this$.RTCIceCandidate();
});
/**
 * Property.
 * 
 *   The read-only property candidate on the `rtc.RTCIceCandidate`
 *   returns a `dom.DOMString` describing the candidate in detail.
 * 
 *   `var candidate = RTCIceCandidate.candidate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/candidate`
 */
rtc.RTCIceCandidate.candidate = (function rtc$RTCIceCandidate$candidate(this$){
return this$.candidate();
});
/**
 * Property.
 * 
 *   The read-only component property on the `rtc.RTCIceCandidate`
 *   is a string which indicates whether the candidate is an RTP or
 *   RTCP candidate.
 * 
 *   `var component = RTCIceCandidate.component;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/component`
 */
rtc.RTCIceCandidate.component = (function rtc$RTCIceCandidate$component(this$){
return this$.component();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidate` interface's read-only foundation property
 *   a string which uniquely identifies the candidate across multiple
 * 
 *   `var foundation = RTCIceCandidate.foundation;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/foundation`
 */
rtc.RTCIceCandidate.foundation = (function rtc$RTCIceCandidate$foundation(this$){
return this$.foundation();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidate` interface's read-only ip property is
 *   string providing the address of the device which is the source
 *   the candidate.
 * 
 *   `var address = RTCIceCandidate.ip;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/ip`
 */
rtc.RTCIceCandidate.ip = (function rtc$RTCIceCandidate$ip(this$){
return this$.ip();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidate` interface's read-only port property
 *   the port number on the device at the address given by `web.ip`
 *   which the candidate's peer can be reached.
 * 
 *   `var port = RTCIceCandidate.port;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/port`
 */
rtc.RTCIceCandidate.port = (function rtc$RTCIceCandidate$port(this$){
return this$.port();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidate` interface's read-only priority property
 *   the candidate's priority according to the remote peer; the higher
 *   value is, the better the remote peer considers the candidate
 *   be.
 * 
 *   `var priority = RTCIceCandidate.priority;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/priority`
 */
rtc.RTCIceCandidate.priority = (function rtc$RTCIceCandidate$priority(this$){
return this$.priority();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidate` interface's read-only protocol property
 *   a string which indicates whether the candidate uses UDP or TCP
 *   its transport protocol.
 * 
 *   `var protocol = RTCIceCandidate.protocol;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/protocol`
 */
rtc.RTCIceCandidate.protocol = (function rtc$RTCIceCandidate$protocol(this$){
return this$.protocol();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidate` interface's read-only relatedAddress
 *   is a string indicating the related address of a relay or reflexive
 * 
 *   `var relAddress = RTCIceCandidate.relatedAddress;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/relatedAddress`
 */
rtc.RTCIceCandidate.related_address = (function rtc$RTCIceCandidate$related_address(this$){
return this$.relatedAddress();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidate` interface's read-only relatedPort property
 *   the port number of reflexive or relay candidates.
 * 
 *   `var relPort = RTCIceCandidate.relatedPort;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/relatedPort`
 */
rtc.RTCIceCandidate.related_port = (function rtc$RTCIceCandidate$related_port(this$){
return this$.relatedPort();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidate` interface's read-only relatedPort property
 *   the port number of reflexive or relay candidates.
 * 
 *   `var relPort = RTCIceCandidate.relatedPort;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/relatedPort`
 */
rtc.RTCIceCandidate.set_related_port_BANG_ = (function rtc$RTCIceCandidate$set_related_port_BANG_(this$,val){
return (this$["relatedPort"] = val);
});
/**
 * Property.
 * 
 *   The read-only property sdpMid on the `rtc.RTCIceCandidate` interface
 *   a `dom.DOMString` specifying the media stream identification
 *   of the media component with which the candidate is associated.
 * 
 *   `var sdpMid = RTCIceCandidate.sdpMid;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/sdpMid`
 */
rtc.RTCIceCandidate.sdp_mid = (function rtc$RTCIceCandidate$sdp_mid(this$){
return this$.sdpMid();
});
/**
 * Property.
 * 
 *   The read-only sdpMLineIndex property on the `rtc.RTCIceCandidate`
 *   is a zero-based index of the m-line describing the media associated
 *   the candidate.
 * 
 *   `var sdpMLineIndex = RTCIceCandidate.sdpMLineIndex;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/sdpMLineIndex`
 */
rtc.RTCIceCandidate.sdp_m_line_index = (function rtc$RTCIceCandidate$sdp_m_line_index(this$){
return this$.sdpMLineIndex();
});
/**
 * Property.
 * 
 *   The read-only usernameFragment property on the `rtc.RTCIceCandidate`
 *   is a string indicating the username fragment (\"ufrag\") that
 *   identifies a single ICE interaction session.
 * 
 *   `var ufrag = RTCIceCandidate.usernameFragment;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/usernameFragment`
 */
rtc.RTCIceCandidate.username_fragment = (function rtc$RTCIceCandidate$username_fragment(this$){
return this$.usernameFragment();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidate` interface's read-only tcpType property
 *   included on TCP candidates to provide additional details about
 *   candidate type.
 * 
 *   `var tcpType = RTCIceCandidate.tcpType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/tcpType`
 */
rtc.RTCIceCandidate.tcp_type = (function rtc$RTCIceCandidate$tcp_type(this$){
return this$.tcpType();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceCandidate` interface's read-only type specifies
 *   type of candidate the object represents.
 * 
 *   `var type = RTCIceCandidate.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceCandidate/type`
 */
rtc.RTCIceCandidate.type = (function rtc$RTCIceCandidate$type(this$){
return this$.type();
});

//# sourceMappingURL=RTCIceCandidate.js.map?rel=1565798801164
