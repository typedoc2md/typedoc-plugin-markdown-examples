[github-wiki-example](../wiki/Home) / [CustomerModule](../wiki/CustomerModule) / CustomerAccount

# Class: CustomerAccount

Class representing a customer account.
Manages and integrates different aspects of customer data and interactions with the business.

## Constructors

### new CustomerAccount()

> **new CustomerAccount**(`customer`, `contactInfo`, `billingInfo`): [`CustomerAccount`](../wiki/CustomerModule.Class.CustomerAccount)

Constructs a new CustomerAccount instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `customer` | [`Customer`](../wiki/CustomerModule.Interface.Customer) | Basic customer profile information. |
| `contactInfo` | [`CustomerContact`](../wiki/CustomerModule.Interface.CustomerContact) | Contact details for the customer. |
| `billingInfo` | [`CustomerBilling`](../wiki/CustomerModule.Interface.CustomerBilling) | Customer's billing information. |

#### Returns

[`CustomerAccount`](../wiki/CustomerModule.Class.CustomerAccount)

#### Source

customer.ts:88

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `billingInfo` | `private` | [`CustomerBilling`](../wiki/CustomerModule.Interface.CustomerBilling) |
| `contactInfo` | `private` | [`CustomerContact`](../wiki/CustomerModule.Interface.CustomerContact) |
| `customer` | `private` | [`Customer`](../wiki/CustomerModule.Interface.Customer) |
| `orderHistory` | `private` | [`CustomerOrderHistory`](../wiki/CustomerModule.Interface.CustomerOrderHistory)[] |

## Methods

### addOrderToHistory()

> **addOrderToHistory**(`order`): `void`

Adds a new order to the customer's historical record.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `order` | [`CustomerOrderHistory`](../wiki/CustomerModule.Interface.CustomerOrderHistory) | The order to be added to the history. |

#### Returns

`void`

#### Source

customer.ts:127

***

### getBillingInfo()

> **getBillingInfo**(): [`CustomerBilling`](../wiki/CustomerModule.Interface.CustomerBilling)

Retrieves the billing information of the customer.

#### Returns

[`CustomerBilling`](../wiki/CustomerModule.Interface.CustomerBilling)

The billing details.

#### Source

customer.ts:119

***

### getContactInfo()

> **getContactInfo**(): [`CustomerContact`](../wiki/CustomerModule.Interface.CustomerContact)

Retrieves the contact information of the customer.

#### Returns

[`CustomerContact`](../wiki/CustomerModule.Interface.CustomerContact)

The contact details.

#### Source

customer.ts:111

***

### getCustomer()

> **getCustomer**(): [`Customer`](../wiki/CustomerModule.Interface.Customer)

Retrieves the stored customer profile information.

#### Returns

[`Customer`](../wiki/CustomerModule.Interface.Customer)

The customer's profile data.

#### Source

customer.ts:103

***

### getOrderHistory()

> **getOrderHistory**(): [`CustomerOrderHistory`](../wiki/CustomerModule.Interface.CustomerOrderHistory)[]

Retrieves the full history of orders made by the customer.

#### Returns

[`CustomerOrderHistory`](../wiki/CustomerModule.Interface.CustomerOrderHistory)[]

An array of order history records.

#### Source

customer.ts:135
