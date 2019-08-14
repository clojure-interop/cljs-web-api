// Compiled by ClojureScript 1.9.946 {}
goog.provide('gl.ANGLE_instanced_arrays');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The ANGLE_instanced_arrays.drawArraysInstancedANGLE() method
 *   the WebGL API renders primitives from array data like the `web.gl.drawArrays()`
 *   In addition, it can execute multiple instances of the range of
 * 
 *   `void ext.drawArraysInstancedANGLE(mode, first, count, primcount);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays/drawArraysInstancedANGLE`
 */
gl.ANGLE_instanced_arrays.draw_arrays_instanced_angle = (function gl$ANGLE_instanced_arrays$draw_arrays_instanced_angle(this$,mode,first,count,primcount){
return this$.drawArraysInstancedANGLE(mode,first,count,primcount);
});
/**
 * Method.
 * 
 *   The ANGLE_instanced_arrays.drawElementsInstancedANGLE() method
 *   the WebGL API renders primitives from array data like the `web.gl.drawElements()`
 *   In addition, it can execute multiple instances of a set of elements.
 * 
 *   `void ext.drawElementsInstancedANGLE(mode, count, type, offset, primcount);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays/drawElementsInstancedANGLE`
 */
gl.ANGLE_instanced_arrays.draw_elements_instanced_angle = (function gl$ANGLE_instanced_arrays$draw_elements_instanced_angle(this$,mode,count,type,offset,primcount){
return this$.drawElementsInstancedANGLE(mode,count,type,offset,primcount);
});
/**
 * Method.
 * 
 *   The ANGLE_instanced_arrays.vertexAttribDivisorANGLE() method
 *   the WebGL API modifies the rate at which generic vertex attributes
 *   when rendering multiple instances of primitives with `web.ext.drawArraysInstancedANGLE()`
 *   `web.ext.drawElementsInstancedANGLE()`.
 * 
 *   `void ext.vertexAttribDivisorANGLE(index, divisor);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ANGLE_instanced_arrays/vertexAttribDivisorANGLE`
 */
gl.ANGLE_instanced_arrays.vertex_attrib_divisor_angle = (function gl$ANGLE_instanced_arrays$vertex_attrib_divisor_angle(this$,index,divisor){
return this$.vertexAttribDivisorANGLE(index,divisor);
});

//# sourceMappingURL=ANGLE_instanced_arrays.js.map?rel=1565798854133
