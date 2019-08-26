(ns web.audio.SourceBuffer
  "The SourceBuffer interface represents a chunk of media to be
  into an `web.media.HTMLMediaElement` and played, via a `web.audio.MediaSource`
  This can be made up of one or several media segments."
  (:refer-clojure :exclude [remove]))

(defn abort
  "Method.

  The abort() method of the `web.audio.SourceBuffer` interface
  the current segment and resets the segment parser.

  `sourceBuffer.abort();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/abort`"
  [this ]
  (-> this (.abort)))

(defn append-buffer
  "Method.

  The appendBuffer() method of the `web.audio.SourceBuffer` interface
  media segment data from an `js.ArrayBuffer` or ArrayBufferView
  to the SourceBuffer.

  `sourceBuffer.appendBuffer(source);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendBuffer`"
  [this source]
  (-> this (.appendBuffer source)))

(defn append-buffer-async
  "Method.

  The `web.audio.SourceBuffer` method appendBufferAsync() begins
  process of asynchronously appending media segment data from an
  or `web.typed.ArrayBufferView` object to the SourceBuffer.

  `appendPromise = sourceBuffer.appendBufferAsync(source);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendBufferAsync`"
  [this source]
  (-> this (.appendBufferAsync source)))

(defn append-stream
  "Method.

  The appendStream() method of the `web.audio.SourceBuffer` interface
  media segment data from a ReadableStream object to the SourceBuffer.

  `sourceBuffer.appendStream(stream, maxSize);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendStream`"
  [this stream max-size]
  (-> this (.appendStream stream max-size)))

(defn change-type
  "Method.

  The `web.audio.SourceBuffer` method changeType() sets the MIME
  that future calls to `appendBuffer()` should expect the new media
  to conform to.

  `sourceBuffer.changeType(type);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/changeType`"
  [this type]
  (-> this (.changeType type)))

(defn remove
  "Method.

  The remove() method of the `web.audio.SourceBuffer` interface
  media segments within a specific time range from the SourceBuffer.
  method can only be called when `SourceBuffer.updating` equals
  If SourceBuffer.updating is not equal to false, call `SourceBuffer.abort()`.

  `sourceBuffer.remove(start, end);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/remove`"
  [this start end]
  (-> this (.remove start end)))

(defn remove-async
  "Method.

  The removeAsync() method of the `web.audio.SourceBuffer` interface
  the process of asynchronously removing from the SourceBuffer
  segments found within a specific time range.

  `removePromise = sourceBuffer.removeAsync(start, end);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/removeAsync`"
  [this start end]
  (-> this (.removeAsync start end)))

(defn append-window-end
  "Property.

  The appendWindowEnd property of the `web.audio.SourceBuffer`
  controls the timestamp for the end of the append window, a timestamp
  that can be used to filter what media data is appended to the
  Coded media frames with timestamps wthin this range will be appended,
  those outside the range will be filtered out.

  `var myAppendWindowEnd = sourceBuffer.appendWindowEnd;

  sourceBuffer.appendWindowEnd = 120.0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendWindowEnd`"
  [this]
  (-> this (.appendWindowEnd)))

(defn set-append-window-end!
  "Property.

  The appendWindowEnd property of the `web.audio.SourceBuffer`
  controls the timestamp for the end of the append window, a timestamp
  that can be used to filter what media data is appended to the
  Coded media frames with timestamps wthin this range will be appended,
  those outside the range will be filtered out.

  `var myAppendWindowEnd = sourceBuffer.appendWindowEnd;

  sourceBuffer.appendWindowEnd = 120.0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendWindowEnd`"
  [this val]
  (aset this "appendWindowEnd" val))

(defn onabort
  "Property.

  Fired whenever SourceBuffer.appendBuffer() or SourceBuffer.appendStream()
  ended by a call to SourceBuffer.abort(). SourceBuffer.updating
  from true to false."
  [this]
  (-> this (.onabort)))

(defn set-onabort!
  "Property.

  Fired whenever SourceBuffer.appendBuffer() or SourceBuffer.appendStream()
  ended by a call to SourceBuffer.abort(). SourceBuffer.updating
  from true to false."
  [this val]
  (aset this "onabort" val))

(defn append-window-start
  "Property.

  The appendWindowStart property of the `web.audio.SourceBuffer`
  controls the timestamp for the start of the append window, a
  range that can be used to filter what media data is appended
  the SourceBuffer. Coded media frames with timestamps wthin this
  will be appended, whereas those outside the range will be filtered

  `var myAppendWindowStart = sourceBuffer.appendWindowStart;

  sourceBuffer.appendWindowStart = 2.0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendWindowStart`"
  [this]
  (-> this (.appendWindowStart)))

(defn set-append-window-start!
  "Property.

  The appendWindowStart property of the `web.audio.SourceBuffer`
  controls the timestamp for the start of the append window, a
  range that can be used to filter what media data is appended
  the SourceBuffer. Coded media frames with timestamps wthin this
  will be appended, whereas those outside the range will be filtered

  `var myAppendWindowStart = sourceBuffer.appendWindowStart;

  sourceBuffer.appendWindowStart = 2.0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendWindowStart`"
  [this val]
  (aset this "appendWindowStart" val))

(defn audio-tracks
  "Property.

  The audioTracks read-only property of the `web.audio.SourceBuffer`
  returns a list of the audio tracks currently contained inside
  SourceBuffer.

  `var myAudioTracks = sourceBuffer.audioTracks;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/audioTracks`"
  [this]
  (-> this (.audioTracks)))

(defn set-audio-tracks!
  "Property.

  The audioTracks read-only property of the `web.audio.SourceBuffer`
  returns a list of the audio tracks currently contained inside
  SourceBuffer.

  `var myAudioTracks = sourceBuffer.audioTracks;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/audioTracks`"
  [this val]
  (aset this "audioTracks" val))

(defn buffered
  "Property.

  The buffered read-only property of the `web.audio.SourceBuffer`
  returns the time ranges that are currently buffered in the SourceBuffer
  a normalized `web.media.TimeRanges` object.

  `var myBufferedRange = sourceBuffer.buffered;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/buffered`"
  [this]
  (-> this (.buffered)))

(defn set-buffered!
  "Property.

  The buffered read-only property of the `web.audio.SourceBuffer`
  returns the time ranges that are currently buffered in the SourceBuffer
  a normalized `web.media.TimeRanges` object.

  `var myBufferedRange = sourceBuffer.buffered;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/buffered`"
  [this val]
  (aset this "buffered" val))

(defn mode
  "Property.

  The mode property of the `web.audio.SourceBuffer` interface controls
  media segments can be appended to the SourceBuffer in any order,
  in a strict sequence.

  `var myMode = sourceBuffer.mode;

  sourceBuffer.mode = 'sequence';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/mode`"
  [this]
  (-> this (.mode)))

(defn set-mode!
  "Property.

  The mode property of the `web.audio.SourceBuffer` interface controls
  media segments can be appended to the SourceBuffer in any order,
  in a strict sequence.

  `var myMode = sourceBuffer.mode;

  sourceBuffer.mode = 'sequence';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/mode`"
  [this val]
  (aset this "mode" val))

(defn text-tracks
  "Property.

  The textTracks read-only property of the `web.audio.SourceBuffer`
  returns a list of the text tracks currently contained inside
  SourceBuffer.

  `var myTextTracks = sourceBuffer.textTracks;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/textTracks`"
  [this]
  (-> this (.textTracks)))

(defn set-text-tracks!
  "Property.

  The textTracks read-only property of the `web.audio.SourceBuffer`
  returns a list of the text tracks currently contained inside
  SourceBuffer.

  `var myTextTracks = sourceBuffer.textTracks;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/textTracks`"
  [this val]
  (aset this "textTracks" val))

(defn timestamp-offset
  "Property.

  The timestampOffset property of the `web.audio.SourceBuffer`
  controls the offset applied to timestamps inside media segments
  are appended to the SourceBuffer.

  `var myOffset = sourceBuffer.timestampOffset;

  sourceBuffer.timestampOffset = 2.5;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/timestampOffset`"
  [this]
  (-> this (.timestampOffset)))

(defn set-timestamp-offset!
  "Property.

  The timestampOffset property of the `web.audio.SourceBuffer`
  controls the offset applied to timestamps inside media segments
  are appended to the SourceBuffer.

  `var myOffset = sourceBuffer.timestampOffset;

  sourceBuffer.timestampOffset = 2.5;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/timestampOffset`"
  [this val]
  (aset this "timestampOffset" val))

(defn track-defaults
  "Property.

  The trackDefaults property of the `web.audio.SourceBuffer` interface
  the default values to use if kind, label, and/or language information
  not available in the initialization segment of the media to be
  to the SourceBuffer.

  `var myTrackDefaults = sourceBuffer.trackDefaults;

  sourceBuffer.trackDefaults = myTrackDefaultList;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/trackDefaults`"
  [this]
  (-> this (.trackDefaults)))

(defn set-track-defaults!
  "Property.

  The trackDefaults property of the `web.audio.SourceBuffer` interface
  the default values to use if kind, label, and/or language information
  not available in the initialization segment of the media to be
  to the SourceBuffer.

  `var myTrackDefaults = sourceBuffer.trackDefaults;

  sourceBuffer.trackDefaults = myTrackDefaultList;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/trackDefaults`"
  [this val]
  (aset this "trackDefaults" val))

(defn updating
  "Property.

  The updating read-only property of the `web.audio.SourceBuffer`
  indicates whether the SourceBuffer is currently being updated
  i.e. whether an `SourceBuffer.appendBuffer()`, `SourceBuffer.appendStream()`,
  `SourceBuffer.remove()` operation is currently in progress.

  `var isUpdating = sourceBuffer.updating;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/updating`"
  [this]
  (-> this (.updating)))

(defn set-updating!
  "Property.

  The updating read-only property of the `web.audio.SourceBuffer`
  indicates whether the SourceBuffer is currently being updated
  i.e. whether an `SourceBuffer.appendBuffer()`, `SourceBuffer.appendStream()`,
  `SourceBuffer.remove()` operation is currently in progress.

  `var isUpdating = sourceBuffer.updating;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/updating`"
  [this val]
  (aset this "updating" val))

(defn video-tracks
  "Property.

  The videoTracks read-only property of the `web.audio.SourceBuffer`
  returns a list of the video tracks currently contained inside
  SourceBuffer.

  `var myVideoTracks = sourceBuffer.videoTracks;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/videoTracks`"
  [this]
  (-> this (.videoTracks)))

(defn set-video-tracks!
  "Property.

  The videoTracks read-only property of the `web.audio.SourceBuffer`
  returns a list of the video tracks currently contained inside
  SourceBuffer.

  `var myVideoTracks = sourceBuffer.videoTracks;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/videoTracks`"
  [this val]
  (aset this "videoTracks" val))

