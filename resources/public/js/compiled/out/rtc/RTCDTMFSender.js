// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCDTMFSender');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The insertDTMF() method on the `rtc.RTCDTMFSender` interface
 *   sending tones to the remote peer over the `rtc.RTCPeerConnection`.
 *   of the tones is performed asynchronously, with tonechange events
 *   to the RTCDTMFSender every time a tone starts or ends.
 * 
 *   `RTCDTMFSender.insertDTMF(tones[, duration[, interToneGap]]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender/insertDTMF`
 */
rtc.RTCDTMFSender.insert_dtmf = (function rtc$RTCDTMFSender$insert_dtmf(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44170 = arguments.length;
var i__42557__auto___44171 = (0);
while(true){
if((i__42557__auto___44171 < len__42556__auto___44170)){
args__42563__auto__.push((arguments[i__42557__auto___44171]));

var G__44172 = (i__42557__auto___44171 + (1));
i__42557__auto___44171 = G__44172;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return rtc.RTCDTMFSender.insert_dtmf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

rtc.RTCDTMFSender.insert_dtmf.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.insertDTMF,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

rtc.RTCDTMFSender.insert_dtmf.cljs$lang$maxFixedArity = (1);

rtc.RTCDTMFSender.insert_dtmf.cljs$lang$applyTo = (function (seq44168){
var G__44169 = cljs.core.first.call(null,seq44168);
var seq44168__$1 = cljs.core.next.call(null,seq44168);
return rtc.RTCDTMFSender.insert_dtmf.cljs$core$IFn$_invoke$arity$variadic(G__44169,seq44168__$1);
});

/**
 * Property.
 * 
 *   The ontonechange property of the `rtc.RTCDTMFSender` interface
 *   used to set the event handler for the tonechange event, which
 *   sent to the RTCDTMFSender each time a tone begins or ends. The
 *   handler receives as input a single parameter of type `rtc.RTCDTMFToneChangeEvent`,
 *   describes the change.
 * 
 *   `RTCDTMFSender.ontonechange = toneChangeHandlerFunction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender/ontonechange`
 */
rtc.RTCDTMFSender.ontonechange = (function rtc$RTCDTMFSender$ontonechange(this$){
return this$.ontonechange();
});
/**
 * Property.
 * 
 *   The ontonechange property of the `rtc.RTCDTMFSender` interface
 *   used to set the event handler for the tonechange event, which
 *   sent to the RTCDTMFSender each time a tone begins or ends. The
 *   handler receives as input a single parameter of type `rtc.RTCDTMFToneChangeEvent`,
 *   describes the change.
 * 
 *   `RTCDTMFSender.ontonechange = toneChangeHandlerFunction;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender/ontonechange`
 */
rtc.RTCDTMFSender.set_ontonechange_BANG_ = (function rtc$RTCDTMFSender$set_ontonechange_BANG_(this$,val){
return (this$["ontonechange"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCDTMFSender` interface's toneBuffer property returns
 *   string containing a list of the DTMF tones currently queued for
 *   to the remote peer over the `rtc.RTCPeerConnection`. To place
 *   into the buffer, call `web.insertDTMF()`.
 * 
 *   `var toneBuffer = RTCDTMFSender.toneBuffer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender/toneBuffer`
 */
rtc.RTCDTMFSender.tone_buffer = (function rtc$RTCDTMFSender$tone_buffer(this$){
return this$.toneBuffer();
});
/**
 * Property.
 * 
 *   The `rtc.RTCDTMFSender` interface's toneBuffer property returns
 *   string containing a list of the DTMF tones currently queued for
 *   to the remote peer over the `rtc.RTCPeerConnection`. To place
 *   into the buffer, call `web.insertDTMF()`.
 * 
 *   `var toneBuffer = RTCDTMFSender.toneBuffer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDTMFSender/toneBuffer`
 */
rtc.RTCDTMFSender.set_tone_buffer_BANG_ = (function rtc$RTCDTMFSender$set_tone_buffer_BANG_(this$,val){
return (this$["toneBuffer"] = val);
});

//# sourceMappingURL=RTCDTMFSender.js.map?rel=1565798812066
