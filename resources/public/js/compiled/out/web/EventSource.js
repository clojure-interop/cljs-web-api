// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.EventSource');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The EventSource() constructor returns a newly-created `web.EventSource`, which represents a remote resource.
 * 
 *   url
 *   A `web.USVString` that represents the location of the remote resource serving the events/messages.
 *   configuration Optional
 *   Provides options to configure the new connection. The possible entries are:
 * 
 *   withCredentials, defaulting to false, indicating if CORS should be set to include credentials.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/EventSource`
 */
web.EventSource.constructor$ = EventSource;
/**
 * Method.
 * 
 *   The close() method of the `web.EventSource` interface closes
 *   connection, if one is made, and sets the `web.EventSource.readyState`
 *   to 2 (closed).
 * 
 *   `eventSource.close();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/close`
 */
web.EventSource.close = (function web$EventSource$close(this$){
return this$.close();
});
/**
 * Property.
 * 
 *   The onerror property of the `web.EventSource` interface is an
 *   called when an error occurs and the error event is dispatched
 *   an EventSource object.
 * 
 *   `eventSource.onerror = function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onerror`
 */
web.EventSource.onerror = (function web$EventSource$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The onerror property of the `web.EventSource` interface is an
 *   called when an error occurs and the error event is dispatched
 *   an EventSource object.
 * 
 *   `eventSource.onerror = function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onerror`
 */
web.EventSource.set_onerror_BANG_ = (function web$EventSource$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The onmessage property of the `web.EventSource` interface is
 *   `web.EventHandler` called when a message event is received, that
 *   when a message is coming from the source.
 * 
 *   `eventSource.onmessage = function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onmessage`
 */
web.EventSource.onmessage = (function web$EventSource$onmessage(this$){
return this$.onmessage();
});
/**
 * Property.
 * 
 *   The onmessage property of the `web.EventSource` interface is
 *   `web.EventHandler` called when a message event is received, that
 *   when a message is coming from the source.
 * 
 *   `eventSource.onmessage = function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onmessage`
 */
web.EventSource.set_onmessage_BANG_ = (function web$EventSource$set_onmessage_BANG_(this$,val){
return (this$["onmessage"] = val);
});
/**
 * Property.
 * 
 *   The onopen property of the `web.EventSource` interface is an
 *   called when an open event is received, that is when the connection
 *   just opened.
 * 
 *   `eventSource.onopen = function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onopen`
 */
web.EventSource.onopen = (function web$EventSource$onopen(this$){
return this$.onopen();
});
/**
 * Property.
 * 
 *   The onopen property of the `web.EventSource` interface is an
 *   called when an open event is received, that is when the connection
 *   just opened.
 * 
 *   `eventSource.onopen = function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/onopen`
 */
web.EventSource.set_onopen_BANG_ = (function web$EventSource$set_onopen_BANG_(this$,val){
return (this$["onopen"] = val);
});
/**
 * Property.
 * 
 *   The readyState read-only property of the `web.EventSource` interface
 *   a number representing the state of the connection.
 * 
 *   `var myReadyState = eventSource.readyState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/readyState`
 */
web.EventSource.ready_state = (function web$EventSource$ready_state(this$){
return this$.readyState();
});
/**
 * Property.
 * 
 *   The readyState read-only property of the `web.EventSource` interface
 *   a number representing the state of the connection.
 * 
 *   `var myReadyState = eventSource.readyState;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/readyState`
 */
web.EventSource.set_ready_state_BANG_ = (function web$EventSource$set_ready_state_BANG_(this$,val){
return (this$["readyState"] = val);
});
/**
 * Property.
 * 
 *   The url read-only property of the `web.EventSource` interface
 *   a `dom.DOMString` representing the URL of the source.
 * 
 *   `var myUrl = eventSource.url;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/url`
 */
web.EventSource.url = (function web$EventSource$url(this$){
return this$.url();
});
/**
 * Property.
 * 
 *   The url read-only property of the `web.EventSource` interface
 *   a `dom.DOMString` representing the URL of the source.
 * 
 *   `var myUrl = eventSource.url;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/url`
 */
web.EventSource.set_url_BANG_ = (function web$EventSource$set_url_BANG_(this$,val){
return (this$["url"] = val);
});
/**
 * Property.
 * 
 *   The withCredentials read-only property of the `web.EventSource`
 *   returns a `web.Boolean` indicating whether the EventSource object
 *   instantiated with CORS credentials set.
 * 
 *   `var myWithCredentials = eventSource.withCredentials;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/withCredentials`
 */
web.EventSource.with_credentials = (function web$EventSource$with_credentials(this$){
return this$.withCredentials();
});
/**
 * Property.
 * 
 *   The withCredentials read-only property of the `web.EventSource`
 *   returns a `web.Boolean` indicating whether the EventSource object
 *   instantiated with CORS credentials set.
 * 
 *   `var myWithCredentials = eventSource.withCredentials;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventSource/withCredentials`
 */
web.EventSource.set_with_credentials_BANG_ = (function web$EventSource$set_with_credentials_BANG_(this$,val){
return (this$["withCredentials"] = val);
});

//# sourceMappingURL=EventSource.js.map?rel=1565798815500
