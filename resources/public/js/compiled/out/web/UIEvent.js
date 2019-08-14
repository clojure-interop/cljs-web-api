// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.UIEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The UIEvent() constructor creates a new `web.UIEvent`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/UIEvent`
 */
web.UIEvent.constructor$ = UIEvent;
/**
 * Method.
 * 
 *   The UIEvent.initUIEvent() method initializes a UI event once
 *   been created.
 * 
 *   `event.initUIEvent(type, canBubble, cancelable, view, detail)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/initUIEvent`
 */
web.UIEvent.init_ui_event = (function web$UIEvent$init_ui_event(this$,type,can_bubble,cancelable,view,detail){
return this$.initUIEvent(type,can_bubble,cancelable,view,detail);
});
/**
 * Property.
 * 
 *   The UIEvent.cancelBubble property indicates if event bubbling
 *   this event has been canceled or not. It is set to false by default,
 *   the event to bubble up the DOM, if it is a bubbleable event.
 *   this property to true stops the event from bubbling up the DOM.
 *   all events are allowed to bubble up the DOM.
 * 
 *   `event.cancelBubble = bool;
 *   var bool = event.cancelBubble;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/cancelBubble`
 */
web.UIEvent.cancel_bubble = (function web$UIEvent$cancel_bubble(this$){
return this$.cancelBubble();
});
/**
 * Property.
 * 
 *   The UIEvent.cancelBubble property indicates if event bubbling
 *   this event has been canceled or not. It is set to false by default,
 *   the event to bubble up the DOM, if it is a bubbleable event.
 *   this property to true stops the event from bubbling up the DOM.
 *   all events are allowed to bubble up the DOM.
 * 
 *   `event.cancelBubble = bool;
 *   var bool = event.cancelBubble;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/cancelBubble`
 */
web.UIEvent.set_cancel_bubble_BANG_ = (function web$UIEvent$set_cancel_bubble_BANG_(this$,val){
return (this$["cancelBubble"] = val);
});
/**
 * Property.
 * 
 *   The UIEvent.detail read-only property, when non-zero, provides
 *   current (or next, depending on the event) click count.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/detail`
 */
web.UIEvent.detail = (function web$UIEvent$detail(this$){
return this$.detail();
});
/**
 * Property.
 * 
 *   The UIEvent.isChar read-only property returns a `web.Boolean`
 *   whether the event produced a key character or not.
 * 
 *   `var isChar = UIEvent.isChar;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/isChar`
 */
web.UIEvent.is_char = (function web$UIEvent$is_char(this$){
return this$.isChar();
});
/**
 * Property.
 * 
 *   The UIEvent.layerX read-only property returns the horizontal
 *   of the event relative to the current layer.
 * 
 *   `var xpos = event.layerX
 * 
 * 
 *   xpos is an integer value in pixels for the x-coordinate of the mouse pointer, when the mouse event fired.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/layerX`
 */
web.UIEvent.layer_x = (function web$UIEvent$layer_x(this$){
return this$.layerX();
});
/**
 * Property.
 * 
 *   The UIEvent.layerY read-only property returns the vertical coordinate
 *   the event relative to the current layer.
 * 
 *   `var ypos = event.layerY;
 * 
 * 
 *   ypos is an integer value in pixels for the y-coordinate of the mouse pointer, when the mouse event fired.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/layerY`
 */
web.UIEvent.layer_y = (function web$UIEvent$layer_y(this$){
return this$.layerY();
});
/**
 * Property.
 * 
 *   The non-standard, read-only `web.UIEvent` property pageX returns
 *   horizontal coordinate of the event relative to the whole document.
 * 
 *   `var pos = event.pageX`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/pageX`
 */
web.UIEvent.page_x = (function web$UIEvent$page_x(this$){
return this$.pageX();
});
/**
 * Property.
 * 
 *   The UIEvent.pageY read-only property returns the vertical coordinate
 *   the event relative to the whole document.
 * 
 *   `var pageY = event.pageY;
 * 
 *   pageY is an integer value in pixels for the y-coordinate of the mouse pointer, relative to the whole document, when the mouse event fired. This property takes into account any vertical scrolling of the page.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/pageY`
 */
web.UIEvent.page_y = (function web$UIEvent$page_y(this$){
return this$.pageY();
});
/**
 * Property.
 * 
 *   The UIEvent.sourceCapabilities read-only property returns an
 *   of the `web.InputDeviceCapabilities` interface which provides
 *   about the physical device responsible for generating a touch
 *   If no input device was responsible for the event, it returns
 * 
 *   `var iDC = event.sourceCapabilities`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/sourceCapabilities`
 */
web.UIEvent.source_capabilities = (function web$UIEvent$source_capabilities(this$){
return this$.sourceCapabilities();
});
/**
 * Property.
 * 
 *   The UIEvent.sourceCapabilities read-only property returns an
 *   of the `web.InputDeviceCapabilities` interface which provides
 *   about the physical device responsible for generating a touch
 *   If no input device was responsible for the event, it returns
 * 
 *   `var iDC = event.sourceCapabilities`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/sourceCapabilities`
 */
web.UIEvent.set_source_capabilities_BANG_ = (function web$UIEvent$set_source_capabilities_BANG_(this$,val){
return (this$["sourceCapabilities"] = val);
});
/**
 * Property.
 * 
 *   The UIEvent.view read-only property returns the `web.WindowProxy`
 *   from which the event was generated. In browsers, this is the
 *   object the event happened in.
 * 
 *   `var view = event.view;
 * 
 * 
 *   view is a reference to an AbstractView object.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/UIEvent/view`
 */
web.UIEvent.view = (function web$UIEvent$view(this$){
return this$.view();
});

//# sourceMappingURL=UIEvent.js.map?rel=1565798817901
