**typedoc-plugin-markdown-examples** • [Readme](../../README.md) \| [API](../../modules.md)

***

[typedoc-plugin-markdown-examples](../../README.md) / [BillingModule](../README.md) / BillingService

# Class: BillingService

Service for managing billing transactions.
Provides functionality to process and retrieve billing transactions.

## Constructors

### new BillingService()

> **new BillingService**(): [`BillingService`](BillingService.md)

#### Returns

[`BillingService`](BillingService.md)

## Properties

### transactions

> `private` **transactions**: [`BillingTransaction`](../interfaces/BillingTransaction.md)[] = `[]`

Holds all processed transactions within the service.

#### Source

billing.ts:108

## Methods

### getAllTransactions()

> **getAllTransactions**(): [`BillingTransaction`](../interfaces/BillingTransaction.md)[]

Retrieves all the billing transactions that have been processed.
Useful for audits and general transaction management.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)[]

An array of all billing transactions.

#### Source

billing.ts:126

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

#### Source

billing.ts:116
