(ns web.VisualViewport
  "The VisualViewport interface of the the Visual Viewport API represents
  visual viewport for a given window. For a page containing iframes,
  iframe, as well as the containing page, will have a unique window
  Each window on a page will have a unique VisualViewport representing
  properties associated with that window."
  (:refer-clojure :exclude []))

(defn height
  "Property.

  The height read-only property of the `web.VisualViewport` interface
  the height of the visual viewport, in CSS pixels.

  `var height = VisualViewport.height`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/height`"
  [this]
  (-> this (.height)))

(defn set-height!
  "Property.

  The height read-only property of the `web.VisualViewport` interface
  the height of the visual viewport, in CSS pixels.

  `var height = VisualViewport.height`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/height`"
  [this val]
  (aset this "height" val))

(defn offsetleft
  "Property.

  The offsetLeft read-only property of the `web.VisualViewport`
  returns the offset of the left edge of the visual viewport from
  left edge of the layout viewport in CSS pixels.

  `var offsetLeft = VisualViewport.offsetLeft`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/offsetleft`"
  [this]
  (-> this (.offsetleft)))

(defn set-offsetleft!
  "Property.

  The offsetLeft read-only property of the `web.VisualViewport`
  returns the offset of the left edge of the visual viewport from
  left edge of the layout viewport in CSS pixels.

  `var offsetLeft = VisualViewport.offsetLeft`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/offsetleft`"
  [this val]
  (aset this "offsetleft" val))

(defn offset-top
  "Property.

  The offsetTop read-only property of the `web.VisualViewport`
  returns the offset of the top edge of the visual viewport from
  top edge of the layout viewport in CSS pixels.

  `var offsetTop = VisualViewport.offsetTop`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/offsetTop`"
  [this]
  (-> this (.offsetTop)))

(defn set-offset-top!
  "Property.

  The offsetTop read-only property of the `web.VisualViewport`
  returns the offset of the top edge of the visual viewport from
  top edge of the layout viewport in CSS pixels.

  `var offsetTop = VisualViewport.offsetTop`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/offsetTop`"
  [this val]
  (aset this "offsetTop" val))

(defn page-left
  "Property.

  The pageLeft read-only property of the `web.VisualViewport` interface
  the x coordinate relative to the initial containing block origin
  the left edge of the visual viewport, in CSS pixels.

  `var pageLeft = VisualViewport.pageLeft`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/pageLeft`"
  [this]
  (-> this (.pageLeft)))

(defn set-page-left!
  "Property.

  The pageLeft read-only property of the `web.VisualViewport` interface
  the x coordinate relative to the initial containing block origin
  the left edge of the visual viewport, in CSS pixels.

  `var pageLeft = VisualViewport.pageLeft`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/pageLeft`"
  [this val]
  (aset this "pageLeft" val))

(defn page-top
  "Property.

  The pageTop read-only property of the `web.VisualViewport` interface
  the y coordinate relative to the initial containing block origin
  the top edge of the visual viewport, in CSS pixels.

  `var pageTop = VisualViewport.pageTop`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/pageTop`"
  [this]
  (-> this (.pageTop)))

(defn set-page-top!
  "Property.

  The pageTop read-only property of the `web.VisualViewport` interface
  the y coordinate relative to the initial containing block origin
  the top edge of the visual viewport, in CSS pixels.

  `var pageTop = VisualViewport.pageTop`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/pageTop`"
  [this val]
  (aset this "pageTop" val))

(defn scale
  "Property.

  The scale read-only property of the `web.VisualViewport` interface
  the pinch-zoom scaling factor applied to the visual viewport.

  `var scale = VisualViewport.scale`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/scale`"
  [this]
  (-> this (.scale)))

(defn set-scale!
  "Property.

  The scale read-only property of the `web.VisualViewport` interface
  the pinch-zoom scaling factor applied to the visual viewport.

  `var scale = VisualViewport.scale`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/scale`"
  [this val]
  (aset this "scale" val))

(defn width
  "Property.

  The width read-only property of the `web.VisualViewport` interface
  the width of the visual viewport, in CSS pixels.

  `var width = VisualViewport.width`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/width`"
  [this]
  (-> this (.width)))

(defn set-width!
  "Property.

  The width read-only property of the `web.VisualViewport` interface
  the width of the visual viewport, in CSS pixels.

  `var width = VisualViewport.width`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/width`"
  [this val]
  (aset this "width" val))

