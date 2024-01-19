**default-options-example** • [Readme](../../README.md) \| [API](../../modules.md)

***

[default-options-example](../../README.md) / [customer](../README.md) / CustomerAccount

# Class: CustomerAccount

Class representing a customer account.

## Constructors

### new CustomerAccount(customer, contactInfo, billingInfo)

> **new CustomerAccount**(`customer`, `contactInfo`, `billingInfo`): [`CustomerAccount`](CustomerAccount.md)

#### Parameters

• **customer**: [`Customer`](../interfaces/Customer.md)

• **contactInfo**: [`CustomerContact`](../interfaces/CustomerContact.md)

• **billingInfo**: [`CustomerBilling`](../interfaces/CustomerBilling.md)

#### Returns

[`CustomerAccount`](CustomerAccount.md)

#### Source

[customer.ts:61](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/6bbf2a3/examples/01-typedoc-plugin-markdown/src/customer.ts#L61)

## Properties

### billingInfo

> **`private`** **billingInfo**: [`CustomerBilling`](../interfaces/CustomerBilling.md)

#### Source

[customer.ts:58](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/6bbf2a3/examples/01-typedoc-plugin-markdown/src/customer.ts#L58)

***

### contactInfo

> **`private`** **contactInfo**: [`CustomerContact`](../interfaces/CustomerContact.md)

#### Source

[customer.ts:57](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/6bbf2a3/examples/01-typedoc-plugin-markdown/src/customer.ts#L57)

***

### customer

> **`private`** **customer**: [`Customer`](../interfaces/Customer.md)

#### Source

[customer.ts:56](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/6bbf2a3/examples/01-typedoc-plugin-markdown/src/customer.ts#L56)

***

### orderHistory

> **`private`** **orderHistory**: [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

#### Source

[customer.ts:59](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/6bbf2a3/examples/01-typedoc-plugin-markdown/src/customer.ts#L59)

## Methods

### addOrderToHistory()

> **addOrderToHistory**(`order`): `void`

Add an order to the customer's order history.

#### Parameters

• **order**: [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)

The order to be added to the history.

#### Returns

`void`

#### Source

[customer.ts:100](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/6bbf2a3/examples/01-typedoc-plugin-markdown/src/customer.ts#L100)

***

### getBillingInfo()

> **getBillingInfo**(): [`CustomerBilling`](../interfaces/CustomerBilling.md)

Get the customer billing information.

#### Returns

[`CustomerBilling`](../interfaces/CustomerBilling.md)

The customer billing information.

#### Source

[customer.ts:92](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/6bbf2a3/examples/01-typedoc-plugin-markdown/src/customer.ts#L92)

***

### getContactInfo()

> **getContactInfo**(): [`CustomerContact`](../interfaces/CustomerContact.md)

Get the customer contact information.

#### Returns

[`CustomerContact`](../interfaces/CustomerContact.md)

The customer contact information.

#### Source

[customer.ts:84](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/6bbf2a3/examples/01-typedoc-plugin-markdown/src/customer.ts#L84)

***

### getCustomer()

> **getCustomer**(): [`Customer`](../interfaces/Customer.md)

Get the customer information.

#### Returns

[`Customer`](../interfaces/Customer.md)

The customer information.

#### Source

[customer.ts:76](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/6bbf2a3/examples/01-typedoc-plugin-markdown/src/customer.ts#L76)

***

### getOrderHistory()

> **getOrderHistory**(): [`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

Get the customer's order history.

#### Returns

[`CustomerOrderHistory`](../interfaces/CustomerOrderHistory.md)[]

An array of the customer's order history.

#### Source

[customer.ts:108](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/6bbf2a3/examples/01-typedoc-plugin-markdown/src/customer.ts#L108)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
