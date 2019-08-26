(ns web.canvas.TextMetrics
  "The TextMetrics interface represents the dimensions of a piece
  text in the canvas, as created by the `CanvasRenderingContext2D.measureText()`"
  (:refer-clojure :exclude []))

(defn width
  "Property.

  The read-only width property of the `web.canvas.TextMetrics`
  contains the text's advance width (the width of that inline box)
  CSS pixels.

  `var width = metrics.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics/width`"
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  The read-only width property of the `web.canvas.TextMetrics`
  contains the text's advance width (the width of that inline box)
  CSS pixels.

  `var width = metrics.width;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextMetrics/width`"
  [this val]
  (aset this "width" val))

(defn actual-bounding-box-left
  "Property.

  Is a double giving the distance parallel to the baseline from
  alignment point given by the CanvasRenderingContext2D.textAlign
  to the left side of the bounding rectangle of the given text,
  CSS pixels."
  [this]
  (-> this (.-actualBoundingBoxLeft)))

(defn set-actual-bounding-box-left!
  "Property.

  Is a double giving the distance parallel to the baseline from
  alignment point given by the CanvasRenderingContext2D.textAlign
  to the left side of the bounding rectangle of the given text,
  CSS pixels."
  [this val]
  (aset this "actualBoundingBoxLeft" val))

(defn actual-bounding-box-right
  "Property.

  Is a double giving the distance parallel to the baseline from
  alignment point given by the CanvasRenderingContext2D.textAlign
  to the right side of the bounding rectangle of the given text,
  CSS pixels."
  [this]
  (-> this (.-actualBoundingBoxRight)))

(defn set-actual-bounding-box-right!
  "Property.

  Is a double giving the distance parallel to the baseline from
  alignment point given by the CanvasRenderingContext2D.textAlign
  to the right side of the bounding rectangle of the given text,
  CSS pixels."
  [this val]
  (aset this "actualBoundingBoxRight" val))

(defn font-bounding-box-ascent
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline attribute to the top
  the highest bounding rectangle of all the fonts used to render
  text, in CSS pixels."
  [this]
  (-> this (.-fontBoundingBoxAscent)))

(defn set-font-bounding-box-ascent!
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline attribute to the top
  the highest bounding rectangle of all the fonts used to render
  text, in CSS pixels."
  [this val]
  (aset this "fontBoundingBoxAscent" val))

(defn font-bounding-box-descent
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline attribute to the bottom
  the bounding rectangle of all the fonts used to render the text,
  CSS pixels."
  [this]
  (-> this (.-fontBoundingBoxDescent)))

(defn set-font-bounding-box-descent!
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline attribute to the bottom
  the bounding rectangle of all the fonts used to render the text,
  CSS pixels."
  [this val]
  (aset this "fontBoundingBoxDescent" val))

(defn actual-bounding-box-ascent
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline attribute to the top
  the bounding rectangle used to render the text, in CSS pixels."
  [this]
  (-> this (.-actualBoundingBoxAscent)))

(defn set-actual-bounding-box-ascent!
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline attribute to the top
  the bounding rectangle used to render the text, in CSS pixels."
  [this val]
  (aset this "actualBoundingBoxAscent" val))

(defn actual-bounding-box-descent
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline attribute to the bottom
  the bounding rectangle used to render the text, in CSS pixels."
  [this]
  (-> this (.-actualBoundingBoxDescent)))

(defn set-actual-bounding-box-descent!
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline attribute to the bottom
  the bounding rectangle used to render the text, in CSS pixels."
  [this val]
  (aset this "actualBoundingBoxDescent" val))

(defn em-height-ascent
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline property to the top
  the em square in the line box, in CSS pixels."
  [this]
  (-> this (.-emHeightAscent)))

(defn set-em-height-ascent!
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline property to the top
  the em square in the line box, in CSS pixels."
  [this val]
  (aset this "emHeightAscent" val))

(defn em-height-descent
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline property to the bottom
  the em square in the line box, in CSS pixels."
  [this]
  (-> this (.-emHeightDescent)))

(defn set-em-height-descent!
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline property to the bottom
  the em square in the line box, in CSS pixels."
  [this val]
  (aset this "emHeightDescent" val))

(defn hanging-baseline
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline property to the hanging
  of the line box, in CSS pixels."
  [this]
  (-> this (.-hangingBaseline)))

(defn set-hanging-baseline!
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline property to the hanging
  of the line box, in CSS pixels."
  [this val]
  (aset this "hangingBaseline" val))

(defn alphabetic-baseline
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline property to the alphabetic
  of the line box, in CSS pixels."
  [this]
  (-> this (.-alphabeticBaseline)))

(defn set-alphabetic-baseline!
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline property to the alphabetic
  of the line box, in CSS pixels."
  [this val]
  (aset this "alphabeticBaseline" val))

(defn ideographic-baseline
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline property to the ideographic
  of the line box, in CSS pixels."
  [this]
  (-> this (.-ideographicBaseline)))

(defn set-ideographic-baseline!
  "Property.

  Is a double giving the distance from the horizontal line indicated
  the CanvasRenderingContext2D.textBaseline property to the ideographic
  of the line box, in CSS pixels."
  [this val]
  (aset this "ideographicBaseline" val))

