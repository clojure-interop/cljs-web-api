// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.WindowClient');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The focus() method of the `web.WindowClient` interface gives
 *   input focus to the current client and returns a `web.Promise`
 *   resolves to the existing `web.WindowClient`.
 * 
 *   `Client.focus().then(function(WindowClient) {
 *   // do something with your WindowClient once it has been focused
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowClient/focus`
 */
web.WindowClient.focus = (function web$WindowClient$focus(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44125 = arguments.length;
var i__42557__auto___44126 = (0);
while(true){
if((i__42557__auto___44126 < len__42556__auto___44125)){
args__42563__auto__.push((arguments[i__42557__auto___44126]));

var G__44127 = (i__42557__auto___44126 + (1));
i__42557__auto___44126 = G__44127;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.WindowClient.focus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.WindowClient.focus.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.focus,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.WindowClient.focus.cljs$lang$maxFixedArity = (1);

web.WindowClient.focus.cljs$lang$applyTo = (function (seq44123){
var G__44124 = cljs.core.first.call(null,seq44123);
var seq44123__$1 = cljs.core.next.call(null,seq44123);
return web.WindowClient.focus.cljs$core$IFn$_invoke$arity$variadic(G__44124,seq44123__$1);
});

/**
 * Method.
 * 
 *   The navigate() method of the `web.WindowClient` interface loads
 *   specified URL into a controlled client page then returns a `web.Promise`
 *   resolves to the existing `web.WindowClient`.
 * 
 *   `WindowClient.navigate(url).then(function(WindowClient) {
 *   // do something with your WindowClient after navigation
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowClient/navigate`
 */
web.WindowClient.navigate = (function web$WindowClient$navigate(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44130 = arguments.length;
var i__42557__auto___44131 = (0);
while(true){
if((i__42557__auto___44131 < len__42556__auto___44130)){
args__42563__auto__.push((arguments[i__42557__auto___44131]));

var G__44132 = (i__42557__auto___44131 + (1));
i__42557__auto___44131 = G__44132;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.WindowClient.navigate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.WindowClient.navigate.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.navigate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.WindowClient.navigate.cljs$lang$maxFixedArity = (1);

web.WindowClient.navigate.cljs$lang$applyTo = (function (seq44128){
var G__44129 = cljs.core.first.call(null,seq44128);
var seq44128__$1 = cljs.core.next.call(null,seq44128);
return web.WindowClient.navigate.cljs$core$IFn$_invoke$arity$variadic(G__44129,seq44128__$1);
});

/**
 * Property.
 * 
 *   The focused read-only property of the `web.WindowClient` interface
 *   a `web.Boolean` that indicates whether the current client has
 * 
 *   `myFocused = WindowClient.focused;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowClient/focused`
 */
web.WindowClient.focused = (function web$WindowClient$focused(this$){
return this$.focused();
});
/**
 * Property.
 * 
 *   The focused read-only property of the `web.WindowClient` interface
 *   a `web.Boolean` that indicates whether the current client has
 * 
 *   `myFocused = WindowClient.focused;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowClient/focused`
 */
web.WindowClient.set_focused_BANG_ = (function web$WindowClient$set_focused_BANG_(this$,val){
return (this$["focused"] = val);
});
/**
 * Property.
 * 
 *   The visibilityState read-only property of the `web.WindowClient`
 *   indicates the visibility of the current client. This value can
 *   one of hidden, visible, prerender, or unloaded.
 * 
 *   `myVisState = WindowClient.visibilityState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowClient/visibilityState`
 */
web.WindowClient.visibility_state = (function web$WindowClient$visibility_state(this$){
return this$.visibilityState();
});
/**
 * Property.
 * 
 *   The visibilityState read-only property of the `web.WindowClient`
 *   indicates the visibility of the current client. This value can
 *   one of hidden, visible, prerender, or unloaded.
 * 
 *   `myVisState = WindowClient.visibilityState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowClient/visibilityState`
 */
web.WindowClient.set_visibility_state_BANG_ = (function web$WindowClient$set_visibility_state_BANG_(this$,val){
return (this$["visibilityState"] = val);
});

//# sourceMappingURL=WindowClient.js.map?rel=1565798811798
