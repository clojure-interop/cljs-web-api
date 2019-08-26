(ns web.svg.SVGComponentTransferFunctionElement
  "The SVGComponentTransferFunctionElement interface defines a base
  used by the component transfer function interfaces."
  (:refer-clojure :exclude [type]))

(defn type
  "Property.

  An SVGAnimatedEnumeration corresponding to the type attribute
  the given element. It takes one of the SVG_FECOMPONENTTRANSFER_TYPE_*
  defined on this interface."
  [this]
  (-> this (.type)))

(defn set-type!
  "Property.

  An SVGAnimatedEnumeration corresponding to the type attribute
  the given element. It takes one of the SVG_FECOMPONENTTRANSFER_TYPE_*
  defined on this interface."
  [this val]
  (aset this "type" val))

