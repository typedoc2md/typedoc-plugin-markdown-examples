# BillingTransaction

Interface representing a billing transaction.
This structure encapsulates all key details of a financial transaction within the system.

## Properties

### amount

```ts
amount: number;
```

The total amount of money involved in the transaction. This is usually in the smallest unit of the currency,
such as cents in USD.

***

### orderId

```ts
orderId: string;
```

Identifier for the order associated with this transaction. Helps link the transaction to specific goods or services purchased.

***

### paymentMethod

```ts
paymentMethod: PaymentMethod;
```

The method of payment used for the transaction, as defined by the PaymentMethod enum.
This indicates how the customer chose to pay (e.g., Credit Card, PayPal, Bank Transfer).

***

### status

```ts
status: TransactionStatus;
```

The current status of the transaction, categorized by the TransactionStatus enum. Indicates whether the
transaction is pending, completed, or has failed.

***

### transactionId

```ts
transactionId: string;
```

Unique identifier for the transaction. This ID is used to track and reference the transaction
throughout the billing process.
