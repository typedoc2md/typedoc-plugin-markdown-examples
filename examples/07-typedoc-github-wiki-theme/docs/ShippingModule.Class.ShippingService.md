[github-wiki-example](../wiki/Home) / [ShippingModule](../wiki/ShippingModule) / ShippingService

# Class: ShippingService

Service for managing shipping records.
Provides methods to handle the logistics of order shipments, including recording and tracking shipments.

## Constructors

### new ShippingService()

> **new ShippingService**(): [`ShippingService`](../wiki/ShippingModule.Class.ShippingService)

#### Returns

[`ShippingService`](../wiki/ShippingModule.Class.ShippingService)

## Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `shipments` | `private` | [`ShippingRecord`](../wiki/ShippingModule.Interface.ShippingRecord)[] | `[]` | Stores all shipment records. This array acts as a database to keep track of all shipments handled by the service. |

## Methods

### getAllShipments()

> **getAllShipments**(): [`ShippingRecord`](../wiki/ShippingModule.Interface.ShippingRecord)[]

Retrieves all shipping records managed by the service.
Useful for tracking, auditing, and providing customers with updates on their shipment statuses.

#### Returns

[`ShippingRecord`](../wiki/ShippingModule.Interface.ShippingRecord)[]

An array of all shipping records.

#### Source

shipping.ts:60

***

### shipOrder()

> **shipOrder**(`shipment`): [`ShippingRecord`](../wiki/ShippingModule.Interface.ShippingRecord)

Ships an order by creating a shipping record and adding it to the list of shipments.
This method simulates the action of shipping an order in a real-world scenario.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `shipment` | [`ShippingRecord`](../wiki/ShippingModule.Interface.ShippingRecord) | The shipment record to be added. |

#### Returns

[`ShippingRecord`](../wiki/ShippingModule.Interface.ShippingRecord)

The shipment record that was added to the shipments list.

#### Source

shipping.ts:50
