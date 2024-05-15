[**typedoc-plugin-markdown-examples**](../../README.md) • **Docs**

***

[Home](../../README.md) / [BillingModule](../README.md) / BillingReceipt

# Interface: BillingReceipt

Interface representing a billing receipt.
Provides a record of the transaction for both the customer and the business.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `receiptId` | `string` | Unique identifier for the receipt. This ID is crucial for referencing and tracking the receipt in financial records and customer queries. |
| `timestamp` | `number` | The timestamp (in UNIX epoch time) when the receipt was generated. Provides a precise record of when the transaction was finalized and acknowledged. |
| `transaction` | [`BillingTransaction`](BillingTransaction.md) | The transaction details associated with this receipt. Links the receipt to the actual transaction that took place. |
