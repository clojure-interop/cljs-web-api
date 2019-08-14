// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.OfflineAudioContext');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The OfflineAudioContext() constructor—part of the Web Audio API—creates and returns a new `web.OfflineAudioContext` object instance, which can then be used to render audio to an `audio.AudioBuffer` rather than to an audio output device.
 * 
 *   You can specify the parameters for the OfflineAudioContext() constructor as either the same set of parameters as are inputs into the `audio.AudioContext.createBuffer()` method, or by passing those parameters in an options object. Either way, the individual parameters are the same.
 * 
 * 
 *   numberOfChannels
 *   An integer specifying the number of channels the resulting `audio.AudioBuffer` should have.
 *   length
 *   An integer specifying the size of the buffer to create for the audio context, in sample-frames, where one sample-frame is a unit that can contain a single sample of audio data for every channel in the audio data. For example, a 5-second buffer with a sampleRate of 48000Hz would have a length of 5 * 48000 = 240000 sample-frames.
 *   sampleRate
 *   The sample-rate of the linear audio data in sample-frames per second. All user agents are required to support a range of 22050Hz to 96000Hz, and may support a wider range than that. The most commonly-used rate is 44100Hz, which is the sample rate used by CD audio.
 * 
 * 
 *   It is important to note that, whereas you can create a new `audio.AudioContext` using the `web.new AudioContext()` constructor with no arguments, the OfflineAudioContext() constructor requires three arguments, since it needs to create an AudioBuffer. This works in exactly the same way as when you create a new `audio.AudioBuffer` with the `audio.AudioContext.createBuffer()` method. For more detail, read Audio buffers: frames, samples and channels from our Basic concepts guide.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/OfflineAudioContext`
 */
web.OfflineAudioContext.constructor$ = OfflineAudioContext;
/**
 * Method.
 * 
 *   The resume() method of the `web.OfflineAudioContext` interface
 *   the progression of time in an audio context that has been suspended.
 *   promise resolves immediately because the OfflineAudioContext
 *   not require the audio hardware. If the context is not currently
 *   or the rendering has not started, the promise is rejected with
 * 
 *   `OfflineAudioContext.resume().then(function() { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/resume`
 */
web.OfflineAudioContext.resume = (function web$OfflineAudioContext$resume(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43105 = arguments.length;
var i__42557__auto___43106 = (0);
while(true){
if((i__42557__auto___43106 < len__42556__auto___43105)){
args__42563__auto__.push((arguments[i__42557__auto___43106]));

var G__43107 = (i__42557__auto___43106 + (1));
i__42557__auto___43106 = G__43107;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.OfflineAudioContext.resume.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.OfflineAudioContext.resume.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.resume,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.OfflineAudioContext.resume.cljs$lang$maxFixedArity = (1);

web.OfflineAudioContext.resume.cljs$lang$applyTo = (function (seq43103){
var G__43104 = cljs.core.first.call(null,seq43103);
var seq43103__$1 = cljs.core.next.call(null,seq43103);
return web.OfflineAudioContext.resume.cljs$core$IFn$_invoke$arity$variadic(G__43104,seq43103__$1);
});

/**
 * Method.
 * 
 *   The startRendering() method of the `web.OfflineAudioContext`
 *   starts rendering the audio graph, taking into account the current
 *   and the current scheduled changes.
 * 
 *   `Event-based version:
 * 
 * 
 * 
 *   offlineAudioCtx.startRendering();
 *   offlineAudioCtx.oncomplete = function(e) {
 *   // e.renderedBuffer contains the output buffer
 *   }
 * 
 *   Promise-based version:
 * 
 * 
 * 
 *   offlineAudioCtx.startRendering().then(function(buffer) {
 *   // buffer contains the output buffer
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/startRendering`
 */
web.OfflineAudioContext.start_rendering = (function web$OfflineAudioContext$start_rendering(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43110 = arguments.length;
var i__42557__auto___43111 = (0);
while(true){
if((i__42557__auto___43111 < len__42556__auto___43110)){
args__42563__auto__.push((arguments[i__42557__auto___43111]));

var G__43112 = (i__42557__auto___43111 + (1));
i__42557__auto___43111 = G__43112;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.OfflineAudioContext.start_rendering.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.OfflineAudioContext.start_rendering.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.startRendering,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.OfflineAudioContext.start_rendering.cljs$lang$maxFixedArity = (1);

web.OfflineAudioContext.start_rendering.cljs$lang$applyTo = (function (seq43108){
var G__43109 = cljs.core.first.call(null,seq43108);
var seq43108__$1 = cljs.core.next.call(null,seq43108);
return web.OfflineAudioContext.start_rendering.cljs$core$IFn$_invoke$arity$variadic(G__43109,seq43108__$1);
});

/**
 * Method.
 * 
 *   The suspend() method of the `web.OfflineAudioContext` interface
 *   a suspension of the time progression in the audio context at
 *   specified time and returns a promise. This is generally useful
 *   the time of manipulating the audio graph synchronously on OfflineAudioContext.
 * 
 *   `OfflineAudioContext.suspend(suspendTime).then(function() { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/suspend`
 */
web.OfflineAudioContext.suspend = (function web$OfflineAudioContext$suspend(this$,suspend_time){
return this$.suspend(suspend_time);
});
/**
 * Property.
 * 
 *   The length property of the `web.OfflineAudioContext` interface
 *   an integer representing the size of the buffer in sample-frames.
 * 
 *   `var length = OfflineAudioContext.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/length`
 */
web.OfflineAudioContext.length = (function web$OfflineAudioContext$length(this$){
return this$.length();
});
/**
 * Property.
 * 
 *   The length property of the `web.OfflineAudioContext` interface
 *   an integer representing the size of the buffer in sample-frames.
 * 
 *   `var length = OfflineAudioContext.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/length`
 */
web.OfflineAudioContext.set_length_BANG_ = (function web$OfflineAudioContext$set_length_BANG_(this$,val){
return (this$["length"] = val);
});
/**
 * Property.
 * 
 *   When processing is complete, you might want to use the oncomplete
 *   the prompt the user that the audio can now be played, and enable
 *   play button.
 * 
 *   `var offlineAudioCtx = new OfflineAudioContext();
 *   offlineAudioCtx.oncomplete = function() { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/oncomplete`
 */
web.OfflineAudioContext.oncomplete = (function web$OfflineAudioContext$oncomplete(this$){
return this$.oncomplete();
});
/**
 * Property.
 * 
 *   When processing is complete, you might want to use the oncomplete
 *   the prompt the user that the audio can now be played, and enable
 *   play button.
 * 
 *   `var offlineAudioCtx = new OfflineAudioContext();
 *   offlineAudioCtx.oncomplete = function() { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OfflineAudioContext/oncomplete`
 */
web.OfflineAudioContext.set_oncomplete_BANG_ = (function web$OfflineAudioContext$set_oncomplete_BANG_(this$,val){
return (this$["oncomplete"] = val);
});

//# sourceMappingURL=OfflineAudioContext.js.map?rel=1565798803683
