**default-options-example** • [Readme](../../README.md) \| API

***

[default-options-example](../../modules.md) / [billing](../README.md) / BillingHistoryService

# Class: BillingHistoryService

Service for managing billing history.

## Contents

- [Constructors](BillingHistoryService.md#constructors)
    - [new BillingHistoryService](BillingHistoryService.md#constructors)
- [Properties](BillingHistoryService.md#properties)
    - [history](BillingHistoryService.md#history)
- [Methods](BillingHistoryService.md#methods)
    - [addTransactionToHistory](BillingHistoryService.md#addtransactiontohistory)
    - [getBillingHistory](BillingHistoryService.md#getbillinghistory)

## Constructors

### new BillingHistoryService()

> **new BillingHistoryService**(): [`BillingHistoryService`](BillingHistoryService.md)

#### Returns

[`BillingHistoryService`](BillingHistoryService.md)

## Properties

### history

> **`private`** **history**: [`BillingTransaction`](../interfaces/BillingTransaction.md)[] = `[]`

#### Source

billing.ts:77

## Methods

### addTransactionToHistory()

> **addTransactionToHistory**(`transaction`): `void`

Add a transaction to the billing history.

#### Parameters

• **transaction**: [`BillingTransaction`](../interfaces/BillingTransaction.md)

The billing transaction to be added to the history.

#### Returns

`void`

#### Source

billing.ts:83

***

### getBillingHistory()

> **getBillingHistory**(): [`BillingTransaction`](../interfaces/BillingTransaction.md)[]

Get the entire billing history.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)[]

An array of all billing transactions in the history.

#### Source

billing.ts:91

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
