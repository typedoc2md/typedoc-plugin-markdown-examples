[**Default Options Example**](../../README.md)

***

[Default Options Example](../../modules.md) / [billing](../README.md) / TransactionStatus

# Enumeration: TransactionStatus

Defined in: [billing.ts:30](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L30)

Enum representing different transaction statuses.
These statuses indicate the current state of a billing transaction in the process pipeline.

## Enumeration Members

### Completed

> **Completed**: `"Completed"`

Defined in: [billing.ts:35](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L35)

Transaction has been successfully processed.

***

### Failed

> **Failed**: `"Failed"`

Defined in: [billing.ts:38](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L38)

Transaction failed due to an error or rejection.

***

### Pending

> **Pending**: `"Pending"`

Defined in: [billing.ts:32](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/billing.ts#L32)

Transaction has been initiated but not yet processed.
