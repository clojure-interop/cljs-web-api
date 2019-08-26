(ns web.auth.PublicKeyCredentialCreationOptions
  "The PublicKeyCredentialCreationOptions dictionary of the Web
  API holds options passed to `navigators.credentials.create()`
  order to create a `web.auth.PublicKeyCredential`."
  (:refer-clojure :exclude []))

(defn rp
  "Property.

  The rp property of the `web.auth.PublicKeyCredentialCreationOptions`
  is an object describing the relying party which requested the
  creation (via `navigator.credentials.create()`).

  `relyingPartyObj = publicKeyCredentialCreationOptions.rp`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/rp`"
  [this]
  (-> this (.-rp)))

(defn set-rp!
  "Property.

  The rp property of the `web.auth.PublicKeyCredentialCreationOptions`
  is an object describing the relying party which requested the
  creation (via `navigator.credentials.create()`).

  `relyingPartyObj = publicKeyCredentialCreationOptions.rp`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/rp`"
  [this val]
  (aset this "rp" val))

(defn user
  "Property.

  The user property of the `web.auth.PublicKeyCredentialCreationOptions`
  is an object describing the user account for which the credentials
  generated (via `navigator.credentials.create()`).

  `userAccount = publicKeyCredentialCreationOptions.user`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/user`"
  [this]
  (-> this (.-user)))

(defn set-user!
  "Property.

  The user property of the `web.auth.PublicKeyCredentialCreationOptions`
  is an object describing the user account for which the credentials
  generated (via `navigator.credentials.create()`).

  `userAccount = publicKeyCredentialCreationOptions.user`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/user`"
  [this val]
  (aset this "user" val))

(defn challenge
  "Property.

  The challenge property of the `web.auth.PublicKeyCredentialCreationOptions`
  is a `web.typed.BufferSource` used as a cryptographic challenge.
  is randomly generated then sent from the relying party's server.
  value (among other client data) will be signed by the authenticator,
  its private key, and must be sent back for verification to the
  as part of `AuthenticatorAttestationResponse.attestationObject`.

  `challenge = publicKeyCredentialCreationOptions.challenge`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/challenge`"
  [this]
  (-> this (.-challenge)))

(defn set-challenge!
  "Property.

  The challenge property of the `web.auth.PublicKeyCredentialCreationOptions`
  is a `web.typed.BufferSource` used as a cryptographic challenge.
  is randomly generated then sent from the relying party's server.
  value (among other client data) will be signed by the authenticator,
  its private key, and must be sent back for verification to the
  as part of `AuthenticatorAttestationResponse.attestationObject`.

  `challenge = publicKeyCredentialCreationOptions.challenge`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/challenge`"
  [this val]
  (aset this "challenge" val))

(defn pub-key-cred-params
  "Property.

  The pubKeyCredParams property of the `web.auth.PublicKeyCredentialCreationOptions`
  is an `js.Array` whose elements are objects describing the desired
  of the credential to be created. These objects define the type
  public-key and the algorithm used for cryptographic signature

  `pubKeyCredParams = publicKeyCredentialCreationOptions.pubKeyCredParams`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/pubKeyCredParams`"
  [this]
  (-> this (.-pubKeyCredParams)))

(defn set-pub-key-cred-params!
  "Property.

  The pubKeyCredParams property of the `web.auth.PublicKeyCredentialCreationOptions`
  is an `js.Array` whose elements are objects describing the desired
  of the credential to be created. These objects define the type
  public-key and the algorithm used for cryptographic signature

  `pubKeyCredParams = publicKeyCredentialCreationOptions.pubKeyCredParams`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/pubKeyCredParams`"
  [this val]
  (aset this "pubKeyCredParams" val))

(defn timeout
  "Property.

  The timeout property, of the `web.auth.PublicKeyCredentialCreationOptions`
  represents an hint, given in milliseconds, for the time the script
  willing to wait for the completion of the creation operation.

  `timeout = publicKeyCredentialCreationOptions.timeout`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/timeout`"
  [this]
  (-> this (.-timeout)))

(defn set-timeout!
  "Property.

  The timeout property, of the `web.auth.PublicKeyCredentialCreationOptions`
  represents an hint, given in milliseconds, for the time the script
  willing to wait for the completion of the creation operation.

  `timeout = publicKeyCredentialCreationOptions.timeout`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/timeout`"
  [this val]
  (aset this "timeout" val))

(defn exclude-credentials
  "Property.

  excludeCredentials, an optional property of the `web.auth.PublicKeyCredentialCreationOptions`
  is an `js.Array` whose elements are descriptors for the public
  already existing for a given user. This is provided by the relying
  server if it wants to prevent creation of new credentials for
  existing user.

  `excludeCredentials = publicKeyCredentialCreationOptions.excludeCredentials`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/excludeCredentials`"
  [this]
  (-> this (.-excludeCredentials)))

(defn set-exclude-credentials!
  "Property.

  excludeCredentials, an optional property of the `web.auth.PublicKeyCredentialCreationOptions`
  is an `js.Array` whose elements are descriptors for the public
  already existing for a given user. This is provided by the relying
  server if it wants to prevent creation of new credentials for
  existing user.

  `excludeCredentials = publicKeyCredentialCreationOptions.excludeCredentials`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/excludeCredentials`"
  [this val]
  (aset this "excludeCredentials" val))

(defn authenticator-selection
  "Property.

  authenticatorSelection, an optional property of the `web.auth.PublicKeyCredentialCreationOptions`
  is an object giving criteria to filter out the authenticators
  be used for the creation operation.

  `authenticatorSelection = publicKeyCredentialCreationOptions.authenticatorSelection`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/authenticatorSelection`"
  [this]
  (-> this (.-authenticatorSelection)))

(defn set-authenticator-selection!
  "Property.

  authenticatorSelection, an optional property of the `web.auth.PublicKeyCredentialCreationOptions`
  is an object giving criteria to filter out the authenticators
  be used for the creation operation.

  `authenticatorSelection = publicKeyCredentialCreationOptions.authenticatorSelection`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/authenticatorSelection`"
  [this val]
  (aset this "authenticatorSelection" val))

(defn attestation
  "Property.

  attestation is an optional property of the `web.auth.PublicKeyCredentialCreationOptions`
  This is a string whose value indicates the preference regarding
  attestation transport, between the authenticator, the client
  the relying party.

  `attestation = publicKeyCredentialCreationOptions.attestation`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/attestation`"
  [this]
  (-> this (.-attestation)))

(defn set-attestation!
  "Property.

  attestation is an optional property of the `web.auth.PublicKeyCredentialCreationOptions`
  This is a string whose value indicates the preference regarding
  attestation transport, between the authenticator, the client
  the relying party.

  `attestation = publicKeyCredentialCreationOptions.attestation`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/attestation`"
  [this val]
  (aset this "attestation" val))

(defn extensions
  "Property.

  extensions, an optional property of the `web.auth.PublicKeyCredentialCreationOptions`
  is an object providing the client extensions and their input

  `extensions = publicKeyCredentialCreationOptions.extensions`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/extensions`"
  [this]
  (-> this (.-extensions)))

(defn set-extensions!
  "Property.

  extensions, an optional property of the `web.auth.PublicKeyCredentialCreationOptions`
  is an object providing the client extensions and their input

  `extensions = publicKeyCredentialCreationOptions.extensions`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PublicKeyCredentialCreationOptions/extensions`"
  [this val]
  (aset this "extensions" val))

