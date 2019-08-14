// Compiled by ClojureScript 1.9.946 {}
goog.provide('html.HTMLCanvasElement');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The `html.HTMLCanvasElement` captureStream() method returns a
 *   which includes a `web.CanvasCaptureMediaStreamTrack` containing
 *   real-time video capture of the canvas's contents.
 * 
 *   `MediaStream = canvas.captureStream(frameRate);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/captureStream`
 */
html.HTMLCanvasElement.capture_stream = (function html$HTMLCanvasElement$capture_stream(this$,frame_rate){
return this$.captureStream(frame_rate);
});
/**
 * Method.
 * 
 *   The HTMLCanvasElement.getContext() method returns a drawing context
 *   the canvas, or `web.null` if the context identifier is not supported.
 * 
 *   `var ctx = canvas.getContext(contextType);
 *   var ctx = canvas.getContext(contextType, contextAttributes);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext`
 */
html.HTMLCanvasElement.get_context = (function html$HTMLCanvasElement$get_context(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52982 = arguments.length;
var i__42557__auto___52983 = (0);
while(true){
if((i__42557__auto___52983 < len__42556__auto___52982)){
args__42563__auto__.push((arguments[i__42557__auto___52983]));

var G__52984 = (i__42557__auto___52983 + (1));
i__42557__auto___52983 = G__52984;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return html.HTMLCanvasElement.get_context.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

html.HTMLCanvasElement.get_context.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getContext,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

html.HTMLCanvasElement.get_context.cljs$lang$maxFixedArity = (1);

html.HTMLCanvasElement.get_context.cljs$lang$applyTo = (function (seq52980){
var G__52981 = cljs.core.first.call(null,seq52980);
var seq52980__$1 = cljs.core.next.call(null,seq52980);
return html.HTMLCanvasElement.get_context.cljs$core$IFn$_invoke$arity$variadic(G__52981,seq52980__$1);
});

/**
 * Method.
 * 
 *   The HTMLCanvasElement.mozFetchAsStream() internal method used
 *   create a new input stream that, when ready, would provide the
 *   of the canvas as image data. However, this non-standard and internal
 *   has been removed.
 * 
 *   `void canvas.mozFetchAsStream(callback, type);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/mozFetchAsStream`
 */
html.HTMLCanvasElement.moz_fetch_as_stream = (function html$HTMLCanvasElement$moz_fetch_as_stream(this$,callback,type){
return this$.mozFetchAsStream(callback,type);
});
/**
 * Method.
 * 
 *   The HTMLCanvasElement.mozGetAsFile() method returns a `file.File`
 *   representing the image contained in the canvas; this file is
 *   memory-based file, with the specified name. If type is not specified,
 *   image type is image/png.
 * 
 *   `canvas.mozGetAsFile(name, type);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/mozGetAsFile`
 */
html.HTMLCanvasElement.moz_get_as_file = (function html$HTMLCanvasElement$moz_get_as_file(this$,name,type){
return this$.mozGetAsFile(name,type);
});
/**
 * Method.
 * 
 *   The HTMLCanvasElement.toBlob() method creates a `web.Blob` object
 *   the image contained in the canvas; this file may be cached on
 *   disk or stored in memory at the discretion of the user agent.
 *   type is not specified, the image type is image/png. The created
 *   is in a resolution of 96dpi.
 * 
 *   `canvas.toBlob(callback, mimeType, qualityArgument);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob`
 */
html.HTMLCanvasElement.to_blob = (function html$HTMLCanvasElement$to_blob(this$,callback,mime_type,quality_argument){
return this$.toBlob(callback,mime_type,quality_argument);
});
/**
 * Method.
 * 
 *   The HTMLCanvasElement.toDataURL() method returns a data URI containing
 *   representation of the image in the format specified by the type
 *   (defaults to PNG). The returned image is in a resolution of 96
 * 
 *   `canvas.toDataURL(type, encoderOptions);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL`
 */
html.HTMLCanvasElement.to_data_url = (function html$HTMLCanvasElement$to_data_url(this$,type,encoder_options){
return this$.toDataURL(type,encoder_options);
});
/**
 * Method.
 * 
 *   The HTMLCanvasElement.transferControlToOffscreen() method transfers
 *   to an `web.OffscreenCanvas` object, either on the main thread
 *   on a worker.
 * 
 *   `OffscreenCanvas HTMLCanvasElement.transferControlToOffscreen()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/transferControlToOffscreen`
 */
html.HTMLCanvasElement.transfer_control_to_offscreen = (function html$HTMLCanvasElement$transfer_control_to_offscreen(this$){
return this$.transferControlToOffscreen();
});
/**
 * Property.
 * 
 *   The HTMLCanvasElement.height property is a positive integer reflecting
 *   height HTML attribute of the `web.<canvas>` element interpreted
 *   CSS pixels. When the attribute is not specified, or if it is
 *   to an invalid value, like a negative, the default value of 150
 *   used.
 * 
 *   `var pxl = canvas.height;
 *   canvas.height = pxl;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/height`
 */
html.HTMLCanvasElement.height = (function html$HTMLCanvasElement$height(this$){
return this$.height();
});
/**
 * Property.
 * 
 *   The HTMLCanvasElement.height property is a positive integer reflecting
 *   height HTML attribute of the `web.<canvas>` element interpreted
 *   CSS pixels. When the attribute is not specified, or if it is
 *   to an invalid value, like a negative, the default value of 150
 *   used.
 * 
 *   `var pxl = canvas.height;
 *   canvas.height = pxl;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/height`
 */
html.HTMLCanvasElement.set_height_BANG_ = (function html$HTMLCanvasElement$set_height_BANG_(this$,val){
return (this$["height"] = val);
});
/**
 * Property.
 * 
 *   The non-standard HTMLCanvasElement.mozOpaque property is a `web.Boolean`
 *   the moz-opaque HTML attribute of the `web.<canvas>` element.
 *   lets the canvas know whether or not translucency will be a factor.
 *   the canvas knows there's no translucency, painting performance
 *   be optimized.
 * 
 *   `var opaque = canvas.mozOpaque;
 *   canvas.mozOpaque = true;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/mozOpaque`
 */
html.HTMLCanvasElement.moz_opaque = (function html$HTMLCanvasElement$moz_opaque(this$){
return this$.mozOpaque();
});
/**
 * Property.
 * 
 *   The non-standard HTMLCanvasElement.mozOpaque property is a `web.Boolean`
 *   the moz-opaque HTML attribute of the `web.<canvas>` element.
 *   lets the canvas know whether or not translucency will be a factor.
 *   the canvas knows there's no translucency, painting performance
 *   be optimized.
 * 
 *   `var opaque = canvas.mozOpaque;
 *   canvas.mozOpaque = true;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/mozOpaque`
 */
html.HTMLCanvasElement.set_moz_opaque_BANG_ = (function html$HTMLCanvasElement$set_moz_opaque_BANG_(this$,val){
return (this$["mozOpaque"] = val);
});
/**
 * Property.
 * 
 *   The HTMLCanvasElement.width property is a positive integer reflecting
 *   width HTML attribute of the `web.<canvas>` element interpreted
 *   CSS pixels. When the attribute is not specified, or if it is
 *   to an invalid value, like a negative, the default value of 300
 *   used.
 * 
 *   `var pxl = canvas.width;
 *   canvas.width = pxl;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/width`
 */
html.HTMLCanvasElement.width = (function html$HTMLCanvasElement$width(this$){
return this$.width();
});
/**
 * Property.
 * 
 *   The HTMLCanvasElement.width property is a positive integer reflecting
 *   width HTML attribute of the `web.<canvas>` element interpreted
 *   CSS pixels. When the attribute is not specified, or if it is
 *   to an invalid value, like a negative, the default value of 300
 *   used.
 * 
 *   `var pxl = canvas.width;
 *   canvas.width = pxl;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/width`
 */
html.HTMLCanvasElement.set_width_BANG_ = (function html$HTMLCanvasElement$set_width_BANG_(this$,val){
return (this$["width"] = val);
});

//# sourceMappingURL=HTMLCanvasElement.js.map?rel=1565798861284
