// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.XDomainRequest');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   Aborts an `web.XDomainRequest`.
 * 
 *   `xdr.abort();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/abort`
 */
web.XDomainRequest.abort = (function web$XDomainRequest$abort(this$){
return this$.abort();
});
/**
 * Method.
 * 
 *   Opens an `web.XDomainRequest` which is configured to use a given
 *   (GET/POST) and URL.
 * 
 *   `xdr.open(method, url);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/open`
 */
web.XDomainRequest.open = (function web$XDomainRequest$open(this$,method,url){
return this$.open(method,url);
});
/**
 * Method.
 * 
 *   Sends an `web.XDomainRequest` which has previously been opened
 *   `web.XDomainRequest.open()`.
 * 
 *   `xdr.send(data);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/send`
 */
web.XDomainRequest.send = (function web$XDomainRequest$send(this$,data){
return this$.send(data);
});
/**
 * Property.
 * 
 *   An event handler which is called when an `web.XDomainRequest`
 *   an error.
 * 
 *   `xdr.onerror = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/onerror`
 */
web.XDomainRequest.onerror = (function web$XDomainRequest$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   An event handler which is called when an `web.XDomainRequest`
 *   an error.
 * 
 *   `xdr.onerror = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/onerror`
 */
web.XDomainRequest.set_onerror_BANG_ = (function web$XDomainRequest$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   An event handler for when an `web.XDomainRequest` has finished
 *   the response from the server. You can find the entire server
 *   in the `web.XDomainRequest.responseText` property.
 * 
 *   `xdr.onload = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/onload`
 */
web.XDomainRequest.onload = (function web$XDomainRequest$onload(this$){
return this$.onload();
});
/**
 * Property.
 * 
 *   An event handler for when an `web.XDomainRequest` has finished
 *   the response from the server. You can find the entire server
 *   in the `web.XDomainRequest.responseText` property.
 * 
 *   `xdr.onload = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/onload`
 */
web.XDomainRequest.set_onload_BANG_ = (function web$XDomainRequest$set_onload_BANG_(this$,val){
return (this$["onload"] = val);
});
/**
 * Property.
 * 
 *   This method is called periodically as an event handler for progress
 *   on `web.XDomainRequest`s, so that code can monitor progress while
 *   content.
 * 
 *   `xdr.onprogress = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/onprogress`
 */
web.XDomainRequest.onprogress = (function web$XDomainRequest$onprogress(this$){
return this$.onprogress();
});
/**
 * Property.
 * 
 *   This method is called periodically as an event handler for progress
 *   on `web.XDomainRequest`s, so that code can monitor progress while
 *   content.
 * 
 *   `xdr.onprogress = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/onprogress`
 */
web.XDomainRequest.set_onprogress_BANG_ = (function web$XDomainRequest$set_onprogress_BANG_(this$,val){
return (this$["onprogress"] = val);
});
/**
 * Property.
 * 
 *   An event handler which is called when a pending `web.XDomainRequest`
 *   out.
 * 
 *   `xdr.ontimeout = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/ontimeout`
 */
web.XDomainRequest.ontimeout = (function web$XDomainRequest$ontimeout(this$){
return this$.ontimeout();
});
/**
 * Property.
 * 
 *   An event handler which is called when a pending `web.XDomainRequest`
 *   out.
 * 
 *   `xdr.ontimeout = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/ontimeout`
 */
web.XDomainRequest.set_ontimeout_BANG_ = (function web$XDomainRequest$set_ontimeout_BANG_(this$,val){
return (this$["ontimeout"] = val);
});
/**
 * Property.
 * 
 *   Returns the response body of an `web.XDomainRequest` as a string.
 * 
 *   `var response = xdr.responseText;
 * 
 *   This sets response to contain the response body of the request, as a string.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/responseText`
 */
web.XDomainRequest.response_text = (function web$XDomainRequest$response_text(this$){
return this$.responseText();
});
/**
 * Property.
 * 
 *   Returns the response body of an `web.XDomainRequest` as a string.
 * 
 *   `var response = xdr.responseText;
 * 
 *   This sets response to contain the response body of the request, as a string.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/responseText`
 */
web.XDomainRequest.set_response_text_BANG_ = (function web$XDomainRequest$set_response_text_BANG_(this$,val){
return (this$["responseText"] = val);
});
/**
 * Property.
 * 
 *   Gets or sets the amount of time in milliseconds until an `web.XDomainRequest`
 *   out.
 * 
 *   `xdr.timeout = milliseconds;
 * 
 *   The default value is 0.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/timeout`
 */
web.XDomainRequest.timeout = (function web$XDomainRequest$timeout(this$){
return this$.timeout();
});
/**
 * Property.
 * 
 *   Gets or sets the amount of time in milliseconds until an `web.XDomainRequest`
 *   out.
 * 
 *   `xdr.timeout = milliseconds;
 * 
 *   The default value is 0.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XDomainRequest/timeout`
 */
web.XDomainRequest.set_timeout_BANG_ = (function web$XDomainRequest$set_timeout_BANG_(this$,val){
return (this$["timeout"] = val);
});

//# sourceMappingURL=XDomainRequest.js.map?rel=1565798854298
