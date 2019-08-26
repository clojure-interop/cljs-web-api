(ns web.cssdom.ScrollToOptions
  "The ScrollToOptions dictionary of the CSSOM View spec contains
  specifying where an element should be scrolled to, and whether
  scrolling should be smooth."
  (:refer-clojure :exclude []))

(defn top
  "Property.

  A double.

  `top: double`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/top`"
  [this]
  (-> this (.-top)))

(defn set-top!
  "Property.

  A double.

  `top: double`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/top`"
  [this val]
  (aset this "top" val))

(defn left
  "Property.

  A double.

  `left: double`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/left`"
  [this]
  (-> this (.-left)))

(defn set-left!
  "Property.

  A double.

  `left: double`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/left`"
  [this val]
  (aset this "left" val))

(defn behavior
  "Property.

  An enum, the value of which can be one of the following:

  `behavior: ScrollBehavior`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/behavior`"
  [this]
  (-> this (.-behavior)))

(defn set-behavior!
  "Property.

  An enum, the value of which can be one of the following:

  `behavior: ScrollBehavior`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/ScrollToOptions/behavior`"
  [this val]
  (aset this "behavior" val))

