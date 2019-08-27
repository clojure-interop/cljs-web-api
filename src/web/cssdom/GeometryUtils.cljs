(ns web.cssdom.GeometryUtils
  "The GeometryUtils interface provides different utility function
  retrieve geometry information about DOM nodes."
  (:refer-clojure :exclude []))

(defn get-box-quads
  "Method.

  Returns a list of DOMQuad objects representing the CSS fragments
  the node."
  [this & args]
  (-> this .-getBoxQuads (.apply this (clj->js args))))

(defn convert-quad-from-node
  "Method.

  FIXME: Needs a description"
  [this & args]
  (-> this .-convertQuadFromNode (.apply this (clj->js args))))

(defn convert-rect-from-node
  "Method.

  FIXME: Needs a description"
  [this & args]
  (-> this .-convertRectFromNode (.apply this (clj->js args))))

(defn convert-point-from-node
  "Method.

  FIXME: Needs a description"
  [this & args]
  (-> this .-convertPointFromNode (.apply this (clj->js args))))

