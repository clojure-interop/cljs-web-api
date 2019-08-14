// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.InputEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The InputEvent() constructor creates a new `web.InputEvent`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/InputEvent`
 */
web.InputEvent.constructor$ = InputEvent;
/**
 * Method.
 * 
 *   The getTargetRanges() property of the `web.InputEvent` interface
 *   an array of static ranges that will be affected by a change to
 *   DOM if the input event is not canceled.
 * 
 *   `var staticRanges[] = inputEvent.getTargetRanges()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/getTargetRanges`
 */
web.InputEvent.get_target_ranges = (function web$InputEvent$get_target_ranges(this$){
return this$.getTargetRanges();
});
/**
 * Property.
 * 
 *   The data read-only property of the `web.InputEvent` interface
 *   a `dom.DOMString` with the inserted characters. This may be an
 *   string if the change doesn't insert text (such as when deleting
 *   for example).
 * 
 *   `var aString = inputEvent.data;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/data`
 */
web.InputEvent.data = (function web$InputEvent$data(this$){
return this$.data();
});
/**
 * Property.
 * 
 *   The data read-only property of the `web.InputEvent` interface
 *   a `dom.DOMString` with the inserted characters. This may be an
 *   string if the change doesn't insert text (such as when deleting
 *   for example).
 * 
 *   `var aString = inputEvent.data;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/data`
 */
web.InputEvent.set_data_BANG_ = (function web$InputEvent$set_data_BANG_(this$,val){
return (this$["data"] = val);
});
/**
 * Property.
 * 
 *   The dataTransfer read-only property of the `web.InputEvent` interface
 *   a `web.DataTransfer` object containing information about richtext
 *   plaintext data being added to or removed from editible content.
 * 
 *   `var dataTransfer = inputEvent.dataTransfer`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/dataTransfer`
 */
web.InputEvent.data_transfer = (function web$InputEvent$data_transfer(this$){
return this$.dataTransfer();
});
/**
 * Property.
 * 
 *   The dataTransfer read-only property of the `web.InputEvent` interface
 *   a `web.DataTransfer` object containing information about richtext
 *   plaintext data being added to or removed from editible content.
 * 
 *   `var dataTransfer = inputEvent.dataTransfer`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/dataTransfer`
 */
web.InputEvent.set_data_transfer_BANG_ = (function web$InputEvent$set_data_transfer_BANG_(this$,val){
return (this$["dataTransfer"] = val);
});
/**
 * Property.
 * 
 *   The inputType read-only property of the `web.InputEvent` interface
 *   the type of change made to editible content. Possible changes
 *   for example inserting, deleting, and formatting text.
 * 
 *   `var aString = inputEvent.inputType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType`
 */
web.InputEvent.input_type = (function web$InputEvent$input_type(this$){
return this$.inputType();
});
/**
 * Property.
 * 
 *   The inputType read-only property of the `web.InputEvent` interface
 *   the type of change made to editible content. Possible changes
 *   for example inserting, deleting, and formatting text.
 * 
 *   `var aString = inputEvent.inputType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/inputType`
 */
web.InputEvent.set_input_type_BANG_ = (function web$InputEvent$set_input_type_BANG_(this$,val){
return (this$["inputType"] = val);
});
/**
 * Property.
 * 
 *   The InputEvent.isComposing read-only property returns a `web.Boolean`
 *   indicating if the event is fired after compositionstart and before
 * 
 *   `var bool = event.isComposing;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/InputEvent/isComposing`
 */
web.InputEvent.is_composing = (function web$InputEvent$is_composing(this$){
return this$.isComposing();
});

//# sourceMappingURL=InputEvent.js.map?rel=1565798816848
