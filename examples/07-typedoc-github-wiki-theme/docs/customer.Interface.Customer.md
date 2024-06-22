[github-wiki-example](../wiki/Home) / [customer](../wiki/customer) / Customer

# Interface: Customer

Interface representing a customer.
Stores comprehensive details about a customer necessary for various business operations.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `address` | `string` | The physical address of the customer, used for shipping and billing purposes. | customer.ts:32 |
| `customerId` | `string` | A unique identifier for the customer, essential for tracking and customer management. | customer.ts:26 |
| `email` | `string` | The primary email address of the customer, used for communication and digital receipts. | customer.ts:30 |
| `name` | `string` | The full name of the customer, used for personalization and identification. | customer.ts:28 |
| `type` | [`CustomerType`](../wiki/customer.Enumeration.CustomerType) | The classification of the customer, which can affect the level of service and pricing they receive. | customer.ts:34 |
