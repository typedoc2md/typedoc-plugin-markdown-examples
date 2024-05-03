[**Default Options Example**](../../README.md) • **Docs**

***

[Default Options Example](../../modules.md) / [CustomerModule](../README.md) / CustomerService

# Class: CustomerService

Service for managing customers.

## Constructors

### new CustomerService()

> **new CustomerService**(): [`CustomerService`](CustomerService.md)

#### Returns

[`CustomerService`](CustomerService.md)

## Properties

### customers

> `private` **customers**: [`CustomerAccount`](CustomerAccount.md)[] = `[]`

#### Source

[customer.ts:144](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/customer.ts#L144)

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

[customer.ts:153](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/customer.ts#L153)

***

### getAllCustomers()

> **getAllCustomers**(): [`CustomerAccount`](CustomerAccount.md)[]

Get all customer accounts.

#### Returns

[`CustomerAccount`](CustomerAccount.md)[]

An array of all customer accounts.

#### Source

[customer.ts:171](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/customer.ts#L171)

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

[customer.ts:180](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/customer.ts#L180)
