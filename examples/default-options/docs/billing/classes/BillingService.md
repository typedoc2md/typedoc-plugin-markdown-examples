[**Default Options Example**](../../README.md) • **Docs**

***

[Default Options Example](../../modules.md) / [billing](../README.md) / BillingService

# Class: BillingService

Service for managing billing transactions.
Provides functionality to process and retrieve billing transactions.

## Constructors

### new BillingService()

> **new BillingService**(): [`BillingService`](BillingService.md)

#### Returns

[`BillingService`](BillingService.md)

## Methods

### getAllTransactions()

> **getAllTransactions**(): [`BillingTransaction`](../interfaces/BillingTransaction.md)[]

Retrieves all the billing transactions that have been processed.
Useful for audits and general transaction management.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)[]

An array of all billing transactions.

#### Defined in

[billing.ts:125](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L125)

***

### processTransaction()

> **processTransaction**(`transaction`): [`BillingTransaction`](../interfaces/BillingTransaction.md)

Processes a billing transaction by adding it to the list of transactions.
This simulates the transaction execution and storage in a production environment.

#### Parameters

• **transaction**: [`BillingTransaction`](../interfaces/BillingTransaction.md)

The billing transaction to be processed.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)

The processed billing transaction, now stored in the service.

#### Defined in

[billing.ts:115](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L115)
