(ns web.viewport.VisualViewport.ev
  "VisualViewport Events."
  (:refer-clojure :exclude []))

(def resize
  "Event.

  Fired when the visual viewport is resized.
  Also available via the VisualViewport.onresize property."

  "resize")

(def scroll
  "Event.

  Fired when the visual viewport is scrolled.
  Also available via the VisualViewport.onscroll property."

  "scroll")

(def onresize
  "Event.

  The onresize event handler of the `web.viewport.VisualViewport`
  is called when a viewport is resized, i.e. when the resize event
  fired.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/onresize`"

  "onresize")

(def onscroll
  "Event.

  The onscroll event handler of the `web.viewport.VisualViewport`
  is called when a viewport is scrolled, i.e. when the scroll event
  fired.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VisualViewport/onscroll`"

  "onscroll")

