(ns web.dom.HTMLImageElement
  "The HTMLImageElement interface provides special properties and
  for manipulating `<img>` elements."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The Image() constructor creates a new `web.dom.HTMLImageElement` instance. It is functionally equivalent to `document.createElement('img')`.

  Note: The entire bitmap is loaded regardless of the sizes specified in the constructor. The size specified in the constructor is reflected through the properties `HTMLImageElement.width` and `HTMLImageElement.height` of the resulting instance. The intrinsic width and height of the image in CSS pixels is reflected through the properties `HTMLImageElement.naturalWidth` and `HTMLImageElement.naturalHeight`. If no size is specified in the constructor both pairs of properties have the same values.



  width
  The width of the image (i.e., the value for the width attribute).
  height
  The height of the image (i.e., the value for the height attribute).

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image`"
  js/Image)

(defn decode
  "Method.

  The decode() method of the `web.dom.HTMLImageElement` interface
  a `js.Promise` that resolves when the image is decoded and it
  safe to append the image to the DOM.

  `var promise = HTMLImageElement.decode();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decode`"
  [this ]
  (-> this (.decode)))

(defn align
  "Property.

  Is a DOMString indicating the alignment of the image with respect
  the surrounding context. The possible values are \"left\", \"right\",
  and \"center\"."
  [this]
  (-> this (.align)))

(defn set-align!
  "Property.

  Is a DOMString indicating the alignment of the image with respect
  the surrounding context. The possible values are \"left\", \"right\",
  and \"center\"."
  [this val]
  (aset this "align" val))

(defn decoding
  "Property.

  The decoding property of the `web.dom.HTMLImageElement` interface
  a hint given to the browser on how it should decode the image.

  `refStr = imgElem.decoding;
  imgElem.decoding = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding`"
  [this]
  (-> this (.decoding)))

(defn set-decoding!
  "Property.

  The decoding property of the `web.dom.HTMLImageElement` interface
  a hint given to the browser on how it should decode the image.

  `refStr = imgElem.decoding;
  imgElem.decoding = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding`"
  [this val]
  (aset this "decoding" val))

(defn referrer-policy
  "Property.

  The HTMLImageElement.referrerPolicy property reflects the HTML
  attribute of the `<img>` element defining which referrer is sent
  fetching the resource.

  `refStr = imgElt.referrerPolicy;
  imgElt.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy`"
  [this]
  (-> this (.referrerPolicy)))

(defn set-referrer-policy!
  "Property.

  The HTMLImageElement.referrerPolicy property reflects the HTML
  attribute of the `<img>` element defining which referrer is sent
  fetching the resource.

  `refStr = imgElt.referrerPolicy;
  imgElt.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy`"
  [this val]
  (aset this "referrerPolicy" val))

