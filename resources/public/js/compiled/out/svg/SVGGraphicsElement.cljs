(ns svg.SVGGraphicsElement
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

