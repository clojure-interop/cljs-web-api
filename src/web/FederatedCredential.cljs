(ns web.FederatedCredential
  "The FederatedCredential interface of the the Credential Management
  provides information about credentials from a federated identity
  A federated identity provider is an entity that a website trusts
  correctly authenticate a user, and that provides an API for that
  OpenID Connect is an example of a federated identity provider"
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The FederatedCredential constructor creates a new `web.FederatedCredential` object.

  init
  Options are:

  provider: A `web.USVString`; identifying the credential provider.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential/FederatedCredential`"
  js/FederatedCredential)

(defn protocol
  "Property.

  The protocol property of the `web.FederatedCredential` interface
  a read-only `dom.DOMString` containing a credential's federated
  protocol. If this property is `web.null`, the protocol may be
  from the `web.FederatedCredential.provider` property.

  `var protocol = FederatedCredential.protocol`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential/protocol`"
  [this]
  (-> this (.protocol)))

(defn set-protocol!
  "Property.

  The protocol property of the `web.FederatedCredential` interface
  a read-only `dom.DOMString` containing a credential's federated
  protocol. If this property is `web.null`, the protocol may be
  from the `web.FederatedCredential.provider` property.

  `var protocol = FederatedCredential.protocol`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential/protocol`"
  [this val]
  (aset this "protocol" val))

(defn provider
  "Property.

  The provider property of the `web.FederatedCredential` interface
  a `web.USVString` containing a credential's federated identity

  `var provider = FederatedCredential.provider`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential/provider`"
  [this]
  (-> this (.provider)))

(defn set-provider!
  "Property.

  The provider property of the `web.FederatedCredential` interface
  a `web.USVString` containing a credential's federated identity

  `var provider = FederatedCredential.provider`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential/provider`"
  [this val]
  (aset this "provider" val))

