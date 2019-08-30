(ns web.security.SecurityPolicyViolationEvent
  "The SecurityPolicyViolationEvent interface inherits from `web.event.Event`,
  represents the event object of an event sent on a document or
  when its content security policy is violated."
  (:refer-clojure :exclude []))

(defn blocked-uri
  "Property.

  [Read Only]
  [Experimental]

  The blockedURI read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.USVString` representing the URI of the resource that
  blocked because it violates a policy.

  `let blockedURI = violationEventInstance.blockedURI;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/blockedURI`"
  [this]
  (-> this (.-blockedURI)))

(defn column-number
  "Property.

  [Read Only]
  [Experimental]

  The columnNumber read-only property of the `web.security.SecurityPolicyViolationEvent`
  is the column number in the document or worker at which the violation

  `let colNum = violationEventInstance.columnNumber;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/columnNumber`"
  [this]
  (-> this (.-columnNumber)))

(defn disposition
  "Property.

  [Read Only]
  [Experimental]

  The disposition read-only property of the `web.security.SecurityPolicyViolationEvent`
  indicates how the violated policy is configured to be treated
  the user agent.

  `let disposition = violationEventInstance.disposition;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/disposition`"
  [this]
  (-> this (.-disposition)))

(defn document-uri
  "Property.

  [Read Only]
  [Experimental]

  The documentURI read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.USVString` representing the URI of the document or
  in which the violation was found.

  `let documentURI = violationEventInstance.documentURI;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/documentURI`"
  [this]
  (-> this (.-documentURI)))

(defn effective-directive
  "Property.

  [Read Only]
  [Experimental]

  The effectiveDirective read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.dom.DOMString` representing the directive whose enforcement
  the violation.

  `let effDir = violationEventInstance.effectiveDirective;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective`"
  [this]
  (-> this (.-effectiveDirective)))

(defn line-number
  "Property.

  [Read Only]
  [Experimental]

  The lineNumber read-only property of the `web.security.SecurityPolicyViolationEvent`
  is the line number in the document or worker at which the violation

  `let lineNumber = violationEventInstance.lineNumber;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/lineNumber`"
  [this]
  (-> this (.-lineNumber)))

(defn original-policy
  "Property.

  [Read Only]
  [Experimental]

  The originalPolicy read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.dom.DOMString` containing the policy whose enforcement
  the violation.

  `let origPolicy = violationEventInstance.originalPolicy;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy`"
  [this]
  (-> this (.-originalPolicy)))

(defn referrer
  "Property.

  [Read Only]
  [Experimental]

  The referrer read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.USVString` representing the referrer of the resources
  policy was violated. This will be a URL or null.

  `let referrer = violationEventInstance.referrer;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/referrer`"
  [this]
  (-> this (.-referrer)))

(defn sample
  "Property.

  [Read Only]
  [Experimental]

  The sample read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.dom.DOMString` representing a sample of the resource
  caused the violation.

  `let sample = violationEventInstance.sample;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/sample`"
  [this]
  (-> this (.-sample)))

(defn source-file
  "Property.

  [Read Only]
  [Experimental]

  The sourceFile read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.USVString` representing the URI of the document or
  in which the violation was found.

  `let source = violationEventInstance.sourceFile;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/sourceFile`"
  [this]
  (-> this (.-sourceFile)))

(defn status-code
  "Property.

  [Read Only]
  [Experimental]

  The statusCode read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a number representing the HTTP status code of the document
  worker in which the violation occurred.

  `let status = violationEventInstance.statusCode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/statusCode`"
  [this]
  (-> this (.-statusCode)))

(defn violated-directive
  "Property.

  [Read Only]
  [Experimental]

  The violatedDirective read-only property of the `web.security.SecurityPolicyViolationEvent`
  is a `web.dom.DOMString` representing the directive whose enforcement
  the violation.

  `let violatedDir = violationEventInstance.violatedDirective;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective`"
  [this]
  (-> this (.-violatedDirective)))

