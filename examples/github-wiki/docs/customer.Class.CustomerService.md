[github-wiki-example](../wiki/Home) / [customer](../wiki/customer) / CustomerService

# Class: CustomerService

Defined in: [customer.ts:143](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L143)

Service for managing customers.

## Constructors

### Constructor

> **new CustomerService**(): `CustomerService`

#### Returns

`CustomerService`

## Methods

### addCustomer()

> **addCustomer**(`customer`, `contactInfo`, `billingInfo`): [`CustomerAccount`](../wiki/customer.Class.CustomerAccount)

Defined in: [customer.ts:153](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L153)

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

***

### getAllCustomers()

> **getAllCustomers**(): [`CustomerAccount`](../wiki/customer.Class.CustomerAccount)[]

Defined in: [customer.ts:171](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L171)

Get all customer accounts.

#### Returns

[`CustomerAccount`](../wiki/customer.Class.CustomerAccount)[]

An array of all customer accounts.

***

### getCustomerById()

> **getCustomerById**(`customerId`): [`CustomerAccount`](../wiki/customer.Class.CustomerAccount)

Defined in: [customer.ts:180](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L180)

Get a customer account by ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `customerId` | `string` | The ID of the customer. |

#### Returns

[`CustomerAccount`](../wiki/customer.Class.CustomerAccount)

The customer account with the specified ID.
