(ns web.cssdom.GeometryUtils
  "The GeometryUtils interface provides different utility function
  retrieve geometry information about DOM nodes."
  (:refer-clojure :exclude []))

(defn get-box-quads
  "Method.

  Returns a list of DOMQuad objects representing the CSS fragments
  the node."
  [this & args]
  (apply (-> this .-getBoxQuads) (concat [this] args)))
