(ns web.svg.SVGCircleElement
  "The SVGCircleElement interface is an interface for the `<circle>`"
  (:refer-clojure :exclude []))

(defn cx
  "Property.

  [Read Only]

  The cx read-only property of the `web.svg.SVGCircleElement` interface
  the cx attribute of a `<circle>` element and by that defines
  x-coordinate of the circleʼs center.

  `var xCoordinate = element.cx;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGCircleElement/cx`"
  [this]
  (-> this (.-cx)))

(defn cy
  "Property.

  [Read Only]

  The cy read-only property of the `web.svg.SVGCircleElement` interface
  the cy attribute of a `<circle>` element and by that defines
  y-coordinate of the circleʼs center.

  `var yCoordinate = element.cy;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGCircleElement/cy`"
  [this]
  (-> this (.-cy)))

(defn r
  "Property.

  [Read Only]

  The r read-only property of the `web.svg.SVGCircleElement` interface
  the r attribute of a `<circle>` element and by that defines the
  of the circle.

  `var radius = element.r;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGCircleElement/r`"
  [this]
  (-> this (.-r)))

