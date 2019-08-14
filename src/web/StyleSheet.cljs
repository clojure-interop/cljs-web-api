(ns web.StyleSheet
  "An object implementing the StyleSheet interface represents a
  style sheet. CSS style sheets will further implement the more
  `css.CSSStyleSheet` interface."
  (:refer-clojure :exclude [type]))

(defn disabled
  "Property.

  The disabled property of the `web.StyleSheet` interface determines
  the style sheet is prevented from applying to the document.

  `bool = stylesheet.disabled`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/disabled`"
  [this]
  (-> this (.disabled)))

(defn set-disabled!
  "Property.

  The disabled property of the `web.StyleSheet` interface determines
  the style sheet is prevented from applying to the document.

  `bool = stylesheet.disabled`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/disabled`"
  [this val]
  (aset this "disabled" val))

(defn href
  "Property.

  The href property of the `web.StyleSheet` interface returns the
  of the style sheet.

  `uri = stylesheet.href`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/href`"
  [this]
  (-> this (.href)))

(defn set-href!
  "Property.

  The href property of the `web.StyleSheet` interface returns the
  of the style sheet.

  `uri = stylesheet.href`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/href`"
  [this val]
  (aset this "href" val))

(defn media
  "Property.

  The media property of the `web.StyleSheet` interface specifies
  intended destination media for style information. It is a read-only,
  MediaList object and can be removed with deleteMedium() and added
  appendMedium().

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/media`"
  [this]
  (-> this (.media)))

(defn set-media!
  "Property.

  The media property of the `web.StyleSheet` interface specifies
  intended destination media for style information. It is a read-only,
  MediaList object and can be removed with deleteMedium() and added
  appendMedium().

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/media`"
  [this val]
  (aset this "media" val))

(defn owner-node
  "Property.

  The ownerNode property of the `web.StyleSheet` interface returns
  node that associates this style sheet with the document.

  `objRef = stylesheet.ownerNode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/ownerNode`"
  [this]
  (-> this (.ownerNode)))

(defn set-owner-node!
  "Property.

  The ownerNode property of the `web.StyleSheet` interface returns
  node that associates this style sheet with the document.

  `objRef = stylesheet.ownerNode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/ownerNode`"
  [this val]
  (aset this "ownerNode" val))

(defn parent-style-sheet
  "Property.

  The parentStyleSheet property of the `web.StyleSheet` interface
  the style sheet, if any, that is including the given style sheet.

  `objRef = stylesheet.parentStyleSheet`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/parentStyleSheet`"
  [this]
  (-> this (.parentStyleSheet)))

(defn set-parent-style-sheet!
  "Property.

  The parentStyleSheet property of the `web.StyleSheet` interface
  the style sheet, if any, that is including the given style sheet.

  `objRef = stylesheet.parentStyleSheet`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/parentStyleSheet`"
  [this val]
  (aset this "parentStyleSheet" val))

(defn title
  "Property.

  The title property of the `web.StyleSheet` interface returns
  advisory title of the current style sheet.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/title`"
  [this]
  (-> this (.title)))

(defn set-title!
  "Property.

  The title property of the `web.StyleSheet` interface returns
  advisory title of the current style sheet.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/title`"
  [this val]
  (aset this "title" val))

(defn type
  "Property.

  The type property of the `web.StyleSheet` interface specifies
  style sheet language for the given style sheet.

  `string = stylesheet.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/type`"
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  The type property of the `web.StyleSheet` interface specifies
  style sheet language for the given style sheet.

  `string = stylesheet.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/type`"
  [this val]
  (aset this "type" val))

