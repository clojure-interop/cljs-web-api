// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.BiquadFilterNode');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The BiquadFilterNode() constructor of the Web Audio API creates a new `web.BiquadFilterNode` object, which represents a simple low-order filter, and is created using the AudioContext.createBiquadFilter() method.
 * 
 *   Inherits parameters from the `audio.AudioNodeOptions` dictionary.
 * 
 * 
 *   context
 *   A reference to an `audio.AudioContext`.
 *   options Optional
 *   Options are as follows:
 * 
 *   type: One of \"lowpass\", \"highpass\", \"bandpass\", \"lowshelf\", \"highshelf\", \"peaking\", \"notch\", \"allpass\". The meaning of the other options depends on the value of this one. The defaults for all are as follows:
 * 
 *   Q: 1
 *   detune: 0
 *   frequency: 350
 *   gain: 0
 * 
 * 
 * 
 * 
 *   lowpass: (Default) Allows frequencies below a cutoff frequency to pass through, and attenuates frequencies above the cutoff. This is a standard second-order resonant lowpass filter with 12dB/octave rolloff.
 * 
 * 
 *   Q: Controls how peaked the response will be at the cutoff frequency. A large value makes the response more peaked. Please note that for this filter type, this value is not a traditional Q, but is a resonance value in decibels.
 *   frequency: The cutoff frequency.
 *   gain: Not used.
 * 
 * 
 * 
 *   highpass: A highpass filter is the opposite of a lowpass filter. Frequencies above the cutoff frequency are passed through, but frequencies below the cutoff are attenuated. It implements a standard second-order resonant highpass filter with 12dB/octave rolloff.
 * 
 * 
 *   Q: Controls how peaked the response will be at the cutoff frequency. A large value makes the response more peaked. Please note that for this filter type, this value is not a traditional Q, but is a resonance value in decibels.
 *   frequency: The cutoff frequency.
 *   gain: Not used.
 * 
 * 
 * 
 *   bandpass: A bandpass filter allows a range of frequencies to pass through and attenuates the frequencies below and above this frequency range. It implements a second-order bandpass filter.
 * 
 * 
 *   Q: Controls the width of the band. The width becomes narrower as the Q value increases.
 *   frequency: The center of the frequency band.
 *   gain: Not used.
 * 
 * 
 * 
 *   lowshelf: The lowshelf filter allows all frequencies through, but adds a boost (or attenuation) to the lower frequencies. It implements a second-order lowshelf filter.
 * 
 * 
 *   Q: Not used.
 *   frequency: The upper limit of the frequences where the boost, or attenuation, is applied.
 *   gain: The boost, in dB, to be applied. If the value is negative, the frequencies are attenuated.
 * 
 * 
 * 
 *   highshelf: The highshelf filter is the opposite of the lowshelf filter and allows all frequencies through, but adds a boost to the higher frequencies. It implements a second-order highshelf filter.
 * 
 * 
 *   Q: Not used.
 *   frequency: The lower limit of the frequences where the boost, or attenuation, is applied.
 *   gain: The boost, in dB, to be applied. If the value is negative, the frequencies are attenuated.
 * 
 * 
 * 
 *   peaking: The peaking filter allows all frequencies through, adding a boost, or attenuation, to a range of frequencies.
 * 
 * 
 *   Q: The width of the band of frequencies that are boosted. A large value implies a narrow width.
 *   frequency: The center frequency of the boost range.
 *   gain: The boost, in dB, to be applied. If the value is negative, the frequencies are attenuated.
 * 
 * 
 * 
 *   notch: The notch filter (also known as a band-stop, or band-rejection filter) is the opposite of a bandpass filter. It allows all frequencies through, except for a set of frequencies.
 * 
 * 
 *   Q: The width of the band of frequencies that are attenuated. A large value implies a narrow width.
 *   frequency: The center frequency of the attenuation range.
 *   gain: Not used.
 * 
 * 
 * 
 *   allpass: An allpass filter allows all frequencies through, but changes the phase relationship between the various frequencies. It implements a second-order allpass filter.
 * 
 * 
 *   Q: The sharpness of the phase transition at the center frequency. A larger value implies a sharper transition and a larger group delay.
 *   frequency: The frequency where the center of the phase transition occurs. Viewed another way, this is the frequency with maximal group delay.
 *   gain: Not used.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/BiquadFilterNode`
 */
web.BiquadFilterNode.constructor$ = BiquadFilterNode;
/**
 * Method.
 * 
 *   `web.undefined`
 * 
 *   `BiquadFilterNode.getFrequencyResponse(frequencyArray, magResponseOutput, phaseResponseOutput);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/getFrequencyResponse`
 */
web.BiquadFilterNode.get_frequency_response = (function web$BiquadFilterNode$get_frequency_response(this$,frequency_array,mag_response_output,phase_response_output){
return this$.getFrequencyResponse(frequency_array,mag_response_output,phase_response_output);
});
/**
 * Property.
 * 
 *   An a-rate `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var biquadFilter = audioCtx.createBiquadFilter();
 *   biquadFilter.detune.value = 100;
 * 
 * 
 *   Note: Though the AudioParam returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/detune`
 */
web.BiquadFilterNode.detune = (function web$BiquadFilterNode$detune(this$){
return this$.detune();
});
/**
 * Property.
 * 
 *   An a-rate `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var biquadFilter = audioCtx.createBiquadFilter();
 *   biquadFilter.detune.value = 100;
 * 
 * 
 *   Note: Though the AudioParam returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/detune`
 */
web.BiquadFilterNode.set_detune_BANG_ = (function web$BiquadFilterNode$set_detune_BANG_(this$,val){
return (this$["detune"] = val);
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var biquadFilter = audioCtx.createBiquadFilter();
 *   biquadFilter.frequency.value = 3000;
 * 
 * 
 *   Note: Though the AudioParam returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/frequency`
 */
web.BiquadFilterNode.frequency = (function web$BiquadFilterNode$frequency(this$){
return this$.frequency();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var biquadFilter = audioCtx.createBiquadFilter();
 *   biquadFilter.frequency.value = 3000;
 * 
 * 
 *   Note: Though the AudioParam returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/frequency`
 */
web.BiquadFilterNode.set_frequency_BANG_ = (function web$BiquadFilterNode$set_frequency_BANG_(this$,val){
return (this$["frequency"] = val);
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var biquadFilter = audioCtx.createBiquadFilter();
 *   biquadfilter.gain.value = 25;
 * 
 * 
 *   Note: Though the AudioParam returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/gain`
 */
web.BiquadFilterNode.gain = (function web$BiquadFilterNode$gain(this$){
return this$.gain();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var biquadFilter = audioCtx.createBiquadFilter();
 *   biquadfilter.gain.value = 25;
 * 
 * 
 *   Note: Though the AudioParam returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/gain`
 */
web.BiquadFilterNode.set_gain_BANG_ = (function web$BiquadFilterNode$set_gain_BANG_(this$,val){
return (this$["gain"] = val);
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var biquadFilter = audioCtx.createBiquadFilter();
 *   biquadfilter.Q.value = 100;
 * 
 * 
 *   Note: Though the AudioParam returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/Q`
 */
web.BiquadFilterNode.q = (function web$BiquadFilterNode$q(this$){
return this$.Q();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var biquadFilter = audioCtx.createBiquadFilter();
 *   biquadfilter.Q.value = 100;
 * 
 * 
 *   Note: Though the AudioParam returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/Q`
 */
web.BiquadFilterNode.set_q_BANG_ = (function web$BiquadFilterNode$set_q_BANG_(this$,val){
return (this$["Q"] = val);
});
/**
 * Property.
 * 
 *   A string (enum) representing a BiquadFilterType.
 * 
 *   `var audioCtx = new AudioContext();
 *   var biquadFilter = audioCtx.createBiquadFilter();
 *   biquadfilter.type = 'lowpass';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/type`
 */
web.BiquadFilterNode.type = (function web$BiquadFilterNode$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   A string (enum) representing a BiquadFilterType.
 * 
 *   `var audioCtx = new AudioContext();
 *   var biquadFilter = audioCtx.createBiquadFilter();
 *   biquadfilter.type = 'lowpass';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/type`
 */
web.BiquadFilterNode.set_type_BANG_ = (function web$BiquadFilterNode$set_type_BANG_(this$,val){
return (this$["type"] = val);
});

//# sourceMappingURL=BiquadFilterNode.js.map?rel=1565798853194
