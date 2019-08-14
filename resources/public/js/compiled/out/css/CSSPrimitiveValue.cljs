(ns css.CSSPrimitiveValue
  "The CSSPrimitiveValue interface derives from the `css.CSSValue`
  and represents the current computed value of a CSS property."
  (:refer-clojure :exclude []))

(defn get-counter-value
  "Method.

  The getCounterValue() method of the `css.CSSPrimitiveValue` interface
  used to get the counter value. If this CSS value doesn't contain
  counter value, a `dom.DOMException` is raised. Modification to
  corresponding style property can be achieved using the `web.Counter`

  `var counterValue = cssPrimitiveValue.getCounterValue();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/getCounterValue`"
  [this ]
  (-> this (.getCounterValue)))

(defn get-float-value
  "Method.

  The getFloatValue() method of the `css.CSSPrimitiveValue` interface
  used to get a float value in a specified unit. If this CSS value
  contain a float value or can't be converted into the specified
  a `dom.DOMException` is raised.

  `var floatValue = cssPrimitiveValue.getFloatValue(unit);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/getFloatValue`"
  [this unit]
  (-> this (.getFloatValue unit)))

(defn get-rect-value
  "Method.

  The getRectValue() method of the `css.CSSPrimitiveValue` interface
  used to get a rect value. If this CSS value doesn't contain a
  value, a `dom.DOMException` is raised. Modification to the corresponding
  property can be achieved using the `web.Rect` interface.

  `var rectValue = cssPrimitiveValue.getRectValue();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/getRectValue`"
  [this ]
  (-> this (.getRectValue)))

(defn get-rgb-color-value
  "Method.

  The getRGBColorValue() method of the `css.CSSPrimitiveValue`
  is used to get an RGB color value. If this CSS value doesn't
  a RGB color value, a `dom.DOMException` is raised. Modification
  the corresponding style property can be achieved using the `web.RGBColor`

  `var rgbColorValue = cssPrimitiveValue.getRGBColorValue();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/getRGBColorValue`"
  [this ]
  (-> this (.getRGBColorValue)))

(defn get-string-value
  "Method.

  The getStringValue() method of the `css.CSSPrimitiveValue` interface
  used to get a string value. If this CSS value doesn't contain
  string value, a `dom.DOMException` is raised.

  `var stringValue = cssPrimitiveValue.getStringValue();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/getStringValue`"
  [this ]
  (-> this (.getStringValue)))

(defn set-float-value
  "Method.

  The setFloatValue() method of the `css.CSSPrimitiveValue` interface
  used to set a float value. If the property attached to this value
  accept the specified unit or the float value, the value will
  unchanged and a `dom.DOMException` will be raised.

  `cssPrimitiveValue.setFloatValue(unitType, floatValue);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/setFloatValue`"
  [this unit-type float-value]
  (-> this (.setFloatValue unit-type float-value)))

(defn set-string-value
  "Method.

  The setStringValue() method of the `css.CSSPrimitiveValue` interface
  used to set a string value. If the property attached to this
  can't accept the specified unit or the string value, the value
  be unchanged and a `dom.DOMException` will be raised.

  `cssPrimitiveValue.setStringValue(stringType, stringValue);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/setStringValue`"
  [this string-type string-value]
  (-> this (.setStringValue string-type string-value)))

(defn primitive-type
  "Property.

  The primitiveType read-only property of the `css.CSSPrimitiveValue`
  represents the type of a CSS value.

  `type = cssPrimitiveValue.primitiveType;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPrimitiveValue/primitiveType`"
  [this]
  (-> this (.primitiveType)))

