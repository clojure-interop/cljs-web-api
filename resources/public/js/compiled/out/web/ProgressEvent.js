// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ProgressEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The ProgressEvent() constructor returns a newly created `web.ProgressEvent`, representing the current completion of a long process.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/ProgressEvent`
 */
web.ProgressEvent.constructor$ = ProgressEvent;
/**
 * Method.
 * 
 *   The ProgressEvent.initProgressEvent() method Initializes an animation
 *   created using the deprecated `web.Document.createEvent(\"ProgressEvent\")`
 * 
 *   `Progress.initProgressEvent(typeArg, canBubbleArg, cancelableArg, lengthComputable, loaded, total);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/initProgressEvent`
 */
web.ProgressEvent.init_progress_event = (function web$ProgressEvent$init_progress_event(this$,type_arg,can_bubble_arg,cancelable_arg,length_computable,loaded,total){
return this$.initProgressEvent(type_arg,can_bubble_arg,cancelable_arg,length_computable,loaded,total);
});
/**
 * Property.
 * 
 *   The ProgressEvent.lengthComputable read-only property is a `web.Boolean`
 *   indicating if the resource concerned by the `web.ProgressEvent`
 *   a length that can be calculated. If not, the `web.ProgressEvent.total`
 *   has no significant value.
 * 
 *   `flag = ProgressEvent.lengthComputable`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/lengthComputable`
 */
web.ProgressEvent.length_computable = (function web$ProgressEvent$length_computable(this$){
return this$.lengthComputable();
});
/**
 * Property.
 * 
 *   The ProgressEvent.lengthComputable read-only property is a `web.Boolean`
 *   indicating if the resource concerned by the `web.ProgressEvent`
 *   a length that can be calculated. If not, the `web.ProgressEvent.total`
 *   has no significant value.
 * 
 *   `flag = ProgressEvent.lengthComputable`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/lengthComputable`
 */
web.ProgressEvent.set_length_computable_BANG_ = (function web$ProgressEvent$set_length_computable_BANG_(this$,val){
return (this$["lengthComputable"] = val);
});
/**
 * Property.
 * 
 *   The ProgressEvent.loaded read-only property is an integer representing
 *   amount of work already performed by the underlying process. The
 *   of work done can be calculated with the property and ProgressEvent.total.
 *   downloading a resource using HTTP, this only represent the part
 *   the content itself, not headers and other overhead.
 * 
 *   `value = ProgressEvent.loaded`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/loaded`
 */
web.ProgressEvent.loaded = (function web$ProgressEvent$loaded(this$){
return this$.loaded();
});
/**
 * Property.
 * 
 *   The ProgressEvent.loaded read-only property is an integer representing
 *   amount of work already performed by the underlying process. The
 *   of work done can be calculated with the property and ProgressEvent.total.
 *   downloading a resource using HTTP, this only represent the part
 *   the content itself, not headers and other overhead.
 * 
 *   `value = ProgressEvent.loaded`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/loaded`
 */
web.ProgressEvent.set_loaded_BANG_ = (function web$ProgressEvent$set_loaded_BANG_(this$,val){
return (this$["loaded"] = val);
});
/**
 * Property.
 * 
 *   The ProgressEvent.total read-only property is an integer representing
 *   total amount of work that the underlying process is in the progress
 *   performing. When downloading a resource using HTTP, this only
 *   the content itself, not headers and other overhead.
 * 
 *   `value = ProgressEvent.total`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/total`
 */
web.ProgressEvent.total = (function web$ProgressEvent$total(this$){
return this$.total();
});
/**
 * Property.
 * 
 *   The ProgressEvent.total read-only property is an integer representing
 *   total amount of work that the underlying process is in the progress
 *   performing. When downloading a resource using HTTP, this only
 *   the content itself, not headers and other overhead.
 * 
 *   `value = ProgressEvent.total`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent/total`
 */
web.ProgressEvent.set_total_BANG_ = (function web$ProgressEvent$set_total_BANG_(this$,val){
return (this$["total"] = val);
});

//# sourceMappingURL=ProgressEvent.js.map?rel=1565798825235
