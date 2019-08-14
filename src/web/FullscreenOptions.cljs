(ns web.FullscreenOptions
  "The FullscreenOptions dictionary is used to provide configuration
  when calling `web.requestFullscreen()` on an element to place
  element into full-screen mode."
  (:refer-clojure :exclude []))

(defn navigation-ui
  "Property.

  The `web.FullscreenOptions` dictionary's navigationUI property
  used when calling `web.requestFullscreen()` to specify to what
  the user agent should include its standard user interface while
  element is presented in full-screen mode.

  `let fullscreenOptions = {
  navigationUI: value
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FullscreenOptions/navigationUI`"
  [this]
  (-> this (.navigationUI)))

(defn set-navigation-ui!
  "Property.

  The `web.FullscreenOptions` dictionary's navigationUI property
  used when calling `web.requestFullscreen()` to specify to what
  the user agent should include its standard user interface while
  element is presented in full-screen mode.

  `let fullscreenOptions = {
  navigationUI: value
  };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FullscreenOptions/navigationUI`"
  [this val]
  (aset this "navigationUI" val))

