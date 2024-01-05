**ui-options-example** • API Documentation

***

[Home](../../README.md) / [billing](../README.md) / BillingService

# Class: BillingService

Service for managing billing transactions.

## Constructors

### new BillingService()

```ts
new BillingService(): BillingService
```

#### Returns

[`BillingService`](BillingService.md)

## Properties

| Modifier | Property | Type |
| :------ | :------ | :------ |
| `private` | `transactions` | [`BillingTransaction`](../interfaces/BillingTransaction.md)[] |

## Methods

### getAllTransactions()

```ts
getAllTransactions(): BillingTransaction[]
```

Get all billing transactions.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)[]

An array of all billing transactions.

#### Source

billing.ts:67

***

### processTransaction()

```ts
processTransaction(transaction): BillingTransaction
```

Process a billing transaction.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`BillingTransaction`](../interfaces/BillingTransaction.md) | The billing transaction to be processed. |

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)

The processed billing transaction.

#### Source

billing.ts:58

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
