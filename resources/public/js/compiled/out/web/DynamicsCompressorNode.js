// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.DynamicsCompressorNode');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The DynamicsCompressorNode() constructor creates a new `web.DynamicsCompressorNode` object which provides a compression effect, which lowers the volume of the loudest parts of the signal
 * 
 *   context
 *   A reference to an `audio.AudioContext`.
 *   options Optional
 *   Options are as follows:
 * 
 *   attack: The amount of time (in seconds) to reduce the gain by 10dB. Its default value is 0.003. This parameter is k-rate. Its nominal range is [0, 1].
 *   knee: A decibel value representing the range above the threshold where the curve smoothly transitions to the \"ratio\" portion. Its default value is 30. This parameter is k-rate. Its nominal range is [0, 40].
 *   ratio: The amount of dB change in input for a 1 dB change in output. Its default value is 12. This parameter is k-rate. Its nominal range is [1, 20].
 *   release: The amount of time (in seconds) to increase the gain by 10dB. Its default value is 0.250. This parameter is k-rate. Its nominal range is [0, 1].
 *   threshold: The decibel value above which the compression will start taking effect. Its default value is -24. This parameter is k-rate. Its nominal range is [-100, 0].
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/DynamicsCompressorNode`
 */
web.DynamicsCompressorNode.constructor$ = DynamicsCompressorNode;
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var compressor = audioCtx.createDynamicsCompressor();
 *   compressor.attack.value = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/attack`
 */
web.DynamicsCompressorNode.attack = (function web$DynamicsCompressorNode$attack(this$){
return this$.attack();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var compressor = audioCtx.createDynamicsCompressor();
 *   compressor.attack.value = 0;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/attack`
 */
web.DynamicsCompressorNode.set_attack_BANG_ = (function web$DynamicsCompressorNode$set_attack_BANG_(this$,val){
return (this$["attack"] = val);
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var compressor = audioCtx.createDynamicsCompressor();
 *   compressor.knee.value = 40;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/knee`
 */
web.DynamicsCompressorNode.knee = (function web$DynamicsCompressorNode$knee(this$){
return this$.knee();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var compressor = audioCtx.createDynamicsCompressor();
 *   compressor.knee.value = 40;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/knee`
 */
web.DynamicsCompressorNode.set_knee_BANG_ = (function web$DynamicsCompressorNode$set_knee_BANG_(this$,val){
return (this$["knee"] = val);
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var compressor = audioCtx.createDynamicsCompressor();
 *   compressor.ratio.value = 12;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/ratio`
 */
web.DynamicsCompressorNode.ratio = (function web$DynamicsCompressorNode$ratio(this$){
return this$.ratio();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var compressor = audioCtx.createDynamicsCompressor();
 *   compressor.ratio.value = 12;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/ratio`
 */
web.DynamicsCompressorNode.set_ratio_BANG_ = (function web$DynamicsCompressorNode$set_ratio_BANG_(this$,val){
return (this$["ratio"] = val);
});
/**
 * Property.
 * 
 *   The reduction read-only property of the `web.DynamicsCompressorNode`
 *   is a float representing the amount of gain reduction currently
 *   by the compressor to the signal.
 * 
 *   `var myReduction = compressorNodeInstance.reduction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/reduction`
 */
web.DynamicsCompressorNode.reduction = (function web$DynamicsCompressorNode$reduction(this$){
return this$.reduction();
});
/**
 * Property.
 * 
 *   The reduction read-only property of the `web.DynamicsCompressorNode`
 *   is a float representing the amount of gain reduction currently
 *   by the compressor to the signal.
 * 
 *   `var myReduction = compressorNodeInstance.reduction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/reduction`
 */
web.DynamicsCompressorNode.set_reduction_BANG_ = (function web$DynamicsCompressorNode$set_reduction_BANG_(this$,val){
return (this$["reduction"] = val);
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var compressor = audioCtx.createDynamicsCompressor();
 *   compressor.release.value = 0.25;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/release`
 */
web.DynamicsCompressorNode.release = (function web$DynamicsCompressorNode$release(this$){
return this$.release();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var compressor = audioCtx.createDynamicsCompressor();
 *   compressor.release.value = 0.25;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/release`
 */
web.DynamicsCompressorNode.set_release_BANG_ = (function web$DynamicsCompressorNode$set_release_BANG_(this$,val){
return (this$["release"] = val);
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var compressor = audioCtx.createDynamicsCompressor();
 *   compressor.threshold.value = -50;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/threshold`
 */
web.DynamicsCompressorNode.threshold = (function web$DynamicsCompressorNode$threshold(this$){
return this$.threshold();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var compressor = audioCtx.createDynamicsCompressor();
 *   compressor.threshold.value = -50;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DynamicsCompressorNode/threshold`
 */
web.DynamicsCompressorNode.set_threshold_BANG_ = (function web$DynamicsCompressorNode$set_threshold_BANG_(this$,val){
return (this$["threshold"] = val);
});

//# sourceMappingURL=DynamicsCompressorNode.js.map?rel=1565798854565
