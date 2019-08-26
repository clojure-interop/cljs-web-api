(ns web.audio.MediaStreamTrackAudioSourceOptions
  "The MediaStreamTrackAudioSourceOptions dictionary is used when
  options to the `MediaStreamTrackAudioSourceNode()` constructor."
  (:refer-clojure :exclude []))

(defn media-stream-track
  "Property.

  The `web.audio.MediaStreamTrackAudioSourceOptions` dictionary's
  property must contain a reference to the `web.audio.MediaStreamTrack`
  which the MediaStreamTrackAudioSourceNode being created using
  `MediaStreamTrackAudioSourceNode()` constructor.

  `mediaStreamTrackAudioSourceOptions = {
  mediaStreamTrack: audioSourceTrack;
  }

  mediaStreamTrackAudioSourceOptions.mediaStreamTrack = audioSourceTrack;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackAudioSourceOptions/mediaStreamTrack`"
  [this]
  (-> this (.-mediaStreamTrack)))

(defn set-media-stream-track!
  "Property.

  The `web.audio.MediaStreamTrackAudioSourceOptions` dictionary's
  property must contain a reference to the `web.audio.MediaStreamTrack`
  which the MediaStreamTrackAudioSourceNode being created using
  `MediaStreamTrackAudioSourceNode()` constructor.

  `mediaStreamTrackAudioSourceOptions = {
  mediaStreamTrack: audioSourceTrack;
  }

  mediaStreamTrackAudioSourceOptions.mediaStreamTrack = audioSourceTrack;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrackAudioSourceOptions/mediaStreamTrack`"
  [this val]
  (aset this "mediaStreamTrack" val))

