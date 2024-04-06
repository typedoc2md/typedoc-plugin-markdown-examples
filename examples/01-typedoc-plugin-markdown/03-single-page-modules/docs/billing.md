[single-page-modules-example](README.md) / billing

# billing

This module contains types and services related to billing.

## Enumerations

### PaymentMethod

Enum representing different types of payment methods.

#### Enumeration Members

##### BankTransfer

> **BankTransfer**: `"Bank Transfer"`

###### Source

[billing.ts:14](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L14)

##### CreditCard

> **CreditCard**: `"Credit Card"`

###### Source

[billing.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L12)

##### PayPal

> **PayPal**: `"PayPal"`

###### Source

[billing.ts:13](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L13)

***

### TransactionStatus

Enum representing different transaction statuses.

#### Enumeration Members

##### Completed

> **Completed**: `"Completed"`

###### Source

[billing.ts:22](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L22)

##### Failed

> **Failed**: `"Failed"`

###### Source

[billing.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L23)

##### Pending

> **Pending**: `"Pending"`

###### Source

[billing.ts:21](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L21)

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

[billing.ts:77](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L77)

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

[billing.ts:83](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L83)

##### getBillingHistory()

> **getBillingHistory**(): [`BillingTransaction`](billing.md#billingtransaction)[]

Get the entire billing history.

###### Returns

[`BillingTransaction`](billing.md#billingtransaction)[]

An array of all billing transactions in the history.

###### Source

[billing.ts:91](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L91)

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

[billing.ts:101](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L101)

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

[billing.ts:108](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L108)

##### getAllReceipts()

> **getAllReceipts**(): [`BillingReceipt`](billing.md#billingreceipt)[]

Get all billing receipts.

###### Returns

[`BillingReceipt`](billing.md#billingreceipt)[]

An array of all billing receipts.

###### Source

[billing.ts:122](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L122)

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

[billing.ts:51](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L51)

#### Methods

##### getAllTransactions()

> **getAllTransactions**(): [`BillingTransaction`](billing.md#billingtransaction)[]

Get all billing transactions.

###### Returns

[`BillingTransaction`](billing.md#billingtransaction)[]

An array of all billing transactions.

###### Source

[billing.ts:67](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L67)

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

[billing.ts:58](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L58)

## Interfaces

### BillingReceipt

Interface representing a billing receipt.

#### Properties

##### receiptId

> **receiptId**: `string`

###### Source

[billing.ts:41](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L41)

##### timestamp

> **timestamp**: `number`

###### Source

[billing.ts:43](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L43)

##### transaction

> **transaction**: [`BillingTransaction`](billing.md#billingtransaction)

###### Source

[billing.ts:42](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L42)

***

### BillingTransaction

Interface representing a billing transaction.

#### Properties

##### amount

> **amount**: `number`

###### Source

[billing.ts:32](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L32)

##### orderId

> **orderId**: `string`

###### Source

[billing.ts:31](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L31)

##### paymentMethod

> **paymentMethod**: [`PaymentMethod`](billing.md#paymentmethod)

###### Source

[billing.ts:33](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L33)

##### status

> **status**: [`TransactionStatus`](billing.md#transactionstatus)

###### Source

[billing.ts:34](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L34)

##### transactionId

> **transactionId**: `string`

###### Source

[billing.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/3728586/examples/01-typedoc-plugin-markdown/src/billing.ts#L30)
