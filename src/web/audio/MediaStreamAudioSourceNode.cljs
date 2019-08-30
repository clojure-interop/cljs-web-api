(ns web.audio.MediaStreamAudioSourceNode
  "The MediaStreamAudioSourceNode interface is a type of `web.audio.AudioNode`
  operates as an audio source whose media is received from a `web.streams.MediaStream`
  using the WebRTC or Media Capture and Streams APIs."
  (:refer-clojure :exclude []))

(defn media-stream
  "Property.

  [Read Only]

  The `web.audio.MediaStreamAudioSourceNode` interface's read-only
  property indicates the `web.streams.MediaStream` that contains
  audio track from which the node is receiving audio.

  `audioSourceStream = mediaStreamAudioSourceNode.mediaStream;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode/mediaStream`"
  [this]
  (-> this (.-mediaStream)))

