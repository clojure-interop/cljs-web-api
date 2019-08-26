(ns web.event.HashChangeEvent
  "The HashChangeEvent interface represents events that fire when
  fragment identifier of the URL has changed."
  (:refer-clojure :exclude []))

(defn new-url
  "Property.

  The newURL read-only property of the `web.event.HashChangeEvent`
  returns the new URL to which the window is navigating.

  `let newEventUrl = event.newURL;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent/newURL`"
  [this]
  (-> this (.newURL)))

(defn set-new-url!
  "Property.

  The newURL read-only property of the `web.event.HashChangeEvent`
  returns the new URL to which the window is navigating.

  `let newEventUrl = event.newURL;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent/newURL`"
  [this val]
  (aset this "newURL" val))

(defn old-url
  "Property.

  The oldURL read-only property of the `web.event.HashChangeEvent`
  returns the previous URL from which the window was navigated.

  `let oldEventUrl = event.oldURL;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent/oldURL`"
  [this]
  (-> this (.oldURL)))

(defn set-old-url!
  "Property.

  The oldURL read-only property of the `web.event.HashChangeEvent`
  returns the previous URL from which the window was navigated.

  `let oldEventUrl = event.oldURL;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HashChangeEvent/oldURL`"
  [this val]
  (aset this "oldURL" val))

