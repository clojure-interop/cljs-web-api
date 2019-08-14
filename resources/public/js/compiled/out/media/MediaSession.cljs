(ns media.MediaSession
  "The MediaSession interface of the Media Session API allows a
  page to provide custom behaviors for standard media playback"
  (:refer-clojure :exclude []))

(defn set-action-handler
  "Method.

  The setActionHandler() property of the `media.MediaSession` interface
  an event handler for a media session action.

  `navigator.mediaSession.setActionHandler(type, callback)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/setActionHandler`"
  [this type callback]
  (-> this (.setActionHandler type callback)))

(defn metadata
  "Property.

  The metadata property of the `media.MediaSession` interface,
  an instance of `media.MediaMetadata` which contains rich media
  for display in a platform UI.

  `var mediaMetadata = MediaSession.metadata
  MediaSession.metadata = mediaMetadata`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/metadata`"
  [this]
  (-> this (.metadata)))

(defn set-metadata!
  "Property.

  The metadata property of the `media.MediaSession` interface,
  an instance of `media.MediaMetadata` which contains rich media
  for display in a platform UI.

  `var mediaMetadata = MediaSession.metadata
  MediaSession.metadata = mediaMetadata`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/metadata`"
  [this val]
  (aset this "metadata" val))

(defn playback-state
  "Property.

  The playbackState property of the `media.MediaSession` interface
  whether the current media session is playing.

  `var playbackState = MediaSession.playbackState
  MediaSession.playbackState = playbackState`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/playbackState`"
  [this]
  (-> this (.playbackState)))

(defn set-playback-state!
  "Property.

  The playbackState property of the `media.MediaSession` interface
  whether the current media session is playing.

  `var playbackState = MediaSession.playbackState
  MediaSession.playbackState = playbackState`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSession/playbackState`"
  [this val]
  (aset this "playbackState" val))

