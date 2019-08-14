// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.AnalyserNode');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The AnalyserNode constructor of the Web Audio API creates a new `web.AnalyserNode` object instance.
 * 
 *   Inherits parameters from the `audio.AudioNodeOptions` dictionary.
 * 
 * 
 *   \tcontext
 *   \tA reference to an `audio.AudioContext` or `web.OfflineAudioContext`.
 *   \toptions Optional
 * 
 * 
 *   \t\tfftSize: The desired initial size of the FFT for frequency-domain analysis.
 *   \t\tThe default is 2048.
 *   \t\tmaxDecibels: The desired initial maximum power in dB for FFT analysis.
 *   \t\tThe default is -30.
 *   \t\tminDecibels: The desired initial minimum power in dB for FFT analysis.
 *   \t\tThe default is -100.
 *   \t\tsmoothingTimeConstant: The desired initial smoothing constant for the FFT analysis. The default is 0.8.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/AnalyserNode`
 */
web.AnalyserNode.constructor$ = AnalyserNode;
/**
 * Method.
 * 
 *   The getByteFrequencyData() method of the `web.AnalyserNode` interface
 *   the current frequency data into a `web.Uint8Array` (unsigned
 *   array) passed into it.
 * 
 *   `var audioCtx = new AudioContext();
 *   var analyser = audioCtx.createAnalyser();
 *   var dataArray = new Uint8Array(analyser.frequencyBinCount); // Uint8Array should be the same length as the frequencyBinCount
 * 
 *   void analyser.getByteFrequencyData(dataArray); // fill the Uint8Array with data returned from getByteFrequencyData()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteFrequencyData`
 */
web.AnalyserNode.get_byte_frequency_data = (function web$AnalyserNode$get_byte_frequency_data(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44837 = arguments.length;
var i__42557__auto___44838 = (0);
while(true){
if((i__42557__auto___44838 < len__42556__auto___44837)){
args__42563__auto__.push((arguments[i__42557__auto___44838]));

var G__44839 = (i__42557__auto___44838 + (1));
i__42557__auto___44838 = G__44839;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.AnalyserNode.get_byte_frequency_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.AnalyserNode.get_byte_frequency_data.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getByteFrequencyData,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.AnalyserNode.get_byte_frequency_data.cljs$lang$maxFixedArity = (1);

web.AnalyserNode.get_byte_frequency_data.cljs$lang$applyTo = (function (seq44835){
var G__44836 = cljs.core.first.call(null,seq44835);
var seq44835__$1 = cljs.core.next.call(null,seq44835);
return web.AnalyserNode.get_byte_frequency_data.cljs$core$IFn$_invoke$arity$variadic(G__44836,seq44835__$1);
});

/**
 * Method.
 * 
 *   The getByteTimeDomainData() method of the `web.AnalyserNode`
 *   copies the current waveform, or time-domain, data into a `web.Uint8Array`
 *   byte array) passed into it.
 * 
 *   `const audioCtx = new AudioContext();
 *   const analyser = audioCtx.createAnalyser();
 *   const dataArray = new Uint8Array(analyser.fftSize); // Uint8Array should be the same length as the fftSize
 *   analyser.getByteTimeDomainData(dataArray); // fill the Uint8Array with data returned from getByteTimeDomainData()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteTimeDomainData`
 */
web.AnalyserNode.get_byte_time_domain_data = (function web$AnalyserNode$get_byte_time_domain_data(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44842 = arguments.length;
var i__42557__auto___44843 = (0);
while(true){
if((i__42557__auto___44843 < len__42556__auto___44842)){
args__42563__auto__.push((arguments[i__42557__auto___44843]));

var G__44844 = (i__42557__auto___44843 + (1));
i__42557__auto___44843 = G__44844;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.AnalyserNode.get_byte_time_domain_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.AnalyserNode.get_byte_time_domain_data.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getByteTimeDomainData,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.AnalyserNode.get_byte_time_domain_data.cljs$lang$maxFixedArity = (1);

web.AnalyserNode.get_byte_time_domain_data.cljs$lang$applyTo = (function (seq44840){
var G__44841 = cljs.core.first.call(null,seq44840);
var seq44840__$1 = cljs.core.next.call(null,seq44840);
return web.AnalyserNode.get_byte_time_domain_data.cljs$core$IFn$_invoke$arity$variadic(G__44841,seq44840__$1);
});

/**
 * Method.
 * 
 *   The getFloatFrequencyData() method of the `web.AnalyserNode`
 *   copies the current frequency data into a `web.Float32Array` array
 *   into it.
 * 
 *   `var audioCtx = new AudioContext();
 *   var analyser = audioCtx.createAnalyser();
 *   var dataArray = new Float32Array(analyser.frequencyBinCount); // Float32Array should be the same length as the frequencyBinCount
 * 
 *   void analyser.getFloatFrequencyData(dataArray); // fill the Float32Array with data returned from getFloatFrequencyData()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getFloatFrequencyData`
 */
web.AnalyserNode.get_float_frequency_data = (function web$AnalyserNode$get_float_frequency_data(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44847 = arguments.length;
var i__42557__auto___44848 = (0);
while(true){
if((i__42557__auto___44848 < len__42556__auto___44847)){
args__42563__auto__.push((arguments[i__42557__auto___44848]));

var G__44849 = (i__42557__auto___44848 + (1));
i__42557__auto___44848 = G__44849;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.AnalyserNode.get_float_frequency_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.AnalyserNode.get_float_frequency_data.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getFloatFrequencyData,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.AnalyserNode.get_float_frequency_data.cljs$lang$maxFixedArity = (1);

web.AnalyserNode.get_float_frequency_data.cljs$lang$applyTo = (function (seq44845){
var G__44846 = cljs.core.first.call(null,seq44845);
var seq44845__$1 = cljs.core.next.call(null,seq44845);
return web.AnalyserNode.get_float_frequency_data.cljs$core$IFn$_invoke$arity$variadic(G__44846,seq44845__$1);
});

/**
 * Method.
 * 
 *   The getFloatTimeDomainData() method of the `web.AnalyserNode`
 *   copies the current waveform, or time-domain, data into a `web.Float32Array`
 *   passed into it.
 * 
 *   `var audioCtx = new AudioContext();
 *   var analyser = audioCtx.createAnalyser();
 *   var dataArray = new Float32Array(analyser.fftSize); // Float32Array needs to be the same length as the fftSize
 *   analyser.getFloatTimeDomainData(dataArray); // fill the Float32Array with data returned from getFloatTimeDomainData()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getFloatTimeDomainData`
 */
web.AnalyserNode.get_float_time_domain_data = (function web$AnalyserNode$get_float_time_domain_data(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44852 = arguments.length;
var i__42557__auto___44853 = (0);
while(true){
if((i__42557__auto___44853 < len__42556__auto___44852)){
args__42563__auto__.push((arguments[i__42557__auto___44853]));

var G__44854 = (i__42557__auto___44853 + (1));
i__42557__auto___44853 = G__44854;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.AnalyserNode.get_float_time_domain_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.AnalyserNode.get_float_time_domain_data.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getFloatTimeDomainData,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.AnalyserNode.get_float_time_domain_data.cljs$lang$maxFixedArity = (1);

web.AnalyserNode.get_float_time_domain_data.cljs$lang$applyTo = (function (seq44850){
var G__44851 = cljs.core.first.call(null,seq44850);
var seq44850__$1 = cljs.core.next.call(null,seq44850);
return web.AnalyserNode.get_float_time_domain_data.cljs$core$IFn$_invoke$arity$variadic(G__44851,seq44850__$1);
});

/**
 * Property.
 * 
 *   The fftSize property of the `web.AnalyserNode` interface is an
 *   long value and represents the window size in samples that is
 *   when performing a Fast Fourier Transform (FFT) to get frequency
 *   data.
 * 
 *   `var curValue = analyserNode.fftSize;
 *   analyserNode.fftSize = newValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize`
 */
web.AnalyserNode.fft_size = (function web$AnalyserNode$fft_size(this$){
return this$.fftSize();
});
/**
 * Property.
 * 
 *   The fftSize property of the `web.AnalyserNode` interface is an
 *   long value and represents the window size in samples that is
 *   when performing a Fast Fourier Transform (FFT) to get frequency
 *   data.
 * 
 *   `var curValue = analyserNode.fftSize;
 *   analyserNode.fftSize = newValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize`
 */
web.AnalyserNode.set_fft_size_BANG_ = (function web$AnalyserNode$set_fft_size_BANG_(this$,val){
return (this$["fftSize"] = val);
});
/**
 * Property.
 * 
 *   The frequencyBinCount read-only property of the `web.AnalyserNode`
 *   is an unsigned integer half that of the `web.AnalyserNode.fftSize`.
 *   generally equates to the number of data values you will have
 *   play with for the visualization.
 * 
 *   `var arrayLength = analyserNode.frequencyBinCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/frequencyBinCount`
 */
web.AnalyserNode.frequency_bin_count = (function web$AnalyserNode$frequency_bin_count(this$){
return this$.frequencyBinCount();
});
/**
 * Property.
 * 
 *   The frequencyBinCount read-only property of the `web.AnalyserNode`
 *   is an unsigned integer half that of the `web.AnalyserNode.fftSize`.
 *   generally equates to the number of data values you will have
 *   play with for the visualization.
 * 
 *   `var arrayLength = analyserNode.frequencyBinCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/frequencyBinCount`
 */
web.AnalyserNode.set_frequency_bin_count_BANG_ = (function web$AnalyserNode$set_frequency_bin_count_BANG_(this$,val){
return (this$["frequencyBinCount"] = val);
});
/**
 * Property.
 * 
 *   The maxDecibels property of the `web.AnalyserNode` interface
 *   a double value representing the maximum power value in the scaling
 *   for the FFT analysis data, for conversion to unsigned byte/float
 *   — basically, this specifies the maximum value for the range of
 *   when using getFloatFrequencyData() or getByteFrequencyData().
 * 
 *   `var curValue = analyserNode.maxDecibels;
 *   analyserNode.maxDecibels = newValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/maxDecibels`
 */
web.AnalyserNode.max_decibels = (function web$AnalyserNode$max_decibels(this$){
return this$.maxDecibels();
});
/**
 * Property.
 * 
 *   The maxDecibels property of the `web.AnalyserNode` interface
 *   a double value representing the maximum power value in the scaling
 *   for the FFT analysis data, for conversion to unsigned byte/float
 *   — basically, this specifies the maximum value for the range of
 *   when using getFloatFrequencyData() or getByteFrequencyData().
 * 
 *   `var curValue = analyserNode.maxDecibels;
 *   analyserNode.maxDecibels = newValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/maxDecibels`
 */
web.AnalyserNode.set_max_decibels_BANG_ = (function web$AnalyserNode$set_max_decibels_BANG_(this$,val){
return (this$["maxDecibels"] = val);
});
/**
 * Property.
 * 
 *   The minDecibels property of the `web.AnalyserNode` interface
 *   a double value representing the minimum power value in the scaling
 *   for the FFT analysis data, for conversion to unsigned byte/float
 *   — basically, this specifies the minimum value for the range of
 *   when using getFloatFrequencyData() or getByteFrequencyData().
 * 
 *   `var curValue = analyserNode.minDecibels;
 *   analyserNode.minDecibels = newValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/minDecibels`
 */
web.AnalyserNode.min_decibels = (function web$AnalyserNode$min_decibels(this$){
return this$.minDecibels();
});
/**
 * Property.
 * 
 *   The minDecibels property of the `web.AnalyserNode` interface
 *   a double value representing the minimum power value in the scaling
 *   for the FFT analysis data, for conversion to unsigned byte/float
 *   — basically, this specifies the minimum value for the range of
 *   when using getFloatFrequencyData() or getByteFrequencyData().
 * 
 *   `var curValue = analyserNode.minDecibels;
 *   analyserNode.minDecibels = newValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/minDecibels`
 */
web.AnalyserNode.set_min_decibels_BANG_ = (function web$AnalyserNode$set_min_decibels_BANG_(this$,val){
return (this$["minDecibels"] = val);
});
/**
 * Property.
 * 
 *   The smoothingTimeConstant property of the `web.AnalyserNode`
 *   is a double value representing the averaging constant with the
 *   analysis frame. It's basically an average between the current
 *   and the last buffer the AnalyserNode processed, and results in
 *   much smoother set of value changes over time.
 * 
 *   `var smoothValue = analyserNode.smoothingTimeConstant;
 *   analyserNode.smoothingTimeConstant = newValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/smoothingTimeConstant`
 */
web.AnalyserNode.smoothing_time_constant = (function web$AnalyserNode$smoothing_time_constant(this$){
return this$.smoothingTimeConstant();
});
/**
 * Property.
 * 
 *   The smoothingTimeConstant property of the `web.AnalyserNode`
 *   is a double value representing the averaging constant with the
 *   analysis frame. It's basically an average between the current
 *   and the last buffer the AnalyserNode processed, and results in
 *   much smoother set of value changes over time.
 * 
 *   `var smoothValue = analyserNode.smoothingTimeConstant;
 *   analyserNode.smoothingTimeConstant = newValue;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/smoothingTimeConstant`
 */
web.AnalyserNode.set_smoothing_time_constant_BANG_ = (function web$AnalyserNode$set_smoothing_time_constant_BANG_(this$,val){
return (this$["smoothingTimeConstant"] = val);
});

//# sourceMappingURL=AnalyserNode.js.map?rel=1565798817214
