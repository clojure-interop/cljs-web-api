(ns web.rtc.RTCSctpTransport
  "The RTCSctpTransport interface provides information which describes
  Stream Control Transmission Protocol (SCTP) transport. This provides
  about limitations of the transport, but also provides a way to
  the underlying Datagram Transport Layer Security (DTLS) transport
  which SCTP packets for all of an `web.audio.RTCPeerConnection`'s
  channels are sent and received."
  (:refer-clojure :exclude []))

(defn max-channels
  "Property.

  An integer value indicating the maximum number of RTCDataChannels
  can be open simultaneously."
  [this]
  (-> this (.-maxChannels)))

(defn set-max-channels!
  "Property.

  An integer value indicating the maximum number of RTCDataChannels
  can be open simultaneously."
  [this val]
  (aset this "maxChannels" val))

(defn max-message-size
  "Property.

  An integer value indicating the maximum size, in bytes, of a
  which can be sent using the RTCDataChannel.send() method."
  [this]
  (-> this (.-maxMessageSize)))

(defn set-max-message-size!
  "Property.

  An integer value indicating the maximum size, in bytes, of a
  which can be sent using the RTCDataChannel.send() method."
  [this val]
  (aset this "maxMessageSize" val))

(defn state
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The state read-only property of the `web.rtc.RTCSctpTransport`
  provides information which describes a Stream Control Transmission
  (SCTP) transport state.

  `var myState = sctpTransport.state;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSctpTransport/state`"
  [this]
  (-> this (.-state)))

(defn transport
  "Property.

  An RTCDtlsTransport object representing the DTLS transport used
  the transmission and receipt of data packets."
  [this]
  (-> this (.-transport)))

(defn set-transport!
  "Property.

  An RTCDtlsTransport object representing the DTLS transport used
  the transmission and receipt of data packets."
  [this val]
  (aset this "transport" val))

(defn onstatechange
  "Property.

  Fired when the RTCSctpTransport.state changes."
  [this]
  (-> this (.-onstatechange)))

(defn set-onstatechange!
  "Property.

  Fired when the RTCSctpTransport.state changes."
  [this val]
  (aset this "onstatechange" val))

