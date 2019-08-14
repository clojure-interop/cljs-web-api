// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PublicKeyCredentialCreationOptions');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   attestation is an optional property of the `web.PublicKeyCredentialCreationOptions`
 *   This is a string whose value indicates the preference regarding
 *   attestation transport, between the authenticator, the client
 *   the relying party.
 * 
 *   `attestation = publicKeyCredentialCreationOptions.attestation`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/attestation`
 */
web.PublicKeyCredentialCreationOptions.attestation = (function web$PublicKeyCredentialCreationOptions$attestation(this$){
return this$.attestation();
});
/**
 * Property.
 * 
 *   attestation is an optional property of the `web.PublicKeyCredentialCreationOptions`
 *   This is a string whose value indicates the preference regarding
 *   attestation transport, between the authenticator, the client
 *   the relying party.
 * 
 *   `attestation = publicKeyCredentialCreationOptions.attestation`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/attestation`
 */
web.PublicKeyCredentialCreationOptions.set_attestation_BANG_ = (function web$PublicKeyCredentialCreationOptions$set_attestation_BANG_(this$,val){
return (this$["attestation"] = val);
});
/**
 * Property.
 * 
 *   authenticatorSelection, an optional property of the `web.PublicKeyCredentialCreationOptions`
 *   is an object giving criteria to filter out the authenticators
 *   be used for the creation operation.
 * 
 *   `authenticatorSelection = publicKeyCredentialCreationOptions.authenticatorSelection`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/authenticatorSelection`
 */
web.PublicKeyCredentialCreationOptions.authenticator_selection = (function web$PublicKeyCredentialCreationOptions$authenticator_selection(this$){
return this$.authenticatorSelection();
});
/**
 * Property.
 * 
 *   authenticatorSelection, an optional property of the `web.PublicKeyCredentialCreationOptions`
 *   is an object giving criteria to filter out the authenticators
 *   be used for the creation operation.
 * 
 *   `authenticatorSelection = publicKeyCredentialCreationOptions.authenticatorSelection`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/authenticatorSelection`
 */
web.PublicKeyCredentialCreationOptions.set_authenticator_selection_BANG_ = (function web$PublicKeyCredentialCreationOptions$set_authenticator_selection_BANG_(this$,val){
return (this$["authenticatorSelection"] = val);
});
/**
 * Property.
 * 
 *   The challenge property of the `web.PublicKeyCredentialCreationOptions`
 *   is a `web.BufferSource` used as a cryptographic challenge. This
 *   randomly generated then sent from the relying party's server.
 *   value (among other client data) will be signed by the authenticator,
 *   its private key, and must be sent back for verification to the
 *   as part of `web.AuthenticatorAttestationResponse.attestationObject`.
 * 
 *   `challenge = publicKeyCredentialCreationOptions.challenge`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/challenge`
 */
web.PublicKeyCredentialCreationOptions.challenge = (function web$PublicKeyCredentialCreationOptions$challenge(this$){
return this$.challenge();
});
/**
 * Property.
 * 
 *   The challenge property of the `web.PublicKeyCredentialCreationOptions`
 *   is a `web.BufferSource` used as a cryptographic challenge. This
 *   randomly generated then sent from the relying party's server.
 *   value (among other client data) will be signed by the authenticator,
 *   its private key, and must be sent back for verification to the
 *   as part of `web.AuthenticatorAttestationResponse.attestationObject`.
 * 
 *   `challenge = publicKeyCredentialCreationOptions.challenge`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/challenge`
 */
web.PublicKeyCredentialCreationOptions.set_challenge_BANG_ = (function web$PublicKeyCredentialCreationOptions$set_challenge_BANG_(this$,val){
return (this$["challenge"] = val);
});
/**
 * Property.
 * 
 *   excludeCredentials, an optional property of the `web.PublicKeyCredentialCreationOptions`
 *   is an `web.Array` whose elements are descriptors for the public
 *   already existing for a given user. This is provided by the relying
 *   server if it wants to prevent creation of new credentials for
 *   existing user.
 * 
 *   `excludeCredentials = publicKeyCredentialCreationOptions.excludeCredentials`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/excludeCredentials`
 */
web.PublicKeyCredentialCreationOptions.exclude_credentials = (function web$PublicKeyCredentialCreationOptions$exclude_credentials(this$){
return this$.excludeCredentials();
});
/**
 * Property.
 * 
 *   excludeCredentials, an optional property of the `web.PublicKeyCredentialCreationOptions`
 *   is an `web.Array` whose elements are descriptors for the public
 *   already existing for a given user. This is provided by the relying
 *   server if it wants to prevent creation of new credentials for
 *   existing user.
 * 
 *   `excludeCredentials = publicKeyCredentialCreationOptions.excludeCredentials`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/excludeCredentials`
 */
web.PublicKeyCredentialCreationOptions.set_exclude_credentials_BANG_ = (function web$PublicKeyCredentialCreationOptions$set_exclude_credentials_BANG_(this$,val){
return (this$["excludeCredentials"] = val);
});
/**
 * Property.
 * 
 *   extensions, an optional property of the `web.PublicKeyCredentialCreationOptions`
 *   is an object providing the client extensions and their input
 * 
 *   `extensions = publicKeyCredentialCreationOptions.extensions`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/extensions`
 */
web.PublicKeyCredentialCreationOptions.extensions = (function web$PublicKeyCredentialCreationOptions$extensions(this$){
return this$.extensions();
});
/**
 * Property.
 * 
 *   extensions, an optional property of the `web.PublicKeyCredentialCreationOptions`
 *   is an object providing the client extensions and their input
 * 
 *   `extensions = publicKeyCredentialCreationOptions.extensions`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/extensions`
 */
web.PublicKeyCredentialCreationOptions.set_extensions_BANG_ = (function web$PublicKeyCredentialCreationOptions$set_extensions_BANG_(this$,val){
return (this$["extensions"] = val);
});
/**
 * Property.
 * 
 *   The pubKeyCredParams property of the `web.PublicKeyCredentialCreationOptions`
 *   is an `web.Array` whose elements are objects describing the desired
 *   of the credential to be created. These objects define the type
 *   public-key and the algorithm used for cryptographic signature
 * 
 *   `pubKeyCredParams = publicKeyCredentialCreationOptions.pubKeyCredParams`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/pubKeyCredParams`
 */
web.PublicKeyCredentialCreationOptions.pub_key_cred_params = (function web$PublicKeyCredentialCreationOptions$pub_key_cred_params(this$){
return this$.pubKeyCredParams();
});
/**
 * Property.
 * 
 *   The pubKeyCredParams property of the `web.PublicKeyCredentialCreationOptions`
 *   is an `web.Array` whose elements are objects describing the desired
 *   of the credential to be created. These objects define the type
 *   public-key and the algorithm used for cryptographic signature
 * 
 *   `pubKeyCredParams = publicKeyCredentialCreationOptions.pubKeyCredParams`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/pubKeyCredParams`
 */
web.PublicKeyCredentialCreationOptions.set_pub_key_cred_params_BANG_ = (function web$PublicKeyCredentialCreationOptions$set_pub_key_cred_params_BANG_(this$,val){
return (this$["pubKeyCredParams"] = val);
});
/**
 * Property.
 * 
 *   The rp property of the `web.PublicKeyCredentialCreationOptions`
 *   is an object describing the relying party which requested the
 *   creation (via `web.navigator.credentials.create()`).
 * 
 *   `relyingPartyObj = publicKeyCredentialCreationOptions.rp`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/rp`
 */
web.PublicKeyCredentialCreationOptions.rp = (function web$PublicKeyCredentialCreationOptions$rp(this$){
return this$.rp();
});
/**
 * Property.
 * 
 *   The rp property of the `web.PublicKeyCredentialCreationOptions`
 *   is an object describing the relying party which requested the
 *   creation (via `web.navigator.credentials.create()`).
 * 
 *   `relyingPartyObj = publicKeyCredentialCreationOptions.rp`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/rp`
 */
web.PublicKeyCredentialCreationOptions.set_rp_BANG_ = (function web$PublicKeyCredentialCreationOptions$set_rp_BANG_(this$,val){
return (this$["rp"] = val);
});
/**
 * Property.
 * 
 *   The timeout property, of the `web.PublicKeyCredentialCreationOptions`
 *   represents an hint, given in milliseconds, for the time the script
 *   willing to wait for the completion of the creation operation.
 * 
 *   `timeout = publicKeyCredentialCreationOptions.timeout`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/timeout`
 */
web.PublicKeyCredentialCreationOptions.timeout = (function web$PublicKeyCredentialCreationOptions$timeout(this$){
return this$.timeout();
});
/**
 * Property.
 * 
 *   The timeout property, of the `web.PublicKeyCredentialCreationOptions`
 *   represents an hint, given in milliseconds, for the time the script
 *   willing to wait for the completion of the creation operation.
 * 
 *   `timeout = publicKeyCredentialCreationOptions.timeout`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/timeout`
 */
web.PublicKeyCredentialCreationOptions.set_timeout_BANG_ = (function web$PublicKeyCredentialCreationOptions$set_timeout_BANG_(this$,val){
return (this$["timeout"] = val);
});
/**
 * Property.
 * 
 *   The user property of the `web.PublicKeyCredentialCreationOptions`
 *   is an object describing the user account for which the credentials
 *   generated (via `web.navigator.credentials.create()`).
 * 
 *   `userAccount = publicKeyCredentialCreationOptions.user`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/user`
 */
web.PublicKeyCredentialCreationOptions.user = (function web$PublicKeyCredentialCreationOptions$user(this$){
return this$.user();
});
/**
 * Property.
 * 
 *   The user property of the `web.PublicKeyCredentialCreationOptions`
 *   is an object describing the user account for which the credentials
 *   generated (via `web.navigator.credentials.create()`).
 * 
 *   `userAccount = publicKeyCredentialCreationOptions.user`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/user`
 */
web.PublicKeyCredentialCreationOptions.set_user_BANG_ = (function web$PublicKeyCredentialCreationOptions$set_user_BANG_(this$,val){
return (this$["user"] = val);
});

//# sourceMappingURL=PublicKeyCredentialCreationOptions.js.map?rel=1565798815806
