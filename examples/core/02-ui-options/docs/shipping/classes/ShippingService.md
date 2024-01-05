**ui-options-example** • API Documentation

***

[Home](../../README.md) / [shipping](../README.md) / ShippingService

# Class: ShippingService

Service for managing shipping records.

## Constructors

### new ShippingService()

```ts
new ShippingService(): ShippingService
```

#### Returns

[`ShippingService`](ShippingService.md)

## Properties

| Modifier | Property | Type |
| :------ | :------ | :------ |
| `private` | `shipments` | [`ShippingRecord`](../interfaces/ShippingRecord.md)[] |

## Methods

### getAllShipments()

```ts
getAllShipments(): ShippingRecord[]
```

Get all shipping records.

#### Returns

[`ShippingRecord`](../interfaces/ShippingRecord.md)[]

An array of all shipping records.

#### Source

shipping.ts:39

***

### shipOrder()

```ts
shipOrder(shipment): ShippingRecord
```

Ship an order.

#### Parameters

| Parameter | Type | Description |
| :------ | :------ | :------ |
| `shipment` | [`ShippingRecord`](../interfaces/ShippingRecord.md) | The shipment record. |

#### Returns

[`ShippingRecord`](../interfaces/ShippingRecord.md)

The shipped record.

#### Source

shipping.ts:30

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
