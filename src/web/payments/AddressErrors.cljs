(ns web.payments.AddressErrors
  "The AddressErrors dictionary is used by the Payment Request API
  to report validation errors in a physical address (typically
  billing address or a shipping address)."
  (:refer-clojure :exclude []))

(defn address-line
  "Property.

  An object based on `web.payments.AddressErrors` includes an addressLine
  when validation of the address finds one or more errors in the
  of strings in the address's `addressLine`. The returned string
  the error and should offer suggestions for how to correct it.

  `var addressLineError = AddressErrors.addressLine;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/addressLine`"
  [this]
  (-> this (.-addressLine)))

(defn set-address-line!
  "Property.

  An object based on `web.payments.AddressErrors` includes an addressLine
  when validation of the address finds one or more errors in the
  of strings in the address's `addressLine`. The returned string
  the error and should offer suggestions for how to correct it.

  `var addressLineError = AddressErrors.addressLine;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/addressLine`"
  [this val]
  (aset this "addressLine" val))

(defn city
  "Property.

  [Read Only]

  An object based on `web.payments.AddressErrors` includes a city
  when validation of the address fails for the value given for
  address's `city` property. The returned string explains the error
  should offer suggestions for how to correct it.

  `var cityError = AddressErrors.city;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/city`"
  [this]
  (-> this (.-city)))

(defn country
  "Property.

  An object based on `web.payments.AddressErrors` includes a country
  if during validation of the address the specified value of `country`
  determined to be invalid. The value is a string describing the
  and should offer suggestions for how to correct it.

  `var countryError = AddressErrors.country;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/country`"
  [this]
  (-> this (.-country)))

(defn set-country!
  "Property.

  An object based on `web.payments.AddressErrors` includes a country
  if during validation of the address the specified value of `country`
  determined to be invalid. The value is a string describing the
  and should offer suggestions for how to correct it.

  `var countryError = AddressErrors.country;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/country`"
  [this val]
  (aset this "country" val))

(defn dependent-locality
  "Property.

  [Read Only]

  An object based on `web.payments.AddressErrors` includes a dependentLocality
  when the address's `dependentLocality` property couldn't be validated.
  returned string explains the error and should offer suggestions
  how to correct it.

  `var localityError = AddressErrors.dependentLocality;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/dependentLocality`"
  [this]
  (-> this (.-dependentLocality)))

(defn organization
  "Property.

  [Read Only]

  An object based on `web.payments.AddressErrors` includes an organization
  when the address's `organization` property couldn't be validated.
  returned string explains the error and should offer suggestions
  how to correct it.

  `var organizationError = AddressErrors.organization;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/organization`"
  [this]
  (-> this (.-organization)))

(defn phone
  "Property.

  [Read Only]

  An object based on `web.payments.AddressErrors` includes a phone
  when the address's `phone` property couldn't be validated. The
  string explains the error and should offer suggestions for how
  correct it.

  `var phoneError = AddressErrors.phone;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/phone`"
  [this]
  (-> this (.-phone)))

(defn postal-code
  "Property.

  [Read Only]

  An object based on `web.payments.AddressErrors` includes a postalCode
  when the address's `postalCode` property couldn't be validated.
  returned string explains the error and should offer suggestions
  how to correct it.

  `var postcodeError = AddressErrors.postCode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/postalCode`"
  [this]
  (-> this (.-postalCode)))

(defn recipient
  "Property.

  [Read Only]

  An object based on `web.payments.AddressErrors` includes a recipient
  when the address's `recipient` property couldn't be validated.
  returned string explains the error and should offer suggestions
  how to correct it.

  `var recipientError = AddressErrors.recipient;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/recipient`"
  [this]
  (-> this (.-recipient)))

(defn region
  "Property.

  [Read Only]

  An object based on `web.payments.AddressErrors` includes a region
  when the address's `region` property couldn't be validated. The
  string explains the error and should offer suggestions for how
  correct it.

  `var regionError = AddressErrors.region;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/region`"
  [this]
  (-> this (.-region)))

(defn region-code
  "Property.

  [Read Only]

  An object based on `web.payments.AddressErrors` includes a regionCode
  when the address's `regionCode` property couldn't be validated.
  returned string explains the error and should offer suggestions
  how to correct it.

  `var regionCodeError = AddressErrors.regionCode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/regionCode`"
  [this]
  (-> this (.-regionCode)))

(defn sorting-code
  "Property.

  [Read Only]

  An object based on `web.payments.AddressErrors` includes a sortingCode
  when the address's `sortingCode` property couldn't be validated.
  returned string explains the error and should offer suggestions
  how to correct it.

  `var sortingCodeError = AddressErrors.sortingCode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/sortingCode`"
  [this]
  (-> this (.-sortingCode)))

(defn language-code
  "Property.

  [Deprecated]

  An object based on `web.payments.AddressErrors` includes a languageCode
  when the address's `languageCode` property couldn't be validated.
  returned string explains the error and should offer suggestions
  how to correct it.

  `var languageError = AddressErrors.languageCode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/languageCode`"
  [this]
  (-> this (.-languageCode)))

(defn set-language-code!
  "Property.

  [Deprecated]

  An object based on `web.payments.AddressErrors` includes a languageCode
  when the address's `languageCode` property couldn't be validated.
  returned string explains the error and should offer suggestions
  how to correct it.

  `var languageError = AddressErrors.languageCode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/languageCode`"
  [this val]
  (aset this "languageCode" val))

