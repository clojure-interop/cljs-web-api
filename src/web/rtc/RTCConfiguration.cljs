(ns web.rtc.RTCConfiguration
  "The RTCConfiguration dictionary is used to provide configuration
  for an `web.audio.RTCPeerConnection`. It may be passed into the
  when instantiating a connection, or used with the `RTCPeerConnection.getConfiguration()`
  `RTCPeerConnection.setConfiguration()` methods, which allow inspecting
  changing the configuration while a connection is established."
  (:refer-clojure :exclude []))

(defn bundle-policy
  "Property.

  Specifies how to handle negotiation of candidates when the remote
  is not compatible with the SDP BUNDLE standard. This must be
  of the values from the enum RTCBundlePolicy. If this value isn't
  in the dictionary, \"balanced\" is assumed."
  [this]
  (-> this (.bundlePolicy)))

(defn set-bundle-policy!
  "Property.

  Specifies how to handle negotiation of candidates when the remote
  is not compatible with the SDP BUNDLE standard. This must be
  of the values from the enum RTCBundlePolicy. If this value isn't
  in the dictionary, \"balanced\" is assumed."
  [this val]
  (aset this "bundlePolicy" val))

