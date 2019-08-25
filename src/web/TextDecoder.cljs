(ns web.TextDecoder
  "The TextDecoder interface represents a decoder for a specific
  that is a specific character encoding, like utf-8, iso-8859-2,
  cp1261, gbk, etc. A decoder takes a stream of bytes as input
  emits a stream of code points. For a more scalable, non-native
  see StringView – a C-like representation of strings based on
  arrays."
  (:refer-clojure :exclude []))

(def constructor
  "Constructor.

  The TextDecoder() constructor returns a newly created `web.TextDecoder` object for the encoding specified in parameter.

  utfLabelOptional
  Is a `web.dom.DOMString`, defaulting to \\\"utf-8\\\", containing the label of the encoder. Each label is associated with a specific encoding type:



  Possible values of utfLabel
  Encoding




  \\\"unicode-1-1-utf-8\\\", \\\"utf-8\\\", \\\"utf8\\\"
  'utf-8'


  \\\"866\\\", \\\"cp866\\\", \\\"csibm866\\\", \\\"ibm866\\\"
  'ibm866'


  \\\"csisolatin2\\\", \\\"iso-8859-2\\\", \\\"iso-ir-101\\\", \\\"iso8859-2\\\", \\\"iso88592\\\", \\\"iso_8859-2\\\", \\\"iso_8859-2:1987\\\", \\\"l2\\\", \\\"latin2\\\"
  'iso-8859-2'


  \\\"csisolatin3\\\", \\\"iso-8859-3\\\", \\\"iso-ir-109\\\", \\\"iso8859-3\\\", \\\"iso88593\\\", \\\"iso_8859-3\\\", \\\"iso_8859-3:1988\\\", \\\"l3\\\", \\\"latin3\\\"
  'iso-8859-3'


  \\\"csisolatin4\\\", \\\"iso-8859-4\\\", \\\"iso-ir-110\\\", \\\"iso8859-4\\\", \\\"iso88594\\\", \\\"iso_8859-4\\\", \\\"iso_8859-4:1988\\\", \\\"l4\\\", \\\"latin4\\\"
  'iso-8859-4'


  \\\"csisolatincyrillic\\\", \\\"cyrillic\\\", \\\"iso-8859-5\\\", \\\"iso-ir-144\\\", \\\"iso88595\\\", \\\"iso_8859-5\\\", \\\"iso_8859-5:1988\\\"
  'iso-8859-5'


  \\\"arabic\\\", \\\"asmo-708\\\", \\\"csiso88596e\\\", \\\"csiso88596i\\\", \\\"csisolatinarabic\\\", \\\"ecma-114\\\", \\\"iso-8859-6\\\", \\\"iso-8859-6-e\\\", \\\"iso-8859-6-i\\\", \\\"iso-ir-127\\\", \\\"iso8859-6\\\", \\\"iso88596\\\", \\\"iso_8859-6\\\", \\\"iso_8859-6:1987\\\"
  'iso-8859-6'


  \\\"csisolatingreek\\\", \\\"ecma-118\\\", \\\"elot_928\\\", \\\"greek\\\", \\\"greek8\\\", \\\"iso-8859-7\\\", \\\"iso-ir-126\\\", \\\"iso8859-7\\\", \\\"iso88597\\\", \\\"iso_8859-7\\\", \\\"iso_8859-7:1987\\\", \\\"sun_eu_greek\\\"
  'iso-8859-7'


  \\\"csiso88598e\\\", \\\"csisolatinhebrew\\\", \\\"hebrew\\\", \\\"iso-8859-8\\\", \\\"iso-8859-8-e\\\", \\\"iso-ir-138\\\", \\\"iso8859-8\\\", \\\"iso88598\\\", \\\"iso_8859-8\\\", \\\"iso_8859-8:1988\\\", \\\"visual\\\"
  'iso-8859-8'


  \\\"csiso88598i\\\", \\\"iso-8859-8-i\\\", \\\"logical\\\"
  'iso-8859-8i'


  \\\"csisolatin6\\\", \\\"iso-8859-10\\\", \\\"iso-ir-157\\\", \\\"iso8859-10\\\", \\\"iso885910\\\", \\\"l6\\\", \\\"latin6\\\"
  'iso-8859-10'


  \\\"iso-8859-13\\\", \\\"iso8859-13\\\", \\\"iso885913\\\"
  'iso-8859-13'


  \\\"iso-8859-14\\\", \\\"iso8859-14\\\", \\\"iso885914\\\"
  'iso-8859-14'


  \\\"csisolatin9\\\", \\\"iso-8859-15\\\", \\\"iso8859-15\\\", \\\"iso885915\\\", \\\"l9\\\", \\\"latin9\\\"
  'iso-8859-15'


  \\\"iso-8859-16\\\"
  'iso-8859-16'


  \\\"cskoi8r\\\", \\\"koi\\\", \\\"koi8\\\", \\\"koi8-r\\\", \\\"koi8_r\\\"
  'koi8-r'


  \\\"koi8-u\\\"
  'koi8-u'


  \\\"csmacintosh\\\", \\\"mac\\\", \\\"macintosh\\\", \\\"x-mac-roman\\\"
  'macintosh'


  \\\"dos-874\\\", \\\"iso-8859-11\\\", \\\"iso8859-11\\\", \\\"iso885911\\\", \\\"tis-620\\\", \\\"windows-874\\\"
  'windows-874'


  \\\"cp1250\\\", \\\"windows-1250\\\", \\\"x-cp1250\\\"
  'windows-1250'


  \\\"cp1251\\\", \\\"windows-1251\\\", \\\"x-cp1251\\\"
  'windows-1251'


  \\\"ansi_x3.4-1968\\\", \\\"ascii\\\", \\\"cp1252\\\", \\\"cp819\\\", \\\"csisolatin1\\\", \\\"ibm819\\\", \\\"iso-8859-1\\\", \\\"iso-ir-100\\\", \\\"iso8859-1\\\", \\\"iso88591\\\", \\\"iso_8859-1\\\", \\\"iso_8859-1:1987\\\", \\\"l1\\\", \\\"latin1\\\", \\\"us-ascii\\\", \\\"windows-1252\\\", \\\"x-cp1252\\\"
  'windows-1252'


  \\\"cp1253\\\", \\\"windows-1253\\\", \\\"x-cp1253\\\"
  'windows-1253'


  \\\"cp1254\\\", \\\"csisolatin5\\\", \\\"iso-8859-9\\\", \\\"iso-ir-148\\\", \\\"iso8859-9\\\", \\\"iso88599\\\", \\\"iso_8859-9\\\", \\\"iso_8859-9:1989\\\", \\\"l5\\\", \\\"latin5\\\", \\\"windows-1254\\\", \\\"x-cp1254\\\"
  'windows-1254'


  \\\"cp1255\\\", \\\"windows-1255\\\", \\\"x-cp1255\\\"
  'windows-1255'


  \\\"cp1256\\\", \\\"windows-1256\\\", \\\"x-cp1256\\\"
  'windows-1256'


  \\\"cp1257\\\", \\\"windows-1257\\\", \\\"x-cp1257\\\"
  'windows-1257'


  \\\"cp1258\\\", \\\"windows-1258\\\", \\\"x-cp1258\\\"
  'windows-1258'


  \\\"x-mac-cyrillic\\\", \\\"x-mac-ukrainian\\\"
  'x-mac-cyrillic'


  \\\"chinese\\\", \\\"csgb2312\\\", \\\"csiso58gb231280\\\", \\\"gb2312\\\", \\\"gb_2312\\\", \\\"gb_2312-80\\\", \\\"gbk\\\", \\\"iso-ir-58\\\", \\\"x-gbk\\\"
  'gbk'


  \\\"gb18030\\\"
  'gb18030'


  \\\"hz-gb-2312\\\"
  'hz-gb-2312'


  \\\"big5\\\", \\\"big5-hkscs\\\", \\\"cn-big5\\\", \\\"csbig5\\\", \\\"x-x-big5\\\"
  'big5'


  \\\"cseucpkdfmtjapanese\\\", \\\"euc-jp\\\", \\\"x-euc-jp\\\"
  'euc-jp'



  \\\"csiso2022jp\\\", \\\"iso-2022-jp\\\"


  Note: Firefox used to accept iso-2022-jp-2 sequences silently when an iso-2022-jp decoder was instantiated, however this was removed in version 56 to simplify the API, as no other browsers support it and no pages seem to use it.


  'iso-2022-jp'


  \\\"csshiftjis\\\", \\\"ms_kanji\\\", \\\"shift-jis\\\", \\\"shift_jis\\\", \\\"sjis\\\", \\\"windows-31j\\\", \\\"x-sjis\\\"
  'shift-jis'


  \\\"cseuckr\\\", \\\"csksc56011987\\\", \\\"euc-kr\\\", \\\"iso-ir-149\\\", \\\"korean\\\", \\\"ks_c_5601-1987\\\", \\\"ks_c_5601-1989\\\", \\\"ksc5601\\\", \\\"ksc_5601\\\", \\\"windows-949\\\"
  'euc-kr'


  \\\"csiso2022kr\\\", \\\"iso-2022-kr\\\"
  'iso-2022-kr'


  \\\"utf-16be\\\"
  'utf-16be'


  \\\"utf-16\\\", \\\"utf-16le\\\"
  'utf-16le'


  \\\"x-user-defined\\\"
  'x-user-defined'


  \\\"iso-2022-cn\\\", \\\"iso-2022-cn-ext\\\"
  'replacement'




  optionsOptional
  Is a TextDecoderOptions dictionary with the property:

  fatal
  A Boolean flag indicating if the `TextDecoder.decode()` method must throw a `web.dom.DOMException` with the \\\"EncodingError\\\" value when an coding error is found. It defaults to false.

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/TextDecoder`"
  js/TextDecoder)

(defn decode
  "Method.

  The TextDecoder.prototype.decode() method returns a `web.dom.DOMString`
  the text, given in parameters, decoded with the specific method
  that TextDecoder object.

  `b1 = decoder.decode(buffer, options);
  b2 = decoder.decode(buffer);
  b3 = decoder.decode();`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/decode`"
  [this & args]
  (apply (-> this .-decode) (concat [this] args)))

(defn encoding
  "Property.

  The TextDecoder.prototype.encoding read-only property returns
  `web.dom.DOMString` containing the name of the decoding algorithm
  by the specific decoder.

  `var b = decoder.decoding;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/encoding`"
  [this]
  (-> this (.encoding)))

