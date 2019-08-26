(ns web.gl.WebGLActiveInfo
  "The WebGLActiveInfo interface is part of the WebGL API and represents
  information returned by calling the `WebGLRenderingContext.getActiveAttrib()`
  `WebGLRenderingContext.getActiveUniform()` methods."
  (:refer-clojure :exclude [name type]))

(defn name
  "Property.

  The read-only WebGLActiveInfo.name property represents the name
  the requested data returned by calling the `getActiveAttrib()`
  `getActiveUniform()` methods.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfo/name`"
  [this]
  (-> this (.name)))

(defn set-name!
  "Property.

  The read-only WebGLActiveInfo.name property represents the name
  the requested data returned by calling the `getActiveAttrib()`
  `getActiveUniform()` methods.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfo/name`"
  [this val]
  (aset this "name" val))

(defn size
  "Property.

  The read-only WebGLActiveInfo.size property is a `js.Number`
  the size of the requested data returned by calling the `getActiveAttrib()`
  `getActiveUniform()` methods.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfo/size`"
  [this]
  (-> this (.size)))

(defn set-size!
  "Property.

  The read-only WebGLActiveInfo.size property is a `js.Number`
  the size of the requested data returned by calling the `getActiveAttrib()`
  `getActiveUniform()` methods.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfo/size`"
  [this val]
  (aset this "size" val))

(defn type
  "Property.

  The read-only WebGLActiveInfo.type property represents the type
  the requested data returned by calling the `getActiveAttrib()`
  `getActiveUniform()` methods.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfo/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The read-only WebGLActiveInfo.type property represents the type
  the requested data returned by calling the `getActiveAttrib()`
  `getActiveUniform()` methods.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLActiveInfo/type`"
  [this val]
  (aset this "type" val))

