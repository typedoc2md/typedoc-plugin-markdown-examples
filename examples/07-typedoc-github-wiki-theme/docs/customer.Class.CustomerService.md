[github-wiki-example](../wiki/Home) / [customer](../wiki/customer) / CustomerService

# Class: CustomerService

Service for managing customers.

## Constructors

### new CustomerService()

> **new CustomerService**(): [`CustomerService`](../wiki/customer.Class.CustomerService)

#### Returns

[`CustomerService`](../wiki/customer.Class.CustomerService)

## Methods

### addCustomer()

> **addCustomer**(`customer`, `contactInfo`, `billingInfo`): [`CustomerAccount`](../wiki/customer.Class.CustomerAccount)

Add a new customer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `customer` | [`Customer`](../wiki/customer.Interface.Customer) | The customer to be added. |
| `contactInfo` | [`CustomerContact`](../wiki/customer.Interface.CustomerContact) | The contact information for the customer. |
| `billingInfo` | [`CustomerBilling`](../wiki/customer.Interface.CustomerBilling) | The billing information for the customer. |

#### Returns

[`CustomerAccount`](../wiki/customer.Class.CustomerAccount)

The added customer account.

#### Defined in

customer.ts:153

***

### getAllCustomers()

> **getAllCustomers**(): [`CustomerAccount`](../wiki/customer.Class.CustomerAccount)[]

Get all customer accounts.

#### Returns

[`CustomerAccount`](../wiki/customer.Class.CustomerAccount)[]

An array of all customer accounts.

#### Defined in

customer.ts:171

***

### getCustomerById()

> **getCustomerById**(`customerId`): [`CustomerAccount`](../wiki/customer.Class.CustomerAccount)

Get a customer account by ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `customerId` | `string` | The ID of the customer. |

#### Returns

[`CustomerAccount`](../wiki/customer.Class.CustomerAccount)

The customer account with the specified ID.

#### Defined in

customer.ts:180
