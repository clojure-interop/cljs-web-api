(ns web.dom.HTMLIFrameElement
  "The HTMLIFrameElement interface provides special properties and
  (beyond those of the `web.dom.HTMLElement` interface it also
  available to it by inheritance) for manipulating the layout and
  of inline frame elements."
  (:refer-clojure :exclude []))

(defn set-nfc-focus
  "Method.

  The setNfcFocus() method of the `web.dom.HTMLIFrameElement` interface
  whether an `<iframe>` can receive an NFC event.

  `myIFrame.setNfcFocus(true);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/setNfcFocus`"
  [this & args]
  (apply (-> this .-setNfcFocus) (concat [this] args)))

(defn align
  "Property.

  Is a DOMString that specifies the alignment of the frame with
  to the surrounding context."
  [this]
  (-> this (.align)))

(defn set-align!
  "Property.

  Is a DOMString that specifies the alignment of the frame with
  to the surrounding context."
  [this val]
  (aset this "align" val))

(defn allow-payment-request
  "Property.

  The allowPaymentRequest property of the `web.dom.HTMLIFrameElement`
  returns a `js.Boolean` indicating whether the Payment Request
  may be invoked on a cross-origin iframe.

  `var allow = htmlIFrameElement.allowPaymentRequest`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/allowPaymentRequest`"
  [this]
  (-> this (.allowPaymentRequest)))

(defn set-allow-payment-request!
  "Property.

  The allowPaymentRequest property of the `web.dom.HTMLIFrameElement`
  returns a `js.Boolean` indicating whether the Payment Request
  may be invoked on a cross-origin iframe.

  `var allow = htmlIFrameElement.allowPaymentRequest`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/allowPaymentRequest`"
  [this val]
  (aset this "allowPaymentRequest" val))

(defn content-window
  "Property.

  The contentWindow property returns the Window object of an <iframe>
  You can use this Window object to access the iframe's document
  its internal DOM. This attribute is read-only, but its properties
  be manipulated like the global Window object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentWindow`"
  [this]
  (-> this (.contentWindow)))

(defn csp
  "Property.

  The csp property of the `web.dom.HTMLIFrameElement` interface
  the Content Security Policy that an embedded document must agree
  enforce upon itself.

  `var csp = HTMLIFrameElement.csp
  HTMLIFrameElement.csp = csp`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/csp`"
  [this]
  (-> this (.csp)))

(defn set-csp!
  "Property.

  The csp property of the `web.dom.HTMLIFrameElement` interface
  the Content Security Policy that an embedded document must agree
  enforce upon itself.

  `var csp = HTMLIFrameElement.csp
  HTMLIFrameElement.csp = csp`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/csp`"
  [this val]
  (aset this "csp" val))

(defn feature-policy
  "Property.

  The featurePolicy read-only property of the `web.dom.HTMLIFrameElement`
  returns the `web.other.FeaturePolicy` interface which provides
  simple API for introspecting the feature policies applied to
  specific frame.

  `var policy = HTMLIFrameElement.featurePolicy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/featurePolicy`"
  [this]
  (-> this (.featurePolicy)))

(defn set-feature-policy!
  "Property.

  The featurePolicy read-only property of the `web.dom.HTMLIFrameElement`
  returns the `web.other.FeaturePolicy` interface which provides
  simple API for introspecting the feature policies applied to
  specific frame.

  `var policy = HTMLIFrameElement.featurePolicy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/featurePolicy`"
  [this val]
  (aset this "featurePolicy" val))

(defn policy
  "Property.

  HTMLIFrameElement.policy was renamed into HTMLIFrameElement.featurePolicy
  being enabled by default in any browsers."
  [this]
  (-> this (.policy)))

(defn set-policy!
  "Property.

  HTMLIFrameElement.policy was renamed into HTMLIFrameElement.featurePolicy
  being enabled by default in any browsers."
  [this val]
  (aset this "policy" val))

(defn referrer-policy
  "Property.

  The HTMLIFrameElement.referrerPolicy property reflects the HTML
  attribute of the `<iframe>` element defining which referrer is
  when fetching the resource.

  `refStr = iframeElt.referrerPolicy;
  iframeElt.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy`"
  [this]
  (-> this (.referrerPolicy)))

(defn set-referrer-policy!
  "Property.

  The HTMLIFrameElement.referrerPolicy property reflects the HTML
  attribute of the `<iframe>` element defining which referrer is
  when fetching the resource.

  `refStr = iframeElt.referrerPolicy;
  iframeElt.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy`"
  [this val]
  (aset this "referrerPolicy" val))

