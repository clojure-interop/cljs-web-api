(ns web.event.FocusEvent
  "The FocusEvent interface represents focus-related events, including
  blur, focusin, and focusout."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The FocusEvent() constructor returns a newly created `web.event.FocusEvent` object with an optional `web.EventTarget`. When the event has both a source and a destination, the relatedTarget value must be set to the other target.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/FocusEvent`"
  js/FocusEvent)

(defn related-target
  "Property.

  The FocusEvent.relatedTarget read-only property is the secondary
  depending on the type of event. In some cases, like when tabbing
  or out of a page, this property may be set to null for security

  `secondTarget = focusEvent.relatedTarget`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/relatedTarget`"
  [this]
  (-> this (.-relatedTarget)))

(defn set-related-target!
  "Property.

  The FocusEvent.relatedTarget read-only property is the secondary
  depending on the type of event. In some cases, like when tabbing
  or out of a page, this property may be set to null for security

  `secondTarget = focusEvent.relatedTarget`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/relatedTarget`"
  [this val]
  (aset this "relatedTarget" val))

