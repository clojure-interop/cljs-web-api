// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ShadowRoot');
goog.require('cljs.core');
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
web.ShadowRoot.get_selection = (function web$ShadowRoot$get_selection(this$){
return this$.getSelection();
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
web.ShadowRoot.element_from_point = (function web$ShadowRoot$element_from_point(this$,x,y){
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
web.ShadowRoot.elements_from_point = (function web$ShadowRoot$elements_from_point(this$,x,y){
return this$.elementsFromPoint(x,y);
});
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
web.ShadowRoot.caret_position_from_point = (function web$ShadowRoot$caret_position_from_point(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44886 = arguments.length;
var i__42557__auto___44887 = (0);
while(true){
if((i__42557__auto___44887 < len__42556__auto___44886)){
args__42563__auto__.push((arguments[i__42557__auto___44887]));

var G__44888 = (i__42557__auto___44887 + (1));
i__42557__auto___44887 = G__44888;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.ShadowRoot.caret_position_from_point.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.ShadowRoot.caret_position_from_point.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.caretPositionFromPoint,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.ShadowRoot.caret_position_from_point.cljs$lang$maxFixedArity = (1);

web.ShadowRoot.caret_position_from_point.cljs$lang$applyTo = (function (seq44884){
var G__44885 = cljs.core.first.call(null,seq44884);
var seq44884__$1 = cljs.core.next.call(null,seq44884);
return web.ShadowRoot.caret_position_from_point.cljs$core$IFn$_invoke$arity$variadic(G__44885,seq44884__$1);
});

/**
 * Property.
 * 
 *   The delegatesFocus read-only property of the `web.ShadowRoot`
 *   returns a boolean that indicates whether delegatesFocus was set
 *   the shadow was attached (see `web.Element.attachShadow()`).
 * 
 *   `var df = shadowRoot.delegatesFocus`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus`
 */
web.ShadowRoot.delegates_focus = (function web$ShadowRoot$delegates_focus(this$){
return this$.delegatesFocus();
});
/**
 * Property.
 * 
 *   The delegatesFocus read-only property of the `web.ShadowRoot`
 *   returns a boolean that indicates whether delegatesFocus was set
 *   the shadow was attached (see `web.Element.attachShadow()`).
 * 
 *   `var df = shadowRoot.delegatesFocus`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus`
 */
web.ShadowRoot.set_delegates_focus_BANG_ = (function web$ShadowRoot$set_delegates_focus_BANG_(this$,val){
return (this$["delegatesFocus"] = val);
});
/**
 * Property.
 * 
 *   The host read-only property of the `web.ShadowRoot` returns a
 *   to the DOM element the ShadowRoot is attached to.
 * 
 *   `var element = shadowRoot.host`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/host`
 */
web.ShadowRoot.host = (function web$ShadowRoot$host(this$){
return this$.host();
});
/**
 * Property.
 * 
 *   The host read-only property of the `web.ShadowRoot` returns a
 *   to the DOM element the ShadowRoot is attached to.
 * 
 *   `var element = shadowRoot.host`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/host`
 */
web.ShadowRoot.set_host_BANG_ = (function web$ShadowRoot$set_host_BANG_(this$,val){
return (this$["host"] = val);
});
/**
 * Property.
 * 
 *   The innerHTML property of the `web.ShadowRoot` interface sets
 *   returns a reference to the DOM tree inside the ShadowRoot.
 * 
 *   `var domString = shadowRoot.innerHTML
 *   shadowRoot.innerHTML = domString`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/innerHTML`
 */
web.ShadowRoot.inner_html = (function web$ShadowRoot$inner_html(this$){
return this$.innerHTML();
});
/**
 * Property.
 * 
 *   The innerHTML property of the `web.ShadowRoot` interface sets
 *   returns a reference to the DOM tree inside the ShadowRoot.
 * 
 *   `var domString = shadowRoot.innerHTML
 *   shadowRoot.innerHTML = domString`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/innerHTML`
 */
web.ShadowRoot.set_inner_html_BANG_ = (function web$ShadowRoot$set_inner_html_BANG_(this$,val){
return (this$["innerHTML"] = val);
});
/**
 * Property.
 * 
 *   The mode property of the `web.ShadowRoot` specifies its mode
 *   either open or closed. This defines whether or not the shadow
 *   internal features are accessible from JavaScript.
 * 
 *   `var mode = shadowRoot.mode`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode`
 */
web.ShadowRoot.mode = (function web$ShadowRoot$mode(this$){
return this$.mode();
});
/**
 * Property.
 * 
 *   The mode property of the `web.ShadowRoot` specifies its mode
 *   either open or closed. This defines whether or not the shadow
 *   internal features are accessible from JavaScript.
 * 
 *   `var mode = shadowRoot.mode`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode`
 */
web.ShadowRoot.set_mode_BANG_ = (function web$ShadowRoot$set_mode_BANG_(this$,val){
return (this$["mode"] = val);
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
web.ShadowRoot.active_element = (function web$ShadowRoot$active_element(this$){
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
web.ShadowRoot.set_active_element_BANG_ = (function web$ShadowRoot$set_active_element_BANG_(this$,val){
return (this$["activeElement"] = val);
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
web.ShadowRoot.style_sheets = (function web$ShadowRoot$style_sheets(this$){
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
web.ShadowRoot.set_style_sheets_BANG_ = (function web$ShadowRoot$set_style_sheets_BANG_(this$,val){
return (this$["styleSheets"] = val);
});

//# sourceMappingURL=ShadowRoot.js.map?rel=1565798817447
