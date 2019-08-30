(ns web.cssdom.StyleSheet
  "An object implementing the StyleSheet interface represents a
  style sheet. CSS style sheets will further implement the more
  `web.cssdom.CSSStyleSheet` interface."
  (:refer-clojure :exclude [type]))

(defn disabled
  "Property.

  The disabled property of the `web.cssdom.StyleSheet` interface
  whether the style sheet is prevented from applying to the document.

  `bool = stylesheet.disabled`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/disabled`"
  [this]
  (-> this (.-disabled)))

(defn set-disabled!
  "Property.

  The disabled property of the `web.cssdom.StyleSheet` interface
  whether the style sheet is prevented from applying to the document.

  `bool = stylesheet.disabled`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/disabled`"
  [this val]
  (aset this "disabled" val))

(defn href
  "Property.

  [Read Only]

  The href property of the `web.cssdom.StyleSheet` interface returns
  location of the style sheet.

  `uri = stylesheet.href`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/href`"
  [this]
  (-> this (.-href)))

(defn media
  "Property.

  [Read Only]

  The media property of the `web.cssdom.StyleSheet` interface specifies
  intended destination media for style information. It is a read-only,
  MediaList object and can be removed with deleteMedium() and added
  appendMedium().

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/media`"
  [this]
  (-> this (.-media)))

(defn owner-node
  "Property.

  [Read Only]

  The ownerNode property of the `web.cssdom.StyleSheet` interface
  the node that associates this style sheet with the document.

  `objRef = stylesheet.ownerNode`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/ownerNode`"
  [this]
  (-> this (.-ownerNode)))

(defn parent-style-sheet
  "Property.

  [Read Only]

  The parentStyleSheet property of the `web.cssdom.StyleSheet`
  returns the style sheet, if any, that is including the given
  sheet.

  `objRef = stylesheet.parentStyleSheet`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/parentStyleSheet`"
  [this]
  (-> this (.-parentStyleSheet)))

(defn title
  "Property.

  [Read Only]

  The title property of the `web.cssdom.StyleSheet` interface returns
  advisory title of the current style sheet.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/title`"
  [this]
  (-> this (.-title)))

(defn type
  "Property.

  [Read Only]

  The type property of the `web.cssdom.StyleSheet` interface specifies
  style sheet language for the given style sheet.

  `string = stylesheet.type`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/StyleSheet/type`"
  [this]
  (-> this (.-type)))

