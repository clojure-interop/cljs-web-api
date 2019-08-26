(ns web.cssdom.CSSStyleSheet
  "The CSSStyleSheet interface represents a single CSS stylesheet,
  lets you inspect and modify the list of rules contained in the"
  (:refer-clojure :exclude []))

(defn delete-rule
  "Method.

  The `web.cssdom.CSSStyleSheet` method deleteRule() removes a
  from the stylesheet object.

  `cssStyleSheet.deleteRule(index)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/deleteRule`"
  [this index]
  (-> this (.deleteRule index)))

(defn add-rule
  "Method.

  The obsolete `web.cssdom.CSSStyleSheet` interface's addRule()
  method adds a new rule to the stylesheet. You should avoid using
  method, and should instead use the more standard `insertRule()`

  `var result = cssStyleSheet.addRule(selector, styleBlock, index);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/addRule`"
  [this selector style-block index]
  (-> this (.addRule selector style-block index)))

(defn insert-rule
  "Method.

  The CSSStyleSheet.insertRule() method inserts a new CSS rule
  the current style sheet, with some restrictions.

  `stylesheet.insertRule(rule [, index])`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/insertRule`"
  [this & args]
  (apply (-> this .-insertRule) (concat [this] args)))

(defn remove-rule
  "Method.

  The obsolete `web.cssdom.CSSStyleSheet` method removeRule() removes
  rule from the stylesheet object.

  `cssStyleSheet.removeRule(index)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/removeRule`"
  [this index]
  (-> this (.removeRule index)))

(defn css-rules
  "Property.

  The read-only `web.cssdom.CSSStyleSheet` property cssRules returns
  live `web.cssdom.CSSRuleList` which provides a real-time, up-to-date
  of every CSS rule which comprises the stylesheet.

  `var rules = cssStyleSheet.cssRules;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/cssRules`"
  [this]
  (-> this (.cssRules)))

(defn owner-rule
  "Property.

  The read-only `web.cssdom.CSSStyleSheet` property ownerRule returns
  `CSSImportRule` corresponding to the `@import` at-rule which
  the stylesheet into the document.

  `var ownerRule = cssStyleSheet.ownerRule;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/ownerRule`"
  [this]
  (-> this (.ownerRule)))

(defn rules
  "Property.

  rules is a deprecated legacy property of the `web.cssdom.CSSStyleSheet`
  Functionally identical to the preferred `cssRules` property,
  provides access to a live-updating list of the CSS rules comprising
  stylesheet.

  `var rules = cssStyleSheet.rules;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleSheet/rules`"
  [this]
  (-> this (.rules)))

