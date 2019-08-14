// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.RadioNodeList');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   If the underlying element collection contains radio buttons,
 *   RadioNodeList.value property represents the checked radio button.
 *   retrieving the value property, the value of the currently checked
 *   button is returned as a string. If the collection does not contain
 *   radio buttons or none of the radio buttons in the collection
 *   in checked state, the empty string is returned. On setting the
 *   property, the first radio button input element whose value property
 *   equal to the new value will be set to checked.
 * 
 *   `value = radioNodeList.value;
 *   radioNodeList.value = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RadioNodeList/value`
 */
web.RadioNodeList.value = (function web$RadioNodeList$value(this$){
return this$.value();
});
/**
 * Property.
 * 
 *   If the underlying element collection contains radio buttons,
 *   RadioNodeList.value property represents the checked radio button.
 *   retrieving the value property, the value of the currently checked
 *   button is returned as a string. If the collection does not contain
 *   radio buttons or none of the radio buttons in the collection
 *   in checked state, the empty string is returned. On setting the
 *   property, the first radio button input element whose value property
 *   equal to the new value will be set to checked.
 * 
 *   `value = radioNodeList.value;
 *   radioNodeList.value = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/RadioNodeList/value`
 */
web.RadioNodeList.set_value_BANG_ = (function web$RadioNodeList$set_value_BANG_(this$,val){
return (this$["value"] = val);
});

//# sourceMappingURL=RadioNodeList.js.map?rel=1565798801863
