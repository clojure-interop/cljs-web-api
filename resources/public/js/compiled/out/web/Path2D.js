// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Path2D');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Path2D() constructor returns a newly instantiated Path2D object, optionally with another path as an argument (creates a copy), or optionally with a string consisting of SVG path data.
 * 
 *   path Optional
 *   When invoked with another Path2D object, a copy of the path argument is created.
 *   d Optional
 *   When invoked with a string consisting of SVG path data, a new path is created from that description.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Path2D/Path2D`
 */
web.Path2D.constructor$ = Path2D;
/**
 * Method.
 * 
 *   The Path2D.addPath() method of the Canvas 2D API adds one `web.Path2D`
 *   to another Path2D object.
 * 
 *   `void path.addPath(path [, transform]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Path2D/addPath`
 */
web.Path2D.add_path = (function web$Path2D$add_path(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44240 = arguments.length;
var i__42557__auto___44241 = (0);
while(true){
if((i__42557__auto___44241 < len__42556__auto___44240)){
args__42563__auto__.push((arguments[i__42557__auto___44241]));

var G__44242 = (i__42557__auto___44241 + (1));
i__42557__auto___44241 = G__44242;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Path2D.add_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Path2D.add_path.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.addPath,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Path2D.add_path.cljs$lang$maxFixedArity = (1);

web.Path2D.add_path.cljs$lang$applyTo = (function (seq44238){
var G__44239 = cljs.core.first.call(null,seq44238);
var seq44238__$1 = cljs.core.next.call(null,seq44238);
return web.Path2D.add_path.cljs$core$IFn$_invoke$arity$variadic(G__44239,seq44238__$1);
});

/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.closePath() method of the Canvas
 *   API attempts to add a straight line from the current point to
 *   start of the current sub-path. If the shape has already been
 *   or has only one point, this function does nothing.
 * 
 *   `void ctx.closePath();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath`
 */
web.Path2D.close_path = (function web$Path2D$close_path(this$){
return this$.closePath();
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.moveTo() method of the Canvas 2D
 *   begins a new sub-path at the point specified by the given (x,
 *   coordinates.
 * 
 *   `void ctx.moveTo(x, y);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo`
 */
web.Path2D.move_to = (function web$Path2D$move_to(this$,x,y){
return this$.moveTo(x,y);
});
/**
 * Method.
 * 
 *   The `web.CanvasRenderingContext2D` method lineTo(), part of the
 *   2D API, adds a straight line to the current sub-path by connecting
 *   sub-path's last point to the specified (x, y) coordinates.
 * 
 *   `ctx.lineTo(x, y);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo`
 */
web.Path2D.line_to = (function web$Path2D$line_to(this$,x,y){
return this$.lineTo(x,y);
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.bezierCurveTo() method of the Canvas
 *   API adds a cubic Bézier curve to the current sub-path. It requires
 *   points: the first two are control points and the third one is
 *   end point. The starting point is the latest point in the current
 *   which can be changed using `web.moveTo()` before creating the
 *   curve.
 * 
 *   `void ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/bezierCurveTo`
 */
web.Path2D.bezier_curve_to = (function web$Path2D$bezier_curve_to(this$,cp_1x,cp_1y,cp_2x,cp_2y,x,y){
return this$.bezierCurveTo(cp_1x,cp_1y,cp_2x,cp_2y,x,y);
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.quadraticCurveTo() method of the
 *   2D API adds a quadratic Bézier curve to the current sub-path.
 *   requires two points: the first one is a control point and the
 *   one is the end point. The starting point is the latest point
 *   the current path, which can be changed using `web.moveTo()` before
 *   the quadratic Bézier curve.
 * 
 *   `void ctx.quadraticCurveTo(cpx, cpy, x, y);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/quadraticCurveTo`
 */
web.Path2D.quadratic_curve_to = (function web$Path2D$quadratic_curve_to(this$,cpx,cpy,x,y){
return this$.quadraticCurveTo(cpx,cpy,x,y);
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.arc() method of the Canvas 2D API
 *   a circular arc to the current sub-path.
 * 
 *   `void ctx.arc(x, y, radius, startAngle, endAngle [, anticlockwise]);
 * 
 *   The arc() method creates a circular arc centered at (x, y) with a radius of radius. The path starts at startAngle and ends at endAngle, and travels in the direction given by anticlockwise (defaulting to clockwise).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc`
 */
web.Path2D.arc = (function web$Path2D$arc(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44245 = arguments.length;
var i__42557__auto___44246 = (0);
while(true){
if((i__42557__auto___44246 < len__42556__auto___44245)){
args__42563__auto__.push((arguments[i__42557__auto___44246]));

var G__44247 = (i__42557__auto___44246 + (1));
i__42557__auto___44246 = G__44247;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Path2D.arc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Path2D.arc.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.arc,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Path2D.arc.cljs$lang$maxFixedArity = (1);

web.Path2D.arc.cljs$lang$applyTo = (function (seq44243){
var G__44244 = cljs.core.first.call(null,seq44243);
var seq44243__$1 = cljs.core.next.call(null,seq44243);
return web.Path2D.arc.cljs$core$IFn$_invoke$arity$variadic(G__44244,seq44243__$1);
});

/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.arcTo() method of the Canvas 2D
 *   adds a circular arc to the current sub-path, using the given
 *   points and radius. The arc is automatically connected to the
 *   latest point with a straight line, if necessary for the specified
 * 
 *   `void ctx.arcTo(x1, y1, x2, y2, radius);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arcTo`
 */
web.Path2D.arc_to = (function web$Path2D$arc_to(this$,x_1,y_1,x_2,y_2,radius){
return this$.arcTo(x_1,y_1,x_2,y_2,radius);
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.ellipse() method of the Canvas 2D
 *   adds an elliptical arc to the current sub-path.
 * 
 *   `void ctx.ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle [, anticlockwise]);
 * 
 *   The ellipse() method creates an elliptical arc centered at (x, y) with the radii radiusX and radiusY. The path starts at startAngle and ends at endAngle, and travels in the direction given by anticlockwise (defaulting to clockwise).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/ellipse`
 */
web.Path2D.ellipse = (function web$Path2D$ellipse(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44250 = arguments.length;
var i__42557__auto___44251 = (0);
while(true){
if((i__42557__auto___44251 < len__42556__auto___44250)){
args__42563__auto__.push((arguments[i__42557__auto___44251]));

var G__44252 = (i__42557__auto___44251 + (1));
i__42557__auto___44251 = G__44252;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Path2D.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Path2D.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.ellipse,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Path2D.ellipse.cljs$lang$maxFixedArity = (1);

web.Path2D.ellipse.cljs$lang$applyTo = (function (seq44248){
var G__44249 = cljs.core.first.call(null,seq44248);
var seq44248__$1 = cljs.core.next.call(null,seq44248);
return web.Path2D.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__44249,seq44248__$1);
});

/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.rect() method of the Canvas 2D API
 *   a rectangle to the current path.
 * 
 *   `void ctx.rect(x, y, width, height);
 * 
 *   The rect() method creates a rectangular path whose starting point is at (x, y) and whose size is specified by width and height.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rect`
 */
web.Path2D.rect = (function web$Path2D$rect(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44255 = arguments.length;
var i__42557__auto___44256 = (0);
while(true){
if((i__42557__auto___44256 < len__42556__auto___44255)){
args__42563__auto__.push((arguments[i__42557__auto___44256]));

var G__44257 = (i__42557__auto___44256 + (1));
i__42557__auto___44256 = G__44257;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Path2D.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Path2D.rect.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.rect,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Path2D.rect.cljs$lang$maxFixedArity = (1);

web.Path2D.rect.cljs$lang$applyTo = (function (seq44253){
var G__44254 = cljs.core.first.call(null,seq44253);
var seq44253__$1 = cljs.core.next.call(null,seq44253);
return web.Path2D.rect.cljs$core$IFn$_invoke$arity$variadic(G__44254,seq44253__$1);
});


//# sourceMappingURL=Path2D.js.map?rel=1565798813031
