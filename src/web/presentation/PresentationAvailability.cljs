(ns web.presentation.PresentationAvailability
  "A PresentationAvailability object is associated with available
  displays and represents the presentation display availability
  a presentation request. If the controlling user agent can monitor
  list of available presentation displays in the background (without
  pending request to start()), the PresentationAvailability object
  be implemented in a controlling browsing context."
  (:refer-clojure :exclude []))

(defn value
  "Property.

  [Read Only]

  The value attribute MUST return the last value from which it
  set. The value is updated by the monitor the list of available
  displays algorithm.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationAvailability/value`"
  [this]
  (-> this (.-value)))

(defn onchange
  "Property.

  The onchange attribute is an event handler whose corresponding
  handler event type is change.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationAvailability/onchange`"
  [this]
  (-> this (.-onchange)))

(defn set-onchange!
  "Property.

  The onchange attribute is an event handler whose corresponding
  handler event type is change.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PresentationAvailability/onchange`"
  [this val]
  (aset this "onchange" val))

