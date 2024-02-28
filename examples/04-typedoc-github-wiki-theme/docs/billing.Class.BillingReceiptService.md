[github-wiki-example](../wiki/Home) / [billing](../wiki/billing) / BillingReceiptService

# Class: BillingReceiptService

Service for generating billing receipts.

## Constructors

### new BillingReceiptService()

> **new BillingReceiptService**(): [`BillingReceiptService`](../wiki/billing.Class.BillingReceiptService)

#### Returns

[`BillingReceiptService`](../wiki/billing.Class.BillingReceiptService)

## Properties

### receipts

> **`private`** **receipts**: [`BillingReceipt`](../wiki/billing.Interface.BillingReceipt)[] = `[]`

#### Source

[billing.ts:101](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/04-typedoc-github-wiki-theme/src/billing.ts#L101)

## Methods

### generateReceipt()

> **generateReceipt**(`transaction`): [`BillingReceipt`](../wiki/billing.Interface.BillingReceipt)

Generate a billing receipt for a transaction.

#### Parameters

• **transaction**: [`BillingTransaction`](../wiki/billing.Interface.BillingTransaction)

The billing transaction for which to generate a receipt.

#### Returns

[`BillingReceipt`](../wiki/billing.Interface.BillingReceipt)

The generated billing receipt.

#### Source

[billing.ts:108](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/04-typedoc-github-wiki-theme/src/billing.ts#L108)

***

### getAllReceipts()

> **getAllReceipts**(): [`BillingReceipt`](../wiki/billing.Interface.BillingReceipt)[]

Get all billing receipts.

#### Returns

[`BillingReceipt`](../wiki/billing.Interface.BillingReceipt)[]

An array of all billing receipts.

#### Source

[billing.ts:122](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/04-typedoc-github-wiki-theme/src/billing.ts#L122)
