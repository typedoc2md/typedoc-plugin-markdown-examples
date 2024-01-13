[single-page-modules-example](README.md) / shipping

# shipping

This module contains types and services related to shipping.

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

[shipping.ts:23](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/ce7cd91/examples/core/src/shipping.ts#L23)

#### Methods

##### getAllShipments()

> **getAllShipments**(): [`ShippingRecord`](shipping.md#shippingrecord)[]

Get all shipping records.

###### Returns

[`ShippingRecord`](shipping.md#shippingrecord)[]

An array of all shipping records.

###### Source

[shipping.ts:39](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/ce7cd91/examples/core/src/shipping.ts#L39)

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

[shipping.ts:30](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/ce7cd91/examples/core/src/shipping.ts#L30)

## Interfaces

### ShippingRecord

Interface representing a shipping record.

#### Properties

##### address

> **address**: `string`

###### Source

[shipping.ts:14](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/ce7cd91/examples/core/src/shipping.ts#L14)

##### orderId

> **orderId**: `string`

###### Source

[shipping.ts:13](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/ce7cd91/examples/core/src/shipping.ts#L13)

##### shipmentId

> **shipmentId**: `string`

###### Source

[shipping.ts:12](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/ce7cd91/examples/core/src/shipping.ts#L12)

##### status

> **status**: `string`

###### Source

[shipping.ts:15](https://github.com/tgreyuk/typedoc-plugin-markdown-examples/blob/ce7cd91/examples/core/src/shipping.ts#L15)

***

Generated using [typedoc-plugin-markdown](https://www.npmjs.com/package/typedoc-plugin-markdown) and [TypeDoc](https://typedoc.org/)
