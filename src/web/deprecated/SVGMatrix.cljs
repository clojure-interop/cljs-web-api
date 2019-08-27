(ns web.deprecated.SVGMatrix
  "Many of SVG's graphics operations utilize 2x3 matrices of the"
  (:refer-clojure :exclude []))

(defn multiply
  "Method.

  Performs matrix multiplication. This matrix is post-multiplied
  another matrix, returning the resulting new matrix as SVGMatrix."
  [this & args]
  (-> this .-multiply (.apply this (clj->js args))))

(defn inverse
  "Method.

  Returns the inverse matrix as SVGMatrix."
  [this & args]
  (-> this .-inverse (.apply this (clj->js args))))

(defn translate
  "Method.

  Post-multiplies a translation transformation on the current matrix
  returns the resulting matrix as SVGMatrix."
  [this & args]
  (-> this .-translate (.apply this (clj->js args))))

(defn scale
  "Method.

  Post-multiplies a uniform scale transformation on the current
  and returns the resulting matrix as SVGMatrix."
  [this & args]
  (-> this .-scale (.apply this (clj->js args))))

(defn scale-non-uniform
  "Method.

  Post-multiplies a non-uniform scale transformation on the current
  and returns the resulting matrix as SVGMatrix."
  [this & args]
  (-> this .-scaleNonUniform (.apply this (clj->js args))))

(defn rotate
  "Method.

  Post-multiplies a rotation transformation on the current matrix
  returns the resulting matrix as SVGMatrix."
  [this & args]
  (-> this .-rotate (.apply this (clj->js args))))

(defn rotate-from-vector
  "Method.

  Post-multiplies a rotation transformation on the current matrix
  returns the resulting matrix as SVGMatrix. The rotation angle
  determined by taking (+/-) atan(y/x). The direction of the vector
  y) determines whether the positive or negative angle value is"
  [this & args]
  (-> this .-rotateFromVector (.apply this (clj->js args))))

(defn flip-x
  "Method.

  Post-multiplies the transformation [-1 0 0 1 0 0] and returns
  resulting matrix as SVGMatrix."
  [this & args]
  (-> this .-flipX (.apply this (clj->js args))))

(defn flip-y
  "Method.

  Post-multiplies the transformation [1 0 0 -1 0 0] and returns
  resulting matrix as SVGMatrix."
  [this & args]
  (-> this .-flipY (.apply this (clj->js args))))

(defn skew-x
  "Method.

  Post-multiplies a skewX transformation on the current matrix
  returns the resulting matrix as SVGMatrix."
  [this & args]
  (-> this .-skewX (.apply this (clj->js args))))

(defn skew-y
  "Method.

  Post-multiplies a skewY transformation on the current matrix
  returns the resulting matrix as SVGMatrix."
  [this & args]
  (-> this .-skewY (.apply this (clj->js args))))

(defn a
  "Property.

  A float representing the a component of the matrix."
  [this]
  (-> this (.-a)))

(defn set-a!
  "Property.

  A float representing the a component of the matrix."
  [this val]
  (aset this "a" val))

(defn b
  "Property.

  A float representing the b component of the matrix."
  [this]
  (-> this (.-b)))

(defn set-b!
  "Property.

  A float representing the b component of the matrix."
  [this val]
  (aset this "b" val))

(defn c
  "Property.

  A float representing the c component of the matrix."
  [this]
  (-> this (.-c)))

(defn set-c!
  "Property.

  A float representing the c component of the matrix."
  [this val]
  (aset this "c" val))

(defn d
  "Property.

  A float representing the d component of the matrix."
  [this]
  (-> this (.-d)))

(defn set-d!
  "Property.

  A float representing the d component of the matrix."
  [this val]
  (aset this "d" val))

(defn e
  "Property.

  A float representing the e component of the matrix."
  [this]
  (-> this (.-e)))

(defn set-e!
  "Property.

  A float representing the e component of the matrix."
  [this val]
  (aset this "e" val))

(defn f
  "Property.

  A float representing the f component of the matrix."
  [this]
  (-> this (.-f)))

(defn set-f!
  "Property.

  A float representing the f component of the matrix."
  [this val]
  (aset this "f" val))

