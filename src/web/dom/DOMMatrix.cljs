(ns web.dom.DOMMatrix
  "The DOMMatrix interface represents 4x4 matrices, suitable for
  and 3D operations including rotation and translation."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DOMMatrix constructor creates a new `web.dom.DOMMatrix` object which represents 4x4 matrices, suitable for 2D and 3D operations..

  init Optional
  A string containing a sequence of numbers or an array of numbers specifying the matrix you want to create, or a CSS transform string.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrix/DOMMatrix`"
  js/DOMMatrix)

(defn from-matrix
  "Method.

  Creates a new mutable DOMMatrix object given an existing matrix
  a DOMMatrixInit dictionary which provides the values for its"
  [this & args]
  (apply (-> this .-fromMatrix) (concat [this] args)))

(defn multiply-self
  "Method.

  Returns itself, a DOMMatrix, with its new content being the result
  the original matrix being multiplied by the given DOMMatrix."
  [this & args]
  (apply (-> this .-multiplySelf) (concat [this] args)))

(defn is2d
  "Property.

  A boolean flag set to true if current matrix was initialized
  a 2D matrix"
  [this]
  (-> this (.is2D)))

(defn set-is2d!
  "Property.

  A boolean flag set to true if current matrix was initialized
  a 2D matrix"
  [this val]
  (aset this "is2D" val))

