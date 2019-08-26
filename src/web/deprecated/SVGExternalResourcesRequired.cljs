(ns web.deprecated.SVGExternalResourcesRequired
  "The SVGExternalResourcesRequired interface defines an interface
  applies to all elements where this element or one of its descendants
  reference an external resource."
  (:refer-clojure :exclude []))

(defn external-resources-required
  "Property.

  Corresponds to the externalResourcesRequired attribute of the
  element.
  Note: The SVG DOM defines the attribute externalResourcesRequired
  being of type SVGAnimatedBoolean, whereas the SVG language definition
  that the attribute is not animated. Because the SVG language
  states that externalResourcesRequired cannot be animated, the
  will always be the same as the baseVal."
  [this]
  (-> this (.externalResourcesRequired)))

(defn set-external-resources-required!
  "Property.

  Corresponds to the externalResourcesRequired attribute of the
  element.
  Note: The SVG DOM defines the attribute externalResourcesRequired
  being of type SVGAnimatedBoolean, whereas the SVG language definition
  that the attribute is not animated. Because the SVG language
  states that externalResourcesRequired cannot be animated, the
  will always be the same as the baseVal."
  [this val]
  (aset this "externalResourcesRequired" val))

