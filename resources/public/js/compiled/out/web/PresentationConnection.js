// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PresentationConnection');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   When the close() method is called on a `web.PresentationConnection`,
 *   user agent begins the process of closing the connection by sending
 *   empty closeMessage with the closeReason set to closed.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/close`
 */
web.PresentationConnection.close = (function web$PresentationConnection$close(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52946 = arguments.length;
var i__42557__auto___52947 = (0);
while(true){
if((i__42557__auto___52947 < len__42556__auto___52946)){
args__42563__auto__.push((arguments[i__42557__auto___52947]));

var G__52948 = (i__42557__auto___52947 + (1));
i__42557__auto___52947 = G__52948;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.PresentationConnection.close.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.PresentationConnection.close.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.close,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.PresentationConnection.close.cljs$lang$maxFixedArity = (1);

web.PresentationConnection.close.cljs$lang$applyTo = (function (seq52944){
var G__52945 = cljs.core.first.call(null,seq52944);
var seq52944__$1 = cljs.core.next.call(null,seq52944);
return web.PresentationConnection.close.cljs$core$IFn$_invoke$arity$variadic(G__52945,seq52944__$1);
});

/**
 * Method.
 * 
 *   The send() method of the `web.PresentationConnection` interface
 *   a controlling browsing context to send binary or text data to
 *   presenting browsing context.
 * 
 *   `PresentationConnection.send(data);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/send`
 */
web.PresentationConnection.send = (function web$PresentationConnection$send(this$,data){
return this$.send(data);
});
/**
 * Method.
 * 
 *   When the terminate() method is called on a `web.PresentationConnection`,
 *   user agent begins the process of terminating the presentation.
 *   exact process differs depending on whether terminate() is called
 *   the controlling or the presenting context.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/terminate`
 */
web.PresentationConnection.terminate = (function web$PresentationConnection$terminate(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52951 = arguments.length;
var i__42557__auto___52952 = (0);
while(true){
if((i__42557__auto___52952 < len__42556__auto___52951)){
args__42563__auto__.push((arguments[i__42557__auto___52952]));

var G__52953 = (i__42557__auto___52952 + (1));
i__42557__auto___52952 = G__52953;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.PresentationConnection.terminate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.PresentationConnection.terminate.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.terminate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.PresentationConnection.terminate.cljs$lang$maxFixedArity = (1);

web.PresentationConnection.terminate.cljs$lang$applyTo = (function (seq52949){
var G__52950 = cljs.core.first.call(null,seq52949);
var seq52949__$1 = cljs.core.next.call(null,seq52949);
return web.PresentationConnection.terminate.cljs$core$IFn$_invoke$arity$variadic(G__52950,seq52949__$1);
});

/**
 * Property.
 * 
 *   When a PresentationConnection object is created, its binaryType
 *   attribute MUST be set to the string \"arraybuffer\". Upon getting,
 *   attribute MUST return its most recent value (the value it was
 *   set as). Upon setting, the user agent MUST set the IDL attribute
 *   the new value.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/binaryType`
 */
web.PresentationConnection.binary_type = (function web$PresentationConnection$binary_type(this$){
return this$.binaryType();
});
/**
 * Property.
 * 
 *   When a PresentationConnection object is created, its binaryType
 *   attribute MUST be set to the string \"arraybuffer\". Upon getting,
 *   attribute MUST return its most recent value (the value it was
 *   set as). Upon setting, the user agent MUST set the IDL attribute
 *   the new value.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/binaryType`
 */
web.PresentationConnection.set_binary_type_BANG_ = (function web$PresentationConnection$set_binary_type_BANG_(this$,val){
return (this$["binaryType"] = val);
});
/**
 * Property.
 * 
 *   The state attribute reflects the presentation connection's current
 *   Depending on the current PresentationConnectionState, the state
 *   can hold one of the following values.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/state`
 */
web.PresentationConnection.state = (function web$PresentationConnection$state(this$){
return this$.state();
});
/**
 * Property.
 * 
 *   The state attribute reflects the presentation connection's current
 *   Depending on the current PresentationConnectionState, the state
 *   can hold one of the following values.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/state`
 */
web.PresentationConnection.set_state_BANG_ = (function web$PresentationConnection$set_state_BANG_(this$,val){
return (this$["state"] = val);
});
/**
 * Property.
 * 
 *   The url readonly property of the `web.PresentationConnection`
 *   returns the URL used to create or reconnect to the presentation.
 * 
 *   `var url = PresentationConnection.url`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/url`
 */
web.PresentationConnection.url = (function web$PresentationConnection$url(this$){
return this$.url();
});
/**
 * Property.
 * 
 *   The url readonly property of the `web.PresentationConnection`
 *   returns the URL used to create or reconnect to the presentation.
 * 
 *   `var url = PresentationConnection.url`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/url`
 */
web.PresentationConnection.set_url_BANG_ = (function web$PresentationConnection$set_url_BANG_(this$,val){
return (this$["url"] = val);
});
/**
 * Property.
 * 
 *   The id attribute specifies the presentation identifier of a presentation
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/id`
 */
web.PresentationConnection.id = (function web$PresentationConnection$id(this$){
return this$.id();
});
/**
 * Property.
 * 
 *   The id attribute specifies the presentation identifier of a presentation
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationConnection/id`
 */
web.PresentationConnection.set_id_BANG_ = (function web$PresentationConnection$set_id_BANG_(this$,val){
return (this$["id"] = val);
});

//# sourceMappingURL=PresentationConnection.js.map?rel=1565798860763
