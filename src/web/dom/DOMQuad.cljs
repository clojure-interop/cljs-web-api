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
  (-> this .-fromRect (.apply this (clj->js args))))

(defn from-quad
  "Method.

  Returns a new DOMQuad object based on the passed set of coordinates."
  [this & args]
  (-> this .-fromQuad (.apply this (clj->js args))))

(defn get-bounds
  "Method.

  Returns a DOMRect object with the coordinates and dimensions
  the DOMQuad object."
  [this & args]
  (-> this .-getBounds (.apply this (clj->js args))))

(defn to-json
  "Method.

  Returns a JSON representation of the DOMQuad object."
  [this & args]
  (-> this .-toJSON (.apply this (clj->js args))))

