// Compiled by ClojureScript 1.9.946 {}
goog.provide('audio.AudioNode');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   If the destination is a node, connect() returns a reference to
 *   destination `audio.AudioNode` object, allowing you to chain multiple
 *   calls. In some browsers, older implementations of this interface
 *   `web.undefined`.
 * 
 *   `var destinationNode = AudioNode.connect(destination, outputIndex, inputIndex);
 * 
 *   AudioNode.connect(destination, outputIndex);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/connect`
 */
audio.AudioNode.connect = (function audio$AudioNode$connect(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52919 = arguments.length;
var i__42557__auto___52920 = (0);
while(true){
if((i__42557__auto___52920 < len__42556__auto___52919)){
args__42563__auto__.push((arguments[i__42557__auto___52920]));

var G__52921 = (i__42557__auto___52920 + (1));
i__42557__auto___52920 = G__52921;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return audio.AudioNode.connect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

audio.AudioNode.connect.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.connect,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

audio.AudioNode.connect.cljs$lang$maxFixedArity = (1);

audio.AudioNode.connect.cljs$lang$applyTo = (function (seq52917){
var G__52918 = cljs.core.first.call(null,seq52917);
var seq52917__$1 = cljs.core.next.call(null,seq52917);
return audio.AudioNode.connect.cljs$core$IFn$_invoke$arity$variadic(G__52918,seq52917__$1);
});

/**
 * Method.
 * 
 *   `web.undefined`
 * 
 *   `AudioNode.disconnect();
 * 
 *   AudioNode.disconnect(output);
 * 
 *   AudioNode.disconnect(destination);
 * 
 *   AudioNode.disconnect(destination, output);
 * 
 *   AudioNode.disconnect(destination, output, input);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/disconnect`
 */
audio.AudioNode.disconnect = (function audio$AudioNode$disconnect(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52924 = arguments.length;
var i__42557__auto___52925 = (0);
while(true){
if((i__42557__auto___52925 < len__42556__auto___52924)){
args__42563__auto__.push((arguments[i__42557__auto___52925]));

var G__52926 = (i__42557__auto___52925 + (1));
i__42557__auto___52925 = G__52926;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return audio.AudioNode.disconnect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

audio.AudioNode.disconnect.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.disconnect,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

audio.AudioNode.disconnect.cljs$lang$maxFixedArity = (1);

audio.AudioNode.disconnect.cljs$lang$applyTo = (function (seq52922){
var G__52923 = cljs.core.first.call(null,seq52922);
var seq52922__$1 = cljs.core.next.call(null,seq52922);
return audio.AudioNode.disconnect.cljs$core$IFn$_invoke$arity$variadic(G__52923,seq52922__$1);
});

/**
 * Property.
 * 
 *   The channelCount property of the `audio.AudioNode` interface
 *   an integer used to determine how many channels are used when
 *   and down-mixing connections to any inputs to the node.
 * 
 *   `var oscillator = audioCtx.createOscillator();
 *   var channels = oscillator.channelCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/channelCount`
 */
audio.AudioNode.channel_count = (function audio$AudioNode$channel_count(this$){
return this$.channelCount();
});
/**
 * Property.
 * 
 *   The channelCount property of the `audio.AudioNode` interface
 *   an integer used to determine how many channels are used when
 *   and down-mixing connections to any inputs to the node.
 * 
 *   `var oscillator = audioCtx.createOscillator();
 *   var channels = oscillator.channelCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/channelCount`
 */
audio.AudioNode.set_channel_count_BANG_ = (function audio$AudioNode$set_channel_count_BANG_(this$,val){
return (this$["channelCount"] = val);
});
/**
 * Property.
 * 
 *   The possible values of channelCountMode and their meanings are:
 * 
 *   `var oscillator = audioCtx.createOscillator();
 *   oscillator.channelCountMode = 'explicit';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/channelCountMode`
 */
audio.AudioNode.channel_count_mode = (function audio$AudioNode$channel_count_mode(this$){
return this$.channelCountMode();
});
/**
 * Property.
 * 
 *   The possible values of channelCountMode and their meanings are:
 * 
 *   `var oscillator = audioCtx.createOscillator();
 *   oscillator.channelCountMode = 'explicit';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/channelCountMode`
 */
audio.AudioNode.set_channel_count_mode_BANG_ = (function audio$AudioNode$set_channel_count_mode_BANG_(this$,val){
return (this$["channelCountMode"] = val);
});
/**
 * Property.
 * 
 *   When the number of channels doesn't match between an input and
 *   output, up- or down-mixing happens according the following rules.
 *   can be somewhat controlled by setting the `audio.AudioNode.channelInterpretation`
 *   to speakers or discrete:
 * 
 *   `var oscillator = audioCtx.createOscillator();
 *   oscillator.channelInterpretation = 'discrete';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/channelInterpretation`
 */
audio.AudioNode.channel_interpretation = (function audio$AudioNode$channel_interpretation(this$){
return this$.channelInterpretation();
});
/**
 * Property.
 * 
 *   When the number of channels doesn't match between an input and
 *   output, up- or down-mixing happens according the following rules.
 *   can be somewhat controlled by setting the `audio.AudioNode.channelInterpretation`
 *   to speakers or discrete:
 * 
 *   `var oscillator = audioCtx.createOscillator();
 *   oscillator.channelInterpretation = 'discrete';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/channelInterpretation`
 */
audio.AudioNode.set_channel_interpretation_BANG_ = (function audio$AudioNode$set_channel_interpretation_BANG_(this$,val){
return (this$["channelInterpretation"] = val);
});
/**
 * Property.
 * 
 *   The read-only context property of the `audio.AudioNode` interface
 *   the associated `web.BaseAudioContext`, that is the object representing
 *   processing graph the node is participating in.
 * 
 *   `var aContext = anAudioNode.context;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/context`
 */
audio.AudioNode.context = (function audio$AudioNode$context(this$){
return this$.context();
});
/**
 * Property.
 * 
 *   The read-only context property of the `audio.AudioNode` interface
 *   the associated `web.BaseAudioContext`, that is the object representing
 *   processing graph the node is participating in.
 * 
 *   `var aContext = anAudioNode.context;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/context`
 */
audio.AudioNode.set_context_BANG_ = (function audio$AudioNode$set_context_BANG_(this$,val){
return (this$["context"] = val);
});
/**
 * Property.
 * 
 *   The numberOfInputs property of the `audio.AudioNode` interface
 *   the number of inputs feeding the node.
 * 
 *   `var numInputs = audioNode.numberOfInputs;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/numberOfInputs`
 */
audio.AudioNode.number_of_inputs = (function audio$AudioNode$number_of_inputs(this$){
return this$.numberOfInputs();
});
/**
 * Property.
 * 
 *   The numberOfInputs property of the `audio.AudioNode` interface
 *   the number of inputs feeding the node.
 * 
 *   `var numInputs = audioNode.numberOfInputs;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/numberOfInputs`
 */
audio.AudioNode.set_number_of_inputs_BANG_ = (function audio$AudioNode$set_number_of_inputs_BANG_(this$,val){
return (this$["numberOfInputs"] = val);
});
/**
 * Property.
 * 
 *   The numberOfOutputs property of the `audio.AudioNode` interface
 *   the number of outputs coming out of the node.
 * 
 *   `var numOutputs = audioNode.numberOfOutputs;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/numberOfOutputs`
 */
audio.AudioNode.number_of_outputs = (function audio$AudioNode$number_of_outputs(this$){
return this$.numberOfOutputs();
});
/**
 * Property.
 * 
 *   The numberOfOutputs property of the `audio.AudioNode` interface
 *   the number of outputs coming out of the node.
 * 
 *   `var numOutputs = audioNode.numberOfOutputs;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioNode/numberOfOutputs`
 */
audio.AudioNode.set_number_of_outputs_BANG_ = (function audio$AudioNode$set_number_of_outputs_BANG_(this$,val){
return (this$["numberOfOutputs"] = val);
});

//# sourceMappingURL=AudioNode.js.map?rel=1565798860493
