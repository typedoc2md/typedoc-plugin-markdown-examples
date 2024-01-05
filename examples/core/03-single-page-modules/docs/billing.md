[single-page-modules-example](README.md) / billing

# billing

This module contains types and services related to billing.

## Contents

- [Enumerations](billing.md#enumerations)
    - [PaymentMethod](billing.md#paymentmethod)
    - [TransactionStatus](billing.md#transactionstatus)
- [Classes](billing.md#classes)
    - [BillingHistoryService](billing.md#billinghistoryservice)
    - [BillingReceiptService](billing.md#billingreceiptservice)
    - [BillingService](billing.md#billingservice)
- [Interfaces](billing.md#interfaces)
    - [BillingReceipt](billing.md#billingreceipt)
    - [BillingTransaction](billing.md#billingtransaction)

## Enumerations

### PaymentMethod

Enum representing different types of payment methods.

#### Enumeration Members

##### BankTransfer

> **BankTransfer**: `"Bank Transfer"`

###### Source

billing.ts:14

##### CreditCard

> **CreditCard**: `"Credit Card"`

###### Source

billing.ts:12

##### PayPal

> **PayPal**: `"PayPal"`

###### Source

billing.ts:13

***

### TransactionStatus

Enum representing different transaction statuses.

#### Enumeration Members

##### Completed

> **Completed**: `"Completed"`

###### Source

billing.ts:22

##### Failed

> **Failed**: `"Failed"`

###### Source

billing.ts:23

##### Pending

> **Pending**: `"Pending"`

###### Source

billing.ts:21

## Classes

### BillingHistoryService

Service for managing billing history.

#### Constructors

##### new BillingHistoryService()

> **new BillingHistoryService**(): [`BillingHistoryService`](billing.md#billinghistoryservice)

###### Returns

[`BillingHistoryService`](billing.md#billinghistoryservice)

#### Properties

##### history

> **`private`** **history**: [`BillingTransaction`](billing.md#billingtransaction)[] = `[]`

###### Source

billing.ts:77

#### Methods

##### addTransactionToHistory()

> **addTransactionToHistory**(`transaction`): `void`

Add a transaction to the billing history.

###### Parameters

• **transaction**: [`BillingTransaction`](billing.md#billingtransaction)

The billing transaction to be added to the history.

###### Returns

`void`

###### Source

billing.ts:83

##### getBillingHistory()

> **getBillingHistory**(): [`BillingTransaction`](billing.md#billingtransaction)[]

Get the entire billing history.

###### Returns

[`BillingTransaction`](billing.md#billingtransaction)[]

An array of all billing transactions in the history.

###### Source

billing.ts:91

***

### BillingReceiptService

Service for generating billing receipts.

#### Constructors

##### new BillingReceiptService()

> **new BillingReceiptService**(): [`BillingReceiptService`](billing.md#billingreceiptservice)

###### Returns

[`BillingReceiptService`](billing.md#billingreceiptservice)

#### Properties

##### receipts

> **`private`** **receipts**: [`BillingReceipt`](billing.md#billingreceipt)[] = `[]`

###### Source

billing.ts:101

#### Methods

##### generateReceipt()

> **generateReceipt**(`transaction`): [`BillingReceipt`](billing.md#billingreceipt)

Generate a billing receipt for a transaction.

###### Parameters

• **transaction**: [`BillingTransaction`](billing.md#billingtransaction)

The billing transaction for which to generate a receipt.

###### Returns

[`BillingReceipt`](billing.md#billingreceipt)

The generated billing receipt.

###### Source

billing.ts:108

##### getAllReceipts()

> **getAllReceipts**(): [`BillingReceipt`](billing.md#billingreceipt)[]

Get all billing receipts.

###### Returns

[`BillingReceipt`](billing.md#billingreceipt)[]

An array of all billing receipts.

###### Source

billing.ts:122

***

### BillingService

Service for managing billing transactions.

#### Constructors

##### new BillingService()

> **new BillingService**(): [`BillingService`](billing.md#billingservice)

###### Returns

[`BillingService`](billing.md#billingservice)

#### Properties

##### transactions

> **`private`** **transactions**: [`BillingTransaction`](billing.md#billingtransaction)[] = `[]`

###### Source

billing.ts:51

#### Methods

##### getAllTransactions()

> **getAllTransactions**(): [`BillingTransaction`](billing.md#billingtransaction)[]

Get all billing transactions.

###### Returns

[`BillingTransaction`](billing.md#billingtransaction)[]

An array of all billing transactions.

###### Source

billing.ts:67

##### processTransaction()

> **processTransaction**(`transaction`): [`BillingTransaction`](billing.md#billingtransaction)

Process a billing transaction.

###### Parameters

• **transaction**: [`BillingTransaction`](billing.md#billingtransaction)

The billing transaction to be processed.

###### Returns

[`BillingTransaction`](billing.md#billingtransaction)

The processed billing transaction.

###### Source

billing.ts:58

## Interfaces

### BillingReceipt

Interface representing a billing receipt.

#### Properties

##### receiptId

> **receiptId**: `string`

###### Source

billing.ts:41

##### timestamp

> **timestamp**: `number`

###### Source

billing.ts:43

##### transaction

> **transaction**: [`BillingTransaction`](billing.md#billingtransaction)

###### Source

billing.ts:42

***

### BillingTransaction

Interface representing a billing transaction.

#### Properties

##### amount

> **amount**: `number`

###### Source

billing.ts:32

##### orderId

> **orderId**: `string`

###### Source

billing.ts:31

##### paymentMethod

> **paymentMethod**: [`PaymentMethod`](billing.md#paymentmethod)

###### Source

billing.ts:33

##### status

> **status**: [`TransactionStatus`](billing.md#transactionstatus)

###### Source

billing.ts:34

##### transactionId

> **transactionId**: `string`

###### Source

billing.ts:30

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
