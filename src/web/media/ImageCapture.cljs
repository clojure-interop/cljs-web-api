(ns web.media.ImageCapture
  "The ImageCapture interface of the MediaStream Image Capture API
  methods to enable the capture of images or photos from a camera
  other photographic device provides an interface for capturing
  from a photographic device referenced through a valid `web.audio.MediaStreamTrack`."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ImageCapture() constructor creates a new `web.media.ImageCapture` object which creates a new `web.media.ImageCapture` object.

  videoTrack
  A `web.audio.MediaStreamTrack` from which the still images will be taken. This can be any source, such as an incoming stream of a video conference, a playing movie, or the stream from a webcam.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/ImageCapture`"
  js/ImageCapture)

(defn take-photo
  "Method.

  The takePhoto() method of the `web.media.ImageCapture` interface
  a single exposure using the video capture device sourcing a `web.audio.MediaStreamTrack`
  returns a `js.Promise` that resolves with a `web.files.Blob`
  the data.

  `var promise = ImageCapture.takePhoto(photoSettings)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/takePhoto`"
  [this photo-settings]
  (-> this (.takePhoto photo-settings)))

(defn get-photo-capabilities
  "Method.

  The getPhotoCapabilities() method of the `web.media.ImageCapture`
  returns a `js.Promise` that resolves with a `web.media.PhotoCapabilities`
  containing the ranges of available configuration options.

  `var promise = ImageCapture.getPhotoCapabilities()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/getPhotoCapabilities`"
  [this ]
  (-> this (.getPhotoCapabilities)))

(defn get-photo-settings
  "Method.

  The getPhotoSettings() property of the `web.media.ImageCapture`
  returns a `js.Promise` that resolves with a `PhotoSettings` object
  the current photo configuration settings.

  `var promise = ImageCapture.getPhotoSettings()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/getPhotoSettings`"
  [this ]
  (-> this (.getPhotoSettings)))

(defn grab-frame
  "Method.

  The grabFrame() property of the `web.media.ImageCapture` interface
  a snapshot of the live video in a `web.audio.MediaStreamTrack`,
  an ImageBitmap, if successful.

  `ImageCapture.grabFrame().then(function(imageBitmap) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/grabFrame`"
  [this & args]
  (-> this .-grabFrame (.apply this (clj->js args))))

(defn track
  "Property.

  The track read-only property of the `web.media.ImageCapture`
  returns a reference to the `web.audio.MediaStreamTrack` passed
  the `ImageCapture()` constructor.

  `var mediaStreamTrack = ImageCapture.track`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/track`"
  [this]
  (-> this (.-track)))

(defn set-track!
  "Property.

  The track read-only property of the `web.media.ImageCapture`
  returns a reference to the `web.audio.MediaStreamTrack` passed
  the `ImageCapture()` constructor.

  `var mediaStreamTrack = ImageCapture.track`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/track`"
  [this val]
  (aset this "track" val))

