(ns web.cssdom.CSSRule
  "The CSSRule interface represents a single CSS rule. There are
  types of rules, listed in the Type constants section below."
  (:refer-clojure :exclude []))

(defn css-text
  "Property.

  The cssText property of the `web.cssdom.CSSRule` interface returns
  actual text of a `web.cssdom.CSSStyleSheet` style-rule.

  `string = cssRule.cssText`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSRule/cssText`"
  [this]
  (-> this (.cssText)))

(defn set-css-text!
  "Property.

  The cssText property of the `web.cssdom.CSSRule` interface returns
  actual text of a `web.cssdom.CSSStyleSheet` style-rule.

  `string = cssRule.cssText`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSRule/cssText`"
  [this val]
  (aset this "cssText" val))

(defn parent-style-sheet
  "Property.

  The parentStyleSheet property of the `web.cssdom.CSSRule` interface
  the `web.cssdom.StyleSheet` object in which the current rule
  defined.

  `var stylesheet = cssRule.parentStyleSheet`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSRule/parentStyleSheet`"
  [this]
  (-> this (.parentStyleSheet)))

(defn set-parent-style-sheet!
  "Property.

  The parentStyleSheet property of the `web.cssdom.CSSRule` interface
  the `web.cssdom.StyleSheet` object in which the current rule
  defined.

  `var stylesheet = cssRule.parentStyleSheet`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSRule/parentStyleSheet`"
  [this val]
  (aset this "parentStyleSheet" val))

