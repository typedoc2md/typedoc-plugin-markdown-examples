[**dummy-typescript-api**](../../README.md)

***

[Home](../../README.md) / [billing](../README.md) / BillingHistoryService

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

## Methods

### addTransactionToHistory()

```ts
addTransactionToHistory(transaction): void
```

Adds a transaction to the billing history.
This method is typically called after a transaction is completed to maintain a record.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `transaction` | [`BillingTransaction`](../interfaces/BillingTransaction.md) | The billing transaction to be added to the history. |

#### Returns

`void`

#### Defined in

[billing.ts:144](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L144)

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

#### Defined in

[billing.ts:153](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L153)
