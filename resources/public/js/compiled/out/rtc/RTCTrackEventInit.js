// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCTrackEventInit');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The `rtc.RTCTrackEventInit` dictionary's receiver property specifies
 *   `rtc.RTCRtpReceiver` associated with the event.
 * 
 *   `var trackEventInit = {
 *   receiver: rtpReceiver,
 *   track: mediaStreamTrack,
 *   streams: [videoStream],
 *   transceiver: rtpTransceiver
 *   };
 * 
 *   var rtpReceiver = trackEventInit.receiver;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEventInit/receiver`
 */
rtc.RTCTrackEventInit.receiver = (function rtc$RTCTrackEventInit$receiver(this$){
return this$.receiver();
});
/**
 * Property.
 * 
 *   The `rtc.RTCTrackEventInit` dictionary's receiver property specifies
 *   `rtc.RTCRtpReceiver` associated with the event.
 * 
 *   `var trackEventInit = {
 *   receiver: rtpReceiver,
 *   track: mediaStreamTrack,
 *   streams: [videoStream],
 *   transceiver: rtpTransceiver
 *   };
 * 
 *   var rtpReceiver = trackEventInit.receiver;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEventInit/receiver`
 */
rtc.RTCTrackEventInit.set_receiver_BANG_ = (function rtc$RTCTrackEventInit$set_receiver_BANG_(this$,val){
return (this$["receiver"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCTrackEventInit` dictionary's optional streams property
 *   an array containing a `media.MediaStream` object for each of
 *   streams associated with the event's track.
 * 
 *   `var trackEventInit = {
 *   receiver: rtpReceiver,
 *   track: mediaStreamTrack,
 *   streams: [videoStream],
 *   transceiver: rtpTransceiver
 *   };
 * 
 *   var streamList = trackEventInit.streams;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEventInit/streams`
 */
rtc.RTCTrackEventInit.streams = (function rtc$RTCTrackEventInit$streams(this$){
return this$.streams();
});
/**
 * Property.
 * 
 *   The `rtc.RTCTrackEventInit` dictionary's optional streams property
 *   an array containing a `media.MediaStream` object for each of
 *   streams associated with the event's track.
 * 
 *   `var trackEventInit = {
 *   receiver: rtpReceiver,
 *   track: mediaStreamTrack,
 *   streams: [videoStream],
 *   transceiver: rtpTransceiver
 *   };
 * 
 *   var streamList = trackEventInit.streams;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEventInit/streams`
 */
rtc.RTCTrackEventInit.set_streams_BANG_ = (function rtc$RTCTrackEventInit$set_streams_BANG_(this$,val){
return (this$["streams"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCTrackEventInit` dictionary's track property specifies
 *   `media.MediaStreamTrack` associated with the track event.
 * 
 *   `var trackEventInit = {
 *   receiver: rtpReceiver,
 *   track: mediaStreamTrack,
 *   streams: [videoStream],
 *   transceiver: rtpTransceiver
 *   };
 * 
 *   var track = trackEventInit.track;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEventInit/track`
 */
rtc.RTCTrackEventInit.track = (function rtc$RTCTrackEventInit$track(this$){
return this$.track();
});
/**
 * Property.
 * 
 *   The `rtc.RTCTrackEventInit` dictionary's track property specifies
 *   `media.MediaStreamTrack` associated with the track event.
 * 
 *   `var trackEventInit = {
 *   receiver: rtpReceiver,
 *   track: mediaStreamTrack,
 *   streams: [videoStream],
 *   transceiver: rtpTransceiver
 *   };
 * 
 *   var track = trackEventInit.track;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEventInit/track`
 */
rtc.RTCTrackEventInit.set_track_BANG_ = (function rtc$RTCTrackEventInit$set_track_BANG_(this$,val){
return (this$["track"] = val);
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
rtc.RTCTrackEventInit.transceiver = (function rtc$RTCTrackEventInit$transceiver(this$){
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
rtc.RTCTrackEventInit.set_transceiver_BANG_ = (function rtc$RTCTrackEventInit$set_transceiver_BANG_(this$,val){
return (this$["transceiver"] = val);
});

//# sourceMappingURL=RTCTrackEventInit.js.map?rel=1565798855951
