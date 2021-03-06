(ns web.audio.MediaSource
  "The MediaSource interface of the Media Source Extensions API
  a source of media data for an `web.media.HTMLMediaElement` object.
  MediaSource object can be attached to a `web.media.HTMLMediaElement`
  be played in the user agent."
  (:refer-clojure :exclude []))

(defn add-source-buffer
  "Method.

  The addSourceBuffer() method of the `web.audio.MediaSource` interface
  a new `web.audio.SourceBuffer` of the given MIME type and adds
  to the MediaSource's `sourceBuffers` list. The new SourceBuffer
  also returned.

  `var sourceBuffer = mediaSource.addSourceBuffer(mimeType);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/addSourceBuffer`"
  [this mime-type]
  (-> this (.addSourceBuffer mime-type)))

(defn clear-live-seekable-range
  "Method.

  [Experimental]

  The clearLiveSeekableRange() method of the `web.audio.MediaSource`
  clears a seekable range privious set with a call to `setLiveSeekableRange()`.

  `mediaSource.clearLiveSeekableRange()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/clearLiveSeekableRange`"
  [this ]
  (-> this (.clearLiveSeekableRange)))

(defn end-of-stream
  "Method.

  [Experimental]

  The endOfStream() method of the `web.audio.MediaSource` interface
  the end of the stream.

  `mediaSource.endOfStream(endOfStreamError);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/endOfStream`"
  [this end-of-stream-error]
  (-> this (.endOfStream end-of-stream-error)))

(defn remove-source-buffer
  "Method.

  [Experimental]

  The removeSourceBuffer() method of the `web.audio.MediaSource`
  removes the given `web.audio.SourceBuffer` from the `SourceBuffers`
  associated with this MediaSource object.

  `mediaSource.removeSourceBuffer(sourceBuffer);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/removeSourceBuffer`"
  [this source-buffer]
  (-> this (.removeSourceBuffer source-buffer)))

(defn set-live-seekable-range
  "Method.

  [Experimental]

  The setLiveSeekableRange() method of the `web.audio.MediaSource`
  sets the range that the user can seek to in the media element.

  `mediaSource.setLiveSeekableRange(start, end)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/setLiveSeekableRange`"
  [this start end]
  (-> this (.setLiveSeekableRange start end)))

(defn is-type-supported
  "Method.

  The MediaSource.isTypeSupported() static method returns a `js.Boolean`
  which is true if the given MIME type is likely to be supported
  the current user agent.

  `var isItSupported = MediaSource.isTypeSupported(mimeType);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/isTypeSupported`"
  [this mime-type]
  (-> this (.isTypeSupported mime-type)))

(defn source-buffers
  "Property.

  [Read Only]
  [Experimental]

  The sourceBuffers read-only property of the `web.audio.MediaSource`
  returns a `web.audio.SourceBufferList` object containing the
  of `web.audio.SourceBuffer` objects associated with this MediaSource.

  `var mySourceBuffers = mediaSource.sourceBuffers;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/sourceBuffers`"
  [this]
  (-> this (.-sourceBuffers)))

(defn active-source-buffers
  "Property.

  [Read Only]

  The activeSourceBuffers read-only property of the `web.audio.MediaSource`
  returns a `web.audio.SourceBufferList` object containing a subset
  the `web.audio.SourceBuffer` objects contained within `sourceBuffers`
  the list of objects providing the selected video track, enabled
  tracks, and shown/hidden text tracks.

  `var myActiveSourceBuffers = mediaSource.activeSourceBuffers;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/activeSourceBuffers`"
  [this]
  (-> this (.-activeSourceBuffers)))

(defn ready-state
  "Property.

  [Read Only]
  [Experimental]

  The readyState read-only property of the `web.audio.MediaSource`
  returns an enum representing the state of the current MediaSource.
  three possible values are:

  `var myReadyState = mediaSource.readyState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/readyState`"
  [this]
  (-> this (.-readyState)))

(defn duration
  "Property.

  [Experimental]

  The duration property of the `web.audio.MediaSource` interface
  and sets the duration of the current media being presented.

  `mediaSource.duration = 5.5; // 5.5 seconds

  var myDuration = mediaSource.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/duration`"
  [this]
  (-> this (.-duration)))

(defn set-duration!
  "Property.

  [Experimental]

  The duration property of the `web.audio.MediaSource` interface
  and sets the duration of the current media being presented.

  `mediaSource.duration = 5.5; // 5.5 seconds

  var myDuration = mediaSource.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/duration`"
  [this val]
  (aset this "duration" val))

(defn onsourceclose
  "Property.

  The event handler for the sourceclose event."
  [this]
  (-> this (.-onsourceclose)))

(defn set-onsourceclose!
  "Property.

  The event handler for the sourceclose event."
  [this val]
  (aset this "onsourceclose" val))

(defn onsourceended
  "Property.

  The event handler for the sourceended event."
  [this]
  (-> this (.-onsourceended)))

(defn set-onsourceended!
  "Property.

  The event handler for the sourceended event."
  [this val]
  (aset this "onsourceended" val))

(defn onsourceopen
  "Property.

  The event handler for the sourceopen event."
  [this]
  (-> this (.-onsourceopen)))

(defn set-onsourceopen!
  "Property.

  The event handler for the sourceopen event."
  [this val]
  (aset this "onsourceopen" val))

