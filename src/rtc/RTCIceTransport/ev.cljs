(ns rtc.RTCIceTransport.ev
  "RTCIceTransport Events."
  (:refer-clojure :exclude []))

(def gatheringstatechange
  "Event.

  A gatheringstatechange event is sent to an `rtc.RTCIceTransport`
  its ICE candidate gathering state changes.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/gatheringstatechange_event`"

  "gatheringstatechange")

(def selectedcandidatepairchange
  "Event.

  A selectedcandidatepairchange event is sent to an `rtc.RTCIceTransport`
  the ICE agent selects a new pair of candidates that describe
  endpoints of a viable connection.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event`"

  "selectedcandidatepairchange")

(def statechange
  "Event.

  A statechange event occurs when the `rtc.RTCIceTransport` changes
  The `web.state` can be used to determine how far through the
  of examining, verifying, and selecting a valid candidate pair
  prior to successfully connecting the two peers for WebRTC communications.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCIceTransport/statechange_event`"

  "statechange")

