**typedoc-plugin-markdown-examples** • [API](../../README.md)

***

[Home](../../README.md) / [BillingModule](../README.md) / BillingHistoryService

# Class: BillingHistoryService

Service for managing billing history.
Provides functionality to store and retrieve the history of transactions.

## Constructors

### new BillingHistoryService()

```ts
new BillingHistoryService(): BillingHistoryService
```

#### Returns

[`BillingHistoryService`](BillingHistoryService.md)

## Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `history` | `private` | [`BillingTransaction`](../interfaces/BillingTransaction.md)[] | `[]` | Holds all transactions that have been added to the billing history. |

## Methods

### addTransactionToHistory()

```ts
addTransactionToHistory(transaction): void
```

Adds a transaction to the billing history.
This method is typically called after a transaction is completed to maintain a record.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`BillingTransaction`](../interfaces/BillingTransaction.md) | The billing transaction to be added to the history. |

#### Returns

`void`

#### Source

billing.ts:145

***

### getBillingHistory()

```ts
getBillingHistory(): BillingTransaction[]
```

Retrieves the complete billing history, providing access to all transactions that have been recorded.
This is useful for historical analysis and auditing purposes.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)[]

An array of all billing transactions in the history.

#### Source

billing.ts:154
