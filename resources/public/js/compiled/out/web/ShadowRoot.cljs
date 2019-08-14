(ns web.ShadowRoot
  "The ShadowRoot interface of the Shadow DOM API is the root node
  a DOM subtree that is rendered separately from a document's main
  tree."
  (:refer-clojure :exclude []))

(defn get-selection
  "Method.

  The getSelection() property of the `web.DocumentOrShadowRoot`
  returns a `web.Selection` object representing the range of text
  by the user, or the current position of the caret.

  `var selection = documentOrShadowRootInstance.getSelection()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection`"
  [this ]
  (-> this (.getSelection)))

(defn element-from-point
  "Method.

  The elementFromPoint() method—available on both the `web.Document`
  `web.ShadowRoot` objects—returns the topmost `web.Element` at
  specified coordinates (relative to the viewport).

  `var element = document.elementFromPoint(x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementFromPoint`"
  [this x y]
  (-> this (.elementFromPoint x y)))

(defn elements-from-point
  "Method.

  The elementsFromPoint() property of the `web.DocumentOrShadowRoot`
  returns an array of all elements at the specified coordinates
  to the viewport).

  `var elements = document.elementsFromPoint(x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementsFromPoint`"
  [this x y]
  (-> this (.elementsFromPoint x y)))

(defn caret-position-from-point
  "Method.

  The caretPositionFromPoint() property of the `web.DocumentOrShadowRoot`
  returns a `web.CaretPosition` object, containing the DOM node,
  with the caret and caret's character offset within that node.

  `var caretPosition = document.caretPositionFromPoint(float x, float y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/caretPositionFromPoint`"
  [this & args]
  (apply (-> this .-caretPositionFromPoint) (concat [this] args)))

(defn delegates-focus
  "Property.

  The delegatesFocus read-only property of the `web.ShadowRoot`
  returns a boolean that indicates whether delegatesFocus was set
  the shadow was attached (see `web.Element.attachShadow()`).

  `var df = shadowRoot.delegatesFocus`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus`"
  [this]
  (-> this (.delegatesFocus)))

(defn set-delegates-focus!
  "Property.

  The delegatesFocus read-only property of the `web.ShadowRoot`
  returns a boolean that indicates whether delegatesFocus was set
  the shadow was attached (see `web.Element.attachShadow()`).

  `var df = shadowRoot.delegatesFocus`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/delegatesFocus`"
  [this val]
  (aset this "delegatesFocus" val))

(defn host
  "Property.

  The host read-only property of the `web.ShadowRoot` returns a
  to the DOM element the ShadowRoot is attached to.

  `var element = shadowRoot.host`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/host`"
  [this]
  (-> this (.host)))

(defn set-host!
  "Property.

  The host read-only property of the `web.ShadowRoot` returns a
  to the DOM element the ShadowRoot is attached to.

  `var element = shadowRoot.host`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/host`"
  [this val]
  (aset this "host" val))

(defn inner-html
  "Property.

  The innerHTML property of the `web.ShadowRoot` interface sets
  returns a reference to the DOM tree inside the ShadowRoot.

  `var domString = shadowRoot.innerHTML
  shadowRoot.innerHTML = domString`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/innerHTML`"
  [this]
  (-> this (.innerHTML)))

(defn set-inner-html!
  "Property.

  The innerHTML property of the `web.ShadowRoot` interface sets
  returns a reference to the DOM tree inside the ShadowRoot.

  `var domString = shadowRoot.innerHTML
  shadowRoot.innerHTML = domString`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/innerHTML`"
  [this val]
  (aset this "innerHTML" val))

(defn mode
  "Property.

  The mode property of the `web.ShadowRoot` specifies its mode
  either open or closed. This defines whether or not the shadow
  internal features are accessible from JavaScript.

  `var mode = shadowRoot.mode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode`"
  [this]
  (-> this (.mode)))

(defn set-mode!
  "Property.

  The mode property of the `web.ShadowRoot` specifies its mode
  either open or closed. This defines whether or not the shadow
  internal features are accessible from JavaScript.

  `var mode = shadowRoot.mode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ShadowRoot/mode`"
  [this val]
  (aset this "mode" val))

(defn active-element
  "Property.

  The activeElement read-only property of the `web.Document` and
  interfaces returns the `web.Element` within the DOM or shadow
  tree that currently has focus.

  `var element = DocumentOrShadowRoot.activeElement`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/activeElement`"
  [this]
  (-> this (.activeElement)))

(defn set-active-element!
  "Property.

  The activeElement read-only property of the `web.Document` and
  interfaces returns the `web.Element` within the DOM or shadow
  tree that currently has focus.

  `var element = DocumentOrShadowRoot.activeElement`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/activeElement`"
  [this val]
  (aset this "activeElement" val))

(defn style-sheets
  "Property.

  The styleSheets read-only property of the `web.DocumentOrShadowRoot`
  returns a `web.StyleSheetList` of `css.CSSStyleSheet` objects,
  stylesheets explicitly linked into or embedded in a document.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/styleSheets`"
  [this]
  (-> this (.styleSheets)))

(defn set-style-sheets!
  "Property.

  The styleSheets read-only property of the `web.DocumentOrShadowRoot`
  returns a `web.StyleSheetList` of `css.CSSStyleSheet` objects,
  stylesheets explicitly linked into or embedded in a document.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/styleSheets`"
  [this val]
  (aset this "styleSheets" val))

