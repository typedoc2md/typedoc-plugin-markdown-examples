[github-wiki-example](../wiki/Home) / [customer](../wiki/customer) / CustomerAccount

# Class: CustomerAccount

Class representing a customer account.
Manages and integrates different aspects of customer data and interactions with the business.

## Constructors

### new CustomerAccount()

> **new CustomerAccount**(`customer`, `contactInfo`, `billingInfo`): [`CustomerAccount`](../wiki/customer.Class.CustomerAccount)

Constructs a new CustomerAccount instance.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `customer` | [`Customer`](../wiki/customer.Interface.Customer) | Basic customer profile information. |
| `contactInfo` | [`CustomerContact`](../wiki/customer.Interface.CustomerContact) | Contact details for the customer. |
| `billingInfo` | [`CustomerBilling`](../wiki/customer.Interface.CustomerBilling) | Customer's billing information. |

#### Returns

[`CustomerAccount`](../wiki/customer.Class.CustomerAccount)

#### Defined in

[customer.ts:88](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/customer.ts#L88)

## Methods

### addOrderToHistory()

> **addOrderToHistory**(`order`): `void`

Adds a new order to the customer's historical record.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `order` | [`CustomerOrderHistory`](../wiki/customer.Interface.CustomerOrderHistory) | The order to be added to the history. |

#### Returns

`void`

#### Defined in

[customer.ts:127](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/customer.ts#L127)

***

### getBillingInfo()

> **getBillingInfo**(): [`CustomerBilling`](../wiki/customer.Interface.CustomerBilling)

Retrieves the billing information of the customer.

#### Returns

[`CustomerBilling`](../wiki/customer.Interface.CustomerBilling)

The billing details.

#### Defined in

[customer.ts:119](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/customer.ts#L119)

***

### getContactInfo()

> **getContactInfo**(): [`CustomerContact`](../wiki/customer.Interface.CustomerContact)

Retrieves the contact information of the customer.

#### Returns

[`CustomerContact`](../wiki/customer.Interface.CustomerContact)

The contact details.

#### Defined in

[customer.ts:111](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/customer.ts#L111)

***

### getCustomer()

> **getCustomer**(): [`Customer`](../wiki/customer.Interface.Customer)

Retrieves the stored customer profile information.

#### Returns

[`Customer`](../wiki/customer.Interface.Customer)

The customer's profile data.

#### Defined in

[customer.ts:103](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/customer.ts#L103)

***

### getOrderHistory()

> **getOrderHistory**(): [`CustomerOrderHistory`](../wiki/customer.Interface.CustomerOrderHistory)[]

Retrieves the full history of orders made by the customer.

#### Returns

[`CustomerOrderHistory`](../wiki/customer.Interface.CustomerOrderHistory)[]

An array of order history records.

#### Defined in

[customer.ts:135](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/customer.ts#L135)
