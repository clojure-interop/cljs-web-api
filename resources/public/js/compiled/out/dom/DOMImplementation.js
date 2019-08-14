// Compiled by ClojureScript 1.9.946 {}
goog.provide('dom.DOMImplementation');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The DOMImplementation.createDocument() method creates and returns
 *   `xml.XMLDocument`.
 * 
 *   `var doc = document.implementation.createDocument(namespaceURI, qualifiedNameStr, documentType);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocument`
 */
dom.DOMImplementation.create_document = (function dom$DOMImplementation$create_document(this$,namespace_uri,qualified_name_str,document_type){
return this$.createDocument(namespace_uri,qualified_name_str,document_type);
});
/**
 * Method.
 * 
 *   The DOMImplementation.createDocumentType() method returns a `web.DocumentType`
 *   which can either be used with `dom.DOMImplementation.createDocument`
 *   document creation or can be put into the document via methods
 *   `web.Node.insertBefore()` or `web.Node.replaceChild()`.
 * 
 *   `var doctype = document.implementation.createDocumentType(qualifiedNameStr, publicId, systemId);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createDocumentType`
 */
dom.DOMImplementation.create_document_type = (function dom$DOMImplementation$create_document_type(this$,qualified_name_str,public_id,system_id){
return this$.createDocumentType(qualified_name_str,public_id,system_id);
});
/**
 * Method.
 * 
 *   The DOMImplementation.createHTMLDocument() method creates a new
 *   `web.Document`.
 * 
 *   `newDoc = document.implementation.createHTMLDocument(title);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/createHTMLDocument`
 */
dom.DOMImplementation.create_html_document = (function dom$DOMImplementation$create_html_document(this$,title){
return this$.createHTMLDocument(title);
});
/**
 * Method.
 * 
 *   The DOMImplementation.hasFeature() method returns a `web.Boolean`
 *   indicating if a given feature is supported. It is deprecated
 *   modern browsers return true in all cases.
 * 
 *   `flag = document.implementation.hasFeature(feature, version);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/DOMImplementation/hasFeature`
 */
dom.DOMImplementation.has_feature = (function dom$DOMImplementation$has_feature(this$,feature,version){
return this$.hasFeature(feature,version);
});

//# sourceMappingURL=DOMImplementation.js.map?rel=1565798837171
