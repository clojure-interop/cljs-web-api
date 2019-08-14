(ns web.VideoTrack
  "The `web.VideoTrack` interface represents a single video track
  a `web.<video>` element."
  (:refer-clojure :exclude []))

(defn id
  "Property.

  The id property contains a string which uniquely identifies the
  represented by the `web.VideoTrack`.

  `var trackID = VideoTrack.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/id`"
  [this]
  (-> this (.id)))

(defn kind
  "Property.

  The kind property contains a string indicating the category of
  contained in the `web.VideoTrack`.

  `var trackKind = VideoTrack.kind;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/kind`"
  [this]
  (-> this (.kind)))

(defn label
  "Property.

  The read-only `web.VideoTrack` property label returns a string
  the video track's human-readable label, if one is available;
  it returns an empty string.

  `var videoTrackLabel = VideoTrack.label;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/label`"
  [this]
  (-> this (.label)))

(defn language
  "Property.

  The read-only `web.VideoTrack` property language returns a string
  the language used in the video track.

  `var videoTrackLanguage = VideoTrack.language;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/language`"
  [this]
  (-> this (.language)))

(defn selected
  "Property.

  The `web.VideoTrack` property selected controls whether or not
  particular video track is active.

  `isVideoSelected = VideoTrack.selected;

  VideoTrack.selected = true | false;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/selected`"
  [this]
  (-> this (.selected)))

(defn set-selected!
  "Property.

  The `web.VideoTrack` property selected controls whether or not
  particular video track is active.

  `isVideoSelected = VideoTrack.selected;

  VideoTrack.selected = true | false;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/selected`"
  [this val]
  (aset this "selected" val))

(defn source-buffer
  "Property.

  The read-only `web.VideoTrack` property sourceBuffer returns
  `web.SourceBuffer` that created the track, or null if the track
  not created by a `web.SourceBuffer` or the `web.SourceBuffer`
  been removed from the `media.MediaSource.sourceBuffers` attribute
  its parent media source.

  `var sourceBuffer = VideoTrack.sourceBuffer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VideoTrack/sourceBuffer`"
  [this]
  (-> this (.sourceBuffer)))

