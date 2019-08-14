// Compiled by ClojureScript 1.9.946 {}
goog.provide('audio.AudioBufferSourceNode');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The AudioBufferSourceNode() constructor creates a new `audio.AudioBufferSourceNode` object instance.
 * 
 *   Inherits parameters from the `audio.AudioNodeOptions` dictionary.
 * 
 * 
 *   context
 *   A reference to an `audio.AudioContext`.
 *   options Optional
 *   Options are as follows:
 * 
 *   buffer: An instance of `audio.AudioBuffer` to be played.
 *   detune: A value in cents to modulate the speed of audio stream rendering. Its nominal range is (-∞ to ∞). The default is 0.
 *   loop: A boolean indicating whether the audio should play in a loop. The default is false. If the loop is dynamically modified during playback, the new value will take effect on the next processing block of audio.
 *   loopEnd: An optional value, in seconds, where looping should end if the loop attribute is true. The default is 0. Its value is exclusive to the content of the loop. The sample frames, comprising the loop, run from the values loopStart to loopEnd-(1/sampleRate). It's sensible to set this to a value between 0 and the duration of the buffer. If loopEnd is less than 0, looping will end at 0. If loopEnd is greater than the duration of the buffer, looping will end at the end of the buffer. This attribute is converted to an exact sample frame offset within the buffer, by multiplying by the buffer's sample rate and rounding to the nearest integer value. Thus, its behavior is independent of the value of the playbackRate parameter.
 * 
 * 
 * 
 *   loopStart: An optional value in seconds, where looping should end if the loop attribute is true. The default is 0. It's sensible to set this to a value between 0 and the duration of the buffer. If loopStart is less than 0, looping will begin at 0. If loopStart is greater than the duration of the buffer, looping will begin at the end of the buffer. This attribute is converted to an exact sample frame offset within the buffer, by multiplying by the buffer's sample rate and rounding to the nearest integer value. Thus, its behavior is independent of the value of the playbackRate parameter.
 *   playbackRate: The speed at which to render the audio stream. Its default value is 1. This parameter is k-rate. This is a compound parameter with detune. Its nominal range is (-∞ to ∞).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/AudioBufferSourceNode`
 */
audio.AudioBufferSourceNode.constructor$ = AudioBufferSourceNode;
/**
 * Method.
 * 
 *   `web.undefined`.
 * 
 *   `AudioBufferSourceNode.start([when][, offset][, duration]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/start`
 */
audio.AudioBufferSourceNode.start = (function audio$AudioBufferSourceNode$start(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44651 = arguments.length;
var i__42557__auto___44652 = (0);
while(true){
if((i__42557__auto___44652 < len__42556__auto___44651)){
args__42563__auto__.push((arguments[i__42557__auto___44652]));

var G__44653 = (i__42557__auto___44652 + (1));
i__42557__auto___44652 = G__44653;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return audio.AudioBufferSourceNode.start.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

audio.AudioBufferSourceNode.start.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.start,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

audio.AudioBufferSourceNode.start.cljs$lang$maxFixedArity = (1);

audio.AudioBufferSourceNode.start.cljs$lang$applyTo = (function (seq44649){
var G__44650 = cljs.core.first.call(null,seq44649);
var seq44649__$1 = cljs.core.next.call(null,seq44649);
return audio.AudioBufferSourceNode.start.cljs$core$IFn$_invoke$arity$variadic(G__44650,seq44649__$1);
});

/**
 * Property.
 * 
 *   The buffer property of the `audio.AudioBufferSourceNode` interface
 *   the ability to play back audio using an `audio.AudioBuffer` as
 *   source of the sound data.
 * 
 *   `AudioBufferSourceNode.buffer = soundBuffer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/buffer`
 */
audio.AudioBufferSourceNode.buffer = (function audio$AudioBufferSourceNode$buffer(this$){
return this$.buffer();
});
/**
 * Property.
 * 
 *   The buffer property of the `audio.AudioBufferSourceNode` interface
 *   the ability to play back audio using an `audio.AudioBuffer` as
 *   source of the sound data.
 * 
 *   `AudioBufferSourceNode.buffer = soundBuffer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/buffer`
 */
audio.AudioBufferSourceNode.set_buffer_BANG_ = (function audio$AudioBufferSourceNode$set_buffer_BANG_(this$,val){
return (this$["buffer"] = val);
});
/**
 * Property.
 * 
 *   The detune property of the `audio.AudioBufferSourceNode` interface
 *   a k-rate `audio.AudioParam` representing detuning of oscillation
 *   cents.
 * 
 *   `var source = audioCtx.createBufferSource();
 *   source.detune.value = 100; // value in cents
 * 
 * 
 *   Note: Though the AudioParam returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/detune`
 */
audio.AudioBufferSourceNode.detune = (function audio$AudioBufferSourceNode$detune(this$){
return this$.detune();
});
/**
 * Property.
 * 
 *   The detune property of the `audio.AudioBufferSourceNode` interface
 *   a k-rate `audio.AudioParam` representing detuning of oscillation
 *   cents.
 * 
 *   `var source = audioCtx.createBufferSource();
 *   source.detune.value = 100; // value in cents
 * 
 * 
 *   Note: Though the AudioParam returned is read-only, the value it represents is not.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/detune`
 */
audio.AudioBufferSourceNode.set_detune_BANG_ = (function audio$AudioBufferSourceNode$set_detune_BANG_(this$,val){
return (this$["detune"] = val);
});
/**
 * Property.
 * 
 *   The loop property's default value is false.
 * 
 *   `var loopingEnabled = AudioBufferSourceNode.loop;
 *   AudioBufferSourceNode.loop = true | false;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loop`
 */
audio.AudioBufferSourceNode.loop = (function audio$AudioBufferSourceNode$loop(this$){
return this$.loop();
});
/**
 * Property.
 * 
 *   The loop property's default value is false.
 * 
 *   `var loopingEnabled = AudioBufferSourceNode.loop;
 *   AudioBufferSourceNode.loop = true | false;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loop`
 */
audio.AudioBufferSourceNode.set_loop_BANG_ = (function audio$AudioBufferSourceNode$set_loop_BANG_(this$,val){
return (this$["loop"] = val);
});
/**
 * Property.
 * 
 *   A floating-point number indicating the offset, in seconds, into
 *   audio buffer at which each loop will loop return to the beginning
 *   the loop (that is, the current play time gets reset to `audio.AudioBufferSourceNode.loopStart`).
 *   property is only used if the `web.loop` property is true.
 * 
 *   `AudioBufferSourceNode.loopEnd = endOffsetInSeconds;
 * 
 *   var endOffsetInSeconds = AudioBufferSourceNode.loopEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loopEnd`
 */
audio.AudioBufferSourceNode.loop_end = (function audio$AudioBufferSourceNode$loop_end(this$){
return this$.loopEnd();
});
/**
 * Property.
 * 
 *   A floating-point number indicating the offset, in seconds, into
 *   audio buffer at which each loop will loop return to the beginning
 *   the loop (that is, the current play time gets reset to `audio.AudioBufferSourceNode.loopStart`).
 *   property is only used if the `web.loop` property is true.
 * 
 *   `AudioBufferSourceNode.loopEnd = endOffsetInSeconds;
 * 
 *   var endOffsetInSeconds = AudioBufferSourceNode.loopEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loopEnd`
 */
audio.AudioBufferSourceNode.set_loop_end_BANG_ = (function audio$AudioBufferSourceNode$set_loop_end_BANG_(this$,val){
return (this$["loopEnd"] = val);
});
/**
 * Property.
 * 
 *   The loopStart property of the `audio.AudioBufferSourceNode` interface
 *   a floating-point value indicating, in seconds, where in the `audio.AudioBuffer`
 *   restart of the play must happen.
 * 
 *   `AudioBufferSourceNode.loopStart = startOffsetInSeconds;
 * 
 *   startOffsetInSeconds = AudioBufferSourceNode.loopStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loopStart`
 */
audio.AudioBufferSourceNode.loop_start = (function audio$AudioBufferSourceNode$loop_start(this$){
return this$.loopStart();
});
/**
 * Property.
 * 
 *   The loopStart property of the `audio.AudioBufferSourceNode` interface
 *   a floating-point value indicating, in seconds, where in the `audio.AudioBuffer`
 *   restart of the play must happen.
 * 
 *   `AudioBufferSourceNode.loopStart = startOffsetInSeconds;
 * 
 *   startOffsetInSeconds = AudioBufferSourceNode.loopStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/loopStart`
 */
audio.AudioBufferSourceNode.set_loop_start_BANG_ = (function audio$AudioBufferSourceNode$set_loop_start_BANG_(this$,val){
return (this$["loopStart"] = val);
});
/**
 * Property.
 * 
 *   The playbackRate property of the `audio.AudioBufferSourceNode`
 *   Is a k-rate `audio.AudioParam` that defines the speed at which
 *   audio asset will be played.
 * 
 *   `AudioBufferSourceNode.playbackRate.value = playbackRateProportion;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/playbackRate`
 */
audio.AudioBufferSourceNode.playback_rate = (function audio$AudioBufferSourceNode$playback_rate(this$){
return this$.playbackRate();
});
/**
 * Property.
 * 
 *   The playbackRate property of the `audio.AudioBufferSourceNode`
 *   Is a k-rate `audio.AudioParam` that defines the speed at which
 *   audio asset will be played.
 * 
 *   `AudioBufferSourceNode.playbackRate.value = playbackRateProportion;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBufferSourceNode/playbackRate`
 */
audio.AudioBufferSourceNode.set_playback_rate_BANG_ = (function audio$AudioBufferSourceNode$set_playback_rate_BANG_(this$,val){
return (this$["playbackRate"] = val);
});

//# sourceMappingURL=AudioBufferSourceNode.js.map?rel=1565798815418
