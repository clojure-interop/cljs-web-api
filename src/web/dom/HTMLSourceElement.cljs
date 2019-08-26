(ns web.dom.HTMLSourceElement
  "The HTMLSourceElement interface provides special properties (beyond
  regular `web.dom.HTMLElement` object interface it also has available
  it by inheritance) for manipulating `<source>` elements."
  (:refer-clojure :exclude [type]))

(defn key-system
  "Property.

  Is a DOMString describing the key system encrypting the stream."
  [this]
  (-> this (.-keySystem)))

(defn set-key-system!
  "Property.

  Is a DOMString describing the key system encrypting the stream."
  [this val]
  (aset this "keySystem" val))

(defn media
  "Property.

  Is a DOMString reflecting the media HTML attribute, containing
  intended type of the media resource."
  [this]
  (-> this (.-media)))

(defn set-media!
  "Property.

  Is a DOMString reflecting the media HTML attribute, containing
  intended type of the media resource."
  [this val]
  (aset this "media" val))

(defn sizes
  "Property.

  Is a DOMString representing image sizes between breakpoints"
  [this]
  (-> this (.-sizes)))

(defn set-sizes!
  "Property.

  Is a DOMString representing image sizes between breakpoints"
  [this val]
  (aset this "sizes" val))

(defn src
  "Property.

  Is a DOMString reflecting the src HTML attribute, containing
  URL for the media resource. The HTMLSourceElement.src property
  a meaning only when the associated <source> element is nested
  a media element that is a <video> or an <audio> element. It has
  meaning and is ignored when it is nested in a <picture> element.
  Note: If the src property is updated (along with any siblings),
  parent HTMLMediaElement's load method should be called when done,
  <source> elements are not re-scanned automatically."
  [this]
  (-> this (.-src)))

(defn set-src!
  "Property.

  Is a DOMString reflecting the src HTML attribute, containing
  URL for the media resource. The HTMLSourceElement.src property
  a meaning only when the associated <source> element is nested
  a media element that is a <video> or an <audio> element. It has
  meaning and is ignored when it is nested in a <picture> element.
  Note: If the src property is updated (along with any siblings),
  parent HTMLMediaElement's load method should be called when done,
  <source> elements are not re-scanned automatically."
  [this val]
  (aset this "src" val))

(defn srcset
  "Property.

  Is a DOMString reflecting the srcset HTML attribute, containing
  list of candidate images, separated by a comma (',', U+002C COMMA).
  candidate image is a URL followed by a 'w' with the width of
  images, or an 'x' followed by the pixel density."
  [this]
  (-> this (.-srcset)))

(defn set-srcset!
  "Property.

  Is a DOMString reflecting the srcset HTML attribute, containing
  list of candidate images, separated by a comma (',', U+002C COMMA).
  candidate image is a URL followed by a 'w' with the width of
  images, or an 'x' followed by the pixel density."
  [this val]
  (aset this "srcset" val))

(defn type
  "Property.

  Is a DOMString reflecting the type HTML attribute, containing
  type of the media resource."
  [this]
  (-> this (.-type)))

(defn set-type!
  "Property.

  Is a DOMString reflecting the type HTML attribute, containing
  type of the media resource."
  [this val]
  (aset this "type" val))

