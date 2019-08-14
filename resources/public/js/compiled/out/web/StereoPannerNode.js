// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.StereoPannerNode');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The StereoPannerNode() constructor of the Web Audio API creates a new `web.StereoPannerNode` object which is an `audio.AudioNode` that represents a simple stereo panner node that can be used to pan an audio stream left or right.
 * 
 *   Inherits parameters from the `audio.AudioNodeOptions` dictionary.
 * 
 * 
 *   \tcontext
 *   \tA reference to an `audio.AudioContext`.
 *   \toptions Optional
 *   \tOptions are as follows:
 * 
 *   \t\tpan: A floating point number in the range [-1,1] indicating the position of an `audio.AudioNode` in an output image. The value -1 represents full left and 1 represents full right. The default value is 0.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode/StereoPannerNode`
 */
web.StereoPannerNode.constructor$ = StereoPannerNode;
/**
 * Property.
 * 
 *   An a-rate `audio.AudioParam` containing the panning to apply.
 * 
 *   `var audioCtx = new AudioContext();
 *   var panNode = audioCtx.createStereoPanner();
 *   panNode.pan.value = -0.5;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StereoPannerNode/pan`
 */
web.StereoPannerNode.pan = (function web$StereoPannerNode$pan(this$){
return this$.pan();
});

//# sourceMappingURL=StereoPannerNode.js.map?rel=1565798842773
