**default-options-example** • [Readme](../../README.md) \| API

***

[default-options-example](../../modules.md) / [billing](../README.md) / BillingService

# Class: BillingService

Service for managing billing transactions.

## Contents

- [Constructors](BillingService.md#constructors)
    - [new BillingService](BillingService.md#constructors)
- [Properties](BillingService.md#properties)
    - [transactions](BillingService.md#transactions)
- [Methods](BillingService.md#methods)
    - [getAllTransactions](BillingService.md#getalltransactions)
    - [processTransaction](BillingService.md#processtransaction)

## Constructors

### new BillingService()

> **new BillingService**(): [`BillingService`](BillingService.md)

#### Returns

[`BillingService`](BillingService.md)

## Properties

### transactions

> **`private`** **transactions**: [`BillingTransaction`](../interfaces/BillingTransaction.md)[] = `[]`

#### Source

billing.ts:51

## Methods

### getAllTransactions()

> **getAllTransactions**(): [`BillingTransaction`](../interfaces/BillingTransaction.md)[]

Get all billing transactions.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)[]

An array of all billing transactions.

#### Source

billing.ts:67

***

### processTransaction()

> **processTransaction**(`transaction`): [`BillingTransaction`](../interfaces/BillingTransaction.md)

Process a billing transaction.

#### Parameters

• **transaction**: [`BillingTransaction`](../interfaces/BillingTransaction.md)

The billing transaction to be processed.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)

The processed billing transaction.

#### Source

billing.ts:58

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
