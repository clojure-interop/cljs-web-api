(ns web.vtt.VTTRegion
  "The VTTRegion interface—part of the API for handling WebVTT (text
  on media presentations)—describes a portion of the video to render
  `web.vtt.VTTCue` onto."
  (:refer-clojure :exclude []))

(defn id
  "Property.

  A DOMString that identifies the region."
  [this]
  (-> this (.id)))

(defn set-id!
  "Property.

  A DOMString that identifies the region."
  [this val]
  (aset this "id" val))

