// Compiled by ClojureScript 1.9.946 {}
goog.provide('dom.DOMRectReadOnly');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The DOMRectReadOnly() constructor creates a new `dom.DOMRectReadOnly` object.
 * 
 *   x
 *   The x coordinate of the DOMRectReadOnly's origin.
 *   y
 *   The y coordinate of the DOMRectReadOnly's origin.
 *   width
 *   The width of the DOMRectReadOnly.
 *   height
 *   The height of the DOMRectReadOnly.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMRectReadOnly/DOMRectReadOnly`
 */
dom.DOMRectReadOnly.constructor$ = DOMRectReadOnly;
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
dom.DOMRectReadOnly.from_rect = (function dom$DOMRectReadOnly$from_rect(this$,rectangle){
return this$.fromRect(rectangle);
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
dom.DOMRectReadOnly.bottom = (function dom$DOMRectReadOnly$bottom(this$){
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
dom.DOMRectReadOnly.set_bottom_BANG_ = (function dom$DOMRectReadOnly$set_bottom_BANG_(this$,val){
return (this$["bottom"] = val);
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
dom.DOMRectReadOnly.height = (function dom$DOMRectReadOnly$height(this$){
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
dom.DOMRectReadOnly.set_height_BANG_ = (function dom$DOMRectReadOnly$set_height_BANG_(this$,val){
return (this$["height"] = val);
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
dom.DOMRectReadOnly.left = (function dom$DOMRectReadOnly$left(this$){
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
dom.DOMRectReadOnly.set_left_BANG_ = (function dom$DOMRectReadOnly$set_left_BANG_(this$,val){
return (this$["left"] = val);
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
dom.DOMRectReadOnly.right = (function dom$DOMRectReadOnly$right(this$){
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
dom.DOMRectReadOnly.set_right_BANG_ = (function dom$DOMRectReadOnly$set_right_BANG_(this$,val){
return (this$["right"] = val);
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
dom.DOMRectReadOnly.top = (function dom$DOMRectReadOnly$top(this$){
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
dom.DOMRectReadOnly.set_top_BANG_ = (function dom$DOMRectReadOnly$set_top_BANG_(this$,val){
return (this$["top"] = val);
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
dom.DOMRectReadOnly.width = (function dom$DOMRectReadOnly$width(this$){
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
dom.DOMRectReadOnly.set_width_BANG_ = (function dom$DOMRectReadOnly$set_width_BANG_(this$,val){
return (this$["width"] = val);
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
dom.DOMRectReadOnly.x = (function dom$DOMRectReadOnly$x(this$){
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
dom.DOMRectReadOnly.set_x_BANG_ = (function dom$DOMRectReadOnly$set_x_BANG_(this$,val){
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
dom.DOMRectReadOnly.y = (function dom$DOMRectReadOnly$y(this$){
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
dom.DOMRectReadOnly.set_y_BANG_ = (function dom$DOMRectReadOnly$set_y_BANG_(this$,val){
return (this$["y"] = val);
});

//# sourceMappingURL=DOMRectReadOnly.js.map?rel=1565798836065
