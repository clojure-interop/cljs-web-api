// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.OffscreenCanvas');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The OffscreenCanvas() constructor returns a newly instantiated `web.OffscreenCanvas` object.
 * 
 *   width
 *   The width of the offscreen canvas.
 *   height
 *   The height of the offscreen canvas.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/OffscreenCanvas`
 */
web.OffscreenCanvas.constructor$ = OffscreenCanvas;
/**
 * Method.
 * 
 *   The OffscreenCanvas.convertToBlob() method creates a `web.Blob`
 *   representing the image contained in the canvas.
 * 
 *   `Promise<Blob> OffscreenCanvas.convertToBlob(options);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/toBlob`
 */
web.OffscreenCanvas.convert_to_blob = (function web$OffscreenCanvas$convert_to_blob(this$,options){
return this$.convertToBlob(options);
});
/**
 * Method.
 * 
 *   The OffscreenCanvas.getContext() method returns a drawing context
 *   an offscreen canvas, or `web.null` if the context identifier
 *   not supported.
 * 
 *   `offscreen.getContext(contextType, contextAttributes);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/getContext`
 */
web.OffscreenCanvas.get_context = (function web$OffscreenCanvas$get_context(this$,context_type,context_attributes){
return this$.getContext(context_type,context_attributes);
});
/**
 * Method.
 * 
 *   The OffscreenCanvas.transferToImageBitmap() method creates an
 *   object from the most recently rendered image of the OffscreenCanvas.
 * 
 *   `ImageBitmap OffscreenCanvas.transferToImageBitmap()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/transferToImageBitmap`
 */
web.OffscreenCanvas.transfer_to_image_bitmap = (function web$OffscreenCanvas$transfer_to_image_bitmap(this$){
return this$.transferToImageBitmap();
});
/**
 * Property.
 * 
 *   The height property returns and sets the height of an `web.OffscreenCanvas`
 * 
 *   `var pxl = offscreen.height;
 *   offscreen.height = pxl;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/height`
 */
web.OffscreenCanvas.height = (function web$OffscreenCanvas$height(this$){
return this$.height();
});
/**
 * Property.
 * 
 *   The height property returns and sets the height of an `web.OffscreenCanvas`
 * 
 *   `var pxl = offscreen.height;
 *   offscreen.height = pxl;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/height`
 */
web.OffscreenCanvas.set_height_BANG_ = (function web$OffscreenCanvas$set_height_BANG_(this$,val){
return (this$["height"] = val);
});
/**
 * Property.
 * 
 *   The width property returns and sets the width of an `web.OffscreenCanvas`
 * 
 *   `var pxl = offscreen.width;
 *   offscreen.width = pxl;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/width`
 */
web.OffscreenCanvas.width = (function web$OffscreenCanvas$width(this$){
return this$.width();
});
/**
 * Property.
 * 
 *   The width property returns and sets the width of an `web.OffscreenCanvas`
 * 
 *   `var pxl = offscreen.width;
 *   offscreen.width = pxl;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OffscreenCanvas/width`
 */
web.OffscreenCanvas.set_width_BANG_ = (function web$OffscreenCanvas$set_width_BANG_(this$,val){
return (this$["width"] = val);
});

//# sourceMappingURL=OffscreenCanvas.js.map?rel=1565798801268
