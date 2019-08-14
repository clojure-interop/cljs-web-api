// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCOfferAnswerOptions');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The voiceActivityDetection property of the `rtc.RTCOfferAnswerOptions`
 *   is used to specify whether or not to use automatic voice detection
 *   the audio on an `rtc.RTCPeerConnection`. The default value, true,
 *   that voice detection should be used and that if possible, the
 *   agent should automatically disable or mute outgoing audio when
 *   audio source is not sensing a human voice.
 * 
 *   `var options = {
 *   voiceActivityDetection: trueOrFalse
 *   };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOfferAnswerOptions/voiceActivityDetection`
 */
rtc.RTCOfferAnswerOptions.voice_activity_detection = (function rtc$RTCOfferAnswerOptions$voice_activity_detection(this$){
return this$.voiceActivityDetection();
});
/**
 * Property.
 * 
 *   The voiceActivityDetection property of the `rtc.RTCOfferAnswerOptions`
 *   is used to specify whether or not to use automatic voice detection
 *   the audio on an `rtc.RTCPeerConnection`. The default value, true,
 *   that voice detection should be used and that if possible, the
 *   agent should automatically disable or mute outgoing audio when
 *   audio source is not sensing a human voice.
 * 
 *   `var options = {
 *   voiceActivityDetection: trueOrFalse
 *   };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCOfferAnswerOptions/voiceActivityDetection`
 */
rtc.RTCOfferAnswerOptions.set_voice_activity_detection_BANG_ = (function rtc$RTCOfferAnswerOptions$set_voice_activity_detection_BANG_(this$,val){
return (this$["voiceActivityDetection"] = val);
});

//# sourceMappingURL=RTCOfferAnswerOptions.js.map?rel=1565798811708
