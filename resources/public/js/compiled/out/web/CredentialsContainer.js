// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.CredentialsContainer');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The create() method of the `web.CredentialsContainer` interface
 *   a `web.Promise` that resolves with a new `web.Credential` instance
 *   on the provided options, or null if no Credential object can
 *   created.
 * 
 *   `var promise = CredentialsContainer.create([options])`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/create`
 */
web.CredentialsContainer.create = (function web$CredentialsContainer$create(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52331 = arguments.length;
var i__42557__auto___52332 = (0);
while(true){
if((i__42557__auto___52332 < len__42556__auto___52331)){
args__42563__auto__.push((arguments[i__42557__auto___52332]));

var G__52333 = (i__42557__auto___52332 + (1));
i__42557__auto___52332 = G__52333;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CredentialsContainer.create.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CredentialsContainer.create.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.create,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CredentialsContainer.create.cljs$lang$maxFixedArity = (1);

web.CredentialsContainer.create.cljs$lang$applyTo = (function (seq52329){
var G__52330 = cljs.core.first.call(null,seq52329);
var seq52329__$1 = cljs.core.next.call(null,seq52329);
return web.CredentialsContainer.create.cljs$core$IFn$_invoke$arity$variadic(G__52330,seq52329__$1);
});

/**
 * Method.
 * 
 *   The get() method of the `web.CredentialsContainer` interface
 *   a `web.Promise` to a single `web.Credential` instance that matches
 *   provided parameters. If no match is found the Promise will resolve
 *   null.
 * 
 *   `var promise = CredentialsContainer.get([options])`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/get`
 */
web.CredentialsContainer.get = (function web$CredentialsContainer$get(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52336 = arguments.length;
var i__42557__auto___52337 = (0);
while(true){
if((i__42557__auto___52337 < len__42556__auto___52336)){
args__42563__auto__.push((arguments[i__42557__auto___52337]));

var G__52338 = (i__42557__auto___52337 + (1));
i__42557__auto___52337 = G__52338;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CredentialsContainer.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CredentialsContainer.get.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.get,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CredentialsContainer.get.cljs$lang$maxFixedArity = (1);

web.CredentialsContainer.get.cljs$lang$applyTo = (function (seq52334){
var G__52335 = cljs.core.first.call(null,seq52334);
var seq52334__$1 = cljs.core.next.call(null,seq52334);
return web.CredentialsContainer.get.cljs$core$IFn$_invoke$arity$variadic(G__52335,seq52334__$1);
});

/**
 * Method.
 * 
 *   The preventSilentAccess() method of the `web.CredentialsContainer`
 *   sets a flag that specifies whether automatic log in is allowed
 *   future visits to the current origin, then returns an empty Promise.
 * 
 *   `var Promise = CredentialsContainer.preventSilentAccess()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/preventSilentAccess`
 */
web.CredentialsContainer.prevent_silent_access = (function web$CredentialsContainer$prevent_silent_access(this$){
return this$.preventSilentAccess();
});
/**
 * Method.
 * 
 *   The store() method of the `web.CredentialsContainer` stores a
 *   of credentials for the user inside a `web.Credential` instance,
 *   this in a `web.Promise`.
 * 
 *   `CredentialsContainer.store(Credential).then(function(Credential) { ... } )`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CredentialsContainer/store`
 */
web.CredentialsContainer.store = (function web$CredentialsContainer$store(this$,credential){
return this$.store(credential);
});

//# sourceMappingURL=CredentialsContainer.js.map?rel=1565798851333
