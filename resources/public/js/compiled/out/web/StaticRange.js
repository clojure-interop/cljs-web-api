// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.StaticRange');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The StaticRange() constructor creates a new `web.StaticRange` object which provides attributes that track the start and end position of a range, and a boolean attribute indicating whether the current range is collapsed into a single position.
 * 
 *   options
 *   Options are as follows:
 * 
 *   startContainer:  The start `web.Node` for the range.
 *   startOffset: The offset into the start node of the range's start position.
 *   endContainer: The end `web.Node` for the range.
 *   endOffset: The offset into the start node of the range's start position.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/StaticRange`
 */
web.StaticRange.constructor$ = StaticRange;
/**
 * Method.
 * 
 *   The toRange() property of the `web.StaticRange` interface converts
 *   StaticRange object to a `web.Range` object.
 * 
 *   `var range = staticRange.toRange()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/toRange`
 */
web.StaticRange.to_range = (function web$StaticRange$to_range(this$){
return this$.toRange();
});
/**
 * Property.
 * 
 *   The collapsed read-only property of the `web.StaticRange` interface
 *   true if the range's start position and end position are the same.
 * 
 *   `var boolean = staticRange.collapsed`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/collapsed`
 */
web.StaticRange.collapsed = (function web$StaticRange$collapsed(this$){
return this$.collapsed();
});
/**
 * Property.
 * 
 *   The collapsed read-only property of the `web.StaticRange` interface
 *   true if the range's start position and end position are the same.
 * 
 *   `var boolean = staticRange.collapsed`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/collapsed`
 */
web.StaticRange.set_collapsed_BANG_ = (function web$StaticRange$set_collapsed_BANG_(this$,val){
return (this$["collapsed"] = val);
});
/**
 * Property.
 * 
 *   The endContainer property of the `web.StaticRange` interface
 *   the end `web.Node` for the range.
 * 
 *   `var node = staticNode.endContainer
 *   staticNode.endContainer = endContainer`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/endContainer`
 */
web.StaticRange.end_container = (function web$StaticRange$end_container(this$){
return this$.endContainer();
});
/**
 * Property.
 * 
 *   The endContainer property of the `web.StaticRange` interface
 *   the end `web.Node` for the range.
 * 
 *   `var node = staticNode.endContainer
 *   staticNode.endContainer = endContainer`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/endContainer`
 */
web.StaticRange.set_end_container_BANG_ = (function web$StaticRange$set_end_container_BANG_(this$,val){
return (this$["endContainer"] = val);
});
/**
 * Property.
 * 
 *   The endOffset property of the `web.StaticRange` interface returns
 *   offset into the end node of the range's end position.
 * 
 *   `var endOffset = staticRange.endOffset
 *   staticRange.endOffset = endOffset`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/endOffset`
 */
web.StaticRange.end_offset = (function web$StaticRange$end_offset(this$){
return this$.endOffset();
});
/**
 * Property.
 * 
 *   The endOffset property of the `web.StaticRange` interface returns
 *   offset into the end node of the range's end position.
 * 
 *   `var endOffset = staticRange.endOffset
 *   staticRange.endOffset = endOffset`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/endOffset`
 */
web.StaticRange.set_end_offset_BANG_ = (function web$StaticRange$set_end_offset_BANG_(this$,val){
return (this$["endOffset"] = val);
});
/**
 * Property.
 * 
 *   The startContainer property of the `web.StaticRange` interface
 *   the start `web.Node` for the range.
 * 
 *   `var node = staticNode.startContainer
 *   staticNode.startContainer = startContainer`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/startContainer`
 */
web.StaticRange.start_container = (function web$StaticRange$start_container(this$){
return this$.startContainer();
});
/**
 * Property.
 * 
 *   The startContainer property of the `web.StaticRange` interface
 *   the start `web.Node` for the range.
 * 
 *   `var node = staticNode.startContainer
 *   staticNode.startContainer = startContainer`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/startContainer`
 */
web.StaticRange.set_start_container_BANG_ = (function web$StaticRange$set_start_container_BANG_(this$,val){
return (this$["startContainer"] = val);
});
/**
 * Property.
 * 
 *   The startOffset property of the `web.StaticRange` interface returns
 *   offset into the start node of the range's start position.
 * 
 *   `var startOffset = staticRange.startOffset
 *   staticRange.startOffset = startOffset`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/startOffset`
 */
web.StaticRange.start_offset = (function web$StaticRange$start_offset(this$){
return this$.startOffset();
});
/**
 * Property.
 * 
 *   The startOffset property of the `web.StaticRange` interface returns
 *   offset into the start node of the range's start position.
 * 
 *   `var startOffset = staticRange.startOffset
 *   staticRange.startOffset = startOffset`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/StaticRange/startOffset`
 */
web.StaticRange.set_start_offset_BANG_ = (function web$StaticRange$set_start_offset_BANG_(this$,val){
return (this$["startOffset"] = val);
});

//# sourceMappingURL=StaticRange.js.map?rel=1565798841134
