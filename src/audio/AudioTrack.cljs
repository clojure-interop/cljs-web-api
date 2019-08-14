(ns audio.AudioTrack
  "The AudioTrack interface represents a single audio track from
  of the HTML media elements, `web.<audio>` or `web.<video>`."
  (:refer-clojure :exclude []))

(defn enabled
  "Property.

  The `audio.AudioTrack` property enabled specifies whether or
  the described audio track is currently enabled for use. If the
  is disabled by setting enabled to false, the track is muted and
  not produce audio.

  `isAudioEnabled = AudioTrack.enabled;

  AudioTrack.enabled = true | false;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/enabled`"
  [this]
  (-> this (.enabled)))

(defn set-enabled!
  "Property.

  The `audio.AudioTrack` property enabled specifies whether or
  the described audio track is currently enabled for use. If the
  is disabled by setting enabled to false, the track is muted and
  not produce audio.

  `isAudioEnabled = AudioTrack.enabled;

  AudioTrack.enabled = true | false;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/enabled`"
  [this val]
  (aset this "enabled" val))

(defn id
  "Property.

  The id property contains a string which uniquely identifies the
  represented by the `audio.AudioTrack`.

  `var trackID = AudioTrack.id;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/id`"
  [this]
  (-> this (.id)))

(defn kind
  "Property.

  The kind property contains a string indicating the category of
  contained in the `audio.AudioTrack`.

  `var trackKind = AudioTrack.kind;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/kind`"
  [this]
  (-> this (.kind)))

(defn label
  "Property.

  The read-only `audio.AudioTrack` property label returns a string
  the audio track's human-readable label, if one is available;
  it returns an empty string.

  `var audioTrackLabel = AudioTrack.label;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/label`"
  [this]
  (-> this (.label)))

(defn language
  "Property.

  The read-only `audio.AudioTrack` property language returns a
  identifying the language used in the audio track.

  `var audioTrackLanguage = AudioTrack.language;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/language`"
  [this]
  (-> this (.language)))

(defn source-buffer
  "Property.

  The read-only `audio.AudioTrack` property sourceBuffer returns
  `web.SourceBuffer` that created the track, or null if the track
  not created by a `web.SourceBuffer` or the `web.SourceBuffer`
  been removed from the `media.MediaSource.sourceBuffers` attribute
  its parent media source.

  `var sourceBuffer = AudioTrack.sourceBuffer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AudioTrack/sourceBuffer`"
  [this]
  (-> this (.sourceBuffer)))

