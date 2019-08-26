(ns web.deprecated.HTMLMarqueeElement
  "The HTMLMarqueeElement interface provides methods to manipulate
  elements."
  (:refer-clojure :exclude []))

(defn start
  "Method.

  Starts scrolling of the marquee."
  [this & args]
  (apply (-> this .-start) (concat [this] args)))

(defn behavior
  "Property.

  Sets how the text is scrolled within the marquee. Possible values
  scroll, slide and alternate. If no value is specified, the default
  is scroll."
  [this]
  (-> this (.behavior)))

(defn set-behavior!
  "Property.

  Sets how the text is scrolled within the marquee. Possible values
  scroll, slide and alternate. If no value is specified, the default
  is scroll."
  [this val]
  (aset this "behavior" val))

(defn onbounce
  "Property.

  Fires when the marquee has reached the end of its scroll position.
  can only fire when the behavior attribute is set to alternate."
  [this]
  (-> this (.onbounce)))

(defn set-onbounce!
  "Property.

  Fires when the marquee has reached the end of its scroll position.
  can only fire when the behavior attribute is set to alternate."
  [this val]
  (aset this "onbounce" val))

