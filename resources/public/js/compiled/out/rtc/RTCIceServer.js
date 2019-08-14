// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCIceServer');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The `rtc.RTCIceServer` dictionary's credential property is a
 *   providing the credential to use when connecting to the described
 *   This is typically a password, key, or other secret.
 * 
 *   `var iceServer = {
 *   ...
 *   credential = credential,
 *   ...
 *   };
 * 
 *   var credential = iceServer.credential;
 * 
 *   iceServer.credential = newCredential;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/credential`
 */
rtc.RTCIceServer.credential = (function rtc$RTCIceServer$credential(this$){
return this$.credential();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceServer` dictionary's credential property is a
 *   providing the credential to use when connecting to the described
 *   This is typically a password, key, or other secret.
 * 
 *   `var iceServer = {
 *   ...
 *   credential = credential,
 *   ...
 *   };
 * 
 *   var credential = iceServer.credential;
 * 
 *   iceServer.credential = newCredential;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/credential`
 */
rtc.RTCIceServer.set_credential_BANG_ = (function rtc$RTCIceServer$set_credential_BANG_(this$,val){
return (this$["credential"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceServer` dictionary's credentialType property is
 *   string value from the RTCIceCredentialType enum which indicates
 *   type of credential the `rtc.RTCIceServer.credential` value is.
 *   default is password.
 * 
 *   `var iceServer = {
 *   ...
 *   credentialType = newCredentialType,
 *   ...
 *   };
 * 
 *   var credentialType = iceServer.credentialType;
 * 
 *   iceServer.credentialType = newCredentialType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/credentialType`
 */
rtc.RTCIceServer.credential_type = (function rtc$RTCIceServer$credential_type(this$){
return this$.credentialType();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceServer` dictionary's credentialType property is
 *   string value from the RTCIceCredentialType enum which indicates
 *   type of credential the `rtc.RTCIceServer.credential` value is.
 *   default is password.
 * 
 *   `var iceServer = {
 *   ...
 *   credentialType = newCredentialType,
 *   ...
 *   };
 * 
 *   var credentialType = iceServer.credentialType;
 * 
 *   iceServer.credentialType = newCredentialType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/credentialType`
 */
rtc.RTCIceServer.set_credential_type_BANG_ = (function rtc$RTCIceServer$set_credential_type_BANG_(this$,val){
return (this$["credentialType"] = val);
});
/**
 * Property.
 * 
 *   The obsolete `rtc.RTCIceServer` dictionary's url property specifies
 *   URL of a single ICE server to be used while negotiating connections.
 *   was removed from the specification in June 2013 but is still
 *   used in older examples and books, so we include documentation
 *   to help adapt old code to new browsers.
 * 
 *   `var iceServer = {
 *   ...
 *   url = iceServerUrl,
 *   ...
 *   };
 * 
 *   var serverUrl = iceServer.url;
 * 
 *   iceServer.url = iceServerUrl;
 * 
 *   The value of this property is a `dom.DOMString` containing the full URL of a server to use during ICE negotiation.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/url`
 */
rtc.RTCIceServer.url = (function rtc$RTCIceServer$url(this$){
return this$.url();
});
/**
 * Property.
 * 
 *   The obsolete `rtc.RTCIceServer` dictionary's url property specifies
 *   URL of a single ICE server to be used while negotiating connections.
 *   was removed from the specification in June 2013 but is still
 *   used in older examples and books, so we include documentation
 *   to help adapt old code to new browsers.
 * 
 *   `var iceServer = {
 *   ...
 *   url = iceServerUrl,
 *   ...
 *   };
 * 
 *   var serverUrl = iceServer.url;
 * 
 *   iceServer.url = iceServerUrl;
 * 
 *   The value of this property is a `dom.DOMString` containing the full URL of a server to use during ICE negotiation.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/url`
 */
rtc.RTCIceServer.set_url_BANG_ = (function rtc$RTCIceServer$set_url_BANG_(this$,val){
return (this$["url"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceServer` dictionary's urls property specifies the
 *   or URLs of the servers to be used for ICE negotiations. These
 *   typically STUN and/or TURN servers.
 * 
 *   `var iceServer = {
 *   urls = iceServerUrl | [ url1, ..., urlN ],
 *   username: \"webrtc\", // optional
 *   credential: \"turnpassword\" // optional
 *   };
 * 
 *   iceServers.push(iceServer);
 * 
 *   The value of this property may be specified as a single URL or as an array of multiple URLs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/urls`
 */
rtc.RTCIceServer.urls = (function rtc$RTCIceServer$urls(this$){
return this$.urls();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceServer` dictionary's urls property specifies the
 *   or URLs of the servers to be used for ICE negotiations. These
 *   typically STUN and/or TURN servers.
 * 
 *   `var iceServer = {
 *   urls = iceServerUrl | [ url1, ..., urlN ],
 *   username: \"webrtc\", // optional
 *   credential: \"turnpassword\" // optional
 *   };
 * 
 *   iceServers.push(iceServer);
 * 
 *   The value of this property may be specified as a single URL or as an array of multiple URLs.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/urls`
 */
rtc.RTCIceServer.set_urls_BANG_ = (function rtc$RTCIceServer$set_urls_BANG_(this$,val){
return (this$["urls"] = val);
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceServer` dictionary's username property is a string
 *   specifies the username to use when authenticating with the ICE
 *   being described.
 * 
 *   `var iceServer = {
 *   ...
 *   username = username,
 *   ...
 *   };
 * 
 *   var username = iceServer.username;
 * 
 *   iceServer.username = newUsername;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/username`
 */
rtc.RTCIceServer.username = (function rtc$RTCIceServer$username(this$){
return this$.username();
});
/**
 * Property.
 * 
 *   The `rtc.RTCIceServer` dictionary's username property is a string
 *   specifies the username to use when authenticating with the ICE
 *   being described.
 * 
 *   `var iceServer = {
 *   ...
 *   username = username,
 *   ...
 *   };
 * 
 *   var username = iceServer.username;
 * 
 *   iceServer.username = newUsername;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceServer/username`
 */
rtc.RTCIceServer.set_username_BANG_ = (function rtc$RTCIceServer$set_username_BANG_(this$,val){
return (this$["username"] = val);
});

//# sourceMappingURL=RTCIceServer.js.map?rel=1565798813930
