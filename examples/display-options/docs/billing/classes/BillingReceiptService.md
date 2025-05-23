[**dummy-typescript-api**](../../README.md)

***

[dummy-typescript-api](../../README.md) / [billing](../README.md) / BillingReceiptService

# Class: BillingReceiptService

Defined in: [billing.ts:163](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L163)

Service for generating billing receipts.
Provides functionality to generate and retrieve receipts for transactions.

## Constructors

### Constructor

```ts
new BillingReceiptService(): BillingReceiptService;
```

#### Returns

`BillingReceiptService`

## Methods

### generateReceipt()

```ts
generateReceipt(transaction): BillingReceipt;
```

Defined in: [billing.ts:173](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L173)

Generates a billing receipt for a transaction and stores it.
Each receipt includes a unique ID and timestamp, essential for record-keeping and customer service.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `transaction` | [`BillingTransaction`](../interfaces/BillingTransaction.md) | The billing transaction for which to generate a receipt. |

#### Returns

[`BillingReceipt`](../interfaces/BillingReceipt.md)

The generated billing receipt.

***

### getAllReceipts()

```ts
getAllReceipts(): BillingReceipt[];
```

Defined in: [billing.ts:188](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L188)

Retrieves all the billing receipts that have been generated.
Useful for providing customers with copies of their receipts or for internal financial tracking.

#### Returns

[`BillingReceipt`](../interfaces/BillingReceipt.md)[]

An array of all billing receipts.
