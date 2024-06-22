[github-wiki-example](../wiki/Home) / [billing](../wiki/billing) / TransactionStatus

# Enumeration: TransactionStatus

Enum representing different transaction statuses.
These statuses indicate the current state of a billing transaction in the process pipeline.

## Enumeration Members

| Enumeration Member | Value | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `Completed` | `"Completed"` | Transaction has been successfully processed. | [billing.ts:35](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/billing.ts#L35) |
| `Failed` | `"Failed"` | Transaction failed due to an error or rejection. | [billing.ts:38](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/billing.ts#L38) |
| `Pending` | `"Pending"` | Transaction has been initiated but not yet processed. | [billing.ts:32](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/billing.ts#L32) |
