(ns web.deprecated.SVGColorProfileElement
  "The SVGColorProfileElement interface corresponds to the `<color-profile>`"
  (:refer-clojure :exclude [name]))

(defn local
  "Property.

  A DOMString corresponding to the local attribute of the given"
  [this]
  (-> this (.-local)))

(defn set-local!
  "Property.

  A DOMString corresponding to the local attribute of the given"
  [this val]
  (aset this "local" val))

(defn name
  "Property.

  A DOMString corresponding to the name attribute of the given"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  A DOMString corresponding to the name attribute of the given"
  [this val]
  (aset this "name" val))

(defn rendering-intent
  "Property.

  An unsigned short corresponding to the rendering-intent attribute
  the given element. It takes one of the RENDERING_INTENT_* constants
  on the SVGRenderingIntent interface that corresponds to the value
  the rendering-intent attribute."
  [this]
  (-> this (.-renderingIntent)))

(defn set-rendering-intent!
  "Property.

  An unsigned short corresponding to the rendering-intent attribute
  the given element. It takes one of the RENDERING_INTENT_* constants
  on the SVGRenderingIntent interface that corresponds to the value
  the rendering-intent attribute."
  [this val]
  (aset this "renderingIntent" val))

