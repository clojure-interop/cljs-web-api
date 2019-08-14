(ns gl.ANGLE_instanced_arrays
  "The ANGLE_instanced_arrays extension is part of the WebGL API
  allows to draw the same object, or groups of similar objects
  times, if they share the same vertex data, primitive count and"
  (:refer-clojure :exclude []))

(defn draw-arrays-instanced-angle
  "Method.

  The ANGLE_instanced_arrays.drawArraysInstancedANGLE() method
  the WebGL API renders primitives from array data like the `web.gl.drawArrays()`
  In addition, it can execute multiple instances of the range of

  `void ext.drawArraysInstancedANGLE(mode, first, count, primcount);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE`"
  [this mode first count primcount]
  (-> this (.drawArraysInstancedANGLE mode first count primcount)))

(defn draw-elements-instanced-angle
  "Method.

  The ANGLE_instanced_arrays.drawElementsInstancedANGLE() method
  the WebGL API renders primitives from array data like the `web.gl.drawElements()`
  In addition, it can execute multiple instances of a set of elements.

  `void ext.drawElementsInstancedANGLE(mode, count, type, offset, primcount);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE`"
  [this mode count type offset primcount]
  (-> this (.drawElementsInstancedANGLE mode count type offset primcount)))

(defn vertex-attrib-divisor-angle
  "Method.

  The ANGLE_instanced_arrays.vertexAttribDivisorANGLE() method
  the WebGL API modifies the rate at which generic vertex attributes
  when rendering multiple instances of primitives with `web.ext.drawArraysInstancedANGLE()`
  `web.ext.drawElementsInstancedANGLE()`.

  `void ext.vertexAttribDivisorANGLE(index, divisor);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE`"
  [this index divisor]
  (-> this (.vertexAttribDivisorANGLE index divisor)))

