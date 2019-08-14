(ns html.HTMLStyleElement
  "The HTMLStyleElement interface represents a `web.<style>` element.
  inherits properties and methods from its parent, `html.HTMLElement`,
  from `web.LinkStyle`."
  (:refer-clojure :exclude [type]))

(defn media
  "Property.

  The HTMLStyleElement.media property specifies the intended destination
  for style information.

  `medium = style.media
  style.media = medium`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement/media`"
  [this]
  (-> this (.media)))

(defn set-media!
  "Property.

  The HTMLStyleElement.media property specifies the intended destination
  for style information.

  `medium = style.media
  style.media = medium`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement/media`"
  [this val]
  (aset this "media" val))

(defn scoped
  "Property.

  The HTMLStyleElement.scoped property is a Boolean value indicating
  the element applies to the whole document (false) or only to
  parent's sub-tree (true).

  `value = style.scoped;
  style.scoped = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement/scoped`"
  [this]
  (-> this (.scoped)))

(defn set-scoped!
  "Property.

  The HTMLStyleElement.scoped property is a Boolean value indicating
  the element applies to the whole document (false) or only to
  parent's sub-tree (true).

  `value = style.scoped;
  style.scoped = true;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement/scoped`"
  [this val]
  (aset this "scoped" val))

(defn type
  "Property.

  The HTMLStyleElement.type read-only property returns the type
  the current style.

  `string = style.type;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLStyleElement/type`"
  [this]
  (-> this (.type)))

