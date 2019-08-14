// Compiled by ClojureScript 1.9.946 {}
goog.provide('rtc.RTCIdentityErrorEvent');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The read-only property RTCIdentityErrorEvent.idp returns the
 *   describing the domain name of the identity provider (idp) generating
 *   error response event.
 * 
 *   `var idp = event.idp;
 *   event.idp = \"developer.mozilla.org\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIdentityErrorEvent/idp`
 */
rtc.RTCIdentityErrorEvent.idp = (function rtc$RTCIdentityErrorEvent$idp(this$){
return this$.idp();
});
/**
 * Property.
 * 
 *   The read-only property RTCIdentityErrorEvent.loginUrl is a `dom.DOMString`
 *   the URL where the user can complete the authentication. It can
 *   null and is provided by the identity provider (idp).
 * 
 *   `var loginUrl = event.loginUrl;
 *   event.loginUrl = \"https://developer.mozilla.org/fakeURL\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIdentityErrorEvent/loginUrl`
 */
rtc.RTCIdentityErrorEvent.login_url = (function rtc$RTCIdentityErrorEvent$login_url(this$){
return this$.loginUrl();
});
/**
 * Property.
 * 
 *   The read-only property RTCIdentityErrorEvent.protocol is a `dom.DOMString`
 *   the Idp protocol in use.
 * 
 *   `var protocol = event.protocol;
 *   event.protocol = \"idp.html\";`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIdentityErrorEvent/protocol`
 */
rtc.RTCIdentityErrorEvent.protocol = (function rtc$RTCIdentityErrorEvent$protocol(this$){
return this$.protocol();
});

//# sourceMappingURL=RTCIdentityErrorEvent.js.map?rel=1565798851505
