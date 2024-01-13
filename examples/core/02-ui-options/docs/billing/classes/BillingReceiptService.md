**ui-options-example** • API Documentation

***

[Home](../../README.md) / [billing](../README.md) / BillingReceiptService

# Class: BillingReceiptService

Service for generating billing receipts.

## Constructors

### new BillingReceiptService()

```ts
new BillingReceiptService(): BillingReceiptService
```

#### Returns

[`BillingReceiptService`](BillingReceiptService.md)

## Properties

| Modifier | Property | Type |
| :------ | :------ | :------ |
| `private` | `receipts` | [`BillingReceipt`](../interfaces/BillingReceipt.md)[] |

## Methods

### generateReceipt()

```ts
generateReceipt(transaction): BillingReceipt
```

Generate a billing receipt for a transaction.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`BillingTransaction`](../interfaces/BillingTransaction.md) | The billing transaction for which to generate a receipt. |

#### Returns

[`BillingReceipt`](../interfaces/BillingReceipt.md)

The generated billing receipt.

#### Source

[billing.ts:108](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/ce7cd91/examples/core/src/billing.ts#L108)

***

### getAllReceipts()

```ts
getAllReceipts(): BillingReceipt[]
```

Get all billing receipts.

#### Returns

[`BillingReceipt`](../interfaces/BillingReceipt.md)[]

An array of all billing receipts.

#### Source

[billing.ts:122](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/ce7cd91/examples/core/src/billing.ts#L122)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
