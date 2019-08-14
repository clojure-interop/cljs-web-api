// Compiled by ClojureScript 1.9.946 {}
goog.provide('audio.AudioContext');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The AudioContext() constructor creates a new `audio.AudioContext` object which represents an audio-processing graph, built from audio modules linked together, each represented by an `audio.AudioNode`.
 * 
 *   options Optional
 *   An object based on the `audio.AudioContextOptions` dictionary that contains zero or more optional properties to configure the new context. Available properties are as follows:
 *   `web.latencyHint` Optional
 *   The type of playback that the context will be used for, as a value from the `audio.AudioContextLatencyCategory` enum or a double-precision floating-point value indicating the preferred maximum latency of the context in seconds. The user agent may or may not choose to meet this request; check the value of `audio.AudioContext.baseLatency` to determine the true latency after creating the context.
 *   `web.sampleRate` Optional
 *   The `web.sampleRate` to be used by the AudioContext, specified in samples per second. The value may be any value supported by `audio.AudioBuffer`. If not specified, the preferred sample rate for the context's output device is used by default.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/AudioContext`
 */
audio.AudioContext.constructor$ = AudioContext;
/**
 * Method.
 * 
 *   The close() method of the `audio.AudioContext` Interface closes
 *   audio context, releasing any system audio resources that it uses.
 * 
 *   `var audioCtx = new AudioContext();
 *   audioCtx.close().then(function() { ... });
 *   await audioCtx.close();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/close`
 */
audio.AudioContext.close = (function audio$AudioContext$close(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43417 = arguments.length;
var i__42557__auto___43418 = (0);
while(true){
if((i__42557__auto___43418 < len__42556__auto___43417)){
args__42563__auto__.push((arguments[i__42557__auto___43418]));

var G__43419 = (i__42557__auto___43418 + (1));
i__42557__auto___43418 = G__43419;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return audio.AudioContext.close.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

audio.AudioContext.close.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.close,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

audio.AudioContext.close.cljs$lang$maxFixedArity = (1);

audio.AudioContext.close.cljs$lang$applyTo = (function (seq43415){
var G__43416 = cljs.core.first.call(null,seq43415);
var seq43415__$1 = cljs.core.next.call(null,seq43415);
return audio.AudioContext.close.cljs$core$IFn$_invoke$arity$variadic(G__43416,seq43415__$1);
});

/**
 * Method.
 * 
 *   The following script illustrates the use of createJavaScriptNode():
 * 
 *   `var jsNode = audioCtx.createJavaScriptNode(bufferSize, numInputChannels, numOutputChannels);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createJavaScriptNode`
 */
audio.AudioContext.create_java_script_node = (function audio$AudioContext$create_java_script_node(this$,buffer_size,num_input_channels,num_output_channels){
return this$.createJavaScriptNode(buffer_size,num_input_channels,num_output_channels);
});
/**
 * Method.
 * 
 *   For more details about media element audio source nodes, check
 *   the `media.MediaElementAudioSourceNode` reference page.
 * 
 *   `var audioCtx = new AudioContext();
 *   var source = audioCtx.createMediaElementSource(myMediaElement);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaElementSource`
 */
audio.AudioContext.create_media_element_source = (function audio$AudioContext$create_media_element_source(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43422 = arguments.length;
var i__42557__auto___43423 = (0);
while(true){
if((i__42557__auto___43423 < len__42556__auto___43422)){
args__42563__auto__.push((arguments[i__42557__auto___43423]));

var G__43424 = (i__42557__auto___43423 + (1));
i__42557__auto___43423 = G__43424;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return audio.AudioContext.create_media_element_source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

audio.AudioContext.create_media_element_source.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createMediaElementSource,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

audio.AudioContext.create_media_element_source.cljs$lang$maxFixedArity = (1);

audio.AudioContext.create_media_element_source.cljs$lang$applyTo = (function (seq43420){
var G__43421 = cljs.core.first.call(null,seq43420);
var seq43420__$1 = cljs.core.next.call(null,seq43420);
return audio.AudioContext.create_media_element_source.cljs$core$IFn$_invoke$arity$variadic(G__43421,seq43420__$1);
});

/**
 * Method.
 * 
 *   The `media.MediaStream` is created when the node is created and
 *   accessible via the `media.MediaStreamAudioDestinationNode`'s
 *   attribute. This stream can be used in a similar way as a MediaStream
 *   via `web.navigator.getUserMedia` — it can, for example, be sent
 *   a remote peer using the RTCPeerConnection addStream() method.
 * 
 *   `var audioCtx = new AudioContext();
 *   var destination = audioCtx.createMediaStreamDestination();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamDestination`
 */
audio.AudioContext.create_media_stream_destination = (function audio$AudioContext$create_media_stream_destination(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43427 = arguments.length;
var i__42557__auto___43428 = (0);
while(true){
if((i__42557__auto___43428 < len__42556__auto___43427)){
args__42563__auto__.push((arguments[i__42557__auto___43428]));

var G__43429 = (i__42557__auto___43428 + (1));
i__42557__auto___43428 = G__43429;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return audio.AudioContext.create_media_stream_destination.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

audio.AudioContext.create_media_stream_destination.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createMediaStreamDestination,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

audio.AudioContext.create_media_stream_destination.cljs$lang$maxFixedArity = (1);

audio.AudioContext.create_media_stream_destination.cljs$lang$applyTo = (function (seq43425){
var G__43426 = cljs.core.first.call(null,seq43425);
var seq43425__$1 = cljs.core.next.call(null,seq43425);
return audio.AudioContext.create_media_stream_destination.cljs$core$IFn$_invoke$arity$variadic(G__43426,seq43425__$1);
});

/**
 * Method.
 * 
 *   For more details about media stream audio source nodes, check
 *   the `media.MediaStreamAudioSourceNode` reference page.
 * 
 *   `audioSourceNode = audioContext.createMediaStreamSource(stream);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamSource`
 */
audio.AudioContext.create_media_stream_source = (function audio$AudioContext$create_media_stream_source(this$,stream){
return this$.createMediaStreamSource(stream);
});
/**
 * Method.
 * 
 *   A `media.MediaStreamTrackAudioSourceNode` object which acts as
 *   source for audio data found in the specified audio track.
 * 
 *   `var audioCtx = new AudioContext();
 *   var track = audioCtx.createMediaStreamTrackSource(track);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createMediaStreamTrackSource`
 */
audio.AudioContext.create_media_stream_track_source = (function audio$AudioContext$create_media_stream_track_source(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43432 = arguments.length;
var i__42557__auto___43433 = (0);
while(true){
if((i__42557__auto___43433 < len__42556__auto___43432)){
args__42563__auto__.push((arguments[i__42557__auto___43433]));

var G__43434 = (i__42557__auto___43433 + (1));
i__42557__auto___43433 = G__43434;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return audio.AudioContext.create_media_stream_track_source.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

audio.AudioContext.create_media_stream_track_source.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createMediaStreamTrackSource,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

audio.AudioContext.create_media_stream_track_source.cljs$lang$maxFixedArity = (1);

audio.AudioContext.create_media_stream_track_source.cljs$lang$applyTo = (function (seq43430){
var G__43431 = cljs.core.first.call(null,seq43430);
var seq43430__$1 = cljs.core.next.call(null,seq43430);
return audio.AudioContext.create_media_stream_track_source.cljs$core$IFn$_invoke$arity$variadic(G__43431,seq43430__$1);
});

/**
 * Method.
 * 
 *   The `audio.AudioContext` method createWaveTable() is now obsolete;
 *   should instead use the method `web.createPeriodicWave()`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createWaveTable`
 */
audio.AudioContext.create_wave_table = (function audio$AudioContext$create_wave_table(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43437 = arguments.length;
var i__42557__auto___43438 = (0);
while(true){
if((i__42557__auto___43438 < len__42556__auto___43437)){
args__42563__auto__.push((arguments[i__42557__auto___43438]));

var G__43439 = (i__42557__auto___43438 + (1));
i__42557__auto___43438 = G__43439;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return audio.AudioContext.create_wave_table.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

audio.AudioContext.create_wave_table.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createWaveTable,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

audio.AudioContext.create_wave_table.cljs$lang$maxFixedArity = (1);

audio.AudioContext.create_wave_table.cljs$lang$applyTo = (function (seq43435){
var G__43436 = cljs.core.first.call(null,seq43435);
var seq43435__$1 = cljs.core.next.call(null,seq43435);
return audio.AudioContext.create_wave_table.cljs$core$IFn$_invoke$arity$variadic(G__43436,seq43435__$1);
});

/**
 * Method.
 * 
 *   The getOutputTimestamp() property of the `audio.AudioContext`
 *   returns a new AudioTimestamp object containing two correlated
 *   audio stream position values.
 * 
 *   `var timestamp = AudioContext.getOutputTimestamp()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/getOutputTimestamp`
 */
audio.AudioContext.get_output_timestamp = (function audio$AudioContext$get_output_timestamp(this$){
return this$.getOutputTimestamp();
});
/**
 * Method.
 * 
 *   The resume() method of the `audio.AudioContext` interface resumes
 *   progression of time in an audio context that has previously been
 * 
 *   `completePromise = audioContext.resume();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/resume`
 */
audio.AudioContext.resume = (function audio$AudioContext$resume(this$){
return this$.resume();
});
/**
 * Method.
 * 
 *   The suspend() method of the `audio.AudioContext` Interface suspends
 *   progression of time in the audio context, temporarily halting
 *   hardware access and reducing CPU/battery usage in the process
 *   this is useful if you want an application to power down the audio
 *   when it will not be using an audio context for a while.
 * 
 *   `var audioCtx = new AudioContext();
 *   audioCtx.suspend().then(function() { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/suspend`
 */
audio.AudioContext.suspend = (function audio$AudioContext$suspend(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43442 = arguments.length;
var i__42557__auto___43443 = (0);
while(true){
if((i__42557__auto___43443 < len__42556__auto___43442)){
args__42563__auto__.push((arguments[i__42557__auto___43443]));

var G__43444 = (i__42557__auto___43443 + (1));
i__42557__auto___43443 = G__43444;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return audio.AudioContext.suspend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

audio.AudioContext.suspend.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.suspend,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

audio.AudioContext.suspend.cljs$lang$maxFixedArity = (1);

audio.AudioContext.suspend.cljs$lang$applyTo = (function (seq43440){
var G__43441 = cljs.core.first.call(null,seq43440);
var seq43440__$1 = cljs.core.next.call(null,seq43440);
return audio.AudioContext.suspend.cljs$core$IFn$_invoke$arity$variadic(G__43441,seq43440__$1);
});

/**
 * Property.
 * 
 *   The baseLatency read-only property of the `audio.AudioContext`
 *   returns a double that represents the number of seconds of processing
 *   incurred by the AudioContext passing the audio from the `audio.AudioDestinationNode`
 *   the audio subsystem.
 * 
 *   `var baseLatency = audioCtx.baseLatency;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/baseLatency`
 */
audio.AudioContext.base_latency = (function audio$AudioContext$base_latency(this$){
return this$.baseLatency();
});
/**
 * Property.
 * 
 *   The baseLatency read-only property of the `audio.AudioContext`
 *   returns a double that represents the number of seconds of processing
 *   incurred by the AudioContext passing the audio from the `audio.AudioDestinationNode`
 *   the audio subsystem.
 * 
 *   `var baseLatency = audioCtx.baseLatency;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/baseLatency`
 */
audio.AudioContext.set_base_latency_BANG_ = (function audio$AudioContext$set_base_latency_BANG_(this$,val){
return (this$["baseLatency"] = val);
});
/**
 * Property.
 * 
 *   The outputLatency read-only property of the `audio.AudioContext`
 *   provides an estimation of the output latency of the current audio
 * 
 *   `var latency = audioCtx.outputLatency;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/outputLatency`
 */
audio.AudioContext.output_latency = (function audio$AudioContext$output_latency(this$){
return this$.outputLatency();
});
/**
 * Property.
 * 
 *   The outputLatency read-only property of the `audio.AudioContext`
 *   provides an estimation of the output latency of the current audio
 * 
 *   `var latency = audioCtx.outputLatency;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/outputLatency`
 */
audio.AudioContext.set_output_latency_BANG_ = (function audio$AudioContext$set_output_latency_BANG_(this$,val){
return (this$["outputLatency"] = val);
});

//# sourceMappingURL=AudioContext.js.map?rel=1565798806512
