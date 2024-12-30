[github-wiki-example](../wiki/Home) / [billing](../wiki/billing) / BillingService

# Class: BillingService

Defined in: [billing.ts:105](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L105)

Service for managing billing transactions.
Provides functionality to process and retrieve billing transactions.

## Constructors

### new BillingService()

> **new BillingService**(): [`BillingService`](../wiki/billing.Class.BillingService)

#### Returns

[`BillingService`](../wiki/billing.Class.BillingService)

## Methods

### getAllTransactions()

> **getAllTransactions**(): [`BillingTransaction`](../wiki/billing.Interface.BillingTransaction)[]

Defined in: [billing.ts:125](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L125)

Retrieves all the billing transactions that have been processed.
Useful for audits and general transaction management.

#### Returns

[`BillingTransaction`](../wiki/billing.Interface.BillingTransaction)[]

An array of all billing transactions.

***

### processTransaction()

> **processTransaction**(`transaction`): [`BillingTransaction`](../wiki/billing.Interface.BillingTransaction)

Defined in: [billing.ts:115](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L115)

Processes a billing transaction by adding it to the list of transactions.
This simulates the transaction execution and storage in a production environment.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `transaction` | [`BillingTransaction`](../wiki/billing.Interface.BillingTransaction) | The billing transaction to be processed. |

#### Returns

[`BillingTransaction`](../wiki/billing.Interface.BillingTransaction)

The processed billing transaction, now stored in the service.
