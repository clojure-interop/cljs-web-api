(ns web.fullscreen.FullscreenOptions
  "The FullscreenOptions dictionary is used to provide configuration
  when calling `requestFullscreen()` on an element to place that
  into full-screen mode."
  (:refer-clojure :exclude []))

(defn navigation-ui
  "Property.

  The `web.fullscreen.FullscreenOptions` dictionary's navigationUI
  is used when calling `requestFullscreen()` to specify to what
  the user agent should include its standard user interface while
  element is presented in full-screen mode.

  `let fullscreenOptions = {
  navigationUI: value
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FullscreenOptions/navigationUI`"
  [this]
  (-> this (.-navigationUI)))

(defn set-navigation-ui!
  "Property.

  The `web.fullscreen.FullscreenOptions` dictionary's navigationUI
  is used when calling `requestFullscreen()` to specify to what
  the user agent should include its standard user interface while
  element is presented in full-screen mode.

  `let fullscreenOptions = {
  navigationUI: value
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FullscreenOptions/navigationUI`"
  [this val]
  (aset this "navigationUI" val))

