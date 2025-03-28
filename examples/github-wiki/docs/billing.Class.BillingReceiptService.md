[github-wiki-example](../wiki/Home) / [billing](../wiki/billing) / BillingReceiptService

# Class: BillingReceiptService

Defined in: [billing.ts:163](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L163)

Service for generating billing receipts.
Provides functionality to generate and retrieve receipts for transactions.

## Constructors

### Constructor

> **new BillingReceiptService**(): `BillingReceiptService`

#### Returns

`BillingReceiptService`

## Methods

### generateReceipt()

> **generateReceipt**(`transaction`): [`BillingReceipt`](../wiki/billing.Interface.BillingReceipt)

Defined in: [billing.ts:173](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L173)

Generates a billing receipt for a transaction and stores it.
Each receipt includes a unique ID and timestamp, essential for record-keeping and customer service.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `transaction` | [`BillingTransaction`](../wiki/billing.Interface.BillingTransaction) | The billing transaction for which to generate a receipt. |

#### Returns

[`BillingReceipt`](../wiki/billing.Interface.BillingReceipt)

The generated billing receipt.

***

### getAllReceipts()

> **getAllReceipts**(): [`BillingReceipt`](../wiki/billing.Interface.BillingReceipt)[]

Defined in: [billing.ts:188](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L188)

Retrieves all the billing receipts that have been generated.
Useful for providing customers with copies of their receipts or for internal financial tracking.

#### Returns

[`BillingReceipt`](../wiki/billing.Interface.BillingReceipt)[]

An array of all billing receipts.
