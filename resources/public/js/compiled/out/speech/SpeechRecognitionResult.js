// Compiled by ClojureScript 1.9.946 {}
goog.provide('speech.SpeechRecognitionResult');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The item getter of the `speech.SpeechRecognitionResult` interface
 *   a standard getter that allows `speech.SpeechRecognitionAlternative`
 *   within the result to be accessed via array syntax.
 * 
 *   `var myAlternative = speechRecognitionResultInstance[0];`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult/item`
 */
speech.SpeechRecognitionResult.item = (function speech$SpeechRecognitionResult$item(this$){
return this$.item();
});
/**
 * Property.
 * 
 *   The isFinal read-only property of the `speech.SpeechRecognitionResult`
 *   is a `web.Boolean` that states whether this result is final (true)
 *   not (false) — if so, then this is the final time this result
 *   be returned; if not, then this result is an interim result, and
 *   be updated later on.
 * 
 *   `var myIsFinal = speechRecognitionResultInstance.isFinal;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult/isFinal`
 */
speech.SpeechRecognitionResult.is_final = (function speech$SpeechRecognitionResult$is_final(this$){
return this$.isFinal();
});
/**
 * Property.
 * 
 *   The isFinal read-only property of the `speech.SpeechRecognitionResult`
 *   is a `web.Boolean` that states whether this result is final (true)
 *   not (false) — if so, then this is the final time this result
 *   be returned; if not, then this result is an interim result, and
 *   be updated later on.
 * 
 *   `var myIsFinal = speechRecognitionResultInstance.isFinal;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult/isFinal`
 */
speech.SpeechRecognitionResult.set_is_final_BANG_ = (function speech$SpeechRecognitionResult$set_is_final_BANG_(this$,val){
return (this$["isFinal"] = val);
});
/**
 * Property.
 * 
 *   The length read-only property of the `speech.SpeechRecognitionResult`
 *   returns the length of the \"array\" — the number of `speech.SpeechRecognitionAlternative`
 *   contained in the result (also referred to as \"n-best alternatives\".)
 * 
 *   `var myLength = speechRecognitionResultInstance.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult/length`
 */
speech.SpeechRecognitionResult.length = (function speech$SpeechRecognitionResult$length(this$){
return this$.length();
});
/**
 * Property.
 * 
 *   The length read-only property of the `speech.SpeechRecognitionResult`
 *   returns the length of the \"array\" — the number of `speech.SpeechRecognitionAlternative`
 *   contained in the result (also referred to as \"n-best alternatives\".)
 * 
 *   `var myLength = speechRecognitionResultInstance.length;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognitionResult/length`
 */
speech.SpeechRecognitionResult.set_length_BANG_ = (function speech$SpeechRecognitionResult$set_length_BANG_(this$,val){
return (this$["length"] = val);
});

//# sourceMappingURL=SpeechRecognitionResult.js.map?rel=1565798861339
