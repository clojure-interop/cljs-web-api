// Compiled by ClojureScript 1.9.946 {}
goog.provide('speech.SpeechGrammarList');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The SpeechGrammarList() constructor creates a new SpeechGrammarList object instance.
 * 
 *   None.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammarList/SpeechGrammarList`
 */
speech.SpeechGrammarList.constructor$ = SpeechGrammarList;
/**
 * Method.
 * 
 *   The addFromString() method of the `speech.SpeechGrammarList`
 *   takes a grammar present in a specific `dom.DOMString` within
 *   code base (e.g. stored in a variable) and adds it to the SpeechGrammarList
 *   a new `speech.SpeechGrammar` object.
 * 
 *   `speechGrammarListInstance.addFromString(string,weight);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammarList/addFromString`
 */
speech.SpeechGrammarList.add_from_string = (function speech$SpeechGrammarList$add_from_string(this$,string,weight){
return this$.addFromString(string,weight);
});
/**
 * Method.
 * 
 *   The addFromURI() method of the `speech.SpeechGrammarList` interface
 *   a grammar present at a specific URI and adds it to the SpeechGrammarList
 *   a new `speech.SpeechGrammar` object.
 * 
 *   `speechGrammarListInstance.addFromURI(src,weight);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammarList/addFromURI`
 */
speech.SpeechGrammarList.add_from_uri = (function speech$SpeechGrammarList$add_from_uri(this$,src,weight){
return this$.addFromURI(src,weight);
});
/**
 * Method.
 * 
 *   The item getter of the `speech.SpeechGrammarList` interface is
 *   standard getter — it allows individual `speech.SpeechGrammar`
 *   to be retrieved from the SpeechGrammarList using array syntax.
 * 
 *   `var myFirstGrammar = speechGrammarListInstance[0];`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammarList/item`
 */
speech.SpeechGrammarList.item = (function speech$SpeechGrammarList$item(this$){
return this$.item();
});
/**
 * Property.
 * 
 *   The length read-only property of the `speech.SpeechGrammarList`
 *   returns the number of `speech.SpeechGrammar` objects contained
 *   the `speech.SpeechGrammarList`.
 * 
 *   `var myListLength = speechGrammarListInstance.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammarList/length`
 */
speech.SpeechGrammarList.length = (function speech$SpeechGrammarList$length(this$){
return this$.length();
});
/**
 * Property.
 * 
 *   The length read-only property of the `speech.SpeechGrammarList`
 *   returns the number of `speech.SpeechGrammar` objects contained
 *   the `speech.SpeechGrammarList`.
 * 
 *   `var myListLength = speechGrammarListInstance.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammarList/length`
 */
speech.SpeechGrammarList.set_length_BANG_ = (function speech$SpeechGrammarList$set_length_BANG_(this$,val){
return (this$["length"] = val);
});

//# sourceMappingURL=SpeechGrammarList.js.map?rel=1565798814413
