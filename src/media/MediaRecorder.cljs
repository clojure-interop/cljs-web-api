(ns media.MediaRecorder
  "The MediaRecorder interface of the MediaStream Recording API
  functionality to easily record media. It is created using the
  constructor."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The MediaRecorder() constructor creates a new `media.MediaRecorder` object that will record a specified `media.MediaStream`.

  stream
  The `media.MediaStream` that will be recorded. This source media can come from a stream created using `web.navigator.mediaDevices.getUserMedia()` or from an `web.<audio>`, `web.<video>` or `web.<canvas>` element.

  options Optional


  A dictionary object that can contain the following properties:


  mimeType: The MIME type you want to use as the recording container for the new MediaRecorder. This field may simply specify the container format (allowing the browser to choose its preferred codecs) or may include the codec and/or profile options to use. Applications can check in advance if this mimeType is supported by the user agent by calling `media.MediaRecorder.isTypeSupported()`.
  audioBitsPerSecond: The chosen bitrate for the audio component of the media.
  videoBitsPerSecond: The chosen bitrate for the video component of the media.
  bitsPerSecond: The chosen bitrate for the audio and video components of the media. This can be specified instead of the above two properties. If this is specified along with one or the other of the above properties, this will be used for the one that isn't specified.



  If bits per second values are not specified for video and/or audio, the default adopted for video is 2.5Mbps, while the audio default is adaptive, depending upon the sample rate and the number of channels.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/MediaRecorder`"
  js/MediaRecorder)

(defn is-type-supported
  "Method.

  The MediaRecorder.isTypeSupported() method returns a Boolean
  is true if the MIME type specified is one the user agent can

  `var canRecord = MediaRecorder.isTypeSupported(mimeType)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/isTypeSupported`"
  [this mime-type]
  (-> this (.isTypeSupported mime-type)))

(defn pause
  "Method.

  The Media.pause() method (part of the MediaRecorder API) is used
  pause recording of media streams.

  `MediaRecorder.pause()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/pause`"
  [this ]
  (-> this (.pause)))

(defn request-data
  "Method.

  The MediaRecorder.requestData() method (part of the MediaRecorder
  is used to raise a `web.dataavailable` event containing a `web.Blob`
  of the captured media as it was when the method was called.

  `MediaRecorder.requestData()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/requestData`"
  [this ]
  (-> this (.requestData)))

(defn resume
  "Method.

  The MediaRecorder.resume() method (part of the MediaRecorder
  is used to resume media recording when it has been previously

  `MediaRecorder.resume()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/resume`"
  [this ]
  (-> this (.resume)))

(defn start
  "Method.

  The `media.MediaRecorder` method start(), which is part of the
  Recording API, begins recording media into one or more `web.Blob`

  `MediaRecorder.start(timeslice)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/start`"
  [this timeslice]
  (-> this (.start timeslice)))

(defn stop
  "Method.

  The MediaRecorder.stop() method (part of the MediaRecorder API)
  used to stop media capture.

  `MediaRecorder.stop()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/stop`"
  [this ]
  (-> this (.stop)))

(defn audio-bits-per-second
  "Property.

  The audioBitsPerSecond read-only property of the `media.MediaRecorder`
  returns the audio encoding bit rate in use.

  `var audioBitsPerSecond = MediaRecorder.audioBitsPerSecond`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/audioBitsPerSecond`"
  [this]
  (-> this (.audioBitsPerSecond)))

(defn set-audio-bits-per-second!
  "Property.

  The audioBitsPerSecond read-only property of the `media.MediaRecorder`
  returns the audio encoding bit rate in use.

  `var audioBitsPerSecond = MediaRecorder.audioBitsPerSecond`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/audioBitsPerSecond`"
  [this val]
  (aset this "audioBitsPerSecond" val))

(defn ignore-muted-media
  "Property.

  The ignoreMutedMedia property of the `media.MediaRecorder` interface
  whether the MediaRecorder instance will record input, when the
  MediaStreamTrack is muted.

  `var boolean = MediaRecorder.ignoreMutedMedia
  MediaRecorder.ignoreMutedMedia = boolean`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/ignoreMutedMedia`"
  [this]
  (-> this (.ignoreMutedMedia)))

(defn set-ignore-muted-media!
  "Property.

  The ignoreMutedMedia property of the `media.MediaRecorder` interface
  whether the MediaRecorder instance will record input, when the
  MediaStreamTrack is muted.

  `var boolean = MediaRecorder.ignoreMutedMedia
  MediaRecorder.ignoreMutedMedia = boolean`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/ignoreMutedMedia`"
  [this val]
  (aset this "ignoreMutedMedia" val))

(defn mime-type
  "Property.

  The MediaRecorder.mimeType read-only property returns the MIME
  that is being used as the recording container when it was created.
  is the file format of the file that would result from writing
  of the recorded data to disk. Keep in mind, of course, that the
  format and the codecs associated with the individual tracks are
  things entirely; writing tracks that work just fine in a WebM
  into an MP4 wrapper may not result in a file that plays everywhere
  want it to.

  `var mimeType = MediaRecorder.mimeType`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/mimeType`"
  [this]
  (-> this (.mimeType)))

(defn set-mime-type!
  "Property.

  The MediaRecorder.mimeType read-only property returns the MIME
  that is being used as the recording container when it was created.
  is the file format of the file that would result from writing
  of the recorded data to disk. Keep in mind, of course, that the
  format and the codecs associated with the individual tracks are
  things entirely; writing tracks that work just fine in a WebM
  into an MP4 wrapper may not result in a file that plays everywhere
  want it to.

  `var mimeType = MediaRecorder.mimeType`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/mimeType`"
  [this val]
  (aset this "mimeType" val))

(defn ondataavailable
  "Property.

  The MediaRecorder.ondataavailable event handler (part of the
  Recording API) handles the dataavailable event, letting you run
  in response to `web.Blob` data being made available for use.

  `MediaRecorder.ondataavailable = function(event) { ... }
  MediaRecorder.addEventListener('dataavailable', function(event) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/ondataavailable`"
  [this]
  (-> this (.ondataavailable)))

(defn set-ondataavailable!
  "Property.

  The MediaRecorder.ondataavailable event handler (part of the
  Recording API) handles the dataavailable event, letting you run
  in response to `web.Blob` data being made available for use.

  `MediaRecorder.ondataavailable = function(event) { ... }
  MediaRecorder.addEventListener('dataavailable', function(event) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/ondataavailable`"
  [this val]
  (aset this "ondataavailable" val))

(defn onerror
  "Property.

  The `media.MediaRecorder` interface's onerror event handler is
  by the MediaStream Recording API when an error occurs. You can
  an event handler to deal with errors that occur while creating
  using a media recorder

  `MediaRecorder.onerror = errorHandlerFunction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onerror`"
  [this]
  (-> this (.onerror)))

(defn set-onerror!
  "Property.

  The `media.MediaRecorder` interface's onerror event handler is
  by the MediaStream Recording API when an error occurs. You can
  an event handler to deal with errors that occur while creating
  using a media recorder

  `MediaRecorder.onerror = errorHandlerFunction;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onerror`"
  [this val]
  (aset this "onerror" val))

(defn onpause
  "Property.

  The MediaRecorder.onpause event handler (part of the MediaRecorder
  handles the pause event, allowing you to run code in response
  the media recording being paused.

  `MediaRecorder.onpause = function(event) { ... }
  MediaRecorder.addEventListener('pause', function(event) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onpause`"
  [this]
  (-> this (.onpause)))

(defn set-onpause!
  "Property.

  The MediaRecorder.onpause event handler (part of the MediaRecorder
  handles the pause event, allowing you to run code in response
  the media recording being paused.

  `MediaRecorder.onpause = function(event) { ... }
  MediaRecorder.addEventListener('pause', function(event) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onpause`"
  [this val]
  (aset this "onpause" val))

(defn onresume
  "Property.

  The MediaRecorder.onresume event handler (part of the MediaRecorder
  handles the resume event, allowing you to run code in response
  the media recording being resumed after pausing.

  `MediaRecorder.onresume = function(event) { ... }
  MediaRecorder.addEventListener('resume', function(event) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onresume`"
  [this]
  (-> this (.onresume)))

(defn set-onresume!
  "Property.

  The MediaRecorder.onresume event handler (part of the MediaRecorder
  handles the resume event, allowing you to run code in response
  the media recording being resumed after pausing.

  `MediaRecorder.onresume = function(event) { ... }
  MediaRecorder.addEventListener('resume', function(event) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onresume`"
  [this val]
  (aset this "onresume" val))

(defn onstart
  "Property.

  The MediaRecorder.onstartevent handler (part of the MediaRecorder
  handles the start event, allowing you to run code in response
  media recording being started by a MediaRecorder.

  `MediaRecorder.onstart = function(event) { ... }
  MediaRecorder.addEventListener('start', function(event) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onstart`"
  [this]
  (-> this (.onstart)))

(defn set-onstart!
  "Property.

  The MediaRecorder.onstartevent handler (part of the MediaRecorder
  handles the start event, allowing you to run code in response
  media recording being started by a MediaRecorder.

  `MediaRecorder.onstart = function(event) { ... }
  MediaRecorder.addEventListener('start', function(event) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onstart`"
  [this val]
  (aset this "onstart" val))

(defn onstop
  "Property.

  The MediaRecorder.onstop event handler (part of the MediaRecorder
  handles the stop event, allowing you to run code in response
  media recording via a MediaRecorder being stopped.

  `MediaRecorder.onstop = function(event) { ... }
  MediaRecorder.addEventListener('stop', function(event) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onstop`"
  [this]
  (-> this (.onstop)))

(defn set-onstop!
  "Property.

  The MediaRecorder.onstop event handler (part of the MediaRecorder
  handles the stop event, allowing you to run code in response
  media recording via a MediaRecorder being stopped.

  `MediaRecorder.onstop = function(event) { ... }
  MediaRecorder.addEventListener('stop', function(event) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onstop`"
  [this val]
  (aset this "onstop" val))

(defn onwarning
  "Property.

  The MediaRecorder.onwarning event handler (part of the MediaRecorder
  handles the recordingwarning event, allowing you to run code
  response to non-fatal errors being thrown during media recording
  a MediaRecorder, which don't halt recording.

  `MediaRecorder.onwarning = function(event) { ... }
  MediaRecorder.addEventListener('warning', function(event) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onwarning`"
  [this]
  (-> this (.onwarning)))

(defn set-onwarning!
  "Property.

  The MediaRecorder.onwarning event handler (part of the MediaRecorder
  handles the recordingwarning event, allowing you to run code
  response to non-fatal errors being thrown during media recording
  a MediaRecorder, which don't halt recording.

  `MediaRecorder.onwarning = function(event) { ... }
  MediaRecorder.addEventListener('warning', function(event) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/onwarning`"
  [this val]
  (aset this "onwarning" val))

(defn state
  "Property.

  The MediaRecorder.state read-only property returns the current
  of the current MediaRecorder object.

  `var state = MediaRecorder.state`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/state`"
  [this]
  (-> this (.state)))

(defn set-state!
  "Property.

  The MediaRecorder.state read-only property returns the current
  of the current MediaRecorder object.

  `var state = MediaRecorder.state`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/state`"
  [this val]
  (aset this "state" val))

(defn stream
  "Property.

  The MediaRecorder.stream read-only property returns the stream
  was passed into the MediaRecorder() constructor when the MediaRecorder
  created.

  `var stream = MediaRecorder.stream`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/stream`"
  [this]
  (-> this (.stream)))

(defn set-stream!
  "Property.

  The MediaRecorder.stream read-only property returns the stream
  was passed into the MediaRecorder() constructor when the MediaRecorder
  created.

  `var stream = MediaRecorder.stream`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/stream`"
  [this val]
  (aset this "stream" val))

(defn video-bits-per-second
  "Property.

  The videoBitsPerSecond read-only property of the `media.MediaRecorder`
  returns the video encoding bit rate in use.

  `var videoBitsPerSecond = MediaRecorder.videoBitsPerSecond`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/videoBitsPerSecond`"
  [this]
  (-> this (.videoBitsPerSecond)))

(defn set-video-bits-per-second!
  "Property.

  The videoBitsPerSecond read-only property of the `media.MediaRecorder`
  returns the video encoding bit rate in use.

  `var videoBitsPerSecond = MediaRecorder.videoBitsPerSecond`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaRecorder/videoBitsPerSecond`"
  [this val]
  (aset this "videoBitsPerSecond" val))

