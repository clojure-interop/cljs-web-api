// Compiled by ClojureScript 1.9.946 {}
goog.provide('gl.WebGL2RenderingContext');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.beginQuery() method of the WebGL 2
 *   starts an asynchronous query. The target parameter indicates
 *   kind of query to begin.
 * 
 *   `void gl.beginQuery(target, query);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/beginQuery`
 */
gl.WebGL2RenderingContext.begin_query = (function gl$WebGL2RenderingContext$begin_query(this$,target,query){
return this$.beginQuery(target,query);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.beginTransformFeedback() method of
 *   WebGL 2 API starts a transform feedback operation.
 * 
 *   `void gl.beginTransformFeedback(primitiveMode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/beginTransformFeedback`
 */
gl.WebGL2RenderingContext.begin_transform_feedback = (function gl$WebGL2RenderingContext$begin_transform_feedback(this$,primitive_mode){
return this$.beginTransformFeedback(primitive_mode);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.bindBufferBase() method of the WebGL
 *   API binds a given `gl.WebGLBuffer` to a given binding point (target)
 *   a given index.
 * 
 *   `void gl.bindBufferBase(target, index, buffer);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/bindBufferBase`
 */
gl.WebGL2RenderingContext.bind_buffer_base = (function gl$WebGL2RenderingContext$bind_buffer_base(this$,target,index,buffer){
return this$.bindBufferBase(target,index,buffer);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.bindBufferRange() method of the WebGL
 *   API binds a range of a given `gl.WebGLBuffer` to a given binding
 *   (target) at a given index.
 * 
 *   `void gl.bindBufferRange(target, index, buffer, offset, size);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/bindBufferRange`
 */
gl.WebGL2RenderingContext.bind_buffer_range = (function gl$WebGL2RenderingContext$bind_buffer_range(this$,target,index,buffer,offset,size){
return this$.bindBufferRange(target,index,buffer,offset,size);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.bindSampler() method of the WebGL
 *   API binds a passed `gl.WebGLSampler` object to the texture unit
 *   the passed index.
 * 
 *   `void gl.bindSampler(unit, sampler);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/bindSampler`
 */
gl.WebGL2RenderingContext.bind_sampler = (function gl$WebGL2RenderingContext$bind_sampler(this$,unit,sampler){
return this$.bindSampler(unit,sampler);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.bindTransformFeedback() method of
 *   WebGL 2 API binds a passed `gl.WebGLTransformFeedback` object
 *   the current GL state.
 * 
 *   `void gl.bindTransformFeedback(target, transformFeedback);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/bindTransformFeedback`
 */
gl.WebGL2RenderingContext.bind_transform_feedback = (function gl$WebGL2RenderingContext$bind_transform_feedback(this$,target,transform_feedback){
return this$.bindTransformFeedback(target,transform_feedback);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.bindVertexArray() method of the WebGL
 *   API binds a passed `gl.WebGLVertexArrayObject` object to the
 * 
 *   `void gl.bindVertexArray(vertexArray);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/bindVertexArray`
 */
gl.WebGL2RenderingContext.bind_vertex_array = (function gl$WebGL2RenderingContext$bind_vertex_array(this$,vertex_array){
return this$.bindVertexArray(vertex_array);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.blitFramebuffer() method of the WebGL
 *   API transfers a block of pixels from the read framebuffer to
 *   draw framebuffer.
 * 
 *   `void gl.blitFramebuffer(srcX0, srcY0, srcX1, srcY1,
 *   dstX0, dstY0, dstX1, dstY1,
 *   mask, filter);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/blitFramebuffer`
 */
gl.WebGL2RenderingContext.blit_framebuffer = (function gl$WebGL2RenderingContext$blit_framebuffer(var_args){
var args__42563__auto__ = [];
var len__42556__auto___42983 = arguments.length;
var i__42557__auto___42984 = (0);
while(true){
if((i__42557__auto___42984 < len__42556__auto___42983)){
args__42563__auto__.push((arguments[i__42557__auto___42984]));

var G__42985 = (i__42557__auto___42984 + (1));
i__42557__auto___42984 = G__42985;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.blit_framebuffer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.blit_framebuffer.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.blitFramebuffer,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.blit_framebuffer.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.blit_framebuffer.cljs$lang$applyTo = (function (seq42981){
var G__42982 = cljs.core.first.call(null,seq42981);
var seq42981__$1 = cljs.core.next.call(null,seq42981);
return gl.WebGL2RenderingContext.blit_framebuffer.cljs$core$IFn$_invoke$arity$variadic(G__42982,seq42981__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.clearBuffer[fiuv]() methods of the
 *   2 API clear buffers from the currently bound framebuffer.
 * 
 *   `void gl.clearBufferfv(buffer, drawbuffer, values, optional srcOffset);
 *   void gl.clearBufferiv(buffer, drawbuffer, values, optional srcOffset);
 *   void gl.clearBufferuiv(buffer, drawbuffer, values, optional srcOffset);
 *   void gl.clearBufferfi(buffer, drawbuffer, depth, stencil);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/clearBuffer`
 */
gl.WebGL2RenderingContext.clear_bufferf = (function gl$WebGL2RenderingContext$clear_bufferf(var_args){
var args__42563__auto__ = [];
var len__42556__auto___42988 = arguments.length;
var i__42557__auto___42989 = (0);
while(true){
if((i__42557__auto___42989 < len__42556__auto___42988)){
args__42563__auto__.push((arguments[i__42557__auto___42989]));

var G__42990 = (i__42557__auto___42989 + (1));
i__42557__auto___42989 = G__42990;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.clear_bufferf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.clear_bufferf.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.clearBufferf,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.clear_bufferf.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.clear_bufferf.cljs$lang$applyTo = (function (seq42986){
var G__42987 = cljs.core.first.call(null,seq42986);
var seq42986__$1 = cljs.core.next.call(null,seq42986);
return gl.WebGL2RenderingContext.clear_bufferf.cljs$core$IFn$_invoke$arity$variadic(G__42987,seq42986__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.clearBuffer[fiuv]() methods of the
 *   2 API clear buffers from the currently bound framebuffer.
 * 
 *   `void gl.clearBufferfv(buffer, drawbuffer, values, optional srcOffset);
 *   void gl.clearBufferiv(buffer, drawbuffer, values, optional srcOffset);
 *   void gl.clearBufferuiv(buffer, drawbuffer, values, optional srcOffset);
 *   void gl.clearBufferfi(buffer, drawbuffer, depth, stencil);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/clearBuffer`
 */
gl.WebGL2RenderingContext.clear_bufferi = (function gl$WebGL2RenderingContext$clear_bufferi(var_args){
var args__42563__auto__ = [];
var len__42556__auto___42993 = arguments.length;
var i__42557__auto___42994 = (0);
while(true){
if((i__42557__auto___42994 < len__42556__auto___42993)){
args__42563__auto__.push((arguments[i__42557__auto___42994]));

var G__42995 = (i__42557__auto___42994 + (1));
i__42557__auto___42994 = G__42995;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.clear_bufferi.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.clear_bufferi.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.clearBufferi,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.clear_bufferi.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.clear_bufferi.cljs$lang$applyTo = (function (seq42991){
var G__42992 = cljs.core.first.call(null,seq42991);
var seq42991__$1 = cljs.core.next.call(null,seq42991);
return gl.WebGL2RenderingContext.clear_bufferi.cljs$core$IFn$_invoke$arity$variadic(G__42992,seq42991__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.clearBuffer[fiuv]() methods of the
 *   2 API clear buffers from the currently bound framebuffer.
 * 
 *   `void gl.clearBufferfv(buffer, drawbuffer, values, optional srcOffset);
 *   void gl.clearBufferiv(buffer, drawbuffer, values, optional srcOffset);
 *   void gl.clearBufferuiv(buffer, drawbuffer, values, optional srcOffset);
 *   void gl.clearBufferfi(buffer, drawbuffer, depth, stencil);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/clearBuffer`
 */
gl.WebGL2RenderingContext.clear_bufferu = (function gl$WebGL2RenderingContext$clear_bufferu(var_args){
var args__42563__auto__ = [];
var len__42556__auto___42998 = arguments.length;
var i__42557__auto___42999 = (0);
while(true){
if((i__42557__auto___42999 < len__42556__auto___42998)){
args__42563__auto__.push((arguments[i__42557__auto___42999]));

var G__43000 = (i__42557__auto___42999 + (1));
i__42557__auto___42999 = G__43000;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.clear_bufferu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.clear_bufferu.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.clearBufferu,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.clear_bufferu.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.clear_bufferu.cljs$lang$applyTo = (function (seq42996){
var G__42997 = cljs.core.first.call(null,seq42996);
var seq42996__$1 = cljs.core.next.call(null,seq42996);
return gl.WebGL2RenderingContext.clear_bufferu.cljs$core$IFn$_invoke$arity$variadic(G__42997,seq42996__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.clearBuffer[fiuv]() methods of the
 *   2 API clear buffers from the currently bound framebuffer.
 * 
 *   `void gl.clearBufferfv(buffer, drawbuffer, values, optional srcOffset);
 *   void gl.clearBufferiv(buffer, drawbuffer, values, optional srcOffset);
 *   void gl.clearBufferuiv(buffer, drawbuffer, values, optional srcOffset);
 *   void gl.clearBufferfi(buffer, drawbuffer, depth, stencil);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/clearBuffer`
 */
gl.WebGL2RenderingContext.clear_bufferv = (function gl$WebGL2RenderingContext$clear_bufferv(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43003 = arguments.length;
var i__42557__auto___43004 = (0);
while(true){
if((i__42557__auto___43004 < len__42556__auto___43003)){
args__42563__auto__.push((arguments[i__42557__auto___43004]));

var G__43005 = (i__42557__auto___43004 + (1));
i__42557__auto___43004 = G__43005;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.clear_bufferv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.clear_bufferv.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.clearBufferv,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.clear_bufferv.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.clear_bufferv.cljs$lang$applyTo = (function (seq43001){
var G__43002 = cljs.core.first.call(null,seq43001);
var seq43001__$1 = cljs.core.next.call(null,seq43001);
return gl.WebGL2RenderingContext.clear_bufferv.cljs$core$IFn$_invoke$arity$variadic(G__43002,seq43001__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.clientWaitSync() method of the WebGL
 *   API blocks and waits for a `gl.WebGLSync` object to become signaled
 *   a given timeout to be passed.
 * 
 *   `GLenum gl.clientWaitSync(sync, flags, timeout);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/clientWaitSync`
 */
gl.WebGL2RenderingContext.client_wait_sync = (function gl$WebGL2RenderingContext$client_wait_sync(this$,sync,flags,timeout){
return this$.clientWaitSync(sync,flags,timeout);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.compressedTexSubImage3D() method of
 *   WebGL API specifies a three-dimensional sub-rectangle for a texture
 *   in a compressed format.
 * 
 *   `// read from the buffer bound to gl.PIXEL_UNPACK_BUFFER
 *   void gl.compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, offset);
 * 
 *   void gl.compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, ArrayBufferView srcData, optional srcOffset, optional srcLengthOverride);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/compressedTexSubImage3D`
 */
gl.WebGL2RenderingContext.compressed_tex_sub_image_3d = (function gl$WebGL2RenderingContext$compressed_tex_sub_image_3d(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43008 = arguments.length;
var i__42557__auto___43009 = (0);
while(true){
if((i__42557__auto___43009 < len__42556__auto___43008)){
args__42563__auto__.push((arguments[i__42557__auto___43009]));

var G__43010 = (i__42557__auto___43009 + (1));
i__42557__auto___43009 = G__43010;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.compressed_tex_sub_image_3d.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.compressed_tex_sub_image_3d.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.compressedTexSubImage3D,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.compressed_tex_sub_image_3d.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.compressed_tex_sub_image_3d.cljs$lang$applyTo = (function (seq43006){
var G__43007 = cljs.core.first.call(null,seq43006);
var seq43006__$1 = cljs.core.next.call(null,seq43006);
return gl.WebGL2RenderingContext.compressed_tex_sub_image_3d.cljs$core$IFn$_invoke$arity$variadic(G__43007,seq43006__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.copyBufferSubData() method of the
 *   2 API copies part of the data of a buffer to another buffer.
 * 
 *   `void gl.copyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/copyBufferSubData`
 */
gl.WebGL2RenderingContext.copy_buffer_sub_data = (function gl$WebGL2RenderingContext$copy_buffer_sub_data(this$,read_target,write_target,read_offset,write_offset,size){
return this$.copyBufferSubData(read_target,write_target,read_offset,write_offset,size);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.copyTexSubImage3D() method of the
 *   API copies pixels from the current `gl.WebGLFramebuffer` into
 *   existing 3D texture sub-image.
 * 
 *   `void gl.copyTexSubImage3D(target, level, xoffset, yoffset, zoffset, x, y, width, height);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/copyTexSubImage3D`
 */
gl.WebGL2RenderingContext.copy_tex_sub_image_3d = (function gl$WebGL2RenderingContext$copy_tex_sub_image_3d(this$,target,level,xoffset,yoffset,zoffset,x,y,width,height){
return this$.copyTexSubImage3D(target,level,xoffset,yoffset,zoffset,x,y,width,height);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.createQuery() method of the WebGL
 *   API creates and initializes `gl.WebGLQuery` objects, which provide
 *   to asynchronously query for information.
 * 
 *   `WebGLQuery gl.createQuery();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/createQuery`
 */
gl.WebGL2RenderingContext.create_query = (function gl$WebGL2RenderingContext$create_query(this$){
return this$.createQuery();
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.createSampler() method of the WebGL
 *   API creates and initializes `gl.WebGLSampler` objects.
 * 
 *   `WebGLSampler gl.createSampler();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/createSampler`
 */
gl.WebGL2RenderingContext.create_sampler = (function gl$WebGL2RenderingContext$create_sampler(this$){
return this$.createSampler();
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.createTransformFeedback() method of
 *   WebGL 2 API creates and initializes `gl.WebGLTransformFeedback`
 * 
 *   `WebGLTransformFeedback gl.createTransformFeedback();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/createTransformFeedback`
 */
gl.WebGL2RenderingContext.create_transform_feedback = (function gl$WebGL2RenderingContext$create_transform_feedback(this$){
return this$.createTransformFeedback();
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.createVertexArray() method of the
 *   2 API creates and initializes a `gl.WebGLVertexArrayObject` object
 *   represents a vertex array object (VAO) pointing to vertex array
 *   and which provides names for different sets of vertex data.
 * 
 *   `WebGLVertexArrayObject gl.createVertexArray();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/createVertexArray`
 */
gl.WebGL2RenderingContext.create_vertex_array = (function gl$WebGL2RenderingContext$create_vertex_array(this$){
return this$.createVertexArray();
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.deleteQuery() method of the WebGL
 *   API deletes a given `gl.WebGLQuery` object.
 * 
 *   `void gl.deleteQuery(query);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/deleteQuery`
 */
gl.WebGL2RenderingContext.delete_query = (function gl$WebGL2RenderingContext$delete_query(this$,query){
return this$.deleteQuery(query);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.deleteSampler() method of the WebGL
 *   API deletes a given `gl.WebGLSampler` object.
 * 
 *   `void gl.deleteSampler(sampler);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/deleteSampler`
 */
gl.WebGL2RenderingContext.delete_sampler = (function gl$WebGL2RenderingContext$delete_sampler(this$,sampler){
return this$.deleteSampler(sampler);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.deleteSync() method of the WebGL 2
 *   deletes a given `gl.WebGLSync` object.
 * 
 *   `void gl.deleteSync(sync);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/deleteSync`
 */
gl.WebGL2RenderingContext.delete_sync = (function gl$WebGL2RenderingContext$delete_sync(this$,sync){
return this$.deleteSync(sync);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.deleteTransformFeedback() method of
 *   WebGL 2 API deletes a given `gl.WebGLTransformFeedback` object.
 * 
 *   `void gl.deleteTransformFeedback(transformFeedback);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/deleteTransformFeedback`
 */
gl.WebGL2RenderingContext.delete_transform_feedback = (function gl$WebGL2RenderingContext$delete_transform_feedback(this$,transform_feedback){
return this$.deleteTransformFeedback(transform_feedback);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.deleteVertexArray() method of the
 *   2 API deletes a given `gl.WebGLVertexArrayObject` object.
 * 
 *   `void gl.deleteVertexArray(vertexArray);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/deleteVertexArray`
 */
gl.WebGL2RenderingContext.delete_vertex_array = (function gl$WebGL2RenderingContext$delete_vertex_array(this$,vertex_array){
return this$.deleteVertexArray(vertex_array);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.drawArraysInstanced() method of the
 *   2 API renders primitives from array data like the `web.gl.drawArrays()`
 *   In addition, it can execute multiple instances of the range of
 * 
 *   `void gl.drawArraysInstanced(mode, first, count, instanceCount);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced`
 */
gl.WebGL2RenderingContext.draw_arrays_instanced = (function gl$WebGL2RenderingContext$draw_arrays_instanced(this$,mode,first,count,instance_count){
return this$.drawArraysInstanced(mode,first,count,instance_count);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.drawBuffers() method of the WebGL
 *   API defines draw buffers to which fragment colors are written
 *   The draw buffer settings are part of the state of the currently
 *   framebuffer or the drawingbuffer if no framebuffer is bound.
 * 
 *   `void gl.drawBuffers(buffers);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/drawBuffers`
 */
gl.WebGL2RenderingContext.draw_buffers = (function gl$WebGL2RenderingContext$draw_buffers(this$,buffers){
return this$.drawBuffers(buffers);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.drawElementsInstanced() method of
 *   WebGL 2 API renders primitives from array data like the `web.gl.drawElements()`
 *   In addition, it can execute multiple instances of a set of elements.
 * 
 *   `void gl.drawElementsInstanced(mode, count, type, offset, instanceCount);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced`
 */
gl.WebGL2RenderingContext.draw_elements_instanced = (function gl$WebGL2RenderingContext$draw_elements_instanced(this$,mode,count,type,offset,instance_count){
return this$.drawElementsInstanced(mode,count,type,offset,instance_count);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.drawRangeElements() method of the
 *   API renders primitives from array data in a given range.
 * 
 *   `void gl.drawRangeElements(mode, start, end, count, type, offset);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/drawRangeElements`
 */
gl.WebGL2RenderingContext.draw_range_elements = (function gl$WebGL2RenderingContext$draw_range_elements(this$,mode,start,end,count,type,offset){
return this$.drawRangeElements(mode,start,end,count,type,offset);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.endQuery() method of the WebGL 2 API
 *   the end of a given query target.
 * 
 *   `void gl.endQuery(target);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/endQuery`
 */
gl.WebGL2RenderingContext.end_query = (function gl$WebGL2RenderingContext$end_query(this$,target){
return this$.endQuery(target);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.endTransformFeedback() method of the
 *   2 API ends a transform feedback operation.
 * 
 *   `void gl.endTransformFeedback();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/endTransformFeedback`
 */
gl.WebGL2RenderingContext.end_transform_feedback = (function gl$WebGL2RenderingContext$end_transform_feedback(this$){
return this$.endTransformFeedback();
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.fenceSync() method of the WebGL 2
 *   creates a new `gl.WebGLSync` object and inserts it into the GL
 *   stream.
 * 
 *   `WebGLSync gl.fenceSync(condition, flags);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/fenceSync`
 */
gl.WebGL2RenderingContext.fence_sync = (function gl$WebGL2RenderingContext$fence_sync(this$,condition,flags){
return this$.fenceSync(condition,flags);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.framebufferTextureLayer() method of
 *   WebGL 2 API attaches a single layer of a texture to a framebuffer.
 * 
 *   `void gl.framebufferTextureLayer(target, attachment, texture, level, layer);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/framebufferTextureLayer`
 */
gl.WebGL2RenderingContext.framebuffer_texture_layer = (function gl$WebGL2RenderingContext$framebuffer_texture_layer(this$,target,attachment,texture,level,layer){
return this$.framebufferTextureLayer(target,attachment,texture,level,layer);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.getActiveUniformBlockName() method
 *   the WebGL 2 API retrieves the name of the active uniform block
 *   a given index within a `gl.WebGLProgram`.
 * 
 *   `DOMString gl.getActiveUniformBlockName(program, uniformBlockIndex);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockName`
 */
gl.WebGL2RenderingContext.get_active_uniform_block_name = (function gl$WebGL2RenderingContext$get_active_uniform_block_name(this$,program,uniform_block_index){
return this$.getActiveUniformBlockName(program,uniform_block_index);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.getActiveUniformBlockParameter() method
 *   the WebGL 2 API retrieves information about an active uniform
 *   within a `gl.WebGLProgram`.
 * 
 *   `any gl.getActiveUniformBlockParameter(program, uniformBlockIndex, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockParameter`
 */
gl.WebGL2RenderingContext.get_active_uniform_block_parameter = (function gl$WebGL2RenderingContext$get_active_uniform_block_parameter(this$,program,uniform_block_index,pname){
return this$.getActiveUniformBlockParameter(program,uniform_block_index,pname);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.getActiveUniforms() method of the
 *   2 API retrieves information about active uniforms within a `gl.WebGLProgram`.
 * 
 *   `any gl.getActiveUniforms(program, uniformIndices, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getActiveUniforms`
 */
gl.WebGL2RenderingContext.get_active_uniforms = (function gl$WebGL2RenderingContext$get_active_uniforms(this$,program,uniform_indices,pname){
return this$.getActiveUniforms(program,uniform_indices,pname);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.getBufferSubData() method of the WebGL
 *   API reads data from a buffer binding point and writes them to
 *   `web.ArrayBuffer` or `web.SharedArrayBuffer`.
 * 
 *   `void gl.getBufferSubData(target, srcByteOffset, ArrayBufferView dstData, optional dstOffset, optional length);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getBufferSubData`
 */
gl.WebGL2RenderingContext.get_buffer_sub_data = (function gl$WebGL2RenderingContext$get_buffer_sub_data(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43013 = arguments.length;
var i__42557__auto___43014 = (0);
while(true){
if((i__42557__auto___43014 < len__42556__auto___43013)){
args__42563__auto__.push((arguments[i__42557__auto___43014]));

var G__43015 = (i__42557__auto___43014 + (1));
i__42557__auto___43014 = G__43015;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.get_buffer_sub_data.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.get_buffer_sub_data.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getBufferSubData,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.get_buffer_sub_data.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.get_buffer_sub_data.cljs$lang$applyTo = (function (seq43011){
var G__43012 = cljs.core.first.call(null,seq43011);
var seq43011__$1 = cljs.core.next.call(null,seq43011);
return gl.WebGL2RenderingContext.get_buffer_sub_data.cljs$core$IFn$_invoke$arity$variadic(G__43012,seq43011__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.getFragDataLocation() method of the
 *   2 API returns the binding of color numbers to user-defined varying
 *   variables.
 * 
 *   `GLint gl.getFragDataLocation(program, name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getFragDataLocation`
 */
gl.WebGL2RenderingContext.get_frag_data_location = (function gl$WebGL2RenderingContext$get_frag_data_location(this$,program,name){
return this$.getFragDataLocation(program,name);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.getIndexedParameter() method of the
 *   2 API returns indexed information about a given target.
 * 
 *   `any gl.getIndexedParameter(target, index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getIndexedParameter`
 */
gl.WebGL2RenderingContext.get_indexed_parameter = (function gl$WebGL2RenderingContext$get_indexed_parameter(this$,target,index){
return this$.getIndexedParameter(target,index);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.getInternalformatParameter() method
 *   the WebGL 2 API returns information about implementation-dependent
 *   for internal formats.
 * 
 *   `any gl.getInternalformatParameter(target, internalformat, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getInternalformatParameter`
 */
gl.WebGL2RenderingContext.get_internalformat_parameter = (function gl$WebGL2RenderingContext$get_internalformat_parameter(this$,target,internalformat,pname){
return this$.getInternalformatParameter(target,internalformat,pname);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.getQuery() method of the WebGL 2 API
 *   the currently active `gl.WebGLQuery` for the target, or `web.null`.
 * 
 *   `WebGLQuery gl.getQuery(target, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getQuery`
 */
gl.WebGL2RenderingContext.get_query = (function gl$WebGL2RenderingContext$get_query(this$,target,pname){
return this$.getQuery(target,pname);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.getQueryParameter() method of the
 *   2 API returns parameter information of a `gl.WebGLQuery` object.
 * 
 *   `any gl.getQueryParameter(query, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getQueryParameter`
 */
gl.WebGL2RenderingContext.get_query_parameter = (function gl$WebGL2RenderingContext$get_query_parameter(this$,query,pname){
return this$.getQueryParameter(query,pname);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.getSamplerParameter() method of the
 *   2 API returns parameter information of a `gl.WebGLSampler` object.
 * 
 *   `any gl.getSamplerParameter(sampler, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getSamplerParameter`
 */
gl.WebGL2RenderingContext.get_sampler_parameter = (function gl$WebGL2RenderingContext$get_sampler_parameter(this$,sampler,pname){
return this$.getSamplerParameter(sampler,pname);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.getSyncParameter() method of the WebGL
 *   API returns parameter information of a `gl.WebGLSync` object.
 * 
 *   `any gl.getSyncParameter(sync, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getSyncParameter`
 */
gl.WebGL2RenderingContext.get_sync_parameter = (function gl$WebGL2RenderingContext$get_sync_parameter(this$,sync,pname){
return this$.getSyncParameter(sync,pname);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.getTransformFeedbackVarying() method
 *   the WebGL 2 API returns information about varying variables from
 *   buffers.
 * 
 *   `WebGLActiveInfo gl.getTransformFeedbackVarying(program, index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getTransformFeedbackVarying`
 */
gl.WebGL2RenderingContext.get_transform_feedback_varying = (function gl$WebGL2RenderingContext$get_transform_feedback_varying(this$,program,index){
return this$.getTransformFeedbackVarying(program,index);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.getUniformBlockIndex() method of the
 *   2 API retrieves the index of a uniform block within a `gl.WebGLProgram`.
 * 
 *   `GLuint gl.getUniformBlockIndex(program, uniformBlockName);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getUniformBlockIndex`
 */
gl.WebGL2RenderingContext.get_uniform_block_index = (function gl$WebGL2RenderingContext$get_uniform_block_index(this$,program,uniform_block_name){
return this$.getUniformBlockIndex(program,uniform_block_name);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.getUniformIndices() method of the
 *   2 API retrieves the indices of a number of uniforms within a
 * 
 *   `sequence<GLuint> gl.getUniformIndices(program, uniformNames);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getUniformIndices`
 */
gl.WebGL2RenderingContext.get_uniform_indices = (function gl$WebGL2RenderingContext$get_uniform_indices(this$,program,uniform_names){
return this$.getUniformIndices(program,uniform_names);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.invalidateFramebuffer() method of
 *   WebGL 2 API invalidates the contents of attachments in a framebuffer.
 * 
 *   `void gl.invalidateFramebuffer(target, attachments);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/invalidateFramebuffer`
 */
gl.WebGL2RenderingContext.invalidate_framebuffer = (function gl$WebGL2RenderingContext$invalidate_framebuffer(this$,target,attachments){
return this$.invalidateFramebuffer(target,attachments);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.invalidateSubFramebuffer() method
 *   the WebGL 2 API invalidates portions of the contents of attachments
 *   a framebuffer.
 * 
 *   `void gl.invalidateSubFramebuffer(target, attachments, x, y, width, height);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/invalidateSubFramebuffer`
 */
gl.WebGL2RenderingContext.invalidate_sub_framebuffer = (function gl$WebGL2RenderingContext$invalidate_sub_framebuffer(this$,target,attachments,x,y,width,height){
return this$.invalidateSubFramebuffer(target,attachments,x,y,width,height);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.isQuery() method of the WebGL 2 API
 *   true if the passed object is a valid `gl.WebGLQuery` object.
 * 
 *   `GLBoolean gl.isQuery(query);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/isQuery`
 */
gl.WebGL2RenderingContext.is_query = (function gl$WebGL2RenderingContext$is_query(this$,query){
return this$.isQuery(query);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.isSampler() method of the WebGL 2
 *   returns true if the passed object is a valid `gl.WebGLSampler`
 * 
 *   `GLboolean gl.isSampler(sampler);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/isSampler`
 */
gl.WebGL2RenderingContext.is_sampler = (function gl$WebGL2RenderingContext$is_sampler(this$,sampler){
return this$.isSampler(sampler);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.isSync() method of the WebGL 2 API
 *   true if the passed object is a valid `gl.WebGLSync` object.
 * 
 *   `GLboolean gl.isSync(sync);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/isSync`
 */
gl.WebGL2RenderingContext.is_sync = (function gl$WebGL2RenderingContext$is_sync(this$,sync){
return this$.isSync(sync);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.isTransformFeedback() method of the
 *   2 API returns true if the passed object is a valid `gl.WebGLTransformFeedback`
 * 
 *   `GLboolean gl.isTransformFeedback(transformFeedback);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/isTransformFeedback`
 */
gl.WebGL2RenderingContext.is_transform_feedback = (function gl$WebGL2RenderingContext$is_transform_feedback(this$,transform_feedback){
return this$.isTransformFeedback(transform_feedback);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.isVertexArray() method of the WebGL
 *   returns true if the passed object is a valid `gl.WebGLVertexArrayObject`
 * 
 *   `GLBoolean gl.isVertexArray(vertexArray);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/isVertexArray`
 */
gl.WebGL2RenderingContext.is_vertex_array = (function gl$WebGL2RenderingContext$is_vertex_array(this$,vertex_array){
return this$.isVertexArray(vertex_array);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.pauseTransformFeedback() method of
 *   WebGL 2 API pauses a transform feedback operation.
 * 
 *   `void gl.pauseTransformFeedback();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/pauseTransformFeedback`
 */
gl.WebGL2RenderingContext.pause_transform_feedback = (function gl$WebGL2RenderingContext$pause_transform_feedback(this$){
return this$.pauseTransformFeedback();
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.readBuffer() method of the WebGL 2
 *   selects a color buffer as the source for pixels for subsequent
 *   to `web.copyTexImage2D`, `web.copyTexSubImage2D`, `web.copyTexSubImage3D`
 *   `web.readPixels`.
 * 
 *   `void gl.readBuffer(src);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/readBuffer`
 */
gl.WebGL2RenderingContext.read_buffer = (function gl$WebGL2RenderingContext$read_buffer(this$,src){
return this$.readBuffer(src);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.renderbufferStorageMultisample() method
 *   the WebGL 2 API returns creates and initializes a renderbuffer
 *   data store and allows specifying a number of samples to be used.
 * 
 *   `void gl.renderbufferStorageMultisample(target, samples, internalFormat, width, height);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample`
 */
gl.WebGL2RenderingContext.renderbuffer_storage_multisample = (function gl$WebGL2RenderingContext$renderbuffer_storage_multisample(this$,target,samples,internal_format,width,height){
return this$.renderbufferStorageMultisample(target,samples,internal_format,width,height);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.resumeTransformFeedback() method of
 *   WebGL 2 API resumes a transform feedback operation.
 * 
 *   `void gl.resumeTransformFeedback();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/resumeTransformFeedback`
 */
gl.WebGL2RenderingContext.resume_transform_feedback = (function gl$WebGL2RenderingContext$resume_transform_feedback(this$){
return this$.resumeTransformFeedback();
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.samplerParameter[if]() methods of
 *   WebGL 2 API set `gl.WebGLSampler` parameters.
 * 
 *   `void gl.samplerParameteri(sampler, pname, param);
 *   void gl.samplerParameterf(sampler, pname, param);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/samplerParameter`
 */
gl.WebGL2RenderingContext.sampler_parameteri = (function gl$WebGL2RenderingContext$sampler_parameteri(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43018 = arguments.length;
var i__42557__auto___43019 = (0);
while(true){
if((i__42557__auto___43019 < len__42556__auto___43018)){
args__42563__auto__.push((arguments[i__42557__auto___43019]));

var G__43020 = (i__42557__auto___43019 + (1));
i__42557__auto___43019 = G__43020;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.sampler_parameteri.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.sampler_parameteri.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.samplerParameteri,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.sampler_parameteri.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.sampler_parameteri.cljs$lang$applyTo = (function (seq43016){
var G__43017 = cljs.core.first.call(null,seq43016);
var seq43016__$1 = cljs.core.next.call(null,seq43016);
return gl.WebGL2RenderingContext.sampler_parameteri.cljs$core$IFn$_invoke$arity$variadic(G__43017,seq43016__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.samplerParameter[if]() methods of
 *   WebGL 2 API set `gl.WebGLSampler` parameters.
 * 
 *   `void gl.samplerParameteri(sampler, pname, param);
 *   void gl.samplerParameterf(sampler, pname, param);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/samplerParameter`
 */
gl.WebGL2RenderingContext.sampler_parameterf = (function gl$WebGL2RenderingContext$sampler_parameterf(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43023 = arguments.length;
var i__42557__auto___43024 = (0);
while(true){
if((i__42557__auto___43024 < len__42556__auto___43023)){
args__42563__auto__.push((arguments[i__42557__auto___43024]));

var G__43025 = (i__42557__auto___43024 + (1));
i__42557__auto___43024 = G__43025;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.sampler_parameterf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.sampler_parameterf.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.samplerParameterf,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.sampler_parameterf.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.sampler_parameterf.cljs$lang$applyTo = (function (seq43021){
var G__43022 = cljs.core.first.call(null,seq43021);
var seq43021__$1 = cljs.core.next.call(null,seq43021);
return gl.WebGL2RenderingContext.sampler_parameterf.cljs$core$IFn$_invoke$arity$variadic(G__43022,seq43021__$1);
});

/**
 * Method.
 * 
 *   The WebGLRenderingContext.texImage3D() method of the WebGL API
 *   a three-dimensional texture image.
 * 
 *   `void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, GLintptr offset);
 * 
 *   void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, HTMLCanvasElement source);
 *   void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, HTMLImageElement source);
 *   void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, HTMLVideoElement source);
 *   void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, ImageBitmap source);
 *   void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, ImageData source);
 *   void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, ArrayBufferView? srcData);
 *   void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, ArrayBufferView srcData, srcOffset);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/texImage3D`
 */
gl.WebGL2RenderingContext.tex_image_3d = (function gl$WebGL2RenderingContext$tex_image_3d(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43028 = arguments.length;
var i__42557__auto___43029 = (0);
while(true){
if((i__42557__auto___43029 < len__42556__auto___43028)){
args__42563__auto__.push((arguments[i__42557__auto___43029]));

var G__43030 = (i__42557__auto___43029 + (1));
i__42557__auto___43029 = G__43030;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.tex_image_3d.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.tex_image_3d.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.texImage3D,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.tex_image_3d.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.tex_image_3d.cljs$lang$applyTo = (function (seq43026){
var G__43027 = cljs.core.first.call(null,seq43026);
var seq43026__$1 = cljs.core.next.call(null,seq43026);
return gl.WebGL2RenderingContext.tex_image_3d.cljs$core$IFn$_invoke$arity$variadic(G__43027,seq43026__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.texStorage2D() method of the WebGL
 *   specifies all levels of two-dimensional texture storage.
 * 
 *   `void gl.texStorage2D(target, levels, internalformat, width, height);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/texStorage2D`
 */
gl.WebGL2RenderingContext.tex_storage_2d = (function gl$WebGL2RenderingContext$tex_storage_2d(this$,target,levels,internalformat,width,height){
return this$.texStorage2D(target,levels,internalformat,width,height);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.texStorage3D() method of the WebGL
 *   specifies all levels of a three-dimensional texture or two-dimensional
 *   texture.
 * 
 *   `void gl.texStorage3D(target, levels, internalformat, width, height, depth);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/texStorage3D`
 */
gl.WebGL2RenderingContext.tex_storage_3d = (function gl$WebGL2RenderingContext$tex_storage_3d(this$,target,levels,internalformat,width,height,depth){
return this$.texStorage3D(target,levels,internalformat,width,height,depth);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.texSubImage3D() method of the WebGL
 *   specifies a sub-rectangle of the current texture.
 * 
 *   `void gl.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, ArrayBufferView? srcData, optional srcOffset);
 * 
 *   void gl.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, ImageBitmap? pixels);
 * 
 *   void gl.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, ImageData? pixels);
 * 
 *   void gl.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, HTMLImageElement? pixels);
 * 
 *   void gl.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, HTMLCanvasElement? pixels);
 * 
 *   void gl.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, HTMLVideoElement? pixels);
 * 
 *   void gl.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, GLintptr offset);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/texSubImage3D`
 */
gl.WebGL2RenderingContext.tex_sub_image_3d = (function gl$WebGL2RenderingContext$tex_sub_image_3d(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43033 = arguments.length;
var i__42557__auto___43034 = (0);
while(true){
if((i__42557__auto___43034 < len__42556__auto___43033)){
args__42563__auto__.push((arguments[i__42557__auto___43034]));

var G__43035 = (i__42557__auto___43034 + (1));
i__42557__auto___43034 = G__43035;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.tex_sub_image_3d.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.tex_sub_image_3d.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.texSubImage3D,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.tex_sub_image_3d.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.tex_sub_image_3d.cljs$lang$applyTo = (function (seq43031){
var G__43032 = cljs.core.first.call(null,seq43031);
var seq43031__$1 = cljs.core.next.call(null,seq43031);
return gl.WebGL2RenderingContext.tex_sub_image_3d.cljs$core$IFn$_invoke$arity$variadic(G__43032,seq43031__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.transformFeedbackVaryings() method
 *   the WebGL 2 API specifies values to record in `gl.WebGLTransformFeedback`
 * 
 *   `void gl.transformFeedbackVaryings(program, varyings, bufferMode);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/transformFeedbackVaryings`
 */
gl.WebGL2RenderingContext.transform_feedback_varyings = (function gl$WebGL2RenderingContext$transform_feedback_varyings(this$,program,varyings,buffer_mode){
return this$.transformFeedbackVaryings(program,varyings,buffer_mode);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.uniform[1234][uif][v]() methods of
 *   WebGL API specify values of uniform variables.
 * 
 *   `void gl.uniform1ui(location, v0);
 *   void gl.uniform2ui(location, v0, v1);
 *   void gl.uniform3ui(location, v0, v1, v2);
 *   void gl.uniform4ui(location, v0, v1, v2, v3);
 *   void gl.uniform1fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform2fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform3fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform4fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform1iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform2iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform3iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform4iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform1uiv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform2uiv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform3uiv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform4uiv(location, data, optional srcOffset, optional srcLength);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniform`
 */
gl.WebGL2RenderingContext.uniform_111 = (function gl$WebGL2RenderingContext$uniform_111(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43038 = arguments.length;
var i__42557__auto___43039 = (0);
while(true){
if((i__42557__auto___43039 < len__42556__auto___43038)){
args__42563__auto__.push((arguments[i__42557__auto___43039]));

var G__43040 = (i__42557__auto___43039 + (1));
i__42557__auto___43039 = G__43040;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.uniform_111.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.uniform_111.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.uniform111,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.uniform_111.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.uniform_111.cljs$lang$applyTo = (function (seq43036){
var G__43037 = cljs.core.first.call(null,seq43036);
var seq43036__$1 = cljs.core.next.call(null,seq43036);
return gl.WebGL2RenderingContext.uniform_111.cljs$core$IFn$_invoke$arity$variadic(G__43037,seq43036__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.uniform[1234][uif][v]() methods of
 *   WebGL API specify values of uniform variables.
 * 
 *   `void gl.uniform1ui(location, v0);
 *   void gl.uniform2ui(location, v0, v1);
 *   void gl.uniform3ui(location, v0, v1, v2);
 *   void gl.uniform4ui(location, v0, v1, v2, v3);
 *   void gl.uniform1fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform2fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform3fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform4fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform1iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform2iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform3iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform4iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform1uiv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform2uiv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform3uiv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform4uiv(location, data, optional srcOffset, optional srcLength);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniform`
 */
gl.WebGL2RenderingContext.uniform_222 = (function gl$WebGL2RenderingContext$uniform_222(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43043 = arguments.length;
var i__42557__auto___43044 = (0);
while(true){
if((i__42557__auto___43044 < len__42556__auto___43043)){
args__42563__auto__.push((arguments[i__42557__auto___43044]));

var G__43045 = (i__42557__auto___43044 + (1));
i__42557__auto___43044 = G__43045;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.uniform_222.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.uniform_222.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.uniform222,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.uniform_222.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.uniform_222.cljs$lang$applyTo = (function (seq43041){
var G__43042 = cljs.core.first.call(null,seq43041);
var seq43041__$1 = cljs.core.next.call(null,seq43041);
return gl.WebGL2RenderingContext.uniform_222.cljs$core$IFn$_invoke$arity$variadic(G__43042,seq43041__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.uniform[1234][uif][v]() methods of
 *   WebGL API specify values of uniform variables.
 * 
 *   `void gl.uniform1ui(location, v0);
 *   void gl.uniform2ui(location, v0, v1);
 *   void gl.uniform3ui(location, v0, v1, v2);
 *   void gl.uniform4ui(location, v0, v1, v2, v3);
 *   void gl.uniform1fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform2fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform3fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform4fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform1iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform2iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform3iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform4iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform1uiv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform2uiv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform3uiv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform4uiv(location, data, optional srcOffset, optional srcLength);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniform`
 */
gl.WebGL2RenderingContext.uniform_333 = (function gl$WebGL2RenderingContext$uniform_333(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43048 = arguments.length;
var i__42557__auto___43049 = (0);
while(true){
if((i__42557__auto___43049 < len__42556__auto___43048)){
args__42563__auto__.push((arguments[i__42557__auto___43049]));

var G__43050 = (i__42557__auto___43049 + (1));
i__42557__auto___43049 = G__43050;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.uniform_333.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.uniform_333.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.uniform333,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.uniform_333.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.uniform_333.cljs$lang$applyTo = (function (seq43046){
var G__43047 = cljs.core.first.call(null,seq43046);
var seq43046__$1 = cljs.core.next.call(null,seq43046);
return gl.WebGL2RenderingContext.uniform_333.cljs$core$IFn$_invoke$arity$variadic(G__43047,seq43046__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.uniform[1234][uif][v]() methods of
 *   WebGL API specify values of uniform variables.
 * 
 *   `void gl.uniform1ui(location, v0);
 *   void gl.uniform2ui(location, v0, v1);
 *   void gl.uniform3ui(location, v0, v1, v2);
 *   void gl.uniform4ui(location, v0, v1, v2, v3);
 *   void gl.uniform1fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform2fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform3fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform4fv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform1iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform2iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform3iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform4iv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform1uiv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform2uiv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform3uiv(location, data, optional srcOffset, optional srcLength);
 *   void gl.uniform4uiv(location, data, optional srcOffset, optional srcLength);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniform`
 */
gl.WebGL2RenderingContext.uniform_444 = (function gl$WebGL2RenderingContext$uniform_444(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43053 = arguments.length;
var i__42557__auto___43054 = (0);
while(true){
if((i__42557__auto___43054 < len__42556__auto___43053)){
args__42563__auto__.push((arguments[i__42557__auto___43054]));

var G__43055 = (i__42557__auto___43054 + (1));
i__42557__auto___43054 = G__43055;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.uniform_444.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.uniform_444.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.uniform444,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.uniform_444.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.uniform_444.cljs$lang$applyTo = (function (seq43051){
var G__43052 = cljs.core.first.call(null,seq43051);
var seq43051__$1 = cljs.core.next.call(null,seq43051);
return gl.WebGL2RenderingContext.uniform_444.cljs$core$IFn$_invoke$arity$variadic(G__43052,seq43051__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.uniformBlockBinding() method of the
 *   2 API assigns binding points for active uniform blocks.
 * 
 *   `void gl.uniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniformBlockBinding`
 */
gl.WebGL2RenderingContext.uniform_block_binding = (function gl$WebGL2RenderingContext$uniform_block_binding(this$,program,uniform_block_index,uniform_block_binding){
return this$.uniformBlockBinding(program,uniform_block_index,uniform_block_binding);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.uniformMatrix[234]x[234]fv() methods
 *   the WebGL 2 API specify matrix values for uniform variables.
 * 
 *   `void gl.uniformMatrix2fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix3x2fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix4x2fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix2x3fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix3fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix4x3fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix2x4fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix3x4fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix4fv(location, transpose, data, optional srcOffset, optional srcLength);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniformMatrix`
 */
gl.WebGL2RenderingContext.uniform_matrix_2x_2fv = (function gl$WebGL2RenderingContext$uniform_matrix_2x_2fv(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43058 = arguments.length;
var i__42557__auto___43059 = (0);
while(true){
if((i__42557__auto___43059 < len__42556__auto___43058)){
args__42563__auto__.push((arguments[i__42557__auto___43059]));

var G__43060 = (i__42557__auto___43059 + (1));
i__42557__auto___43059 = G__43060;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.uniform_matrix_2x_2fv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.uniform_matrix_2x_2fv.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.uniformMatrix2x2fv,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.uniform_matrix_2x_2fv.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.uniform_matrix_2x_2fv.cljs$lang$applyTo = (function (seq43056){
var G__43057 = cljs.core.first.call(null,seq43056);
var seq43056__$1 = cljs.core.next.call(null,seq43056);
return gl.WebGL2RenderingContext.uniform_matrix_2x_2fv.cljs$core$IFn$_invoke$arity$variadic(G__43057,seq43056__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.uniformMatrix[234]x[234]fv() methods
 *   the WebGL 2 API specify matrix values for uniform variables.
 * 
 *   `void gl.uniformMatrix2fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix3x2fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix4x2fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix2x3fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix3fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix4x3fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix2x4fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix3x4fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix4fv(location, transpose, data, optional srcOffset, optional srcLength);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniformMatrix`
 */
gl.WebGL2RenderingContext.uniform_matrix_3x_3fv = (function gl$WebGL2RenderingContext$uniform_matrix_3x_3fv(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43063 = arguments.length;
var i__42557__auto___43064 = (0);
while(true){
if((i__42557__auto___43064 < len__42556__auto___43063)){
args__42563__auto__.push((arguments[i__42557__auto___43064]));

var G__43065 = (i__42557__auto___43064 + (1));
i__42557__auto___43064 = G__43065;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.uniform_matrix_3x_3fv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.uniform_matrix_3x_3fv.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.uniformMatrix3x3fv,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.uniform_matrix_3x_3fv.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.uniform_matrix_3x_3fv.cljs$lang$applyTo = (function (seq43061){
var G__43062 = cljs.core.first.call(null,seq43061);
var seq43061__$1 = cljs.core.next.call(null,seq43061);
return gl.WebGL2RenderingContext.uniform_matrix_3x_3fv.cljs$core$IFn$_invoke$arity$variadic(G__43062,seq43061__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.uniformMatrix[234]x[234]fv() methods
 *   the WebGL 2 API specify matrix values for uniform variables.
 * 
 *   `void gl.uniformMatrix2fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix3x2fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix4x2fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix2x3fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix3fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix4x3fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix2x4fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix3x4fv(location, transpose, data, optional srcOffset, optional srcLength);
 *   void gl.uniformMatrix4fv(location, transpose, data, optional srcOffset, optional srcLength);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniformMatrix`
 */
gl.WebGL2RenderingContext.uniform_matrix_4x_4fv = (function gl$WebGL2RenderingContext$uniform_matrix_4x_4fv(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43068 = arguments.length;
var i__42557__auto___43069 = (0);
while(true){
if((i__42557__auto___43069 < len__42556__auto___43068)){
args__42563__auto__.push((arguments[i__42557__auto___43069]));

var G__43070 = (i__42557__auto___43069 + (1));
i__42557__auto___43069 = G__43070;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.uniform_matrix_4x_4fv.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.uniform_matrix_4x_4fv.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.uniformMatrix4x4fv,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.uniform_matrix_4x_4fv.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.uniform_matrix_4x_4fv.cljs$lang$applyTo = (function (seq43066){
var G__43067 = cljs.core.first.call(null,seq43066);
var seq43066__$1 = cljs.core.next.call(null,seq43066);
return gl.WebGL2RenderingContext.uniform_matrix_4x_4fv.cljs$core$IFn$_invoke$arity$variadic(G__43067,seq43066__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.vertexAttribDivisor() method of the
 *   2 API modifies the rate at which generic vertex attributes advance
 *   rendering multiple instances of primitives with `web.gl.drawArraysInstanced()`
 *   `web.gl.drawElementsInstanced()`.
 * 
 *   `void gl.vertexAttribDivisor(index, divisor);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor`
 */
gl.WebGL2RenderingContext.vertex_attrib_divisor = (function gl$WebGL2RenderingContext$vertex_attrib_divisor(this$,index,divisor){
return this$.vertexAttribDivisor(index,divisor);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.vertexAttribI4[u]i[v]() methods of
 *   WebGL 2 API specify integer values for generic vertex attributes.
 * 
 *   `void gl.vertexAttribI4i(index, v0, v1, v2, v3);
 *   void gl.vertexAttribI4ui(index, v0, v1, v2, v3);
 * 
 *   void gl.vertexAttribI4iv(index, value);
 *   void gl.vertexAttribI4uiv(index, value);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/vertexAttribI`
 */
gl.WebGL2RenderingContext.vertex_attrib_i_4uiu = (function gl$WebGL2RenderingContext$vertex_attrib_i_4uiu(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43073 = arguments.length;
var i__42557__auto___43074 = (0);
while(true){
if((i__42557__auto___43074 < len__42556__auto___43073)){
args__42563__auto__.push((arguments[i__42557__auto___43074]));

var G__43075 = (i__42557__auto___43074 + (1));
i__42557__auto___43074 = G__43075;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return gl.WebGL2RenderingContext.vertex_attrib_i_4uiu.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

gl.WebGL2RenderingContext.vertex_attrib_i_4uiu.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.vertexAttribI4uiu,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

gl.WebGL2RenderingContext.vertex_attrib_i_4uiu.cljs$lang$maxFixedArity = (1);

gl.WebGL2RenderingContext.vertex_attrib_i_4uiu.cljs$lang$applyTo = (function (seq43071){
var G__43072 = cljs.core.first.call(null,seq43071);
var seq43071__$1 = cljs.core.next.call(null,seq43071);
return gl.WebGL2RenderingContext.vertex_attrib_i_4uiu.cljs$core$IFn$_invoke$arity$variadic(G__43072,seq43071__$1);
});

/**
 * Method.
 * 
 *   The WebGL2RenderingContext.vertexAttribIPointer() method of the
 *   2 API specifies integer data formats and locations of vertex
 *   in a vertex attributes array.
 * 
 *   `void gl.vertexAttribIPointer(index, size, type, stride, offset);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer`
 */
gl.WebGL2RenderingContext.vertex_attrib_i_pointer = (function gl$WebGL2RenderingContext$vertex_attrib_i_pointer(this$,index,size,type,stride,offset){
return this$.vertexAttribIPointer(index,size,type,stride,offset);
});
/**
 * Method.
 * 
 *   The WebGL2RenderingContext.waitSync() method of the WebGL 2 API
 *   immediately, but waits on the GL server until the given `gl.WebGLSync`
 *   is signaled.
 * 
 *   `void gl.waitSync(sync, flags, timeout);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/waitSync`
 */
gl.WebGL2RenderingContext.wait_sync = (function gl$WebGL2RenderingContext$wait_sync(this$,sync,flags,timeout){
return this$.waitSync(sync,flags,timeout);
});

//# sourceMappingURL=WebGL2RenderingContext.js.map?rel=1565798803410
