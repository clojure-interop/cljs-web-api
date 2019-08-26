(ns web.security.SecurityPolicyViolationEvent
  "The SecurityPolicyViolationEvent interface inherits from `web.event.Event`,
  represents the event object of an event sent on a document or
  when its content security policy is violated."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The SecurityPolicyViolationEvent constructor creates a new SecurityPolicyViolationEvent object instance.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/SecurityPolicyViolationEvent`"
  js/SecurityPolicyViolationEvent)

(defn blocked-uri
  "Property.

  The blockedURI read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.USVString` representing the URI of the resource that
  blocked because it violates a policy.

  `let blockedURI = violationEventInstance.blockedURI;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/blockedURI`"
  [this]
  (-> this (.-blockedURI)))

(defn set-blocked-uri!
  "Property.

  The blockedURI read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.USVString` representing the URI of the resource that
  blocked because it violates a policy.

  `let blockedURI = violationEventInstance.blockedURI;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/blockedURI`"
  [this val]
  (aset this "blockedURI" val))

(defn column-number
  "Property.

  The columnNumber read-only property of the `web.security.SecurityPolicyViolationEvent`
  is the column number in the document or worker at which the violation

  `let colNum = violationEventInstance.columnNumber;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/columnNumber`"
  [this]
  (-> this (.-columnNumber)))

(defn set-column-number!
  "Property.

  The columnNumber read-only property of the `web.security.SecurityPolicyViolationEvent`
  is the column number in the document or worker at which the violation

  `let colNum = violationEventInstance.columnNumber;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/columnNumber`"
  [this val]
  (aset this "columnNumber" val))

(defn disposition
  "Property.

  The disposition read-only property of the `web.security.SecurityPolicyViolationEvent`
  indicates how the violated policy is configured to be treated
  the user agent.

  `let disposition = violationEventInstance.disposition;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/disposition`"
  [this]
  (-> this (.-disposition)))

(defn set-disposition!
  "Property.

  The disposition read-only property of the `web.security.SecurityPolicyViolationEvent`
  indicates how the violated policy is configured to be treated
  the user agent.

  `let disposition = violationEventInstance.disposition;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/disposition`"
  [this val]
  (aset this "disposition" val))

(defn document-uri
  "Property.

  The documentURI read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.USVString` representing the URI of the document or
  in which the violation was found.

  `let documentURI = violationEventInstance.documentURI;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/documentURI`"
  [this]
  (-> this (.-documentURI)))

(defn set-document-uri!
  "Property.

  The documentURI read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.USVString` representing the URI of the document or
  in which the violation was found.

  `let documentURI = violationEventInstance.documentURI;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/documentURI`"
  [this val]
  (aset this "documentURI" val))

(defn effective-directive
  "Property.

  The effectiveDirective read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.dom.DOMString` representing the directive whose enforcement
  the violation.

  `let effDir = violationEventInstance.effectiveDirective;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective`"
  [this]
  (-> this (.-effectiveDirective)))

(defn set-effective-directive!
  "Property.

  The effectiveDirective read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.dom.DOMString` representing the directive whose enforcement
  the violation.

  `let effDir = violationEventInstance.effectiveDirective;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective`"
  [this val]
  (aset this "effectiveDirective" val))

(defn line-number
  "Property.

  The lineNumber read-only property of the `web.security.SecurityPolicyViolationEvent`
  is the line number in the document or worker at which the violation

  `let lineNumber = violationEventInstance.lineNumber;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/lineNumber`"
  [this]
  (-> this (.-lineNumber)))

(defn set-line-number!
  "Property.

  The lineNumber read-only property of the `web.security.SecurityPolicyViolationEvent`
  is the line number in the document or worker at which the violation

  `let lineNumber = violationEventInstance.lineNumber;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/lineNumber`"
  [this val]
  (aset this "lineNumber" val))

(defn original-policy
  "Property.

  The originalPolicy read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.dom.DOMString` containing the policy whose enforcement
  the violation.

  `let origPolicy = violationEventInstance.originalPolicy;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy`"
  [this]
  (-> this (.-originalPolicy)))

(defn set-original-policy!
  "Property.

  The originalPolicy read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.dom.DOMString` containing the policy whose enforcement
  the violation.

  `let origPolicy = violationEventInstance.originalPolicy;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy`"
  [this val]
  (aset this "originalPolicy" val))

(defn referrer
  "Property.

  The referrer read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.USVString` representing the referrer of the resources
  policy was violated. This will be a URL or null.

  `let referrer = violationEventInstance.referrer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/referrer`"
  [this]
  (-> this (.-referrer)))

(defn set-referrer!
  "Property.

  The referrer read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.USVString` representing the referrer of the resources
  policy was violated. This will be a URL or null.

  `let referrer = violationEventInstance.referrer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/referrer`"
  [this val]
  (aset this "referrer" val))

(defn sample
  "Property.

  The sample read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.dom.DOMString` representing a sample of the resource
  caused the violation.

  `let sample = violationEventInstance.sample;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/sample`"
  [this]
  (-> this (.-sample)))

(defn set-sample!
  "Property.

  The sample read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.dom.DOMString` representing a sample of the resource
  caused the violation.

  `let sample = violationEventInstance.sample;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/sample`"
  [this val]
  (aset this "sample" val))

(defn source-file
  "Property.

  The sourceFile read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.USVString` representing the URI of the document or
  in which the violation was found.

  `let source = violationEventInstance.sourceFile;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/sourceFile`"
  [this]
  (-> this (.-sourceFile)))

(defn set-source-file!
  "Property.

  The sourceFile read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.USVString` representing the URI of the document or
  in which the violation was found.

  `let source = violationEventInstance.sourceFile;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/sourceFile`"
  [this val]
  (aset this "sourceFile" val))

(defn status-code
  "Property.

  The statusCode read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a number representing the HTTP status code of the document
  worker in which the violation occurred.

  `let status = violationEventInstance.statusCode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/statusCode`"
  [this]
  (-> this (.-statusCode)))

(defn set-status-code!
  "Property.

  The statusCode read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a number representing the HTTP status code of the document
  worker in which the violation occurred.

  `let status = violationEventInstance.statusCode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/statusCode`"
  [this val]
  (aset this "statusCode" val))

(defn violated-directive
  "Property.

  The violatedDirective read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.dom.DOMString` representing the directive whose enforcement
  the violation.

  `let violatedDir = violationEventInstance.violatedDirective;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective`"
  [this]
  (-> this (.-violatedDirective)))

(defn set-violated-directive!
  "Property.

  The violatedDirective read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.dom.DOMString` representing the directive whose enforcement
  the violation.

  `let violatedDir = violationEventInstance.violatedDirective;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective`"
  [this val]
  (aset this "violatedDirective" val))

