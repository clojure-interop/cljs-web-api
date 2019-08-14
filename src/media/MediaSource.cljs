(ns media.MediaSource
  "The MediaSource interface of the Media Source Extensions API
  a source of media data for an `html.HTMLMediaElement` object.
  MediaSource object can be attached to a `html.HTMLMediaElement`
  be played in the user agent."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The MediaSource() constructor of the `media.MediaSource` interface constructs and returns a new MediaSource object with no associated source buffers.

  None.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/MediaSource`"
  js/MediaSource)

(defn add-source-buffer
  "Method.

  The addSourceBuffer() method of the `media.MediaSource` interface
  a new `web.SourceBuffer` of the given MIME type and adds it to
  MediaSource's `web.sourceBuffers` list. The new SourceBuffer
  also returned.

  `var sourceBuffer = mediaSource.addSourceBuffer(mimeType);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/addSourceBuffer`"
  [this mime-type]
  (-> this (.addSourceBuffer mime-type)))

(defn clear-live-seekable-range
  "Method.

  The clearLiveSeekableRange() method of the `media.MediaSource`
  clears a seekable range privious set with a call to `web.setLiveSeekableRange()`.

  `mediaSource.clearLiveSeekableRange()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/clearLiveSeekableRange`"
  [this ]
  (-> this (.clearLiveSeekableRange)))

(defn end-of-stream
  "Method.

  The endOfStream() method of the `media.MediaSource` interface
  the end of the stream.

  `mediaSource.endOfStream(endOfStreamError);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/endOfStream`"
  [this end-of-stream-error]
  (-> this (.endOfStream end-of-stream-error)))

(defn is-type-supported
  "Method.

  The isTypeSupported() method of the `media.MediaSource` interface
  a `web.Boolean` value indicating if the given MIME type is supported
  the current user agent — this is, if it can successfully create
  objects for that MIME type.

  `var isItSupported = mediaSource.isTypeSupported(mimeType);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/isTypeSupported`"
  [this mime-type]
  (-> this (.isTypeSupported mime-type)))

(defn remove-source-buffer
  "Method.

  The removeSourceBuffer() method of the `media.MediaSource` interface
  the given `web.SourceBuffer` from the `web.SourceBuffers` list
  with this MediaSource object.

  `mediaSource.removeSourceBuffer(sourceBuffer);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/removeSourceBuffer`"
  [this source-buffer]
  (-> this (.removeSourceBuffer source-buffer)))

(defn set-live-seekable-range
  "Method.

  The setLiveSeekableRange() method of the `media.MediaSource`
  sets the range that the user can seek to in the media element.

  `mediaSource.setLiveSeekableRange(start, end)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/setLiveSeekableRange`"
  [this start end]
  (-> this (.setLiveSeekableRange start end)))

(defn active-source-buffers
  "Property.

  The activeSourceBuffers read-only property of the `media.MediaSource`
  returns a `web.SourceBufferList` object containing a subset of
  `web.SourceBuffer` objects contained within `web.sourceBuffers`
  the list of objects providing the selected video track, enabled
  tracks, and shown/hidden text tracks.

  `var myActiveSourceBuffers = mediaSource.activeSourceBuffers;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/activeSourceBuffers`"
  [this]
  (-> this (.activeSourceBuffers)))

(defn set-active-source-buffers!
  "Property.

  The activeSourceBuffers read-only property of the `media.MediaSource`
  returns a `web.SourceBufferList` object containing a subset of
  `web.SourceBuffer` objects contained within `web.sourceBuffers`
  the list of objects providing the selected video track, enabled
  tracks, and shown/hidden text tracks.

  `var myActiveSourceBuffers = mediaSource.activeSourceBuffers;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/activeSourceBuffers`"
  [this val]
  (aset this "activeSourceBuffers" val))

(defn duration
  "Property.

  The duration property of the `media.MediaSource` interface gets
  sets the duration of the current media being presented.

  `mediaSource.duration = 5.5; // 5.5 seconds

  var myDuration = mediaSource.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/duration`"
  [this]
  (-> this (.duration)))

(defn set-duration!
  "Property.

  The duration property of the `media.MediaSource` interface gets
  sets the duration of the current media being presented.

  `mediaSource.duration = 5.5; // 5.5 seconds

  var myDuration = mediaSource.duration;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/duration`"
  [this val]
  (aset this "duration" val))

(defn ready-state
  "Property.

  The readyState read-only property of the `media.MediaSource`
  returns an enum representing the state of the current MediaSource.
  three possible values are:

  `var myReadyState = mediaSource.readyState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/readyState`"
  [this]
  (-> this (.readyState)))

(defn set-ready-state!
  "Property.

  The readyState read-only property of the `media.MediaSource`
  returns an enum representing the state of the current MediaSource.
  three possible values are:

  `var myReadyState = mediaSource.readyState;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/readyState`"
  [this val]
  (aset this "readyState" val))

(defn source-buffers
  "Property.

  The sourceBuffers read-only property of the `media.MediaSource`
  returns a `web.SourceBufferList` object containing the list of
  objects associated with this MediaSource.

  `var mySourceBuffers = mediaSource.sourceBuffers;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/sourceBuffers`"
  [this]
  (-> this (.sourceBuffers)))

(defn set-source-buffers!
  "Property.

  The sourceBuffers read-only property of the `media.MediaSource`
  returns a `web.SourceBufferList` object containing the list of
  objects associated with this MediaSource.

  `var mySourceBuffers = mediaSource.sourceBuffers;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaSource/sourceBuffers`"
  [this val]
  (aset this "sourceBuffers" val))

