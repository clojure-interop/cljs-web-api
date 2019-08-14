(ns rtc.RTCTrackEventInit
  "The WebRTC API's RTCTrackEventInit dictionary is used to provide
  describing an `rtc.RTCTrackEvent` when instantiating a new track
  using `web.new RTCTrackEvent()`."
  (:refer-clojure :exclude []))

(defn receiver
  "Property.

  The `rtc.RTCTrackEventInit` dictionary's receiver property specifies
  `rtc.RTCRtpReceiver` associated with the event.

  `var trackEventInit = {
  receiver: rtpReceiver,
  track: mediaStreamTrack,
  streams: [videoStream],
  transceiver: rtpTransceiver
  };

  var rtpReceiver = trackEventInit.receiver;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEventInit/receiver`"
  [this]
  (-> this (.receiver)))

(defn set-receiver!
  "Property.

  The `rtc.RTCTrackEventInit` dictionary's receiver property specifies
  `rtc.RTCRtpReceiver` associated with the event.

  `var trackEventInit = {
  receiver: rtpReceiver,
  track: mediaStreamTrack,
  streams: [videoStream],
  transceiver: rtpTransceiver
  };

  var rtpReceiver = trackEventInit.receiver;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEventInit/receiver`"
  [this val]
  (aset this "receiver" val))

(defn streams
  "Property.

  The `rtc.RTCTrackEventInit` dictionary's optional streams property
  an array containing a `media.MediaStream` object for each of
  streams associated with the event's track.

  `var trackEventInit = {
  receiver: rtpReceiver,
  track: mediaStreamTrack,
  streams: [videoStream],
  transceiver: rtpTransceiver
  };

  var streamList = trackEventInit.streams;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEventInit/streams`"
  [this]
  (-> this (.streams)))

(defn set-streams!
  "Property.

  The `rtc.RTCTrackEventInit` dictionary's optional streams property
  an array containing a `media.MediaStream` object for each of
  streams associated with the event's track.

  `var trackEventInit = {
  receiver: rtpReceiver,
  track: mediaStreamTrack,
  streams: [videoStream],
  transceiver: rtpTransceiver
  };

  var streamList = trackEventInit.streams;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEventInit/streams`"
  [this val]
  (aset this "streams" val))

(defn track
  "Property.

  The `rtc.RTCTrackEventInit` dictionary's track property specifies
  `media.MediaStreamTrack` associated with the track event.

  `var trackEventInit = {
  receiver: rtpReceiver,
  track: mediaStreamTrack,
  streams: [videoStream],
  transceiver: rtpTransceiver
  };

  var track = trackEventInit.track;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEventInit/track`"
  [this]
  (-> this (.track)))

(defn set-track!
  "Property.

  The `rtc.RTCTrackEventInit` dictionary's track property specifies
  `media.MediaStreamTrack` associated with the track event.

  `var trackEventInit = {
  receiver: rtpReceiver,
  track: mediaStreamTrack,
  streams: [videoStream],
  transceiver: rtpTransceiver
  };

  var track = trackEventInit.track;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/RTCTrackEventInit/track`"
  [this val]
  (aset this "track" val))

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

