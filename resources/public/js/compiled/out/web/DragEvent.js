// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.DragEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   This constructor is used to create a synthetic `web.DragEvent` object.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/DragEvent`
 */
web.DragEvent.constructor$ = DragEvent;
/**
 * Property.
 * 
 *   The DragEvent.dataTransfer property holds the drag operation's
 *   (as a `web.DataTransfer` object).
 * 
 *   `var data = dragEvent.dataTransfer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/dataTransfer`
 */
web.DragEvent.data_transfer = (function web$DragEvent$data_transfer(this$){
return this$.dataTransfer();
});
/**
 * Property.
 * 
 *   The DragEvent.dataTransfer property holds the drag operation's
 *   (as a `web.DataTransfer` object).
 * 
 *   `var data = dragEvent.dataTransfer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DragEvent/dataTransfer`
 */
web.DragEvent.set_data_transfer_BANG_ = (function web$DragEvent$set_data_transfer_BANG_(this$,val){
return (this$["dataTransfer"] = val);
});

//# sourceMappingURL=DragEvent.js.map?rel=1565798811847
