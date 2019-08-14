// Compiled by ClojureScript 1.9.946 {}
goog.provide('gl.WebGLRenderingContext');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The WebGLRenderingContext.activeTexture() method of the WebGL
 *   specifies which texture unit to make active.
 * 
 *   `void gl.activeTexture(texture);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/activeTexture`
 */
gl.WebGLRenderingContext.active_texture = (function gl$WebGLRenderingContext$active_texture(this$,texture){
return this$.activeTexture(texture);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.attachShader() method of the WebGL
 *   attaches either a fragment or vertex `gl.WebGLShader` to a `gl.WebGLProgram`.
 * 
 *   `void gl.attachShader(program, shader);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/attachShader`
 */
gl.WebGLRenderingContext.attach_shader = (function gl$WebGLRenderingContext$attach_shader(this$,program,shader){
return this$.attachShader(program,shader);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.bindAttribLocation() method of the
 *   API binds a generic vertex index to an attribute variable.
 * 
 *   `void gl.bindAttribLocation(program, index, name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindAttribLocation`
 */
gl.WebGLRenderingContext.bind_attrib_location = (function gl$WebGLRenderingContext$bind_attrib_location(this$,program,index,name){
return this$.bindAttribLocation(program,index,name);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.bindBuffer() method of the WebGL API
 *   a given `gl.WebGLBuffer` to a target.
 * 
 *   `void gl.bindBuffer(target, buffer);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindBuffer`
 */
gl.WebGLRenderingContext.bind_buffer = (function gl$WebGLRenderingContext$bind_buffer(this$,target,buffer){
return this$.bindBuffer(target,buffer);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.bindFramebuffer() method of the WebGL
 *   binds a given `gl.WebGLFramebuffer` to a target.
 * 
 *   `void gl.bindFramebuffer(target, framebuffer);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindFramebuffer`
 */
gl.WebGLRenderingContext.bind_framebuffer = (function gl$WebGLRenderingContext$bind_framebuffer(this$,target,framebuffer){
return this$.bindFramebuffer(target,framebuffer);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.bindRenderbuffer() method of the WebGL
 *   binds a given `gl.WebGLRenderbuffer` to a target, which must
 *   gl.RENDERBUFFER.
 * 
 *   `void gl.bindRenderbuffer(target, renderbuffer);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindRenderbuffer`
 */
gl.WebGLRenderingContext.bind_renderbuffer = (function gl$WebGLRenderingContext$bind_renderbuffer(this$,target,renderbuffer){
return this$.bindRenderbuffer(target,renderbuffer);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.bindTexture() method of the WebGL API
 *   a given `gl.WebGLTexture` to a target (binding point).
 * 
 *   `void gl.bindTexture(target, texture);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindTexture`
 */
gl.WebGLRenderingContext.bind_texture = (function gl$WebGLRenderingContext$bind_texture(this$,target,texture){
return this$.bindTexture(target,texture);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.blendColor() method of the WebGL API
 *   used to set the source and destination blending factors.
 * 
 *   `void gl.blendColor(red, green, blue, alpha);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendColor`
 */
gl.WebGLRenderingContext.blend_color = (function gl$WebGLRenderingContext$blend_color(this$,red,green,blue,alpha){
return this$.blendColor(red,green,blue,alpha);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.blendEquation() method of the WebGL
 *   is used to set both the RGB blend equation and alpha blend equation
 *   a single equation.
 * 
 *   `void gl.blendEquation(mode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquation`
 */
gl.WebGLRenderingContext.blend_equation = (function gl$WebGLRenderingContext$blend_equation(this$,mode){
return this$.blendEquation(mode);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.blendEquationSeparate() method of the
 *   API is used to set the RGB blend equation and alpha blend equation
 * 
 *   `void gl.blendEquationSeparate(modeRGB, modeAlpha);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquationSeparate`
 */
gl.WebGLRenderingContext.blend_equation_separate = (function gl$WebGLRenderingContext$blend_equation_separate(this$,mode_rgb,mode_alpha){
return this$.blendEquationSeparate(mode_rgb,mode_alpha);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.blendFunc() method of the WebGL API
 *   which function is used for blending pixel arithmetic.
 * 
 *   `void gl.blendFunc(sfactor, dfactor);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc`
 */
gl.WebGLRenderingContext.blend_func = (function gl$WebGLRenderingContext$blend_func(this$,sfactor,dfactor){
return this$.blendFunc(sfactor,dfactor);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.blendFuncSeparate() method of the WebGL
 *   defines which function is used for blending pixel arithmetic
 *   RGB and alpha components separately.
 * 
 *   `void gl.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate`
 */
gl.WebGLRenderingContext.blend_func_separate = (function gl$WebGLRenderingContext$blend_func_separate(this$,src_rgb,dst_rgb,src_alpha,dst_alpha){
return this$.blendFuncSeparate(src_rgb,dst_rgb,src_alpha,dst_alpha);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.bufferData() method of the WebGL API
 *   and creates the buffer object's data store.
 * 
 *   `// WebGL1:
 *   void gl.bufferData(target, size, usage);
 *   void gl.bufferData(target, ArrayBuffer? srcData, usage);
 *   void gl.bufferData(target, ArrayBufferView srcData, usage);
 * 
 *   // WebGL2:
 *   void gl.bufferData(target, ArrayBufferView srcData, usage, srcOffset, length);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData`
 */
gl.WebGLRenderingContext.buffer_data = (function gl$WebGLRenderingContext$buffer_data(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44689 = arguments.length;
var i__42557__auto___44690 = (0);
while(true){
if((i__42557__auto___44690 < len__42556__auto___44689)){
args__42563__auto__.push((arguments[i__42557__auto___44690]));

var G__44691 = (i__42557__auto___44690 + (1));
i__42557__auto___44690 = G__44691;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.buffer_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.buffer_data.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.bufferData,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.buffer_data.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.buffer_data.cljs$lang$applyTo = (function (seq44687){
var G__44688 = cljs.core.first.call(null,seq44687);
var seq44687__$1 = cljs.core.next.call(null,seq44687);
return gl.WebGLRenderingContext.buffer_data.cljs$core$IFn$_invoke$arity$variadic(G__44688,seq44687__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.bufferSubData() method of the WebGL
 *   updates a subset of a buffer object's data store.
 * 
 *   `// WebGL1:
 *   void gl.bufferSubData(target, offset, ArrayBuffer srcData);
 *   void gl.bufferSubData(target, offset, ArrayBufferView srcData);
 * 
 *   // WebGL2:
 *   void gl.bufferSubData(target, dstByteOffset, ArrayBufferView srcData, srcOffset, length);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferSubData`
 */
gl.WebGLRenderingContext.buffer_sub_data = (function gl$WebGLRenderingContext$buffer_sub_data(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44694 = arguments.length;
var i__42557__auto___44695 = (0);
while(true){
if((i__42557__auto___44695 < len__42556__auto___44694)){
args__42563__auto__.push((arguments[i__42557__auto___44695]));

var G__44696 = (i__42557__auto___44695 + (1));
i__42557__auto___44695 = G__44696;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.buffer_sub_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.buffer_sub_data.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.bufferSubData,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.buffer_sub_data.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.buffer_sub_data.cljs$lang$applyTo = (function (seq44692){
var G__44693 = cljs.core.first.call(null,seq44692);
var seq44692__$1 = cljs.core.next.call(null,seq44692);
return gl.WebGLRenderingContext.buffer_sub_data.cljs$core$IFn$_invoke$arity$variadic(G__44693,seq44692__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.checkFramebufferStatus() method of
 *   WebGL API returns the completeness status of the `gl.WebGLFramebuffer`
 * 
 *   `GLenum gl.checkFramebufferStatus(target);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus`
 */
gl.WebGLRenderingContext.check_framebuffer_status = (function gl$WebGLRenderingContext$check_framebuffer_status(this$,target){
return this$.checkFramebufferStatus(target);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.clear() method of the WebGL API clears
 *   to preset values.
 * 
 *   `void gl.clear(mask);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clear`
 */
gl.WebGLRenderingContext.clear = (function gl$WebGLRenderingContext$clear(this$,mask){
return this$.clear(mask);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.clearColor() method of the WebGL API
 *   the color values used when clearing color buffers.
 * 
 *   `void gl.clearColor(red, green, blue, alpha);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clearColor`
 */
gl.WebGLRenderingContext.clear_color = (function gl$WebGLRenderingContext$clear_color(this$,red,green,blue,alpha){
return this$.clearColor(red,green,blue,alpha);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.clearDepth() method of the WebGL API
 *   the clear value for the depth buffer.
 * 
 *   `void gl.clearDepth(depth);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clearDepth`
 */
gl.WebGLRenderingContext.clear_depth = (function gl$WebGLRenderingContext$clear_depth(this$,depth){
return this$.clearDepth(depth);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.clearStencil() method of the WebGL
 *   specifies the clear value for the stencil buffer.
 * 
 *   `void gl.clearStencil(s);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clearStencil`
 */
gl.WebGLRenderingContext.clear_stencil = (function gl$WebGLRenderingContext$clear_stencil(this$,s){
return this$.clearStencil(s);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.colorMask() method of the WebGL API
 *   which color components to enable or to disable when drawing or
 *   to a `gl.WebGLFramebuffer`.
 * 
 *   `void gl.colorMask(red, green, blue, alpha);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/colorMask`
 */
gl.WebGLRenderingContext.color_mask = (function gl$WebGLRenderingContext$color_mask(this$,red,green,blue,alpha){
return this$.colorMask(red,green,blue,alpha);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.commit() method pushes frames back
 *   the original `html.HTMLCanvasElement`, if the context is not
 *   fixed to a specific canvas.
 * 
 *   `void WebGLRenderingContext.commit()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/commit`
 */
gl.WebGLRenderingContext.commit = (function gl$WebGLRenderingContext$commit(this$){
return this$.commit();
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.compileShader() method of the WebGL
 *   compiles a GLSL shader into binary data so that it can be used
 *   a `gl.WebGLProgram`.
 * 
 *   `void gl.compileShader(shader);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compileShader`
 */
gl.WebGLRenderingContext.compile_shader = (function gl$WebGLRenderingContext$compile_shader(this$,shader){
return this$.compileShader(shader);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.compressedTexImage2D() and WebGL2RenderingContext.compressedTexImage3D()
 *   of the WebGL API specify a two- or three-dimensional texture
 *   in a compressed format.
 * 
 *   `// WebGL 1:
 *   void gl.compressedTexImage2D(target, level, internalformat, width, height, border, ArrayBufferView? pixels);
 * 
 *   // Additionally available in WebGL 2:
 *   // read from buffer bound to gl.PIXEL_UNPACK_BUFFER
 *   void gl.compressedTexImage2D(target, level, internalformat, width, height, border, GLsizei imageSize, GLintptr offset);
 *   void gl.compressedTexImage2D(target, level, internalformat, width, height, border,
 *   ArrayBufferView srcData, optional srcOffset, optional srcLengthOverride);
 * 
 *   // read from buffer bound to gl.PIXEL_UNPACK_BUFFER
 *   void gl.compressedTexImage3D(target, level, internalformat, width, height, depth, border, GLsizei imageSize, GLintptr offset);
 *   void gl.compressedTexImage3D(target, level, internalformat, width, height, depth, border,
 *   ArrayBufferView srcData, optional srcOffset, optional srcLengthOverride);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compressedTexImage2D`
 */
gl.WebGLRenderingContext.compressed_tex_image_2d = (function gl$WebGLRenderingContext$compressed_tex_image_2d(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44699 = arguments.length;
var i__42557__auto___44700 = (0);
while(true){
if((i__42557__auto___44700 < len__42556__auto___44699)){
args__42563__auto__.push((arguments[i__42557__auto___44700]));

var G__44701 = (i__42557__auto___44700 + (1));
i__42557__auto___44700 = G__44701;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.compressed_tex_image_2d.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.compressed_tex_image_2d.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.compressedTexImage2D,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.compressed_tex_image_2d.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.compressed_tex_image_2d.cljs$lang$applyTo = (function (seq44697){
var G__44698 = cljs.core.first.call(null,seq44697);
var seq44697__$1 = cljs.core.next.call(null,seq44697);
return gl.WebGLRenderingContext.compressed_tex_image_2d.cljs$core$IFn$_invoke$arity$variadic(G__44698,seq44697__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.compressedTexImage2D() and WebGL2RenderingContext.compressedTexImage3D()
 *   of the WebGL API specify a two- or three-dimensional texture
 *   in a compressed format.
 * 
 *   `// WebGL 1:
 *   void gl.compressedTexImage2D(target, level, internalformat, width, height, border, ArrayBufferView? pixels);
 * 
 *   // Additionally available in WebGL 2:
 *   // read from buffer bound to gl.PIXEL_UNPACK_BUFFER
 *   void gl.compressedTexImage2D(target, level, internalformat, width, height, border, GLsizei imageSize, GLintptr offset);
 *   void gl.compressedTexImage2D(target, level, internalformat, width, height, border,
 *   ArrayBufferView srcData, optional srcOffset, optional srcLengthOverride);
 * 
 *   // read from buffer bound to gl.PIXEL_UNPACK_BUFFER
 *   void gl.compressedTexImage3D(target, level, internalformat, width, height, depth, border, GLsizei imageSize, GLintptr offset);
 *   void gl.compressedTexImage3D(target, level, internalformat, width, height, depth, border,
 *   ArrayBufferView srcData, optional srcOffset, optional srcLengthOverride);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compressedTexImage2D`
 */
gl.WebGLRenderingContext.compressed_tex_image_3d = (function gl$WebGLRenderingContext$compressed_tex_image_3d(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44704 = arguments.length;
var i__42557__auto___44705 = (0);
while(true){
if((i__42557__auto___44705 < len__42556__auto___44704)){
args__42563__auto__.push((arguments[i__42557__auto___44705]));

var G__44706 = (i__42557__auto___44705 + (1));
i__42557__auto___44705 = G__44706;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.compressed_tex_image_3d.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.compressed_tex_image_3d.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.compressedTexImage3D,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.compressed_tex_image_3d.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.compressed_tex_image_3d.cljs$lang$applyTo = (function (seq44702){
var G__44703 = cljs.core.first.call(null,seq44702);
var seq44702__$1 = cljs.core.next.call(null,seq44702);
return gl.WebGLRenderingContext.compressed_tex_image_3d.cljs$core$IFn$_invoke$arity$variadic(G__44703,seq44702__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.compressedTexSubImage2D() method of
 *   WebGL API specifies a two-dimensional sub-rectangle for a texture
 *   in a compressed format.
 * 
 *   `// WebGL 1:
 *   void gl.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, ArrayBufferView? pixels);
 * 
 *   // Additionally available in WebGL 2:
 *   void gl.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, offset);
 *   void gl.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, ArrayBufferView srcData, optional srcOffset, optional srcLengthOverride);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D`
 */
gl.WebGLRenderingContext.compressed_tex_sub_image_2d = (function gl$WebGLRenderingContext$compressed_tex_sub_image_2d(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44709 = arguments.length;
var i__42557__auto___44710 = (0);
while(true){
if((i__42557__auto___44710 < len__42556__auto___44709)){
args__42563__auto__.push((arguments[i__42557__auto___44710]));

var G__44711 = (i__42557__auto___44710 + (1));
i__42557__auto___44710 = G__44711;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.compressed_tex_sub_image_2d.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.compressed_tex_sub_image_2d.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.compressedTexSubImage2D,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.compressed_tex_sub_image_2d.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.compressed_tex_sub_image_2d.cljs$lang$applyTo = (function (seq44707){
var G__44708 = cljs.core.first.call(null,seq44707);
var seq44707__$1 = cljs.core.next.call(null,seq44707);
return gl.WebGLRenderingContext.compressed_tex_sub_image_2d.cljs$core$IFn$_invoke$arity$variadic(G__44708,seq44707__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.copyTexImage2D() method of the WebGL
 *   copies pixels from the current `gl.WebGLFramebuffer` into a 2D
 *   image.
 * 
 *   `void gl.copyTexImage2D(target, level, internalformat, x, y, width, height, border);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/copyTexImage2D`
 */
gl.WebGLRenderingContext.copy_tex_image_2d = (function gl$WebGLRenderingContext$copy_tex_image_2d(this$,target,level,internalformat,x,y,width,height,border){
return this$.copyTexImage2D(target,level,internalformat,x,y,width,height,border);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.copyTexSubImage2D() method of the WebGL
 *   copies pixels from the current `gl.WebGLFramebuffer` into an
 *   2D texture sub-image.
 * 
 *   `void gl.copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/copyTexSubImage2D`
 */
gl.WebGLRenderingContext.copy_tex_sub_image_2d = (function gl$WebGLRenderingContext$copy_tex_sub_image_2d(this$,target,level,xoffset,yoffset,x,y,width,height){
return this$.copyTexSubImage2D(target,level,xoffset,yoffset,x,y,width,height);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.createBuffer() method of the WebGL
 *   creates and initializes a `gl.WebGLBuffer` storing data such
 *   vertices or colors.
 * 
 *   `WebGLBuffer gl.createBuffer();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createBuffer`
 */
gl.WebGLRenderingContext.create_buffer = (function gl$WebGLRenderingContext$create_buffer(this$){
return this$.createBuffer();
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.createFramebuffer() method of the WebGL
 *   creates and initializes a `gl.WebGLFramebuffer` object.
 * 
 *   `WebGLFramebuffer gl.createFramebuffer();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createFramebuffer`
 */
gl.WebGLRenderingContext.create_framebuffer = (function gl$WebGLRenderingContext$create_framebuffer(this$){
return this$.createFramebuffer();
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.createProgram() method of the WebGL
 *   creates and initializes a `gl.WebGLProgram` object.
 * 
 *   `WebGLProgram gl.createProgram();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createProgram`
 */
gl.WebGLRenderingContext.create_program = (function gl$WebGLRenderingContext$create_program(this$){
return this$.createProgram();
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.createRenderbuffer() method of the
 *   API creates and initializes a `gl.WebGLRenderbuffer` object.
 * 
 *   `WebGLRenderbuffer gl.createRenderbuffer();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createRenderbuffer`
 */
gl.WebGLRenderingContext.create_renderbuffer = (function gl$WebGLRenderingContext$create_renderbuffer(this$){
return this$.createRenderbuffer();
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.createShader() method of the WebGL
 *   creates a `gl.WebGLShader` that can then be configured further
 *   `gl.WebGLRenderingContext.shaderSource()` and `gl.WebGLRenderingContext.compileShader()`.
 * 
 *   `WebGLShader gl.createShader(type);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createShader`
 */
gl.WebGLRenderingContext.create_shader = (function gl$WebGLRenderingContext$create_shader(this$,type){
return this$.createShader(type);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.createTexture() method of the WebGL
 *   creates and initializes a `gl.WebGLTexture` object.
 * 
 *   `WebGLTexture gl.createTexture();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createTexture`
 */
gl.WebGLRenderingContext.create_texture = (function gl$WebGLRenderingContext$create_texture(this$){
return this$.createTexture();
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.cullFace() method of the WebGL API
 *   whether or not front- and/or back-facing polygons can be culled.
 * 
 *   `void gl.cullFace(mode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/cullFace`
 */
gl.WebGLRenderingContext.cull_face = (function gl$WebGLRenderingContext$cull_face(this$,mode){
return this$.cullFace(mode);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.deleteBuffer() method of the WebGL
 *   deletes a given `gl.WebGLBuffer`. This method has no effect if
 *   buffer has already been deleted.
 * 
 *   `void gl.deleteBuffer(buffer);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteBuffer`
 */
gl.WebGLRenderingContext.delete_buffer = (function gl$WebGLRenderingContext$delete_buffer(this$,buffer){
return this$.deleteBuffer(buffer);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.deleteFramebuffer() method of the WebGL
 *   deletes a given `gl.WebGLFramebuffer` object. This method has
 *   effect if the frame buffer has already been deleted.
 * 
 *   `void gl.deleteFramebuffer(framebuffer);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteFramebuffer`
 */
gl.WebGLRenderingContext.delete_framebuffer = (function gl$WebGLRenderingContext$delete_framebuffer(this$,framebuffer){
return this$.deleteFramebuffer(framebuffer);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.deleteProgram() method of the WebGL
 *   deletes a given `gl.WebGLProgram` object. This method has no
 *   if the program has already been deleted.
 * 
 *   `void gl.deleteProgram(program);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteProgram`
 */
gl.WebGLRenderingContext.delete_program = (function gl$WebGLRenderingContext$delete_program(this$,program){
return this$.deleteProgram(program);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.deleteRenderbuffer() method of the
 *   API deletes a given `gl.WebGLRenderbuffer` object. This method
 *   no effect if the render buffer has already been deleted.
 * 
 *   `void gl.deleteRenderbuffer(renderbuffer);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer`
 */
gl.WebGLRenderingContext.delete_renderbuffer = (function gl$WebGLRenderingContext$delete_renderbuffer(this$,renderbuffer){
return this$.deleteRenderbuffer(renderbuffer);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.deleteShader() method of the WebGL
 *   marks a given `gl.WebGLShader` object for deletion. It will then
 *   deleted whenever the shader is no longer in use. This method
 *   no effect if the shader has already been deleted, and the `gl.WebGLShader`
 *   automatically marked for deletion when it is destroyed by the
 *   collector.
 * 
 *   `void gl.deleteShader(shader);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteShader`
 */
gl.WebGLRenderingContext.delete_shader = (function gl$WebGLRenderingContext$delete_shader(this$,shader){
return this$.deleteShader(shader);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.deleteTexture() method of the WebGL
 *   deletes a given `gl.WebGLTexture` object. This method has no
 *   if the texture has already been deleted.
 * 
 *   `void gl.deleteTexture(texture);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteTexture`
 */
gl.WebGLRenderingContext.delete_texture = (function gl$WebGLRenderingContext$delete_texture(this$,texture){
return this$.deleteTexture(texture);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.depthFunc() method of the WebGL API
 *   a function that compares incoming pixel depth to the current
 *   buffer value.
 * 
 *   `void gl.depthFunc(func);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/depthFunc`
 */
gl.WebGLRenderingContext.depth_func = (function gl$WebGLRenderingContext$depth_func(this$,func){
return this$.depthFunc(func);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.depthMask() method of the WebGL API
 *   whether writing into the depth buffer is enabled or disabled.
 * 
 *   `void gl.depthMask(flag);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/depthMask`
 */
gl.WebGLRenderingContext.depth_mask = (function gl$WebGLRenderingContext$depth_mask(this$,flag){
return this$.depthMask(flag);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.depthRange() method of the WebGL API
 *   the depth range mapping from normalized device coordinates to
 *   or viewport coordinates.
 * 
 *   `void gl.depthRange(zNear, zFar);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/depthRange`
 */
gl.WebGLRenderingContext.depth_range = (function gl$WebGLRenderingContext$depth_range(this$,z_near,z_far){
return this$.depthRange(z_near,z_far);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.detachShader() method of the WebGL
 *   detaches a previously attached `gl.WebGLShader` from a `gl.WebGLProgram`.
 * 
 *   `void gl.detachShader(program, shader);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/detachShader`
 */
gl.WebGLRenderingContext.detach_shader = (function gl$WebGLRenderingContext$detach_shader(this$,program,shader){
return this$.detachShader(program,shader);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.disable() method of the WebGL API disables
 *   WebGL capabilities for this context.
 * 
 *   `void gl.disable(cap);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/disable`
 */
gl.WebGLRenderingContext.disable = (function gl$WebGLRenderingContext$disable(this$,cap){
return this$.disable(cap);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.disableVertexAttribArray() method of
 *   WebGL API turns the generic vertex attribute array off at a given
 *   position.
 * 
 *   `void gl.disableVertexAttribArray(index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray`
 */
gl.WebGLRenderingContext.disable_vertex_attrib_array = (function gl$WebGLRenderingContext$disable_vertex_attrib_array(this$,index){
return this$.disableVertexAttribArray(index);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.drawArrays() method of the WebGL API
 *   primitives from array data.
 * 
 *   `void gl.drawArrays(mode, first, count);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays`
 */
gl.WebGLRenderingContext.draw_arrays = (function gl$WebGLRenderingContext$draw_arrays(this$,mode,first,count){
return this$.drawArrays(mode,first,count);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.drawElements() method of the WebGL
 *   renders primitives from array data.
 * 
 *   `void gl.drawElements(mode, count, type, offset);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements`
 */
gl.WebGLRenderingContext.draw_elements = (function gl$WebGLRenderingContext$draw_elements(this$,mode,count,type,offset){
return this$.drawElements(mode,count,type,offset);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.enable() method of the WebGL API enables
 *   WebGL capabilities for this context.
 * 
 *   `void gl.enable(cap);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/enable`
 */
gl.WebGLRenderingContext.enable = (function gl$WebGLRenderingContext$enable(this$,cap){
return this$.enable(cap);
});
/**
 * Method.
 * 
 *   The `gl.WebGLRenderingContext` method enableVertexAttribArray(),
 *   of the WebGL API, turns on the generic vertex attribute array
 *   the specified index into the list of attribute arrays.
 * 
 *   `void gl.enableVertexAttribArray(index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray`
 */
gl.WebGLRenderingContext.enable_vertex_attrib_array = (function gl$WebGLRenderingContext$enable_vertex_attrib_array(this$,index){
return this$.enableVertexAttribArray(index);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.finish() method of the WebGL API blocks
 *   until all previously called commands are finished.
 * 
 *   `void gl.finish();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/finish`
 */
gl.WebGLRenderingContext.finish = (function gl$WebGLRenderingContext$finish(this$){
return this$.finish();
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.flush() method of the WebGL API empties
 *   buffer commands, causing all commands to be executed as quickly
 *   possible.
 * 
 *   `void gl.flush();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/flush`
 */
gl.WebGLRenderingContext.flush = (function gl$WebGLRenderingContext$flush(this$){
return this$.flush();
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.framebufferRenderbuffer() method of
 *   WebGL API attaches a `gl.WebGLRenderbuffer` object to a `gl.WebGLFramebuffer`
 * 
 *   `void gl.framebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer`
 */
gl.WebGLRenderingContext.framebuffer_renderbuffer = (function gl$WebGLRenderingContext$framebuffer_renderbuffer(this$,target,attachment,renderbuffertarget,renderbuffer){
return this$.framebufferRenderbuffer(target,attachment,renderbuffertarget,renderbuffer);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.framebufferTexture2D() method of the
 *   API attaches a texture to a `gl.WebGLFramebuffer`.
 * 
 *   `void gl.framebufferTexture2D(target, attachment, textarget, texture, level);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/framebufferTexture2D`
 */
gl.WebGLRenderingContext.framebuffer_texture_2d = (function gl$WebGLRenderingContext$framebuffer_texture_2d(this$,target,attachment,textarget,texture,level){
return this$.framebufferTexture2D(target,attachment,textarget,texture,level);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.frontFace() method of the WebGL API
 *   whether polygons are front- or back-facing by setting a winding
 * 
 *   `void gl.frontFace(mode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/frontFace`
 */
gl.WebGLRenderingContext.front_face = (function gl$WebGLRenderingContext$front_face(this$,mode){
return this$.frontFace(mode);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.generateMipmap() method of the WebGL
 *   generates a set of mipmaps for a `gl.WebGLTexture` object.
 * 
 *   `void gl.generateMipmap(target);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/generateMipmap`
 */
gl.WebGLRenderingContext.generate_mipmap = (function gl$WebGLRenderingContext$generate_mipmap(this$,target){
return this$.generateMipmap(target);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getActiveAttrib() method of the WebGL
 *   returns a `gl.WebGLActiveInfo` object containing size, type,
 *   name of a vertex attribute. It is generally used when querying
 *   uniforms either for debugging or generic library creation.
 * 
 *   `WebGLActiveInfo gl.getActiveAttrib(program,index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getActiveAttrib`
 */
gl.WebGLRenderingContext.get_active_attrib = (function gl$WebGLRenderingContext$get_active_attrib(this$,program,index){
return this$.getActiveAttrib(program,index);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getActiveUniform() method of the WebGL
 *   returns a `gl.WebGLActiveInfo` object containing size, type,
 *   name of a uniform attribute. It is generally used when querying
 *   uniforms either for debugging or generic library creation.
 * 
 *   `WebGLActiveInfo WebGLRenderingContext.getActiveUniform(program, index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getActiveUniform`
 */
gl.WebGLRenderingContext.get_active_uniform = (function gl$WebGLRenderingContext$get_active_uniform(this$,program,index){
return this$.getActiveUniform(program,index);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getAttachedShaders() method of the
 *   API returns a list of `gl.WebGLShader` objects attached to a
 * 
 *   `sequence<WebGLShader> gl.getAttachedShaders(program);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getAttachedShaders`
 */
gl.WebGLRenderingContext.get_attached_shaders = (function gl$WebGLRenderingContext$get_attached_shaders(this$,program){
return this$.getAttachedShaders(program);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getAttribLocation() method of the WebGL
 *   returns the location of an attribute variable in a given `gl.WebGLProgram`.
 * 
 *   `GLint gl.getAttribLocation(program, name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getAttribLocation`
 */
gl.WebGLRenderingContext.get_attrib_location = (function gl$WebGLRenderingContext$get_attrib_location(this$,program,name){
return this$.getAttribLocation(program,name);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getBufferParameter() method of the
 *   API returns information about the buffer.
 * 
 *   `any gl.getBufferParameter(target, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter`
 */
gl.WebGLRenderingContext.get_buffer_parameter = (function gl$WebGLRenderingContext$get_buffer_parameter(this$,target,pname){
return this$.getBufferParameter(target,pname);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getContextAttributes() method returns
 *   WebGLContextAttributes object that contains the actual context
 *   Might return `web.null`, if the context is lost.
 * 
 *   `gl.getContextAttributes();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getContextAttributes`
 */
gl.WebGLRenderingContext.get_context_attributes = (function gl$WebGLRenderingContext$get_context_attributes(this$){
return this$.getContextAttributes();
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getError() method of the WebGL API
 *   error information.
 * 
 *   `GLenum gl.getError();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getError`
 */
gl.WebGLRenderingContext.get_error = (function gl$WebGLRenderingContext$get_error(this$){
return this$.getError();
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getExtension() method enables a WebGL
 * 
 *   `gl.getExtension(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getExtension`
 */
gl.WebGLRenderingContext.get_extension = (function gl$WebGLRenderingContext$get_extension(this$,name){
return this$.getExtension(name);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getFramebufferAttachmentParameter()
 *   of the WebGL API returns information about a framebuffer's attachment.
 * 
 *   `any gl.getFramebufferAttachmentParameter(target, attachment, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter`
 */
gl.WebGLRenderingContext.get_framebuffer_attachment_parameter = (function gl$WebGLRenderingContext$get_framebuffer_attachment_parameter(this$,target,attachment,pname){
return this$.getFramebufferAttachmentParameter(target,attachment,pname);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getParameter() method of the WebGL
 *   returns a value for the passed parameter name.
 * 
 *   `any gl.getParameter(pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getParameter`
 */
gl.WebGLRenderingContext.get_parameter = (function gl$WebGLRenderingContext$get_parameter(this$,pname){
return this$.getParameter(pname);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getProgramInfoLog returns the information
 *   for the specified `gl.WebGLProgram` object. It contains errors
 *   occurred during failed linking or validation of WebGLProgram
 * 
 *   `gl.getProgramInfoLog(program);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramInfoLog`
 */
gl.WebGLRenderingContext.get_program_info_log = (function gl$WebGLRenderingContext$get_program_info_log(this$,program){
return this$.getProgramInfoLog(program);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getProgramParameter() method of the
 *   API returns information about the given program.
 * 
 *   `any gl.getProgramParameter(program, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramParameter`
 */
gl.WebGLRenderingContext.get_program_parameter = (function gl$WebGLRenderingContext$get_program_parameter(this$,program,pname){
return this$.getProgramParameter(program,pname);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getRenderbufferParameter() method of
 *   WebGL API returns information about the renderbuffer.
 * 
 *   `any gl.getRenderbufferParameter(target, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getRenderbufferParameter`
 */
gl.WebGLRenderingContext.get_renderbuffer_parameter = (function gl$WebGLRenderingContext$get_renderbuffer_parameter(this$,target,pname){
return this$.getRenderbufferParameter(target,pname);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getShaderInfoLog returns the information
 *   for the specified `gl.WebGLShader` object. It contains warnings,
 *   and compile information.
 * 
 *   `gl.getShaderInfoLog(shader);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getShaderInfoLog`
 */
gl.WebGLRenderingContext.get_shader_info_log = (function gl$WebGLRenderingContext$get_shader_info_log(this$,shader){
return this$.getShaderInfoLog(shader);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getShaderParameter() method of the
 *   API returns information about the given shader.
 * 
 *   `any gl.getShaderParameter(shader, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter`
 */
gl.WebGLRenderingContext.get_shader_parameter = (function gl$WebGLRenderingContext$get_shader_parameter(this$,shader,pname){
return this$.getShaderParameter(shader,pname);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getShaderPrecisionFormat() method of
 *   WebGL API returns a new `gl.WebGLShaderPrecisionFormat` object
 *   the range and precision for the specified shader numeric format.
 * 
 *   `WebGLShaderPrecisionFormat gl.getShaderPrecisionFormat(shaderType, precisionType);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat`
 */
gl.WebGLRenderingContext.get_shader_precision_format = (function gl$WebGLRenderingContext$get_shader_precision_format(this$,shader_type,precision_type){
return this$.getShaderPrecisionFormat(shader_type,precision_type);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getShaderSource() method of the WebGL
 *   returns the source code of a `gl.WebGLShader` as a `dom.DOMString`.
 * 
 *   `DOMString gl.getShaderSource(shader);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getShaderSource`
 */
gl.WebGLRenderingContext.get_shader_source = (function gl$WebGLRenderingContext$get_shader_source(this$,shader){
return this$.getShaderSource(shader);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getSupportedExtensions() method returns
 *   list of all the supported WebGL extensions.
 * 
 *   `gl.getSupportedExtensions();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getSupportedExtensions`
 */
gl.WebGLRenderingContext.get_supported_extensions = (function gl$WebGLRenderingContext$get_supported_extensions(this$){
return this$.getSupportedExtensions();
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getTexParameter() method of the WebGL
 *   returns information about the given texture.
 * 
 *   `any gl.getTexParameter(target, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getTexParameter`
 */
gl.WebGLRenderingContext.get_tex_parameter = (function gl$WebGLRenderingContext$get_tex_parameter(this$,target,pname){
return this$.getTexParameter(target,pname);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getUniform() method of the WebGL API
 *   the value of a uniform variable at a given location.
 * 
 *   `any gl.getUniform(program, location);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getUniform`
 */
gl.WebGLRenderingContext.get_uniform = (function gl$WebGLRenderingContext$get_uniform(this$,program,location){
return this$.getUniform(program,location);
});
/**
 * Method.
 * 
 *   Part of the WebGL API, the `gl.WebGLRenderingContext` method
 *   returns the location of a specific uniform variable which is
 *   of a given `gl.WebGLProgram`.
 * 
 *   `WebGLUniformLocation = WebGLRenderingContext.getUniformLocation(program, name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getUniformLocation`
 */
gl.WebGLRenderingContext.get_uniform_location = (function gl$WebGLRenderingContext$get_uniform_location(this$,program,name){
return this$.getUniformLocation(program,name);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getVertexAttrib() method of the WebGL
 *   returns information about a vertex attribute at a given position.
 * 
 *   `any gl.getVertexAttrib(index, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib`
 */
gl.WebGLRenderingContext.get_vertex_attrib = (function gl$WebGLRenderingContext$get_vertex_attrib(this$,index,pname){
return this$.getVertexAttrib(index,pname);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.getVertexAttribOffset() method of the
 *   API returns the address of a specified vertex attribute.
 * 
 *   `GLintptr gl.getVertexAttribOffset(index, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset`
 */
gl.WebGLRenderingContext.get_vertex_attrib_offset = (function gl$WebGLRenderingContext$get_vertex_attrib_offset(this$,index,pname){
return this$.getVertexAttribOffset(index,pname);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.hint() method of the WebGL API specifies
 *   for certain behaviors. The interpretation of these hints depend
 *   the implementation.
 * 
 *   `void gl.hint(target, mode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/hint`
 */
gl.WebGLRenderingContext.hint = (function gl$WebGLRenderingContext$hint(this$,target,mode){
return this$.hint(target,mode);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.isBuffer() method of the WebGL API
 *   true if the passed `gl.WebGLBuffer` is valid and false otherwise.
 * 
 *   `GLboolean gl.isBuffer(buffer);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isBuffer`
 */
gl.WebGLRenderingContext.is_buffer = (function gl$WebGLRenderingContext$is_buffer(this$,buffer){
return this$.isBuffer(buffer);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.isContextLost() method returns a `web.Boolean`
 *   whether or not the WebGL context has been lost.
 * 
 *   `gl.isContextLost();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isContextLost`
 */
gl.WebGLRenderingContext.is_context_lost = (function gl$WebGLRenderingContext$is_context_lost(this$){
return this$.isContextLost();
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.isEnabled() method of the WebGL API
 *   whether a specific WebGL capability is enabled or not for this
 * 
 *   `GLboolean gl.isEnabled(cap);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isEnabled`
 */
gl.WebGLRenderingContext.is_enabled = (function gl$WebGLRenderingContext$is_enabled(this$,cap){
return this$.isEnabled(cap);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.isFramebuffer() method of the WebGL
 *   returns true if the passed `gl.WebGLFramebuffer` is valid and
 *   otherwise.
 * 
 *   `GLboolean gl.isFramebuffer(framebuffer);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isFramebuffer`
 */
gl.WebGLRenderingContext.is_framebuffer = (function gl$WebGLRenderingContext$is_framebuffer(this$,framebuffer){
return this$.isFramebuffer(framebuffer);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.isProgram() method of the WebGL API
 *   true if the passed `gl.WebGLProgram` is valid, false otherwise.
 * 
 *   `GLboolean gl.isProgram(program);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isProgram`
 */
gl.WebGLRenderingContext.is_program = (function gl$WebGLRenderingContext$is_program(this$,program){
return this$.isProgram(program);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.isRenderbuffer() method of the WebGL
 *   returns true if the passed `gl.WebGLRenderbuffer` is valid and
 *   otherwise.
 * 
 *   `GLboolean gl.isRenderbuffer(renderbuffer);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isRenderbuffer`
 */
gl.WebGLRenderingContext.is_renderbuffer = (function gl$WebGLRenderingContext$is_renderbuffer(this$,renderbuffer){
return this$.isRenderbuffer(renderbuffer);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.isShader() method of the WebGL API
 *   true if the passed `gl.WebGLShader` is valid, false otherwise.
 * 
 *   `GLboolean gl.isShader(shader);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isShader`
 */
gl.WebGLRenderingContext.is_shader = (function gl$WebGLRenderingContext$is_shader(this$,shader){
return this$.isShader(shader);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.isTexture() method of the WebGL API
 *   true if the passed `gl.WebGLTexture` is valid and false otherwise.
 * 
 *   `GLboolean gl.isTexture(texture);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isTexture`
 */
gl.WebGLRenderingContext.is_texture = (function gl$WebGLRenderingContext$is_texture(this$,texture){
return this$.isTexture(texture);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.lineWidth() method of the WebGL API
 *   the line width of rasterized lines.
 * 
 *   `void gl.lineWidth(width);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/lineWidth`
 */
gl.WebGLRenderingContext.line_width = (function gl$WebGLRenderingContext$line_width(this$,width){
return this$.lineWidth(width);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.linkProgram() method of the WebGL API
 *   a given `gl.WebGLProgram` to the attached vertex and fragment
 * 
 *   `void gl.linkProgram(program);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/linkProgram`
 */
gl.WebGLRenderingContext.link_program = (function gl$WebGLRenderingContext$link_program(this$,program){
return this$.linkProgram(program);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.pixelStorei() method of the WebGL API
 *   the pixel storage modes.
 * 
 *   `void gl.pixelStorei(pname, param);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/pixelStorei`
 */
gl.WebGLRenderingContext.pixel_storei = (function gl$WebGLRenderingContext$pixel_storei(this$,pname,param){
return this$.pixelStorei(pname,param);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.polygonOffset() method of the WebGL
 *   specifies the scale factors and units to calculate depth values.
 * 
 *   `void gl.polygonOffset(factor, units);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/polygonOffset`
 */
gl.WebGLRenderingContext.polygon_offset = (function gl$WebGLRenderingContext$polygon_offset(this$,factor,units){
return this$.polygonOffset(factor,units);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.readPixels() method of the WebGL API
 *   a block of pixels from a specified rectangle of the current color
 *   into an `web.ArrayBufferView` object.
 * 
 *   `// WebGL1:
 *   void gl.readPixels(x, y, width, height, format, type, pixels);
 * 
 *   // WebGL2:
 *   void gl.readPixels(x, y, width, height, format, type, GLintptr offset);
 *   void gl.readPixels(x, y, width, height, format, type, ArrayBufferView pixels, GLuint dstOffset);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/readPixels`
 */
gl.WebGLRenderingContext.read_pixels = (function gl$WebGLRenderingContext$read_pixels(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44714 = arguments.length;
var i__42557__auto___44715 = (0);
while(true){
if((i__42557__auto___44715 < len__42556__auto___44714)){
args__42563__auto__.push((arguments[i__42557__auto___44715]));

var G__44716 = (i__42557__auto___44715 + (1));
i__42557__auto___44715 = G__44716;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.read_pixels.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.read_pixels.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.readPixels,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.read_pixels.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.read_pixels.cljs$lang$applyTo = (function (seq44712){
var G__44713 = cljs.core.first.call(null,seq44712);
var seq44712__$1 = cljs.core.next.call(null,seq44712);
return gl.WebGLRenderingContext.read_pixels.cljs$core$IFn$_invoke$arity$variadic(G__44713,seq44712__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.renderbufferStorage() method of the
 *   API creates and initializes a renderbuffer object's data store.
 * 
 *   `void gl.renderbufferStorage(target, internalFormat, width, height);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/renderbufferStorage`
 */
gl.WebGLRenderingContext.renderbuffer_storage = (function gl$WebGLRenderingContext$renderbuffer_storage(this$,target,internal_format,width,height){
return this$.renderbufferStorage(target,internal_format,width,height);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.sampleCoverage() method of the WebGL
 *   specifies multi-sample coverage parameters for anti-aliasing
 * 
 *   `void gl.sampleCoverage(value, invert);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/sampleCoverage`
 */
gl.WebGLRenderingContext.sample_coverage = (function gl$WebGLRenderingContext$sample_coverage(this$,value,invert){
return this$.sampleCoverage(value,invert);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.scissor() method of the WebGL API sets
 *   scissor box, which limits the drawing to a specified rectangle.
 * 
 *   `void gl.scissor(x, y, width, height);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/scissor`
 */
gl.WebGLRenderingContext.scissor = (function gl$WebGLRenderingContext$scissor(this$,x,y,width,height){
return this$.scissor(x,y,width,height);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.shaderSource() method of the WebGL
 *   sets the source code of a `gl.WebGLShader`.
 * 
 *   `void gl.shaderSource(shader, source);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/shaderSource`
 */
gl.WebGLRenderingContext.shader_source = (function gl$WebGLRenderingContext$shader_source(this$,shader,source){
return this$.shaderSource(shader,source);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.stencilFunc() method of the WebGL API
 *   the front and back function and reference value for stencil testing.
 * 
 *   `void gl.stencilFunc(func, ref, mask);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/stencilFunc`
 */
gl.WebGLRenderingContext.stencil_func = (function gl$WebGLRenderingContext$stencil_func(this$,func,ref,mask){
return this$.stencilFunc(func,ref,mask);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.stencilFuncSeparate() method of the
 *   API sets the front and/or back function and reference value for
 *   testing.
 * 
 *   `void gl.stencilFuncSeparate(face, func, ref, mask);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/stencilFuncSeparate`
 */
gl.WebGLRenderingContext.stencil_func_separate = (function gl$WebGLRenderingContext$stencil_func_separate(this$,face,func,ref,mask){
return this$.stencilFuncSeparate(face,func,ref,mask);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.stencilMask() method of the WebGL API
 *   enabling and disabling of both the front and back writing of
 *   bits in the stencil planes.
 * 
 *   `void gl.stencilMask(mask);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/stencilMask`
 */
gl.WebGLRenderingContext.stencil_mask = (function gl$WebGLRenderingContext$stencil_mask(this$,mask){
return this$.stencilMask(mask);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.stencilMaskSeparate() method of the
 *   API controls enabling and disabling of front and/or back writing
 *   individual bits in the stencil planes.
 * 
 *   `void gl.stencilMaskSeparate(face, mask);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate`
 */
gl.WebGLRenderingContext.stencil_mask_separate = (function gl$WebGLRenderingContext$stencil_mask_separate(this$,face,mask){
return this$.stencilMaskSeparate(face,mask);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.stencilOp() method of the WebGL API
 *   both the front and back-facing stencil test actions.
 * 
 *   `void gl.stencilOp(fail, zfail, zpass);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/stencilOp`
 */
gl.WebGLRenderingContext.stencil_op = (function gl$WebGLRenderingContext$stencil_op(this$,fail,zfail,zpass){
return this$.stencilOp(fail,zfail,zpass);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.stencilOpSeparate() method of the WebGL
 *   sets the front and/or back-facing stencil test actions.
 * 
 *   `void gl.stencilOpSeparate(face, fail, zfail, zpass);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/stencilOpSeparate`
 */
gl.WebGLRenderingContext.stencil_op_separate = (function gl$WebGLRenderingContext$stencil_op_separate(this$,face,fail,zfail,zpass){
return this$.stencilOpSeparate(face,fail,zfail,zpass);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.texImage2D() method of the WebGL API
 *   a two-dimensional texture image.
 * 
 *   `// WebGL1:
 *   void gl.texImage2D(target, level, internalformat, width, height, border, format, type, ArrayBufferView? pixels);
 *   void gl.texImage2D(target, level, internalformat, format, type, ImageData? pixels);
 *   void gl.texImage2D(target, level, internalformat, format, type, HTMLImageElement? pixels);
 *   void gl.texImage2D(target, level, internalformat, format, type, HTMLCanvasElement? pixels);
 *   void gl.texImage2D(target, level, internalformat, format, type, HTMLVideoElement? pixels);
 *   void gl.texImage2D(target, level, internalformat, format, type, ImageBitmap? pixels);
 * 
 *   // WebGL2:
 *   void gl.texImage2D(target, level, internalformat, width, height, border, format, type, GLintptr offset);
 *   void gl.texImage2D(target, level, internalformat, width, height, border, format, type, HTMLCanvasElement source);
 *   void gl.texImage2D(target, level, internalformat, width, height, border, format, type, HTMLImageElement source);
 *   void gl.texImage2D(target, level, internalformat, width, height, border, format, type, HTMLVideoElement source);
 *   void gl.texImage2D(target, level, internalformat, width, height, border, format, type, ImageBitmap source);
 *   void gl.texImage2D(target, level, internalformat, width, height, border, format, type, ImageData source);
 *   void gl.texImage2D(target, level, internalformat, width, height, border, format, type, ArrayBufferView srcData, srcOffset);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D`
 */
gl.WebGLRenderingContext.tex_image_2d = (function gl$WebGLRenderingContext$tex_image_2d(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44719 = arguments.length;
var i__42557__auto___44720 = (0);
while(true){
if((i__42557__auto___44720 < len__42556__auto___44719)){
args__42563__auto__.push((arguments[i__42557__auto___44720]));

var G__44721 = (i__42557__auto___44720 + (1));
i__42557__auto___44720 = G__44721;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.tex_image_2d.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.tex_image_2d.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.texImage2D,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.tex_image_2d.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.tex_image_2d.cljs$lang$applyTo = (function (seq44717){
var G__44718 = cljs.core.first.call(null,seq44717);
var seq44717__$1 = cljs.core.next.call(null,seq44717);
return gl.WebGLRenderingContext.tex_image_2d.cljs$core$IFn$_invoke$arity$variadic(G__44718,seq44717__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.texParameter[fi]() methods of the WebGL
 *   set texture parameters.
 * 
 *   `void gl.texParameterf(GLenum target, GLenum pname, GLfloat param);
 *   void gl.texParameteri(GLenum target, GLenum pname, GLint param);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texParameter`
 */
gl.WebGLRenderingContext.tex_parameterf = (function gl$WebGLRenderingContext$tex_parameterf(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44724 = arguments.length;
var i__42557__auto___44725 = (0);
while(true){
if((i__42557__auto___44725 < len__42556__auto___44724)){
args__42563__auto__.push((arguments[i__42557__auto___44725]));

var G__44726 = (i__42557__auto___44725 + (1));
i__42557__auto___44725 = G__44726;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.tex_parameterf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.tex_parameterf.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.texParameterf,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.tex_parameterf.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.tex_parameterf.cljs$lang$applyTo = (function (seq44722){
var G__44723 = cljs.core.first.call(null,seq44722);
var seq44722__$1 = cljs.core.next.call(null,seq44722);
return gl.WebGLRenderingContext.tex_parameterf.cljs$core$IFn$_invoke$arity$variadic(G__44723,seq44722__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.texParameter[fi]() methods of the WebGL
 *   set texture parameters.
 * 
 *   `void gl.texParameterf(GLenum target, GLenum pname, GLfloat param);
 *   void gl.texParameteri(GLenum target, GLenum pname, GLint param);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texParameter`
 */
gl.WebGLRenderingContext.tex_parameteri = (function gl$WebGLRenderingContext$tex_parameteri(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44729 = arguments.length;
var i__42557__auto___44730 = (0);
while(true){
if((i__42557__auto___44730 < len__42556__auto___44729)){
args__42563__auto__.push((arguments[i__42557__auto___44730]));

var G__44731 = (i__42557__auto___44730 + (1));
i__42557__auto___44730 = G__44731;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.tex_parameteri.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.tex_parameteri.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.texParameteri,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.tex_parameteri.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.tex_parameteri.cljs$lang$applyTo = (function (seq44727){
var G__44728 = cljs.core.first.call(null,seq44727);
var seq44727__$1 = cljs.core.next.call(null,seq44727);
return gl.WebGLRenderingContext.tex_parameteri.cljs$core$IFn$_invoke$arity$variadic(G__44728,seq44727__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.texSubImage2D() method of the WebGL
 *   specifies a sub-rectangle of the current texture.
 * 
 *   `// WebGL 1:
 *   void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, ArrayBufferView? pixels);
 *   void gl.texSubImage2D(target, level, xoffset, yoffset, format, type, ImageData? pixels);
 *   void gl.texSubImage2D(target, level, xoffset, yoffset, format, type, HTMLImageElement? pixels);
 *   void gl.texSubImage2D(target, level, xoffset, yoffset, format, type, HTMLCanvasElement? pixels);
 *   void gl.texSubImage2D(target, level, xoffset, yoffset, format, type, HTMLVideoElement? pixels);
 *   void gl.texSubImage2D(target, level, xoffset, yoffset, format, type, ImageBitmap? pixels);
 * 
 *   // WebGL 2:
 *   void gl.texSubImage2D(target, level, xoffset, yoffset, format, type, GLintptr offset);
 *   void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, HTMLCanvasElement source);
 *   void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, HTMLImageElement source);
 *   void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, HTMLVideoElement source);
 *   void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, ImageBitmap source);
 *   void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, ImageData source);
 *   void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, ArrayBufferView srcData, srcOffset);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texSubImage2D`
 */
gl.WebGLRenderingContext.tex_sub_image_2d = (function gl$WebGLRenderingContext$tex_sub_image_2d(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44734 = arguments.length;
var i__42557__auto___44735 = (0);
while(true){
if((i__42557__auto___44735 < len__42556__auto___44734)){
args__42563__auto__.push((arguments[i__42557__auto___44735]));

var G__44736 = (i__42557__auto___44735 + (1));
i__42557__auto___44735 = G__44736;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.tex_sub_image_2d.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.tex_sub_image_2d.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.texSubImage2D,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.tex_sub_image_2d.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.tex_sub_image_2d.cljs$lang$applyTo = (function (seq44732){
var G__44733 = cljs.core.first.call(null,seq44732);
var seq44732__$1 = cljs.core.next.call(null,seq44732);
return gl.WebGLRenderingContext.tex_sub_image_2d.cljs$core$IFn$_invoke$arity$variadic(G__44733,seq44732__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.uniform[1234][fi][v]() methods of the
 *   API specify values of uniform variables.
 * 
 *   `void gl.uniform1f(location, v0);
 *   void gl.uniform1fv(location, value);
 *   void gl.uniform1i(location, v0);
 *   void gl.uniform1iv(location, value);
 * 
 *   void gl.uniform2f(location, v0, v1);
 *   void gl.uniform2fv(location, value);
 *   void gl.uniform2i(location, v0, v1);
 *   void gl.uniform2iv(location, value);
 * 
 *   void gl.uniform3f(location, v0, v1, v2);
 *   void gl.uniform3fv(location, value);
 *   void gl.uniform3i(location, v0, v1, v2);
 *   void gl.uniform3iv(location, value);
 * 
 *   void gl.uniform4f(location, v0, v1, v2, v3);
 *   void gl.uniform4fv(location, value);
 *   void gl.uniform4i(location, v0, v1, v2, v3);
 *   void gl.uniform4iv(location, value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniform`
 */
gl.WebGLRenderingContext.uniform_111 = (function gl$WebGLRenderingContext$uniform_111(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44739 = arguments.length;
var i__42557__auto___44740 = (0);
while(true){
if((i__42557__auto___44740 < len__42556__auto___44739)){
args__42563__auto__.push((arguments[i__42557__auto___44740]));

var G__44741 = (i__42557__auto___44740 + (1));
i__42557__auto___44740 = G__44741;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.uniform_111.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.uniform_111.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.uniform111,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.uniform_111.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.uniform_111.cljs$lang$applyTo = (function (seq44737){
var G__44738 = cljs.core.first.call(null,seq44737);
var seq44737__$1 = cljs.core.next.call(null,seq44737);
return gl.WebGLRenderingContext.uniform_111.cljs$core$IFn$_invoke$arity$variadic(G__44738,seq44737__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.uniform[1234][fi][v]() methods of the
 *   API specify values of uniform variables.
 * 
 *   `void gl.uniform1f(location, v0);
 *   void gl.uniform1fv(location, value);
 *   void gl.uniform1i(location, v0);
 *   void gl.uniform1iv(location, value);
 * 
 *   void gl.uniform2f(location, v0, v1);
 *   void gl.uniform2fv(location, value);
 *   void gl.uniform2i(location, v0, v1);
 *   void gl.uniform2iv(location, value);
 * 
 *   void gl.uniform3f(location, v0, v1, v2);
 *   void gl.uniform3fv(location, value);
 *   void gl.uniform3i(location, v0, v1, v2);
 *   void gl.uniform3iv(location, value);
 * 
 *   void gl.uniform4f(location, v0, v1, v2, v3);
 *   void gl.uniform4fv(location, value);
 *   void gl.uniform4i(location, v0, v1, v2, v3);
 *   void gl.uniform4iv(location, value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniform`
 */
gl.WebGLRenderingContext.uniform_222 = (function gl$WebGLRenderingContext$uniform_222(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44744 = arguments.length;
var i__42557__auto___44745 = (0);
while(true){
if((i__42557__auto___44745 < len__42556__auto___44744)){
args__42563__auto__.push((arguments[i__42557__auto___44745]));

var G__44746 = (i__42557__auto___44745 + (1));
i__42557__auto___44745 = G__44746;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.uniform_222.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.uniform_222.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.uniform222,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.uniform_222.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.uniform_222.cljs$lang$applyTo = (function (seq44742){
var G__44743 = cljs.core.first.call(null,seq44742);
var seq44742__$1 = cljs.core.next.call(null,seq44742);
return gl.WebGLRenderingContext.uniform_222.cljs$core$IFn$_invoke$arity$variadic(G__44743,seq44742__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.uniform[1234][fi][v]() methods of the
 *   API specify values of uniform variables.
 * 
 *   `void gl.uniform1f(location, v0);
 *   void gl.uniform1fv(location, value);
 *   void gl.uniform1i(location, v0);
 *   void gl.uniform1iv(location, value);
 * 
 *   void gl.uniform2f(location, v0, v1);
 *   void gl.uniform2fv(location, value);
 *   void gl.uniform2i(location, v0, v1);
 *   void gl.uniform2iv(location, value);
 * 
 *   void gl.uniform3f(location, v0, v1, v2);
 *   void gl.uniform3fv(location, value);
 *   void gl.uniform3i(location, v0, v1, v2);
 *   void gl.uniform3iv(location, value);
 * 
 *   void gl.uniform4f(location, v0, v1, v2, v3);
 *   void gl.uniform4fv(location, value);
 *   void gl.uniform4i(location, v0, v1, v2, v3);
 *   void gl.uniform4iv(location, value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniform`
 */
gl.WebGLRenderingContext.uniform_333 = (function gl$WebGLRenderingContext$uniform_333(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44749 = arguments.length;
var i__42557__auto___44750 = (0);
while(true){
if((i__42557__auto___44750 < len__42556__auto___44749)){
args__42563__auto__.push((arguments[i__42557__auto___44750]));

var G__44751 = (i__42557__auto___44750 + (1));
i__42557__auto___44750 = G__44751;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.uniform_333.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.uniform_333.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.uniform333,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.uniform_333.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.uniform_333.cljs$lang$applyTo = (function (seq44747){
var G__44748 = cljs.core.first.call(null,seq44747);
var seq44747__$1 = cljs.core.next.call(null,seq44747);
return gl.WebGLRenderingContext.uniform_333.cljs$core$IFn$_invoke$arity$variadic(G__44748,seq44747__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.uniform[1234][fi][v]() methods of the
 *   API specify values of uniform variables.
 * 
 *   `void gl.uniform1f(location, v0);
 *   void gl.uniform1fv(location, value);
 *   void gl.uniform1i(location, v0);
 *   void gl.uniform1iv(location, value);
 * 
 *   void gl.uniform2f(location, v0, v1);
 *   void gl.uniform2fv(location, value);
 *   void gl.uniform2i(location, v0, v1);
 *   void gl.uniform2iv(location, value);
 * 
 *   void gl.uniform3f(location, v0, v1, v2);
 *   void gl.uniform3fv(location, value);
 *   void gl.uniform3i(location, v0, v1, v2);
 *   void gl.uniform3iv(location, value);
 * 
 *   void gl.uniform4f(location, v0, v1, v2, v3);
 *   void gl.uniform4fv(location, value);
 *   void gl.uniform4i(location, v0, v1, v2, v3);
 *   void gl.uniform4iv(location, value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniform`
 */
gl.WebGLRenderingContext.uniform_444 = (function gl$WebGLRenderingContext$uniform_444(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44754 = arguments.length;
var i__42557__auto___44755 = (0);
while(true){
if((i__42557__auto___44755 < len__42556__auto___44754)){
args__42563__auto__.push((arguments[i__42557__auto___44755]));

var G__44756 = (i__42557__auto___44755 + (1));
i__42557__auto___44755 = G__44756;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.uniform_444.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.uniform_444.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.uniform444,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.uniform_444.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.uniform_444.cljs$lang$applyTo = (function (seq44752){
var G__44753 = cljs.core.first.call(null,seq44752);
var seq44752__$1 = cljs.core.next.call(null,seq44752);
return gl.WebGLRenderingContext.uniform_444.cljs$core$IFn$_invoke$arity$variadic(G__44753,seq44752__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.uniformMatrix[234]fv() methods of the
 *   API specify matrix values for uniform variables.
 * 
 *   `WebGLRenderingContext.uniformMatrix2fv(location, transpose, value);
 *   WebGLRenderingContext.uniformMatrix3fv(location, transpose, value);
 *   WebGLRenderingContext.uniformMatrix4fv(location, transpose, value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniformMatrix`
 */
gl.WebGLRenderingContext.uniform_matrix_2fv = (function gl$WebGLRenderingContext$uniform_matrix_2fv(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44759 = arguments.length;
var i__42557__auto___44760 = (0);
while(true){
if((i__42557__auto___44760 < len__42556__auto___44759)){
args__42563__auto__.push((arguments[i__42557__auto___44760]));

var G__44761 = (i__42557__auto___44760 + (1));
i__42557__auto___44760 = G__44761;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.uniform_matrix_2fv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.uniform_matrix_2fv.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.uniformMatrix2fv,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.uniform_matrix_2fv.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.uniform_matrix_2fv.cljs$lang$applyTo = (function (seq44757){
var G__44758 = cljs.core.first.call(null,seq44757);
var seq44757__$1 = cljs.core.next.call(null,seq44757);
return gl.WebGLRenderingContext.uniform_matrix_2fv.cljs$core$IFn$_invoke$arity$variadic(G__44758,seq44757__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.uniformMatrix[234]fv() methods of the
 *   API specify matrix values for uniform variables.
 * 
 *   `WebGLRenderingContext.uniformMatrix2fv(location, transpose, value);
 *   WebGLRenderingContext.uniformMatrix3fv(location, transpose, value);
 *   WebGLRenderingContext.uniformMatrix4fv(location, transpose, value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniformMatrix`
 */
gl.WebGLRenderingContext.uniform_matrix_3fv = (function gl$WebGLRenderingContext$uniform_matrix_3fv(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44764 = arguments.length;
var i__42557__auto___44765 = (0);
while(true){
if((i__42557__auto___44765 < len__42556__auto___44764)){
args__42563__auto__.push((arguments[i__42557__auto___44765]));

var G__44766 = (i__42557__auto___44765 + (1));
i__42557__auto___44765 = G__44766;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.uniform_matrix_3fv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.uniform_matrix_3fv.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.uniformMatrix3fv,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.uniform_matrix_3fv.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.uniform_matrix_3fv.cljs$lang$applyTo = (function (seq44762){
var G__44763 = cljs.core.first.call(null,seq44762);
var seq44762__$1 = cljs.core.next.call(null,seq44762);
return gl.WebGLRenderingContext.uniform_matrix_3fv.cljs$core$IFn$_invoke$arity$variadic(G__44763,seq44762__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.uniformMatrix[234]fv() methods of the
 *   API specify matrix values for uniform variables.
 * 
 *   `WebGLRenderingContext.uniformMatrix2fv(location, transpose, value);
 *   WebGLRenderingContext.uniformMatrix3fv(location, transpose, value);
 *   WebGLRenderingContext.uniformMatrix4fv(location, transpose, value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniformMatrix`
 */
gl.WebGLRenderingContext.uniform_matrix_4fv = (function gl$WebGLRenderingContext$uniform_matrix_4fv(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44769 = arguments.length;
var i__42557__auto___44770 = (0);
while(true){
if((i__42557__auto___44770 < len__42556__auto___44769)){
args__42563__auto__.push((arguments[i__42557__auto___44770]));

var G__44771 = (i__42557__auto___44770 + (1));
i__42557__auto___44770 = G__44771;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.uniform_matrix_4fv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.uniform_matrix_4fv.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.uniformMatrix4fv,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.uniform_matrix_4fv.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.uniform_matrix_4fv.cljs$lang$applyTo = (function (seq44767){
var G__44768 = cljs.core.first.call(null,seq44767);
var seq44767__$1 = cljs.core.next.call(null,seq44767);
return gl.WebGLRenderingContext.uniform_matrix_4fv.cljs$core$IFn$_invoke$arity$variadic(G__44768,seq44767__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.useProgram() method of the WebGL API
 *   the specified `gl.WebGLProgram` as part of the current rendering
 * 
 *   `void gl.useProgram(program);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/useProgram`
 */
gl.WebGLRenderingContext.use_program = (function gl$WebGLRenderingContext$use_program(this$,program){
return this$.useProgram(program);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.validateProgram() method of the WebGL
 *   validates a `gl.WebGLProgram`. It checks if it is successfully
 *   and if it can be used in the current WebGL state.
 * 
 *   `void gl.validateProgram(program);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/validateProgram`
 */
gl.WebGLRenderingContext.validate_program = (function gl$WebGLRenderingContext$validate_program(this$,program){
return this$.validateProgram(program);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.vertexAttrib[1234]f[v]() methods of
 *   WebGL API specify constant values for generic vertex attributes.
 * 
 *   `void gl.vertexAttrib1f(index, v0);
 *   void gl.vertexAttrib2f(index, v0, v1);
 *   void gl.vertexAttrib3f(index, v0, v1, v2);
 *   void gl.vertexAttrib4f(index, v0, v1, v2, v3);
 * 
 *   void gl.vertexAttrib1fv(index, value);
 *   void gl.vertexAttrib2fv(index, value);
 *   void gl.vertexAttrib3fv(index, value);
 *   void gl.vertexAttrib4fv(index, value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttrib`
 */
gl.WebGLRenderingContext.vertex_attrib_1f_1 = (function gl$WebGLRenderingContext$vertex_attrib_1f_1(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44774 = arguments.length;
var i__42557__auto___44775 = (0);
while(true){
if((i__42557__auto___44775 < len__42556__auto___44774)){
args__42563__auto__.push((arguments[i__42557__auto___44775]));

var G__44776 = (i__42557__auto___44775 + (1));
i__42557__auto___44775 = G__44776;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.vertex_attrib_1f_1.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.vertex_attrib_1f_1.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.vertexAttrib1f1,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.vertex_attrib_1f_1.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.vertex_attrib_1f_1.cljs$lang$applyTo = (function (seq44772){
var G__44773 = cljs.core.first.call(null,seq44772);
var seq44772__$1 = cljs.core.next.call(null,seq44772);
return gl.WebGLRenderingContext.vertex_attrib_1f_1.cljs$core$IFn$_invoke$arity$variadic(G__44773,seq44772__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.vertexAttrib[1234]f[v]() methods of
 *   WebGL API specify constant values for generic vertex attributes.
 * 
 *   `void gl.vertexAttrib1f(index, v0);
 *   void gl.vertexAttrib2f(index, v0, v1);
 *   void gl.vertexAttrib3f(index, v0, v1, v2);
 *   void gl.vertexAttrib4f(index, v0, v1, v2, v3);
 * 
 *   void gl.vertexAttrib1fv(index, value);
 *   void gl.vertexAttrib2fv(index, value);
 *   void gl.vertexAttrib3fv(index, value);
 *   void gl.vertexAttrib4fv(index, value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttrib`
 */
gl.WebGLRenderingContext.vertex_attrib_2f_2 = (function gl$WebGLRenderingContext$vertex_attrib_2f_2(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44779 = arguments.length;
var i__42557__auto___44780 = (0);
while(true){
if((i__42557__auto___44780 < len__42556__auto___44779)){
args__42563__auto__.push((arguments[i__42557__auto___44780]));

var G__44781 = (i__42557__auto___44780 + (1));
i__42557__auto___44780 = G__44781;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.vertex_attrib_2f_2.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.vertex_attrib_2f_2.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.vertexAttrib2f2,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.vertex_attrib_2f_2.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.vertex_attrib_2f_2.cljs$lang$applyTo = (function (seq44777){
var G__44778 = cljs.core.first.call(null,seq44777);
var seq44777__$1 = cljs.core.next.call(null,seq44777);
return gl.WebGLRenderingContext.vertex_attrib_2f_2.cljs$core$IFn$_invoke$arity$variadic(G__44778,seq44777__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.vertexAttrib[1234]f[v]() methods of
 *   WebGL API specify constant values for generic vertex attributes.
 * 
 *   `void gl.vertexAttrib1f(index, v0);
 *   void gl.vertexAttrib2f(index, v0, v1);
 *   void gl.vertexAttrib3f(index, v0, v1, v2);
 *   void gl.vertexAttrib4f(index, v0, v1, v2, v3);
 * 
 *   void gl.vertexAttrib1fv(index, value);
 *   void gl.vertexAttrib2fv(index, value);
 *   void gl.vertexAttrib3fv(index, value);
 *   void gl.vertexAttrib4fv(index, value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttrib`
 */
gl.WebGLRenderingContext.vertex_attrib_3f_3 = (function gl$WebGLRenderingContext$vertex_attrib_3f_3(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44784 = arguments.length;
var i__42557__auto___44785 = (0);
while(true){
if((i__42557__auto___44785 < len__42556__auto___44784)){
args__42563__auto__.push((arguments[i__42557__auto___44785]));

var G__44786 = (i__42557__auto___44785 + (1));
i__42557__auto___44785 = G__44786;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.vertex_attrib_3f_3.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.vertex_attrib_3f_3.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.vertexAttrib3f3,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.vertex_attrib_3f_3.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.vertex_attrib_3f_3.cljs$lang$applyTo = (function (seq44782){
var G__44783 = cljs.core.first.call(null,seq44782);
var seq44782__$1 = cljs.core.next.call(null,seq44782);
return gl.WebGLRenderingContext.vertex_attrib_3f_3.cljs$core$IFn$_invoke$arity$variadic(G__44783,seq44782__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.vertexAttrib[1234]f[v]() methods of
 *   WebGL API specify constant values for generic vertex attributes.
 * 
 *   `void gl.vertexAttrib1f(index, v0);
 *   void gl.vertexAttrib2f(index, v0, v1);
 *   void gl.vertexAttrib3f(index, v0, v1, v2);
 *   void gl.vertexAttrib4f(index, v0, v1, v2, v3);
 * 
 *   void gl.vertexAttrib1fv(index, value);
 *   void gl.vertexAttrib2fv(index, value);
 *   void gl.vertexAttrib3fv(index, value);
 *   void gl.vertexAttrib4fv(index, value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttrib`
 */
gl.WebGLRenderingContext.vertex_attrib_4f_4 = (function gl$WebGLRenderingContext$vertex_attrib_4f_4(var_args){
var args__42563__auto__ = [];
var len__42556__auto___44789 = arguments.length;
var i__42557__auto___44790 = (0);
while(true){
if((i__42557__auto___44790 < len__42556__auto___44789)){
args__42563__auto__.push((arguments[i__42557__auto___44790]));

var G__44791 = (i__42557__auto___44790 + (1));
i__42557__auto___44790 = G__44791;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGLRenderingContext.vertex_attrib_4f_4.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGLRenderingContext.vertex_attrib_4f_4.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.vertexAttrib4f4,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGLRenderingContext.vertex_attrib_4f_4.cljs$lang$maxFixedArity = (1);

gl.WebGLRenderingContext.vertex_attrib_4f_4.cljs$lang$applyTo = (function (seq44787){
var G__44788 = cljs.core.first.call(null,seq44787);
var seq44787__$1 = cljs.core.next.call(null,seq44787);
return gl.WebGLRenderingContext.vertex_attrib_4f_4.cljs$core$IFn$_invoke$arity$variadic(G__44788,seq44787__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.vertexAttribPointer() method of the
 *   API binds the buffer currently bound to gl.ARRAY_BUFFER to a
 *   vertex attribute of the current vertex buffer object and specifies
 *   layout.
 * 
 *   `void gl.vertexAttribPointer(index, size, type, normalized, stride, offset);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer`
 */
gl.WebGLRenderingContext.vertex_attrib_pointer = (function gl$WebGLRenderingContext$vertex_attrib_pointer(this$,index,size,type,normalized,stride,offset){
return this$.vertexAttribPointer(index,size,type,normalized,stride,offset);
});
/**
 * Method.
 * 
 *   The WebGLRenderingContext.viewport() method of the WebGL API
 *   the viewport, which specifies the affine transformation of x
 *   y from normalized device coordinates to window coordinates.
 * 
 *   `void gl.viewport(x, y, width, height);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/viewport`
 */
gl.WebGLRenderingContext.viewport = (function gl$WebGLRenderingContext$viewport(this$,x,y,width,height){
return this$.viewport(x,y,width,height);
});
/**
 * Property.
 * 
 *   The WebGLRenderingContext.canvas property is a read-only reference
 *   the `html.HTMLCanvasElement` or `web.OffscreenCanvas` object
 *   is associated with the context. It might be `web.null` if it
 *   not associated with a `web.<canvas>` element or an `web.OffscreenCanvas`
 * 
 *   `gl.canvas;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/canvas`
 */
gl.WebGLRenderingContext.canvas = (function gl$WebGLRenderingContext$canvas(this$){
return this$.canvas();
});
/**
 * Property.
 * 
 *   The read-only WebGLRenderingContext.drawingBufferHeight property
 *   the actual height of the current drawing buffer. It should match
 *   height attribute of the `web.<canvas>` element associated with
 *   context, but might differ if the implementation is not able to
 *   the requested height.
 * 
 *   `gl.drawingBufferHeight;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawingBufferHeight`
 */
gl.WebGLRenderingContext.drawing_buffer_height = (function gl$WebGLRenderingContext$drawing_buffer_height(this$){
return this$.drawingBufferHeight();
});
/**
 * Property.
 * 
 *   The read-only WebGLRenderingContext.drawingBufferWidth property
 *   the actual width of the current drawing buffer. It should match
 *   width attribute of the `web.<canvas>` element associated with
 *   context, but might differ if the implementation is not able to
 *   the requested width.
 * 
 *   `gl.drawingBufferWidth;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawingBufferWidth`
 */
gl.WebGLRenderingContext.drawing_buffer_width = (function gl$WebGLRenderingContext$drawing_buffer_width(this$){
return this$.drawingBufferWidth();
});

//# sourceMappingURL=WebGLRenderingContext.js.map?rel=1565798816451
