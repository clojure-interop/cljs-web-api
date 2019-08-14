// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCSessionDescription');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The RTCSessionDescription() constructor creates a new `rtc.RTCSessionDescription` with its properties initialized as described in the specified object.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/RTCSessionDescription`
 */
rtc.RTCSessionDescription.constructor$ = RTCSessionDescription;
/**
 * Method.
 * 
 *   The RTCSessionDescription.toJSON() method generates a JSON description
 *   the object. Both properties, `web.type` and `web.sdp`, are contained
 *   the generated JSON.
 * 
 *   `var jsonValue = sd.toJSON();
 * 
 *   The result value is a `web.JSON` object containing the following values:
 * 
 * 
 *   \"type\", containing the value of the `rtc.RTCSessionDescription.type` property and can be one of the following values: \"offer\", \"answer\", \"pranswer\" or null.
 *   \"sdp\", containing a `dom.DOMString`, or null, with the SDP message corresponding to `rtc.RTCSessionDescription.sdp` property.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/toJSON`
 */
rtc.RTCSessionDescription.to_json = (function rtc$RTCSessionDescription$to_json(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52549 = arguments.length;
var i__42557__auto___52550 = (0);
while(true){
if((i__42557__auto___52550 < len__42556__auto___52549)){
args__42563__auto__.push((arguments[i__42557__auto___52550]));

var G__52551 = (i__42557__auto___52550 + (1));
i__42557__auto___52550 = G__52551;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return rtc.RTCSessionDescription.to_json.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

rtc.RTCSessionDescription.to_json.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.toJSON,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

rtc.RTCSessionDescription.to_json.cljs$lang$maxFixedArity = (1);

rtc.RTCSessionDescription.to_json.cljs$lang$applyTo = (function (seq52547){
var G__52548 = cljs.core.first.call(null,seq52547);
var seq52547__$1 = cljs.core.next.call(null,seq52547);
return rtc.RTCSessionDescription.to_json.cljs$core$IFn$_invoke$arity$variadic(G__52548,seq52547__$1);
});

/**
 * Method.
 * 
 *   The RTCSessionDescription() constructor creates a new `rtc.RTCSessionDescription`
 *   its properties initialized as described in the specified object.
 * 
 *   `sessionDescription = new RTCSessionDescription(rtcSessionDescriptionInit);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/RTCSessionDescription`
 */
rtc.RTCSessionDescription.rtc_session_description = (function rtc$RTCSessionDescription$rtc_session_description(this$,rtc_session_description_init){
return this$.RTCSessionDescription(rtc_session_description_init);
});
/**
 * Property.
 * 
 *   The property RTCSessionDescription.sdp is a read-only `dom.DOMString`
 *   the SDP which describes the session.
 * 
 *   `var value = sessionDescription.sdp;
 *   sessionDescription.sdp = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/sdp`
 */
rtc.RTCSessionDescription.sdp = (function rtc$RTCSessionDescription$sdp(this$){
return this$.sdp();
});
/**
 * Property.
 * 
 *   The property RTCSessionDescription.sdp is a read-only `dom.DOMString`
 *   the SDP which describes the session.
 * 
 *   `var value = sessionDescription.sdp;
 *   sessionDescription.sdp = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/sdp`
 */
rtc.RTCSessionDescription.set_sdp_BANG_ = (function rtc$RTCSessionDescription$set_sdp_BANG_(this$,val){
return (this$["sdp"] = val);
});
/**
 * Property.
 * 
 *   The property RTCSessionDescription.type is a read-only value
 *   type RTCSdpType which describes the description's type.
 * 
 *   `var value = sessionDescription.type;
 *   sessionDescription.type = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/type`
 */
rtc.RTCSessionDescription.type = (function rtc$RTCSessionDescription$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   The property RTCSessionDescription.type is a read-only value
 *   type RTCSdpType which describes the description's type.
 * 
 *   `var value = sessionDescription.type;
 *   sessionDescription.type = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescription/type`
 */
rtc.RTCSessionDescription.set_type_BANG_ = (function rtc$RTCSessionDescription$set_type_BANG_(this$,val){
return (this$["type"] = val);
});

//# sourceMappingURL=RTCSessionDescription.js.map?rel=1565798855579
