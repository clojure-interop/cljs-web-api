(ns web.BasicCardRequest
  "The BasicCardRequest dictionary is a JavaScript object-structure
  can be used in the Payment Request API. The properties of BasicCardRequest
  defined in the Basic Card Payment spec)."
  (:refer-clojure :exclude []))

(defn supported-networks
  "Property.

  The supportedNetworks property of the `web.BasicCardRequest`
  contains an array of `dom.DOMString`s representing the card networks
  the retailer supports (e.g. amex, mastercard).

  `supportedNetworks : [value [, ... value]]`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardRequest/supportedNetworks`"
  [this]
  (-> this (.supportedNetworks)))

(defn set-supported-networks!
  "Property.

  The supportedNetworks property of the `web.BasicCardRequest`
  contains an array of `dom.DOMString`s representing the card networks
  the retailer supports (e.g. amex, mastercard).

  `supportedNetworks : [value [, ... value]]`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardRequest/supportedNetworks`"
  [this val]
  (aset this "supportedNetworks" val))

(defn supported-types
  "Property.

  The obsolete supportedTypes property of the `web.BasicCardRequest`
  can optionally be provided to specify an array of `dom.DOMString`s
  the card types that the retailer supports (e.g. credit, debit,

  `basicCardRequest.supportedTypes = [cardType1...cardTypeN];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardRequest/supportedTypes`"
  [this]
  (-> this (.supportedTypes)))

(defn set-supported-types!
  "Property.

  The obsolete supportedTypes property of the `web.BasicCardRequest`
  can optionally be provided to specify an array of `dom.DOMString`s
  the card types that the retailer supports (e.g. credit, debit,

  `basicCardRequest.supportedTypes = [cardType1...cardTypeN];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/BasicCardRequest/supportedTypes`"
  [this val]
  (aset this "supportedTypes" val))

