(ns web.shadow-dom.DocumentOrShadowRoot
  "The DocumentOrShadowRoot mixin of the Shadow DOM API provides
  that are shared between documents and shadow roots. The following
  are included in both `web.Document` and `web.shadow-dom.ShadowRoot`."
  (:refer-clojure :exclude []))

(defn caret-position-from-point
  "Method.

  [Experimental]

  The caretPositionFromPoint() property of the `web.shadow-dom.DocumentOrShadowRoot`
  returns a `web.cssdom.CaretPosition` object, containing the DOM
  along with the caret and caret's character offset within that

  `var caretPosition = document.caretPositionFromPoint(float x, float y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/caretPositionFromPoint`"
  [this & args]
  (-> this .-caretPositionFromPoint (.apply this (clj->js args))))

(defn element-from-point
  "Method.

  The elementFromPoint() method—available on both the `web.Document`
  `web.shadow-dom.ShadowRoot` objects—returns the topmost `web.Element`
  the specified coordinates (relative to the viewport).

  `var element = document.elementFromPoint(x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementFromPoint`"
  [this x y]
  (-> this (.elementFromPoint x y)))

(defn elements-from-point
  "Method.

  [Experimental]

  The elementsFromPoint() property of the `web.shadow-dom.DocumentOrShadowRoot`
  returns an array of all elements at the specified coordinates
  to the viewport).

  `var elements = document.elementsFromPoint(x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementsFromPoint`"
  [this x y]
  (-> this (.elementsFromPoint x y)))

(defn get-selection
  "Method.

  [Experimental]

  The getSelection() property of the `web.shadow-dom.DocumentOrShadowRoot`
  returns a `web.other.Selection` object representing the range
  text selected by the user, or the current position of the caret.

  `var selection = documentOrShadowRootInstance.getSelection()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection`"
  [this ]
  (-> this (.getSelection)))

(defn node-from-point
  "Method.

  [Non Standard]

  The nodeFromPoint() property of the `web.shadow-dom.DocumentOrShadowRoot`
  returns the topmost node at the specified coordinates (relative
  the viewport).

  `var node = document.nodeFromPoint(x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/nodeFromPoint`"
  [this x y]
  (-> this (.nodeFromPoint x y)))

(defn nodes-from-point
  "Method.

  [Non Standard]

  The nodesFromPoint() property of the `web.shadow-dom.DocumentOrShadowRoot`
  returns an array of all nodes at the specified coordinates (relative
  the viewport).

  `var nodes = document.nodesFromPoint(x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/nodesFromPoint`"
  [this x y]
  (-> this (.nodesFromPoint x y)))

(defn ms-elements-from-rect
  "Method.

  [Non Standard]

  The msElementsFromRect method returns the node list of elements
  are under a rectangle defined by left, top, width, and height.

  `object.msElementsFromRect(left, top, width, height, retVal)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/msElementsFromRect`"
  [this left top width height ret-val]
  (-> this (.msElementsFromRect left top width height ret-val)))

(defn active-element
  "Property.

  [Read Only]

  The activeElement read-only property of the `web.Document` and
  interfaces returns the `web.Element` within the DOM or shadow
  tree that currently has focus.

  `var element = DocumentOrShadowRoot.activeElement`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/activeElement`"
  [this]
  (-> this (.-activeElement)))

(defn fullscreen-element
  "Property.

  [Read Only]

  The DocumentOrShadowRoot.fullscreenElement read-only property
  the `web.Element` that is currently being presented in full-screen
  in this document, or null if full-screen mode is not currently
  use.

  `var element = document.fullscreenElement;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/fullscreenElement`"
  [this]
  (-> this (.-fullscreenElement)))

(defn pointer-lock-element
  "Property.

  [Read Only]

  The pointerLockElement property of the `web.Document` and `web.shadow-dom.ShadowRoot`
  provides the element set as the target for mouse events while
  pointer is locked. It is null if lock is pending, pointer is
  or the target is in another document.

  `var element = document.pointerLockElement;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/pointerLockElement`"
  [this]
  (-> this (.-pointerLockElement)))

(defn style-sheets
  "Property.

  [Read Only]
  [Experimental]

  The styleSheets read-only property of the `web.shadow-dom.DocumentOrShadowRoot`
  returns a `web.cssdom.StyleSheetList` of `web.cssdom.CSSStyleSheet`
  for stylesheets explicitly linked into or embedded in a document.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/styleSheets`"
  [this]
  (-> this (.-styleSheets)))

