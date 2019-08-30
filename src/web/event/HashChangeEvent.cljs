(ns web.event.HashChangeEvent
  "The HashChangeEvent interface represents events that fire when
  fragment identifier of the URL has changed."
  (:refer-clojure :exclude []))

(defn new-url
  "Property.

  [Read Only]

  The newURL read-only property of the `web.event.HashChangeEvent`
  returns the new URL to which the window is navigating.

  `let newEventUrl = event.newURL;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent/newURL`"
  [this]
  (-> this (.-newURL)))

(defn old-url
  "Property.

  [Read Only]

  The oldURL read-only property of the `web.event.HashChangeEvent`
  returns the previous URL from which the window was navigated.

  `let oldEventUrl = event.oldURL;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent/oldURL`"
  [this]
  (-> this (.-oldURL)))

