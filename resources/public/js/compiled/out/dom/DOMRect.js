// Compiled by ClojureScript 1.9.946 {}
goog.provide('dom.DOMRect');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The DOMRect() constructor creates a new `dom.DOMRect` object.
 * 
 *   x
 *   The x coordinate of the DOMRect's origin.
 *   y
 *   The y coordinate of the DOMRect's origin.
 *   width
 *   The width of the DOMRect.
 *   height
 *   The height of the DOMRect.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRect/DOMRect`
 */
dom.DOMRect.constructor$ = DOMRect;
/**
 * Method.
 * 
 *   The fromRect() property of the `dom.DOMRectReadOnly` interface
 *   a new DOMRectReadOnly object with a given location and dimensions.
 * 
 *   `var domRect = DOMRectReadOnly.fromRect(rectangle)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/fromRect`
 */
dom.DOMRect.from_rect = (function dom$DOMRect$from_rect(this$,rectangle){
return this$.fromRect(rectangle);
});
/**
 * Property.
 * 
 *   The x read-only property of the DOMRectReadOnly interface represents
 *   x coordinate of the DOMRect's origin.
 * 
 *   `var recX = DOMRect.x;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/x`
 */
dom.DOMRect.x = (function dom$DOMRect$x(this$){
return this$.x();
});
/**
 * Property.
 * 
 *   The x read-only property of the DOMRectReadOnly interface represents
 *   x coordinate of the DOMRect's origin.
 * 
 *   `var recX = DOMRect.x;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/x`
 */
dom.DOMRect.set_x_BANG_ = (function dom$DOMRect$set_x_BANG_(this$,val){
return (this$["x"] = val);
});
/**
 * Property.
 * 
 *   The y read-only property of the DOMRectReadOnly interface represents
 *   y coordinate of the DOMRect's origin.
 * 
 *   `var recY = DOMRect.y;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/y`
 */
dom.DOMRect.y = (function dom$DOMRect$y(this$){
return this$.y();
});
/**
 * Property.
 * 
 *   The y read-only property of the DOMRectReadOnly interface represents
 *   y coordinate of the DOMRect's origin.
 * 
 *   `var recY = DOMRect.y;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/y`
 */
dom.DOMRect.set_y_BANG_ = (function dom$DOMRect$set_y_BANG_(this$,val){
return (this$["y"] = val);
});
/**
 * Property.
 * 
 *   The width read-only property of the DOMRectReadOnly interface
 *   the width of the DOMRect.
 * 
 *   `var recWidth = DOMRect.width;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/width`
 */
dom.DOMRect.width = (function dom$DOMRect$width(this$){
return this$.width();
});
/**
 * Property.
 * 
 *   The width read-only property of the DOMRectReadOnly interface
 *   the width of the DOMRect.
 * 
 *   `var recWidth = DOMRect.width;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/width`
 */
dom.DOMRect.set_width_BANG_ = (function dom$DOMRect$set_width_BANG_(this$,val){
return (this$["width"] = val);
});
/**
 * Property.
 * 
 *   The height read-only property of the DOMRectReadOnly interface
 *   the height of the DOMRect.
 * 
 *   `var recHeight = DOMRect.height;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/height`
 */
dom.DOMRect.height = (function dom$DOMRect$height(this$){
return this$.height();
});
/**
 * Property.
 * 
 *   The height read-only property of the DOMRectReadOnly interface
 *   the height of the DOMRect.
 * 
 *   `var recHeight = DOMRect.height;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/height`
 */
dom.DOMRect.set_height_BANG_ = (function dom$DOMRect$set_height_BANG_(this$,val){
return (this$["height"] = val);
});
/**
 * Property.
 * 
 *   The top read-only property of the DOMRectReadOnly interface returns
 *   top coordinate value of the DOMRect. (Has the same value as y,
 *   y height if height is negative.)
 * 
 *   `var recTop = DOMRect.top;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/top`
 */
dom.DOMRect.top = (function dom$DOMRect$top(this$){
return this$.top();
});
/**
 * Property.
 * 
 *   The top read-only property of the DOMRectReadOnly interface returns
 *   top coordinate value of the DOMRect. (Has the same value as y,
 *   y height if height is negative.)
 * 
 *   `var recTop = DOMRect.top;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/top`
 */
dom.DOMRect.set_top_BANG_ = (function dom$DOMRect$set_top_BANG_(this$,val){
return (this$["top"] = val);
});
/**
 * Property.
 * 
 *   The right read-only property of the DOMRectReadOnly interface
 *   the right coordinate value of the DOMRect. (Has the same value
 *   x width, or x if width is negative.)
 * 
 *   `var recRight = DOMRect.right;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/right`
 */
dom.DOMRect.right = (function dom$DOMRect$right(this$){
return this$.right();
});
/**
 * Property.
 * 
 *   The right read-only property of the DOMRectReadOnly interface
 *   the right coordinate value of the DOMRect. (Has the same value
 *   x width, or x if width is negative.)
 * 
 *   `var recRight = DOMRect.right;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/right`
 */
dom.DOMRect.set_right_BANG_ = (function dom$DOMRect$set_right_BANG_(this$,val){
return (this$["right"] = val);
});
/**
 * Property.
 * 
 *   The bottom read-only property of the DOMRectReadOnly interface
 *   the bottom coordinate value of the DOMRect. (Has the same value
 *   y height, or y if height is negative.)
 * 
 *   `var recBottom = DOMRect.bottom;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/bottom`
 */
dom.DOMRect.bottom = (function dom$DOMRect$bottom(this$){
return this$.bottom();
});
/**
 * Property.
 * 
 *   The bottom read-only property of the DOMRectReadOnly interface
 *   the bottom coordinate value of the DOMRect. (Has the same value
 *   y height, or y if height is negative.)
 * 
 *   `var recBottom = DOMRect.bottom;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/bottom`
 */
dom.DOMRect.set_bottom_BANG_ = (function dom$DOMRect$set_bottom_BANG_(this$,val){
return (this$["bottom"] = val);
});
/**
 * Property.
 * 
 *   The left read-only property of the DOMRectReadOnly interface
 *   the left coordinate value of the DOMRect. (Has the same value
 *   x, or x width if width is negative.)
 * 
 *   `var recLeft = DOMRect.left;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/left`
 */
dom.DOMRect.left = (function dom$DOMRect$left(this$){
return this$.left();
});
/**
 * Property.
 * 
 *   The left read-only property of the DOMRectReadOnly interface
 *   the left coordinate value of the DOMRect. (Has the same value
 *   x, or x width if width is negative.)
 * 
 *   `var recLeft = DOMRect.left;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/left`
 */
dom.DOMRect.set_left_BANG_ = (function dom$DOMRect$set_left_BANG_(this$,val){
return (this$["left"] = val);
});

//# sourceMappingURL=DOMRect.js.map?rel=1565798825496
