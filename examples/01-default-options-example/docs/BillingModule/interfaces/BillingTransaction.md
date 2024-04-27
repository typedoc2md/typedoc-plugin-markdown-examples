**typedoc-plugin-markdown-examples** • [Readme](../../README.md) \| [API](../../modules.md)

***

[typedoc-plugin-markdown-examples](../../README.md) / [BillingModule](../README.md) / BillingTransaction

# Interface: BillingTransaction

Interface representing a billing transaction.
This structure encapsulates all key details of a financial transaction within the system.

## Properties

### amount

> **amount**: `number`

The total amount of money involved in the transaction. This is usually in the smallest unit of the currency,
such as cents in USD.

#### Source

[billing.ts:62](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/billing.ts#L62)

***

### orderId

> **orderId**: `string`

Identifier for the order associated with this transaction. Helps link the transaction to specific goods or services purchased.

#### Source

[billing.ts:56](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/billing.ts#L56)

***

### paymentMethod

> **paymentMethod**: [`PaymentMethod`](../enumerations/PaymentMethod.md)

The method of payment used for the transaction, as defined by the PaymentMethod enum.
This indicates how the customer chose to pay (e.g., Credit Card, PayPal, Bank Transfer).

#### Source

[billing.ts:68](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/billing.ts#L68)

***

### status

> **status**: [`TransactionStatus`](../enumerations/TransactionStatus.md)

The current status of the transaction, categorized by the TransactionStatus enum. Indicates whether the
transaction is pending, completed, or has failed.

#### Source

[billing.ts:74](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/billing.ts#L74)

***

### transactionId

> **transactionId**: `string`

Unique identifier for the transaction. This ID is used to track and reference the transaction
throughout the billing process.

#### Source

[billing.ts:51](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/billing.ts#L51)