(ns css.CSSStyleRule
  "CSSStyleRule represents a single CSS style rule. It implements
  `css.CSSRule` interface with a type value of 1 (CSSRule.STYLE_RULE)."
  (:refer-clojure :exclude []))

(defn style
  "Property.

  The CSSRule.style property is the `css.CSSStyleDeclaration` interface
  the declaration block of the `css.CSSRule`.

  `styleObj = cssRule.style`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleRule/style`"
  [this]
  (-> this (.style)))

(defn set-style!
  "Property.

  The CSSRule.style property is the `css.CSSStyleDeclaration` interface
  the declaration block of the `css.CSSRule`.

  `styleObj = cssRule.style`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleRule/style`"
  [this val]
  (aset this "style" val))

(defn selector-text
  "Property.

  The CSSRule.selectorText property gets the textual representation
  the selector for the rule set. This is readonly in some browsers;
  set stylesheet rules dynamically cross-browser, see Using dynamic
  information.

  `string = cssRule.selectorText`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleRule/selectorText`"
  [this]
  (-> this (.selectorText)))

(defn set-selector-text!
  "Property.

  The CSSRule.selectorText property gets the textual representation
  the selector for the rule set. This is readonly in some browsers;
  set stylesheet rules dynamically cross-browser, see Using dynamic
  information.

  `string = cssRule.selectorText`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleRule/selectorText`"
  [this val]
  (aset this "selectorText" val))

(defn style-map
  "Property.

  The styleMap read-only property of the `css.CSSStyleRule` interface
  a `web.StylePropertyMap` object which provides access the rule's
  pairs.

  `var stylePropertyMap = CSSStyleRule.styleMap;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleRule/styleMap`"
  [this]
  (-> this (.styleMap)))

(defn set-style-map!
  "Property.

  The styleMap read-only property of the `css.CSSStyleRule` interface
  a `web.StylePropertyMap` object which provides access the rule's
  pairs.

  `var stylePropertyMap = CSSStyleRule.styleMap;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleRule/styleMap`"
  [this val]
  (aset this "styleMap" val))

