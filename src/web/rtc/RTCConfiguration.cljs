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
  (-> this (.-bundlePolicy)))

(defn set-bundle-policy!
  "Property.

  Specifies how to handle negotiation of candidates when the remote
  is not compatible with the SDP BUNDLE standard. This must be
  of the values from the enum RTCBundlePolicy. If this value isn't
  in the dictionary, \"balanced\" is assumed."
  [this val]
  (aset this "bundlePolicy" val))

(defn certificates
  "Property.

  An Array of objects of type RTCCertificate which are used by
  connection for authentication. If this property isn't specified,
  set of certificates is generated automatically for each RTCPeerConnection
  Although only one certificate is used by a given connection,
  certificates for multiple algorithms may improve the odds of
  connecting in some circumstances. See Using certificates below
  additional information.
  This configuration option cannot be changed after it is first
  once the certificates have been set, this property is ignored
  future calls to RTCPeerConnection.setConfiguration()."
  [this]
  (-> this (.-certificates)))

(defn set-certificates!
  "Property.

  An Array of objects of type RTCCertificate which are used by
  connection for authentication. If this property isn't specified,
  set of certificates is generated automatically for each RTCPeerConnection
  Although only one certificate is used by a given connection,
  certificates for multiple algorithms may improve the odds of
  connecting in some circumstances. See Using certificates below
  additional information.
  This configuration option cannot be changed after it is first
  once the certificates have been set, this property is ignored
  future calls to RTCPeerConnection.setConfiguration()."
  [this val]
  (aset this "certificates" val))

(defn ice-candidate-pool-size
  "Property.

  An unsigned 16-bit integer value which specifies the size of
  prefetched ICE candidate pool. The default value is 0 (meaning
  candidate prefetching will occur). You may find in some cases
  connections can be established more quickly by allowing the ICE
  to start fetching ICE candidates before you start trying to connect,
  that they're already available for inspection when RTCPeerConnection.setLocalDescription()
  called.
  Changing the size of the ICE candidate pool may trigger the
  of ICE gathering."
  [this]
  (-> this (.-iceCandidatePoolSize)))

(defn set-ice-candidate-pool-size!
  "Property.

  An unsigned 16-bit integer value which specifies the size of
  prefetched ICE candidate pool. The default value is 0 (meaning
  candidate prefetching will occur). You may find in some cases
  connections can be established more quickly by allowing the ICE
  to start fetching ICE candidates before you start trying to connect,
  that they're already available for inspection when RTCPeerConnection.setLocalDescription()
  called.
  Changing the size of the ICE candidate pool may trigger the
  of ICE gathering."
  [this val]
  (aset this "iceCandidatePoolSize" val))

(defn ice-servers
  "Property.

  An array of RTCIceServer objects, each describing one server
  may be used by the ICE agent; these are typically STUN and/or
  servers. If this isn't specified, the connection attempt will
  made with no STUN or TURN server available, which limits the
  to local peers."
  [this]
  (-> this (.-iceServers)))

(defn set-ice-servers!
  "Property.

  An array of RTCIceServer objects, each describing one server
  may be used by the ICE agent; these are typically STUN and/or
  servers. If this isn't specified, the connection attempt will
  made with no STUN or TURN server available, which limits the
  to local peers."
  [this val]
  (aset this "iceServers" val))

(defn ice-transport-policy
  "Property.

  The current ICE transport policy; this must be one of the values
  the RTCIceTransportPolicy enum. If this isn't specified, \"all\"
  assumed."
  [this]
  (-> this (.-iceTransportPolicy)))

(defn set-ice-transport-policy!
  "Property.

  The current ICE transport policy; this must be one of the values
  the RTCIceTransportPolicy enum. If this isn't specified, \"all\"
  assumed."
  [this val]
  (aset this "iceTransportPolicy" val))

(defn peer-identity
  "Property.

  A DOMString which specifies the target peer identity for the
  If this value is set (it defaults to null), the RTCPeerConnection
  not connect to a remote peer unless it can successfully authenticate
  the given name."
  [this]
  (-> this (.-peerIdentity)))

(defn set-peer-identity!
  "Property.

  A DOMString which specifies the target peer identity for the
  If this value is set (it defaults to null), the RTCPeerConnection
  not connect to a remote peer unless it can successfully authenticate
  the given name."
  [this val]
  (aset this "peerIdentity" val))

(defn rtcp-mux-policy
  "Property.

  The RTCP mux policy to use when gathering ICE candidates, in
  to support non-multiplexed RTCP. The value must be one of those
  the RTCRtcpMuxPolicy enum. The default is \"require\"."
  [this]
  (-> this (.-rtcpMuxPolicy)))

(defn set-rtcp-mux-policy!
  "Property.

  The RTCP mux policy to use when gathering ICE candidates, in
  to support non-multiplexed RTCP. The value must be one of those
  the RTCRtcpMuxPolicy enum. The default is \"require\"."
  [this val]
  (aset this "rtcpMuxPolicy" val))

