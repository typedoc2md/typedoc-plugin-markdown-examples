**ui-options-example** • [API](../../README.md)

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

| Property | Modifier | Type |
| :------ | :------ | :------ |
| `shipments` | `private` | [`ShippingRecord`](../interfaces/ShippingRecord.md)[] |

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

[shipping.ts:39](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/shipping.ts#L39)

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

[shipping.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/d1574a7/examples/01-typedoc-plugin-markdown/src/shipping.ts#L30)
