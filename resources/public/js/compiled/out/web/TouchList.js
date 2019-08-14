// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.TouchList');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The identifiedTouch() method returns the first `web.Touch` item
 *   the `web.TouchList` that matches the specified identifier.
 * 
 *   `var touchItem = touchList.identifiedTouch(id);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchList/identifiedTouch`
 */
web.TouchList.identified_touch = (function web$TouchList$identified_touch(this$,id){
return this$.identifiedTouch(id);
});
/**
 * Method.
 * 
 *   The item() method returns the `web.Touch` object at the specified
 *   in the `web.TouchList`.
 * 
 *   `var touchPoint = touchList.item(index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchList/item`
 */
web.TouchList.item = (function web$TouchList$item(this$,index){
return this$.item(index);
});
/**
 * Property.
 * 
 *   The length read-only property indicates the number of items (touch
 *   in a given `web.TouchList`.
 * 
 *   `var numTouches = touchList.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchList/length`
 */
web.TouchList.length = (function web$TouchList$length(this$){
return this$.length();
});
/**
 * Property.
 * 
 *   The length read-only property indicates the number of items (touch
 *   in a given `web.TouchList`.
 * 
 *   `var numTouches = touchList.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/TouchList/length`
 */
web.TouchList.set_length_BANG_ = (function web$TouchList$set_length_BANG_(this$,val){
return (this$["length"] = val);
});

//# sourceMappingURL=TouchList.js.map?rel=1565798838029
