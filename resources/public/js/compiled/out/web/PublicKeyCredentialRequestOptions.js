// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PublicKeyCredentialRequestOptions');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   allowCredentials is an optional property of the `web.PublicKeyCredentialRequestOptions`
 *   which indicates the existing credentials acceptable for retrieval.
 *   is an `web.Array` of credential descriptors.
 * 
 *   `allowCredentials = publicKeyCredentialRequestOptions.allowCredentials`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/allowCredentials`
 */
web.PublicKeyCredentialRequestOptions.allow_credentials = (function web$PublicKeyCredentialRequestOptions$allow_credentials(this$){
return this$.allowCredentials();
});
/**
 * Property.
 * 
 *   allowCredentials is an optional property of the `web.PublicKeyCredentialRequestOptions`
 *   which indicates the existing credentials acceptable for retrieval.
 *   is an `web.Array` of credential descriptors.
 * 
 *   `allowCredentials = publicKeyCredentialRequestOptions.allowCredentials`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/allowCredentials`
 */
web.PublicKeyCredentialRequestOptions.set_allow_credentials_BANG_ = (function web$PublicKeyCredentialRequestOptions$set_allow_credentials_BANG_(this$,val){
return (this$["allowCredentials"] = val);
});
/**
 * Property.
 * 
 *   The challenge property of the `web.PublicKeyCredentialRequestOptions`
 *   is a `web.BufferSource` used as a cryptographic challenge. This
 *   randomly generated then sent from the relying party's server.
 *   value (among other client data) will be signed by the authenticator's
 *   key and produce `web.AuthenticatorAssertionResponse.signature`
 *   should be sent back to the server as part of the response.
 * 
 *   `challenge = publicKeyCredentialRequestOptions.challenge`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/challenge`
 */
web.PublicKeyCredentialRequestOptions.challenge = (function web$PublicKeyCredentialRequestOptions$challenge(this$){
return this$.challenge();
});
/**
 * Property.
 * 
 *   The challenge property of the `web.PublicKeyCredentialRequestOptions`
 *   is a `web.BufferSource` used as a cryptographic challenge. This
 *   randomly generated then sent from the relying party's server.
 *   value (among other client data) will be signed by the authenticator's
 *   key and produce `web.AuthenticatorAssertionResponse.signature`
 *   should be sent back to the server as part of the response.
 * 
 *   `challenge = publicKeyCredentialRequestOptions.challenge`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/challenge`
 */
web.PublicKeyCredentialRequestOptions.set_challenge_BANG_ = (function web$PublicKeyCredentialRequestOptions$set_challenge_BANG_(this$,val){
return (this$["challenge"] = val);
});
/**
 * Property.
 * 
 *   extensions, an optional property of the `web.PublicKeyCredentialRequestOptions`
 *   is an object providing the client extensions and their input
 * 
 *   `extensions = publicKeyCredentialRequestOptions.extensions`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/extensions`
 */
web.PublicKeyCredentialRequestOptions.extensions = (function web$PublicKeyCredentialRequestOptions$extensions(this$){
return this$.extensions();
});
/**
 * Property.
 * 
 *   extensions, an optional property of the `web.PublicKeyCredentialRequestOptions`
 *   is an object providing the client extensions and their input
 * 
 *   `extensions = publicKeyCredentialRequestOptions.extensions`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/extensions`
 */
web.PublicKeyCredentialRequestOptions.set_extensions_BANG_ = (function web$PublicKeyCredentialRequestOptions$set_extensions_BANG_(this$,val){
return (this$["extensions"] = val);
});
/**
 * Property.
 * 
 *   The rpId property, of the `web.PublicKeyCredentialRequestOptions`
 *   is an optional property which indicates the relying party's identifier
 *   a `web.USVString`. Its value can only be a suffix of the current
 *   domain. For example, if you are browsing on foo.example.com,
 *   rpId value may be \"example.com\" but not \"bar.org\" or \"baz.example.com\".
 * 
 *   `rpId = publicKeyCredentialRequestOptions.rpId`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/rpId`
 */
web.PublicKeyCredentialRequestOptions.rp_id = (function web$PublicKeyCredentialRequestOptions$rp_id(this$){
return this$.rpId();
});
/**
 * Property.
 * 
 *   The rpId property, of the `web.PublicKeyCredentialRequestOptions`
 *   is an optional property which indicates the relying party's identifier
 *   a `web.USVString`. Its value can only be a suffix of the current
 *   domain. For example, if you are browsing on foo.example.com,
 *   rpId value may be \"example.com\" but not \"bar.org\" or \"baz.example.com\".
 * 
 *   `rpId = publicKeyCredentialRequestOptions.rpId`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/rpId`
 */
web.PublicKeyCredentialRequestOptions.set_rp_id_BANG_ = (function web$PublicKeyCredentialRequestOptions$set_rp_id_BANG_(this$,val){
return (this$["rpId"] = val);
});
/**
 * Property.
 * 
 *   The timeout property, of the `web.PublicKeyCredentialRequestOptions`
 *   represents an hint, given in milliseconds, for the time the script
 *   willing to wait for the completion of the retrieval operation.
 * 
 *   `timeout = publicKeyCredentialRequestOptions.timeout`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/timeout`
 */
web.PublicKeyCredentialRequestOptions.timeout = (function web$PublicKeyCredentialRequestOptions$timeout(this$){
return this$.timeout();
});
/**
 * Property.
 * 
 *   The timeout property, of the `web.PublicKeyCredentialRequestOptions`
 *   represents an hint, given in milliseconds, for the time the script
 *   willing to wait for the completion of the retrieval operation.
 * 
 *   `timeout = publicKeyCredentialRequestOptions.timeout`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/timeout`
 */
web.PublicKeyCredentialRequestOptions.set_timeout_BANG_ = (function web$PublicKeyCredentialRequestOptions$set_timeout_BANG_(this$,val){
return (this$["timeout"] = val);
});
/**
 * Property.
 * 
 *   userVerification is an optional property of the `web.PublicKeyCredentialRequestOptions`.
 *   is a string which indicates how the user verification should
 *   part of the authentication process.
 * 
 *   `userVerification = publicKeyCredentialRequestOptions.userVerification`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/userVerification`
 */
web.PublicKeyCredentialRequestOptions.user_verification = (function web$PublicKeyCredentialRequestOptions$user_verification(this$){
return this$.userVerification();
});
/**
 * Property.
 * 
 *   userVerification is an optional property of the `web.PublicKeyCredentialRequestOptions`.
 *   is a string which indicates how the user verification should
 *   part of the authentication process.
 * 
 *   `userVerification = publicKeyCredentialRequestOptions.userVerification`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/userVerification`
 */
web.PublicKeyCredentialRequestOptions.set_user_verification_BANG_ = (function web$PublicKeyCredentialRequestOptions$set_user_verification_BANG_(this$,val){
return (this$["userVerification"] = val);
});

//# sourceMappingURL=PublicKeyCredentialRequestOptions.js.map?rel=1565798841033
