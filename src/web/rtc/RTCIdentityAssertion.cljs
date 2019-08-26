(ns web.rtc.RTCIdentityAssertion
  "The RTCIdentityAssertion interface of the the WebRTC API represents
  identity of the a remote peer of the current connection. If no
  has yet been set and verified this interface returns null. Once
  it can't be changed."
  (:refer-clojure :exclude [name]))

(defn idp
  "Property.

  Indicates the provider of the identity assertion."
  [this]
  (-> this (.-idp)))

(defn set-idp!
  "Property.

  Indicates the provider of the identity assertion."
  [this val]
  (aset this "idp" val))

(defn name
  "Property.

  Indicates the name of the identity assertion provider."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  Indicates the name of the identity assertion provider."
  [this val]
  (aset this "name" val))

