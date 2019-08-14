// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Text');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Text() constructor returns a newly created `web.Text` object with the optional `dom.DOMString` given in parameter as its textual content.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/Text`
 */
web.Text.constructor$ = Text;
/**
 * Method.
 * 
 *   The Text.replaceWholeText() method replaces the text of the node
 *   all of its logically adjacent text nodes with the specified text.
 *   replaced nodes are removed, including the current node, unless
 *   was the recipient of the replacement text.
 * 
 *   `replacementNode = textnode.replaceWholeText(content)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/replaceWholeText`
 */
web.Text.replace_whole_text = (function web$Text$replace_whole_text(this$,content){
return this$.replaceWholeText(content);
});
/**
 * Method.
 * 
 *   The Text.splitText() method breaks the `web.Text` node into two
 *   at the specified offset, keeping both nodes in the tree as siblings.
 * 
 *   `newNode = textNode.splitText(offset)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/splitText`
 */
web.Text.split_text = (function web$Text$split_text(this$,offset){
return this$.splitText(offset);
});
/**
 * Property.
 * 
 *   The assignedSlot property of the `web.Text` interface returns
 *   `html.HTMLSlotElement` object associated with the element.
 * 
 *   `var htmlSlotElement = text.assignedSlot`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/assignedSlot`
 */
web.Text.assigned_slot = (function web$Text$assigned_slot(this$){
return this$.assignedSlot();
});
/**
 * Property.
 * 
 *   The assignedSlot property of the `web.Text` interface returns
 *   `html.HTMLSlotElement` object associated with the element.
 * 
 *   `var htmlSlotElement = text.assignedSlot`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/assignedSlot`
 */
web.Text.set_assigned_slot_BANG_ = (function web$Text$set_assigned_slot_BANG_(this$,val){
return (this$["assignedSlot"] = val);
});
/**
 * Property.
 * 
 *   The Text.isElementContentWhitespace read-only property returns
 *   `web.Boolean` flag indicating whether or not the text node's
 *   consists solely of whitespace.
 * 
 *   `b = textnode.isElementContentWhitespace;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/isElementContentWhitespace`
 */
web.Text.is_element_content_whitespace = (function web$Text$is_element_content_whitespace(this$){
return this$.isElementContentWhitespace();
});
/**
 * Property.
 * 
 *   The Text.isElementContentWhitespace read-only property returns
 *   `web.Boolean` flag indicating whether or not the text node's
 *   consists solely of whitespace.
 * 
 *   `b = textnode.isElementContentWhitespace;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/isElementContentWhitespace`
 */
web.Text.set_is_element_content_whitespace_BANG_ = (function web$Text$set_is_element_content_whitespace_BANG_(this$,val){
return (this$["isElementContentWhitespace"] = val);
});
/**
 * Property.
 * 
 *   The Text.wholeText read-only property returns the full text of
 *   `web.Text` nodes logically adjacent to the node.
 * 
 *   `str = textnode.wholeText;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/wholeText`
 */
web.Text.whole_text = (function web$Text$whole_text(this$){
return this$.wholeText();
});
/**
 * Property.
 * 
 *   The Text.wholeText read-only property returns the full text of
 *   `web.Text` nodes logically adjacent to the node.
 * 
 *   `str = textnode.wholeText;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Text/wholeText`
 */
web.Text.set_whole_text_BANG_ = (function web$Text$set_whole_text_BANG_(this$,val){
return (this$["wholeText"] = val);
});

//# sourceMappingURL=Text.js.map?rel=1565798811045
