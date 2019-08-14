(ns gl.WEBGL_compressed_texture_astc
  "The WEBGL_compressed_texture_astc extension is part of the WebGL
  and exposes Adaptive Scalable Texture Compression (ASTC) compressed
  formats to WebGL."
  (:refer-clojure :exclude []))

(defn get-supported-profiles
  "Method.

  The WEBGL_compressed_texture_astc.getSupportedProfiles() method
  an array of strings containing the names of the ASTC profiles
  by the implementation.

  `sequence<DOMString> ext.getSupportedProfiles();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WEBGL_compressed_texture_astc/getSupportedProfiles`"
  [this ]
  (-> this (.getSupportedProfiles)))

