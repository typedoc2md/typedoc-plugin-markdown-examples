**default-options-example** • [Readme](../../README.md) \| API

***

[default-options-example](../../modules.md) / [customer](../README.md) / CustomerService

# Class: CustomerService

Service for managing customers.

## Contents

- [Constructors](CustomerService.md#constructors)
    - [new CustomerService](CustomerService.md#constructors)
- [Properties](CustomerService.md#properties)
    - [customers](CustomerService.md#customers)
- [Methods](CustomerService.md#methods)
    - [addCustomer](CustomerService.md#addcustomer)
    - [getAllCustomers](CustomerService.md#getallcustomers)
    - [getCustomerById](CustomerService.md#getcustomerbyid)

## Constructors

### new CustomerService()

> **new CustomerService**(): [`CustomerService`](CustomerService.md)

#### Returns

[`CustomerService`](CustomerService.md)

## Properties

### customers

> **`private`** **customers**: [`CustomerAccount`](CustomerAccount.md)[] = `[]`

#### Source

customer.ts:118

## Methods

### addCustomer()

> **addCustomer**(`customer`, `contactInfo`, `billingInfo`): [`CustomerAccount`](CustomerAccount.md)

Add a new customer.

#### Parameters

• **customer**: [`Customer`](../interfaces/Customer.md)

The customer to be added.

• **contactInfo**: [`CustomerContact`](../interfaces/CustomerContact.md)

The contact information for the customer.

• **billingInfo**: [`CustomerBilling`](../interfaces/CustomerBilling.md)

The billing information for the customer.

#### Returns

[`CustomerAccount`](CustomerAccount.md)

The added customer account.

#### Source

customer.ts:127

***

### getAllCustomers()

> **getAllCustomers**(): [`CustomerAccount`](CustomerAccount.md)[]

Get all customer accounts.

#### Returns

[`CustomerAccount`](CustomerAccount.md)[]

An array of all customer accounts.

#### Source

customer.ts:145

***

### getCustomerById()

> **getCustomerById**(`customerId`): `undefined` \| [`CustomerAccount`](CustomerAccount.md)

Get a customer account by ID.

#### Parameters

• **customerId**: `string`

The ID of the customer.

#### Returns

`undefined` \| [`CustomerAccount`](CustomerAccount.md)

The customer account with the specified ID.

#### Source

customer.ts:154

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)