[**typedoc-plugin-markdown-examples**](README.md) • **Docs**

***

[Home](README.md) / BillingModule

# BillingModule

This module provides the necessary types and services for managing billing operations.

It includes enums for payment methods and transaction statuses, interfaces for billing transactions and receipts,
and services to process transactions, manage billing history, and generate receipts.

This module ensures comprehensive handling of billing data and operations, facilitating integrations with various payment providers and internal systems. It serves as a foundation for the financial transaction processing system, providing traceability and accountability through structured data and services.

## Enumerations

### PaymentMethod

Enum representing different types of payment methods.
These are used to specify the payment mechanism chosen by a customer.

#### Enumeration Members

| Enumeration Member | Value | Description |
| :------ | :------ | :------ |
| `BankTransfer` | `"Bank Transfer"` | Payment via direct bank transfer. Used typically for larger transactions or where credit cards and PayPal are not viable. |
| `CreditCard` | `"Credit Card"` | Payment through credit card. |
| `PayPal` | `"PayPal"` | Payment through PayPal. Ideal for users who prefer not to directly use their credit card details. |

***

### TransactionStatus

Enum representing different transaction statuses.
These statuses indicate the current state of a billing transaction in the process pipeline.

#### Enumeration Members

| Enumeration Member | Value | Description |
| :------ | :------ | :------ |
| `Completed` | `"Completed"` | Transaction has been successfully processed. |
| `Failed` | `"Failed"` | Transaction failed due to an error or rejection. |
| `Pending` | `"Pending"` | Transaction has been initiated but not yet processed. |

## Classes

### BillingHistoryService

Service for managing billing history.
Provides functionality to store and retrieve the history of transactions.

#### Constructors

##### new BillingHistoryService()

```ts
new BillingHistoryService(): BillingHistoryService
```

###### Returns

[`BillingHistoryService`](BillingModule.md#billinghistoryservice)

#### Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `history` | `private` | [`BillingTransaction`](BillingModule.md#billingtransaction)[] | `[]` | Holds all transactions that have been added to the billing history. |

#### Methods

##### addTransactionToHistory()

```ts
addTransactionToHistory(transaction): void
```

Adds a transaction to the billing history.
This method is typically called after a transaction is completed to maintain a record.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`BillingTransaction`](BillingModule.md#billingtransaction) | The billing transaction to be added to the history. |

###### Returns

`void`

###### Source

[billing.ts:145](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/billing.ts#L145)

##### getBillingHistory()

```ts
getBillingHistory(): BillingTransaction[]
```

Retrieves the complete billing history, providing access to all transactions that have been recorded.
This is useful for historical analysis and auditing purposes.

###### Returns

[`BillingTransaction`](BillingModule.md#billingtransaction)[]

An array of all billing transactions in the history.

###### Source

[billing.ts:154](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/billing.ts#L154)

***

### BillingReceiptService

Service for generating billing receipts.
Provides functionality to generate and retrieve receipts for transactions.

#### Constructors

##### new BillingReceiptService()

```ts
new BillingReceiptService(): BillingReceiptService
```

###### Returns

[`BillingReceiptService`](BillingModule.md#billingreceiptservice)

#### Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `receipts` | `private` | [`BillingReceipt`](BillingModule.md#billingreceipt)[] | `[]` | Stores all receipts generated for transactions. |

#### Methods

##### generateReceipt()

```ts
generateReceipt(transaction): BillingReceipt
```

Generates a billing receipt for a transaction and stores it.
Each receipt includes a unique ID and timestamp, essential for record-keeping and customer service.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`BillingTransaction`](BillingModule.md#billingtransaction) | The billing transaction for which to generate a receipt. |

###### Returns

[`BillingReceipt`](BillingModule.md#billingreceipt)

The generated billing receipt.

###### Source

[billing.ts:174](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/billing.ts#L174)

##### getAllReceipts()

```ts
getAllReceipts(): BillingReceipt[]
```

Retrieves all the billing receipts that have been generated.
Useful for providing customers with copies of their receipts or for internal financial tracking.

###### Returns

[`BillingReceipt`](BillingModule.md#billingreceipt)[]

An array of all billing receipts.

###### Source

[billing.ts:189](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/billing.ts#L189)

***

### BillingService

Service for managing billing transactions.
Provides functionality to process and retrieve billing transactions.

#### Constructors

##### new BillingService()

```ts
new BillingService(): BillingService
```

###### Returns

[`BillingService`](BillingModule.md#billingservice)

#### Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `transactions` | `private` | [`BillingTransaction`](BillingModule.md#billingtransaction)[] | `[]` | Holds all processed transactions within the service. |

#### Methods

##### getAllTransactions()

```ts
getAllTransactions(): BillingTransaction[]
```

Retrieves all the billing transactions that have been processed.
Useful for audits and general transaction management.

###### Returns

[`BillingTransaction`](BillingModule.md#billingtransaction)[]

An array of all billing transactions.

###### Source

[billing.ts:126](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/billing.ts#L126)

##### processTransaction()

```ts
processTransaction(transaction): BillingTransaction
```

Processes a billing transaction by adding it to the list of transactions.
This simulates the transaction execution and storage in a production environment.

###### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `transaction` | [`BillingTransaction`](BillingModule.md#billingtransaction) | The billing transaction to be processed. |

###### Returns

[`BillingTransaction`](BillingModule.md#billingtransaction)

The processed billing transaction, now stored in the service.

###### Source

[billing.ts:116](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/billing.ts#L116)

## Interfaces

### BillingReceipt

Interface representing a billing receipt.
Provides a record of the transaction for both the customer and the business.

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `receiptId` | `string` | Unique identifier for the receipt. This ID is crucial for referencing and tracking the receipt<br />in financial records and customer queries. |
| `timestamp` | `number` | The timestamp (in UNIX epoch time) when the receipt was generated. Provides a precise record of when<br />the transaction was finalized and acknowledged. |
| `transaction` | [`BillingTransaction`](BillingModule.md#billingtransaction) | The transaction details associated with this receipt. Links the receipt to the actual transaction<br />that took place. |

***

### BillingTransaction

Interface representing a billing transaction.
This structure encapsulates all key details of a financial transaction within the system.

#### Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `amount` | `number` | The total amount of money involved in the transaction. This is usually in the smallest unit of the currency,<br />such as cents in USD. |
| `orderId` | `string` | Identifier for the order associated with this transaction. Helps link the transaction to specific goods or services purchased. |
| `paymentMethod` | [`PaymentMethod`](BillingModule.md#paymentmethod) | The method of payment used for the transaction, as defined by the PaymentMethod enum.<br />This indicates how the customer chose to pay (e.g., Credit Card, PayPal, Bank Transfer). |
| `status` | [`TransactionStatus`](BillingModule.md#transactionstatus) | The current status of the transaction, categorized by the TransactionStatus enum. Indicates whether the<br />transaction is pending, completed, or has failed. |
| `transactionId` | `string` | Unique identifier for the transaction. This ID is used to track and reference the transaction<br />throughout the billing process. |
