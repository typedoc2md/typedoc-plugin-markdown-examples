**default-options-example** • [Readme](../../README.md) \| API

***

[default-options-example](../../modules.md) / [shipping](../README.md) / ShippingService

# Class: ShippingService

Service for managing shipping records.

## Contents

- [Constructors](ShippingService.md#constructors)
    - [new ShippingService](ShippingService.md#constructors)
- [Properties](ShippingService.md#properties)
    - [shipments](ShippingService.md#shipments)
- [Methods](ShippingService.md#methods)
    - [getAllShipments](ShippingService.md#getallshipments)
    - [shipOrder](ShippingService.md#shiporder)

## Constructors

### new ShippingService()

> **new ShippingService**(): [`ShippingService`](ShippingService.md)

#### Returns

[`ShippingService`](ShippingService.md)

## Properties

### shipments

> **`private`** **shipments**: [`ShippingRecord`](../interfaces/ShippingRecord.md)[] = `[]`

#### Source

shipping.ts:23

## Methods

### getAllShipments()

> **getAllShipments**(): [`ShippingRecord`](../interfaces/ShippingRecord.md)[]

Get all shipping records.

#### Returns

[`ShippingRecord`](../interfaces/ShippingRecord.md)[]

An array of all shipping records.

#### Source

shipping.ts:39

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

shipping.ts:30

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
