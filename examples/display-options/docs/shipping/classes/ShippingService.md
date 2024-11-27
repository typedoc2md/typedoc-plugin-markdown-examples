[**dummy-typescript-api**](../../README.md)

***

[Home](../../README.md) / [shipping](../README.md) / ShippingService

# Class: ShippingService

Service for managing shipping records.
Provides methods to handle the logistics of order shipments, including recording and tracking shipments.

## Constructors

### new ShippingService()

```ts
new ShippingService(): ShippingService
```

#### Returns

[`ShippingService`](ShippingService.md)

## Methods

### getAllShipments()

```ts
getAllShipments(): ShippingRecord[]
```

Retrieves all shipping records managed by the service.
Useful for tracking, auditing, and providing customers with updates on their shipment statuses.

#### Returns

[`ShippingRecord`](../interfaces/ShippingRecord.md)[]

An array of all shipping records.

#### Defined in

[shipping.ts:61](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L61)

***

### shipOrder()

```ts
shipOrder(shipment): ShippingRecord
```

Ships an order by creating a shipping record and adding it to the list of shipments.
This method simulates the action of shipping an order in a real-world scenario.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shipment` | [`ShippingRecord`](../interfaces/ShippingRecord.md) | The shipment record to be added. |

#### Returns

[`ShippingRecord`](../interfaces/ShippingRecord.md)

The shipment record that was added to the shipments list.

#### Defined in

[shipping.ts:51](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L51)
