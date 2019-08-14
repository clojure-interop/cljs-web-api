// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.OscillatorNode');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The OscillatorNode() constructor of the Web Audio API creates a new `web.OscillatorNode` object which is an `audio.AudioNode` that represents a periodic waveform, like a sine wave, optionally setting the node's properties' values to match values in a specified object.
 * 
 *   Inherits parameters from the `audio.AudioNodeOptions` dictionary.
 * 
 * 
 *   \tcontext
 *   \tA reference to an `audio.AudioContext`.
 *   \toptions Optional
 *   \tAn object whose properties specify the initial values for the oscillator node's properties. Any properties omitted from the object will take on the default value as documented.
 * 
 *   \t\ttype
 *   \t\tThe shape of the wave produced by the node. Valid values are 'sine', 'square', 'sawtooth', 'triangle' and 'custom'. The default is 'sine'.
 *   \t\tdetune
 *   \t\tA detuning value (in cents) which will offset the frequency by the given amount. Its default is 0.
 *   \t\tfrequency
 *   \t\tThe frequency (in hertz) of the periodic waveform. Its default is 440.
 *   \t\tperiodicWave
 *   \t\tAn arbitrary period waveform described by a `web.PeriodicWave` object.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/OscillatorNode`
 */
web.OscillatorNode.constructor$ = OscillatorNode;
/**
 * Method.
 * 
 *   The setPeriodicWave() method of the `web.OscillatorNode` interface
 *   used to point to a `web.PeriodicWave` defining a periodic waveform
 *   can be used to shape the oscillator's output, when `web.type`
 *   custom.
 * 
 *   `OscillatorNode.setPeriodicWave(wave);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/setPeriodicWave`
 */
web.OscillatorNode.set_periodic_wave = (function web$OscillatorNode$set_periodic_wave(this$,wave){
return this$.setPeriodicWave(wave);
});
/**
 * Method.
 * 
 *   The following example shows basic usage of an `audio.AudioContext`
 *   create an oscillator node. For an applied example, check out
 *   Violent Theremin demo (see app.js for relevant code).
 * 
 *   `oscillator.start(when); // start playing oscillator at the point in time specified by when`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/start`
 */
web.OscillatorNode.start = (function web$OscillatorNode$start(this$,when){
return this$.start(when);
});
/**
 * Method.
 * 
 *   The following example shows basic usage of an `audio.AudioContext`
 *   create an oscillator node. For an applied example, check out
 *   Violent Theremin demo (see app.js for relevant code).
 * 
 *   `oscillator.stop(when); // stop playing oscillator at when`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/stop`
 */
web.OscillatorNode.stop = (function web$OscillatorNode$stop(this$,when){
return this$.stop(when);
});
/**
 * Property.
 * 
 *   An a-rate `audio.AudioParam`.
 * 
 *   `var oscillator = audioCtx.createOscillator();
 *   oscillator.detune.setValueAtTime(100, audioCtx.currentTime); // value in cents
 * 
 * 
 *   Note: though the AudioParam returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/detune`
 */
web.OscillatorNode.detune = (function web$OscillatorNode$detune(this$){
return this$.detune();
});
/**
 * Property.
 * 
 *   An a-rate `audio.AudioParam`.
 * 
 *   `var oscillator = audioCtx.createOscillator();
 *   oscillator.detune.setValueAtTime(100, audioCtx.currentTime); // value in cents
 * 
 * 
 *   Note: though the AudioParam returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/detune`
 */
web.OscillatorNode.set_detune_BANG_ = (function web$OscillatorNode$set_detune_BANG_(this$,val){
return (this$["detune"] = val);
});
/**
 * Property.
 * 
 *   An a-rate `audio.AudioParam`.
 * 
 *   `var oscillator = audioCtx.createOscillator();
 *   oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
 * 
 * 
 *   Note: though the AudioParam returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/frequency`
 */
web.OscillatorNode.frequency = (function web$OscillatorNode$frequency(this$){
return this$.frequency();
});
/**
 * Property.
 * 
 *   An a-rate `audio.AudioParam`.
 * 
 *   `var oscillator = audioCtx.createOscillator();
 *   oscillator.frequency.setValueAtTime(440, audioCtx.currentTime); // value in hertz
 * 
 * 
 *   Note: though the AudioParam returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/frequency`
 */
web.OscillatorNode.set_frequency_BANG_ = (function web$OscillatorNode$set_frequency_BANG_(this$,val){
return (this$["frequency"] = val);
});
/**
 * Property.
 * 
 *   The onended property of the `web.OscillatorNode` interface is
 *   to set the event handler for the ended event, which fires when
 *   tone has stopped playing.
 * 
 *   `var oscillator = audioCtx.createOscillator();
 *   oscillator.onended = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/onended`
 */
web.OscillatorNode.onended = (function web$OscillatorNode$onended(this$){
return this$.onended();
});
/**
 * Property.
 * 
 *   The onended property of the `web.OscillatorNode` interface is
 *   to set the event handler for the ended event, which fires when
 *   tone has stopped playing.
 * 
 *   `var oscillator = audioCtx.createOscillator();
 *   oscillator.onended = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/onended`
 */
web.OscillatorNode.set_onended_BANG_ = (function web$OscillatorNode$set_onended_BANG_(this$,val){
return (this$["onended"] = val);
});
/**
 * Property.
 * 
 *   A `dom.DOMString` specifying the shape of oscillator wave. The
 *   available values are:
 * 
 *   `OscillatorNode.type = type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/type`
 */
web.OscillatorNode.type = (function web$OscillatorNode$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   A `dom.DOMString` specifying the shape of oscillator wave. The
 *   available values are:
 * 
 *   `OscillatorNode.type = type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OscillatorNode/type`
 */
web.OscillatorNode.set_type_BANG_ = (function web$OscillatorNode$set_type_BANG_(this$,val){
return (this$["type"] = val);
});

//# sourceMappingURL=OscillatorNode.js.map?rel=1565798807978
