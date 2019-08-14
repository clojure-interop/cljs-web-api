// Compiled by ClojureScript 1.9.946 {}
goog.provide('performance.PerformanceNavigationTiming');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The toJSON() method is a serializer - it returns a JSON representation
 *   the `performance.PerformanceNavigationTiming` object.
 * 
 *   `json = resourcePerfEntry.toJSON();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/toJSON`
 */
performance.PerformanceNavigationTiming.to_json = (function performance$PerformanceNavigationTiming$to_json(this$){
return this$.toJSON();
});
/**
 * Property.
 * 
 *   The domComplete read-only property returns a `web.timestamp`
 *   the time value equal to the time immediately before the user
 *   sets the current document readiness of the current document to
 * 
 *   `perfEntry.domComplete;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domComplete`
 */
performance.PerformanceNavigationTiming.dom_complete = (function performance$PerformanceNavigationTiming$dom_complete(this$){
return this$.domComplete();
});
/**
 * Property.
 * 
 *   The domComplete read-only property returns a `web.timestamp`
 *   the time value equal to the time immediately before the user
 *   sets the current document readiness of the current document to
 * 
 *   `perfEntry.domComplete;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domComplete`
 */
performance.PerformanceNavigationTiming.set_dom_complete_BANG_ = (function performance$PerformanceNavigationTiming$set_dom_complete_BANG_(this$,val){
return (this$["domComplete"] = val);
});
/**
 * Property.
 * 
 *   The domContentLoadedEventEnd read-only property returns a `web.timestamp`
 *   the time value equal to the time immediately after the current
 *   DOMContentLoaded event completes.
 * 
 *   `perfEntry.domContentLoadedEventEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd`
 */
performance.PerformanceNavigationTiming.dom_content_loaded_event_end = (function performance$PerformanceNavigationTiming$dom_content_loaded_event_end(this$){
return this$.domContentLoadedEventEnd();
});
/**
 * Property.
 * 
 *   The domContentLoadedEventEnd read-only property returns a `web.timestamp`
 *   the time value equal to the time immediately after the current
 *   DOMContentLoaded event completes.
 * 
 *   `perfEntry.domContentLoadedEventEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventEnd`
 */
performance.PerformanceNavigationTiming.set_dom_content_loaded_event_end_BANG_ = (function performance$PerformanceNavigationTiming$set_dom_content_loaded_event_end_BANG_(this$,val){
return (this$["domContentLoadedEventEnd"] = val);
});
/**
 * Property.
 * 
 *   The domContentLoadedEventStart read-only property returns a `web.timestamp`
 *   the time value equal to the time immediately before the user
 *   fires the DOMContentLoaded event at the current document.
 * 
 *   `perfEntry.domContentLoadedEventStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart`
 */
performance.PerformanceNavigationTiming.dom_content_loaded_event_start = (function performance$PerformanceNavigationTiming$dom_content_loaded_event_start(this$){
return this$.domContentLoadedEventStart();
});
/**
 * Property.
 * 
 *   The domContentLoadedEventStart read-only property returns a `web.timestamp`
 *   the time value equal to the time immediately before the user
 *   fires the DOMContentLoaded event at the current document.
 * 
 *   `perfEntry.domContentLoadedEventStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart`
 */
performance.PerformanceNavigationTiming.set_dom_content_loaded_event_start_BANG_ = (function performance$PerformanceNavigationTiming$set_dom_content_loaded_event_start_BANG_(this$,val){
return (this$["domContentLoadedEventStart"] = val);
});
/**
 * Property.
 * 
 *   The domInteractive read-only property returns a `web.timestamp`
 *   the time value equal to the time immediately before the user
 *   sets the current document readiness of the current document to
 * 
 *   `perfEntry.domInteractive;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domInteractive`
 */
performance.PerformanceNavigationTiming.dom_interactive = (function performance$PerformanceNavigationTiming$dom_interactive(this$){
return this$.domInteractive();
});
/**
 * Property.
 * 
 *   The domInteractive read-only property returns a `web.timestamp`
 *   the time value equal to the time immediately before the user
 *   sets the current document readiness of the current document to
 * 
 *   `perfEntry.domInteractive;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/domInteractive`
 */
performance.PerformanceNavigationTiming.set_dom_interactive_BANG_ = (function performance$PerformanceNavigationTiming$set_dom_interactive_BANG_(this$,val){
return (this$["domInteractive"] = val);
});
/**
 * Property.
 * 
 *   The loadEventEnd read-only property returns a `web.timestamp`
 *   is equal to the time when the load event of the current document
 *   completed.
 * 
 *   `perfEntry.loadEventEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/loadEventEnd`
 */
performance.PerformanceNavigationTiming.load_event_end = (function performance$PerformanceNavigationTiming$load_event_end(this$){
return this$.loadEventEnd();
});
/**
 * Property.
 * 
 *   The loadEventEnd read-only property returns a `web.timestamp`
 *   is equal to the time when the load event of the current document
 *   completed.
 * 
 *   `perfEntry.loadEventEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/loadEventEnd`
 */
performance.PerformanceNavigationTiming.set_load_event_end_BANG_ = (function performance$PerformanceNavigationTiming$set_load_event_end_BANG_(this$,val){
return (this$["loadEventEnd"] = val);
});
/**
 * Property.
 * 
 *   The loadEventStart read-only property returns a `web.timestamp`
 *   the time value equal to the time immediately before the load
 *   of the current document is fired.
 * 
 *   `perfEntry.loadEventStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/loadEventStart`
 */
performance.PerformanceNavigationTiming.load_event_start = (function performance$PerformanceNavigationTiming$load_event_start(this$){
return this$.loadEventStart();
});
/**
 * Property.
 * 
 *   The loadEventStart read-only property returns a `web.timestamp`
 *   the time value equal to the time immediately before the load
 *   of the current document is fired.
 * 
 *   `perfEntry.loadEventStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/loadEventStart`
 */
performance.PerformanceNavigationTiming.set_load_event_start_BANG_ = (function performance$PerformanceNavigationTiming$set_load_event_start_BANG_(this$,val){
return (this$["loadEventStart"] = val);
});
/**
 * Property.
 * 
 *   The redirectCount property returns a `web.timestamp` representing
 *   number of redirects since the last non-redirect navigation under
 *   current browsing context.
 * 
 *   `perfEntry.redirectCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/redirectCount`
 */
performance.PerformanceNavigationTiming.redirect_count = (function performance$PerformanceNavigationTiming$redirect_count(this$){
return this$.redirectCount();
});
/**
 * Property.
 * 
 *   The redirectCount property returns a `web.timestamp` representing
 *   number of redirects since the last non-redirect navigation under
 *   current browsing context.
 * 
 *   `perfEntry.redirectCount;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/redirectCount`
 */
performance.PerformanceNavigationTiming.set_redirect_count_BANG_ = (function performance$PerformanceNavigationTiming$set_redirect_count_BANG_(this$,val){
return (this$["redirectCount"] = val);
});
/**
 * Property.
 * 
 *   The type read-only property returns a `web.string` representing
 *   type of navigation. The value must be one of the following:
 * 
 *   `perfEntry.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/type`
 */
performance.PerformanceNavigationTiming.type = (function performance$PerformanceNavigationTiming$type(this$){
return this$.type();
});
/**
 * Property.
 * 
 *   The type read-only property returns a `web.string` representing
 *   type of navigation. The value must be one of the following:
 * 
 *   `perfEntry.type;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/type`
 */
performance.PerformanceNavigationTiming.set_type_BANG_ = (function performance$PerformanceNavigationTiming$set_type_BANG_(this$,val){
return (this$["type"] = val);
});
/**
 * Property.
 * 
 *   The unloadEventEnd read-only property returns a `web.timestamp`
 *   the time value equal to the time immediately after the user agent
 *   the unload event of the previous document. If there is no previous
 *   this property value is 0.
 * 
 *   `perfEntry.unloadEventEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd`
 */
performance.PerformanceNavigationTiming.unload_event_end = (function performance$PerformanceNavigationTiming$unload_event_end(this$){
return this$.unloadEventEnd();
});
/**
 * Property.
 * 
 *   The unloadEventEnd read-only property returns a `web.timestamp`
 *   the time value equal to the time immediately after the user agent
 *   the unload event of the previous document. If there is no previous
 *   this property value is 0.
 * 
 *   `perfEntry.unloadEventEnd;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/unloadEventEnd`
 */
performance.PerformanceNavigationTiming.set_unload_event_end_BANG_ = (function performance$PerformanceNavigationTiming$set_unload_event_end_BANG_(this$,val){
return (this$["unloadEventEnd"] = val);
});
/**
 * Property.
 * 
 *   The unloadEventStart read-only property returns a `web.timestamp`
 *   the time value equal to the time immediately before the user
 *   starts the unload event of the previous document. If there is
 *   previous document, this property returns 0.
 * 
 *   `perfEntry.unloadEventStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/unloadEventStart`
 */
performance.PerformanceNavigationTiming.unload_event_start = (function performance$PerformanceNavigationTiming$unload_event_start(this$){
return this$.unloadEventStart();
});
/**
 * Property.
 * 
 *   The unloadEventStart read-only property returns a `web.timestamp`
 *   the time value equal to the time immediately before the user
 *   starts the unload event of the previous document. If there is
 *   previous document, this property returns 0.
 * 
 *   `perfEntry.unloadEventStart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceNavigationTiming/unloadEventStart`
 */
performance.PerformanceNavigationTiming.set_unload_event_start_BANG_ = (function performance$PerformanceNavigationTiming$set_unload_event_start_BANG_(this$,val){
return (this$["unloadEventStart"] = val);
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
performance.PerformanceNavigationTiming.entry_type = (function performance$PerformanceNavigationTiming$entry_type(this$){
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
performance.PerformanceNavigationTiming.set_entry_type_BANG_ = (function performance$PerformanceNavigationTiming$set_entry_type_BANG_(this$,val){
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
performance.PerformanceNavigationTiming.name = (function performance$PerformanceNavigationTiming$name(this$){
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
performance.PerformanceNavigationTiming.set_name_BANG_ = (function performance$PerformanceNavigationTiming$set_name_BANG_(this$,val){
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
performance.PerformanceNavigationTiming.start_time = (function performance$PerformanceNavigationTiming$start_time(this$){
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
performance.PerformanceNavigationTiming.set_start_time_BANG_ = (function performance$PerformanceNavigationTiming$set_start_time_BANG_(this$,val){
return (this$["startTime"] = val);
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
performance.PerformanceNavigationTiming.duration = (function performance$PerformanceNavigationTiming$duration(this$){
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
performance.PerformanceNavigationTiming.set_duration_BANG_ = (function performance$PerformanceNavigationTiming$set_duration_BANG_(this$,val){
return (this$["duration"] = val);
});
/**
 * Property.
 * 
 *   The initiatorType read-only property is a `web.string` that represents
 *   type of resource that initiated the performance event.
 * 
 *   `resource.initiatorType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/initiatorType`
 */
performance.PerformanceNavigationTiming.initiator_type = (function performance$PerformanceNavigationTiming$initiator_type(this$){
return this$.initiatorType();
});
/**
 * Property.
 * 
 *   The initiatorType read-only property is a `web.string` that represents
 *   type of resource that initiated the performance event.
 * 
 *   `resource.initiatorType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming/initiatorType`
 */
performance.PerformanceNavigationTiming.set_initiator_type_BANG_ = (function performance$PerformanceNavigationTiming$set_initiator_type_BANG_(this$,val){
return (this$["initiatorType"] = val);
});

//# sourceMappingURL=PerformanceNavigationTiming.js.map?rel=1565798839934
