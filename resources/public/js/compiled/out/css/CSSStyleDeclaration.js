// Compiled by ClojureScript 1.9.946 {}
goog.provide('css.CSSStyleDeclaration');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The CSSStyleDeclaration.getPropertyCSSValue() method interface
 *   a `css.CSSValue` containing the CSS value for a property.
 * 
 *   `var value = style.getPropertyCSSValue(property);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyCSSValue`
 */
css.CSSStyleDeclaration.get_property_css_value = (function css$CSSStyleDeclaration$get_property_css_value(this$,property){
return this$.getPropertyCSSValue(property);
});
/**
 * Method.
 * 
 *   The CSSStyleDeclaration.getPropertyPriority() method interface
 *   a `dom.DOMString` that provides all explicitly set priorities
 *   the CSS property.
 * 
 *   `var priority = style.getPropertyPriority(property);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyPriority`
 */
css.CSSStyleDeclaration.get_property_priority = (function css$CSSStyleDeclaration$get_property_priority(this$,property){
return this$.getPropertyPriority(property);
});
/**
 * Method.
 * 
 *   The CSSStyleDeclaration.getPropertyValue() method interface returns
 *   `dom.DOMString` containing the value of a specified CSS property.
 * 
 *   `var value = style.getPropertyValue(property);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/getPropertyValue`
 */
css.CSSStyleDeclaration.get_property_value = (function css$CSSStyleDeclaration$get_property_value(this$,property){
return this$.getPropertyValue(property);
});
/**
 * Method.
 * 
 *   The CSSStyleDeclaration.item() method interface returns a CSS
 *   name from a `css.CSSStyleDeclaration` by index
 * 
 *   `var propertyName = style.item(index);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/item`
 */
css.CSSStyleDeclaration.item = (function css$CSSStyleDeclaration$item(this$,index){
return this$.item(index);
});
/**
 * Method.
 * 
 *   The CSSStyleDeclaration.removeProperty() method interface removes
 *   property from a CSS style declaration object.
 * 
 *   `var oldValue = style.removeProperty(property);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/removeProperty`
 */
css.CSSStyleDeclaration.remove_property = (function css$CSSStyleDeclaration$remove_property(this$,property){
return this$.removeProperty(property);
});
/**
 * Method.
 * 
 *   The CSSStyleDeclaration.setProperty() method interface sets a
 *   value for a property on a CSS style declaration object.
 * 
 *   `style.setProperty(propertyName, value, priority);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/setProperty`
 */
css.CSSStyleDeclaration.set_property = (function css$CSSStyleDeclaration$set_property(this$,property_name,value,priority){
return this$.setProperty(property_name,value,priority);
});
/**
 * Property.
 * 
 *   The read-only property returns an integer that represents the
 *   of style declarations in this CSS declaration block.
 * 
 *   `var num = styles.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/length`
 */
css.CSSStyleDeclaration.length = (function css$CSSStyleDeclaration$length(this$){
return this$.length();
});
/**
 * Property.
 * 
 *   The read-only property returns an integer that represents the
 *   of style declarations in this CSS declaration block.
 * 
 *   `var num = styles.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/length`
 */
css.CSSStyleDeclaration.set_length_BANG_ = (function css$CSSStyleDeclaration$set_length_BANG_(this$,val){
return (this$["length"] = val);
});
/**
 * Property.
 * 
 *   The CSSStyleDeclaration.parentRule read-only property returns
 *   `css.CSSRule` that is the parent of this style block
 * 
 *   `var rule = styles.parentRule;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/parentRule`
 */
css.CSSStyleDeclaration.parent_rule = (function css$CSSStyleDeclaration$parent_rule(this$){
return this$.parentRule();
});
/**
 * Property.
 * 
 *   The CSSStyleDeclaration.parentRule read-only property returns
 *   `css.CSSRule` that is the parent of this style block
 * 
 *   `var rule = styles.parentRule;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/parentRule`
 */
css.CSSStyleDeclaration.set_parent_rule_BANG_ = (function css$CSSStyleDeclaration$set_parent_rule_BANG_(this$,val){
return (this$["parentRule"] = val);
});

//# sourceMappingURL=CSSStyleDeclaration.js.map?rel=1565798861677
