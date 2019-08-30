(ns web.rtc.RTCDtlsTransport
  "The RTCDtlsTransport interface provides information which describes
  Datagram Transport Layer Security (DTLS) transport."
  (:refer-clojure :exclude []))

(defn ice-transport
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The read-only `web.rtc.RTCDtlsTransport` property iceTransport
  a reference to the underlying `web.audio.RTCIceTransport`.

  `var iceTransport = rtcDtlsTransport.iceTransport;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDtlsTransport/iceTransport`"
  [this]
  (-> this (.-iceTransport)))

(defn state
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The state read-only property of the `web.rtc.RTCDtlsTransport`
  provides information which describes a Datagram Transport Layer
  (DTLS) transport state.

  `var myState = dtlsTransport.state;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCDtlsTransport/state`"
  [this]
  (-> this (.-state)))

