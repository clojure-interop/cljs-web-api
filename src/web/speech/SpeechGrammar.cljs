(ns web.speech.SpeechGrammar
  "The SpeechGrammar interface of the Web Speech API represents
  set of words or patterns of words that we want the recognition
  to recognize."
  (:refer-clojure :exclude []))

(defn src
  "Property.

  [Experimental]

  The src property of the `web.speech.SpeechGrammar` interface
  and returns a string containing the grammar from within in the
  object.

  `var myGrammar = speechGrammarInstance.src;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammar/src`"
  [this]
  (-> this (.-src)))

(defn set-src!
  "Property.

  [Experimental]

  The src property of the `web.speech.SpeechGrammar` interface
  and returns a string containing the grammar from within in the
  object.

  `var myGrammar = speechGrammarInstance.src;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammar/src`"
  [this val]
  (aset this "src" val))

(defn weight
  "Property.

  [Experimental]

  The optional weight property of the `web.speech.SpeechGrammar`
  sets and returns the weight of the SpeechGrammar object.

  `var myGrammarWeight = speechGrammarInstance.weight;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammar/weight`"
  [this]
  (-> this (.-weight)))

(defn set-weight!
  "Property.

  [Experimental]

  The optional weight property of the `web.speech.SpeechGrammar`
  sets and returns the weight of the SpeechGrammar object.

  `var myGrammarWeight = speechGrammarInstance.weight;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammar/weight`"
  [this val]
  (aset this "weight" val))

