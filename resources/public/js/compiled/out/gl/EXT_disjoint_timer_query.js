// Compiled by ClojureScript 1.9.946 {}
goog.provide('gl.EXT_disjoint_timer_query');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The EXT_disjoint_timer_query.beginQueryEXT() method of the WebGL
 *   starts a timer query.
 * 
 *   `void ext.beginQueryEXT(target, query);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/beginQueryEXT`
 */
gl.EXT_disjoint_timer_query.begin_query_ext = (function gl$EXT_disjoint_timer_query$begin_query_ext(this$,target,query){
return this$.beginQueryEXT(target,query);
});
/**
 * Method.
 * 
 *   The EXT_disjoint_timer_query.createQueryEXT() method of the WebGL
 *   creates and initializes `gl.WebGLQuery` objects, which track
 *   time needed to fully complete a set of GL commands.
 * 
 *   `WebGLTimerQueryEXT ext.createQueryEXT();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/createQueryEXT`
 */
gl.EXT_disjoint_timer_query.create_query_ext = (function gl$EXT_disjoint_timer_query$create_query_ext(this$){
return this$.createQueryEXT();
});
/**
 * Method.
 * 
 *   The EXT_disjoint_timer_query.deleteQueryEXT() method of the WebGL
 *   deletes a given `gl.WebGLQuery` object.
 * 
 *   `void ext.deleteQueryEXT(query);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/deleteQueryEXT`
 */
gl.EXT_disjoint_timer_query.delete_query_ext = (function gl$EXT_disjoint_timer_query$delete_query_ext(this$,query){
return this$.deleteQueryEXT(query);
});
/**
 * Method.
 * 
 *   The EXT_disjoint_timer_query.endQueryEXT() method of the WebGL
 *   ends a timer query.
 * 
 *   `void ext.endQueryEXT(target);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/endQueryEXT`
 */
gl.EXT_disjoint_timer_query.end_query_ext = (function gl$EXT_disjoint_timer_query$end_query_ext(this$,target){
return this$.endQueryEXT(target);
});
/**
 * Method.
 * 
 *   The EXT_disjoint_timer_query.getQueryEXT() method of the WebGL
 *   returns information about a query target.
 * 
 *   `any ext.getQueryEXT(target, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/getQueryEXT`
 */
gl.EXT_disjoint_timer_query.get_query_ext = (function gl$EXT_disjoint_timer_query$get_query_ext(this$,target,pname){
return this$.getQueryEXT(target,pname);
});
/**
 * Method.
 * 
 *   The EXT_disjoint_timer_query.getQueryObjectEXT() method of the
 *   API returns the state of a query object.
 * 
 *   `any ext.getQueryObjectEXT(query, pname);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/getQueryObjectEXT`
 */
gl.EXT_disjoint_timer_query.get_query_object_ext = (function gl$EXT_disjoint_timer_query$get_query_object_ext(this$,query,pname){
return this$.getQueryObjectEXT(query,pname);
});
/**
 * Method.
 * 
 *   The EXT_disjoint_timer_query.isQueryEXT() method of the WebGL
 *   returns true if the passed object is a `gl.WebGLQuery` object.
 * 
 *   `GLBoolean ext.isQueryEXT(query);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/isQueryEXT`
 */
gl.EXT_disjoint_timer_query.is_query_ext = (function gl$EXT_disjoint_timer_query$is_query_ext(this$,query){
return this$.isQueryEXT(query);
});
/**
 * Method.
 * 
 *   The EXT_disjoint_timer_query.queryCounterEXT() method of the
 *   API records the current time into the corresponding query object.
 * 
 *   `void ext.queryCounterEXT(query, target);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/EXT_disjoint_timer_query/queryCounterEXT`
 */
gl.EXT_disjoint_timer_query.query_counter_ext = (function gl$EXT_disjoint_timer_query$query_counter_ext(this$,query,target){
return this$.queryCounterEXT(query,target);
});

//# sourceMappingURL=EXT_disjoint_timer_query.js.map?rel=1565798836111
