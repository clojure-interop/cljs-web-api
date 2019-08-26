(ns web.audio.MediaStreamAudioSourceOptions
  "The MediaStreamAudioSourceOptions dictionary provides configuration
  used when creating a `web.audio.MediaStreamAudioSourceNode` using
  constructor."
  (:refer-clojure :exclude []))

(defn media-stream
  "Property.

  The `web.audio.MediaStreamAudioSourceOptions` dictionary's mediaStream
  must specify the `web.streams.MediaStream` from which to retrieve
  data when instantiating a MediaStreamAudioSourceNode using the
  constructor.

  `mediaStreamAudioSourceOptions = {
  mediaStream: audioSourceStream;
  }

  mediaStreamAudioSourceOptions.mediaStream = audioSourceStream;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceOptions/mediaStream`"
  [this]
  (-> this (.-mediaStream)))

(defn set-media-stream!
  "Property.

  The `web.audio.MediaStreamAudioSourceOptions` dictionary's mediaStream
  must specify the `web.streams.MediaStream` from which to retrieve
  data when instantiating a MediaStreamAudioSourceNode using the
  constructor.

  `mediaStreamAudioSourceOptions = {
  mediaStream: audioSourceStream;
  }

  mediaStreamAudioSourceOptions.mediaStream = audioSourceStream;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamAudioSourceOptions/mediaStream`"
  [this val]
  (aset this "mediaStream" val))

