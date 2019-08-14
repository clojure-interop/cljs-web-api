(ns dom.DOMMatrixReadOnly
  "The DOMMatrixReadOnly interface represents a 4x4 matrix, suitable
  2D and 3D operations. If this interface defines only read-only
  the `dom.DOMMatrix` interface which inherits from it, add all
  properties and the methods to allow to have modifiable matrices."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DOMMatrixReadOnly constructor creates a new `dom.DOMMatrixReadOnly` object which represents 4x4 matrices, suitable for 2D and 3D operations.

  init Optional
  \\tEither a string containing a sequence of numbers or an array of integers specifying the matrix you want to create.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly`"
  js/DOMMatrixReadOnly)

(defn flip-x
  "Method.

  The flipX() method of the `dom.DOMMatrixReadOnly` interface creates
  new matrix being the result of the original matrix flipped about
  x-axis.

  `DOMMatrix.flipX()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly/flipX`"
  [this ]
  (-> this (.flipX)))

(defn scale
  "Method.



  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly/scale`"
  [this & args]
  (apply (-> this .-scale) (concat [this] args)))

(defn translate
  "Method.

  The translate() method of the `dom.DOMMatrixReadOnly` interface
  a new matrix being the result of the original matrix with a translation

  `The translate() method accepts two or three values.



  DOMMatrix.translate(translateX, translateY[, translateZ])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly/translate`"
  [this & args]
  (apply (-> this .-translate) (concat [this] args)))

