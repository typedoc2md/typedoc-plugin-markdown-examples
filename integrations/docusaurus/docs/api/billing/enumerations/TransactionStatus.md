# TransactionStatus

Enum representing different transaction statuses.
These statuses indicate the current state of a billing transaction in the process pipeline.

## Enumeration Members

| Enumeration Member | Value | Description |
| ------ | ------ | ------ |
| `Completed` | `"Completed"` | Transaction has been successfully processed. |
| `Failed` | `"Failed"` | Transaction failed due to an error or rejection. |
| `Pending` | `"Pending"` | Transaction has been initiated but not yet processed. |
