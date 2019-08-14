// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.WaveShaperNode');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The WaveShaperNode() constructor of the Web Audio API creates a new `web.WaveShaperNode` object which is an `audio.AudioNode` that represents a non-linear distorter.
 * 
 *   Inherits parameters from the `audio.AudioNodeOptions` dictionary.
 * 
 * 
 *   context
 *   A reference to an `audio.AudioContext`.
 *   options Optional
 *   Options are as follows:
 * 
 *   curve: The shaping curve used for the waveshaping effect. The input signal is nominally within the range [-1;1].
 *   oversample: Specifies what type of oversampling (if any) should be used when applying the shaping curve. Valid values are 'none', '2x', or '4x'. The default is 'none'.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode/WaveShaperNode`
 */
web.WaveShaperNode.constructor$ = WaveShaperNode;
/**
 * Property.
 * 
 *   The curve property of the `web.WaveShaperNode` interface is a
 *   of numbers describing the distortion to apply.
 * 
 *   `var audioCtx = new AudioContext();
 *   var distortion = audioCtx.createWaveShaper();
 *   distortion.curve = myCurveDataArray; // myCurveDataArray is a Float32Array`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode/curve`
 */
web.WaveShaperNode.curve = (function web$WaveShaperNode$curve(this$){
return this$.curve();
});
/**
 * Property.
 * 
 *   The curve property of the `web.WaveShaperNode` interface is a
 *   of numbers describing the distortion to apply.
 * 
 *   `var audioCtx = new AudioContext();
 *   var distortion = audioCtx.createWaveShaper();
 *   distortion.curve = myCurveDataArray; // myCurveDataArray is a Float32Array`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode/curve`
 */
web.WaveShaperNode.set_curve_BANG_ = (function web$WaveShaperNode$set_curve_BANG_(this$,val){
return (this$["curve"] = val);
});
/**
 * Property.
 * 
 *   The oversample property of the `web.WaveShaperNode` interface
 *   an enumerated value indicating if oversampling must be used.
 *   is a technique for creating more samples (up-sampling) before
 *   a distortion effect to the audio signal.
 * 
 *   `distortion.oversample = enumeratedValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode/oversample`
 */
web.WaveShaperNode.oversample = (function web$WaveShaperNode$oversample(this$){
return this$.oversample();
});
/**
 * Property.
 * 
 *   The oversample property of the `web.WaveShaperNode` interface
 *   an enumerated value indicating if oversampling must be used.
 *   is a technique for creating more samples (up-sampling) before
 *   a distortion effect to the audio signal.
 * 
 *   `distortion.oversample = enumeratedValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WaveShaperNode/oversample`
 */
web.WaveShaperNode.set_oversample_BANG_ = (function web$WaveShaperNode$set_oversample_BANG_(this$,val){
return (this$["oversample"] = val);
});

//# sourceMappingURL=WaveShaperNode.js.map?rel=1565798814188
