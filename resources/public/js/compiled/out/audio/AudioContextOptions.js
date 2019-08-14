// Compiled by ClojureScript 1.9.946 {}
goog.provide('audio.AudioContextOptions');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The `audio.AudioContextOptions` dictionary (used when instantiating
 *   `audio.AudioContext`) may contain a property named latencyHint,
 *   indicates the preferred maximum latency in seconds for the audio
 * 
 *   `audioContextOptions.latencyHint = \"interactive\";
 *   audioContextOptions.latencyHint = 0.2;
 * 
 *   var latencyHint = audioContextOptions.latencyHint;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContextOptions/latencyHint`
 */
audio.AudioContextOptions.latency_hint = (function audio$AudioContextOptions$latency_hint(this$){
return this$.latencyHint();
});
/**
 * Property.
 * 
 *   The `audio.AudioContextOptions` dictionary (used when instantiating
 *   `audio.AudioContext`) may contain a property named latencyHint,
 *   indicates the preferred maximum latency in seconds for the audio
 * 
 *   `audioContextOptions.latencyHint = \"interactive\";
 *   audioContextOptions.latencyHint = 0.2;
 * 
 *   var latencyHint = audioContextOptions.latencyHint;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContextOptions/latencyHint`
 */
audio.AudioContextOptions.set_latency_hint_BANG_ = (function audio$AudioContextOptions$set_latency_hint_BANG_(this$,val){
return (this$["latencyHint"] = val);
});
/**
 * Property.
 * 
 *   The `audio.AudioContextOptions` dictionary (used when instantiating
 *   `audio.AudioContext`) may contain a property named sampleRate,
 *   indicates the sample rate to use for the new context.
 * 
 *   `audioContextOptions.sampleRate = 44100;
 * 
 *   var sampleRate = audioContextOptions.sampleRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContextOptions/sampleRate`
 */
audio.AudioContextOptions.sample_rate = (function audio$AudioContextOptions$sample_rate(this$){
return this$.sampleRate();
});
/**
 * Property.
 * 
 *   The `audio.AudioContextOptions` dictionary (used when instantiating
 *   `audio.AudioContext`) may contain a property named sampleRate,
 *   indicates the sample rate to use for the new context.
 * 
 *   `audioContextOptions.sampleRate = 44100;
 * 
 *   var sampleRate = audioContextOptions.sampleRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContextOptions/sampleRate`
 */
audio.AudioContextOptions.set_sample_rate_BANG_ = (function audio$AudioContextOptions$set_sample_rate_BANG_(this$,val){
return (this$["sampleRate"] = val);
});

//# sourceMappingURL=AudioContextOptions.js.map?rel=1565798842325
