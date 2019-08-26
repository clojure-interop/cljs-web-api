(ns web.rtc.RTCIdentityAssertion
  "The RTCIdentityAssertion interface of the the WebRTC API represents
  identity of the a remote peer of the current connection. If no
  has yet been set and verified this interface returns null. Once
  it can't be changed."
  (:refer-clojure :exclude []))

(defn idp
  "Property.

  Indicates the provider of the identity assertion."
  [this]
  (-> this (.idp)))

(defn set-idp!
  "Property.

  Indicates the provider of the identity assertion."
  [this val]
  (aset this "idp" val))

