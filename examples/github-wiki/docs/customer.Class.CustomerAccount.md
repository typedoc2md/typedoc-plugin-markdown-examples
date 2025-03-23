[github-wiki-example](../wiki/Home) / [customer](../wiki/customer) / CustomerAccount

# Class: CustomerAccount

Defined in: [customer.ts:76](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L76)

Class representing a customer account.
Manages and integrates different aspects of customer data and interactions with the business.

## Constructors

### Constructor

> **new CustomerAccount**(`customer`, `contactInfo`, `billingInfo`): `CustomerAccount`

Defined in: [customer.ts:88](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L88)

Constructs a new CustomerAccount instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `customer` | [`Customer`](../wiki/customer.Interface.Customer) | Basic customer profile information. |
| `contactInfo` | [`CustomerContact`](../wiki/customer.Interface.CustomerContact) | Contact details for the customer. |
| `billingInfo` | [`CustomerBilling`](../wiki/customer.Interface.CustomerBilling) | Customer's billing information. |

#### Returns

`CustomerAccount`

## Methods

### addOrderToHistory()

> **addOrderToHistory**(`order`): `void`

Defined in: [customer.ts:127](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L127)

Adds a new order to the customer's historical record.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `order` | [`CustomerOrderHistory`](../wiki/customer.Interface.CustomerOrderHistory) | The order to be added to the history. |

#### Returns

`void`

***

### getBillingInfo()

> **getBillingInfo**(): [`CustomerBilling`](../wiki/customer.Interface.CustomerBilling)

Defined in: [customer.ts:119](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L119)

Retrieves the billing information of the customer.

#### Returns

[`CustomerBilling`](../wiki/customer.Interface.CustomerBilling)

The billing details.

***

### getContactInfo()

> **getContactInfo**(): [`CustomerContact`](../wiki/customer.Interface.CustomerContact)

Defined in: [customer.ts:111](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L111)

Retrieves the contact information of the customer.

#### Returns

[`CustomerContact`](../wiki/customer.Interface.CustomerContact)

The contact details.

***

### getCustomer()

> **getCustomer**(): [`Customer`](../wiki/customer.Interface.Customer)

Defined in: [customer.ts:103](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L103)

Retrieves the stored customer profile information.

#### Returns

[`Customer`](../wiki/customer.Interface.Customer)

The customer's profile data.

***

### getOrderHistory()

> **getOrderHistory**(): [`CustomerOrderHistory`](../wiki/customer.Interface.CustomerOrderHistory)[]

Defined in: [customer.ts:135](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L135)

Retrieves the full history of orders made by the customer.

#### Returns

[`CustomerOrderHistory`](../wiki/customer.Interface.CustomerOrderHistory)[]

An array of order history records.
