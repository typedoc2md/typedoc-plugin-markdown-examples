**default-options-example** • [Readme](../../README.md) \| [API](../../modules.md)

***

[default-options-example](../../README.md) / [billing](../README.md) / BillingReceiptService

# Class: BillingReceiptService

Service for generating billing receipts.

## Constructors

### new BillingReceiptService()

> **new BillingReceiptService**(): [`BillingReceiptService`](BillingReceiptService.md)

#### Returns

[`BillingReceiptService`](BillingReceiptService.md)

## Properties

### receipts

> **`private`** **receipts**: [`BillingReceipt`](../interfaces/BillingReceipt.md)[] = `[]`

#### Source

[billing.ts:101](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/billing.ts#L101)

## Methods

### generateReceipt()

> **generateReceipt**(`transaction`): [`BillingReceipt`](../interfaces/BillingReceipt.md)

Generate a billing receipt for a transaction.

#### Parameters

• **transaction**: [`BillingTransaction`](../interfaces/BillingTransaction.md)

The billing transaction for which to generate a receipt.

#### Returns

[`BillingReceipt`](../interfaces/BillingReceipt.md)

The generated billing receipt.

#### Source

[billing.ts:108](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/billing.ts#L108)

***

### getAllReceipts()

> **getAllReceipts**(): [`BillingReceipt`](../interfaces/BillingReceipt.md)[]

Get all billing receipts.

#### Returns

[`BillingReceipt`](../interfaces/BillingReceipt.md)[]

An array of all billing receipts.

#### Source

[billing.ts:122](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/billing.ts#L122)
