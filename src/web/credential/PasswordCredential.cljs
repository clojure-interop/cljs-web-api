(ns web.credential.PasswordCredential
  "The interface of the Credential Management API provides information
  a username/password pair. In supporting browsers an instance
  this class may be passed in the credential member of the init
  for global `fetch`."
  (:refer-clojure :exclude [name]))

(defn additional-data
  "Property.

  [Deprecated]
  [Experimental]

  The additionalData property of the `web.credential.PasswordCredential`
  takes one of a `web.FormData` instance, a `web.url.URLSearchParams`
  or null.

  `passwordCredential.additionalData = formData
  formData = passwordCredential.additionalData
  passwordCredential.additionalData = urlSearchParams
  ulrSearchParams = passwordCredential.additionalData`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/additionalData`"
  [this]
  (-> this (.-additionalData)))

(defn set-additional-data!
  "Property.

  [Deprecated]
  [Experimental]

  The additionalData property of the `web.credential.PasswordCredential`
  takes one of a `web.FormData` instance, a `web.url.URLSearchParams`
  or null.

  `passwordCredential.additionalData = formData
  formData = passwordCredential.additionalData
  passwordCredential.additionalData = urlSearchParams
  ulrSearchParams = passwordCredential.additionalData`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/additionalData`"
  [this val]
  (aset this "additionalData" val))

(defn icon-url
  "Property.

  [Read Only]
  [Experimental]

  The iconURL read-only property of the `web.credential.PasswordCredential`
  returns a `web.USVString` containing a URL pointing to an image
  an icon. This image is intended for display in a credential chooser.
  URL must be accessible without authentication.

  `url =passwordCredential.iconURL`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/iconURL`"
  [this]
  (-> this (.-iconURL)))

(defn id-name
  "Property.

  [Deprecated]
  [Experimental]

  The idName property of the `web.credential.PasswordCredential`
  returns a `web.USVString`, representing the name that will be
  for the ID field

  `var idName = PasswordCredential.idName
  PasswordCredential.idName = \\\"userID\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/idName`"
  [this]
  (-> this (.-idName)))

(defn set-id-name!
  "Property.

  [Deprecated]
  [Experimental]

  The idName property of the `web.credential.PasswordCredential`
  returns a `web.USVString`, representing the name that will be
  for the ID field

  `var idName = PasswordCredential.idName
  PasswordCredential.idName = \\\"userID\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/idName`"
  [this val]
  (aset this "idName" val))

(defn name
  "Property.

  [Read Only]
  [Experimental]

  The name read-only property of the `web.credential.PasswordCredential`
  returns a `USVSTring` containing a human-readable public name
  display in a credential chooser.

  `name =passwordCredential.name`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/name`"
  [this]
  (-> this (.-name)))

(defn password
  "Property.

  [Read Only]
  [Experimental]

  The password read-only property of the `web.credential.PasswordCredential`
  returns a `web.USVString` containing the password of the credential.

  `password =passwordCredential.password`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/password`"
  [this]
  (-> this (.-password)))

(defn password-name
  "Property.

  [Deprecated]
  [Experimental]

  The passwordName property of the `web.credential.PasswordCredential`
  returns a `web.USVString`, depicting the name used by the password

  `var passwordName = PasswordCredential.passwordName
  PasswordCredential.passwordName = \\\"passcode\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/passwordName`"
  [this]
  (-> this (.-passwordName)))

(defn set-password-name!
  "Property.

  [Deprecated]
  [Experimental]

  The passwordName property of the `web.credential.PasswordCredential`
  returns a `web.USVString`, depicting the name used by the password

  `var passwordName = PasswordCredential.passwordName
  PasswordCredential.passwordName = \\\"passcode\\\"`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PasswordCredential/passwordName`"
  [this val]
  (aset this "passwordName" val))

