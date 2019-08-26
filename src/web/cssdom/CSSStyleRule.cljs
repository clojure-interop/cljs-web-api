(ns web.cssdom.CSSStyleRule
  "CSSStyleRule represents a single CSS style rule. It implements
  `web.cssdom.CSSRule` interface with a type value of 1 (CSSRule.STYLE_RULE)."
  (:refer-clojure :exclude []))

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

(defn style
  "Property.

  The CSSRule.style property is the `web.cssdom.CSSStyleDeclaration`
  for the declaration block of the `web.cssdom.CSSRule`.

  `styleObj = cssRule.style`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleRule/style`"
  [this]
  (-> this (.style)))

(defn set-style!
  "Property.

  The CSSRule.style property is the `web.cssdom.CSSStyleDeclaration`
  for the declaration block of the `web.cssdom.CSSRule`.

  `styleObj = cssRule.style`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleRule/style`"
  [this val]
  (aset this "style" val))

