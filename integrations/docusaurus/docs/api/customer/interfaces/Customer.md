# Customer

Interface representing a customer.
Stores comprehensive details about a customer necessary for various business operations.

## Properties

### address

```ts
address: string;
```

The physical address of the customer, used for shipping and billing purposes.

***

### customerId

```ts
customerId: string;
```

A unique identifier for the customer, essential for tracking and customer management.

***

### email

```ts
email: string;
```

The primary email address of the customer, used for communication and digital receipts.

***

### name

```ts
name: string;
```

The full name of the customer, used for personalization and identification.

***

### type

```ts
type: CustomerType;
```

The classification of the customer, which can affect the level of service and pricing they receive.
