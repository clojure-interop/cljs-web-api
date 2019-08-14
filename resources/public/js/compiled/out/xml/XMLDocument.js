// Compiled by ClojureScript 1.9.946 {}
goog.provide('xml.XMLDocument');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   document.load() is a part of an old version of the W3C DOM Level
 *   Load & Save module. Can be used with `web.document.async` to
 *   whether the request is synchronous or asynchronous (the default).
 *   of at least Gecko 1.9, this no longer supports cross-site loading
 *   documents (Use `xml.XMLHttpRequest` or `web.fetch()` instead).
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLDocument/load`
 */
xml.XMLDocument.load = (function xml$XMLDocument$load(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52885 = arguments.length;
var i__42557__auto___52886 = (0);
while(true){
if((i__42557__auto___52886 < len__42556__auto___52885)){
args__42563__auto__.push((arguments[i__42557__auto___52886]));

var G__52887 = (i__42557__auto___52886 + (1));
i__42557__auto___52886 = G__52887;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return xml.XMLDocument.load.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

xml.XMLDocument.load.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.load,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

xml.XMLDocument.load.cljs$lang$maxFixedArity = (1);

xml.XMLDocument.load.cljs$lang$applyTo = (function (seq52883){
var G__52884 = cljs.core.first.call(null,seq52883);
var seq52883__$1 = cljs.core.next.call(null,seq52883);
return xml.XMLDocument.load.cljs$core$IFn$_invoke$arity$variadic(G__52884,seq52883__$1);
});

/**
 * Property.
 * 
 *   document.async can be set to indicate whether a `xml.XMLDocument.load()`
 *   should be an asynchronous or synchronous request. true is the
 *   value, indicating that documents should be loaded asynchronously.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLDocument/async`
 */
xml.XMLDocument.async = (function xml$XMLDocument$async(this$){
return this$.async();
});
/**
 * Property.
 * 
 *   document.async can be set to indicate whether a `xml.XMLDocument.load()`
 *   should be an asynchronous or synchronous request. true is the
 *   value, indicating that documents should be loaded asynchronously.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/XMLDocument/async`
 */
xml.XMLDocument.set_async_BANG_ = (function xml$XMLDocument$set_async_BANG_(this$,val){
return (this$["async"] = val);
});

//# sourceMappingURL=XMLDocument.js.map?rel=1565798860148
