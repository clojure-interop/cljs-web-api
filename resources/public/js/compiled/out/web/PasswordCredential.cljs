(ns web.PasswordCredential
  "The interface of the Credential Management API provides information
  a username/password pair. In supporting browsers an instance
  this class may be passed in the credential member of the init
  for global `web.fetch`."
  (:refer-clojure :exclude [name]))

(def constructor
  "Constructor.

  The PasswordCredential constructor creates a new `web.PasswordCredential` object.

  Either of the following:


  passwordCredentialData
  A PasswordCredentialData dictionary containing the following fields:

  iconURL: (Optional) the URL of a user's avatar image.
  id: The ID of the user signing in.
  name: (Optional) The name of the user signing in.
  password: The password of the user signing in.


  htmlFormElement
  A reference to an `html.HTMLFormElement` with appropriate input fields. The form should, at the very least, contain an id and password. It could also require a CSRF token.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/PasswordCredential`"
  js/PasswordCredential)

(defn additional-data
  "Property.

  The additionalData property of the `web.PasswordCredential` interface
  one of a `web.FormData` instance, a `web.URLSearchParams` instance,
  null.

  `passwordCredential.additionalData = formData
  formData = passwordCredential.additionalData
  passwordCredential.additionalData = urlSearchParams
  ulrSearchParams = passwordCredential.additionalData`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/additionalData`"
  [this]
  (-> this (.additionalData)))

(defn set-additional-data!
  "Property.

  The additionalData property of the `web.PasswordCredential` interface
  one of a `web.FormData` instance, a `web.URLSearchParams` instance,
  null.

  `passwordCredential.additionalData = formData
  formData = passwordCredential.additionalData
  passwordCredential.additionalData = urlSearchParams
  ulrSearchParams = passwordCredential.additionalData`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/additionalData`"
  [this val]
  (aset this "additionalData" val))

(defn icon-url
  "Property.

  The iconURL read-only property of the `web.PasswordCredential`
  returns a `web.USVString` containing a URL pointing to an image
  an icon. This image is intended for display in a credential chooser.
  URL must be accessible without authentication.

  `url =passwordCredential.iconURL`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/iconURL`"
  [this]
  (-> this (.iconURL)))

(defn set-icon-url!
  "Property.

  The iconURL read-only property of the `web.PasswordCredential`
  returns a `web.USVString` containing a URL pointing to an image
  an icon. This image is intended for display in a credential chooser.
  URL must be accessible without authentication.

  `url =passwordCredential.iconURL`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/iconURL`"
  [this val]
  (aset this "iconURL" val))

(defn id-name
  "Property.

  The idName property of the `web.PasswordCredential` interface
  a `web.USVString`, representing the name that will be used for
  ID field

  `var idName = PasswordCredential.idName
  PasswordCredential.idName = \\\"userID\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/idName`"
  [this]
  (-> this (.idName)))

(defn set-id-name!
  "Property.

  The idName property of the `web.PasswordCredential` interface
  a `web.USVString`, representing the name that will be used for
  ID field

  `var idName = PasswordCredential.idName
  PasswordCredential.idName = \\\"userID\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/idName`"
  [this val]
  (aset this "idName" val))

(defn name
  "Property.

  The name read-only property of the `web.PasswordCredential` interface
  a `web.USVSTring` containing a human-readable public name for
  in a credential chooser.

  `name =passwordCredential.name`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The name read-only property of the `web.PasswordCredential` interface
  a `web.USVSTring` containing a human-readable public name for
  in a credential chooser.

  `name =passwordCredential.name`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/name`"
  [this val]
  (aset this "name" val))

(defn password
  "Property.

  The password read-only property of the `web.PasswordCredential`
  returns a `web.USVString` containing the password of the credential.

  `password =passwordCredential.password`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/password`"
  [this]
  (-> this (.password)))

(defn set-password!
  "Property.

  The password read-only property of the `web.PasswordCredential`
  returns a `web.USVString` containing the password of the credential.

  `password =passwordCredential.password`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/password`"
  [this val]
  (aset this "password" val))

(defn password-name
  "Property.

  The passwordName property of the `web.PasswordCredential` interface
  a `web.USVString`, depicting the name used by the password field

  `var passwordName = PasswordCredential.passwordName
  PasswordCredential.passwordName = \\\"passcode\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/passwordName`"
  [this]
  (-> this (.passwordName)))

(defn set-password-name!
  "Property.

  The passwordName property of the `web.PasswordCredential` interface
  a `web.USVString`, depicting the name used by the password field

  `var passwordName = PasswordCredential.passwordName
  PasswordCredential.passwordName = \\\"passcode\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/passwordName`"
  [this val]
  (aset this "passwordName" val))

