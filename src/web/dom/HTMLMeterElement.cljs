(ns web.dom.HTMLMeterElement
  "The HTML `<meter>` elements expose the HTMLMeterElement interface,
  provides special properties and methods (beyond the `web.dom.HTMLElement`
  interface they also have available to them by inheritance) for
  the layout and presentation of `<meter>` elements."
  (:refer-clojure :exclude []))

(defn high
  "Property.

  A double representing the value of the high boundary, reflecting
  high attribute."
  [this]
  (-> this (.high)))

(defn set-high!
  "Property.

  A double representing the value of the high boundary, reflecting
  high attribute."
  [this val]
  (aset this "high" val))

(defn labels
  "Property.

  The HTMLMeterElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<meter>` element.

  `var labelElements = meter.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement/labels`"
  [this]
  (-> this (.labels)))

(defn set-labels!
  "Property.

  The HTMLMeterElement.labels read-only property returns a `web.NodeList`
  the `<label>` elements associated with the `<meter>` element.

  `var labelElements = meter.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement/labels`"
  [this val]
  (aset this "labels" val))

