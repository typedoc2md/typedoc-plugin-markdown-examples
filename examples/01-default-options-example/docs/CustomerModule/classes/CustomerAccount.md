[**Default Options Example**](../../README.md) • **Docs**

***

[Default Options Example](../../modules.md) / [CustomerModule](../README.md) / CustomerAccount

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

#### Source

[customer.ts:88](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/customer.ts#L88)

## Properties

### billingInfo

> `private` **billingInfo**: [`CustomerBilling`](../interfaces/CustomerBilling.md)

#### Source

[customer.ts:79](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/customer.ts#L79)

***

### contactInfo

> `private` **contactInfo**: [`CustomerContact`](../interfaces/CustomerContact.md)

#### Source

[customer.ts:78](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/customer.ts#L78)

***

### customer

> `private` **customer**: [`Customer`](../interfaces/Customer.md)

#### Source

[customer.ts:77](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/customer.ts#L77)

***

### orderHistory

> `private` **orderHistory**: [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

#### Source

[customer.ts:80](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/customer.ts#L80)

## Methods

### addOrderToHistory()

> **addOrderToHistory**(`order`): `void`

Adds a new order to the customer's historical record.

#### Parameters

• **order**: [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)

The order to be added to the history.

#### Returns

`void`

#### Source

[customer.ts:127](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/customer.ts#L127)

***

### getBillingInfo()

> **getBillingInfo**(): [`CustomerBilling`](../interfaces/CustomerBilling.md)

Retrieves the billing information of the customer.

#### Returns

[`CustomerBilling`](../interfaces/CustomerBilling.md)

The billing details.

#### Source

[customer.ts:119](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/customer.ts#L119)

***

### getContactInfo()

> **getContactInfo**(): [`CustomerContact`](../interfaces/CustomerContact.md)

Retrieves the contact information of the customer.

#### Returns

[`CustomerContact`](../interfaces/CustomerContact.md)

The contact details.

#### Source

[customer.ts:111](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/customer.ts#L111)

***

### getCustomer()

> **getCustomer**(): [`Customer`](../interfaces/Customer.md)

Retrieves the stored customer profile information.

#### Returns

[`Customer`](../interfaces/Customer.md)

The customer's profile data.

#### Source

[customer.ts:103](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/customer.ts#L103)

***

### getOrderHistory()

> **getOrderHistory**(): [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

Retrieves the full history of orders made by the customer.

#### Returns

[`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

An array of order history records.

#### Source

[customer.ts:135](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/customer.ts#L135)
