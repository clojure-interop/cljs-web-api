(ns web.css.CSSPositionValue
  "The CSSPositionValue interface of the the CSS Typed Object Model
  represents values for properties that take a position, for example"
  (:refer-clojure :exclude []))

(defn x
  "Property.

  [Experimental]

  The x property of the `web.css.CSSPositionValue` interface returns
  the item's position along the web page's horizontal axis.

  `var x = CSSPositionValue.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPositionValue/x`"
  [this]
  (-> this (.-x)))

(defn set-x!
  "Property.

  [Experimental]

  The x property of the `web.css.CSSPositionValue` interface returns
  the item's position along the web page's horizontal axis.

  `var x = CSSPositionValue.x`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPositionValue/x`"
  [this val]
  (aset this "x" val))

(defn y
  "Property.

  [Experimental]

  The y property of the `web.css.CSSPositionValue` interface returns
  item's position along the vertical axis.

  `var y = CSSPositionValue.y`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPositionValue/y`"
  [this]
  (-> this (.-y)))

(defn set-y!
  "Property.

  [Experimental]

  The y property of the `web.css.CSSPositionValue` interface returns
  item's position along the vertical axis.

  `var y = CSSPositionValue.y`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSPositionValue/y`"
  [this val]
  (aset this "y" val))

