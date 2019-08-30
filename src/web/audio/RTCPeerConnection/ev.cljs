(ns web.audio.RTCPeerConnection.ev
  "RTCPeerConnection Events."
  (:refer-clojure :exclude []))

(def addstream
  "Event.

  [Obsolute]

  The obsolete addstream event is sent to an `web.audio.RTCPeerConnection`
  new media, in the form of a `web.streams.MediaStream` object,
  been added to it.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/addstream_event`"

  "addstream")

(def identityresult
  "Event.

  [Obsolute]

  An identityresult event is sent to an `web.audio.RTCPeerConnection`
  `onidentityresult` event handler to inform it that an assertion
  been generated by an associated identity provider (IdP) during
  process of creating an SDP offer or answer.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/identityresult_event`"

  "identityresult")

(def negotiationneeded
  "Event.

  A negotiationneeded event is sent to the `web.audio.RTCPeerConnection`
  negotiation of the connection through the signaling channel is

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/negotiationneeded_event`"

  "negotiationneeded")

(def removestream
  "Event.

  [Deprecated]

  The obsolete removestream event was sent to an `web.audio.RTCPeerConnection`
  inform it that a `web.streams.MediaStream` had been removed from
  connection.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/removestream_event`"

  "removestream")

(def signalingstatechange
  "Event.

  An signalingstatechange event is sent to an `web.audio.RTCPeerConnection`
  notify it that its signaling state, as indicated by the `signalingState`
  has changed.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/signalingstatechange_event`"

  "signalingstatechange")

