**default-options-example** • [Readme](../../README.md) \| API

***

[default-options-example](../../modules.md) / [billing](../README.md) / BillingReceiptService

# Class: BillingReceiptService

Service for generating billing receipts.

## Contents

- [Constructors](BillingReceiptService.md#constructors)
    - [new BillingReceiptService](BillingReceiptService.md#constructors)
- [Properties](BillingReceiptService.md#properties)
    - [receipts](BillingReceiptService.md#receipts)
- [Methods](BillingReceiptService.md#methods)
    - [generateReceipt](BillingReceiptService.md#generatereceipt)
    - [getAllReceipts](BillingReceiptService.md#getallreceipts)

## Constructors

### new BillingReceiptService()

> **new BillingReceiptService**(): [`BillingReceiptService`](BillingReceiptService.md)

#### Returns

[`BillingReceiptService`](BillingReceiptService.md)

## Properties

### receipts

> **`private`** **receipts**: [`BillingReceipt`](../interfaces/BillingReceipt.md)[] = `[]`

#### Source

billing.ts:101

## Methods

### generateReceipt()

> **generateReceipt**(`transaction`): [`BillingReceipt`](../interfaces/BillingReceipt.md)

Generate a billing receipt for a transaction.

#### Parameters

• **transaction**: [`BillingTransaction`](../interfaces/BillingTransaction.md)

The billing transaction for which to generate a receipt.

#### Returns

[`BillingReceipt`](../interfaces/BillingReceipt.md)

The generated billing receipt.

#### Source

billing.ts:108

***

### getAllReceipts()

> **getAllReceipts**(): [`BillingReceipt`](../interfaces/BillingReceipt.md)[]

Get all billing receipts.

#### Returns

[`BillingReceipt`](../interfaces/BillingReceipt.md)[]

An array of all billing receipts.

#### Source

billing.ts:122

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)