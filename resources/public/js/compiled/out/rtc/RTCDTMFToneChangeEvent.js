// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCDTMFToneChangeEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The RTCDTMFToneChangeEvent() constructor creates a new `rtc.RTCDTMFToneChangeEvent`.
 * 
 *   type
 *   A `dom.DOMString` containing the name of the event. This is always \"tonechange\".
 *   options
 *   A dictionary of type RTCDTMFToneChangeEventInit, which may contain one or more of the following fields:
 * 
 *   tone
 *   A `dom.DOMString` containing a single DTMF tone character which has just begun to play, or an empty string (\"\") to indicate that the previous tone has stopped playing. See Tone characters for details on what characters are permitted.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFToneChangeEvent/RTCDTMFToneChangeEvent`
 */
rtc.RTCDTMFToneChangeEvent.constructor$ = RTCDTMFToneChangeEvent;
/**
 * Property.
 * 
 *   The read-only property RTCDTMFToneChangeEvent.tone returns the
 *   character which has just begun to play, or an empty string (\"\").
 *   all queued tones have finished playing (that is, `rtc.RTCDTMFSender.toneBuffer`
 *   empty).
 * 
 *   `var tone = RTCDTMFToneChangeEvent.tone;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFToneChangeEvent/tone`
 */
rtc.RTCDTMFToneChangeEvent.tone = (function rtc$RTCDTMFToneChangeEvent$tone(this$){
return this$.tone();
});
/**
 * Property.
 * 
 *   The read-only property RTCDTMFToneChangeEvent.tone returns the
 *   character which has just begun to play, or an empty string (\"\").
 *   all queued tones have finished playing (that is, `rtc.RTCDTMFSender.toneBuffer`
 *   empty).
 * 
 *   `var tone = RTCDTMFToneChangeEvent.tone;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFToneChangeEvent/tone`
 */
rtc.RTCDTMFToneChangeEvent.set_tone_BANG_ = (function rtc$RTCDTMFToneChangeEvent$set_tone_BANG_(this$,val){
return (this$["tone"] = val);
});

//# sourceMappingURL=RTCDTMFToneChangeEvent.js.map?rel=1565798850888
