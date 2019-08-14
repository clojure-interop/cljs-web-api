// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.DelayNode');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The DelayNode() constructor of the Web Audio API creates a new `web.DelayNode` object with a delay-line; an AudioNode audio-processing module that causes a delay between the arrival of an input data, and its propagation to the output.
 * 
 *   Inherits parameters from the `audio.AudioNodeOptions` dictionary.
 * 
 * 
 *   context
 *   A reference to an `audio.AudioContext` or `web.OfflineAudioContext`.
 *   options Optional
 *   An object specifying the delay node options. Can contain the following members:
 * 
 *   delayTime: The initial delay time for the node, in seconds. The default is 0.
 *   maxDelayTime: The maximum delay time for the node, in seconds. Defaults to 1.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DelayNode/DelayNode`
 */
web.DelayNode.constructor$ = DelayNode;
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myDelay = audioCtx.createDelay(5.0);
 *   myDelay.delayTime.value = 3.0;
 * 
 * 
 *   Note: Though the `audio.AudioParam` returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DelayNode/delayTime`
 */
web.DelayNode.delay_time = (function web$DelayNode$delay_time(this$){
return this$.delayTime();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var myDelay = audioCtx.createDelay(5.0);
 *   myDelay.delayTime.value = 3.0;
 * 
 * 
 *   Note: Though the `audio.AudioParam` returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DelayNode/delayTime`
 */
web.DelayNode.set_delay_time_BANG_ = (function web$DelayNode$set_delay_time_BANG_(this$,val){
return (this$["delayTime"] = val);
});

//# sourceMappingURL=DelayNode.js.map?rel=1565798825130
