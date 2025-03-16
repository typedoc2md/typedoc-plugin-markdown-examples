[github-wiki-example](../wiki/Home) / [shipping](../wiki/shipping) / ShippingService

# Class: ShippingService

Defined in: [shipping.ts:39](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L39)

Service for managing shipping records.
Provides methods to handle the logistics of order shipments, including recording and tracking shipments.

## Constructors

### new ShippingService()

> **new ShippingService**(): `ShippingService`

#### Returns

`ShippingService`

## Methods

### getAllShipments()

> **getAllShipments**(): [`ShippingRecord`](../wiki/shipping.Interface.ShippingRecord)[]

Defined in: [shipping.ts:61](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L61)

Retrieves all shipping records managed by the service.
Useful for tracking, auditing, and providing customers with updates on their shipment statuses.

#### Returns

[`ShippingRecord`](../wiki/shipping.Interface.ShippingRecord)[]

An array of all shipping records.

***

### shipOrder()

> **shipOrder**(`shipment`): [`ShippingRecord`](../wiki/shipping.Interface.ShippingRecord)

Defined in: [shipping.ts:51](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/shipping.ts#L51)

Ships an order by creating a shipping record and adding it to the list of shipments.
This method simulates the action of shipping an order in a real-world scenario.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shipment` | [`ShippingRecord`](../wiki/shipping.Interface.ShippingRecord) | The shipment record to be added. |

#### Returns

[`ShippingRecord`](../wiki/shipping.Interface.ShippingRecord)

The shipment record that was added to the shipments list.
