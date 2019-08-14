(ns speech.SpeechGrammar
  "The SpeechGrammar interface of the Web Speech API represents
  set of words or patterns of words that we want the recognition
  to recognize."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The SpeechGrammar constructor of the `speech.SpeechGrammar` interface creates a new SpeechGrammar object instance.

  None.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammar/SpeechGrammar`"
  js/SpeechGrammar)

(defn src
  "Property.

  The src property of the `speech.SpeechGrammar` interface sets
  returns a string containing the grammar from within in the SpeechGrammar

  `var myGrammar = speechGrammarInstance.src;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammar/src`"
  [this]
  (-> this (.src)))

(defn set-src!
  "Property.

  The src property of the `speech.SpeechGrammar` interface sets
  returns a string containing the grammar from within in the SpeechGrammar

  `var myGrammar = speechGrammarInstance.src;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammar/src`"
  [this val]
  (aset this "src" val))

(defn weight
  "Property.

  The optional weight property of the `speech.SpeechGrammar` interface
  and returns the weight of the SpeechGrammar object.

  `var myGrammarWeight = speechGrammarInstance.weight;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammar/weight`"
  [this]
  (-> this (.weight)))

(defn set-weight!
  "Property.

  The optional weight property of the `speech.SpeechGrammar` interface
  and returns the weight of the SpeechGrammar object.

  `var myGrammarWeight = speechGrammarInstance.weight;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/SpeechGrammar/weight`"
  [this val]
  (aset this "weight" val))

