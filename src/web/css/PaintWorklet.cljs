(ns web.css.PaintWorklet
  "The PaintWorklet interface of the CSS Painting API programmatically
  an image where a CSS property expects a file. Access this interface
  `CSS.paintWorklet`."
  (:refer-clojure :exclude []))

(defn register-paint
  "Method.

  [Draft]

  The PaintWorklet.registerPaint() method of the `web.css.PaintWorklet`
  registers a class programmatically generate an image where a
  property expects a file.

  `registerPaint(name, class);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/registerPaint`"
  [this name class]
  (-> this (.registerPaint name class)))

(defn add-module
  "Method.

  [Experimental]

  The addModule() method of the `web.other.Worklet` interface loads
  module in the given JavaScript file and adds it to the current

  `addPromise = worklet.addModule(moduleURL);
  addPromise = worklet.addModule(moduleURL, options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worklet/addModule`"
  [this & args]
  (-> this .-addModule (.apply this (clj->js args))))

(defn device-pixel-ratio
  "Property.

  [Read Only]
  [Draft]

  The PaintWorklet.devicePixelRatio read-only property of the `web.css.PaintWorklet`
  returns the current device's ratio of physical pixels to logical

  `var devicePixelRatio = paintWorklet.devicePixelRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/devicePixelRatio`"
  [this]
  (-> this (.-devicePixelRatio)))

(defn paint
  "Property.

  [Read Only]
  [Draft]

  The PaintWorklet.devicePixelRatio read-only property of the `web.css.PaintWorklet`
  returns the current device's ratio of physical pixels to logical

  `var devicePixelRatio = paintWorklet.devicePixelRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/Paint%E2%80%8BWorklet%E2%80%8B.device%E2%80%8BPixel%E2%80%8BRatio`"
  [this]
  (-> this (.-Paint)))

