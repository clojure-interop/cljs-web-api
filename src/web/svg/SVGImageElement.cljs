(ns web.svg.SVGImageElement
  "The SVGImageElement interface corresponds to the `<image>` element."
  (:refer-clojure :exclude []))

(defn decode
  "Method.

  The decode() method of the `web.svg.SVGImageElement` interface
  asynchronous decoding of an image, returning a `js.Promise` that

  `var promise = svgImageElement.decode();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/decode`"
  [this ]
  (-> this (.decode)))

(defn cross-origin
  "Property.

  A DOMString corresponding to the crossorigin attribute of the
  <image> element."
  [this]
  (-> this (.-crossOrigin)))

(defn set-cross-origin!
  "Property.

  A DOMString corresponding to the crossorigin attribute of the
  <image> element."
  [this val]
  (aset this "crossOrigin" val))

(defn decoding
  "Property.

  The decoding property of the `web.svg.SVGImageElement` interface
  a hint given to the browser on how it should decode the image.

  `var refStr = SVGImageElement.decoding
  SVGImageElement.decoding = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/decoding`"
  [this]
  (-> this (.-decoding)))

(defn set-decoding!
  "Property.

  The decoding property of the `web.svg.SVGImageElement` interface
  a hint given to the browser on how it should decode the image.

  `var refStr = SVGImageElement.decoding
  SVGImageElement.decoding = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/decoding`"
  [this val]
  (aset this "decoding" val))

(defn height
  "Property.

  [Read Only]

  The height read-only property of the `web.svg.SVGImageElement`
  returns an `web.svg.SVGAnimatedLength` corresponding to the height
  of the given `<image>` element.

  `var height = svgImageElement.height`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/height`"
  [this]
  (-> this (.-height)))

(defn preserve-aspect-ratio
  "Property.

  [Read Only]

  The preserveAspectRatio read-only property of the `web.svg.SVGImageElement`
  returns an `web.svg.SVGAnimatedPreserveAspectRatio` corresponding
  the preserveAspectRatio attribute of the given `<image>` element.

  `var svgAnimatedPreerveAspectRatio = svgImageElement.preserveAspectRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/preserveAspectRatio`"
  [this]
  (-> this (.-preserveAspectRatio)))

(defn width
  "Property.

  [Read Only]

  The width read-only property of the `web.svg.SVGImageElement`
  returns an `web.svg.SVGAnimatedLength` corresponding to the width
  of the given `<image>` element.

  `var width = svgImageElement.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/width`"
  [this]
  (-> this (.-width)))

(defn x
  "Property.

  [Read Only]

  The x read-only property of the `web.svg.SVGImageElement` interface
  an `web.svg.SVGAnimatedLength` corresponding to the x attribute
  the given `<image>` element.

  `var x = svgImageElement.x;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/x`"
  [this]
  (-> this (.-x)))

(defn y
  "Property.

  [Read Only]

  The y read-only property of the `web.svg.SVGImageElement` interface
  an `web.svg.SVGAnimatedLength` corresponding to the y attribute
  the given `<image>` element.

  `var y = svgImageElement.y;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGImageElement/y`"
  [this]
  (-> this (.-y)))

