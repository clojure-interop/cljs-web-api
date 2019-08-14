// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.IIRFilterNode');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The IIRFilterNode() constructor of the Web Audio API creates a new `web.IIRFilterNode` object which an `audio.AudioNode` processor which implements a general infinite impulse response filter.
 * 
 *   Inherits parameters from the `audio.AudioNodeOptions` dictionary.
 * 
 * 
 *   \tcontext
 *   \tA reference to an `audio.AudioContext`.
 *   \toptions
 *   \tOptions are as follows:
 * 
 *   \t\tfeedforward: A sequence of feedforward coefficients.
 *   \t\tfeedback: A sequence of feedback coefficients.
 * 
 * 
 * 
 * 
 *   Unlike other nodes in the Web Audio API, the options passed into the IIR filter upon creation are not optional. The filter needs these values to work and with the vast range of filters available, there is no default.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode/IIRFilterNode`
 */
web.IIRFilterNode.constructor$ = IIRFilterNode;
/**
 * Method.
 * 
 *   `web.undefined`
 * 
 *   `IIRFilterNode.getFrequencyResponse(frequencyArray, magResponseOutput, phaseResponseOutput);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/IIRFilterNode/getFrequencyResponse`
 */
web.IIRFilterNode.get_frequency_response = (function web$IIRFilterNode$get_frequency_response(this$,frequency_array,mag_response_output,phase_response_output){
return this$.getFrequencyResponse(frequency_array,mag_response_output,phase_response_output);
});

//# sourceMappingURL=IIRFilterNode.js.map?rel=1565798856973
