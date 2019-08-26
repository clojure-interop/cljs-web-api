(ns web.rtc.RTCTrackEventInit
  "The WebRTC API's RTCTrackEventInit dictionary is used to provide
  describing an `web.rtc.RTCTrackEvent` when instantiating a new
  event using `new RTCTrackEvent()`."
  (:refer-clojure :exclude []))

(defn receiver
  "Property.

  The `web.rtc.RTCTrackEventInit` dictionary's receiver property
  the `web.rtc.RTCRtpReceiver` associated with the event.

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

  The `web.rtc.RTCTrackEventInit` dictionary's receiver property
  the `web.rtc.RTCRtpReceiver` associated with the event.

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

  The `web.rtc.RTCTrackEventInit` dictionary's optional streams
  provides an array containing a `web.streams.MediaStream` object
  each of the streams associated with the event's track.

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

  The `web.rtc.RTCTrackEventInit` dictionary's optional streams
  provides an array containing a `web.streams.MediaStream` object
  each of the streams associated with the event's track.

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

  The `web.rtc.RTCTrackEventInit` dictionary's track property specifies
  `web.audio.MediaStreamTrack` associated with the track event.

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

  The `web.rtc.RTCTrackEventInit` dictionary's track property specifies
  `web.audio.MediaStreamTrack` associated with the track event.

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

