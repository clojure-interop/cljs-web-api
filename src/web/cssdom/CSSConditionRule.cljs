(ns web.cssdom.CSSConditionRule
  "An object implementing the CSSConditionRule interface represents
  single condition CSS at-rule, which consists of a condition and
  statement block. It is a child of `web.cssdom.CSSGroupingRule`."
  (:refer-clojure :exclude []))

(defn condition-text
  "Property.

  Represents the text of the condition of the rule."
  [this]
  (-> this (.conditionText)))

(defn set-condition-text!
  "Property.

  Represents the text of the condition of the rule."
  [this val]
  (aset this "conditionText" val))

