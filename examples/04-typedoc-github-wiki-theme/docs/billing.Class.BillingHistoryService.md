[github-wiki-example](../wiki/Home) / [billing](../wiki/billing) / BillingHistoryService

# Class: BillingHistoryService

Service for managing billing history.

## Constructors

### new BillingHistoryService()

> **new BillingHistoryService**(): [`BillingHistoryService`](../wiki/billing.Class.BillingHistoryService)

#### Returns

[`BillingHistoryService`](../wiki/billing.Class.BillingHistoryService)

## Properties

### history

> **`private`** **history**: [`BillingTransaction`](../wiki/billing.Interface.BillingTransaction)[] = `[]`

#### Source

[billing.ts:77](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/04-typedoc-github-wiki-theme/src/billing.ts#L77)

## Methods

### addTransactionToHistory()

> **addTransactionToHistory**(`transaction`): `void`

Add a transaction to the billing history.

#### Parameters

• `transaction`: [`BillingTransaction`](../wiki/billing.Interface.BillingTransaction)

The billing transaction to be added to the history.

#### Returns

`void`

#### Source

[billing.ts:83](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/04-typedoc-github-wiki-theme/src/billing.ts#L83)

***

### getBillingHistory()

> **getBillingHistory**(): [`BillingTransaction`](../wiki/billing.Interface.BillingTransaction)[]

Get the entire billing history.

#### Returns

[`BillingTransaction`](../wiki/billing.Interface.BillingTransaction)[]

An array of all billing transactions in the history.

#### Source

[billing.ts:91](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/5f3948e/examples/04-typedoc-github-wiki-theme/src/billing.ts#L91)

***

Generated using [TypeDoc](https://typedoc.org) and [typedoc-plugin-markdown](https://typedoc-plugin-markdown.org).
