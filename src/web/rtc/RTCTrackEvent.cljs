(ns web.rtc.RTCTrackEvent
  "The WebRTC API interface RTCTrackEvent represents the track event,
  is sent when a new `web.audio.MediaStreamTrack` is added to an
  which is part of the `web.audio.RTCPeerConnection`."
  (:refer-clojure :exclude []))

(defn receiver
  "Property.

  [Read Only]

  The read-only receiver property of the `web.rtc.RTCTrackEvent`
  indicates the `web.rtc.RTCRtpReceiver` which is used to receive
  containing media for the `track` to which the event refers.

  `var rtpReceiver = trackEvent.receiver;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/receiver`"
  [this]
  (-> this (.-receiver)))

(defn streams
  "Property.

  [Read Only]

  The WebRTC API interface `web.rtc.RTCTrackEvent`'s read-only
  property specifies an array of `web.streams.MediaStream` objects,
  for each of the streams that comprise the track being added to
  `web.audio.RTCPeerConnection`.

  `var streams = trackEvent.streams;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/streams`"
  [this]
  (-> this (.-streams)))

(defn track
  "Property.

  [Read Only]

  The WebRTC API interface `web.rtc.RTCTrackEvent`'s read-only
  property specifies the `web.audio.MediaStreamTrack` that has
  added to the `web.audio.RTCPeerConnection`.

  `var track = trackEvent.track;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/track`"
  [this]
  (-> this (.-track)))

(defn transceiver
  "Property.

  [Read Only]

  The WebRTC API interface `web.rtc.RTCTrackEvent`'s read-only
  property indicates the `web.rtc.RTCRtpTransceiver` affiliated
  the event's `track`.

  `var rtpTransceiver = trackEvent.transceiver;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/transceiver`"
  [this]
  (-> this (.-transceiver)))

