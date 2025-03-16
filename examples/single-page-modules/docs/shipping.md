[**dummy-typescript-api**](README.md)

***

[Home](README.md) / shipping

# shipping

This module contains types and services related to shipping.
It includes definitions for shipping records and services to manage the logistics of shipping orders.

## Classes

### ShippingService

Defined in: [shipping.ts:39](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L39)

Service for managing shipping records.
Provides methods to handle the logistics of order shipments, including recording and tracking shipments.

#### Constructors

##### new ShippingService()

```ts
new ShippingService(): ShippingService
```

###### Returns

[`ShippingService`](#shippingservice)

#### Methods

##### getAllShipments()

```ts
getAllShipments(): ShippingRecord[]
```

Defined in: [shipping.ts:61](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L61)

Retrieves all shipping records managed by the service.
Useful for tracking, auditing, and providing customers with updates on their shipment statuses.

###### Returns

[`ShippingRecord`](#shippingrecord)[]

An array of all shipping records.

##### shipOrder()

```ts
shipOrder(shipment): ShippingRecord
```

Defined in: [shipping.ts:51](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L51)

Ships an order by creating a shipping record and adding it to the list of shipments.
This method simulates the action of shipping an order in a real-world scenario.

###### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shipment` | [`ShippingRecord`](#shippingrecord) | The shipment record to be added. |

###### Returns

[`ShippingRecord`](#shippingrecord)

The shipment record that was added to the shipments list.

## Interfaces

### ShippingRecord

Defined in: [shipping.ts:12](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L12)

Interface representing a shipping record.
Defines the structure for storing and tracking information about shipments.

#### Properties

| Property | Type | Description | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="address"></a> `address` | `string` | The destination address where the order should be delivered. This is crucial for logistics and routing. | [shipping.ts:26](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L26) |
| <a id="orderid"></a> `orderId` | `string` | Identifier for the order being shipped. Links the shipment to a specific customer order. | [shipping.ts:21](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L21) |
| <a id="shipmentid"></a> `shipmentId` | `string` | Unique identifier for the shipment. This is used to track and reference the shipment throughout the shipping process. | [shipping.ts:16](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L16) |
| <a id="status"></a> `status` | `string` | Current status of the shipment (e.g., "Pending", "Shipped", "Delivered"). Provides updates on the shipment progress. | [shipping.ts:31](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L31) |
