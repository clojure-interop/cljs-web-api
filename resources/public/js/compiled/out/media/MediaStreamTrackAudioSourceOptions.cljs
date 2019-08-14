(ns media.MediaStreamTrackAudioSourceOptions
  "The MediaStreamTrackAudioSourceOptions dictionary is used when
  options to the `media.MediaStreamTrackAudioSourceNode()` constructor."
  (:refer-clojure :exclude []))

(defn media-stream-track
  "Property.

  The `media.MediaStreamTrackAudioSourceOptions` dictionary's mediaStreamTrack
  must contain a reference to the `media.MediaStreamTrack` from
  the MediaStreamTrackAudioSourceNode being created using the `media.MediaStreamTrackAudioSourceNode()`

  `mediaStreamTrackAudioSourceOptions = {
  mediaStreamTrack: audioSourceTrack;
  }

  mediaStreamTrackAudioSourceOptions.mediaStreamTrack = audioSourceTrack;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackAudioSourceOptions/mediaStreamTrack`"
  [this]
  (-> this (.mediaStreamTrack)))

(defn set-media-stream-track!
  "Property.

  The `media.MediaStreamTrackAudioSourceOptions` dictionary's mediaStreamTrack
  must contain a reference to the `media.MediaStreamTrack` from
  the MediaStreamTrackAudioSourceNode being created using the `media.MediaStreamTrackAudioSourceNode()`

  `mediaStreamTrackAudioSourceOptions = {
  mediaStreamTrack: audioSourceTrack;
  }

  mediaStreamTrackAudioSourceOptions.mediaStreamTrack = audioSourceTrack;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackAudioSourceOptions/mediaStreamTrack`"
  [this val]
  (aset this "mediaStreamTrack" val))

