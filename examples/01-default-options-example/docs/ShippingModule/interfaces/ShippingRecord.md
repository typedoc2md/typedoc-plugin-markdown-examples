[**Default Options Example**](../../README.md) • **Docs**

***

[Default Options Example](../../modules.md) / [ShippingModule](../README.md) / ShippingRecord

# Interface: ShippingRecord

Interface representing a shipping record.
Defines the structure for storing and tracking information about shipments.

## Properties

### address

> **address**: `string`

The destination address where the order should be delivered. This is crucial for logistics and routing.

#### Source

[shipping.ts:25](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/shipping.ts#L25)

***

### orderId

> **orderId**: `string`

Identifier for the order being shipped. Links the shipment to a specific customer order.

#### Source

[shipping.ts:20](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/shipping.ts#L20)

***

### shipmentId

> **shipmentId**: `string`

Unique identifier for the shipment. This is used to track and reference the shipment throughout the shipping process.

#### Source

[shipping.ts:15](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/shipping.ts#L15)

***

### status

> **status**: `string`

Current status of the shipment (e.g., "Pending", "Shipped", "Delivered"). Provides updates on the shipment progress.

#### Source

[shipping.ts:30](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/e63f907fc136a040020fb1d12b594c3baad2ce3b/examples/src/shipping.ts#L30)
