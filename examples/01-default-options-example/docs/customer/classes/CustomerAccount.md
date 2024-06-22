[**Default Options Example**](../../README.md) • **Docs**

***

[Default Options Example](../../modules.md) / [customer](../README.md) / CustomerAccount

# Class: CustomerAccount

Class representing a customer account.
Manages and integrates different aspects of customer data and interactions with the business.

## Constructors

### new CustomerAccount()

> **new CustomerAccount**(`customer`, `contactInfo`, `billingInfo`): [`CustomerAccount`](CustomerAccount.md)

Constructs a new CustomerAccount instance.

#### Parameters

• **customer**: [`Customer`](../interfaces/Customer.md)

Basic customer profile information.

• **contactInfo**: [`CustomerContact`](../interfaces/CustomerContact.md)

Contact details for the customer.

• **billingInfo**: [`CustomerBilling`](../interfaces/CustomerBilling.md)

Customer's billing information.

#### Returns

[`CustomerAccount`](CustomerAccount.md)

#### Defined in

[customer.ts:88](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/customer.ts#L88)

## Methods

### addOrderToHistory()

> **addOrderToHistory**(`order`): `void`

Adds a new order to the customer's historical record.

#### Parameters

• **order**: [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)

The order to be added to the history.

#### Returns

`void`

#### Defined in

[customer.ts:127](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/customer.ts#L127)

***

### getBillingInfo()

> **getBillingInfo**(): [`CustomerBilling`](../interfaces/CustomerBilling.md)

Retrieves the billing information of the customer.

#### Returns

[`CustomerBilling`](../interfaces/CustomerBilling.md)

The billing details.

#### Defined in

[customer.ts:119](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/customer.ts#L119)

***

### getContactInfo()

> **getContactInfo**(): [`CustomerContact`](../interfaces/CustomerContact.md)

Retrieves the contact information of the customer.

#### Returns

[`CustomerContact`](../interfaces/CustomerContact.md)

The contact details.

#### Defined in

[customer.ts:111](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/customer.ts#L111)

***

### getCustomer()

> **getCustomer**(): [`Customer`](../interfaces/Customer.md)

Retrieves the stored customer profile information.

#### Returns

[`Customer`](../interfaces/Customer.md)

The customer's profile data.

#### Defined in

[customer.ts:103](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/customer.ts#L103)

***

### getOrderHistory()

> **getOrderHistory**(): [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

Retrieves the full history of orders made by the customer.

#### Returns

[`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

An array of order history records.

#### Defined in

[customer.ts:135](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/customer.ts#L135)
