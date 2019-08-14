// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.BaseAudioContext');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The createAnalyser() method of the `web.BaseAudioContext` interface
 *   an `web.AnalyserNode`, which can be used to expose audio time
 *   frequency data and create data visualisations.
 * 
 *   `var analyserNode = baseAudioContext.createAnalyser();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createAnalyser`
 */
web.BaseAudioContext.create_analyser = (function web$BaseAudioContext$create_analyser(this$){
return this$.createAnalyser();
});
/**
 * Method.
 * 
 *   A `web.BiquadFilterNode`.
 * 
 *   `baseAudioContext.createBiquadFilter();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createBiquadFilter`
 */
web.BaseAudioContext.create_biquad_filter = (function web$BaseAudioContext$create_biquad_filter(this$){
return this$.createBiquadFilter();
});
/**
 * Method.
 * 
 *   An `audio.AudioBuffer` configured based on the specified options.
 * 
 *   `var buffer = baseAudioContext.createBuffer(numOfchannels, length, sampleRate);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createBuffer`
 */
web.BaseAudioContext.create_buffer = (function web$BaseAudioContext$create_buffer(this$,num_ofchannels,length,sample_rate){
return this$.createBuffer(num_ofchannels,length,sample_rate);
});
/**
 * Method.
 * 
 *   An `audio.AudioBufferSourceNode`.
 * 
 *   `var source = baseAudioContext.createBufferSource();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createBufferSource`
 */
web.BaseAudioContext.create_buffer_source = (function web$BaseAudioContext$create_buffer_source(this$){
return this$.createBufferSource();
});
/**
 * Method.
 * 
 *   A `web.ChannelMergerNode`.
 * 
 *   `baseAudioContext.createChannelMerger(numberOfInputs);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createChannelMerger`
 */
web.BaseAudioContext.create_channel_merger = (function web$BaseAudioContext$create_channel_merger(this$,number_of_inputs){
return this$.createChannelMerger(number_of_inputs);
});
/**
 * Method.
 * 
 *   A `web.ChannelSplitterNode`.
 * 
 *   `baseAudioContext.createChannelSplitter(numberOfOutputs);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createChannelSplitter`
 */
web.BaseAudioContext.create_channel_splitter = (function web$BaseAudioContext$create_channel_splitter(this$,number_of_outputs){
return this$.createChannelSplitter(number_of_outputs);
});
/**
 * Method.
 * 
 *   The createConstantSource() property of the `web.BaseAudioContext`
 *   creates a `web.ConstantSourceNode` object, which is an audio
 *   that continuously outputs a monaural (one-channel) sound signal
 *   samples all have the same value.
 * 
 *   `var constantSourceNode = AudioContext.createConstantSource()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createConstantSource`
 */
web.BaseAudioContext.create_constant_source = (function web$BaseAudioContext$create_constant_source(this$){
return this$.createConstantSource();
});
/**
 * Method.
 * 
 *   A `web.ConvolverNode`.
 * 
 *   `baseAudioContext.createConvolver();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createConvolver`
 */
web.BaseAudioContext.create_convolver = (function web$BaseAudioContext$create_convolver(this$){
return this$.createConvolver();
});
/**
 * Method.
 * 
 *   The createDelay() method of the `web.BaseAudioContext` Interface
 *   used to create a `web.DelayNode`, which is used to delay the
 *   audio signal by a certain amount of time.
 * 
 *   `var delayNode = audioCtx.createDelay(maxDelayTime);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createDelay`
 */
web.BaseAudioContext.create_delay = (function web$BaseAudioContext$create_delay(this$,max_delay_time){
return this$.createDelay(max_delay_time);
});
/**
 * Method.
 * 
 *   Compression lowers the volume of the loudest parts of the signal
 *   raises the volume of the softest parts. Overall, a louder, richer,
 *   fuller sound can be achieved. It is especially important in games
 *   musical applications where large numbers of individual sounds
 *   played simultaneously, where you want to control the overall
 *   level and help avoid clipping (distorting) of the audio output.
 * 
 *   `baseAudioCtx.createDynamicsCompressor();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createDynamicsCompressor`
 */
web.BaseAudioContext.create_dynamics_compressor = (function web$BaseAudioContext$create_dynamics_compressor(this$){
return this$.createDynamicsCompressor();
});
/**
 * Method.
 * 
 *   A `web.GainNode` which takes as input one or more audio sources
 *   outputs audio whose volume has been adjusted in gain (volume)
 *   a level specified by the node's `web.GainNode.gain` a-rate parameter.
 * 
 *   `var gainNode = AudioContext.createGain();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createGain`
 */
web.BaseAudioContext.create_gain = (function web$BaseAudioContext$create_gain(this$){
return this$.createGain();
});
/**
 * Method.
 * 
 *   The createIIRFilter() method of the `web.BaseAudioContext` interface
 *   an `web.IIRFilterNode`, which represents a general infinite impulse
 *   (IIR) filter which can be configured to serve as various types
 *   filter.
 * 
 *   `var iirFilter = AudioContext.createIIRFilter(feedforward, feedback);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createIIRFilter`
 */
web.BaseAudioContext.create_iir_filter = (function web$BaseAudioContext$create_iir_filter(this$,feedforward,feedback){
return this$.createIIRFilter(feedforward,feedback);
});
/**
 * Method.
 * 
 *   The createOscillator() method of the `web.BaseAudioContext` interface
 *   an `web.OscillatorNode`, a source representing a periodic waveform.
 *   basically generates a constant tone.
 * 
 *   `var oscillatorNode = audioCtx.createOscillator();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createOscillator`
 */
web.BaseAudioContext.create_oscillator = (function web$BaseAudioContext$create_oscillator(this$){
return this$.createOscillator();
});
/**
 * Method.
 * 
 *   The panner node is spatialized in relation to the AudioContext's
 *   (defined by the `audio.AudioContext.listener` attribute), which
 *   the position and orientation of the person listening to the audio.
 * 
 *   `baseAudioCtx.createPanner();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createPanner`
 */
web.BaseAudioContext.create_panner = (function web$BaseAudioContext$create_panner(this$){
return this$.createPanner();
});
/**
 * Method.
 * 
 *   The createPeriodicWave() method of the `web.BaseAudioContext`
 *   is used to create a `web.PeriodicWave`, which is used to define
 *   periodic waveform that can be used to shape the output of an
 * 
 *   `var wave = AudioContext.createPeriodicWave(real, imag[, constraints]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createPeriodicWave`
 */
web.BaseAudioContext.create_periodic_wave = (function web$BaseAudioContext$create_periodic_wave(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44926 = arguments.length;
var i__42557__auto___44927 = (0);
while(true){
if((i__42557__auto___44927 < len__42556__auto___44926)){
args__42563__auto__.push((arguments[i__42557__auto___44927]));

var G__44928 = (i__42557__auto___44927 + (1));
i__42557__auto___44927 = G__44928;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.BaseAudioContext.create_periodic_wave.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.BaseAudioContext.create_periodic_wave.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createPeriodicWave,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.BaseAudioContext.create_periodic_wave.cljs$lang$maxFixedArity = (1);

web.BaseAudioContext.create_periodic_wave.cljs$lang$applyTo = (function (seq44924){
var G__44925 = cljs.core.first.call(null,seq44924);
var seq44924__$1 = cljs.core.next.call(null,seq44924);
return web.BaseAudioContext.create_periodic_wave.cljs$core$IFn$_invoke$arity$variadic(G__44925,seq44924__$1);
});

/**
 * Method.
 * 
 *   A `web.ScriptProcessorNode`.
 * 
 *   `var scriptProcessor = audioCtx.createScriptProcessor(bufferSize, numberOfInputChannels, numberOfOutputChannels);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createScriptProcessor`
 */
web.BaseAudioContext.create_script_processor = (function web$BaseAudioContext$create_script_processor(this$,buffer_size,number_of_input_channels,number_of_output_channels){
return this$.createScriptProcessor(buffer_size,number_of_input_channels,number_of_output_channels);
});
/**
 * Method.
 * 
 *   A `web.StereoPannerNode`.
 * 
 *   `baseAudioContext.createStereoPanner();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createStereoPanner`
 */
web.BaseAudioContext.create_stereo_panner = (function web$BaseAudioContext$create_stereo_panner(this$){
return this$.createStereoPanner();
});
/**
 * Method.
 * 
 *   A `web.WaveShaperNode`.
 * 
 *   `baseAudioCtx.createWaveShaper();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/createWaveShaper`
 */
web.BaseAudioContext.create_wave_shaper = (function web$BaseAudioContext$create_wave_shaper(this$){
return this$.createWaveShaper();
});
/**
 * Method.
 * 
 *   This is the preferred method of creating an audio source for
 *   Audio API from an audio track. This method only works on complete
 *   data, not fragments of audio file data.
 * 
 *   `Older callback syntax:
 * 
 * 
 * 
 *   baseAudioContext.decodeAudioData(ArrayBuffer, successCallback, errorCallback);
 * 
 *   Newer promise-based syntax:
 * 
 * 
 * 
 *   Promise<decodedData> baseAudioContext.decodeAudioData(ArrayBuffer);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/decodeAudioData`
 */
web.BaseAudioContext.decode_audio_data = (function web$BaseAudioContext$decode_audio_data(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44931 = arguments.length;
var i__42557__auto___44932 = (0);
while(true){
if((i__42557__auto___44932 < len__42556__auto___44931)){
args__42563__auto__.push((arguments[i__42557__auto___44932]));

var G__44933 = (i__42557__auto___44932 + (1));
i__42557__auto___44932 = G__44933;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.BaseAudioContext.decode_audio_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.BaseAudioContext.decode_audio_data.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.decodeAudioData,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.BaseAudioContext.decode_audio_data.cljs$lang$maxFixedArity = (1);

web.BaseAudioContext.decode_audio_data.cljs$lang$applyTo = (function (seq44929){
var G__44930 = cljs.core.first.call(null,seq44929);
var seq44929__$1 = cljs.core.next.call(null,seq44929);
return web.BaseAudioContext.decode_audio_data.cljs$core$IFn$_invoke$arity$variadic(G__44930,seq44929__$1);
});

/**
 * Property.
 * 
 *   The audioWorklet read-only property of the `web.BaseAudioContext`
 *   returns an instance of `audio.AudioWorklet` that can be used
 *   adding `audio.AudioWorkletProcessor`-derived classes which implement
 *   audio processing.
 * 
 *   `baseAudioContextInstance.audioWorklet;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/audioWorklet`
 */
web.BaseAudioContext.audio_worklet = (function web$BaseAudioContext$audio_worklet(this$){
return this$.audioWorklet();
});
/**
 * Property.
 * 
 *   The audioWorklet read-only property of the `web.BaseAudioContext`
 *   returns an instance of `audio.AudioWorklet` that can be used
 *   adding `audio.AudioWorkletProcessor`-derived classes which implement
 *   audio processing.
 * 
 *   `baseAudioContextInstance.audioWorklet;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/audioWorklet`
 */
web.BaseAudioContext.set_audio_worklet_BANG_ = (function web$BaseAudioContext$set_audio_worklet_BANG_(this$,val){
return (this$["audioWorklet"] = val);
});
/**
 * Property.
 * 
 *   The currentTime read-only property of the `web.BaseAudioContext`
 *   returns a double representing an ever-increasing hardware timestamp
 *   seconds that can be used for scheduling audio playback, visualizing
 *   etc. It starts at 0.
 * 
 *   `var curTime = baseAudioContext.currentTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/currentTime`
 */
web.BaseAudioContext.current_time = (function web$BaseAudioContext$current_time(this$){
return this$.currentTime();
});
/**
 * Property.
 * 
 *   The currentTime read-only property of the `web.BaseAudioContext`
 *   returns a double representing an ever-increasing hardware timestamp
 *   seconds that can be used for scheduling audio playback, visualizing
 *   etc. It starts at 0.
 * 
 *   `var curTime = baseAudioContext.currentTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/currentTime`
 */
web.BaseAudioContext.set_current_time_BANG_ = (function web$BaseAudioContext$set_current_time_BANG_(this$,val){
return (this$["currentTime"] = val);
});
/**
 * Property.
 * 
 *   An `audio.AudioDestinationNode`.
 * 
 *   `baseAudioContext.destination;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/destination`
 */
web.BaseAudioContext.destination = (function web$BaseAudioContext$destination(this$){
return this$.destination();
});
/**
 * Property.
 * 
 *   An `audio.AudioDestinationNode`.
 * 
 *   `baseAudioContext.destination;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/destination`
 */
web.BaseAudioContext.set_destination_BANG_ = (function web$BaseAudioContext$set_destination_BANG_(this$,val){
return (this$["destination"] = val);
});
/**
 * Property.
 * 
 *   An `audio.AudioListener` object.
 * 
 *   `baseAudioContext.listener;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/listener`
 */
web.BaseAudioContext.listener = (function web$BaseAudioContext$listener(this$){
return this$.listener();
});
/**
 * Property.
 * 
 *   An `audio.AudioListener` object.
 * 
 *   `baseAudioContext.listener;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/listener`
 */
web.BaseAudioContext.set_listener_BANG_ = (function web$BaseAudioContext$set_listener_BANG_(this$,val){
return (this$["listener"] = val);
});
/**
 * Property.
 * 
 *   The sampleRate property of the `web.BaseAudioContext` interface
 *   a floating point number representing the sample rate, in samples
 *   second, used by all nodes in this audio context.
 * 
 *   `baseAudioContext.sampleRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/sampleRate`
 */
web.BaseAudioContext.sample_rate = (function web$BaseAudioContext$sample_rate(this$){
return this$.sampleRate();
});
/**
 * Property.
 * 
 *   The sampleRate property of the `web.BaseAudioContext` interface
 *   a floating point number representing the sample rate, in samples
 *   second, used by all nodes in this audio context.
 * 
 *   `baseAudioContext.sampleRate;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/sampleRate`
 */
web.BaseAudioContext.set_sample_rate_BANG_ = (function web$BaseAudioContext$set_sample_rate_BANG_(this$,val){
return (this$["sampleRate"] = val);
});
/**
 * Property.
 * 
 *   A `dom.DOMString`. Possible values are:
 * 
 *   `baseAudioContext.state;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/state`
 */
web.BaseAudioContext.state = (function web$BaseAudioContext$state(this$){
return this$.state();
});
/**
 * Property.
 * 
 *   A `dom.DOMString`. Possible values are:
 * 
 *   `baseAudioContext.state;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/state`
 */
web.BaseAudioContext.set_state_BANG_ = (function web$BaseAudioContext$set_state_BANG_(this$,val){
return (this$["state"] = val);
});
/**
 * Property.
 * 
 *   The following snippet is taken from our AudioContext states demo
 *   it running live.) The onstatechange hander is used to log the
 *   `web.state` to the console every time it changes.
 * 
 *   `baseAudioContext.onstatechange = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/onstatechange`
 */
web.BaseAudioContext.onstatechange = (function web$BaseAudioContext$onstatechange(this$){
return this$.onstatechange();
});
/**
 * Property.
 * 
 *   The following snippet is taken from our AudioContext states demo
 *   it running live.) The onstatechange hander is used to log the
 *   `web.state` to the console every time it changes.
 * 
 *   `baseAudioContext.onstatechange = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/BaseAudioContext/onstatechange`
 */
web.BaseAudioContext.set_onstatechange_BANG_ = (function web$BaseAudioContext$set_onstatechange_BANG_(this$,val){
return (this$["onstatechange"] = val);
});

//# sourceMappingURL=BaseAudioContext.js.map?rel=1565798818029
