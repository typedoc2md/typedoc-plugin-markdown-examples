[**typedoc-plugin-markdown-examples**](../README.md) • **Docs**

***

[Home](../README.md) / BillingModule

# BillingModule

This module provides the necessary types and services for managing billing operations.

It includes enums for payment methods and transaction statuses, interfaces for billing transactions and receipts,
and services to process transactions, manage billing history, and generate receipts.

This module ensures comprehensive handling of billing data and operations, facilitating integrations with various payment providers and internal systems. It serves as a foundation for the financial transaction processing system, providing traceability and accountability through structured data and services.

## Index

### Enumerations

| Enumeration | Description |
| :------ | :------ |
| [PaymentMethod](enumerations/PaymentMethod.md) | Enum representing different types of payment methods. |
| [TransactionStatus](enumerations/TransactionStatus.md) | Enum representing different transaction statuses. |

### Classes

| Class | Description |
| :------ | :------ |
| [BillingHistoryService](classes/BillingHistoryService.md) | Service for managing billing history. |
| [BillingReceiptService](classes/BillingReceiptService.md) | Service for generating billing receipts. |
| [BillingService](classes/BillingService.md) | Service for managing billing transactions. |

### Interfaces

| Interface | Description |
| :------ | :------ |
| [BillingReceipt](interfaces/BillingReceipt.md) | Interface representing a billing receipt. |
| [BillingTransaction](interfaces/BillingTransaction.md) | Interface representing a billing transaction. |
