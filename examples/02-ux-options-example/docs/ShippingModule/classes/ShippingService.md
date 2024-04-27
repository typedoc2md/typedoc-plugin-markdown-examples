**typedoc-plugin-markdown-examples** • [API](../../README.md)

***

[Home](../../README.md) / [ShippingModule](../README.md) / ShippingService

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

## Properties

| Property | Modifier | Type | Default value | Description |
| :------ | :------ | :------ | :------ | :------ |
| `shipments` | `private` | [`ShippingRecord`](../interfaces/ShippingRecord.md)[] | `[]` | Stores all shipment records. This array acts as a database to keep track of all shipments handled by the service. |

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

#### Source

[shipping.ts:60](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/shipping.ts#L60)

***

### shipOrder()

```ts
shipOrder(shipment): ShippingRecord
```

Ships an order by creating a shipping record and adding it to the list of shipments.
This method simulates the action of shipping an order in a real-world scenario.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `shipment` | [`ShippingRecord`](../interfaces/ShippingRecord.md) | The shipment record to be added. |

#### Returns

[`ShippingRecord`](../interfaces/ShippingRecord.md)

The shipment record that was added to the shipments list.

#### Source

[shipping.ts:50](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d2a811c92870a7c2dc8ea4f9aacd73d076444ff1/examples/src/shipping.ts#L50)
