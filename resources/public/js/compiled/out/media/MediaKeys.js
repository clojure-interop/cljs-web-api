// Compiled by ClojureScript 1.9.946 {}
goog.provide('media.MediaKeys');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The MediaKeys.createSession() method returns a new `media.MediaKeySession`
 *   which represents a context for message exchange with a content
 *   module (CDM).
 * 
 *   `​var mediaKeySessionObject = MediaKeys.createSession([MediaKeySessionType]);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeys/createSession`
 */
media.MediaKeys.create_session = (function media$MediaKeys$create_session(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50194 = arguments.length;
var i__42557__auto___50195 = (0);
while(true){
if((i__42557__auto___50195 < len__42556__auto___50194)){
args__42563__auto__.push((arguments[i__42557__auto___50195]));

var G__50196 = (i__42557__auto___50195 + (1));
i__42557__auto___50195 = G__50196;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return media.MediaKeys.create_session.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

media.MediaKeys.create_session.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.createSession,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

media.MediaKeys.create_session.cljs$lang$maxFixedArity = (1);

media.MediaKeys.create_session.cljs$lang$applyTo = (function (seq50192){
var G__50193 = cljs.core.first.call(null,seq50192);
var seq50192__$1 = cljs.core.next.call(null,seq50192);
return media.MediaKeys.create_session.cljs$core$IFn$_invoke$arity$variadic(G__50193,seq50192__$1);
});

/**
 * Method.
 * 
 *   The MediaKeys.setServerCertificate() method a `web.Promise` to
 *   server certificate to be used to encrypt messages to the license
 * 
 *   `MediaKeys.setServerCertificate([MediaKeySessionType]).then(function() { ... });`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaKeys/setServerCertificate`
 */
media.MediaKeys.set_server_certificate = (function media$MediaKeys$set_server_certificate(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50199 = arguments.length;
var i__42557__auto___50200 = (0);
while(true){
if((i__42557__auto___50200 < len__42556__auto___50199)){
args__42563__auto__.push((arguments[i__42557__auto___50200]));

var G__50201 = (i__42557__auto___50200 + (1));
i__42557__auto___50200 = G__50201;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return media.MediaKeys.set_server_certificate.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

media.MediaKeys.set_server_certificate.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.setServerCertificate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

media.MediaKeys.set_server_certificate.cljs$lang$maxFixedArity = (1);

media.MediaKeys.set_server_certificate.cljs$lang$applyTo = (function (seq50197){
var G__50198 = cljs.core.first.call(null,seq50197);
var seq50197__$1 = cljs.core.next.call(null,seq50197);
return media.MediaKeys.set_server_certificate.cljs$core$IFn$_invoke$arity$variadic(G__50198,seq50197__$1);
});


//# sourceMappingURL=MediaKeys.js.map?rel=1565798836817
