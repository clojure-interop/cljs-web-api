// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.DocumentOrShadowRoot');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The caretPositionFromPoint() property of the `web.DocumentOrShadowRoot`
 *   returns a `web.CaretPosition` object, containing the DOM node,
 *   with the caret and caret's character offset within that node.
 * 
 *   `var caretPosition = document.caretPositionFromPoint(float x, float y);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/caretPositionFromPoint`
 */
web.DocumentOrShadowRoot.caret_position_from_point = (function web$DocumentOrShadowRoot$caret_position_from_point(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52734 = arguments.length;
var i__42557__auto___52735 = (0);
while(true){
if((i__42557__auto___52735 < len__42556__auto___52734)){
args__42563__auto__.push((arguments[i__42557__auto___52735]));

var G__52736 = (i__42557__auto___52735 + (1));
i__42557__auto___52735 = G__52736;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.DocumentOrShadowRoot.caret_position_from_point.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.DocumentOrShadowRoot.caret_position_from_point.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.caretPositionFromPoint,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.DocumentOrShadowRoot.caret_position_from_point.cljs$lang$maxFixedArity = (1);

web.DocumentOrShadowRoot.caret_position_from_point.cljs$lang$applyTo = (function (seq52732){
var G__52733 = cljs.core.first.call(null,seq52732);
var seq52732__$1 = cljs.core.next.call(null,seq52732);
return web.DocumentOrShadowRoot.caret_position_from_point.cljs$core$IFn$_invoke$arity$variadic(G__52733,seq52732__$1);
});

/**
 * Method.
 * 
 *   The elementFromPoint() method—available on both the `web.Document`
 *   `web.ShadowRoot` objects—returns the topmost `web.Element` at
 *   specified coordinates (relative to the viewport).
 * 
 *   `var element = document.elementFromPoint(x, y);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementFromPoint`
 */
web.DocumentOrShadowRoot.element_from_point = (function web$DocumentOrShadowRoot$element_from_point(this$,x,y){
return this$.elementFromPoint(x,y);
});
/**
 * Method.
 * 
 *   The elementsFromPoint() property of the `web.DocumentOrShadowRoot`
 *   returns an array of all elements at the specified coordinates
 *   to the viewport).
 * 
 *   `var elements = document.elementsFromPoint(x, y);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementsFromPoint`
 */
web.DocumentOrShadowRoot.elements_from_point = (function web$DocumentOrShadowRoot$elements_from_point(this$,x,y){
return this$.elementsFromPoint(x,y);
});
/**
 * Method.
 * 
 *   The getSelection() property of the `web.DocumentOrShadowRoot`
 *   returns a `web.Selection` object representing the range of text
 *   by the user, or the current position of the caret.
 * 
 *   `var selection = documentOrShadowRootInstance.getSelection()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection`
 */
web.DocumentOrShadowRoot.get_selection = (function web$DocumentOrShadowRoot$get_selection(this$){
return this$.getSelection();
});
/**
 * Method.
 * 
 *   The msElementsFromRect method returns the node list of elements
 *   are under a rectangle defined by left, top, width, and height.
 * 
 *   `object.msElementsFromRect(left, top, width, height, retVal)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/msElementsFromRect`
 */
web.DocumentOrShadowRoot.ms_elements_from_rect = (function web$DocumentOrShadowRoot$ms_elements_from_rect(this$,left,top,width,height,ret_val){
return this$.msElementsFromRect(left,top,width,height,ret_val);
});
/**
 * Method.
 * 
 *   The nodeFromPoint() property of the `web.DocumentOrShadowRoot`
 *   returns the topmost node at the specified coordinates (relative
 *   the viewport).
 * 
 *   `var node = document.nodeFromPoint(x, y);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/nodeFromPoint`
 */
web.DocumentOrShadowRoot.node_from_point = (function web$DocumentOrShadowRoot$node_from_point(this$,x,y){
return this$.nodeFromPoint(x,y);
});
/**
 * Method.
 * 
 *   The nodesFromPoint() property of the `web.DocumentOrShadowRoot`
 *   returns an array of all nodes at the specified coordinates (relative
 *   the viewport).
 * 
 *   `var nodes = document.nodesFromPoint(x, y);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/nodesFromPoint`
 */
web.DocumentOrShadowRoot.nodes_from_point = (function web$DocumentOrShadowRoot$nodes_from_point(this$,x,y){
return this$.nodesFromPoint(x,y);
});
/**
 * Property.
 * 
 *   The activeElement read-only property of the `web.Document` and
 *   interfaces returns the `web.Element` within the DOM or shadow
 *   tree that currently has focus.
 * 
 *   `var element = DocumentOrShadowRoot.activeElement`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/activeElement`
 */
web.DocumentOrShadowRoot.active_element = (function web$DocumentOrShadowRoot$active_element(this$){
return this$.activeElement();
});
/**
 * Property.
 * 
 *   The activeElement read-only property of the `web.Document` and
 *   interfaces returns the `web.Element` within the DOM or shadow
 *   tree that currently has focus.
 * 
 *   `var element = DocumentOrShadowRoot.activeElement`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/activeElement`
 */
web.DocumentOrShadowRoot.set_active_element_BANG_ = (function web$DocumentOrShadowRoot$set_active_element_BANG_(this$,val){
return (this$["activeElement"] = val);
});
/**
 * Property.
 * 
 *   The DocumentOrShadowRoot.fullscreenElement read-only property
 *   the `web.Element` that is currently being presented in full-screen
 *   in this document, or null if full-screen mode is not currently
 *   use.
 * 
 *   `var element = document.fullscreenElement;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/fullscreenElement`
 */
web.DocumentOrShadowRoot.fullscreen_element = (function web$DocumentOrShadowRoot$fullscreen_element(this$){
return this$.fullscreenElement();
});
/**
 * Property.
 * 
 *   The pointerLockElement property of the `web.Document` and `web.ShadowRoot`
 *   provides the element set as the target for mouse events while
 *   pointer is locked. It is null if lock is pending, pointer is
 *   or the target is in another document.
 * 
 *   `var element = document.pointerLockElement;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/pointerLockElement`
 */
web.DocumentOrShadowRoot.pointer_lock_element = (function web$DocumentOrShadowRoot$pointer_lock_element(this$){
return this$.pointerLockElement();
});
/**
 * Property.
 * 
 *   The pointerLockElement property of the `web.Document` and `web.ShadowRoot`
 *   provides the element set as the target for mouse events while
 *   pointer is locked. It is null if lock is pending, pointer is
 *   or the target is in another document.
 * 
 *   `var element = document.pointerLockElement;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/pointerLockElement`
 */
web.DocumentOrShadowRoot.set_pointer_lock_element_BANG_ = (function web$DocumentOrShadowRoot$set_pointer_lock_element_BANG_(this$,val){
return (this$["pointerLockElement"] = val);
});
/**
 * Property.
 * 
 *   The styleSheets read-only property of the `web.DocumentOrShadowRoot`
 *   returns a `web.StyleSheetList` of `css.CSSStyleSheet` objects,
 *   stylesheets explicitly linked into or embedded in a document.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/styleSheets`
 */
web.DocumentOrShadowRoot.style_sheets = (function web$DocumentOrShadowRoot$style_sheets(this$){
return this$.styleSheets();
});
/**
 * Property.
 * 
 *   The styleSheets read-only property of the `web.DocumentOrShadowRoot`
 *   returns a `web.StyleSheetList` of `css.CSSStyleSheet` objects,
 *   stylesheets explicitly linked into or embedded in a document.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/styleSheets`
 */
web.DocumentOrShadowRoot.set_style_sheets_BANG_ = (function web$DocumentOrShadowRoot$set_style_sheets_BANG_(this$,val){
return (this$["styleSheets"] = val);
});

//# sourceMappingURL=DocumentOrShadowRoot.js.map?rel=1565798858137
