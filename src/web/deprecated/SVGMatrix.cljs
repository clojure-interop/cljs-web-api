(ns web.deprecated.SVGMatrix
  "Many of SVG's graphics operations utilize 2x3 matrices of the"
  (:refer-clojure :exclude []))

(defn multiply
  "Method.

  Performs matrix multiplication. This matrix is post-multiplied
  another matrix, returning the resulting new matrix as SVGMatrix."
  [this & args]
  (apply (-> this .-multiply) (concat [this] args)))

