// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCRtpReceiver');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The getContributingSources() method of the `rtc.RTCRtpReceiver`
 *   returns an array of `rtc.RTCRtpContributingSource` instances,
 *   corresponding to one CSRC (contributing source) identifier received
 *   the current RTCRtpReceiver in the last ten seconds.
 * 
 *   `var rtcRtpContributingSources = rtcRtpReceiver.getContributingSources()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/getContributingSources`
 */
rtc.RTCRtpReceiver.get_contributing_sources = (function rtc$RTCRtpReceiver$get_contributing_sources(this$){
return this$.getContributingSources();
});
/**
 * Method.
 * 
 *   The `rtc.RTCRtpReceiver` method getStats() asynchronously requests
 *   `rtc.RTCStatsReport` object which provides statistics about incoming
 *   on the owning `rtc.RTCPeerConnection`, returning a `web.Promise`
 *   fulfillment handler will be called once the results are available.
 * 
 *   `var promise = RTCRtpReceiver.getStats();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/getStats`
 */
rtc.RTCRtpReceiver.get_stats = (function rtc$RTCRtpReceiver$get_stats(this$){
return this$.getStats();
});
/**
 * Method.
 * 
 *   The getSynchronizationSources() method of the `rtc.RTCRtpReceiver`
 *   returns an array of `rtc.RTCRtpContributingSource` instances,
 *   corresponding to one SSRC (synchronization source) identifier
 *   by the current RTCRtpReceiver in the last ten seconds.
 * 
 *   `var rtcRtpContributingSources = rtcRtpReceiver.getContributingSources()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/getSynchronizationSources`
 */
rtc.RTCRtpReceiver.get_synchronization_sources = (function rtc$RTCRtpReceiver$get_synchronization_sources(this$){
return this$.getSynchronizationSources();
});
/**
 * Property.
 * 
 *   The track read-only property of the `rtc.RTCRtpReceiver` interface
 *   the `media.MediaStreamTrack` associated with the current `rtc.RTCRtpReceiver`
 * 
 *   `var mediaStreamTrack = rtcRtpReceiver.track`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/track`
 */
rtc.RTCRtpReceiver.track = (function rtc$RTCRtpReceiver$track(this$){
return this$.track();
});
/**
 * Property.
 * 
 *   The track read-only property of the `rtc.RTCRtpReceiver` interface
 *   the `media.MediaStreamTrack` associated with the current `rtc.RTCRtpReceiver`
 * 
 *   `var mediaStreamTrack = rtcRtpReceiver.track`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpReceiver/track`
 */
rtc.RTCRtpReceiver.set_track_BANG_ = (function rtc$RTCRtpReceiver$set_track_BANG_(this$,val){
return (this$["track"] = val);
});

//# sourceMappingURL=RTCRtpReceiver.js.map?rel=1565798837632
