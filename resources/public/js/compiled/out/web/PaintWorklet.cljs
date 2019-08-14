(ns web.PaintWorklet
  "The PaintWorklet interface of the CSS Painting API programmatically
  an image where a CSS property expects a file. Access this interface
  `css.CSS.paintWorklet`."
  (:refer-clojure :exclude []))

(defn register-paint
  "Method.

  The PaintWorklet.registerPaint() method of the `web.PaintWorklet`
  registers a class programmatically generate an image where a
  property expects a file.

  `registerPaint(name, class);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/registerPaint`"
  [this name class]
  (-> this (.registerPaint name class)))

(defn add-module
  "Method.

  The addModule() method of the `web.Worklet` interface loads the
  in the given JavaScript file and adds it to the current Worklet.

  `addPromise = worklet.addModule(moduleURL);
  addPromise = worklet.addModule(moduleURL, options);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Worklet/addModule`"
  [this & args]
  (apply (-> this .-addModule) (concat [this] args)))

(defn device-pixel-ratio
  "Property.

  The PaintWorklet.devicePixelRatio read-only property of the `web.PaintWorklet`
  returns the current device's ratio of physical pixels to logical

  `var devicePixelRatio = paintWorklet.devicePixelRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/devicePizelRatio`"
  [this]
  (-> this (.devicePixelRatio)))

(defn set-device-pixel-ratio!
  "Property.

  The PaintWorklet.devicePixelRatio read-only property of the `web.PaintWorklet`
  returns the current device's ratio of physical pixels to logical

  `var devicePixelRatio = paintWorklet.devicePixelRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/devicePizelRatio`"
  [this val]
  (aset this "devicePixelRatio" val))

(defn device​-pixel​-ratio
  "Property.

  The PaintWorklet.devicePixelRatio read-only property of the `web.PaintWorklet`
  returns the current device's ratio of physical pixels to logical

  `var devicePixelRatio = paintWorklet.devicePixelRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/Paint%E2%80%8BWorklet%E2%80%8B.device%E2%80%8BPixel%E2%80%8BRatio`"
  [this]
  (-> this (.device​Pixel​Ratio)))

(defn set-device​-pixel​-ratio!
  "Property.

  The PaintWorklet.devicePixelRatio read-only property of the `web.PaintWorklet`
  returns the current device's ratio of physical pixels to logical

  `var devicePixelRatio = paintWorklet.devicePixelRatio;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaintWorklet/Paint%E2%80%8BWorklet%E2%80%8B.device%E2%80%8BPixel%E2%80%8BRatio`"
  [this val]
  (aset this "device​Pixel​Ratio" val))

