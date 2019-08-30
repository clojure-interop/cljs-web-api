(ns web.dom.HTMLImageElement
  "The HTMLImageElement interface represents an HTML `<img>` element,
  the properties and methods used to manipulate image elements."
  (:refer-clojure :exclude [name]))

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

  A DOMString indicating the alignment of the image with respect
  the surrounding context. The possible values are \"left\", \"right\",
  and \"center\". This is obsolete; you should instead use CSS (such
  text-align, which works with images despite its name) to specify
  alignment."
  [this]
  (-> this (.-align)))

(defn set-align!
  "Property.

  A DOMString indicating the alignment of the image with respect
  the surrounding context. The possible values are \"left\", \"right\",
  and \"center\". This is obsolete; you should instead use CSS (such
  text-align, which works with images despite its name) to specify
  alignment."
  [this val]
  (aset this "align" val))

(defn alt
  "Property.

  The `web.dom.HTMLImageElement` property alt provides fallback
  text to display when the image specified by the `<img>` element
  not loaded.

  `htmlImageElement.alt = altText;
  let altText = htmlImageElement.alt;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt`"
  [this]
  (-> this (.-alt)))

(defn set-alt!
  "Property.

  The `web.dom.HTMLImageElement` property alt provides fallback
  text to display when the image specified by the `<img>` element
  not loaded.

  `htmlImageElement.alt = altText;
  let altText = htmlImageElement.alt;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt`"
  [this val]
  (aset this "alt" val))

(defn border
  "Property.

  A DOMString which defines the width of the border surrounding
  image. This is deprecated; use the CSS border property instead."
  [this]
  (-> this (.-border)))

(defn set-border!
  "Property.

  A DOMString which defines the width of the border surrounding
  image. This is deprecated; use the CSS border property instead."
  [this val]
  (aset this "border" val))

(defn complete
  "Property.

  [Read Only]

  The read-only `web.dom.HTMLImageElement` interface's complete
  is a Boolean value which indicates whether or not the image has
  loaded.

  `let doneLoading = htmlImageElement.complete;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/complete`"
  [this]
  (-> this (.-complete)))

(defn cross-origin
  "Property.

  The `web.dom.HTMLImageElement` interface's crossOrigin attribute
  a string which specifies the Cross-Origin Resource Sharing (CORS)
  to use when retrieving the image.

  `htmlImageElement.crossOrigin = crossOriginMode;
  let crossOriginMode = htmlImageElement.crossOrigin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin`"
  [this]
  (-> this (.-crossOrigin)))

(defn set-cross-origin!
  "Property.

  The `web.dom.HTMLImageElement` interface's crossOrigin attribute
  a string which specifies the Cross-Origin Resource Sharing (CORS)
  to use when retrieving the image.

  `htmlImageElement.crossOrigin = crossOriginMode;
  let crossOriginMode = htmlImageElement.crossOrigin;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/crossOrigin`"
  [this val]
  (aset this "crossOrigin" val))

(defn current-src
  "Property.

  [Read Only]

  The read-only `web.dom.HTMLImageElement` property currentSrc
  the URL of the image which is currently presented in the `<img>`
  it represents.

  `let currentSource = htmlImageElement.currentSrc;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/currentSrc`"
  [this]
  (-> this (.-currentSrc)))

(defn decoding
  "Property.

  The decoding property of the `web.dom.HTMLImageElement` interface
  a hint given to the browser on how it should decode the image.

  `refStr = imgElem.decoding;
  imgElem.decoding = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding`"
  [this]
  (-> this (.-decoding)))

(defn set-decoding!
  "Property.

  The decoding property of the `web.dom.HTMLImageElement` interface
  a hint given to the browser on how it should decode the image.

  `refStr = imgElem.decoding;
  imgElem.decoding = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/decoding`"
  [this val]
  (aset this "decoding" val))

(defn height
  "Property.

  The height property of the `web.dom.HTMLImageElement` interface
  the height at which the image is drawn, in CSS pixels if the
  is being drawn or rendered to any visual medium such as the screen
  a printer; otherwise, it's the natural, pixel density corrected
  of the image.

  `htmlImageElement.height = newHeight;
  let height = htmlImageElement.height;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/height`"
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  The height property of the `web.dom.HTMLImageElement` interface
  the height at which the image is drawn, in CSS pixels if the
  is being drawn or rendered to any visual medium such as the screen
  a printer; otherwise, it's the natural, pixel density corrected
  of the image.

  `htmlImageElement.height = newHeight;
  let height = htmlImageElement.height;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/height`"
  [this val]
  (aset this "height" val))

(defn hspace
  "Property.

  An integer value which specifies the amount of space (in pixels)
  leave empty on the left and right sides of the image."
  [this]
  (-> this (.-hspace)))

(defn set-hspace!
  "Property.

  An integer value which specifies the amount of space (in pixels)
  leave empty on the left and right sides of the image."
  [this val]
  (aset this "hspace" val))

(defn is-map
  "Property.

  A Boolean that reflects the ismap HTML attribute, indicating
  the image is part of a server-side image map. This is different
  a client-side image map, specified using an <img> element and
  corresponding <map> which contains <area> elements indicating
  clickable areas in the image. The image must be contained within
  <a> element; see the ismap page for details."
  [this]
  (-> this (.-isMap)))

(defn set-is-map!
  "Property.

  A Boolean that reflects the ismap HTML attribute, indicating
  the image is part of a server-side image map. This is different
  a client-side image map, specified using an <img> element and
  corresponding <map> which contains <area> elements indicating
  clickable areas in the image. The image must be contained within
  <a> element; see the ismap page for details."
  [this val]
  (aset this "isMap" val))

(defn long-desc
  "Property.

  A USVString specifying the URL at which a long description of
  image's contents may be found. This is used to turn the image
  a hyperlink automatically. Modern HTML should instead simply
  an <img> inside an <a> element defining the hyperlink."
  [this]
  (-> this (.-longDesc)))

(defn set-long-desc!
  "Property.

  A USVString specifying the URL at which a long description of
  image's contents may be found. This is used to turn the image
  a hyperlink automatically. Modern HTML should instead simply
  an <img> inside an <a> element defining the hyperlink."
  [this val]
  (aset this "longDesc" val))

(defn low-src
  "Property.

  A USVString specifying the URL of a low-quality (but faster to
  version of the same image. This was once used by browsers under
  network conditions or on slow devices."
  [this]
  (-> this (.-lowSrc)))

(defn set-low-src!
  "Property.

  A USVString specifying the URL of a low-quality (but faster to
  version of the same image. This was once used by browsers under
  network conditions or on slow devices."
  [this val]
  (aset this "lowSrc" val))

(defn name
  "Property.

  A DOMString representing the name of the element."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString representing the name of the element."
  [this val]
  (aset this "name" val))

(defn natural-height
  "Property.

  Returns an integer value representing the intrinsic height of
  image in CSS pixels, if it is available; else, it shows 0. This
  the height the image would be if it were rendered at its natural
  size."
  [this]
  (-> this (.-naturalHeight)))

(defn set-natural-height!
  "Property.

  Returns an integer value representing the intrinsic height of
  image in CSS pixels, if it is available; else, it shows 0. This
  the height the image would be if it were rendered at its natural
  size."
  [this val]
  (aset this "naturalHeight" val))

(defn natural-width
  "Property.

  An integer value representing the intrinsic width of the image
  CSS pixels, if it is available; otherwise, it will show 0. This
  the width the image would be if it were rendered at its natural
  size."
  [this]
  (-> this (.-naturalWidth)))

(defn set-natural-width!
  "Property.

  An integer value representing the intrinsic width of the image
  CSS pixels, if it is available; otherwise, it will show 0. This
  the width the image would be if it were rendered at its natural
  size."
  [this val]
  (aset this "naturalWidth" val))

(defn referrer-policy
  "Property.

  The HTMLImageElement.referrerPolicy property reflects the HTML
  attribute of the `<img>` element defining which referrer is sent
  fetching the resource.

  `refStr = imgElt.referrerPolicy;
  imgElt.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/referrerPolicy`"
  [this]
  (-> this (.-referrerPolicy)))

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

(defn sizes
  "Property.

  A DOMString reflecting the sizes HTML attribute. This string
  a list of comma-separated conditional sizes for the image; that
  for a given viewport size, a particular image size is to be used.
  the documentation on the sizes page for details on the format
  this string."
  [this]
  (-> this (.-sizes)))

(defn set-sizes!
  "Property.

  A DOMString reflecting the sizes HTML attribute. This string
  a list of comma-separated conditional sizes for the image; that
  for a given viewport size, a particular image size is to be used.
  the documentation on the sizes page for details on the format
  this string."
  [this val]
  (aset this "sizes" val))

(defn src
  "Property.

  A USVString that reflects the src HTML attribute, which contains
  full URL of the image including base URI. You can load a different
  into the element by changing the URL in the src attribute."
  [this]
  (-> this (.-src)))

(defn set-src!
  "Property.

  A USVString that reflects the src HTML attribute, which contains
  full URL of the image including base URI. You can load a different
  into the element by changing the URL in the src attribute."
  [this val]
  (aset this "src" val))

(defn srcset
  "Property.

  A USVString reflecting the srcset HTML attribute. This specifies
  list of candidate images, separated by commas (',', U+002C COMMA).
  candidate image is a URL followed by a space, followed by a specially-formatted
  indicating the size of the image. The size may be specified either
  width or a size multiple. Read the srcset page for specifics
  the format of the size substring."
  [this]
  (-> this (.-srcset)))

(defn set-srcset!
  "Property.

  A USVString reflecting the srcset HTML attribute. This specifies
  list of candidate images, separated by commas (',', U+002C COMMA).
  candidate image is a URL followed by a space, followed by a specially-formatted
  indicating the size of the image. The size may be specified either
  width or a size multiple. Read the srcset page for specifics
  the format of the size substring."
  [this val]
  (aset this "srcset" val))

(defn use-map
  "Property.

  A DOMString reflecting the usemap HTML attribute, containing
  page-local URL of the <map> element describing the image map
  use. The page-local URL is a pound (hash) symbol (#) followed
  the ID of the <map> element, such as #my-map-element. The <map>
  turn contains <area> elements indicating the clickable areas
  the image."
  [this]
  (-> this (.-useMap)))

(defn set-use-map!
  "Property.

  A DOMString reflecting the usemap HTML attribute, containing
  page-local URL of the <map> element describing the image map
  use. The page-local URL is a pound (hash) symbol (#) followed
  the ID of the <map> element, such as #my-map-element. The <map>
  turn contains <area> elements indicating the clickable areas
  the image."
  [this val]
  (aset this "useMap" val))

(defn vspace
  "Property.

  An integer value specifying the amount of empty space, in pixels,
  leave above and below the image."
  [this]
  (-> this (.-vspace)))

(defn set-vspace!
  "Property.

  An integer value specifying the amount of empty space, in pixels,
  leave above and below the image."
  [this val]
  (aset this "vspace" val))

(defn width
  "Property.

  An integer value that reflects the width HTML attribute, indicating
  rendered width of the image in CSS pixels."
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  An integer value that reflects the width HTML attribute, indicating
  rendered width of the image in CSS pixels."
  [this val]
  (aset this "width" val))

(defn x
  "Property.

  [Read Only]

  The read-only `web.dom.HTMLImageElement` property x indicates
  x-coordinate of the `<img>` element's left border edge relative
  the root element's origin.

  `let imageX = htmlImageElement.x;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/x`"
  [this]
  (-> this (.-x)))

(defn y
  "Property.

  [Read Only]

  The read-only `web.dom.HTMLImageElement` property y indicates
  y-coordinate of the `<img>` element's top border edge relative
  the root element's origin.

  `let imageY = htmlImageElement.y;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/y`"
  [this]
  (-> this (.-y)))

