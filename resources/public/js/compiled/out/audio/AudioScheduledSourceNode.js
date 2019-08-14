// Compiled by ClojureScript 1.9.946 {}
goog.provide('audio.AudioScheduledSourceNode');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   `web.undefined`
 * 
 *   `AudioScheduledSourceNode.start([when [, offset [, duration]]]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode/start`
 */
audio.AudioScheduledSourceNode.start = (function audio$AudioScheduledSourceNode$start(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44145 = arguments.length;
var i__42557__auto___44146 = (0);
while(true){
if((i__42557__auto___44146 < len__42556__auto___44145)){
args__42563__auto__.push((arguments[i__42557__auto___44146]));

var G__44147 = (i__42557__auto___44146 + (1));
i__42557__auto___44146 = G__44147;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return audio.AudioScheduledSourceNode.start.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

audio.AudioScheduledSourceNode.start.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.start,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

audio.AudioScheduledSourceNode.start.cljs$lang$maxFixedArity = (1);

audio.AudioScheduledSourceNode.start.cljs$lang$applyTo = (function (seq44143){
var G__44144 = cljs.core.first.call(null,seq44143);
var seq44143__$1 = cljs.core.next.call(null,seq44143);
return audio.AudioScheduledSourceNode.start.cljs$core$IFn$_invoke$arity$variadic(G__44144,seq44143__$1);
});

/**
 * Method.
 * 
 *   The stop() method on `audio.AudioScheduledSourceNode` schedules
 *   sound to cease playback at the specified time. If no time is
 *   then the sound stops playing immediately.
 * 
 *   `AudioScheduledSourceNode.stop([when]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode/stop`
 */
audio.AudioScheduledSourceNode.stop = (function audio$AudioScheduledSourceNode$stop(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44150 = arguments.length;
var i__42557__auto___44151 = (0);
while(true){
if((i__42557__auto___44151 < len__42556__auto___44150)){
args__42563__auto__.push((arguments[i__42557__auto___44151]));

var G__44152 = (i__42557__auto___44151 + (1));
i__42557__auto___44151 = G__44152;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return audio.AudioScheduledSourceNode.stop.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

audio.AudioScheduledSourceNode.stop.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.stop,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

audio.AudioScheduledSourceNode.stop.cljs$lang$maxFixedArity = (1);

audio.AudioScheduledSourceNode.stop.cljs$lang$applyTo = (function (seq44148){
var G__44149 = cljs.core.first.call(null,seq44148);
var seq44148__$1 = cljs.core.next.call(null,seq44148);
return audio.AudioScheduledSourceNode.stop.cljs$core$IFn$_invoke$arity$variadic(G__44149,seq44148__$1);
});

/**
 * Property.
 * 
 *   The onended event handler for the AudioScheduledSourceNode interface
 *   an `web.EventHandler` to be executed when the ended event occurs
 *   the node. This event is sent to the node when the concrete interface
 *   as `audio.AudioBufferSourceNode`, `web.OscillatorNode`, or `web.ConstantSourceNode`)
 *   that it has stopped playing.
 * 
 *   `AudioScheduledSourceNode.onended = EventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode/onended`
 */
audio.AudioScheduledSourceNode.onended = (function audio$AudioScheduledSourceNode$onended(this$){
return this$.onended();
});
/**
 * Property.
 * 
 *   The onended event handler for the AudioScheduledSourceNode interface
 *   an `web.EventHandler` to be executed when the ended event occurs
 *   the node. This event is sent to the node when the concrete interface
 *   as `audio.AudioBufferSourceNode`, `web.OscillatorNode`, or `web.ConstantSourceNode`)
 *   that it has stopped playing.
 * 
 *   `AudioScheduledSourceNode.onended = EventHandler;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioScheduledSourceNode/onended`
 */
audio.AudioScheduledSourceNode.set_onended_BANG_ = (function audio$AudioScheduledSourceNode$set_onended_BANG_(this$,val){
return (this$["onended"] = val);
});

//# sourceMappingURL=AudioScheduledSourceNode.js.map?rel=1565798811938
