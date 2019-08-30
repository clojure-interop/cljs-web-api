(ns web.dom.DOMMatrix
  "The DOMMatrix interface represents 4x4 matrices, suitable for
  and 3D operations including rotation and translation."
  (:refer-clojure :exclude []))

(defn from-matrix
  "Method.

  Creates a new mutable DOMMatrix object given an existing matrix
  a DOMMatrixInit dictionary which provides the values for its"
  [this & args]
  (-> this .-fromMatrix (.apply this (clj->js args))))

(defn multiply-self
  "Method.

  Returns itself, a DOMMatrix, with its new content being the result
  the original matrix being multiplied by the given DOMMatrix."
  [this & args]
  (-> this .-multiplySelf (.apply this (clj->js args))))

(defn pre-multiply-self
  "Method.

  Returns itself, a DOMMatrix, with its new content being the result
  the given DOMMatrix being multiplied by the original matrix."
  [this & args]
  (-> this .-preMultiplySelf (.apply this (clj->js args))))

(defn translate-self
  "Method.

  Returns itself, a DOMMatrix, with its new content being the result
  the matrix being translated by the given vector."
  [this & args]
  (-> this .-translateSelf (.apply this (clj->js args))))

(defn scale-self
  "Method.

  Returns itself, a DOMMatrix, with its new content being the result
  the matrix x and y dimensions being scaled by the given factor,
  on the origin given."
  [this & args]
  (-> this .-scaleSelf (.apply this (clj->js args))))

(defn scale3d-self
  "Method.

  Returns itself, a DOMMatrix, with its new content being the result
  the matrix x, y and z dimension being scaled by the given factor,
  on the origin given."
  [this & args]
  (-> this .-scale3dSelf (.apply this (clj->js args))))

(defn scale-non-uniform-self
  "Method.

  Returns itself, a DOMMatrix, with its new content being the result
  the matrix x, y and z dimension being scaled by the given factor
  each dimension, centered on the origin given."
  [this & args]
  (-> this .-scaleNonUniformSelf (.apply this (clj->js args))))

(defn rotate-self
  "Method.

  Returns itself, a DOMMatrix, with its new content being the result
  the original matrix being rotated by the given angle, with the
  centered on the origin given."
  [this & args]
  (-> this .-rotateSelf (.apply this (clj->js args))))

(defn rotate-from-vector-self
  "Method.

  Returns itself, a DOMMatrix, with its new content being the result
  the original matrix being rotated by the angle between the given
  and (1,0), centered on the origin given."
  [this & args]
  (-> this .-rotateFromVectorSelf (.apply this (clj->js args))))

(defn rotate-axis-angle-self
  "Method.

  Returns itself, a DOMMatrix, with its new content being the result
  the original matrix being rotated by the given angle and the
  vector."
  [this & args]
  (-> this .-rotateAxisAngleSelf (.apply this (clj->js args))))

(defn skew-x-self
  "Method.

  Returns itself, a DOMMatrix, with its new content being the result
  the original matrix being skewed along the x-axis by the given"
  [this & args]
  (-> this .-skewXSelf (.apply this (clj->js args))))

(defn skew-y-self
  "Method.

  Returns itself, a DOMMatrix, with its new content being the result
  the original matrix being skewed along the y-axis by the given"
  [this & args]
  (-> this .-skewYSelf (.apply this (clj->js args))))

(defn invert-self
  "Method.

  Returns itself, a DOMMatrix, with its new content being the result
  the original matrix being inverted. If the matrix cannot be inverted,
  its components are set to NaN and is2D() returns false."
  [this & args]
  (-> this .-invertSelf (.apply this (clj->js args))))

(defn set-matrix-value
  "Method.

  Returns itself, a DOMMatrix, with its describing the matrix representing
  same transformation as the CSS transform functions given in parameter."
  [this & args]
  (-> this .-setMatrixValue (.apply this (clj->js args))))

(defn is2d
  "Property.

  A boolean flag set to true if current matrix was initialized
  a 2D matrix"
  [this]
  (-> this (.-is2D)))

(defn set-is2d!
  "Property.

  A boolean flag set to true if current matrix was initialized
  a 2D matrix"
  [this val]
  (aset this "is2D" val))

(defn is-identity
  "Property.

  A boolean flag returning true if the current matrix is identity."
  [this]
  (-> this (.-isIdentity)))

(defn set-is-identity!
  "Property.

  A boolean flag returning true if the current matrix is identity."
  [this val]
  (aset this "isIdentity" val))

(defn m11
  "Property.

  Are double representing each component of a 4x4 matrix."
  [this]
  (-> this (.-m11)))

(defn set-m11!
  "Property.

  Are double representing each component of a 4x4 matrix."
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
  m42"
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
  m42"
  [this val]
  (aset this "a" val))

