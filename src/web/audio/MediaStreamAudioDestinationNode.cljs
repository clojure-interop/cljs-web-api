(ns web.audio.MediaStreamAudioDestinationNode
  "Inherits properties from its parent, `web.audio.AudioNode`."
  (:refer-clojure :exclude []))

(defn stream
  "Property.

  A `web.streams.MediaStream`.

  `var audioCtx = new AudioContext();
  var destination = audioCtx.createMediaStreamDestination();
  var myStream = destination.stream;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode/stream`"
  [this]
  (-> this (.-stream)))

(defn set-stream!
  "Property.

  A `web.streams.MediaStream`.

  `var audioCtx = new AudioContext();
  var destination = audioCtx.createMediaStreamDestination();
  var myStream = destination.stream;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode/stream`"
  [this val]
  (aset this "stream" val))

