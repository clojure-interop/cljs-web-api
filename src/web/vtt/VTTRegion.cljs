(ns web.vtt.VTTRegion
  "The VTTRegion interface—part of the API for handling WebVTT (text
  on media presentations)—describes a portion of the video to render
  `web.vtt.VTTCue` onto."
  (:refer-clojure :exclude []))

(defn id
  "Property.

  A DOMString that identifies the region."
  [this]
  (-> this (.-id)))

(defn set-id!
  "Property.

  A DOMString that identifies the region."
  [this val]
  (aset this "id" val))

(defn width
  "Property.

  A double representing the width of the region, as a percentage
  the video."
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  A double representing the width of the region, as a percentage
  the video."
  [this val]
  (aset this "width" val))

(defn lines
  "Property.

  A double representing the height of the region, in number of"
  [this]
  (-> this (.-lines)))

(defn set-lines!
  "Property.

  A double representing the height of the region, in number of"
  [this val]
  (aset this "lines" val))

(defn region-anchor-x
  "Property.

  A double representing the region anchor X offset, as a percentage
  the region."
  [this]
  (-> this (.-regionAnchorX)))

(defn set-region-anchor-x!
  "Property.

  A double representing the region anchor X offset, as a percentage
  the region."
  [this val]
  (aset this "regionAnchorX" val))

(defn region-anchor-y
  "Property.

  A double representing the region anchor Y offset, as a percentage
  the region."
  [this]
  (-> this (.-regionAnchorY)))

(defn set-region-anchor-y!
  "Property.

  A double representing the region anchor Y offset, as a percentage
  the region."
  [this val]
  (aset this "regionAnchorY" val))

(defn viewport-anchor-x
  "Property.

  A double representing the viewport anchor X offset, as a percentage
  the video."
  [this]
  (-> this (.-viewportAnchorX)))

(defn set-viewport-anchor-x!
  "Property.

  A double representing the viewport anchor X offset, as a percentage
  the video."
  [this val]
  (aset this "viewportAnchorX" val))

(defn viewport-anchor-y
  "Property.

  A double representing the viewport anchor Y offset, as a percentage
  the video."
  [this]
  (-> this (.-viewportAnchorY)))

(defn set-viewport-anchor-y!
  "Property.

  A double representing the viewport anchor Y offset, as a percentage
  the video."
  [this val]
  (aset this "viewportAnchorY" val))

(defn scroll
  "Property.

  An enum representing how adding new cues will move existing cues."
  [this]
  (-> this (.-scroll)))

(defn set-scroll!
  "Property.

  An enum representing how adding new cues will move existing cues."
  [this val]
  (aset this "scroll" val))

