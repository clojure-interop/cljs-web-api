// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.ValidityState');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The read-only badInput property of a ValidityState object indicates
 *   the user has provided input that the browser is unable to convert.
 *   example, if you have a number input element whose content is
 *   string. Note: While this is unsupported in Internet Explorer,
 *   non-numeric value will be dismissed from the field if it is a
 *   input.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/badInput`
 */
web.ValidityState.bad_input = (function web$ValidityState$bad_input(this$){
return this$.badInput();
});
/**
 * Property.
 * 
 *   The read-only tooLong property of a ValidityState object indicates
 *   the value of an `web.<input>`, `web.<button>`, `web.<select>`,
 *   `web.<fieldset>` or `web.<textarea>`, after having been edited
 *   the user, exceeds the maximum code-unit length established by
 *   element's maxlength attribute.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/tooLong`
 */
web.ValidityState.too_long = (function web$ValidityState$too_long(this$){
return this$.tooLong();
});
/**
 * Property.
 * 
 *   The read-only tooLong property of a ValidityState object indicates
 *   the value of an `web.<input>`, `web.<button>`, `web.<select>`,
 *   `web.<fieldset>` or `web.<textarea>`, after having been edited
 *   the user, exceeds the maximum code-unit length established by
 *   element's maxlength attribute.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/tooLong`
 */
web.ValidityState.set_too_long_BANG_ = (function web$ValidityState$set_too_long_BANG_(this$,val){
return (this$["tooLong"] = val);
});
/**
 * Property.
 * 
 * 
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/tooShort`
 */
web.ValidityState.too_short = (function web$ValidityState$too_short(this$){
return this$.tooShort();
});
/**
 * Property.
 * 
 * 
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/ValidityState/tooShort`
 */
web.ValidityState.set_too_short_BANG_ = (function web$ValidityState$set_too_short_BANG_(this$,val){
return (this$["tooShort"] = val);
});

//# sourceMappingURL=ValidityState.js.map?rel=1565798808272
