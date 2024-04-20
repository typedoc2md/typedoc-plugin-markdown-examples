**typedoc-plugin-markdown-examples** • [Readme](../../README.md) \| [API](../../modules.md)

***

[typedoc-plugin-markdown-examples](../../README.md) / [ProductsModule](../README.md) / ProductDetails

# Interface: ProductDetails

Interface representing product details.
Extends the basic Product interface to include more comprehensive attributes for detailed product management.

## Extends

- [`Product`](Product.md)

## Properties

### category

> **category**: [`ProductCategory`](../enumerations/ProductCategory.md)

Category of the product as defined by the ProductCategory enum. This categorization helps in organizing products
into sections or departments, facilitating easier product discovery and management.

#### Source

products.ts:54

***

### description

> **description**: `string`

Detailed textual description of the product. This provides potential buyers with more information about the
product's features, usage, and benefits.

#### Source

products.ts:48

***

### name

> **name**: `string`

Name of the product.

#### Inherited from

[`Product`](Product.md).[`name`](Product.md#name)

#### Source

products.ts:16

***

### price

> **price**: `number`

Price of the product in the system's set currency.

#### Inherited from

[`Product`](Product.md).[`price`](Product.md#price)

#### Source

products.ts:18

***

### productId

> **productId**: `string`

Unique identifier for the product.

#### Inherited from

[`Product`](Product.md).[`productId`](Product.md#productid)

#### Source

products.ts:14
