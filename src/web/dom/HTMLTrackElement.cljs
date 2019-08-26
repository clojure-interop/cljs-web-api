(ns web.dom.HTMLTrackElement
  "The HTMLTrackElement interface represents an HTML `<track>` element
  the DOM. This element can be used as a child of either `<audio>`
  `<video>` to specify a text track containing information such
  closed captions or subtitles."
  (:refer-clojure :exclude []))

(defn kind
  "Property.

  Is a DOMString that reflects the kind HTML attribute, indicating
  the text track is meant to be used. Possible values are: subtitles,
  descriptions, chapters, or metadata."
  [this]
  (-> this (.kind)))

(defn set-kind!
  "Property.

  Is a DOMString that reflects the kind HTML attribute, indicating
  the text track is meant to be used. Possible values are: subtitles,
  descriptions, chapters, or metadata."
  [this val]
  (aset this "kind" val))

(defn src
  "Property.

  The HTMLTrackElement.src property reflects the value of the `<track>`
  src attribute, which indicates the URL of the text track's data.

  `var textTrackURL = HTMLTrackElement.src;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement/src`"
  [this]
  (-> this (.src)))

(defn set-src!
  "Property.

  The HTMLTrackElement.src property reflects the value of the `<track>`
  src attribute, which indicates the URL of the text track's data.

  `var textTrackURL = HTMLTrackElement.src;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement/src`"
  [this val]
  (aset this "src" val))

