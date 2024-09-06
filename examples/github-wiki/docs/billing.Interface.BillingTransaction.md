[github-wiki-example](../wiki/Home) / [billing](../wiki/billing) / BillingTransaction

# Interface: BillingTransaction

Interface representing a billing transaction.
This structure encapsulates all key details of a financial transaction within the system.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `amount` | `number` | The total amount of money involved in the transaction. This is usually in the smallest unit of the currency, such as cents in USD. | [billing.ts:61](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L61) |
| `orderId` | `string` | Identifier for the order associated with this transaction. Helps link the transaction to specific goods or services purchased. | [billing.ts:55](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L55) |
| `paymentMethod` | [`PaymentMethod`](../wiki/billing.Enumeration.PaymentMethod) | The method of payment used for the transaction, as defined by the PaymentMethod enum. This indicates how the customer chose to pay (e.g., Credit Card, PayPal, Bank Transfer). | [billing.ts:67](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L67) |
| `status` | [`TransactionStatus`](../wiki/billing.Enumeration.TransactionStatus) | The current status of the transaction, categorized by the TransactionStatus enum. Indicates whether the transaction is pending, completed, or has failed. | [billing.ts:73](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L73) |
| `transactionId` | `string` | Unique identifier for the transaction. This ID is used to track and reference the transaction throughout the billing process. | [billing.ts:50](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L50) |
