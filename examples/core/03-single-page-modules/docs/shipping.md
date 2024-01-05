[single-page-modules-example](README.md) / shipping

# shipping

This module contains types and services related to shipping.

## Contents

- [Classes](shipping.md#classes)
    - [ShippingService](shipping.md#shippingservice)
- [Interfaces](shipping.md#interfaces)
    - [ShippingRecord](shipping.md#shippingrecord)

## Classes

### ShippingService

Service for managing shipping records.

#### Constructors

##### new ShippingService()

> **new ShippingService**(): [`ShippingService`](shipping.md#shippingservice)

###### Returns

[`ShippingService`](shipping.md#shippingservice)

#### Properties

##### shipments

> **`private`** **shipments**: [`ShippingRecord`](shipping.md#shippingrecord)[] = `[]`

###### Source

shipping.ts:23

#### Methods

##### getAllShipments()

> **getAllShipments**(): [`ShippingRecord`](shipping.md#shippingrecord)[]

Get all shipping records.

###### Returns

[`ShippingRecord`](shipping.md#shippingrecord)[]

An array of all shipping records.

###### Source

shipping.ts:39

##### shipOrder()

> **shipOrder**(`shipment`): [`ShippingRecord`](shipping.md#shippingrecord)

Ship an order.

###### Parameters

• **shipment**: [`ShippingRecord`](shipping.md#shippingrecord)

The shipment record.

###### Returns

[`ShippingRecord`](shipping.md#shippingrecord)

The shipped record.

###### Source

shipping.ts:30

## Interfaces

### ShippingRecord

Interface representing a shipping record.

#### Properties

##### address

> **address**: `string`

###### Source

shipping.ts:14

##### orderId

> **orderId**: `string`

###### Source

shipping.ts:13

##### shipmentId

> **shipmentId**: `string`

###### Source

shipping.ts:12

##### status

> **status**: `string`

###### Source

shipping.ts:15

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
