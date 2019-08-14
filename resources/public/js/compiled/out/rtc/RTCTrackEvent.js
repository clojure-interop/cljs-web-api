// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCTrackEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The RTCTrackEvent() constructor creates and returns a new `rtc.RTCTrackEvent` object, configured to describe the track which has been added to the `rtc.RTCPeerConnection`.
 * 
 *   eventInfo
 *   An object based on the `rtc.RTCTrackEventInit` dictionary, providing information about the track which has been added to the `rtc.RTCPeerConnection`. This object has the following properties:
 *   `web.receiver`
 *   The `rtc.RTCRtpReceiver` which is being used to receive the track's media.
 *   `web.streams` Optional
 *   An array of `media.MediaStream` objects representing each of the streams that comprise the event's corresponding track.
 *   `web.track`
 *   The `media.MediaStreamTrack` the event is associated with.
 *   `web.transceiver`
 *   The `rtc.RTCRtpTransceiver` associated with the event.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/RTCTrackEvent`
 */
rtc.RTCTrackEvent.constructor$ = RTCTrackEvent;
/**
 * Property.
 * 
 *   The read-only receiver property of the `rtc.RTCTrackEvent` interface
 *   the `rtc.RTCRtpReceiver` which is used to receive data containing
 *   for the `web.track` to which the event refers.
 * 
 *   `var rtpReceiver = trackEvent.receiver;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/receiver`
 */
rtc.RTCTrackEvent.receiver = (function rtc$RTCTrackEvent$receiver(this$){
return this$.receiver();
});
/**
 * Property.
 * 
 *   The WebRTC API interface `rtc.RTCTrackEvent`'s read-only streams
 *   specifies an array of `media.MediaStream` objects, one for each
 *   the streams that comprise the track being added to the `rtc.RTCPeerConnection`.
 * 
 *   `var streams = trackEvent.streams;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/streams`
 */
rtc.RTCTrackEvent.streams = (function rtc$RTCTrackEvent$streams(this$){
return this$.streams();
});
/**
 * Property.
 * 
 *   The WebRTC API interface `rtc.RTCTrackEvent`'s read-only track
 *   specifies the `media.MediaStreamTrack` that has been added to
 *   `rtc.RTCPeerConnection`.
 * 
 *   `var track = trackEvent.track;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/track`
 */
rtc.RTCTrackEvent.track = (function rtc$RTCTrackEvent$track(this$){
return this$.track();
});
/**
 * Property.
 * 
 *   The WebRTC API interface `rtc.RTCTrackEvent`'s read-only transceiver
 *   indicates the `rtc.RTCRtpTransceiver` affiliated with the event's
 * 
 *   `var rtpTransceiver = trackEvent.transceiver;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/transceiver`
 */
rtc.RTCTrackEvent.transceiver = (function rtc$RTCTrackEvent$transceiver(this$){
return this$.transceiver();
});
/**
 * Property.
 * 
 *   The WebRTC API interface `rtc.RTCTrackEvent`'s read-only transceiver
 *   indicates the `rtc.RTCRtpTransceiver` affiliated with the event's
 * 
 *   `var rtpTransceiver = trackEvent.transceiver;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/transceiver`
 */
rtc.RTCTrackEvent.set_transceiver_BANG_ = (function rtc$RTCTrackEvent$set_transceiver_BANG_(this$,val){
return (this$["transceiver"] = val);
});

//# sourceMappingURL=RTCTrackEvent.js.map?rel=1565798858363
