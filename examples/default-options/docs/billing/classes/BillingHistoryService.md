[**Default Options Example**](../../README.md)

***

[Default Options Example](../../modules.md) / [billing](../README.md) / BillingHistoryService

# Class: BillingHistoryService

Defined in: [billing.ts:135](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L135)

Service for managing billing history.
Provides functionality to store and retrieve the history of transactions.

## Constructors

### new BillingHistoryService()

> **new BillingHistoryService**(): `BillingHistoryService`

#### Returns

`BillingHistoryService`

## Methods

### addTransactionToHistory()

> **addTransactionToHistory**(`transaction`): `void`

Defined in: [billing.ts:144](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L144)

Adds a transaction to the billing history.
This method is typically called after a transaction is completed to maintain a record.

#### Parameters

##### transaction

[`BillingTransaction`](../interfaces/BillingTransaction.md)

The billing transaction to be added to the history.

#### Returns

`void`

***

### getBillingHistory()

> **getBillingHistory**(): [`BillingTransaction`](../interfaces/BillingTransaction.md)[]

Defined in: [billing.ts:153](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L153)

Retrieves the complete billing history, providing access to all transactions that have been recorded.
This is useful for historical analysis and auditing purposes.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)[]

An array of all billing transactions in the history.
