// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.AuthenticatorResponse');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The clientDataJSON property of the `web.AuthenticatorResponse`
 *   stores a JSON string in an `web.ArrayBuffer`, representing the
 *   data that was passed to `web.CredentialsContainer.create()` or
 *   This property is only accessed on one of the child objects of
 *   specifically `web.AuthenticatorAttestationResponse` or `web.AuthenticatorAssertionResponse`.
 * 
 *   `var arrayBuffer = AuthenticatorAttestationResponse.clientDataJSON;
 *   var arrayBuffer = AuthenticatorAssertionResponse.clientDataJSON;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorResponse/clientDataJSON`
 */
web.AuthenticatorResponse.client_data_json = (function web$AuthenticatorResponse$client_data_json(this$){
return this$.clientDataJSON();
});
/**
 * Property.
 * 
 *   The clientDataJSON property of the `web.AuthenticatorResponse`
 *   stores a JSON string in an `web.ArrayBuffer`, representing the
 *   data that was passed to `web.CredentialsContainer.create()` or
 *   This property is only accessed on one of the child objects of
 *   specifically `web.AuthenticatorAttestationResponse` or `web.AuthenticatorAssertionResponse`.
 * 
 *   `var arrayBuffer = AuthenticatorAttestationResponse.clientDataJSON;
 *   var arrayBuffer = AuthenticatorAssertionResponse.clientDataJSON;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorResponse/clientDataJSON`
 */
web.AuthenticatorResponse.set_client_data_json_BANG_ = (function web$AuthenticatorResponse$set_client_data_json_BANG_(this$,val){
return (this$["clientDataJSON"] = val);
});

//# sourceMappingURL=AuthenticatorResponse.js.map?rel=1565798812539
