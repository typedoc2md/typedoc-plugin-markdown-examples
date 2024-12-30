[**dummy-typescript-api**](README.md)

***

[Home](README.md) / billing

# billing

Includes enums for payment methods and transaction statuses, interfaces for billing transactions and receipts,
and services to process transactions, manage billing history, and generate receipts.

This module ensures comprehensive handling of billing data and operations, facilitating integrations with various payment providers and internal systems. It serves as a foundation for the financial transaction processing system, providing traceability and accountability through structured data and services.

## Enumerations

### PaymentMethod

Defined in: [billing.ts:15](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L15)

Enum representing different types of payment methods.
These are used to specify the payment mechanism chosen by a customer.

#### Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="banktransfer"></a> `BankTransfer` | `"Bank Transfer"` | Payment via direct bank transfer. Used typically for larger transactions or where credit cards and PayPal are not viable. | [billing.ts:23](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L23) |
| <a id="creditcard"></a> `CreditCard` | `"Credit Card"` | Payment through credit card. | [billing.ts:17](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L17) |
| <a id="paypal"></a> `PayPal` | `"PayPal"` | Payment through PayPal. Ideal for users who prefer not to directly use their credit card details. | [billing.ts:20](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L20) |

***

### TransactionStatus

Defined in: [billing.ts:30](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L30)

Enum representing different transaction statuses.
These statuses indicate the current state of a billing transaction in the process pipeline.

#### Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="completed"></a> `Completed` | `"Completed"` | Transaction has been successfully processed. | [billing.ts:35](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L35) |
| <a id="failed"></a> `Failed` | `"Failed"` | Transaction failed due to an error or rejection. | [billing.ts:38](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L38) |
| <a id="pending"></a> `Pending` | `"Pending"` | Transaction has been initiated but not yet processed. | [billing.ts:32](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L32) |

## Classes

### BillingHistoryService

Defined in: [billing.ts:135](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L135)

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

Defined in: [billing.ts:144](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L144)

Adds a transaction to the billing history.
This method is typically called after a transaction is completed to maintain a record.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `transaction` | [`BillingTransaction`](billing.md#billingtransaction) | The billing transaction to be added to the history. |

###### Returns

`void`

##### getBillingHistory()

```ts
getBillingHistory(): BillingTransaction[]
```

Defined in: [billing.ts:153](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L153)

Retrieves the complete billing history, providing access to all transactions that have been recorded.
This is useful for historical analysis and auditing purposes.

###### Returns

[`BillingTransaction`](billing.md#billingtransaction)[]

An array of all billing transactions in the history.

***

### BillingReceiptService

Defined in: [billing.ts:163](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L163)

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

Defined in: [billing.ts:173](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L173)

Generates a billing receipt for a transaction and stores it.
Each receipt includes a unique ID and timestamp, essential for record-keeping and customer service.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `transaction` | [`BillingTransaction`](billing.md#billingtransaction) | The billing transaction for which to generate a receipt. |

###### Returns

[`BillingReceipt`](billing.md#billingreceipt)

The generated billing receipt.

##### getAllReceipts()

```ts
getAllReceipts(): BillingReceipt[]
```

Defined in: [billing.ts:188](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L188)

Retrieves all the billing receipts that have been generated.
Useful for providing customers with copies of their receipts or for internal financial tracking.

###### Returns

[`BillingReceipt`](billing.md#billingreceipt)[]

An array of all billing receipts.

***

### BillingService

Defined in: [billing.ts:105](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L105)

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

Defined in: [billing.ts:125](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L125)

Retrieves all the billing transactions that have been processed.
Useful for audits and general transaction management.

###### Returns

[`BillingTransaction`](billing.md#billingtransaction)[]

An array of all billing transactions.

##### processTransaction()

```ts
processTransaction(transaction): BillingTransaction
```

Defined in: [billing.ts:115](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L115)

Processes a billing transaction by adding it to the list of transactions.
This simulates the transaction execution and storage in a production environment.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `transaction` | [`BillingTransaction`](billing.md#billingtransaction) | The billing transaction to be processed. |

###### Returns

[`BillingTransaction`](billing.md#billingtransaction)

The processed billing transaction, now stored in the service.

## Interfaces

### BillingReceipt

Defined in: [billing.ts:80](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L80)

Interface representing a billing receipt.
Provides a record of the transaction for both the customer and the business.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="receiptid"></a> `receiptId` | `string` | Unique identifier for the receipt. This ID is crucial for referencing and tracking the receipt in financial records and customer queries. | [billing.ts:85](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L85) |
| <a id="timestamp"></a> `timestamp` | `number` | The timestamp (in UNIX epoch time) when the receipt was generated. Provides a precise record of when the transaction was finalized and acknowledged. | [billing.ts:97](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L97) |
| <a id="transaction"></a> `transaction` | [`BillingTransaction`](billing.md#billingtransaction) | The transaction details associated with this receipt. Links the receipt to the actual transaction that took place. | [billing.ts:91](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L91) |

***

### BillingTransaction

Defined in: [billing.ts:45](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L45)

Interface representing a billing transaction.
This structure encapsulates all key details of a financial transaction within the system.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="amount"></a> `amount` | `number` | The total amount of money involved in the transaction. This is usually in the smallest unit of the currency, such as cents in USD. | [billing.ts:61](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L61) |
| <a id="orderid"></a> `orderId` | `string` | Identifier for the order associated with this transaction. Helps link the transaction to specific goods or services purchased. | [billing.ts:55](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L55) |
| <a id="paymentmethod-1"></a> `paymentMethod` | [`PaymentMethod`](billing.md#paymentmethod) | The method of payment used for the transaction, as defined by the PaymentMethod enum. This indicates how the customer chose to pay (e.g., Credit Card, PayPal, Bank Transfer). | [billing.ts:67](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L67) |
| <a id="status"></a> `status` | [`TransactionStatus`](billing.md#transactionstatus) | The current status of the transaction, categorized by the TransactionStatus enum. Indicates whether the transaction is pending, completed, or has failed. | [billing.ts:73](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L73) |
| <a id="transactionid"></a> `transactionId` | `string` | Unique identifier for the transaction. This ID is used to track and reference the transaction throughout the billing process. | [billing.ts:50](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L50) |
