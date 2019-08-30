(ns web.dom.HTMLStyleElement
  "The HTMLStyleElement interface represents a `<style>` element.
  inherits properties and methods from its parent, `web.dom.HTMLElement`,
  from `web.cssdom.LinkStyle`."
  (:refer-clojure :exclude [type]))

(defn media
  "Property.

  The HTMLStyleElement.media property specifies the intended destination
  for style information.

  `medium = style.media
  style.media = medium`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement/media`"
  [this]
  (-> this (.-media)))

(defn set-media!
  "Property.

  The HTMLStyleElement.media property specifies the intended destination
  for style information.

  `medium = style.media
  style.media = medium`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement/media`"
  [this val]
  (aset this "media" val))

(defn type
  "Property.

  [Read Only]

  The HTMLStyleElement.type read-only property returns the type
  the current style.

  `string = style.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement/type`"
  [this]
  (-> this (.-type)))

(defn disabled
  "Property.

  Is a Boolean value representing whether or not the stylesheet
  disabled (true) or not (false)."
  [this]
  (-> this (.-disabled)))

(defn set-disabled!
  "Property.

  Is a Boolean value representing whether or not the stylesheet
  disabled (true) or not (false)."
  [this val]
  (aset this "disabled" val))

(defn sheet
  "Property.

  Returns the StyleSheet object associated with the given element,
  null if there is none"
  [this]
  (-> this (.-sheet)))

(defn set-sheet!
  "Property.

  Returns the StyleSheet object associated with the given element,
  null if there is none"
  [this val]
  (aset this "sheet" val))

(defn scoped
  "Property.

  [Non Standard]
  [Obsolute]

  The HTMLStyleElement.scoped property is a Boolean value indicating
  the element applies to the whole document (false) or only to
  parent's sub-tree (true).

  `value = style.scoped;
  style.scoped = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement/scoped`"
  [this]
  (-> this (.-scoped)))

(defn set-scoped!
  "Property.

  [Non Standard]
  [Obsolute]

  The HTMLStyleElement.scoped property is a Boolean value indicating
  the element applies to the whole document (false) or only to
  parent's sub-tree (true).

  `value = style.scoped;
  style.scoped = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement/scoped`"
  [this val]
  (aset this "scoped" val))

