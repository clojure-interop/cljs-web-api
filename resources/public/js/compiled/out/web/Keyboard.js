// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Keyboard');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The getLayoutMap() method of the `web.Keyboard` interface returns
 *   `web.Promise` that resolves with an instance of `web.KeyboardLayoutMap`
 *   is a map-like object with functions for retrieving the strings
 *   with specific physical keys.
 * 
 *   `var promise = Keyboard.getLayoutMap()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Keyboard/getLayoutMap`
 */
web.Keyboard.get_layout_map = (function web$Keyboard$get_layout_map(this$){
return this$.getLayoutMap();
});
/**
 * Method.
 * 
 *   The lock() method of the `web.Keyboard` interface returns a `web.Promise`
 *   enabling the capture of keypresses for any or all of the keys
 *   the physical keyboard. This method can only capture keys that
 *   granted access by the underlying operating system.
 * 
 *   `var promise = Keyboard.lock([keyCodes[]])`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Keyboard/lock`
 */
web.Keyboard.lock = (function web$Keyboard$lock(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43561 = arguments.length;
var i__42557__auto___43562 = (0);
while(true){
if((i__42557__auto___43562 < len__42556__auto___43561)){
args__42563__auto__.push((arguments[i__42557__auto___43562]));

var G__43563 = (i__42557__auto___43562 + (1));
i__42557__auto___43562 = G__43563;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Keyboard.lock.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Keyboard.lock.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.lock,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Keyboard.lock.cljs$lang$maxFixedArity = (1);

web.Keyboard.lock.cljs$lang$applyTo = (function (seq43559){
var G__43560 = cljs.core.first.call(null,seq43559);
var seq43559__$1 = cljs.core.next.call(null,seq43559);
return web.Keyboard.lock.cljs$core$IFn$_invoke$arity$variadic(G__43560,seq43559__$1);
});

/**
 * Method.
 * 
 *   The unlock() method of the `web.Keyboard` interface unlocks all
 *   captured by the `web.Keyboard.lock()` method and returns synchronously.
 * 
 *   `Keyboard.unlock()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Keyboard/unlock`
 */
web.Keyboard.unlock = (function web$Keyboard$unlock(this$){
return this$.unlock();
});

//# sourceMappingURL=Keyboard.js.map?rel=1565798808035
