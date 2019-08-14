// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.WindowEventHandlers');
goog.require('cljs.core');
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
web.WindowEventHandlers.onafterprint = (function web$WindowEventHandlers$onafterprint(this$){
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
web.WindowEventHandlers.set_onafterprint_BANG_ = (function web$WindowEventHandlers$set_onafterprint_BANG_(this$,val){
return (this$["onafterprint"] = val);
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
web.WindowEventHandlers.onbeforeprint = (function web$WindowEventHandlers$onbeforeprint(this$){
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
web.WindowEventHandlers.set_onbeforeprint_BANG_ = (function web$WindowEventHandlers$set_onbeforeprint_BANG_(this$,val){
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
web.WindowEventHandlers.onbeforeunload = (function web$WindowEventHandlers$onbeforeunload(this$){
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
web.WindowEventHandlers.set_onbeforeunload_BANG_ = (function web$WindowEventHandlers$set_onbeforeunload_BANG_(this$,val){
return (this$["onbeforeunload"] = val);
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
web.WindowEventHandlers.onhashchange = (function web$WindowEventHandlers$onhashchange(this$){
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
web.WindowEventHandlers.set_onhashchange_BANG_ = (function web$WindowEventHandlers$set_onhashchange_BANG_(this$,val){
return (this$["onhashchange"] = val);
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
web.WindowEventHandlers.onlanguagechange = (function web$WindowEventHandlers$onlanguagechange(this$){
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
web.WindowEventHandlers.set_onlanguagechange_BANG_ = (function web$WindowEventHandlers$set_onlanguagechange_BANG_(this$,val){
return (this$["onlanguagechange"] = val);
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
web.WindowEventHandlers.onmessage = (function web$WindowEventHandlers$onmessage(this$){
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
web.WindowEventHandlers.set_onmessage_BANG_ = (function web$WindowEventHandlers$set_onmessage_BANG_(this$,val){
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
web.WindowEventHandlers.onmessageerror = (function web$WindowEventHandlers$onmessageerror(this$){
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
web.WindowEventHandlers.set_onmessageerror_BANG_ = (function web$WindowEventHandlers$set_onmessageerror_BANG_(this$,val){
return (this$["onmessageerror"] = val);
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
web.WindowEventHandlers.onpopstate = (function web$WindowEventHandlers$onpopstate(this$){
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
web.WindowEventHandlers.set_onpopstate_BANG_ = (function web$WindowEventHandlers$set_onpopstate_BANG_(this$,val){
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
web.WindowEventHandlers.onrejectionhandled = (function web$WindowEventHandlers$onrejectionhandled(this$){
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
web.WindowEventHandlers.set_onrejectionhandled_BANG_ = (function web$WindowEventHandlers$set_onrejectionhandled_BANG_(this$,val){
return (this$["onrejectionhandled"] = val);
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
web.WindowEventHandlers.onstorage = (function web$WindowEventHandlers$onstorage(this$){
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
web.WindowEventHandlers.set_onstorage_BANG_ = (function web$WindowEventHandlers$set_onstorage_BANG_(this$,val){
return (this$["onstorage"] = val);
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
web.WindowEventHandlers.onunhandledrejection = (function web$WindowEventHandlers$onunhandledrejection(this$){
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
web.WindowEventHandlers.set_onunhandledrejection_BANG_ = (function web$WindowEventHandlers$set_onunhandledrejection_BANG_(this$,val){
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
web.WindowEventHandlers.onunload = (function web$WindowEventHandlers$onunload(this$){
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
web.WindowEventHandlers.set_onunload_BANG_ = (function web$WindowEventHandlers$set_onunload_BANG_(this$,val){
return (this$["onunload"] = val);
});

//# sourceMappingURL=WindowEventHandlers.js.map?rel=1565798855230
