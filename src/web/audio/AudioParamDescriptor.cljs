(ns web.audio.AudioParamDescriptor
  "The AudioParamDescriptor dictionary of the Web Audio API specifies
  for an `web.audio.AudioParam` objects."
  (:refer-clojure :exclude [name]))

(defn name
  "Property.

  The DOMString which represents the name of the AudioParam. Under
  name the AudioParam will be available in the parameters property
  the node, and under this name the AudioWorkletProcessor.process
  will acquire the calculated values of this AudioParam."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  The DOMString which represents the name of the AudioParam. Under
  name the AudioParam will be available in the parameters property
  the node, and under this name the AudioWorkletProcessor.process
  will acquire the calculated values of this AudioParam."
  [this val]
  (aset this "name" val))

(defn automation-rate
  "Property.

  Either \"a-rate\", or \"k-rate\" string which represents an automation
  of this AudioParam. Defaults to \"a-rate\"."
  [this]
  (-> this (.-automationRate)))

(defn set-automation-rate!
  "Property.

  Either \"a-rate\", or \"k-rate\" string which represents an automation
  of this AudioParam. Defaults to \"a-rate\"."
  [this val]
  (aset this "automationRate" val))

(defn min-value
  "Property.

  A float which represents minimum value of the AudioParam. Defaults
  -3.4028235e38."
  [this]
  (-> this (.-minValue)))

(defn set-min-value!
  "Property.

  A float which represents minimum value of the AudioParam. Defaults
  -3.4028235e38."
  [this val]
  (aset this "minValue" val))

(defn max-value
  "Property.

  A float which represents maximum value of the AudioParam. Defaults
  3.4028235e38."
  [this]
  (-> this (.-maxValue)))

(defn set-max-value!
  "Property.

  A float which represents maximum value of the AudioParam. Defaults
  3.4028235e38."
  [this val]
  (aset this "maxValue" val))

(defn default-value
  "Property.

  A float which represents initial value of the AudioParam. Defaults
  0."
  [this]
  (-> this (.-defaultValue)))

(defn set-default-value!
  "Property.

  A float which represents initial value of the AudioParam. Defaults
  0."
  [this val]
  (aset this "defaultValue" val))

