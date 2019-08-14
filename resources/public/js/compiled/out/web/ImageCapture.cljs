(ns web.ImageCapture
  "The ImageCapture interface of the MediaStream Image Capture API
  methods to enable the capture of images or photos from a camera
  other photographic device provides an interface for capturing
  from a photographic device referenced through a valid `media.MediaStreamTrack`."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The ImageCapture() constructor creates a new `web.ImageCapture` object which creates a new `web.ImageCapture` object.

  videoTrack
  A `media.MediaStreamTrack` from which the still images will be taken. This can be any source, such as an incoming stream of a video conference, a playing movie, or the stream from a webcam.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/ImageCapture`"
  js/ImageCapture)

(defn get-photo-capabilities
  "Method.

  The getPhotoCapabilities() method of the `web.ImageCapture` interface
  a `web.Promise` that resolves with a `web.PhotoCapabilities`
  containing the ranges of available configuration options.

  `var promise = ImageCapture.getPhotoCapabilities()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/getPhotoCapabilities`"
  [this ]
  (-> this (.getPhotoCapabilities)))

(defn get-photo-settings
  "Method.

  The getPhotoSettings() property of the `web.ImageCapture` interface
  a `web.Promise` that resolves with a `web.PhotoSettings` object
  the current photo configuration settings.

  `var promise = ImageCapture.getPhotoSettings()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/getPhotoSettings`"
  [this ]
  (-> this (.getPhotoSettings)))

(defn grab-frame
  "Method.

  The grabFrame() property of the `web.ImageCapture` interface
  a snapshot of the live video in a `media.MediaStreamTrack`, returning
  ImageBitmap, if successful.

  `ImageCapture.grabFrame().then(function(imageBitmap) { ... })`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/grabFrame`"
  [this & args]
  (apply (-> this .-grabFrame) (concat [this] args)))

(defn take-photo
  "Method.

  The takePhoto() method of the `web.ImageCapture` interface takes
  single exposure using the video capture device sourcing a `media.MediaStreamTrack`
  returns a `web.Promise` that resolves with a `web.Blob` containing
  data.

  `var promise = ImageCapture.takePhoto(photoSettings)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/takePhoto`"
  [this photo-settings]
  (-> this (.takePhoto photo-settings)))

(defn track
  "Property.

  The track read-only property of the `web.ImageCapture` interface
  a reference to the `media.MediaStreamTrack` passed to the `web.ImageCapture()`

  `var mediaStreamTrack = ImageCapture.track`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/track`"
  [this]
  (-> this (.track)))

(defn set-track!
  "Property.

  The track read-only property of the `web.ImageCapture` interface
  a reference to the `media.MediaStreamTrack` passed to the `web.ImageCapture()`

  `var mediaStreamTrack = ImageCapture.track`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ImageCapture/track`"
  [this val]
  (aset this "track" val))

