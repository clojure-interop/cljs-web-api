// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCPeerConnection.ev');
goog.require('cljs.core');
/**
 * Event.
 * 
 *   The obsolete addstream event is sent to an `rtc.RTCPeerConnection`
 *   new media, in the form of a `media.MediaStream` object, has been
 *   to it.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addstream_event`
 */
rtc.RTCPeerConnection.ev.addstream = "addstream";
/**
 * Event.
 * 
 *   An identityresult event is sent to an `rtc.RTCPeerConnection`
 *   `web.onidentityresult` event handler to inform it that an assertion
 *   been generated by an associated identity provider (IdP) during
 *   process of creating an SDP offer or answer.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/identityresult_event`
 */
rtc.RTCPeerConnection.ev.identityresult = "identityresult";
/**
 * Event.
 * 
 *   A negotiationneeded event is sent to the `rtc.RTCPeerConnection`
 *   negotiation of the connection through the signaling channel is
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/negotiationneeded_event`
 */
rtc.RTCPeerConnection.ev.negotiationneeded = "negotiationneeded";
/**
 * Event.
 * 
 *   The obsolete removestream event was sent to an `rtc.RTCPeerConnection`
 *   inform it that a `media.MediaStream` had been removed from the
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/removestream_event`
 */
rtc.RTCPeerConnection.ev.removestream = "removestream";
/**
 * Event.
 * 
 *   An signalingstatechange event is sent to an `rtc.RTCPeerConnection`
 *   notify it that its signaling state, as indicated by the `web.signalingState`
 *   has changed.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/signalingstatechange_event`
 */
rtc.RTCPeerConnection.ev.signalingstatechange = "signalingstatechange";

//# sourceMappingURL=ev.js.map?rel=1565798836669
