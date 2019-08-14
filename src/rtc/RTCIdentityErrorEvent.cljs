(ns rtc.RTCIdentityErrorEvent
  "The RTCIdentityErrorEvent interface represents an error associated
  the identity provider (idP). This is usually for an `rtc.RTCPeerConnection`.
  events are sent with this type: idpassertionerror and idpvalidationerror."
  (:refer-clojure :exclude []))

(defn idp
  "Property.

  The read-only property RTCIdentityErrorEvent.idp returns the
  describing the domain name of the identity provider (idp) generating
  error response event.

  `var idp = event.idp;
  event.idp = \\\"developer.mozilla.org\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIdentityErrorEvent/idp`"
  [this]
  (-> this (.idp)))

(defn login-url
  "Property.

  The read-only property RTCIdentityErrorEvent.loginUrl is a `dom.DOMString`
  the URL where the user can complete the authentication. It can
  null and is provided by the identity provider (idp).

  `var loginUrl = event.loginUrl;
  event.loginUrl = \\\"https://developer.mozilla.org/fakeURL\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIdentityErrorEvent/loginUrl`"
  [this]
  (-> this (.loginUrl)))

(defn protocol
  "Property.

  The read-only property RTCIdentityErrorEvent.protocol is a `dom.DOMString`
  the Idp protocol in use.

  `var protocol = event.protocol;
  event.protocol = \\\"idp.html\\\";`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIdentityErrorEvent/protocol`"
  [this]
  (-> this (.protocol)))

