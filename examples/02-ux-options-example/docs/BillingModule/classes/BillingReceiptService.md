**typedoc-plugin-markdown-examples** • [API](../../README.md)

***

[Home](../../README.md) / [BillingModule](../README.md) / BillingReceiptService

# Class: BillingReceiptService

Service for generating billing receipts.
Provides functionality to generate and retrieve receipts for transactions.

## Constructors

### new BillingReceiptService()

```ts
new BillingReceiptService(): BillingReceiptService
```

#### Returns

[`BillingReceiptService`](BillingReceiptService.md)

## Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `receipts` | `private` | [`BillingReceipt`](../interfaces/BillingReceipt.md)[] | `[]` | Stores all receipts generated for transactions. |

## Methods

### generateReceipt()

```ts
generateReceipt(transaction): BillingReceipt
```

Generates a billing receipt for a transaction and stores it.
Each receipt includes a unique ID and timestamp, essential for record-keeping and customer service.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`BillingTransaction`](../interfaces/BillingTransaction.md) | The billing transaction for which to generate a receipt. |

#### Returns

[`BillingReceipt`](../interfaces/BillingReceipt.md)

The generated billing receipt.

#### Source

[billing.ts:174](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/billing.ts#L174)

***

### getAllReceipts()

```ts
getAllReceipts(): BillingReceipt[]
```

Retrieves all the billing receipts that have been generated.
Useful for providing customers with copies of their receipts or for internal financial tracking.

#### Returns

[`BillingReceipt`](../interfaces/BillingReceipt.md)[]

An array of all billing receipts.

#### Source

[billing.ts:189](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/billing.ts#L189)
