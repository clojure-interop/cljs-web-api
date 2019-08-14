// Compiled by ClojureScript 1.9.946 {}
goog.provide('web.PayerErrors');
goog.require('cljs.core');
/**
 * Property.
 * 
 *   The name property is included in a `web.PayerErrors` object if
 *   `web.payerName` returned in the response couldn't be validated.
 *   value is a string explaining the problem. If the payer's name
 *   successfully, the name property is omitted from the PayerErrors
 * 
 *   `payerName = payerErrors.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PayerErrors/name`
 */
web.PayerErrors.name = (function web$PayerErrors$name(this$){
return this$.name();
});
/**
 * Property.
 * 
 *   The name property is included in a `web.PayerErrors` object if
 *   `web.payerName` returned in the response couldn't be validated.
 *   value is a string explaining the problem. If the payer's name
 *   successfully, the name property is omitted from the PayerErrors
 * 
 *   `payerName = payerErrors.name;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PayerErrors/name`
 */
web.PayerErrors.set_name_BANG_ = (function web$PayerErrors$set_name_BANG_(this$,val){
return (this$["name"] = val);
});
/**
 * Property.
 * 
 *   The phone property is found in a `web.PayerErrors` object if
 *   `web.payerName` returned in the response couldn't be validated
 *   a valid phone number. The value of this property is a string
 *   the problem. If the payer's phone number validated successfully,
 *   phone property is omitted from the PayerErrors object.
 * 
 *   `payerPhone = payerErrors.phone;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PayerErrors/phone`
 */
web.PayerErrors.phone = (function web$PayerErrors$phone(this$){
return this$.phone();
});
/**
 * Property.
 * 
 *   The phone property is found in a `web.PayerErrors` object if
 *   `web.payerName` returned in the response couldn't be validated
 *   a valid phone number. The value of this property is a string
 *   the problem. If the payer's phone number validated successfully,
 *   phone property is omitted from the PayerErrors object.
 * 
 *   `payerPhone = payerErrors.phone;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PayerErrors/phone`
 */
web.PayerErrors.set_phone_BANG_ = (function web$PayerErrors$set_phone_BANG_(this$,val){
return (this$["phone"] = val);
});
/**
 * Property.
 * 
 *   The email property is included in a `web.PayerErrors` object
 *   the `payment.PaymentResponse.payerEmail` property failed validation;
 *   this case, the property should contain a string describing how
 *   correct the problem. If the payer's email address passed validation,
 *   property is not included in the PayerErrors object.
 * 
 *   `payerEmail = payerErrors.email;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PayerErrors/email`
 */
web.PayerErrors.email = (function web$PayerErrors$email(this$){
return this$.email();
});
/**
 * Property.
 * 
 *   The email property is included in a `web.PayerErrors` object
 *   the `payment.PaymentResponse.payerEmail` property failed validation;
 *   this case, the property should contain a string describing how
 *   correct the problem. If the payer's email address passed validation,
 *   property is not included in the PayerErrors object.
 * 
 *   `payerEmail = payerErrors.email;`
 * 
 *   See also: `https://developer.mozilla.org/en-US/docs/Web/API/PayerErrors/email`
 */
web.PayerErrors.set_email_BANG_ = (function web$PayerErrors$set_email_BANG_(this$,val){
return (this$["email"] = val);
});

//# sourceMappingURL=PayerErrors.js.map?rel=1565798859383
