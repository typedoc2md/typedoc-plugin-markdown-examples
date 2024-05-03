[github-wiki-example](../wiki/Home) / [BillingModule](../wiki/BillingModule) / BillingHistoryService

# Class: BillingHistoryService

Service for managing billing history.
Provides functionality to store and retrieve the history of transactions.

## Constructors

### new BillingHistoryService()

> **new BillingHistoryService**(): [`BillingHistoryService`](../wiki/BillingModule.Class.BillingHistoryService)

#### Returns

[`BillingHistoryService`](../wiki/BillingModule.Class.BillingHistoryService)

## Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `history` | `private` | [`BillingTransaction`](../wiki/BillingModule.Interface.BillingTransaction)[] | `[]` | Holds all transactions that have been added to the billing history. |

## Methods

### addTransactionToHistory()

> **addTransactionToHistory**(`transaction`): `void`

Adds a transaction to the billing history.
This method is typically called after a transaction is completed to maintain a record.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`BillingTransaction`](../wiki/BillingModule.Interface.BillingTransaction) | The billing transaction to be added to the history. |

#### Returns

`void`

#### Source

[billing.ts:145](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/billing.ts#L145)

***

### getBillingHistory()

> **getBillingHistory**(): [`BillingTransaction`](../wiki/BillingModule.Interface.BillingTransaction)[]

Retrieves the complete billing history, providing access to all transactions that have been recorded.
This is useful for historical analysis and auditing purposes.

#### Returns

[`BillingTransaction`](../wiki/BillingModule.Interface.BillingTransaction)[]

An array of all billing transactions in the history.

#### Source

[billing.ts:154](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/billing.ts#L154)
