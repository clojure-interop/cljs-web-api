(ns rtc.RTCSctpTransport
  "The RTCSctpTransport interface provides information which describes
  Stream Control Transmission Protocol (SCTP) transport. This provides
  about limitations of the transport, but also provides a way to
  the underlying Datagram Transport Layer Security (DTLS) transport
  which SCTP packets for all of an `rtc.RTCPeerConnection`'s data
  are sent and received."
  (:refer-clojure :exclude []))

(defn state
  "Property.

  The state read-only property of the `rtc.RTCSctpTransport` interface
  information which describes a Stream Control Transmission Protocol
  transport state.

  `var myState = sctpTransport.state;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCSctpTransport/state`"
  [this]
  (-> this (.state)))

