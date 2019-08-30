(ns web.media.ImageCapture
  "The ImageCapture interface of the MediaStream Image Capture API
  methods to enable the capture of images or photos from a camera
  other photographic device provides an interface for capturing
  from a photographic device referenced through a valid `web.audio.MediaStreamTrack`."
  (:refer-clojure :exclude []))

(defn take-photo
  "Method.

  [Experimental]

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

  [Experimental]

  The getPhotoCapabilities() method of the `web.media.ImageCapture`
  returns a `js.Promise` that resolves with a `web.media.PhotoCapabilities`
  containing the ranges of available configuration options.

  `var promise = ImageCapture.getPhotoCapabilities()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/getPhotoCapabilities`"
  [this ]
  (-> this (.getPhotoCapabilities)))

(defn get-photo-settings
  "Method.

  [Experimental]

  The getPhotoSettings() property of the `web.media.ImageCapture`
  returns a `js.Promise` that resolves with a `PhotoSettings` object
  the current photo configuration settings.

  `var promise = ImageCapture.getPhotoSettings()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/getPhotoSettings`"
  [this ]
  (-> this (.getPhotoSettings)))

(defn grab-frame
  "Method.

  [Experimental]

  The grabFrame() property of the `web.media.ImageCapture` interface
  a snapshot of the live video in a `web.audio.MediaStreamTrack`,
  an ImageBitmap, if successful.

  `ImageCapture.grabFrame().then(function(imageBitmap) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/grabFrame`"
  [this & args]
  (-> this .-grabFrame (.apply this (clj->js args))))

(defn track
  "Property.

  [Read Only]
  [Experimental]

  The track read-only property of the `web.media.ImageCapture`
  returns a reference to the `web.audio.MediaStreamTrack` passed
  the `ImageCapture()` constructor.

  `var mediaStreamTrack = ImageCapture.track`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/track`"
  [this]
  (-> this (.-track)))

