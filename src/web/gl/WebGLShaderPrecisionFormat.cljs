(ns web.gl.WebGLShaderPrecisionFormat
  "The WebGLShaderPrecisionFormat interface is part of the WebGL
  and represents the information returned by calling the `WebGLRenderingContext.getShaderPrecisionFormat()`"
  (:refer-clojure :exclude []))

(defn range-min
  "Property.

  The read-only WebGLShaderPrecisionFormat.rangeMin property returns
  base 2 log of the absolute value of the minimum value that can
  represented.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat/rangeMin`"
  [this]
  (-> this (.rangeMin)))

(defn set-range-min!
  "Property.

  The read-only WebGLShaderPrecisionFormat.rangeMin property returns
  base 2 log of the absolute value of the minimum value that can
  represented.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat/rangeMin`"
  [this val]
  (aset this "rangeMin" val))

(defn precision
  "Property.

  The read-only WebGLShaderPrecisionFormat.precision property returns
  number of bits of precision that can be represented.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat/precision`"
  [this]
  (-> this (.precision)))

(defn set-precision!
  "Property.

  The read-only WebGLShaderPrecisionFormat.precision property returns
  number of bits of precision that can be represented.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat/precision`"
  [this val]
  (aset this "precision" val))

(defn range-max
  "Property.

  The read-only WebGLShaderPrecisionFormat.rangeMax property returns
  base 2 log of the absolute value of the maximum value that can
  represented.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat/rangeMax`"
  [this]
  (-> this (.rangeMax)))

(defn set-range-max!
  "Property.

  The read-only WebGLShaderPrecisionFormat.rangeMax property returns
  base 2 log of the absolute value of the maximum value that can
  represented.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLShaderPrecisionFormat/rangeMax`"
  [this val]
  (aset this "rangeMax" val))

