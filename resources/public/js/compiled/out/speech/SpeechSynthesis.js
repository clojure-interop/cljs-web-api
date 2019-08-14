// Compiled by ClojureScript 1.9.946 {}
goog.provide('speech.SpeechSynthesis');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The cancel() method of the `speech.SpeechSynthesis` interface
 *   all utterances from the utterance queue.
 * 
 *   `speechSynthesisInstance.cancel();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/cancel`
 */
speech.SpeechSynthesis.cancel = (function speech$SpeechSynthesis$cancel(this$){
return this$.cancel();
});
/**
 * Method.
 * 
 *   The getVoices() method of the `speech.SpeechSynthesis` interface
 *   a list of `speech.SpeechSynthesisVoice` objects representing
 *   the available voices on the current device.
 * 
 *   `speechSynthesisInstance.getVoices();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices`
 */
speech.SpeechSynthesis.get_voices = (function speech$SpeechSynthesis$get_voices(this$){
return this$.getVoices();
});
/**
 * Method.
 * 
 *   The pause() method of the `speech.SpeechSynthesis` interface
 *   the SpeechSynthesis object into a paused state.
 * 
 *   `speechSynthesisInstance.pause();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/pause`
 */
speech.SpeechSynthesis.pause = (function speech$SpeechSynthesis$pause(this$){
return this$.pause();
});
/**
 * Method.
 * 
 *   The resume() method of the `speech.SpeechSynthesis` interface
 *   the SpeechSynthesis object into a non-paused state: resumes it
 *   it was already paused.
 * 
 *   `speechSynthesisInstance.resume();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/resume`
 */
speech.SpeechSynthesis.resume = (function speech$SpeechSynthesis$resume(this$){
return this$.resume();
});
/**
 * Method.
 * 
 *   The speak() method of the `speech.SpeechSynthesis` interface
 *   an `web.utterance` to the utterance queue; it will be spoken
 *   any other utterances queued before it have been spoken.
 * 
 *   `speechSynthesisInstance.speak(utterance);`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak`
 */
speech.SpeechSynthesis.speak = (function speech$SpeechSynthesis$speak(this$,utterance){
return this$.speak(utterance);
});
/**
 * Property.
 * 
 *   The onvoiceschanged property of the `speech.SpeechSynthesis`
 *   represents an event handler that will run when the list of `speech.SpeechSynthesisVoice`
 *   that would be returned by the `speech.SpeechSynthesis.getVoices()`
 *   has changed (when the voiceschanged event fires.)
 * 
 *   `speechSynthesisInstance.onvoiceschanged = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/onvoiceschanged`
 */
speech.SpeechSynthesis.onvoiceschanged = (function speech$SpeechSynthesis$onvoiceschanged(this$){
return this$.onvoiceschanged();
});
/**
 * Property.
 * 
 *   The onvoiceschanged property of the `speech.SpeechSynthesis`
 *   represents an event handler that will run when the list of `speech.SpeechSynthesisVoice`
 *   that would be returned by the `speech.SpeechSynthesis.getVoices()`
 *   has changed (when the voiceschanged event fires.)
 * 
 *   `speechSynthesisInstance.onvoiceschanged = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/onvoiceschanged`
 */
speech.SpeechSynthesis.set_onvoiceschanged_BANG_ = (function speech$SpeechSynthesis$set_onvoiceschanged_BANG_(this$,val){
return (this$["onvoiceschanged"] = val);
});
/**
 * Property.
 * 
 *   The paused read-only property of the `speech.SpeechSynthesis`
 *   is a `web.Boolean` that returns true if the SpeechSynthesis object
 *   in a paused state, or false if not.
 * 
 *   `var amIPaused = speechSynthesisInstance.paused;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/paused`
 */
speech.SpeechSynthesis.paused = (function speech$SpeechSynthesis$paused(this$){
return this$.paused();
});
/**
 * Property.
 * 
 *   The paused read-only property of the `speech.SpeechSynthesis`
 *   is a `web.Boolean` that returns true if the SpeechSynthesis object
 *   in a paused state, or false if not.
 * 
 *   `var amIPaused = speechSynthesisInstance.paused;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/paused`
 */
speech.SpeechSynthesis.set_paused_BANG_ = (function speech$SpeechSynthesis$set_paused_BANG_(this$,val){
return (this$["paused"] = val);
});
/**
 * Property.
 * 
 *   The pending read-only property of the `speech.SpeechSynthesis`
 *   is a `web.Boolean` that returns true if the utterance queue contains
 *   utterances.
 * 
 *   `var amIPending = speechSynthesisInstance.pending;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/pending`
 */
speech.SpeechSynthesis.pending = (function speech$SpeechSynthesis$pending(this$){
return this$.pending();
});
/**
 * Property.
 * 
 *   The pending read-only property of the `speech.SpeechSynthesis`
 *   is a `web.Boolean` that returns true if the utterance queue contains
 *   utterances.
 * 
 *   `var amIPending = speechSynthesisInstance.pending;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/pending`
 */
speech.SpeechSynthesis.set_pending_BANG_ = (function speech$SpeechSynthesis$set_pending_BANG_(this$,val){
return (this$["pending"] = val);
});
/**
 * Property.
 * 
 *   The speaking read-only property of the `speech.SpeechSynthesis`
 *   is a `web.Boolean` that returns true if an utterance is currently
 *   the process of being spoken — even if SpeechSynthesis is in a
 *   state.
 * 
 *   `var amISpeaking = speechSynthesisInstance.speaking;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speaking`
 */
speech.SpeechSynthesis.speaking = (function speech$SpeechSynthesis$speaking(this$){
return this$.speaking();
});
/**
 * Property.
 * 
 *   The speaking read-only property of the `speech.SpeechSynthesis`
 *   is a `web.Boolean` that returns true if an utterance is currently
 *   the process of being spoken — even if SpeechSynthesis is in a
 *   state.
 * 
 *   `var amISpeaking = speechSynthesisInstance.speaking;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speaking`
 */
speech.SpeechSynthesis.set_speaking_BANG_ = (function speech$SpeechSynthesis$set_speaking_BANG_(this$,val){
return (this$["speaking"] = val);
});

//# sourceMappingURL=SpeechSynthesis.js.map?rel=1565798806115
