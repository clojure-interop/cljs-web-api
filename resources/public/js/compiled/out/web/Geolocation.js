// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Geolocation');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The Geolocation.clearWatch() method is used to unregister location/error
 *   handlers previously installed using `web.Geolocation.watchPosition()`.
 * 
 *   `navigator.geolocation.clearWatch(id);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/clearWatch`
 */
web.Geolocation.clear_watch = (function web$Geolocation$clear_watch(this$,id){
return this$.clearWatch(id);
});
/**
 * Method.
 * 
 *   The Geolocation.getCurrentPosition() method is used to get the
 *   position of the device.
 * 
 *   `navigator.geolocation.getCurrentPosition(success[, error[, [options]])`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition`
 */
web.Geolocation.get_current_position = (function web$Geolocation$get_current_position(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50684 = arguments.length;
var i__42557__auto___50685 = (0);
while(true){
if((i__42557__auto___50685 < len__42556__auto___50684)){
args__42563__auto__.push((arguments[i__42557__auto___50685]));

var G__50686 = (i__42557__auto___50685 + (1));
i__42557__auto___50685 = G__50686;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Geolocation.get_current_position.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Geolocation.get_current_position.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getCurrentPosition,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Geolocation.get_current_position.cljs$lang$maxFixedArity = (1);

web.Geolocation.get_current_position.cljs$lang$applyTo = (function (seq50682){
var G__50683 = cljs.core.first.call(null,seq50682);
var seq50682__$1 = cljs.core.next.call(null,seq50682);
return web.Geolocation.get_current_position.cljs$core$IFn$_invoke$arity$variadic(G__50683,seq50682__$1);
});

/**
 * Method.
 * 
 *   The `web.Geolocation` method watchPosition() method is used to
 *   a handler function that will be called automatically each time
 *   position of the device changes.
 * 
 *   `navigator.geolocation.watchPosition(success[, error[, options]])`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition`
 */
web.Geolocation.watch_position = (function web$Geolocation$watch_position(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50689 = arguments.length;
var i__42557__auto___50690 = (0);
while(true){
if((i__42557__auto___50690 < len__42556__auto___50689)){
args__42563__auto__.push((arguments[i__42557__auto___50690]));

var G__50691 = (i__42557__auto___50690 + (1));
i__42557__auto___50690 = G__50691;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Geolocation.watch_position.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Geolocation.watch_position.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.watchPosition,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Geolocation.watch_position.cljs$lang$maxFixedArity = (1);

web.Geolocation.watch_position.cljs$lang$applyTo = (function (seq50687){
var G__50688 = cljs.core.first.call(null,seq50687);
var seq50687__$1 = cljs.core.next.call(null,seq50687);
return web.Geolocation.watch_position.cljs$core$IFn$_invoke$arity$variadic(G__50688,seq50687__$1);
});


//# sourceMappingURL=Geolocation.js.map?rel=1565798842578
