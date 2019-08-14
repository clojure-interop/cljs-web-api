// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ScriptProcessorNode');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The following example shows basic usage of a ScriptProcessorNode
 *   take a track loaded via `audio.AudioContext.decodeAudioData()`,
 *   it, adding a bit of white noise to each audio sample of the input
 *   (buffer) and play it through the `audio.AudioDestinationNode`.
 *   each channel and each sample frame, the scriptNode.onaudioprocess
 *   takes the associated audioProcessingEvent and uses it to loop
 *   each channel of the input buffer, and each sample in each channel,
 *   add a small amount of white noise, before setting that result
 *   be the output sample in each case.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode/bufferSize`
 */
web.ScriptProcessorNode.buffer_size = (function web$ScriptProcessorNode$buffer_size(this$){
return this$.bufferSize();
});
/**
 * Property.
 * 
 *   The following example shows basic usage of a ScriptProcessorNode
 *   take a track loaded via `audio.AudioContext.decodeAudioData()`,
 *   it, adding a bit of white noise to each audio sample of the input
 *   (buffer) and play it through the `audio.AudioDestinationNode`.
 *   each channel and each sample frame, the scriptNode.onaudioprocess
 *   takes the associated audioProcessingEvent and uses it to loop
 *   each channel of the input buffer, and each sample in each channel,
 *   add a small amount of white noise, before setting that result
 *   be the output sample in each case.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode/bufferSize`
 */
web.ScriptProcessorNode.set_buffer_size_BANG_ = (function web$ScriptProcessorNode$set_buffer_size_BANG_(this$,val){
return (this$["bufferSize"] = val);
});
/**
 * Property.
 * 
 *   The following example shows basic usage of a ScriptProcessorNode
 *   take a track loaded via `audio.AudioContext.decodeAudioData()`,
 *   it, adding a bit of white noise to each audio sample of the input
 *   (buffer) and play it through the `audio.AudioDestinationNode`.
 *   each channel and each sample frame, the scriptNode.onaudioprocess
 *   takes the associated audioProcessingEvent and uses it to loop
 *   each channel of the input buffer, and each sample in each channel,
 *   add a small amount of white noise, before setting that result
 *   be the output sample in each case.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode/onaudioprocess`
 */
web.ScriptProcessorNode.onaudioprocess = (function web$ScriptProcessorNode$onaudioprocess(this$){
return this$.onaudioprocess();
});
/**
 * Property.
 * 
 *   The following example shows basic usage of a ScriptProcessorNode
 *   take a track loaded via `audio.AudioContext.decodeAudioData()`,
 *   it, adding a bit of white noise to each audio sample of the input
 *   (buffer) and play it through the `audio.AudioDestinationNode`.
 *   each channel and each sample frame, the scriptNode.onaudioprocess
 *   takes the associated audioProcessingEvent and uses it to loop
 *   each channel of the input buffer, and each sample in each channel,
 *   add a small amount of white noise, before setting that result
 *   be the output sample in each case.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode/onaudioprocess`
 */
web.ScriptProcessorNode.set_onaudioprocess_BANG_ = (function web$ScriptProcessorNode$set_onaudioprocess_BANG_(this$,val){
return (this$["onaudioprocess"] = val);
});

//# sourceMappingURL=ScriptProcessorNode.js.map?rel=1565798815518
