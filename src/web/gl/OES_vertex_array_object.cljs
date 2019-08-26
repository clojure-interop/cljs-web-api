(ns web.gl.OES_vertex_array_object
  "The OES_vertex_array_object extension is part of the WebGL API
  provides vertex array objects (VAOs) which encapsulate vertex
  states. These objects keep pointers to vertex data and provide
  for different sets of vertex data."
  (:refer-clojure :exclude []))

(defn create-vertex-array-oes
  "Method.

  The OES_vertex_array_object.createVertexArrayOES() method of
  WebGL API creates and initializes a `web.gl.WebGLVertexArrayObject`
  that represents a vertex array object (VAO) pointing to vertex
  data and which provides names for different sets of vertex data.

  `WebGLVertexArrayObjectOES ext.createVertexArrayOES();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OES_vertex_array_object/createVertexArrayOES`"
  [this ]
  (-> this (.createVertexArrayOES)))

(defn bind-vertex-array-oes
  "Method.

  The OES_vertex_array_object.bindVertexArrayOES() method of the
  API binds a passed `web.gl.WebGLVertexArrayObject` object to
  buffer.

  `void ext.bindVertexArrayOES(arrayObject);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OES_vertex_array_object/bindVertexArrayOES`"
  [this array-object]
  (-> this (.bindVertexArrayOES array-object)))

(defn delete-vertex-array-oes
  "Method.

  The OES_vertex_array_object.deleteVertexArrayOES() method of
  WebGL API deletes a given `web.gl.WebGLVertexArrayObject` object.

  `void ext.deleteVertexArrayOES(arrayObject);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OES_vertex_array_object/deleteVertexArrayOES`"
  [this array-object]
  (-> this (.deleteVertexArrayOES array-object)))

(defn is-vertex-array-oes
  "Method.

  The OES_vertex_array_object.isVertexArrayOES() method of the
  API returns true if the passed object is a `web.gl.WebGLVertexArrayObject`

  `GLBoolean ext.isVertexArrayOES(arrayObject);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/OES_vertex_array_object/isVertexArrayOES`"
  [this array-object]
  (-> this (.isVertexArrayOES array-object)))

