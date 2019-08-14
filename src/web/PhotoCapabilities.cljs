(ns web.PhotoCapabilities
  "The PhotoCapabilities interface of the the MediaStream Image
  API provides available configuration options for an attached
  device. A PhotoCapabilities object is retrieved by calling `web.ImageCapture.getPhotoCapabilities()`."
  (:refer-clojure :exclude []))

(defn fill-light-mode
  "Property.

  The fillLightMode read-only property of the `web.PhotoCapabilities`
  returns an array of available fill light options. Options may
  auto, off, or flash.

  `var lightModes[] = photoCapabilities.fillLightMode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PhotoCapabilities/fillLightMode`"
  [this]
  (-> this (.fillLightMode)))

(defn set-fill-light-mode!
  "Property.

  The fillLightMode read-only property of the `web.PhotoCapabilities`
  returns an array of available fill light options. Options may
  auto, off, or flash.

  `var lightModes[] = photoCapabilities.fillLightMode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PhotoCapabilities/fillLightMode`"
  [this val]
  (aset this "fillLightMode" val))

(defn image-height
  "Property.

  The imageHeight read-only property of the `web.PhotoCapabilities`
  returns a `media.MediaSettingsRange` object indicating the image
  range supported by the user agent.

  `var mediaSettingsRange = photoCapabilities.imageHeight`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PhotoCapabilities/imageHeight`"
  [this]
  (-> this (.imageHeight)))

(defn set-image-height!
  "Property.

  The imageHeight read-only property of the `web.PhotoCapabilities`
  returns a `media.MediaSettingsRange` object indicating the image
  range supported by the user agent.

  `var mediaSettingsRange = photoCapabilities.imageHeight`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PhotoCapabilities/imageHeight`"
  [this val]
  (aset this "imageHeight" val))

(defn image-width
  "Property.

  The imageWidth read-only property of the `web.PhotoCapabilities`
  returns a `media.MediaSettingsRange` object indicating the image
  range supported by the user agent.

  `var mediaSettingsRange = photoCapabilities.imageWidth`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PhotoCapabilities/imageWidth`"
  [this]
  (-> this (.imageWidth)))

(defn set-image-width!
  "Property.

  The imageWidth read-only property of the `web.PhotoCapabilities`
  returns a `media.MediaSettingsRange` object indicating the image
  range supported by the user agent.

  `var mediaSettingsRange = photoCapabilities.imageWidth`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PhotoCapabilities/imageWidth`"
  [this val]
  (aset this "imageWidth" val))

(defn red-eye-reduction
  "Property.

  The redEyeReduction read-only property of the `web.PhotoCapabilities`
  returns a `web.RedEyeReduction` object indicating the red-eye
  capability of the source.

  `var redEyeReduction = photoCapabilities.redEyeReduction`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PhotoCapabilities/redEyeReduction`"
  [this]
  (-> this (.redEyeReduction)))

(defn set-red-eye-reduction!
  "Property.

  The redEyeReduction read-only property of the `web.PhotoCapabilities`
  returns a `web.RedEyeReduction` object indicating the red-eye
  capability of the source.

  `var redEyeReduction = photoCapabilities.redEyeReduction`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PhotoCapabilities/redEyeReduction`"
  [this val]
  (aset this "redEyeReduction" val))

