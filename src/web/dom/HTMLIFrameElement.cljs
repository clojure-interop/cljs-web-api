(ns web.dom.HTMLIFrameElement
  "The HTMLIFrameElement interface provides special properties and
  (beyond those of the `web.dom.HTMLElement` interface it also
  available to it by inheritance) for manipulating the layout and
  of inline frame elements."
  (:refer-clojure :exclude [name]))

(defn set-nfc-focus
  "Method.

  The setNfcFocus() method of the `web.dom.HTMLIFrameElement` interface
  whether an `<iframe>` can receive an NFC event.

  `myIFrame.setNfcFocus(true);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/setNfcFocus`"
  [this & args]
  (-> this .-setNfcFocus (.apply this (clj->js args))))

(defn align
  "Property.

  Is a DOMString that specifies the alignment of the frame with
  to the surrounding context."
  [this]
  (-> this (.-align)))

(defn set-align!
  "Property.

  Is a DOMString that specifies the alignment of the frame with
  to the surrounding context."
  [this val]
  (aset this "align" val))

(defn allow
  "Property.

  Is a list of origins the the frame is allowed to display content
  This attribute also accepts the values self and src which represent
  origin in the iframe's src attribute. The default value is src."
  [this]
  (-> this (.-allow)))

(defn set-allow!
  "Property.

  Is a list of origins the the frame is allowed to display content
  This attribute also accepts the values self and src which represent
  origin in the iframe's src attribute. The default value is src."
  [this val]
  (aset this "allow" val))

(defn allowfullscreen
  "Property.

  Is a Boolean indicating whether the inline frame is willing to
  placed into full screen mode. See Using full-screen mode for"
  [this]
  (-> this (.-allowfullscreen)))

(defn set-allowfullscreen!
  "Property.

  Is a Boolean indicating whether the inline frame is willing to
  placed into full screen mode. See Using full-screen mode for"
  [this val]
  (aset this "allowfullscreen" val))

(defn allow-payment-request
  "Property.

  The allowPaymentRequest property of the `web.dom.HTMLIFrameElement`
  returns a `js.Boolean` indicating whether the Payment Request
  may be invoked on a cross-origin iframe.

  `var allow = htmlIFrameElement.allowPaymentRequest`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/allowPaymentRequest`"
  [this]
  (-> this (.-allowPaymentRequest)))

(defn set-allow-payment-request!
  "Property.

  The allowPaymentRequest property of the `web.dom.HTMLIFrameElement`
  returns a `js.Boolean` indicating whether the Payment Request
  may be invoked on a cross-origin iframe.

  `var allow = htmlIFrameElement.allowPaymentRequest`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/allowPaymentRequest`"
  [this val]
  (aset this "allowPaymentRequest" val))

(defn content-document
  "Property.

  If the iframe and the iframe's parent document are Same Origin,
  a Document (that is, the active document in the inline frame's
  browsing context), else returns null.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentDocument`"
  [this]
  (-> this (.-contentDocument)))

(defn set-content-document!
  "Property.

  If the iframe and the iframe's parent document are Same Origin,
  a Document (that is, the active document in the inline frame's
  browsing context), else returns null.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentDocument`"
  [this val]
  (aset this "contentDocument" val))

(defn content-window
  "Property.

  The contentWindow property returns the Window object of an <iframe>
  You can use this Window object to access the iframe's document
  its internal DOM. This attribute is read-only, but its properties
  be manipulated like the global Window object.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/contentWindow`"
  [this]
  (-> this (.-contentWindow)))

(defn csp
  "Property.

  The csp property of the `web.dom.HTMLIFrameElement` interface
  the Content Security Policy that an embedded document must agree
  enforce upon itself.

  `var csp = HTMLIFrameElement.csp
  HTMLIFrameElement.csp = csp`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/csp`"
  [this]
  (-> this (.-csp)))

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

(defn frame-border
  "Property.

  Is a DOMString that indicates whether to create borders between"
  [this]
  (-> this (.-frameBorder)))

(defn set-frame-border!
  "Property.

  Is a DOMString that indicates whether to create borders between"
  [this val]
  (aset this "frameBorder" val))

(defn height
  "Property.

  Is a DOMString that reflects the height HTML attribute, indicating
  height of the frame."
  [this]
  (-> this (.-height)))

(defn set-height!
  "Property.

  Is a DOMString that reflects the height HTML attribute, indicating
  height of the frame."
  [this val]
  (aset this "height" val))

(defn long-desc
  "Property.

  Is a DOMString that contains the URI of a long description of
  frame."
  [this]
  (-> this (.-longDesc)))

(defn set-long-desc!
  "Property.

  Is a DOMString that contains the URI of a long description of
  frame."
  [this val]
  (aset this "longDesc" val))

(defn margin-height
  "Property.

  Is a DOMString being the height of the frame margin."
  [this]
  (-> this (.-marginHeight)))

(defn set-margin-height!
  "Property.

  Is a DOMString being the height of the frame margin."
  [this val]
  (aset this "marginHeight" val))

(defn margin-width
  "Property.

  Is a DOMString being the width of the frame margin."
  [this]
  (-> this (.-marginWidth)))

(defn set-margin-width!
  "Property.

  Is a DOMString being the width of the frame margin."
  [this val]
  (aset this "marginWidth" val))

(defn name
  "Property.

  Is a DOMString that reflects the name HTML attribute, containing
  name by which to refer to the frame."
  [this]
  (-> this (.-name)))

(defn set-name!
  "Property.

  Is a DOMString that reflects the name HTML attribute, containing
  name by which to refer to the frame."
  [this val]
  (aset this "name" val))

(defn feature-policy
  "Property.

  The featurePolicy read-only property of the `web.dom.HTMLIFrameElement`
  returns the `web.other.FeaturePolicy` interface which provides
  simple API for introspecting the feature policies applied to
  specific frame.

  `var policy = HTMLIFrameElement.featurePolicy`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/featurePolicy`"
  [this]
  (-> this (.-featurePolicy)))

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

(defn referrer-policy
  "Property.

  The HTMLIFrameElement.referrerPolicy property reflects the HTML
  attribute of the `<iframe>` element defining which referrer is
  when fetching the resource.

  `refStr = iframeElt.referrerPolicy;
  iframeElt.referrerPolicy = refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/referrerPolicy`"
  [this]
  (-> this (.-referrerPolicy)))

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

(defn sandbox
  "Property.

  Is a DOMSettableTokenList that reflects the sandbox HTML attribute,
  extra restrictions on the behavior of the nested content."
  [this]
  (-> this (.-sandbox)))

(defn set-sandbox!
  "Property.

  Is a DOMSettableTokenList that reflects the sandbox HTML attribute,
  extra restrictions on the behavior of the nested content."
  [this val]
  (aset this "sandbox" val))

(defn scrolling
  "Property.

  Is a DOMString that indicates whether the browser should provide
  for the frame."
  [this]
  (-> this (.-scrolling)))

(defn set-scrolling!
  "Property.

  Is a DOMString that indicates whether the browser should provide
  for the frame."
  [this val]
  (aset this "scrolling" val))

(defn src
  "Property.

  The HTMLIFrameElement.src property reflects the HTML referrerpolicy
  of the `<iframe>` element defining which referrer is sent when
  the resource.

  `refStr = iframeElt.src;
  iframeElt.src= refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/src`"
  [this]
  (-> this (.-src)))

(defn set-src!
  "Property.

  The HTMLIFrameElement.src property reflects the HTML referrerpolicy
  of the `<iframe>` element defining which referrer is sent when
  the resource.

  `refStr = iframeElt.src;
  iframeElt.src= refStr;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/src`"
  [this val]
  (aset this "src" val))

(defn srcdoc
  "Property.

  The srcdoc property of the `web.dom.HTMLIFrameElement` specifies
  content of the page.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/srcdoc`"
  [this]
  (-> this (.-srcdoc)))

(defn set-srcdoc!
  "Property.

  The srcdoc property of the `web.dom.HTMLIFrameElement` specifies
  content of the page.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLIFrameElement/srcdoc`"
  [this val]
  (aset this "srcdoc" val))

(defn width
  "Property.

  Is a DOMString that reflects the width HTML attribute, indicating
  width of the frame."
  [this]
  (-> this (.-width)))

(defn set-width!
  "Property.

  Is a DOMString that reflects the width HTML attribute, indicating
  width of the frame."
  [this val]
  (aset this "width" val))

(defn policy
  "Property.

  HTMLIFrameElement.policy was renamed into HTMLIFrameElement.featurePolicy
  being enabled by default in any browsers."
  [this]
  (-> this (.-policy)))

(defn set-policy!
  "Property.

  HTMLIFrameElement.policy was renamed into HTMLIFrameElement.featurePolicy
  being enabled by default in any browsers."
  [this val]
  (aset this "policy" val))

