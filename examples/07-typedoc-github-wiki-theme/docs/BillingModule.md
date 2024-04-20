[github-wiki-example](../wiki/Home) / BillingModule

# BillingModule

This module provides the necessary types and services for managing billing operations.

It includes enums for payment methods and transaction statuses, interfaces for billing transactions and receipts,
and services to process transactions, manage billing history, and generate receipts.

This module ensures comprehensive handling of billing data and operations, facilitating integrations with various payment providers and internal systems. It serves as a foundation for the financial transaction processing system, providing traceability and accountability through structured data and services.

## Index

### Enumerations

| Enumeration | Description |
| :------ | :------ |
| [PaymentMethod](../wiki/BillingModule.Enumeration.PaymentMethod) | Enum representing different types of payment methods. |
| [TransactionStatus](../wiki/BillingModule.Enumeration.TransactionStatus) | Enum representing different transaction statuses. |

### Classes

| Class | Description |
| :------ | :------ |
| [BillingHistoryService](../wiki/BillingModule.Class.BillingHistoryService) | Service for managing billing history. |
| [BillingReceiptService](../wiki/BillingModule.Class.BillingReceiptService) | Service for generating billing receipts. |
| [BillingService](../wiki/BillingModule.Class.BillingService) | Service for managing billing transactions. |

### Interfaces

| Interface | Description |
| :------ | :------ |
| [BillingReceipt](../wiki/BillingModule.Interface.BillingReceipt) | Interface representing a billing receipt. |
| [BillingTransaction](../wiki/BillingModule.Interface.BillingTransaction) | Interface representing a billing transaction. |
