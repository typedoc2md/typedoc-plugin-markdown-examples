# ShippingRecord

Interface representing a shipping record.
Defines the structure for storing and tracking information about shipments.

## Properties

### address

```ts
address: string;
```

The destination address where the order should be delivered. This is crucial for logistics and routing.

***

### orderId

```ts
orderId: string;
```

Identifier for the order being shipped. Links the shipment to a specific customer order.

***

### shipmentId

```ts
shipmentId: string;
```

Unique identifier for the shipment. This is used to track and reference the shipment throughout the shipping process.

***

### status

```ts
status: string;
```

Current status of the shipment (e.g., "Pending", "Shipped", "Delivered"). Provides updates on the shipment progress.
