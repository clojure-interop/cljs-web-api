(ns web.cssdom.Screen
  "The Screen interface represents a screen, usually the one on
  the current window is being rendered, and is obtained using `window.screen`."
  (:refer-clojure :exclude []))

(defn lock-orientation
  "Method.

  The lockOrientation() method of the `web.cssdom.Screen` interface
  the screen into a specified orientation. The `ScreenOrientation.lock()`
  should be used instead.

  `lockAllowed = window.screen.lockOrientation(orientation);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/lockOrientation`"
  [this orientation]
  (-> this (.lockOrientation orientation)))

(defn add-event-listener
  "Method.

  The `web.EventTarget` method addEventListener() sets up a function
  will be called whenever the specified event is delivered to the

  `target.addEventListener(type, listener[, options]);
  target.addEventListener(type, listener[, useCapture]);
  target.addEventListener(type, listener[, useCapture, wantsUntrusted  ]); // Gecko/Mozilla only`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener`"
  [this & args]
  (apply (-> this .-addEventListener) (concat [this] args)))

(defn unlock-orientation
  "Method.

  The Screen.unlockOrientation() method removes all the previous
  locks set by the page/app. The `ScreenOrientation.unlock()` method
  be used instead.

  `var unlocked = window.screen.unlockOrientation();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/unlockOrientation`"
  [this ]
  (-> this (.unlockOrientation)))

(defn avail-top
  "Property.

  Specifies the y-coordinate of the first pixel that is not allocated
  permanent or semipermanent user interface features.

  `let availTop = window.screen.availTop;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availTop`"
  [this]
  (-> this (.availTop)))

(defn set-avail-top!
  "Property.

  Specifies the y-coordinate of the first pixel that is not allocated
  permanent or semipermanent user interface features.

  `let availTop = window.screen.availTop;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availTop`"
  [this val]
  (aset this "availTop" val))

(defn onorientationchange
  "Property.

  An event handler for the orientationchange events sent to the
  object. The `ScreenOrientation.onchange` handler should be used

  `screen.onorientationchange = funcRef;

  Where funcRef is a reference to a function.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/onorientationchange`"
  [this]
  (-> this (.onorientationchange)))

(defn set-onorientationchange!
  "Property.

  An event handler for the orientationchange events sent to the
  object. The `ScreenOrientation.onchange` handler should be used

  `screen.onorientationchange = funcRef;

  Where funcRef is a reference to a function.`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/onorientationchange`"
  [this val]
  (aset this "onorientationchange" val))

(defn avail-height
  "Property.

  The read-only `web.cssdom.Screen` interface's availHeight property
  the height, in CSS pixels, of the space available for Web content
  the screen. Since `web.cssdom.Screen` is exposed on the `web.Window`
  `window.screen` property, you access availHeight using window.screen.availHeight.

  `let availHeight = window.screen.availHeight;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availHeight`"
  [this]
  (-> this (.availHeight)))

(defn set-avail-height!
  "Property.

  The read-only `web.cssdom.Screen` interface's availHeight property
  the height, in CSS pixels, of the space available for Web content
  the screen. Since `web.cssdom.Screen` is exposed on the `web.Window`
  `window.screen` property, you access availHeight using window.screen.availHeight.

  `let availHeight = window.screen.availHeight;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availHeight`"
  [this val]
  (aset this "availHeight" val))

(defn avail-left
  "Property.

  Returns the first available pixel available from the left side
  the screen.

  `let availLeft = window.screen.availLeft;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availLeft`"
  [this]
  (-> this (.availLeft)))

(defn set-avail-left!
  "Property.

  Returns the first available pixel available from the left side
  the screen.

  `let availLeft = window.screen.availLeft;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availLeft`"
  [this val]
  (aset this "availLeft" val))

(defn avail-width
  "Property.

  The Screen.availWidth property returns the amount of horizontal
  (in pixels) available to the window.

  `var width = window.screen.availWidth`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availWidth`"
  [this]
  (-> this (.availWidth)))

(defn set-avail-width!
  "Property.

  The Screen.availWidth property returns the amount of horizontal
  (in pixels) available to the window.

  `var width = window.screen.availWidth`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/availWidth`"
  [this val]
  (aset this "availWidth" val))

(defn color-depth
  "Property.

  The Screen.colorDepth read-only property returns the color depth
  the screen. Per the CSSOM, some implementations return 24 for
  reasons. See the browser compatibility section for those that

  `bitDepth = window.screen.colorDepth;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/colorDepth`"
  [this]
  (-> this (.colorDepth)))

(defn set-color-depth!
  "Property.

  The Screen.colorDepth read-only property returns the color depth
  the screen. Per the CSSOM, some implementations return 24 for
  reasons. See the browser compatibility section for those that

  `bitDepth = window.screen.colorDepth;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/colorDepth`"
  [this val]
  (aset this "colorDepth" val))

(defn height
  "Property.

  The Screen.height read-only property returns the height of the
  in pixels.

  `var height = window.screen.height`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/height`"
  [this]
  (-> this (.height)))

(defn set-height!
  "Property.

  The Screen.height read-only property returns the height of the
  in pixels.

  `var height = window.screen.height`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/height`"
  [this val]
  (aset this "height" val))

(defn left
  "Property.

  Returns the distance in pixels from the left side of the main
  to the left side of the current screen.

  `var left = window.screen.left;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/left`"
  [this]
  (-> this (.left)))

(defn set-left!
  "Property.

  Returns the distance in pixels from the left side of the main
  to the left side of the current screen.

  `var left = window.screen.left;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/left`"
  [this val]
  (aset this "left" val))

(defn moz-brightness
  "Property.

  Indicates how bright the screen's backlight is, on a scale from
  (very dim) to 1 (full brightness); this value is a double-precision

  `let screenBrightness = window.screen.mozBrightness;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/mozBrightness`"
  [this]
  (-> this (.mozBrightness)))

(defn set-moz-brightness!
  "Property.

  Indicates how bright the screen's backlight is, on a scale from
  (very dim) to 1 (full brightness); this value is a double-precision

  `let screenBrightness = window.screen.mozBrightness;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/mozBrightness`"
  [this val]
  (aset this "mozBrightness" val))

(defn moz-enabled
  "Property.

  This Boolean attribute controls the device's screen. Setting
  to false will turn off the screen.

  `let screenEnabled = window.screen.mozEnabled`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/mozEnabled`"
  [this]
  (-> this (.mozEnabled)))

(defn set-moz-enabled!
  "Property.

  This Boolean attribute controls the device's screen. Setting
  to false will turn off the screen.

  `let screenEnabled = window.screen.mozEnabled`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/mozEnabled`"
  [this val]
  (aset this "mozEnabled" val))

(defn orientation
  "Property.

  The orientation read-only property of the `web.cssdom.Screen`
  returns the current orientation of the screen.

  `var orientation = window.screen.orientation;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/orientation`"
  [this]
  (-> this (.orientation)))

(defn pixel-depth
  "Property.

  Returns the bit depth of the screen. Per the CSSOM, some implementations
  24 for compatibility reasons. See the browser compatibility section
  those that don't.

  `let depth = window.screen.pixelDepth`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/pixelDepth`"
  [this]
  (-> this (.pixelDepth)))

(defn set-pixel-depth!
  "Property.

  Returns the bit depth of the screen. Per the CSSOM, some implementations
  24 for compatibility reasons. See the browser compatibility section
  those that don't.

  `let depth = window.screen.pixelDepth`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/pixelDepth`"
  [this val]
  (aset this "pixelDepth" val))

(defn top
  "Property.

  Returns the distance in pixels from the top side of the current

  `let top = window.screen.top;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/top`"
  [this]
  (-> this (.top)))

(defn set-top!
  "Property.

  Returns the distance in pixels from the top side of the current

  `let top = window.screen.top;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/top`"
  [this val]
  (aset this "top" val))

(defn width
  "Property.

  Returns the width of the screen.

  `lWidth = window.screen.width`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/width`"
  [this]
  (-> this (.width)))

(defn set-width!
  "Property.

  Returns the width of the screen.

  `lWidth = window.screen.width`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/Screen/width`"
  [this val]
  (aset this "width" val))

