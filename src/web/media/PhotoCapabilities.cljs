(ns web.media.PhotoCapabilities
  "The PhotoCapabilities interface of the the MediaStream Image
  API provides available configuration options for an attached
  device. A PhotoCapabilities object is retrieved by calling `ImageCapture.getPhotoCapabilities()`."
  (:refer-clojure :exclude []))

(defn red-eye-reduction
  "Property.

  [Read Only]
  [Experimental]

  The redEyeReduction read-only property of the `web.media.PhotoCapabilities`
  returns a `RedEyeReduction` object indicating the red-eye reduction
  of the source.

  `var redEyeReduction = photoCapabilities.redEyeReduction`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PhotoCapabilities/redEyeReduction`"
  [this]
  (-> this (.-redEyeReduction)))

(defn image-height
  "Property.

  [Read Only]
  [Experimental]

  The imageHeight read-only property of the `web.media.PhotoCapabilities`
  returns a `web.media.MediaSettingsRange` object indicating the
  height range supported by the user agent.

  `var mediaSettingsRange = photoCapabilities.imageHeight`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PhotoCapabilities/imageHeight`"
  [this]
  (-> this (.-imageHeight)))

(defn image-width
  "Property.

  [Read Only]
  [Experimental]

  The imageWidth read-only property of the `web.media.PhotoCapabilities`
  returns a `web.media.MediaSettingsRange` object indicating the
  width range supported by the user agent.

  `var mediaSettingsRange = photoCapabilities.imageWidth`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PhotoCapabilities/imageWidth`"
  [this]
  (-> this (.-imageWidth)))

(defn fill-light-mode
  "Property.

  [Read Only]
  [Experimental]

  The fillLightMode read-only property of the `web.media.PhotoCapabilities`
  returns an array of available fill light options. Options may
  auto, off, or flash.

  `var lightModes[] = photoCapabilities.fillLightMode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PhotoCapabilities/fillLightMode`"
  [this]
  (-> this (.-fillLightMode)))

