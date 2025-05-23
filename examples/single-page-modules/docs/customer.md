[**dummy-typescript-api**](README.md)

***

[dummy-typescript-api](README.md) / customer

# customer

This module contains types and services related to customer management.

## Enumerations

### CustomerType

Defined in: [customer.ts:13](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L13)

Enum representing different customer types.
These classifications help tailor services and benefits according to customer loyalty and value.

#### Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="premium"></a> `Premium` | `"Premium"` | Represents a premium customer who enjoys additional benefits, discounts, and services. | [customer.ts:17](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L17) |
| <a id="regular"></a> `Regular` | `"Regular"` | Represents a regular customer who receives standard services and pricing. | [customer.ts:15](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L15) |

## Classes

### CustomerAccount

Defined in: [customer.ts:76](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L76)

Class representing a customer account.
Manages and integrates different aspects of customer data and interactions with the business.

#### Constructors

##### Constructor

```ts
new CustomerAccount(
   customer, 
   contactInfo, 
   billingInfo): CustomerAccount;
```

Defined in: [customer.ts:88](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L88)

Constructs a new CustomerAccount instance.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `customer` | [`Customer`](#customer) | Basic customer profile information. |
| `contactInfo` | [`CustomerContact`](#customercontact) | Contact details for the customer. |
| `billingInfo` | [`CustomerBilling`](#customerbilling) | Customer's billing information. |

###### Returns

[`CustomerAccount`](#customeraccount)

#### Methods

##### addOrderToHistory()

```ts
addOrderToHistory(order): void;
```

Defined in: [customer.ts:127](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L127)

Adds a new order to the customer's historical record.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `order` | [`CustomerOrderHistory`](#customerorderhistory) | The order to be added to the history. |

###### Returns

`void`

##### getBillingInfo()

```ts
getBillingInfo(): CustomerBilling;
```

Defined in: [customer.ts:119](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L119)

Retrieves the billing information of the customer.

###### Returns

[`CustomerBilling`](#customerbilling)

The billing details.

##### getContactInfo()

```ts
getContactInfo(): CustomerContact;
```

Defined in: [customer.ts:111](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L111)

Retrieves the contact information of the customer.

###### Returns

[`CustomerContact`](#customercontact)

The contact details.

##### getCustomer()

```ts
getCustomer(): Customer;
```

Defined in: [customer.ts:103](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L103)

Retrieves the stored customer profile information.

###### Returns

[`Customer`](#customer)

The customer's profile data.

##### getOrderHistory()

```ts
getOrderHistory(): CustomerOrderHistory[];
```

Defined in: [customer.ts:135](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L135)

Retrieves the full history of orders made by the customer.

###### Returns

[`CustomerOrderHistory`](#customerorderhistory)[]

An array of order history records.

***

### CustomerService

Defined in: [customer.ts:143](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L143)

Service for managing customers.

#### Constructors

##### Constructor

```ts
new CustomerService(): CustomerService;
```

###### Returns

[`CustomerService`](#customerservice)

#### Methods

##### addCustomer()

```ts
addCustomer(
   customer, 
   contactInfo, 
   billingInfo): CustomerAccount;
```

Defined in: [customer.ts:153](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L153)

Add a new customer.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `customer` | [`Customer`](#customer) | The customer to be added. |
| `contactInfo` | [`CustomerContact`](#customercontact) | The contact information for the customer. |
| `billingInfo` | [`CustomerBilling`](#customerbilling) | The billing information for the customer. |

###### Returns

[`CustomerAccount`](#customeraccount)

The added customer account.

##### getAllCustomers()

```ts
getAllCustomers(): CustomerAccount[];
```

Defined in: [customer.ts:171](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L171)

Get all customer accounts.

###### Returns

[`CustomerAccount`](#customeraccount)[]

An array of all customer accounts.

##### getCustomerById()

```ts
getCustomerById(customerId): CustomerAccount;
```

Defined in: [customer.ts:180](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L180)

Get a customer account by ID.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `customerId` | `string` | The ID of the customer. |

###### Returns

[`CustomerAccount`](#customeraccount)

The customer account with the specified ID.

## Interfaces

### Customer

Defined in: [customer.ts:24](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L24)

Interface representing a customer.
Stores comprehensive details about a customer necessary for various business operations.

#### Properties

##### address

```ts
address: string;
```

Defined in: [customer.ts:32](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L32)

The physical address of the customer, used for shipping and billing purposes.

##### customerId

```ts
customerId: string;
```

Defined in: [customer.ts:26](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L26)

A unique identifier for the customer, essential for tracking and customer management.

##### email

```ts
email: string;
```

Defined in: [customer.ts:30](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L30)

The primary email address of the customer, used for communication and digital receipts.

##### name

```ts
name: string;
```

Defined in: [customer.ts:28](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L28)

The full name of the customer, used for personalization and identification.

##### type

```ts
type: CustomerType;
```

Defined in: [customer.ts:34](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L34)

The classification of the customer, which can affect the level of service and pricing they receive.

***

### CustomerBilling

Defined in: [customer.ts:52](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L52)

Interface representing customer billing information.
Used for processing payments and managing financial transactions.

#### Properties

##### creditCardNumber

```ts
creditCardNumber: string;
```

Defined in: [customer.ts:54](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L54)

The customer's credit card number, used for billing and payment processing.

##### expirationDate

```ts
expirationDate: string;
```

Defined in: [customer.ts:56](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L56)

The expiration date of the credit card, important for validating the card's current validity.

***

### CustomerContact

Defined in: [customer.ts:41](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L41)

Interface representing customer contact information.
Essential for communication and service delivery.

#### Properties

##### email

```ts
email: string;
```

Defined in: [customer.ts:43](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L43)

Primary email address for customer communications.

##### phone?

```ts
optional phone: string;
```

Defined in: [customer.ts:45](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L45)

Optional phone number for additional contact or urgent communications.

***

### CustomerOrderHistory

Defined in: [customer.ts:63](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L63)

Interface representing a customer's order history.
Useful for tracking past transactions and analyzing customer behavior.

#### Properties

##### orderDate

```ts
orderDate: Date;
```

Defined in: [customer.ts:67](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L67)

The date when the order was placed, important for historical data and analytics.

##### orderId

```ts
orderId: string;
```

Defined in: [customer.ts:65](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L65)

Unique identifier for each order, crucial for order tracking and management.

##### totalAmount

```ts
totalAmount: number;
```

Defined in: [customer.ts:69](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/customer.ts#L69)

The total amount spent on the order, used for financial records and customer spending analysis.
