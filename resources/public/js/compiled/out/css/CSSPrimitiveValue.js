// Compiled by ClojureScript 1.9.946 {}
goog.provide('css.CSSPrimitiveValue');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The getCounterValue() method of the `css.CSSPrimitiveValue` interface
 *   used to get the counter value. If this CSS value doesn't contain
 *   counter value, a `dom.DOMException` is raised. Modification to
 *   corresponding style property can be achieved using the `web.Counter`
 * 
 *   `var counterValue = cssPrimitiveValue.getCounterValue();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/getCounterValue`
 */
css.CSSPrimitiveValue.get_counter_value = (function css$CSSPrimitiveValue$get_counter_value(this$){
return this$.getCounterValue();
});
/**
 * Method.
 * 
 *   The getFloatValue() method of the `css.CSSPrimitiveValue` interface
 *   used to get a float value in a specified unit. If this CSS value
 *   contain a float value or can't be converted into the specified
 *   a `dom.DOMException` is raised.
 * 
 *   `var floatValue = cssPrimitiveValue.getFloatValue(unit);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/getFloatValue`
 */
css.CSSPrimitiveValue.get_float_value = (function css$CSSPrimitiveValue$get_float_value(this$,unit){
return this$.getFloatValue(unit);
});
/**
 * Method.
 * 
 *   The getRectValue() method of the `css.CSSPrimitiveValue` interface
 *   used to get a rect value. If this CSS value doesn't contain a
 *   value, a `dom.DOMException` is raised. Modification to the corresponding
 *   property can be achieved using the `web.Rect` interface.
 * 
 *   `var rectValue = cssPrimitiveValue.getRectValue();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/getRectValue`
 */
css.CSSPrimitiveValue.get_rect_value = (function css$CSSPrimitiveValue$get_rect_value(this$){
return this$.getRectValue();
});
/**
 * Method.
 * 
 *   The getRGBColorValue() method of the `css.CSSPrimitiveValue`
 *   is used to get an RGB color value. If this CSS value doesn't
 *   a RGB color value, a `dom.DOMException` is raised. Modification
 *   the corresponding style property can be achieved using the `web.RGBColor`
 * 
 *   `var rgbColorValue = cssPrimitiveValue.getRGBColorValue();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/getRGBColorValue`
 */
css.CSSPrimitiveValue.get_rgb_color_value = (function css$CSSPrimitiveValue$get_rgb_color_value(this$){
return this$.getRGBColorValue();
});
/**
 * Method.
 * 
 *   The getStringValue() method of the `css.CSSPrimitiveValue` interface
 *   used to get a string value. If this CSS value doesn't contain
 *   string value, a `dom.DOMException` is raised.
 * 
 *   `var stringValue = cssPrimitiveValue.getStringValue();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/getStringValue`
 */
css.CSSPrimitiveValue.get_string_value = (function css$CSSPrimitiveValue$get_string_value(this$){
return this$.getStringValue();
});
/**
 * Method.
 * 
 *   The setFloatValue() method of the `css.CSSPrimitiveValue` interface
 *   used to set a float value. If the property attached to this value
 *   accept the specified unit or the float value, the value will
 *   unchanged and a `dom.DOMException` will be raised.
 * 
 *   `cssPrimitiveValue.setFloatValue(unitType, floatValue);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/setFloatValue`
 */
css.CSSPrimitiveValue.set_float_value = (function css$CSSPrimitiveValue$set_float_value(this$,unit_type,float_value){
return this$.setFloatValue(unit_type,float_value);
});
/**
 * Method.
 * 
 *   The setStringValue() method of the `css.CSSPrimitiveValue` interface
 *   used to set a string value. If the property attached to this
 *   can't accept the specified unit or the string value, the value
 *   be unchanged and a `dom.DOMException` will be raised.
 * 
 *   `cssPrimitiveValue.setStringValue(stringType, stringValue);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/setStringValue`
 */
css.CSSPrimitiveValue.set_string_value = (function css$CSSPrimitiveValue$set_string_value(this$,string_type,string_value){
return this$.setStringValue(string_type,string_value);
});
/**
 * Property.
 * 
 *   The primitiveType read-only property of the `css.CSSPrimitiveValue`
 *   represents the type of a CSS value.
 * 
 *   `type = cssPrimitiveValue.primitiveType;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/primitiveType`
 */
css.CSSPrimitiveValue.primitive_type = (function css$CSSPrimitiveValue$primitive_type(this$){
return this$.primitiveType();
});

//# sourceMappingURL=CSSPrimitiveValue.js.map?rel=1565798841358
