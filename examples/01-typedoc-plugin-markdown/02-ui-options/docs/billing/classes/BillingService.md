**ui-options-example** • [API](../../README.md)

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

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `transactions` | `private` | [`BillingTransaction`](../interfaces/BillingTransaction.md)[] |

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

[billing.ts:67](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/billing.ts#L67)

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

[billing.ts:58](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/billing.ts#L58)
