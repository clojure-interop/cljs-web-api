(ns web.gl.EXT_disjoint_timer_query
  "The EXT_disjoint_timer_query extension is part of the WebGL API
  provides a way to measure the duration of a set of GL commands,
  stalling the rendering pipeline."
  (:refer-clojure :exclude []))

(defn create-query-ext
  "Method.

  The EXT_disjoint_timer_query.createQueryEXT() method of the WebGL
  creates and initializes `web.gl.WebGLQuery` objects, which track
  time needed to fully complete a set of GL commands.

  `WebGLTimerQueryEXT ext.createQueryEXT();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/createQueryEXT`"
  [this ]
  (-> this (.createQueryEXT)))

(defn begin-query-ext
  "Method.

  The EXT_disjoint_timer_query.beginQueryEXT() method of the WebGL
  starts a timer query.

  `void ext.beginQueryEXT(target, query);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/beginQueryEXT`"
  [this target query]
  (-> this (.beginQueryEXT target query)))

(defn delete-query-ext
  "Method.

  The EXT_disjoint_timer_query.deleteQueryEXT() method of the WebGL
  deletes a given `web.gl.WebGLQuery` object.

  `void ext.deleteQueryEXT(query);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/deleteQueryEXT`"
  [this query]
  (-> this (.deleteQueryEXT query)))

(defn end-query-ext
  "Method.

  The EXT_disjoint_timer_query.endQueryEXT() method of the WebGL
  ends a timer query.

  `void ext.endQueryEXT(target);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/endQueryEXT`"
  [this target]
  (-> this (.endQueryEXT target)))

(defn get-query-ext
  "Method.

  The EXT_disjoint_timer_query.getQueryEXT() method of the WebGL
  returns information about a query target.

  `any ext.getQueryEXT(target, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/getQueryEXT`"
  [this target pname]
  (-> this (.getQueryEXT target pname)))

(defn get-query-object-ext
  "Method.

  The EXT_disjoint_timer_query.getQueryObjectEXT() method of the
  API returns the state of a query object.

  `any ext.getQueryObjectEXT(query, pname);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/getQueryObjectEXT`"
  [this query pname]
  (-> this (.getQueryObjectEXT query pname)))

(defn is-query-ext
  "Method.

  The EXT_disjoint_timer_query.isQueryEXT() method of the WebGL
  returns true if the passed object is a `web.gl.WebGLQuery` object.

  `GLBoolean ext.isQueryEXT(query);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/isQueryEXT`"
  [this query]
  (-> this (.isQueryEXT query)))

(defn query-counter-ext
  "Method.

  The EXT_disjoint_timer_query.queryCounterEXT() method of the
  API records the current time into the corresponding query object.

  `void ext.queryCounterEXT(query, target);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/queryCounterEXT`"
  [this query target]
  (-> this (.queryCounterEXT query target)))

