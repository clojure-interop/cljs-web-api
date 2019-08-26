(ns web.dom.DOMQuad
  "A DOMQuad is a collection of four DOMPoints defining the corners
  an arbitrary quadrilateral. Returning DOMQuads lets getBoxQuads()
  accurate information even when arbitrary 2D or 3D transforms
  present. It has a handy bounds attribute returning a DOMRectReadOnly
  those cases where you just want an axis-aligned bounding rectangle."
  (:refer-clojure :exclude []))

(defn from-rect
  "Method.

  Returns a new DOMQuad object based on the passed set of coordinates."
  [this & args]
  (apply (-> this .-fromRect) (concat [this] args)))

(defn p1
  "Property.

  are DOMPoint objects for each of the DOMQuad object's four corners."
  [this]
  (-> this (.p1)))

(defn set-p1!
  "Property.

  are DOMPoint objects for each of the DOMQuad object's four corners."
  [this val]
  (aset this "p1" val))

