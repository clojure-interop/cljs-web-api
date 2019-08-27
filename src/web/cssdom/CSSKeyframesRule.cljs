(ns web.cssdom.CSSKeyframesRule
  "The CSSKeyframesRule interface describes an object representing
  complete set of keyframes for a CSS animation. It corresponds
  the contents of a whole `@keyframes` at-rule. It implements the
  interface with a type value of 7 (CSSRule.KEYFRAMES_RULE)."
  (:refer-clojure :exclude [name]))

(defn append-rule
  "Method.

  Inserts a new keyframe rule into the current CSSKeyframesRule.
  parameter is a DOMString containing a keyframe in the same format
  an entry of a @keyframes at-rule. If it contains more than one
  rule, a DOMException with a SYNTAX_ERR is thrown."
  [this & args]
  (-> this .-appendRule (.apply this (clj->js args))))

(defn delete-rule
  "Method.

  Deletes a keyframe rule from the current CSSKeyframesRule. The
  is the index of the keyframe to be deleted, expressed as a DOMString
  as a number between 0% and 100%."
  [this & args]
  (-> this .-deleteRule (.apply this (clj->js args))))

(defn find-rule
  "Method.

  Returns a keyframe rule corresponding to the given key. The key
  a DOMString containing an index of the keyframe to be returned,
  to a percentage between 0% and 100%. If no such keyframe exists,
  returns null."
  [this & args]
  (-> this .-findRule (.apply this (clj->js args))))

(defn name
  "Property.

  Represents the name of the animation, used by the animation-name"
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  Represents the name of the animation, used by the animation-name"
  [this val]
  (aset this "name" val))

(defn css-rules
  "Property.

  Returns a CSSRuleList of the CSS rules in the media rule."
  [this]
  (-> this (.-cssRules)))

(defn set-css-rules!
  "Property.

  Returns a CSSRuleList of the CSS rules in the media rule."
  [this val]
  (aset this "cssRules" val))

