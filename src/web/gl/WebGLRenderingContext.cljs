(ns web.gl.WebGLRenderingContext
  "The WebGLRenderingContext interface provides an interface to
  OpenGL ES 2.0 graphics rendering context for the drawing surface
  an HTML `<canvas>` element."
  (:refer-clojure :exclude [flush]))

(defn active-texture
  "Method.

  The WebGLRenderingContext.activeTexture() method of the WebGL
  specifies which texture unit to make active.

  `void gl.activeTexture(texture);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/activeTexture`"
  [this texture]
  (-> this (.activeTexture texture)))

(defn attach-shader
  "Method.

  The WebGLRenderingContext.attachShader() method of the WebGL
  attaches either a fragment or vertex `web.gl.WebGLShader` to
  `web.gl.WebGLProgram`.

  `void gl.attachShader(program, shader);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/attachShader`"
  [this program shader]
  (-> this (.attachShader program shader)))

(defn bind-attrib-location
  "Method.

  The WebGLRenderingContext.bindAttribLocation() method of the
  API binds a generic vertex index to an attribute variable.

  `void gl.bindAttribLocation(program, index, name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindAttribLocation`"
  [this program index name]
  (-> this (.bindAttribLocation program index name)))

(defn bind-buffer
  "Method.

  The WebGLRenderingContext.bindBuffer() method of the WebGL API
  a given `web.gl.WebGLBuffer` to a target.

  `void gl.bindBuffer(target, buffer);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindBuffer`"
  [this target buffer]
  (-> this (.bindBuffer target buffer)))

(defn bind-framebuffer
  "Method.

  The WebGLRenderingContext.bindFramebuffer() method of the WebGL
  binds a given `web.gl.WebGLFramebuffer` to a target.

  `void gl.bindFramebuffer(target, framebuffer);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindFramebuffer`"
  [this target framebuffer]
  (-> this (.bindFramebuffer target framebuffer)))

(defn bind-renderbuffer
  "Method.

  The WebGLRenderingContext.bindRenderbuffer() method of the WebGL
  binds a given `web.gl.WebGLRenderbuffer` to a target, which must
  gl.RENDERBUFFER.

  `void gl.bindRenderbuffer(target, renderbuffer);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindRenderbuffer`"
  [this target renderbuffer]
  (-> this (.bindRenderbuffer target renderbuffer)))

(defn bind-texture
  "Method.

  The WebGLRenderingContext.bindTexture() method of the WebGL API
  a given `web.gl.WebGLTexture` to a target (binding point).

  `void gl.bindTexture(target, texture);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bindTexture`"
  [this target texture]
  (-> this (.bindTexture target texture)))

(defn blend-color
  "Method.

  The WebGLRenderingContext.blendColor() method of the WebGL API
  used to set the source and destination blending factors.

  `void gl.blendColor(red, green, blue, alpha);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendColor`"
  [this red green blue alpha]
  (-> this (.blendColor red green blue alpha)))

(defn blend-equation
  "Method.

  The WebGLRenderingContext.blendEquation() method of the WebGL
  is used to set both the RGB blend equation and alpha blend equation
  a single equation.

  `void gl.blendEquation(mode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquation`"
  [this mode]
  (-> this (.blendEquation mode)))

(defn blend-equation-separate
  "Method.

  The WebGLRenderingContext.blendEquationSeparate() method of the
  API is used to set the RGB blend equation and alpha blend equation

  `void gl.blendEquationSeparate(modeRGB, modeAlpha);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendEquationSeparate`"
  [this mode-rgb mode-alpha]
  (-> this (.blendEquationSeparate mode-rgb mode-alpha)))

(defn blend-func
  "Method.

  The WebGLRenderingContext.blendFunc() method of the WebGL API
  which function is used for blending pixel arithmetic.

  `void gl.blendFunc(sfactor, dfactor);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFunc`"
  [this sfactor dfactor]
  (-> this (.blendFunc sfactor dfactor)))

(defn blend-func-separate
  "Method.

  The WebGLRenderingContext.blendFuncSeparate() method of the WebGL
  defines which function is used for blending pixel arithmetic
  RGB and alpha components separately.

  `void gl.blendFuncSeparate(srcRGB, dstRGB, srcAlpha, dstAlpha);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/blendFuncSeparate`"
  [this src-rgb dst-rgb src-alpha dst-alpha]
  (-> this (.blendFuncSeparate src-rgb dst-rgb src-alpha dst-alpha)))

(defn buffer-data
  "Method.

  The WebGLRenderingContext.bufferData() method of the WebGL API
  and creates the buffer object's data store.

  `// WebGL1:
  void gl.bufferData(target, size, usage);
  void gl.bufferData(target, ArrayBuffer? srcData, usage);
  void gl.bufferData(target, ArrayBufferView srcData, usage);

  // WebGL2:
  void gl.bufferData(target, ArrayBufferView srcData, usage, srcOffset, length);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferData`"
  [this & args]
  (apply (-> this .-bufferData) (concat [this] args)))

(defn buffer-sub-data
  "Method.

  The WebGLRenderingContext.bufferSubData() method of the WebGL
  updates a subset of a buffer object's data store.

  `// WebGL1:
  void gl.bufferSubData(target, offset, ArrayBuffer srcData);
  void gl.bufferSubData(target, offset, ArrayBufferView srcData);

  // WebGL2:
  void gl.bufferSubData(target, dstByteOffset, ArrayBufferView srcData, srcOffset, length);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/bufferSubData`"
  [this & args]
  (apply (-> this .-bufferSubData) (concat [this] args)))

(defn check-framebuffer-status
  "Method.

  The WebGLRenderingContext.checkFramebufferStatus() method of
  WebGL API returns the completeness status of the `web.gl.WebGLFramebuffer`

  `GLenum gl.checkFramebufferStatus(target);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/checkFramebufferStatus`"
  [this target]
  (-> this (.checkFramebufferStatus target)))

(defn clear
  "Method.

  The WebGLRenderingContext.clear() method of the WebGL API clears
  to preset values.

  `void gl.clear(mask);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clear`"
  [this mask]
  (-> this (.clear mask)))

(defn clear-color
  "Method.

  The WebGLRenderingContext.clearColor() method of the WebGL API
  the color values used when clearing color buffers.

  `void gl.clearColor(red, green, blue, alpha);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clearColor`"
  [this red green blue alpha]
  (-> this (.clearColor red green blue alpha)))

(defn clear-depth
  "Method.

  The WebGLRenderingContext.clearDepth() method of the WebGL API
  the clear value for the depth buffer.

  `void gl.clearDepth(depth);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clearDepth`"
  [this depth]
  (-> this (.clearDepth depth)))

(defn clear-stencil
  "Method.

  The WebGLRenderingContext.clearStencil() method of the WebGL
  specifies the clear value for the stencil buffer.

  `void gl.clearStencil(s);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clearStencil`"
  [this s]
  (-> this (.clearStencil s)))

(defn color-mask
  "Method.

  The WebGLRenderingContext.colorMask() method of the WebGL API
  which color components to enable or to disable when drawing or
  to a `web.gl.WebGLFramebuffer`.

  `void gl.colorMask(red, green, blue, alpha);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/colorMask`"
  [this red green blue alpha]
  (-> this (.colorMask red green blue alpha)))

(defn commit
  "Method.

  The WebGLRenderingContext.commit() method pushes frames back
  the original `web.canvas.HTMLCanvasElement`, if the context is
  directly fixed to a specific canvas.

  `void WebGLRenderingContext.commit()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/commit`"
  [this ]
  (-> this (.commit)))

(defn compile-shader
  "Method.

  The WebGLRenderingContext.compileShader() method of the WebGL
  compiles a GLSL shader into binary data so that it can be used
  a `web.gl.WebGLProgram`.

  `void gl.compileShader(shader);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compileShader`"
  [this shader]
  (-> this (.compileShader shader)))

(defn compressed-tex-image
  "Method.

  The WebGLRenderingContext.compressedTexImage2D() and WebGL2RenderingContext.compressedTexImage3D()
  of the WebGL API specify a two- or three-dimensional texture
  in a compressed format.

  `// WebGL 1:
  void gl.compressedTexImage2D(target, level, internalformat, width, height, border, ArrayBufferView? pixels);

  // Additionally available in WebGL 2:
  // read from buffer bound to gl.PIXEL_UNPACK_BUFFER
  void gl.compressedTexImage2D(target, level, internalformat, width, height, border, GLsizei imageSize, GLintptr offset);
  void gl.compressedTexImage2D(target, level, internalformat, width, height, border,
  ArrayBufferView srcData, optional srcOffset, optional srcLengthOverride);

  // read from buffer bound to gl.PIXEL_UNPACK_BUFFER
  void gl.compressedTexImage3D(target, level, internalformat, width, height, depth, border, GLsizei imageSize, GLintptr offset);
  void gl.compressedTexImage3D(target, level, internalformat, width, height, depth, border,
  ArrayBufferView srcData, optional srcOffset, optional srcLengthOverride);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compressedTexImage2D`"
  [this & args]
  (apply (-> this .-compressedTexImage) (concat [this] args)))

(defn compressed-tex-sub-image2d
  "Method.

  The WebGLRenderingContext.compressedTexSubImage2D() method of
  WebGL API specifies a two-dimensional sub-rectangle for a texture
  in a compressed format.

  `// WebGL 1:
  void gl.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, ArrayBufferView? pixels);

  // Additionally available in WebGL 2:
  void gl.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, imageSize, offset);
  void gl.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, ArrayBufferView srcData, optional srcOffset, optional srcLengthOverride);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/compressedTexSubImage2D`"
  [this & args]
  (apply (-> this .-compressedTexSubImage2D) (concat [this] args)))

(defn copy-tex-image2d
  "Method.

  The WebGLRenderingContext.copyTexImage2D() method of the WebGL
  copies pixels from the current `web.gl.WebGLFramebuffer` into
  2D texture image.

  `void gl.copyTexImage2D(target, level, internalformat, x, y, width, height, border);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/copyTexImage2D`"
  [this target level internalformat x y width height border]
  (-> this (.copyTexImage2D target level internalformat x y width height border)))

(defn copy-tex-sub-image2d
  "Method.

  The WebGLRenderingContext.copyTexSubImage2D() method of the WebGL
  copies pixels from the current `web.gl.WebGLFramebuffer` into
  existing 2D texture sub-image.

  `void gl.copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/copyTexSubImage2D`"
  [this target level xoffset yoffset x y width height]
  (-> this (.copyTexSubImage2D target level xoffset yoffset x y width height)))

(defn create-buffer
  "Method.

  The WebGLRenderingContext.createBuffer() method of the WebGL
  creates and initializes a `web.gl.WebGLBuffer` storing data such
  vertices or colors.

  `WebGLBuffer gl.createBuffer();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createBuffer`"
  [this ]
  (-> this (.createBuffer)))

(defn create-framebuffer
  "Method.

  The WebGLRenderingContext.createFramebuffer() method of the WebGL
  creates and initializes a `web.gl.WebGLFramebuffer` object.

  `WebGLFramebuffer gl.createFramebuffer();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createFramebuffer`"
  [this ]
  (-> this (.createFramebuffer)))

(defn create-program
  "Method.

  The WebGLRenderingContext.createProgram() method of the WebGL
  creates and initializes a `web.gl.WebGLProgram` object.

  `WebGLProgram gl.createProgram();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createProgram`"
  [this ]
  (-> this (.createProgram)))

(defn create-renderbuffer
  "Method.

  The WebGLRenderingContext.createRenderbuffer() method of the
  API creates and initializes a `web.gl.WebGLRenderbuffer` object.

  `WebGLRenderbuffer gl.createRenderbuffer();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createRenderbuffer`"
  [this ]
  (-> this (.createRenderbuffer)))

(defn create-shader
  "Method.

  The WebGLRenderingContext.createShader() method of the WebGL
  creates a `web.gl.WebGLShader` that can then be configured further
  `WebGLRenderingContext.shaderSource()` and `WebGLRenderingContext.compileShader()`.

  `WebGLShader gl.createShader(type);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createShader`"
  [this type]
  (-> this (.createShader type)))

(defn create-texture
  "Method.

  The WebGLRenderingContext.createTexture() method of the WebGL
  creates and initializes a `web.gl.WebGLTexture` object.

  `WebGLTexture gl.createTexture();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/createTexture`"
  [this ]
  (-> this (.createTexture)))

(defn cull-face
  "Method.

  The WebGLRenderingContext.cullFace() method of the WebGL API
  whether or not front- and/or back-facing polygons can be culled.

  `void gl.cullFace(mode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/cullFace`"
  [this mode]
  (-> this (.cullFace mode)))

(defn delete-buffer
  "Method.

  The WebGLRenderingContext.deleteBuffer() method of the WebGL
  deletes a given `web.gl.WebGLBuffer`. This method has no effect
  the buffer has already been deleted.

  `void gl.deleteBuffer(buffer);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteBuffer`"
  [this buffer]
  (-> this (.deleteBuffer buffer)))

(defn delete-framebuffer
  "Method.

  The WebGLRenderingContext.deleteFramebuffer() method of the WebGL
  deletes a given `web.gl.WebGLFramebuffer` object. This method
  no effect if the frame buffer has already been deleted.

  `void gl.deleteFramebuffer(framebuffer);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteFramebuffer`"
  [this framebuffer]
  (-> this (.deleteFramebuffer framebuffer)))

(defn delete-program
  "Method.

  The WebGLRenderingContext.deleteProgram() method of the WebGL
  deletes a given `web.gl.WebGLProgram` object. This method has
  effect if the program has already been deleted.

  `void gl.deleteProgram(program);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteProgram`"
  [this program]
  (-> this (.deleteProgram program)))

(defn delete-renderbuffer
  "Method.

  The WebGLRenderingContext.deleteRenderbuffer() method of the
  API deletes a given `web.gl.WebGLRenderbuffer` object. This method
  no effect if the render buffer has already been deleted.

  `void gl.deleteRenderbuffer(renderbuffer);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteRenderbuffer`"
  [this renderbuffer]
  (-> this (.deleteRenderbuffer renderbuffer)))

(defn delete-shader
  "Method.

  The WebGLRenderingContext.deleteShader() method of the WebGL
  marks a given `web.gl.WebGLShader` object for deletion. It will
  be deleted whenever the shader is no longer in use. This method
  no effect if the shader has already been deleted, and the `web.gl.WebGLShader`
  automatically marked for deletion when it is destroyed by the
  collector.

  `void gl.deleteShader(shader);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteShader`"
  [this shader]
  (-> this (.deleteShader shader)))

(defn delete-texture
  "Method.

  The WebGLRenderingContext.deleteTexture() method of the WebGL
  deletes a given `web.gl.WebGLTexture` object. This method has
  effect if the texture has already been deleted.

  `void gl.deleteTexture(texture);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/deleteTexture`"
  [this texture]
  (-> this (.deleteTexture texture)))

(defn depth-func
  "Method.

  The WebGLRenderingContext.depthFunc() method of the WebGL API
  a function that compares incoming pixel depth to the current
  buffer value.

  `void gl.depthFunc(func);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/depthFunc`"
  [this func]
  (-> this (.depthFunc func)))

(defn depth-mask
  "Method.

  The WebGLRenderingContext.depthMask() method of the WebGL API
  whether writing into the depth buffer is enabled or disabled.

  `void gl.depthMask(flag);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/depthMask`"
  [this flag]
  (-> this (.depthMask flag)))

(defn depth-range
  "Method.

  The WebGLRenderingContext.depthRange() method of the WebGL API
  the depth range mapping from normalized device coordinates to
  or viewport coordinates.

  `void gl.depthRange(zNear, zFar);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/depthRange`"
  [this z-near z-far]
  (-> this (.depthRange z-near z-far)))

(defn detach-shader
  "Method.

  The WebGLRenderingContext.detachShader() method of the WebGL
  detaches a previously attached `web.gl.WebGLShader` from a `web.gl.WebGLProgram`.

  `void gl.detachShader(program, shader);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/detachShader`"
  [this program shader]
  (-> this (.detachShader program shader)))

(defn disable
  "Method.

  The WebGLRenderingContext.disable() method of the WebGL API disables
  WebGL capabilities for this context.

  `void gl.disable(cap);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/disable`"
  [this cap]
  (-> this (.disable cap)))

(defn disable-vertex-attrib-array
  "Method.

  The WebGLRenderingContext.disableVertexAttribArray() method of
  WebGL API turns the generic vertex attribute array off at a given
  position.

  `void gl.disableVertexAttribArray(index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/disableVertexAttribArray`"
  [this index]
  (-> this (.disableVertexAttribArray index)))

(defn draw-arrays
  "Method.

  The WebGLRenderingContext.drawArrays() method of the WebGL API
  primitives from array data.

  `void gl.drawArrays(mode, first, count);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays`"
  [this mode first count]
  (-> this (.drawArrays mode first count)))

(defn draw-elements
  "Method.

  The WebGLRenderingContext.drawElements() method of the WebGL
  renders primitives from array data.

  `void gl.drawElements(mode, count, type, offset);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawElements`"
  [this mode count type offset]
  (-> this (.drawElements mode count type offset)))

(defn enable
  "Method.

  The WebGLRenderingContext.enable() method of the WebGL API enables
  WebGL capabilities for this context.

  `void gl.enable(cap);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/enable`"
  [this cap]
  (-> this (.enable cap)))

(defn enable-vertex-attrib-array
  "Method.

  The `web.gl.WebGLRenderingContext` method enableVertexAttribArray(),
  of the WebGL API, turns on the generic vertex attribute array
  the specified index into the list of attribute arrays.

  `void gl.enableVertexAttribArray(index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/enableVertexAttribArray`"
  [this index]
  (-> this (.enableVertexAttribArray index)))

(defn finish
  "Method.

  The WebGLRenderingContext.finish() method of the WebGL API blocks
  until all previously called commands are finished.

  `void gl.finish();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/finish`"
  [this ]
  (-> this (.finish)))

(defn flush
  "Method.

  The WebGLRenderingContext.flush() method of the WebGL API empties
  buffer commands, causing all commands to be executed as quickly
  possible.

  `void gl.flush();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/flush`"
  [this ]
  (-> this (.flush)))

(defn framebuffer-renderbuffer
  "Method.

  The WebGLRenderingContext.framebufferRenderbuffer() method of
  WebGL API attaches a `web.gl.WebGLRenderbuffer` object to a `web.gl.WebGLFramebuffer`

  `void gl.framebufferRenderbuffer(target, attachment, renderbuffertarget, renderbuffer);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/framebufferRenderbuffer`"
  [this target attachment renderbuffertarget renderbuffer]
  (-> this (.framebufferRenderbuffer target attachment renderbuffertarget renderbuffer)))

(defn framebuffer-texture2d
  "Method.

  The WebGLRenderingContext.framebufferTexture2D() method of the
  API attaches a texture to a `web.gl.WebGLFramebuffer`.

  `void gl.framebufferTexture2D(target, attachment, textarget, texture, level);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/framebufferTexture2D`"
  [this target attachment textarget texture level]
  (-> this (.framebufferTexture2D target attachment textarget texture level)))

(defn front-face
  "Method.

  The WebGLRenderingContext.frontFace() method of the WebGL API
  whether polygons are front- or back-facing by setting a winding

  `void gl.frontFace(mode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/frontFace`"
  [this mode]
  (-> this (.frontFace mode)))

(defn generate-mipmap
  "Method.

  The WebGLRenderingContext.generateMipmap() method of the WebGL
  generates a set of mipmaps for a `web.gl.WebGLTexture` object.

  `void gl.generateMipmap(target);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/generateMipmap`"
  [this target]
  (-> this (.generateMipmap target)))

(defn get-active-attrib
  "Method.

  The WebGLRenderingContext.getActiveAttrib() method of the WebGL
  returns a `web.gl.WebGLActiveInfo` object containing size, type,
  name of a vertex attribute. It is generally used when querying
  uniforms either for debugging or generic library creation.

  `WebGLActiveInfo gl.getActiveAttrib(program,index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getActiveAttrib`"
  [this program index]
  (-> this (.getActiveAttrib program index)))

(defn get-active-uniform
  "Method.

  The WebGLRenderingContext.getActiveUniform() method of the WebGL
  returns a `web.gl.WebGLActiveInfo` object containing size, type,
  name of a uniform attribute. It is generally used when querying
  uniforms either for debugging or generic library creation.

  `WebGLActiveInfo WebGLRenderingContext.getActiveUniform(program, index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getActiveUniform`"
  [this program index]
  (-> this (.getActiveUniform program index)))

(defn get-attached-shaders
  "Method.

  The WebGLRenderingContext.getAttachedShaders() method of the
  API returns a list of `web.gl.WebGLShader` objects attached to
  `web.gl.WebGLProgram`.

  `sequence<WebGLShader> gl.getAttachedShaders(program);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getAttachedShaders`"
  [this program]
  (-> this (.getAttachedShaders program)))

(defn get-attrib-location
  "Method.

  The WebGLRenderingContext.getAttribLocation() method of the WebGL
  returns the location of an attribute variable in a given `web.gl.WebGLProgram`.

  `GLint gl.getAttribLocation(program, name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getAttribLocation`"
  [this program name]
  (-> this (.getAttribLocation program name)))

(defn get-buffer-parameter
  "Method.

  The WebGLRenderingContext.getBufferParameter() method of the
  API returns information about the buffer.

  `any gl.getBufferParameter(target, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getBufferParameter`"
  [this target pname]
  (-> this (.getBufferParameter target pname)))

(defn get-context-attributes
  "Method.

  The WebGLRenderingContext.getContextAttributes() method returns
  WebGLContextAttributes object that contains the actual context
  Might return `js.null`, if the context is lost.

  `gl.getContextAttributes();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getContextAttributes`"
  [this ]
  (-> this (.getContextAttributes)))

(defn get-error
  "Method.

  The WebGLRenderingContext.getError() method of the WebGL API
  error information.

  `GLenum gl.getError();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getError`"
  [this ]
  (-> this (.getError)))

(defn get-extension
  "Method.

  The WebGLRenderingContext.getExtension() method enables a WebGL

  `gl.getExtension(name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getExtension`"
  [this name]
  (-> this (.getExtension name)))

(defn get-framebuffer-attachment-parameter
  "Method.

  The WebGLRenderingContext.getFramebufferAttachmentParameter()
  of the WebGL API returns information about a framebuffer's attachment.

  `any gl.getFramebufferAttachmentParameter(target, attachment, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getFramebufferAttachmentParameter`"
  [this target attachment pname]
  (-> this (.getFramebufferAttachmentParameter target attachment pname)))

(defn get-parameter
  "Method.

  The WebGLRenderingContext.getParameter() method of the WebGL
  returns a value for the passed parameter name.

  `any gl.getParameter(pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getParameter`"
  [this pname]
  (-> this (.getParameter pname)))

(defn get-program-info-log
  "Method.

  The WebGLRenderingContext.getProgramInfoLog returns the information
  for the specified `web.gl.WebGLProgram` object. It contains errors
  occurred during failed linking or validation of WebGLProgram

  `gl.getProgramInfoLog(program);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramInfoLog`"
  [this program]
  (-> this (.getProgramInfoLog program)))

(defn get-program-parameter
  "Method.

  The WebGLRenderingContext.getProgramParameter() method of the
  API returns information about the given program.

  `any gl.getProgramParameter(program, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getProgramParameter`"
  [this program pname]
  (-> this (.getProgramParameter program pname)))

(defn get-renderbuffer-parameter
  "Method.

  The WebGLRenderingContext.getRenderbufferParameter() method of
  WebGL API returns information about the renderbuffer.

  `any gl.getRenderbufferParameter(target, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getRenderbufferParameter`"
  [this target pname]
  (-> this (.getRenderbufferParameter target pname)))

(defn get-shader-info-log
  "Method.

  The WebGLRenderingContext.getShaderInfoLog returns the information
  for the specified `web.gl.WebGLShader` object. It contains warnings,
  and compile information.

  `gl.getShaderInfoLog(shader);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getShaderInfoLog`"
  [this shader]
  (-> this (.getShaderInfoLog shader)))

(defn get-shader-parameter
  "Method.

  The WebGLRenderingContext.getShaderParameter() method of the
  API returns information about the given shader.

  `any gl.getShaderParameter(shader, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getShaderParameter`"
  [this shader pname]
  (-> this (.getShaderParameter shader pname)))

(defn get-shader-precision-format
  "Method.

  The WebGLRenderingContext.getShaderPrecisionFormat() method of
  WebGL API returns a new `web.gl.WebGLShaderPrecisionFormat` object
  the range and precision for the specified shader numeric format.

  `WebGLShaderPrecisionFormat gl.getShaderPrecisionFormat(shaderType, precisionType);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getShaderPrecisionFormat`"
  [this shader-type precision-type]
  (-> this (.getShaderPrecisionFormat shader-type precision-type)))

(defn get-shader-source
  "Method.

  The WebGLRenderingContext.getShaderSource() method of the WebGL
  returns the source code of a `web.gl.WebGLShader` as a `web.dom.DOMString`.

  `DOMString gl.getShaderSource(shader);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getShaderSource`"
  [this shader]
  (-> this (.getShaderSource shader)))

(defn get-supported-extensions
  "Method.

  The WebGLRenderingContext.getSupportedExtensions() method returns
  list of all the supported WebGL extensions.

  `gl.getSupportedExtensions();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getSupportedExtensions`"
  [this ]
  (-> this (.getSupportedExtensions)))

(defn get-tex-parameter
  "Method.

  The WebGLRenderingContext.getTexParameter() method of the WebGL
  returns information about the given texture.

  `any gl.getTexParameter(target, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getTexParameter`"
  [this target pname]
  (-> this (.getTexParameter target pname)))

(defn get-uniform
  "Method.

  The WebGLRenderingContext.getUniform() method of the WebGL API
  the value of a uniform variable at a given location.

  `any gl.getUniform(program, location);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getUniform`"
  [this program location]
  (-> this (.getUniform program location)))

(defn get-uniform-location
  "Method.

  Part of the WebGL API, the `web.gl.WebGLRenderingContext` method
  returns the location of a specific uniform variable which is
  of a given `web.gl.WebGLProgram`.

  `WebGLUniformLocation = WebGLRenderingContext.getUniformLocation(program, name);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getUniformLocation`"
  [this program name]
  (-> this (.getUniformLocation program name)))

(defn get-vertex-attrib
  "Method.

  The WebGLRenderingContext.getVertexAttrib() method of the WebGL
  returns information about a vertex attribute at a given position.

  `any gl.getVertexAttrib(index, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getVertexAttrib`"
  [this index pname]
  (-> this (.getVertexAttrib index pname)))

(defn get-vertex-attrib-offset
  "Method.

  The WebGLRenderingContext.getVertexAttribOffset() method of the
  API returns the address of a specified vertex attribute.

  `GLintptr gl.getVertexAttribOffset(index, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getVertexAttribOffset`"
  [this index pname]
  (-> this (.getVertexAttribOffset index pname)))

(defn hint
  "Method.

  The WebGLRenderingContext.hint() method of the WebGL API specifies
  for certain behaviors. The interpretation of these hints depend
  the implementation.

  `void gl.hint(target, mode);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/hint`"
  [this target mode]
  (-> this (.hint target mode)))

(defn is-buffer
  "Method.

  The WebGLRenderingContext.isBuffer() method of the WebGL API
  true if the passed `web.gl.WebGLBuffer` is valid and false otherwise.

  `GLboolean gl.isBuffer(buffer);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isBuffer`"
  [this buffer]
  (-> this (.isBuffer buffer)))

(defn is-context-lost
  "Method.

  The WebGLRenderingContext.isContextLost() method returns a `js.Boolean`
  whether or not the WebGL context has been lost.

  `gl.isContextLost();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isContextLost`"
  [this ]
  (-> this (.isContextLost)))

(defn is-enabled
  "Method.

  The WebGLRenderingContext.isEnabled() method of the WebGL API
  whether a specific WebGL capability is enabled or not for this

  `GLboolean gl.isEnabled(cap);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isEnabled`"
  [this cap]
  (-> this (.isEnabled cap)))

(defn is-framebuffer
  "Method.

  The WebGLRenderingContext.isFramebuffer() method of the WebGL
  returns true if the passed `web.gl.WebGLFramebuffer` is valid
  false otherwise.

  `GLboolean gl.isFramebuffer(framebuffer);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isFramebuffer`"
  [this framebuffer]
  (-> this (.isFramebuffer framebuffer)))

(defn is-program
  "Method.

  The WebGLRenderingContext.isProgram() method of the WebGL API
  true if the passed `web.gl.WebGLProgram` is valid, false otherwise.

  `GLboolean gl.isProgram(program);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isProgram`"
  [this program]
  (-> this (.isProgram program)))

(defn is-renderbuffer
  "Method.

  The WebGLRenderingContext.isRenderbuffer() method of the WebGL
  returns true if the passed `web.gl.WebGLRenderbuffer` is valid
  false otherwise.

  `GLboolean gl.isRenderbuffer(renderbuffer);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isRenderbuffer`"
  [this renderbuffer]
  (-> this (.isRenderbuffer renderbuffer)))

(defn is-shader
  "Method.

  The WebGLRenderingContext.isShader() method of the WebGL API
  true if the passed `web.gl.WebGLShader` is valid, false otherwise.

  `GLboolean gl.isShader(shader);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isShader`"
  [this shader]
  (-> this (.isShader shader)))

(defn is-texture
  "Method.

  The WebGLRenderingContext.isTexture() method of the WebGL API
  true if the passed `web.gl.WebGLTexture` is valid and false otherwise.

  `GLboolean gl.isTexture(texture);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/isTexture`"
  [this texture]
  (-> this (.isTexture texture)))

(defn line-width
  "Method.

  The WebGLRenderingContext.lineWidth() method of the WebGL API
  the line width of rasterized lines.

  `void gl.lineWidth(width);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/lineWidth`"
  [this width]
  (-> this (.lineWidth width)))

(defn link-program
  "Method.

  The WebGLRenderingContext.linkProgram() method of the WebGL API
  a given `web.gl.WebGLProgram` to the attached vertex and fragment

  `void gl.linkProgram(program);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/linkProgram`"
  [this program]
  (-> this (.linkProgram program)))

(defn pixel-storei
  "Method.

  The WebGLRenderingContext.pixelStorei() method of the WebGL API
  the pixel storage modes.

  `void gl.pixelStorei(pname, param);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/pixelStorei`"
  [this pname param]
  (-> this (.pixelStorei pname param)))

(defn polygon-offset
  "Method.

  The WebGLRenderingContext.polygonOffset() method of the WebGL
  specifies the scale factors and units to calculate depth values.

  `void gl.polygonOffset(factor, units);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/polygonOffset`"
  [this factor units]
  (-> this (.polygonOffset factor units)))

(defn read-pixels
  "Method.

  The WebGLRenderingContext.readPixels() method of the WebGL API
  a block of pixels from a specified rectangle of the current color
  into an `web.typed.ArrayBufferView` object.

  `// WebGL1:
  void gl.readPixels(x, y, width, height, format, type, pixels);

  // WebGL2:
  void gl.readPixels(x, y, width, height, format, type, GLintptr offset);
  void gl.readPixels(x, y, width, height, format, type, ArrayBufferView pixels, GLuint dstOffset);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/readPixels`"
  [this & args]
  (apply (-> this .-readPixels) (concat [this] args)))

(defn renderbuffer-storage
  "Method.

  The WebGLRenderingContext.renderbufferStorage() method of the
  API creates and initializes a renderbuffer object's data store.

  `void gl.renderbufferStorage(target, internalFormat, width, height);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/renderbufferStorage`"
  [this target internal-format width height]
  (-> this (.renderbufferStorage target internal-format width height)))

(defn sample-coverage
  "Method.

  The WebGLRenderingContext.sampleCoverage() method of the WebGL
  specifies multi-sample coverage parameters for anti-aliasing

  `void gl.sampleCoverage(value, invert);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/sampleCoverage`"
  [this value invert]
  (-> this (.sampleCoverage value invert)))

(defn scissor
  "Method.

  The WebGLRenderingContext.scissor() method of the WebGL API sets
  scissor box, which limits the drawing to a specified rectangle.

  `void gl.scissor(x, y, width, height);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/scissor`"
  [this x y width height]
  (-> this (.scissor x y width height)))

(defn shader-source
  "Method.

  The WebGLRenderingContext.shaderSource() method of the WebGL
  sets the source code of a `web.gl.WebGLShader`.

  `void gl.shaderSource(shader, source);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/shaderSource`"
  [this shader source]
  (-> this (.shaderSource shader source)))

(defn stencil-func
  "Method.

  The WebGLRenderingContext.stencilFunc() method of the WebGL API
  the front and back function and reference value for stencil testing.

  `void gl.stencilFunc(func, ref, mask);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/stencilFunc`"
  [this func ref mask]
  (-> this (.stencilFunc func ref mask)))

(defn stencil-func-separate
  "Method.

  The WebGLRenderingContext.stencilFuncSeparate() method of the
  API sets the front and/or back function and reference value for
  testing.

  `void gl.stencilFuncSeparate(face, func, ref, mask);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/stencilFuncSeparate`"
  [this face func ref mask]
  (-> this (.stencilFuncSeparate face func ref mask)))

(defn stencil-mask
  "Method.

  The WebGLRenderingContext.stencilMask() method of the WebGL API
  enabling and disabling of both the front and back writing of
  bits in the stencil planes.

  `void gl.stencilMask(mask);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/stencilMask`"
  [this mask]
  (-> this (.stencilMask mask)))

(defn stencil-mask-separate
  "Method.

  The WebGLRenderingContext.stencilMaskSeparate() method of the
  API controls enabling and disabling of front and/or back writing
  individual bits in the stencil planes.

  `void gl.stencilMaskSeparate(face, mask);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/stencilMaskSeparate`"
  [this face mask]
  (-> this (.stencilMaskSeparate face mask)))

(defn stencil-op
  "Method.

  The WebGLRenderingContext.stencilOp() method of the WebGL API
  both the front and back-facing stencil test actions.

  `void gl.stencilOp(fail, zfail, zpass);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/stencilOp`"
  [this fail zfail zpass]
  (-> this (.stencilOp fail zfail zpass)))

(defn stencil-op-separate
  "Method.

  The WebGLRenderingContext.stencilOpSeparate() method of the WebGL
  sets the front and/or back-facing stencil test actions.

  `void gl.stencilOpSeparate(face, fail, zfail, zpass);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/stencilOpSeparate`"
  [this face fail zfail zpass]
  (-> this (.stencilOpSeparate face fail zfail zpass)))

(defn tex-image2d
  "Method.

  The WebGLRenderingContext.texImage2D() method of the WebGL API
  a two-dimensional texture image.

  `// WebGL1:
  void gl.texImage2D(target, level, internalformat, width, height, border, format, type, ArrayBufferView? pixels);
  void gl.texImage2D(target, level, internalformat, format, type, ImageData? pixels);
  void gl.texImage2D(target, level, internalformat, format, type, HTMLImageElement? pixels);
  void gl.texImage2D(target, level, internalformat, format, type, HTMLCanvasElement? pixels);
  void gl.texImage2D(target, level, internalformat, format, type, HTMLVideoElement? pixels);
  void gl.texImage2D(target, level, internalformat, format, type, ImageBitmap? pixels);

  // WebGL2:
  void gl.texImage2D(target, level, internalformat, width, height, border, format, type, GLintptr offset);
  void gl.texImage2D(target, level, internalformat, width, height, border, format, type, HTMLCanvasElement source);
  void gl.texImage2D(target, level, internalformat, width, height, border, format, type, HTMLImageElement source);
  void gl.texImage2D(target, level, internalformat, width, height, border, format, type, HTMLVideoElement source);
  void gl.texImage2D(target, level, internalformat, width, height, border, format, type, ImageBitmap source);
  void gl.texImage2D(target, level, internalformat, width, height, border, format, type, ImageData source);
  void gl.texImage2D(target, level, internalformat, width, height, border, format, type, ArrayBufferView srcData, srcOffset);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texImage2D`"
  [this & args]
  (apply (-> this .-texImage2D) (concat [this] args)))

(defn tex-parameter
  "Method.

  The WebGLRenderingContext.texParameter[fi]() methods of the WebGL
  set texture parameters.

  `void gl.texParameterf(GLenum target, GLenum pname, GLfloat param);
  void gl.texParameteri(GLenum target, GLenum pname, GLint param);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texParameter`"
  [this & args]
  (apply (-> this .-texParameter) (concat [this] args)))

(defn tex-sub-image2d
  "Method.

  The WebGLRenderingContext.texSubImage2D() method of the WebGL
  specifies a sub-rectangle of the current texture.

  `// WebGL 1:
  void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, ArrayBufferView? pixels);
  void gl.texSubImage2D(target, level, xoffset, yoffset, format, type, ImageData? pixels);
  void gl.texSubImage2D(target, level, xoffset, yoffset, format, type, HTMLImageElement? pixels);
  void gl.texSubImage2D(target, level, xoffset, yoffset, format, type, HTMLCanvasElement? pixels);
  void gl.texSubImage2D(target, level, xoffset, yoffset, format, type, HTMLVideoElement? pixels);
  void gl.texSubImage2D(target, level, xoffset, yoffset, format, type, ImageBitmap? pixels);

  // WebGL 2:
  void gl.texSubImage2D(target, level, xoffset, yoffset, format, type, GLintptr offset);
  void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, HTMLCanvasElement source);
  void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, HTMLImageElement source);
  void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, HTMLVideoElement source);
  void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, ImageBitmap source);
  void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, ImageData source);
  void gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, ArrayBufferView srcData, srcOffset);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/texSubImage2D`"
  [this & args]
  (apply (-> this .-texSubImage2D) (concat [this] args)))

(defn uniform
  "Method.

  The WebGLRenderingContext.uniform[1234][fi][v]() methods of the
  API specify values of uniform variables.

  `void gl.uniform1f(location, v0);
  void gl.uniform1fv(location, value);
  void gl.uniform1i(location, v0);
  void gl.uniform1iv(location, value);

  void gl.uniform2f(location, v0, v1);
  void gl.uniform2fv(location, value);
  void gl.uniform2i(location, v0, v1);
  void gl.uniform2iv(location, value);

  void gl.uniform3f(location, v0, v1, v2);
  void gl.uniform3fv(location, value);
  void gl.uniform3i(location, v0, v1, v2);
  void gl.uniform3iv(location, value);

  void gl.uniform4f(location, v0, v1, v2, v3);
  void gl.uniform4fv(location, value);
  void gl.uniform4i(location, v0, v1, v2, v3);
  void gl.uniform4iv(location, value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniform`"
  [this & args]
  (apply (-> this .-uniform) (concat [this] args)))

(defn uniform-matrix
  "Method.

  The WebGLRenderingContext.uniformMatrix[234]fv() methods of the
  API specify matrix values for uniform variables.

  `WebGLRenderingContext.uniformMatrix2fv(location, transpose, value);
  WebGLRenderingContext.uniformMatrix3fv(location, transpose, value);
  WebGLRenderingContext.uniformMatrix4fv(location, transpose, value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/uniformMatrix`"
  [this & args]
  (apply (-> this .-uniformMatrix) (concat [this] args)))

(defn use-program
  "Method.

  The WebGLRenderingContext.useProgram() method of the WebGL API
  the specified `web.gl.WebGLProgram` as part of the current rendering

  `void gl.useProgram(program);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/useProgram`"
  [this program]
  (-> this (.useProgram program)))

(defn validate-program
  "Method.

  The WebGLRenderingContext.validateProgram() method of the WebGL
  validates a `web.gl.WebGLProgram`. It checks if it is successfully
  and if it can be used in the current WebGL state.

  `void gl.validateProgram(program);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/validateProgram`"
  [this program]
  (-> this (.validateProgram program)))

(defn vertex-attrib
  "Method.

  The WebGLRenderingContext.vertexAttrib[1234]f[v]() methods of
  WebGL API specify constant values for generic vertex attributes.

  `void gl.vertexAttrib1f(index, v0);
  void gl.vertexAttrib2f(index, v0, v1);
  void gl.vertexAttrib3f(index, v0, v1, v2);
  void gl.vertexAttrib4f(index, v0, v1, v2, v3);

  void gl.vertexAttrib1fv(index, value);
  void gl.vertexAttrib2fv(index, value);
  void gl.vertexAttrib3fv(index, value);
  void gl.vertexAttrib4fv(index, value);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttrib`"
  [this & args]
  (apply (-> this .-vertexAttrib) (concat [this] args)))

(defn vertex-attrib-pointer
  "Method.

  The WebGLRenderingContext.vertexAttribPointer() method of the
  API binds the buffer currently bound to gl.ARRAY_BUFFER to a
  vertex attribute of the current vertex buffer object and specifies
  layout.

  `void gl.vertexAttribPointer(index, size, type, normalized, stride, offset);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer`"
  [this index size type normalized stride offset]
  (-> this (.vertexAttribPointer index size type normalized stride offset)))

(defn viewport
  "Method.

  The WebGLRenderingContext.viewport() method of the WebGL API
  the viewport, which specifies the affine transformation of x
  y from normalized device coordinates to window coordinates.

  `void gl.viewport(x, y, width, height);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/viewport`"
  [this x y width height]
  (-> this (.viewport x y width height)))

(defn canvas
  "Property.

  The WebGLRenderingContext.canvas property is a read-only reference
  the `web.canvas.HTMLCanvasElement` or `web.canvas.OffscreenCanvas`
  that is associated with the context. It might be `js.null` if
  is not associated with a `<canvas>` element or an `web.canvas.OffscreenCanvas`

  `gl.canvas;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/canvas`"
  [this]
  (-> this (.canvas)))

(defn drawing-buffer-height
  "Property.

  The read-only WebGLRenderingContext.drawingBufferHeight property
  the actual height of the current drawing buffer. It should match
  height attribute of the `<canvas>` element associated with this
  but might differ if the implementation is not able to provide
  requested height.

  `gl.drawingBufferHeight;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawingBufferHeight`"
  [this]
  (-> this (.drawingBufferHeight)))

(defn drawing-buffer-width
  "Property.

  The read-only WebGLRenderingContext.drawingBufferWidth property
  the actual width of the current drawing buffer. It should match
  width attribute of the `<canvas>` element associated with this
  but might differ if the implementation is not able to provide
  requested width.

  `gl.drawingBufferWidth;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawingBufferWidth`"
  [this]
  (-> this (.drawingBufferWidth)))

