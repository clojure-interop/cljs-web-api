(ns web.audio.SourceBuffer
  "The SourceBuffer interface represents a chunk of media to be
  into an `web.media.HTMLMediaElement` and played, via a `web.audio.MediaSource`
  This can be made up of one or several media segments."
  (:refer-clojure :exclude [remove]))

(defn abort
  "Method.

  [Draft]
  [Experimental]

  The abort() method of the `web.audio.SourceBuffer` interface
  the current segment and resets the segment parser.

  `sourceBuffer.abort();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/abort`"
  [this ]
  (-> this (.abort)))

(defn append-buffer
  "Method.

  [Draft]
  [Experimental]

  The appendBuffer() method of the `web.audio.SourceBuffer` interface
  media segment data from an `js.ArrayBuffer` or ArrayBufferView
  to the SourceBuffer.

  `sourceBuffer.appendBuffer(source);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendBuffer`"
  [this source]
  (-> this (.appendBuffer source)))

(defn append-buffer-async
  "Method.

  [Non Standard]
  [Experimental]

  The `web.audio.SourceBuffer` method appendBufferAsync() begins
  process of asynchronously appending media segment data from an
  or `web.typed.ArrayBufferView` object to the SourceBuffer.

  `appendPromise = sourceBuffer.appendBufferAsync(source);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendBufferAsync`"
  [this source]
  (-> this (.appendBufferAsync source)))

(defn append-stream
  "Method.

  [Draft]
  [Experimental]

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

  [Draft]
  [Experimental]

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

  [Non Standard]
  [Experimental]

  The removeAsync() method of the `web.audio.SourceBuffer` interface
  the process of asynchronously removing from the SourceBuffer
  segments found within a specific time range.

  `removePromise = sourceBuffer.removeAsync(start, end);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/removeAsync`"
  [this start end]
  (-> this (.removeAsync start end)))

(defn append-window-end
  "Property.

  [Draft]
  [Experimental]

  The appendWindowEnd property of the `web.audio.SourceBuffer`
  controls the timestamp for the end of the append window, a timestamp
  that can be used to filter what media data is appended to the
  Coded media frames with timestamps wthin this range will be appended,
  those outside the range will be filtered out.

  `var myAppendWindowEnd = sourceBuffer.appendWindowEnd;

  sourceBuffer.appendWindowEnd = 120.0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendWindowEnd`"
  [this]
  (-> this (.-appendWindowEnd)))

(defn set-append-window-end!
  "Property.

  [Draft]
  [Experimental]

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

(defn append-window-start
  "Property.

  [Draft]
  [Experimental]

  The appendWindowStart property of the `web.audio.SourceBuffer`
  controls the timestamp for the start of the append window, a
  range that can be used to filter what media data is appended
  the SourceBuffer. Coded media frames with timestamps wthin this
  will be appended, whereas those outside the range will be filtered

  `var myAppendWindowStart = sourceBuffer.appendWindowStart;

  sourceBuffer.appendWindowStart = 2.0;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/appendWindowStart`"
  [this]
  (-> this (.-appendWindowStart)))

(defn set-append-window-start!
  "Property.

  [Draft]
  [Experimental]

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

  [Read Only]
  [Draft]
  [Experimental]

  The audioTracks read-only property of the `web.audio.SourceBuffer`
  returns a list of the audio tracks currently contained inside
  SourceBuffer.

  `var myAudioTracks = sourceBuffer.audioTracks;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/audioTracks`"
  [this]
  (-> this (.-audioTracks)))

(defn buffered
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The buffered read-only property of the `web.audio.SourceBuffer`
  returns the time ranges that are currently buffered in the SourceBuffer
  a normalized `web.media.TimeRanges` object.

  `var myBufferedRange = sourceBuffer.buffered;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/buffered`"
  [this]
  (-> this (.-buffered)))

(defn mode
  "Property.

  [Experimental]

  The mode property of the `web.audio.SourceBuffer` interface controls
  media segments can be appended to the SourceBuffer in any order,
  in a strict sequence.

  `var myMode = sourceBuffer.mode;

  sourceBuffer.mode = 'sequence';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/mode`"
  [this]
  (-> this (.-mode)))

(defn set-mode!
  "Property.

  [Experimental]

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

  [Read Only]
  [Draft]
  [Experimental]

  The textTracks read-only property of the `web.audio.SourceBuffer`
  returns a list of the text tracks currently contained inside
  SourceBuffer.

  `var myTextTracks = sourceBuffer.textTracks;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/textTracks`"
  [this]
  (-> this (.-textTracks)))

(defn timestamp-offset
  "Property.

  [Draft]
  [Experimental]

  The timestampOffset property of the `web.audio.SourceBuffer`
  controls the offset applied to timestamps inside media segments
  are appended to the SourceBuffer.

  `var myOffset = sourceBuffer.timestampOffset;

  sourceBuffer.timestampOffset = 2.5;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/timestampOffset`"
  [this]
  (-> this (.-timestampOffset)))

(defn set-timestamp-offset!
  "Property.

  [Draft]
  [Experimental]

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

  [Draft]
  [Experimental]

  The trackDefaults property of the `web.audio.SourceBuffer` interface
  the default values to use if kind, label, and/or language information
  not available in the initialization segment of the media to be
  to the SourceBuffer.

  `var myTrackDefaults = sourceBuffer.trackDefaults;

  sourceBuffer.trackDefaults = myTrackDefaultList;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/trackDefaults`"
  [this]
  (-> this (.-trackDefaults)))

(defn set-track-defaults!
  "Property.

  [Draft]
  [Experimental]

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

  [Read Only]
  [Draft]
  [Experimental]

  The updating read-only property of the `web.audio.SourceBuffer`
  indicates whether the SourceBuffer is currently being updated
  i.e. whether an `SourceBuffer.appendBuffer()`, `SourceBuffer.appendStream()`,
  `SourceBuffer.remove()` operation is currently in progress.

  `var isUpdating = sourceBuffer.updating;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/updating`"
  [this]
  (-> this (.-updating)))

(defn video-tracks
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  The videoTracks read-only property of the `web.audio.SourceBuffer`
  returns a list of the video tracks currently contained inside
  SourceBuffer.

  `var myVideoTracks = sourceBuffer.videoTracks;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SourceBuffer/videoTracks`"
  [this]
  (-> this (.-videoTracks)))

(defn onabort
  "Property.

  Fired whenever SourceBuffer.appendBuffer() or SourceBuffer.appendStream()
  ended by a call to SourceBuffer.abort(). SourceBuffer.updating
  from true to false."
  [this]
  (-> this (.-onabort)))

(defn set-onabort!
  "Property.

  Fired whenever SourceBuffer.appendBuffer() or SourceBuffer.appendStream()
  ended by a call to SourceBuffer.abort(). SourceBuffer.updating
  from true to false."
  [this val]
  (aset this "onabort" val))

(defn onerror
  "Property.

  Fired whenever an error occurs during SourceBuffer.appendBuffer()
  SourceBuffer.appendStream(). SourceBuffer.updating changes from
  to false."
  [this]
  (-> this (.-onerror)))

(defn set-onerror!
  "Property.

  Fired whenever an error occurs during SourceBuffer.appendBuffer()
  SourceBuffer.appendStream(). SourceBuffer.updating changes from
  to false."
  [this val]
  (aset this "onerror" val))

(defn onupdate
  "Property.

  Fired whenever SourceBuffer.appendBuffer() method or the SourceBuffer.remove()
  SourceBuffer.updating changes from true to false. This event
  fired before onupdateend."
  [this]
  (-> this (.-onupdate)))

(defn set-onupdate!
  "Property.

  Fired whenever SourceBuffer.appendBuffer() method or the SourceBuffer.remove()
  SourceBuffer.updating changes from true to false. This event
  fired before onupdateend."
  [this val]
  (aset this "onupdate" val))

(defn onupdateend
  "Property.

  Fired whenever SourceBuffer.appendBuffer() method or the SourceBuffer.remove()
  ended. This event is fired after onupdate."
  [this]
  (-> this (.-onupdateend)))

(defn set-onupdateend!
  "Property.

  Fired whenever SourceBuffer.appendBuffer() method or the SourceBuffer.remove()
  ended. This event is fired after onupdate."
  [this val]
  (aset this "onupdateend" val))

(defn onupdatestart
  "Property.

  Fired whenever the value of SourceBuffer.updating transitions
  false to true."
  [this]
  (-> this (.-onupdatestart)))

(defn set-onupdatestart!
  "Property.

  Fired whenever the value of SourceBuffer.updating transitions
  false to true."
  [this val]
  (aset this "onupdatestart" val))

