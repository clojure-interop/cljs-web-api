// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Permissions');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The Permissions.query() method of the `web.Permissions` interface
 *   the state of a user permission on the global scope.
 * 
 *   `navigator.permissions.query(PermissionDescriptor).then(function(permissionStatus) { ... })`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Permissions/query`
 */
web.Permissions.query = (function web$Permissions$query(this$,permission_descriptor){
return this$.query(permission_descriptor);
});
/**
 * Method.
 * 
 *   The Permissions.revoke() method of the `web.Permissions` interface
 *   a currently set permission back to its default state, which is
 *   prompt.
 * 
 *   `This method is called on the global `web.Permissions` object `web.navigator.permissions`.
 * 
 * 
 * 
 *   var revokePromise = navigator.permissions.revoke(descriptor);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Permissions/revoke`
 */
web.Permissions.revoke = (function web$Permissions$revoke(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53103 = arguments.length;
var i__42557__auto___53104 = (0);
while(true){
if((i__42557__auto___53104 < len__42556__auto___53103)){
args__42563__auto__.push((arguments[i__42557__auto___53104]));

var G__53105 = (i__42557__auto___53104 + (1));
i__42557__auto___53104 = G__53105;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Permissions.revoke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Permissions.revoke.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.revoke,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Permissions.revoke.cljs$lang$maxFixedArity = (1);

web.Permissions.revoke.cljs$lang$applyTo = (function (seq53101){
var G__53102 = cljs.core.first.call(null,seq53101);
var seq53101__$1 = cljs.core.next.call(null,seq53101);
return web.Permissions.revoke.cljs$core$IFn$_invoke$arity$variadic(G__53102,seq53101__$1);
});


//# sourceMappingURL=Permissions.js.map?rel=1565798862297
