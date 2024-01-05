[single-page-modules-example](README.md) / customer

# customer

This module contains types and services related to customer management.

## Contents

- [Enumerations](customer.md#enumerations)
    - [CustomerType](customer.md#customertype)
- [Classes](customer.md#classes)
    - [CustomerAccount](customer.md#customeraccount)
    - [CustomerService](customer.md#customerservice)
- [Interfaces](customer.md#interfaces)
    - [Customer](customer.md#customer-1)
    - [CustomerBilling](customer.md#customerbilling)
    - [CustomerContact](customer.md#customercontact)
    - [CustomerOrderHistory](customer.md#customerorderhistory)

## Enumerations

### CustomerType

Enum representing different customer types.

#### Enumeration Members

##### Premium

> **Premium**: `"Premium"`

###### Source

customer.ts:13

##### Regular

> **Regular**: `"Regular"`

###### Source

customer.ts:12

## Classes

### CustomerAccount

Class representing a customer account.

#### Constructors

##### new CustomerAccount(customer, contactInfo, billingInfo)

> **new CustomerAccount**(`customer`, `contactInfo`, `billingInfo`): [`CustomerAccount`](customer.md#customeraccount)

###### Parameters

• **customer**: [`Customer`](customer.md#customer-1)

• **contactInfo**: [`CustomerContact`](customer.md#customercontact)

• **billingInfo**: [`CustomerBilling`](customer.md#customerbilling)

###### Returns

[`CustomerAccount`](customer.md#customeraccount)

###### Source

customer.ts:61

#### Properties

##### billingInfo

> **`private`** **billingInfo**: [`CustomerBilling`](customer.md#customerbilling)

###### Source

customer.ts:58

##### contactInfo

> **`private`** **contactInfo**: [`CustomerContact`](customer.md#customercontact)

###### Source

customer.ts:57

##### customer

> **`private`** **customer**: [`Customer`](customer.md#customer-1)

###### Source

customer.ts:56

##### orderHistory

> **`private`** **orderHistory**: [`CustomerOrderHistory`](customer.md#customerorderhistory)[]

###### Source

customer.ts:59

#### Methods

##### addOrderToHistory()

> **addOrderToHistory**(`order`): `void`

Add an order to the customer's order history.

###### Parameters

• **order**: [`CustomerOrderHistory`](customer.md#customerorderhistory)

The order to be added to the history.

###### Returns

`void`

###### Source

customer.ts:100

##### getBillingInfo()

> **getBillingInfo**(): [`CustomerBilling`](customer.md#customerbilling)

Get the customer billing information.

###### Returns

[`CustomerBilling`](customer.md#customerbilling)

The customer billing information.

###### Source

customer.ts:92

##### getContactInfo()

> **getContactInfo**(): [`CustomerContact`](customer.md#customercontact)

Get the customer contact information.

###### Returns

[`CustomerContact`](customer.md#customercontact)

The customer contact information.

###### Source

customer.ts:84

##### getCustomer()

> **getCustomer**(): [`Customer`](customer.md#customer-1)

Get the customer information.

###### Returns

[`Customer`](customer.md#customer-1)

The customer information.

###### Source

customer.ts:76

##### getOrderHistory()

> **getOrderHistory**(): [`CustomerOrderHistory`](customer.md#customerorderhistory)[]

Get the customer's order history.

###### Returns

[`CustomerOrderHistory`](customer.md#customerorderhistory)[]

An array of the customer's order history.

###### Source

customer.ts:108

***

### CustomerService

Service for managing customers.

#### Constructors

##### new CustomerService()

> **new CustomerService**(): [`CustomerService`](customer.md#customerservice)

###### Returns

[`CustomerService`](customer.md#customerservice)

#### Properties

##### customers

> **`private`** **customers**: [`CustomerAccount`](customer.md#customeraccount)[] = `[]`

###### Source

customer.ts:118

#### Methods

##### addCustomer()

> **addCustomer**(`customer`, `contactInfo`, `billingInfo`): [`CustomerAccount`](customer.md#customeraccount)

Add a new customer.

###### Parameters

• **customer**: [`Customer`](customer.md#customer-1)

The customer to be added.

• **contactInfo**: [`CustomerContact`](customer.md#customercontact)

The contact information for the customer.

• **billingInfo**: [`CustomerBilling`](customer.md#customerbilling)

The billing information for the customer.

###### Returns

[`CustomerAccount`](customer.md#customeraccount)

The added customer account.

###### Source

customer.ts:127

##### getAllCustomers()

> **getAllCustomers**(): [`CustomerAccount`](customer.md#customeraccount)[]

Get all customer accounts.

###### Returns

[`CustomerAccount`](customer.md#customeraccount)[]

An array of all customer accounts.

###### Source

customer.ts:145

##### getCustomerById()

> **getCustomerById**(`customerId`): `undefined` \| [`CustomerAccount`](customer.md#customeraccount)

Get a customer account by ID.

###### Parameters

• **customerId**: `string`

The ID of the customer.

###### Returns

`undefined` \| [`CustomerAccount`](customer.md#customeraccount)

The customer account with the specified ID.

###### Source

customer.ts:154

## Interfaces

### Customer

Interface representing a customer.

#### Properties

##### address

> **address**: `string`

###### Source

customer.ts:23

##### customerId

> **customerId**: `string`

###### Source

customer.ts:20

##### email

> **email**: `string`

###### Source

customer.ts:22

##### name

> **name**: `string`

###### Source

customer.ts:21

##### type

> **type**: [`CustomerType`](customer.md#customertype)

###### Source

customer.ts:24

***

### CustomerBilling

Interface representing customer billing information.

#### Properties

##### creditCardNumber

> **creditCardNumber**: `string`

###### Source

customer.ts:39

##### expirationDate

> **expirationDate**: `string`

###### Source

customer.ts:40

***

### CustomerContact

Interface representing customer contact information.

#### Properties

##### email

> **email**: `string`

###### Source

customer.ts:31

##### phone?

> **phone**?: `string`

###### Source

customer.ts:32

***

### CustomerOrderHistory

Interface representing a customer order history.

#### Properties

##### orderDate

> **orderDate**: `Date`

###### Source

customer.ts:48

##### orderId

> **orderId**: `string`

###### Source

customer.ts:47

##### totalAmount

> **totalAmount**: `number`

###### Source

customer.ts:49

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
