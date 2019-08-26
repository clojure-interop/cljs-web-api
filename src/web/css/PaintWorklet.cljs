(ns web.css.PaintWorklet
  "The PaintWorklet interface of the CSS Painting API programmatically
  an image where a CSS property expects a file. Access this interface
  `CSS.paintWorklet`."
  (:refer-clojure :exclude []))

(defn register-paint
  "Method.

  The PaintWorklet.registerPaint() method of the `web.css.PaintWorklet`
  registers a class programmatically generate an image where a
  property expects a file.

  `registerPaint(name, class);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/registerPaint`"
  [this name class]
  (-> this (.registerPaint name class)))

(defn add-module
  "Method.

  The addModule() method of the `web.other.Worklet` interface loads
  module in the given JavaScript file and adds it to the current

  `addPromise = worklet.addModule(moduleURL);
  addPromise = worklet.addModule(moduleURL, options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worklet/addModule`"
  [this & args]
  (apply (-> this .-addModule) (concat [this] args)))

(defn device-pixel-ratio
  "Property.

  The PaintWorklet.devicePixelRatio read-only property of the `web.css.PaintWorklet`
  returns the current device's ratio of physical pixels to logical

  `var devicePixelRatio = paintWorklet.devicePixelRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/devicePixelRatio`"
  [this]
  (-> this (.-devicePixelRatio)))

(defn set-device-pixel-ratio!
  "Property.

  The PaintWorklet.devicePixelRatio read-only property of the `web.css.PaintWorklet`
  returns the current device's ratio of physical pixels to logical

  `var devicePixelRatio = paintWorklet.devicePixelRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/devicePixelRatio`"
  [this val]
  (aset this "devicePixelRatio" val))

(defn paint
  "Property.

  The PaintWorklet.devicePixelRatio read-only property of the `web.css.PaintWorklet`
  returns the current device's ratio of physical pixels to logical

  `var devicePixelRatio = paintWorklet.devicePixelRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/Paint%E2%80%8BWorklet%E2%80%8B.device%E2%80%8BPixel%E2%80%8BRatio`"
  [this]
  (-> this (.-Paint)))

(defn set-paint!
  "Property.

  The PaintWorklet.devicePixelRatio read-only property of the `web.css.PaintWorklet`
  returns the current device's ratio of physical pixels to logical

  `var devicePixelRatio = paintWorklet.devicePixelRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/Paint%E2%80%8BWorklet%E2%80%8B.device%E2%80%8BPixel%E2%80%8BRatio`"
  [this val]
  (aset this "Paint" val))

