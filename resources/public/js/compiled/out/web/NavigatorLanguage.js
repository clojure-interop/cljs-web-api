// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.NavigatorLanguage');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The NavigatorLanguage.language read-only property returns a string
 *   the preferred language of the user, usually the language of the
 *   UI.
 * 
 *   `var lang = navigator.language`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/language`
 */
web.NavigatorLanguage.language = (function web$NavigatorLanguage$language(this$){
return this$.language();
});
/**
 * Property.
 * 
 *   The NavigatorLanguage.languages read-only property returns an
 *   of `dom.DOMString`s representing the user's preferred languages.
 *   language is described using BCP 47 language tags. In the returned
 *   they are ordered by preference with the most preferred language
 * 
 *   `preferredLanguages = globalObj.navigator.languages`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/NavigatorLanguage/languages`
 */
web.NavigatorLanguage.languages = (function web$NavigatorLanguage$languages(this$){
return this$.languages();
});

//# sourceMappingURL=NavigatorLanguage.js.map?rel=1565798814098
