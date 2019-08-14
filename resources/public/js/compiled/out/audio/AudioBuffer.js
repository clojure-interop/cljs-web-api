// Compiled by ClojureScript 1.9.946 {}
goog.provide('audio.AudioBuffer');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The AudioBuffer constructor of the Web Audio API creates a new `audio.AudioBuffer` object.
 * 
 *   Inherits parameters from the `audio.AudioNodeOptions` dictionary.
 * 
 * 
 *   options
 *   Options are as follows:
 * 
 *   length: The size of the audio buffer in sample-frames. To determine the length to use for a specific number of seconds of audio, use numSeconds * (sampleRate * numberOfChannels).
 *   numberOfChannels: The number of channels for the buffer. The default is 1, and all user agents are required to support at least 32 channels.
 *   sampleRate: The sample rate in Hz for the buffer. The default is the sample rate of the context used in constructing this object. User agents are required to support sample rates from 8,000 Hz to 96,000 Hz (but are allowed to go farther outside this range).
 * 
 * 
 * 
 * 
 *   Deprecated parameters
 * 
 * 
 *   context
 *   A reference to an `audio.AudioContext`. This parameter was removed from the spec.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/AudioBuffer`
 */
audio.AudioBuffer.constructor$ = AudioBuffer;
/**
 * Method.
 * 
 *   The copyFromChannel() method of the `audio.AudioBuffer` interface
 *   the audio sample data from the specified channel of the AudioBuffer
 *   a specified `web.Float32Array`.
 * 
 *   `myArrayBuffer.copyFromChannel(destination, channelNumber, startInChannel);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/copyFromChannel`
 */
audio.AudioBuffer.copy_from_channel = (function audio$AudioBuffer$copy_from_channel(this$,destination,channel_number,start_in_channel){
return this$.copyFromChannel(destination,channel_number,start_in_channel);
});
/**
 * Method.
 * 
 *   The copyToChannel() method of the `audio.AudioBuffer` interface
 *   the samples to the specified channel of the AudioBuffer, from
 *   source array.
 * 
 *   `myArrayBuffer.copyToChannel(source, channelNumber, startInChannel);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/copyToChannel`
 */
audio.AudioBuffer.copy_to_channel = (function audio$AudioBuffer$copy_to_channel(this$,source,channel_number,start_in_channel){
return this$.copyToChannel(source,channel_number,start_in_channel);
});
/**
 * Method.
 * 
 *   The getChannelData() method of the `audio.AudioBuffer` Interface
 *   a `web.Float32Array` containing the PCM data associated with
 *   channel, defined by the channel parameter (with 0 representing
 *   first channel).
 * 
 *   `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
 *   var nowBuffering = myArrayBuffer.getChannelData(channel);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/getChannelData`
 */
audio.AudioBuffer.get_channel_data = (function audio$AudioBuffer$get_channel_data(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43227 = arguments.length;
var i__42557__auto___43228 = (0);
while(true){
if((i__42557__auto___43228 < len__42556__auto___43227)){
args__42563__auto__.push((arguments[i__42557__auto___43228]));

var G__43229 = (i__42557__auto___43228 + (1));
i__42557__auto___43228 = G__43229;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return audio.AudioBuffer.get_channel_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

audio.AudioBuffer.get_channel_data.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getChannelData,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

audio.AudioBuffer.get_channel_data.cljs$lang$maxFixedArity = (1);

audio.AudioBuffer.get_channel_data.cljs$lang$applyTo = (function (seq43225){
var G__43226 = cljs.core.first.call(null,seq43225);
var seq43225__$1 = cljs.core.next.call(null,seq43225);
return audio.AudioBuffer.get_channel_data.cljs$core$IFn$_invoke$arity$variadic(G__43226,seq43225__$1);
});

/**
 * Property.
 * 
 *   A double.
 * 
 *   `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
 *   myArrayBuffer.duration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/duration`
 */
audio.AudioBuffer.duration = (function audio$AudioBuffer$duration(this$){
return this$.duration();
});
/**
 * Property.
 * 
 *   A double.
 * 
 *   `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
 *   myArrayBuffer.duration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/duration`
 */
audio.AudioBuffer.set_duration_BANG_ = (function audio$AudioBuffer$set_duration_BANG_(this$,val){
return (this$["duration"] = val);
});
/**
 * Property.
 * 
 *   The length property of the `audio.AudioBuffer` interface returns
 *   integer representing the length, in sample-frames, of the PCM
 *   stored in the buffer.
 * 
 *   `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
 *   myArrayBuffer.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/length`
 */
audio.AudioBuffer.length = (function audio$AudioBuffer$length(this$){
return this$.length();
});
/**
 * Property.
 * 
 *   The length property of the `audio.AudioBuffer` interface returns
 *   integer representing the length, in sample-frames, of the PCM
 *   stored in the buffer.
 * 
 *   `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
 *   myArrayBuffer.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/length`
 */
audio.AudioBuffer.set_length_BANG_ = (function audio$AudioBuffer$set_length_BANG_(this$,val){
return (this$["length"] = val);
});
/**
 * Property.
 * 
 *   An integer.
 * 
 *   `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
 *   myArrayBuffer.numberOfChannels;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/numberOfChannels`
 */
audio.AudioBuffer.number_of_channels = (function audio$AudioBuffer$number_of_channels(this$){
return this$.numberOfChannels();
});
/**
 * Property.
 * 
 *   An integer.
 * 
 *   `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
 *   myArrayBuffer.numberOfChannels;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/numberOfChannels`
 */
audio.AudioBuffer.set_number_of_channels_BANG_ = (function audio$AudioBuffer$set_number_of_channels_BANG_(this$,val){
return (this$["numberOfChannels"] = val);
});
/**
 * Property.
 * 
 *   A floating-point value indicating the current sample rate of
 *   buffers data, in samples per second.
 * 
 *   `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
 *   myArrayBuffer.sampleRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/sampleRate`
 */
audio.AudioBuffer.sample_rate = (function audio$AudioBuffer$sample_rate(this$){
return this$.sampleRate();
});
/**
 * Property.
 * 
 *   A floating-point value indicating the current sample rate of
 *   buffers data, in samples per second.
 * 
 *   `var myArrayBuffer = audioCtx.createBuffer(2, frameCount, audioCtx.sampleRate);
 *   myArrayBuffer.sampleRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioBuffer/sampleRate`
 */
audio.AudioBuffer.set_sample_rate_BANG_ = (function audio$AudioBuffer$set_sample_rate_BANG_(this$,val){
return (this$["sampleRate"] = val);
});

//# sourceMappingURL=AudioBuffer.js.map?rel=1565798804765
