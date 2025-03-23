[**dummy-typescript-api**](../../README.md)

***

[dummy-typescript-api](../../README.md) / [products](../README.md) / ProductDetails

# Interface: ProductDetails

Defined in: [products.ts:43](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L43)

Interface representing product details.
Extends the basic Product interface to include more comprehensive attributes for detailed product management.

## Extends

- [`Product`](Product.md)

## Properties

### category

```ts
category: ProductCategory;
```

Defined in: [products.ts:54](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L54)

Category of the product as defined by the ProductCategory enum. This categorization helps in organizing products
into sections or departments, facilitating easier product discovery and management.

***

### description

```ts
description: string;
```

Defined in: [products.ts:48](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L48)

Detailed textual description of the product. This provides potential buyers with more information about the
product's features, usage, and benefits.

***

### name

```ts
name: string;
```

Defined in: [products.ts:16](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L16)

Name of the product.

#### Inherited from

[`Product`](Product.md).[`name`](Product.md#name)

***

### price

```ts
price: number;
```

Defined in: [products.ts:18](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L18)

Price of the product in the system's set currency.

#### Inherited from

[`Product`](Product.md).[`price`](Product.md#price)

***

### productId

```ts
productId: string;
```

Defined in: [products.ts:14](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L14)

Unique identifier for the product.

#### Inherited from

[`Product`](Product.md).[`productId`](Product.md#productid)
