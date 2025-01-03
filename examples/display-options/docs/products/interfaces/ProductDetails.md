[**dummy-typescript-api**](../../README.md)

***

[Home](../../README.md) / [products](../README.md) / ProductDetails

# Interface: ProductDetails

Defined in: [products.ts:43](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L43)

Interface representing product details.
Extends the basic Product interface to include more comprehensive attributes for detailed product management.

## Extends

- [`Product`](Product.md)

## Properties

| Property | Type | Description | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="category"></a> `category` | [`ProductCategory`](../enumerations/ProductCategory.md) | Category of the product as defined by the ProductCategory enum. This categorization helps in organizing products into sections or departments, facilitating easier product discovery and management. | - | [products.ts:54](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L54) |
| <a id="description"></a> `description` | `string` | Detailed textual description of the product. This provides potential buyers with more information about the product's features, usage, and benefits. | - | [products.ts:48](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L48) |
| <a id="name"></a> `name` | `string` | Name of the product. | [`Product`](Product.md).[`name`](Product.md#name) | [products.ts:16](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L16) |
| <a id="price"></a> `price` | `number` | Price of the product in the system's set currency. | [`Product`](Product.md).[`price`](Product.md#price) | [products.ts:18](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L18) |
| <a id="productid"></a> `productId` | `string` | Unique identifier for the product. | [`Product`](Product.md).[`productId`](Product.md#productid) | [products.ts:14](https://github.com/typedoc2md/dummy-typescript-api/blob/main/src/products.ts#L14) |
