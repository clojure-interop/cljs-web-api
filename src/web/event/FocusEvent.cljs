(ns web.event.FocusEvent
  "The FocusEvent interface represents focus-related events, including
  blur, focusin, and focusout."
  (:refer-clojure :exclude []))

(defn related-target
  "Property.

  [Read Only]

  The FocusEvent.relatedTarget read-only property is the secondary
  depending on the type of event. In some cases, like when tabbing
  or out of a page, this property may be set to null for security

  `secondTarget = focusEvent.relatedTarget`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/FocusEvent/relatedTarget`"
  [this]
  (-> this (.-relatedTarget)))

