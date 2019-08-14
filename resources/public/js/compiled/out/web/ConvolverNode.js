// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ConvolverNode');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ConvolverNode() constructor of the Web Audio API creates a new `web.ConvolverNode` object instance.
 * 
 *   Inherits parameters from the `audio.AudioNodeOptions` dictionary.
 * 
 * 
 *   context
 *   A reference to an `audio.AudioContext`.
 *   options Optional
 *   Options are as follows:
 * 
 *   audioBuffer: A mono, stereo, or 4-channel `audio.AudioBuffer` containing the (possibly multichannel) impulse response used by the ConvolverNode to create the reverb effect.
 *   disableNormalization: A `web.Boolean` controlling whether the impulse response from the buffer will be scaled by an equal-power normalization, or not. The default is 'false'.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/ConvolverNode`
 */
web.ConvolverNode.constructor$ = ConvolverNode;
/**
 * Property.
 * 
 *   An `audio.AudioBuffer`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var convolver = audioCtx.createConvolver();
 *   convolver.buffer = myAudioBuffer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/buffer`
 */
web.ConvolverNode.buffer = (function web$ConvolverNode$buffer(this$){
return this$.buffer();
});
/**
 * Property.
 * 
 *   An `audio.AudioBuffer`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var convolver = audioCtx.createConvolver();
 *   convolver.buffer = myAudioBuffer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/buffer`
 */
web.ConvolverNode.set_buffer_BANG_ = (function web$ConvolverNode$set_buffer_BANG_(this$,val){
return (this$["buffer"] = val);
});
/**
 * Property.
 * 
 *   The normalize property of the `web.ConvolverNode` interface is
 *   boolean that controls whether the impulse response from the buffer
 *   be scaled by an equal-power normalization when the buffer attribute
 *   set, or not.
 * 
 *   `var audioCtx = new AudioContext();
 *   var convolver = audioCtx.createConvolver();
 *   convolver.normalize = false;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/normalize`
 */
web.ConvolverNode.normalize = (function web$ConvolverNode$normalize(this$){
return this$.normalize();
});
/**
 * Property.
 * 
 *   The normalize property of the `web.ConvolverNode` interface is
 *   boolean that controls whether the impulse response from the buffer
 *   be scaled by an equal-power normalization when the buffer attribute
 *   set, or not.
 * 
 *   `var audioCtx = new AudioContext();
 *   var convolver = audioCtx.createConvolver();
 *   convolver.normalize = false;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/normalize`
 */
web.ConvolverNode.set_normalize_BANG_ = (function web$ConvolverNode$set_normalize_BANG_(this$,val){
return (this$["normalize"] = val);
});

//# sourceMappingURL=ConvolverNode.js.map?rel=1565798840633
