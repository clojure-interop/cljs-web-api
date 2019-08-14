// Compiled by ClojureScript 1.9.946 {}
goog.provide('svg.SVGPathElement');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The SVGPathElement.getPointAtLength() method returns the point
 *   a given distance along the path.
 * 
 *   `SVGPoint someElement.getPointAtLength(float distance);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement/getPointAtLength`
 */
svg.SVGPathElement.get_point_at_length = (function svg$SVGPathElement$get_point_at_length(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50651 = arguments.length;
var i__42557__auto___50652 = (0);
while(true){
if((i__42557__auto___50652 < len__42556__auto___50651)){
args__42563__auto__.push((arguments[i__42557__auto___50652]));

var G__50653 = (i__42557__auto___50652 + (1));
i__42557__auto___50652 = G__50653;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return svg.SVGPathElement.get_point_at_length.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

svg.SVGPathElement.get_point_at_length.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getPointAtLength,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

svg.SVGPathElement.get_point_at_length.cljs$lang$maxFixedArity = (1);

svg.SVGPathElement.get_point_at_length.cljs$lang$applyTo = (function (seq50649){
var G__50650 = cljs.core.first.call(null,seq50649);
var seq50649__$1 = cljs.core.next.call(null,seq50649);
return svg.SVGPathElement.get_point_at_length.cljs$core$IFn$_invoke$arity$variadic(G__50650,seq50649__$1);
});

/**
 * Method.
 * 
 *   The SVGPathElement.getTotalLength() method returns the user agent's
 *   value for the total length of the path in user units.
 * 
 *   `float someElement.getTotalLength();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement/getTotalLength`
 */
svg.SVGPathElement.get_total_length = (function svg$SVGPathElement$get_total_length(this$){
return this$.getTotalLength();
});
/**
 * Property.
 * 
 *   The SVGPathElement.pathLength property reflects the pathLength
 *   and returns the total length of the path, in user units.
 * 
 *   `var pathLength = someElement.pathLength;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement/pathLength`
 */
svg.SVGPathElement.path_length = (function svg$SVGPathElement$path_length(this$){
return this$.pathLength();
});
/**
 * Property.
 * 
 *   The SVGPathElement.pathLength property reflects the pathLength
 *   and returns the total length of the path, in user units.
 * 
 *   `var pathLength = someElement.pathLength;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGPathElement/pathLength`
 */
svg.SVGPathElement.set_path_length_BANG_ = (function svg$SVGPathElement$set_path_length_BANG_(this$,val){
return (this$["pathLength"] = val);
});

//# sourceMappingURL=SVGPathElement.js.map?rel=1565798842018
