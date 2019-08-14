// Compiled by ClojureScript 1.9.946 {}
goog.provide('css.CSSPseudoElement');
goog.require('cljs.core');
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
css.CSSPseudoElement.add_event_listener = (function css$CSSPseudoElement$add_event_listener(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50696 = arguments.length;
var i__42557__auto___50697 = (0);
while(true){
if((i__42557__auto___50697 < len__42556__auto___50696)){
args__42563__auto__.push((arguments[i__42557__auto___50697]));

var G__50698 = (i__42557__auto___50697 + (1));
i__42557__auto___50697 = G__50698;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return css.CSSPseudoElement.add_event_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

css.CSSPseudoElement.add_event_listener.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.addEventListener,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

css.CSSPseudoElement.add_event_listener.cljs$lang$maxFixedArity = (1);

css.CSSPseudoElement.add_event_listener.cljs$lang$applyTo = (function (seq50694){
var G__50695 = cljs.core.first.call(null,seq50694);
var seq50694__$1 = cljs.core.next.call(null,seq50694);
return css.CSSPseudoElement.add_event_listener.cljs$core$IFn$_invoke$arity$variadic(G__50695,seq50694__$1);
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
css.CSSPseudoElement.dispatch_event = (function css$CSSPseudoElement$dispatch_event(this$,event){
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
css.CSSPseudoElement.remove_event_listener = (function css$CSSPseudoElement$remove_event_listener(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50701 = arguments.length;
var i__42557__auto___50702 = (0);
while(true){
if((i__42557__auto___50702 < len__42556__auto___50701)){
args__42563__auto__.push((arguments[i__42557__auto___50702]));

var G__50703 = (i__42557__auto___50702 + (1));
i__42557__auto___50702 = G__50703;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return css.CSSPseudoElement.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

css.CSSPseudoElement.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.removeEventListener,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

css.CSSPseudoElement.remove_event_listener.cljs$lang$maxFixedArity = (1);

css.CSSPseudoElement.remove_event_listener.cljs$lang$applyTo = (function (seq50699){
var G__50700 = cljs.core.first.call(null,seq50699);
var seq50699__$1 = cljs.core.next.call(null,seq50699);
return css.CSSPseudoElement.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic(G__50700,seq50699__$1);
});

/**
 * Property.
 * 
 *   The element read-only property of the `css.CSSPseudoElement`
 *   returns a reference to the originating element of the pseudo-element,
 *   other words its parent element.
 * 
 *   `var originatingElement = cssPseudoElement.element;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/element`
 */
css.CSSPseudoElement.element = (function css$CSSPseudoElement$element(this$){
return this$.element();
});
/**
 * Property.
 * 
 *   The element read-only property of the `css.CSSPseudoElement`
 *   returns a reference to the originating element of the pseudo-element,
 *   other words its parent element.
 * 
 *   `var originatingElement = cssPseudoElement.element;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/element`
 */
css.CSSPseudoElement.set_element_BANG_ = (function css$CSSPseudoElement$set_element_BANG_(this$,val){
return (this$["element"] = val);
});
/**
 * Property.
 * 
 *   The type read-only property of the `css.CSSPseudoElement` interface
 *   the type of the pseudo-element as a string, represented in the
 *   of a CSS selector.
 * 
 *   `var typeOfPseudoElement = cssPseudoElement.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/type`
 */
css.CSSPseudoElement.type = (function css$CSSPseudoElement$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   The type read-only property of the `css.CSSPseudoElement` interface
 *   the type of the pseudo-element as a string, represented in the
 *   of a CSS selector.
 * 
 *   `var typeOfPseudoElement = cssPseudoElement.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPseudoElement/type`
 */
css.CSSPseudoElement.set_type_BANG_ = (function css$CSSPseudoElement$set_type_BANG_(this$,val){
return (this$["type"] = val);
});

//# sourceMappingURL=CSSPseudoElement.js.map?rel=1565798842671
