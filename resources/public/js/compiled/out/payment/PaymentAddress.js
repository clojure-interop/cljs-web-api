// Compiled by ClojureScript 1.9.946 {}
goog.provide('payment.PaymentAddress');
goog.require('cljs.core');
/**
 * Method.
 * 
 *   The toJSON() property of the `payment.PaymentAddress` interface
 *   a standard serializer that returns a JSON representation of the
 *   object's properties.
 * 
 *   `var json = PaymentAddress.toJSON()`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/toJSON`
 */
payment.PaymentAddress.to_json = (function payment$PaymentAddress$to_json(this$){
return this$.toJSON();
});
/**
 * Property.
 * 
 *   The addressLine read-only property of the `payment.PaymentAddress`
 *   is an array of `dom.DOMString` objects, each specifying a line
 *   the address that is not covered by one of the other properties
 *   PaymentAddress.
 * 
 *   `var paymentAddressLines = PaymentAddress.addressLine;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/addressLine`
 */
payment.PaymentAddress.address_line = (function payment$PaymentAddress$address_line(this$){
return this$.addressLine();
});
/**
 * Property.
 * 
 *   The city read-only property of the `payment.PaymentAddress` interface
 *   a string containing the city or town portion of the address.
 * 
 *   `var paymentCity = PaymentAddress.city;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/city`
 */
payment.PaymentAddress.city = (function payment$PaymentAddress$city(this$){
return this$.city();
});
/**
 * Property.
 * 
 *   The country read-only property of the `payment.PaymentAddress`
 *   is a string identifying the address's country using the ISO 3166-1
 *   standard. The string is always in its canonical upper-case form.
 * 
 *   `var paymentCountry = PaymentAddress.country;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/country`
 */
payment.PaymentAddress.country = (function payment$PaymentAddress$country(this$){
return this$.country();
});
/**
 * Property.
 * 
 *   The country read-only property of the `payment.PaymentAddress`
 *   is a string identifying the address's country using the ISO 3166-1
 *   standard. The string is always in its canonical upper-case form.
 * 
 *   `var paymentCountry = PaymentAddress.country;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/country`
 */
payment.PaymentAddress.set_country_BANG_ = (function payment$PaymentAddress$set_country_BANG_(this$,val){
return (this$["country"] = val);
});
/**
 * Property.
 * 
 *   The read-only dependentLocality property of the `payment.PaymentAddress`
 *   is a string containing a sublocality designation within a city,
 *   as a neighborhood, borough, district, or, in the United Kingdom,
 *   dependent locality. Also known as a post town.
 * 
 *   `var paymentDependentLocality = PaymentAddress.dependentLocality;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/dependentLocality`
 */
payment.PaymentAddress.dependent_locality = (function payment$PaymentAddress$dependent_locality(this$){
return this$.dependentLocality();
});
/**
 * Property.
 * 
 *   The read-only dependentLocality property of the `payment.PaymentAddress`
 *   is a string containing a sublocality designation within a city,
 *   as a neighborhood, borough, district, or, in the United Kingdom,
 *   dependent locality. Also known as a post town.
 * 
 *   `var paymentDependentLocality = PaymentAddress.dependentLocality;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/dependentLocality`
 */
payment.PaymentAddress.set_dependent_locality_BANG_ = (function payment$PaymentAddress$set_dependent_locality_BANG_(this$,val){
return (this$["dependentLocality"] = val);
});
/**
 * Property.
 * 
 *   The organization read-only property of the `payment.PaymentAddress`
 *   returns a string containing the name of the organization, firm,
 *   or institution at the address.
 * 
 *   `var paymentOrganization = PaymentAddress.organization;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/organization`
 */
payment.PaymentAddress.organization = (function payment$PaymentAddress$organization(this$){
return this$.organization();
});
/**
 * Property.
 * 
 *   The read-only phone property of the `payment.PaymentAddress`
 *   returns a string containing the telephone number of the recipient
 *   contact person.
 * 
 *   `var paymentPhone = PaymentAddress.phone;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/phone`
 */
payment.PaymentAddress.phone = (function payment$PaymentAddress$phone(this$){
return this$.phone();
});
/**
 * Property.
 * 
 *   The postalCode read-only property of the `payment.PaymentAddress`
 *   returns a string containing a code used by a jurisdiction for
 *   routing, for example, the ZIP Code in the United States or the
 *   Index Number (PIN code) in India.
 * 
 *   `var paymentPostalCode = PaymentAddress.postalCode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/postalCode`
 */
payment.PaymentAddress.postal_code = (function payment$PaymentAddress$postal_code(this$){
return this$.postalCode();
});
/**
 * Property.
 * 
 *   The read-only recipient property of the `payment.PaymentAddress`
 *   returns a string containing the name of the recipient, purchaser,
 *   contact person at the payment address.
 * 
 *   `var paymentRecipient = PaymentAddress.recipient;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/recipient`
 */
payment.PaymentAddress.recipient = (function payment$PaymentAddress$recipient(this$){
return this$.recipient();
});
/**
 * Property.
 * 
 *   The read-only recipient property of the `payment.PaymentAddress`
 *   returns a string containing the name of the recipient, purchaser,
 *   contact person at the payment address.
 * 
 *   `var paymentRecipient = PaymentAddress.recipient;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/recipient`
 */
payment.PaymentAddress.set_recipient_BANG_ = (function payment$PaymentAddress$set_recipient_BANG_(this$,val){
return (this$["recipient"] = val);
});
/**
 * Property.
 * 
 *   The read-only region property of the `payment.PaymentAddress`
 *   returns a string containing the top-level administrative subdivision
 *   the country in which the address is located. For example, this
 *   be a state, province, oblast, or prefecture.
 * 
 *   `var paymentRegion = PaymentAddress.region;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/region`
 */
payment.PaymentAddress.region = (function payment$PaymentAddress$region(this$){
return this$.region();
});
/**
 * Property.
 * 
 *   The regionCode read-only attribute of the `payment.PaymentAddress`
 *   returns a one-, two-, or three-alphanumeric code (`dom.DOMString`)
 *   the region of the address (e.g., \"CA\" for California, or \"11\"
 *   Lisbon, Portugal).
 * 
 *   `var regionCode = paymentAddress.regionCode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/regionCode`
 */
payment.PaymentAddress.region_code = (function payment$PaymentAddress$region_code(this$){
return this$.regionCode();
});
/**
 * Property.
 * 
 *   The sortingCode read-only property of the `payment.PaymentAddress`
 *   returns a string containing a postal sorting code such as is
 *   in France.
 * 
 *   `var sortingCode = PaymentAddress.sortingCode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/sortingCode`
 */
payment.PaymentAddress.sorting_code = (function payment$PaymentAddress$sorting_code(this$){
return this$.sortingCode();
});
/**
 * Property.
 * 
 *   The languageCode read-only property of the `payment.PaymentAddress`
 *   returns a string containing the BCP-47 language code for the
 * 
 *   `var paymentLanguageCode = PaymentAddress.languageCode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/languageCode`
 */
payment.PaymentAddress.language_code = (function payment$PaymentAddress$language_code(this$){
return this$.languageCode();
});
/**
 * Property.
 * 
 *   The languageCode read-only property of the `payment.PaymentAddress`
 *   returns a string containing the BCP-47 language code for the
 * 
 *   `var paymentLanguageCode = PaymentAddress.languageCode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PaymentAddress/languageCode`
 */
payment.PaymentAddress.set_language_code_BANG_ = (function payment$PaymentAddress$set_language_code_BANG_(this$,val){
return (this$["languageCode"] = val);
});

//# sourceMappingURL=PaymentAddress.js.map?rel=1565798839994
