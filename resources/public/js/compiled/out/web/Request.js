// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Request');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Request() constructor creates a new `web.Request` object.
 * 
 *   input
 *   Defines the resource that you wish to fetch. This can either be:
 * 
 *   A `web.USVString` containing the direct URL of the resource you want to fetch.
 *   A `web.Request` object, effectively creating a copy. Note the following behavioural updates to retain security while making the constructor less likely to throw exceptions:
 * 
 *   If this object exists on another origin to the constructor call, the `web.Request.referrer` is stripped out.
 *   If this object has a `web.Request.mode` of navigate, the mode value is converted to same-origin.
 * 
 * 
 * 
 * 
 *   init Optional
 *   An options object containing any custom settings that you want to apply to the request. The possible options are:
 * 
 *   method: The request method, e.g., GET, POST.
 *   headers: Any headers you want to add to your request, contained within a `web.Headers` object or an object literal with `web.ByteString` values.
 *   body: Any body that you want to add to your request: this can be a `web.Blob`, `web.BufferSource`, `web.FormData`, `web.URLSearchParams`, `web.USVString`, or `web.ReadableStream` object. Note that a request using the GET or HEAD method cannot have a body.
 *   mode: The mode you want to use for the request, e.g., cors, no-cors, same-origin, or navigate. The default is cors. In Chrome the default is no-cors before Chrome 47 and same-origin starting with Chrome 47.
 *   credentials: The request credentials you want to use for the request: omit, same-origin, or include. The default is omit. In Chrome the default is same-origin before Chrome 47 and include starting with Chrome 47.
 *   cache: The cache mode you want to use for the request.
 *   redirect: The redirect mode to use: follow, error, or manual. In Chrome the default is follow (before Chrome 47 it defaulted to manual).
 *   referrer: A `web.USVString` specifying no-referrer, client, or a URL. The default is client.
 *   integrity: Contains the subresource integrity value of the request (e.g., sha256-BpfBw7ivV8q2jLiT13fxDYAe2tJllusRSZ273h2nFSE=).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/Request`
 */
web.Request.constructor$ = Request;
/**
 * Method.
 * 
 *   The arrayBuffer() method of the `web.Body` mixin takes a `web.Response`
 *   and reads it to completion. It returns a promise that resolves
 *   an `web.ArrayBuffer`.
 * 
 *   `response.arrayBuffer().then(function(buffer) {
 *   // do something with buffer
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/arrayBuffer`
 */
web.Request.array_buffer = (function web$Request$array_buffer(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43329 = arguments.length;
var i__42557__auto___43330 = (0);
while(true){
if((i__42557__auto___43330 < len__42556__auto___43329)){
args__42563__auto__.push((arguments[i__42557__auto___43330]));

var G__43331 = (i__42557__auto___43330 + (1));
i__42557__auto___43330 = G__43331;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Request.array_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Request.array_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.arrayBuffer,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Request.array_buffer.cljs$lang$maxFixedArity = (1);

web.Request.array_buffer.cljs$lang$applyTo = (function (seq43327){
var G__43328 = cljs.core.first.call(null,seq43327);
var seq43327__$1 = cljs.core.next.call(null,seq43327);
return web.Request.array_buffer.cljs$core$IFn$_invoke$arity$variadic(G__43328,seq43327__$1);
});

/**
 * Method.
 * 
 *   The blob() method of the `web.Body` mixin takes a `web.Response`
 *   and reads it to completion. It returns a promise that resolves
 *   a `web.Blob`.
 * 
 *   `response.blob().then(function(myBlob) {
 *   // do something with myBlob
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/blob`
 */
web.Request.blob = (function web$Request$blob(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43334 = arguments.length;
var i__42557__auto___43335 = (0);
while(true){
if((i__42557__auto___43335 < len__42556__auto___43334)){
args__42563__auto__.push((arguments[i__42557__auto___43335]));

var G__43336 = (i__42557__auto___43335 + (1));
i__42557__auto___43335 = G__43336;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Request.blob.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Request.blob.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.blob,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Request.blob.cljs$lang$maxFixedArity = (1);

web.Request.blob.cljs$lang$applyTo = (function (seq43332){
var G__43333 = cljs.core.first.call(null,seq43332);
var seq43332__$1 = cljs.core.next.call(null,seq43332);
return web.Request.blob.cljs$core$IFn$_invoke$arity$variadic(G__43333,seq43332__$1);
});

/**
 * Method.
 * 
 *   The clone() method of the `web.Request` interface creates a copy
 *   the current Request object.
 * 
 *   `var newRequest = request.clone();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/clone`
 */
web.Request.clone = (function web$Request$clone(this$){
return this$.clone();
});
/**
 * Method.
 * 
 *   The formData() method of the `web.Body` mixin takes a `web.Response`
 *   and reads it to completion. It returns a promise that resolves
 *   a `web.FormData` object.
 * 
 *   `response.formData()
 *   .then(function(formdata) {
 *   // do something with your formdata
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/formData`
 */
web.Request.form_data = (function web$Request$form_data(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43339 = arguments.length;
var i__42557__auto___43340 = (0);
while(true){
if((i__42557__auto___43340 < len__42556__auto___43339)){
args__42563__auto__.push((arguments[i__42557__auto___43340]));

var G__43341 = (i__42557__auto___43340 + (1));
i__42557__auto___43340 = G__43341;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Request.form_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Request.form_data.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.formData,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Request.form_data.cljs$lang$maxFixedArity = (1);

web.Request.form_data.cljs$lang$applyTo = (function (seq43337){
var G__43338 = cljs.core.first.call(null,seq43337);
var seq43337__$1 = cljs.core.next.call(null,seq43337);
return web.Request.form_data.cljs$core$IFn$_invoke$arity$variadic(G__43338,seq43337__$1);
});

/**
 * Method.
 * 
 *   The json() method of the `web.Body` mixin takes a `web.Response`
 *   and reads it to completion. It returns a promise that resolves
 *   the result of parsing the body text as `web.JSON`.
 * 
 *   `response.json().then(data => {
 *   // do something with your data
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/json`
 */
web.Request.json = (function web$Request$json(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43344 = arguments.length;
var i__42557__auto___43345 = (0);
while(true){
if((i__42557__auto___43345 < len__42556__auto___43344)){
args__42563__auto__.push((arguments[i__42557__auto___43345]));

var G__43346 = (i__42557__auto___43345 + (1));
i__42557__auto___43345 = G__43346;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Request.json.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Request.json.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.json,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Request.json.cljs$lang$maxFixedArity = (1);

web.Request.json.cljs$lang$applyTo = (function (seq43342){
var G__43343 = cljs.core.first.call(null,seq43342);
var seq43342__$1 = cljs.core.next.call(null,seq43342);
return web.Request.json.cljs$core$IFn$_invoke$arity$variadic(G__43343,seq43342__$1);
});

/**
 * Method.
 * 
 *   The text() method of the `web.Body` mixin takes a `web.Response`
 *   and reads it to completion. It returns a promise that resolves
 *   a `web.USVString` object (text). The response is always decoded
 *   UTF-8.
 * 
 *   `response.text().then(function (text) {
 *   // do something with the text response
 *   });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/text`
 */
web.Request.text = (function web$Request$text(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43349 = arguments.length;
var i__42557__auto___43350 = (0);
while(true){
if((i__42557__auto___43350 < len__42556__auto___43349)){
args__42563__auto__.push((arguments[i__42557__auto___43350]));

var G__43351 = (i__42557__auto___43350 + (1));
i__42557__auto___43350 = G__43351;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Request.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Request.text.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.text,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Request.text.cljs$lang$maxFixedArity = (1);

web.Request.text.cljs$lang$applyTo = (function (seq43347){
var G__43348 = cljs.core.first.call(null,seq43347);
var seq43347__$1 = cljs.core.next.call(null,seq43347);
return web.Request.text.cljs$core$IFn$_invoke$arity$variadic(G__43348,seq43347__$1);
});

/**
 * Property.
 * 
 *   The body read-only property of the `web.Body` mixin is a simple
 *   used to expose a `web.ReadableStream` of the body contents.
 * 
 *   `var stream = responseInstance.body;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/body`
 */
web.Request.body = (function web$Request$body(this$){
return this$.body();
});
/**
 * Property.
 * 
 *   The body read-only property of the `web.Body` mixin is a simple
 *   used to expose a `web.ReadableStream` of the body contents.
 * 
 *   `var stream = responseInstance.body;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/body`
 */
web.Request.set_body_BANG_ = (function web$Request$set_body_BANG_(this$,val){
return (this$["body"] = val);
});
/**
 * Property.
 * 
 *   The bodyUsed read-only property of the `web.Body` mixin contains
 *   `web.Boolean` that indicates whether the body has been read yet.
 * 
 *   `var myBodyUsed = response.bodyUsed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/bodyUsed`
 */
web.Request.body_used = (function web$Request$body_used(this$){
return this$.bodyUsed();
});
/**
 * Property.
 * 
 *   The bodyUsed read-only property of the `web.Body` mixin contains
 *   `web.Boolean` that indicates whether the body has been read yet.
 * 
 *   `var myBodyUsed = response.bodyUsed;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Body/bodyUsed`
 */
web.Request.set_body_used_BANG_ = (function web$Request$set_body_used_BANG_(this$,val){
return (this$["bodyUsed"] = val);
});
/**
 * Property.
 * 
 *   The cache read-only property of the `web.Request` interface contains
 *   cache mode of the request. It controls how the request will interact
 *   the browser's HTTP cache.
 * 
 *   `var currentCacheMode = request.cache;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/cache`
 */
web.Request.cache = (function web$Request$cache(this$){
return this$.cache();
});
/**
 * Property.
 * 
 *   The cache read-only property of the `web.Request` interface contains
 *   cache mode of the request. It controls how the request will interact
 *   the browser's HTTP cache.
 * 
 *   `var currentCacheMode = request.cache;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/cache`
 */
web.Request.set_cache_BANG_ = (function web$Request$set_cache_BANG_(this$,val){
return (this$["cache"] = val);
});
/**
 * Property.
 * 
 *   The deprecated context read-only property of the `web.Request`
 *   contains the context of the Request (e.g., audio, image, iframe).
 * 
 *   `var myContext = request.context;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/context`
 */
web.Request.context = (function web$Request$context(this$){
return this$.context();
});
/**
 * Property.
 * 
 *   The deprecated context read-only property of the `web.Request`
 *   contains the context of the Request (e.g., audio, image, iframe).
 * 
 *   `var myContext = request.context;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/context`
 */
web.Request.set_context_BANG_ = (function web$Request$set_context_BANG_(this$,val){
return (this$["context"] = val);
});
/**
 * Property.
 * 
 *   The credentials read-only property of the `web.Request` interface
 *   whether the user agent should send cookies from the other domain
 *   the case of cross-origin requests.
 * 
 *   `var myCred = request.credentials;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials`
 */
web.Request.credentials = (function web$Request$credentials(this$){
return this$.credentials();
});
/**
 * Property.
 * 
 *   The credentials read-only property of the `web.Request` interface
 *   whether the user agent should send cookies from the other domain
 *   the case of cross-origin requests.
 * 
 *   `var myCred = request.credentials;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials`
 */
web.Request.set_credentials_BANG_ = (function web$Request$set_credentials_BANG_(this$,val){
return (this$["credentials"] = val);
});
/**
 * Property.
 * 
 *   The destination read-only property of the `web.Request` interface
 *   a string describing the type of content being requested.
 * 
 *   `var destination = request.destination;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/destination`
 */
web.Request.destination = (function web$Request$destination(this$){
return this$.destination();
});
/**
 * Property.
 * 
 *   The headers read-only property of the `web.Request` interface
 *   the `web.Headers` object associated with the request.
 * 
 *   `var myHeaders = request.headers;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/headers`
 */
web.Request.headers = (function web$Request$headers(this$){
return this$.headers();
});
/**
 * Property.
 * 
 *   The headers read-only property of the `web.Request` interface
 *   the `web.Headers` object associated with the request.
 * 
 *   `var myHeaders = request.headers;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/headers`
 */
web.Request.set_headers_BANG_ = (function web$Request$set_headers_BANG_(this$,val){
return (this$["headers"] = val);
});
/**
 * Property.
 * 
 *   The integrity read-only property of the `web.Request` interface
 *   the subresource integrity value of the request.
 * 
 *   `var myIntegrity = request.integrity;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/integrity`
 */
web.Request.integrity = (function web$Request$integrity(this$){
return this$.integrity();
});
/**
 * Property.
 * 
 *   The integrity read-only property of the `web.Request` interface
 *   the subresource integrity value of the request.
 * 
 *   `var myIntegrity = request.integrity;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/integrity`
 */
web.Request.set_integrity_BANG_ = (function web$Request$set_integrity_BANG_(this$,val){
return (this$["integrity"] = val);
});
/**
 * Property.
 * 
 *   The method read-only property of the `web.Request` interface
 *   the request's method (GET, POST, etc.)
 * 
 *   `var myMethod = request.method;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/method`
 */
web.Request.method = (function web$Request$method(this$){
return this$.method();
});
/**
 * Property.
 * 
 *   The method read-only property of the `web.Request` interface
 *   the request's method (GET, POST, etc.)
 * 
 *   `var myMethod = request.method;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/method`
 */
web.Request.set_method_BANG_ = (function web$Request$set_method_BANG_(this$,val){
return (this$["method"] = val);
});
/**
 * Property.
 * 
 *   The mode read-only property of the `web.Request` interface contains
 *   mode of the request (e.g., cors, no-cors, same-origin, or navigate.)
 *   is used to determine if cross-origin requests lead to valid responses,
 *   which properties of the response are readable.
 * 
 *   `var myMode = request.mode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/mode`
 */
web.Request.mode = (function web$Request$mode(this$){
return this$.mode();
});
/**
 * Property.
 * 
 *   The mode read-only property of the `web.Request` interface contains
 *   mode of the request (e.g., cors, no-cors, same-origin, or navigate.)
 *   is used to determine if cross-origin requests lead to valid responses,
 *   which properties of the response are readable.
 * 
 *   `var myMode = request.mode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/mode`
 */
web.Request.set_mode_BANG_ = (function web$Request$set_mode_BANG_(this$,val){
return (this$["mode"] = val);
});
/**
 * Property.
 * 
 *   The redirect read-only property of the `web.Request` interface
 *   the mode for how redirects are handled.
 * 
 *   `var myRedirect = request.redirect;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/redirect`
 */
web.Request.redirect = (function web$Request$redirect(this$){
return this$.redirect();
});
/**
 * Property.
 * 
 *   The redirect read-only property of the `web.Request` interface
 *   the mode for how redirects are handled.
 * 
 *   `var myRedirect = request.redirect;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/redirect`
 */
web.Request.set_redirect_BANG_ = (function web$Request$set_redirect_BANG_(this$,val){
return (this$["redirect"] = val);
});
/**
 * Property.
 * 
 *   The referrer read-only property of the `web.Request` interface
 *   set by the user agent to be the referrer of the Request. (e.g.,
 *   no-referrer, or a URL.)
 * 
 *   `var myReferrer = request.referrer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/referrer`
 */
web.Request.referrer = (function web$Request$referrer(this$){
return this$.referrer();
});
/**
 * Property.
 * 
 *   The referrer read-only property of the `web.Request` interface
 *   set by the user agent to be the referrer of the Request. (e.g.,
 *   no-referrer, or a URL.)
 * 
 *   `var myReferrer = request.referrer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/referrer`
 */
web.Request.set_referrer_BANG_ = (function web$Request$set_referrer_BANG_(this$,val){
return (this$["referrer"] = val);
});
/**
 * Property.
 * 
 *   The referrerPolicy read-only property of the `web.Request` interface
 *   the referrer policy, which governs what referrer information,
 *   in the `web.Referer` header, should be included with the request.
 * 
 *   `var myReferrerPolicy = request.referrerPolicy;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/referrerPolicy`
 */
web.Request.referrer_policy = (function web$Request$referrer_policy(this$){
return this$.referrerPolicy();
});
/**
 * Property.
 * 
 *   The referrerPolicy read-only property of the `web.Request` interface
 *   the referrer policy, which governs what referrer information,
 *   in the `web.Referer` header, should be included with the request.
 * 
 *   `var myReferrerPolicy = request.referrerPolicy;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/referrerPolicy`
 */
web.Request.set_referrer_policy_BANG_ = (function web$Request$set_referrer_policy_BANG_(this$,val){
return (this$["referrerPolicy"] = val);
});
/**
 * Property.
 * 
 *   The url read-only property of the `web.Request` interface contains
 *   URL of the request.
 * 
 *   `var myURL = request.url;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/url`
 */
web.Request.url = (function web$Request$url(this$){
return this$.url();
});
/**
 * Property.
 * 
 *   The url read-only property of the `web.Request` interface contains
 *   URL of the request.
 * 
 *   `var myURL = request.url;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Request/url`
 */
web.Request.set_url_BANG_ = (function web$Request$set_url_BANG_(this$,val){
return (this$["url"] = val);
});

//# sourceMappingURL=Request.js.map?rel=1565798805786
