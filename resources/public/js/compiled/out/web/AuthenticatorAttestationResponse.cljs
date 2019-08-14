(ns web.AuthenticatorAttestationResponse
  "The AuthenticatorAttestationResponse interface of the Web Authentication
  is returned by `web.CredentialsContainer.create()` when a `web.PublicKeyCredential`
  passed, and provides a cryptographic root of trust for the new
  pair that has been generated. This response should be sent to
  relying party's server to complete the creation of the credential."
  (:refer-clojure :exclude []))

(defn get-transports
  "Method.

  getTransports() is a method of the `web.AuthenticatorAttestationResponse`
  that returns an `web.Array` containing strings describing the
  transports which may be used by the authenticator.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse/getTransports`"
  [this & args]
  (apply (-> this .-getTransports) (concat [this] args)))

(defn attestation-object
  "Property.

  The attestationObject property of the `web.AuthenticatorAttestationResponse`
  returns an `web.ArrayBuffer` containing the new public key, as
  as signature over the entire attestationObject with a private
  that is stored in the authenticator when it is manufactured.

  `attestObj = authenticatorAttestationResponse.attestationObject`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse/attestationObject`"
  [this]
  (-> this (.attestationObject)))

(defn set-attestation-object!
  "Property.

  The attestationObject property of the `web.AuthenticatorAttestationResponse`
  returns an `web.ArrayBuffer` containing the new public key, as
  as signature over the entire attestationObject with a private
  that is stored in the authenticator when it is manufactured.

  `attestObj = authenticatorAttestationResponse.attestationObject`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAttestationResponse/attestationObject`"
  [this val]
  (aset this "attestationObject" val))

