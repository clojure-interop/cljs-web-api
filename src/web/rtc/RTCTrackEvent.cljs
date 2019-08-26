(ns web.rtc.RTCTrackEvent
  "The WebRTC API interface RTCTrackEvent represents the track event,
  is sent when a new `web.audio.MediaStreamTrack` is added to an
  which is part of the `web.audio.RTCPeerConnection`."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The RTCTrackEvent() constructor creates and returns a new `web.rtc.RTCTrackEvent` object, configured to describe the track which has been added to the `web.audio.RTCPeerConnection`.

  eventInfo
  An object based on the `web.rtc.RTCTrackEventInit` dictionary, providing information about the track which has been added to the `web.audio.RTCPeerConnection`. This object has the following properties:
  `receiver`
  The `web.rtc.RTCRtpReceiver` which is being used to receive the track's media.
  `streams` Optional
  An array of `web.streams.MediaStream` objects representing each of the streams that comprise the event's corresponding track.
  `track`
  The `web.audio.MediaStreamTrack` the event is associated with.
  `transceiver`
  The `web.rtc.RTCRtpTransceiver` associated with the event.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/RTCTrackEvent`"
  js/RTCTrackEvent)

(defn receiver
  "Property.

  The read-only receiver property of the `web.rtc.RTCTrackEvent`
  indicates the `web.rtc.RTCRtpReceiver` which is used to receive
  containing media for the `track` to which the event refers.

  `var rtpReceiver = trackEvent.receiver;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/receiver`"
  [this]
  (-> this (.-receiver)))

(defn streams
  "Property.

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

  The WebRTC API interface `web.rtc.RTCTrackEvent`'s read-only
  property specifies the `web.audio.MediaStreamTrack` that has
  added to the `web.audio.RTCPeerConnection`.

  `var track = trackEvent.track;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/track`"
  [this]
  (-> this (.-track)))

(defn transceiver
  "Property.

  The WebRTC API interface `web.rtc.RTCTrackEvent`'s read-only
  property indicates the `web.rtc.RTCRtpTransceiver` affiliated
  the event's `track`.

  `var rtpTransceiver = trackEvent.transceiver;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/transceiver`"
  [this]
  (-> this (.-transceiver)))

(defn set-transceiver!
  "Property.

  The WebRTC API interface `web.rtc.RTCTrackEvent`'s read-only
  property indicates the `web.rtc.RTCRtpTransceiver` affiliated
  the event's `track`.

  `var rtpTransceiver = trackEvent.transceiver;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/transceiver`"
  [this val]
  (aset this "transceiver" val))

