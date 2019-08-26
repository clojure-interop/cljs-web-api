(ns web.auth.AuthenticatorResponse
  "The AuthenticatorResponse interface of the Web Authentication
  is the base interface for interfaces that provide a cryptographic
  of trust for a key pair. The child interfaces include information
  the browser such as the challenge origin and either may be returned
  `PublicKeyCredential.response`."
  (:refer-clojure :exclude []))

(defn client-data-json
  "Property.

  The clientDataJSON property of the `web.auth.AuthenticatorResponse`
  stores a JSON string in an `js.ArrayBuffer`, representing the
  data that was passed to `CredentialsContainer.create()` or `CredentialsContainer.get()`.
  property is only accessed on one of the child objects of AuthenticatorResponse,
  `web.auth.AuthenticatorAttestationResponse` or `web.auth.AuthenticatorAssertionResponse`.

  `var arrayBuffer = AuthenticatorAttestationResponse.clientDataJSON;
  var arrayBuffer = AuthenticatorAssertionResponse.clientDataJSON;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorResponse/clientDataJSON`"
  [this]
  (-> this (.clientDataJSON)))

(defn set-client-data-json!
  "Property.

  The clientDataJSON property of the `web.auth.AuthenticatorResponse`
  stores a JSON string in an `js.ArrayBuffer`, representing the
  data that was passed to `CredentialsContainer.create()` or `CredentialsContainer.get()`.
  property is only accessed on one of the child objects of AuthenticatorResponse,
  `web.auth.AuthenticatorAttestationResponse` or `web.auth.AuthenticatorAssertionResponse`.

  `var arrayBuffer = AuthenticatorAttestationResponse.clientDataJSON;
  var arrayBuffer = AuthenticatorAssertionResponse.clientDataJSON;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorResponse/clientDataJSON`"
  [this val]
  (aset this "clientDataJSON" val))

