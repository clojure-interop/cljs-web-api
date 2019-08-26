(ns web.audio.MediaStreamAudioDestinationNode
  "Inherits properties from its parent, `web.audio.AudioNode`."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The MediaStreamAudioDestinationNode() constructor of the Web Audio API creates a new `web.audio.MediaStreamAudioDestinationNode` object instance.

  Inherits parameters from the `web.audio.AudioNodeOptions` dictionary.


  context
  An `web.audio.AudioContext` representing the audio context you want the node to be associated with.
  options Optional
  An AudioNodeOptions dictionary object defining the properties you want the MediaStreamAudioDestinationNode to have.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioDestinationNode/MediaStreamAudioDestinationNode`"
  js/MediaStreamAudioDestinationNode)

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

