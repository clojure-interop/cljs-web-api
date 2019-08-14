// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCRtpSender');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The getParameters() method of the `rtc.RTCRtpSender` interface
 *   an `rtc.RTCRtpSendParameters` object describing the current configuration
 *   the encoding and transmission of media on the `rtc.RTCRtpSender.track`
 * 
 *   `var rtpSendParameters = rtpSender.getParameters()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/getParameters`
 */
rtc.RTCRtpSender.get_parameters = (function rtc$RTCRtpSender$get_parameters(this$){
return this$.getParameters();
});
/**
 * Method.
 * 
 *   The `rtc.RTCRtpSender` method getStats() asynchronously requests
 *   `rtc.RTCStatsReport` object which provides statistics about outgoing
 *   on the `rtc.RTCPeerConnection` which owns the sender, returning
 *   `web.Promise` which is fulfilled when the results are available.
 * 
 *   `var promise = RTCRtpSender.getStats();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/getStats`
 */
rtc.RTCRtpSender.get_stats = (function rtc$RTCRtpSender$get_stats(this$){
return this$.getStats();
});
/**
 * Method.
 * 
 *   The `rtc.RTCRtpSender` method replaceTrack() replaces the track
 *   being used as the sender's source with a new `media.MediaStreamTrack`.
 * 
 *   `trackReplacedPromise = sender.replaceTrack(newTrack);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/replaceTrack`
 */
rtc.RTCRtpSender.replace_track = (function rtc$RTCRtpSender$replace_track(this$,new_track){
return this$.replaceTrack(new_track);
});
/**
 * Method.
 * 
 *   The setParameters() method of the `rtc.RTCRtpSender` interface
 *   changes the configuration of sender's `web.track`, which is the
 *   for which the RTCRtpSender is responsible.
 * 
 *   `var promise = rtcRtpSender.setParameters(parameters)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/setParameters`
 */
rtc.RTCRtpSender.set_parameters = (function rtc$RTCRtpSender$set_parameters(this$,parameters){
return this$.setParameters(parameters);
});
/**
 * Property.
 * 
 *   The read-only dtmf property on the `rtc.RTCRtpSender` interface
 *   a `rtc.RTCDTMFSender` object which can be used to send DTMF tones
 *   the `rtc.RTCPeerConnection` . See Using DTMF for details on how
 *   make use of the returned RTCDTMFSender object.
 * 
 *   `var dtmfSender = RTCRtpSender.dtmf;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/dtmf`
 */
rtc.RTCRtpSender.dtmf = (function rtc$RTCRtpSender$dtmf(this$){
return this$.dtmf();
});
/**
 * Property.
 * 
 *   The track read-only property of the `rtc.RTCRtpSender` interface
 *   the `media.MediaStreamTrack` which is being handled by the RTCRtpSender.
 *   track is null, the RTCRtpSender doesn't transmit anything.
 * 
 *   `var mediaStreamTrack = RTCRtpSender.track`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/track`
 */
rtc.RTCRtpSender.track = (function rtc$RTCRtpSender$track(this$){
return this$.track();
});
/**
 * Property.
 * 
 *   The track read-only property of the `rtc.RTCRtpSender` interface
 *   the `media.MediaStreamTrack` which is being handled by the RTCRtpSender.
 *   track is null, the RTCRtpSender doesn't transmit anything.
 * 
 *   `var mediaStreamTrack = RTCRtpSender.track`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpSender/track`
 */
rtc.RTCRtpSender.set_track_BANG_ = (function rtc$RTCRtpSender$set_track_BANG_(this$,val){
return (this$["track"] = val);
});

//# sourceMappingURL=RTCRtpSender.js.map?rel=1565798814389
