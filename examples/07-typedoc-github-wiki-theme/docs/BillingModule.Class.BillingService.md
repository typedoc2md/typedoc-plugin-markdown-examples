[github-wiki-example](../wiki/Home) / [BillingModule](../wiki/BillingModule) / BillingService

# Class: BillingService

Service for managing billing transactions.
Provides functionality to process and retrieve billing transactions.

## Constructors

### new BillingService()

> **new BillingService**(): [`BillingService`](../wiki/BillingModule.Class.BillingService)

#### Returns

[`BillingService`](../wiki/BillingModule.Class.BillingService)

## Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `transactions` | `private` | [`BillingTransaction`](../wiki/BillingModule.Interface.BillingTransaction)[] | `[]` | Holds all processed transactions within the service. |

## Methods

### getAllTransactions()

> **getAllTransactions**(): [`BillingTransaction`](../wiki/BillingModule.Interface.BillingTransaction)[]

Retrieves all the billing transactions that have been processed.
Useful for audits and general transaction management.

#### Returns

[`BillingTransaction`](../wiki/BillingModule.Interface.BillingTransaction)[]

An array of all billing transactions.

#### Source

[billing.ts:126](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/billing.ts#L126)

***

### processTransaction()

> **processTransaction**(`transaction`): [`BillingTransaction`](../wiki/BillingModule.Interface.BillingTransaction)

Processes a billing transaction by adding it to the list of transactions.
This simulates the transaction execution and storage in a production environment.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`BillingTransaction`](../wiki/BillingModule.Interface.BillingTransaction) | The billing transaction to be processed. |

#### Returns

[`BillingTransaction`](../wiki/BillingModule.Interface.BillingTransaction)

The processed billing transaction, now stored in the service.

#### Source

[billing.ts:116](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/billing.ts#L116)
