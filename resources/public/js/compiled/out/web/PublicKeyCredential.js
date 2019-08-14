// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PublicKeyCredential');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   getClientExtensionResults() is a method of the `web.PublicKeyCredential`
 *   that returns an `web.ArrayBuffer` which contains a map between
 *   extensions identifiers and their results after having being processed
 *   the client.
 * 
 *   `mapArrayBuffer = publicKeyCredential.getClientExtensionResults()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/getClientExtensionResults`
 */
web.PublicKeyCredential.get_client_extension_results = (function web$PublicKeyCredential$get_client_extension_results(this$){
return this$.getClientExtensionResults();
});
/**
 * Method.
 * 
 *   isUserVerifyingPlatformAuthenticatorAvailable() is a static method
 *   the `web.PublicKeyCredential` interface that returns a `web.Promise`
 *   resolves to true if a user-verifying platform authenticator is
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable`
 */
web.PublicKeyCredential.is_user_verifying_platform_authenticator_available = (function web$PublicKeyCredential$is_user_verifying_platform_authenticator_available(var_args){
var args__42563__auto__ = [];
var len__42556__auto___50307 = arguments.length;
var i__42557__auto___50308 = (0);
while(true){
if((i__42557__auto___50308 < len__42556__auto___50307)){
args__42563__auto__.push((arguments[i__42557__auto___50308]));

var G__50309 = (i__42557__auto___50308 + (1));
i__42557__auto___50308 = G__50309;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return web.PublicKeyCredential.is_user_verifying_platform_authenticator_available.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

web.PublicKeyCredential.is_user_verifying_platform_authenticator_available.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.isUserVerifyingPlatformAuthenticatorAvailable,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

web.PublicKeyCredential.is_user_verifying_platform_authenticator_available.cljs$lang$maxFixedArity = (1);

web.PublicKeyCredential.is_user_verifying_platform_authenticator_available.cljs$lang$applyTo = (function (seq50305){
var G__50306 = cljs.core.first.call(null,seq50305);
var seq50305__$1 = cljs.core.next.call(null,seq50305);
return web.PublicKeyCredential.is_user_verifying_platform_authenticator_available.cljs$core$IFn$_invoke$arity$variadic(G__50306,seq50305__$1);
});

/**
 * Property.
 * 
 *   The id read-only property of the `web.PublicKeyCredential` interface
 *   a `dom.DOMString`, inherited from `web.Credential`, which represents
 *   identifier of the current PublicKeyCredential instance.
 * 
 *   `id = publicKeyCredential.id`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/id`
 */
web.PublicKeyCredential.id = (function web$PublicKeyCredential$id(this$){
return this$.id();
});
/**
 * Property.
 * 
 *   The id read-only property of the `web.PublicKeyCredential` interface
 *   a `dom.DOMString`, inherited from `web.Credential`, which represents
 *   identifier of the current PublicKeyCredential instance.
 * 
 *   `id = publicKeyCredential.id`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/id`
 */
web.PublicKeyCredential.set_id_BANG_ = (function web$PublicKeyCredential$set_id_BANG_(this$,val){
return (this$["id"] = val);
});
/**
 * Property.
 * 
 *   The rawId read-only property of the `web.PublicKeyCredential`
 *   is an `web.ArrayBuffer` object containing the identifier of the
 * 
 *   `rawId = publicKeyCredential.rawId`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/rawId`
 */
web.PublicKeyCredential.raw_id = (function web$PublicKeyCredential$raw_id(this$){
return this$.rawId();
});
/**
 * Property.
 * 
 *   The rawId read-only property of the `web.PublicKeyCredential`
 *   is an `web.ArrayBuffer` object containing the identifier of the
 * 
 *   `rawId = publicKeyCredential.rawId`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/rawId`
 */
web.PublicKeyCredential.set_raw_id_BANG_ = (function web$PublicKeyCredential$set_raw_id_BANG_(this$,val){
return (this$["rawId"] = val);
});
/**
 * Property.
 * 
 *   The response read-only property of the `web.PublicKeyCredential`
 *   is an `web.AuthenticatorResponse` object which is sent from the
 *   to the user agent for the creation/fetching of credentials. The
 *   contained in this response will be used by the relying party's
 *   to verify the demand is legitimate.
 * 
 *   `response = publicKeyCredential.response`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/response`
 */
web.PublicKeyCredential.response = (function web$PublicKeyCredential$response(this$){
return this$.response();
});
/**
 * Property.
 * 
 *   The response read-only property of the `web.PublicKeyCredential`
 *   is an `web.AuthenticatorResponse` object which is sent from the
 *   to the user agent for the creation/fetching of credentials. The
 *   contained in this response will be used by the relying party's
 *   to verify the demand is legitimate.
 * 
 *   `response = publicKeyCredential.response`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/response`
 */
web.PublicKeyCredential.set_response_BANG_ = (function web$PublicKeyCredential$set_response_BANG_(this$,val){
return (this$["response"] = val);
});

//# sourceMappingURL=PublicKeyCredential.js.map?rel=1565798837935
