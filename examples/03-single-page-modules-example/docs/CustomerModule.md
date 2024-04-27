**typedoc-plugin-markdown-examples** • [API](README.md)

***

[Home](README.md) / CustomerModule

# CustomerModule

This module contains types and services related to customer management.

## Enumerations

### CustomerType

Enum representing different customer types.
These classifications help tailor services and benefits according to customer loyalty and value.

#### Enumeration Members

| Enumeration Member | Value | Description |
| :------ | :------ | :------ |
| `Premium` | `"Premium"` | Represents a premium customer who enjoys additional benefits, discounts, and services. |
| `Regular` | `"Regular"` | Represents a regular customer who receives standard services and pricing. |

## Classes

### CustomerAccount

Class representing a customer account.
Manages and integrates different aspects of customer data and interactions with the business.

#### Constructors

##### new CustomerAccount()

```ts
new CustomerAccount(
   customer, 
   contactInfo, 
   billingInfo): CustomerAccount
```

Constructs a new CustomerAccount instance.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `customer` | [`Customer`](CustomerModule.md#customer) | Basic customer profile information. |
| `contactInfo` | [`CustomerContact`](CustomerModule.md#customercontact) | Contact details for the customer. |
| `billingInfo` | [`CustomerBilling`](CustomerModule.md#customerbilling) | Customer's billing information. |

###### Returns

[`CustomerAccount`](CustomerModule.md#customeraccount)

###### Source

[customer.ts:88](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/customer.ts#L88)

#### Properties

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `billingInfo` | `private` | [`CustomerBilling`](CustomerModule.md#customerbilling) |
| `contactInfo` | `private` | [`CustomerContact`](CustomerModule.md#customercontact) |
| `customer` | `private` | [`Customer`](CustomerModule.md#customer) |
| `orderHistory` | `private` | [`CustomerOrderHistory`](CustomerModule.md#customerorderhistory)[] |

#### Methods

##### addOrderToHistory()

```ts
addOrderToHistory(order): void
```

Adds a new order to the customer's historical record.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `order` | [`CustomerOrderHistory`](CustomerModule.md#customerorderhistory) | The order to be added to the history. |

###### Returns

`void`

###### Source

[customer.ts:127](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/customer.ts#L127)

##### getBillingInfo()

```ts
getBillingInfo(): CustomerBilling
```

Retrieves the billing information of the customer.

###### Returns

[`CustomerBilling`](CustomerModule.md#customerbilling)

The billing details.

###### Source

[customer.ts:119](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/customer.ts#L119)

##### getContactInfo()

```ts
getContactInfo(): CustomerContact
```

Retrieves the contact information of the customer.

###### Returns

[`CustomerContact`](CustomerModule.md#customercontact)

The contact details.

###### Source

[customer.ts:111](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/customer.ts#L111)

##### getCustomer()

```ts
getCustomer(): Customer
```

Retrieves the stored customer profile information.

###### Returns

[`Customer`](CustomerModule.md#customer)

The customer's profile data.

###### Source

[customer.ts:103](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/customer.ts#L103)

##### getOrderHistory()

```ts
getOrderHistory(): CustomerOrderHistory[]
```

Retrieves the full history of orders made by the customer.

###### Returns

[`CustomerOrderHistory`](CustomerModule.md#customerorderhistory)[]

An array of order history records.

###### Source

[customer.ts:135](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/customer.ts#L135)

***

### CustomerService

Service for managing customers.

#### Constructors

##### new CustomerService()

```ts
new CustomerService(): CustomerService
```

###### Returns

[`CustomerService`](CustomerModule.md#customerservice)

#### Properties

| Property | Modifier | Type | Default value |
| :------ | :------ | :------ | :------ |
| `customers` | `private` | [`CustomerAccount`](CustomerModule.md#customeraccount)[] | `[]` |

#### Methods

##### addCustomer()

```ts
addCustomer(
   customer, 
   contactInfo, 
   billingInfo): CustomerAccount
```

Add a new customer.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `customer` | [`Customer`](CustomerModule.md#customer) | The customer to be added. |
| `contactInfo` | [`CustomerContact`](CustomerModule.md#customercontact) | The contact information for the customer. |
| `billingInfo` | [`CustomerBilling`](CustomerModule.md#customerbilling) | The billing information for the customer. |

###### Returns

[`CustomerAccount`](CustomerModule.md#customeraccount)

The added customer account.

###### Source

[customer.ts:153](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/customer.ts#L153)

##### getAllCustomers()

```ts
getAllCustomers(): CustomerAccount[]
```

Get all customer accounts.

###### Returns

[`CustomerAccount`](CustomerModule.md#customeraccount)[]

An array of all customer accounts.

###### Source

[customer.ts:171](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/customer.ts#L171)

##### getCustomerById()

```ts
getCustomerById(customerId): undefined | CustomerAccount
```

Get a customer account by ID.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `customerId` | `string` | The ID of the customer. |

###### Returns

`undefined` \| [`CustomerAccount`](CustomerModule.md#customeraccount)

The customer account with the specified ID.

###### Source

[customer.ts:180](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/customer.ts#L180)

## Interfaces

### Customer

Interface representing a customer.
Stores comprehensive details about a customer necessary for various business operations.

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The physical address of the customer, used for shipping and billing purposes. |
| `customerId` | `string` | A unique identifier for the customer, essential for tracking and customer management. |
| `email` | `string` | The primary email address of the customer, used for communication and digital receipts. |
| `name` | `string` | The full name of the customer, used for personalization and identification. |
| `type` | [`CustomerType`](CustomerModule.md#customertype) | The classification of the customer, which can affect the level of service and pricing they receive. |

***

### CustomerBilling

Interface representing customer billing information.
Used for processing payments and managing financial transactions.

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `creditCardNumber` | `string` | The customer's credit card number, used for billing and payment processing. |
| `expirationDate` | `string` | The expiration date of the credit card, important for validating the card's current validity. |

***

### CustomerContact

Interface representing customer contact information.
Essential for communication and service delivery.

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `email` | `string` | Primary email address for customer communications. |
| `phone?` | `string` | Optional phone number for additional contact or urgent communications. |

***

### CustomerOrderHistory

Interface representing a customer's order history.
Useful for tracking past transactions and analyzing customer behavior.

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `orderDate` | `Date` | The date when the order was placed, important for historical data and analytics. |
| `orderId` | `string` | Unique identifier for each order, crucial for order tracking and management. |
| `totalAmount` | `number` | The total amount spent on the order, used for financial records and customer spending analysis. |
