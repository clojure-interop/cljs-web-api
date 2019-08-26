(ns web.cssdom.CSSMediaRule
  "The CSSMediaRule interface represents a single CSS `@media` rule.
  implements the `web.cssdom.CSSConditionRule` interface, and therefore
  `web.cssdom.CSSGroupingRule` and the `web.cssdom.CSSRule` interface
  a type value of 4 (CSSRule.MEDIA_RULE)."
  (:refer-clojure :exclude []))

(defn media
  "Property.

  Specifies a MediaList representing the intended destination medium
  style information."
  [this]
  (-> this (.media)))

(defn set-media!
  "Property.

  Specifies a MediaList representing the intended destination medium
  style information."
  [this val]
  (aset this "media" val))

