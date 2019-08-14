// Compiled by ClojureScript 1.9.946 {}
goog.provide('speech.SpeechSynthesisUtterance');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The SpeechSynthesisUtterance() constructor of the `speech.SpeechSynthesisUtterance` interface returns a new SpeechSynthesisUtterance object instance.
 * 
 *   text
 *   A `dom.DOMString` containing the text that will be synthesised when the utterance is spoken..
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance`
 */
speech.SpeechSynthesisUtterance.constructor$ = SpeechSynthesisUtterance;
/**
 * Property.
 * 
 *   The lang property of the `speech.SpeechSynthesisUtterance` interface
 *   and sets the language of the utterance.
 * 
 *   `var myLang = speechSynthesisUtteranceInstance.lang;
 *   speechSynthesisUtteranceInstance.lang = 'en-US';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/lang`
 */
speech.SpeechSynthesisUtterance.lang = (function speech$SpeechSynthesisUtterance$lang(this$){
return this$.lang();
});
/**
 * Property.
 * 
 *   The lang property of the `speech.SpeechSynthesisUtterance` interface
 *   and sets the language of the utterance.
 * 
 *   `var myLang = speechSynthesisUtteranceInstance.lang;
 *   speechSynthesisUtteranceInstance.lang = 'en-US';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/lang`
 */
speech.SpeechSynthesisUtterance.set_lang_BANG_ = (function speech$SpeechSynthesisUtterance$set_lang_BANG_(this$,val){
return (this$["lang"] = val);
});
/**
 * Property.
 * 
 *   The onboundary property of the `speech.SpeechSynthesisUtterance`
 *   represents an event handler that will run when the spoken utterance
 *   a word or sentence boundary (when the boundary event fires.)
 * 
 *   `speechSynthesisUtteranceInstance.onboundary = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onboundary`
 */
speech.SpeechSynthesisUtterance.onboundary = (function speech$SpeechSynthesisUtterance$onboundary(this$){
return this$.onboundary();
});
/**
 * Property.
 * 
 *   The onboundary property of the `speech.SpeechSynthesisUtterance`
 *   represents an event handler that will run when the spoken utterance
 *   a word or sentence boundary (when the boundary event fires.)
 * 
 *   `speechSynthesisUtteranceInstance.onboundary = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onboundary`
 */
speech.SpeechSynthesisUtterance.set_onboundary_BANG_ = (function speech$SpeechSynthesisUtterance$set_onboundary_BANG_(this$,val){
return (this$["onboundary"] = val);
});
/**
 * Property.
 * 
 *   The onend property of the `speech.SpeechSynthesisUtterance` interface
 *   an event handler that will run when the utterance has finished
 *   spoken (when the end event fires.)
 * 
 *   `speechSynthesisUtteranceInstance.onend = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onend`
 */
speech.SpeechSynthesisUtterance.onend = (function speech$SpeechSynthesisUtterance$onend(this$){
return this$.onend();
});
/**
 * Property.
 * 
 *   The onend property of the `speech.SpeechSynthesisUtterance` interface
 *   an event handler that will run when the utterance has finished
 *   spoken (when the end event fires.)
 * 
 *   `speechSynthesisUtteranceInstance.onend = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onend`
 */
speech.SpeechSynthesisUtterance.set_onend_BANG_ = (function speech$SpeechSynthesisUtterance$set_onend_BANG_(this$,val){
return (this$["onend"] = val);
});
/**
 * Property.
 * 
 *   The onerror property of the `speech.SpeechSynthesisUtterance`
 *   represents an event handler that will run when an error occurs
 *   prevents the utterance from being succesfully spoken (when the
 *   event fires.)
 * 
 *   `speechSynthesisUtteranceInstance.onerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onerror`
 */
speech.SpeechSynthesisUtterance.onerror = (function speech$SpeechSynthesisUtterance$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The onerror property of the `speech.SpeechSynthesisUtterance`
 *   represents an event handler that will run when an error occurs
 *   prevents the utterance from being succesfully spoken (when the
 *   event fires.)
 * 
 *   `speechSynthesisUtteranceInstance.onerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onerror`
 */
speech.SpeechSynthesisUtterance.set_onerror_BANG_ = (function speech$SpeechSynthesisUtterance$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The onmark property of the `speech.SpeechSynthesisUtterance`
 *   represents an event handler that will run when the spoken utterance
 *   a named SSML mark tag (when the mark event fires.)
 * 
 *   `speechSynthesisUtteranceInstance.onmark = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onmark`
 */
speech.SpeechSynthesisUtterance.onmark = (function speech$SpeechSynthesisUtterance$onmark(this$){
return this$.onmark();
});
/**
 * Property.
 * 
 *   The onmark property of the `speech.SpeechSynthesisUtterance`
 *   represents an event handler that will run when the spoken utterance
 *   a named SSML mark tag (when the mark event fires.)
 * 
 *   `speechSynthesisUtteranceInstance.onmark = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onmark`
 */
speech.SpeechSynthesisUtterance.set_onmark_BANG_ = (function speech$SpeechSynthesisUtterance$set_onmark_BANG_(this$,val){
return (this$["onmark"] = val);
});
/**
 * Property.
 * 
 *   The onpause property of the `speech.SpeechSynthesisUtterance`
 *   represents an event handler that will run when the utterance
 *   paused part way through (when the pause event fires.)
 * 
 *   `speechSynthesisUtteranceInstance.onpause = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onpause`
 */
speech.SpeechSynthesisUtterance.onpause = (function speech$SpeechSynthesisUtterance$onpause(this$){
return this$.onpause();
});
/**
 * Property.
 * 
 *   The onpause property of the `speech.SpeechSynthesisUtterance`
 *   represents an event handler that will run when the utterance
 *   paused part way through (when the pause event fires.)
 * 
 *   `speechSynthesisUtteranceInstance.onpause = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onpause`
 */
speech.SpeechSynthesisUtterance.set_onpause_BANG_ = (function speech$SpeechSynthesisUtterance$set_onpause_BANG_(this$,val){
return (this$["onpause"] = val);
});
/**
 * Property.
 * 
 *   The onresume property of the `speech.SpeechSynthesisUtterance`
 *   represents an event handler that will run when a paused utterance
 *   resumed (when the resume event fires.)
 * 
 *   `speechSynthesisUtteranceInstance.onresume = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onresume`
 */
speech.SpeechSynthesisUtterance.onresume = (function speech$SpeechSynthesisUtterance$onresume(this$){
return this$.onresume();
});
/**
 * Property.
 * 
 *   The onresume property of the `speech.SpeechSynthesisUtterance`
 *   represents an event handler that will run when a paused utterance
 *   resumed (when the resume event fires.)
 * 
 *   `speechSynthesisUtteranceInstance.onresume = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onresume`
 */
speech.SpeechSynthesisUtterance.set_onresume_BANG_ = (function speech$SpeechSynthesisUtterance$set_onresume_BANG_(this$,val){
return (this$["onresume"] = val);
});
/**
 * Property.
 * 
 *   The onstart property of the `speech.SpeechSynthesisUtterance`
 *   represents an event handler that will run when the utterance
 *   begun to be spoken (when the start event fires.)
 * 
 *   `speechSynthesisUtteranceInstance.onstart = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onstart`
 */
speech.SpeechSynthesisUtterance.onstart = (function speech$SpeechSynthesisUtterance$onstart(this$){
return this$.onstart();
});
/**
 * Property.
 * 
 *   The onstart property of the `speech.SpeechSynthesisUtterance`
 *   represents an event handler that will run when the utterance
 *   begun to be spoken (when the start event fires.)
 * 
 *   `speechSynthesisUtteranceInstance.onstart = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/onstart`
 */
speech.SpeechSynthesisUtterance.set_onstart_BANG_ = (function speech$SpeechSynthesisUtterance$set_onstart_BANG_(this$,val){
return (this$["onstart"] = val);
});
/**
 * Property.
 * 
 *   The pitch property of the `speech.SpeechSynthesisUtterance` interface
 *   and sets the pitch at which the utterance will be spoken at.
 * 
 *   `// default 1
 *   speechSynthesisUtteranceInstance.pitch = 1.5;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/pitch`
 */
speech.SpeechSynthesisUtterance.pitch = (function speech$SpeechSynthesisUtterance$pitch(this$){
return this$.pitch();
});
/**
 * Property.
 * 
 *   The pitch property of the `speech.SpeechSynthesisUtterance` interface
 *   and sets the pitch at which the utterance will be spoken at.
 * 
 *   `// default 1
 *   speechSynthesisUtteranceInstance.pitch = 1.5;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/pitch`
 */
speech.SpeechSynthesisUtterance.set_pitch_BANG_ = (function speech$SpeechSynthesisUtterance$set_pitch_BANG_(this$,val){
return (this$["pitch"] = val);
});
/**
 * Property.
 * 
 *   The rate property of the `speech.SpeechSynthesisUtterance` interface
 *   and sets the speed at which the utterance will be spoken at.
 * 
 *   `var myRate = speechSynthesisUtteranceInstance.rate;
 *   speechSynthesisUtteranceInstance.rate = 1.5;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/rate`
 */
speech.SpeechSynthesisUtterance.rate = (function speech$SpeechSynthesisUtterance$rate(this$){
return this$.rate();
});
/**
 * Property.
 * 
 *   The rate property of the `speech.SpeechSynthesisUtterance` interface
 *   and sets the speed at which the utterance will be spoken at.
 * 
 *   `var myRate = speechSynthesisUtteranceInstance.rate;
 *   speechSynthesisUtteranceInstance.rate = 1.5;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/rate`
 */
speech.SpeechSynthesisUtterance.set_rate_BANG_ = (function speech$SpeechSynthesisUtterance$set_rate_BANG_(this$,val){
return (this$["rate"] = val);
});
/**
 * Property.
 * 
 *   The text property of the `speech.SpeechSynthesisUtterance` interface
 *   and sets the text that will be synthesised when the utterance
 *   spoken.
 * 
 *   `var myText = speechSynthesisUtteranceInstance.text;
 *   speechSynthesisUtteranceInstance.text = 'Hello I am speaking';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/text`
 */
speech.SpeechSynthesisUtterance.text = (function speech$SpeechSynthesisUtterance$text(this$){
return this$.text();
});
/**
 * Property.
 * 
 *   The text property of the `speech.SpeechSynthesisUtterance` interface
 *   and sets the text that will be synthesised when the utterance
 *   spoken.
 * 
 *   `var myText = speechSynthesisUtteranceInstance.text;
 *   speechSynthesisUtteranceInstance.text = 'Hello I am speaking';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/text`
 */
speech.SpeechSynthesisUtterance.set_text_BANG_ = (function speech$SpeechSynthesisUtterance$set_text_BANG_(this$,val){
return (this$["text"] = val);
});
/**
 * Property.
 * 
 *   The voice property of the `speech.SpeechSynthesisUtterance` interface
 *   and sets the voice that will be used to speak the utterance.
 * 
 *   `var myVoice = speechSynthesisUtteranceInstance.voice;
 *   speechSynthesisUtteranceInstance.voice = speechSynthesisVoiceInstance;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/voice`
 */
speech.SpeechSynthesisUtterance.voice = (function speech$SpeechSynthesisUtterance$voice(this$){
return this$.voice();
});
/**
 * Property.
 * 
 *   The voice property of the `speech.SpeechSynthesisUtterance` interface
 *   and sets the voice that will be used to speak the utterance.
 * 
 *   `var myVoice = speechSynthesisUtteranceInstance.voice;
 *   speechSynthesisUtteranceInstance.voice = speechSynthesisVoiceInstance;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/voice`
 */
speech.SpeechSynthesisUtterance.set_voice_BANG_ = (function speech$SpeechSynthesisUtterance$set_voice_BANG_(this$,val){
return (this$["voice"] = val);
});
/**
 * Property.
 * 
 *   The volume property of the `speech.SpeechSynthesisUtterance`
 *   gets and sets the volume that the utterance will be spoken at.
 * 
 *   `var myVolume = speechSynthesisUtteranceInstance.volume;
 *   speechSynthesisUtteranceInstance.volume = 0.5;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/volume`
 */
speech.SpeechSynthesisUtterance.volume = (function speech$SpeechSynthesisUtterance$volume(this$){
return this$.volume();
});
/**
 * Property.
 * 
 *   The volume property of the `speech.SpeechSynthesisUtterance`
 *   gets and sets the volume that the utterance will be spoken at.
 * 
 *   `var myVolume = speechSynthesisUtteranceInstance.volume;
 *   speechSynthesisUtteranceInstance.volume = 0.5;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesisUtterance/volume`
 */
speech.SpeechSynthesisUtterance.set_volume_BANG_ = (function speech$SpeechSynthesisUtterance$set_volume_BANG_(this$,val){
return (this$["volume"] = val);
});

//# sourceMappingURL=SpeechSynthesisUtterance.js.map?rel=1565798855411
