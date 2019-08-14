// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.FederatedCredential');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The FederatedCredential constructor creates a new `web.FederatedCredential` object.
 * 
 *   init
 *   Options are:
 * 
 *   provider: A `web.USVString`; identifying the credential provider.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential/FederatedCredential`
 */
web.FederatedCredential.constructor$ = FederatedCredential;
/**
 * Property.
 * 
 *   The protocol property of the `web.FederatedCredential` interface
 *   a read-only `dom.DOMString` containing a credential's federated
 *   protocol. If this property is `web.null`, the protocol may be
 *   from the `web.FederatedCredential.provider` property.
 * 
 *   `var protocol = FederatedCredential.protocol`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential/protocol`
 */
web.FederatedCredential.protocol = (function web$FederatedCredential$protocol(this$){
return this$.protocol();
});
/**
 * Property.
 * 
 *   The protocol property of the `web.FederatedCredential` interface
 *   a read-only `dom.DOMString` containing a credential's federated
 *   protocol. If this property is `web.null`, the protocol may be
 *   from the `web.FederatedCredential.provider` property.
 * 
 *   `var protocol = FederatedCredential.protocol`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential/protocol`
 */
web.FederatedCredential.set_protocol_BANG_ = (function web$FederatedCredential$set_protocol_BANG_(this$,val){
return (this$["protocol"] = val);
});
/**
 * Property.
 * 
 *   The provider property of the `web.FederatedCredential` interface
 *   a `web.USVString` containing a credential's federated identity
 * 
 *   `var provider = FederatedCredential.provider`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential/provider`
 */
web.FederatedCredential.provider = (function web$FederatedCredential$provider(this$){
return this$.provider();
});
/**
 * Property.
 * 
 *   The provider property of the `web.FederatedCredential` interface
 *   a `web.USVString` containing a credential's federated identity
 * 
 *   `var provider = FederatedCredential.provider`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential/provider`
 */
web.FederatedCredential.set_provider_BANG_ = (function web$FederatedCredential$set_provider_BANG_(this$,val){
return (this$["provider"] = val);
});

//# sourceMappingURL=FederatedCredential.js.map?rel=1565798861710
