**default-options-example** • [Readme](../../README.md) \| [API](../../modules.md)

***

[default-options-example](../../README.md) / [billing](../README.md) / BillingHistoryService

# Class: BillingHistoryService

Service for managing billing history.

## Constructors

### new BillingHistoryService()

> **new BillingHistoryService**(): [`BillingHistoryService`](BillingHistoryService.md)

#### Returns

[`BillingHistoryService`](BillingHistoryService.md)

## Properties

### history

> **`private`** **history**: [`BillingTransaction`](../interfaces/BillingTransaction.md)[] = `[]`

#### Source

[billing.ts:77](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/billing.ts#L77)

## Methods

### addTransactionToHistory()

> **addTransactionToHistory**(`transaction`): `void`

Add a transaction to the billing history.

#### Parameters

• **transaction**: [`BillingTransaction`](../interfaces/BillingTransaction.md)

The billing transaction to be added to the history.

#### Returns

`void`

#### Source

[billing.ts:83](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/billing.ts#L83)

***

### getBillingHistory()

> **getBillingHistory**(): [`BillingTransaction`](../interfaces/BillingTransaction.md)[]

Get the entire billing history.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)[]

An array of all billing transactions in the history.

#### Source

[billing.ts:91](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/billing.ts#L91)
