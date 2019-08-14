(ns rtc.RTCTrackEvent
  "The WebRTC API interface RTCTrackEvent represents the track event,
  is sent when a new `media.MediaStreamTrack` is added to an `rtc.RTCRtpReceiver`
  is part of the `rtc.RTCPeerConnection`."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The RTCTrackEvent() constructor creates and returns a new `rtc.RTCTrackEvent` object, configured to describe the track which has been added to the `rtc.RTCPeerConnection`.

  eventInfo
  An object based on the `rtc.RTCTrackEventInit` dictionary, providing information about the track which has been added to the `rtc.RTCPeerConnection`. This object has the following properties:
  `web.receiver`
  The `rtc.RTCRtpReceiver` which is being used to receive the track's media.
  `web.streams` Optional
  An array of `media.MediaStream` objects representing each of the streams that comprise the event's corresponding track.
  `web.track`
  The `media.MediaStreamTrack` the event is associated with.
  `web.transceiver`
  The `rtc.RTCRtpTransceiver` associated with the event.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/RTCTrackEvent`"
  js/RTCTrackEvent)

(defn receiver
  "Property.

  The read-only receiver property of the `rtc.RTCTrackEvent` interface
  the `rtc.RTCRtpReceiver` which is used to receive data containing
  for the `web.track` to which the event refers.

  `var rtpReceiver = trackEvent.receiver;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/receiver`"
  [this]
  (-> this (.receiver)))

(defn streams
  "Property.

  The WebRTC API interface `rtc.RTCTrackEvent`'s read-only streams
  specifies an array of `media.MediaStream` objects, one for each
  the streams that comprise the track being added to the `rtc.RTCPeerConnection`.

  `var streams = trackEvent.streams;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/streams`"
  [this]
  (-> this (.streams)))

(defn track
  "Property.

  The WebRTC API interface `rtc.RTCTrackEvent`'s read-only track
  specifies the `media.MediaStreamTrack` that has been added to
  `rtc.RTCPeerConnection`.

  `var track = trackEvent.track;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/track`"
  [this]
  (-> this (.track)))

(defn transceiver
  "Property.

  The WebRTC API interface `rtc.RTCTrackEvent`'s read-only transceiver
  indicates the `rtc.RTCRtpTransceiver` affiliated with the event's

  `var rtpTransceiver = trackEvent.transceiver;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/transceiver`"
  [this]
  (-> this (.transceiver)))

(defn set-transceiver!
  "Property.

  The WebRTC API interface `rtc.RTCTrackEvent`'s read-only transceiver
  indicates the `rtc.RTCRtpTransceiver` affiliated with the event's

  `var rtpTransceiver = trackEvent.transceiver;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEvent/transceiver`"
  [this val]
  (aset this "transceiver" val))

