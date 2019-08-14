// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.OrientationSensor');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The populateMatrix method of the `web.OrientationSensor` interface
 *   the given target matrix with the rotation matrix based on the
 *   sensor reading. The rotation matrix is shown below.
 * 
 *   `orientationInstance.populateMatrix(targetMatrix)
 * 
 *   Because `web.OrientationSensor` is a base class, populateMatrix may only be read from one of its derived classes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OrientationSensor/populateMatrix`
 */
web.OrientationSensor.populate_matrix = (function web$OrientationSensor$populate_matrix(var_args){
var args__42563__auto__ = [];
var len__42556__auto___53122 = arguments.length;
var i__42557__auto___53123 = (0);
while(true){
if((i__42557__auto___53123 < len__42556__auto___53122)){
args__42563__auto__.push((arguments[i__42557__auto___53123]));

var G__53124 = (i__42557__auto___53123 + (1));
i__42557__auto___53123 = G__53124;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.OrientationSensor.populate_matrix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.OrientationSensor.populate_matrix.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.populateMatrix,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.OrientationSensor.populate_matrix.cljs$lang$maxFixedArity = (1);

web.OrientationSensor.populate_matrix.cljs$lang$applyTo = (function (seq53120){
var G__53121 = cljs.core.first.call(null,seq53120);
var seq53120__$1 = cljs.core.next.call(null,seq53120);
return web.OrientationSensor.populate_matrix.cljs$core$IFn$_invoke$arity$variadic(G__53121,seq53120__$1);
});

/**
 * Property.
 * 
 *   The quaternion read-only property of the `web.OrientationSensor`
 *   returns a four element `web.Array` whose elements contain the
 *   of the unit quaternion representing the device's orientation.
 * 
 *   `var quaternion = orientationInstance.quaternion
 * 
 *   Because `web.OrientationSensor` is a base class, quaternion may only be read from one of its derived classes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OrientationSensor/quaternion`
 */
web.OrientationSensor.quaternion = (function web$OrientationSensor$quaternion(this$){
return this$.quaternion();
});
/**
 * Property.
 * 
 *   The quaternion read-only property of the `web.OrientationSensor`
 *   returns a four element `web.Array` whose elements contain the
 *   of the unit quaternion representing the device's orientation.
 * 
 *   `var quaternion = orientationInstance.quaternion
 * 
 *   Because `web.OrientationSensor` is a base class, quaternion may only be read from one of its derived classes.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OrientationSensor/quaternion`
 */
web.OrientationSensor.set_quaternion_BANG_ = (function web$OrientationSensor$set_quaternion_BANG_(this$,val){
return (this$["quaternion"] = val);
});

//# sourceMappingURL=OrientationSensor.js.map?rel=1565798862380
