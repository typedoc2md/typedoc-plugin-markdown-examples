**typedoc-plugin-markdown-examples** • [Readme](../../README.md) \| [API](../../modules.md)

***

[typedoc-plugin-markdown-examples](../../README.md) / [BillingModule](../README.md) / BillingReceiptService

# Class: BillingReceiptService

Service for generating billing receipts.
Provides functionality to generate and retrieve receipts for transactions.

## Constructors

### new BillingReceiptService()

> **new BillingReceiptService**(): [`BillingReceiptService`](BillingReceiptService.md)

#### Returns

[`BillingReceiptService`](BillingReceiptService.md)

## Properties

### receipts

> `private` **receipts**: [`BillingReceipt`](../interfaces/BillingReceipt.md)[] = `[]`

Stores all receipts generated for transactions.

#### Source

billing.ts:166

## Methods

### generateReceipt()

> **generateReceipt**(`transaction`): [`BillingReceipt`](../interfaces/BillingReceipt.md)

Generates a billing receipt for a transaction and stores it.
Each receipt includes a unique ID and timestamp, essential for record-keeping and customer service.

#### Parameters

• **transaction**: [`BillingTransaction`](../interfaces/BillingTransaction.md)

The billing transaction for which to generate a receipt.

#### Returns

[`BillingReceipt`](../interfaces/BillingReceipt.md)

The generated billing receipt.

#### Source

billing.ts:174

***

### getAllReceipts()

> **getAllReceipts**(): [`BillingReceipt`](../interfaces/BillingReceipt.md)[]

Retrieves all the billing receipts that have been generated.
Useful for providing customers with copies of their receipts or for internal financial tracking.

#### Returns

[`BillingReceipt`](../interfaces/BillingReceipt.md)[]

An array of all billing receipts.

#### Source

billing.ts:189
