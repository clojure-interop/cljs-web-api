// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.SecurityPolicyViolationEvent');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The SecurityPolicyViolationEvent constructor creates a new SecurityPolicyViolationEvent object instance.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/SecurityPolicyViolationEvent`
 */
web.SecurityPolicyViolationEvent.constructor$ = SecurityPolicyViolationEvent;
/**
 * Property.
 * 
 *   The blockedURI read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `web.USVString` representing the URI of the resource that
 *   blocked because it violates a policy.
 * 
 *   `let blockedURI = violationEventInstance.blockedURI;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/blockedURI`
 */
web.SecurityPolicyViolationEvent.blocked_uri = (function web$SecurityPolicyViolationEvent$blocked_uri(this$){
return this$.blockedURI();
});
/**
 * Property.
 * 
 *   The blockedURI read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `web.USVString` representing the URI of the resource that
 *   blocked because it violates a policy.
 * 
 *   `let blockedURI = violationEventInstance.blockedURI;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/blockedURI`
 */
web.SecurityPolicyViolationEvent.set_blocked_uri_BANG_ = (function web$SecurityPolicyViolationEvent$set_blocked_uri_BANG_(this$,val){
return (this$["blockedURI"] = val);
});
/**
 * Property.
 * 
 *   The columnNumber read-only property of the `web.SecurityPolicyViolationEvent`
 *   is the column number in the document or worker at which the violation
 * 
 *   `let colNum = violationEventInstance.columnNumber;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/columnNumber`
 */
web.SecurityPolicyViolationEvent.column_number = (function web$SecurityPolicyViolationEvent$column_number(this$){
return this$.columnNumber();
});
/**
 * Property.
 * 
 *   The columnNumber read-only property of the `web.SecurityPolicyViolationEvent`
 *   is the column number in the document or worker at which the violation
 * 
 *   `let colNum = violationEventInstance.columnNumber;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/columnNumber`
 */
web.SecurityPolicyViolationEvent.set_column_number_BANG_ = (function web$SecurityPolicyViolationEvent$set_column_number_BANG_(this$,val){
return (this$["columnNumber"] = val);
});
/**
 * Property.
 * 
 *   The disposition read-only property of the `web.SecurityPolicyViolationEvent`
 *   indicates how the violated policy is configured to be treated
 *   the user agent.
 * 
 *   `let disposition = violationEventInstance.disposition;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/disposition`
 */
web.SecurityPolicyViolationEvent.disposition = (function web$SecurityPolicyViolationEvent$disposition(this$){
return this$.disposition();
});
/**
 * Property.
 * 
 *   The disposition read-only property of the `web.SecurityPolicyViolationEvent`
 *   indicates how the violated policy is configured to be treated
 *   the user agent.
 * 
 *   `let disposition = violationEventInstance.disposition;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/disposition`
 */
web.SecurityPolicyViolationEvent.set_disposition_BANG_ = (function web$SecurityPolicyViolationEvent$set_disposition_BANG_(this$,val){
return (this$["disposition"] = val);
});
/**
 * Property.
 * 
 *   The documentURI read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `web.USVString` representing the URI of the document or
 *   in which the violation was found.
 * 
 *   `let documentURI = violationEventInstance.documentURI;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/documentURI`
 */
web.SecurityPolicyViolationEvent.document_uri = (function web$SecurityPolicyViolationEvent$document_uri(this$){
return this$.documentURI();
});
/**
 * Property.
 * 
 *   The documentURI read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `web.USVString` representing the URI of the document or
 *   in which the violation was found.
 * 
 *   `let documentURI = violationEventInstance.documentURI;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/documentURI`
 */
web.SecurityPolicyViolationEvent.set_document_uri_BANG_ = (function web$SecurityPolicyViolationEvent$set_document_uri_BANG_(this$,val){
return (this$["documentURI"] = val);
});
/**
 * Property.
 * 
 *   The effectiveDirective read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `dom.DOMString` representing the directive whose enforcement
 *   the violation.
 * 
 *   `let effDir = violationEventInstance.effectiveDirective;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective`
 */
web.SecurityPolicyViolationEvent.effective_directive = (function web$SecurityPolicyViolationEvent$effective_directive(this$){
return this$.effectiveDirective();
});
/**
 * Property.
 * 
 *   The effectiveDirective read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `dom.DOMString` representing the directive whose enforcement
 *   the violation.
 * 
 *   `let effDir = violationEventInstance.effectiveDirective;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/effectiveDirective`
 */
web.SecurityPolicyViolationEvent.set_effective_directive_BANG_ = (function web$SecurityPolicyViolationEvent$set_effective_directive_BANG_(this$,val){
return (this$["effectiveDirective"] = val);
});
/**
 * Property.
 * 
 *   The lineNumber read-only property of the `web.SecurityPolicyViolationEvent`
 *   is the line number in the document or worker at which the violation
 * 
 *   `let lineNumber = violationEventInstance.lineNumber;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/lineNumber`
 */
web.SecurityPolicyViolationEvent.line_number = (function web$SecurityPolicyViolationEvent$line_number(this$){
return this$.lineNumber();
});
/**
 * Property.
 * 
 *   The lineNumber read-only property of the `web.SecurityPolicyViolationEvent`
 *   is the line number in the document or worker at which the violation
 * 
 *   `let lineNumber = violationEventInstance.lineNumber;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/lineNumber`
 */
web.SecurityPolicyViolationEvent.set_line_number_BANG_ = (function web$SecurityPolicyViolationEvent$set_line_number_BANG_(this$,val){
return (this$["lineNumber"] = val);
});
/**
 * Property.
 * 
 *   The originalPolicy read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `dom.DOMString` containing the policy whose enforcement
 *   the violation.
 * 
 *   `let origPolicy = violationEventInstance.originalPolicy;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy`
 */
web.SecurityPolicyViolationEvent.original_policy = (function web$SecurityPolicyViolationEvent$original_policy(this$){
return this$.originalPolicy();
});
/**
 * Property.
 * 
 *   The originalPolicy read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `dom.DOMString` containing the policy whose enforcement
 *   the violation.
 * 
 *   `let origPolicy = violationEventInstance.originalPolicy;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/originalPolicy`
 */
web.SecurityPolicyViolationEvent.set_original_policy_BANG_ = (function web$SecurityPolicyViolationEvent$set_original_policy_BANG_(this$,val){
return (this$["originalPolicy"] = val);
});
/**
 * Property.
 * 
 *   The referrer read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `web.USVString` representing the referrer of the resources
 *   policy was violated. This will be a URL or null.
 * 
 *   `let referrer = violationEventInstance.referrer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/referrer`
 */
web.SecurityPolicyViolationEvent.referrer = (function web$SecurityPolicyViolationEvent$referrer(this$){
return this$.referrer();
});
/**
 * Property.
 * 
 *   The referrer read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `web.USVString` representing the referrer of the resources
 *   policy was violated. This will be a URL or null.
 * 
 *   `let referrer = violationEventInstance.referrer;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/referrer`
 */
web.SecurityPolicyViolationEvent.set_referrer_BANG_ = (function web$SecurityPolicyViolationEvent$set_referrer_BANG_(this$,val){
return (this$["referrer"] = val);
});
/**
 * Property.
 * 
 *   The sample read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `dom.DOMString` representing a sample of the resource that
 *   the violation.
 * 
 *   `let sample = violationEventInstance.sample;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/sample`
 */
web.SecurityPolicyViolationEvent.sample = (function web$SecurityPolicyViolationEvent$sample(this$){
return this$.sample();
});
/**
 * Property.
 * 
 *   The sample read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `dom.DOMString` representing a sample of the resource that
 *   the violation.
 * 
 *   `let sample = violationEventInstance.sample;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/sample`
 */
web.SecurityPolicyViolationEvent.set_sample_BANG_ = (function web$SecurityPolicyViolationEvent$set_sample_BANG_(this$,val){
return (this$["sample"] = val);
});
/**
 * Property.
 * 
 *   The sourceFile read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `web.USVString` representing the URI of the document or
 *   in which the violation was found.
 * 
 *   `let source = violationEventInstance.sourceFile;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/sourceFile`
 */
web.SecurityPolicyViolationEvent.source_file = (function web$SecurityPolicyViolationEvent$source_file(this$){
return this$.sourceFile();
});
/**
 * Property.
 * 
 *   The sourceFile read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `web.USVString` representing the URI of the document or
 *   in which the violation was found.
 * 
 *   `let source = violationEventInstance.sourceFile;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/sourceFile`
 */
web.SecurityPolicyViolationEvent.set_source_file_BANG_ = (function web$SecurityPolicyViolationEvent$set_source_file_BANG_(this$,val){
return (this$["sourceFile"] = val);
});
/**
 * Property.
 * 
 *   The statusCode read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a number representing the HTTP status code of the document
 *   worker in which the violation occurred.
 * 
 *   `let status = violationEventInstance.statusCode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/statusCode`
 */
web.SecurityPolicyViolationEvent.status_code = (function web$SecurityPolicyViolationEvent$status_code(this$){
return this$.statusCode();
});
/**
 * Property.
 * 
 *   The statusCode read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a number representing the HTTP status code of the document
 *   worker in which the violation occurred.
 * 
 *   `let status = violationEventInstance.statusCode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/statusCode`
 */
web.SecurityPolicyViolationEvent.set_status_code_BANG_ = (function web$SecurityPolicyViolationEvent$set_status_code_BANG_(this$,val){
return (this$["statusCode"] = val);
});
/**
 * Property.
 * 
 *   The violatedDirective read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `dom.DOMString` representing the directive whose enforcement
 *   the violation.
 * 
 *   `let violatedDir = violationEventInstance.violatedDirective;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective`
 */
web.SecurityPolicyViolationEvent.violated_directive = (function web$SecurityPolicyViolationEvent$violated_directive(this$){
return this$.violatedDirective();
});
/**
 * Property.
 * 
 *   The violatedDirective read-only property of the `web.SecurityPolicyViolationEvent`
 *   is a `dom.DOMString` representing the directive whose enforcement
 *   the violation.
 * 
 *   `let violatedDir = violationEventInstance.violatedDirective;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SecurityPolicyViolationEvent/violatedDirective`
 */
web.SecurityPolicyViolationEvent.set_violated_directive_BANG_ = (function web$SecurityPolicyViolationEvent$set_violated_directive_BANG_(this$,val){
return (this$["violatedDirective"] = val);
});

//# sourceMappingURL=SecurityPolicyViolationEvent.js.map?rel=1565798861156
