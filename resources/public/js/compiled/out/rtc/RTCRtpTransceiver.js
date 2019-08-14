// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCRtpTransceiver');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `rtc.RTCRtpTransceiver` method setCodecPreferences() configures
 *   transceiver's codecs given a list of `rtc.RTCRtpCodeCapability`
 *   specifying the new preferences for each codec.
 * 
 *   `rtcRtpTransceiver.setCodecPreferences(codecs)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/setCodecPreferences`
 */
rtc.RTCRtpTransceiver.set_codec_preferences = (function rtc$RTCRtpTransceiver$set_codec_preferences(this$,codecs){
return this$.setCodecPreferences(codecs);
});
/**
 * Method.
 * 
 *   The stop() method in the `rtc.RTCRtpTransceiver` interface permanently
 *   the transceiver by stopping both the associated `rtc.RTCRtpSender`
 *   `rtc.RTCRtpReceiver`.
 * 
 *   `RTCRtpTransceiver.stop()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/stop`
 */
rtc.RTCRtpTransceiver.stop = (function rtc$RTCRtpTransceiver$stop(this$){
return this$.stop();
});
/**
 * Property.
 * 
 *   The read-only `rtc.RTCRtpTransceiver` property currentDirection
 *   a string which indicates the current directionality of the transceiver.
 * 
 *   `var direction = RTCRtpTransceiver.currentDirection`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/currentDirection`
 */
rtc.RTCRtpTransceiver.current_direction = (function rtc$RTCRtpTransceiver$current_direction(this$){
return this$.currentDirection();
});
/**
 * Property.
 * 
 *   The read-only `rtc.RTCRtpTransceiver` property direction is a
 *   which indicates the transceiver's preferred directionality.
 * 
 *   `var direction = RTCRtpTransceiver.direction`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/direction`
 */
rtc.RTCRtpTransceiver.direction = (function rtc$RTCRtpTransceiver$direction(this$){
return this$.direction();
});
/**
 * Property.
 * 
 *   The read-only `rtc.RTCRtpTransceiver` property direction is a
 *   which indicates the transceiver's preferred directionality.
 * 
 *   `var direction = RTCRtpTransceiver.direction`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/direction`
 */
rtc.RTCRtpTransceiver.set_direction_BANG_ = (function rtc$RTCRtpTransceiver$set_direction_BANG_(this$,val){
return (this$["direction"] = val);
});
/**
 * Property.
 * 
 *   The read-only `rtc.RTCRtpTransceiver` interface's mid property
 *   the negotiated media ID (mid) which the local and remote peers
 *   agreed upon to uniquely identify the stream's pairing of sender
 *   receiver.
 * 
 *   `var mediaID = RTCRtpTransceiver.mid;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/mid`
 */
rtc.RTCRtpTransceiver.mid = (function rtc$RTCRtpTransceiver$mid(this$){
return this$.mid();
});
/**
 * Property.
 * 
 *   The read-only receiver property of WebRTC's `rtc.RTCRtpTransceiver`
 *   indicates the `rtc.RTCRtpReceiver` responsible for receiving
 *   decoding incoming media data for the transceiver's stream.
 * 
 *   `var rtpReceiver = RTCRtpTransceiver.receiver;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/receiver`
 */
rtc.RTCRtpTransceiver.receiver = (function rtc$RTCRtpTransceiver$receiver(this$){
return this$.receiver();
});
/**
 * Property.
 * 
 *   The read-only receiver property of WebRTC's `rtc.RTCRtpTransceiver`
 *   indicates the `rtc.RTCRtpReceiver` responsible for receiving
 *   decoding incoming media data for the transceiver's stream.
 * 
 *   `var rtpReceiver = RTCRtpTransceiver.receiver;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/receiver`
 */
rtc.RTCRtpTransceiver.set_receiver_BANG_ = (function rtc$RTCRtpTransceiver$set_receiver_BANG_(this$,val){
return (this$["receiver"] = val);
});
/**
 * Property.
 * 
 *   The read-only sender property of WebRTC's `rtc.RTCRtpTransceiver`
 *   indicates the `rtc.RTCRtpSender` responsible for encoding and
 *   outgoing media data for the transceiver's stream.
 * 
 *   `var rtpSender = RTCRtpTransceiver.sender;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/sender`
 */
rtc.RTCRtpTransceiver.sender = (function rtc$RTCRtpTransceiver$sender(this$){
return this$.sender();
});
/**
 * Property.
 * 
 *   The read-only sender property of WebRTC's `rtc.RTCRtpTransceiver`
 *   indicates the `rtc.RTCRtpSender` responsible for encoding and
 *   outgoing media data for the transceiver's stream.
 * 
 *   `var rtpSender = RTCRtpTransceiver.sender;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/sender`
 */
rtc.RTCRtpTransceiver.set_sender_BANG_ = (function rtc$RTCRtpTransceiver$set_sender_BANG_(this$,val){
return (this$["sender"] = val);
});
/**
 * Property.
 * 
 *   The read-only stopped property on the `rtc.RTCRtpTransceiver`
 *   indicates whether or not the transceiver's associated sender
 *   receiver have both been stopped.
 * 
 *   `var isStopped = RTCRtpTransceiver.stopped;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/stopped`
 */
rtc.RTCRtpTransceiver.stopped = (function rtc$RTCRtpTransceiver$stopped(this$){
return this$.stopped();
});
/**
 * Property.
 * 
 *   The read-only stopped property on the `rtc.RTCRtpTransceiver`
 *   indicates whether or not the transceiver's associated sender
 *   receiver have both been stopped.
 * 
 *   `var isStopped = RTCRtpTransceiver.stopped;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCRtpTransceiver/stopped`
 */
rtc.RTCRtpTransceiver.set_stopped_BANG_ = (function rtc$RTCRtpTransceiver$set_stopped_BANG_(this$,val){
return (this$["stopped"] = val);
});

//# sourceMappingURL=RTCRtpTransceiver.js.map?rel=1565798852511
