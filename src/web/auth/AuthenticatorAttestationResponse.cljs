(ns web.auth.AuthenticatorAttestationResponse
  "The AuthenticatorAttestationResponse interface of the Web Authentication
  is returned by `CredentialsContainer.create()` when a `web.auth.PublicKeyCredential`
  passed, and provides a cryptographic root of trust for the new
  pair that has been generated. This response should be sent to
  relying party's server to complete the creation of the credential."
  (:refer-clojure :exclude []))

(defn get-transports
  "Method.

  getTransports() is a method of the `web.auth.AuthenticatorAttestationResponse`
  that returns an `js.Array` containing strings describing the
  transports which may be used by the authenticator.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse/getTransports`"
  [this & args]
  (apply (-> this .-getTransports) (concat [this] args)))

(defn client-data-json
  "Property.

  Client data for the authentication, such as origin and challenge.
  clientDataJSON property is inherited from the AuthenticatorResponse."
  [this]
  (-> this (.-clientDataJSON)))

(defn set-client-data-json!
  "Property.

  Client data for the authentication, such as origin and challenge.
  clientDataJSON property is inherited from the AuthenticatorResponse."
  [this val]
  (aset this "clientDataJSON" val))

(defn attestation-object
  "Property.

  The attestationObject property of the `web.auth.AuthenticatorAttestationResponse`
  returns an `js.ArrayBuffer` containing the new public key, as
  as signature over the entire attestationObject with a private
  that is stored in the authenticator when it is manufactured.

  `attestObj = authenticatorAttestationResponse.attestationObject`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse/attestationObject`"
  [this]
  (-> this (.-attestationObject)))

(defn set-attestation-object!
  "Property.

  The attestationObject property of the `web.auth.AuthenticatorAttestationResponse`
  returns an `js.ArrayBuffer` containing the new public key, as
  as signature over the entire attestationObject with a private
  that is stored in the authenticator when it is manufactured.

  `attestObj = authenticatorAttestationResponse.attestationObject`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse/attestationObject`"
  [this val]
  (aset this "attestationObject" val))

