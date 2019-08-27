(ns web.auth.PublicKeyCredential
  "The PublicKeyCredential interface provides information about
  public key / private key pair, which is a credential for logging
  to a service using an un-phishable and data-breach resistant
  key pair instead of a password. It inherits from `web.credential.Credential`,
  was created by the Web Authentication API extension to the Credential
  API. Other interfaces that inherit from `web.credential.Credential`
  `web.credential.PasswordCredential` and `web.credential.FederatedCredential`."
  (:refer-clojure :exclude [type]))

(defn get-client-extension-results
  "Method.

  getClientExtensionResults() is a method of the `web.auth.PublicKeyCredential`
  that returns an `js.ArrayBuffer` which contains a map between
  extensions identifiers and their results after having being processed
  the client.

  `mapArrayBuffer = publicKeyCredential.getClientExtensionResults()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/getClientExtensionResults`"
  [this ]
  (-> this (.getClientExtensionResults)))

(defn is-user-verifying-platform-authenticator-available
  "Method.

  isUserVerifyingPlatformAuthenticatorAvailable() is a static method
  the `web.auth.PublicKeyCredential` interface that returns a `js.Promise`
  resolves to true if a user-verifying platform authenticator is

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable`"
  [this & args]
  (-> this .-isUserVerifyingPlatformAuthenticatorAvailable (.apply this (clj->js args))))

(defn type
  "Property.

  Inherited from Credential. Always set to \"public-key\" for PublicKeyCredential"
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  Inherited from Credential. Always set to \"public-key\" for PublicKeyCredential"
  [this val]
  (aset this "type" val))

(defn id
  "Property.

  The id read-only property of the `web.auth.PublicKeyCredential`
  is a `web.dom.DOMString`, inherited from `web.credential.Credential`,
  represents the identifier of the current PublicKeyCredential

  `id = publicKeyCredential.id`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/id`"
  [this]
  (-> this (.-id)))

(defn set-id!
  "Property.

  The id read-only property of the `web.auth.PublicKeyCredential`
  is a `web.dom.DOMString`, inherited from `web.credential.Credential`,
  represents the identifier of the current PublicKeyCredential

  `id = publicKeyCredential.id`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/id`"
  [this val]
  (aset this "id" val))

(defn raw-id
  "Property.

  The rawId read-only property of the `web.auth.PublicKeyCredential`
  is an `js.ArrayBuffer` object containing the identifier of the

  `rawId = publicKeyCredential.rawId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/rawId`"
  [this]
  (-> this (.-rawId)))

(defn set-raw-id!
  "Property.

  The rawId read-only property of the `web.auth.PublicKeyCredential`
  is an `js.ArrayBuffer` object containing the identifier of the

  `rawId = publicKeyCredential.rawId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/rawId`"
  [this val]
  (aset this "rawId" val))

(defn response
  "Property.

  The response read-only property of the `web.auth.PublicKeyCredential`
  is an `web.auth.AuthenticatorResponse` object which is sent from
  authenticator to the user agent for the creation/fetching of
  The information contained in this response will be used by the
  party's server to verify the demand is legitimate.

  `response = publicKeyCredential.response`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/response`"
  [this]
  (-> this (.-response)))

(defn set-response!
  "Property.

  The response read-only property of the `web.auth.PublicKeyCredential`
  is an `web.auth.AuthenticatorResponse` object which is sent from
  authenticator to the user agent for the creation/fetching of
  The information contained in this response will be used by the
  party's server to verify the demand is legitimate.

  `response = publicKeyCredential.response`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/response`"
  [this val]
  (aset this "response" val))

