(ns media.MediaStreamAudioSourceOptions
  "The MediaStreamAudioSourceOptions dictionary provides configuration
  used when creating a `media.MediaStreamAudioSourceNode` using
  constructor."
  (:refer-clojure :exclude []))

(defn media-stream
  "Property.

  The `media.MediaStreamAudioSourceOptions` dictionary's mediaStream
  must specify the `media.MediaStream` from which to retrieve audio
  when instantiating a MediaStreamAudioSourceNode using the `media.MediaStreamAudioSourceNode()`

  `mediaStreamAudioSourceOptions = {
  mediaStream: audioSourceStream;
  }

  mediaStreamAudioSourceOptions.mediaStream = audioSourceStream;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceOptions/mediaStream`"
  [this]
  (-> this (.mediaStream)))

(defn set-media-stream!
  "Property.

  The `media.MediaStreamAudioSourceOptions` dictionary's mediaStream
  must specify the `media.MediaStream` from which to retrieve audio
  when instantiating a MediaStreamAudioSourceNode using the `media.MediaStreamAudioSourceNode()`

  `mediaStreamAudioSourceOptions = {
  mediaStream: audioSourceStream;
  }

  mediaStreamAudioSourceOptions.mediaStream = audioSourceStream;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceOptions/mediaStream`"
  [this val]
  (aset this "mediaStream" val))

