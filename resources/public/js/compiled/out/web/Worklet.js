// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Worklet');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The addModule() method of the `web.Worklet` interface loads the
 *   in the given JavaScript file and adds it to the current Worklet.
 * 
 *   `addPromise = worklet.addModule(moduleURL);
 *   addPromise = worklet.addModule(moduleURL, options);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worklet/addModule`
 */
web.Worklet.add_module = (function web$Worklet$add_module(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52511 = arguments.length;
var i__42557__auto___52512 = (0);
while(true){
if((i__42557__auto___52512 < len__42556__auto___52511)){
args__42563__auto__.push((arguments[i__42557__auto___52512]));

var G__52513 = (i__42557__auto___52512 + (1));
i__42557__auto___52512 = G__52513;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Worklet.add_module.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Worklet.add_module.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.addModule,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Worklet.add_module.cljs$lang$maxFixedArity = (1);

web.Worklet.add_module.cljs$lang$applyTo = (function (seq52509){
var G__52510 = cljs.core.first.call(null,seq52509);
var seq52509__$1 = cljs.core.next.call(null,seq52509);
return web.Worklet.add_module.cljs$core$IFn$_invoke$arity$variadic(G__52510,seq52509__$1);
});


//# sourceMappingURL=Worklet.js.map?rel=1565798854916
