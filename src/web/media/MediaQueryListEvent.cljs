(ns web.media.MediaQueryListEvent
  "The MediaQueryListEvent object stores information on the changes
  have happened to a `web.cssdom.MediaQueryList` object — instances
  available as the event object on a function referenced by a `MediaQueryList.onchange`
  or `MediaQueryList.addListener()` call."
  (:refer-clojure :exclude []))

(defn matches
  "Property.

  [Read Only]

  The matches read-only property of the `web.media.MediaQueryListEvent`
  is a `js.Boolean` that returns true if the `document` currently
  the media query list, or false if not.

  `var matches = MediaQueryListEvent.matches;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent/matches`"
  [this]
  (-> this (.-matches)))

(defn media
  "Property.

  [Read Only]

  The media read-only property of the `web.media.MediaQueryListEvent`
  is a `web.dom.DOMString` representing a serialized media query.

  `var media = MediaQueryListEvent.media;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent/media`"
  [this]
  (-> this (.-media)))

