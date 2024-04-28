[typedoc-plugin-markdown-examples](../../README.md) • [Readme](../../README.md) \| Docs

***

[typedoc-plugin-markdown-examples](../../modules.md) / [BillingModule](../README.md) / BillingHistoryService

# Class: BillingHistoryService

Service for managing billing history.
Provides functionality to store and retrieve the history of transactions.

## Constructors

### new BillingHistoryService()

> **new BillingHistoryService**(): [`BillingHistoryService`](BillingHistoryService.md)

#### Returns

[`BillingHistoryService`](BillingHistoryService.md)

## Properties

### history

> `private` **history**: [`BillingTransaction`](../interfaces/BillingTransaction.md)[] = `[]`

Holds all transactions that have been added to the billing history.

#### Source

[billing.ts:138](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/billing.ts#L138)

## Methods

### addTransactionToHistory()

> **addTransactionToHistory**(`transaction`): `void`

Adds a transaction to the billing history.
This method is typically called after a transaction is completed to maintain a record.

#### Parameters

• **transaction**: [`BillingTransaction`](../interfaces/BillingTransaction.md)

The billing transaction to be added to the history.

#### Returns

`void`

#### Source

[billing.ts:145](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/billing.ts#L145)

***

### getBillingHistory()

> **getBillingHistory**(): [`BillingTransaction`](../interfaces/BillingTransaction.md)[]

Retrieves the complete billing history, providing access to all transactions that have been recorded.
This is useful for historical analysis and auditing purposes.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)[]

An array of all billing transactions in the history.

#### Source

[billing.ts:154](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/billing.ts#L154)
