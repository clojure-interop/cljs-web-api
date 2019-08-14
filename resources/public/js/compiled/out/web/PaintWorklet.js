// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PaintWorklet');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The PaintWorklet.registerPaint() method of the `web.PaintWorklet`
 *   registers a class programmatically generate an image where a
 *   property expects a file.
 * 
 *   `registerPaint(name, class);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/registerPaint`
 */
web.PaintWorklet.register_paint = (function web$PaintWorklet$register_paint(this$,name,class$){
return this$.registerPaint(name,class$);
});
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
web.PaintWorklet.add_module = (function web$PaintWorklet$add_module(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44213 = arguments.length;
var i__42557__auto___44214 = (0);
while(true){
if((i__42557__auto___44214 < len__42556__auto___44213)){
args__42563__auto__.push((arguments[i__42557__auto___44214]));

var G__44215 = (i__42557__auto___44214 + (1));
i__42557__auto___44214 = G__44215;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.PaintWorklet.add_module.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.PaintWorklet.add_module.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.addModule,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.PaintWorklet.add_module.cljs$lang$maxFixedArity = (1);

web.PaintWorklet.add_module.cljs$lang$applyTo = (function (seq44211){
var G__44212 = cljs.core.first.call(null,seq44211);
var seq44211__$1 = cljs.core.next.call(null,seq44211);
return web.PaintWorklet.add_module.cljs$core$IFn$_invoke$arity$variadic(G__44212,seq44211__$1);
});

/**
 * Property.
 * 
 *   The PaintWorklet.devicePixelRatio read-only property of the `web.PaintWorklet`
 *   returns the current device's ratio of physical pixels to logical
 * 
 *   `var devicePixelRatio = paintWorklet.devicePixelRatio;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/devicePizelRatio`
 */
web.PaintWorklet.device_pixel_ratio = (function web$PaintWorklet$device_pixel_ratio(this$){
return this$.devicePixelRatio();
});
/**
 * Property.
 * 
 *   The PaintWorklet.devicePixelRatio read-only property of the `web.PaintWorklet`
 *   returns the current device's ratio of physical pixels to logical
 * 
 *   `var devicePixelRatio = paintWorklet.devicePixelRatio;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/devicePizelRatio`
 */
web.PaintWorklet.set_device_pixel_ratio_BANG_ = (function web$PaintWorklet$set_device_pixel_ratio_BANG_(this$,val){
return (this$["devicePixelRatio"] = val);
});
/**
 * Property.
 * 
 *   The PaintWorklet.devicePixelRatio read-only property of the `web.PaintWorklet`
 *   returns the current device's ratio of physical pixels to logical
 * 
 *   `var devicePixelRatio = paintWorklet.devicePixelRatio;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/Paint%E2%80%8BWorklet%E2%80%8B.device%E2%80%8BPixel%E2%80%8BRatio`
 */
web.PaintWorklet.device​_pixel​_ratio = (function web$PaintWorklet$device​_pixel​_ratio(this$){
return this$.device​Pixel​Ratio();
});
/**
 * Property.
 * 
 *   The PaintWorklet.devicePixelRatio read-only property of the `web.PaintWorklet`
 *   returns the current device's ratio of physical pixels to logical
 * 
 *   `var devicePixelRatio = paintWorklet.devicePixelRatio;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/Paint%E2%80%8BWorklet%E2%80%8B.device%E2%80%8BPixel%E2%80%8BRatio`
 */
web.PaintWorklet.set_device​_pixel​_ratio_BANG_ = (function web$PaintWorklet$set_device​_pixel​_ratio_BANG_(this$,val){
return (this$["device\u200BPixel\u200BRatio"] = val);
});

//# sourceMappingURL=PaintWorklet.js.map?rel=1565798812645
