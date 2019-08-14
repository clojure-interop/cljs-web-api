// Compiled by ClojureScript 1.9.946 {}
goog.provide('html.HTMLElement');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The HTMLElement.blur() method removes keyboard focus from the
 *   element.
 * 
 *   `element.blur();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur`
 */
html.HTMLElement.blur = (function html$HTMLElement$blur(this$){
return this$.blur();
});
/**
 * Method.
 * 
 *   The HTMLElement.click() method simulates a mouse click on an
 * 
 *   `element.click()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/click`
 */
html.HTMLElement.click = (function html$HTMLElement$click(this$){
return this$.click();
});
/**
 * Method.
 * 
 *   The HTMLElement.focus() method sets focus on the specified element,
 *   it can be focused. The focused element is the element which will
 *   keyboard and similar events by default.
 * 
 *   `element.focus(options); // Object parameter`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus`
 */
html.HTMLElement.focus = (function html$HTMLElement$focus(this$,options){
return this$.focus(options);
});
/**
 * Method.
 * 
 *   The forceSpellCheck() method of the `html.HTMLElement` interface
 *   a spelling and grammar check on HTML elements, even if the user
 *   not focused on the elements. This method overrides user agent
 *   The specific user interface of the check, for example whether
 *   underlining appears, is determined by the user agent.
 * 
 *   `element.forceSpellCheck()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/forceSpellCheck`
 */
html.HTMLElement.force_spell_check = (function html$HTMLElement$force_spell_check(this$){
return this$.forceSpellCheck();
});
/**
 * Property.
 * 
 *   The contenteditable property of the `html.HTMLElement` interface
 *   whether or not the element is editable.
 * 
 *   `editable = element.contentEditable
 *   element.contentEditable = 'true'`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable`
 */
html.HTMLElement.content_editable = (function html$HTMLElement$content_editable(this$){
return this$.contentEditable();
});
/**
 * Property.
 * 
 *   The contenteditable property of the `html.HTMLElement` interface
 *   whether or not the element is editable.
 * 
 *   `editable = element.contentEditable
 *   element.contentEditable = 'true'`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contentEditable`
 */
html.HTMLElement.set_content_editable_BANG_ = (function html$HTMLElement$set_content_editable_BANG_(this$,val){
return (this$["contentEditable"] = val);
});
/**
 * Property.
 * 
 * 
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contextMenu`
 */
html.HTMLElement.context_menu = (function html$HTMLElement$context_menu(this$){
return this$.contextMenu();
});
/**
 * Property.
 * 
 * 
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/contextMenu`
 */
html.HTMLElement.set_context_menu_BANG_ = (function html$HTMLElement$set_context_menu_BANG_(this$,val){
return (this$["contextMenu"] = val);
});
/**
 * Property.
 * 
 *   The dataset property on the `html.HTMLElement` interface provides
 *   access to all the custom data attributes (data-*) set on the
 * 
 *   `string = element.dataset.camelCasedName;
 *   element.dataset.camelCasedName = string;
 * 
 *   string = element.dataset[camelCasedName];
 *   element.dataset[camelCasedName] = string;
 * 
 *   Custom data attributes can also be set directly on HTML elements, but attribute names must use the data- syntax above.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset`
 */
html.HTMLElement.dataset = (function html$HTMLElement$dataset(this$){
return this$.dataset();
});
/**
 * Property.
 * 
 *   The dataset property on the `html.HTMLElement` interface provides
 *   access to all the custom data attributes (data-*) set on the
 * 
 *   `string = element.dataset.camelCasedName;
 *   element.dataset.camelCasedName = string;
 * 
 *   string = element.dataset[camelCasedName];
 *   element.dataset[camelCasedName] = string;
 * 
 *   Custom data attributes can also be set directly on HTML elements, but attribute names must use the data- syntax above.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset`
 */
html.HTMLElement.set_dataset_BANG_ = (function html$HTMLElement$set_dataset_BANG_(this$,val){
return (this$["dataset"] = val);
});
/**
 * Property.
 * 
 *   The HTMLElement.dir property gets or sets the text writing directionality
 *   the content of the current element.
 * 
 *   `var currentWritingDirection = elementNodeReference.dir;
 *   elementNodeReference.dir = newWritingDirection;
 * 
 * 
 *   currentWritingDirection is a string variable representing the text writing direction of the current element.
 *   newWritingDirection is a string variable representing the text writing direction value.
 * 
 * 
 *   Possible values for dir are ltr, for left-to-right, rtl, for right-to-left, and auto for specifying that the direction of the element must be determined based on the contents of the element.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dir`
 */
html.HTMLElement.dir = (function html$HTMLElement$dir(this$){
return this$.dir();
});
/**
 * Property.
 * 
 *   The HTMLElement.dir property gets or sets the text writing directionality
 *   the content of the current element.
 * 
 *   `var currentWritingDirection = elementNodeReference.dir;
 *   elementNodeReference.dir = newWritingDirection;
 * 
 * 
 *   currentWritingDirection is a string variable representing the text writing direction of the current element.
 *   newWritingDirection is a string variable representing the text writing direction value.
 * 
 * 
 *   Possible values for dir are ltr, for left-to-right, rtl, for right-to-left, and auto for specifying that the direction of the element must be determined based on the contents of the element.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dir`
 */
html.HTMLElement.set_dir_BANG_ = (function html$HTMLElement$set_dir_BANG_(this$,val){
return (this$["dir"] = val);
});
/**
 * Property.
 * 
 *   The `html.HTMLElement` property hidden is a `web.Boolean` which
 *   true if the element is hidden; otherwise the value is false.
 *   is quite different from using the CSS property `web.display`
 *   control the visibility of an element.
 * 
 *   `isHidden = HTMLElement.hidden;
 * 
 * 
 *   HTMLElement.hidden = true | false;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden`
 */
html.HTMLElement.hidden = (function html$HTMLElement$hidden(this$){
return this$.hidden();
});
/**
 * Property.
 * 
 *   The `html.HTMLElement` property hidden is a `web.Boolean` which
 *   true if the element is hidden; otherwise the value is false.
 *   is quite different from using the CSS property `web.display`
 *   control the visibility of an element.
 * 
 *   `isHidden = HTMLElement.hidden;
 * 
 * 
 *   HTMLElement.hidden = true | false;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/hidden`
 */
html.HTMLElement.set_hidden_BANG_ = (function html$HTMLElement$set_hidden_BANG_(this$,val){
return (this$["hidden"] = val);
});
/**
 * Property.
 * 
 *   The innerText property of the `html.HTMLElement` interface represents
 *   \"rendered\" text content of a node and its descendants.
 * 
 *   `var renderedText = HTMLElement.innerText;
 *   HTMLElement.innerText = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText`
 */
html.HTMLElement.inner_text = (function html$HTMLElement$inner_text(this$){
return this$.innerText();
});
/**
 * Property.
 * 
 *   The innerText property of the `html.HTMLElement` interface represents
 *   \"rendered\" text content of a node and its descendants.
 * 
 *   `var renderedText = HTMLElement.innerText;
 *   HTMLElement.innerText = string;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/innerText`
 */
html.HTMLElement.set_inner_text_BANG_ = (function html$HTMLElement$set_inner_text_BANG_(this$,val){
return (this$["innerText"] = val);
});
/**
 * Property.
 * 
 *   The HTMLElement.isContentEditable read-only property returns
 *   `web.Boolean` that is true if the contents of the element are
 *   otherwise it returns false.
 * 
 *   `editable = element.isContentEditable`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/isContentEditable`
 */
html.HTMLElement.is_content_editable = (function html$HTMLElement$is_content_editable(this$){
return this$.isContentEditable();
});
/**
 * Property.
 * 
 *   The HTMLElement.lang property gets or sets the base language
 *   an element's attribute values and text content.
 * 
 *   `var languageUsed = elementNodeReference.lang; // Get the value of lang
 *   elementNodeReference.lang = NewLanguage; // Set new value for lang
 * 
 *   languageUsed is a string variable that gets the language in which the text of the current element is written. NewLanguage is a string variable with its value setting the language in which the text of the current element is written.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lang`
 */
html.HTMLElement.lang = (function html$HTMLElement$lang(this$){
return this$.lang();
});
/**
 * Property.
 * 
 *   The HTMLElement.lang property gets or sets the base language
 *   an element's attribute values and text content.
 * 
 *   `var languageUsed = elementNodeReference.lang; // Get the value of lang
 *   elementNodeReference.lang = NewLanguage; // Set new value for lang
 * 
 *   languageUsed is a string variable that gets the language in which the text of the current element is written. NewLanguage is a string variable with its value setting the language in which the text of the current element is written.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/lang`
 */
html.HTMLElement.set_lang_BANG_ = (function html$HTMLElement$set_lang_BANG_(this$,val){
return (this$["lang"] = val);
});
/**
 * Property.
 * 
 *   The nonce property of the `html.HTMLElement` interface returns
 *   cryptographic number used once that is used by Content Security
 *   to determine whether a given fetch will be allowed to proceed.
 * 
 *   `var nonce = HTMLElement.nonce
 *   HTMLElement.nonce = nonce`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/nonce`
 */
html.HTMLElement.nonce = (function html$HTMLElement$nonce(this$){
return this$.nonce();
});
/**
 * Property.
 * 
 *   The nonce property of the `html.HTMLElement` interface returns
 *   cryptographic number used once that is used by Content Security
 *   to determine whether a given fetch will be allowed to proceed.
 * 
 *   `var nonce = HTMLElement.nonce
 *   HTMLElement.nonce = nonce`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/nonce`
 */
html.HTMLElement.set_nonce_BANG_ = (function html$HTMLElement$set_nonce_BANG_(this$,val){
return (this$["nonce"] = val);
});
/**
 * Property.
 * 
 *   The HTMLElement.offsetHeight read-only property returns the height
 *   an element, including vertical padding and borders, as an integer.
 * 
 *   `var intElemOffsetHeight = element.offsetHeight;
 * 
 *   intElemOffsetHeight is a variable storing an integer corresponding to the offsetHeight pixel value of the element. The offsetHeight property is read-only.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight`
 */
html.HTMLElement.offset_height = (function html$HTMLElement$offset_height(this$){
return this$.offsetHeight();
});
/**
 * Property.
 * 
 *   The HTMLElement.offsetHeight read-only property returns the height
 *   an element, including vertical padding and borders, as an integer.
 * 
 *   `var intElemOffsetHeight = element.offsetHeight;
 * 
 *   intElemOffsetHeight is a variable storing an integer corresponding to the offsetHeight pixel value of the element. The offsetHeight property is read-only.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetHeight`
 */
html.HTMLElement.set_offset_height_BANG_ = (function html$HTMLElement$set_offset_height_BANG_(this$,val){
return (this$["offsetHeight"] = val);
});
/**
 * Property.
 * 
 *   The HTMLElement.offsetLeft read-only property returns the number
 *   pixels that the upper left corner of the current element is offset
 *   the left within the `html.HTMLElement.offsetParent` node.
 * 
 *   `left = element.offsetLeft;
 * 
 *   left is an integer representing the offset to the left in pixels from the closest relatively positioned parent element.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft`
 */
html.HTMLElement.offset_left = (function html$HTMLElement$offset_left(this$){
return this$.offsetLeft();
});
/**
 * Property.
 * 
 *   The HTMLElement.offsetParent read-only property returns a reference
 *   the object which is the closest (nearest in the containment hierarchy)
 *   containing element. If the element is non-positioned, the nearest
 *   th, table or the body is returned.
 * 
 *   `parentObj = element.offsetParent;
 * 
 * 
 *   parentObj is an object reference to the element in which the current element is offset.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent`
 */
html.HTMLElement.offset_parent = (function html$HTMLElement$offset_parent(this$){
return this$.offsetParent();
});
/**
 * Property.
 * 
 *   The HTMLElement.offsetParent read-only property returns a reference
 *   the object which is the closest (nearest in the containment hierarchy)
 *   containing element. If the element is non-positioned, the nearest
 *   th, table or the body is returned.
 * 
 *   `parentObj = element.offsetParent;
 * 
 * 
 *   parentObj is an object reference to the element in which the current element is offset.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetParent`
 */
html.HTMLElement.set_offset_parent_BANG_ = (function html$HTMLElement$set_offset_parent_BANG_(this$,val){
return (this$["offsetParent"] = val);
});
/**
 * Property.
 * 
 *   The HTMLElement.offsetTop read-only property returns the distance
 *   the current element relative to the top of the `web.offsetParent`
 * 
 *   `topPos = element.offsetTop;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop`
 */
html.HTMLElement.offset_top = (function html$HTMLElement$offset_top(this$){
return this$.offsetTop();
});
/**
 * Property.
 * 
 *   The HTMLElement.offsetWidth read-only property returns the layout
 *   of an element as an integer.
 * 
 *   `var intElemOffsetWidth = element.offsetWidth;
 * 
 *   intElemOffsetWidth is a variable storing an integer corresponding to the offsetWidth pixel value of the element. The offsetWidth property is a read-only.
 * 
 * 
 *   This property will round the value to an integer. If you need a fractional value, use `web.element.getBoundingClientRect()`.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth`
 */
html.HTMLElement.offset_width = (function html$HTMLElement$offset_width(this$){
return this$.offsetWidth();
});
/**
 * Property.
 * 
 *   The onabort property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing abort events sent to the window.
 * 
 *   `window.onabort = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort`
 */
html.HTMLElement.onabort = (function html$HTMLElement$onabort(this$){
return this$.onabort();
});
/**
 * Property.
 * 
 *   The onabort property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing abort events sent to the window.
 * 
 *   `window.onabort = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onabort`
 */
html.HTMLElement.set_onabort_BANG_ = (function html$HTMLElement$set_onabort_BANG_(this$,val){
return (this$["onabort"] = val);
});
/**
 * Property.
 * 
 *   The onanimationcancel property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationcancel events.
 * 
 *   `var animCancelHandler = target.onanimationcancel;
 * 
 *   target.onanimationcancel = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationcancel`
 */
html.HTMLElement.onanimationcancel = (function html$HTMLElement$onanimationcancel(this$){
return this$.onanimationcancel();
});
/**
 * Property.
 * 
 *   The onanimationcancel property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationcancel events.
 * 
 *   `var animCancelHandler = target.onanimationcancel;
 * 
 *   target.onanimationcancel = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationcancel`
 */
html.HTMLElement.set_onanimationcancel_BANG_ = (function html$HTMLElement$set_onanimationcancel_BANG_(this$,val){
return (this$["onanimationcancel"] = val);
});
/**
 * Property.
 * 
 *   The onanimationend property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationend events.
 * 
 *   `var animEndHandler = target.onanimationend;
 * 
 *   target.onanimationend = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationend`
 */
html.HTMLElement.onanimationend = (function html$HTMLElement$onanimationend(this$){
return this$.onanimationend();
});
/**
 * Property.
 * 
 *   The onanimationend property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationend events.
 * 
 *   `var animEndHandler = target.onanimationend;
 * 
 *   target.onanimationend = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationend`
 */
html.HTMLElement.set_onanimationend_BANG_ = (function html$HTMLElement$set_onanimationend_BANG_(this$,val){
return (this$["onanimationend"] = val);
});
/**
 * Property.
 * 
 *   The onanimationiteration property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationiteration events.
 * 
 *   `var animIterationHandler = target.onanimationiteration;
 * 
 *   target.onanimationiteration = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration`
 */
html.HTMLElement.onanimationiteration = (function html$HTMLElement$onanimationiteration(this$){
return this$.onanimationiteration();
});
/**
 * Property.
 * 
 *   The onanimationiteration property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing animationiteration events.
 * 
 *   `var animIterationHandler = target.onanimationiteration;
 * 
 *   target.onanimationiteration = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onanimationiteration`
 */
html.HTMLElement.set_onanimationiteration_BANG_ = (function html$HTMLElement$set_onanimationiteration_BANG_(this$,val){
return (this$["onanimationiteration"] = val);
});
/**
 * Property.
 * 
 *   The onauxclick property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing auxclick events.
 * 
 *   `target.onauxclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onauxclick`
 */
html.HTMLElement.onauxclick = (function html$HTMLElement$onauxclick(this$){
return this$.onauxclick();
});
/**
 * Property.
 * 
 *   The onauxclick property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing auxclick events.
 * 
 *   `target.onauxclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onauxclick`
 */
html.HTMLElement.set_onauxclick_BANG_ = (function html$HTMLElement$set_onauxclick_BANG_(this$,val){
return (this$["onauxclick"] = val);
});
/**
 * Property.
 * 
 *   The onblur property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing blur events. It's available
 *   `web.Element`, `web.Document`, and `web.Window`.
 * 
 *   `target.onblur = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur`
 */
html.HTMLElement.onblur = (function html$HTMLElement$onblur(this$){
return this$.onblur();
});
/**
 * Property.
 * 
 *   The onblur property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing blur events. It's available
 *   `web.Element`, `web.Document`, and `web.Window`.
 * 
 *   `target.onblur = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onblur`
 */
html.HTMLElement.set_onblur_BANG_ = (function html$HTMLElement$set_onblur_BANG_(this$,val){
return (this$["onblur"] = val);
});
/**
 * Property.
 * 
 *   The oncancel property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing cancel events sent to a
 *   element.
 * 
 *   `target.oncancel = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncancel`
 */
html.HTMLElement.oncancel = (function html$HTMLElement$oncancel(this$){
return this$.oncancel();
});
/**
 * Property.
 * 
 *   The oncancel property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing cancel events sent to a
 *   element.
 * 
 *   `target.oncancel = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncancel`
 */
html.HTMLElement.set_oncancel_BANG_ = (function html$HTMLElement$set_oncancel_BANG_(this$,val){
return (this$["oncancel"] = val);
});
/**
 * Property.
 * 
 *   The oncanplay property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing canplay events.
 * 
 *   `element.oncanplay = handlerFunction;
 *   var handlerFunction = element.oncanplay;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplay`
 */
html.HTMLElement.oncanplay = (function html$HTMLElement$oncanplay(this$){
return this$.oncanplay();
});
/**
 * Property.
 * 
 *   The oncanplay property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing canplay events.
 * 
 *   `element.oncanplay = handlerFunction;
 *   var handlerFunction = element.oncanplay;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplay`
 */
html.HTMLElement.set_oncanplay_BANG_ = (function html$HTMLElement$set_oncanplay_BANG_(this$,val){
return (this$["oncanplay"] = val);
});
/**
 * Property.
 * 
 *   The oncanplaythrough property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing canplaythrough events.
 * 
 *   `element.oncanplaythrough = handlerFunction;
 *   var handlerFunction = element.oncanplaythrough;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplaythrough`
 */
html.HTMLElement.oncanplaythrough = (function html$HTMLElement$oncanplaythrough(this$){
return this$.oncanplaythrough();
});
/**
 * Property.
 * 
 *   The oncanplaythrough property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing canplaythrough events.
 * 
 *   `element.oncanplaythrough = handlerFunction;
 *   var handlerFunction = element.oncanplaythrough;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncanplaythrough`
 */
html.HTMLElement.set_oncanplaythrough_BANG_ = (function html$HTMLElement$set_oncanplaythrough_BANG_(this$,val){
return (this$["oncanplaythrough"] = val);
});
/**
 * Property.
 * 
 *   The onchange property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing change events.
 * 
 *   `target.onchange = functionRef;
 * 
 *   functionRef is a function name or a function expression. The function receives an `web.Event` object as its sole argument.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange`
 */
html.HTMLElement.onchange = (function html$HTMLElement$onchange(this$){
return this$.onchange();
});
/**
 * Property.
 * 
 *   The onchange property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` for processing change events.
 * 
 *   `target.onchange = functionRef;
 * 
 *   functionRef is a function name or a function expression. The function receives an `web.Event` object as its sole argument.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onchange`
 */
html.HTMLElement.set_onchange_BANG_ = (function html$HTMLElement$set_onchange_BANG_(this$,val){
return (this$["onchange"] = val);
});
/**
 * Property.
 * 
 *   The onclick property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing click events on a given element.
 * 
 *   `target.onclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick`
 */
html.HTMLElement.onclick = (function html$HTMLElement$onclick(this$){
return this$.onclick();
});
/**
 * Property.
 * 
 *   The onclick property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing click events on a given element.
 * 
 *   `target.onclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick`
 */
html.HTMLElement.set_onclick_BANG_ = (function html$HTMLElement$set_onclick_BANG_(this$,val){
return (this$["onclick"] = val);
});
/**
 * Property.
 * 
 *   The onclose property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing close events sent to a `web.<dialog>`
 * 
 *   `target.onclose = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose`
 */
html.HTMLElement.onclose = (function html$HTMLElement$onclose(this$){
return this$.onclose();
});
/**
 * Property.
 * 
 *   The onclose property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing close events sent to a `web.<dialog>`
 * 
 *   `target.onclose = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclose`
 */
html.HTMLElement.set_onclose_BANG_ = (function html$HTMLElement$set_onclose_BANG_(this$,val){
return (this$["onclose"] = val);
});
/**
 * Property.
 * 
 *   The oncontextmenu property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes contextmenu events.
 * 
 *   `target.oncontextmenu = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncontextmenu`
 */
html.HTMLElement.oncontextmenu = (function html$HTMLElement$oncontextmenu(this$){
return this$.oncontextmenu();
});
/**
 * Property.
 * 
 *   The oncontextmenu property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes contextmenu events.
 * 
 *   `target.oncontextmenu = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncontextmenu`
 */
html.HTMLElement.set_oncontextmenu_BANG_ = (function html$HTMLElement$set_oncontextmenu_BANG_(this$,val){
return (this$["oncontextmenu"] = val);
});
/**
 * Property.
 * 
 *   The oncopy property of the `html.HTMLElement` interface is an
 *   that processes copy events.
 * 
 *   `target.oncopy = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncopy`
 */
html.HTMLElement.oncopy = (function html$HTMLElement$oncopy(this$){
return this$.oncopy();
});
/**
 * Property.
 * 
 *   The oncopy property of the `html.HTMLElement` interface is an
 *   that processes copy events.
 * 
 *   `target.oncopy = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncopy`
 */
html.HTMLElement.set_oncopy_BANG_ = (function html$HTMLElement$set_oncopy_BANG_(this$,val){
return (this$["oncopy"] = val);
});
/**
 * Property.
 * 
 *   The oncuechange property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing cuechange events.
 * 
 *   `element.oncuechange = handlerFunction;
 *   var handlerFunction = element.oncuechange;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncuechange`
 */
html.HTMLElement.oncuechange = (function html$HTMLElement$oncuechange(this$){
return this$.oncuechange();
});
/**
 * Property.
 * 
 *   The oncuechange property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing cuechange events.
 * 
 *   `element.oncuechange = handlerFunction;
 *   var handlerFunction = element.oncuechange;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oncuechange`
 */
html.HTMLElement.set_oncuechange_BANG_ = (function html$HTMLElement$set_oncuechange_BANG_(this$,val){
return (this$["oncuechange"] = val);
});
/**
 * Property.
 * 
 *   The HTMLElement.oncut property of the `html.HTMLElement` interface
 *   an `web.EventHandler` that processes cut events.
 * 
 *   `target.oncut = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncut`
 */
html.HTMLElement.oncut = (function html$HTMLElement$oncut(this$){
return this$.oncut();
});
/**
 * Property.
 * 
 *   The HTMLElement.oncut property of the `html.HTMLElement` interface
 *   an `web.EventHandler` that processes cut events.
 * 
 *   `target.oncut = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/oncut`
 */
html.HTMLElement.set_oncut_BANG_ = (function html$HTMLElement$set_oncut_BANG_(this$,val){
return (this$["oncut"] = val);
});
/**
 * Property.
 * 
 *   The ondblclick property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes dblclick events on the given
 * 
 *   `target.ondblclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick`
 */
html.HTMLElement.ondblclick = (function html$HTMLElement$ondblclick(this$){
return this$.ondblclick();
});
/**
 * Property.
 * 
 *   The ondblclick property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes dblclick events on the given
 * 
 *   `target.ondblclick = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondblclick`
 */
html.HTMLElement.set_ondblclick_BANG_ = (function html$HTMLElement$set_ondblclick_BANG_(this$,val){
return (this$["ondblclick"] = val);
});
/**
 * Property.
 * 
 *   The ondurationchange property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing durationchange events.
 * 
 *   `element.ondurationchange = handlerFunction;
 *   var handlerFunction = element.ondurationchange;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondurationchange`
 */
html.HTMLElement.ondurationchange = (function html$HTMLElement$ondurationchange(this$){
return this$.ondurationchange();
});
/**
 * Property.
 * 
 *   The ondurationchange property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing durationchange events.
 * 
 *   `element.ondurationchange = handlerFunction;
 *   var handlerFunction = element.ondurationchange;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ondurationchange`
 */
html.HTMLElement.set_ondurationchange_BANG_ = (function html$HTMLElement$set_ondurationchange_BANG_(this$,val){
return (this$["ondurationchange"] = val);
});
/**
 * Property.
 * 
 *   The onended property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing ended events.
 * 
 *   `element.onended = handlerFunction;
 *   var handlerFunction = element.onended;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onended`
 */
html.HTMLElement.onended = (function html$HTMLElement$onended(this$){
return this$.onended();
});
/**
 * Property.
 * 
 *   The onended property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing ended events.
 * 
 *   `element.onended = handlerFunction;
 *   var handlerFunction = element.onended;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onended`
 */
html.HTMLElement.set_onended_BANG_ = (function html$HTMLElement$set_onended_BANG_(this$,val){
return (this$["onended"] = val);
});
/**
 * Property.
 * 
 *   The onerror property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes error events.
 * 
 *   `For historical reasons, different arguments are passed to window.onerror and element.onerror handlers (as well as on error-type `web.window.addEventListener` handlers).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror`
 */
html.HTMLElement.onerror = (function html$HTMLElement$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The onerror property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes error events.
 * 
 *   `For historical reasons, different arguments are passed to window.onerror and element.onerror handlers (as well as on error-type `web.window.addEventListener` handlers).`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror`
 */
html.HTMLElement.set_onerror_BANG_ = (function html$HTMLElement$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The onfocus property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes focus events on the given element.
 * 
 *   `target.onfocus = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus`
 */
html.HTMLElement.onfocus = (function html$HTMLElement$onfocus(this$){
return this$.onfocus();
});
/**
 * Property.
 * 
 *   The onfocus property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes focus events on the given element.
 * 
 *   `target.onfocus = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onfocus`
 */
html.HTMLElement.set_onfocus_BANG_ = (function html$HTMLElement$set_onfocus_BANG_(this$,val){
return (this$["onfocus"] = val);
});
/**
 * Property.
 * 
 *   The ongotpointercapture property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes gotpointercapture events.
 * 
 *   `target.ongotpointercapture = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ongotpointercapture`
 */
html.HTMLElement.ongotpointercapture = (function html$HTMLElement$ongotpointercapture(this$){
return this$.ongotpointercapture();
});
/**
 * Property.
 * 
 *   The ongotpointercapture property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes gotpointercapture events.
 * 
 *   `target.ongotpointercapture = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ongotpointercapture`
 */
html.HTMLElement.set_ongotpointercapture_BANG_ = (function html$HTMLElement$set_ongotpointercapture_BANG_(this$,val){
return (this$["ongotpointercapture"] = val);
});
/**
 * Property.
 * 
 *   The oninput property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes input events on the `web.<input>`,
 *   and `web.<textarea>` elements. It also handles these events on
 *   where `web.contenteditable` or `web.designMode` are turned on.
 * 
 *   `target.oninput = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput`
 */
html.HTMLElement.oninput = (function html$HTMLElement$oninput(this$){
return this$.oninput();
});
/**
 * Property.
 * 
 *   The oninput property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes input events on the `web.<input>`,
 *   and `web.<textarea>` elements. It also handles these events on
 *   where `web.contenteditable` or `web.designMode` are turned on.
 * 
 *   `target.oninput = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninput`
 */
html.HTMLElement.set_oninput_BANG_ = (function html$HTMLElement$set_oninput_BANG_(this$,val){
return (this$["oninput"] = val);
});
/**
 * Property.
 * 
 *   The oninvalid property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes invalid events.
 * 
 *   `target.oninvalid = functionRef;
 *   var functionRef = target.oninvalid;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninvalid`
 */
html.HTMLElement.oninvalid = (function html$HTMLElement$oninvalid(this$){
return this$.oninvalid();
});
/**
 * Property.
 * 
 *   The oninvalid property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes invalid events.
 * 
 *   `target.oninvalid = functionRef;
 *   var functionRef = target.oninvalid;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/oninvalid`
 */
html.HTMLElement.set_oninvalid_BANG_ = (function html$HTMLElement$set_oninvalid_BANG_(this$,val){
return (this$["oninvalid"] = val);
});
/**
 * Property.
 * 
 *   The onkeydown property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes keydown events.
 * 
 *   `target.onkeydown = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown`
 */
html.HTMLElement.onkeydown = (function html$HTMLElement$onkeydown(this$){
return this$.onkeydown();
});
/**
 * Property.
 * 
 *   The onkeydown property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes keydown events.
 * 
 *   `target.onkeydown = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeydown`
 */
html.HTMLElement.set_onkeydown_BANG_ = (function html$HTMLElement$set_onkeydown_BANG_(this$,val){
return (this$["onkeydown"] = val);
});
/**
 * Property.
 * 
 *   The onkeypress property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes keypress events.
 * 
 *   `target.onkeypress = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress`
 */
html.HTMLElement.onkeypress = (function html$HTMLElement$onkeypress(this$){
return this$.onkeypress();
});
/**
 * Property.
 * 
 *   The onkeypress property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes keypress events.
 * 
 *   `target.onkeypress = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeypress`
 */
html.HTMLElement.set_onkeypress_BANG_ = (function html$HTMLElement$set_onkeypress_BANG_(this$,val){
return (this$["onkeypress"] = val);
});
/**
 * Property.
 * 
 *   The onkeyup property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes keyup events.
 * 
 *   `target.onkeyup = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup`
 */
html.HTMLElement.onkeyup = (function html$HTMLElement$onkeyup(this$){
return this$.onkeyup();
});
/**
 * Property.
 * 
 *   The onkeyup property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes keyup events.
 * 
 *   `target.onkeyup = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onkeyup`
 */
html.HTMLElement.set_onkeyup_BANG_ = (function html$HTMLElement$set_onkeyup_BANG_(this$,val){
return (this$["onkeyup"] = val);
});
/**
 * Property.
 * 
 *   The onload property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes load events on a `web.Window`,
 *   `web.<img>` element, etc.
 * 
 *   `target.onload = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload`
 */
html.HTMLElement.onload = (function html$HTMLElement$onload(this$){
return this$.onload();
});
/**
 * Property.
 * 
 *   The onload property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes load events on a `web.Window`,
 *   `web.<img>` element, etc.
 * 
 *   `target.onload = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onload`
 */
html.HTMLElement.set_onload_BANG_ = (function html$HTMLElement$set_onload_BANG_(this$,val){
return (this$["onload"] = val);
});
/**
 * Property.
 * 
 *   The onloadeddata property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing loadeddata events.
 * 
 *   `element.onloadeddata = handlerFunction;
 *   var handlerFunction = element.onloadeddata;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadeddata`
 */
html.HTMLElement.onloadeddata = (function html$HTMLElement$onloadeddata(this$){
return this$.onloadeddata();
});
/**
 * Property.
 * 
 *   The onloadeddata property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing loadeddata events.
 * 
 *   `element.onloadeddata = handlerFunction;
 *   var handlerFunction = element.onloadeddata;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadeddata`
 */
html.HTMLElement.set_onloadeddata_BANG_ = (function html$HTMLElement$set_onloadeddata_BANG_(this$,val){
return (this$["onloadeddata"] = val);
});
/**
 * Property.
 * 
 *   The onloadedmetadata property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing loadedmetadata events.
 * 
 *   `element.onloadedmetadata = handlerFunction;
 *   var handlerFunction = element.onloadedmetadata;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadedmetadata`
 */
html.HTMLElement.onloadedmetadata = (function html$HTMLElement$onloadedmetadata(this$){
return this$.onloadedmetadata();
});
/**
 * Property.
 * 
 *   The onloadedmetadata property of the `web.GlobalEventHandlers`
 *   is the `web.EventHandler` for processing loadedmetadata events.
 * 
 *   `element.onloadedmetadata = handlerFunction;
 *   var handlerFunction = element.onloadedmetadata;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadedmetadata`
 */
html.HTMLElement.set_onloadedmetadata_BANG_ = (function html$HTMLElement$set_onloadedmetadata_BANG_(this$,val){
return (this$["onloadedmetadata"] = val);
});
/**
 * Property.
 * 
 *   The onloadend property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` representing the code to be called when
 *   loadend event is raised (when progress has stopped on the loading
 *   a resource.)
 * 
 *   `img.onloadend = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadend`
 */
html.HTMLElement.onloadend = (function html$HTMLElement$onloadend(this$){
return this$.onloadend();
});
/**
 * Property.
 * 
 *   The onloadend property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` representing the code to be called when
 *   loadend event is raised (when progress has stopped on the loading
 *   a resource.)
 * 
 *   `img.onloadend = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadend`
 */
html.HTMLElement.set_onloadend_BANG_ = (function html$HTMLElement$set_onloadend_BANG_(this$,val){
return (this$["onloadend"] = val);
});
/**
 * Property.
 * 
 *   The onloadstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` representing the code to be called when
 *   loadstart event is raised (when progress has begun on the loading
 *   a resource.)
 * 
 *   `img.onloadstart = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadstart`
 */
html.HTMLElement.onloadstart = (function html$HTMLElement$onloadstart(this$){
return this$.onloadstart();
});
/**
 * Property.
 * 
 *   The onloadstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` representing the code to be called when
 *   loadstart event is raised (when progress has begun on the loading
 *   a resource.)
 * 
 *   `img.onloadstart = funcRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onloadstart`
 */
html.HTMLElement.set_onloadstart_BANG_ = (function html$HTMLElement$set_onloadstart_BANG_(this$,val){
return (this$["onloadstart"] = val);
});
/**
 * Property.
 * 
 *   The onlostpointercapture property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes lostpointercapture events.
 * 
 *   `target.onlostpointercapture = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onlostpointercapture`
 */
html.HTMLElement.onlostpointercapture = (function html$HTMLElement$onlostpointercapture(this$){
return this$.onlostpointercapture();
});
/**
 * Property.
 * 
 *   The onlostpointercapture property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes lostpointercapture events.
 * 
 *   `target.onlostpointercapture = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onlostpointercapture`
 */
html.HTMLElement.set_onlostpointercapture_BANG_ = (function html$HTMLElement$set_onlostpointercapture_BANG_(this$,val){
return (this$["onlostpointercapture"] = val);
});
/**
 * Property.
 * 
 *   The onmousedown property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mousedown events.
 * 
 *   `target.onmousedown = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown`
 */
html.HTMLElement.onmousedown = (function html$HTMLElement$onmousedown(this$){
return this$.onmousedown();
});
/**
 * Property.
 * 
 *   The onmousedown property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mousedown events.
 * 
 *   `target.onmousedown = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousedown`
 */
html.HTMLElement.set_onmousedown_BANG_ = (function html$HTMLElement$set_onmousedown_BANG_(this$,val){
return (this$["onmousedown"] = val);
});
/**
 * Property.
 * 
 *   The onmouseenter property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing mouseenter events.
 * 
 *   `element.onmouseenter = handlerFunction;
 *   var handlerFunction = element.onmouseenter;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseenter`
 */
html.HTMLElement.onmouseenter = (function html$HTMLElement$onmouseenter(this$){
return this$.onmouseenter();
});
/**
 * Property.
 * 
 *   The onmouseenter property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing mouseenter events.
 * 
 *   `element.onmouseenter = handlerFunction;
 *   var handlerFunction = element.onmouseenter;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseenter`
 */
html.HTMLElement.set_onmouseenter_BANG_ = (function html$HTMLElement$set_onmouseenter_BANG_(this$,val){
return (this$["onmouseenter"] = val);
});
/**
 * Property.
 * 
 *   The onmouseleave property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing mouseleave events.
 * 
 *   `element.onmouseleave = handlerFunction;
 *   var handlerFunction = element.onmouseleave;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseleave`
 */
html.HTMLElement.onmouseleave = (function html$HTMLElement$onmouseleave(this$){
return this$.onmouseleave();
});
/**
 * Property.
 * 
 *   The onmouseleave property of the `web.GlobalEventHandlers` mixin
 *   the `web.EventHandler` for processing mouseleave events.
 * 
 *   `element.onmouseleave = handlerFunction;
 *   var handlerFunction = element.onmouseleave;
 * 
 *   handlerFunction is either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseleave`
 */
html.HTMLElement.set_onmouseleave_BANG_ = (function html$HTMLElement$set_onmouseleave_BANG_(this$,val){
return (this$["onmouseleave"] = val);
});
/**
 * Property.
 * 
 *   The onmousemove property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mousemove events.
 * 
 *   `target.onmousemove = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousemove`
 */
html.HTMLElement.onmousemove = (function html$HTMLElement$onmousemove(this$){
return this$.onmousemove();
});
/**
 * Property.
 * 
 *   The onmousemove property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mousemove events.
 * 
 *   `target.onmousemove = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmousemove`
 */
html.HTMLElement.set_onmousemove_BANG_ = (function html$HTMLElement$set_onmousemove_BANG_(this$,val){
return (this$["onmousemove"] = val);
});
/**
 * Property.
 * 
 *   The onmouseout property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseout events.
 * 
 *   `element.onmouseout = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout`
 */
html.HTMLElement.onmouseout = (function html$HTMLElement$onmouseout(this$){
return this$.onmouseout();
});
/**
 * Property.
 * 
 *   The onmouseout property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseout events.
 * 
 *   `element.onmouseout = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseout`
 */
html.HTMLElement.set_onmouseout_BANG_ = (function html$HTMLElement$set_onmouseout_BANG_(this$,val){
return (this$["onmouseout"] = val);
});
/**
 * Property.
 * 
 *   The onmouseover property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseover events.
 * 
 *   `element.onmouseover = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover`
 */
html.HTMLElement.onmouseover = (function html$HTMLElement$onmouseover(this$){
return this$.onmouseover();
});
/**
 * Property.
 * 
 *   The onmouseover property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseover events.
 * 
 *   `element.onmouseover = function;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseover`
 */
html.HTMLElement.set_onmouseover_BANG_ = (function html$HTMLElement$set_onmouseover_BANG_(this$,val){
return (this$["onmouseover"] = val);
});
/**
 * Property.
 * 
 *   The onmouseup property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseup events.
 * 
 *   `target.onmouseup = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseup`
 */
html.HTMLElement.onmouseup = (function html$HTMLElement$onmouseup(this$){
return this$.onmouseup();
});
/**
 * Property.
 * 
 *   The onmouseup property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes mouseup events.
 * 
 *   `target.onmouseup = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onmouseup`
 */
html.HTMLElement.set_onmouseup_BANG_ = (function html$HTMLElement$set_onmouseup_BANG_(this$,val){
return (this$["onmouseup"] = val);
});
/**
 * Property.
 * 
 *   The HTMLElement.onpaste property of the `html.HTMLElement` interface
 *   an `web.EventHandler` that processes paste events.
 * 
 *   `target.onpaste = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onpaste`
 */
html.HTMLElement.onpaste = (function html$HTMLElement$onpaste(this$){
return this$.onpaste();
});
/**
 * Property.
 * 
 *   The HTMLElement.onpaste property of the `html.HTMLElement` interface
 *   an `web.EventHandler` that processes paste events.
 * 
 *   `target.onpaste = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/onpaste`
 */
html.HTMLElement.set_onpaste_BANG_ = (function html$HTMLElement$set_onpaste_BANG_(this$,val){
return (this$["onpaste"] = val);
});
/**
 * Property.
 * 
 *   The onpause property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing pause events.
 * 
 *   `element.onpause = handlerFunction;
 *   var handlerFunction = element.onpause;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpause`
 */
html.HTMLElement.onpause = (function html$HTMLElement$onpause(this$){
return this$.onpause();
});
/**
 * Property.
 * 
 *   The onpause property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing pause events.
 * 
 *   `element.onpause = handlerFunction;
 *   var handlerFunction = element.onpause;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpause`
 */
html.HTMLElement.set_onpause_BANG_ = (function html$HTMLElement$set_onpause_BANG_(this$,val){
return (this$["onpause"] = val);
});
/**
 * Property.
 * 
 *   The onplay property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing play events.
 * 
 *   `element.onplay = handlerFunction;
 *   var handlerFunction = element.onplay;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onplay`
 */
html.HTMLElement.onplay = (function html$HTMLElement$onplay(this$){
return this$.onplay();
});
/**
 * Property.
 * 
 *   The onplay property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` for processing play events.
 * 
 *   `element.onplay = handlerFunction;
 *   var handlerFunction = element.onplay;
 * 
 *   handlerFunction should be either null or a JavaScript function specifying the handler for the event.`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onplay`
 */
html.HTMLElement.set_onplay_BANG_ = (function html$HTMLElement$set_onplay_BANG_(this$,val){
return (this$["onplay"] = val);
});
/**
 * Property.
 * 
 *   The onpointercancel property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes pointercancel events.
 * 
 *   `targetElement.onpointercancel = cancelHandler;
 * 
 *   var cancelHandler = targetElement.onpointercancel;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointercancel`
 */
html.HTMLElement.onpointercancel = (function html$HTMLElement$onpointercancel(this$){
return this$.onpointercancel();
});
/**
 * Property.
 * 
 *   The onpointercancel property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes pointercancel events.
 * 
 *   `targetElement.onpointercancel = cancelHandler;
 * 
 *   var cancelHandler = targetElement.onpointercancel;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointercancel`
 */
html.HTMLElement.set_onpointercancel_BANG_ = (function html$HTMLElement$set_onpointercancel_BANG_(this$,val){
return (this$["onpointercancel"] = val);
});
/**
 * Property.
 * 
 *   The `web.GlobalEventHandlers` event handler onpointerdown is
 *   to specify the event handler for the pointerdown event, which
 *   fired when the pointing device is initially pressed. This event
 *   be sent to `web.Window`, `web.Document`, and `web.Element` objects.
 * 
 *   `target.onpointerdown = downHandler;
 * 
 *   var downHandler = target.onpointerdown;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown`
 */
html.HTMLElement.onpointerdown = (function html$HTMLElement$onpointerdown(this$){
return this$.onpointerdown();
});
/**
 * Property.
 * 
 *   The `web.GlobalEventHandlers` event handler onpointerdown is
 *   to specify the event handler for the pointerdown event, which
 *   fired when the pointing device is initially pressed. This event
 *   be sent to `web.Window`, `web.Document`, and `web.Element` objects.
 * 
 *   `target.onpointerdown = downHandler;
 * 
 *   var downHandler = target.onpointerdown;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerdown`
 */
html.HTMLElement.set_onpointerdown_BANG_ = (function html$HTMLElement$set_onpointerdown_BANG_(this$,val){
return (this$["onpointerdown"] = val);
});
/**
 * Property.
 * 
 *   The onpointerenter property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes pointerenter events.
 * 
 *   `targetElement.onpointerenter = enterHandler;
 * 
 *   var enterHandler = targetElement.onpointerenter;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerenter`
 */
html.HTMLElement.onpointerenter = (function html$HTMLElement$onpointerenter(this$){
return this$.onpointerenter();
});
/**
 * Property.
 * 
 *   The onpointerenter property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes pointerenter events.
 * 
 *   `targetElement.onpointerenter = enterHandler;
 * 
 *   var enterHandler = targetElement.onpointerenter;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerenter`
 */
html.HTMLElement.set_onpointerenter_BANG_ = (function html$HTMLElement$set_onpointerenter_BANG_(this$,val){
return (this$["onpointerenter"] = val);
});
/**
 * Property.
 * 
 *   The global event handler for the pointerleave event, which is
 *   to a `web.Node` when the pointer (mouse cursor, fingertip, etc.)
 *   its hit test area (for example, if the cursor exits an `web.Element`
 *   `web.Window`'s content area). This event is part of the Pointer
 *   API.
 * 
 *   `EventTarget.onpointerleave = leaveHandler;
 * 
 *   var leaveHandler = EventTarget.onpointerleave;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerleave`
 */
html.HTMLElement.onpointerleave = (function html$HTMLElement$onpointerleave(this$){
return this$.onpointerleave();
});
/**
 * Property.
 * 
 *   The global event handler for the pointerleave event, which is
 *   to a `web.Node` when the pointer (mouse cursor, fingertip, etc.)
 *   its hit test area (for example, if the cursor exits an `web.Element`
 *   `web.Window`'s content area). This event is part of the Pointer
 *   API.
 * 
 *   `EventTarget.onpointerleave = leaveHandler;
 * 
 *   var leaveHandler = EventTarget.onpointerleave;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerleave`
 */
html.HTMLElement.set_onpointerleave_BANG_ = (function html$HTMLElement$set_onpointerleave_BANG_(this$,val){
return (this$["onpointerleave"] = val);
});
/**
 * Property.
 * 
 *   The onpointermove property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointermove events.
 * 
 *   `targetElement.onpointermove = moveHandler;
 * 
 *   var moveHandler = targetElement.onpointermove;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointermove`
 */
html.HTMLElement.onpointermove = (function html$HTMLElement$onpointermove(this$){
return this$.onpointermove();
});
/**
 * Property.
 * 
 *   The onpointermove property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointermove events.
 * 
 *   `targetElement.onpointermove = moveHandler;
 * 
 *   var moveHandler = targetElement.onpointermove;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointermove`
 */
html.HTMLElement.set_onpointermove_BANG_ = (function html$HTMLElement$set_onpointermove_BANG_(this$,val){
return (this$["onpointermove"] = val);
});
/**
 * Property.
 * 
 *   The onpointerout property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerout events.
 * 
 *   `targetElement.onpointerout = outHandler;
 * 
 *   var outHandler = targetElement.onpointerout;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerout`
 */
html.HTMLElement.onpointerout = (function html$HTMLElement$onpointerout(this$){
return this$.onpointerout();
});
/**
 * Property.
 * 
 *   The onpointerout property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerout events.
 * 
 *   `targetElement.onpointerout = outHandler;
 * 
 *   var outHandler = targetElement.onpointerout;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerout`
 */
html.HTMLElement.set_onpointerout_BANG_ = (function html$HTMLElement$set_onpointerout_BANG_(this$,val){
return (this$["onpointerout"] = val);
});
/**
 * Property.
 * 
 *   The onpointerover property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerover events.
 * 
 *   `targetElement.onpointerover = overHandler;
 * 
 *   var overHandler = targetElement.onpointerover;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerover`
 */
html.HTMLElement.onpointerover = (function html$HTMLElement$onpointerover(this$){
return this$.onpointerover();
});
/**
 * Property.
 * 
 *   The onpointerover property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerover events.
 * 
 *   `targetElement.onpointerover = overHandler;
 * 
 *   var overHandler = targetElement.onpointerover;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerover`
 */
html.HTMLElement.set_onpointerover_BANG_ = (function html$HTMLElement$set_onpointerover_BANG_(this$,val){
return (this$["onpointerover"] = val);
});
/**
 * Property.
 * 
 *   The onpointerup property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerup events.
 * 
 *   `targetElement.onpointerup = upHandler;
 * 
 *   var upHandler = targetElement.onpointerup;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerup`
 */
html.HTMLElement.onpointerup = (function html$HTMLElement$onpointerup(this$){
return this$.onpointerup();
});
/**
 * Property.
 * 
 *   The onpointerup property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes pointerup events.
 * 
 *   `targetElement.onpointerup = upHandler;
 * 
 *   var upHandler = targetElement.onpointerup;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onpointerup`
 */
html.HTMLElement.set_onpointerup_BANG_ = (function html$HTMLElement$set_onpointerup_BANG_(this$,val){
return (this$["onpointerup"] = val);
});
/**
 * Property.
 * 
 *   The onreset property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes reset events.
 * 
 *   `target.onreset = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onreset`
 */
html.HTMLElement.onreset = (function html$HTMLElement$onreset(this$){
return this$.onreset();
});
/**
 * Property.
 * 
 *   The onreset property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes reset events.
 * 
 *   `target.onreset = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onreset`
 */
html.HTMLElement.set_onreset_BANG_ = (function html$HTMLElement$set_onreset_BANG_(this$,val){
return (this$["onreset"] = val);
});
/**
 * Property.
 * 
 *   The onresize property of the `web.GlobalEventHandlers` interface
 *   an `web.EventHandler` that processes resize events.
 * 
 *   `window.onresize = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize`
 */
html.HTMLElement.onresize = (function html$HTMLElement$onresize(this$){
return this$.onresize();
});
/**
 * Property.
 * 
 *   The onresize property of the `web.GlobalEventHandlers` interface
 *   an `web.EventHandler` that processes resize events.
 * 
 *   `window.onresize = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onresize`
 */
html.HTMLElement.set_onresize_BANG_ = (function html$HTMLElement$set_onresize_BANG_(this$,val){
return (this$["onresize"] = val);
});
/**
 * Property.
 * 
 *   The onscroll property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes scroll events.
 * 
 *   `target.onscroll = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll`
 */
html.HTMLElement.onscroll = (function html$HTMLElement$onscroll(this$){
return this$.onscroll();
});
/**
 * Property.
 * 
 *   The onscroll property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes scroll events.
 * 
 *   `target.onscroll = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onscroll`
 */
html.HTMLElement.set_onscroll_BANG_ = (function html$HTMLElement$set_onscroll_BANG_(this$,val){
return (this$["onscroll"] = val);
});
/**
 * Property.
 * 
 *   The onselect property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes `web.select`.
 * 
 *   `target.onselect = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselect`
 */
html.HTMLElement.onselect = (function html$HTMLElement$onselect(this$){
return this$.onselect();
});
/**
 * Property.
 * 
 *   The onselect property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes `web.select`.
 * 
 *   `target.onselect = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselect`
 */
html.HTMLElement.set_onselect_BANG_ = (function html$HTMLElement$set_onselect_BANG_(this$,val){
return (this$["onselect"] = val);
});
/**
 * Property.
 * 
 *   The onselectionchange property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes selectionchange events.
 * 
 *   `object.onselectionchange = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectionchange`
 */
html.HTMLElement.onselectionchange = (function html$HTMLElement$onselectionchange(this$){
return this$.onselectionchange();
});
/**
 * Property.
 * 
 *   The onselectionchange property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes selectionchange events.
 * 
 *   `object.onselectionchange = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectionchange`
 */
html.HTMLElement.set_onselectionchange_BANG_ = (function html$HTMLElement$set_onselectionchange_BANG_(this$,val){
return (this$["onselectionchange"] = val);
});
/**
 * Property.
 * 
 *   The onselectstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes selectstart events.
 * 
 *   `object.onselectstart = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectstart`
 */
html.HTMLElement.onselectstart = (function html$HTMLElement$onselectstart(this$){
return this$.onselectstart();
});
/**
 * Property.
 * 
 *   The onselectstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes selectstart events.
 * 
 *   `object.onselectstart = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onselectstart`
 */
html.HTMLElement.set_onselectstart_BANG_ = (function html$HTMLElement$set_onselectstart_BANG_(this$,val){
return (this$["onselectstart"] = val);
});
/**
 * Property.
 * 
 *   The onsubmit property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes submit events.
 * 
 *   `target.onsubmit = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit`
 */
html.HTMLElement.onsubmit = (function html$HTMLElement$onsubmit(this$){
return this$.onsubmit();
});
/**
 * Property.
 * 
 *   The onsubmit property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes submit events.
 * 
 *   `target.onsubmit = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onsubmit`
 */
html.HTMLElement.set_onsubmit_BANG_ = (function html$HTMLElement$set_onsubmit_BANG_(this$,val){
return (this$["onsubmit"] = val);
});
/**
 * Property.
 * 
 *   The ontouchcancel property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes touchcancel events.
 * 
 *   `var cancelHandler = someElement.ontouchcancel;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchcancel`
 */
html.HTMLElement.ontouchcancel = (function html$HTMLElement$ontouchcancel(this$){
return this$.ontouchcancel();
});
/**
 * Property.
 * 
 *   The ontouchcancel property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes touchcancel events.
 * 
 *   `var cancelHandler = someElement.ontouchcancel;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchcancel`
 */
html.HTMLElement.set_ontouchcancel_BANG_ = (function html$HTMLElement$set_ontouchcancel_BANG_(this$,val){
return (this$["ontouchcancel"] = val);
});
/**
 * Property.
 * 
 *   The ontouchstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes touchstart events.
 * 
 *   `var startHandler = someElement.ontouchstart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchstart`
 */
html.HTMLElement.ontouchstart = (function html$HTMLElement$ontouchstart(this$){
return this$.ontouchstart();
});
/**
 * Property.
 * 
 *   The ontouchstart property of the `web.GlobalEventHandlers` mixin
 *   an `web.EventHandler` that processes touchstart events.
 * 
 *   `var startHandler = someElement.ontouchstart;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontouchstart`
 */
html.HTMLElement.set_ontouchstart_BANG_ = (function html$HTMLElement$set_ontouchstart_BANG_(this$,val){
return (this$["ontouchstart"] = val);
});
/**
 * Property.
 * 
 *   The ontransitioncancel property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes transitioncancel events.
 * 
 *   `var transitionCancelHandler = target.ontransitioncancel;
 * 
 *   target.ontransitioncancel = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitioncancel`
 */
html.HTMLElement.ontransitioncancel = (function html$HTMLElement$ontransitioncancel(this$){
return this$.ontransitioncancel();
});
/**
 * Property.
 * 
 *   The ontransitioncancel property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes transitioncancel events.
 * 
 *   `var transitionCancelHandler = target.ontransitioncancel;
 * 
 *   target.ontransitioncancel = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitioncancel`
 */
html.HTMLElement.set_ontransitioncancel_BANG_ = (function html$HTMLElement$set_ontransitioncancel_BANG_(this$,val){
return (this$["ontransitioncancel"] = val);
});
/**
 * Property.
 * 
 *   The ontransitionend property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes transitionend events.
 * 
 *   `var transitionEndHandler = target.ontransitionend;
 * 
 *   target.ontransitionend = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionend`
 */
html.HTMLElement.ontransitionend = (function html$HTMLElement$ontransitionend(this$){
return this$.ontransitionend();
});
/**
 * Property.
 * 
 *   The ontransitionend property of the `web.GlobalEventHandlers`
 *   is an `web.EventHandler` that processes transitionend events.
 * 
 *   `var transitionEndHandler = target.ontransitionend;
 * 
 *   target.ontransitionend = Function`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/ontransitionend`
 */
html.HTMLElement.set_ontransitionend_BANG_ = (function html$HTMLElement$set_ontransitionend_BANG_(this$,val){
return (this$["ontransitionend"] = val);
});
/**
 * Property.
 * 
 *   The onwheel property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes wheel events.
 * 
 *   `target.onwheel = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onwheel`
 */
html.HTMLElement.onwheel = (function html$HTMLElement$onwheel(this$){
return this$.onwheel();
});
/**
 * Property.
 * 
 *   The onwheel property of the `web.GlobalEventHandlers` mixin is
 *   `web.EventHandler` that processes wheel events.
 * 
 *   `target.onwheel = functionRef;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onwheel`
 */
html.HTMLElement.set_onwheel_BANG_ = (function html$HTMLElement$set_onwheel_BANG_(this$,val){
return (this$["onwheel"] = val);
});
/**
 * Property.
 * 
 *   HTMLElement.outerText is a non-standard property. As a getter,
 *   returns the same value as `web.Node.innerText`. As a setter,
 *   removes the current node and replaces it with the given text.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/outerText`
 */
html.HTMLElement.outer_text = (function html$HTMLElement$outer_text(this$){
return this$.outerText();
});
/**
 * Property.
 * 
 *   HTMLElement.outerText is a non-standard property. As a getter,
 *   returns the same value as `web.Node.innerText`. As a setter,
 *   removes the current node and replaces it with the given text.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/outerText`
 */
html.HTMLElement.set_outer_text_BANG_ = (function html$HTMLElement$set_outer_text_BANG_(this$,val){
return (this$["outerText"] = val);
});
/**
 * Property.
 * 
 *   The HTMLElement.style property is used to get as well as set
 *   inline style of an element. When getting, it returns a `css.CSSStyleDeclaration`
 *   that contains a list of all styles properties for that element
 *   values assigned for the attributes that are defined in the element's
 *   `web.style`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style`
 */
html.HTMLElement.style = (function html$HTMLElement$style(this$){
return this$.style();
});
/**
 * Property.
 * 
 *   The HTMLElement.style property is used to get as well as set
 *   inline style of an element. When getting, it returns a `css.CSSStyleDeclaration`
 *   that contains a list of all styles properties for that element
 *   values assigned for the attributes that are defined in the element's
 *   `web.style`.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style`
 */
html.HTMLElement.set_style_BANG_ = (function html$HTMLElement$set_style_BANG_(this$,val){
return (this$["style"] = val);
});
/**
 * Property.
 * 
 *   The tabIndex property of the `html.HTMLElement` interface represents
 *   tab order of the current element.
 * 
 *   `element.tabIndex = index;
 *   var index = element.tabIndex;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex`
 */
html.HTMLElement.tab_index = (function html$HTMLElement$tab_index(this$){
return this$.tabIndex();
});
/**
 * Property.
 * 
 *   The tabIndex property of the `html.HTMLElement` interface represents
 *   tab order of the current element.
 * 
 *   `element.tabIndex = index;
 *   var index = element.tabIndex;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/tabIndex`
 */
html.HTMLElement.set_tab_index_BANG_ = (function html$HTMLElement$set_tab_index_BANG_(this$,val){
return (this$["tabIndex"] = val);
});
/**
 * Property.
 * 
 *   The HTMLElement.title property represents the title of the element:
 *   text usually displayed in a 'tooltip' popup when the mouse is
 *   the node.
 * 
 *   `var str = element.title;
 *   element.title = str;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/title`
 */
html.HTMLElement.title = (function html$HTMLElement$title(this$){
return this$.title();
});
/**
 * Property.
 * 
 *   The HTMLElement.title property represents the title of the element:
 *   text usually displayed in a 'tooltip' popup when the mouse is
 *   the node.
 * 
 *   `var str = element.title;
 *   element.title = str;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/title`
 */
html.HTMLElement.set_title_BANG_ = (function html$HTMLElement$set_title_BANG_(this$,val){
return (this$["title"] = val);
});
/**
 * Property.
 * 
 *   The HTMLElement.accessKeyLabel read-only property returns a `web.String`
 *   represents the element's assigned access key (if any); otherwise
 *   returns an empty string.
 * 
 *   `label = element.accessKeyLabel`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/accessKeyLabel`
 */
html.HTMLElement.access_key_label = (function html$HTMLElement$access_key_label(this$){
return this$.accessKeyLabel();
});
/**
 * Property.
 * 
 *   The HTMLElement.accessKeyLabel read-only property returns a `web.String`
 *   represents the element's assigned access key (if any); otherwise
 *   returns an empty string.
 * 
 *   `label = element.accessKeyLabel`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/accessKeyLabel`
 */
html.HTMLElement.set_access_key_label_BANG_ = (function html$HTMLElement$set_access_key_label_BANG_(this$,val){
return (this$["accessKeyLabel"] = val);
});

//# sourceMappingURL=HTMLElement.js.map?rel=1565798840487
