(ns web.gl.WebGLActiveInfo
  "The WebGLActiveInfo interface is part of the WebGL API and represents
  information returned by calling the `WebGLRenderingContext.getActiveAttrib()`
  `WebGLRenderingContext.getActiveUniform()` methods."
  (:refer-clojure :exclude [name type]))

(defn name
  "Property.

  [Read Only]

  The read-only WebGLActiveInfo.name property represents the name
  the requested data returned by calling the `getActiveAttrib()`
  `getActiveUniform()` methods.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfo/name`"
  [this]
  (-> this (.-name)))

(defn size
  "Property.

  [Read Only]

  The read-only WebGLActiveInfo.size property is a `js.Number`
  the size of the requested data returned by calling the `getActiveAttrib()`
  `getActiveUniform()` methods.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfo/size`"
  [this]
  (-> this (.-size)))

(defn type
  "Property.

  [Read Only]

  The read-only WebGLActiveInfo.type property represents the type
  the requested data returned by calling the `getActiveAttrib()`
  `getActiveUniform()` methods.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfo/type`"
  [this]
  (-> this (.-type)))

