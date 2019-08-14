// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.AuthenticatorAttestationResponse');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   getTransports() is a method of the `web.AuthenticatorAttestationResponse`
 *   that returns an `web.Array` containing strings describing the
 *   transports which may be used by the authenticator.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse/getTransports`
 */
web.AuthenticatorAttestationResponse.get_transports = (function web$AuthenticatorAttestationResponse$get_transports(var_args){
var args__42563__auto__ = [];
var len__42556__auto___52324 = arguments.length;
var i__42557__auto___52325 = (0);
while(true){
if((i__42557__auto___52325 < len__42556__auto___52324)){
args__42563__auto__.push((arguments[i__42557__auto___52325]));

var G__52326 = (i__42557__auto___52325 + (1));
i__42557__auto___52325 = G__52326;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.AuthenticatorAttestationResponse.get_transports.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.AuthenticatorAttestationResponse.get_transports.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getTransports,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.AuthenticatorAttestationResponse.get_transports.cljs$lang$maxFixedArity = (1);

web.AuthenticatorAttestationResponse.get_transports.cljs$lang$applyTo = (function (seq52322){
var G__52323 = cljs.core.first.call(null,seq52322);
var seq52322__$1 = cljs.core.next.call(null,seq52322);
return web.AuthenticatorAttestationResponse.get_transports.cljs$core$IFn$_invoke$arity$variadic(G__52323,seq52322__$1);
});

/**
 * Property.
 * 
 *   The attestationObject property of the `web.AuthenticatorAttestationResponse`
 *   returns an `web.ArrayBuffer` containing the new public key, as
 *   as signature over the entire attestationObject with a private
 *   that is stored in the authenticator when it is manufactured.
 * 
 *   `attestObj = authenticatorAttestationResponse.attestationObject`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse/attestationObject`
 */
web.AuthenticatorAttestationResponse.attestation_object = (function web$AuthenticatorAttestationResponse$attestation_object(this$){
return this$.attestationObject();
});
/**
 * Property.
 * 
 *   The attestationObject property of the `web.AuthenticatorAttestationResponse`
 *   returns an `web.ArrayBuffer` containing the new public key, as
 *   as signature over the entire attestationObject with a private
 *   that is stored in the authenticator when it is manufactured.
 * 
 *   `attestObj = authenticatorAttestationResponse.attestationObject`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse/attestationObject`
 */
web.AuthenticatorAttestationResponse.set_attestation_object_BANG_ = (function web$AuthenticatorAttestationResponse$set_attestation_object_BANG_(this$,val){
return (this$["attestationObject"] = val);
});

//# sourceMappingURL=AuthenticatorAttestationResponse.js.map?rel=1565798851267
