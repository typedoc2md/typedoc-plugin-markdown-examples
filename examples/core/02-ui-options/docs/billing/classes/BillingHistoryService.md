**ui-options-example** • API Documentation

***

[Home](../../README.md) / [billing](../README.md) / BillingHistoryService

# Class: BillingHistoryService

Service for managing billing history.

## Constructors

### new BillingHistoryService()

```ts
new BillingHistoryService(): BillingHistoryService
```

#### Returns

[`BillingHistoryService`](BillingHistoryService.md)

## Properties

| Modifier | Property | Type |
| :------ | :------ | :------ |
| `private` | `history` | [`BillingTransaction`](../interfaces/BillingTransaction.md)[] |

## Methods

### addTransactionToHistory()

```ts
addTransactionToHistory(transaction): void
```

Add a transaction to the billing history.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`BillingTransaction`](../interfaces/BillingTransaction.md) | The billing transaction to be added to the history. |

#### Returns

`void`

#### Source

billing.ts:83

***

### getBillingHistory()

```ts
getBillingHistory(): BillingTransaction[]
```

Get the entire billing history.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)[]

An array of all billing transactions in the history.

#### Source

billing.ts:91

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
