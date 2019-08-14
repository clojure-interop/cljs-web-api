// Compiled by ClojureScript 1.9.946 {}
goog.provide('performance.PerformanceEntry');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The toJSON() method is a serializer; it returns a JSON representation
 *   the `web.performance entry` object.
 * 
 *   `json = perfEntry.toJSON();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/toJSON`
 */
performance.PerformanceEntry.to_json = (function performance$PerformanceEntry$to_json(this$){
return this$.toJSON();
});
/**
 * Property.
 * 
 *   The duration property returns a `web.timestamp` that is the duration
 *   the `web.performance entry`.
 * 
 *   `entry.duration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/duration`
 */
performance.PerformanceEntry.duration = (function performance$PerformanceEntry$duration(this$){
return this$.duration();
});
/**
 * Property.
 * 
 *   The duration property returns a `web.timestamp` that is the duration
 *   the `web.performance entry`.
 * 
 *   `entry.duration;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/duration`
 */
performance.PerformanceEntry.set_duration_BANG_ = (function performance$PerformanceEntry$set_duration_BANG_(this$,val){
return (this$["duration"] = val);
});
/**
 * Property.
 * 
 *   The entryType property returns a `dom.DOMString` representing
 *   type of performance metric such as, for example, \"mark\". This
 *   is read only.
 * 
 *   `var type = entry.entryType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType`
 */
performance.PerformanceEntry.entry_type = (function performance$PerformanceEntry$entry_type(this$){
return this$.entryType();
});
/**
 * Property.
 * 
 *   The entryType property returns a `dom.DOMString` representing
 *   type of performance metric such as, for example, \"mark\". This
 *   is read only.
 * 
 *   `var type = entry.entryType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/entryType`
 */
performance.PerformanceEntry.set_entry_type_BANG_ = (function performance$PerformanceEntry$set_entry_type_BANG_(this$,val){
return (this$["entryType"] = val);
});
/**
 * Property.
 * 
 *   The name property of the `performance.PerformanceEntry` interface
 *   a value that further specifies the value returned by the `performance.PerformanceEntry.entryType`
 *   This property is read only.
 * 
 *   `var name = entry.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/name`
 */
performance.PerformanceEntry.name = (function performance$PerformanceEntry$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   The name property of the `performance.PerformanceEntry` interface
 *   a value that further specifies the value returned by the `performance.PerformanceEntry.entryType`
 *   This property is read only.
 * 
 *   `var name = entry.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/name`
 */
performance.PerformanceEntry.set_name_BANG_ = (function performance$PerformanceEntry$set_name_BANG_(this$,val){
return (this$["name"] = val);
});
/**
 * Property.
 * 
 *   The startTime property returns the first recorded `web.timestamp`
 *   the `web.performance entry`.
 * 
 *   `entry.startTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/startTime`
 */
performance.PerformanceEntry.start_time = (function performance$PerformanceEntry$start_time(this$){
return this$.startTime();
});
/**
 * Property.
 * 
 *   The startTime property returns the first recorded `web.timestamp`
 *   the `web.performance entry`.
 * 
 *   `entry.startTime;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceEntry/startTime`
 */
performance.PerformanceEntry.set_start_time_BANG_ = (function performance$PerformanceEntry$set_start_time_BANG_(this$,val){
return (this$["startTime"] = val);
});

//# sourceMappingURL=PerformanceEntry.js.map?rel=1565798841328
