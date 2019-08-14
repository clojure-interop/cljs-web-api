// Compiled by ClojureScript 1.9.946 {}
goog.provide('html.HTMLSlotElement');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The assignedElements() property of the `html.HTMLSlotElement`
 *   returns a sequence of the elements assigned to this slot (and
 *   other nodes). If the flatten option is set to true, it also returns
 *   assigned elements of any other slots that are descendants of
 *   slot. If no assigned nodes are found, it returns the slot's fallback
 * 
 *   `var assignedElements = HTMLSlotElement.assignedElements(options)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedElements`
 */
html.HTMLSlotElement.assigned_elements = (function html$HTMLSlotElement$assigned_elements(this$,options){
return this$.assignedElements(options);
});
/**
 * Method.
 * 
 *   The assignedNodes() property of the `html.HTMLSlotElement` interface
 *   a sequence of the nodes assigned to this slot, and if the flatten
 *   is set to true, the assigned nodes of any other slots that are
 *   of this slot. If no assigned nodes are found, it returns the
 *   fallback content.
 * 
 *   `var assignedNodes = HTMLSlotElement.assignedNodes(options)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/assignedNodes`
 */
html.HTMLSlotElement.assigned_nodes = (function html$HTMLSlotElement$assigned_nodes(this$,options){
return this$.assignedNodes(options);
});
/**
 * Property.
 * 
 *   The name property of the `html.HTMLSlotElement` interface returns
 *   sets the slot name. A slot is a placeholder inside a web component
 *   users can fill with their own markup.
 * 
 *   `var name = htmlSlotElement.name
 *   htmlSlotElement.name = name`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/name`
 */
html.HTMLSlotElement.name = (function html$HTMLSlotElement$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   The name property of the `html.HTMLSlotElement` interface returns
 *   sets the slot name. A slot is a placeholder inside a web component
 *   users can fill with their own markup.
 * 
 *   `var name = htmlSlotElement.name
 *   htmlSlotElement.name = name`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLSlotElement/name`
 */
html.HTMLSlotElement.set_name_BANG_ = (function html$HTMLSlotElement$set_name_BANG_(this$,val){
return (this$["name"] = val);
});

//# sourceMappingURL=HTMLSlotElement.js.map?rel=1565798852742
