**default-options-example** • [Readme](../../README.md) \| [API](../../modules.md)

***

[default-options-example](../../README.md) / [billing](../README.md) / BillingService

# Class: BillingService

Service for managing billing transactions.

## Constructors

### new BillingService()

> **new BillingService**(): [`BillingService`](BillingService.md)

#### Returns

[`BillingService`](BillingService.md)

## Properties

### transactions

> **`private`** **transactions**: [`BillingTransaction`](../interfaces/BillingTransaction.md)[] = `[]`

#### Source

[billing.ts:51](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/billing.ts#L51)

## Methods

### getAllTransactions()

> **getAllTransactions**(): [`BillingTransaction`](../interfaces/BillingTransaction.md)[]

Get all billing transactions.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)[]

An array of all billing transactions.

#### Source

[billing.ts:67](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/billing.ts#L67)

***

### processTransaction()

> **processTransaction**(`transaction`): [`BillingTransaction`](../interfaces/BillingTransaction.md)

Process a billing transaction.

#### Parameters

• `transaction`: [`BillingTransaction`](../interfaces/BillingTransaction.md)

The billing transaction to be processed.

#### Returns

[`BillingTransaction`](../interfaces/BillingTransaction.md)

The processed billing transaction.

#### Source

[billing.ts:58](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/01-typedoc-plugin-markdown/src/billing.ts#L58)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
