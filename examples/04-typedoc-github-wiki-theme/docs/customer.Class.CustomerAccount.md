[github-wiki-example](../wiki/Home) / [customer](../wiki/customer) / CustomerAccount

# Class: CustomerAccount

Class representing a customer account.

## Constructors

### new CustomerAccount(customer, contactInfo, billingInfo)

> **new CustomerAccount**(`customer`, `contactInfo`, `billingInfo`): [`CustomerAccount`](../wiki/customer.Class.CustomerAccount)

#### Parameters

• `customer`: [`Customer`](../wiki/customer.Interface.Customer)

• `contactInfo`: [`CustomerContact`](../wiki/customer.Interface.CustomerContact)

• `billingInfo`: [`CustomerBilling`](../wiki/customer.Interface.CustomerBilling)

#### Returns

[`CustomerAccount`](../wiki/customer.Class.CustomerAccount)

#### Source

[customer.ts:61](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/04-typedoc-github-wiki-theme/src/customer.ts#L61)

## Properties

### billingInfo

> **`private`** **billingInfo**: [`CustomerBilling`](../wiki/customer.Interface.CustomerBilling)

#### Source

[customer.ts:58](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/04-typedoc-github-wiki-theme/src/customer.ts#L58)

***

### contactInfo

> **`private`** **contactInfo**: [`CustomerContact`](../wiki/customer.Interface.CustomerContact)

#### Source

[customer.ts:57](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/04-typedoc-github-wiki-theme/src/customer.ts#L57)

***

### customer

> **`private`** **customer**: [`Customer`](../wiki/customer.Interface.Customer)

#### Source

[customer.ts:56](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/04-typedoc-github-wiki-theme/src/customer.ts#L56)

***

### orderHistory

> **`private`** **orderHistory**: [`CustomerOrderHistory`](../wiki/customer.Interface.CustomerOrderHistory)[]

#### Source

[customer.ts:59](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/04-typedoc-github-wiki-theme/src/customer.ts#L59)

## Methods

### addOrderToHistory()

> **addOrderToHistory**(`order`): `void`

Add an order to the customer's order history.

#### Parameters

• `order`: [`CustomerOrderHistory`](../wiki/customer.Interface.CustomerOrderHistory)

The order to be added to the history.

#### Returns

`void`

#### Source

[customer.ts:100](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/04-typedoc-github-wiki-theme/src/customer.ts#L100)

***

### getBillingInfo()

> **getBillingInfo**(): [`CustomerBilling`](../wiki/customer.Interface.CustomerBilling)

Get the customer billing information.

#### Returns

[`CustomerBilling`](../wiki/customer.Interface.CustomerBilling)

The customer billing information.

#### Source

[customer.ts:92](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/04-typedoc-github-wiki-theme/src/customer.ts#L92)

***

### getContactInfo()

> **getContactInfo**(): [`CustomerContact`](../wiki/customer.Interface.CustomerContact)

Get the customer contact information.

#### Returns

[`CustomerContact`](../wiki/customer.Interface.CustomerContact)

The customer contact information.

#### Source

[customer.ts:84](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/04-typedoc-github-wiki-theme/src/customer.ts#L84)

***

### getCustomer()

> **getCustomer**(): [`Customer`](../wiki/customer.Interface.Customer)

Get the customer information.

#### Returns

[`Customer`](../wiki/customer.Interface.Customer)

The customer information.

#### Source

[customer.ts:76](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/04-typedoc-github-wiki-theme/src/customer.ts#L76)

***

### getOrderHistory()

> **getOrderHistory**(): [`CustomerOrderHistory`](../wiki/customer.Interface.CustomerOrderHistory)[]

Get the customer's order history.

#### Returns

[`CustomerOrderHistory`](../wiki/customer.Interface.CustomerOrderHistory)[]

An array of the customer's order history.

#### Source

[customer.ts:108](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/04-typedoc-github-wiki-theme/src/customer.ts#L108)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
