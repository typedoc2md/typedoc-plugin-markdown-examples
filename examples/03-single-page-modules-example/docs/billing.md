[**typedoc-plugin-markdown-examples**](README.md) • **Docs**

***

[Home](README.md) / billing

# billing

Includes enums for payment methods and transaction statuses, interfaces for billing transactions and receipts,
and services to process transactions, manage billing history, and generate receipts.

This module ensures comprehensive handling of billing data and operations, facilitating integrations with various payment providers and internal systems. It serves as a foundation for the financial transaction processing system, providing traceability and accountability through structured data and services.

## Enumerations

### PaymentMethod

Enum representing different types of payment methods.
These are used to specify the payment mechanism chosen by a customer.

#### Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `BankTransfer` | `"Bank Transfer"` | Payment via direct bank transfer. Used typically for larger transactions or where credit cards and PayPal are not viable. | billing.ts:23 |
| `CreditCard` | `"Credit Card"` | Payment through credit card. | billing.ts:17 |
| `PayPal` | `"PayPal"` | Payment through PayPal. Ideal for users who prefer not to directly use their credit card details. | billing.ts:20 |

***

### TransactionStatus

Enum representing different transaction statuses.
These statuses indicate the current state of a billing transaction in the process pipeline.

#### Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `Completed` | `"Completed"` | Transaction has been successfully processed. | billing.ts:35 |
| `Failed` | `"Failed"` | Transaction failed due to an error or rejection. | billing.ts:38 |
| `Pending` | `"Pending"` | Transaction has been initiated but not yet processed. | billing.ts:32 |

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

[`BillingHistoryService`](billing.md#billinghistoryservice)

#### Methods

##### addTransactionToHistory()

```ts
addTransactionToHistory(transaction): void
```

Adds a transaction to the billing history.
This method is typically called after a transaction is completed to maintain a record.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `transaction` | [`BillingTransaction`](billing.md#billingtransaction) | The billing transaction to be added to the history. |

###### Returns

`void`

###### Defined in

billing.ts:144

##### getBillingHistory()

```ts
getBillingHistory(): BillingTransaction[]
```

Retrieves the complete billing history, providing access to all transactions that have been recorded.
This is useful for historical analysis and auditing purposes.

###### Returns

[`BillingTransaction`](billing.md#billingtransaction)[]

An array of all billing transactions in the history.

###### Defined in

billing.ts:153

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

[`BillingReceiptService`](billing.md#billingreceiptservice)

#### Methods

##### generateReceipt()

```ts
generateReceipt(transaction): BillingReceipt
```

Generates a billing receipt for a transaction and stores it.
Each receipt includes a unique ID and timestamp, essential for record-keeping and customer service.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `transaction` | [`BillingTransaction`](billing.md#billingtransaction) | The billing transaction for which to generate a receipt. |

###### Returns

[`BillingReceipt`](billing.md#billingreceipt)

The generated billing receipt.

###### Defined in

billing.ts:173

##### getAllReceipts()

```ts
getAllReceipts(): BillingReceipt[]
```

Retrieves all the billing receipts that have been generated.
Useful for providing customers with copies of their receipts or for internal financial tracking.

###### Returns

[`BillingReceipt`](billing.md#billingreceipt)[]

An array of all billing receipts.

###### Defined in

billing.ts:188

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

[`BillingService`](billing.md#billingservice)

#### Methods

##### getAllTransactions()

```ts
getAllTransactions(): BillingTransaction[]
```

Retrieves all the billing transactions that have been processed.
Useful for audits and general transaction management.

###### Returns

[`BillingTransaction`](billing.md#billingtransaction)[]

An array of all billing transactions.

###### Defined in

billing.ts:125

##### processTransaction()

```ts
processTransaction(transaction): BillingTransaction
```

Processes a billing transaction by adding it to the list of transactions.
This simulates the transaction execution and storage in a production environment.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `transaction` | [`BillingTransaction`](billing.md#billingtransaction) | The billing transaction to be processed. |

###### Returns

[`BillingTransaction`](billing.md#billingtransaction)

The processed billing transaction, now stored in the service.

###### Defined in

billing.ts:115

## Interfaces

### BillingReceipt

Interface representing a billing receipt.
Provides a record of the transaction for both the customer and the business.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `receiptId` | `string` | Unique identifier for the receipt. This ID is crucial for referencing and tracking the receipt in financial records and customer queries. | billing.ts:85 |
| `timestamp` | `number` | The timestamp (in UNIX epoch time) when the receipt was generated. Provides a precise record of when the transaction was finalized and acknowledged. | billing.ts:97 |
| `transaction` | [`BillingTransaction`](billing.md#billingtransaction) | The transaction details associated with this receipt. Links the receipt to the actual transaction that took place. | billing.ts:91 |

***

### BillingTransaction

Interface representing a billing transaction.
This structure encapsulates all key details of a financial transaction within the system.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `amount` | `number` | The total amount of money involved in the transaction. This is usually in the smallest unit of the currency, such as cents in USD. | billing.ts:61 |
| `orderId` | `string` | Identifier for the order associated with this transaction. Helps link the transaction to specific goods or services purchased. | billing.ts:55 |
| `paymentMethod` | [`PaymentMethod`](billing.md#paymentmethod) | The method of payment used for the transaction, as defined by the PaymentMethod enum. This indicates how the customer chose to pay (e.g., Credit Card, PayPal, Bank Transfer). | billing.ts:67 |
| `status` | [`TransactionStatus`](billing.md#transactionstatus) | The current status of the transaction, categorized by the TransactionStatus enum. Indicates whether the transaction is pending, completed, or has failed. | billing.ts:73 |
| `transactionId` | `string` | Unique identifier for the transaction. This ID is used to track and reference the transaction throughout the billing process. | billing.ts:50 |
