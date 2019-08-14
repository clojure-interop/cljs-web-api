// Compiled by ClojureScript 1.9.946 {}
goog.provide('html.HTMLFormElement');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The HTMLFormElement.reportValidity() method returns true if the
 *   child controls satisfy their validation constraints. When false
 *   returned, cancelable invalid events are fired for each invalid
 *   and validation problems are reported to the user.
 * 
 *   `HTMLFormElement.reportValidity()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reportValidity`
 */
html.HTMLFormElement.report_validity = (function html$HTMLFormElement$report_validity(this$){
return this$.reportValidity();
});
/**
 * Method.
 * 
 *   The HTMLFormElement.reset() method restores a form element's
 *   values. This method does the same thing as clicking the form's
 *   button.
 * 
 *   `HTMLFormElement.reset()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/reset`
 */
html.HTMLFormElement.reset = (function html$HTMLFormElement$reset(this$){
return this$.reset();
});
/**
 * Method.
 * 
 *   The HTMLFormElement.submit() method submits a given `web.<form>`.
 * 
 *   `HTMLFormElement.submit()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit`
 */
html.HTMLFormElement.submit = (function html$HTMLFormElement$submit(this$){
return this$.submit();
});
/**
 * Property.
 * 
 *   The HTMLFormElement.acceptCharset property represents a list
 *   the supported character encodings for the given FORM element.
 *   list can be comma- or space-separated.
 * 
 *   `var string = form.acceptCharset;
 *   form.acceptCharset = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/acceptCharset`
 */
html.HTMLFormElement.accept_charset = (function html$HTMLFormElement$accept_charset(this$){
return this$.acceptCharset();
});
/**
 * Property.
 * 
 *   The HTMLFormElement.acceptCharset property represents a list
 *   the supported character encodings for the given FORM element.
 *   list can be comma- or space-separated.
 * 
 *   `var string = form.acceptCharset;
 *   form.acceptCharset = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/acceptCharset`
 */
html.HTMLFormElement.set_accept_charset_BANG_ = (function html$HTMLFormElement$set_accept_charset_BANG_(this$,val){
return (this$["acceptCharset"] = val);
});
/**
 * Property.
 * 
 *   The HTMLFormElement.action property represents the action of
 *   `web.<form>` element.
 * 
 *   `var string = form.action;
 *   form.action = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/action`
 */
html.HTMLFormElement.action = (function html$HTMLFormElement$action(this$){
return this$.action();
});
/**
 * Property.
 * 
 *   The HTMLFormElement.action property represents the action of
 *   `web.<form>` element.
 * 
 *   `var string = form.action;
 *   form.action = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/action`
 */
html.HTMLFormElement.set_action_BANG_ = (function html$HTMLFormElement$set_action_BANG_(this$,val){
return (this$["action"] = val);
});
/**
 * Property.
 * 
 *   The `html.HTMLFormElement` property elements returns an `html.HTMLFormControlsCollection`
 *   all the form controls contained in the `web.<form>` element.
 * 
 *   `nodeList = HTMLFormElement.elements`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements`
 */
html.HTMLFormElement.elements = (function html$HTMLFormElement$elements(this$){
return this$.elements();
});
/**
 * Property.
 * 
 *   The `html.HTMLFormElement` property elements returns an `html.HTMLFormControlsCollection`
 *   all the form controls contained in the `web.<form>` element.
 * 
 *   `nodeList = HTMLFormElement.elements`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements`
 */
html.HTMLFormElement.set_elements_BANG_ = (function html$HTMLFormElement$set_elements_BANG_(this$,val){
return (this$["elements"] = val);
});
/**
 * Property.
 * 
 *   The HTMLFormElement.encoding property is an alternative name
 *   the `web.enctype` element on the DOM `html.HTMLFormElement` object.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/encoding`
 */
html.HTMLFormElement.encoding = (function html$HTMLFormElement$encoding(this$){
return this$.encoding();
});
/**
 * Property.
 * 
 *   The HTMLFormElement.encoding property is an alternative name
 *   the `web.enctype` element on the DOM `html.HTMLFormElement` object.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/encoding`
 */
html.HTMLFormElement.set_encoding_BANG_ = (function html$HTMLFormElement$set_encoding_BANG_(this$,val){
return (this$["encoding"] = val);
});
/**
 * Property.
 * 
 *   The HTMLFormElement.enctype property is the MIME type of content
 *   is used to submit the form to the server. Possible values are:
 * 
 *   `var string = form.enctype;
 *   form.enctype = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/enctype`
 */
html.HTMLFormElement.enctype = (function html$HTMLFormElement$enctype(this$){
return this$.enctype();
});
/**
 * Property.
 * 
 *   The HTMLFormElement.enctype property is the MIME type of content
 *   is used to submit the form to the server. Possible values are:
 * 
 *   `var string = form.enctype;
 *   form.enctype = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/enctype`
 */
html.HTMLFormElement.set_enctype_BANG_ = (function html$HTMLFormElement$set_enctype_BANG_(this$,val){
return (this$["enctype"] = val);
});
/**
 * Property.
 * 
 *   The HTMLFormElement.length read-only property returns the number
 *   controls in the `web.<form>` element.
 * 
 *   `numControls = form.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/length`
 */
html.HTMLFormElement.length = (function html$HTMLFormElement$length(this$){
return this$.length();
});
/**
 * Property.
 * 
 *   The HTMLFormElement.method property represents the HTTP method
 *   to submit the `web.<form>`.
 * 
 *   `var string = form.method;
 *   form.method = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/method`
 */
html.HTMLFormElement.method = (function html$HTMLFormElement$method(this$){
return this$.method();
});
/**
 * Property.
 * 
 *   The HTMLFormElement.method property represents the HTTP method
 *   to submit the `web.<form>`.
 * 
 *   `var string = form.method;
 *   form.method = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/method`
 */
html.HTMLFormElement.set_method_BANG_ = (function html$HTMLFormElement$set_method_BANG_(this$,val){
return (this$["method"] = val);
});
/**
 * Property.
 * 
 *   The HTMLFormElement.name property represents the name of the
 *   `web.<form>` element as a string.
 * 
 *   `var string = form.name;
 *   form.name = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/name`
 */
html.HTMLFormElement.name = (function html$HTMLFormElement$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   The HTMLFormElement.name property represents the name of the
 *   `web.<form>` element as a string.
 * 
 *   `var string = form.name;
 *   form.name = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/name`
 */
html.HTMLFormElement.set_name_BANG_ = (function html$HTMLFormElement$set_name_BANG_(this$,val){
return (this$["name"] = val);
});
/**
 * Property.
 * 
 *   The target property of the `html.HTMLFormElement` interface represents
 *   target of the form's action (i.e., the frame in which to render
 *   output).
 * 
 *   `string = HTMLFormElement.target
 *   HTMLFormElement.target = string`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/target`
 */
html.HTMLFormElement.target = (function html$HTMLFormElement$target(this$){
return this$.target();
});
/**
 * Property.
 * 
 *   The target property of the `html.HTMLFormElement` interface represents
 *   target of the form's action (i.e., the frame in which to render
 *   output).
 * 
 *   `string = HTMLFormElement.target
 *   HTMLFormElement.target = string`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/target`
 */
html.HTMLFormElement.set_target_BANG_ = (function html$HTMLFormElement$set_target_BANG_(this$,val){
return (this$["target"] = val);
});

//# sourceMappingURL=HTMLFormElement.js.map?rel=1565798842424
