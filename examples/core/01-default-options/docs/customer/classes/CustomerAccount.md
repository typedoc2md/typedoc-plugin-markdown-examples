**default-options-example** • [Readme](../../README.md) \| API

***

[default-options-example](../../modules.md) / [customer](../README.md) / CustomerAccount

# Class: CustomerAccount

Class representing a customer account.

## Contents

- [Constructors](CustomerAccount.md#constructors)
    - [new CustomerAccount](CustomerAccount.md#constructors)
- [Properties](CustomerAccount.md#properties)
    - [billingInfo](CustomerAccount.md#billinginfo)
    - [contactInfo](CustomerAccount.md#contactinfo)
    - [customer](CustomerAccount.md#customer)
    - [orderHistory](CustomerAccount.md#orderhistory)
- [Methods](CustomerAccount.md#methods)
    - [addOrderToHistory](CustomerAccount.md#addordertohistory)
    - [getBillingInfo](CustomerAccount.md#getbillinginfo)
    - [getContactInfo](CustomerAccount.md#getcontactinfo)
    - [getCustomer](CustomerAccount.md#getcustomer)
    - [getOrderHistory](CustomerAccount.md#getorderhistory)

## Constructors

### new CustomerAccount(customer, contactInfo, billingInfo)

> **new CustomerAccount**(`customer`, `contactInfo`, `billingInfo`): [`CustomerAccount`](CustomerAccount.md)

#### Parameters

• **customer**: [`Customer`](../interfaces/Customer.md)

• **contactInfo**: [`CustomerContact`](../interfaces/CustomerContact.md)

• **billingInfo**: [`CustomerBilling`](../interfaces/CustomerBilling.md)

#### Returns

[`CustomerAccount`](CustomerAccount.md)

#### Source

customer.ts:61

## Properties

### billingInfo

> **`private`** **billingInfo**: [`CustomerBilling`](../interfaces/CustomerBilling.md)

#### Source

customer.ts:58

***

### contactInfo

> **`private`** **contactInfo**: [`CustomerContact`](../interfaces/CustomerContact.md)

#### Source

customer.ts:57

***

### customer

> **`private`** **customer**: [`Customer`](../interfaces/Customer.md)

#### Source

customer.ts:56

***

### orderHistory

> **`private`** **orderHistory**: [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

#### Source

customer.ts:59

## Methods

### addOrderToHistory()

> **addOrderToHistory**(`order`): `void`

Add an order to the customer's order history.

#### Parameters

• **order**: [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)

The order to be added to the history.

#### Returns

`void`

#### Source

customer.ts:100

***

### getBillingInfo()

> **getBillingInfo**(): [`CustomerBilling`](../interfaces/CustomerBilling.md)

Get the customer billing information.

#### Returns

[`CustomerBilling`](../interfaces/CustomerBilling.md)

The customer billing information.

#### Source

customer.ts:92

***

### getContactInfo()

> **getContactInfo**(): [`CustomerContact`](../interfaces/CustomerContact.md)

Get the customer contact information.

#### Returns

[`CustomerContact`](../interfaces/CustomerContact.md)

The customer contact information.

#### Source

customer.ts:84

***

### getCustomer()

> **getCustomer**(): [`Customer`](../interfaces/Customer.md)

Get the customer information.

#### Returns

[`Customer`](../interfaces/Customer.md)

The customer information.

#### Source

customer.ts:76

***

### getOrderHistory()

> **getOrderHistory**(): [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

Get the customer's order history.

#### Returns

[`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

An array of the customer's order history.

#### Source

customer.ts:108

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
