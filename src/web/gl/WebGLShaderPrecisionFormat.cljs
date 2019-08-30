(ns web.gl.WebGLShaderPrecisionFormat
  "The WebGLShaderPrecisionFormat interface is part of the WebGL
  and represents the information returned by calling the `WebGLRenderingContext.getShaderPrecisionFormat()`"
  (:refer-clojure :exclude []))

(defn range-min
  "Property.

  [Read Only]

  The read-only WebGLShaderPrecisionFormat.rangeMin property returns
  base 2 log of the absolute value of the minimum value that can
  represented.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat/rangeMin`"
  [this]
  (-> this (.-rangeMin)))

(defn range-max
  "Property.

  [Read Only]

  The read-only WebGLShaderPrecisionFormat.rangeMax property returns
  base 2 log of the absolute value of the maximum value that can
  represented.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat/rangeMax`"
  [this]
  (-> this (.-rangeMax)))

(defn precision
  "Property.

  [Read Only]

  The read-only WebGLShaderPrecisionFormat.precision property returns
  number of bits of precision that can be represented.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat/precision`"
  [this]
  (-> this (.-precision)))

