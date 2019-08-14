// Compiled by ClojureScript 1.9.946 {}
goog.provide('performance.Performance');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The clearMarks() method removes the named mark from the browser's
 *   entry buffer. If the method is called with no arguments, all
 *   entries` with an `web.entry type` of \"mark\" will be removed
 *   the performance entry buffer.
 * 
 *   `performance.clearMarks();
 *   performance.clearMarks(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/clearMarks`
 */
performance.Performance.clear_marks = (function performance$Performance$clear_marks(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43924 = arguments.length;
var i__42557__auto___43925 = (0);
while(true){
if((i__42557__auto___43925 < len__42556__auto___43924)){
args__42563__auto__.push((arguments[i__42557__auto___43925]));

var G__43926 = (i__42557__auto___43925 + (1));
i__42557__auto___43925 = G__43926;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return performance.Performance.clear_marks.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

performance.Performance.clear_marks.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.clearMarks,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

performance.Performance.clear_marks.cljs$lang$maxFixedArity = (1);

performance.Performance.clear_marks.cljs$lang$applyTo = (function (seq43922){
var G__43923 = cljs.core.first.call(null,seq43922);
var seq43922__$1 = cljs.core.next.call(null,seq43922);
return performance.Performance.clear_marks.cljs$core$IFn$_invoke$arity$variadic(G__43923,seq43922__$1);
});

/**
 * Method.
 * 
 *   The clearMeasures() method removes the named measure from the
 *   performance entry buffer. If the method is called with no arguments,
 *   `web.performance entries` with an `web.entry type` of \"measure\"
 *   be removed from the performance entry buffer.
 * 
 *   `performance.clearMeasures();
 *   performance.clearMeasures(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/clearMeasures`
 */
performance.Performance.clear_measures = (function performance$Performance$clear_measures(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43929 = arguments.length;
var i__42557__auto___43930 = (0);
while(true){
if((i__42557__auto___43930 < len__42556__auto___43929)){
args__42563__auto__.push((arguments[i__42557__auto___43930]));

var G__43931 = (i__42557__auto___43930 + (1));
i__42557__auto___43930 = G__43931;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return performance.Performance.clear_measures.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

performance.Performance.clear_measures.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.clearMeasures,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

performance.Performance.clear_measures.cljs$lang$maxFixedArity = (1);

performance.Performance.clear_measures.cljs$lang$applyTo = (function (seq43927){
var G__43928 = cljs.core.first.call(null,seq43927);
var seq43927__$1 = cljs.core.next.call(null,seq43927);
return performance.Performance.clear_measures.cljs$core$IFn$_invoke$arity$variadic(G__43928,seq43927__$1);
});

/**
 * Method.
 * 
 *   The clearResourceTimings() method removes all `web.performance
 *   with an `web.entryType` of \"resource\" from the browser's performance
 *   buffer and sets the size of the performance data buffer to zero.
 *   set the size of the browser's performance data buffer, use the
 *   method.
 * 
 *   `performance.clearResourceTimings();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/clearResourceTimings`
 */
performance.Performance.clear_resource_timings = (function performance$Performance$clear_resource_timings(this$){
return this$.clearResourceTimings();
});
/**
 * Method.
 * 
 *   The getEntries() method returns a list of all `performance.PerformanceEntry`
 *   for the page. The list's members (entries) can be created by
 *   performance marks or measures (for example by calling the `web.mark()`
 *   at explicit points in time. If you are only interested in performance
 *   of certain types or that have certain names, see `web.getEntriesByType()`
 *   `web.getEntriesByName()`.
 * 
 *   `General syntax:
 * 
 * 
 * 
 *   entries = window.performance.getEntries();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntries`
 */
performance.Performance.get_entries = (function performance$Performance$get_entries(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43934 = arguments.length;
var i__42557__auto___43935 = (0);
while(true){
if((i__42557__auto___43935 < len__42556__auto___43934)){
args__42563__auto__.push((arguments[i__42557__auto___43935]));

var G__43936 = (i__42557__auto___43935 + (1));
i__42557__auto___43935 = G__43936;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return performance.Performance.get_entries.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

performance.Performance.get_entries.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.getEntries,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

performance.Performance.get_entries.cljs$lang$maxFixedArity = (1);

performance.Performance.get_entries.cljs$lang$applyTo = (function (seq43932){
var G__43933 = cljs.core.first.call(null,seq43932);
var seq43932__$1 = cljs.core.next.call(null,seq43932);
return performance.Performance.get_entries.cljs$core$IFn$_invoke$arity$variadic(G__43933,seq43932__$1);
});

/**
 * Method.
 * 
 *   The getEntriesByName() method returns a list of `performance.PerformanceEntry`
 *   for the given name and type. The list's members (entries) can
 *   created by making performance marks or measures (for example
 *   calling the `web.mark()` method) at explicit points in time.
 * 
 *   `entries = window.performance.getEntriesByName(name, type);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByName`
 */
performance.Performance.get_entries_by_name = (function performance$Performance$get_entries_by_name(this$,name,type){
return this$.getEntriesByName(name,type);
});
/**
 * Method.
 * 
 *   The getEntriesByType() method returns a list of `performance.PerformanceEntry`
 *   for a given type. The list's members (entries) can be created
 *   making performance marks or measures (for example by calling
 *   `web.mark()` method) at explicit points in time.
 * 
 *   `entries = window.performance.getEntriesByType(type);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/getEntriesByType`
 */
performance.Performance.get_entries_by_type = (function performance$Performance$get_entries_by_type(this$,type){
return this$.getEntriesByType(type);
});
/**
 * Method.
 * 
 *   The mark() method creates a `web.timestamp` in the browser's
 *   entry buffer with the given name. The application defined timestamp
 *   be retrieved by one of the `performance.Performance` interface's
 *   methods (`web.getEntries()`, `web.getEntriesByName()` or `web.getEntriesByType()`).
 * 
 *   `performance.mark(name);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/mark`
 */
performance.Performance.mark = (function performance$Performance$mark(this$,name){
return this$.mark(name);
});
/**
 * Method.
 * 
 *   The measure() method creates a named `web.timestamp` in the browser's
 *   entry buffer between marks, the navigation start time, or the
 *   time. When measuring between two marks, there is a start mark
 *   end mark, respectively. The named timestamp is referred to as
 *   measure.
 * 
 *   `performance.measure(name);
 *   performance.measure(name, startMark);
 *   performance.measure(name, startMark, endMark);
 *   performance.measure(name, undefined, endMark);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/measure`
 */
performance.Performance.measure = (function performance$Performance$measure(var_args){
var args__42563__auto__ = [];
var len__42556__auto___43939 = arguments.length;
var i__42557__auto___43940 = (0);
while(true){
if((i__42557__auto___43940 < len__42556__auto___43939)){
args__42563__auto__.push((arguments[i__42557__auto___43940]));

var G__43941 = (i__42557__auto___43940 + (1));
i__42557__auto___43940 = G__43941;
continue;
} else {
}
break;
}

var argseq__42564__auto__ = ((((1) < args__42563__auto__.length))?(new cljs.core.IndexedSeq(args__42563__auto__.slice((1)),(0),null)):null);
return performance.Performance.measure.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__42564__auto__);
});

performance.Performance.measure.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
return cljs.core.apply.call(null,this$.measure,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null),args));
});

performance.Performance.measure.cljs$lang$maxFixedArity = (1);

performance.Performance.measure.cljs$lang$applyTo = (function (seq43937){
var G__43938 = cljs.core.first.call(null,seq43937);
var seq43937__$1 = cljs.core.next.call(null,seq43937);
return performance.Performance.measure.cljs$core$IFn$_invoke$arity$variadic(G__43938,seq43937__$1);
});

/**
 * Method.
 * 
 *   The performance.now() method returns a `dom.DOMHighResTimeStamp`,
 *   in milliseconds.
 * 
 *   `t = performance.now();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/now`
 */
performance.Performance.now = (function performance$Performance$now(this$){
return this$.now();
});
/**
 * Method.
 * 
 *   The setResourceTimingBufferSize() method sets the browser's resource
 *   buffer size to the specified number of \"resource\" `web.performance
 *   type` objects.
 * 
 *   `performance.setResourceTimingBufferSize(maxSize);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/setResourceTimingBufferSize`
 */
performance.Performance.set_resource_timing_buffer_size = (function performance$Performance$set_resource_timing_buffer_size(this$,max_size){
return this$.setResourceTimingBufferSize(max_size);
});
/**
 * Method.
 * 
 *   The toJSON() method of the `performance.Performance` interface
 *   a standard serializer: it returns a JSON representation of the
 *   object's properties.
 * 
 *   `myPerf = performance.toJSON()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/toJSON`
 */
performance.Performance.to_json = (function performance$Performance$to_json(this$){
return this$.toJSON();
});
/**
 * Property.
 * 
 *   The legacy Performance.navigation read-only property returns
 *   `performance.PerformanceNavigation` object representing the type
 *   navigation that occurs in the given browsing context, such as
 *   number of redirections needed to fetch the resource.
 * 
 *   `navObject = performance.navigation;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/navigation`
 */
performance.Performance.navigation = (function performance$Performance$navigation(this$){
return this$.navigation();
});
/**
 * Property.
 * 
 *   The onresourcetimingbufferfull property is an event handler that
 *   be called when the resourcetimingbufferfull event is fired. This
 *   is fired when the browser's resource timing performance buffer
 *   full.
 * 
 *   `callback = performance.onresourcetimingbufferfull = buffer_full_cb;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/onresourcetimingbufferfull`
 */
performance.Performance.onresourcetimingbufferfull = (function performance$Performance$onresourcetimingbufferfull(this$){
return this$.onresourcetimingbufferfull();
});
/**
 * Property.
 * 
 *   The onresourcetimingbufferfull property is an event handler that
 *   be called when the resourcetimingbufferfull event is fired. This
 *   is fired when the browser's resource timing performance buffer
 *   full.
 * 
 *   `callback = performance.onresourcetimingbufferfull = buffer_full_cb;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/onresourcetimingbufferfull`
 */
performance.Performance.set_onresourcetimingbufferfull_BANG_ = (function performance$Performance$set_onresourcetimingbufferfull_BANG_(this$,val){
return (this$["onresourcetimingbufferfull"] = val);
});
/**
 * Property.
 * 
 *   The timeOrigin read-only property of the `performance.Performance`
 *   returns the high resolution timestamp of the start time of the
 *   measurement.
 * 
 *   `var timeOrigin = performance.timeOrigin`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/timeOrigin`
 */
performance.Performance.time_origin = (function performance$Performance$time_origin(this$){
return this$.timeOrigin();
});
/**
 * Property.
 * 
 *   The timeOrigin read-only property of the `performance.Performance`
 *   returns the high resolution timestamp of the start time of the
 *   measurement.
 * 
 *   `var timeOrigin = performance.timeOrigin`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/timeOrigin`
 */
performance.Performance.set_time_origin_BANG_ = (function performance$Performance$set_time_origin_BANG_(this$,val){
return (this$["timeOrigin"] = val);
});
/**
 * Property.
 * 
 *   The legacy Performance.timing read-only property returns a `performance.PerformanceTiming`
 *   containing latency-related performance information.
 * 
 *   `timingInfo = performance.timing;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/timing`
 */
performance.Performance.timing = (function performance$Performance$timing(this$){
return this$.timing();
});
/**
 * Property.
 * 
 *   None.
 * 
 *   `timingInfo = performance.memory`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory`
 */
performance.Performance.memory = (function performance$Performance$memory(this$){
return this$.memory();
});
/**
 * Property.
 * 
 *   None.
 * 
 *   `timingInfo = performance.memory`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/Performance/memory`
 */
performance.Performance.set_memory_BANG_ = (function performance$Performance$set_memory_BANG_(this$,val){
return (this$["memory"] = val);
});

//# sourceMappingURL=Performance.js.map?rel=1565798810601
