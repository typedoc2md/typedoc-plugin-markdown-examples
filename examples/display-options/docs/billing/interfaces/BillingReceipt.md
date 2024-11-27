[**dummy-typescript-api**](../../README.md)

***

[Home](../../README.md) / [billing](../README.md) / BillingReceipt

# Interface: BillingReceipt

Interface representing a billing receipt.
Provides a record of the transaction for both the customer and the business.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `receiptId` | `string` | Unique identifier for the receipt. This ID is crucial for referencing and tracking the receipt in financial records and customer queries. | [billing.ts:85](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L85) |
| `timestamp` | `number` | The timestamp (in UNIX epoch time) when the receipt was generated. Provides a precise record of when the transaction was finalized and acknowledged. | [billing.ts:97](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L97) |
| `transaction` | [`BillingTransaction`](BillingTransaction.md) | The transaction details associated with this receipt. Links the receipt to the actual transaction that took place. | [billing.ts:91](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L91) |
