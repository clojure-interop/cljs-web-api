(ns web.css.CSSCounterStyleRule
  "The CSSCounterStyleRule interface represents an `@counter-style`"
  (:refer-clojure :exclude [name range]))

(defn name
  "Property.

  Is a DOMString object that contains the serialization of the
  defined for the associated rule."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  Is a DOMString object that contains the serialization of the
  defined for the associated rule."
  [this val]
  (aset this "name" val))

(defn system
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this]
  (-> this (.-system)))

(defn set-system!
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this val]
  (aset this "system" val))

(defn symbols
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this]
  (-> this (.-symbols)))

(defn set-symbols!
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this val]
  (aset this "symbols" val))

(defn additive-symbols
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this]
  (-> this (.-additiveSymbols)))

(defn set-additive-symbols!
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this val]
  (aset this "additiveSymbols" val))

(defn negative
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this]
  (-> this (.-negative)))

(defn set-negative!
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this val]
  (aset this "negative" val))

(defn prefix
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this]
  (-> this (.-prefix)))

(defn set-prefix!
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this val]
  (aset this "prefix" val))

(defn suffix
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this]
  (-> this (.-suffix)))

(defn set-suffix!
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this val]
  (aset this "suffix" val))

(defn range
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this]
  (-> this (.-range)))

(defn set-range!
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this val]
  (aset this "range" val))

(defn pad
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this]
  (-> this (.-pad)))

(defn set-pad!
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this val]
  (aset this "pad" val))

(defn speak-as
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this]
  (-> this (.-speakAs)))

(defn set-speak-as!
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this val]
  (aset this "speakAs" val))

(defn fallback
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this]
  (-> this (.-fallback)))

(defn set-fallback!
  "Property.

  Is a DOMString object that contains the serialization of the
  descriptor defined for the associated rule. If the descriptor
  not specified in the associated rule, the attribute returns an
  string."
  [this val]
  (aset this "fallback" val))

