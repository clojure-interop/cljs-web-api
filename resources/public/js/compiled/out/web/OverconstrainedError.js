// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.OverconstrainedError');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The OverconstrainedError constructor creates a new `web.OverconstrainedError` object which indicates that the set of desired capabilities for the current `media.MediaStreamTrack` cannot currently be met. When this event is thrown on a MediaStreamTrack, it is muted until either the current constraints can be established or until satisfiable constraints are applied.
 * 
 *   constraint
 *   The constraint that was not satified.
 *   message
 *   Text for the error's message property.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/OverconstrainedError`
 */
web.OverconstrainedError.constructor$ = OverconstrainedError;
/**
 * Property.
 * 
 *   The constraint read-only property of the `web.OverconstrainedError`
 *   returns the constraint that was supplied in the constructor,
 *   the contraint that was not satisfied.
 * 
 *   `var constraint = Overconstrainederror.constraint;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/constraint`
 */
web.OverconstrainedError.constraint = (function web$OverconstrainedError$constraint(this$){
return this$.constraint();
});
/**
 * Property.
 * 
 *   The constraint read-only property of the `web.OverconstrainedError`
 *   returns the constraint that was supplied in the constructor,
 *   the contraint that was not satisfied.
 * 
 *   `var constraint = Overconstrainederror.constraint;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/constraint`
 */
web.OverconstrainedError.set_constraint_BANG_ = (function web$OverconstrainedError$set_constraint_BANG_(this$,val){
return (this$["constraint"] = val);
});
/**
 * Property.
 * 
 *   The message read-only property of the `web.OverconstrainedError`
 *   returns the text supplied in the constructor.
 * 
 *   `var message = OverconstrainedError.message;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/message`
 */
web.OverconstrainedError.message = (function web$OverconstrainedError$message(this$){
return this$.message();
});
/**
 * Property.
 * 
 *   The message read-only property of the `web.OverconstrainedError`
 *   returns the text supplied in the constructor.
 * 
 *   `var message = OverconstrainedError.message;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/message`
 */
web.OverconstrainedError.set_message_BANG_ = (function web$OverconstrainedError$set_message_BANG_(this$,val){
return (this$["message"] = val);
});
/**
 * Property.
 * 
 *   The name read-only property of the `web.OverconstrainedError`
 *   will always return 'OverconstrainedError'.
 * 
 *   `var name = OverconstrainedError.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/name`
 */
web.OverconstrainedError.name = (function web$OverconstrainedError$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   The name read-only property of the `web.OverconstrainedError`
 *   will always return 'OverconstrainedError'.
 * 
 *   `var name = OverconstrainedError.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/OverconstrainedError/name`
 */
web.OverconstrainedError.set_name_BANG_ = (function web$OverconstrainedError$set_name_BANG_(this$,val){
return (this$["name"] = val);
});

//# sourceMappingURL=OverconstrainedError.js.map?rel=1565798815370
