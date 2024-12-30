[**Default Options Example**](../../README.md)

***

[Default Options Example](../../modules.md) / [billing](../README.md) / BillingTransaction

# Interface: BillingTransaction

Defined in: [billing.ts:45](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L45)

Interface representing a billing transaction.
This structure encapsulates all key details of a financial transaction within the system.

## Properties

### amount

> **amount**: `number`

Defined in: [billing.ts:61](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L61)

The total amount of money involved in the transaction. This is usually in the smallest unit of the currency,
such as cents in USD.

***

### orderId

> **orderId**: `string`

Defined in: [billing.ts:55](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L55)

Identifier for the order associated with this transaction. Helps link the transaction to specific goods or services purchased.

***

### paymentMethod

> **paymentMethod**: [`PaymentMethod`](../enumerations/PaymentMethod.md)

Defined in: [billing.ts:67](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L67)

The method of payment used for the transaction, as defined by the PaymentMethod enum.
This indicates how the customer chose to pay (e.g., Credit Card, PayPal, Bank Transfer).

***

### status

> **status**: [`TransactionStatus`](../enumerations/TransactionStatus.md)

Defined in: [billing.ts:73](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L73)

The current status of the transaction, categorized by the TransactionStatus enum. Indicates whether the
transaction is pending, completed, or has failed.

***

### transactionId

> **transactionId**: `string`

Defined in: [billing.ts:50](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L50)

Unique identifier for the transaction. This ID is used to track and reference the transaction
throughout the billing process.
