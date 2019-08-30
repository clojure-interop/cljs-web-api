(ns web.viewport.VisualViewport
  "The VisualViewport interface of the the Visual Viewport API represents
  visual viewport for a given window. For a page containing iframes,
  iframe, as well as the containing page, will have a unique window
  Each window on a page will have a unique VisualViewport representing
  properties associated with that window."
  (:refer-clojure :exclude []))

(defn offsetleft
  "Property.

  [Read Only]
  [Experimental]

  The offsetLeft read-only property of the `web.viewport.VisualViewport`
  returns the offset of the left edge of the visual viewport from
  left edge of the layout viewport in CSS pixels.

  `var offsetLeft = VisualViewport.offsetLeft`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/offsetleft`"
  [this]
  (-> this (.-offsetleft)))

(defn offset-top
  "Property.

  [Read Only]
  [Experimental]

  The offsetTop read-only property of the `web.viewport.VisualViewport`
  returns the offset of the top edge of the visual viewport from
  top edge of the layout viewport in CSS pixels.

  `var offsetTop = VisualViewport.offsetTop`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/offsetTop`"
  [this]
  (-> this (.-offsetTop)))

(defn page-left
  "Property.

  [Read Only]
  [Experimental]

  The pageLeft read-only property of the `web.viewport.VisualViewport`
  returns the x coordinate relative to the initial containing block
  of the left edge of the visual viewport, in CSS pixels.

  `var pageLeft = VisualViewport.pageLeft`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/pageLeft`"
  [this]
  (-> this (.-pageLeft)))

(defn page-top
  "Property.

  [Read Only]
  [Experimental]

  The pageTop read-only property of the `web.viewport.VisualViewport`
  returns the y coordinate relative to the initial containing block
  of the top edge of the visual viewport, in CSS pixels.

  `var pageTop = VisualViewport.pageTop`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/pageTop`"
  [this]
  (-> this (.-pageTop)))

(defn width
  "Property.

  [Read Only]
  [Experimental]

  The width read-only property of the `web.viewport.VisualViewport`
  returns the width of the visual viewport, in CSS pixels.

  `var width = VisualViewport.width`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/width`"
  [this]
  (-> this (.-width)))

(defn height
  "Property.

  [Read Only]
  [Experimental]

  The height read-only property of the `web.viewport.VisualViewport`
  returns the height of the visual viewport, in CSS pixels.

  `var height = VisualViewport.height`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/height`"
  [this]
  (-> this (.-height)))

(defn scale
  "Property.

  [Read Only]
  [Experimental]

  The scale read-only property of the `web.viewport.VisualViewport`
  returns the pinch-zoom scaling factor applied to the visual viewport.

  `var scale = VisualViewport.scale`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/scale`"
  [this]
  (-> this (.-scale)))

