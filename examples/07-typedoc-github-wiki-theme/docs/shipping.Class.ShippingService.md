[github-wiki-example](../wiki/Home) / [shipping](../wiki/shipping) / ShippingService

# Class: ShippingService

Service for managing shipping records.
Provides methods to handle the logistics of order shipments, including recording and tracking shipments.

## Constructors

### new ShippingService()

> **new ShippingService**(): [`ShippingService`](../wiki/shipping.Class.ShippingService)

#### Returns

[`ShippingService`](../wiki/shipping.Class.ShippingService)

## Methods

### getAllShipments()

> **getAllShipments**(): [`ShippingRecord`](../wiki/shipping.Interface.ShippingRecord)[]

Retrieves all shipping records managed by the service.
Useful for tracking, auditing, and providing customers with updates on their shipment statuses.

#### Returns

[`ShippingRecord`](../wiki/shipping.Interface.ShippingRecord)[]

An array of all shipping records.

#### Defined in

shipping.ts:61

***

### shipOrder()

> **shipOrder**(`shipment`): [`ShippingRecord`](../wiki/shipping.Interface.ShippingRecord)

Ships an order by creating a shipping record and adding it to the list of shipments.
This method simulates the action of shipping an order in a real-world scenario.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `shipment` | [`ShippingRecord`](../wiki/shipping.Interface.ShippingRecord) | The shipment record to be added. |

#### Returns

[`ShippingRecord`](../wiki/shipping.Interface.ShippingRecord)

The shipment record that was added to the shipments list.

#### Defined in

shipping.ts:51
