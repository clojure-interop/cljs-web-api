(ns web.cssdom.CSS
  "The CSS interface holds useful CSS-related methods. No object
  this interface are implemented: it contains only static methods
  therefore is a utilitarian interface."
  (:refer-clojure :exclude []))

(defn supports
  "Method.

  The CSS.supports() method returns a `js.Boolean` value indicating
  the browser supports a given CSS feature, or not.

  `CSS.supports(propertyName, value);
  CSS.supports(supportCondition);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSS/supports`"
  [this & args]
  (-> this .-supports (.apply this (clj->js args))))

(defn escape
  "Method.

  [Experimental]

  The CSS.escape() static method returns a `web.cssdom.CSSOMString`
  the escaped string passed as parameter, mostly for use as part
  a CSS selector.

  `escapedStr = CSS.escape(str);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape`"
  [this str]
  (-> this (.escape str)))

(defn paint-worklet
  "Property.

  [Read Only]
  [Draft]
  [Experimental]

  paintWorklet is a static, read-only property of the `web.cssdom.CSS`
  that provides access to the `web.css.PaintWorklet`, which programmatically
  an image where a CSS property expects a file.

  `var worklet = CSS.paintWorklet;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSS/paintWorklet`"
  [this]
  (-> this (.-paintWorklet)))

