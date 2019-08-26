(ns web.cssdom.CSSKeyframeRule
  "The CSSKeyframeRule interface describes an object representing
  set of style for a given keyframe. It corresponds to the contains
  a single keyframe of a `@keyframes` at-rule. It implements the
  interface with a type value of 8 (CSSRule.KEYFRAME_RULE)."
  (:refer-clojure :exclude []))

(defn key-text
  "Property.

  Represents the key of the keyframe, like '10%', '75%'. The from
  maps to '0%' and the to keyword maps to '100%'."
  [this]
  (-> this (.keyText)))

(defn set-key-text!
  "Property.

  Represents the key of the keyframe, like '10%', '75%'. The from
  maps to '0%' and the to keyword maps to '100%'."
  [this val]
  (aset this "keyText" val))

