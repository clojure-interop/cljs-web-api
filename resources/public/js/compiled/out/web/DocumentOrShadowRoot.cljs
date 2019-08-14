(ns web.DocumentOrShadowRoot
  "The DocumentOrShadowRoot mixin of the Shadow DOM API provides
  that are shared between documents and shadow roots. The following
  are included in both `web.Document` and `web.ShadowRoot`."
  (:refer-clojure :exclude []))

(defn caret-position-from-point
  "Method.

  The caretPositionFromPoint() property of the `web.DocumentOrShadowRoot`
  returns a `web.CaretPosition` object, containing the DOM node,
  with the caret and caret's character offset within that node.

  `var caretPosition = document.caretPositionFromPoint(float x, float y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/caretPositionFromPoint`"
  [this & args]
  (apply (-> this .-caretPositionFromPoint) (concat [this] args)))

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

(defn get-selection
  "Method.

  The getSelection() property of the `web.DocumentOrShadowRoot`
  returns a `web.Selection` object representing the range of text
  by the user, or the current position of the caret.

  `var selection = documentOrShadowRootInstance.getSelection()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/getSelection`"
  [this ]
  (-> this (.getSelection)))

(defn ms-elements-from-rect
  "Method.

  The msElementsFromRect method returns the node list of elements
  are under a rectangle defined by left, top, width, and height.

  `object.msElementsFromRect(left, top, width, height, retVal)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/msElementsFromRect`"
  [this left top width height ret-val]
  (-> this (.msElementsFromRect left top width height ret-val)))

(defn node-from-point
  "Method.

  The nodeFromPoint() property of the `web.DocumentOrShadowRoot`
  returns the topmost node at the specified coordinates (relative
  the viewport).

  `var node = document.nodeFromPoint(x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/nodeFromPoint`"
  [this x y]
  (-> this (.nodeFromPoint x y)))

(defn nodes-from-point
  "Method.

  The nodesFromPoint() property of the `web.DocumentOrShadowRoot`
  returns an array of all nodes at the specified coordinates (relative
  the viewport).

  `var nodes = document.nodesFromPoint(x, y);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/nodesFromPoint`"
  [this x y]
  (-> this (.nodesFromPoint x y)))

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

(defn fullscreen-element
  "Property.

  The DocumentOrShadowRoot.fullscreenElement read-only property
  the `web.Element` that is currently being presented in full-screen
  in this document, or null if full-screen mode is not currently
  use.

  `var element = document.fullscreenElement;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/fullscreenElement`"
  [this]
  (-> this (.fullscreenElement)))

(defn pointer-lock-element
  "Property.

  The pointerLockElement property of the `web.Document` and `web.ShadowRoot`
  provides the element set as the target for mouse events while
  pointer is locked. It is null if lock is pending, pointer is
  or the target is in another document.

  `var element = document.pointerLockElement;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/pointerLockElement`"
  [this]
  (-> this (.pointerLockElement)))

(defn set-pointer-lock-element!
  "Property.

  The pointerLockElement property of the `web.Document` and `web.ShadowRoot`
  provides the element set as the target for mouse events while
  pointer is locked. It is null if lock is pending, pointer is
  or the target is in another document.

  `var element = document.pointerLockElement;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/pointerLockElement`"
  [this val]
  (aset this "pointerLockElement" val))

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

