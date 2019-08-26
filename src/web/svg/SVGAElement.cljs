(ns web.svg.SVGAElement
  "The SVGAElement interface provides access to the properties of
  element, as well as methods to manipulate them."
  (:refer-clojure :exclude []))

(defn download
  "Property.

  See HTMLAnchorElement.download."
  [this]
  (-> this (.download)))

(defn set-download!
  "Property.

  See HTMLAnchorElement.download."
  [this val]
  (aset this "download" val))

(defn target
  "Property.

  The SVGAElement.target read-only property of `web.svg.SVGAElement`
  an `web.svg.SVGAnimatedString` object that specifies the portion
  a target window, frame, pane into which a document is to be opened
  a link is activated.

  `myLink.target = 'value';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAElement/target`"
  [this]
  (-> this (.target)))

(defn set-target!
  "Property.

  The SVGAElement.target read-only property of `web.svg.SVGAElement`
  an `web.svg.SVGAnimatedString` object that specifies the portion
  a target window, frame, pane into which a document is to be opened
  a link is activated.

  `myLink.target = 'value';`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SVGAElement/target`"
  [this val]
  (aset this "target" val))

