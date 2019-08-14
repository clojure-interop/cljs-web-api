(ns web.Credential
  "The Credential interface of the the Credential Management API
  information about an entity as a prerequisite to a trust decision."
  (:refer-clojure :exclude [name type]))

(defn id
  "Property.

  The id property of the `web.Credential` interface returns a `dom.DOMString`
  the credential's identifier. This might be any one of a GUID,
  or email address.

  `var id = Credential.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Credential/id`"
  [this]
  (-> this (.id)))

(defn set-id!
  "Property.

  The id property of the `web.Credential` interface returns a `dom.DOMString`
  the credential's identifier. This might be any one of a GUID,
  or email address.

  `var id = Credential.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Credential/id`"
  [this val]
  (aset this "id" val))

(defn name
  "Property.

  The name property of the `web.Credential` interface returns a
  containing the name associated with a credential.

  `var credName = Credential.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Credential/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The name property of the `web.Credential` interface returns a
  containing the name associated with a credential.

  `var credName = Credential.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Credential/name`"
  [this val]
  (aset this "name" val))

(defn type
  "Property.

  The type property of the `web.Credential` interface returns a
  containing the credential's type. Valid values are password and

  `var credType = Credential.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Credential/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The type property of the `web.Credential` interface returns a
  containing the credential's type. Valid values are password and

  `var credType = Credential.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Credential/type`"
  [this val]
  (aset this "type" val))

