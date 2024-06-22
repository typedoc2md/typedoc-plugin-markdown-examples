[**typedoc-plugin-markdown-examples**](README.md) • **Docs**

***

[Home](README.md) / customer

# customer

This module contains types and services related to customer management.

## Enumerations

### CustomerType

Enum representing different customer types.
These classifications help tailor services and benefits according to customer loyalty and value.

#### Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `Premium` | `"Premium"` | Represents a premium customer who enjoys additional benefits, discounts, and services. | customer.ts:17 |
| `Regular` | `"Regular"` | Represents a regular customer who receives standard services and pricing. | customer.ts:15 |

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
| ------ | ------ | ------ |
| `customer` | [`Customer`](customer.md#customer) | Basic customer profile information. |
| `contactInfo` | [`CustomerContact`](customer.md#customercontact) | Contact details for the customer. |
| `billingInfo` | [`CustomerBilling`](customer.md#customerbilling) | Customer's billing information. |

###### Returns

[`CustomerAccount`](customer.md#customeraccount)

###### Defined in

customer.ts:88

#### Methods

##### addOrderToHistory()

```ts
addOrderToHistory(order): void
```

Adds a new order to the customer's historical record.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `order` | [`CustomerOrderHistory`](customer.md#customerorderhistory) | The order to be added to the history. |

###### Returns

`void`

###### Defined in

customer.ts:127

##### getBillingInfo()

```ts
getBillingInfo(): CustomerBilling
```

Retrieves the billing information of the customer.

###### Returns

[`CustomerBilling`](customer.md#customerbilling)

The billing details.

###### Defined in

customer.ts:119

##### getContactInfo()

```ts
getContactInfo(): CustomerContact
```

Retrieves the contact information of the customer.

###### Returns

[`CustomerContact`](customer.md#customercontact)

The contact details.

###### Defined in

customer.ts:111

##### getCustomer()

```ts
getCustomer(): Customer
```

Retrieves the stored customer profile information.

###### Returns

[`Customer`](customer.md#customer)

The customer's profile data.

###### Defined in

customer.ts:103

##### getOrderHistory()

```ts
getOrderHistory(): CustomerOrderHistory[]
```

Retrieves the full history of orders made by the customer.

###### Returns

[`CustomerOrderHistory`](customer.md#customerorderhistory)[]

An array of order history records.

###### Defined in

customer.ts:135

***

### CustomerService

Service for managing customers.

#### Constructors

##### new CustomerService()

```ts
new CustomerService(): CustomerService
```

###### Returns

[`CustomerService`](customer.md#customerservice)

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
| ------ | ------ | ------ |
| `customer` | [`Customer`](customer.md#customer) | The customer to be added. |
| `contactInfo` | [`CustomerContact`](customer.md#customercontact) | The contact information for the customer. |
| `billingInfo` | [`CustomerBilling`](customer.md#customerbilling) | The billing information for the customer. |

###### Returns

[`CustomerAccount`](customer.md#customeraccount)

The added customer account.

###### Defined in

customer.ts:153

##### getAllCustomers()

```ts
getAllCustomers(): CustomerAccount[]
```

Get all customer accounts.

###### Returns

[`CustomerAccount`](customer.md#customeraccount)[]

An array of all customer accounts.

###### Defined in

customer.ts:171

##### getCustomerById()

```ts
getCustomerById(customerId): CustomerAccount
```

Get a customer account by ID.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `customerId` | `string` | The ID of the customer. |

###### Returns

[`CustomerAccount`](customer.md#customeraccount)

The customer account with the specified ID.

###### Defined in

customer.ts:180

## Interfaces

### Customer

Interface representing a customer.
Stores comprehensive details about a customer necessary for various business operations.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `address` | `string` | The physical address of the customer, used for shipping and billing purposes. | customer.ts:32 |
| `customerId` | `string` | A unique identifier for the customer, essential for tracking and customer management. | customer.ts:26 |
| `email` | `string` | The primary email address of the customer, used for communication and digital receipts. | customer.ts:30 |
| `name` | `string` | The full name of the customer, used for personalization and identification. | customer.ts:28 |
| `type` | [`CustomerType`](customer.md#customertype) | The classification of the customer, which can affect the level of service and pricing they receive. | customer.ts:34 |

***

### CustomerBilling

Interface representing customer billing information.
Used for processing payments and managing financial transactions.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `creditCardNumber` | `string` | The customer's credit card number, used for billing and payment processing. | customer.ts:54 |
| `expirationDate` | `string` | The expiration date of the credit card, important for validating the card's current validity. | customer.ts:56 |

***

### CustomerContact

Interface representing customer contact information.
Essential for communication and service delivery.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `email` | `string` | Primary email address for customer communications. | customer.ts:43 |
| `phone?` | `string` | Optional phone number for additional contact or urgent communications. | customer.ts:45 |

***

### CustomerOrderHistory

Interface representing a customer's order history.
Useful for tracking past transactions and analyzing customer behavior.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `orderDate` | `Date` | The date when the order was placed, important for historical data and analytics. | customer.ts:67 |
| `orderId` | `string` | Unique identifier for each order, crucial for order tracking and management. | customer.ts:65 |
| `totalAmount` | `number` | The total amount spent on the order, used for financial records and customer spending analysis. | customer.ts:69 |
