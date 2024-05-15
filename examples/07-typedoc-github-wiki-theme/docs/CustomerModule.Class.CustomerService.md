[github-wiki-example](../wiki/Home) / [CustomerModule](../wiki/CustomerModule) / CustomerService

# Class: CustomerService

Service for managing customers.

## Constructors

### new CustomerService()

> **new CustomerService**(): [`CustomerService`](../wiki/CustomerModule.Class.CustomerService)

#### Returns

[`CustomerService`](../wiki/CustomerModule.Class.CustomerService)

## Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `customers` | `private` | [`CustomerAccount`](../wiki/CustomerModule.Class.CustomerAccount)[] | `[]` |

## Methods

### addCustomer()

> **addCustomer**(`customer`, `contactInfo`, `billingInfo`): [`CustomerAccount`](../wiki/CustomerModule.Class.CustomerAccount)

Add a new customer.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `customer` | [`Customer`](../wiki/CustomerModule.Interface.Customer) | The customer to be added. |
| `contactInfo` | [`CustomerContact`](../wiki/CustomerModule.Interface.CustomerContact) | The contact information for the customer. |
| `billingInfo` | [`CustomerBilling`](../wiki/CustomerModule.Interface.CustomerBilling) | The billing information for the customer. |

#### Returns

[`CustomerAccount`](../wiki/CustomerModule.Class.CustomerAccount)

The added customer account.

#### Source

[customer.ts:153](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/customer.ts#L153)

***

### getAllCustomers()

> **getAllCustomers**(): [`CustomerAccount`](../wiki/CustomerModule.Class.CustomerAccount)[]

Get all customer accounts.

#### Returns

[`CustomerAccount`](../wiki/CustomerModule.Class.CustomerAccount)[]

An array of all customer accounts.

#### Source

[customer.ts:171](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/customer.ts#L171)

***

### getCustomerById()

> **getCustomerById**(`customerId`): `undefined` \| [`CustomerAccount`](../wiki/CustomerModule.Class.CustomerAccount)

Get a customer account by ID.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | The ID of the customer. |

#### Returns

`undefined` \| [`CustomerAccount`](../wiki/CustomerModule.Class.CustomerAccount)

The customer account with the specified ID.

#### Source

[customer.ts:180](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/customer.ts#L180)
