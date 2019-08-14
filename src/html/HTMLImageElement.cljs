(ns html.HTMLImageElement
  "The HTMLImageElement interface provides special properties and
  for manipulating `web.<img>` elements."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The Image() constructor creates a new `html.HTMLImageElement` instance. It is functionally equivalent to `web.document.createElement('img')`.

  Note: The entire bitmap is loaded regardless of the sizes specified in the constructor. The size specified in the constructor is reflected through the properties `html.HTMLImageElement.width` and `html.HTMLImageElement.height` of the resulting instance. The intrinsic width and height of the image in CSS pixels is reflected through the properties `html.HTMLImageElement.naturalWidth` and `html.HTMLImageElement.naturalHeight`. If no size is specified in the constructor both pairs of properties have the same values.



  width
  The width of the image (i.e., the value for the width attribute).
  height
  The height of the image (i.e., the value for the height attribute).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image`"
  js/Image)

(defn decode
  "Method.

  The decode() method of the `html.HTMLImageElement` interface
  a `web.Promise` that resolves when the image is decoded and it
  safe to append the image to the DOM.

  `var promise = HTMLImageElement.decode();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode`"
  [this ]
  (-> this (.decode)))

(defn decoding
  "Property.

  The decoding property of the `html.HTMLImageElement` interface
  a hint given to the browser on how it should decode the image.

  `refStr = imgElem.decoding;
  imgElem.decoding = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding`"
  [this]
  (-> this (.decoding)))

(defn set-decoding!
  "Property.

  The decoding property of the `html.HTMLImageElement` interface
  a hint given to the browser on how it should decode the image.

  `refStr = imgElem.decoding;
  imgElem.decoding = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding`"
  [this val]
  (aset this "decoding" val))

(defn referrer-policy
  "Property.

  The HTMLImageElement.referrerPolicy property reflects the HTML
  attribute of the `web.<img>` element defining which referrer
  sent when fetching the resource.

  `refStr = imgElt.referrerPolicy;
  imgElt.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy`"
  [this]
  (-> this (.referrerPolicy)))

(defn set-referrer-policy!
  "Property.

  The HTMLImageElement.referrerPolicy property reflects the HTML
  attribute of the `web.<img>` element defining which referrer
  sent when fetching the resource.

  `refStr = imgElt.referrerPolicy;
  imgElt.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy`"
  [this val]
  (aset this "referrerPolicy" val))

