(ns web.xpath.XPathException
  "In the DOM XPath API the XPathException interface represents
  conditions that can be encountered while performing XPath operations."
  (:refer-clojure :exclude []))

(defn code
  "Property.

  [Read Only]

  The code read-only property of the `web.xpath.XPathException`
  returns a short that contains one of the error code constants.

  `var exceptionCode = exception.code;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/XPathException/code`"
  [this]
  (-> this (.-code)))

