**typedoc-plugin-markdown-examples** • [Readme](../../README.md) \| [API](../../modules.md)

***

[typedoc-plugin-markdown-examples](../../README.md) / [ShippingModule](../README.md) / ShippingRecord

# Interface: ShippingRecord

Interface representing a shipping record.
Defines the structure for storing and tracking information about shipments.

## Properties

### address

> **address**: `string`

The destination address where the order should be delivered. This is crucial for logistics and routing.

#### Source

shipping.ts:25

***

### orderId

> **orderId**: `string`

Identifier for the order being shipped. Links the shipment to a specific customer order.

#### Source

shipping.ts:20

***

### shipmentId

> **shipmentId**: `string`

Unique identifier for the shipment. This is used to track and reference the shipment throughout the shipping process.

#### Source

shipping.ts:15

***

### status

> **status**: `string`

Current status of the shipment (e.g., "Pending", "Shipped", "Delivered"). Provides updates on the shipment progress.

#### Source

shipping.ts:30
