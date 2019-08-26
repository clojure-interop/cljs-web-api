(ns web.css.CSSUnitValue
  "The CSSUnitValue interface of the CSS Typed Object Model API
  values that contain a single unit type. For example, \\\"42px\\\"
  be represented by a CSSNumericValue."
  (:refer-clojure :exclude []))

(defn value
  "Property.

  The CSSUnitValue.value property of the `web.css.CSSUnitValue`
  returns a double indicating the number of units.

  `var cssUnitValue = CSSUnitValue.value;
  CSSUnitValue.value = cssUnitValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnitValue/value`"
  [this]
  (-> this (.-value)))

(defn set-value!
  "Property.

  The CSSUnitValue.value property of the `web.css.CSSUnitValue`
  returns a double indicating the number of units.

  `var cssUnitValue = CSSUnitValue.value;
  CSSUnitValue.value = cssUnitValue;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnitValue/value`"
  [this val]
  (aset this "value" val))

(defn unit
  "Property.

  The CSSUnitValue.unit read-only property of the `web.css.CSSUnitValue`
  returns a `web.USVString` indicating the type of unit.

  `var aString = CSSUnitValue.unit;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnitValue/unit`"
  [this]
  (-> this (.-unit)))

(defn set-unit!
  "Property.

  The CSSUnitValue.unit read-only property of the `web.css.CSSUnitValue`
  returns a `web.USVString` indicating the type of unit.

  `var aString = CSSUnitValue.unit;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSUnitValue/unit`"
  [this val]
  (aset this "unit" val))

