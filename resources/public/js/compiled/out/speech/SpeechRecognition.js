// Compiled by ClojureScript 1.9.946 {}
goog.provide('speech.SpeechRecognition');
goog.require('cljs.core');
/**
 * Constructor.
 * 
 *   The SpeechRecognition() constructor creates a new `speech.SpeechRecognition` object instance.
 * 
 *   None.
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/SpeechRecognition`
 */
speech.SpeechRecognition.constructor$ = SpeechRecognition;
/**
 * Method.
 * 
 *   The abort() method of the Web Speech API stops the speech recognition
 *   from listening to incoming audio, and doesn't attempt to return
 *   `speech.SpeechRecognitionResult`.
 * 
 *   `mySpeechRecognition.abort();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/abort`
 */
speech.SpeechRecognition.abort = (function speech$SpeechRecognition$abort(this$){
return this$.abort();
});
/**
 * Method.
 * 
 *   The start() method of the Web Speech API starts the speech recognition
 *   listening to incoming audio with intent to recognize grammars
 *   with the current `speech.SpeechRecognition`.
 * 
 *   `mySpeechRecognition.start();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/start`
 */
speech.SpeechRecognition.start = (function speech$SpeechRecognition$start(this$){
return this$.start();
});
/**
 * Method.
 * 
 *   The stop() method of the Web Speech API stops the speech recognition
 *   from listening to incoming audio, and attempts to return a `speech.SpeechRecognitionResult`
 *   the audio captured so far.
 * 
 *   `mySpeechRecognition.stop();`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/stop`
 */
speech.SpeechRecognition.stop = (function speech$SpeechRecognition$stop(this$){
return this$.stop();
});
/**
 * Property.
 * 
 *   The continuous property of the `speech.SpeechRecognition` interface
 *   whether continuous results are returned for each recognition,
 *   only a single result.
 * 
 *   `var myContinuous = mySpeechRecognition.continuous;
 *   mySpeechRecognition.continuous = true;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/continuous`
 */
speech.SpeechRecognition.continuous = (function speech$SpeechRecognition$continuous(this$){
return this$.continuous();
});
/**
 * Property.
 * 
 *   The continuous property of the `speech.SpeechRecognition` interface
 *   whether continuous results are returned for each recognition,
 *   only a single result.
 * 
 *   `var myContinuous = mySpeechRecognition.continuous;
 *   mySpeechRecognition.continuous = true;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/continuous`
 */
speech.SpeechRecognition.set_continuous_BANG_ = (function speech$SpeechRecognition$set_continuous_BANG_(this$,val){
return (this$["continuous"] = val);
});
/**
 * Property.
 * 
 *   The grammars property of the `speech.SpeechRecognition` interface
 *   and sets a collection of `speech.SpeechGrammar` objects that
 *   the grammars that will be understood by the current SpeechRecognition.
 * 
 *   `var myGrammars = mySpeechRecognition.grammars;
 *   mySpeechRecognition.grammars = mySpeechGrammarList;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/grammars`
 */
speech.SpeechRecognition.grammars = (function speech$SpeechRecognition$grammars(this$){
return this$.grammars();
});
/**
 * Property.
 * 
 *   The grammars property of the `speech.SpeechRecognition` interface
 *   and sets a collection of `speech.SpeechGrammar` objects that
 *   the grammars that will be understood by the current SpeechRecognition.
 * 
 *   `var myGrammars = mySpeechRecognition.grammars;
 *   mySpeechRecognition.grammars = mySpeechGrammarList;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/grammars`
 */
speech.SpeechRecognition.set_grammars_BANG_ = (function speech$SpeechRecognition$set_grammars_BANG_(this$,val){
return (this$["grammars"] = val);
});
/**
 * Property.
 * 
 *   The interimResults property of the `speech.SpeechRecognition`
 *   controls whether interim results should be returned (true) or
 *   (false.) Interim results are results that are not yet final (e.g.
 *   `speech.SpeechRecognitionResult.isFinal` property is false.)
 * 
 *   `var myInterimResult = mySpeechRecognition.interimResults;
 *   mySpeechRecognition.interimResults = false;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/interimResults`
 */
speech.SpeechRecognition.interim_results = (function speech$SpeechRecognition$interim_results(this$){
return this$.interimResults();
});
/**
 * Property.
 * 
 *   The interimResults property of the `speech.SpeechRecognition`
 *   controls whether interim results should be returned (true) or
 *   (false.) Interim results are results that are not yet final (e.g.
 *   `speech.SpeechRecognitionResult.isFinal` property is false.)
 * 
 *   `var myInterimResult = mySpeechRecognition.interimResults;
 *   mySpeechRecognition.interimResults = false;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/interimResults`
 */
speech.SpeechRecognition.set_interim_results_BANG_ = (function speech$SpeechRecognition$set_interim_results_BANG_(this$,val){
return (this$["interimResults"] = val);
});
/**
 * Property.
 * 
 *   The lang property of the `speech.SpeechRecognition` interface
 *   and sets the language of the current SpeechRecognition. If not
 *   this defaults to the HTML lang attribute value, or the user agent's
 *   setting if that isn't set either.
 * 
 *   `var myLang = mySpeechRecognition.lang;
 *   mySpeechRecognition.lang = 'en-US';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/lang`
 */
speech.SpeechRecognition.lang = (function speech$SpeechRecognition$lang(this$){
return this$.lang();
});
/**
 * Property.
 * 
 *   The lang property of the `speech.SpeechRecognition` interface
 *   and sets the language of the current SpeechRecognition. If not
 *   this defaults to the HTML lang attribute value, or the user agent's
 *   setting if that isn't set either.
 * 
 *   `var myLang = mySpeechRecognition.lang;
 *   mySpeechRecognition.lang = 'en-US';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/lang`
 */
speech.SpeechRecognition.set_lang_BANG_ = (function speech$SpeechRecognition$set_lang_BANG_(this$,val){
return (this$["lang"] = val);
});
/**
 * Property.
 * 
 *   The maxAlternatives property of the `speech.SpeechRecognition`
 *   sets the maximum number of `speech.SpeechRecognitionAlternative`s
 *   per `speech.SpeechRecognitionResult`.
 * 
 *   `var myMaxAlternativeNumber = mySpeechRecognition.maxAlternatives;
 *   mySpeechRecognition.maxAlternatives = 2;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/maxAlternatives`
 */
speech.SpeechRecognition.max_alternatives = (function speech$SpeechRecognition$max_alternatives(this$){
return this$.maxAlternatives();
});
/**
 * Property.
 * 
 *   The maxAlternatives property of the `speech.SpeechRecognition`
 *   sets the maximum number of `speech.SpeechRecognitionAlternative`s
 *   per `speech.SpeechRecognitionResult`.
 * 
 *   `var myMaxAlternativeNumber = mySpeechRecognition.maxAlternatives;
 *   mySpeechRecognition.maxAlternatives = 2;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/maxAlternatives`
 */
speech.SpeechRecognition.set_max_alternatives_BANG_ = (function speech$SpeechRecognition$set_max_alternatives_BANG_(this$,val){
return (this$["maxAlternatives"] = val);
});
/**
 * Property.
 * 
 *   The onaudioend property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when the user agent has finished
 *   audio (when the audioend event fires.)
 * 
 *   `mySpeechRecognition.onaudioend = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onaudioend`
 */
speech.SpeechRecognition.onaudioend = (function speech$SpeechRecognition$onaudioend(this$){
return this$.onaudioend();
});
/**
 * Property.
 * 
 *   The onaudioend property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when the user agent has finished
 *   audio (when the audioend event fires.)
 * 
 *   `mySpeechRecognition.onaudioend = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onaudioend`
 */
speech.SpeechRecognition.set_onaudioend_BANG_ = (function speech$SpeechRecognition$set_onaudioend_BANG_(this$,val){
return (this$["onaudioend"] = val);
});
/**
 * Property.
 * 
 *   The onaudiostart property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when the user agent has started
 *   capture audio (when the audiostart event fires.)
 * 
 *   `mySpeechRecognition.onaudiostart = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onaudiostart`
 */
speech.SpeechRecognition.onaudiostart = (function speech$SpeechRecognition$onaudiostart(this$){
return this$.onaudiostart();
});
/**
 * Property.
 * 
 *   The onaudiostart property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when the user agent has started
 *   capture audio (when the audiostart event fires.)
 * 
 *   `mySpeechRecognition.onaudiostart = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onaudiostart`
 */
speech.SpeechRecognition.set_onaudiostart_BANG_ = (function speech$SpeechRecognition$set_onaudiostart_BANG_(this$,val){
return (this$["onaudiostart"] = val);
});
/**
 * Property.
 * 
 *   The onend property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when the speech recognition service
 *   disconnected (when the end event fires.)
 * 
 *   `mySpeechRecognition.onend = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onend`
 */
speech.SpeechRecognition.onend = (function speech$SpeechRecognition$onend(this$){
return this$.onend();
});
/**
 * Property.
 * 
 *   The onend property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when the speech recognition service
 *   disconnected (when the end event fires.)
 * 
 *   `mySpeechRecognition.onend = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onend`
 */
speech.SpeechRecognition.set_onend_BANG_ = (function speech$SpeechRecognition$set_onend_BANG_(this$,val){
return (this$["onend"] = val);
});
/**
 * Property.
 * 
 *   The onerror property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when a speech recognition error
 *   (when the error event fires.)
 * 
 *   `mySpeechRecognition.onerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onerror`
 */
speech.SpeechRecognition.onerror = (function speech$SpeechRecognition$onerror(this$){
return this$.onerror();
});
/**
 * Property.
 * 
 *   The onerror property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when a speech recognition error
 *   (when the error event fires.)
 * 
 *   `mySpeechRecognition.onerror = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onerror`
 */
speech.SpeechRecognition.set_onerror_BANG_ = (function speech$SpeechRecognition$set_onerror_BANG_(this$,val){
return (this$["onerror"] = val);
});
/**
 * Property.
 * 
 *   The onnomatch property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when the speech recognition service
 *   a final result with no significant recognition (when the nomatch
 *   fires.)
 * 
 *   `mySpeechRecognition.onnomatch = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onnomatch`
 */
speech.SpeechRecognition.onnomatch = (function speech$SpeechRecognition$onnomatch(this$){
return this$.onnomatch();
});
/**
 * Property.
 * 
 *   The onnomatch property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when the speech recognition service
 *   a final result with no significant recognition (when the nomatch
 *   fires.)
 * 
 *   `mySpeechRecognition.onnomatch = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onnomatch`
 */
speech.SpeechRecognition.set_onnomatch_BANG_ = (function speech$SpeechRecognition$set_onnomatch_BANG_(this$,val){
return (this$["onnomatch"] = val);
});
/**
 * Property.
 * 
 *   The onresult property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when the speech recognition service
 *   a result — a word or phrase has been positively recognized and
 *   has been communicated back to the app (when the `web.result`
 * 
 *   `mySpeechRecognition.onresult = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onresult`
 */
speech.SpeechRecognition.onresult = (function speech$SpeechRecognition$onresult(this$){
return this$.onresult();
});
/**
 * Property.
 * 
 *   The onresult property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when the speech recognition service
 *   a result — a word or phrase has been positively recognized and
 *   has been communicated back to the app (when the `web.result`
 * 
 *   `mySpeechRecognition.onresult = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onresult`
 */
speech.SpeechRecognition.set_onresult_BANG_ = (function speech$SpeechRecognition$set_onresult_BANG_(this$,val){
return (this$["onresult"] = val);
});
/**
 * Property.
 * 
 *   The onsoundend property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when any sound — recognisable
 *   or not — has stopped being detected (when the soundend event
 * 
 *   `mySpeechRecognition.onsoundend = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onsoundend`
 */
speech.SpeechRecognition.onsoundend = (function speech$SpeechRecognition$onsoundend(this$){
return this$.onsoundend();
});
/**
 * Property.
 * 
 *   The onsoundend property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when any sound — recognisable
 *   or not — has stopped being detected (when the soundend event
 * 
 *   `mySpeechRecognition.onsoundend = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onsoundend`
 */
speech.SpeechRecognition.set_onsoundend_BANG_ = (function speech$SpeechRecognition$set_onsoundend_BANG_(this$,val){
return (this$["onsoundend"] = val);
});
/**
 * Property.
 * 
 *   The onsoundstart property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when any sound — recognisable
 *   or not — has been detected (when the soundstart event fires.)
 * 
 *   `mySpeechRecognition.onsoundstart = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onsoundstart`
 */
speech.SpeechRecognition.onsoundstart = (function speech$SpeechRecognition$onsoundstart(this$){
return this$.onsoundstart();
});
/**
 * Property.
 * 
 *   The onsoundstart property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when any sound — recognisable
 *   or not — has been detected (when the soundstart event fires.)
 * 
 *   `mySpeechRecognition.onsoundstart = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onsoundstart`
 */
speech.SpeechRecognition.set_onsoundstart_BANG_ = (function speech$SpeechRecognition$set_onsoundstart_BANG_(this$,val){
return (this$["onsoundstart"] = val);
});
/**
 * Property.
 * 
 *   The onspeechend property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when speech recognised by the
 *   recognition service has stopped being detected (when the speechend
 *   fires.)
 * 
 *   `mySpeechRecognition.onspeechend = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onspeechend`
 */
speech.SpeechRecognition.onspeechend = (function speech$SpeechRecognition$onspeechend(this$){
return this$.onspeechend();
});
/**
 * Property.
 * 
 *   The onspeechend property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when speech recognised by the
 *   recognition service has stopped being detected (when the speechend
 *   fires.)
 * 
 *   `mySpeechRecognition.onspeechend = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onspeechend`
 */
speech.SpeechRecognition.set_onspeechend_BANG_ = (function speech$SpeechRecognition$set_onspeechend_BANG_(this$,val){
return (this$["onspeechend"] = val);
});
/**
 * Property.
 * 
 *   The onspeechstart property of the `speech.SpeechRecognition`
 *   represents an event handler that will run when sound recognised
 *   the speech recognition service as speech has been detected (when
 *   speechstart event fires.)
 * 
 *   `mySpeechRecognition.onspeechstart = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onspeechstart`
 */
speech.SpeechRecognition.onspeechstart = (function speech$SpeechRecognition$onspeechstart(this$){
return this$.onspeechstart();
});
/**
 * Property.
 * 
 *   The onspeechstart property of the `speech.SpeechRecognition`
 *   represents an event handler that will run when sound recognised
 *   the speech recognition service as speech has been detected (when
 *   speechstart event fires.)
 * 
 *   `mySpeechRecognition.onspeechstart = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onspeechstart`
 */
speech.SpeechRecognition.set_onspeechstart_BANG_ = (function speech$SpeechRecognition$set_onspeechstart_BANG_(this$,val){
return (this$["onspeechstart"] = val);
});
/**
 * Property.
 * 
 *   The onstart property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when the speech recognition service
 *   begun listening to incoming audio with intent to recognize grammars
 *   with the current SpeechRecognition (when the start event fires.)
 * 
 *   `mySpeechRecognition.onstart = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onstart`
 */
speech.SpeechRecognition.onstart = (function speech$SpeechRecognition$onstart(this$){
return this$.onstart();
});
/**
 * Property.
 * 
 *   The onstart property of the `speech.SpeechRecognition` interface
 *   an event handler that will run when the speech recognition service
 *   begun listening to incoming audio with intent to recognize grammars
 *   with the current SpeechRecognition (when the start event fires.)
 * 
 *   `mySpeechRecognition.onstart = function() { ... };`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/onstart`
 */
speech.SpeechRecognition.set_onstart_BANG_ = (function speech$SpeechRecognition$set_onstart_BANG_(this$,val){
return (this$["onstart"] = val);
});
/**
 * Property.
 * 
 *   The serviceURI property of the `speech.SpeechRecognition` interface
 *   the location of the speech recognition service used by the current
 *   to handle the actual recognition. The default is the user agent's
 *   speech service.
 * 
 *   `var myServiceURI = mySpeechRecognition.serviceURI;
 *   mySpeechRecognition.serviceURI = 'path/to/my/service/';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/serviceURI`
 */
speech.SpeechRecognition.service_uri = (function speech$SpeechRecognition$service_uri(this$){
return this$.serviceURI();
});
/**
 * Property.
 * 
 *   The serviceURI property of the `speech.SpeechRecognition` interface
 *   the location of the speech recognition service used by the current
 *   to handle the actual recognition. The default is the user agent's
 *   speech service.
 * 
 *   `var myServiceURI = mySpeechRecognition.serviceURI;
 *   mySpeechRecognition.serviceURI = 'path/to/my/service/';`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechRecognition/serviceURI`
 */
speech.SpeechRecognition.set_service_uri_BANG_ = (function speech$SpeechRecognition$set_service_uri_BANG_(this$,val){
return (this$["serviceURI"] = val);
});

//# sourceMappingURL=SpeechRecognition.js.map?rel=1565798854453
