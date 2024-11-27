[**Default Options Example**](../../README.md)

***

[Default Options Example](../../modules.md) / [billing](../README.md) / BillingReceipt

# Interface: BillingReceipt

Interface representing a billing receipt.
Provides a record of the transaction for both the customer and the business.

## Properties

### receiptId

> **receiptId**: `string`

Unique identifier for the receipt. This ID is crucial for referencing and tracking the receipt
in financial records and customer queries.

#### Defined in

[billing.ts:85](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L85)

***

### timestamp

> **timestamp**: `number`

The timestamp (in UNIX epoch time) when the receipt was generated. Provides a precise record of when
the transaction was finalized and acknowledged.

#### Defined in

[billing.ts:97](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L97)

***

### transaction

> **transaction**: [`BillingTransaction`](BillingTransaction.md)

The transaction details associated with this receipt. Links the receipt to the actual transaction
that took place.

#### Defined in

[billing.ts:91](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L91)
