**default-options-example** • [Readme](../../README.md) \| [API](../../modules.md)

***

[default-options-example](../../README.md) / [shipping](../README.md) / ShippingService

# Class: ShippingService

Service for managing shipping records.

## Constructors

### new ShippingService()

> **new ShippingService**(): [`ShippingService`](ShippingService.md)

#### Returns

[`ShippingService`](ShippingService.md)

## Properties

### shipments

> **`private`** **shipments**: [`ShippingRecord`](../interfaces/ShippingRecord.md)[] = `[]`

#### Source

[shipping.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/4bb8c5d/examples/01-typedoc-plugin-markdown/src/shipping.ts#L23)

## Methods

### getAllShipments()

> **getAllShipments**(): [`ShippingRecord`](../interfaces/ShippingRecord.md)[]

Get all shipping records.

#### Returns

[`ShippingRecord`](../interfaces/ShippingRecord.md)[]

An array of all shipping records.

#### Source

[shipping.ts:39](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/4bb8c5d/examples/01-typedoc-plugin-markdown/src/shipping.ts#L39)

***

### shipOrder()

> **shipOrder**(`shipment`): [`ShippingRecord`](../interfaces/ShippingRecord.md)

Ship an order.

#### Parameters

• **shipment**: [`ShippingRecord`](../interfaces/ShippingRecord.md)

The shipment record.

#### Returns

[`ShippingRecord`](../interfaces/ShippingRecord.md)

The shipped record.

#### Source

[shipping.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/4bb8c5d/examples/01-typedoc-plugin-markdown/src/shipping.ts#L30)
