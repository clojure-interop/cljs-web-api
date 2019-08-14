(ns html.HTMLMeterElement
  "The HTML `web.<meter>` elements expose the HTMLMeterElement interface,
  provides special properties and methods (beyond the `html.HTMLElement`
  interface they also have available to them by inheritance) for
  the layout and presentation of `web.<meter>` elements."
  (:refer-clojure :exclude []))

(defn labels
  "Property.

  The HTMLMeterElement.labels read-only property returns a `web.NodeList`
  the `web.<label>` elements associated with the `web.<meter>`

  `var labelElements = meter.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement/labels`"
  [this]
  (-> this (.labels)))

(defn set-labels!
  "Property.

  The HTMLMeterElement.labels read-only property returns a `web.NodeList`
  the `web.<label>` elements associated with the `web.<meter>`

  `var labelElements = meter.labels;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLMeterElement/labels`"
  [this val]
  (aset this "labels" val))

