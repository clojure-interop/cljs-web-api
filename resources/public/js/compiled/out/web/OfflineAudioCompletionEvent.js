// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.OfflineAudioCompletionEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The OfflineAudioCompletionEvent() constructor of the Web Audio API creates a new `web.OfflineAudioCompletionEvent` object instance.
 * 
 *   type Optional
 *   \tA `dom.DOMString` representing the type of object to create.
 *   \tinit Optional
 *   \tOptions are as follows:
 * 
 *   \t\trenderedBuffer: The rendered `audio.AudioBuffer` containing the audio data.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioCompletionEvent/OfflineAudioCompletionEvent`
 */
web.OfflineAudioCompletionEvent.constructor$ = OfflineAudioCompletionEvent;
/**
 * Property.
 * 
 *   The renderedBuffer read-only property of the `web.OfflineAudioCompletionEvent`
 *   is an `audio.AudioBuffer` containing the result of processing
 *   `web.OfflineAudioContext`.
 * 
 *   `var buffer = offlineAudioCompletionEventInstance.renderedBuffer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioCompletionEvent/renderedBuffer`
 */
web.OfflineAudioCompletionEvent.rendered_buffer = (function web$OfflineAudioCompletionEvent$rendered_buffer(this$){
return this$.renderedBuffer();
});
/**
 * Property.
 * 
 *   The renderedBuffer read-only property of the `web.OfflineAudioCompletionEvent`
 *   is an `audio.AudioBuffer` containing the result of processing
 *   `web.OfflineAudioContext`.
 * 
 *   `var buffer = offlineAudioCompletionEventInstance.renderedBuffer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioCompletionEvent/renderedBuffer`
 */
web.OfflineAudioCompletionEvent.set_rendered_buffer_BANG_ = (function web$OfflineAudioCompletionEvent$set_rendered_buffer_BANG_(this$,val){
return (this$["renderedBuffer"] = val);
});

//# sourceMappingURL=OfflineAudioCompletionEvent.js.map?rel=1565798851227
