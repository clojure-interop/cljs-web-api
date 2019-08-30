(ns web.video.VideoTrack
  "The `web.video.VideoTrack` interface represents a single video
  from a `<video>` element."
  (:refer-clojure :exclude []))

(defn selected
  "Property.

  The `web.video.VideoTrack` property selected controls whether
  not a particular video track is active.

  `isVideoSelected = VideoTrack.selected;

  VideoTrack.selected = true | false;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/selected`"
  [this]
  (-> this (.-selected)))

(defn set-selected!
  "Property.

  The `web.video.VideoTrack` property selected controls whether
  not a particular video track is active.

  `isVideoSelected = VideoTrack.selected;

  VideoTrack.selected = true | false;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/selected`"
  [this val]
  (aset this "selected" val))

(defn id
  "Property.

  [Read Only]

  The id property contains a string which uniquely identifies the
  represented by the `web.video.VideoTrack`.

  `var trackID = VideoTrack.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/id`"
  [this]
  (-> this (.-id)))

(defn kind
  "Property.

  [Read Only]

  The kind property contains a string indicating the category of
  contained in the `web.video.VideoTrack`.

  `var trackKind = VideoTrack.kind;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/kind`"
  [this]
  (-> this (.-kind)))

(defn label
  "Property.

  [Read Only]

  The read-only `web.video.VideoTrack` property label returns a
  specifying the video track's human-readable label, if one is
  otherwise, it returns an empty string.

  `var videoTrackLabel = VideoTrack.label;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/label`"
  [this]
  (-> this (.-label)))

(defn language
  "Property.

  [Read Only]

  The read-only `web.video.VideoTrack` property language returns
  string identifying the language used in the video track.

  `var videoTrackLanguage = VideoTrack.language;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/language`"
  [this]
  (-> this (.-language)))

(defn source-buffer
  "Property.

  [Read Only]

  The read-only `web.video.VideoTrack` property sourceBuffer returns
  `web.audio.SourceBuffer` that created the track, or null if the
  was not created by a `web.audio.SourceBuffer` or the `web.audio.SourceBuffer`
  been removed from the `MediaSource.sourceBuffers` attribute of
  parent media source.

  `var sourceBuffer = VideoTrack.sourceBuffer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/sourceBuffer`"
  [this]
  (-> this (.-sourceBuffer)))

