(ns web.dom.HTMLMeterElement
  "The HTML `<meter>` elements expose the HTMLMeterElement interface,
  provides special properties and methods (beyond the `web.dom.HTMLElement`
  interface they also have available to them by inheritance) for
  the layout and presentation of `<meter>` elements."
  (:refer-clojure :exclude [max min]))

(defn high
  "Property.

  A double representing the value of the high boundary, reflecting
  high attribute."
  [this]
  (-> this (.-high)))

(defn set-high!
  "Property.

  A double representing the value of the high boundary, reflecting
  high attribute."
  [this val]
  (aset this "high" val))

(defn low
  "Property.

  A double representing the value of the low boundary, reflecting
  lowattribute."
  [this]
  (-> this (.-low)))

(defn set-low!
  "Property.

  A double representing the value of the low boundary, reflecting
  lowattribute."
  [this val]
  (aset this "low" val))

(defn max
  "Property.

  A double representing the maximum value, reflecting the max attribute."
  [this]
  (-> this (.-max)))

(defn set-max!
  "Property.

  A double representing the maximum value, reflecting the max attribute."
  [this val]
  (aset this "max" val))

(defn min
  "Property.

  A double representing the minimum value, reflecting the min attribute."
  [this]
  (-> this (.-min)))

(defn set-min!
  "Property.

  A double representing the minimum value, reflecting the min attribute."
  [this val]
  (aset this "min" val))

(defn optimum
  "Property.

  A double representing the optimum, reflecting the optimum attribute."
  [this]
  (-> this (.-optimum)))

(defn set-optimum!
  "Property.

  A double representing the optimum, reflecting the optimum attribute."
  [this val]
  (aset this "optimum" val))

(defn value
  "Property.

  A double representing the currrent value, reflecting the value"
  [this]
  (-> this (.-value)))

(defn set-value!
  "Property.

  A double representing the currrent value, reflecting the value"
  [this val]
  (aset this "value" val))

(defn labels
  "Property.

  The HTMLMeterElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<meter>` element.

  `var labelElements = meter.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement/labels`"
  [this]
  (-> this (.-labels)))

(defn set-labels!
  "Property.

  The HTMLMeterElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<meter>` element.

  `var labelElements = meter.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement/labels`"
  [this val]
  (aset this "labels" val))

