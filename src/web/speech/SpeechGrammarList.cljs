(ns web.speech.SpeechGrammarList
  "The SpeechGrammarList interface of the Web Speech API represents
  list of `web.speech.SpeechGrammar` objects containing words or
  of words that we want the recognition service to recognize."
  (:refer-clojure :exclude []))

(defn item
  "Method.

  [Experimental]

  The item getter of the `web.speech.SpeechGrammarList` interface
  a standard getter — it allows individual `web.speech.SpeechGrammar`
  to be retrieved from the SpeechGrammarList using array syntax.

  `var myFirstGrammar = speechGrammarListInstance[0];`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammarList/item`"
  [this ]
  (-> this (.item)))

(defn add-from-uri
  "Method.

  [Experimental]

  The addFromURI() method of the `web.speech.SpeechGrammarList`
  takes a grammar present at a specific URI and adds it to the
  as a new `web.speech.SpeechGrammar` object.

  `speechGrammarListInstance.addFromURI(src,weight);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammarList/addFromURI`"
  [this src weight]
  (-> this (.addFromURI src weight)))

(defn add-from-string
  "Method.

  [Experimental]

  The addFromString() method of the `web.speech.SpeechGrammarList`
  takes a grammar present in a specific `web.dom.DOMString` within
  code base (e.g. stored in a variable) and adds it to the SpeechGrammarList
  a new `web.speech.SpeechGrammar` object.

  `speechGrammarListInstance.addFromString(string,weight);`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammarList/addFromString`"
  [this string weight]
  (-> this (.addFromString string weight)))

(defn length
  "Property.

  [Read Only]
  [Experimental]

  The length read-only property of the `web.speech.SpeechGrammarList`
  returns the number of `web.speech.SpeechGrammar` objects contained
  the `web.speech.SpeechGrammarList`.

  `var myListLength = speechGrammarListInstance.length;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammarList/length`"
  [this]
  (-> this (.-length)))

