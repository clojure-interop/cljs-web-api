(ns html.HTMLIFrameElement
  "The HTMLIFrameElement interface provides special properties and
  (beyond those of the `html.HTMLElement` interface it also has
  to it by inheritance) for manipulating the layout and presentation
  inline frame elements."
  (:refer-clojure :exclude []))

(defn set-nfc-focus
  "Method.

  The setNfcFocus() method of the `html.HTMLIFrameElement` interface
  whether an `web.<iframe>` can receive an NFC event.

  `myIFrame.setNfcFocus(true);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/setNfcFocus`"
  [this & args]
  (apply (-> this .-setNfcFocus) (concat [this] args)))

(defn allow-payment-request
  "Property.

  The allowPaymentRequest property of the `html.HTMLIFrameElement`
  returns a `web.Boolean` indicating whether the Payment Request
  may be invoked on a cross-origin iframe.

  `var allow = htmlIFrameElement.allowPaymentRequest`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/allowPaymentRequest`"
  [this]
  (-> this (.allowPaymentRequest)))

(defn set-allow-payment-request!
  "Property.

  The allowPaymentRequest property of the `html.HTMLIFrameElement`
  returns a `web.Boolean` indicating whether the Payment Request
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

  The csp property of the `html.HTMLIFrameElement` interface specifies
  Content Security Policy that an embedded document must agree
  enforce upon itself.

  `var csp = HTMLIFrameElement.csp
  HTMLIFrameElement.csp = csp`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/csp`"
  [this]
  (-> this (.csp)))

(defn set-csp!
  "Property.

  The csp property of the `html.HTMLIFrameElement` interface specifies
  Content Security Policy that an embedded document must agree
  enforce upon itself.

  `var csp = HTMLIFrameElement.csp
  HTMLIFrameElement.csp = csp`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/csp`"
  [this val]
  (aset this "csp" val))

(defn feature-policy
  "Property.

  The featurePolicy read-only property of the `html.HTMLIFrameElement`
  returns the `web.FeaturePolicy` interface which provides a simple
  for introspecting the feature policies applied to a specific

  `var policy = HTMLIFrameElement.featurePolicy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/featurePolicy`"
  [this]
  (-> this (.featurePolicy)))

(defn set-feature-policy!
  "Property.

  The featurePolicy read-only property of the `html.HTMLIFrameElement`
  returns the `web.FeaturePolicy` interface which provides a simple
  for introspecting the feature policies applied to a specific

  `var policy = HTMLIFrameElement.featurePolicy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/featurePolicy`"
  [this val]
  (aset this "featurePolicy" val))

(defn referrer-policy
  "Property.

  The HTMLIFrameElement.referrerPolicy property reflects the HTML
  attribute of the `web.<iframe>` element defining which referrer
  sent when fetching the resource.

  `refStr = iframeElt.referrerPolicy;
  iframeElt.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy`"
  [this]
  (-> this (.referrerPolicy)))

(defn set-referrer-policy!
  "Property.

  The HTMLIFrameElement.referrerPolicy property reflects the HTML
  attribute of the `web.<iframe>` element defining which referrer
  sent when fetching the resource.

  `refStr = iframeElt.referrerPolicy;
  iframeElt.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy`"
  [this val]
  (aset this "referrerPolicy" val))

(defn content-document
  "Property.

  If the iframe and the iframe's parent document are Same Origin,
  a Document (that is, the active document in the inline frame's
  browsing context), else returns null.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentDocument`"
  [this]
  (-> this (.contentDocument)))

(defn set-content-document!
  "Property.

  If the iframe and the iframe's parent document are Same Origin,
  a Document (that is, the active document in the inline frame's
  browsing context), else returns null.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentDocument`"
  [this val]
  (aset this "contentDocument" val))

(defn src
  "Property.

  The HTMLIFrameElement.src property reflects the HTML referrerpolicy
  of the `web.<iframe>` element defining which referrer is sent
  fetching the resource.

  `refStr = iframeElt.src;
  iframeElt.src= refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/src`"
  [this]
  (-> this (.src)))

(defn set-src!
  "Property.

  The HTMLIFrameElement.src property reflects the HTML referrerpolicy
  of the `web.<iframe>` element defining which referrer is sent
  fetching the resource.

  `refStr = iframeElt.src;
  iframeElt.src= refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/src`"
  [this val]
  (aset this "src" val))

(defn srcdoc
  "Property.

  The srcdoc property of the `html.HTMLIFrameElement` specifies
  content of the page.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/srcdoc`"
  [this]
  (-> this (.srcdoc)))

(defn set-srcdoc!
  "Property.

  The srcdoc property of the `html.HTMLIFrameElement` specifies
  content of the page.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/srcdoc`"
  [this val]
  (aset this "srcdoc" val))

