// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.AuthenticatorAssertionResponse');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The authenticatorData property of the `web.AuthenticatorAssertionResponse`
 *   returns an `web.ArrayBuffer` containing information from the
 *   such as the Relying Party ID Hash (rpIdHash), a signature counter,
 *   of user presence, user verification flags, and any extensions
 *   by the authenticator.
 * 
 *   `var authnrData = authenticatorAssertionResponse.authenticatorData;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData`
 */
web.AuthenticatorAssertionResponse.authenticator_data = (function web$AuthenticatorAssertionResponse$authenticator_data(this$){
return this$.authenticatorData();
});
/**
 * Property.
 * 
 *   The authenticatorData property of the `web.AuthenticatorAssertionResponse`
 *   returns an `web.ArrayBuffer` containing information from the
 *   such as the Relying Party ID Hash (rpIdHash), a signature counter,
 *   of user presence, user verification flags, and any extensions
 *   by the authenticator.
 * 
 *   `var authnrData = authenticatorAssertionResponse.authenticatorData;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData`
 */
web.AuthenticatorAssertionResponse.set_authenticator_data_BANG_ = (function web$AuthenticatorAssertionResponse$set_authenticator_data_BANG_(this$,val){
return (this$["authenticatorData"] = val);
});
/**
 * Property.
 * 
 *   The signature read-only property of the `web.AuthenticatorAssertionResponse`
 *   is an `web.ArrayBuffer` object which is the signature of the
 *   for both `web.AuthenticatorAssertionResponse.authenticatorData`
 *   a SHA-256 hash of the client data (`web.AuthenticatorAssertionResponse.clientDataJSON`).
 * 
 *   `signature = authenticatorAssertionResponse.signature`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse/signature`
 */
web.AuthenticatorAssertionResponse.signature = (function web$AuthenticatorAssertionResponse$signature(this$){
return this$.signature();
});
/**
 * Property.
 * 
 *   The signature read-only property of the `web.AuthenticatorAssertionResponse`
 *   is an `web.ArrayBuffer` object which is the signature of the
 *   for both `web.AuthenticatorAssertionResponse.authenticatorData`
 *   a SHA-256 hash of the client data (`web.AuthenticatorAssertionResponse.clientDataJSON`).
 * 
 *   `signature = authenticatorAssertionResponse.signature`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse/signature`
 */
web.AuthenticatorAssertionResponse.set_signature_BANG_ = (function web$AuthenticatorAssertionResponse$set_signature_BANG_(this$,val){
return (this$["signature"] = val);
});
/**
 * Property.
 * 
 *   The userHandle read-only property of the `web.AuthenticatorAssertionResponse`
 *   is an `web.ArrayBuffer` object which is an opaque identifier
 *   the given user. Such an identifier can be used by the relying
 *   server to link the user account with its corresponding credentials
 *   other data.
 * 
 *   `userHandle = authenticatorAssertionResponse.userHandle`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse/userHandle`
 */
web.AuthenticatorAssertionResponse.user_handle = (function web$AuthenticatorAssertionResponse$user_handle(this$){
return this$.userHandle();
});
/**
 * Property.
 * 
 *   The userHandle read-only property of the `web.AuthenticatorAssertionResponse`
 *   is an `web.ArrayBuffer` object which is an opaque identifier
 *   the given user. Such an identifier can be used by the relying
 *   server to link the user account with its corresponding credentials
 *   other data.
 * 
 *   `userHandle = authenticatorAssertionResponse.userHandle`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse/userHandle`
 */
web.AuthenticatorAssertionResponse.set_user_handle_BANG_ = (function web$AuthenticatorAssertionResponse$set_user_handle_BANG_(this$,val){
return (this$["userHandle"] = val);
});

//# sourceMappingURL=AuthenticatorAssertionResponse.js.map?rel=1565798823316
