(ns web.streams.TransformStream
  "The TransformStream interface of the Streams API represents a
  of transformable data."
  (:refer-clojure :exclude []))

(defn readable
  "Property.

  The readable end of a TransformStream."
  [this]
  (-> this (.-readable)))

(defn set-readable!
  "Property.

  The readable end of a TransformStream."
  [this val]
  (aset this "readable" val))

(defn writable
  "Property.

  The writable end of a TransformStream."
  [this]
  (-> this (.-writable)))

(defn set-writable!
  "Property.

  The writable end of a TransformStream."
  [this val]
  (aset this "writable" val))

