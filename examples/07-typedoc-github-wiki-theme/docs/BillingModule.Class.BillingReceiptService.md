[github-wiki-example](../wiki/Home) / [BillingModule](../wiki/BillingModule) / BillingReceiptService

# Class: BillingReceiptService

Service for generating billing receipts.
Provides functionality to generate and retrieve receipts for transactions.

## Constructors

### new BillingReceiptService()

> **new BillingReceiptService**(): [`BillingReceiptService`](../wiki/BillingModule.Class.BillingReceiptService)

#### Returns

[`BillingReceiptService`](../wiki/BillingModule.Class.BillingReceiptService)

## Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `receipts` | `private` | [`BillingReceipt`](../wiki/BillingModule.Interface.BillingReceipt)[] | `[]` | Stores all receipts generated for transactions. |

## Methods

### generateReceipt()

> **generateReceipt**(`transaction`): [`BillingReceipt`](../wiki/BillingModule.Interface.BillingReceipt)

Generates a billing receipt for a transaction and stores it.
Each receipt includes a unique ID and timestamp, essential for record-keeping and customer service.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`BillingTransaction`](../wiki/BillingModule.Interface.BillingTransaction) | The billing transaction for which to generate a receipt. |

#### Returns

[`BillingReceipt`](../wiki/BillingModule.Interface.BillingReceipt)

The generated billing receipt.

#### Source

[billing.ts:174](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/billing.ts#L174)

***

### getAllReceipts()

> **getAllReceipts**(): [`BillingReceipt`](../wiki/BillingModule.Interface.BillingReceipt)[]

Retrieves all the billing receipts that have been generated.
Useful for providing customers with copies of their receipts or for internal financial tracking.

#### Returns

[`BillingReceipt`](../wiki/BillingModule.Interface.BillingReceipt)[]

An array of all billing receipts.

#### Source

[billing.ts:189](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/38eb87a4b515962ebbfbbc47ab56d2442dce4b6d/examples/src/billing.ts#L189)
