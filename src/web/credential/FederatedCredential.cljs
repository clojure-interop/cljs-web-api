(ns web.credential.FederatedCredential
  "The FederatedCredential interface of the the Credential Management
  provides information about credentials from a federated identity
  A federated identity provider is an entity that a website trusts
  correctly authenticate a user, and that provides an API for that
  OpenID Connect is an example of a federated identity provider"
  (:refer-clojure :exclude []))

(defn provider
  "Property.

  [Read Only]
  [Experimental]

  The provider property of the `web.credential.FederatedCredential`
  returns a `web.USVString` containing a credential's federated
  provider.

  `var provider = FederatedCredential.provider`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential/provider`"
  [this]
  (-> this (.-provider)))

(defn protocol
  "Property.

  [Read Only]
  [Experimental]

  The protocol property of the `web.credential.FederatedCredential`
  returns a read-only `web.dom.DOMString` containing a credential's
  identity protocol. If this property is `js.null`, the protocol
  be inferred from the `FederatedCredential.provider` property.

  `var protocol = FederatedCredential.protocol`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential/protocol`"
  [this]
  (-> this (.-protocol)))

