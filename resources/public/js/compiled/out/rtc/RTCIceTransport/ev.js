// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCIceTransport.ev');
goog.require('cljs.core');
/**
 * Event.
 * 
 *   A gatheringstatechange event is sent to an `rtc.RTCIceTransport`
 *   its ICE candidate gathering state changes.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/gatheringstatechange_event`
 */
rtc.RTCIceTransport.ev.gatheringstatechange = "gatheringstatechange";
/**
 * Event.
 * 
 *   A selectedcandidatepairchange event is sent to an `rtc.RTCIceTransport`
 *   the ICE agent selects a new pair of candidates that describe
 *   endpoints of a viable connection.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event`
 */
rtc.RTCIceTransport.ev.selectedcandidatepairchange = "selectedcandidatepairchange";
/**
 * Event.
 * 
 *   A statechange event occurs when the `rtc.RTCIceTransport` changes
 *   The `web.state` can be used to determine how far through the
 *   of examining, verifying, and selecting a valid candidate pair
 *   prior to successfully connecting the two peers for WebRTC communications.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/statechange_event`
 */
rtc.RTCIceTransport.ev.statechange = "statechange";

//# sourceMappingURL=ev.js.map?rel=1565798862417
