(ns web.payments.PaymentAddress
  "The PaymentAddress interface of the Payment Request API is used
  store shipping or payment address information."
  (:refer-clojure :exclude []))

(defn to-json
  "Method.

  The toJSON() property of the `web.payments.PaymentAddress` interface
  a standard serializer that returns a JSON representation of the
  object's properties.

  `var json = PaymentAddress.toJSON()`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/toJSON`"
  [this ]
  (-> this (.toJSON)))

(defn address-line
  "Property.

  The addressLine read-only property of the `web.payments.PaymentAddress`
  is an array of `web.dom.DOMString` objects, each specifying a
  of the address that is not covered by one of the other properties
  PaymentAddress.

  `var paymentAddressLines = PaymentAddress.addressLine;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/addressLine`"
  [this]
  (-> this (.-addressLine)))

(defn country
  "Property.

  The country read-only property of the `web.payments.PaymentAddress`
  is a string identifying the address's country using the ISO 3166-1
  standard. The string is always in its canonical upper-case form.

  `var paymentCountry = PaymentAddress.country;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/country`"
  [this]
  (-> this (.-country)))

(defn set-country!
  "Property.

  The country read-only property of the `web.payments.PaymentAddress`
  is a string identifying the address's country using the ISO 3166-1
  standard. The string is always in its canonical upper-case form.

  `var paymentCountry = PaymentAddress.country;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/country`"
  [this val]
  (aset this "country" val))

(defn city
  "Property.

  The city read-only property of the `web.payments.PaymentAddress`
  returns a string containing the city or town portion of the address.

  `var paymentCity = PaymentAddress.city;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/city`"
  [this]
  (-> this (.-city)))

(defn dependent-locality
  "Property.

  The read-only dependentLocality property of the `web.payments.PaymentAddress`
  is a string containing a sublocality designation within a city,
  as a neighborhood, borough, district, or, in the United Kingdom,
  dependent locality. Also known as a post town.

  `var paymentDependentLocality = PaymentAddress.dependentLocality;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/dependentLocality`"
  [this]
  (-> this (.-dependentLocality)))

(defn set-dependent-locality!
  "Property.

  The read-only dependentLocality property of the `web.payments.PaymentAddress`
  is a string containing a sublocality designation within a city,
  as a neighborhood, borough, district, or, in the United Kingdom,
  dependent locality. Also known as a post town.

  `var paymentDependentLocality = PaymentAddress.dependentLocality;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/dependentLocality`"
  [this val]
  (aset this "dependentLocality" val))

(defn organization
  "Property.

  The organization read-only property of the `web.payments.PaymentAddress`
  returns a string containing the name of the organization, firm,
  or institution at the address.

  `var paymentOrganization = PaymentAddress.organization;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/organization`"
  [this]
  (-> this (.-organization)))

(defn phone
  "Property.

  The read-only phone property of the `web.payments.PaymentAddress`
  returns a string containing the telephone number of the recipient
  contact person.

  `var paymentPhone = PaymentAddress.phone;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/phone`"
  [this]
  (-> this (.-phone)))

(defn postal-code
  "Property.

  The postalCode read-only property of the `web.payments.PaymentAddress`
  returns a string containing a code used by a jurisdiction for
  routing, for example, the ZIP Code in the United States or the
  Index Number (PIN code) in India.

  `var paymentPostalCode = PaymentAddress.postalCode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/postalCode`"
  [this]
  (-> this (.-postalCode)))

(defn recipient
  "Property.

  The read-only recipient property of the `web.payments.PaymentAddress`
  returns a string containing the name of the recipient, purchaser,
  contact person at the payment address.

  `var paymentRecipient = PaymentAddress.recipient;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/recipient`"
  [this]
  (-> this (.-recipient)))

(defn set-recipient!
  "Property.

  The read-only recipient property of the `web.payments.PaymentAddress`
  returns a string containing the name of the recipient, purchaser,
  contact person at the payment address.

  `var paymentRecipient = PaymentAddress.recipient;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/recipient`"
  [this val]
  (aset this "recipient" val))

(defn region
  "Property.

  The read-only region property of the `web.payments.PaymentAddress`
  returns a string containing the top-level administrative subdivision
  the country in which the address is located. For example, this
  be a state, province, oblast, or prefecture.

  `var paymentRegion = PaymentAddress.region;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/region`"
  [this]
  (-> this (.-region)))

(defn region-code
  "Property.

  The regionCode read-only attribute of the `web.payments.PaymentAddress`
  returns a one-, two-, or three-alphanumeric code (`web.dom.DOMString`)
  the region of the address (e.g., \\\"CA\\\" for California, or \\\"11\\\"
  Lisbon, Portugal).

  `var regionCode = paymentAddress.regionCode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/regionCode`"
  [this]
  (-> this (.-regionCode)))

(defn sorting-code
  "Property.

  The sortingCode read-only property of the `web.payments.PaymentAddress`
  returns a string containing a postal sorting code such as is
  in France.

  `var sortingCode = PaymentAddress.sortingCode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/sortingCode`"
  [this]
  (-> this (.-sortingCode)))

(defn language-code
  "Property.

  The languageCode read-only property of the `web.payments.PaymentAddress`
  returns a string containing the BCP-47 language code for the

  `var paymentLanguageCode = PaymentAddress.languageCode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/languageCode`"
  [this]
  (-> this (.-languageCode)))

(defn set-language-code!
  "Property.

  The languageCode read-only property of the `web.payments.PaymentAddress`
  returns a string containing the BCP-47 language code for the

  `var paymentLanguageCode = PaymentAddress.languageCode;`

  See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/languageCode`"
  [this val]
  (aset this "languageCode" val))

