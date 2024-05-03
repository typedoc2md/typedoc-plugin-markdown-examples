[**typedoc-plugin-markdown-examples**](../../README.md) • **Docs**

***

[Home](../../README.md) / [CustomerModule](../README.md) / Customer

# Interface: Customer

Interface representing a customer.
Stores comprehensive details about a customer necessary for various business operations.

## Properties

| Property | Type | Description |
| :------ | :------ | :------ |
| `address` | `string` | The physical address of the customer, used for shipping and billing purposes. |
| `customerId` | `string` | A unique identifier for the customer, essential for tracking and customer management. |
| `email` | `string` | The primary email address of the customer, used for communication and digital receipts. |
| `name` | `string` | The full name of the customer, used for personalization and identification. |
| `type` | [`CustomerType`](../enumerations/CustomerType.md) | The classification of the customer, which can affect the level of service and pricing they receive. |
