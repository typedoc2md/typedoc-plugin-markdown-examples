[github-wiki-example](../wiki/Home) / [billing](../wiki/billing) / BillingService

# Class: BillingService

Service for managing billing transactions.

## Constructors

### new BillingService()

> **new BillingService**(): [`BillingService`](../wiki/billing.Class.BillingService)

#### Returns

[`BillingService`](../wiki/billing.Class.BillingService)

## Properties

### transactions

> **`private`** **transactions**: [`BillingTransaction`](../wiki/billing.Interface.BillingTransaction)[] = `[]`

#### Source

[billing.ts:51](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/04-typedoc-github-wiki-theme/src/billing.ts#L51)

## Methods

### getAllTransactions()

> **getAllTransactions**(): [`BillingTransaction`](../wiki/billing.Interface.BillingTransaction)[]

Get all billing transactions.

#### Returns

[`BillingTransaction`](../wiki/billing.Interface.BillingTransaction)[]

An array of all billing transactions.

#### Source

[billing.ts:67](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/04-typedoc-github-wiki-theme/src/billing.ts#L67)

***

### processTransaction()

> **processTransaction**(`transaction`): [`BillingTransaction`](../wiki/billing.Interface.BillingTransaction)

Process a billing transaction.

#### Parameters

• **transaction**: [`BillingTransaction`](../wiki/billing.Interface.BillingTransaction)

The billing transaction to be processed.

#### Returns

[`BillingTransaction`](../wiki/billing.Interface.BillingTransaction)

The processed billing transaction.

#### Source

[billing.ts:58](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/04-typedoc-github-wiki-theme/src/billing.ts#L58)
