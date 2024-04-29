[typedoc-plugin-markdown-examples](../../README.md) • Docs

***

[Home](../../README.md) / [CustomerModule](../README.md) / CustomerAccount

# Class: CustomerAccount

Class representing a customer account.
Manages and integrates different aspects of customer data and interactions with the business.

## Constructors

### new CustomerAccount()

```ts
new CustomerAccount(
   customer, 
   contactInfo, 
   billingInfo): CustomerAccount
```

Constructs a new CustomerAccount instance.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `customer` | [`Customer`](../interfaces/Customer.md) | Basic customer profile information. |
| `contactInfo` | [`CustomerContact`](../interfaces/CustomerContact.md) | Contact details for the customer. |
| `billingInfo` | [`CustomerBilling`](../interfaces/CustomerBilling.md) | Customer's billing information. |

#### Returns

[`CustomerAccount`](CustomerAccount.md)

#### Source

[customer.ts:88](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/bacb1c2264a9626cba5f9e7959f4fc899171a745/examples/src/customer.ts#L88)

## Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `billingInfo` | `private` | [`CustomerBilling`](../interfaces/CustomerBilling.md) |
| `contactInfo` | `private` | [`CustomerContact`](../interfaces/CustomerContact.md) |
| `customer` | `private` | [`Customer`](../interfaces/Customer.md) |
| `orderHistory` | `private` | [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[] |

## Methods

### addOrderToHistory()

```ts
addOrderToHistory(order): void
```

Adds a new order to the customer's historical record.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `order` | [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md) | The order to be added to the history. |

#### Returns

`void`

#### Source

[customer.ts:127](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/bacb1c2264a9626cba5f9e7959f4fc899171a745/examples/src/customer.ts#L127)

***

### getBillingInfo()

```ts
getBillingInfo(): CustomerBilling
```

Retrieves the billing information of the customer.

#### Returns

[`CustomerBilling`](../interfaces/CustomerBilling.md)

The billing details.

#### Source

[customer.ts:119](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/bacb1c2264a9626cba5f9e7959f4fc899171a745/examples/src/customer.ts#L119)

***

### getContactInfo()

```ts
getContactInfo(): CustomerContact
```

Retrieves the contact information of the customer.

#### Returns

[`CustomerContact`](../interfaces/CustomerContact.md)

The contact details.

#### Source

[customer.ts:111](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/bacb1c2264a9626cba5f9e7959f4fc899171a745/examples/src/customer.ts#L111)

***

### getCustomer()

```ts
getCustomer(): Customer
```

Retrieves the stored customer profile information.

#### Returns

[`Customer`](../interfaces/Customer.md)

The customer's profile data.

#### Source

[customer.ts:103](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/bacb1c2264a9626cba5f9e7959f4fc899171a745/examples/src/customer.ts#L103)

***

### getOrderHistory()

```ts
getOrderHistory(): CustomerOrderHistory[]
```

Retrieves the full history of orders made by the customer.

#### Returns

[`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

An array of order history records.

#### Source

[customer.ts:135](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/bacb1c2264a9626cba5f9e7959f4fc899171a745/examples/src/customer.ts#L135)
