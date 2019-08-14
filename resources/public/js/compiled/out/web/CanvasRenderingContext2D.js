// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.CanvasRenderingContext2D');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `web.CanvasRenderingContext2D` method addHitRegion() adds
 *   hit region to the bitmap.
 * 
 *   `void ctx.addHitRegion(options);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/addHitRegion`
 */
web.CanvasRenderingContext2D.add_hit_region = (function web$CanvasRenderingContext2D$add_hit_region(this$,options){
return this$.addHitRegion(options);
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
web.CanvasRenderingContext2D.arc = (function web$CanvasRenderingContext2D$arc(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44486 = arguments.length;
var i__42557__auto___44487 = (0);
while(true){
if((i__42557__auto___44487 < len__42556__auto___44486)){
args__42563__auto__.push((arguments[i__42557__auto___44487]));

var G__44488 = (i__42557__auto___44487 + (1));
i__42557__auto___44487 = G__44488;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.arc.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.arc.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.arc,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.arc.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.arc.cljs$lang$applyTo = (function (seq44484){
var G__44485 = cljs.core.first.call(null,seq44484);
var seq44484__$1 = cljs.core.next.call(null,seq44484);
return web.CanvasRenderingContext2D.arc.cljs$core$IFn$_invoke$arity$variadic(G__44485,seq44484__$1);
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
web.CanvasRenderingContext2D.arc_to = (function web$CanvasRenderingContext2D$arc_to(this$,x_1,y_1,x_2,y_2,radius){
return this$.arcTo(x_1,y_1,x_2,y_2,radius);
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.beginPath() method of the Canvas
 *   API starts a new path by emptying the list of sub-paths. Call
 *   method when you want to create a new path.
 * 
 *   `void ctx.beginPath();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath`
 */
web.CanvasRenderingContext2D.begin_path = (function web$CanvasRenderingContext2D$begin_path(this$){
return this$.beginPath();
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
web.CanvasRenderingContext2D.bezier_curve_to = (function web$CanvasRenderingContext2D$bezier_curve_to(this$,cp_1x,cp_1y,cp_2x,cp_2y,x,y){
return this$.bezierCurveTo(cp_1x,cp_1y,cp_2x,cp_2y,x,y);
});
/**
 * Method.
 * 
 *   The `web.CanvasRenderingContext2D` method clearHitRegions() removes
 *   hit regions from the canvas.
 * 
 *   `void ctx.clearHitRegions();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearHitRegions`
 */
web.CanvasRenderingContext2D.clear_hit_regions = (function web$CanvasRenderingContext2D$clear_hit_regions(this$){
return this$.clearHitRegions();
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.clearRect() method of the Canvas
 *   API erases the pixels in a rectangular area by setting them to
 *   black.
 * 
 *   `void ctx.clearRect(x, y, width, height);
 * 
 *   The clearRect() method sets the pixels in a rectangular area to transparent black (rgba(0,0,0,0)). The rectangle's corner is at (x, y), and its size is specified by width and height.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect`
 */
web.CanvasRenderingContext2D.clear_rect = (function web$CanvasRenderingContext2D$clear_rect(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44491 = arguments.length;
var i__42557__auto___44492 = (0);
while(true){
if((i__42557__auto___44492 < len__42556__auto___44491)){
args__42563__auto__.push((arguments[i__42557__auto___44492]));

var G__44493 = (i__42557__auto___44492 + (1));
i__42557__auto___44492 = G__44493;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.clear_rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.clear_rect.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.clearRect,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.clear_rect.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.clear_rect.cljs$lang$applyTo = (function (seq44489){
var G__44490 = cljs.core.first.call(null,seq44489);
var seq44489__$1 = cljs.core.next.call(null,seq44489);
return web.CanvasRenderingContext2D.clear_rect.cljs$core$IFn$_invoke$arity$variadic(G__44490,seq44489__$1);
});

/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.clip() method of the Canvas 2D API
 *   the current or given path into the current clipping region. It
 *   any previous clipping region.
 * 
 *   `void ctx.clip([fillRule]);
 *   void ctx.clip(path [, fillRule]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clip`
 */
web.CanvasRenderingContext2D.clip = (function web$CanvasRenderingContext2D$clip(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44496 = arguments.length;
var i__42557__auto___44497 = (0);
while(true){
if((i__42557__auto___44497 < len__42556__auto___44496)){
args__42563__auto__.push((arguments[i__42557__auto___44497]));

var G__44498 = (i__42557__auto___44497 + (1));
i__42557__auto___44497 = G__44498;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.clip.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.clip.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.clip,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.clip.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.clip.cljs$lang$applyTo = (function (seq44494){
var G__44495 = cljs.core.first.call(null,seq44494);
var seq44494__$1 = cljs.core.next.call(null,seq44494);
return web.CanvasRenderingContext2D.clip.cljs$core$IFn$_invoke$arity$variadic(G__44495,seq44494__$1);
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
web.CanvasRenderingContext2D.close_path = (function web$CanvasRenderingContext2D$close_path(this$){
return this$.closePath();
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.createImageData() method of the
 *   2D API creates a new, blank `web.ImageData` object with the specified
 *   All of the pixels in the new object are transparent black.
 * 
 *   `ImageData ctx.createImageData(width, height);
 *   ImageData ctx.createImageData(imagedata);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createImageData`
 */
web.CanvasRenderingContext2D.create_image_data = (function web$CanvasRenderingContext2D$create_image_data(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44501 = arguments.length;
var i__42557__auto___44502 = (0);
while(true){
if((i__42557__auto___44502 < len__42556__auto___44501)){
args__42563__auto__.push((arguments[i__42557__auto___44502]));

var G__44503 = (i__42557__auto___44502 + (1));
i__42557__auto___44502 = G__44503;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.create_image_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.create_image_data.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createImageData,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.create_image_data.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.create_image_data.cljs$lang$applyTo = (function (seq44499){
var G__44500 = cljs.core.first.call(null,seq44499);
var seq44499__$1 = cljs.core.next.call(null,seq44499);
return web.CanvasRenderingContext2D.create_image_data.cljs$core$IFn$_invoke$arity$variadic(G__44500,seq44499__$1);
});

/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.createLinearGradient() method of
 *   Canvas 2D API creates a gradient along the line connecting two
 *   coordinates.
 * 
 *   `CanvasGradient ctx.createLinearGradient(x0, y0, x1, y1);
 * 
 *   The createLinearGradient() method is specified by four parameters defining the start and end points of the gradient line.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createLinearGradient`
 */
web.CanvasRenderingContext2D.create_linear_gradient = (function web$CanvasRenderingContext2D$create_linear_gradient(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44506 = arguments.length;
var i__42557__auto___44507 = (0);
while(true){
if((i__42557__auto___44507 < len__42556__auto___44506)){
args__42563__auto__.push((arguments[i__42557__auto___44507]));

var G__44508 = (i__42557__auto___44507 + (1));
i__42557__auto___44507 = G__44508;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.create_linear_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.create_linear_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createLinearGradient,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.create_linear_gradient.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.create_linear_gradient.cljs$lang$applyTo = (function (seq44504){
var G__44505 = cljs.core.first.call(null,seq44504);
var seq44504__$1 = cljs.core.next.call(null,seq44504);
return web.CanvasRenderingContext2D.create_linear_gradient.cljs$core$IFn$_invoke$arity$variadic(G__44505,seq44504__$1);
});

/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.createPattern() method of the Canvas
 *   API creates a pattern using the specified image and repetition.
 *   method returns a `web.CanvasPattern`.
 * 
 *   `CanvasPattern ctx.createPattern(image, repetition);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createPattern`
 */
web.CanvasRenderingContext2D.create_pattern = (function web$CanvasRenderingContext2D$create_pattern(this$,image,repetition){
return this$.createPattern(image,repetition);
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.createRadialGradient() method of
 *   Canvas 2D API creates a radial gradient using the size and coordinates
 *   two circles.
 * 
 *   `CanvasGradient ctx.createRadialGradient(x0, y0, r0, x1, y1, r1);
 * 
 *   The createRadialGradient() method is specified by six parameters, three defining the gradient's start circle, and three defining the end circle.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/createRadialGradient`
 */
web.CanvasRenderingContext2D.create_radial_gradient = (function web$CanvasRenderingContext2D$create_radial_gradient(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44511 = arguments.length;
var i__42557__auto___44512 = (0);
while(true){
if((i__42557__auto___44512 < len__42556__auto___44511)){
args__42563__auto__.push((arguments[i__42557__auto___44512]));

var G__44513 = (i__42557__auto___44512 + (1));
i__42557__auto___44512 = G__44513;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.create_radial_gradient.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.create_radial_gradient.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createRadialGradient,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.create_radial_gradient.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.create_radial_gradient.cljs$lang$applyTo = (function (seq44509){
var G__44510 = cljs.core.first.call(null,seq44509);
var seq44509__$1 = cljs.core.next.call(null,seq44509);
return web.CanvasRenderingContext2D.create_radial_gradient.cljs$core$IFn$_invoke$arity$variadic(G__44510,seq44509__$1);
});

/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.drawFocusIfNeeded() method of the
 *   2D API draws a focus ring around the current or given path, if
 *   specified element is focused.
 * 
 *   `void ctx.drawFocusIfNeeded(element);
 *   void ctx.drawFocusIfNeeded(path, element);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawFocusIfNeeded`
 */
web.CanvasRenderingContext2D.draw_focus_if_needed = (function web$CanvasRenderingContext2D$draw_focus_if_needed(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44516 = arguments.length;
var i__42557__auto___44517 = (0);
while(true){
if((i__42557__auto___44517 < len__42556__auto___44516)){
args__42563__auto__.push((arguments[i__42557__auto___44517]));

var G__44518 = (i__42557__auto___44517 + (1));
i__42557__auto___44517 = G__44518;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.draw_focus_if_needed.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.draw_focus_if_needed.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.drawFocusIfNeeded,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.draw_focus_if_needed.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.draw_focus_if_needed.cljs$lang$applyTo = (function (seq44514){
var G__44515 = cljs.core.first.call(null,seq44514);
var seq44514__$1 = cljs.core.next.call(null,seq44514);
return web.CanvasRenderingContext2D.draw_focus_if_needed.cljs$core$IFn$_invoke$arity$variadic(G__44515,seq44514__$1);
});

/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.drawImage() method of the Canvas
 *   API provides different ways to draw an image onto the canvas.
 * 
 *   `void ctx.drawImage(image, dx, dy);
 *   void ctx.drawImage(image, dx, dy, dWidth, dHeight);
 *   void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage`
 */
web.CanvasRenderingContext2D.draw_image = (function web$CanvasRenderingContext2D$draw_image(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44521 = arguments.length;
var i__42557__auto___44522 = (0);
while(true){
if((i__42557__auto___44522 < len__42556__auto___44521)){
args__42563__auto__.push((arguments[i__42557__auto___44522]));

var G__44523 = (i__42557__auto___44522 + (1));
i__42557__auto___44522 = G__44523;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.draw_image.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.draw_image.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.drawImage,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.draw_image.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.draw_image.cljs$lang$applyTo = (function (seq44519){
var G__44520 = cljs.core.first.call(null,seq44519);
var seq44519__$1 = cljs.core.next.call(null,seq44519);
return web.CanvasRenderingContext2D.draw_image.cljs$core$IFn$_invoke$arity$variadic(G__44520,seq44519__$1);
});

/**
 * Method.
 * 
 *   The non-standard and internal only CanvasRenderingContext2D.drawWidgetAsOnScreen()
 *   of the Canvas 2D API renders the root widget of a window into
 *   canvas. Unlike `web.drawWindow()`, this API uses the operating
 *   to snapshot the widget on-screen, rather than reading from Gecko's
 *   compositor.
 * 
 *   `void ctx.drawWidgetAsOnScreen(window);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawWidgetAsOnScreen`
 */
web.CanvasRenderingContext2D.draw_widget_as_on_screen = (function web$CanvasRenderingContext2D$draw_widget_as_on_screen(this$,window){
return this$.drawWidgetAsOnScreen(window);
});
/**
 * Method.
 * 
 *   The non-standard and internal only CanvasRenderingContext2D.drawWindow()
 *   of the Canvas 2D API renders a region of a window into the canvas.
 *   contents of the window's viewport are rendered, ignoring viewport
 *   and scrolling.
 * 
 *   `void ctx.drawWindow(window, x, y, w, h, bgColor [, flags]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawWindow`
 */
web.CanvasRenderingContext2D.draw_window = (function web$CanvasRenderingContext2D$draw_window(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44526 = arguments.length;
var i__42557__auto___44527 = (0);
while(true){
if((i__42557__auto___44527 < len__42556__auto___44526)){
args__42563__auto__.push((arguments[i__42557__auto___44527]));

var G__44528 = (i__42557__auto___44527 + (1));
i__42557__auto___44527 = G__44528;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.draw_window.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.draw_window.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.drawWindow,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.draw_window.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.draw_window.cljs$lang$applyTo = (function (seq44524){
var G__44525 = cljs.core.first.call(null,seq44524);
var seq44524__$1 = cljs.core.next.call(null,seq44524);
return web.CanvasRenderingContext2D.draw_window.cljs$core$IFn$_invoke$arity$variadic(G__44525,seq44524__$1);
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
web.CanvasRenderingContext2D.ellipse = (function web$CanvasRenderingContext2D$ellipse(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44531 = arguments.length;
var i__42557__auto___44532 = (0);
while(true){
if((i__42557__auto___44532 < len__42556__auto___44531)){
args__42563__auto__.push((arguments[i__42557__auto___44532]));

var G__44533 = (i__42557__auto___44532 + (1));
i__42557__auto___44532 = G__44533;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.ellipse.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.ellipse.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.ellipse,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.ellipse.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.ellipse.cljs$lang$applyTo = (function (seq44529){
var G__44530 = cljs.core.first.call(null,seq44529);
var seq44529__$1 = cljs.core.next.call(null,seq44529);
return web.CanvasRenderingContext2D.ellipse.cljs$core$IFn$_invoke$arity$variadic(G__44530,seq44529__$1);
});

/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.fill() method of the Canvas 2D API
 *   the current or given path with the current `web.fillStyle`.
 * 
 *   `void ctx.fill([fillRule]);
 *   void ctx.fill(path [, fillRule]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill`
 */
web.CanvasRenderingContext2D.fill = (function web$CanvasRenderingContext2D$fill(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44536 = arguments.length;
var i__42557__auto___44537 = (0);
while(true){
if((i__42557__auto___44537 < len__42556__auto___44536)){
args__42563__auto__.push((arguments[i__42557__auto___44537]));

var G__44538 = (i__42557__auto___44537 + (1));
i__42557__auto___44537 = G__44538;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.fill.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.fill.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.fill,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.fill.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.fill.cljs$lang$applyTo = (function (seq44534){
var G__44535 = cljs.core.first.call(null,seq44534);
var seq44534__$1 = cljs.core.next.call(null,seq44534);
return web.CanvasRenderingContext2D.fill.cljs$core$IFn$_invoke$arity$variadic(G__44535,seq44534__$1);
});

/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.fillRect() method of the Canvas
 *   API draws a rectangle that is filled according to the current
 * 
 *   `void ctx.fillRect(x, y, width, height);
 * 
 *   The fillRect() method draws a filled rectangle whose starting point is at (x, y) and whose size is specified by width and height. The fill style is determined by the current fillStyle attribute.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillRect`
 */
web.CanvasRenderingContext2D.fill_rect = (function web$CanvasRenderingContext2D$fill_rect(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44541 = arguments.length;
var i__42557__auto___44542 = (0);
while(true){
if((i__42557__auto___44542 < len__42556__auto___44541)){
args__42563__auto__.push((arguments[i__42557__auto___44542]));

var G__44543 = (i__42557__auto___44542 + (1));
i__42557__auto___44542 = G__44543;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.fill_rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.fill_rect.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.fillRect,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.fill_rect.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.fill_rect.cljs$lang$applyTo = (function (seq44539){
var G__44540 = cljs.core.first.call(null,seq44539);
var seq44539__$1 = cljs.core.next.call(null,seq44539);
return web.CanvasRenderingContext2D.fill_rect.cljs$core$IFn$_invoke$arity$variadic(G__44540,seq44539__$1);
});

/**
 * Method.
 * 
 *   The `web.CanvasRenderingContext2D` method fillText(), part of
 *   Canvas 2D API, draws a text string at the specified coordinates,
 *   the string's characters with the current `web.fillStyle`. An
 *   parameter allows specifying a maximum width for the rendered
 *   which the user agent will achieve by condensing the text or by
 *   a lower font size.
 * 
 *   `CanvasRenderingContext2D.fillText(text, x, y [, maxWidth]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillText`
 */
web.CanvasRenderingContext2D.fill_text = (function web$CanvasRenderingContext2D$fill_text(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44546 = arguments.length;
var i__42557__auto___44547 = (0);
while(true){
if((i__42557__auto___44547 < len__42556__auto___44546)){
args__42563__auto__.push((arguments[i__42557__auto___44547]));

var G__44548 = (i__42557__auto___44547 + (1));
i__42557__auto___44547 = G__44548;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.fill_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.fill_text.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.fillText,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.fill_text.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.fill_text.cljs$lang$applyTo = (function (seq44544){
var G__44545 = cljs.core.first.call(null,seq44544);
var seq44544__$1 = cljs.core.next.call(null,seq44544);
return web.CanvasRenderingContext2D.fill_text.cljs$core$IFn$_invoke$arity$variadic(G__44545,seq44544__$1);
});

/**
 * Method.
 * 
 *   The `web.CanvasRenderingContext2D` method getImageData() of the
 *   2D API returns an `web.ImageData` object representing the underlying
 *   data for a specified portion of the canvas.
 * 
 *   `ctx.getImageData(sx, sy, sw, sh);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData`
 */
web.CanvasRenderingContext2D.get_image_data = (function web$CanvasRenderingContext2D$get_image_data(this$,sx,sy,sw,sh){
return this$.getImageData(sx,sy,sw,sh);
});
/**
 * Method.
 * 
 *   The getLineDash() method of the Canvas 2D API's `web.CanvasRenderingContext2D`
 *   gets the current line dash pattern.
 * 
 *   `ctx.getLineDash();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getLineDash`
 */
web.CanvasRenderingContext2D.get_line_dash = (function web$CanvasRenderingContext2D$get_line_dash(this$){
return this$.getLineDash();
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.isPointInPath() method of the Canvas
 *   API reports whether or not the specified point is contained in
 *   current path.
 * 
 *   `ctx.isPointInPath(x, y [, fillRule]);
 *   ctx.isPointInPath(path, x, y [, fillRule]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isPointInPath`
 */
web.CanvasRenderingContext2D.is_point_in_path = (function web$CanvasRenderingContext2D$is_point_in_path(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44551 = arguments.length;
var i__42557__auto___44552 = (0);
while(true){
if((i__42557__auto___44552 < len__42556__auto___44551)){
args__42563__auto__.push((arguments[i__42557__auto___44552]));

var G__44553 = (i__42557__auto___44552 + (1));
i__42557__auto___44552 = G__44553;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.is_point_in_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.is_point_in_path.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.isPointInPath,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.is_point_in_path.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.is_point_in_path.cljs$lang$applyTo = (function (seq44549){
var G__44550 = cljs.core.first.call(null,seq44549);
var seq44549__$1 = cljs.core.next.call(null,seq44549);
return web.CanvasRenderingContext2D.is_point_in_path.cljs$core$IFn$_invoke$arity$variadic(G__44550,seq44549__$1);
});

/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.isPointInStroke() method of the
 *   2D API reports whether or not the specified point is inside the
 *   contained by the stroking of a path.
 * 
 *   `ctx.isPointInStroke(x, y);
 *   ctx.isPointInStroke(path, x, y);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/isPointInStroke`
 */
web.CanvasRenderingContext2D.is_point_in_stroke = (function web$CanvasRenderingContext2D$is_point_in_stroke(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44556 = arguments.length;
var i__42557__auto___44557 = (0);
while(true){
if((i__42557__auto___44557 < len__42556__auto___44556)){
args__42563__auto__.push((arguments[i__42557__auto___44557]));

var G__44558 = (i__42557__auto___44557 + (1));
i__42557__auto___44557 = G__44558;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.is_point_in_stroke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.is_point_in_stroke.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.isPointInStroke,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.is_point_in_stroke.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.is_point_in_stroke.cljs$lang$applyTo = (function (seq44554){
var G__44555 = cljs.core.first.call(null,seq44554);
var seq44554__$1 = cljs.core.next.call(null,seq44554);
return web.CanvasRenderingContext2D.is_point_in_stroke.cljs$core$IFn$_invoke$arity$variadic(G__44555,seq44554__$1);
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
web.CanvasRenderingContext2D.line_to = (function web$CanvasRenderingContext2D$line_to(this$,x,y){
return this$.lineTo(x,y);
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.measureText() method returns a `web.TextMetrics`
 *   that contains information about the measured text (such as its
 *   for example).
 * 
 *   `ctx.measureText(text);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/measureText`
 */
web.CanvasRenderingContext2D.measure_text = (function web$CanvasRenderingContext2D$measure_text(this$,text){
return this$.measureText(text);
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
web.CanvasRenderingContext2D.move_to = (function web$CanvasRenderingContext2D$move_to(this$,x,y){
return this$.moveTo(x,y);
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.putImageData() method of the Canvas
 *   API paints data from the given `web.ImageData` object onto the
 *   If a dirty rectangle is provided, only the pixels from that rectangle
 *   painted. This method is not affected by the canvas transformation
 * 
 *   `void ctx.putImageData(imageData, dx, dy);
 *   void ctx.putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData`
 */
web.CanvasRenderingContext2D.put_image_data = (function web$CanvasRenderingContext2D$put_image_data(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44561 = arguments.length;
var i__42557__auto___44562 = (0);
while(true){
if((i__42557__auto___44562 < len__42556__auto___44561)){
args__42563__auto__.push((arguments[i__42557__auto___44562]));

var G__44563 = (i__42557__auto___44562 + (1));
i__42557__auto___44562 = G__44563;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.put_image_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.put_image_data.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.putImageData,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.put_image_data.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.put_image_data.cljs$lang$applyTo = (function (seq44559){
var G__44560 = cljs.core.first.call(null,seq44559);
var seq44559__$1 = cljs.core.next.call(null,seq44559);
return web.CanvasRenderingContext2D.put_image_data.cljs$core$IFn$_invoke$arity$variadic(G__44560,seq44559__$1);
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
web.CanvasRenderingContext2D.quadratic_curve_to = (function web$CanvasRenderingContext2D$quadratic_curve_to(this$,cpx,cpy,x,y){
return this$.quadraticCurveTo(cpx,cpy,x,y);
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
web.CanvasRenderingContext2D.rect = (function web$CanvasRenderingContext2D$rect(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44566 = arguments.length;
var i__42557__auto___44567 = (0);
while(true){
if((i__42557__auto___44567 < len__42556__auto___44566)){
args__42563__auto__.push((arguments[i__42557__auto___44567]));

var G__44568 = (i__42557__auto___44567 + (1));
i__42557__auto___44567 = G__44568;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.rect.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.rect,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.rect.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.rect.cljs$lang$applyTo = (function (seq44564){
var G__44565 = cljs.core.first.call(null,seq44564);
var seq44564__$1 = cljs.core.next.call(null,seq44564);
return web.CanvasRenderingContext2D.rect.cljs$core$IFn$_invoke$arity$variadic(G__44565,seq44564__$1);
});

/**
 * Method.
 * 
 *   The `web.CanvasRenderingContext2D` method removeHitRegion() removes
 *   given hit region from the canvas.
 * 
 *   `void ctx.removeHitRegion(id);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/removeHitRegion`
 */
web.CanvasRenderingContext2D.remove_hit_region = (function web$CanvasRenderingContext2D$remove_hit_region(this$,id){
return this$.removeHitRegion(id);
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.resetTransform() method of the Canvas
 *   API resets the current transform to the identity matrix.
 * 
 *   `void ctx.resetTransform();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/resetTransform`
 */
web.CanvasRenderingContext2D.reset_transform = (function web$CanvasRenderingContext2D$reset_transform(this$){
return this$.resetTransform();
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.restore() method of the Canvas 2D
 *   restores the most recently saved canvas state by popping the
 *   entry in the drawing state stack. If there is no saved state,
 *   method does nothing.
 * 
 *   `void ctx.restore();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/restore`
 */
web.CanvasRenderingContext2D.restore = (function web$CanvasRenderingContext2D$restore(this$){
return this$.restore();
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.rotate() method of the Canvas 2D
 *   adds a rotation to the transformation matrix.
 * 
 *   `void ctx.rotate(angle);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/rotate`
 */
web.CanvasRenderingContext2D.rotate = (function web$CanvasRenderingContext2D$rotate(this$,angle){
return this$.rotate(angle);
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.save() method of the Canvas 2D API
 *   the entire state of the canvas by pushing the current state onto
 *   stack.
 * 
 *   `void ctx.save();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/save`
 */
web.CanvasRenderingContext2D.save = (function web$CanvasRenderingContext2D$save(this$){
return this$.save();
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.scale() method of the Canvas 2D
 *   adds a scaling transformation to the canvas units horizontally
 *   vertically.
 * 
 *   `void ctx.scale(x, y);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale`
 */
web.CanvasRenderingContext2D.scale = (function web$CanvasRenderingContext2D$scale(this$,x,y){
return this$.scale(x,y);
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.scrollPathIntoView() method of the
 *   2D API scrolls the current or given path into view. It is similar
 *   `web.Element.scrollIntoView()`.
 * 
 *   `void ctx.scrollPathIntoView();
 *   void ctx.scrollPathIntoView(path);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scrollPathIntoView`
 */
web.CanvasRenderingContext2D.scroll_path_into_view = (function web$CanvasRenderingContext2D$scroll_path_into_view(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44571 = arguments.length;
var i__42557__auto___44572 = (0);
while(true){
if((i__42557__auto___44572 < len__42556__auto___44571)){
args__42563__auto__.push((arguments[i__42557__auto___44572]));

var G__44573 = (i__42557__auto___44572 + (1));
i__42557__auto___44572 = G__44573;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.scroll_path_into_view.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.scroll_path_into_view.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.scrollPathIntoView,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.scroll_path_into_view.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.scroll_path_into_view.cljs$lang$applyTo = (function (seq44569){
var G__44570 = cljs.core.first.call(null,seq44569);
var seq44569__$1 = cljs.core.next.call(null,seq44569);
return web.CanvasRenderingContext2D.scroll_path_into_view.cljs$core$IFn$_invoke$arity$variadic(G__44570,seq44569__$1);
});

/**
 * Method.
 * 
 *   The setLineDash() method of the Canvas 2D API's `web.CanvasRenderingContext2D`
 *   sets the line dash pattern used when stroking lines. It uses
 *   array of values that specify alternating lengths of lines and
 *   which describe the pattern.
 * 
 *   `ctx.setLineDash(segments);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash`
 */
web.CanvasRenderingContext2D.set_line_dash = (function web$CanvasRenderingContext2D$set_line_dash(this$,segments){
return this$.setLineDash(segments);
});
/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.setTransform() method of the Canvas
 *   API resets (overrides) the current transformation to the identity
 *   and then invokes a transformation described by the arguments
 *   this method. This lets you scale, rotate, translate (move), and
 *   the context.
 * 
 *   `void ctx.setTransform(a, b, c, d, e, f);
 * 
 *   The transformation matrix is described by: [acebdf001]\\left[ \\begin{array}{ccc} a & c & e \\\\ b & d & f \\\\ 0 & 0 & 1 \\end{array} \\right]`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setTransform`
 */
web.CanvasRenderingContext2D.set_transform = (function web$CanvasRenderingContext2D$set_transform(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44576 = arguments.length;
var i__42557__auto___44577 = (0);
while(true){
if((i__42557__auto___44577 < len__42556__auto___44576)){
args__42563__auto__.push((arguments[i__42557__auto___44577]));

var G__44578 = (i__42557__auto___44577 + (1));
i__42557__auto___44577 = G__44578;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.set_transform.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.set_transform.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setTransform,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.set_transform.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.set_transform.cljs$lang$applyTo = (function (seq44574){
var G__44575 = cljs.core.first.call(null,seq44574);
var seq44574__$1 = cljs.core.next.call(null,seq44574);
return web.CanvasRenderingContext2D.set_transform.cljs$core$IFn$_invoke$arity$variadic(G__44575,seq44574__$1);
});

/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.stroke() method of the Canvas 2D
 *   strokes (outlines) the current or given path with the current
 *   style.
 * 
 *   `void ctx.stroke();
 *   void ctx.stroke(path);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke`
 */
web.CanvasRenderingContext2D.stroke = (function web$CanvasRenderingContext2D$stroke(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44581 = arguments.length;
var i__42557__auto___44582 = (0);
while(true){
if((i__42557__auto___44582 < len__42556__auto___44581)){
args__42563__auto__.push((arguments[i__42557__auto___44582]));

var G__44583 = (i__42557__auto___44582 + (1));
i__42557__auto___44582 = G__44583;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.stroke.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.stroke.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.stroke,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.stroke.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.stroke.cljs$lang$applyTo = (function (seq44579){
var G__44580 = cljs.core.first.call(null,seq44579);
var seq44579__$1 = cljs.core.next.call(null,seq44579);
return web.CanvasRenderingContext2D.stroke.cljs$core$IFn$_invoke$arity$variadic(G__44580,seq44579__$1);
});

/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.strokeRect() method of the Canvas
 *   API draws a rectangle that is stroked (outlined) according to
 *   current `web.strokeStyle` and other context settings.
 * 
 *   `void ctx.strokeRect(x, y, width, height);
 * 
 *   The strokeRect() method draws a stroked rectangle whose starting point is at (x, y) and whose size is specified by width and height.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeRect`
 */
web.CanvasRenderingContext2D.stroke_rect = (function web$CanvasRenderingContext2D$stroke_rect(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44586 = arguments.length;
var i__42557__auto___44587 = (0);
while(true){
if((i__42557__auto___44587 < len__42556__auto___44586)){
args__42563__auto__.push((arguments[i__42557__auto___44587]));

var G__44588 = (i__42557__auto___44587 + (1));
i__42557__auto___44587 = G__44588;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.stroke_rect.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.stroke_rect.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.strokeRect,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.stroke_rect.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.stroke_rect.cljs$lang$applyTo = (function (seq44584){
var G__44585 = cljs.core.first.call(null,seq44584);
var seq44584__$1 = cljs.core.next.call(null,seq44584);
return web.CanvasRenderingContext2D.stroke_rect.cljs$core$IFn$_invoke$arity$variadic(G__44585,seq44584__$1);
});

/**
 * Method.
 * 
 *   The `web.CanvasRenderingContext2D` method strokeText(), part
 *   the Canvas 2D API, strokes — that is, draws the outlines of —
 *   characters of a text string at the specified coordinates. An
 *   parameter allows specifying a maximum width for the rendered
 *   which the user agent will achieve by condensing the text or by
 *   a lower font size.
 * 
 *   `CanvasRenderingContext2D.strokeText(text, x, y [, maxWidth]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeText`
 */
web.CanvasRenderingContext2D.stroke_text = (function web$CanvasRenderingContext2D$stroke_text(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44591 = arguments.length;
var i__42557__auto___44592 = (0);
while(true){
if((i__42557__auto___44592 < len__42556__auto___44591)){
args__42563__auto__.push((arguments[i__42557__auto___44592]));

var G__44593 = (i__42557__auto___44592 + (1));
i__42557__auto___44592 = G__44593;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.stroke_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.stroke_text.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.strokeText,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.stroke_text.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.stroke_text.cljs$lang$applyTo = (function (seq44589){
var G__44590 = cljs.core.first.call(null,seq44589);
var seq44589__$1 = cljs.core.next.call(null,seq44589);
return web.CanvasRenderingContext2D.stroke_text.cljs$core$IFn$_invoke$arity$variadic(G__44590,seq44589__$1);
});

/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.transform() method of the Canvas
 *   API multiplies the current transformation with the matrix described
 *   the arguments of this method. This lets you scale, rotate, translate
 *   and skew the context.
 * 
 *   `void ctx.transform(a, b, c, d, e, f);
 * 
 *   The transformation matrix is described by: [acebdf001]\\left[ \\begin{array}{ccc} a & c & e \\\\ b & d & f \\\\ 0 & 0 & 1 \\end{array} \\right]`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/transform`
 */
web.CanvasRenderingContext2D.transform = (function web$CanvasRenderingContext2D$transform(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44596 = arguments.length;
var i__42557__auto___44597 = (0);
while(true){
if((i__42557__auto___44597 < len__42556__auto___44596)){
args__42563__auto__.push((arguments[i__42557__auto___44597]));

var G__44598 = (i__42557__auto___44597 + (1));
i__42557__auto___44597 = G__44598;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.transform.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.transform.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.transform,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.transform.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.transform.cljs$lang$applyTo = (function (seq44594){
var G__44595 = cljs.core.first.call(null,seq44594);
var seq44594__$1 = cljs.core.next.call(null,seq44594);
return web.CanvasRenderingContext2D.transform.cljs$core$IFn$_invoke$arity$variadic(G__44595,seq44594__$1);
});

/**
 * Method.
 * 
 *   The CanvasRenderingContext2D.translate() method of the Canvas
 *   API adds a translation transformation to the current matrix.
 * 
 *   `void ctx.translate(x, y);
 * 
 *   The translate() method adds a translation transformation to the current matrix by moving the canvas and its origin x units horizontally and y units vertically on the grid.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/translate`
 */
web.CanvasRenderingContext2D.translate = (function web$CanvasRenderingContext2D$translate(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44601 = arguments.length;
var i__42557__auto___44602 = (0);
while(true){
if((i__42557__auto___44602 < len__42556__auto___44601)){
args__42563__auto__.push((arguments[i__42557__auto___44602]));

var G__44603 = (i__42557__auto___44602 + (1));
i__42557__auto___44602 = G__44603;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.CanvasRenderingContext2D.translate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.CanvasRenderingContext2D.translate.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.translate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.CanvasRenderingContext2D.translate.cljs$lang$maxFixedArity = (1);

web.CanvasRenderingContext2D.translate.cljs$lang$applyTo = (function (seq44599){
var G__44600 = cljs.core.first.call(null,seq44599);
var seq44599__$1 = cljs.core.next.call(null,seq44599);
return web.CanvasRenderingContext2D.translate.cljs$core$IFn$_invoke$arity$variadic(G__44600,seq44599__$1);
});

/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.canvas property, part of the Canvas
 *   is a read-only reference to the `html.HTMLCanvasElement` object
 *   is associated with a given context. It might be `web.null` if
 *   is no associated `web.<canvas>` element.
 * 
 *   `ctx.canvas;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/canvas`
 */
web.CanvasRenderingContext2D.canvas = (function web$CanvasRenderingContext2D$canvas(this$){
return this$.canvas();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.canvas property, part of the Canvas
 *   is a read-only reference to the `html.HTMLCanvasElement` object
 *   is associated with a given context. It might be `web.null` if
 *   is no associated `web.<canvas>` element.
 * 
 *   `ctx.canvas;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/canvas`
 */
web.CanvasRenderingContext2D.set_canvas_BANG_ = (function web$CanvasRenderingContext2D$set_canvas_BANG_(this$,val){
return (this$["canvas"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.currentTransform property of the
 *   2D API returns or sets a `dom.DOMMatrix` (current specification)
 *   `svg.SVGMatrix` (old specification) object for the current transformation
 * 
 *   `ctx.currentTransform [= value];
 * 
 * 
 *   value
 *   A `dom.DOMMatrix` or `svg.SVGMatrix`   object to use as the current transformation matrix.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/currentTransform`
 */
web.CanvasRenderingContext2D.current_transform = (function web$CanvasRenderingContext2D$current_transform(this$){
return this$.currentTransform();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.currentTransform property of the
 *   2D API returns or sets a `dom.DOMMatrix` (current specification)
 *   `svg.SVGMatrix` (old specification) object for the current transformation
 * 
 *   `ctx.currentTransform [= value];
 * 
 * 
 *   value
 *   A `dom.DOMMatrix` or `svg.SVGMatrix`   object to use as the current transformation matrix.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/currentTransform`
 */
web.CanvasRenderingContext2D.set_current_transform_BANG_ = (function web$CanvasRenderingContext2D$set_current_transform_BANG_(this$,val){
return (this$["currentTransform"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.direction property of the Canvas
 *   API specifies the current text direction used to draw text.
 * 
 *   `ctx.direction = \"ltr\" || \"rtl\" || \"inherit\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/direction`
 */
web.CanvasRenderingContext2D.direction = (function web$CanvasRenderingContext2D$direction(this$){
return this$.direction();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.direction property of the Canvas
 *   API specifies the current text direction used to draw text.
 * 
 *   `ctx.direction = \"ltr\" || \"rtl\" || \"inherit\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/direction`
 */
web.CanvasRenderingContext2D.set_direction_BANG_ = (function web$CanvasRenderingContext2D$set_direction_BANG_(this$,val){
return (this$["direction"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.fillStyle property of the Canvas
 *   API specifies the color, gradient, or pattern to use inside shapes.
 *   default style is #000 (black).
 * 
 *   `ctx.fillStyle = color;
 *   ctx.fillStyle = gradient;
 *   ctx.fillStyle = pattern;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle`
 */
web.CanvasRenderingContext2D.fill_style = (function web$CanvasRenderingContext2D$fill_style(this$){
return this$.fillStyle();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.fillStyle property of the Canvas
 *   API specifies the color, gradient, or pattern to use inside shapes.
 *   default style is #000 (black).
 * 
 *   `ctx.fillStyle = color;
 *   ctx.fillStyle = gradient;
 *   ctx.fillStyle = pattern;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle`
 */
web.CanvasRenderingContext2D.set_fill_style_BANG_ = (function web$CanvasRenderingContext2D$set_fill_style_BANG_(this$,val){
return (this$["fillStyle"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.filter property of the Canvas 2D
 *   provides filter effects such as blurring and grayscaling. It
 *   similar to the CSS `web.filter` property and accepts the same
 * 
 *   `ctx.filter = \"<filter-function1> [<filter-function2>] [<filter-functionN>]\";
 *   ctx.filter = \"none\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter`
 */
web.CanvasRenderingContext2D.filter = (function web$CanvasRenderingContext2D$filter(this$){
return this$.filter();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.filter property of the Canvas 2D
 *   provides filter effects such as blurring and grayscaling. It
 *   similar to the CSS `web.filter` property and accepts the same
 * 
 *   `ctx.filter = \"<filter-function1> [<filter-function2>] [<filter-functionN>]\";
 *   ctx.filter = \"none\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/filter`
 */
web.CanvasRenderingContext2D.set_filter_BANG_ = (function web$CanvasRenderingContext2D$set_filter_BANG_(this$,val){
return (this$["filter"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.font property of the Canvas 2D API
 *   the current text style to use when drawing text. This string
 *   the same syntax as the CSS font specifier.
 * 
 *   `ctx.font = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font`
 */
web.CanvasRenderingContext2D.font = (function web$CanvasRenderingContext2D$font(this$){
return this$.font();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.font property of the Canvas 2D API
 *   the current text style to use when drawing text. This string
 *   the same syntax as the CSS font specifier.
 * 
 *   `ctx.font = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/font`
 */
web.CanvasRenderingContext2D.set_font_BANG_ = (function web$CanvasRenderingContext2D$set_font_BANG_(this$,val){
return (this$["font"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.globalAlpha property of the Canvas
 *   API specifies the alpha (transparency) value that is applied
 *   shapes and images before they are drawn onto the canvas.
 * 
 *   `ctx.globalAlpha = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalAlpha`
 */
web.CanvasRenderingContext2D.global_alpha = (function web$CanvasRenderingContext2D$global_alpha(this$){
return this$.globalAlpha();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.globalAlpha property of the Canvas
 *   API specifies the alpha (transparency) value that is applied
 *   shapes and images before they are drawn onto the canvas.
 * 
 *   `ctx.globalAlpha = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalAlpha`
 */
web.CanvasRenderingContext2D.set_global_alpha_BANG_ = (function web$CanvasRenderingContext2D$set_global_alpha_BANG_(this$,val){
return (this$["globalAlpha"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.globalCompositeOperation property
 *   the Canvas 2D API sets the type of compositing operation to apply
 *   drawing new shapes.
 * 
 *   `ctx.globalCompositeOperation = type;
 * 
 *   type is a `web.String` identifying which of the compositing or blending mode operations to use.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation`
 */
web.CanvasRenderingContext2D.global_composite_operation = (function web$CanvasRenderingContext2D$global_composite_operation(this$){
return this$.globalCompositeOperation();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.globalCompositeOperation property
 *   the Canvas 2D API sets the type of compositing operation to apply
 *   drawing new shapes.
 * 
 *   `ctx.globalCompositeOperation = type;
 * 
 *   type is a `web.String` identifying which of the compositing or blending mode operations to use.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation`
 */
web.CanvasRenderingContext2D.set_global_composite_operation_BANG_ = (function web$CanvasRenderingContext2D$set_global_composite_operation_BANG_(this$,val){
return (this$["globalCompositeOperation"] = val);
});
/**
 * Property.
 * 
 *   The imageSmoothingEnabled property of the `web.CanvasRenderingContext2D`
 *   part of the Canvas API, determines whether scaled images are
 *   (true, default) or not (false). On getting the imageSmoothingEnabled
 *   the last value it was set to is returned.
 * 
 *   `ctx.imageSmoothingEnabled = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled`
 */
web.CanvasRenderingContext2D.image_smoothing_enabled = (function web$CanvasRenderingContext2D$image_smoothing_enabled(this$){
return this$.imageSmoothingEnabled();
});
/**
 * Property.
 * 
 *   The imageSmoothingEnabled property of the `web.CanvasRenderingContext2D`
 *   part of the Canvas API, determines whether scaled images are
 *   (true, default) or not (false). On getting the imageSmoothingEnabled
 *   the last value it was set to is returned.
 * 
 *   `ctx.imageSmoothingEnabled = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingEnabled`
 */
web.CanvasRenderingContext2D.set_image_smoothing_enabled_BANG_ = (function web$CanvasRenderingContext2D$set_image_smoothing_enabled_BANG_(this$,val){
return (this$["imageSmoothingEnabled"] = val);
});
/**
 * Property.
 * 
 *   The imageSmoothingQuality property of the `web.CanvasRenderingContext2D`
 *   part of the Canvas API, lets you set the quality of image smoothing.
 * 
 *   `ctx.imageSmoothingQuality = \"low\" || \"medium\" || \"high\"`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality`
 */
web.CanvasRenderingContext2D.image_smoothing_quality = (function web$CanvasRenderingContext2D$image_smoothing_quality(this$){
return this$.imageSmoothingQuality();
});
/**
 * Property.
 * 
 *   The imageSmoothingQuality property of the `web.CanvasRenderingContext2D`
 *   part of the Canvas API, lets you set the quality of image smoothing.
 * 
 *   `ctx.imageSmoothingQuality = \"low\" || \"medium\" || \"high\"`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/imageSmoothingQuality`
 */
web.CanvasRenderingContext2D.set_image_smoothing_quality_BANG_ = (function web$CanvasRenderingContext2D$set_image_smoothing_quality_BANG_(this$,val){
return (this$["imageSmoothingQuality"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.lineCap property of the Canvas 2D
 *   determines the shape used to draw the end points of lines.
 * 
 *   `ctx.lineCap = \"butt\" || \"round\" || \"square\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap`
 */
web.CanvasRenderingContext2D.line_cap = (function web$CanvasRenderingContext2D$line_cap(this$){
return this$.lineCap();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.lineCap property of the Canvas 2D
 *   determines the shape used to draw the end points of lines.
 * 
 *   `ctx.lineCap = \"butt\" || \"round\" || \"square\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap`
 */
web.CanvasRenderingContext2D.set_line_cap_BANG_ = (function web$CanvasRenderingContext2D$set_line_cap_BANG_(this$,val){
return (this$["lineCap"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.lineDashOffset property of the Canvas
 *   API sets the line dash offset, or \"phase.\"
 * 
 *   `ctx.lineDashOffset = value;
 * 
 * 
 *   value
 *   A float specifying the amount of the line dash offset. The default value is 0.0.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset`
 */
web.CanvasRenderingContext2D.line_dash_offset = (function web$CanvasRenderingContext2D$line_dash_offset(this$){
return this$.lineDashOffset();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.lineDashOffset property of the Canvas
 *   API sets the line dash offset, or \"phase.\"
 * 
 *   `ctx.lineDashOffset = value;
 * 
 * 
 *   value
 *   A float specifying the amount of the line dash offset. The default value is 0.0.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset`
 */
web.CanvasRenderingContext2D.set_line_dash_offset_BANG_ = (function web$CanvasRenderingContext2D$set_line_dash_offset_BANG_(this$,val){
return (this$["lineDashOffset"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.lineJoin property of the Canvas
 *   API determines the shape used to join two line segments where
 *   meet.
 * 
 *   `ctx.lineJoin = \"bevel\" || \"round\" || \"miter\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin`
 */
web.CanvasRenderingContext2D.line_join = (function web$CanvasRenderingContext2D$line_join(this$){
return this$.lineJoin();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.lineJoin property of the Canvas
 *   API determines the shape used to join two line segments where
 *   meet.
 * 
 *   `ctx.lineJoin = \"bevel\" || \"round\" || \"miter\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin`
 */
web.CanvasRenderingContext2D.set_line_join_BANG_ = (function web$CanvasRenderingContext2D$set_line_join_BANG_(this$,val){
return (this$["lineJoin"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.lineWidth property of the Canvas
 *   API sets the thickness of lines.
 * 
 *   `ctx.lineWidth = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth`
 */
web.CanvasRenderingContext2D.line_width = (function web$CanvasRenderingContext2D$line_width(this$){
return this$.lineWidth();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.lineWidth property of the Canvas
 *   API sets the thickness of lines.
 * 
 *   `ctx.lineWidth = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth`
 */
web.CanvasRenderingContext2D.set_line_width_BANG_ = (function web$CanvasRenderingContext2D$set_line_width_BANG_(this$,val){
return (this$["lineWidth"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.miterLimit property of the Canvas
 *   API sets the miter limit ratio.
 * 
 *   `ctx.miterLimit = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit`
 */
web.CanvasRenderingContext2D.miter_limit = (function web$CanvasRenderingContext2D$miter_limit(this$){
return this$.miterLimit();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.miterLimit property of the Canvas
 *   API sets the miter limit ratio.
 * 
 *   `ctx.miterLimit = value;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/miterLimit`
 */
web.CanvasRenderingContext2D.set_miter_limit_BANG_ = (function web$CanvasRenderingContext2D$set_miter_limit_BANG_(this$,val){
return (this$["miterLimit"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.shadowBlur property of the Canvas
 *   API specifies the amount of blur applied to shadows. The default
 *   0 (no blur).
 * 
 *   `ctx.shadowBlur = level;
 * 
 * 
 *   level
 *   A non-negative float specifying the level of shadow blur, where 0 represents no blur and larger numbers represent increasingly more blur. This value doesn't correspond to a number of pixels, and is not affected by the current transformation matrix. The default value is 0. Negative, `web.Infinity`, and `web.NaN` values are ignored.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur`
 */
web.CanvasRenderingContext2D.shadow_blur = (function web$CanvasRenderingContext2D$shadow_blur(this$){
return this$.shadowBlur();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.shadowBlur property of the Canvas
 *   API specifies the amount of blur applied to shadows. The default
 *   0 (no blur).
 * 
 *   `ctx.shadowBlur = level;
 * 
 * 
 *   level
 *   A non-negative float specifying the level of shadow blur, where 0 represents no blur and larger numbers represent increasingly more blur. This value doesn't correspond to a number of pixels, and is not affected by the current transformation matrix. The default value is 0. Negative, `web.Infinity`, and `web.NaN` values are ignored.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur`
 */
web.CanvasRenderingContext2D.set_shadow_blur_BANG_ = (function web$CanvasRenderingContext2D$set_shadow_blur_BANG_(this$,val){
return (this$["shadowBlur"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.shadowColor property of the Canvas
 *   API specifies the color of shadows.
 * 
 *   `ctx.shadowColor = color;
 * 
 * 
 *   color
 *   A `dom.DOMString` parsed as a CSS `web.<color>` value. The default value is fully-transparent black.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor`
 */
web.CanvasRenderingContext2D.shadow_color = (function web$CanvasRenderingContext2D$shadow_color(this$){
return this$.shadowColor();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.shadowColor property of the Canvas
 *   API specifies the color of shadows.
 * 
 *   `ctx.shadowColor = color;
 * 
 * 
 *   color
 *   A `dom.DOMString` parsed as a CSS `web.<color>` value. The default value is fully-transparent black.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor`
 */
web.CanvasRenderingContext2D.set_shadow_color_BANG_ = (function web$CanvasRenderingContext2D$set_shadow_color_BANG_(this$,val){
return (this$["shadowColor"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.shadowOffsetX property of the Canvas
 *   API specifies the distance that shadows will be offset horizontally.
 * 
 *   `ctx.shadowOffsetX = offset;
 * 
 * 
 *   offset
 *   A float specifying the distance that shadows will be offset horizontally. Positive values are to the right, and negative to the left. The default value is 0 (no horizontal offset). `web.Infinity` and `web.NaN` values are ignored.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX`
 */
web.CanvasRenderingContext2D.shadow_offset_x = (function web$CanvasRenderingContext2D$shadow_offset_x(this$){
return this$.shadowOffsetX();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.shadowOffsetX property of the Canvas
 *   API specifies the distance that shadows will be offset horizontally.
 * 
 *   `ctx.shadowOffsetX = offset;
 * 
 * 
 *   offset
 *   A float specifying the distance that shadows will be offset horizontally. Positive values are to the right, and negative to the left. The default value is 0 (no horizontal offset). `web.Infinity` and `web.NaN` values are ignored.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX`
 */
web.CanvasRenderingContext2D.set_shadow_offset_x_BANG_ = (function web$CanvasRenderingContext2D$set_shadow_offset_x_BANG_(this$,val){
return (this$["shadowOffsetX"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.shadowOffsetY property of the Canvas
 *   API specifies the distance that shadows will be offset vertically.
 * 
 *   `ctx.shadowOffsetY = offset;
 * 
 * 
 *   offset
 *   A float specifying the distance that shadows will be offset vertically. Positive values are down, and negative are up. The default value is 0 (no vertical offset). `web.Infinity` and `web.NaN` values are ignored.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY`
 */
web.CanvasRenderingContext2D.shadow_offset_y = (function web$CanvasRenderingContext2D$shadow_offset_y(this$){
return this$.shadowOffsetY();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.shadowOffsetY property of the Canvas
 *   API specifies the distance that shadows will be offset vertically.
 * 
 *   `ctx.shadowOffsetY = offset;
 * 
 * 
 *   offset
 *   A float specifying the distance that shadows will be offset vertically. Positive values are down, and negative are up. The default value is 0 (no vertical offset). `web.Infinity` and `web.NaN` values are ignored.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY`
 */
web.CanvasRenderingContext2D.set_shadow_offset_y_BANG_ = (function web$CanvasRenderingContext2D$set_shadow_offset_y_BANG_(this$,val){
return (this$["shadowOffsetY"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.strokeStyle property of the Canvas
 *   API specifies the color, gradient, or pattern to use for the
 *   (outlines) around shapes. The default is #000 (black).
 * 
 *   `ctx.strokeStyle = color;
 *   ctx.strokeStyle = gradient;
 *   ctx.strokeStyle = pattern;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle`
 */
web.CanvasRenderingContext2D.stroke_style = (function web$CanvasRenderingContext2D$stroke_style(this$){
return this$.strokeStyle();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.strokeStyle property of the Canvas
 *   API specifies the color, gradient, or pattern to use for the
 *   (outlines) around shapes. The default is #000 (black).
 * 
 *   `ctx.strokeStyle = color;
 *   ctx.strokeStyle = gradient;
 *   ctx.strokeStyle = pattern;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle`
 */
web.CanvasRenderingContext2D.set_stroke_style_BANG_ = (function web$CanvasRenderingContext2D$set_stroke_style_BANG_(this$,val){
return (this$["strokeStyle"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.textAlign property of the Canvas
 *   API specifies the current text alignment used when drawing text.
 * 
 *   `ctx.textAlign = \"left\" || \"right\" || \"center\" || \"start\" || \"end\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign`
 */
web.CanvasRenderingContext2D.text_align = (function web$CanvasRenderingContext2D$text_align(this$){
return this$.textAlign();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.textAlign property of the Canvas
 *   API specifies the current text alignment used when drawing text.
 * 
 *   `ctx.textAlign = \"left\" || \"right\" || \"center\" || \"start\" || \"end\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textAlign`
 */
web.CanvasRenderingContext2D.set_text_align_BANG_ = (function web$CanvasRenderingContext2D$set_text_align_BANG_(this$,val){
return (this$["textAlign"] = val);
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.textBaseline property of the Canvas
 *   API specifies the current text baseline used when drawing text.
 * 
 *   `ctx.textBaseline = \"top\" || \"hanging\" || \"middle\" || \"alphabetic\" || \"ideographic\" || \"bottom\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline`
 */
web.CanvasRenderingContext2D.text_baseline = (function web$CanvasRenderingContext2D$text_baseline(this$){
return this$.textBaseline();
});
/**
 * Property.
 * 
 *   The CanvasRenderingContext2D.textBaseline property of the Canvas
 *   API specifies the current text baseline used when drawing text.
 * 
 *   `ctx.textBaseline = \"top\" || \"hanging\" || \"middle\" || \"alphabetic\" || \"ideographic\" || \"bottom\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/textBaseline`
 */
web.CanvasRenderingContext2D.set_text_baseline_BANG_ = (function web$CanvasRenderingContext2D$set_text_baseline_BANG_(this$,val){
return (this$["textBaseline"] = val);
});

//# sourceMappingURL=CanvasRenderingContext2D.js.map?rel=1565798814955
