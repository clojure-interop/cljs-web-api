// Compiled by ClojureScript 1.9.946 {}
goog.provide('svg.SVGGeometryElement');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The SVGGeometryElement.getPointAtLength() method returns the
 *   at a given distance along the path.
 * 
 *   `DOMPoint someElement.getPointAtLength(float distance);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getPointAtLength`
 */
svg.SVGGeometryElement.get_point_at_length = (function svg$SVGGeometryElement$get_point_at_length(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52803 = arguments.length;
var i__42557__auto___52804 = (0);
while(true){
if((i__42557__auto___52804 < len__42556__auto___52803)){
args__42563__auto__.push((arguments[i__42557__auto___52804]));

var G__52805 = (i__42557__auto___52804 + (1));
i__42557__auto___52804 = G__52805;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return svg.SVGGeometryElement.get_point_at_length.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

svg.SVGGeometryElement.get_point_at_length.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getPointAtLength,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

svg.SVGGeometryElement.get_point_at_length.cljs$lang$maxFixedArity = (1);

svg.SVGGeometryElement.get_point_at_length.cljs$lang$applyTo = (function (seq52801){
var G__52802 = cljs.core.first.call(null,seq52801);
var seq52801__$1 = cljs.core.next.call(null,seq52801);
return svg.SVGGeometryElement.get_point_at_length.cljs$core$IFn$_invoke$arity$variadic(G__52802,seq52801__$1);
});

/**
 * Method.
 * 
 *   The SVGGeometryElement.getTotalLength() method returns the user
 *   computed value for the total length of the path in user units.
 * 
 *   `float someElement.getTotalLength();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/getTotalLength`
 */
svg.SVGGeometryElement.get_total_length = (function svg$SVGGeometryElement$get_total_length(this$){
return this$.getTotalLength();
});
/**
 * Method.
 * 
 *   The SVGGeometryElement.isPointInFill() method determines whether
 *   given point is within the fill shape of an element. Normal hit
 *   rules apply; the value of the `web.pointer-events` property on
 *   element determines whether a point is considered to be within
 *   fill. The point argument is interpreted as a point in the local
 *   system of the element.
 * 
 *   `boolean someElement.isPointInFill(DOMPointInit point);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/isPointInFill`
 */
svg.SVGGeometryElement.is_point_in_fill = (function svg$SVGGeometryElement$is_point_in_fill(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52808 = arguments.length;
var i__42557__auto___52809 = (0);
while(true){
if((i__42557__auto___52809 < len__42556__auto___52808)){
args__42563__auto__.push((arguments[i__42557__auto___52809]));

var G__52810 = (i__42557__auto___52809 + (1));
i__42557__auto___52809 = G__52810;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return svg.SVGGeometryElement.is_point_in_fill.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

svg.SVGGeometryElement.is_point_in_fill.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.isPointInFill,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

svg.SVGGeometryElement.is_point_in_fill.cljs$lang$maxFixedArity = (1);

svg.SVGGeometryElement.is_point_in_fill.cljs$lang$applyTo = (function (seq52806){
var G__52807 = cljs.core.first.call(null,seq52806);
var seq52806__$1 = cljs.core.next.call(null,seq52806);
return svg.SVGGeometryElement.is_point_in_fill.cljs$core$IFn$_invoke$arity$variadic(G__52807,seq52806__$1);
});

/**
 * Method.
 * 
 *   The SVGGeometryElement.isPointInStroke() method determines whether
 *   given point is within the stroke shape of an element. Normal
 *   testing rules apply; the value of the `web.pointer-events` property
 *   the element determines whether a point is considered to be within
 *   stroke. The point argument is interpreted as a point in the local
 *   system of the element.
 * 
 *   `boolean someElement.isPointInStroke(DOMPointInit point);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/isPointInStroke`
 */
svg.SVGGeometryElement.is_point_in_stroke = (function svg$SVGGeometryElement$is_point_in_stroke(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52813 = arguments.length;
var i__42557__auto___52814 = (0);
while(true){
if((i__42557__auto___52814 < len__42556__auto___52813)){
args__42563__auto__.push((arguments[i__42557__auto___52814]));

var G__52815 = (i__42557__auto___52814 + (1));
i__42557__auto___52814 = G__52815;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return svg.SVGGeometryElement.is_point_in_stroke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

svg.SVGGeometryElement.is_point_in_stroke.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.isPointInStroke,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

svg.SVGGeometryElement.is_point_in_stroke.cljs$lang$maxFixedArity = (1);

svg.SVGGeometryElement.is_point_in_stroke.cljs$lang$applyTo = (function (seq52811){
var G__52812 = cljs.core.first.call(null,seq52811);
var seq52811__$1 = cljs.core.next.call(null,seq52811);
return svg.SVGGeometryElement.is_point_in_stroke.cljs$core$IFn$_invoke$arity$variadic(G__52812,seq52811__$1);
});

/**
 * Property.
 * 
 *   The SVGGeometryElement.pathLength property reflects the pathLength
 *   and returns the total length of the path, in user units.
 * 
 *   `var pathLength = someElement.pathLength;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/pathLength`
 */
svg.SVGGeometryElement.path_length = (function svg$SVGGeometryElement$path_length(this$){
return this$.pathLength();
});
/**
 * Property.
 * 
 *   The SVGGeometryElement.pathLength property reflects the pathLength
 *   and returns the total length of the path, in user units.
 * 
 *   `var pathLength = someElement.pathLength;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGeometryElement/pathLength`
 */
svg.SVGGeometryElement.set_path_length_BANG_ = (function svg$SVGGeometryElement$set_path_length_BANG_(this$,val){
return (this$["pathLength"] = val);
});

//# sourceMappingURL=SVGGeometryElement.js.map?rel=1565798859529
