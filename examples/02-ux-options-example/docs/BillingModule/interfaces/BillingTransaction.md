[typedoc-plugin-markdown-examples](../../README.md) • Docs

***

[Home](../../README.md) / [BillingModule](../README.md) / BillingTransaction

# Interface: BillingTransaction

Interface representing a billing transaction.
This structure encapsulates all key details of a financial transaction within the system.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The total amount of money involved in the transaction. This is usually in the smallest unit of the currency,<br />such as cents in USD. |
| `orderId` | `string` | Identifier for the order associated with this transaction. Helps link the transaction to specific goods or services purchased. |
| `paymentMethod` | [`PaymentMethod`](../enumerations/PaymentMethod.md) | The method of payment used for the transaction, as defined by the PaymentMethod enum.<br />This indicates how the customer chose to pay (e.g., Credit Card, PayPal, Bank Transfer). |
| `status` | [`TransactionStatus`](../enumerations/TransactionStatus.md) | The current status of the transaction, categorized by the TransactionStatus enum. Indicates whether the<br />transaction is pending, completed, or has failed. |
| `transactionId` | `string` | Unique identifier for the transaction. This ID is used to track and reference the transaction<br />throughout the billing process. |
