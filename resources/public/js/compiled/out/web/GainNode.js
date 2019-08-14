// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.GainNode');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The GainNode() constructor of the Web Audio API creates a new `web.GainNode` object which an `audio.AudioNode` that represents a change in volume.
 * 
 *   Inherits parameters from the `audio.AudioNodeOptions` dictionary.
 * 
 * 
 *   \tcontext
 *   \tA reference to an `audio.AudioContext`.
 *   \toptions Optional
 *   \tOptions are as follows:
 * 
 *   \t\tgain: The amount of gain to apply. This parameter is a-rate and it's nominal range is (-∞,+∞). The default is 1.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GainNode/GainNode`
 */
web.GainNode.constructor$ = GainNode;
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var gainNode = audioCtx.createGain();
 *   gainNode.gain.value = 0.5;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GainNode/gain`
 */
web.GainNode.gain = (function web$GainNode$gain(this$){
return this$.gain();
});
/**
 * Property.
 * 
 *   An `audio.AudioParam`.
 * 
 *   `var audioCtx = new AudioContext();
 *   var gainNode = audioCtx.createGain();
 *   gainNode.gain.value = 0.5;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GainNode/gain`
 */
web.GainNode.set_gain_BANG_ = (function web$GainNode$set_gain_BANG_(this$,val){
return (this$["gain"] = val);
});

//# sourceMappingURL=GainNode.js.map?rel=1565798841050
