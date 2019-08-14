(ns svg.SVGImageElement
  "The SVGImageElement interface corresponds to the `web.<image>`"
  (:refer-clojure :exclude []))

(defn decode
  "Method.

  The decode() method of the `svg.SVGImageElement` interface initiates
  decoding of an image, returning a `web.Promise` that

  `var promise = svgImageElement.decode();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/decode`"
  [this ]
  (-> this (.decode)))

(defn decoding
  "Property.

  The decoding property of the `svg.SVGImageElement` interface
  a hint given to the browser on how it should decode the image.

  `var refStr = SVGImageElement.decoding
  SVGImageElement.decoding = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/decoding`"
  [this]
  (-> this (.decoding)))

(defn set-decoding!
  "Property.

  The decoding property of the `svg.SVGImageElement` interface
  a hint given to the browser on how it should decode the image.

  `var refStr = SVGImageElement.decoding
  SVGImageElement.decoding = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/decoding`"
  [this val]
  (aset this "decoding" val))

(defn height
  "Property.

  The height read-only property of the `svg.SVGImageElement` interface
  an `svg.SVGAnimatedLength` corresponding to the height attribute
  the given `web.<image>` element.

  `var height = svgImageElement.height`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/height`"
  [this]
  (-> this (.height)))

(defn set-height!
  "Property.

  The height read-only property of the `svg.SVGImageElement` interface
  an `svg.SVGAnimatedLength` corresponding to the height attribute
  the given `web.<image>` element.

  `var height = svgImageElement.height`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/height`"
  [this val]
  (aset this "height" val))

(defn preserve-aspect-ratio
  "Property.

  The preserveAspectRatio read-only property of the `svg.SVGImageElement`
  returns an `svg.SVGAnimatedPreserveAspectRatio` corresponding
  the preserveAspectRatio attribute of the given `web.<image>`

  `var svgAnimatedPreerveAspectRatio = svgImageElement.preserveAspectRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/preserveAspectRatio`"
  [this]
  (-> this (.preserveAspectRatio)))

(defn set-preserve-aspect-ratio!
  "Property.

  The preserveAspectRatio read-only property of the `svg.SVGImageElement`
  returns an `svg.SVGAnimatedPreserveAspectRatio` corresponding
  the preserveAspectRatio attribute of the given `web.<image>`

  `var svgAnimatedPreerveAspectRatio = svgImageElement.preserveAspectRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/preserveAspectRatio`"
  [this val]
  (aset this "preserveAspectRatio" val))

(defn width
  "Property.

  The width read-only property of the `svg.SVGImageElement` interface
  an `svg.SVGAnimatedLength` corresponding to the width attribute
  the given `web.<image>` element.

  `var width = svgImageElement.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/width`"
  [this]
  (-> this (.width)))

(defn set-width!
  "Property.

  The width read-only property of the `svg.SVGImageElement` interface
  an `svg.SVGAnimatedLength` corresponding to the width attribute
  the given `web.<image>` element.

  `var width = svgImageElement.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/width`"
  [this val]
  (aset this "width" val))

(defn x
  "Property.

  The x read-only property of the `svg.SVGImageElement` interface
  an `svg.SVGAnimatedLength` corresponding to the x attribute of
  given `web.<image>` element.

  `var x = svgImageElement.x;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/x`"
  [this]
  (-> this (.x)))

(defn set-x!
  "Property.

  The x read-only property of the `svg.SVGImageElement` interface
  an `svg.SVGAnimatedLength` corresponding to the x attribute of
  given `web.<image>` element.

  `var x = svgImageElement.x;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/x`"
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  The y read-only property of the `svg.SVGImageElement` interface
  an `svg.SVGAnimatedLength` corresponding to the y attribute of
  given `web.<image>` element.

  `var y = svgImageElement.y;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/y`"
  [this]
  (-> this (.y)))

(defn set-y!
  "Property.

  The y read-only property of the `svg.SVGImageElement` interface
  an `svg.SVGAnimatedLength` corresponding to the y attribute of
  given `web.<image>` element.

  `var y = svgImageElement.y;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/y`"
  [this val]
  (aset this "y" val))

