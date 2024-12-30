[**dummy-typescript-api**](../../README.md)

***

[Home](../../README.md) / [customer](../README.md) / CustomerService

# Class: CustomerService

Defined in: [customer.ts:143](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L143)

Service for managing customers.

## Constructors

### new CustomerService()

```ts
new CustomerService(): CustomerService
```

#### Returns

[`CustomerService`](CustomerService.md)

## Methods

### addCustomer()

```ts
addCustomer(
   customer, 
   contactInfo, 
   billingInfo): CustomerAccount
```

Defined in: [customer.ts:153](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L153)

Add a new customer.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `customer` | [`Customer`](../interfaces/Customer.md) | The customer to be added. |
| `contactInfo` | [`CustomerContact`](../interfaces/CustomerContact.md) | The contact information for the customer. |
| `billingInfo` | [`CustomerBilling`](../interfaces/CustomerBilling.md) | The billing information for the customer. |

#### Returns

[`CustomerAccount`](CustomerAccount.md)

The added customer account.

***

### getAllCustomers()

```ts
getAllCustomers(): CustomerAccount[]
```

Defined in: [customer.ts:171](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L171)

Get all customer accounts.

#### Returns

[`CustomerAccount`](CustomerAccount.md)[]

An array of all customer accounts.

***

### getCustomerById()

```ts
getCustomerById(customerId): CustomerAccount
```

Defined in: [customer.ts:180](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L180)

Get a customer account by ID.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `customerId` | `string` | The ID of the customer. |

#### Returns

[`CustomerAccount`](CustomerAccount.md)

The customer account with the specified ID.
