[**Default Options Example**](../../README.md)

***

[Default Options Example](../../modules.md) / [billing](../README.md) / BillingReceipt

# Interface: BillingReceipt

Defined in: [billing.ts:80](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L80)

Interface representing a billing receipt.
Provides a record of the transaction for both the customer and the business.

## Properties

### receiptId

> **receiptId**: `string`

Defined in: [billing.ts:85](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L85)

Unique identifier for the receipt. This ID is crucial for referencing and tracking the receipt
in financial records and customer queries.

***

### timestamp

> **timestamp**: `number`

Defined in: [billing.ts:97](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L97)

The timestamp (in UNIX epoch time) when the receipt was generated. Provides a precise record of when
the transaction was finalized and acknowledged.

***

### transaction

> **transaction**: [`BillingTransaction`](BillingTransaction.md)

Defined in: [billing.ts:91](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L91)

The transaction details associated with this receipt. Links the receipt to the actual transaction
that took place.
