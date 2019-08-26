(ns web.auth.AuthenticatorAssertionResponse
  "The AuthenticatorAssertionResponse interface of the Web Authentication
  is returned by `CredentialsContainer.get()` when a `web.auth.PublicKeyCredential`
  passed, and provides proof to a service that it has a key pair
  that the authentication request is valid and approved."
  (:refer-clojure :exclude []))

(defn client-data-json
  "Property.

  The client data for the authentication, such as origin and challenge.
  clientDataJSON property is inherited from the AuthenticatorResponse."
  [this]
  (-> this (.clientDataJSON)))

(defn set-client-data-json!
  "Property.

  The client data for the authentication, such as origin and challenge.
  clientDataJSON property is inherited from the AuthenticatorResponse."
  [this val]
  (aset this "clientDataJSON" val))

(defn authenticator-data
  "Property.

  The authenticatorData property of the `web.auth.AuthenticatorAssertionResponse`
  returns an `js.ArrayBuffer` containing information from the authenticator
  as the Relying Party ID Hash (rpIdHash), a signature counter,
  of user presence, user verification flags, and any extensions
  by the authenticator.

  `var authnrData = authenticatorAssertionResponse.authenticatorData;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData`"
  [this]
  (-> this (.authenticatorData)))

(defn set-authenticator-data!
  "Property.

  The authenticatorData property of the `web.auth.AuthenticatorAssertionResponse`
  returns an `js.ArrayBuffer` containing information from the authenticator
  as the Relying Party ID Hash (rpIdHash), a signature counter,
  of user presence, user verification flags, and any extensions
  by the authenticator.

  `var authnrData = authenticatorAssertionResponse.authenticatorData;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse/authenticatorData`"
  [this val]
  (aset this "authenticatorData" val))

(defn signature
  "Property.

  The signature read-only property of the `web.auth.AuthenticatorAssertionResponse`
  is an `js.ArrayBuffer` object which is the signature of the authenticator
  both `AuthenticatorAssertionResponse.authenticatorData` and a
  hash of the client data (`AuthenticatorAssertionResponse.clientDataJSON`).

  `signature = authenticatorAssertionResponse.signature`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse/signature`"
  [this]
  (-> this (.signature)))

(defn set-signature!
  "Property.

  The signature read-only property of the `web.auth.AuthenticatorAssertionResponse`
  is an `js.ArrayBuffer` object which is the signature of the authenticator
  both `AuthenticatorAssertionResponse.authenticatorData` and a
  hash of the client data (`AuthenticatorAssertionResponse.clientDataJSON`).

  `signature = authenticatorAssertionResponse.signature`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse/signature`"
  [this val]
  (aset this "signature" val))

(defn user-handle
  "Property.

  The userHandle read-only property of the `web.auth.AuthenticatorAssertionResponse`
  is an `js.ArrayBuffer` object which is an opaque identifier for
  given user. Such an identifier can be used by the relying party's
  to link the user account with its corresponding credentials and
  data.

  `userHandle = authenticatorAssertionResponse.userHandle`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse/userHandle`"
  [this]
  (-> this (.userHandle)))

(defn set-user-handle!
  "Property.

  The userHandle read-only property of the `web.auth.AuthenticatorAssertionResponse`
  is an `js.ArrayBuffer` object which is an opaque identifier for
  given user. Such an identifier can be used by the relying party's
  to link the user account with its corresponding credentials and
  data.

  `userHandle = authenticatorAssertionResponse.userHandle`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AuthenticatorAssertionResponse/userHandle`"
  [this val]
  (aset this "userHandle" val))

