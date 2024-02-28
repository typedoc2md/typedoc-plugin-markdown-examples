**ui-options-example** • [API](../../README.md)

***

[Home](../../README.md) / [customer](../README.md) / CustomerAccount

# Class: CustomerAccount

Class representing a customer account.

## Constructors

### new CustomerAccount(customer, contactInfo, billingInfo)

```ts
new CustomerAccount(
   customer, 
   contactInfo, 
   billingInfo): CustomerAccount
```

#### Parameters

| Parameter | Type |
| :------ | :------ |
| `customer` | [`Customer`](../interfaces/Customer.md) |
| `contactInfo` | [`CustomerContact`](../interfaces/CustomerContact.md) |
| `billingInfo` | [`CustomerBilling`](../interfaces/CustomerBilling.md) |

#### Returns

[`CustomerAccount`](CustomerAccount.md)

#### Source

[customer.ts:61](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/customer.ts#L61)

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

Add an order to the customer's order history.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `order` | [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md) | The order to be added to the history. |

#### Returns

`void`

#### Source

[customer.ts:100](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/customer.ts#L100)

***

### getBillingInfo()

```ts
getBillingInfo(): CustomerBilling
```

Get the customer billing information.

#### Returns

[`CustomerBilling`](../interfaces/CustomerBilling.md)

The customer billing information.

#### Source

[customer.ts:92](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/customer.ts#L92)

***

### getContactInfo()

```ts
getContactInfo(): CustomerContact
```

Get the customer contact information.

#### Returns

[`CustomerContact`](../interfaces/CustomerContact.md)

The customer contact information.

#### Source

[customer.ts:84](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/customer.ts#L84)

***

### getCustomer()

```ts
getCustomer(): Customer
```

Get the customer information.

#### Returns

[`Customer`](../interfaces/Customer.md)

The customer information.

#### Source

[customer.ts:76](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/customer.ts#L76)

***

### getOrderHistory()

```ts
getOrderHistory(): CustomerOrderHistory[]
```

Get the customer's order history.

#### Returns

[`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

An array of the customer's order history.

#### Source

[customer.ts:108](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/customer.ts#L108)
