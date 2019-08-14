// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ImageData');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ImageData() constructor returns a newly instantiated `web.ImageData` object built from the typed array given and having the specified width and height.
 * 
 *   array Optional
 *   A `web.Uint8ClampedArray` containing the underlying pixel representation of the image. If no such array is given, an image with a black rectangle of the specified width and height will be created.
 *   width
 *   An unsigned long representing the width of the image.
 *   height
 *   An unsigned long representing the height of the image. This value is optional if an array is given: the height will be inferred from the array's size and the given width.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/ImageData`
 */
web.ImageData.constructor$ = ImageData;
/**
 * Property.
 * 
 *   The readonly ImageData.data property returns a `web.Uint8ClampedArray`
 *   contains the `web.ImageData` object's pixel data. Data is stored
 *   a one-dimensional array in the RGBA order, with integer values
 *   0 and 255 (inclusive).
 * 
 *   `imageData.data`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data`
 */
web.ImageData.data = (function web$ImageData$data(this$){
return this$.data();
});
/**
 * Property.
 * 
 *   The readonly ImageData.data property returns a `web.Uint8ClampedArray`
 *   contains the `web.ImageData` object's pixel data. Data is stored
 *   a one-dimensional array in the RGBA order, with integer values
 *   0 and 255 (inclusive).
 * 
 *   `imageData.data`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/data`
 */
web.ImageData.set_data_BANG_ = (function web$ImageData$set_data_BANG_(this$,val){
return (this$["data"] = val);
});
/**
 * Property.
 * 
 *   The readonly ImageData.height property returns the number of
 *   in the `web.ImageData` object.
 * 
 *   `imageData.height`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/height`
 */
web.ImageData.height = (function web$ImageData$height(this$){
return this$.height();
});
/**
 * Property.
 * 
 *   The readonly ImageData.height property returns the number of
 *   in the `web.ImageData` object.
 * 
 *   `imageData.height`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/height`
 */
web.ImageData.set_height_BANG_ = (function web$ImageData$set_height_BANG_(this$,val){
return (this$["height"] = val);
});
/**
 * Property.
 * 
 *   The readonly ImageData.width property returns the number of pixels
 *   row in the `web.ImageData` object.
 * 
 *   `imageData.width`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/width`
 */
web.ImageData.width = (function web$ImageData$width(this$){
return this$.width();
});
/**
 * Property.
 * 
 *   The readonly ImageData.width property returns the number of pixels
 *   row in the `web.ImageData` object.
 * 
 *   `imageData.width`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageData/width`
 */
web.ImageData.set_width_BANG_ = (function web$ImageData$set_width_BANG_(this$,val){
return (this$["width"] = val);
});

//# sourceMappingURL=ImageData.js.map?rel=1565798842459
