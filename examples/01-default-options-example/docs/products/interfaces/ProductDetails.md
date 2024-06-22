[**Default Options Example**](../../README.md) • **Docs**

***

[Default Options Example](../../modules.md) / [products](../README.md) / ProductDetails

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

#### Defined in

products.ts:54

***

### description

> **description**: `string`

Detailed textual description of the product. This provides potential buyers with more information about the
product's features, usage, and benefits.

#### Defined in

products.ts:48

***

### name

> **name**: `string`

Name of the product.

#### Inherited from

[`Product`](Product.md).[`name`](Product.md#name)

#### Defined in

products.ts:16

***

### price

> **price**: `number`

Price of the product in the system's set currency.

#### Inherited from

[`Product`](Product.md).[`price`](Product.md#price)

#### Defined in

products.ts:18

***

### productId

> **productId**: `string`

Unique identifier for the product.

#### Inherited from

[`Product`](Product.md).[`productId`](Product.md#productid)

#### Defined in

products.ts:14
