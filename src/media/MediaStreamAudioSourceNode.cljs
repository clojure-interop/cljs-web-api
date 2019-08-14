(ns media.MediaStreamAudioSourceNode
  "The MediaStreamAudioSourceNode interface is a type of `audio.AudioNode`
  operates as an audio source whose media is received from a `media.MediaStream`
  using the WebRTC or Media Capture and Streams APIs."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The Web Audio API's MediaStreamAudioSourceNode() constructor creates and returns a new `media.MediaStreamAudioSourceNode` object which uses the first audio track of a given `media.MediaStream` as its source.

  context
  An `audio.AudioContext` representing the audio context you want the node to be associated with.
  options

  A `media.MediaStreamAudioSourceOptions` object defining the properties you want the MediaStreamAudioSourceNode to have:


  `web.mediaStream`
  A required property which specifies the `media.MediaStream` from which to obtain audio for the node.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode`"
  js/MediaStreamAudioSourceNode)

(defn media-stream
  "Property.

  The `media.MediaStreamAudioSourceNode` interface's read-only
  property indicates the `media.MediaStream` that contains the
  track from which the node is receiving audio.

  `audioSourceStream = mediaStreamAudioSourceNode.mediaStream;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode/mediaStream`"
  [this]
  (-> this (.mediaStream)))

(defn set-media-stream!
  "Property.

  The `media.MediaStreamAudioSourceNode` interface's read-only
  property indicates the `media.MediaStream` that contains the
  track from which the node is receiving audio.

  `audioSourceStream = mediaStreamAudioSourceNode.mediaStream;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceNode/mediaStream`"
  [this val]
  (aset this "mediaStream" val))

