// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCPeerConnectionIceEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The RTCPeerConnectionIceEvent() constructor creates a new `rtc.RTCPeerConnectionIceEvent`.
 * 
 *   type
 *   Is a `dom.DOMString` containing the name of the event, like \"icecandidate\".
 *   options
 *   A dictionary of type RTCPeerConnectionInit, which may contain one or more of the following fields:
 * 
 *   \"candidate\" (optional, default is null): A `rtc.RTCIceCandidate` representing the ICE candidate being concerned by the event.  If null, the event indicates the end of candidate gathering.
 *   \"url\" (optional, default is null): The URL of the STUN or TURN server which was used to gather the candidate. If the candidate was not gathered by a STUN or TURN server, this value must be null.
 *   \"bubbles\" (optional, default is false): Inherited from EventInit(), this Boolean option indicates whether or not the event must bubble.
 *   \"cancelable\" (optional, default is false, inherited from EventInit(), this Boolean indicates whether or not the event can be canceled.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnectionIceEvent/RTCPeerConnectionIceEvent`
 */
rtc.RTCPeerConnectionIceEvent.constructor$ = RTCPeerConnectionIceEvent;
/**
 * Property.
 * 
 *   The read-only candidate property of the `rtc.RTCPeerConnectionIceEvent`
 *   returns the `rtc.RTCIceCandidate` associated with the event.
 * 
 *   `var candidate = event.candidate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnectionIceEvent/candidate`
 */
rtc.RTCPeerConnectionIceEvent.candidate = (function rtc$RTCPeerConnectionIceEvent$candidate(this$){
return this$.candidate();
});
/**
 * Property.
 * 
 *   The read-only candidate property of the `rtc.RTCPeerConnectionIceEvent`
 *   returns the `rtc.RTCIceCandidate` associated with the event.
 * 
 *   `var candidate = event.candidate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnectionIceEvent/candidate`
 */
rtc.RTCPeerConnectionIceEvent.set_candidate_BANG_ = (function rtc$RTCPeerConnectionIceEvent$set_candidate_BANG_(this$,val){
return (this$["candidate"] = val);
});

//# sourceMappingURL=RTCPeerConnectionIceEvent.js.map?rel=1565798811889
