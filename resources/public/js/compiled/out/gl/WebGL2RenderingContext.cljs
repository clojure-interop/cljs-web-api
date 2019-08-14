(ns gl.WebGL2RenderingContext
  "The WebGL2RenderingContext interface provides the OpenGL ES 3.0
  context for the drawing surface of an HTML `web.<canvas>` element."
  (:refer-clojure :exclude []))

(defn begin-query
  "Method.

  The WebGL2RenderingContext.beginQuery() method of the WebGL 2
  starts an asynchronous query. The target parameter indicates
  kind of query to begin.

  `void gl.beginQuery(target, query);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/beginQuery`"
  [this target query]
  (-> this (.beginQuery target query)))

(defn begin-transform-feedback
  "Method.

  The WebGL2RenderingContext.beginTransformFeedback() method of
  WebGL 2 API starts a transform feedback operation.

  `void gl.beginTransformFeedback(primitiveMode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/beginTransformFeedback`"
  [this primitive-mode]
  (-> this (.beginTransformFeedback primitive-mode)))

(defn bind-buffer-base
  "Method.

  The WebGL2RenderingContext.bindBufferBase() method of the WebGL
  API binds a given `gl.WebGLBuffer` to a given binding point (target)
  a given index.

  `void gl.bindBufferBase(target, index, buffer);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/bindBufferBase`"
  [this target index buffer]
  (-> this (.bindBufferBase target index buffer)))

(defn bind-buffer-range
  "Method.

  The WebGL2RenderingContext.bindBufferRange() method of the WebGL
  API binds a range of a given `gl.WebGLBuffer` to a given binding
  (target) at a given index.

  `void gl.bindBufferRange(target, index, buffer, offset, size);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/bindBufferRange`"
  [this target index buffer offset size]
  (-> this (.bindBufferRange target index buffer offset size)))

(defn bind-sampler
  "Method.

  The WebGL2RenderingContext.bindSampler() method of the WebGL
  API binds a passed `gl.WebGLSampler` object to the texture unit
  the passed index.

  `void gl.bindSampler(unit, sampler);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/bindSampler`"
  [this unit sampler]
  (-> this (.bindSampler unit sampler)))

(defn bind-transform-feedback
  "Method.

  The WebGL2RenderingContext.bindTransformFeedback() method of
  WebGL 2 API binds a passed `gl.WebGLTransformFeedback` object
  the current GL state.

  `void gl.bindTransformFeedback(target, transformFeedback);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/bindTransformFeedback`"
  [this target transform-feedback]
  (-> this (.bindTransformFeedback target transform-feedback)))

(defn bind-vertex-array
  "Method.

  The WebGL2RenderingContext.bindVertexArray() method of the WebGL
  API binds a passed `gl.WebGLVertexArrayObject` object to the

  `void gl.bindVertexArray(vertexArray);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/bindVertexArray`"
  [this vertex-array]
  (-> this (.bindVertexArray vertex-array)))

(defn blit-framebuffer
  "Method.

  The WebGL2RenderingContext.blitFramebuffer() method of the WebGL
  API transfers a block of pixels from the read framebuffer to
  draw framebuffer.

  `void gl.blitFramebuffer(srcX0, srcY0, srcX1, srcY1,
  dstX0, dstY0, dstX1, dstY1,
  mask, filter);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/blitFramebuffer`"
  [this & args]
  (apply (-> this .-blitFramebuffer) (concat [this] args)))

(defn clear-bufferf
  "Method.

  The WebGL2RenderingContext.clearBuffer[fiuv]() methods of the
  2 API clear buffers from the currently bound framebuffer.

  `void gl.clearBufferfv(buffer, drawbuffer, values, optional srcOffset);
  void gl.clearBufferiv(buffer, drawbuffer, values, optional srcOffset);
  void gl.clearBufferuiv(buffer, drawbuffer, values, optional srcOffset);
  void gl.clearBufferfi(buffer, drawbuffer, depth, stencil);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/clearBuffer`"
  [this & args]
  (apply (-> this .-clearBufferf) (concat [this] args)))

(defn clear-bufferi
  "Method.

  The WebGL2RenderingContext.clearBuffer[fiuv]() methods of the
  2 API clear buffers from the currently bound framebuffer.

  `void gl.clearBufferfv(buffer, drawbuffer, values, optional srcOffset);
  void gl.clearBufferiv(buffer, drawbuffer, values, optional srcOffset);
  void gl.clearBufferuiv(buffer, drawbuffer, values, optional srcOffset);
  void gl.clearBufferfi(buffer, drawbuffer, depth, stencil);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/clearBuffer`"
  [this & args]
  (apply (-> this .-clearBufferi) (concat [this] args)))

(defn clear-bufferu
  "Method.

  The WebGL2RenderingContext.clearBuffer[fiuv]() methods of the
  2 API clear buffers from the currently bound framebuffer.

  `void gl.clearBufferfv(buffer, drawbuffer, values, optional srcOffset);
  void gl.clearBufferiv(buffer, drawbuffer, values, optional srcOffset);
  void gl.clearBufferuiv(buffer, drawbuffer, values, optional srcOffset);
  void gl.clearBufferfi(buffer, drawbuffer, depth, stencil);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/clearBuffer`"
  [this & args]
  (apply (-> this .-clearBufferu) (concat [this] args)))

(defn clear-bufferv
  "Method.

  The WebGL2RenderingContext.clearBuffer[fiuv]() methods of the
  2 API clear buffers from the currently bound framebuffer.

  `void gl.clearBufferfv(buffer, drawbuffer, values, optional srcOffset);
  void gl.clearBufferiv(buffer, drawbuffer, values, optional srcOffset);
  void gl.clearBufferuiv(buffer, drawbuffer, values, optional srcOffset);
  void gl.clearBufferfi(buffer, drawbuffer, depth, stencil);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/clearBuffer`"
  [this & args]
  (apply (-> this .-clearBufferv) (concat [this] args)))

(defn client-wait-sync
  "Method.

  The WebGL2RenderingContext.clientWaitSync() method of the WebGL
  API blocks and waits for a `gl.WebGLSync` object to become signaled
  a given timeout to be passed.

  `GLenum gl.clientWaitSync(sync, flags, timeout);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/clientWaitSync`"
  [this sync flags timeout]
  (-> this (.clientWaitSync sync flags timeout)))

(defn compressed-tex-sub-image-3d
  "Method.

  The WebGL2RenderingContext.compressedTexSubImage3D() method of
  WebGL API specifies a three-dimensional sub-rectangle for a texture
  in a compressed format.

  `// read from the buffer bound to gl.PIXEL_UNPACK_BUFFER
  void gl.compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, imageSize, offset);

  void gl.compressedTexSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, ArrayBufferView srcData, optional srcOffset, optional srcLengthOverride);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/compressedTexSubImage3D`"
  [this & args]
  (apply (-> this .-compressedTexSubImage3D) (concat [this] args)))

(defn copy-buffer-sub-data
  "Method.

  The WebGL2RenderingContext.copyBufferSubData() method of the
  2 API copies part of the data of a buffer to another buffer.

  `void gl.copyBufferSubData(readTarget, writeTarget, readOffset, writeOffset, size);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/copyBufferSubData`"
  [this read-target write-target read-offset write-offset size]
  (-> this (.copyBufferSubData read-target write-target read-offset write-offset size)))

(defn copy-tex-sub-image-3d
  "Method.

  The WebGL2RenderingContext.copyTexSubImage3D() method of the
  API copies pixels from the current `gl.WebGLFramebuffer` into
  existing 3D texture sub-image.

  `void gl.copyTexSubImage3D(target, level, xoffset, yoffset, zoffset, x, y, width, height);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/copyTexSubImage3D`"
  [this target level xoffset yoffset zoffset x y width height]
  (-> this (.copyTexSubImage3D target level xoffset yoffset zoffset x y width height)))

(defn create-query
  "Method.

  The WebGL2RenderingContext.createQuery() method of the WebGL
  API creates and initializes `gl.WebGLQuery` objects, which provide
  to asynchronously query for information.

  `WebGLQuery gl.createQuery();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/createQuery`"
  [this ]
  (-> this (.createQuery)))

(defn create-sampler
  "Method.

  The WebGL2RenderingContext.createSampler() method of the WebGL
  API creates and initializes `gl.WebGLSampler` objects.

  `WebGLSampler gl.createSampler();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/createSampler`"
  [this ]
  (-> this (.createSampler)))

(defn create-transform-feedback
  "Method.

  The WebGL2RenderingContext.createTransformFeedback() method of
  WebGL 2 API creates and initializes `gl.WebGLTransformFeedback`

  `WebGLTransformFeedback gl.createTransformFeedback();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/createTransformFeedback`"
  [this ]
  (-> this (.createTransformFeedback)))

(defn create-vertex-array
  "Method.

  The WebGL2RenderingContext.createVertexArray() method of the
  2 API creates and initializes a `gl.WebGLVertexArrayObject` object
  represents a vertex array object (VAO) pointing to vertex array
  and which provides names for different sets of vertex data.

  `WebGLVertexArrayObject gl.createVertexArray();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/createVertexArray`"
  [this ]
  (-> this (.createVertexArray)))

(defn delete-query
  "Method.

  The WebGL2RenderingContext.deleteQuery() method of the WebGL
  API deletes a given `gl.WebGLQuery` object.

  `void gl.deleteQuery(query);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/deleteQuery`"
  [this query]
  (-> this (.deleteQuery query)))

(defn delete-sampler
  "Method.

  The WebGL2RenderingContext.deleteSampler() method of the WebGL
  API deletes a given `gl.WebGLSampler` object.

  `void gl.deleteSampler(sampler);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/deleteSampler`"
  [this sampler]
  (-> this (.deleteSampler sampler)))

(defn delete-sync
  "Method.

  The WebGL2RenderingContext.deleteSync() method of the WebGL 2
  deletes a given `gl.WebGLSync` object.

  `void gl.deleteSync(sync);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/deleteSync`"
  [this sync]
  (-> this (.deleteSync sync)))

(defn delete-transform-feedback
  "Method.

  The WebGL2RenderingContext.deleteTransformFeedback() method of
  WebGL 2 API deletes a given `gl.WebGLTransformFeedback` object.

  `void gl.deleteTransformFeedback(transformFeedback);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/deleteTransformFeedback`"
  [this transform-feedback]
  (-> this (.deleteTransformFeedback transform-feedback)))

(defn delete-vertex-array
  "Method.

  The WebGL2RenderingContext.deleteVertexArray() method of the
  2 API deletes a given `gl.WebGLVertexArrayObject` object.

  `void gl.deleteVertexArray(vertexArray);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/deleteVertexArray`"
  [this vertex-array]
  (-> this (.deleteVertexArray vertex-array)))

(defn draw-arrays-instanced
  "Method.

  The WebGL2RenderingContext.drawArraysInstanced() method of the
  2 API renders primitives from array data like the `web.gl.drawArrays()`
  In addition, it can execute multiple instances of the range of

  `void gl.drawArraysInstanced(mode, first, count, instanceCount);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/drawArraysInstanced`"
  [this mode first count instance-count]
  (-> this (.drawArraysInstanced mode first count instance-count)))

(defn draw-buffers
  "Method.

  The WebGL2RenderingContext.drawBuffers() method of the WebGL
  API defines draw buffers to which fragment colors are written
  The draw buffer settings are part of the state of the currently
  framebuffer or the drawingbuffer if no framebuffer is bound.

  `void gl.drawBuffers(buffers);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/drawBuffers`"
  [this buffers]
  (-> this (.drawBuffers buffers)))

(defn draw-elements-instanced
  "Method.

  The WebGL2RenderingContext.drawElementsInstanced() method of
  WebGL 2 API renders primitives from array data like the `web.gl.drawElements()`
  In addition, it can execute multiple instances of a set of elements.

  `void gl.drawElementsInstanced(mode, count, type, offset, instanceCount);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/drawElementsInstanced`"
  [this mode count type offset instance-count]
  (-> this (.drawElementsInstanced mode count type offset instance-count)))

(defn draw-range-elements
  "Method.

  The WebGL2RenderingContext.drawRangeElements() method of the
  API renders primitives from array data in a given range.

  `void gl.drawRangeElements(mode, start, end, count, type, offset);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/drawRangeElements`"
  [this mode start end count type offset]
  (-> this (.drawRangeElements mode start end count type offset)))

(defn end-query
  "Method.

  The WebGL2RenderingContext.endQuery() method of the WebGL 2 API
  the end of a given query target.

  `void gl.endQuery(target);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/endQuery`"
  [this target]
  (-> this (.endQuery target)))

(defn end-transform-feedback
  "Method.

  The WebGL2RenderingContext.endTransformFeedback() method of the
  2 API ends a transform feedback operation.

  `void gl.endTransformFeedback();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/endTransformFeedback`"
  [this ]
  (-> this (.endTransformFeedback)))

(defn fence-sync
  "Method.

  The WebGL2RenderingContext.fenceSync() method of the WebGL 2
  creates a new `gl.WebGLSync` object and inserts it into the GL
  stream.

  `WebGLSync gl.fenceSync(condition, flags);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/fenceSync`"
  [this condition flags]
  (-> this (.fenceSync condition flags)))

(defn framebuffer-texture-layer
  "Method.

  The WebGL2RenderingContext.framebufferTextureLayer() method of
  WebGL 2 API attaches a single layer of a texture to a framebuffer.

  `void gl.framebufferTextureLayer(target, attachment, texture, level, layer);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/framebufferTextureLayer`"
  [this target attachment texture level layer]
  (-> this (.framebufferTextureLayer target attachment texture level layer)))

(defn get-active-uniform-block-name
  "Method.

  The WebGL2RenderingContext.getActiveUniformBlockName() method
  the WebGL 2 API retrieves the name of the active uniform block
  a given index within a `gl.WebGLProgram`.

  `DOMString gl.getActiveUniformBlockName(program, uniformBlockIndex);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockName`"
  [this program uniform-block-index]
  (-> this (.getActiveUniformBlockName program uniform-block-index)))

(defn get-active-uniform-block-parameter
  "Method.

  The WebGL2RenderingContext.getActiveUniformBlockParameter() method
  the WebGL 2 API retrieves information about an active uniform
  within a `gl.WebGLProgram`.

  `any gl.getActiveUniformBlockParameter(program, uniformBlockIndex, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getActiveUniformBlockParameter`"
  [this program uniform-block-index pname]
  (-> this (.getActiveUniformBlockParameter program uniform-block-index pname)))

(defn get-active-uniforms
  "Method.

  The WebGL2RenderingContext.getActiveUniforms() method of the
  2 API retrieves information about active uniforms within a `gl.WebGLProgram`.

  `any gl.getActiveUniforms(program, uniformIndices, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getActiveUniforms`"
  [this program uniform-indices pname]
  (-> this (.getActiveUniforms program uniform-indices pname)))

(defn get-buffer-sub-data
  "Method.

  The WebGL2RenderingContext.getBufferSubData() method of the WebGL
  API reads data from a buffer binding point and writes them to
  `web.ArrayBuffer` or `web.SharedArrayBuffer`.

  `void gl.getBufferSubData(target, srcByteOffset, ArrayBufferView dstData, optional dstOffset, optional length);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getBufferSubData`"
  [this & args]
  (apply (-> this .-getBufferSubData) (concat [this] args)))

(defn get-frag-data-location
  "Method.

  The WebGL2RenderingContext.getFragDataLocation() method of the
  2 API returns the binding of color numbers to user-defined varying
  variables.

  `GLint gl.getFragDataLocation(program, name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getFragDataLocation`"
  [this program name]
  (-> this (.getFragDataLocation program name)))

(defn get-indexed-parameter
  "Method.

  The WebGL2RenderingContext.getIndexedParameter() method of the
  2 API returns indexed information about a given target.

  `any gl.getIndexedParameter(target, index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getIndexedParameter`"
  [this target index]
  (-> this (.getIndexedParameter target index)))

(defn get-internalformat-parameter
  "Method.

  The WebGL2RenderingContext.getInternalformatParameter() method
  the WebGL 2 API returns information about implementation-dependent
  for internal formats.

  `any gl.getInternalformatParameter(target, internalformat, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getInternalformatParameter`"
  [this target internalformat pname]
  (-> this (.getInternalformatParameter target internalformat pname)))

(defn get-query
  "Method.

  The WebGL2RenderingContext.getQuery() method of the WebGL 2 API
  the currently active `gl.WebGLQuery` for the target, or `web.null`.

  `WebGLQuery gl.getQuery(target, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getQuery`"
  [this target pname]
  (-> this (.getQuery target pname)))

(defn get-query-parameter
  "Method.

  The WebGL2RenderingContext.getQueryParameter() method of the
  2 API returns parameter information of a `gl.WebGLQuery` object.

  `any gl.getQueryParameter(query, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getQueryParameter`"
  [this query pname]
  (-> this (.getQueryParameter query pname)))

(defn get-sampler-parameter
  "Method.

  The WebGL2RenderingContext.getSamplerParameter() method of the
  2 API returns parameter information of a `gl.WebGLSampler` object.

  `any gl.getSamplerParameter(sampler, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getSamplerParameter`"
  [this sampler pname]
  (-> this (.getSamplerParameter sampler pname)))

(defn get-sync-parameter
  "Method.

  The WebGL2RenderingContext.getSyncParameter() method of the WebGL
  API returns parameter information of a `gl.WebGLSync` object.

  `any gl.getSyncParameter(sync, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getSyncParameter`"
  [this sync pname]
  (-> this (.getSyncParameter sync pname)))

(defn get-transform-feedback-varying
  "Method.

  The WebGL2RenderingContext.getTransformFeedbackVarying() method
  the WebGL 2 API returns information about varying variables from
  buffers.

  `WebGLActiveInfo gl.getTransformFeedbackVarying(program, index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getTransformFeedbackVarying`"
  [this program index]
  (-> this (.getTransformFeedbackVarying program index)))

(defn get-uniform-block-index
  "Method.

  The WebGL2RenderingContext.getUniformBlockIndex() method of the
  2 API retrieves the index of a uniform block within a `gl.WebGLProgram`.

  `GLuint gl.getUniformBlockIndex(program, uniformBlockName);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getUniformBlockIndex`"
  [this program uniform-block-name]
  (-> this (.getUniformBlockIndex program uniform-block-name)))

(defn get-uniform-indices
  "Method.

  The WebGL2RenderingContext.getUniformIndices() method of the
  2 API retrieves the indices of a number of uniforms within a

  `sequence<GLuint> gl.getUniformIndices(program, uniformNames);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/getUniformIndices`"
  [this program uniform-names]
  (-> this (.getUniformIndices program uniform-names)))

(defn invalidate-framebuffer
  "Method.

  The WebGL2RenderingContext.invalidateFramebuffer() method of
  WebGL 2 API invalidates the contents of attachments in a framebuffer.

  `void gl.invalidateFramebuffer(target, attachments);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/invalidateFramebuffer`"
  [this target attachments]
  (-> this (.invalidateFramebuffer target attachments)))

(defn invalidate-sub-framebuffer
  "Method.

  The WebGL2RenderingContext.invalidateSubFramebuffer() method
  the WebGL 2 API invalidates portions of the contents of attachments
  a framebuffer.

  `void gl.invalidateSubFramebuffer(target, attachments, x, y, width, height);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/invalidateSubFramebuffer`"
  [this target attachments x y width height]
  (-> this (.invalidateSubFramebuffer target attachments x y width height)))

(defn is-query
  "Method.

  The WebGL2RenderingContext.isQuery() method of the WebGL 2 API
  true if the passed object is a valid `gl.WebGLQuery` object.

  `GLBoolean gl.isQuery(query);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/isQuery`"
  [this query]
  (-> this (.isQuery query)))

(defn is-sampler
  "Method.

  The WebGL2RenderingContext.isSampler() method of the WebGL 2
  returns true if the passed object is a valid `gl.WebGLSampler`

  `GLboolean gl.isSampler(sampler);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/isSampler`"
  [this sampler]
  (-> this (.isSampler sampler)))

(defn is-sync
  "Method.

  The WebGL2RenderingContext.isSync() method of the WebGL 2 API
  true if the passed object is a valid `gl.WebGLSync` object.

  `GLboolean gl.isSync(sync);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/isSync`"
  [this sync]
  (-> this (.isSync sync)))

(defn is-transform-feedback
  "Method.

  The WebGL2RenderingContext.isTransformFeedback() method of the
  2 API returns true if the passed object is a valid `gl.WebGLTransformFeedback`

  `GLboolean gl.isTransformFeedback(transformFeedback);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/isTransformFeedback`"
  [this transform-feedback]
  (-> this (.isTransformFeedback transform-feedback)))

(defn is-vertex-array
  "Method.

  The WebGL2RenderingContext.isVertexArray() method of the WebGL
  returns true if the passed object is a valid `gl.WebGLVertexArrayObject`

  `GLBoolean gl.isVertexArray(vertexArray);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/isVertexArray`"
  [this vertex-array]
  (-> this (.isVertexArray vertex-array)))

(defn pause-transform-feedback
  "Method.

  The WebGL2RenderingContext.pauseTransformFeedback() method of
  WebGL 2 API pauses a transform feedback operation.

  `void gl.pauseTransformFeedback();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/pauseTransformFeedback`"
  [this ]
  (-> this (.pauseTransformFeedback)))

(defn read-buffer
  "Method.

  The WebGL2RenderingContext.readBuffer() method of the WebGL 2
  selects a color buffer as the source for pixels for subsequent
  to `web.copyTexImage2D`, `web.copyTexSubImage2D`, `web.copyTexSubImage3D`
  `web.readPixels`.

  `void gl.readBuffer(src);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/readBuffer`"
  [this src]
  (-> this (.readBuffer src)))

(defn renderbuffer-storage-multisample
  "Method.

  The WebGL2RenderingContext.renderbufferStorageMultisample() method
  the WebGL 2 API returns creates and initializes a renderbuffer
  data store and allows specifying a number of samples to be used.

  `void gl.renderbufferStorageMultisample(target, samples, internalFormat, width, height);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/renderbufferStorageMultisample`"
  [this target samples internal-format width height]
  (-> this (.renderbufferStorageMultisample target samples internal-format width height)))

(defn resume-transform-feedback
  "Method.

  The WebGL2RenderingContext.resumeTransformFeedback() method of
  WebGL 2 API resumes a transform feedback operation.

  `void gl.resumeTransformFeedback();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/resumeTransformFeedback`"
  [this ]
  (-> this (.resumeTransformFeedback)))

(defn sampler-parameteri
  "Method.

  The WebGL2RenderingContext.samplerParameter[if]() methods of
  WebGL 2 API set `gl.WebGLSampler` parameters.

  `void gl.samplerParameteri(sampler, pname, param);
  void gl.samplerParameterf(sampler, pname, param);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/samplerParameter`"
  [this & args]
  (apply (-> this .-samplerParameteri) (concat [this] args)))

(defn sampler-parameterf
  "Method.

  The WebGL2RenderingContext.samplerParameter[if]() methods of
  WebGL 2 API set `gl.WebGLSampler` parameters.

  `void gl.samplerParameteri(sampler, pname, param);
  void gl.samplerParameterf(sampler, pname, param);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/samplerParameter`"
  [this & args]
  (apply (-> this .-samplerParameterf) (concat [this] args)))

(defn tex-image-3d
  "Method.

  The WebGLRenderingContext.texImage3D() method of the WebGL API
  a three-dimensional texture image.

  `void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, GLintptr offset);

  void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, HTMLCanvasElement source);
  void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, HTMLImageElement source);
  void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, HTMLVideoElement source);
  void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, ImageBitmap source);
  void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, ImageData source);
  void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, ArrayBufferView? srcData);
  void gl.texImage3D(target, level, internalformat, width, height, depth, border, format, type, ArrayBufferView srcData, srcOffset);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/texImage3D`"
  [this & args]
  (apply (-> this .-texImage3D) (concat [this] args)))

(defn tex-storage-2d
  "Method.

  The WebGL2RenderingContext.texStorage2D() method of the WebGL
  specifies all levels of two-dimensional texture storage.

  `void gl.texStorage2D(target, levels, internalformat, width, height);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/texStorage2D`"
  [this target levels internalformat width height]
  (-> this (.texStorage2D target levels internalformat width height)))

(defn tex-storage-3d
  "Method.

  The WebGL2RenderingContext.texStorage3D() method of the WebGL
  specifies all levels of a three-dimensional texture or two-dimensional
  texture.

  `void gl.texStorage3D(target, levels, internalformat, width, height, depth);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/texStorage3D`"
  [this target levels internalformat width height depth]
  (-> this (.texStorage3D target levels internalformat width height depth)))

(defn tex-sub-image-3d
  "Method.

  The WebGL2RenderingContext.texSubImage3D() method of the WebGL
  specifies a sub-rectangle of the current texture.

  `void gl.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, ArrayBufferView? srcData, optional srcOffset);

  void gl.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, ImageBitmap? pixels);

  void gl.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, ImageData? pixels);

  void gl.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, HTMLImageElement? pixels);

  void gl.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, HTMLCanvasElement? pixels);

  void gl.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, HTMLVideoElement? pixels);

  void gl.texSubImage3D(target, level, xoffset, yoffset, zoffset, width, height, depth, format, type, GLintptr offset);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/texSubImage3D`"
  [this & args]
  (apply (-> this .-texSubImage3D) (concat [this] args)))

(defn transform-feedback-varyings
  "Method.

  The WebGL2RenderingContext.transformFeedbackVaryings() method
  the WebGL 2 API specifies values to record in `gl.WebGLTransformFeedback`

  `void gl.transformFeedbackVaryings(program, varyings, bufferMode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/transformFeedbackVaryings`"
  [this program varyings buffer-mode]
  (-> this (.transformFeedbackVaryings program varyings buffer-mode)))

(defn uniform-111
  "Method.

  The WebGL2RenderingContext.uniform[1234][uif][v]() methods of
  WebGL API specify values of uniform variables.

  `void gl.uniform1ui(location, v0);
  void gl.uniform2ui(location, v0, v1);
  void gl.uniform3ui(location, v0, v1, v2);
  void gl.uniform4ui(location, v0, v1, v2, v3);
  void gl.uniform1fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform2fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform3fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform4fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform1iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform2iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform3iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform4iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform1uiv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform2uiv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform3uiv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform4uiv(location, data, optional srcOffset, optional srcLength);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniform`"
  [this & args]
  (apply (-> this .-uniform111) (concat [this] args)))

(defn uniform-222
  "Method.

  The WebGL2RenderingContext.uniform[1234][uif][v]() methods of
  WebGL API specify values of uniform variables.

  `void gl.uniform1ui(location, v0);
  void gl.uniform2ui(location, v0, v1);
  void gl.uniform3ui(location, v0, v1, v2);
  void gl.uniform4ui(location, v0, v1, v2, v3);
  void gl.uniform1fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform2fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform3fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform4fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform1iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform2iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform3iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform4iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform1uiv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform2uiv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform3uiv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform4uiv(location, data, optional srcOffset, optional srcLength);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniform`"
  [this & args]
  (apply (-> this .-uniform222) (concat [this] args)))

(defn uniform-333
  "Method.

  The WebGL2RenderingContext.uniform[1234][uif][v]() methods of
  WebGL API specify values of uniform variables.

  `void gl.uniform1ui(location, v0);
  void gl.uniform2ui(location, v0, v1);
  void gl.uniform3ui(location, v0, v1, v2);
  void gl.uniform4ui(location, v0, v1, v2, v3);
  void gl.uniform1fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform2fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform3fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform4fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform1iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform2iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform3iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform4iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform1uiv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform2uiv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform3uiv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform4uiv(location, data, optional srcOffset, optional srcLength);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniform`"
  [this & args]
  (apply (-> this .-uniform333) (concat [this] args)))

(defn uniform-444
  "Method.

  The WebGL2RenderingContext.uniform[1234][uif][v]() methods of
  WebGL API specify values of uniform variables.

  `void gl.uniform1ui(location, v0);
  void gl.uniform2ui(location, v0, v1);
  void gl.uniform3ui(location, v0, v1, v2);
  void gl.uniform4ui(location, v0, v1, v2, v3);
  void gl.uniform1fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform2fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform3fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform4fv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform1iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform2iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform3iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform4iv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform1uiv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform2uiv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform3uiv(location, data, optional srcOffset, optional srcLength);
  void gl.uniform4uiv(location, data, optional srcOffset, optional srcLength);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniform`"
  [this & args]
  (apply (-> this .-uniform444) (concat [this] args)))

(defn uniform-block-binding
  "Method.

  The WebGL2RenderingContext.uniformBlockBinding() method of the
  2 API assigns binding points for active uniform blocks.

  `void gl.uniformBlockBinding(program, uniformBlockIndex, uniformBlockBinding);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniformBlockBinding`"
  [this program uniform-block-index uniform-block-binding]
  (-> this (.uniformBlockBinding program uniform-block-index uniform-block-binding)))

(defn uniform-matrix-2x-2fv
  "Method.

  The WebGL2RenderingContext.uniformMatrix[234]x[234]fv() methods
  the WebGL 2 API specify matrix values for uniform variables.

  `void gl.uniformMatrix2fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix3x2fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix4x2fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix2x3fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix3fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix4x3fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix2x4fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix3x4fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix4fv(location, transpose, data, optional srcOffset, optional srcLength);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniformMatrix`"
  [this & args]
  (apply (-> this .-uniformMatrix2x2fv) (concat [this] args)))

(defn uniform-matrix-3x-3fv
  "Method.

  The WebGL2RenderingContext.uniformMatrix[234]x[234]fv() methods
  the WebGL 2 API specify matrix values for uniform variables.

  `void gl.uniformMatrix2fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix3x2fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix4x2fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix2x3fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix3fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix4x3fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix2x4fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix3x4fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix4fv(location, transpose, data, optional srcOffset, optional srcLength);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniformMatrix`"
  [this & args]
  (apply (-> this .-uniformMatrix3x3fv) (concat [this] args)))

(defn uniform-matrix-4x-4fv
  "Method.

  The WebGL2RenderingContext.uniformMatrix[234]x[234]fv() methods
  the WebGL 2 API specify matrix values for uniform variables.

  `void gl.uniformMatrix2fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix3x2fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix4x2fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix2x3fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix3fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix4x3fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix2x4fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix3x4fv(location, transpose, data, optional srcOffset, optional srcLength);
  void gl.uniformMatrix4fv(location, transpose, data, optional srcOffset, optional srcLength);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/uniformMatrix`"
  [this & args]
  (apply (-> this .-uniformMatrix4x4fv) (concat [this] args)))

(defn vertex-attrib-divisor
  "Method.

  The WebGL2RenderingContext.vertexAttribDivisor() method of the
  2 API modifies the rate at which generic vertex attributes advance
  rendering multiple instances of primitives with `web.gl.drawArraysInstanced()`
  `web.gl.drawElementsInstanced()`.

  `void gl.vertexAttribDivisor(index, divisor);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/vertexAttribDivisor`"
  [this index divisor]
  (-> this (.vertexAttribDivisor index divisor)))

(defn vertex-attrib-i-4uiu
  "Method.

  The WebGL2RenderingContext.vertexAttribI4[u]i[v]() methods of
  WebGL 2 API specify integer values for generic vertex attributes.

  `void gl.vertexAttribI4i(index, v0, v1, v2, v3);
  void gl.vertexAttribI4ui(index, v0, v1, v2, v3);

  void gl.vertexAttribI4iv(index, value);
  void gl.vertexAttribI4uiv(index, value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/vertexAttribI`"
  [this & args]
  (apply (-> this .-vertexAttribI4uiu) (concat [this] args)))

(defn vertex-attrib-i-pointer
  "Method.

  The WebGL2RenderingContext.vertexAttribIPointer() method of the
  2 API specifies integer data formats and locations of vertex
  in a vertex attributes array.

  `void gl.vertexAttribIPointer(index, size, type, stride, offset);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/vertexAttribIPointer`"
  [this index size type stride offset]
  (-> this (.vertexAttribIPointer index size type stride offset)))

(defn wait-sync
  "Method.

  The WebGL2RenderingContext.waitSync() method of the WebGL 2 API
  immediately, but waits on the GL server until the given `gl.WebGLSync`
  is signaled.

  `void gl.waitSync(sync, flags, timeout);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGL2RenderingContext/waitSync`"
  [this sync flags timeout]
  (-> this (.waitSync sync flags timeout)))

