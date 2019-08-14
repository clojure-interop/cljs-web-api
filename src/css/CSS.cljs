(ns css.CSS
  "The CSS interface holds useful CSS-related methods. No object
  this interface are implemented: it contains only static methods
  therefore is a utilitarian interface."
  (:refer-clojure :exclude []))

(defn escape
  "Method.

  The CSS.escape() static method returns a `css.CSSOMString` containing
  escaped string passed as parameter, mostly for use as part of
  CSS selector.

  `escapedStr = CSS.escape(str);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape`"
  [this str]
  (-> this (.escape str)))

(defn supports
  "Method.

  The CSS.supports() method returns a `web.Boolean` value indicating
  the browser supports a given CSS feature, or not.

  `CSS.supports(propertyName, value);
  CSS.supports(supportCondition);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSS/supports`"
  [this & args]
  (apply (-> this .-supports) (concat [this] args)))

(defn paint-worklet
  "Property.

  paintWorklet is a static, read-only property of the `css.CSS`
  that provides access to the `web.PaintWorklet`, which programmatically
  an image where a CSS property expects a file.

  `var worklet = CSS.paintWorklet;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSS/paintWorklet`"
  [this]
  (-> this (.paintWorklet)))

(defn set-paint-worklet!
  "Property.

  paintWorklet is a static, read-only property of the `css.CSS`
  that provides access to the `web.PaintWorklet`, which programmatically
  an image where a CSS property expects a file.

  `var worklet = CSS.paintWorklet;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/CSS/paintWorklet`"
  [this val]
  (aset this "paintWorklet" val))

