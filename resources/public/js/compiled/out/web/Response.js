// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Response');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The Response() constructor creates a new `web.Response` object.
 * 
 *   body Optional
 *   An object defining a body for the response. This can be null, or one of:
 * 
 *   `web.Blob`
 *   `web.BufferSource`
 *   `web.FormData`
 *   `web.ReadableStream`
 *   `web.URLSearchParams`
 *   `web.USVString`
 * 
 * 
 *   init Optional
 *   An options object containing any custom settings that you want to apply to the response. The possible options are:
 * 
 *   status: The status code for the reponse, e.g., 200.
 *   statusText: The status message associated with the status code, e.g., OK.
 *   headers: Any headers you want to add to your response, contained within a `web.Headers` object or object literal of `web.ByteString` key/value pairs (see HTTP headers for a reference).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/Response`
 */
web.Response.constructor$ = Response;
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
web.Response.array_buffer = (function web$Response$array_buffer(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44859 = arguments.length;
var i__42557__auto___44860 = (0);
while(true){
if((i__42557__auto___44860 < len__42556__auto___44859)){
args__42563__auto__.push((arguments[i__42557__auto___44860]));

var G__44861 = (i__42557__auto___44860 + (1));
i__42557__auto___44860 = G__44861;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Response.array_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Response.array_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.arrayBuffer,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Response.array_buffer.cljs$lang$maxFixedArity = (1);

web.Response.array_buffer.cljs$lang$applyTo = (function (seq44857){
var G__44858 = cljs.core.first.call(null,seq44857);
var seq44857__$1 = cljs.core.next.call(null,seq44857);
return web.Response.array_buffer.cljs$core$IFn$_invoke$arity$variadic(G__44858,seq44857__$1);
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
web.Response.blob = (function web$Response$blob(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44864 = arguments.length;
var i__42557__auto___44865 = (0);
while(true){
if((i__42557__auto___44865 < len__42556__auto___44864)){
args__42563__auto__.push((arguments[i__42557__auto___44865]));

var G__44866 = (i__42557__auto___44865 + (1));
i__42557__auto___44865 = G__44866;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Response.blob.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Response.blob.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.blob,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Response.blob.cljs$lang$maxFixedArity = (1);

web.Response.blob.cljs$lang$applyTo = (function (seq44862){
var G__44863 = cljs.core.first.call(null,seq44862);
var seq44862__$1 = cljs.core.next.call(null,seq44862);
return web.Response.blob.cljs$core$IFn$_invoke$arity$variadic(G__44863,seq44862__$1);
});

/**
 * Method.
 * 
 *   The clone() method of the `web.Response` interface creates a
 *   of a response object, identical in every way, but stored in a
 *   variable.
 * 
 *   `var response2 = response1.clone();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/clone`
 */
web.Response.clone = (function web$Response$clone(this$){
return this$.clone();
});
/**
 * Method.
 * 
 *   The error() method of the `web.Response` interface returns a
 *   Response object associated with a network error.
 * 
 *   `var errorResponse = Response.error();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/error`
 */
web.Response.error = (function web$Response$error(this$){
return this$.error();
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
web.Response.form_data = (function web$Response$form_data(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44869 = arguments.length;
var i__42557__auto___44870 = (0);
while(true){
if((i__42557__auto___44870 < len__42556__auto___44869)){
args__42563__auto__.push((arguments[i__42557__auto___44870]));

var G__44871 = (i__42557__auto___44870 + (1));
i__42557__auto___44870 = G__44871;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Response.form_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Response.form_data.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.formData,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Response.form_data.cljs$lang$maxFixedArity = (1);

web.Response.form_data.cljs$lang$applyTo = (function (seq44867){
var G__44868 = cljs.core.first.call(null,seq44867);
var seq44867__$1 = cljs.core.next.call(null,seq44867);
return web.Response.form_data.cljs$core$IFn$_invoke$arity$variadic(G__44868,seq44867__$1);
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
web.Response.json = (function web$Response$json(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44874 = arguments.length;
var i__42557__auto___44875 = (0);
while(true){
if((i__42557__auto___44875 < len__42556__auto___44874)){
args__42563__auto__.push((arguments[i__42557__auto___44875]));

var G__44876 = (i__42557__auto___44875 + (1));
i__42557__auto___44875 = G__44876;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Response.json.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Response.json.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.json,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Response.json.cljs$lang$maxFixedArity = (1);

web.Response.json.cljs$lang$applyTo = (function (seq44872){
var G__44873 = cljs.core.first.call(null,seq44872);
var seq44872__$1 = cljs.core.next.call(null,seq44872);
return web.Response.json.cljs$core$IFn$_invoke$arity$variadic(G__44873,seq44872__$1);
});

/**
 * Method.
 * 
 *   The redirect() method of the `web.Response` interface returns
 *   Response resulting in a redirect to the specified URL.
 * 
 *   `var response = Response.redirect(url, status);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/redirect`
 */
web.Response.redirect = (function web$Response$redirect(this$,url,status){
return this$.redirect(url,status);
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
web.Response.text = (function web$Response$text(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44879 = arguments.length;
var i__42557__auto___44880 = (0);
while(true){
if((i__42557__auto___44880 < len__42556__auto___44879)){
args__42563__auto__.push((arguments[i__42557__auto___44880]));

var G__44881 = (i__42557__auto___44880 + (1));
i__42557__auto___44880 = G__44881;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Response.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Response.text.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.text,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Response.text.cljs$lang$maxFixedArity = (1);

web.Response.text.cljs$lang$applyTo = (function (seq44877){
var G__44878 = cljs.core.first.call(null,seq44877);
var seq44877__$1 = cljs.core.next.call(null,seq44877);
return web.Response.text.cljs$core$IFn$_invoke$arity$variadic(G__44878,seq44877__$1);
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
web.Response.body = (function web$Response$body(this$){
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
web.Response.set_body_BANG_ = (function web$Response$set_body_BANG_(this$,val){
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
web.Response.body_used = (function web$Response$body_used(this$){
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
web.Response.set_body_used_BANG_ = (function web$Response$set_body_used_BANG_(this$,val){
return (this$["bodyUsed"] = val);
});
/**
 * Property.
 * 
 *   The headers read-only property of the `web.Response` interface
 *   the `web.Headers` object associated with the response.
 * 
 *   `var myHeaders = response.headers;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/headers`
 */
web.Response.headers = (function web$Response$headers(this$){
return this$.headers();
});
/**
 * Property.
 * 
 *   The headers read-only property of the `web.Response` interface
 *   the `web.Headers` object associated with the response.
 * 
 *   `var myHeaders = response.headers;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/headers`
 */
web.Response.set_headers_BANG_ = (function web$Response$set_headers_BANG_(this$,val){
return (this$["headers"] = val);
});
/**
 * Property.
 * 
 *   The ok read-only property of the `web.Response` interface contains
 *   Boolean stating whether the response was successful (status in
 *   range 200-299) or not.
 * 
 *   `var myOK = response.ok;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/ok`
 */
web.Response.ok = (function web$Response$ok(this$){
return this$.ok();
});
/**
 * Property.
 * 
 *   The ok read-only property of the `web.Response` interface contains
 *   Boolean stating whether the response was successful (status in
 *   range 200-299) or not.
 * 
 *   `var myOK = response.ok;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/ok`
 */
web.Response.set_ok_BANG_ = (function web$Response$set_ok_BANG_(this$,val){
return (this$["ok"] = val);
});
/**
 * Property.
 * 
 *   The read-only redirected property of the `web.Response` interface
 *   whether or not the response is the result of a request you made
 *   was redirected.
 * 
 *   `var isRedirected = Response.redirected;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/redirected`
 */
web.Response.redirected = (function web$Response$redirected(this$){
return this$.redirected();
});
/**
 * Property.
 * 
 *   The status read-only property of the `web.Response` interface
 *   the status code of the response (e.g., 200 for a success).
 * 
 *   `var myStatus = response.status;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/status`
 */
web.Response.status = (function web$Response$status(this$){
return this$.status();
});
/**
 * Property.
 * 
 *   The status read-only property of the `web.Response` interface
 *   the status code of the response (e.g., 200 for a success).
 * 
 *   `var myStatus = response.status;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/status`
 */
web.Response.set_status_BANG_ = (function web$Response$set_status_BANG_(this$,val){
return (this$["status"] = val);
});
/**
 * Property.
 * 
 *   The statusText read-only property of the `web.Response` interface
 *   the status message corresponding to the status code (e.g., OK
 *   200).
 * 
 *   `var myStatusText = response.statusText;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/statusText`
 */
web.Response.status_text = (function web$Response$status_text(this$){
return this$.statusText();
});
/**
 * Property.
 * 
 *   The statusText read-only property of the `web.Response` interface
 *   the status message corresponding to the status code (e.g., OK
 *   200).
 * 
 *   `var myStatusText = response.statusText;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/statusText`
 */
web.Response.set_status_text_BANG_ = (function web$Response$set_status_text_BANG_(this$,val){
return (this$["statusText"] = val);
});
/**
 * Property.
 * 
 *   The type read-only property of the `web.Response` interface contains
 *   type of the response. It can be one of the following:
 * 
 *   `var myType = response.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/type`
 */
web.Response.type = (function web$Response$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   The type read-only property of the `web.Response` interface contains
 *   type of the response. It can be one of the following:
 * 
 *   `var myType = response.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/type`
 */
web.Response.set_type_BANG_ = (function web$Response$set_type_BANG_(this$,val){
return (this$["type"] = val);
});
/**
 * Property.
 * 
 *   The url read-only property of the `web.Response` interface contains
 *   URL of the response. The value of the url property will be the
 *   URL obtained after any redirects.
 * 
 *   `var myURL = response.url;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/url`
 */
web.Response.url = (function web$Response$url(this$){
return this$.url();
});
/**
 * Property.
 * 
 *   The url read-only property of the `web.Response` interface contains
 *   URL of the response. The value of the url property will be the
 *   URL obtained after any redirects.
 * 
 *   `var myURL = response.url;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/url`
 */
web.Response.set_url_BANG_ = (function web$Response$set_url_BANG_(this$,val){
return (this$["url"] = val);
});
/**
 * Property.
 * 
 *   The useFinalURL property of the `web.Response` interface contains
 *   boolean stating whether this is the final URL of the response.
 * 
 *   `var isfinalURL = Response.useFinalURL;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/useFinalURL`
 */
web.Response.use_final_url = (function web$Response$use_final_url(this$){
return this$.useFinalURL();
});
/**
 * Property.
 * 
 *   The useFinalURL property of the `web.Response` interface contains
 *   boolean stating whether this is the final URL of the response.
 * 
 *   `var isfinalURL = Response.useFinalURL;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Response/useFinalURL`
 */
web.Response.set_use_final_url_BANG_ = (function web$Response$set_use_final_url_BANG_(this$,val){
return (this$["useFinalURL"] = val);
});

//# sourceMappingURL=Response.js.map?rel=1565798817366
