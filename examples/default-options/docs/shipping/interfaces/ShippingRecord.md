[**Default Options Example**](../../README.md)

***

[Default Options Example](../../modules.md) / [shipping](../README.md) / ShippingRecord

# Interface: ShippingRecord

Defined in: [shipping.ts:12](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L12)

Interface representing a shipping record.
Defines the structure for storing and tracking information about shipments.

## Properties

### address

> **address**: `string`

Defined in: [shipping.ts:26](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L26)

The destination address where the order should be delivered. This is crucial for logistics and routing.

***

### orderId

> **orderId**: `string`

Defined in: [shipping.ts:21](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L21)

Identifier for the order being shipped. Links the shipment to a specific customer order.

***

### shipmentId

> **shipmentId**: `string`

Defined in: [shipping.ts:16](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L16)

Unique identifier for the shipment. This is used to track and reference the shipment throughout the shipping process.

***

### status

> **status**: `string`

Defined in: [shipping.ts:31](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L31)

Current status of the shipment (e.g., "Pending", "Shipped", "Delivered"). Provides updates on the shipment progress.
