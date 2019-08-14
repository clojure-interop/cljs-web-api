(ns rtc.RTCDtlsTransport
  "The RTCDtlsTransport interface provides information which describes
  Datagram Transport Layer Security (DTLS) transport."
  (:refer-clojure :exclude []))

(defn ice-transport
  "Property.

  The read-only `rtc.RTCDtlsTransport` property iceTransport contains
  reference to the underlying `rtc.RTCIceTransport`.

  `var iceTransport = rtcDtlsTransport.iceTransport;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDtlsTransport/iceTransport`"
  [this]
  (-> this (.iceTransport)))

(defn state
  "Property.

  The state read-only property of the `rtc.RTCDtlsTransport` interface
  information which describes a Datagram Transport Layer Security
  transport state.

  `var myState = dtlsTransport.state;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDtlsTransport/state`"
  [this]
  (-> this (.state)))

