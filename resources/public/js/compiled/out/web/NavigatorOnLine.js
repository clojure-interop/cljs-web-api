// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.NavigatorOnLine');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   Returns the online status of the browser. The property returns
 *   boolean value, with true meaning online and false meaning offline.
 *   property sends updates whenever the browser's ability to connect
 *   the network changes. The update occurs when the user follows
 *   or when a script requests a remote page. For example, the property
 *   return false when users click links soon after they lose internet
 * 
 *   `online = window.navigator.onLine;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine`
 */
web.NavigatorOnLine.on_line = (function web$NavigatorOnLine$on_line(this$){
return this$.onLine();
});
/**
 * Property.
 * 
 *   Returns the online status of the browser. The property returns
 *   boolean value, with true meaning online and false meaning offline.
 *   property sends updates whenever the browser's ability to connect
 *   the network changes. The update occurs when the user follows
 *   or when a script requests a remote page. For example, the property
 *   return false when users click links soon after they lose internet
 * 
 *   `online = window.navigator.onLine;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorOnLine/onLine`
 */
web.NavigatorOnLine.set_on_line_BANG_ = (function web$NavigatorOnLine$set_on_line_BANG_(this$,val){
return (this$["onLine"] = val);
});

//# sourceMappingURL=NavigatorOnLine.js.map?rel=1565798812805
