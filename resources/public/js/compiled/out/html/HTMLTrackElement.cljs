(ns html.HTMLTrackElement
  "The HTMLTrackElement interface represents an HTML `web.<track>`
  within the DOM. This element can be used as a child of either
  or `web.<video>` to specify a text track containing information
  as closed captions or subtitles."
  (:refer-clojure :exclude []))

(defn src
  "Property.

  The HTMLTrackElement.src property reflects the value of the `web.<track>`
  src attribute, which indicates the URL of the text track's data.

  `var textTrackURL = HTMLTrackElement.src;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement/src`"
  [this]
  (-> this (.src)))

(defn set-src!
  "Property.

  The HTMLTrackElement.src property reflects the value of the `web.<track>`
  src attribute, which indicates the URL of the text track's data.

  `var textTrackURL = HTMLTrackElement.src;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLTrackElement/src`"
  [this val]
  (aset this "src" val))

