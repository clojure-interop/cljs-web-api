// Compiled by ClojureScript 1.9.946 {}
goog.provide('performance.PerformanceTiming');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.connectEnd read-only property returns
 *   unsigned long long representing the moment, in miliseconds since
 *   UNIX epoch, where the connection is opened network. If the transport
 *   reports an error and the connection establishment is started
 *   the last connection establisment end time is given. If a persistent
 *   is used, the value will be the same as `performance.PerformanceTiming.fetchStart`.
 *   connection is considered as opened when all secure connection
 *   or SOCKS authentication, is terminated.
 * 
 *   `time = performanceTiming.connectEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/connectEnd`
 */
performance.PerformanceTiming.connect_end = (function performance$PerformanceTiming$connect_end(this$){
return this$.connectEnd();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.connectStart read-only property
 *   an unsigned long long representing the moment, in miliseconds
 *   the UNIX epoch, where the request to open a connection is sent
 *   the network. If the transport layer reports an error and the
 *   establishment is started again, the last connection establisment
 *   time is given. If a persistent connection is used, the value
 *   be the same as `performance.PerformanceTiming.fetchStart`.
 * 
 *   `time = performanceTiming.connectStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/connectStart`
 */
performance.PerformanceTiming.connect_start = (function performance$PerformanceTiming$connect_start(this$){
return this$.connectStart();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.domainLookupEnd read-only property
 *   an unsigned long long representing the moment, in miliseconds
 *   the UNIX epoch, where the domain lookup is finished. If a persistent
 *   is used, or the information is stored in a cache or a local resource,
 *   value will be the same as `performance.PerformanceTiming.fetchStart`.
 * 
 *   `time = performanceTiming.domainLookupEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domainLookupEnd`
 */
performance.PerformanceTiming.domain_lookup_end = (function performance$PerformanceTiming$domain_lookup_end(this$){
return this$.domainLookupEnd();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.domainLookupEnd read-only property
 *   an unsigned long long representing the moment, in miliseconds
 *   the UNIX epoch, where the domain lookup is finished. If a persistent
 *   is used, or the information is stored in a cache or a local resource,
 *   value will be the same as `performance.PerformanceTiming.fetchStart`.
 * 
 *   `time = performanceTiming.domainLookupEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domainLookupEnd`
 */
performance.PerformanceTiming.set_domain_lookup_end_BANG_ = (function performance$PerformanceTiming$set_domain_lookup_end_BANG_(this$,val){
return (this$["domainLookupEnd"] = val);
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.domainLookupStart read-only property
 *   an unsigned long long representing the moment, in miliseconds
 *   the UNIX epoch, where the domain lookup starts. If a persistent
 *   is used, or the information is stored in a cache or a local resource,
 *   value will be the same as `performance.PerformanceTiming.fetchStart`.
 * 
 *   `time = performanceTiming.domainLookupStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domainLookupStart`
 */
performance.PerformanceTiming.domain_lookup_start = (function performance$PerformanceTiming$domain_lookup_start(this$){
return this$.domainLookupStart();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.domComplete read-only property returns
 *   unsigned long long representing the moment, in miliseconds since
 *   UNIX epoch, when the parser finished its work on the main document,
 *   is when its `web.Document.readyState` changes to 'complete' and
 *   corresponding readystatechange event is thrown.
 * 
 *   `time = performanceTiming.domComplete;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domComplete`
 */
performance.PerformanceTiming.dom_complete = (function performance$PerformanceTiming$dom_complete(this$){
return this$.domComplete();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.domContentLoadedEventEnd read-only
 *   returns an unsigned long long representing the moment, in milliseconds
 *   the UNIX epoch, right after all the scripts that need to be executed
 *   soon as possible, in order or not, has been executed.
 * 
 *   `time = performanceTiming.domContentLoadedEventEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domContentLoadedEventEnd`
 */
performance.PerformanceTiming.dom_content_loaded_event_end = (function performance$PerformanceTiming$dom_content_loaded_event_end(this$){
return this$.domContentLoadedEventEnd();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.domContentLoadedEventStart read-only
 *   returns an unsigned long long representing the moment, in miliseconds
 *   the UNIX epoch, right before the parser sent the DOMContentLoaded
 *   that is right after all the scripts that need to be executed
 *   after parsing has been executed.
 * 
 *   `time = performanceTiming.domContentLoadedEventStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domContentLoadedEventStart`
 */
performance.PerformanceTiming.dom_content_loaded_event_start = (function performance$PerformanceTiming$dom_content_loaded_event_start(this$){
return this$.domContentLoadedEventStart();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.domInteractive read-only property
 *   an unsigned long long representing the moment, in miliseconds
 *   the UNIX epoch, when the parser finished its work on the main
 *   that is when its `web.Document.readyState` changes to 'interactive'
 *   the corresponding readystatechange event is thrown.
 * 
 *   `time = performanceTiming.domInteractive;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domInteractive`
 */
performance.PerformanceTiming.dom_interactive = (function performance$PerformanceTiming$dom_interactive(this$){
return this$.domInteractive();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.domLoading read-only property returns
 *   unsigned long long representing the moment, in miliseconds since
 *   UNIX epoch, when the parser started its work, that is when its
 *   changes to 'loading' and the corresponding readystatechange event
 *   thrown.
 * 
 *   `time = performanceTiming.domLoading;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domLoading`
 */
performance.PerformanceTiming.dom_loading = (function performance$PerformanceTiming$dom_loading(this$){
return this$.domLoading();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.domLoading read-only property returns
 *   unsigned long long representing the moment, in miliseconds since
 *   UNIX epoch, when the parser started its work, that is when its
 *   changes to 'loading' and the corresponding readystatechange event
 *   thrown.
 * 
 *   `time = performanceTiming.domLoading;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/domLoading`
 */
performance.PerformanceTiming.set_dom_loading_BANG_ = (function performance$PerformanceTiming$set_dom_loading_BANG_(this$,val){
return (this$["domLoading"] = val);
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.fetchStart read-only property returns
 *   unsigned long long representing the moment, in miliseconds since
 *   UNIX epoch, the browser is ready to fetch the document using
 *   HTTP request. This moment is before the check to any application
 * 
 *   `time = performance.timing.fetchStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/fetchStart`
 */
performance.PerformanceTiming.fetch_start = (function performance$PerformanceTiming$fetch_start(this$){
return this$.fetchStart();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.loadEventEnd read-only property
 *   an unsigned long long representing the moment, in miliseconds
 *   the UNIX epoch, when the load event handler terminated, that
 *   when the load event is completed. If this event has not yet been
 *   or is not yet completed, it returns 0.
 * 
 *   `time = performanceTiming.loadEventEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/loadEventEnd`
 */
performance.PerformanceTiming.load_event_end = (function performance$PerformanceTiming$load_event_end(this$){
return this$.loadEventEnd();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.loadEventStart read-only property
 *   an unsigned long long representing the moment, in miliseconds
 *   the UNIX epoch, when the load event was sent for the current
 *   If this event has not yet been sent, it returns 0.
 * 
 *   `time = performanceTiming.loadEventStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/loadEventStart`
 */
performance.PerformanceTiming.load_event_start = (function performance$PerformanceTiming$load_event_start(this$){
return this$.loadEventStart();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.navigationStart read-only property
 *   an unsigned long long representing the moment, in miliseconds
 *   the UNIX epoch, right after the prompt for unload terminates
 *   the previous document in the same browsing context. If there
 *   no previous document, this value will be the same as `performance.PerformanceTiming.fetchStart`.
 * 
 *   `time = performanceTiming.navigationStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/navigationStart`
 */
performance.PerformanceTiming.navigation_start = (function performance$PerformanceTiming$navigation_start(this$){
return this$.navigationStart();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.redirectEnd read-only property returns
 *   unsigned long long representing the moment, in miliseconds since
 *   UNIX epoch, the last HTTP redirect is completed, that is when
 *   last byte of the HTTP response has been received. If there is
 *   redirect, or if one of the redirect is not of the same origin,
 *   value returned is 0.
 * 
 *   `time = performanceTiming.redirectEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/redirectEnd`
 */
performance.PerformanceTiming.redirect_end = (function performance$PerformanceTiming$redirect_end(this$){
return this$.redirectEnd();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.redirectStart read-only property
 *   an unsigned long long representing the moment, in miliseconds
 *   the UNIX epoch, the first HTTP redirect starts. If there is no
 *   or if one of the redirect is not of the same origin, the value
 *   is 0.
 * 
 *   `time = performanceTiming.redirectStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/redirectStart`
 */
performance.PerformanceTiming.redirect_start = (function performance$PerformanceTiming$redirect_start(this$){
return this$.redirectStart();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.requestStart read-only property
 *   an unsigned long long representing the moment, in miliseconds
 *   the UNIX epoch, when the browser sent the request to obtain the
 *   document, from the server or from a cache. If the transport layer
 *   after the start of the request and the connection is reopened,
 *   property will be set to the time corresponding to the new request.
 * 
 *   `time = performanceTiming.requestStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/requestStart`
 */
performance.PerformanceTiming.request_start = (function performance$PerformanceTiming$request_start(this$){
return this$.requestStart();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.responseEnd read-only property returns
 *   unsigned long long representing the moment, in miliseconds since
 *   UNIX epoch, when the browser received the last byte of the response,
 *   when the connection is closed if this happened first, from the
 *   from a cache or from a local resource.
 * 
 *   `time = performanceTiming.responseEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/responseEnd`
 */
performance.PerformanceTiming.response_end = (function performance$PerformanceTiming$response_end(this$){
return this$.responseEnd();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.responseStart read-only property
 *   an unsigned long long representing the moment in time (in milliseconds
 *   the UNIX epoch) when the browser received the first byte of the
 *   from the server, cache, or local resource.
 * 
 *   `time = performanceTiming.responseStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/responseStart`
 */
performance.PerformanceTiming.response_start = (function performance$PerformanceTiming$response_start(this$){
return this$.responseStart();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.secureConnectionStart read-only
 *   returns an unsigned long long representing the moment, in miliseconds
 *   the UNIX epoch, where the secure connection handshake starts.
 *   no such connection is requested, it returns 0.
 * 
 *   `time = performanceTiming.secureConnectionStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/secureConnectionStart`
 */
performance.PerformanceTiming.secure_connection_start = (function performance$PerformanceTiming$secure_connection_start(this$){
return this$.secureConnectionStart();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.unloadEventEnd read-only property
 *   an unsigned long long representing the moment, in miliseconds
 *   the UNIX epoch, the unload event handler finishes. If there is
 *   previous document, or if the previous document, or one of the
 *   redirects, is not of the same origin, the value returned is 0.
 * 
 *   `time = performanceTiming.unloadEventEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/unloadEventEnd`
 */
performance.PerformanceTiming.unload_event_end = (function performance$PerformanceTiming$unload_event_end(this$){
return this$.unloadEventEnd();
});
/**
 * Property.
 * 
 *   The legacy PerformanceTiming.unloadEventStart read-only property
 *   an unsigned long long representing the moment, in miliseconds
 *   the UNIX epoch, the unload event has been thrown. If there is
 *   previous document, or if the previous document, or one of the
 *   redirects, is not of the same origin, the value returned is 0.
 * 
 *   `time = performanceTiming.unloadEventStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceTiming/unloadEventStart`
 */
performance.PerformanceTiming.unload_event_start = (function performance$PerformanceTiming$unload_event_start(this$){
return this$.unloadEventStart();
});

//# sourceMappingURL=PerformanceTiming.js.map?rel=1565798854228
