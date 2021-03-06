(ns web.svg.SVGGraphicsElement
  "The SVGGraphicsElement interface represents SVG elements whose
  purpose is to directly render graphics into a group."
  (:refer-clojure :exclude []))

(defn get-b-box
  "Method.

  The SVGGraphicsElement.getBBox() allows us to determine the coordinates
  the smallest rectangle in which the object fits. The coordinates
  are with respect to the current svg space, i.e. after the application
  all geometry attributes on all the elements contained in the
  element.

  `let bboxRect = object.getBBox();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGGraphicsElement/getBBox`"
  [this ]
  (-> this (.getBBox)))

(defn get-ctm
  "Method.

  Returns a DOMMatrix representing the matrix that transforms the
  element's coordinate system to its SVG viewport's coordinate"
  [this & args]
  (-> this .-getCTM (.apply this (clj->js args))))

(defn get-screen-ctm
  "Method.

  Returns a DOMMatrix representing the matrix that transforms the
  element's coordinate system to the coordinate system of the SVG
  for the SVG document fragment."
  [this & args]
  (-> this .-getScreenCTM (.apply this (clj->js args))))

(defn transform
  "Property.

  An SVGAnimatedTransformList reflecting the computed value of
  transform property and its corresponding transform attribute
  the given element."
  [this]
  (-> this (.-transform)))

(defn set-transform!
  "Property.

  An SVGAnimatedTransformList reflecting the computed value of
  transform property and its corresponding transform attribute
  the given element."
  [this val]
  (aset this "transform" val))

