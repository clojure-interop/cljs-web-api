// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.AddressErrors');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   An object based on `web.AddressErrors` includes an addressLine
 *   when validation of the address finds one or more errors in the
 *   of strings in the address's `web.addressLine`. The returned string
 *   the error and should offer suggestions for how to correct it.
 * 
 *   `var addressLineError = AddressErrors.addressLine;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/addressLine`
 */
web.AddressErrors.address_line = (function web$AddressErrors$address_line(this$){
return this$.addressLine();
});
/**
 * Property.
 * 
 *   An object based on `web.AddressErrors` includes an addressLine
 *   when validation of the address finds one or more errors in the
 *   of strings in the address's `web.addressLine`. The returned string
 *   the error and should offer suggestions for how to correct it.
 * 
 *   `var addressLineError = AddressErrors.addressLine;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/addressLine`
 */
web.AddressErrors.set_address_line_BANG_ = (function web$AddressErrors$set_address_line_BANG_(this$,val){
return (this$["addressLine"] = val);
});
/**
 * Property.
 * 
 *   An object based on `web.AddressErrors` includes a city property
 *   validation of the address fails for the value given for the address's
 *   property. The returned string explains the error and should offer
 *   for how to correct it.
 * 
 *   `var cityError = AddressErrors.city;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/city`
 */
web.AddressErrors.city = (function web$AddressErrors$city(this$){
return this$.city();
});
/**
 * Property.
 * 
 *   An object based on `web.AddressErrors` includes a country property
 *   during validation of the address the specified value of `web.country`
 *   determined to be invalid. The value is a string describing the
 *   and should offer suggestions for how to correct it.
 * 
 *   `var countryError = AddressErrors.country;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/country`
 */
web.AddressErrors.country = (function web$AddressErrors$country(this$){
return this$.country();
});
/**
 * Property.
 * 
 *   An object based on `web.AddressErrors` includes a country property
 *   during validation of the address the specified value of `web.country`
 *   determined to be invalid. The value is a string describing the
 *   and should offer suggestions for how to correct it.
 * 
 *   `var countryError = AddressErrors.country;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/country`
 */
web.AddressErrors.set_country_BANG_ = (function web$AddressErrors$set_country_BANG_(this$,val){
return (this$["country"] = val);
});
/**
 * Property.
 * 
 *   An object based on `web.AddressErrors` includes a dependentLocality
 *   when the address's `web.dependentLocality` property couldn't
 *   validated. The returned string explains the error and should
 *   suggestions for how to correct it.
 * 
 *   `var localityError = AddressErrors.dependentLocality;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/dependentLocality`
 */
web.AddressErrors.dependent_locality = (function web$AddressErrors$dependent_locality(this$){
return this$.dependentLocality();
});
/**
 * Property.
 * 
 *   An object based on `web.AddressErrors` includes a languageCode
 *   when the address's `web.languageCode` property couldn't be validated.
 *   returned string explains the error and should offer suggestions
 *   how to correct it.
 * 
 *   `var languageError = AddressErrors.languageCode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/languageCode`
 */
web.AddressErrors.language_code = (function web$AddressErrors$language_code(this$){
return this$.languageCode();
});
/**
 * Property.
 * 
 *   An object based on `web.AddressErrors` includes a languageCode
 *   when the address's `web.languageCode` property couldn't be validated.
 *   returned string explains the error and should offer suggestions
 *   how to correct it.
 * 
 *   `var languageError = AddressErrors.languageCode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/languageCode`
 */
web.AddressErrors.set_language_code_BANG_ = (function web$AddressErrors$set_language_code_BANG_(this$,val){
return (this$["languageCode"] = val);
});
/**
 * Property.
 * 
 *   An object based on `web.AddressErrors` includes an organization
 *   when the address's `web.organization` property couldn't be validated.
 *   returned string explains the error and should offer suggestions
 *   how to correct it.
 * 
 *   `var organizationError = AddressErrors.organization;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/organization`
 */
web.AddressErrors.organization = (function web$AddressErrors$organization(this$){
return this$.organization();
});
/**
 * Property.
 * 
 *   An object based on `web.AddressErrors` includes a phone property
 *   the address's `web.phone` property couldn't be validated. The
 *   string explains the error and should offer suggestions for how
 *   correct it.
 * 
 *   `var phoneError = AddressErrors.phone;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/phone`
 */
web.AddressErrors.phone = (function web$AddressErrors$phone(this$){
return this$.phone();
});
/**
 * Property.
 * 
 *   An object based on `web.AddressErrors` includes a postalCode
 *   when the address's `web.postalCode` property couldn't be validated.
 *   returned string explains the error and should offer suggestions
 *   how to correct it.
 * 
 *   `var postcodeError = AddressErrors.postCode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/postalCode`
 */
web.AddressErrors.postal_code = (function web$AddressErrors$postal_code(this$){
return this$.postalCode();
});
/**
 * Property.
 * 
 *   An object based on `web.AddressErrors` includes a recipient property
 *   the address's `web.recipient` property couldn't be validated.
 *   returned string explains the error and should offer suggestions
 *   how to correct it.
 * 
 *   `var recipientError = AddressErrors.recipient;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/recipient`
 */
web.AddressErrors.recipient = (function web$AddressErrors$recipient(this$){
return this$.recipient();
});
/**
 * Property.
 * 
 *   An object based on `web.AddressErrors` includes a region property
 *   the address's `web.region` property couldn't be validated. The
 *   string explains the error and should offer suggestions for how
 *   correct it.
 * 
 *   `var regionError = AddressErrors.region;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/region`
 */
web.AddressErrors.region = (function web$AddressErrors$region(this$){
return this$.region();
});
/**
 * Property.
 * 
 *   An object based on `web.AddressErrors` includes a regionCode
 *   when the address's `web.regionCode` property couldn't be validated.
 *   returned string explains the error and should offer suggestions
 *   how to correct it.
 * 
 *   `var regionCodeError = AddressErrors.regionCode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/regionCode`
 */
web.AddressErrors.region_code = (function web$AddressErrors$region_code(this$){
return this$.regionCode();
});
/**
 * Property.
 * 
 *   An object based on `web.AddressErrors` includes a sortingCode
 *   when the address's `web.sortingCode` property couldn't be validated.
 *   returned string explains the error and should offer suggestions
 *   how to correct it.
 * 
 *   `var sortingCodeError = AddressErrors.sortingCode;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/AddressErrors/sortingCode`
 */
web.AddressErrors.sorting_code = (function web$AddressErrors$sorting_code(this$){
return this$.sortingCode();
});

//# sourceMappingURL=AddressErrors.js.map?rel=1565798853551
