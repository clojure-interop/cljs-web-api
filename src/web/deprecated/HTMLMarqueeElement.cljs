(ns web.deprecated.HTMLMarqueeElement
  "The HTMLMarqueeElement interface provides methods to manipulate
  elements."
  (:refer-clojure :exclude [loop]))

(defn start
  "Method.

  Starts scrolling of the marquee."
  [this & args]
  (-> this .-start (.apply this (clj->js args))))

(defn stop
  "Method.

  Stops scrolling of the marquee."
  [this & args]
  (-> this .-stop (.apply this (clj->js args))))

(defn behavior
  "Property.

  Sets how the text is scrolled within the marquee. Possible values
  scroll, slide and alternate. If no value is specified, the default
  is scroll."
  [this]
  (-> this (.-behavior)))

(defn set-behavior!
  "Property.

  Sets how the text is scrolled within the marquee. Possible values
  scroll, slide and alternate. If no value is specified, the default
  is scroll."
  [this val]
  (aset this "behavior" val))

(defn bg-color
  "Property.

  Sets the background color through color name or hexadecimal value."
  [this]
  (-> this (.-bgColor)))

(defn set-bg-color!
  "Property.

  Sets the background color through color name or hexadecimal value."
  [this val]
  (aset this "bgColor" val))

(defn direction
  "Property.

  Sets the direction of the scrolling within the marquee. Possible
  are left, right, up and down. If no value is specified, the default
  is left."
  [this]
  (-> this (.-direction)))

(defn set-direction!
  "Property.

  Sets the direction of the scrolling within the marquee. Possible
  are left, right, up and down. If no value is specified, the default
  is left."
  [this val]
  (aset this "direction" val))

(defn height
  "Property.

  Sets the height in pixels or percentage value."
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  Sets the height in pixels or percentage value."
  [this val]
  (aset this "height" val))

(defn hspace
  "Property.

  Sets the horizontal margin."
  [this]
  (-> this (.-hspace)))

(defn set-hspace!
  "Property.

  Sets the horizontal margin."
  [this val]
  (aset this "hspace" val))

(defn loop
  "Property.

  Sets the number of times the marquee will scroll. If no value
  specified, the default value is −1, which means the marquee will
  continuously."
  [this]
  (-> this (.-loop)))

(defn set-loop!
  "Property.

  Sets the number of times the marquee will scroll. If no value
  specified, the default value is −1, which means the marquee will
  continuously."
  [this val]
  (aset this "loop" val))

(defn scroll-amount
  "Property.

  Sets the amount of scrolling at each interval in pixels. The
  value is 6."
  [this]
  (-> this (.-scrollAmount)))

(defn set-scroll-amount!
  "Property.

  Sets the amount of scrolling at each interval in pixels. The
  value is 6."
  [this val]
  (aset this "scrollAmount" val))

(defn scroll-delay
  "Property.

  Sets the interval between each scroll movement in milliseconds.
  default value is 85. Note that any value smaller than 60 is ignored
  the value 60 is used instead, unless trueSpeed is true."
  [this]
  (-> this (.-scrollDelay)))

(defn set-scroll-delay!
  "Property.

  Sets the interval between each scroll movement in milliseconds.
  default value is 85. Note that any value smaller than 60 is ignored
  the value 60 is used instead, unless trueSpeed is true."
  [this val]
  (aset this "scrollDelay" val))

(defn true-speed
  "Property.

  By default, scrollDelay values lower than 60 are ignored. If
  is true, then those values are not ignored."
  [this]
  (-> this (.-trueSpeed)))

(defn set-true-speed!
  "Property.

  By default, scrollDelay values lower than 60 are ignored. If
  is true, then those values are not ignored."
  [this val]
  (aset this "trueSpeed" val))

(defn vspace
  "Property.

  Sets the vertical margin."
  [this]
  (-> this (.-vspace)))

(defn set-vspace!
  "Property.

  Sets the vertical margin."
  [this val]
  (aset this "vspace" val))

(defn width
  "Property.

  Sets the width in pixels or percentage value."
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  Sets the width in pixels or percentage value."
  [this val]
  (aset this "width" val))

(defn onbounce
  "Property.

  Fires when the marquee has reached the end of its scroll position.
  can only fire when the behavior attribute is set to alternate."
  [this]
  (-> this (.-onbounce)))

(defn set-onbounce!
  "Property.

  Fires when the marquee has reached the end of its scroll position.
  can only fire when the behavior attribute is set to alternate."
  [this val]
  (aset this "onbounce" val))

(defn onfinish
  "Property.

  Fires when the marquee has finished the amount of scrolling that
  set by the loop attribute. It can only fire when the loop attribute
  set to some number that is greater than 0."
  [this]
  (-> this (.-onfinish)))

(defn set-onfinish!
  "Property.

  Fires when the marquee has finished the amount of scrolling that
  set by the loop attribute. It can only fire when the loop attribute
  set to some number that is greater than 0."
  [this val]
  (aset this "onfinish" val))

(defn onstart
  "Property.

  Fires when the marquee starts scrolling."
  [this]
  (-> this (.-onstart)))

(defn set-onstart!
  "Property.

  Fires when the marquee starts scrolling."
  [this val]
  (aset this "onstart" val))

