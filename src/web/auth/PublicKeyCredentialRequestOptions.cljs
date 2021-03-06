(ns web.auth.PublicKeyCredentialRequestOptions
  "The PublicKeyCredentialRequestOptions dictionary of the Web Authentication
  holds the options passed to `navigator.credentials.get()` in
  to fetch a given `web.auth.PublicKeyCredential`."
  (:refer-clojure :exclude []))

(defn challenge
  "Property.

  The challenge property of the `web.auth.PublicKeyCredentialRequestOptions`
  is a `web.typed.BufferSource` used as a cryptographic challenge.
  is randomly generated then sent from the relying party's server.
  value (among other client data) will be signed by the authenticator's
  key and produce `AuthenticatorAssertionResponse.signature` which
  be sent back to the server as part of the response.

  `challenge = publicKeyCredentialRequestOptions.challenge`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/challenge`"
  [this]
  (-> this (.-challenge)))

(defn set-challenge!
  "Property.

  The challenge property of the `web.auth.PublicKeyCredentialRequestOptions`
  is a `web.typed.BufferSource` used as a cryptographic challenge.
  is randomly generated then sent from the relying party's server.
  value (among other client data) will be signed by the authenticator's
  key and produce `AuthenticatorAssertionResponse.signature` which
  be sent back to the server as part of the response.

  `challenge = publicKeyCredentialRequestOptions.challenge`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/challenge`"
  [this val]
  (aset this "challenge" val))

(defn timeout
  "Property.

  The timeout property, of the `web.auth.PublicKeyCredentialRequestOptions`
  represents an hint, given in milliseconds, for the time the script
  willing to wait for the completion of the retrieval operation.

  `timeout = publicKeyCredentialRequestOptions.timeout`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/timeout`"
  [this]
  (-> this (.-timeout)))

(defn set-timeout!
  "Property.

  The timeout property, of the `web.auth.PublicKeyCredentialRequestOptions`
  represents an hint, given in milliseconds, for the time the script
  willing to wait for the completion of the retrieval operation.

  `timeout = publicKeyCredentialRequestOptions.timeout`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/timeout`"
  [this val]
  (aset this "timeout" val))

(defn rp-id
  "Property.

  The rpId property, of the `web.auth.PublicKeyCredentialRequestOptions`
  is an optional property which indicates the relying party's identifier
  a `web.USVString`. Its value can only be a suffix of the current
  domain. For example, if you are browsing on foo.example.com,
  rpId value may be \\\"example.com\\\" but not \\\"bar.org\\\" or \\\"baz.example.com\\\".

  `rpId = publicKeyCredentialRequestOptions.rpId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/rpId`"
  [this]
  (-> this (.-rpId)))

(defn set-rp-id!
  "Property.

  The rpId property, of the `web.auth.PublicKeyCredentialRequestOptions`
  is an optional property which indicates the relying party's identifier
  a `web.USVString`. Its value can only be a suffix of the current
  domain. For example, if you are browsing on foo.example.com,
  rpId value may be \\\"example.com\\\" but not \\\"bar.org\\\" or \\\"baz.example.com\\\".

  `rpId = publicKeyCredentialRequestOptions.rpId`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/rpId`"
  [this val]
  (aset this "rpId" val))

(defn allow-credentials
  "Property.

  allowCredentials is an optional property of the `web.auth.PublicKeyCredentialRequestOptions`
  which indicates the existing credentials acceptable for retrieval.
  is an `js.Array` of credential descriptors.

  `allowCredentials = publicKeyCredentialRequestOptions.allowCredentials`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/allowCredentials`"
  [this]
  (-> this (.-allowCredentials)))

(defn set-allow-credentials!
  "Property.

  allowCredentials is an optional property of the `web.auth.PublicKeyCredentialRequestOptions`
  which indicates the existing credentials acceptable for retrieval.
  is an `js.Array` of credential descriptors.

  `allowCredentials = publicKeyCredentialRequestOptions.allowCredentials`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/allowCredentials`"
  [this val]
  (aset this "allowCredentials" val))

(defn user-verification
  "Property.

  userVerification is an optional property of the `web.auth.PublicKeyCredentialRequestOptions`.
  is a string which indicates how the user verification should
  part of the authentication process.

  `userVerification = publicKeyCredentialRequestOptions.userVerification`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/userVerification`"
  [this]
  (-> this (.-userVerification)))

(defn set-user-verification!
  "Property.

  userVerification is an optional property of the `web.auth.PublicKeyCredentialRequestOptions`.
  is a string which indicates how the user verification should
  part of the authentication process.

  `userVerification = publicKeyCredentialRequestOptions.userVerification`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/userVerification`"
  [this val]
  (aset this "userVerification" val))

(defn extensions
  "Property.

  extensions, an optional property of the `web.auth.PublicKeyCredentialRequestOptions`
  is an object providing the client extensions and their input

  `extensions = publicKeyCredentialRequestOptions.extensions`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/extensions`"
  [this]
  (-> this (.-extensions)))

(defn set-extensions!
  "Property.

  extensions, an optional property of the `web.auth.PublicKeyCredentialRequestOptions`
  is an object providing the client extensions and their input

  `extensions = publicKeyCredentialRequestOptions.extensions`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialRequestOptions/extensions`"
  [this val]
  (aset this "extensions" val))

