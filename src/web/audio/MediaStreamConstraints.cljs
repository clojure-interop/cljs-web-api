(ns web.audio.MediaStreamConstraints
  "The MediaStreamConstraints dictionary is used when calling `getUserMedia()`
  specify what kinds of tracks should be included in the returned
  and, optionally, to establish constraints for those tracks' settings."
  (:refer-clojure :exclude []))

(defn audio
  "Property.

  The `web.audio.MediaStreamConstraints` dictionary's audio property
  used to indicate what kind of audio track, if any, should be
  in the `web.streams.MediaStream` returned by a call to `getUserMedia()`.

  `var audioConstraints = true | false | MediaTrackConstraints;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints/audio`"
  [this]
  (-> this (.audio)))

(defn set-audio!
  "Property.

  The `web.audio.MediaStreamConstraints` dictionary's audio property
  used to indicate what kind of audio track, if any, should be
  in the `web.streams.MediaStream` returned by a call to `getUserMedia()`.

  `var audioConstraints = true | false | MediaTrackConstraints;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamConstraints/audio`"
  [this val]
  (aset this "audio" val))

(defn peer-identity
  "Property.

  A DOMString identifying the peer who has sole access to the stream.
  this property is specified, only the indicated peer can receive
  use the stream. Streams isolated in this way can only be displayed
  a media element (<audio> or <video>) where the content is protected
  as if CORS cross-origin rules were in effect. When a peer identity
  set, MediaStreamTracks from that peer have their isolated flag
  to true."
  [this]
  (-> this (.peerIdentity)))

(defn set-peer-identity!
  "Property.

  A DOMString identifying the peer who has sole access to the stream.
  this property is specified, only the indicated peer can receive
  use the stream. Streams isolated in this way can only be displayed
  a media element (<audio> or <video>) where the content is protected
  as if CORS cross-origin rules were in effect. When a peer identity
  set, MediaStreamTracks from that peer have their isolated flag
  to true."
  [this val]
  (aset this "peerIdentity" val))

