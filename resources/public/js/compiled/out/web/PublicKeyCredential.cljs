(ns web.PublicKeyCredential
  "The PublicKeyCredential interface provides information about
  public key / private key pair, which is a credential for logging
  to a service using an un-phishable and data-breach resistant
  key pair instead of a password. It inherits from `web.Credential`,
  was created by the Web Authentication API extension to the Credential
  API. Other interfaces that inherit from `web.Credential` are
  and `web.FederatedCredential`."
  (:refer-clojure :exclude []))

(defn get-client-extension-results
  "Method.

  getClientExtensionResults() is a method of the `web.PublicKeyCredential`
  that returns an `web.ArrayBuffer` which contains a map between
  extensions identifiers and their results after having being processed
  the client.

  `mapArrayBuffer = publicKeyCredential.getClientExtensionResults()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/getClientExtensionResults`"
  [this ]
  (-> this (.getClientExtensionResults)))

(defn is-user-verifying-platform-authenticator-available
  "Method.

  isUserVerifyingPlatformAuthenticatorAvailable() is a static method
  the `web.PublicKeyCredential` interface that returns a `web.Promise`
  resolves to true if a user-verifying platform authenticator is

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/isUserVerifyingPlatformAuthenticatorAvailable`"
  [this & args]
  (apply (-> this .-isUserVerifyingPlatformAuthenticatorAvailable) (concat [this] args)))

(defn id
  "Property.

  The id read-only property of the `web.PublicKeyCredential` interface
  a `dom.DOMString`, inherited from `web.Credential`, which represents
  identifier of the current PublicKeyCredential instance.

  `id = publicKeyCredential.id`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/id`"
  [this]
  (-> this (.id)))

(defn set-id!
  "Property.

  The id read-only property of the `web.PublicKeyCredential` interface
  a `dom.DOMString`, inherited from `web.Credential`, which represents
  identifier of the current PublicKeyCredential instance.

  `id = publicKeyCredential.id`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/id`"
  [this val]
  (aset this "id" val))

(defn raw-id
  "Property.

  The rawId read-only property of the `web.PublicKeyCredential`
  is an `web.ArrayBuffer` object containing the identifier of the

  `rawId = publicKeyCredential.rawId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/rawId`"
  [this]
  (-> this (.rawId)))

(defn set-raw-id!
  "Property.

  The rawId read-only property of the `web.PublicKeyCredential`
  is an `web.ArrayBuffer` object containing the identifier of the

  `rawId = publicKeyCredential.rawId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/rawId`"
  [this val]
  (aset this "rawId" val))

(defn response
  "Property.

  The response read-only property of the `web.PublicKeyCredential`
  is an `web.AuthenticatorResponse` object which is sent from the
  to the user agent for the creation/fetching of credentials. The
  contained in this response will be used by the relying party's
  to verify the demand is legitimate.

  `response = publicKeyCredential.response`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/response`"
  [this]
  (-> this (.response)))

(defn set-response!
  "Property.

  The response read-only property of the `web.PublicKeyCredential`
  is an `web.AuthenticatorResponse` object which is sent from the
  to the user agent for the creation/fetching of credentials. The
  contained in this response will be used by the relying party's
  to verify the demand is legitimate.

  `response = publicKeyCredential.response`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredential/response`"
  [this val]
  (aset this "response" val))

