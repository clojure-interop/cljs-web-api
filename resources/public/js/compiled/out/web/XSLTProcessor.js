// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.XSLTProcessor');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   Node Node
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Node`
 */
web.XSLTProcessor.node = (function web$XSLTProcessor$node(var_args){
var args__42563__auto__ = [];
var len__42556__auto___48040 = arguments.length;
var i__42557__auto___48041 = (0);
while(true){
if((i__42557__auto___48041 < len__42556__auto___48040)){
args__42563__auto__.push((arguments[i__42557__auto___48041]));

var G__48042 = (i__42557__auto___48041 + (1));
i__42557__auto___48041 = G__48042;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.XSLTProcessor.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.XSLTProcessor.node.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.Node,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.XSLTProcessor.node.cljs$lang$maxFixedArity = (1);

web.XSLTProcessor.node.cljs$lang$applyTo = (function (seq48038){
var G__48039 = cljs.core.first.call(null,seq48038);
var seq48038__$1 = cljs.core.next.call(null,seq48038);
return web.XSLTProcessor.node.cljs$core$IFn$_invoke$arity$variadic(G__48039,seq48038__$1);
});

/**
 * Method.
 * 
 *   The DocumentFragment interface represents a minimal document
 *   that has no parent. It is used as a lightweight version of `web.Document`
 *   stores a segment of a document structure comprised of nodes just
 *   a standard document. The key difference is that because the document
 *   isn't part of the active document tree structure, changes made
 *   the fragment don't affect the document, cause reflow, or incur
 *   performance impact that can occur when changes are made.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment`
 */
web.XSLTProcessor.document_fragment = (function web$XSLTProcessor$document_fragment(var_args){
var args__42563__auto__ = [];
var len__42556__auto___48045 = arguments.length;
var i__42557__auto___48046 = (0);
while(true){
if((i__42557__auto___48046 < len__42556__auto___48045)){
args__42563__auto__.push((arguments[i__42557__auto___48046]));

var G__48047 = (i__42557__auto___48046 + (1));
i__42557__auto___48046 = G__48047;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.XSLTProcessor.document_fragment.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.XSLTProcessor.document_fragment.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.DocumentFragment,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.XSLTProcessor.document_fragment.cljs$lang$maxFixedArity = (1);

web.XSLTProcessor.document_fragment.cljs$lang$applyTo = (function (seq48043){
var G__48044 = cljs.core.first.call(null,seq48043);
var seq48043__$1 = cljs.core.next.call(null,seq48043);
return web.XSLTProcessor.document_fragment.cljs$core$IFn$_invoke$arity$variadic(G__48044,seq48043__$1);
});

/**
 * Method.
 * 
 *   The Document interface represents any web page loaded in the
 *   and serves as an entry point into the web page's content, which
 *   the DOM tree.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Document`
 */
web.XSLTProcessor.document = (function web$XSLTProcessor$document(var_args){
var args__42563__auto__ = [];
var len__42556__auto___48050 = arguments.length;
var i__42557__auto___48051 = (0);
while(true){
if((i__42557__auto___48051 < len__42556__auto___48050)){
args__42563__auto__.push((arguments[i__42557__auto___48051]));

var G__48052 = (i__42557__auto___48051 + (1));
i__42557__auto___48051 = G__48052;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.XSLTProcessor.document.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.XSLTProcessor.document.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.Document,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.XSLTProcessor.document.cljs$lang$maxFixedArity = (1);

web.XSLTProcessor.document.cljs$lang$applyTo = (function (seq48048){
var G__48049 = cljs.core.first.call(null,seq48048);
var seq48048__$1 = cljs.core.next.call(null,seq48048);
return web.XSLTProcessor.document.cljs$core$IFn$_invoke$arity$variadic(G__48049,seq48048__$1);
});

/**
 * Method.
 * 
 *   The String global object is a constructor for strings or a sequence
 *   characters.
 * 
 *   `String literals take the forms:
 * 
 * 
 * 
 *   'string text'
 *   \"string text\"
 *   \"中文 español Deutsch English देवनागरी العربية português বাংলা русский 日本語 norsk bokmål ਪੰਜਾਬੀ 한국어 தமிழ் עברית\"
 * 
 *   Strings can also be created using the String global object directly:
 * 
 * 
 * 
 *   String(thing)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String`
 */
web.XSLTProcessor.string = (function web$XSLTProcessor$string(var_args){
var args__42563__auto__ = [];
var len__42556__auto___48055 = arguments.length;
var i__42557__auto___48056 = (0);
while(true){
if((i__42557__auto___48056 < len__42556__auto___48055)){
args__42563__auto__.push((arguments[i__42557__auto___48056]));

var G__48057 = (i__42557__auto___48056 + (1));
i__42557__auto___48056 = G__48057;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.XSLTProcessor.string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.XSLTProcessor.string.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.String,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.XSLTProcessor.string.cljs$lang$maxFixedArity = (1);

web.XSLTProcessor.string.cljs$lang$applyTo = (function (seq48053){
var G__48054 = cljs.core.first.call(null,seq48053);
var seq48053__$1 = cljs.core.next.call(null,seq48053);
return web.XSLTProcessor.string.cljs$core$IFn$_invoke$arity$variadic(G__48054,seq48053__$1);
});


//# sourceMappingURL=XSLTProcessor.js.map?rel=1565798825363
