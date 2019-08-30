(ns web.credential.Credential
  "The Credential interface of the the Credential Management API
  information about an entity as a prerequisite to a trust decision."
  (:refer-clojure :exclude [type name]))

(defn id
  "Property.

  [Read Only]
  [Experimental]

  The id property of the `web.credential.Credential` interface
  a `web.dom.DOMString` containing the credential's identifier.
  might be any one of a GUID, username, or email address.

  `var id = Credential.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Credential/id`"
  [this]
  (-> this (.-id)))

(defn type
  "Property.

  [Read Only]
  [Experimental]

  The type property of the `web.credential.Credential` interface
  a `web.dom.DOMString` containing the credential's type. Valid
  are password, federated and public-key.

  `var credType = Credential.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Credential/type`"
  [this]
  (-> this (.-type)))

(defn name
  "Property.

  [Experimental]

  The name property of the `web.credential.Credential` interface
  a `web.dom.DOMString`, containing the name associated with a

  `var credName = Credential.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Credential/name`"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  [Experimental]

  The name property of the `web.credential.Credential` interface
  a `web.dom.DOMString`, containing the name associated with a

  `var credName = Credential.name;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Credential/name`"
  [this val]
  (aset this "name" val))

