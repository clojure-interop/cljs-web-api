// Compiled by ClojureScript 1.9.946 {}
goog.provide('css.CSSStyleValue');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The CSSUnitValue() constructor creates a new `css.CSSUnitValue` object which returns a new `css.CSSUnitValue` object which represents values that contain a single unit type. For example, \"42px\" would be represented by a CSSNumericValue.
 * 
 *   value
 *   Returns a double indicating the number of units.
 *   unit
 *   Returns a `web.USVString` indicating the type of unit.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/CSSUnitValue`
 */
css.CSSStyleValue.constructor$ = CSSUnitValue;
/**
 * Method.
 * 
 *   The parse() method of the `css.CSSStyleValue` interface sets
 *   specific CSS property to the specified values and returns the
 *   value as a `css.CSSStyleValue` object.
 * 
 *   `CSSStyleValue.parse(property, cssText)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parse`
 */
css.CSSStyleValue.parse = (function css$CSSStyleValue$parse(this$,property,css_text){
return this$.parse(property,css_text);
});
/**
 * Method.
 * 
 *   The parseAll() method of the `css.CSSStyleValue` interface sets
 *   occurences of a specific CSS property to the specified valueand
 *   an array of `css.CSSStyleValue` objects, each containing one
 *   the supplied values.
 * 
 *   `CSSStyleValue.parseAll(property, value)`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleValue/parseAll`
 */
css.CSSStyleValue.parse_all = (function css$CSSStyleValue$parse_all(this$,property,value){
return this$.parseAll(property,value);
});

//# sourceMappingURL=CSSStyleValue.js.map?rel=1565798808047
