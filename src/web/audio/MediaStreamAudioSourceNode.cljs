(ns web.audio.MediaStreamAudioSourceNode
  "The MediaStreamAudioSourceNode interface is a type of `web.audio.AudioNode`
  operates as an audio source whose media is received from a `web.streams.MediaStream`
  using the WebRTC or Media Capture and Streams APIs."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The Web Audio API's MediaStreamAudioSourceNode() constructor creates and returns a new `web.audio.MediaStreamAudioSourceNode` object which uses the first audio track of a given `web.streams.MediaStream` as its source.

  context
  An `web.audio.AudioContext` representing the audio context you want the node to be associated with.
  options

  A `web.audio.MediaStreamAudioSourceOptions` object defining the properties you want the MediaStreamAudioSourceNode to have:


  `mediaStream`
  A required property which specifies the `web.streams.MediaStream` from which to obtain audio for the node.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode`"
  js/MediaStreamAudioSourceNode)

(defn media-stream
  "Property.

  The `web.audio.MediaStreamAudioSourceNode` interface's read-only
  property indicates the `web.streams.MediaStream` that contains
  audio track from which the node is receiving audio.

  `audioSourceStream = mediaStreamAudioSourceNode.mediaStream;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode/mediaStream`"
  [this]
  (-> this (.mediaStream)))

(defn set-media-stream!
  "Property.

  The `web.audio.MediaStreamAudioSourceNode` interface's read-only
  property indicates the `web.streams.MediaStream` that contains
  audio track from which the node is receiving audio.

  `audioSourceStream = mediaStreamAudioSourceNode.mediaStream;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode/mediaStream`"
  [this val]
  (aset this "mediaStream" val))

