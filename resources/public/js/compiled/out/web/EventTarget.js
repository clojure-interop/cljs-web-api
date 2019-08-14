// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.EventTarget');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The EventTarget() constructor creates a new `web.EventTarget` object instance.
 * 
 *   None.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/EventTarget`
 */
web.EventTarget.constructor$ = EventTarget;
/**
 * Method.
 * 
 *   The `web.EventTarget` method addEventListener() sets up a function
 *   will be called whenever the specified event is delivered to the
 * 
 *   `target.addEventListener(type, listener[, options]);
 *   target.addEventListener(type, listener[, useCapture]);
 *   target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener`
 */
web.EventTarget.add_event_listener = (function web$EventTarget$add_event_listener(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44442 = arguments.length;
var i__42557__auto___44443 = (0);
while(true){
if((i__42557__auto___44443 < len__42556__auto___44442)){
args__42563__auto__.push((arguments[i__42557__auto___44443]));

var G__44444 = (i__42557__auto___44443 + (1));
i__42557__auto___44443 = G__44444;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.EventTarget.add_event_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.EventTarget.add_event_listener.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.addEventListener,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.EventTarget.add_event_listener.cljs$lang$maxFixedArity = (1);

web.EventTarget.add_event_listener.cljs$lang$applyTo = (function (seq44440){
var G__44441 = cljs.core.first.call(null,seq44440);
var seq44440__$1 = cljs.core.next.call(null,seq44440);
return web.EventTarget.add_event_listener.cljs$core$IFn$_invoke$arity$variadic(G__44441,seq44440__$1);
});

/**
 * Method.
 * 
 *   Dispatches an `web.Event` at the specified `web.EventTarget`,
 *   invoking the affected `web.EventListener`s in the appropriate
 *   The normal event processing rules (including the capturing and
 *   bubbling phase) also apply to events dispatched manually with
 * 
 *   `cancelled = !target.dispatchEvent(event)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent`
 */
web.EventTarget.dispatch_event = (function web$EventTarget$dispatch_event(this$,event){
return this$.dispatchEvent(event);
});
/**
 * Method.
 * 
 *   The EventTarget.removeEventListener() method removes from the
 *   an event listener previously registered with `web.EventTarget.addEventListener()`.
 *   event listener to be removed is identified using a combination
 *   the event type, the event listener function itself, and various
 *   options that may affect the matching process; see Matching event
 *   for removal
 * 
 *   `target.removeEventListener(type, listener[, options]);
 *   target.removeEventListener(type, listener[, useCapture]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener`
 */
web.EventTarget.remove_event_listener = (function web$EventTarget$remove_event_listener(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44447 = arguments.length;
var i__42557__auto___44448 = (0);
while(true){
if((i__42557__auto___44448 < len__42556__auto___44447)){
args__42563__auto__.push((arguments[i__42557__auto___44448]));

var G__44449 = (i__42557__auto___44448 + (1));
i__42557__auto___44448 = G__44449;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.EventTarget.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.EventTarget.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.removeEventListener,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.EventTarget.remove_event_listener.cljs$lang$maxFixedArity = (1);

web.EventTarget.remove_event_listener.cljs$lang$applyTo = (function (seq44445){
var G__44446 = cljs.core.first.call(null,seq44445);
var seq44445__$1 = cljs.core.next.call(null,seq44445);
return web.EventTarget.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic(G__44446,seq44445__$1);
});


//# sourceMappingURL=EventTarget.js.map?rel=1565798814141
