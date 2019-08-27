(ns web.dom.DOMMatrixReadOnly
  "The DOMMatrixReadOnly interface represents a 4x4 matrix, suitable
  2D and 3D operations. If this interface defines only read-only
  the `web.dom.DOMMatrix` interface which inherits from it, add
  the properties and the methods to allow to have modifiable matrices."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The DOMMatrixReadOnly constructor creates a new `web.dom.DOMMatrixReadOnly` object which represents 4x4 matrices, suitable for 2D and 3D operations.

  init Optional
  \\tEither a string containing a sequence of numbers or an array of integers specifying the matrix you want to create.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly/DOMMatrixReadOnly`"
  js/DOMMatrixReadOnly)

(defn flip-x
  "Method.

  The flipX() method of the `web.dom.DOMMatrixReadOnly` interface
  a new matrix being the result of the original matrix flipped
  the x-axis.

  `DOMMatrix.flipX()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly/flipX`"
  [this ]
  (-> this (.flipX)))

(defn flip-y
  "Method.

  Returns a DOMMatrix containing a new matrix being the result
  the original matrix being flipped around the y-axis, that is
  by the DOMMatrix(1, 0, 0, -1, 0, 0). The original matrix is not"
  [this & args]
  (-> this .-flipY (.apply this (clj->js args))))

(defn inverse
  "Method.

  Returns a DOMMatrix containing a new matrix being the result
  the original matrix being inverted. The original matrix is not
  If the matrix cannot be inverted, all its components are set
  NaN and is2D() returns false."
  [this & args]
  (-> this .-inverse (.apply this (clj->js args))))

(defn multiply
  "Method.

  Returns a DOMMatrix containing a new matrix being the result
  the original matrix being multiplied by the given DOMMatrix.
  original matrix is not modified."
  [this & args]
  (-> this .-multiply (.apply this (clj->js args))))

(defn rotate-axis-angle
  "Method.

  Returns a DOMMatrix containing a new matrix being the result
  the original matrix being rotated by the given angle and the
  vector. The original matrix is not modified."
  [this & args]
  (-> this .-rotateAxisAngle (.apply this (clj->js args))))

(defn rotate
  "Method.

  Returns a DOMMatrix containing a new matrix being the result
  the original matrix being rotated by the given angle, with the
  centered on the origin given. The original matrix is not modified."
  [this & args]
  (-> this .-rotate (.apply this (clj->js args))))

(defn rotate-from-vector
  "Method.

  Returns a DOMMatrix containing a new matrix being the result
  the original matrix being rotated by the angle between the given
  and (1,0), centered on the origin given. The original matrix
  not modified."
  [this & args]
  (-> this .-rotateFromVector (.apply this (clj->js args))))

(defn scale
  "Method.



  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly/scale`"
  [this & args]
  (-> this .-scale (.apply this (clj->js args))))

(defn scale3d
  "Method.

  Returns a DOMMatrix containing a new matrix being the result
  the matrix x, y and z dimension being scaled by the given factor,
  on the origin given. The original matrix is not modified."
  [this & args]
  (-> this .-scale3d (.apply this (clj->js args))))

(defn scale-non-uniform
  "Method.

  Returns a DOMMatrix containing a new matrix being the result
  the matrix x, y and z dimension being scaled by the given factor
  each dimension, centered on the origin given. The original matrix
  not modified."
  [this & args]
  (-> this .-scaleNonUniform (.apply this (clj->js args))))

(defn skew-x
  "Method.

  Returns a DOMMatrix containing a new matrix being the result
  the original matrix being skewed along the x-axis by the given
  The original matrix is not modified."
  [this & args]
  (-> this .-skewX (.apply this (clj->js args))))

(defn skew-y
  "Method.

  Returns a DOMMatrix containing a new matrix being the result
  the original matrix being skewed along the y-axis by the given
  The original matrix is not modified."
  [this & args]
  (-> this .-skewY (.apply this (clj->js args))))

(defn to-float32array
  "Method.

  Returns a Float32Array containing the 6 components (a, b, c,
  e, f) in the case of a 2D matrix or the 16 components (m11, m12,
  m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44)
  a 3D matrix."
  [this & args]
  (-> this .-toFloat32Array (.apply this (clj->js args))))

(defn to-float64array
  "Method.

  Returns a Float64Array containing the 6 components (a, b, c,
  e, f) in the case of a 2D matrix or the 16 components (m11, m12,
  m14, m21, m22, m23, m24, m31, m32, m33, m34, m41, m42, m43, m44)
  a 3D matrix."
  [this & args]
  (-> this .-toFloat64Array (.apply this (clj->js args))))

(defn to-json
  "Method.

  Returns a JSON representation of the DOMMatrixReadOnly object."
  [this & args]
  (-> this .-toJSON (.apply this (clj->js args))))

(defn to-string
  "Method.

  Returns a DOMString containing the 6 components separated by
  ',' and prefixed by the CSS matrix functional notation, as 'matrix
  b, c, d, e, f)', in the case of a 2D matrix or matrix3d functional
  and the 16 components,'matrix3d(m11, m12, m13, m14, m21, m22,
  m24, m31, m32, m33, m34, m41, m42, m43, m44)', for a 3D matrix."
  [this & args]
  (-> this .-toString (.apply this (clj->js args))))

(defn transform-point
  "Method.

  Returns a DOMPoint that is the point given in parameter multiplied
  the matrix. But the original point and the matrix aren't modified."
  [this & args]
  (-> this .-transformPoint (.apply this (clj->js args))))

(defn translate
  "Method.

  The translate() method of the `web.dom.DOMMatrixReadOnly` interface
  a new matrix being the result of the original matrix with a translation

  `The translate() method accepts two or three values.



  DOMMatrix.translate(translateX, translateY[, translateZ])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMMatrixReadOnly/translate`"
  [this & args]
  (-> this .-translate (.apply this (clj->js args))))

(defn m11
  "Property.

  Are double representing each component of a 4x4 matrix. They
  read-only, but their counterpart, with the same name, in DOMMatrix"
  [this]
  (-> this (.-m11)))

(defn set-m11!
  "Property.

  Are double representing each component of a 4x4 matrix. They
  read-only, but their counterpart, with the same name, in DOMMatrix"
  [this val]
  (aset this "m11" val))

(defn a
  "Property.

  Are double representing each component of a 4x4 matrix needed
  2D rotations and translations. They are aliases for some components
  the 4x4 matrix:
  2D
  3D equivalent
  a
  m11
  b
  m12
  c
  m21
  d
  m22
  e
  m41
  f
  m42
  They are read-only, but their counterpart, with the same name,
  DOMMatrix aren't."
  [this]
  (-> this (.-a)))

(defn set-a!
  "Property.

  Are double representing each component of a 4x4 matrix needed
  2D rotations and translations. They are aliases for some components
  the 4x4 matrix:
  2D
  3D equivalent
  a
  m11
  b
  m12
  c
  m21
  d
  m22
  e
  m41
  f
  m42
  They are read-only, but their counterpart, with the same name,
  DOMMatrix aren't."
  [this val]
  (aset this "a" val))

(defn is2d
  "Property.

  Is a Boolean indicating if the matrix contains a 2D matrix and
  accept 2D transformations."
  [this]
  (-> this (.-is2D)))

(defn set-is2d!
  "Property.

  Is a Boolean indicating if the matrix contains a 2D matrix and
  accept 2D transformations."
  [this val]
  (aset this "is2D" val))

(defn is-identity
  "Property.

  Is a Boolean indincating if the matrix identity, that is a matrix
  1 on the components of its diagonal, and 0 elsewhere."
  [this]
  (-> this (.-isIdentity)))

(defn set-is-identity!
  "Property.

  Is a Boolean indincating if the matrix identity, that is a matrix
  1 on the components of its diagonal, and 0 elsewhere."
  [this val]
  (aset this "isIdentity" val))

