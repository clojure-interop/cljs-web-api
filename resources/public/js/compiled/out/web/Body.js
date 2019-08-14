// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.Body');
goog.require('cljs.core');
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
web.Body.array_buffer = (function web$Body$array_buffer(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50324 = arguments.length;
var i__42557__auto___50325 = (0);
while(true){
if((i__42557__auto___50325 < len__42556__auto___50324)){
args__42563__auto__.push((arguments[i__42557__auto___50325]));

var G__50326 = (i__42557__auto___50325 + (1));
i__42557__auto___50325 = G__50326;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Body.array_buffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Body.array_buffer.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.arrayBuffer,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Body.array_buffer.cljs$lang$maxFixedArity = (1);

web.Body.array_buffer.cljs$lang$applyTo = (function (seq50322){
var G__50323 = cljs.core.first.call(null,seq50322);
var seq50322__$1 = cljs.core.next.call(null,seq50322);
return web.Body.array_buffer.cljs$core$IFn$_invoke$arity$variadic(G__50323,seq50322__$1);
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
web.Body.blob = (function web$Body$blob(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50329 = arguments.length;
var i__42557__auto___50330 = (0);
while(true){
if((i__42557__auto___50330 < len__42556__auto___50329)){
args__42563__auto__.push((arguments[i__42557__auto___50330]));

var G__50331 = (i__42557__auto___50330 + (1));
i__42557__auto___50330 = G__50331;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Body.blob.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Body.blob.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.blob,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Body.blob.cljs$lang$maxFixedArity = (1);

web.Body.blob.cljs$lang$applyTo = (function (seq50327){
var G__50328 = cljs.core.first.call(null,seq50327);
var seq50327__$1 = cljs.core.next.call(null,seq50327);
return web.Body.blob.cljs$core$IFn$_invoke$arity$variadic(G__50328,seq50327__$1);
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
web.Body.form_data = (function web$Body$form_data(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50334 = arguments.length;
var i__42557__auto___50335 = (0);
while(true){
if((i__42557__auto___50335 < len__42556__auto___50334)){
args__42563__auto__.push((arguments[i__42557__auto___50335]));

var G__50336 = (i__42557__auto___50335 + (1));
i__42557__auto___50335 = G__50336;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Body.form_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Body.form_data.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.formData,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Body.form_data.cljs$lang$maxFixedArity = (1);

web.Body.form_data.cljs$lang$applyTo = (function (seq50332){
var G__50333 = cljs.core.first.call(null,seq50332);
var seq50332__$1 = cljs.core.next.call(null,seq50332);
return web.Body.form_data.cljs$core$IFn$_invoke$arity$variadic(G__50333,seq50332__$1);
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
web.Body.json = (function web$Body$json(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50339 = arguments.length;
var i__42557__auto___50340 = (0);
while(true){
if((i__42557__auto___50340 < len__42556__auto___50339)){
args__42563__auto__.push((arguments[i__42557__auto___50340]));

var G__50341 = (i__42557__auto___50340 + (1));
i__42557__auto___50340 = G__50341;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Body.json.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Body.json.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.json,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Body.json.cljs$lang$maxFixedArity = (1);

web.Body.json.cljs$lang$applyTo = (function (seq50337){
var G__50338 = cljs.core.first.call(null,seq50337);
var seq50337__$1 = cljs.core.next.call(null,seq50337);
return web.Body.json.cljs$core$IFn$_invoke$arity$variadic(G__50338,seq50337__$1);
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
web.Body.text = (function web$Body$text(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50344 = arguments.length;
var i__42557__auto___50345 = (0);
while(true){
if((i__42557__auto___50345 < len__42556__auto___50344)){
args__42563__auto__.push((arguments[i__42557__auto___50345]));

var G__50346 = (i__42557__auto___50345 + (1));
i__42557__auto___50345 = G__50346;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.Body.text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.Body.text.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.text,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.Body.text.cljs$lang$maxFixedArity = (1);

web.Body.text.cljs$lang$applyTo = (function (seq50342){
var G__50343 = cljs.core.first.call(null,seq50342);
var seq50342__$1 = cljs.core.next.call(null,seq50342);
return web.Body.text.cljs$core$IFn$_invoke$arity$variadic(G__50343,seq50342__$1);
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
web.Body.body = (function web$Body$body(this$){
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
web.Body.set_body_BANG_ = (function web$Body$set_body_BANG_(this$,val){
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
web.Body.body_used = (function web$Body$body_used(this$){
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
web.Body.set_body_used_BANG_ = (function web$Body$set_body_used_BANG_(this$,val){
return (this$["bodyUsed"] = val);
});

//# sourceMappingURL=Body.js.map?rel=1565798838229
