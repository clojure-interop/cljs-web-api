(ns web.rtc.RTCSctpTransport
  "The RTCSctpTransport interface provides information which describes
  Stream Control Transmission Protocol (SCTP) transport. This provides
  about limitations of the transport, but also provides a way to
  the underlying Datagram Transport Layer Security (DTLS) transport
  which SCTP packets for all of an `web.audio.RTCPeerConnection`'s
  channels are sent and received."
  (:refer-clojure :exclude []))

(defn max-channels-read
  "Property.

  An integer value indicating the maximum number of RTCDataChannels
  can be open simultaneously."
  [this]
  (-> this (.maxChannelsRead)))

(defn set-max-channels-read!
  "Property.

  An integer value indicating the maximum number of RTCDataChannels
  can be open simultaneously."
  [this val]
  (aset this "maxChannelsRead" val))

(defn onstatechange
  "Property.

  Fired when the RTCSctpTransport.state changes."
  [this]
  (-> this (.onstatechange)))

(defn set-onstatechange!
  "Property.

  Fired when the RTCSctpTransport.state changes."
  [this val]
  (aset this "onstatechange" val))

(defn state
  "Property.

  The state read-only property of the `web.rtc.RTCSctpTransport`
  provides information which describes a Stream Control Transmission
  (SCTP) transport state.

  `var myState = sctpTransport.state;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSctpTransport/state`"
  [this]
  (-> this (.state)))

