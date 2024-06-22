[**typedoc-plugin-markdown-examples**](../../README.md) • **Docs**

***

[Home](../../README.md) / [shipping](../README.md) / ShippingRecord

# Interface: ShippingRecord

Interface representing a shipping record.
Defines the structure for storing and tracking information about shipments.

## Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| `address` | `string` | The destination address where the order should be delivered. This is crucial for logistics and routing. | [shipping.ts:26](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/shipping.ts#L26) |
| `orderId` | `string` | Identifier for the order being shipped. Links the shipment to a specific customer order. | [shipping.ts:21](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/shipping.ts#L21) |
| `shipmentId` | `string` | Unique identifier for the shipment. This is used to track and reference the shipment throughout the shipping process. | [shipping.ts:16](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/shipping.ts#L16) |
| `status` | `string` | Current status of the shipment (e.g., "Pending", "Shipped", "Delivered"). Provides updates on the shipment progress. | [shipping.ts:31](https://github.com/typedoc2md/typedoc-plugin-markdown-examples/blob/main/dummy-api/src/shipping.ts#L31) |
