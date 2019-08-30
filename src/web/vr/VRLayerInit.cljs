(ns web.vr.VRLayerInit
  "The VRLayerInit interface (dictionary) of the WebVR API represents
  content layer (an `web.canvas.HTMLCanvasElement` or `web.canvas.OffscreenCanvas`)
  you want to present in a VR display."
  (:refer-clojure :exclude []))

(defn left-bounds
  "Property.

  [Experimental]

  The leftBounds property of the `web.vr.VRLayerInit` interface
  defines the left texture bounds of the canvas whose contents
  be presented by the `web.media.VRDisplay`.

  `var myVRLayerInit = { };
  myVRLayerInit.leftBounds = [0.0, 0.0, 0.5, 1.0];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRLayerInit/leftBounds`"
  [this]
  (-> this (.-leftBounds)))

(defn set-left-bounds!
  "Property.

  [Experimental]

  The leftBounds property of the `web.vr.VRLayerInit` interface
  defines the left texture bounds of the canvas whose contents
  be presented by the `web.media.VRDisplay`.

  `var myVRLayerInit = { };
  myVRLayerInit.leftBounds = [0.0, 0.0, 0.5, 1.0];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRLayerInit/leftBounds`"
  [this val]
  (aset this "leftBounds" val))

(defn right-bounds
  "Property.

  [Experimental]

  The rightBounds property of the `web.vr.VRLayerInit` interface
  defines the right texture bounds of the canvas whose contents
  be presented by the `web.media.VRDisplay`.

  `var myVRLayerInit = { };
  myVRLayerInit.rightBounds = [0.5, 0.0, 0.5, 1.0];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRLayerInit/rightBounds`"
  [this]
  (-> this (.-rightBounds)))

(defn set-right-bounds!
  "Property.

  [Experimental]

  The rightBounds property of the `web.vr.VRLayerInit` interface
  defines the right texture bounds of the canvas whose contents
  be presented by the `web.media.VRDisplay`.

  `var myVRLayerInit = { };
  myVRLayerInit.rightBounds = [0.5, 0.0, 0.5, 1.0];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRLayerInit/rightBounds`"
  [this val]
  (aset this "rightBounds" val))

(defn source
  "Property.

  [Experimental]

  The source property of the `web.vr.VRLayerInit` interface (dictionary)
  the canvas whose contents will be presented by the `web.media.VRDisplay`.

  `var myVRLayerInit = { };
  myVRLayerInit.source = myCanvas;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRLayerInit/source`"
  [this]
  (-> this (.-source)))

(defn set-source!
  "Property.

  [Experimental]

  The source property of the `web.vr.VRLayerInit` interface (dictionary)
  the canvas whose contents will be presented by the `web.media.VRDisplay`.

  `var myVRLayerInit = { };
  myVRLayerInit.source = myCanvas;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/VRLayerInit/source`"
  [this val]
  (aset this "source" val))

