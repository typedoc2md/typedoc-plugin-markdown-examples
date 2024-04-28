[typedoc-plugin-markdown-examples](../../README.md) • [Readme](../../README.md) \| Docs

***

[typedoc-plugin-markdown-examples](../../modules.md) / [ShippingModule](../README.md) / ShippingRecord

# Interface: ShippingRecord

Interface representing a shipping record.
Defines the structure for storing and tracking information about shipments.

## Properties

### address

> **address**: `string`

The destination address where the order should be delivered. This is crucial for logistics and routing.

#### Source

[shipping.ts:25](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/shipping.ts#L25)

***

### orderId

> **orderId**: `string`

Identifier for the order being shipped. Links the shipment to a specific customer order.

#### Source

[shipping.ts:20](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/shipping.ts#L20)

***

### shipmentId

> **shipmentId**: `string`

Unique identifier for the shipment. This is used to track and reference the shipment throughout the shipping process.

#### Source

[shipping.ts:15](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/shipping.ts#L15)

***

### status

> **status**: `string`

Current status of the shipment (e.g., "Pending", "Shipped", "Delivered"). Provides updates on the shipment progress.

#### Source

[shipping.ts:30](https://github.com/typedoc-plugin-markdown/typedoc-plugin-markdown-examples/blob/20d21e441b853b3f7b2de364c070522db75798b0/examples/src/shipping.ts#L30)
