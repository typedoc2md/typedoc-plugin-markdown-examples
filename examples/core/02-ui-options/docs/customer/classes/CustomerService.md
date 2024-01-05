**ui-options-example** • API Documentation

***

[Home](../../README.md) / [customer](../README.md) / CustomerService

# Class: CustomerService

Service for managing customers.

## Constructors

### new CustomerService()

```ts
new CustomerService(): CustomerService
```

#### Returns

[`CustomerService`](CustomerService.md)

## Properties

| Modifier | Property | Type |
| :------ | :------ | :------ |
| `private` | `customers` | [`CustomerAccount`](CustomerAccount.md)[] |

## Methods

### addCustomer()

```ts
addCustomer(
   customer, 
   contactInfo, 
   billingInfo): CustomerAccount
```

Add a new customer.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `customer` | [`Customer`](../interfaces/Customer.md) | The customer to be added. |
| `contactInfo` | [`CustomerContact`](../interfaces/CustomerContact.md) | The contact information for the customer. |
| `billingInfo` | [`CustomerBilling`](../interfaces/CustomerBilling.md) | The billing information for the customer. |

#### Returns

[`CustomerAccount`](CustomerAccount.md)

The added customer account.

#### Source

customer.ts:127

***

### getAllCustomers()

```ts
getAllCustomers(): CustomerAccount[]
```

Get all customer accounts.

#### Returns

[`CustomerAccount`](CustomerAccount.md)[]

An array of all customer accounts.

#### Source

customer.ts:145

***

### getCustomerById()

```ts
getCustomerById(customerId): undefined | CustomerAccount
```

Get a customer account by ID.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | The ID of the customer. |

#### Returns

`undefined` \| [`CustomerAccount`](CustomerAccount.md)

The customer account with the specified ID.

#### Source

customer.ts:154

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)