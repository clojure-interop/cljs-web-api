// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Window');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The Window.alert() method displays an alert dialog with the optional
 *   content and an OK button.
 * 
 *   `window.alert(message);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/alert`
 */
web.Window.alert = (function web$Window$alert(this$,message){
return this$.alert(message);
});
/**
 * Method.
 * 
 *   The WindowOrWorkerGlobalScope.atob() function decodes a string
 *   data which has been encoded using base-64 encoding. You can use
 *   `web.btoa()` method to encode and transmit data which may otherwise
 *   communication problems, then transmit it and use the atob() method
 *   decode the data again. For example, you can encode, transmit,
 *   decode control characters such as ASCII values 0 through 31.
 * 
 *   `var decodedData = scope.atob(encodedData);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/atob`
 */
web.Window.atob = (function web$Window$atob(this$,encoded_data){
return this$.atob(encoded_data);
});
/**
 * Method.
 * 
 *   The obsolete and non-standard method back() on the `web.window`
 *   returns the window to the previous item in the history. This
 *   a Firefox-specific method and was removed in Firefox 31.
 * 
 *   `window.back();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/back`
 */
web.Window.back = (function web$Window$back(this$){
return this$.back();
});
/**
 * Method.
 * 
 *   Shifts focus away from the window.
 * 
 *   `window.blur()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/blur`
 */
web.Window.blur = (function web$Window$blur(this$){
return this$.blur();
});
/**
 * Method.
 * 
 *   The WindowOrWorkerGlobalScope.btoa() method creates a base-64
 *   ASCII string from a binary string (i.e., a `web.String` object
 *   which each character in the string is treated as a byte of binary
 * 
 *   `var encodedData = scope.btoa(stringToEncode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/btoa`
 */
web.Window.btoa = (function web$Window$btoa(this$,string_to_encode){
return this$.btoa(string_to_encode);
});
/**
 * Method.
 * 
 *   The window.cancelAnimationFrame() method cancels an animation
 *   request previously scheduled through a call to `web.window.requestAnimationFrame()`.
 * 
 *   `window.cancelAnimationFrame(requestID);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelAnimationFrame`
 */
web.Window.cancel_animation_frame = (function web$Window$cancel_animation_frame(this$,request_id){
return this$.cancelAnimationFrame(request_id);
});
/**
 * Method.
 * 
 *   The window.cancelIdleCallback() method cancels a callback previously
 *   with `web.window.requestIdleCallback()`.
 * 
 *   `window.cancelIdleCallback(handle);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/cancelIdleCallback`
 */
web.Window.cancel_idle_callback = (function web$Window$cancel_idle_callback(this$,handle){
return this$.cancelIdleCallback(handle);
});
/**
 * Method.
 * 
 *   The Window.captureEvents() method registers the window to capture
 *   events of the specified type.
 * 
 *   `window.captureEvents(eventType)
 * 
 *   eventType is a combination of the following values: Event.ABORT, Event.BLUR, Event.CLICK, Event.CHANGE, Event.DBLCLICK, Event.DRAGDDROP, Event.ERROR, Event.FOCUS, Event.KEYDOWN, Event.KEYPRESS, Event.KEYUP, Event.LOAD, Event.MOUSEDOWN, Event.MOUSEMOVE, Event.MOUSEOUT, Event.MOUSEOVER, Event.MOUSEUP, Event.MOVE, Event.RESET, Event.RESIZE, Event.SELECT, Event.SUBMIT, Event.UNLOAD.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/captureEvents`
 */
web.Window.capture_events = (function web$Window$capture_events(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50355 = arguments.length;
var i__42557__auto___50356 = (0);
while(true){
if((i__42557__auto___50356 < len__42556__auto___50355)){
args__42563__auto__.push((arguments[i__42557__auto___50356]));

var G__50357 = (i__42557__auto___50356 + (1));
i__42557__auto___50356 = G__50357;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.capture_events.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.capture_events.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.captureEvents,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.capture_events.cljs$lang$maxFixedArity = (1);

web.Window.capture_events.cljs$lang$applyTo = (function (seq50353){
var G__50354 = cljs.core.first.call(null,seq50353);
var seq50353__$1 = cljs.core.next.call(null,seq50353);
return web.Window.capture_events.cljs$core$IFn$_invoke$arity$variadic(G__50354,seq50353__$1);
});

/**
 * Method.
 * 
 *   This method clears the action specified by `web.window.setImmediate`.
 * 
 *   `window.clearImmediate(immediateID)
 * 
 *   where immediateID is a ID returned by `web.window.setImmediate`.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/clearImmediate`
 */
web.Window.clear_immediate = (function web$Window$clear_immediate(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50360 = arguments.length;
var i__42557__auto___50361 = (0);
while(true){
if((i__42557__auto___50361 < len__42556__auto___50360)){
args__42563__auto__.push((arguments[i__42557__auto___50361]));

var G__50362 = (i__42557__auto___50361 + (1));
i__42557__auto___50361 = G__50362;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.clear_immediate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.clear_immediate.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.clearImmediate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.clear_immediate.cljs$lang$maxFixedArity = (1);

web.Window.clear_immediate.cljs$lang$applyTo = (function (seq50358){
var G__50359 = cljs.core.first.call(null,seq50358);
var seq50358__$1 = cljs.core.next.call(null,seq50358);
return web.Window.clear_immediate.cljs$core$IFn$_invoke$arity$variadic(G__50359,seq50358__$1);
});

/**
 * Method.
 * 
 *   The clearInterval() method of the `web.WindowOrWorkerGlobalScope`
 *   cancels a timed, repeating action which was previously established
 *   a call to `web.setInterval()`.
 * 
 *   `scope.clearInterval(intervalID)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval`
 */
web.Window.clear_interval = (function web$Window$clear_interval(this$,interval_id){
return this$.clearInterval(interval_id);
});
/**
 * Method.
 * 
 *   The clearTimeout() method of the `web.WindowOrWorkerGlobalScope`
 *   cancels a timeout previously established by calling `web.setTimeout()`.
 * 
 *   `scope.clearTimeout(timeoutID)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout`
 */
web.Window.clear_timeout = (function web$Window$clear_timeout(this$,timeout_id){
return this$.clearTimeout(timeout_id);
});
/**
 * Method.
 * 
 *   The Window.close() method closes the current window, or the window
 *   which it was called.
 * 
 *   `window.close();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/close`
 */
web.Window.close = (function web$Window$close(this$){
return this$.close();
});
/**
 * Method.
 * 
 *   The Window.confirm() method displays a modal dialog with an optional
 *   and two buttons: OK and Cancel.
 * 
 *   `result = window.confirm(message);
 * 
 * 
 *   message is an optional string to display in the dialog.
 *   result is a boolean indicating whether OK (true) or Cancel (false) was selected. If a browser is ignoring in-page dialogs, then result is always false.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/confirm`
 */
web.Window.confirm = (function web$Window$confirm(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50365 = arguments.length;
var i__42557__auto___50366 = (0);
while(true){
if((i__42557__auto___50366 < len__42556__auto___50365)){
args__42563__auto__.push((arguments[i__42557__auto___50366]));

var G__50367 = (i__42557__auto___50366 + (1));
i__42557__auto___50366 = G__50367;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.confirm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.confirm.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.confirm,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.confirm.cljs$lang$maxFixedArity = (1);

web.Window.confirm.cljs$lang$applyTo = (function (seq50363){
var G__50364 = cljs.core.first.call(null,seq50363);
var seq50363__$1 = cljs.core.next.call(null,seq50363);
return web.Window.confirm.cljs$core$IFn$_invoke$arity$variadic(G__50364,seq50363__$1);
});

/**
 * Method.
 * 
 *   Given a `web.Point` specified in a particular DOM `web.Node`'s
 *   system, the `web.Window` method convertPointFromNodeToPage()
 *   a Point which specifies the same position in the page's coordinate
 *   This method is non-standard and should not be used.
 * 
 *   `Point = Window.convertPointFromNodeToPage(node, nodePoint);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/convertPointFromNodeToPage`
 */
web.Window.convert_point_from_node_to_page = (function web$Window$convert_point_from_node_to_page(this$,node,node_point){
return this$.convertPointFromNodeToPage(node,node_point);
});
/**
 * Method.
 * 
 *   Given a `web.Point` specified in the page's coordinate system,
 *   `web.Window` method convertPointFromPageToNode() returns a Point
 *   specifying the same location in the coordinate system of the
 *   DOM `web.Node`.
 * 
 *   `Point = Window.convertPointFromPageToNode(node, pagePoint);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/convertPointFromPageToNode`
 */
web.Window.convert_point_from_page_to_node = (function web$Window$convert_point_from_page_to_node(this$,node,page_point){
return this$.convertPointFromPageToNode(node,page_point);
});
/**
 * Method.
 * 
 *   The createImageBitmap() method creates a bitmap from a given
 *   optionally cropped to contain only a portion of that source.
 *   method exists on the global scope in both windows and workers.
 *   accepts a variety of different image sources, and returns a `web.Promise`
 *   resolves to an `web.ImageBitmap`.
 * 
 *   `createImageBitmap(image[, options]).then(function(response) { ... });
 *   createImageBitmap(image, sx, sy, sw, sh[, options]).then(function(response) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/createImageBitmap`
 */
web.Window.create_image_bitmap = (function web$Window$create_image_bitmap(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50370 = arguments.length;
var i__42557__auto___50371 = (0);
while(true){
if((i__42557__auto___50371 < len__42556__auto___50370)){
args__42563__auto__.push((arguments[i__42557__auto___50371]));

var G__50372 = (i__42557__auto___50371 + (1));
i__42557__auto___50371 = G__50372;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.create_image_bitmap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.create_image_bitmap.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createImageBitmap,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.create_image_bitmap.cljs$lang$maxFixedArity = (1);

web.Window.create_image_bitmap.cljs$lang$applyTo = (function (seq50368){
var G__50369 = cljs.core.first.call(null,seq50368);
var seq50368__$1 = cljs.core.next.call(null,seq50368);
return web.Window.create_image_bitmap.cljs$core$IFn$_invoke$arity$variadic(G__50369,seq50368__$1);
});

/**
 * Method.
 * 
 *   Window.dump() prints messages to the (native) console.
 * 
 *   `window.dump(message);
 * 
 *   dump(message);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/dump`
 */
web.Window.dump = (function web$Window$dump(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50375 = arguments.length;
var i__42557__auto___50376 = (0);
while(true){
if((i__42557__auto___50376 < len__42556__auto___50375)){
args__42563__auto__.push((arguments[i__42557__auto___50376]));

var G__50377 = (i__42557__auto___50376 + (1));
i__42557__auto___50376 = G__50377;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.dump.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.dump.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.dump,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.dump.cljs$lang$maxFixedArity = (1);

web.Window.dump.cljs$lang$applyTo = (function (seq50373){
var G__50374 = cljs.core.first.call(null,seq50373);
var seq50373__$1 = cljs.core.next.call(null,seq50373);
return web.Window.dump.cljs$core$IFn$_invoke$arity$variadic(G__50374,seq50373__$1);
});

/**
 * Method.
 * 
 *   The fetch() method of the `web.WindowOrWorkerGlobalScope` mixin
 *   the process of fetching a resource from the network, returning
 *   promise which is fulfilled once the response is available.
 * 
 *   `fetchResponsePromise = fetch(resource, init);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch`
 */
web.Window.fetch = (function web$Window$fetch(this$,resource,init){
return this$.fetch(resource,init);
});
/**
 * Method.
 * 
 *   The Window.find() method finds a string in a window.
 * 
 *   `window.find(aString, aCaseSensitive, aBackwards, aWrapAround,
 *   aWholeWord, aSearchInFrames, aShowDialog);
 * 
 * 
 *   aString
 *   The text string for which to search.
 *   aCaseSensitive
 *   `web.Boolean`. If true, specifies a case-sensitive search.
 *   aBackwards
 *   `web.Boolean`. If true, specifies a backward search.
 *   aWrapAround
 *   `web.Boolean`. If true, specifies a wrap around search.
 *   aWholeWord Unimplemented
 *   `web.Boolean`. If true, specifies a whole word search. This is not implemented; see bug 481513.
 *   aSearchInFrames
 *   `web.Boolean`. If true, specifies a search in frames.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/find`
 */
web.Window.find = (function web$Window$find(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50380 = arguments.length;
var i__42557__auto___50381 = (0);
while(true){
if((i__42557__auto___50381 < len__42556__auto___50380)){
args__42563__auto__.push((arguments[i__42557__auto___50381]));

var G__50382 = (i__42557__auto___50381 + (1));
i__42557__auto___50381 = G__50382;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.find.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.find.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.find,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.find.cljs$lang$maxFixedArity = (1);

web.Window.find.cljs$lang$applyTo = (function (seq50378){
var G__50379 = cljs.core.first.call(null,seq50378);
var seq50378__$1 = cljs.core.next.call(null,seq50378);
return web.Window.find.cljs$core$IFn$_invoke$arity$variadic(G__50379,seq50378__$1);
});

/**
 * Method.
 * 
 *   Makes a request to bring the window to the front. It may fail
 *   to user settings and the window isn't guaranteed to be frontmost
 *   this method returns.
 * 
 *   `window.focus()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/focus`
 */
web.Window.focus = (function web$Window$focus(this$){
return this$.focus();
});
/**
 * Method.
 * 
 *   Moves the window one document forward in history. This was a
 *   method and was removed in Firefox 31.
 * 
 *   `window.forward();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/forward`
 */
web.Window.forward = (function web$Window$forward(this$){
return this$.forward();
});
/**
 * Method.
 * 
 *   The Window.getAttention() method attempts to get the user's attention.
 *   mechanism for this happening depends on the specific operating
 *   and window manager.
 * 
 *   `window.getAttention();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/getAttention`
 */
web.Window.get_attention = (function web$Window$get_attention(this$){
return this$.getAttention();
});
/**
 * Method.
 * 
 *   The Window.getComputedStyle() method returns an object containing
 *   values of all CSS properties of an element, after applying active
 *   and resolving any basic computation those values may contain.
 * 
 *   `var style = window.getComputedStyle(element [, pseudoElt]);
 * 
 * 
 *   element
 *   The `web.Element` for which to get the computed style.
 *   pseudoEltOptional
 *   A string specifying the pseudo-element to match. Omitted (or null) for real elements.
 * 
 * 
 *   The returned style is a live `css.CSSStyleDeclaration` object, which updates automatically when the element's styles are changed.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle`
 */
web.Window.get_computed_style = (function web$Window$get_computed_style(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50385 = arguments.length;
var i__42557__auto___50386 = (0);
while(true){
if((i__42557__auto___50386 < len__42556__auto___50385)){
args__42563__auto__.push((arguments[i__42557__auto___50386]));

var G__50387 = (i__42557__auto___50386 + (1));
i__42557__auto___50386 = G__50387;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.get_computed_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.get_computed_style.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getComputedStyle,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.get_computed_style.cljs$lang$maxFixedArity = (1);

web.Window.get_computed_style.cljs$lang$applyTo = (function (seq50383){
var G__50384 = cljs.core.first.call(null,seq50383);
var seq50383__$1 = cljs.core.next.call(null,seq50383);
return web.Window.get_computed_style.cljs$core$IFn$_invoke$arity$variadic(G__50384,seq50383__$1);
});

/**
 * Method.
 * 
 *   The getDefaultComputedStyle() method gives the default computed
 *   of all the CSS properties of an element, ignoring author styling.
 *   is, only user-agent and user styles are taken into account.
 * 
 *   `var style = window.getDefaultComputedStyle(element [, pseudoElt]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/window/getDefaultComputedStyle`
 */
web.Window.get_default_computed_style = (function web$Window$get_default_computed_style(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50390 = arguments.length;
var i__42557__auto___50391 = (0);
while(true){
if((i__42557__auto___50391 < len__42556__auto___50390)){
args__42563__auto__.push((arguments[i__42557__auto___50391]));

var G__50392 = (i__42557__auto___50391 + (1));
i__42557__auto___50391 = G__50392;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.get_default_computed_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.get_default_computed_style.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getDefaultComputedStyle,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.get_default_computed_style.cljs$lang$maxFixedArity = (1);

web.Window.get_default_computed_style.cljs$lang$applyTo = (function (seq50388){
var G__50389 = cljs.core.first.call(null,seq50388);
var seq50388__$1 = cljs.core.next.call(null,seq50388);
return web.Window.get_default_computed_style.cljs$core$IFn$_invoke$arity$variadic(G__50389,seq50388__$1);
});

/**
 * Method.
 * 
 *   The Window.getSelection() method returns a `web.Selection` object
 *   the range of text selected by the user or the current position
 *   the caret.
 * 
 *   `selection = window.getSelection();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/getSelection`
 */
web.Window.get_selection = (function web$Window$get_selection(this$){
return this$.getSelection();
});
/**
 * Method.
 * 
 *   The Window.home() method returns the window to the home page.
 * 
 *   `window.home();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/home`
 */
web.Window.home = (function web$Window$home(this$){
return this$.home();
});
/**
 * Method.
 * 
 *   The `web.Window` interface's matchMedia() method returns a new
 *   object representing the parsed results of the specified media
 *   string. The returned MediaQueryList can then be used to determine
 *   the `web.Document` matches the media query, or to monitor a document
 *   detect when it matches or stops matching the media query.
 * 
 *   `mqList = window.matchMedia(mediaQueryString)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/matchMedia`
 */
web.Window.match_media = (function web$Window$match_media(this$,media_query_string){
return this$.matchMedia(media_query_string);
});
/**
 * Method.
 * 
 *   The Window.minimize() method sets the window to a minimized state.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/minimize`
 */
web.Window.minimize = (function web$Window$minimize(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50395 = arguments.length;
var i__42557__auto___50396 = (0);
while(true){
if((i__42557__auto___50396 < len__42556__auto___50395)){
args__42563__auto__.push((arguments[i__42557__auto___50396]));

var G__50397 = (i__42557__auto___50396 + (1));
i__42557__auto___50396 = G__50397;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.minimize.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.minimize.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.minimize,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.minimize.cljs$lang$maxFixedArity = (1);

web.Window.minimize.cljs$lang$applyTo = (function (seq50393){
var G__50394 = cljs.core.first.call(null,seq50393);
var seq50393__$1 = cljs.core.next.call(null,seq50393);
return web.Window.minimize.cljs$core$IFn$_invoke$arity$variadic(G__50394,seq50393__$1);
});

/**
 * Method.
 * 
 *   The moveBy() method of the `web.Window` interface moves the current
 *   by a specified amount.
 * 
 *   `window.moveBy(deltaX, deltaY)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/moveBy`
 */
web.Window.move_by = (function web$Window$move_by(this$,delta_x,delta_y){
return this$.moveBy(delta_x,delta_y);
});
/**
 * Method.
 * 
 *   The moveTo() method of the `web.Window` interface moves the current
 *   to the specified coordinates.
 * 
 *   `window.moveTo(x, y)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/moveTo`
 */
web.Window.move_to = (function web$Window$move_to(this$,x,y){
return this$.moveTo(x,y);
});
/**
 * Method.
 * 
 *   The `web.Window` interface's open() method loads the specified
 *   into the browsing context (window, `web.<iframe>` or tab) with
 *   specified name. If the name doesn't exist, then a new window
 *   opened and the specified resource is loaded into its browsing
 * 
 *   `var window = window.open(url, windowName, [windowFeatures]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/open`
 */
web.Window.open = (function web$Window$open(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50400 = arguments.length;
var i__42557__auto___50401 = (0);
while(true){
if((i__42557__auto___50401 < len__42556__auto___50400)){
args__42563__auto__.push((arguments[i__42557__auto___50401]));

var G__50402 = (i__42557__auto___50401 + (1));
i__42557__auto___50401 = G__50402;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.open.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.open.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.open,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.open.cljs$lang$maxFixedArity = (1);

web.Window.open.cljs$lang$applyTo = (function (seq50398){
var G__50399 = cljs.core.first.call(null,seq50398);
var seq50398__$1 = cljs.core.next.call(null,seq50398);
return web.Window.open.cljs$core$IFn$_invoke$arity$variadic(G__50399,seq50398__$1);
});

/**
 * Method.
 * 
 *   window.openDialog() is an extension to `web.window.open()`. It
 *   the same, except that it can optionally take one or more parameters
 *   windowFeatures, and windowFeatures itself is treated a little
 * 
 *   `newWindow = openDialog(url, name, features, arg1, arg2, ...)
 * 
 * 
 *   newWindow
 *   The opened window
 *   url
 *   The URL to be loaded in the newly opened window.
 *   name
 *   The window name (optional). See `web.window.open()` description for detailed information.
 *   features
 *   See `web.window.open()` for details.
 *   arg1, arg2, ...
 *   The arguments to be passed to the new window (optional).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/openDialog`
 */
web.Window.open_dialog = (function web$Window$open_dialog(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50405 = arguments.length;
var i__42557__auto___50406 = (0);
while(true){
if((i__42557__auto___50406 < len__42556__auto___50405)){
args__42563__auto__.push((arguments[i__42557__auto___50406]));

var G__50407 = (i__42557__auto___50406 + (1));
i__42557__auto___50406 = G__50407;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.open_dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.open_dialog.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.openDialog,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.open_dialog.cljs$lang$maxFixedArity = (1);

web.Window.open_dialog.cljs$lang$applyTo = (function (seq50403){
var G__50404 = cljs.core.first.call(null,seq50403);
var seq50403__$1 = cljs.core.next.call(null,seq50403);
return web.Window.open_dialog.cljs$core$IFn$_invoke$arity$variadic(G__50404,seq50403__$1);
});

/**
 * Method.
 * 
 *   The window.postMessage() method safely enables cross-origin communication
 *   `web.Window` objects; e.g., between a page and a pop-up that
 *   spawned, or between a page and an iframe embedded within it.
 * 
 *   `targetWindow.postMessage(message, targetOrigin, [transfer]);
 * 
 * 
 *   targetWindow
 *   A reference to the window that will receive the message. Methods for obtaining such a reference include:
 * 
 *   `web.window.open` (to spawn a new window and then reference it),
 *   `web.window.opener` (to reference the window that spawned this one),
 *   `html.HTMLIFrameElement.contentWindow` (to reference an embedded `web.<iframe>` from its parent window),
 *   `web.window.parent` (to reference the parent window from within an embedded `web.<iframe>`), or
 *   `web.window.frames`  an index value (named or numeric).
 * 
 * 
 *   message
 *   Data to be sent to the other window. The data is serialized using the structured clone algorithm. This means you can pass a broad variety of data objects safely to the destination window without having to serialize them yourself. [1]
 *   targetOrigin
 *   Specifies what the origin of targetWindow must be for the event to be dispatched, either as the literal string \"*\" (indicating no preference) or as a URI. If at the time the event is scheduled to be dispatched the scheme, hostname, or port of targetWindow's document does not match that provided in targetOrigin, the event will not be dispatched; only if all three match will the event be dispatched. This mechanism provides control over where messages are sent; for example, if postMessage() was used to transmit a password, it would be absolutely critical that this argument be a URI whose origin is the same as the intended receiver of the message containing the password, to prevent interception of the password by a malicious third party. Always provide a specific targetOrigin, not *, if you know where the other window's document should be located. Failing to provide a specific target discloses the data you send to any interested malicious site.
 *   transfer Optional
 *   Is a sequence of `web.Transferable` objects that are transferred with the message. The ownership of these objects is given to the destination side and they are no longer usable on the sending side.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage`
 */
web.Window.post_message = (function web$Window$post_message(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50410 = arguments.length;
var i__42557__auto___50411 = (0);
while(true){
if((i__42557__auto___50411 < len__42556__auto___50410)){
args__42563__auto__.push((arguments[i__42557__auto___50411]));

var G__50412 = (i__42557__auto___50411 + (1));
i__42557__auto___50411 = G__50412;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.post_message.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.post_message.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.postMessage,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.post_message.cljs$lang$maxFixedArity = (1);

web.Window.post_message.cljs$lang$applyTo = (function (seq50408){
var G__50409 = cljs.core.first.call(null,seq50408);
var seq50408__$1 = cljs.core.next.call(null,seq50408);
return web.Window.post_message.cljs$core$IFn$_invoke$arity$variadic(G__50409,seq50408__$1);
});

/**
 * Method.
 * 
 *   Opens the Print Dialog to print the current document.
 * 
 *   `window.print()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/print`
 */
web.Window.print = (function web$Window$print(this$){
return this$.print();
});
/**
 * Method.
 * 
 *   The Window.prompt() displays a dialog with an optional message
 *   the user to input some text.
 * 
 *   `result = window.prompt(message, default);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/prompt`
 */
web.Window.prompt = (function web$Window$prompt(this$,message,default$){
return this$.prompt(message,default$);
});
/**
 * Method.
 * 
 *   The queueMicrotask() method of the `web.WindowOrWorkerGlobalScope`
 *   queues a microtask.
 * 
 *   `scope.queueMicrotask(function);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/queueMicrotask`
 */
web.Window.queue_microtask = (function web$Window$queue_microtask(this$,function$){
return this$.queueMicrotask(function$);
});
/**
 * Method.
 * 
 *   Releases the window from trapping events of a specific type.
 * 
 *   `window.releaseEvents(eventType)
 * 
 *   eventType is a combination of the following values: Event.ABORT, Event.BLUR, Event.CLICK, Event.CHANGE, Event.DBLCLICK, Event.DRAGDDROP, Event.ERROR, Event.FOCUS, Event.KEYDOWN, Event.KEYPRESS, Event.KEYUP, Event.LOAD, Event.MOUSEDOWN, Event.MOUSEMOVE, Event.MOUSEOUT, Event.MOUSEOVER, Event.MOUSEUP, Event.MOVE, Event.RESET, Event.RESIZE, Event.SELECT, Event.SUBMIT, Event.UNLOAD.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/releaseEvents`
 */
web.Window.release_events = (function web$Window$release_events(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50415 = arguments.length;
var i__42557__auto___50416 = (0);
while(true){
if((i__42557__auto___50416 < len__42556__auto___50415)){
args__42563__auto__.push((arguments[i__42557__auto___50416]));

var G__50417 = (i__42557__auto___50416 + (1));
i__42557__auto___50416 = G__50417;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.release_events.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.release_events.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.releaseEvents,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.release_events.cljs$lang$maxFixedArity = (1);

web.Window.release_events.cljs$lang$applyTo = (function (seq50413){
var G__50414 = cljs.core.first.call(null,seq50413);
var seq50413__$1 = cljs.core.next.call(null,seq50413);
return web.Window.release_events.cljs$core$IFn$_invoke$arity$variadic(G__50414,seq50413__$1);
});

/**
 * Method.
 * 
 *   The window.requestAnimationFrame() method tells the browser that
 *   wish to perform an animation and requests that the browser call
 *   specified function to update an animation before the next repaint.
 *   method takes a callback as an argument to be invoked before the
 * 
 *   `window.requestAnimationFrame(callback);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame`
 */
web.Window.request_animation_frame = (function web$Window$request_animation_frame(this$,callback){
return this$.requestAnimationFrame(callback);
});
/**
 * Method.
 * 
 *   The non-standard `web.Window` method requestFileSystem() method
 *   a Google Chrome-specific method which lets a web site or app
 *   access to a sandboxed file system for its own use. The returned
 *   is then available for use with the other file system APIs.
 * 
 *   `This method is prefixed with webkit in all browsers that implement it (that is, Google Chrome).
 * 
 * 
 * 
 * 
 *   window.requestFileSystem(type, size, successCallback[, errorCallback]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/requestFileSystem`
 */
web.Window.request_file_system = (function web$Window$request_file_system(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50420 = arguments.length;
var i__42557__auto___50421 = (0);
while(true){
if((i__42557__auto___50421 < len__42556__auto___50420)){
args__42563__auto__.push((arguments[i__42557__auto___50421]));

var G__50422 = (i__42557__auto___50421 + (1));
i__42557__auto___50421 = G__50422;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.request_file_system.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.request_file_system.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.requestFileSystem,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.request_file_system.cljs$lang$maxFixedArity = (1);

web.Window.request_file_system.cljs$lang$applyTo = (function (seq50418){
var G__50419 = cljs.core.first.call(null,seq50418);
var seq50418__$1 = cljs.core.next.call(null,seq50418);
return web.Window.request_file_system.cljs$core$IFn$_invoke$arity$variadic(G__50419,seq50418__$1);
});

/**
 * Method.
 * 
 *   The window.requestIdleCallback() method queues a function to
 *   called during a browser's idle periods. This enables developers
 *   perform background and low priority work on the main event loop,
 *   impacting latency-critical events such as animation and input
 *   Functions are generally called in first-in-first-out order; however,
 *   which have a timeout specified may be called out-of-order if
 *   in order to run them before the timeout elapses.
 * 
 *   `var handle = window.requestIdleCallback(callback[, options])`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback`
 */
web.Window.request_idle_callback = (function web$Window$request_idle_callback(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50425 = arguments.length;
var i__42557__auto___50426 = (0);
while(true){
if((i__42557__auto___50426 < len__42556__auto___50425)){
args__42563__auto__.push((arguments[i__42557__auto___50426]));

var G__50427 = (i__42557__auto___50426 + (1));
i__42557__auto___50426 = G__50427;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.request_idle_callback.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.request_idle_callback.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.requestIdleCallback,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.request_idle_callback.cljs$lang$maxFixedArity = (1);

web.Window.request_idle_callback.cljs$lang$applyTo = (function (seq50423){
var G__50424 = cljs.core.first.call(null,seq50423);
var seq50423__$1 = cljs.core.next.call(null,seq50423);
return web.Window.request_idle_callback.cljs$core$IFn$_invoke$arity$variadic(G__50424,seq50423__$1);
});

/**
 * Method.
 * 
 *   The Window.resizeBy() method resizes the current window by a
 *   amount.
 * 
 *   `window.resizeBy(xDelta, yDelta)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeBy`
 */
web.Window.resize_by = (function web$Window$resize_by(this$,x_delta,y_delta){
return this$.resizeBy(x_delta,y_delta);
});
/**
 * Method.
 * 
 *   The Window.resizeTo() method dynamically resizes the window.
 * 
 *   `window.resizeTo(aWidth, aHeight)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/resizeTo`
 */
web.Window.resize_to = (function web$Window$resize_to(this$,a_width,a_height){
return this$.resizeTo(a_width,a_height);
});
/**
 * Method.
 * 
 *   This method is currently not working, but you can use:
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/restore`
 */
web.Window.restore = (function web$Window$restore(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50430 = arguments.length;
var i__42557__auto___50431 = (0);
while(true){
if((i__42557__auto___50431 < len__42556__auto___50430)){
args__42563__auto__.push((arguments[i__42557__auto___50431]));

var G__50432 = (i__42557__auto___50431 + (1));
i__42557__auto___50431 = G__50432;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.restore.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.restore.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.restore,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.restore.cljs$lang$maxFixedArity = (1);

web.Window.restore.cljs$lang$applyTo = (function (seq50428){
var G__50429 = cljs.core.first.call(null,seq50428);
var seq50428__$1 = cljs.core.next.call(null,seq50428);
return web.Window.restore.cljs$core$IFn$_invoke$arity$variadic(G__50429,seq50428__$1);
});

/**
 * Method.
 * 
 *   The `web.Window` method routeEvent(), which is obsolete and no
 *   available, used to be called to forward an event to the next
 *   that has asked to capture events.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/routeEvent`
 */
web.Window.route_event = (function web$Window$route_event(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50435 = arguments.length;
var i__42557__auto___50436 = (0);
while(true){
if((i__42557__auto___50436 < len__42556__auto___50435)){
args__42563__auto__.push((arguments[i__42557__auto___50436]));

var G__50437 = (i__42557__auto___50436 + (1));
i__42557__auto___50436 = G__50437;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.route_event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.route_event.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.routeEvent,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.route_event.cljs$lang$maxFixedArity = (1);

web.Window.route_event.cljs$lang$applyTo = (function (seq50433){
var G__50434 = cljs.core.first.call(null,seq50433);
var seq50433__$1 = cljs.core.next.call(null,seq50433);
return web.Window.route_event.cljs$core$IFn$_invoke$arity$variadic(G__50434,seq50433__$1);
});

/**
 * Method.
 * 
 *   The Window.scroll() method scrolls the window to a particular
 *   in the document.
 * 
 *   `window.scroll(x-coord, y-coord)
 *   window.scroll(options)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scroll`
 */
web.Window.scroll = (function web$Window$scroll(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50440 = arguments.length;
var i__42557__auto___50441 = (0);
while(true){
if((i__42557__auto___50441 < len__42556__auto___50440)){
args__42563__auto__.push((arguments[i__42557__auto___50441]));

var G__50442 = (i__42557__auto___50441 + (1));
i__42557__auto___50441 = G__50442;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.scroll.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.scroll.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.scroll,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.scroll.cljs$lang$maxFixedArity = (1);

web.Window.scroll.cljs$lang$applyTo = (function (seq50438){
var G__50439 = cljs.core.first.call(null,seq50438);
var seq50438__$1 = cljs.core.next.call(null,seq50438);
return web.Window.scroll.cljs$core$IFn$_invoke$arity$variadic(G__50439,seq50438__$1);
});

/**
 * Method.
 * 
 *   The Window.scrollBy() method scrolls the document in the window
 *   the given amount.
 * 
 *   `window.scrollBy(x-coord, y-coord);
 *   window.scrollBy(options)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollBy`
 */
web.Window.scroll_by = (function web$Window$scroll_by(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50445 = arguments.length;
var i__42557__auto___50446 = (0);
while(true){
if((i__42557__auto___50446 < len__42556__auto___50445)){
args__42563__auto__.push((arguments[i__42557__auto___50446]));

var G__50447 = (i__42557__auto___50446 + (1));
i__42557__auto___50446 = G__50447;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.scroll_by.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.scroll_by.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.scrollBy,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.scroll_by.cljs$lang$maxFixedArity = (1);

web.Window.scroll_by.cljs$lang$applyTo = (function (seq50443){
var G__50444 = cljs.core.first.call(null,seq50443);
var seq50443__$1 = cljs.core.next.call(null,seq50443);
return web.Window.scroll_by.cljs$core$IFn$_invoke$arity$variadic(G__50444,seq50443__$1);
});

/**
 * Method.
 * 
 *   The Window.scrollByLines() method scrolls the document by the
 *   number of lines.
 * 
 *   `window.scrollByLines(lines)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollByLines`
 */
web.Window.scroll_by_lines = (function web$Window$scroll_by_lines(this$,lines){
return this$.scrollByLines(lines);
});
/**
 * Method.
 * 
 *   The Window.scrollByPages() method scrolls the current document
 *   the specified number of pages.
 * 
 *   `window.scrollByPages(pages)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollByPages`
 */
web.Window.scroll_by_pages = (function web$Window$scroll_by_pages(this$,pages){
return this$.scrollByPages(pages);
});
/**
 * Method.
 * 
 *   Window.scrollTo() scrolls to a particular set of coordinates
 *   the document.
 * 
 *   `window.scrollTo(x-coord, y-coord)
 *   window.scrollTo(options)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo`
 */
web.Window.scroll_to = (function web$Window$scroll_to(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50450 = arguments.length;
var i__42557__auto___50451 = (0);
while(true){
if((i__42557__auto___50451 < len__42556__auto___50450)){
args__42563__auto__.push((arguments[i__42557__auto___50451]));

var G__50452 = (i__42557__auto___50451 + (1));
i__42557__auto___50451 = G__50452;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.scroll_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.scroll_to.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.scrollTo,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.scroll_to.cljs$lang$maxFixedArity = (1);

web.Window.scroll_to.cljs$lang$applyTo = (function (seq50448){
var G__50449 = cljs.core.first.call(null,seq50448);
var seq50448__$1 = cljs.core.next.call(null,seq50448);
return web.Window.scroll_to.cljs$core$IFn$_invoke$arity$variadic(G__50449,seq50448__$1);
});

/**
 * Method.
 * 
 *   The Window.setCursor() method sets the cursor for the current
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/setCursor`
 */
web.Window.set_cursor = (function web$Window$set_cursor(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50455 = arguments.length;
var i__42557__auto___50456 = (0);
while(true){
if((i__42557__auto___50456 < len__42556__auto___50455)){
args__42563__auto__.push((arguments[i__42557__auto___50456]));

var G__50457 = (i__42557__auto___50456 + (1));
i__42557__auto___50456 = G__50457;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.set_cursor.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.set_cursor.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setCursor,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.set_cursor.cljs$lang$maxFixedArity = (1);

web.Window.set_cursor.cljs$lang$applyTo = (function (seq50453){
var G__50454 = cljs.core.first.call(null,seq50453);
var seq50453__$1 = cljs.core.next.call(null,seq50453);
return web.Window.set_cursor.cljs$core$IFn$_invoke$arity$variadic(G__50454,seq50453__$1);
});

/**
 * Method.
 * 
 *   This method is used to break up long running operations and run
 *   callback function immediately after the browser has completed
 *   operations such as events and display updates.
 * 
 *   `var immediateID = setImmediate(func, [param1, param2, ...]);
 *   var immediateID = setImmediate(func);
 * 
 * 
 *   where immediateID is the ID of the immediate which can be used later with `web.window.clearImmediate`.
 *   func is the function you wish to call.
 * 
 * 
 *   All parameters will be passed directly to your function.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/setImmediate`
 */
web.Window.set_immediate = (function web$Window$set_immediate(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50460 = arguments.length;
var i__42557__auto___50461 = (0);
while(true){
if((i__42557__auto___50461 < len__42556__auto___50460)){
args__42563__auto__.push((arguments[i__42557__auto___50461]));

var G__50462 = (i__42557__auto___50461 + (1));
i__42557__auto___50461 = G__50462;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.set_immediate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.set_immediate.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setImmediate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.set_immediate.cljs$lang$maxFixedArity = (1);

web.Window.set_immediate.cljs$lang$applyTo = (function (seq50458){
var G__50459 = cljs.core.first.call(null,seq50458);
var seq50458__$1 = cljs.core.next.call(null,seq50458);
return web.Window.set_immediate.cljs$core$IFn$_invoke$arity$variadic(G__50459,seq50458__$1);
});

/**
 * Method.
 * 
 *   The setInterval() method, offered on the `web.Window` and `web.Worker`
 *   repeatedly calls a function or executes a code snippet, with
 *   fixed time delay between each call.
 * 
 *   `var intervalID = scope.setInterval(func, delay[, param1, param2, ...]);
 *   var intervalID = scope.setInterval(code, delay);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval`
 */
web.Window.set_interval = (function web$Window$set_interval(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50465 = arguments.length;
var i__42557__auto___50466 = (0);
while(true){
if((i__42557__auto___50466 < len__42556__auto___50465)){
args__42563__auto__.push((arguments[i__42557__auto___50466]));

var G__50467 = (i__42557__auto___50466 + (1));
i__42557__auto___50466 = G__50467;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.set_interval.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.set_interval.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setInterval,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.set_interval.cljs$lang$maxFixedArity = (1);

web.Window.set_interval.cljs$lang$applyTo = (function (seq50463){
var G__50464 = cljs.core.first.call(null,seq50463);
var seq50463__$1 = cljs.core.next.call(null,seq50463);
return web.Window.set_interval.cljs$core$IFn$_invoke$arity$variadic(G__50464,seq50463__$1);
});

/**
 * Method.
 * 
 *   The setTimeout() method of the `web.WindowOrWorkerGlobalScope`
 *   (and successor to Window.setTimeout()) sets a timer which executes
 *   function or specified piece of code once the timer expires.
 * 
 *   `var timeoutID = scope.setTimeout(function[, delay, arg1, arg2, ...]);
 *   var timeoutID = scope.setTimeout(function[, delay]);
 *   var timeoutID = scope.setTimeout(code[, delay]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout`
 */
web.Window.set_timeout = (function web$Window$set_timeout(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50470 = arguments.length;
var i__42557__auto___50471 = (0);
while(true){
if((i__42557__auto___50471 < len__42556__auto___50470)){
args__42563__auto__.push((arguments[i__42557__auto___50471]));

var G__50472 = (i__42557__auto___50471 + (1));
i__42557__auto___50471 = G__50472;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.set_timeout.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.set_timeout.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setTimeout,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.set_timeout.cljs$lang$maxFixedArity = (1);

web.Window.set_timeout.cljs$lang$applyTo = (function (seq50468){
var G__50469 = cljs.core.first.call(null,seq50468);
var seq50468__$1 = cljs.core.next.call(null,seq50468);
return web.Window.set_timeout.cljs$core$IFn$_invoke$arity$variadic(G__50469,seq50468__$1);
});

/**
 * Method.
 * 
 *   The Window.showModalDialog() creates and displays a modal dialog
 *   containing a specified HTML document.
 * 
 *   `returnVal = window.showModalDialog(uri[, arguments][, options]);
 * 
 *   where
 * 
 * 
 *   returnVal is a variant, indicating the returnValue property as set by the window of the document specified by uri.
 *   uri is the URI of the document to display in the dialog box.
 *   arguments is an optional variant that contains values that should be passed to the dialog box; these are made available in the window object's window.dialogArguments property.
 *   options an optional string that specifies window ornamentation for the dialog box, using one or more semicolon delimited values:
 * 
 * 
 * 
 * 
 * 
 *   Syntax
 *   Description
 * 
 * 
 *   center: {on | off | yes | no | 1 | 0 }
 *   If this argument's value is on, yes, or 1, the dialog window is centered on the desktop; otherwise it's hidden. The default value is yes.
 * 
 * 
 *   dialogheight: height
 *   Specifies the height of the dialog box; by default, the size is specified in pixels.
 * 
 * 
 *   dialogleft: left
 *   Specifies the horizontal position of the dialog box in relation to the upper-left corner of the desktop.
 * 
 * 
 *   dialogwidth: width
 *   Specifies the width of the dialog box; by default, the size is specified in pixels.
 * 
 * 
 *   dialogtop: top
 *   Specifies the vertical position of the dialog box in relation to the upper-left corner of the desktop.
 * 
 * 
 *   resizable: {on | off | yes | no | 1 | 0 }
 *   If this argument's value is on, yes, or 1, the dialog window can be resized by the user; otherwise its size is fixed. The default value is no.
 * 
 * 
 *   scroll: {on | off | yes | no | 1 | 0 }
 *   If this argument's value is on, yes, or 1, the dialog window has scroll bars; otherwise its size is fixed. The default value is no.
 * 
 * 
 * 
 * 
 *   Note: Firefox does not implement the dialogHide, edge, status, or unadorned arguments.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/showModalDialog`
 */
web.Window.show_modal_dialog = (function web$Window$show_modal_dialog(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50475 = arguments.length;
var i__42557__auto___50476 = (0);
while(true){
if((i__42557__auto___50476 < len__42556__auto___50475)){
args__42563__auto__.push((arguments[i__42557__auto___50476]));

var G__50477 = (i__42557__auto___50476 + (1));
i__42557__auto___50476 = G__50477;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.show_modal_dialog.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.show_modal_dialog.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.showModalDialog,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.show_modal_dialog.cljs$lang$maxFixedArity = (1);

web.Window.show_modal_dialog.cljs$lang$applyTo = (function (seq50473){
var G__50474 = cljs.core.first.call(null,seq50473);
var seq50473__$1 = cljs.core.next.call(null,seq50473);
return web.Window.show_modal_dialog.cljs$core$IFn$_invoke$arity$variadic(G__50474,seq50473__$1);
});

/**
 * Method.
 * 
 *   The Window.sizeToContent() method sizes the window according
 *   its content. In order for it to work, the DOM content should
 *   loaded when this function is called—for example, once the DOMContentLoaded
 *   has been thrown.
 * 
 *   `window.sizeToContent()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/sizeToContent`
 */
web.Window.size_to_content = (function web$Window$size_to_content(this$){
return this$.sizeToContent();
});
/**
 * Method.
 * 
 *   The window.stop() stops further resource loading in the current
 *   context, equivalent to the stop button in the browser.
 * 
 *   `window.stop()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/stop`
 */
web.Window.stop = (function web$Window$stop(this$){
return this$.stop();
});
/**
 * Method.
 * 
 *   Updates the state of commands of the current chrome window (UI).
 * 
 *   `window.updateCommands(\"sCommandName\")`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/updateCommands`
 */
web.Window.update_commands = (function web$Window$update_commands(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50480 = arguments.length;
var i__42557__auto___50481 = (0);
while(true){
if((i__42557__auto___50481 < len__42556__auto___50480)){
args__42563__auto__.push((arguments[i__42557__auto___50481]));

var G__50482 = (i__42557__auto___50481 + (1));
i__42557__auto___50481 = G__50482;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.update_commands.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.update_commands.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.updateCommands,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.update_commands.cljs$lang$maxFixedArity = (1);

web.Window.update_commands.cljs$lang$applyTo = (function (seq50478){
var G__50479 = cljs.core.first.call(null,seq50478);
var seq50478__$1 = cljs.core.next.call(null,seq50478);
return web.Window.update_commands.cljs$core$IFn$_invoke$arity$variadic(G__50479,seq50478__$1);
});

/**
 * Method.
 * 
 *   The `web.EventTarget` method addEventListener() sets up a function
 *   will be called whenever the specified event is delivered to the
 * 
 *   `target.addEventListener(type, listener[, options]);
 *   target.addEventListener(type, listener[, useCapture]);
 *   target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener`
 */
web.Window.add_event_listener = (function web$Window$add_event_listener(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50485 = arguments.length;
var i__42557__auto___50486 = (0);
while(true){
if((i__42557__auto___50486 < len__42556__auto___50485)){
args__42563__auto__.push((arguments[i__42557__auto___50486]));

var G__50487 = (i__42557__auto___50486 + (1));
i__42557__auto___50486 = G__50487;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.add_event_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.add_event_listener.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.addEventListener,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.add_event_listener.cljs$lang$maxFixedArity = (1);

web.Window.add_event_listener.cljs$lang$applyTo = (function (seq50483){
var G__50484 = cljs.core.first.call(null,seq50483);
var seq50483__$1 = cljs.core.next.call(null,seq50483);
return web.Window.add_event_listener.cljs$core$IFn$_invoke$arity$variadic(G__50484,seq50483__$1);
});

/**
 * Method.
 * 
 *   The EventTarget.removeEventListener() method removes from the
 *   an event listener previously registered with `web.EventTarget.addEventListener()`.
 *   event listener to be removed is identified using a combination
 *   the event type, the event listener function itself, and various
 *   options that may affect the matching process; see Matching event
 *   for removal
 * 
 *   `target.removeEventListener(type, listener[, options]);
 *   target.removeEventListener(type, listener[, useCapture]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener`
 */
web.Window.remove_event_listener = (function web$Window$remove_event_listener(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50490 = arguments.length;
var i__42557__auto___50491 = (0);
while(true){
if((i__42557__auto___50491 < len__42556__auto___50490)){
args__42563__auto__.push((arguments[i__42557__auto___50491]));

var G__50492 = (i__42557__auto___50491 + (1));
i__42557__auto___50491 = G__50492;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Window.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Window.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.removeEventListener,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Window.remove_event_listener.cljs$lang$maxFixedArity = (1);

web.Window.remove_event_listener.cljs$lang$applyTo = (function (seq50488){
var G__50489 = cljs.core.first.call(null,seq50488);
var seq50488__$1 = cljs.core.next.call(null,seq50488);
return web.Window.remove_event_listener.cljs$core$IFn$_invoke$arity$variadic(G__50489,seq50488__$1);
});

/**
 * Property.
 * 
 *   Returns a reference to the application cache object for the window.
 * 
 *   `cache = window.applicationCache`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/applicationCache`
 */
web.Window.application_cache = (function web$Window$application_cache(this$){
return this$.applicationCache();
});
/**
 * Property.
 * 
 *   Returns a reference to the application cache object for the window.
 * 
 *   `cache = window.applicationCache`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/applicationCache`
 */
web.Window.set_application_cache_BANG_ = (function web$Window$set_application_cache_BANG_(this$,val){
return (this$["applicationCache"] = val);
});
/**
 * Property.
 * 
 *   The caches read-only property of the `web.WindowOrWorkerGlobalScope`
 *   returns the `web.CacheStorage` object associated with the current
 *   This object enables functionality such as storing assets for
 *   use, and generating custom responses to requests.
 * 
 *   `var myCacheStorage = self.caches; // or just caches`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/caches`
 */
web.Window.caches = (function web$Window$caches(this$){
return this$.caches();
});
/**
 * Property.
 * 
 *   The Window.closed read-only property indicates whether the referenced
 *   is closed or not.
 * 
 *   `isClosed = windowRef.closed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/closed`
 */
web.Window.closed = (function web$Window$closed(this$){
return this$.closed();
});
/**
 * Property.
 * 
 *   The Window.closed read-only property indicates whether the referenced
 *   is closed or not.
 * 
 *   `isClosed = windowRef.closed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/closed`
 */
web.Window.set_closed_BANG_ = (function web$Window$set_closed_BANG_(this$,val){
return (this$["closed"] = val);
});
/**
 * Property.
 * 
 *   The Window.console property returns a reference to the `web.Console`
 *   which provides methods for logging information to the browser's
 *   These methods are intended for debugging purposes only and should
 *   be relied on for presenting information to end users.
 * 
 *   `var consoleObj = window.console;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/console`
 */
web.Window.console = (function web$Window$console(this$){
return this$.console();
});
/**
 * Property.
 * 
 *   The controllers property of the `web.Window` interface returns
 *   XUL controllers of the chrome window.
 * 
 *   `controllers = window.controllers
 * 
 * 
 *   controllers is an object of type `web.XULControllers` (`web.nsIControllers`).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/controllers`
 */
web.Window.controllers = (function web$Window$controllers(this$){
return this$.controllers();
});
/**
 * Property.
 * 
 *   The controllers property of the `web.Window` interface returns
 *   XUL controllers of the chrome window.
 * 
 *   `controllers = window.controllers
 * 
 * 
 *   controllers is an object of type `web.XULControllers` (`web.nsIControllers`).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/controllers`
 */
web.Window.set_controllers_BANG_ = (function web$Window$set_controllers_BANG_(this$,val){
return (this$["controllers"] = val);
});
/**
 * Property.
 * 
 *   The `web.Window.crypto` property returns the `web.Crypto` object
 *   to the global object. This object allows web pages access to
 *   cryptographic related services. Although the `web.Window.crypto`
 *   iteself is read-only, all of its methods (and the methods of
 *   child object, `web.SubtleCrypto`) are not read-only, and therefore
 *   to attack by polyfill.
 * 
 *   `var cryptoObj = window.crypto || window.msCrypto; // for IE 11`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto`
 */
web.Window.crypto = (function web$Window$crypto(this$){
return this$.crypto();
});
/**
 * Property.
 * 
 *   The `web.Window.crypto` property returns the `web.Crypto` object
 *   to the global object. This object allows web pages access to
 *   cryptographic related services. Although the `web.Window.crypto`
 *   iteself is read-only, all of its methods (and the methods of
 *   child object, `web.SubtleCrypto`) are not read-only, and therefore
 *   to attack by polyfill.
 * 
 *   `var cryptoObj = window.crypto || window.msCrypto; // for IE 11`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/crypto`
 */
web.Window.set_crypto_BANG_ = (function web$Window$set_crypto_BANG_(this$,val){
return (this$["crypto"] = val);
});
/**
 * Property.
 * 
 *   The customElements read-only property of the `web.Window` interface
 *   a reference to the `web.CustomElementRegistry` object, which
 *   be used to register new custom elements and get information about
 *   registered custom elements.
 * 
 *   `let customElementRegistry = window.customElements;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements`
 */
web.Window.custom_elements = (function web$Window$custom_elements(this$){
return this$.customElements();
});
/**
 * Property.
 * 
 *   The customElements read-only property of the `web.Window` interface
 *   a reference to the `web.CustomElementRegistry` object, which
 *   be used to register new custom elements and get information about
 *   registered custom elements.
 * 
 *   `let customElementRegistry = window.customElements;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/customElements`
 */
web.Window.set_custom_elements_BANG_ = (function web$Window$set_custom_elements_BANG_(this$,val){
return (this$["customElements"] = val);
});
/**
 * Property.
 * 
 *   Gets/sets the status bar text for the given window.
 * 
 *   `var sMsg = window.defaultStatus;
 *   window.defaultStatus = sMsg;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/defaultStatus`
 */
web.Window.default_status = (function web$Window$default_status(this$){
return this$.defaultStatus();
});
/**
 * Property.
 * 
 *   Gets/sets the status bar text for the given window.
 * 
 *   `var sMsg = window.defaultStatus;
 *   window.defaultStatus = sMsg;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/defaultStatus`
 */
web.Window.set_default_status_BANG_ = (function web$Window$set_default_status_BANG_(this$,val){
return (this$["defaultStatus"] = val);
});
/**
 * Property.
 * 
 *   The `web.Window` property devicePixelRatio returns the ratio
 *   the resolution in physical pixels to the resolution in CSS pixels
 *   the current display device.
 * 
 *   `value = window.devicePixelRatio;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio`
 */
web.Window.device_pixel_ratio = (function web$Window$device_pixel_ratio(this$){
return this$.devicePixelRatio();
});
/**
 * Property.
 * 
 *   The dialogArguments property returns the parameters that were
 *   into the `web.window.showModalDialog()` method.
 * 
 *   `value = window.dialogArguments;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/dialogArguments`
 */
web.Window.dialog_arguments = (function web$Window$dialog_arguments(this$){
return this$.dialogArguments();
});
/**
 * Property.
 * 
 *   The dialogArguments property returns the parameters that were
 *   into the `web.window.showModalDialog()` method.
 * 
 *   `value = window.dialogArguments;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/dialogArguments`
 */
web.Window.set_dialog_arguments_BANG_ = (function web$Window$set_dialog_arguments_BANG_(this$,val){
return (this$["dialogArguments"] = val);
});
/**
 * Property.
 * 
 *   Returned the window personalbar toolbar object. Use the `web.window.personalbar`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/directories`
 */
web.Window.directories = (function web$Window$directories(this$){
return this$.directories();
});
/**
 * Property.
 * 
 *   Returned the window personalbar toolbar object. Use the `web.window.personalbar`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/directories`
 */
web.Window.set_directories_BANG_ = (function web$Window$set_directories_BANG_(this$,val){
return (this$["directories"] = val);
});
/**
 * Property.
 * 
 *   window.document returns a reference to the document contained
 *   the window.
 * 
 *   `doc = window.document`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/document`
 */
web.Window.document = (function web$Window$document(this$){
return this$.document();
});
/**
 * Property.
 * 
 *   window.document returns a reference to the document contained
 *   the window.
 * 
 *   `doc = window.document`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/document`
 */
web.Window.set_document_BANG_ = (function web$Window$set_document_BANG_(this$,val){
return (this$["document"] = val);
});
/**
 * Property.
 * 
 *   The read-only `web.Window` property event returns the `web.Event`
 *   is currently being handled by the site's code. Outside the context
 *   an event handler, the value is always undefined.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/event`
 */
web.Window.event = (function web$Window$event(this$){
return this$.event();
});
/**
 * Property.
 * 
 *   Returns the element (such as `web.<iframe>` or `web.<object>`)
 *   which the window is embedded, or null if the element is either
 *   or is embedded into a document with a different script origin;
 *   is, in cross-origin situations.
 * 
 *   `frameEl = window.frameElement;
 * 
 * 
 *   frameEl is the element which the window is embedded into. If the window isn't embedded into another document, or if the document into which it's embedded has a different origin (such as having been located from a different domain), this is null.
 * 
 * 
 * 
 *   Despite this property's name, it works for documents embedded within any embedding point, including `web.<object>`, `web.<iframe>`, or `web.<embed>`.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/frameElement`
 */
web.Window.frame_element = (function web$Window$frame_element(this$){
return this$.frameElement();
});
/**
 * Property.
 * 
 *   Returns the element (such as `web.<iframe>` or `web.<object>`)
 *   which the window is embedded, or null if the element is either
 *   or is embedded into a document with a different script origin;
 *   is, in cross-origin situations.
 * 
 *   `frameEl = window.frameElement;
 * 
 * 
 *   frameEl is the element which the window is embedded into. If the window isn't embedded into another document, or if the document into which it's embedded has a different origin (such as having been located from a different domain), this is null.
 * 
 * 
 * 
 *   Despite this property's name, it works for documents embedded within any embedding point, including `web.<object>`, `web.<iframe>`, or `web.<embed>`.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/frameElement`
 */
web.Window.set_frame_element_BANG_ = (function web$Window$set_frame_element_BANG_(this$,val){
return (this$["frameElement"] = val);
});
/**
 * Property.
 * 
 *   Returns the window itself, which is an array-like object, listing
 *   direct sub-frames of the current window.
 * 
 *   `frameList = window.frames;
 * 
 * 
 *   frameList is a list of frame objects. It is similar to an array in that it has a length property and its items can be accessed using the [i] notation.
 *   frameList === window evaluates to true.
 *   Each item in the window.frames pseudo-array represents the window object corresponding to the given <frame>'s or <iframe>'s content, not the (i)frame DOM element (i.e., window.frames[0] is the same thing as document.getElementsByTagName(\"iframe\")[0].contentWindow).
 *   For more details about the returned value, refer to this thread on mozilla.dev.platform [dead link].`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/frames`
 */
web.Window.frames = (function web$Window$frames(this$){
return this$.frames();
});
/**
 * Property.
 * 
 *   Returns the window itself, which is an array-like object, listing
 *   direct sub-frames of the current window.
 * 
 *   `frameList = window.frames;
 * 
 * 
 *   frameList is a list of frame objects. It is similar to an array in that it has a length property and its items can be accessed using the [i] notation.
 *   frameList === window evaluates to true.
 *   Each item in the window.frames pseudo-array represents the window object corresponding to the given <frame>'s or <iframe>'s content, not the (i)frame DOM element (i.e., window.frames[0] is the same thing as document.getElementsByTagName(\"iframe\")[0].contentWindow).
 *   For more details about the returned value, refer to this thread on mozilla.dev.platform [dead link].`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/frames`
 */
web.Window.set_frames_BANG_ = (function web$Window$set_frames_BANG_(this$,val){
return (this$["frames"] = val);
});
/**
 * Property.
 * 
 *   The fullScreen property of the Window interface indicates whether
 *   window is displayed in full screen mode or not. It is only reliable
 *   Gecko 1.9 (Firefox 3) and later; see the Notes below.
 * 
 *   `isInFullScreen = windowRef.fullScreen;
 * 
 *   With chrome privileges, the property is read-write, otherwise it is read-only. Bear in mind that if you try to set this property without chrome privileges, it will not throw an exception and instead just silently fail. This is to prevent scripts designed to set this property in Internet Explorer from breaking.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/fullScreen`
 */
web.Window.full_screen = (function web$Window$full_screen(this$){
return this$.fullScreen();
});
/**
 * Property.
 * 
 *   The fullScreen property of the Window interface indicates whether
 *   window is displayed in full screen mode or not. It is only reliable
 *   Gecko 1.9 (Firefox 3) and later; see the Notes below.
 * 
 *   `isInFullScreen = windowRef.fullScreen;
 * 
 *   With chrome privileges, the property is read-write, otherwise it is read-only. Bear in mind that if you try to set this property without chrome privileges, it will not throw an exception and instead just silently fail. This is to prevent scripts designed to set this property in Internet Explorer from breaking.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/fullScreen`
 */
web.Window.set_full_screen_BANG_ = (function web$Window$set_full_screen_BANG_(this$,val){
return (this$["fullScreen"] = val);
});
/**
 * Property.
 * 
 *   The Window.history read-only property returns a reference to
 *   `web.History` object, which provides an interface for manipulating
 *   browser session history (pages visited in the tab or frame that
 *   current page is loaded in).
 * 
 *   `var historyObj = window.history;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/history`
 */
web.Window.history = (function web$Window$history(this$){
return this$.history();
});
/**
 * Property.
 * 
 *   The Window.history read-only property returns a reference to
 *   `web.History` object, which provides an interface for manipulating
 *   browser session history (pages visited in the tab or frame that
 *   current page is loaded in).
 * 
 *   `var historyObj = window.history;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/history`
 */
web.Window.set_history_BANG_ = (function web$Window$set_history_BANG_(this$,val){
return (this$["history"] = val);
});
/**
 * Property.
 * 
 *   The indexedDB read-only property of the `web.WindowOrWorkerGlobalScope`
 *   provides a mechanism for applications to asynchronously access
 *   capabilities of indexed databases.
 * 
 *   `var IDBFactory = self.indexedDB;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/indexedDB`
 */
web.Window.indexed_db = (function web$Window$indexed_db(this$){
return this$.indexedDB();
});
/**
 * Property.
 * 
 *   Height (in pixels) of the browser window viewport including,
 *   rendered, the horizontal scrollbar.
 * 
 *   `var intViewportHeight = window.innerHeight;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight`
 */
web.Window.inner_height = (function web$Window$inner_height(this$){
return this$.innerHeight();
});
/**
 * Property.
 * 
 *   Height (in pixels) of the browser window viewport including,
 *   rendered, the horizontal scrollbar.
 * 
 *   `var intViewportHeight = window.innerHeight;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight`
 */
web.Window.set_inner_height_BANG_ = (function web$Window$set_inner_height_BANG_(this$,val){
return (this$["innerHeight"] = val);
});
/**
 * Property.
 * 
 *   Width (in pixels) of the browser window viewport including, if
 *   the vertical scrollbar.
 * 
 *   `var intViewportWidth = window.innerWidth;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth`
 */
web.Window.inner_width = (function web$Window$inner_width(this$){
return this$.innerWidth();
});
/**
 * Property.
 * 
 *   Width (in pixels) of the browser window viewport including, if
 *   the vertical scrollbar.
 * 
 *   `var intViewportWidth = window.innerWidth;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth`
 */
web.Window.set_inner_width_BANG_ = (function web$Window$set_inner_width_BANG_(this$,val){
return (this$["innerWidth"] = val);
});
/**
 * Property.
 * 
 *   The window.isSecureContext read-only property indicates whether
 *   context is capable of using features that require secure contexts.
 * 
 *   `var isSecure = window.isSecureContext`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/isSecureContext`
 */
web.Window.is_secure_context = (function web$Window$is_secure_context(this$){
return this$.isSecureContext();
});
/**
 * Property.
 * 
 *   The window.isSecureContext read-only property indicates whether
 *   context is capable of using features that require secure contexts.
 * 
 *   `var isSecure = window.isSecureContext`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/isSecureContext`
 */
web.Window.set_is_secure_context_BANG_ = (function web$Window$set_is_secure_context_BANG_(this$,val){
return (this$["isSecureContext"] = val);
});
/**
 * Property.
 * 
 *   Returns the number of frames (either `web.<frame>` or `web.<iframe>`
 *   in the window.
 * 
 *   `framesCount = window.length;
 * 
 * 
 *   framesCount is the number of frames.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/length`
 */
web.Window.length = (function web$Window$length(this$){
return this$.length();
});
/**
 * Property.
 * 
 *   Returns the number of frames (either `web.<frame>` or `web.<iframe>`
 *   in the window.
 * 
 *   `framesCount = window.length;
 * 
 * 
 *   framesCount is the number of frames.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/length`
 */
web.Window.set_length_BANG_ = (function web$Window$set_length_BANG_(this$,val){
return (this$["length"] = val);
});
/**
 * Property.
 * 
 *   The read-only localStorage property allows you to access a `web.Storage`
 *   for the `web.Document`'s origin; the stored data is saved across
 *   sessions.
 * 
 *   `myStorage = window.localStorage;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage`
 */
web.Window.local_storage = (function web$Window$local_storage(this$){
return this$.localStorage();
});
/**
 * Property.
 * 
 *   The Window.location read-only property returns a `web.Location`
 *   with information about the current location of the document.
 * 
 *   `var oldLocation = location;
 *   location = newLocation;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/location`
 */
web.Window.location = (function web$Window$location(this$){
return this$.location();
});
/**
 * Property.
 * 
 *   The Window.location read-only property returns a `web.Location`
 *   with information about the current location of the document.
 * 
 *   `var oldLocation = location;
 *   location = newLocation;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/location`
 */
web.Window.set_location_BANG_ = (function web$Window$set_location_BANG_(this$,val){
return (this$["location"] = val);
});
/**
 * Property.
 * 
 *   Returns the locationbar object, whose visibility can be checked.
 * 
 *   `objRef = window.locationbar`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/locationbar`
 */
web.Window.locationbar = (function web$Window$locationbar(this$){
return this$.locationbar();
});
/**
 * Property.
 * 
 *   Returns the locationbar object, whose visibility can be checked.
 * 
 *   `objRef = window.locationbar`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/locationbar`
 */
web.Window.set_locationbar_BANG_ = (function web$Window$set_locationbar_BANG_(this$,val){
return (this$["locationbar"] = val);
});
/**
 * Property.
 * 
 *   The Window.menubar property returns the menubar object, whose
 *   can be checked.
 * 
 *   `objRef = window.menubar`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/menubar`
 */
web.Window.menubar = (function web$Window$menubar(this$){
return this$.menubar();
});
/**
 * Property.
 * 
 *   The Window.menubar property returns the menubar object, whose
 *   can be checked.
 * 
 *   `objRef = window.menubar`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/menubar`
 */
web.Window.set_menubar_BANG_ = (function web$Window$set_menubar_BANG_(this$,val){
return (this$["menubar"] = val);
});
/**
 * Property.
 * 
 *   Returns the time, in milliseconds since the epoch, at which animations
 *   now should be considered to have started. This value should be
 *   instead of, for example, Date.now(), because this value will
 *   the same for all animations started in this window during this
 *   interval, allowing them to remain in sync with one another.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozAnimationStartTime`
 */
web.Window.moz_animation_start_time = (function web$Window$moz_animation_start_time(this$){
return this$.mozAnimationStartTime();
});
/**
 * Property.
 * 
 *   Returns the time, in milliseconds since the epoch, at which animations
 *   now should be considered to have started. This value should be
 *   instead of, for example, Date.now(), because this value will
 *   the same for all animations started in this window during this
 *   interval, allowing them to remain in sync with one another.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozAnimationStartTime`
 */
web.Window.set_moz_animation_start_time_BANG_ = (function web$Window$set_moz_animation_start_time_BANG_(this$,val){
return (this$["mozAnimationStartTime"] = val);
});
/**
 * Property.
 * 
 *   Gets the X coordinate of the top-left corner of the window's
 *   in screen coordinates.
 * 
 *   `screenX = window.mozInnerScreenX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozInnerScreenX`
 */
web.Window.moz_inner_screen_x = (function web$Window$moz_inner_screen_x(this$){
return this$.mozInnerScreenX();
});
/**
 * Property.
 * 
 *   Gets the X coordinate of the top-left corner of the window's
 *   in screen coordinates.
 * 
 *   `screenX = window.mozInnerScreenX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozInnerScreenX`
 */
web.Window.set_moz_inner_screen_x_BANG_ = (function web$Window$set_moz_inner_screen_x_BANG_(this$,val){
return (this$["mozInnerScreenX"] = val);
});
/**
 * Property.
 * 
 *   Gets the Y coordinate of the top-left corner of the window's
 *   in screen coordinates.
 * 
 *   `screenY = window.mozInnerScreenY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozInnerScreenY`
 */
web.Window.moz_inner_screen_y = (function web$Window$moz_inner_screen_y(this$){
return this$.mozInnerScreenY();
});
/**
 * Property.
 * 
 *   Gets the Y coordinate of the top-left corner of the window's
 *   in screen coordinates.
 * 
 *   `screenY = window.mozInnerScreenY;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozInnerScreenY`
 */
web.Window.set_moz_inner_screen_y_BANG_ = (function web$Window$set_moz_inner_screen_y_BANG_(this$,val){
return (this$["mozInnerScreenY"] = val);
});
/**
 * Property.
 * 
 *   Returns the number of times the current document has been painted
 *   the screen in this window.
 * 
 *   `var paintCount = window.mozPaintCount;
 * 
 * 
 *   paintCount stores the window.mozPaintCount property value.
 *   The window.mozPaintCount value is a long long, and starts at zero when the document is first created, incrementing by one each time the document is painted.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozPaintCount`
 */
web.Window.moz_paint_count = (function web$Window$moz_paint_count(this$){
return this$.mozPaintCount();
});
/**
 * Property.
 * 
 *   Returns the number of times the current document has been painted
 *   the screen in this window.
 * 
 *   `var paintCount = window.mozPaintCount;
 * 
 * 
 *   paintCount stores the window.mozPaintCount property value.
 *   The window.mozPaintCount value is a long long, and starts at zero when the document is first created, incrementing by one each time the document is painted.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/mozPaintCount`
 */
web.Window.set_moz_paint_count_BANG_ = (function web$Window$set_moz_paint_count_BANG_(this$,val){
return (this$["mozPaintCount"] = val);
});
/**
 * Property.
 * 
 *   Gets/sets the name of the window.
 * 
 *   `string = window.name;
 *   window.name = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/name`
 */
web.Window.name = (function web$Window$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   Gets/sets the name of the window.
 * 
 *   `string = window.name;
 *   window.name = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/name`
 */
web.Window.set_name_BANG_ = (function web$Window$set_name_BANG_(this$,val){
return (this$["name"] = val);
});
/**
 * Property.
 * 
 *   The Window.navigator read-only property returns a reference to
 *   `web.Navigator` object, which can be queried for information
 *   the application running the script.
 * 
 *   `navigatorObject = window.navigator`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/navigator`
 */
web.Window.navigator = (function web$Window$navigator(this$){
return this$.navigator();
});
/**
 * Property.
 * 
 *   The onabort property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing abort events sent to the window.
 * 
 *   `window.onabort = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort`
 */
web.Window.onabort = (function web$Window$onabort(this$){
return this$.onabort();
});
/**
 * Property.
 * 
 *   The onabort property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing abort events sent to the window.
 * 
 *   `window.onabort = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort`
 */
web.Window.set_onabort_BANG_ = (function web$Window$set_onabort_BANG_(this$,val){
return (this$["onabort"] = val);
});
/**
 * Property.
 * 
 *   The onafterprint property of the `web.WindowEventHandlers` mixin
 *   the `web.EventHandler` for processing afterprint events for the
 *   window. These events are raised after the user prints, or if
 *   abort the print dialog.
 * 
 *   `window.addEventListener(\"afterprint\", function(event) { ... });
 *   window.onafterprint = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onafterprint`
 */
web.Window.onafterprint = (function web$Window$onafterprint(this$){
return this$.onafterprint();
});
/**
 * Property.
 * 
 *   The onafterprint property of the `web.WindowEventHandlers` mixin
 *   the `web.EventHandler` for processing afterprint events for the
 *   window. These events are raised after the user prints, or if
 *   abort the print dialog.
 * 
 *   `window.addEventListener(\"afterprint\", function(event) { ... });
 *   window.onafterprint = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onafterprint`
 */
web.Window.set_onafterprint_BANG_ = (function web$Window$set_onafterprint_BANG_(this$,val){
return (this$["onafterprint"] = val);
});
/**
 * Property.
 * 
 *   The onanimationcancel property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationcancel events.
 * 
 *   `var animCancelHandler = target.onanimationcancel;
 * 
 *   target.onanimationcancel = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationcancel`
 */
web.Window.onanimationcancel = (function web$Window$onanimationcancel(this$){
return this$.onanimationcancel();
});
/**
 * Property.
 * 
 *   The onanimationcancel property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationcancel events.
 * 
 *   `var animCancelHandler = target.onanimationcancel;
 * 
 *   target.onanimationcancel = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationcancel`
 */
web.Window.set_onanimationcancel_BANG_ = (function web$Window$set_onanimationcancel_BANG_(this$,val){
return (this$["onanimationcancel"] = val);
});
/**
 * Property.
 * 
 *   The onanimationend property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationend events.
 * 
 *   `var animEndHandler = target.onanimationend;
 * 
 *   target.onanimationend = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationend`
 */
web.Window.onanimationend = (function web$Window$onanimationend(this$){
return this$.onanimationend();
});
/**
 * Property.
 * 
 *   The onanimationend property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationend events.
 * 
 *   `var animEndHandler = target.onanimationend;
 * 
 *   target.onanimationend = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationend`
 */
web.Window.set_onanimationend_BANG_ = (function web$Window$set_onanimationend_BANG_(this$,val){
return (this$["onanimationend"] = val);
});
/**
 * Property.
 * 
 *   The onanimationiteration property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationiteration events.
 * 
 *   `var animIterationHandler = target.onanimationiteration;
 * 
 *   target.onanimationiteration = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration`
 */
web.Window.onanimationiteration = (function web$Window$onanimationiteration(this$){
return this$.onanimationiteration();
});
/**
 * Property.
 * 
 *   The onanimationiteration property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationiteration events.
 * 
 *   `var animIterationHandler = target.onanimationiteration;
 * 
 *   target.onanimationiteration = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration`
 */
web.Window.set_onanimationiteration_BANG_ = (function web$Window$set_onanimationiteration_BANG_(this$,val){
return (this$["onanimationiteration"] = val);
});
/**
 * Property.
 * 
 *   The onappinstalled attribute of the `web.Window` object serves
 *   an event handler for the appinstalled event, which is dispatched
 *   the web application is successfully installed as a progressive
 *   app. The event that is fired is a \"simple event\" that implements
 *   `web.Event` interface.
 * 
 *   `window.onappinstalled = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onappinstalled`
 */
web.Window.onappinstalled = (function web$Window$onappinstalled(this$){
return this$.onappinstalled();
});
/**
 * Property.
 * 
 *   The onappinstalled attribute of the `web.Window` object serves
 *   an event handler for the appinstalled event, which is dispatched
 *   the web application is successfully installed as a progressive
 *   app. The event that is fired is a \"simple event\" that implements
 *   `web.Event` interface.
 * 
 *   `window.onappinstalled = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onappinstalled`
 */
web.Window.set_onappinstalled_BANG_ = (function web$Window$set_onappinstalled_BANG_(this$,val){
return (this$["onappinstalled"] = val);
});
/**
 * Property.
 * 
 *   The onauxclick property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing auxclick events.
 * 
 *   `target.onauxclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onauxclick`
 */
web.Window.onauxclick = (function web$Window$onauxclick(this$){
return this$.onauxclick();
});
/**
 * Property.
 * 
 *   The onauxclick property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing auxclick events.
 * 
 *   `target.onauxclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onauxclick`
 */
web.Window.set_onauxclick_BANG_ = (function web$Window$set_onauxclick_BANG_(this$,val){
return (this$["onauxclick"] = val);
});
/**
 * Property.
 * 
 *   The Window.onbeforeinstallprompt property is an event handler
 *   processing a beforeinstallprompt, which is dispatched on devices
 *   a user is about to be prompted to \"install\" a web application.
 *   associated event may be saved for later and used to prompt the
 *   at a more suitable time.
 * 
 *   `window.addEventListener(\"beforeinstallprompt\", function(event) { ... });
 *   window.onbeforeinstallprompt = function(event) { ...};`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onbeforeinstallprompt`
 */
web.Window.onbeforeinstallprompt = (function web$Window$onbeforeinstallprompt(this$){
return this$.onbeforeinstallprompt();
});
/**
 * Property.
 * 
 *   The Window.onbeforeinstallprompt property is an event handler
 *   processing a beforeinstallprompt, which is dispatched on devices
 *   a user is about to be prompted to \"install\" a web application.
 *   associated event may be saved for later and used to prompt the
 *   at a more suitable time.
 * 
 *   `window.addEventListener(\"beforeinstallprompt\", function(event) { ... });
 *   window.onbeforeinstallprompt = function(event) { ...};`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onbeforeinstallprompt`
 */
web.Window.set_onbeforeinstallprompt_BANG_ = (function web$Window$set_onbeforeinstallprompt_BANG_(this$,val){
return (this$["onbeforeinstallprompt"] = val);
});
/**
 * Property.
 * 
 *   The onbeforeprint property of the `web.WindowEventHandlers` mixin
 *   the `web.EventHandler` for processing beforeprint events for
 *   current window. These events are raised before the print dialog
 *   is opened.
 * 
 *   `window.addEventListener(\"beforeprint\", function(event) { ... });
 *   window.onbeforeprint = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint`
 */
web.Window.onbeforeprint = (function web$Window$onbeforeprint(this$){
return this$.onbeforeprint();
});
/**
 * Property.
 * 
 *   The onbeforeprint property of the `web.WindowEventHandlers` mixin
 *   the `web.EventHandler` for processing beforeprint events for
 *   current window. These events are raised before the print dialog
 *   is opened.
 * 
 *   `window.addEventListener(\"beforeprint\", function(event) { ... });
 *   window.onbeforeprint = function(event) { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeprint`
 */
web.Window.set_onbeforeprint_BANG_ = (function web$Window$set_onbeforeprint_BANG_(this$,val){
return (this$["onbeforeprint"] = val);
});
/**
 * Property.
 * 
 *   The onbeforeunload property of the `web.WindowEventHandlers`
 *   is the `web.EventHandler` for processing beforeunload events.
 *   events fire when a window is about to unload its resources. At
 *   point, the document is still visible and the event is still cancelable.
 * 
 *   `window.addEventListener(\"beforeunload\", function(event) { ... });
 *   window.onbeforeunload = function(event) { ... };
 * 
 *   Typically, it is better to use `web.window.addEventListener()` and the beforeunload event, instead of onbeforeunload.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload`
 */
web.Window.onbeforeunload = (function web$Window$onbeforeunload(this$){
return this$.onbeforeunload();
});
/**
 * Property.
 * 
 *   The onbeforeunload property of the `web.WindowEventHandlers`
 *   is the `web.EventHandler` for processing beforeunload events.
 *   events fire when a window is about to unload its resources. At
 *   point, the document is still visible and the event is still cancelable.
 * 
 *   `window.addEventListener(\"beforeunload\", function(event) { ... });
 *   window.onbeforeunload = function(event) { ... };
 * 
 *   Typically, it is better to use `web.window.addEventListener()` and the beforeunload event, instead of onbeforeunload.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onbeforeunload`
 */
web.Window.set_onbeforeunload_BANG_ = (function web$Window$set_onbeforeunload_BANG_(this$,val){
return (this$["onbeforeunload"] = val);
});
/**
 * Property.
 * 
 *   The onblur property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing blur events. It's available
 *   `web.Element`, `web.Document`, and `web.Window`.
 * 
 *   `target.onblur = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur`
 */
web.Window.onblur = (function web$Window$onblur(this$){
return this$.onblur();
});
/**
 * Property.
 * 
 *   The onblur property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing blur events. It's available
 *   `web.Element`, `web.Document`, and `web.Window`.
 * 
 *   `target.onblur = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur`
 */
web.Window.set_onblur_BANG_ = (function web$Window$set_onblur_BANG_(this$,val){
return (this$["onblur"] = val);
});
/**
 * Property.
 * 
 *   The oncancel property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing cancel events sent to a
 *   element.
 * 
 *   `target.oncancel = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncancel`
 */
web.Window.oncancel = (function web$Window$oncancel(this$){
return this$.oncancel();
});
/**
 * Property.
 * 
 *   The oncancel property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing cancel events sent to a
 *   element.
 * 
 *   `target.oncancel = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncancel`
 */
web.Window.set_oncancel_BANG_ = (function web$Window$set_oncancel_BANG_(this$,val){
return (this$["oncancel"] = val);
});
/**
 * Property.
 * 
 *   The oncanplay property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing canplay events.
 * 
 *   `element.oncanplay = handlerFunction;
 *   var handlerFunction = element.oncanplay;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplay`
 */
web.Window.oncanplay = (function web$Window$oncanplay(this$){
return this$.oncanplay();
});
/**
 * Property.
 * 
 *   The oncanplay property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing canplay events.
 * 
 *   `element.oncanplay = handlerFunction;
 *   var handlerFunction = element.oncanplay;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplay`
 */
web.Window.set_oncanplay_BANG_ = (function web$Window$set_oncanplay_BANG_(this$,val){
return (this$["oncanplay"] = val);
});
/**
 * Property.
 * 
 *   The oncanplaythrough property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing canplaythrough events.
 * 
 *   `element.oncanplaythrough = handlerFunction;
 *   var handlerFunction = element.oncanplaythrough;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplaythrough`
 */
web.Window.oncanplaythrough = (function web$Window$oncanplaythrough(this$){
return this$.oncanplaythrough();
});
/**
 * Property.
 * 
 *   The oncanplaythrough property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing canplaythrough events.
 * 
 *   `element.oncanplaythrough = handlerFunction;
 *   var handlerFunction = element.oncanplaythrough;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplaythrough`
 */
web.Window.set_oncanplaythrough_BANG_ = (function web$Window$set_oncanplaythrough_BANG_(this$,val){
return (this$["oncanplaythrough"] = val);
});
/**
 * Property.
 * 
 *   The onchange property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing change events.
 * 
 *   `target.onchange = functionRef;
 * 
 *   functionRef is a function name or a function expression. The function receives an `web.Event` object as its sole argument.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange`
 */
web.Window.onchange = (function web$Window$onchange(this$){
return this$.onchange();
});
/**
 * Property.
 * 
 *   The onchange property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing change events.
 * 
 *   `target.onchange = functionRef;
 * 
 *   functionRef is a function name or a function expression. The function receives an `web.Event` object as its sole argument.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange`
 */
web.Window.set_onchange_BANG_ = (function web$Window$set_onchange_BANG_(this$,val){
return (this$["onchange"] = val);
});
/**
 * Property.
 * 
 *   The onclick property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing click events on a given element.
 * 
 *   `target.onclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick`
 */
web.Window.onclick = (function web$Window$onclick(this$){
return this$.onclick();
});
/**
 * Property.
 * 
 *   The onclick property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing click events on a given element.
 * 
 *   `target.onclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick`
 */
web.Window.set_onclick_BANG_ = (function web$Window$set_onclick_BANG_(this$,val){
return (this$["onclick"] = val);
});
/**
 * Property.
 * 
 *   The onclose property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing close events sent to a `web.<dialog>`
 * 
 *   `target.onclose = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose`
 */
web.Window.onclose = (function web$Window$onclose(this$){
return this$.onclose();
});
/**
 * Property.
 * 
 *   The onclose property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing close events sent to a `web.<dialog>`
 * 
 *   `target.onclose = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose`
 */
web.Window.set_onclose_BANG_ = (function web$Window$set_onclose_BANG_(this$,val){
return (this$["onclose"] = val);
});
/**
 * Property.
 * 
 *   The oncontextmenu property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes contextmenu events.
 * 
 *   `target.oncontextmenu = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncontextmenu`
 */
web.Window.oncontextmenu = (function web$Window$oncontextmenu(this$){
return this$.oncontextmenu();
});
/**
 * Property.
 * 
 *   The oncontextmenu property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes contextmenu events.
 * 
 *   `target.oncontextmenu = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncontextmenu`
 */
web.Window.set_oncontextmenu_BANG_ = (function web$Window$set_oncontextmenu_BANG_(this$,val){
return (this$["oncontextmenu"] = val);
});
/**
 * Property.
 * 
 *   The oncuechange property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing cuechange events.
 * 
 *   `element.oncuechange = handlerFunction;
 *   var handlerFunction = element.oncuechange;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncuechange`
 */
web.Window.oncuechange = (function web$Window$oncuechange(this$){
return this$.oncuechange();
});
/**
 * Property.
 * 
 *   The oncuechange property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing cuechange events.
 * 
 *   `element.oncuechange = handlerFunction;
 *   var handlerFunction = element.oncuechange;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncuechange`
 */
web.Window.set_oncuechange_BANG_ = (function web$Window$set_oncuechange_BANG_(this$,val){
return (this$["oncuechange"] = val);
});
/**
 * Property.
 * 
 *   The ondblclick property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes dblclick events on the given
 * 
 *   `target.ondblclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick`
 */
web.Window.ondblclick = (function web$Window$ondblclick(this$){
return this$.ondblclick();
});
/**
 * Property.
 * 
 *   The ondblclick property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes dblclick events on the given
 * 
 *   `target.ondblclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick`
 */
web.Window.set_ondblclick_BANG_ = (function web$Window$set_ondblclick_BANG_(this$,val){
return (this$["ondblclick"] = val);
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive devicelight events. These
 *   occur when the device's light level sensor detects a change in
 *   intensity of the ambient light level.
 * 
 *   `window.ondevicelight = funcRef
 * 
 *   Where funcRef is a function to be called when the devicelight event occurs. These events are of type `web.DeviceLightEvent`.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondevicelight`
 */
web.Window.ondevicelight = (function web$Window$ondevicelight(this$){
return this$.ondevicelight();
});
/**
 * Property.
 * 
 *   Specifies an event listener to receive devicelight events. These
 *   occur when the device's light level sensor detects a change in
 *   intensity of the ambient light level.
 * 
 *   `window.ondevicelight = funcRef
 * 
 *   Where funcRef is a function to be called when the devicelight event occurs. These events are of type `web.DeviceLightEvent`.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondevicelight`
 */
web.Window.set_ondevicelight_BANG_ = (function web$Window$set_ondevicelight_BANG_(this$,val){
return (this$["ondevicelight"] = val);
});
/**
 * Property.
 * 
 *   An event handler for the devicemotion events sent to the window.
 * 
 *   `window.ondevicemotion = funcRef;
 * 
 *   Where funcRef is a reference to a function. This function receives a `web.DeviceMotionEvent` object describing the motion that occurred.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondevicemotion`
 */
web.Window.ondevicemotion = (function web$Window$ondevicemotion(this$){
return this$.ondevicemotion();
});
/**
 * Property.
 * 
 *   An event handler for the devicemotion events sent to the window.
 * 
 *   `window.ondevicemotion = funcRef;
 * 
 *   Where funcRef is a reference to a function. This function receives a `web.DeviceMotionEvent` object describing the motion that occurred.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondevicemotion`
 */
web.Window.set_ondevicemotion_BANG_ = (function web$Window$set_ondevicemotion_BANG_(this$,val){
return (this$["ondevicemotion"] = val);
});
/**
 * Property.
 * 
 *   An event handler for the deviceorientation event, which contains
 *   about a relative device orientation change.
 * 
 *   `window.ondeviceorientation = function(event) { ... };
 *   window.addEventListener('deviceorientation', function(event) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondeviceorientation`
 */
web.Window.ondeviceorientation = (function web$Window$ondeviceorientation(this$){
return this$.ondeviceorientation();
});
/**
 * Property.
 * 
 *   An event handler for the deviceorientation event, which contains
 *   about a relative device orientation change.
 * 
 *   `window.ondeviceorientation = function(event) { ... };
 *   window.addEventListener('deviceorientation', function(event) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondeviceorientation`
 */
web.Window.set_ondeviceorientation_BANG_ = (function web$Window$set_ondeviceorientation_BANG_(this$,val){
return (this$["ondeviceorientation"] = val);
});
/**
 * Property.
 * 
 *   An event handler for the deviceorientationabsolute event containing
 *   about an absolute device orientation change.
 * 
 *   `window.ondeviceorientationabsolute = function(event) { ... };
 *   window.addEventListener('deviceorientationabsolute', function(event) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondeviceorientationabsolute`
 */
web.Window.ondeviceorientationabsolute = (function web$Window$ondeviceorientationabsolute(this$){
return this$.ondeviceorientationabsolute();
});
/**
 * Property.
 * 
 *   An event handler for the deviceorientationabsolute event containing
 *   about an absolute device orientation change.
 * 
 *   `window.ondeviceorientationabsolute = function(event) { ... };
 *   window.addEventListener('deviceorientationabsolute', function(event) { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondeviceorientationabsolute`
 */
web.Window.set_ondeviceorientationabsolute_BANG_ = (function web$Window$set_ondeviceorientationabsolute_BANG_(this$,val){
return (this$["ondeviceorientationabsolute"] = val);
});
/**
 * Property.
 * 
 *   The ondeviceproximity property of the `web.Window` interface
 *   an `web.EventHandler` to receive deviceproximity events. These
 *   occur when the device sensor detects that an object becomes closer
 *   or farther from the device.
 * 
 *   `window.onuserproximity = funcRef
 * 
 *   Where funcRef is a function to be called when the deviceproximity event occurs. These events are of type `web.DeviceProximityEvent`.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondeviceproximity`
 */
web.Window.ondeviceproximity = (function web$Window$ondeviceproximity(this$){
return this$.ondeviceproximity();
});
/**
 * Property.
 * 
 *   The ondeviceproximity property of the `web.Window` interface
 *   an `web.EventHandler` to receive deviceproximity events. These
 *   occur when the device sensor detects that an object becomes closer
 *   or farther from the device.
 * 
 *   `window.onuserproximity = funcRef
 * 
 *   Where funcRef is a function to be called when the deviceproximity event occurs. These events are of type `web.DeviceProximityEvent`.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondeviceproximity`
 */
web.Window.set_ondeviceproximity_BANG_ = (function web$Window$set_ondeviceproximity_BANG_(this$,val){
return (this$["ondeviceproximity"] = val);
});
/**
 * Property.
 * 
 *   An event handler for drag and drop events sent to the window.
 * 
 *   `window.ondragdrop = funcRef;
 *   window.addEventListener(\"dragdrop\", funcRef, useCapturing);
 * 
 * 
 *   funcRef
 *   The event handler function to be registered.
 * 
 * 
 *   The window.ondragdrop property and the ondragdrop attribute are not implemented in Gecko (bug 112288), you have to use addEventListener. See addEventListener for details.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondragdrop`
 */
web.Window.ondragdrop = (function web$Window$ondragdrop(this$){
return this$.ondragdrop();
});
/**
 * Property.
 * 
 *   An event handler for drag and drop events sent to the window.
 * 
 *   `window.ondragdrop = funcRef;
 *   window.addEventListener(\"dragdrop\", funcRef, useCapturing);
 * 
 * 
 *   funcRef
 *   The event handler function to be registered.
 * 
 * 
 *   The window.ondragdrop property and the ondragdrop attribute are not implemented in Gecko (bug 112288), you have to use addEventListener. See addEventListener for details.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ondragdrop`
 */
web.Window.set_ondragdrop_BANG_ = (function web$Window$set_ondragdrop_BANG_(this$,val){
return (this$["ondragdrop"] = val);
});
/**
 * Property.
 * 
 *   The ondurationchange property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing durationchange events.
 * 
 *   `element.ondurationchange = handlerFunction;
 *   var handlerFunction = element.ondurationchange;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondurationchange`
 */
web.Window.ondurationchange = (function web$Window$ondurationchange(this$){
return this$.ondurationchange();
});
/**
 * Property.
 * 
 *   The ondurationchange property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing durationchange events.
 * 
 *   `element.ondurationchange = handlerFunction;
 *   var handlerFunction = element.ondurationchange;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondurationchange`
 */
web.Window.set_ondurationchange_BANG_ = (function web$Window$set_ondurationchange_BANG_(this$,val){
return (this$["ondurationchange"] = val);
});
/**
 * Property.
 * 
 *   The onended property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing ended events.
 * 
 *   `element.onended = handlerFunction;
 *   var handlerFunction = element.onended;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onended`
 */
web.Window.onended = (function web$Window$onended(this$){
return this$.onended();
});
/**
 * Property.
 * 
 *   The onended property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing ended events.
 * 
 *   `element.onended = handlerFunction;
 *   var handlerFunction = element.onended;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onended`
 */
web.Window.set_onended_BANG_ = (function web$Window$set_onended_BANG_(this$,val){
return (this$["onended"] = val);
});
/**
 * Property.
 * 
 *   The onerror property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes error events.
 * 
 *   `For historical reasons, different arguments are passed to window.onerror and element.onerror handlers (as well as on error-type `web.window.addEventListener` handlers).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror`
 */
web.Window.onerror = (function web$Window$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The onerror property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes error events.
 * 
 *   `For historical reasons, different arguments are passed to window.onerror and element.onerror handlers (as well as on error-type `web.window.addEventListener` handlers).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror`
 */
web.Window.set_onerror_BANG_ = (function web$Window$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The onfocus property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes focus events on the given element.
 * 
 *   `target.onfocus = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus`
 */
web.Window.onfocus = (function web$Window$onfocus(this$){
return this$.onfocus();
});
/**
 * Property.
 * 
 *   The onfocus property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes focus events on the given element.
 * 
 *   `target.onfocus = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus`
 */
web.Window.set_onfocus_BANG_ = (function web$Window$set_onfocus_BANG_(this$,val){
return (this$["onfocus"] = val);
});
/**
 * Property.
 * 
 *   The ongamepadconnected property of the `web.Window` interface
 *   an event handler that will run when a gamepad is connected (when
 *   gamepadconnected event fires).
 * 
 *   `window.ongamepadconnected = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ongamepadconnected`
 */
web.Window.ongamepadconnected = (function web$Window$ongamepadconnected(this$){
return this$.ongamepadconnected();
});
/**
 * Property.
 * 
 *   The ongamepadconnected property of the `web.Window` interface
 *   an event handler that will run when a gamepad is connected (when
 *   gamepadconnected event fires).
 * 
 *   `window.ongamepadconnected = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ongamepadconnected`
 */
web.Window.set_ongamepadconnected_BANG_ = (function web$Window$set_ongamepadconnected_BANG_(this$,val){
return (this$["ongamepadconnected"] = val);
});
/**
 * Property.
 * 
 *   The ongamepaddisconnected property of the `web.Window` interface
 *   an event handler that will run when a gamepad is disconnected
 *   the gamepaddisconnected event fires).
 * 
 *   `window.ongamepaddisconnected = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ongamepaddisconnected`
 */
web.Window.ongamepaddisconnected = (function web$Window$ongamepaddisconnected(this$){
return this$.ongamepaddisconnected();
});
/**
 * Property.
 * 
 *   The ongamepaddisconnected property of the `web.Window` interface
 *   an event handler that will run when a gamepad is disconnected
 *   the gamepaddisconnected event fires).
 * 
 *   `window.ongamepaddisconnected = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/ongamepaddisconnected`
 */
web.Window.set_ongamepaddisconnected_BANG_ = (function web$Window$set_ongamepaddisconnected_BANG_(this$,val){
return (this$["ongamepaddisconnected"] = val);
});
/**
 * Property.
 * 
 *   The ongotpointercapture property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes gotpointercapture events.
 * 
 *   `target.ongotpointercapture = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ongotpointercapture`
 */
web.Window.ongotpointercapture = (function web$Window$ongotpointercapture(this$){
return this$.ongotpointercapture();
});
/**
 * Property.
 * 
 *   The ongotpointercapture property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes gotpointercapture events.
 * 
 *   `target.ongotpointercapture = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ongotpointercapture`
 */
web.Window.set_ongotpointercapture_BANG_ = (function web$Window$set_ongotpointercapture_BANG_(this$,val){
return (this$["ongotpointercapture"] = val);
});
/**
 * Property.
 * 
 *   The WindowEventHandlers.onhashchange property of the `web.WindowEventHandlers`
 *   is the `web.EventHandler` for processing hashchange events.
 * 
 *   `Using an event handler:
 * 
 * 
 * 
 *   window.onhashchange = funcRef;
 * 
 *   Using an HTML event handler:
 * 
 * 
 * 
 *   <body onhashchange=\"funcRef();\">
 * 
 *   Using an event listener:
 * 
 *   To add an event listener, use `web.addEventListener()`:
 * 
 * 
 * 
 *   window.addEventListener(\"hashchange\", funcRef, false);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange`
 */
web.Window.onhashchange = (function web$Window$onhashchange(this$){
return this$.onhashchange();
});
/**
 * Property.
 * 
 *   The WindowEventHandlers.onhashchange property of the `web.WindowEventHandlers`
 *   is the `web.EventHandler` for processing hashchange events.
 * 
 *   `Using an event handler:
 * 
 * 
 * 
 *   window.onhashchange = funcRef;
 * 
 *   Using an HTML event handler:
 * 
 * 
 * 
 *   <body onhashchange=\"funcRef();\">
 * 
 *   Using an event listener:
 * 
 *   To add an event listener, use `web.addEventListener()`:
 * 
 * 
 * 
 *   window.addEventListener(\"hashchange\", funcRef, false);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onhashchange`
 */
web.Window.set_onhashchange_BANG_ = (function web$Window$set_onhashchange_BANG_(this$,val){
return (this$["onhashchange"] = val);
});
/**
 * Property.
 * 
 *   The oninput property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes input events on the `web.<input>`,
 *   and `web.<textarea>` elements. It also handles these events on
 *   where `web.contenteditable` or `web.designMode` are turned on.
 * 
 *   `target.oninput = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput`
 */
web.Window.oninput = (function web$Window$oninput(this$){
return this$.oninput();
});
/**
 * Property.
 * 
 *   The oninput property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes input events on the `web.<input>`,
 *   and `web.<textarea>` elements. It also handles these events on
 *   where `web.contenteditable` or `web.designMode` are turned on.
 * 
 *   `target.oninput = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput`
 */
web.Window.set_oninput_BANG_ = (function web$Window$set_oninput_BANG_(this$,val){
return (this$["oninput"] = val);
});
/**
 * Property.
 * 
 *   The oninvalid property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes invalid events.
 * 
 *   `target.oninvalid = functionRef;
 *   var functionRef = target.oninvalid;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninvalid`
 */
web.Window.oninvalid = (function web$Window$oninvalid(this$){
return this$.oninvalid();
});
/**
 * Property.
 * 
 *   The oninvalid property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes invalid events.
 * 
 *   `target.oninvalid = functionRef;
 *   var functionRef = target.oninvalid;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninvalid`
 */
web.Window.set_oninvalid_BANG_ = (function web$Window$set_oninvalid_BANG_(this$,val){
return (this$["oninvalid"] = val);
});
/**
 * Property.
 * 
 *   The onkeydown property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes keydown events.
 * 
 *   `target.onkeydown = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown`
 */
web.Window.onkeydown = (function web$Window$onkeydown(this$){
return this$.onkeydown();
});
/**
 * Property.
 * 
 *   The onkeydown property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes keydown events.
 * 
 *   `target.onkeydown = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown`
 */
web.Window.set_onkeydown_BANG_ = (function web$Window$set_onkeydown_BANG_(this$,val){
return (this$["onkeydown"] = val);
});
/**
 * Property.
 * 
 *   The onkeypress property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes keypress events.
 * 
 *   `target.onkeypress = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress`
 */
web.Window.onkeypress = (function web$Window$onkeypress(this$){
return this$.onkeypress();
});
/**
 * Property.
 * 
 *   The onkeypress property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes keypress events.
 * 
 *   `target.onkeypress = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress`
 */
web.Window.set_onkeypress_BANG_ = (function web$Window$set_onkeypress_BANG_(this$,val){
return (this$["onkeypress"] = val);
});
/**
 * Property.
 * 
 *   The onkeyup property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes keyup events.
 * 
 *   `target.onkeyup = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup`
 */
web.Window.onkeyup = (function web$Window$onkeyup(this$){
return this$.onkeyup();
});
/**
 * Property.
 * 
 *   The onkeyup property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes keyup events.
 * 
 *   `target.onkeyup = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup`
 */
web.Window.set_onkeyup_BANG_ = (function web$Window$set_onkeyup_BANG_(this$,val){
return (this$["onkeyup"] = val);
});
/**
 * Property.
 * 
 *   The onlanguagechange property of the `web.WindowEventHandlers`
 *   is the `web.EventHandler` for processing languagechange events.
 * 
 *   `object.onlanguagechange = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onlanguagechange`
 */
web.Window.onlanguagechange = (function web$Window$onlanguagechange(this$){
return this$.onlanguagechange();
});
/**
 * Property.
 * 
 *   The onlanguagechange property of the `web.WindowEventHandlers`
 *   is the `web.EventHandler` for processing languagechange events.
 * 
 *   `object.onlanguagechange = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onlanguagechange`
 */
web.Window.set_onlanguagechange_BANG_ = (function web$Window$set_onlanguagechange_BANG_(this$,val){
return (this$["onlanguagechange"] = val);
});
/**
 * Property.
 * 
 *   The onload property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes load events on a `web.Window`,
 *   `web.<img>` element, etc.
 * 
 *   `target.onload = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload`
 */
web.Window.onload = (function web$Window$onload(this$){
return this$.onload();
});
/**
 * Property.
 * 
 *   The onload property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes load events on a `web.Window`,
 *   `web.<img>` element, etc.
 * 
 *   `target.onload = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload`
 */
web.Window.set_onload_BANG_ = (function web$Window$set_onload_BANG_(this$,val){
return (this$["onload"] = val);
});
/**
 * Property.
 * 
 *   The onloadeddata property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing loadeddata events.
 * 
 *   `element.onloadeddata = handlerFunction;
 *   var handlerFunction = element.onloadeddata;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadeddata`
 */
web.Window.onloadeddata = (function web$Window$onloadeddata(this$){
return this$.onloadeddata();
});
/**
 * Property.
 * 
 *   The onloadeddata property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing loadeddata events.
 * 
 *   `element.onloadeddata = handlerFunction;
 *   var handlerFunction = element.onloadeddata;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadeddata`
 */
web.Window.set_onloadeddata_BANG_ = (function web$Window$set_onloadeddata_BANG_(this$,val){
return (this$["onloadeddata"] = val);
});
/**
 * Property.
 * 
 *   The onloadedmetadata property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing loadedmetadata events.
 * 
 *   `element.onloadedmetadata = handlerFunction;
 *   var handlerFunction = element.onloadedmetadata;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadedmetadata`
 */
web.Window.onloadedmetadata = (function web$Window$onloadedmetadata(this$){
return this$.onloadedmetadata();
});
/**
 * Property.
 * 
 *   The onloadedmetadata property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing loadedmetadata events.
 * 
 *   `element.onloadedmetadata = handlerFunction;
 *   var handlerFunction = element.onloadedmetadata;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadedmetadata`
 */
web.Window.set_onloadedmetadata_BANG_ = (function web$Window$set_onloadedmetadata_BANG_(this$,val){
return (this$["onloadedmetadata"] = val);
});
/**
 * Property.
 * 
 *   The onloadend property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` representing the code to be called when
 *   loadend event is raised (when progress has stopped on the loading
 *   a resource.)
 * 
 *   `img.onloadend = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadend`
 */
web.Window.onloadend = (function web$Window$onloadend(this$){
return this$.onloadend();
});
/**
 * Property.
 * 
 *   The onloadend property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` representing the code to be called when
 *   loadend event is raised (when progress has stopped on the loading
 *   a resource.)
 * 
 *   `img.onloadend = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadend`
 */
web.Window.set_onloadend_BANG_ = (function web$Window$set_onloadend_BANG_(this$,val){
return (this$["onloadend"] = val);
});
/**
 * Property.
 * 
 *   The onloadstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` representing the code to be called when
 *   loadstart event is raised (when progress has begun on the loading
 *   a resource.)
 * 
 *   `img.onloadstart = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadstart`
 */
web.Window.onloadstart = (function web$Window$onloadstart(this$){
return this$.onloadstart();
});
/**
 * Property.
 * 
 *   The onloadstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` representing the code to be called when
 *   loadstart event is raised (when progress has begun on the loading
 *   a resource.)
 * 
 *   `img.onloadstart = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadstart`
 */
web.Window.set_onloadstart_BANG_ = (function web$Window$set_onloadstart_BANG_(this$,val){
return (this$["onloadstart"] = val);
});
/**
 * Property.
 * 
 *   The onlostpointercapture property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes lostpointercapture events.
 * 
 *   `target.onlostpointercapture = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onlostpointercapture`
 */
web.Window.onlostpointercapture = (function web$Window$onlostpointercapture(this$){
return this$.onlostpointercapture();
});
/**
 * Property.
 * 
 *   The onlostpointercapture property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes lostpointercapture events.
 * 
 *   `target.onlostpointercapture = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onlostpointercapture`
 */
web.Window.set_onlostpointercapture_BANG_ = (function web$Window$set_onlostpointercapture_BANG_(this$,val){
return (this$["onlostpointercapture"] = val);
});
/**
 * Property.
 * 
 *   The onmessage property of the `web.WindowEventHandlers` mixin
 *   the `web.EventHandler` called whenever an object receives a message
 * 
 *   `window.addEventListener('message', function(event) { ... })
 *   window.onmessage = function(event) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onmessage`
 */
web.Window.onmessage = (function web$Window$onmessage(this$){
return this$.onmessage();
});
/**
 * Property.
 * 
 *   The onmessage property of the `web.WindowEventHandlers` mixin
 *   the `web.EventHandler` called whenever an object receives a message
 * 
 *   `window.addEventListener('message', function(event) { ... })
 *   window.onmessage = function(event) { ... }`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onmessage`
 */
web.Window.set_onmessage_BANG_ = (function web$Window$set_onmessage_BANG_(this$,val){
return (this$["onmessage"] = val);
});
/**
 * Property.
 * 
 *   The onmessageerror event handler of the `web.WindowEventHandlers`
 *   is an `web.EventListener`, called whenever an `web.MessageEvent`
 *   type messageerror is fired on a window—that is, when it receives
 *   message that cannot be deserialized.
 * 
 *   `window.onmessageerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onmessageerror`
 */
web.Window.onmessageerror = (function web$Window$onmessageerror(this$){
return this$.onmessageerror();
});
/**
 * Property.
 * 
 *   The onmessageerror event handler of the `web.WindowEventHandlers`
 *   is an `web.EventListener`, called whenever an `web.MessageEvent`
 *   type messageerror is fired on a window—that is, when it receives
 *   message that cannot be deserialized.
 * 
 *   `window.onmessageerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onmessageerror`
 */
web.Window.set_onmessageerror_BANG_ = (function web$Window$set_onmessageerror_BANG_(this$,val){
return (this$["onmessageerror"] = val);
});
/**
 * Property.
 * 
 *   The onmousedown property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mousedown events.
 * 
 *   `target.onmousedown = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown`
 */
web.Window.onmousedown = (function web$Window$onmousedown(this$){
return this$.onmousedown();
});
/**
 * Property.
 * 
 *   The onmousedown property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mousedown events.
 * 
 *   `target.onmousedown = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown`
 */
web.Window.set_onmousedown_BANG_ = (function web$Window$set_onmousedown_BANG_(this$,val){
return (this$["onmousedown"] = val);
});
/**
 * Property.
 * 
 *   The onmouseenter property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing mouseenter events.
 * 
 *   `element.onmouseenter = handlerFunction;
 *   var handlerFunction = element.onmouseenter;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseenter`
 */
web.Window.onmouseenter = (function web$Window$onmouseenter(this$){
return this$.onmouseenter();
});
/**
 * Property.
 * 
 *   The onmouseenter property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing mouseenter events.
 * 
 *   `element.onmouseenter = handlerFunction;
 *   var handlerFunction = element.onmouseenter;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseenter`
 */
web.Window.set_onmouseenter_BANG_ = (function web$Window$set_onmouseenter_BANG_(this$,val){
return (this$["onmouseenter"] = val);
});
/**
 * Property.
 * 
 *   The onmouseleave property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing mouseleave events.
 * 
 *   `element.onmouseleave = handlerFunction;
 *   var handlerFunction = element.onmouseleave;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseleave`
 */
web.Window.onmouseleave = (function web$Window$onmouseleave(this$){
return this$.onmouseleave();
});
/**
 * Property.
 * 
 *   The onmouseleave property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing mouseleave events.
 * 
 *   `element.onmouseleave = handlerFunction;
 *   var handlerFunction = element.onmouseleave;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseleave`
 */
web.Window.set_onmouseleave_BANG_ = (function web$Window$set_onmouseleave_BANG_(this$,val){
return (this$["onmouseleave"] = val);
});
/**
 * Property.
 * 
 *   The onmousemove property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mousemove events.
 * 
 *   `target.onmousemove = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousemove`
 */
web.Window.onmousemove = (function web$Window$onmousemove(this$){
return this$.onmousemove();
});
/**
 * Property.
 * 
 *   The onmousemove property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mousemove events.
 * 
 *   `target.onmousemove = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousemove`
 */
web.Window.set_onmousemove_BANG_ = (function web$Window$set_onmousemove_BANG_(this$,val){
return (this$["onmousemove"] = val);
});
/**
 * Property.
 * 
 *   The onmouseout property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseout events.
 * 
 *   `element.onmouseout = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout`
 */
web.Window.onmouseout = (function web$Window$onmouseout(this$){
return this$.onmouseout();
});
/**
 * Property.
 * 
 *   The onmouseout property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseout events.
 * 
 *   `element.onmouseout = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout`
 */
web.Window.set_onmouseout_BANG_ = (function web$Window$set_onmouseout_BANG_(this$,val){
return (this$["onmouseout"] = val);
});
/**
 * Property.
 * 
 *   The onmouseover property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseover events.
 * 
 *   `element.onmouseover = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover`
 */
web.Window.onmouseover = (function web$Window$onmouseover(this$){
return this$.onmouseover();
});
/**
 * Property.
 * 
 *   The onmouseover property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseover events.
 * 
 *   `element.onmouseover = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover`
 */
web.Window.set_onmouseover_BANG_ = (function web$Window$set_onmouseover_BANG_(this$,val){
return (this$["onmouseover"] = val);
});
/**
 * Property.
 * 
 *   The onmouseup property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseup events.
 * 
 *   `target.onmouseup = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseup`
 */
web.Window.onmouseup = (function web$Window$onmouseup(this$){
return this$.onmouseup();
});
/**
 * Property.
 * 
 *   The onmouseup property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseup events.
 * 
 *   `target.onmouseup = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseup`
 */
web.Window.set_onmouseup_BANG_ = (function web$Window$set_onmouseup_BANG_(this$,val){
return (this$["onmouseup"] = val);
});
/**
 * Property.
 * 
 *   An event handler for the MozBeforePaint event. This is used in
 *   with the `web.window.mozRequestAnimationFrame()` method to perform
 *   synchronized animations from JavaScript code.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onmozbeforepaint`
 */
web.Window.onmozbeforepaint = (function web$Window$onmozbeforepaint(this$){
return this$.onmozbeforepaint();
});
/**
 * Property.
 * 
 *   An event handler for the MozBeforePaint event. This is used in
 *   with the `web.window.mozRequestAnimationFrame()` method to perform
 *   synchronized animations from JavaScript code.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onmozbeforepaint`
 */
web.Window.set_onmozbeforepaint_BANG_ = (function web$Window$set_onmozbeforepaint_BANG_(this$,val){
return (this$["onmozbeforepaint"] = val);
});
/**
 * Property.
 * 
 *   Window.onpaint is an event handler for the paint event on the
 * 
 *   `window.onpaint = funcRef;
 * 
 * 
 *   funcRef is a handler function.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onpaint`
 */
web.Window.onpaint = (function web$Window$onpaint(this$){
return this$.onpaint();
});
/**
 * Property.
 * 
 *   Window.onpaint is an event handler for the paint event on the
 * 
 *   `window.onpaint = funcRef;
 * 
 * 
 *   funcRef is a handler function.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onpaint`
 */
web.Window.set_onpaint_BANG_ = (function web$Window$set_onpaint_BANG_(this$,val){
return (this$["onpaint"] = val);
});
/**
 * Property.
 * 
 *   The onpause property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing pause events.
 * 
 *   `element.onpause = handlerFunction;
 *   var handlerFunction = element.onpause;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpause`
 */
web.Window.onpause = (function web$Window$onpause(this$){
return this$.onpause();
});
/**
 * Property.
 * 
 *   The onpause property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing pause events.
 * 
 *   `element.onpause = handlerFunction;
 *   var handlerFunction = element.onpause;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpause`
 */
web.Window.set_onpause_BANG_ = (function web$Window$set_onpause_BANG_(this$,val){
return (this$["onpause"] = val);
});
/**
 * Property.
 * 
 *   The onplay property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing play events.
 * 
 *   `element.onplay = handlerFunction;
 *   var handlerFunction = element.onplay;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onplay`
 */
web.Window.onplay = (function web$Window$onplay(this$){
return this$.onplay();
});
/**
 * Property.
 * 
 *   The onplay property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing play events.
 * 
 *   `element.onplay = handlerFunction;
 *   var handlerFunction = element.onplay;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onplay`
 */
web.Window.set_onplay_BANG_ = (function web$Window$set_onplay_BANG_(this$,val){
return (this$["onplay"] = val);
});
/**
 * Property.
 * 
 *   The onpointercancel property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes pointercancel events.
 * 
 *   `targetElement.onpointercancel = cancelHandler;
 * 
 *   var cancelHandler = targetElement.onpointercancel;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointercancel`
 */
web.Window.onpointercancel = (function web$Window$onpointercancel(this$){
return this$.onpointercancel();
});
/**
 * Property.
 * 
 *   The onpointercancel property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes pointercancel events.
 * 
 *   `targetElement.onpointercancel = cancelHandler;
 * 
 *   var cancelHandler = targetElement.onpointercancel;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointercancel`
 */
web.Window.set_onpointercancel_BANG_ = (function web$Window$set_onpointercancel_BANG_(this$,val){
return (this$["onpointercancel"] = val);
});
/**
 * Property.
 * 
 *   The `web.GlobalEventHandlers` event handler onpointerdown is
 *   to specify the event handler for the pointerdown event, which
 *   fired when the pointing device is initially pressed. This event
 *   be sent to `web.Window`, `web.Document`, and `web.Element` objects.
 * 
 *   `target.onpointerdown = downHandler;
 * 
 *   var downHandler = target.onpointerdown;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown`
 */
web.Window.onpointerdown = (function web$Window$onpointerdown(this$){
return this$.onpointerdown();
});
/**
 * Property.
 * 
 *   The `web.GlobalEventHandlers` event handler onpointerdown is
 *   to specify the event handler for the pointerdown event, which
 *   fired when the pointing device is initially pressed. This event
 *   be sent to `web.Window`, `web.Document`, and `web.Element` objects.
 * 
 *   `target.onpointerdown = downHandler;
 * 
 *   var downHandler = target.onpointerdown;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown`
 */
web.Window.set_onpointerdown_BANG_ = (function web$Window$set_onpointerdown_BANG_(this$,val){
return (this$["onpointerdown"] = val);
});
/**
 * Property.
 * 
 *   The onpointerenter property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes pointerenter events.
 * 
 *   `targetElement.onpointerenter = enterHandler;
 * 
 *   var enterHandler = targetElement.onpointerenter;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerenter`
 */
web.Window.onpointerenter = (function web$Window$onpointerenter(this$){
return this$.onpointerenter();
});
/**
 * Property.
 * 
 *   The onpointerenter property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes pointerenter events.
 * 
 *   `targetElement.onpointerenter = enterHandler;
 * 
 *   var enterHandler = targetElement.onpointerenter;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerenter`
 */
web.Window.set_onpointerenter_BANG_ = (function web$Window$set_onpointerenter_BANG_(this$,val){
return (this$["onpointerenter"] = val);
});
/**
 * Property.
 * 
 *   The global event handler for the pointerleave event, which is
 *   to a `web.Node` when the pointer (mouse cursor, fingertip, etc.)
 *   its hit test area (for example, if the cursor exits an `web.Element`
 *   `web.Window`'s content area). This event is part of the Pointer
 *   API.
 * 
 *   `EventTarget.onpointerleave = leaveHandler;
 * 
 *   var leaveHandler = EventTarget.onpointerleave;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerleave`
 */
web.Window.onpointerleave = (function web$Window$onpointerleave(this$){
return this$.onpointerleave();
});
/**
 * Property.
 * 
 *   The global event handler for the pointerleave event, which is
 *   to a `web.Node` when the pointer (mouse cursor, fingertip, etc.)
 *   its hit test area (for example, if the cursor exits an `web.Element`
 *   `web.Window`'s content area). This event is part of the Pointer
 *   API.
 * 
 *   `EventTarget.onpointerleave = leaveHandler;
 * 
 *   var leaveHandler = EventTarget.onpointerleave;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerleave`
 */
web.Window.set_onpointerleave_BANG_ = (function web$Window$set_onpointerleave_BANG_(this$,val){
return (this$["onpointerleave"] = val);
});
/**
 * Property.
 * 
 *   The onpointermove property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointermove events.
 * 
 *   `targetElement.onpointermove = moveHandler;
 * 
 *   var moveHandler = targetElement.onpointermove;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointermove`
 */
web.Window.onpointermove = (function web$Window$onpointermove(this$){
return this$.onpointermove();
});
/**
 * Property.
 * 
 *   The onpointermove property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointermove events.
 * 
 *   `targetElement.onpointermove = moveHandler;
 * 
 *   var moveHandler = targetElement.onpointermove;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointermove`
 */
web.Window.set_onpointermove_BANG_ = (function web$Window$set_onpointermove_BANG_(this$,val){
return (this$["onpointermove"] = val);
});
/**
 * Property.
 * 
 *   The onpointerout property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerout events.
 * 
 *   `targetElement.onpointerout = outHandler;
 * 
 *   var outHandler = targetElement.onpointerout;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerout`
 */
web.Window.onpointerout = (function web$Window$onpointerout(this$){
return this$.onpointerout();
});
/**
 * Property.
 * 
 *   The onpointerout property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerout events.
 * 
 *   `targetElement.onpointerout = outHandler;
 * 
 *   var outHandler = targetElement.onpointerout;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerout`
 */
web.Window.set_onpointerout_BANG_ = (function web$Window$set_onpointerout_BANG_(this$,val){
return (this$["onpointerout"] = val);
});
/**
 * Property.
 * 
 *   The onpointerover property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerover events.
 * 
 *   `targetElement.onpointerover = overHandler;
 * 
 *   var overHandler = targetElement.onpointerover;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerover`
 */
web.Window.onpointerover = (function web$Window$onpointerover(this$){
return this$.onpointerover();
});
/**
 * Property.
 * 
 *   The onpointerover property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerover events.
 * 
 *   `targetElement.onpointerover = overHandler;
 * 
 *   var overHandler = targetElement.onpointerover;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerover`
 */
web.Window.set_onpointerover_BANG_ = (function web$Window$set_onpointerover_BANG_(this$,val){
return (this$["onpointerover"] = val);
});
/**
 * Property.
 * 
 *   The onpointerup property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerup events.
 * 
 *   `targetElement.onpointerup = upHandler;
 * 
 *   var upHandler = targetElement.onpointerup;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerup`
 */
web.Window.onpointerup = (function web$Window$onpointerup(this$){
return this$.onpointerup();
});
/**
 * Property.
 * 
 *   The onpointerup property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerup events.
 * 
 *   `targetElement.onpointerup = upHandler;
 * 
 *   var upHandler = targetElement.onpointerup;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerup`
 */
web.Window.set_onpointerup_BANG_ = (function web$Window$set_onpointerup_BANG_(this$,val){
return (this$["onpointerup"] = val);
});
/**
 * Property.
 * 
 *   The onpopstate property of the `web.WindowEventHandlers` mixin
 *   the `web.EventHandler` for processing popstate events on the
 * 
 *   `window.onpopstate = funcRef;
 * 
 * 
 *   funcRef is a handler function.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate`
 */
web.Window.onpopstate = (function web$Window$onpopstate(this$){
return this$.onpopstate();
});
/**
 * Property.
 * 
 *   The onpopstate property of the `web.WindowEventHandlers` mixin
 *   the `web.EventHandler` for processing popstate events on the
 * 
 *   `window.onpopstate = funcRef;
 * 
 * 
 *   funcRef is a handler function.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate`
 */
web.Window.set_onpopstate_BANG_ = (function web$Window$set_onpopstate_BANG_(this$,val){
return (this$["onpopstate"] = val);
});
/**
 * Property.
 * 
 *   The onrejectionhandled property of the `web.WindowEventHandlers`
 *   is the `web.EventHandler` for processing rejectionhandled events.
 *   events are raised when `web.Promise`s are rejected.
 * 
 *   `window.addEventListener(\"rejectionhandled\", function(event) { ... });
 *   window.onrejectionhandled = function(event) { ...};`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onrejectionhandled`
 */
web.Window.onrejectionhandled = (function web$Window$onrejectionhandled(this$){
return this$.onrejectionhandled();
});
/**
 * Property.
 * 
 *   The onrejectionhandled property of the `web.WindowEventHandlers`
 *   is the `web.EventHandler` for processing rejectionhandled events.
 *   events are raised when `web.Promise`s are rejected.
 * 
 *   `window.addEventListener(\"rejectionhandled\", function(event) { ... });
 *   window.onrejectionhandled = function(event) { ...};`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onrejectionhandled`
 */
web.Window.set_onrejectionhandled_BANG_ = (function web$Window$set_onrejectionhandled_BANG_(this$,val){
return (this$["onrejectionhandled"] = val);
});
/**
 * Property.
 * 
 *   The onreset property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes reset events.
 * 
 *   `target.onreset = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onreset`
 */
web.Window.onreset = (function web$Window$onreset(this$){
return this$.onreset();
});
/**
 * Property.
 * 
 *   The onreset property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes reset events.
 * 
 *   `target.onreset = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onreset`
 */
web.Window.set_onreset_BANG_ = (function web$Window$set_onreset_BANG_(this$,val){
return (this$["onreset"] = val);
});
/**
 * Property.
 * 
 *   The onresize property of the `web.GlobalEventHandlers` interface
 *   an `web.EventHandler` that processes resize events.
 * 
 *   `window.onresize = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize`
 */
web.Window.onresize = (function web$Window$onresize(this$){
return this$.onresize();
});
/**
 * Property.
 * 
 *   The onresize property of the `web.GlobalEventHandlers` interface
 *   an `web.EventHandler` that processes resize events.
 * 
 *   `window.onresize = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize`
 */
web.Window.set_onresize_BANG_ = (function web$Window$set_onresize_BANG_(this$,val){
return (this$["onresize"] = val);
});
/**
 * Property.
 * 
 *   The onscroll property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes scroll events.
 * 
 *   `target.onscroll = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll`
 */
web.Window.onscroll = (function web$Window$onscroll(this$){
return this$.onscroll();
});
/**
 * Property.
 * 
 *   The onscroll property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes scroll events.
 * 
 *   `target.onscroll = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll`
 */
web.Window.set_onscroll_BANG_ = (function web$Window$set_onscroll_BANG_(this$,val){
return (this$["onscroll"] = val);
});
/**
 * Property.
 * 
 *   The onselect property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes `web.select`.
 * 
 *   `target.onselect = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselect`
 */
web.Window.onselect = (function web$Window$onselect(this$){
return this$.onselect();
});
/**
 * Property.
 * 
 *   The onselect property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes `web.select`.
 * 
 *   `target.onselect = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselect`
 */
web.Window.set_onselect_BANG_ = (function web$Window$set_onselect_BANG_(this$,val){
return (this$["onselect"] = val);
});
/**
 * Property.
 * 
 *   The onselectionchange property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes selectionchange events.
 * 
 *   `object.onselectionchange = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectionchange`
 */
web.Window.onselectionchange = (function web$Window$onselectionchange(this$){
return this$.onselectionchange();
});
/**
 * Property.
 * 
 *   The onselectionchange property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes selectionchange events.
 * 
 *   `object.onselectionchange = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectionchange`
 */
web.Window.set_onselectionchange_BANG_ = (function web$Window$set_onselectionchange_BANG_(this$,val){
return (this$["onselectionchange"] = val);
});
/**
 * Property.
 * 
 *   The onselectstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes selectstart events.
 * 
 *   `object.onselectstart = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectstart`
 */
web.Window.onselectstart = (function web$Window$onselectstart(this$){
return this$.onselectstart();
});
/**
 * Property.
 * 
 *   The onselectstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes selectstart events.
 * 
 *   `object.onselectstart = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectstart`
 */
web.Window.set_onselectstart_BANG_ = (function web$Window$set_onselectstart_BANG_(this$,val){
return (this$["onselectstart"] = val);
});
/**
 * Property.
 * 
 *   The onstorage property of the `web.WindowEventHandlers` mixin
 *   an `web.EventHandler` for processing storage events.
 * 
 *   `window.onstorage = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onstorage`
 */
web.Window.onstorage = (function web$Window$onstorage(this$){
return this$.onstorage();
});
/**
 * Property.
 * 
 *   The onstorage property of the `web.WindowEventHandlers` mixin
 *   an `web.EventHandler` for processing storage events.
 * 
 *   `window.onstorage = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onstorage`
 */
web.Window.set_onstorage_BANG_ = (function web$Window$set_onstorage_BANG_(this$,val){
return (this$["onstorage"] = val);
});
/**
 * Property.
 * 
 *   The onsubmit property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes submit events.
 * 
 *   `target.onsubmit = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit`
 */
web.Window.onsubmit = (function web$Window$onsubmit(this$){
return this$.onsubmit();
});
/**
 * Property.
 * 
 *   The onsubmit property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes submit events.
 * 
 *   `target.onsubmit = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit`
 */
web.Window.set_onsubmit_BANG_ = (function web$Window$set_onsubmit_BANG_(this$,val){
return (this$["onsubmit"] = val);
});
/**
 * Property.
 * 
 *   The ontouchcancel property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes touchcancel events.
 * 
 *   `var cancelHandler = someElement.ontouchcancel;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchcancel`
 */
web.Window.ontouchcancel = (function web$Window$ontouchcancel(this$){
return this$.ontouchcancel();
});
/**
 * Property.
 * 
 *   The ontouchcancel property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes touchcancel events.
 * 
 *   `var cancelHandler = someElement.ontouchcancel;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchcancel`
 */
web.Window.set_ontouchcancel_BANG_ = (function web$Window$set_ontouchcancel_BANG_(this$,val){
return (this$["ontouchcancel"] = val);
});
/**
 * Property.
 * 
 *   The ontouchstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes touchstart events.
 * 
 *   `var startHandler = someElement.ontouchstart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchstart`
 */
web.Window.ontouchstart = (function web$Window$ontouchstart(this$){
return this$.ontouchstart();
});
/**
 * Property.
 * 
 *   The ontouchstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes touchstart events.
 * 
 *   `var startHandler = someElement.ontouchstart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchstart`
 */
web.Window.set_ontouchstart_BANG_ = (function web$Window$set_ontouchstart_BANG_(this$,val){
return (this$["ontouchstart"] = val);
});
/**
 * Property.
 * 
 *   The ontransitioncancel property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes transitioncancel events.
 * 
 *   `var transitionCancelHandler = target.ontransitioncancel;
 * 
 *   target.ontransitioncancel = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitioncancel`
 */
web.Window.ontransitioncancel = (function web$Window$ontransitioncancel(this$){
return this$.ontransitioncancel();
});
/**
 * Property.
 * 
 *   The ontransitioncancel property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes transitioncancel events.
 * 
 *   `var transitionCancelHandler = target.ontransitioncancel;
 * 
 *   target.ontransitioncancel = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitioncancel`
 */
web.Window.set_ontransitioncancel_BANG_ = (function web$Window$set_ontransitioncancel_BANG_(this$,val){
return (this$["ontransitioncancel"] = val);
});
/**
 * Property.
 * 
 *   The ontransitionend property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes transitionend events.
 * 
 *   `var transitionEndHandler = target.ontransitionend;
 * 
 *   target.ontransitionend = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionend`
 */
web.Window.ontransitionend = (function web$Window$ontransitionend(this$){
return this$.ontransitionend();
});
/**
 * Property.
 * 
 *   The ontransitionend property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes transitionend events.
 * 
 *   `var transitionEndHandler = target.ontransitionend;
 * 
 *   target.ontransitionend = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionend`
 */
web.Window.set_ontransitionend_BANG_ = (function web$Window$set_ontransitionend_BANG_(this$,val){
return (this$["ontransitionend"] = val);
});
/**
 * Property.
 * 
 *   The onunhandledrejection property of the `web.WindowEventHandlers`
 *   is the `web.EventHandler` for processing unhandledrejection events.
 *   events are raised for unhandled `web.Promise` rejections.
 * 
 *   `window.onunhandledrejection = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunhandledrejection`
 */
web.Window.onunhandledrejection = (function web$Window$onunhandledrejection(this$){
return this$.onunhandledrejection();
});
/**
 * Property.
 * 
 *   The onunhandledrejection property of the `web.WindowEventHandlers`
 *   is the `web.EventHandler` for processing unhandledrejection events.
 *   events are raised for unhandled `web.Promise` rejections.
 * 
 *   `window.onunhandledrejection = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunhandledrejection`
 */
web.Window.set_onunhandledrejection_BANG_ = (function web$Window$set_onunhandledrejection_BANG_(this$,val){
return (this$["onunhandledrejection"] = val);
});
/**
 * Property.
 * 
 *   The onunload property of the `web.WindowEventHandlers` mixin
 *   the `web.EventHandler` for processing unload events. These events
 *   when the window is unloading its content and resources. The resource
 *   is processed after the unload event occurs.
 * 
 *   `window.addEventListener(\"unload\", function(event) { ... });
 *   window.onunload = function(event) { ... };
 * 
 *   Typically, it is better to use `web.window.addEventListener()` and the unload event, instead of onunload.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunload`
 */
web.Window.onunload = (function web$Window$onunload(this$){
return this$.onunload();
});
/**
 * Property.
 * 
 *   The onunload property of the `web.WindowEventHandlers` mixin
 *   the `web.EventHandler` for processing unload events. These events
 *   when the window is unloading its content and resources. The resource
 *   is processed after the unload event occurs.
 * 
 *   `window.addEventListener(\"unload\", function(event) { ... });
 *   window.onunload = function(event) { ... };
 * 
 *   Typically, it is better to use `web.window.addEventListener()` and the unload event, instead of onunload.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onunload`
 */
web.Window.set_onunload_BANG_ = (function web$Window$set_onunload_BANG_(this$,val){
return (this$["onunload"] = val);
});
/**
 * Property.
 * 
 *   The Window.onuserproxymity property represents an `web.EventHandler`,
 *   is a function to be called when the userproximity event occurs.
 *   events are of type `web.UserProximityEvent` and occur when the
 *   device sensor detects that an object becomes nearby.
 * 
 *   `window.onuserproximity = eventHandler`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onuserproximity`
 */
web.Window.onuserproximity = (function web$Window$onuserproximity(this$){
return this$.onuserproximity();
});
/**
 * Property.
 * 
 *   The Window.onuserproxymity property represents an `web.EventHandler`,
 *   is a function to be called when the userproximity event occurs.
 *   events are of type `web.UserProximityEvent` and occur when the
 *   device sensor detects that an object becomes nearby.
 * 
 *   `window.onuserproximity = eventHandler`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onuserproximity`
 */
web.Window.set_onuserproximity_BANG_ = (function web$Window$set_onuserproximity_BANG_(this$,val){
return (this$["onuserproximity"] = val);
});
/**
 * Property.
 * 
 *   The onvrdisplayactivate property of the `web.Window` interface
 *   an event handler that will run when a display is able to be presented
 *   (when the vrdisplayactivate event fires), for example if an HMD
 *   been moved to bring it out of standby, or woken up by being put
 * 
 *   `window.onvrdisplayactivate = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayactivate`
 */
web.Window.onvrdisplayactivate = (function web$Window$onvrdisplayactivate(this$){
return this$.onvrdisplayactivate();
});
/**
 * Property.
 * 
 *   The onvrdisplayactivate property of the `web.Window` interface
 *   an event handler that will run when a display is able to be presented
 *   (when the vrdisplayactivate event fires), for example if an HMD
 *   been moved to bring it out of standby, or woken up by being put
 * 
 *   `window.onvrdisplayactivate = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayactivate`
 */
web.Window.set_onvrdisplayactivate_BANG_ = (function web$Window$set_onvrdisplayactivate_BANG_(this$,val){
return (this$["onvrdisplayactivate"] = val);
});
/**
 * Property.
 * 
 *   The onvrdisplayblur property of the `web.Window` interface represents
 *   event handler that will run when presentation to a display has
 *   paused for some reason by the browser, OS, or VR hardware (when
 *   vrdisplayblur event fires) — for example, while the user is interacting
 *   a system menu or browser, to prevent tracking or loss of experience.
 * 
 *   `window.onvrdisplayblur = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayblur`
 */
web.Window.onvrdisplayblur = (function web$Window$onvrdisplayblur(this$){
return this$.onvrdisplayblur();
});
/**
 * Property.
 * 
 *   The onvrdisplayblur property of the `web.Window` interface represents
 *   event handler that will run when presentation to a display has
 *   paused for some reason by the browser, OS, or VR hardware (when
 *   vrdisplayblur event fires) — for example, while the user is interacting
 *   a system menu or browser, to prevent tracking or loss of experience.
 * 
 *   `window.onvrdisplayblur = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayblur`
 */
web.Window.set_onvrdisplayblur_BANG_ = (function web$Window$set_onvrdisplayblur_BANG_(this$,val){
return (this$["onvrdisplayblur"] = val);
});
/**
 * Property.
 * 
 *   The onvrdisplayconnect property of the `web.Window` interface
 *   an event handler that will run when a compatible VR display has
 *   connected to the computer (when the vrdisplayconnect event fires).
 * 
 *   `window.onvrdisplayconnect = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayconnect`
 */
web.Window.onvrdisplayconnect = (function web$Window$onvrdisplayconnect(this$){
return this$.onvrdisplayconnect();
});
/**
 * Property.
 * 
 *   The onvrdisplayconnect property of the `web.Window` interface
 *   an event handler that will run when a compatible VR display has
 *   connected to the computer (when the vrdisplayconnect event fires).
 * 
 *   `window.onvrdisplayconnect = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayconnect`
 */
web.Window.set_onvrdisplayconnect_BANG_ = (function web$Window$set_onvrdisplayconnect_BANG_(this$,val){
return (this$["onvrdisplayconnect"] = val);
});
/**
 * Property.
 * 
 *   The onvrdisplaydeactivate property of the `web.Window` interface
 *   an event handler that will run when a display can no longer be
 *   to (when the vrdisplaydeactivate event fires), for example if
 *   HMD has gone into standby or sleep mode due to a period of inactivity.
 * 
 *   `window.onvrdisplaydeactivate = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaydeactivate`
 */
web.Window.onvrdisplaydeactivate = (function web$Window$onvrdisplaydeactivate(this$){
return this$.onvrdisplaydeactivate();
});
/**
 * Property.
 * 
 *   The onvrdisplaydeactivate property of the `web.Window` interface
 *   an event handler that will run when a display can no longer be
 *   to (when the vrdisplaydeactivate event fires), for example if
 *   HMD has gone into standby or sleep mode due to a period of inactivity.
 * 
 *   `window.onvrdisplaydeactivate = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaydeactivate`
 */
web.Window.set_onvrdisplaydeactivate_BANG_ = (function web$Window$set_onvrdisplaydeactivate_BANG_(this$,val){
return (this$["onvrdisplaydeactivate"] = val);
});
/**
 * Property.
 * 
 *   The onvrdisplaydisconnect event handler property of the `web.Window`
 *   is called when a compatible VR display has been disconnected
 *   the computer (when the vrdisplaydisconnect event fires).
 * 
 *   `window.onvrdisplaydisconnect = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaydisconnect`
 */
web.Window.onvrdisplaydisconnect = (function web$Window$onvrdisplaydisconnect(this$){
return this$.onvrdisplaydisconnect();
});
/**
 * Property.
 * 
 *   The onvrdisplaydisconnect event handler property of the `web.Window`
 *   is called when a compatible VR display has been disconnected
 *   the computer (when the vrdisplaydisconnect event fires).
 * 
 *   `window.onvrdisplaydisconnect = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaydisconnect`
 */
web.Window.set_onvrdisplaydisconnect_BANG_ = (function web$Window$set_onvrdisplaydisconnect_BANG_(this$,val){
return (this$["onvrdisplaydisconnect"] = val);
});
/**
 * Property.
 * 
 *   The onvrdisplayfocus property of the `web.Window` interface represents
 *   event handler that will run when presentation to a display has
 *   after being blurred (when the vrdisplayfocus event fires).
 * 
 *   `window.onvrdisplayfocus = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayfocus`
 */
web.Window.onvrdisplayfocus = (function web$Window$onvrdisplayfocus(this$){
return this$.onvrdisplayfocus();
});
/**
 * Property.
 * 
 *   The onvrdisplayfocus property of the `web.Window` interface represents
 *   event handler that will run when presentation to a display has
 *   after being blurred (when the vrdisplayfocus event fires).
 * 
 *   `window.onvrdisplayfocus = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplayfocus`
 */
web.Window.set_onvrdisplayfocus_BANG_ = (function web$Window$set_onvrdisplayfocus_BANG_(this$,val){
return (this$["onvrdisplayfocus"] = val);
});
/**
 * Property.
 * 
 *   The onvrdisplaypointerrestricted property of the `web.Window`
 *   represents an event handler that will run when the VR display's
 *   input is restricted to consumption via a pointerlocked element.
 * 
 *   `window.onvrdisplaypointerrestricted = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaypointerrestricted`
 */
web.Window.onvrdisplaypointerrestricted = (function web$Window$onvrdisplaypointerrestricted(this$){
return this$.onvrdisplaypointerrestricted();
});
/**
 * Property.
 * 
 *   The onvrdisplaypointerrestricted property of the `web.Window`
 *   represents an event handler that will run when the VR display's
 *   input is restricted to consumption via a pointerlocked element.
 * 
 *   `window.onvrdisplaypointerrestricted = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaypointerrestricted`
 */
web.Window.set_onvrdisplaypointerrestricted_BANG_ = (function web$Window$set_onvrdisplaypointerrestricted_BANG_(this$,val){
return (this$["onvrdisplaypointerrestricted"] = val);
});
/**
 * Property.
 * 
 *   The onvrdisplaypointerunrestricted property of the `web.Window`
 *   represents an event handler that will run when the VR display's
 *   input is no longer restricted to consumption via a pointerlocked
 * 
 *   `window.onvrdisplaypointerunrestricted = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaypointerunrestricted`
 */
web.Window.onvrdisplaypointerunrestricted = (function web$Window$onvrdisplaypointerunrestricted(this$){
return this$.onvrdisplaypointerunrestricted();
});
/**
 * Property.
 * 
 *   The onvrdisplaypointerunrestricted property of the `web.Window`
 *   represents an event handler that will run when the VR display's
 *   input is no longer restricted to consumption via a pointerlocked
 * 
 *   `window.onvrdisplaypointerunrestricted = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaypointerunrestricted`
 */
web.Window.set_onvrdisplaypointerunrestricted_BANG_ = (function web$Window$set_onvrdisplaypointerunrestricted_BANG_(this$,val){
return (this$["onvrdisplaypointerunrestricted"] = val);
});
/**
 * Property.
 * 
 *   The onvrdisplaypresentchange property of the `web.Window` interface
 *   an event handler that will run when the presenting state of a
 *   display changes — i.e. goes from presenting to not presenting,
 *   vice versa (when the vrdisplaypresentchange event fires).
 * 
 *   `window.onvrdisplaypresentchange = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaypresentchange`
 */
web.Window.onvrdisplaypresentchange = (function web$Window$onvrdisplaypresentchange(this$){
return this$.onvrdisplaypresentchange();
});
/**
 * Property.
 * 
 *   The onvrdisplaypresentchange property of the `web.Window` interface
 *   an event handler that will run when the presenting state of a
 *   display changes — i.e. goes from presenting to not presenting,
 *   vice versa (when the vrdisplaypresentchange event fires).
 * 
 *   `window.onvrdisplaypresentchange = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/onvrdisplaypresentchange`
 */
web.Window.set_onvrdisplaypresentchange_BANG_ = (function web$Window$set_onvrdisplaypresentchange_BANG_(this$,val){
return (this$["onvrdisplaypresentchange"] = val);
});
/**
 * Property.
 * 
 *   The onwheel property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes wheel events.
 * 
 *   `target.onwheel = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onwheel`
 */
web.Window.onwheel = (function web$Window$onwheel(this$){
return this$.onwheel();
});
/**
 * Property.
 * 
 *   The onwheel property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes wheel events.
 * 
 *   `target.onwheel = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onwheel`
 */
web.Window.set_onwheel_BANG_ = (function web$Window$set_onwheel_BANG_(this$,val){
return (this$["onwheel"] = val);
});
/**
 * Property.
 * 
 *   The `web.Window` interface's opener property returns a reference
 *   the window that opened the window using `web.open()`.
 * 
 *   `openerWindow = window.opener;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/opener`
 */
web.Window.opener = (function web$Window$opener(this$){
return this$.opener();
});
/**
 * Property.
 * 
 *   The `web.Window` interface's opener property returns a reference
 *   the window that opened the window using `web.open()`.
 * 
 *   `openerWindow = window.opener;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/opener`
 */
web.Window.set_opener_BANG_ = (function web$Window$set_opener_BANG_(this$,val){
return (this$["opener"] = val);
});
/**
 * Property.
 * 
 *   The origin read-only property of the `web.WindowOrWorkerGlobalScope`
 *   returns the origin of the global scope, serialized as a string.
 * 
 *   `var myOrigin = self.origin; // or just origin`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/origin`
 */
web.Window.origin = (function web$Window$origin(this$){
return this$.origin();
});
/**
 * Property.
 * 
 *   The origin read-only property of the `web.WindowOrWorkerGlobalScope`
 *   returns the origin of the global scope, serialized as a string.
 * 
 *   `var myOrigin = self.origin; // or just origin`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/origin`
 */
web.Window.set_origin_BANG_ = (function web$Window$set_origin_BANG_(this$,val){
return (this$["origin"] = val);
});
/**
 * Property.
 * 
 *   The Window.outerHeight read-only property returns the height
 *   pixels of the whole browser window, including any sidebar, window
 *   and window-resizing borders/handles.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/outerHeight`
 */
web.Window.outer_height = (function web$Window$outer_height(this$){
return this$.outerHeight();
});
/**
 * Property.
 * 
 *   The Window.outerHeight read-only property returns the height
 *   pixels of the whole browser window, including any sidebar, window
 *   and window-resizing borders/handles.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/outerHeight`
 */
web.Window.set_outer_height_BANG_ = (function web$Window$set_outer_height_BANG_(this$,val){
return (this$["outerHeight"] = val);
});
/**
 * Property.
 * 
 *   Window.outerWidth read-only property returns the width of the
 *   of the browser window. It represents the width of the whole browser
 *   including sidebar (if expanded), window chrome and window resizing
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/outerWidth`
 */
web.Window.outer_width = (function web$Window$outer_width(this$){
return this$.outerWidth();
});
/**
 * Property.
 * 
 *   Window.outerWidth read-only property returns the width of the
 *   of the browser window. It represents the width of the whole browser
 *   including sidebar (if expanded), window chrome and window resizing
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/outerWidth`
 */
web.Window.set_outer_width_BANG_ = (function web$Window$set_outer_width_BANG_(this$,val){
return (this$["outerWidth"] = val);
});
/**
 * Property.
 * 
 *   The read-only `web.Window` property pageXOffset is an alias for
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/pageXOffset`
 */
web.Window.page_x_offset = (function web$Window$page_x_offset(this$){
return this$.pageXOffset();
});
/**
 * Property.
 * 
 *   The read-only `web.Window` property pageXOffset is an alias for
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/pageXOffset`
 */
web.Window.set_page_x_offset_BANG_ = (function web$Window$set_page_x_offset_BANG_(this$,val){
return (this$["pageXOffset"] = val);
});
/**
 * Property.
 * 
 *   The read-only `web.Window` property pageYOffset is an alias for
 *   as such, it returns the number of pixels the document is currently
 *   along the vertical axis (that is, up or down) with a value of
 *   indicating that the top edge of the `web.Document` is currently
 *   with the top edge of the window's content area.
 * 
 *   `yOffset = window.pageYOffset;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset`
 */
web.Window.page_y_offset = (function web$Window$page_y_offset(this$){
return this$.pageYOffset();
});
/**
 * Property.
 * 
 *   The read-only `web.Window` property pageYOffset is an alias for
 *   as such, it returns the number of pixels the document is currently
 *   along the vertical axis (that is, up or down) with a value of
 *   indicating that the top edge of the `web.Document` is currently
 *   with the top edge of the window's content area.
 * 
 *   `yOffset = window.pageYOffset;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset`
 */
web.Window.set_page_y_offset_BANG_ = (function web$Window$set_page_y_offset_BANG_(this$,val){
return (this$["pageYOffset"] = val);
});
/**
 * Property.
 * 
 *   The Window.parent property is a reference to the parent of the
 *   window or subframe.
 * 
 *   `var parentWindow = window.parent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/parent`
 */
web.Window.parent = (function web$Window$parent(this$){
return this$.parent();
});
/**
 * Property.
 * 
 *   The Window.parent property is a reference to the parent of the
 *   window or subframe.
 * 
 *   `var parentWindow = window.parent;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/parent`
 */
web.Window.set_parent_BANG_ = (function web$Window$set_parent_BANG_(this$,val){
return (this$["parent"] = val);
});
/**
 * Property.
 * 
 *   The `web.Window` interface's performance property returns a `performance.Performance`
 *   which can be used to gather performance information about the
 *   document. It serves as the point of exposure for the Performance
 *   API, the High Resolution Time API, the Navigation Timing API,
 *   User Timing API, and the Resource Timing API.
 * 
 *   `performanceData = window.performance;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/performance`
 */
web.Window.performance = (function web$Window$performance(this$){
return this$.performance();
});
/**
 * Property.
 * 
 *   The `web.Window` interface's performance property returns a `performance.Performance`
 *   which can be used to gather performance information about the
 *   document. It serves as the point of exposure for the Performance
 *   API, the High Resolution Time API, the Navigation Timing API,
 *   User Timing API, and the Resource Timing API.
 * 
 *   `performanceData = window.performance;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/performance`
 */
web.Window.set_performance_BANG_ = (function web$Window$set_performance_BANG_(this$,val){
return (this$["performance"] = val);
});
/**
 * Property.
 * 
 *   Returns the personalbar object, whose visibility can be toggled
 *   the window.
 * 
 *   `objRef =window.personalbar`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/personalbar`
 */
web.Window.personalbar = (function web$Window$personalbar(this$){
return this$.personalbar();
});
/**
 * Property.
 * 
 *   Returns the personalbar object, whose visibility can be toggled
 *   the window.
 * 
 *   `objRef =window.personalbar`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/personalbar`
 */
web.Window.set_personalbar_BANG_ = (function web$Window$set_personalbar_BANG_(this$,val){
return (this$["personalbar"] = val);
});
/**
 * Property.
 * 
 *   Returns the pkcs11 object, which is used to install drivers and
 *   software associated with the pkcs11 protocol. If pkcs11 isn't
 *   this property returns null.
 * 
 *   `objRef = window.pkcs11`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/pkcs11`
 */
web.Window.pkcs_11 = (function web$Window$pkcs_11(this$){
return this$.pkcs11();
});
/**
 * Property.
 * 
 *   Returns the pkcs11 object, which is used to install drivers and
 *   software associated with the pkcs11 protocol. If pkcs11 isn't
 *   this property returns null.
 * 
 *   `objRef = window.pkcs11`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/pkcs11`
 */
web.Window.set_pkcs_11_BANG_ = (function web$Window$set_pkcs_11_BANG_(this$,val){
return (this$["pkcs11"] = val);
});
/**
 * Property.
 * 
 *   The `web.Window` property screen returns a reference to the screen
 *   associated with the window. The screen object, implementing the
 *   interface, is a special object for inspecting properties of the
 *   on which the current window is being rendered.
 * 
 *   `let screenObj = window.screen;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/screen`
 */
web.Window.screen = (function web$Window$screen(this$){
return this$.screen();
});
/**
 * Property.
 * 
 *   The `web.Window` property screen returns a reference to the screen
 *   associated with the window. The screen object, implementing the
 *   interface, is a special object for inspecting properties of the
 *   on which the current window is being rendered.
 * 
 *   `let screenObj = window.screen;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/screen`
 */
web.Window.set_screen_BANG_ = (function web$Window$set_screen_BANG_(this$,val){
return (this$["screen"] = val);
});
/**
 * Property.
 * 
 *   The Window.screenLeft read-only property returns the horizontal
 *   in CSS pixels, from the left border of the user's browser viewport
 *   the left side of the screen.
 * 
 *   `leftWindowPos = window.screenLeft`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/screenLeft`
 */
web.Window.screen_left = (function web$Window$screen_left(this$){
return this$.screenLeft();
});
/**
 * Property.
 * 
 *   The Window.screenTop read-only property returns the vertical
 *   in CSS pixels, from the top border of the user's browser viewport
 *   the top side of the screen.
 * 
 *   `topWindowPos = window.screenTop`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/screenTop`
 */
web.Window.screen_top = (function web$Window$screen_top(this$){
return this$.screenTop();
});
/**
 * Property.
 * 
 *   The Window.screenX read-only property returns the horizontal
 *   in CSS pixels, of the left border of the user's browser viewport
 *   the left side of the screen.
 * 
 *   `leftWindowPos = window.screenX`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/screenX`
 */
web.Window.screen_x = (function web$Window$screen_x(this$){
return this$.screenX();
});
/**
 * Property.
 * 
 *   The Window.screenY read-only property returns the vertical distance,
 *   CSS pixels, of the top border of the user's browser viewport
 *   the top edge of the screen.
 * 
 *   `topWindowPos = window.screenY`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/screenY`
 */
web.Window.screen_y = (function web$Window$screen_y(this$){
return this$.screenY();
});
/**
 * Property.
 * 
 *   The Window.scrollbars property returns the scrollbars object,
 *   visibility can be checked.
 * 
 *   `objRef = window.scrollbars`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollbars`
 */
web.Window.scrollbars = (function web$Window$scrollbars(this$){
return this$.scrollbars();
});
/**
 * Property.
 * 
 *   The Window.scrollbars property returns the scrollbars object,
 *   visibility can be checked.
 * 
 *   `objRef = window.scrollbars`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollbars`
 */
web.Window.set_scrollbars_BANG_ = (function web$Window$set_scrollbars_BANG_(this$,val){
return (this$["scrollbars"] = val);
});
/**
 * Property.
 * 
 *   The Window.scrollMaxX read-only property returns the maximum
 *   of pixels that the document can be scrolled horizontally.
 * 
 *   `xMax = window.scrollMaxX
 * 
 * 
 *   xMax is the number of pixels.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollMaxX`
 */
web.Window.scroll_max_x = (function web$Window$scroll_max_x(this$){
return this$.scrollMaxX();
});
/**
 * Property.
 * 
 *   The Window.scrollMaxX read-only property returns the maximum
 *   of pixels that the document can be scrolled horizontally.
 * 
 *   `xMax = window.scrollMaxX
 * 
 * 
 *   xMax is the number of pixels.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollMaxX`
 */
web.Window.set_scroll_max_x_BANG_ = (function web$Window$set_scroll_max_x_BANG_(this$,val){
return (this$["scrollMaxX"] = val);
});
/**
 * Property.
 * 
 *   The Window.scrollMaxY read-only property returns the maximum
 *   of pixels that the document can be scrolled vertically.
 * 
 *   `yMax = window.scrollMaxY
 * 
 * 
 *   yMax is the number of pixels.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollMaxY`
 */
web.Window.scroll_max_y = (function web$Window$scroll_max_y(this$){
return this$.scrollMaxY();
});
/**
 * Property.
 * 
 *   The Window.scrollMaxY read-only property returns the maximum
 *   of pixels that the document can be scrolled vertically.
 * 
 *   `yMax = window.scrollMaxY
 * 
 * 
 *   yMax is the number of pixels.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollMaxY`
 */
web.Window.set_scroll_max_y_BANG_ = (function web$Window$set_scroll_max_y_BANG_(this$,val){
return (this$["scrollMaxY"] = val);
});
/**
 * Property.
 * 
 *   The read-only scrollX property of the `web.Window` interface
 *   the number of pixels that the document is currently scrolled
 *   This value is subpixel precise in modern browsers, meaning that
 *   isn't necessarily a whole number. You can get the number of pixels
 *   document is scrolled vertically from the `web.scrollY` property.
 * 
 *   `var x = window.scrollX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX`
 */
web.Window.scroll_x = (function web$Window$scroll_x(this$){
return this$.scrollX();
});
/**
 * Property.
 * 
 *   The read-only scrollX property of the `web.Window` interface
 *   the number of pixels that the document is currently scrolled
 *   This value is subpixel precise in modern browsers, meaning that
 *   isn't necessarily a whole number. You can get the number of pixels
 *   document is scrolled vertically from the `web.scrollY` property.
 * 
 *   `var x = window.scrollX;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollX`
 */
web.Window.set_scroll_x_BANG_ = (function web$Window$set_scroll_x_BANG_(this$,val){
return (this$["scrollX"] = val);
});
/**
 * Property.
 * 
 *   The read-only scrollY property of the `web.Window` interface
 *   the number of pixels that the document is currently scrolled
 * 
 *   `var y = window.scrollY`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY`
 */
web.Window.scroll_y = (function web$Window$scroll_y(this$){
return this$.scrollY();
});
/**
 * Property.
 * 
 *   The read-only scrollY property of the `web.Window` interface
 *   the number of pixels that the document is currently scrolled
 * 
 *   `var y = window.scrollY`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY`
 */
web.Window.set_scroll_y_BANG_ = (function web$Window$set_scroll_y_BANG_(this$,val){
return (this$["scrollY"] = val);
});
/**
 * Property.
 * 
 *   The Window.self read-only property returns the window itself,
 *   a `web.WindowProxy`. It can be used with dot notation on a window
 *   (that is, window.self) or standalone (self). The advantage of
 *   standalone notation is that a similar notation exists for non-window
 *   such as in Web Workers. By using self, you can refer to the global
 *   in a way that will work not only in a window context (self will
 *   to window.self) but also in a worker context (self will then
 *   to `web.WorkerGlobalScope.self`).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/self`
 */
web.Window.self = (function web$Window$self(this$){
return this$.self();
});
/**
 * Property.
 * 
 *   The sessionStorage property allows you to access a session `web.Storage`
 *   for the current origin. sessionStorage is similar to `web.localStorage`;
 *   only difference is while data stored in localStorage has no expiration
 *   data stored in sessionStorage gets cleared when the page session
 *   A page session lasts for as long as the browser is open and survives
 *   page reloads and restores.
 * 
 *   `// Save data to sessionStorage
 *   sessionStorage.setItem('key', 'value');
 * 
 *   // Get saved data from sessionStorage
 *   let data = sessionStorage.getItem('key');
 * 
 *   // Remove saved data from sessionStorage
 *   sessionStorage.removeItem('key');
 * 
 *   // Remove all saved data from sessionStorage
 *   sessionStorage.clear();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage`
 */
web.Window.session_storage = (function web$Window$session_storage(this$){
return this$.sessionStorage();
});
/**
 * Property.
 * 
 *   The sessionStorage property allows you to access a session `web.Storage`
 *   for the current origin. sessionStorage is similar to `web.localStorage`;
 *   only difference is while data stored in localStorage has no expiration
 *   data stored in sessionStorage gets cleared when the page session
 *   A page session lasts for as long as the browser is open and survives
 *   page reloads and restores.
 * 
 *   `// Save data to sessionStorage
 *   sessionStorage.setItem('key', 'value');
 * 
 *   // Get saved data from sessionStorage
 *   let data = sessionStorage.getItem('key');
 * 
 *   // Remove saved data from sessionStorage
 *   sessionStorage.removeItem('key');
 * 
 *   // Remove all saved data from sessionStorage
 *   sessionStorage.clear();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage`
 */
web.Window.set_session_storage_BANG_ = (function web$Window$set_session_storage_BANG_(this$,val){
return (this$["sessionStorage"] = val);
});
/**
 * Property.
 * 
 *   Returns a sidebar object, which contains several methods for
 *   add-ons with the browser.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/sidebar`
 */
web.Window.sidebar = (function web$Window$sidebar(this$){
return this$.sidebar();
});
/**
 * Property.
 * 
 *   Returns a sidebar object, which contains several methods for
 *   add-ons with the browser.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/sidebar`
 */
web.Window.set_sidebar_BANG_ = (function web$Window$set_sidebar_BANG_(this$,val){
return (this$["sidebar"] = val);
});
/**
 * Property.
 * 
 *   The speechSynthesis read-only property of the Window object returns
 *   `speech.SpeechSynthesis` object, which is the entry point into
 *   Web Speech API speech synthesis functionality.
 * 
 *   `var synth = window.speechSynthesis;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/speechSynthesis`
 */
web.Window.speech_synthesis = (function web$Window$speech_synthesis(this$){
return this$.speechSynthesis();
});
/**
 * Property.
 * 
 *   The speechSynthesis read-only property of the Window object returns
 *   `speech.SpeechSynthesis` object, which is the entry point into
 *   Web Speech API speech synthesis functionality.
 * 
 *   `var synth = window.speechSynthesis;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/speechSynthesis`
 */
web.Window.set_speech_synthesis_BANG_ = (function web$Window$set_speech_synthesis_BANG_(this$,val){
return (this$["speechSynthesis"] = val);
});
/**
 * Property.
 * 
 *   The status property of the `web.Window` interface sets the text
 *   the status bar at the bottom of the browser or returns the previously
 *   text.
 * 
 *   `window.status = string;
 *   var value = window.status;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/status`
 */
web.Window.status = (function web$Window$status(this$){
return this$.status();
});
/**
 * Property.
 * 
 *   The status property of the `web.Window` interface sets the text
 *   the status bar at the bottom of the browser or returns the previously
 *   text.
 * 
 *   `window.status = string;
 *   var value = window.status;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/status`
 */
web.Window.set_status_BANG_ = (function web$Window$set_status_BANG_(this$,val){
return (this$["status"] = val);
});
/**
 * Property.
 * 
 *   The Window.statusbar property returns the statusbar object, whose
 *   can be toggled in the window.
 * 
 *   `objRef = window.statusbar`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/statusbar`
 */
web.Window.statusbar = (function web$Window$statusbar(this$){
return this$.statusbar();
});
/**
 * Property.
 * 
 *   The Window.statusbar property returns the statusbar object, whose
 *   can be toggled in the window.
 * 
 *   `objRef = window.statusbar`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/statusbar`
 */
web.Window.set_statusbar_BANG_ = (function web$Window$set_statusbar_BANG_(this$,val){
return (this$["statusbar"] = val);
});
/**
 * Property.
 * 
 *   The Window.toolbar property returns the toolbar object, whose
 *   can be toggled in the window.
 * 
 *   `objRef = window.toolbar`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/toolbar`
 */
web.Window.toolbar = (function web$Window$toolbar(this$){
return this$.toolbar();
});
/**
 * Property.
 * 
 *   The Window.toolbar property returns the toolbar object, whose
 *   can be toggled in the window.
 * 
 *   `objRef = window.toolbar`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/toolbar`
 */
web.Window.set_toolbar_BANG_ = (function web$Window$set_toolbar_BANG_(this$,val){
return (this$["toolbar"] = val);
});
/**
 * Property.
 * 
 *   Returns a reference to the topmost window in the window hierarchy.
 * 
 *   `var topWindow = window.top;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/top`
 */
web.Window.top = (function web$Window$top(this$){
return this$.top();
});
/**
 * Property.
 * 
 *   Returns a reference to the topmost window in the window hierarchy.
 * 
 *   `var topWindow = window.top;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/top`
 */
web.Window.set_top_BANG_ = (function web$Window$set_top_BANG_(this$,val){
return (this$["top"] = val);
});
/**
 * Property.
 * 
 *   The visualViewport read-only property of the `web.Window` interface
 *   a `web.VisualViewport` object representing the visual viewport
 *   a given window.
 * 
 *   `var visualViewport = Window.visualViewport`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/visualViewport`
 */
web.Window.visual_viewport = (function web$Window$visual_viewport(this$){
return this$.visualViewport();
});
/**
 * Property.
 * 
 *   The visualViewport read-only property of the `web.Window` interface
 *   a `web.VisualViewport` object representing the visual viewport
 *   a given window.
 * 
 *   `var visualViewport = Window.visualViewport`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/visualViewport`
 */
web.Window.set_visual_viewport_BANG_ = (function web$Window$set_visual_viewport_BANG_(this$,val){
return (this$["visualViewport"] = val);
});
/**
 * Property.
 * 
 *   The window property of a `web.Window` object points to the window
 *   itself.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/window`
 */
web.Window.window = (function web$Window$window(this$){
return this$.window();
});
/**
 * Property.
 * 
 *   The window property of a `web.Window` object points to the window
 *   itself.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/window`
 */
web.Window.set_window_BANG_ = (function web$Window$set_window_BANG_(this$,val){
return (this$["window"] = val);
});
/**
 * Property.
 * 
 *   The windowState read-only property of the `web.Window` interface
 *   the window's current state.
 * 
 *   `var state = window.windowState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/windowState`
 */
web.Window.window_state = (function web$Window$window_state(this$){
return this$.windowState();
});
/**
 * Property.
 * 
 *   Returns a Window object for the primary content window. This
 *   useful in XUL windows that have a <browser> (or tabbrowser or
 *   with type=\"content-primary\" attribute on it — the most famous
 *   is Firefox main window, browser.xul. In such cases, content returns
 *   reference to the Window object for the document currently displayed
 *   the browser. It is a shortcut for browserRef.contentWindow.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/content`
 */
web.Window.content = (function web$Window$content(this$){
return this$.content();
});
/**
 * Property.
 * 
 *   Returns a Window object for the primary content window. This
 *   useful in XUL windows that have a <browser> (or tabbrowser or
 *   with type=\"content-primary\" attribute on it — the most famous
 *   is Firefox main window, browser.xul. In such cases, content returns
 *   reference to the Window object for the document currently displayed
 *   the browser. It is a shortcut for browserRef.contentWindow.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/content`
 */
web.Window.set_content_BANG_ = (function web$Window$set_content_BANG_(this$,val){
return (this$["content"] = val);
});
/**
 * Property.
 * 
 *   Returns the orientation in degrees (in 90-degree increments)
 *   the viewport relative to the device's natural orientation.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/orientation`
 */
web.Window.orientation = (function web$Window$orientation(this$){
return this$.orientation();
});
/**
 * Property.
 * 
 *   Returns the orientation in degrees (in 90-degree increments)
 *   the viewport relative to the device's natural orientation.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Window/orientation`
 */
web.Window.set_orientation_BANG_ = (function web$Window$set_orientation_BANG_(this$,val){
return (this$["orientation"] = val);
});

//# sourceMappingURL=Window.js.map?rel=1565798839685
