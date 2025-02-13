[github-wiki-example](../wiki/Home) / [billing](../wiki/billing) / BillingReceipt

# Interface: BillingReceipt

Defined in: [billing.ts:80](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L80)

Interface representing a billing receipt.
Provides a record of the transaction for both the customer and the business.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="receiptid"></a> `receiptId` | `string` | Unique identifier for the receipt. This ID is crucial for referencing and tracking the receipt in financial records and customer queries. | [billing.ts:85](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L85) |
| <a id="timestamp"></a> `timestamp` | `number` | The timestamp (in UNIX epoch time) when the receipt was generated. Provides a precise record of when the transaction was finalized and acknowledged. | [billing.ts:97](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L97) |
| <a id="transaction"></a> `transaction` | [`BillingTransaction`](../wiki/billing.Interface.BillingTransaction) | The transaction details associated with this receipt. Links the receipt to the actual transaction that took place. | [billing.ts:91](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L91) |
