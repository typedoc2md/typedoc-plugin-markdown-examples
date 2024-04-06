[github-wiki-example](../wiki/Home) / [customer](../wiki/customer) / CustomerService

# Class: CustomerService

Service for managing customers.

## Constructors

### new CustomerService()

> **new CustomerService**(): [`CustomerService`](../wiki/customer.Class.CustomerService)

#### Returns

[`CustomerService`](../wiki/customer.Class.CustomerService)

## Properties

### customers

> **`private`** **customers**: [`CustomerAccount`](../wiki/customer.Class.CustomerAccount)[] = `[]`

#### Source

[customer.ts:118](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/04-typedoc-github-wiki-theme/src/customer.ts#L118)

## Methods

### addCustomer()

> **addCustomer**(`customer`, `contactInfo`, `billingInfo`): [`CustomerAccount`](../wiki/customer.Class.CustomerAccount)

Add a new customer.

#### Parameters

• **customer**: [`Customer`](../wiki/customer.Interface.Customer)

The customer to be added.

• **contactInfo**: [`CustomerContact`](../wiki/customer.Interface.CustomerContact)

The contact information for the customer.

• **billingInfo**: [`CustomerBilling`](../wiki/customer.Interface.CustomerBilling)

The billing information for the customer.

#### Returns

[`CustomerAccount`](../wiki/customer.Class.CustomerAccount)

The added customer account.

#### Source

[customer.ts:127](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/04-typedoc-github-wiki-theme/src/customer.ts#L127)

***

### getAllCustomers()

> **getAllCustomers**(): [`CustomerAccount`](../wiki/customer.Class.CustomerAccount)[]

Get all customer accounts.

#### Returns

[`CustomerAccount`](../wiki/customer.Class.CustomerAccount)[]

An array of all customer accounts.

#### Source

[customer.ts:145](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/04-typedoc-github-wiki-theme/src/customer.ts#L145)

***

### getCustomerById()

> **getCustomerById**(`customerId`): `undefined` \| [`CustomerAccount`](../wiki/customer.Class.CustomerAccount)

Get a customer account by ID.

#### Parameters

• **customerId**: `string`

The ID of the customer.

#### Returns

`undefined` \| [`CustomerAccount`](../wiki/customer.Class.CustomerAccount)

The customer account with the specified ID.

#### Source

[customer.ts:154](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/04-typedoc-github-wiki-theme/src/customer.ts#L154)
