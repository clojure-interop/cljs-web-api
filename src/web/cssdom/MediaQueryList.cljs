(ns web.cssdom.MediaQueryList
  "A MediaQueryList object stores information on a media query applied
  a document, with support for both immediate and event-driven
  against the state of the document."
  (:refer-clojure :exclude []))

(defn add-listener
  "Method.

  The addListener() method of the `web.cssdom.MediaQueryList` interface
  a listener to the MediaQueryListener that will run a custom callback
  in response to the media query status changing.

  `MediaQueryList.addListener(func)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/addListener`"
  [this func]
  (-> this (.addListener func)))

(defn remove-listener
  "Method.

  The removeListener() method of the `web.cssdom.MediaQueryList`
  removes a listener from the MediaQueryListener.

  `MediaQueryList.removeListener(func)`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/removeListener`"
  [this func]
  (-> this (.removeListener func)))

(defn matches
  "Property.

  The matches read-only property of the `web.cssdom.MediaQueryList`
  is a `js.Boolean` that returns true if the `document` currently
  the media query list, or false if not.

  `var matches = MediaQueryList.matches;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches`"
  [this]
  (-> this (.matches)))

(defn set-matches!
  "Property.

  The matches read-only property of the `web.cssdom.MediaQueryList`
  is a `js.Boolean` that returns true if the `document` currently
  the media query list, or false if not.

  `var matches = MediaQueryList.matches;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/matches`"
  [this val]
  (aset this "matches" val))

(defn media
  "Property.

  The media read-only property of the `web.cssdom.MediaQueryList`
  is a `web.dom.DOMString` representing a serialized media query.

  `var media = MediaQueryList.media;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/media`"
  [this]
  (-> this (.media)))

(defn set-media!
  "Property.

  The media read-only property of the `web.cssdom.MediaQueryList`
  is a `web.dom.DOMString` representing a serialized media query.

  `var media = MediaQueryList.media;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/media`"
  [this val]
  (aset this "media" val))

(defn onchange
  "Property.

  The onchange property of the `web.cssdom.MediaQueryList` interface
  an event handler property representing a function that is invoked
  the change event fires, i.e when the status of media query support
  The event object is a `web.media.MediaQueryListEvent` instance,
  is recognised as a MediaListQuery instance in older browsers,
  backwards compatibility purposes.

  `MediaQueryList.onchange = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/onchange`"
  [this]
  (-> this (.onchange)))

(defn set-onchange!
  "Property.

  The onchange property of the `web.cssdom.MediaQueryList` interface
  an event handler property representing a function that is invoked
  the change event fires, i.e when the status of media query support
  The event object is a `web.media.MediaQueryListEvent` instance,
  is recognised as a MediaListQuery instance in older browsers,
  backwards compatibility purposes.

  `MediaQueryList.onchange = function() { ... };`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList/onchange`"
  [this val]
  (aset this "onchange" val))

