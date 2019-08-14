(ns media.MediaQueryListEvent
  "The MediaQueryListEvent object stores information on the changes
  have happened to a `media.MediaQueryList` object — instances
  available as the event object on a function referenced by a `media.MediaQueryList.onchange`
  or `media.MediaQueryList.addListener()` call."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The MediaQueryListEvent constructor creates a new MediaQueryListEvent instance.

  init


  An init object that defines features of the new object instance. The available properties are:


  media: A `dom.DOMString` representing a serialized media query.
  matches: A `web.Boolean` representing the media query status — true if it matches, false if not.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent/MediaQueryListEvent`"
  js/MediaQueryListEvent)

(defn matches
  "Property.

  The matches read-only property of the `media.MediaQueryListEvent`
  is a `web.Boolean` that returns true if the `web.document` currently
  the media query list, or false if not.

  `var matches = MediaQueryListEvent.matches;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent/matches`"
  [this]
  (-> this (.matches)))

(defn set-matches!
  "Property.

  The matches read-only property of the `media.MediaQueryListEvent`
  is a `web.Boolean` that returns true if the `web.document` currently
  the media query list, or false if not.

  `var matches = MediaQueryListEvent.matches;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent/matches`"
  [this val]
  (aset this "matches" val))

(defn media
  "Property.

  The media read-only property of the `media.MediaQueryListEvent`
  is a `dom.DOMString` representing a serialized media query.

  `var media = MediaQueryListEvent.media;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent/media`"
  [this]
  (-> this (.media)))

(defn set-media!
  "Property.

  The media read-only property of the `media.MediaQueryListEvent`
  is a `dom.DOMString` representing a serialized media query.

  `var media = MediaQueryListEvent.media;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent/media`"
  [this val]
  (aset this "media" val))

